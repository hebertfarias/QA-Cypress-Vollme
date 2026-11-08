const hasCredentials = Boolean(Cypress.env("email") && Cypress.env("senha"));
const describeWithCredentials = hasCredentials ? describe : describe.skip;

describeWithCredentials("Testes em API", () => {
  context("Testes em rotas com usuário autorizado", () => {
    beforeEach(() => {
      cy.fixture("especialistas").as("especialistas");
      cy.loginApi(Cypress.env("email"), Cypress.env("senha"));
    });

    it("GET via url front para teste em resposta da home", () => {
      cy.request("GET", "/").should((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it("Deve verificar se o token de autenticação é retornado após login via POST na API", () => {
      cy.get("@token").should("exist");
    });

    it("Deve verificar se o usuário está autenticado corretamente via POST na API", () => {
      cy.get("@token").then((token) => {
        expect(token).to.exist;
      });
    });
  });

  context("Validações em respostas da API", () => {
    beforeEach(() => {
      cy.loginApi(Cypress.env("email"), Cypress.env("senha"));
    });

    it("POST cadastra uma clínica e retorna HTTP 201", () => {
      const identificador = Date.now();

      cy.request({
        method: "POST",
        url: Cypress.env("api_clinica"),
        body: {
          nome: `Clínica Cypress ${identificador}`,
          email: `cypress-${identificador}@example.com`,
          senha: "SenhaTeste123",
          endereco: {
            cep: "57000000",
            rua: "Rua dos Testes",
            numero: 100,
            complemento: "Sala de automação",
            estado: "AL"
          }
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body.nome).to.include("Clínica Cypress");
        expect(response.body.email).to.include("@example.com");
      });
    });

    it("Rejeita cadastro de clínica sem endereço com HTTP 400", () => {
      cy.request({
        method: "POST",
        url: Cypress.env("api_clinica"),
        body: {
          nome: "Clínica incompleta",
          email: "incompleta@example.com",
          senha: "SenhaTeste123"
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq(
          "Informe nome, e-mail, senha e endereço completo da clínica."
        );
      });
    });
  });
});
