# QA Automation — Vollmed

Projeto de automação de testes web e de API com Cypress para a aplicação Vollmed.

## Recursos
- Login web com `cy.session()`.
- Login via API com `cy.request()` e validações de status, autenticação e token.
- Cenários de cadastro de clínica e validação de payload inválido.
- Comandos customizados para fluxos de cadastro.
- Cypress, Faker, Mochawesome e cypress-plugin-api.
- Execução em viewport desktop/tablet e lint com ESLint.

## Requisitos
- Node.js 20.
- Aplicação web e API disponíveis localmente.

## Instalação e execução
```bash
npm ci
npm test
npm run test:tablet
npm run lint
npm run cy:open
```

Para executar os testes E2E localmente, inicie primeiro a API (em `server/`) e a aplicação web (em `web/`). Configure no ambiente do backend as variáveis `SECRET` e `SECRET_KEY`; use valores exclusivos de desenvolvimento/teste.

## Configuração segura
Não mantenha e-mail ou senha reais no código ou no repositório. Configure as variáveis de ambiente:

```bash
export CYPRESS_EMAIL="email-de-uma-clinica-de-teste"
export CYPRESS_PASSWORD="senha-da-clinica-de-teste"
export CYPRESS_BASE_URL="http://localhost:3000"
export CYPRESS_API_LOGIN="http://localhost:8080/auth/login"
export CYPRESS_API_CLINICA="http://localhost:8080/clinica"
export CYPRESS_API_ESPECIALISTA="http://localhost:8080/especialista"
```

No GitHub Actions, cadastre `CYPRESS_EMAIL` e `CYPRESS_PASSWORD` como Actions Secrets. Use uma conta de clínica exclusiva para testes. O workflow valida a presença dos dois secrets e falha imediatamente se estiverem ausentes, evitando uma execução verde com cenários autenticados ignorados. Localmente, as suítes que exigem login são ignoradas quando as credenciais não são informadas.

## CI
O workflow instala as dependências raiz, backend e frontend, compila o backend, valida o build do frontend, inicia os serviços e executa os cenários Cypress. O backend usa segredos efêmeros exclusivos do job para JWT e criptografia; nenhum segredo de produção é necessário. A API só começa a aceitar conexões depois da inicialização do banco SQLite. Logs do frontend/backend e evidências de teste são publicados como artefatos.

## Cypress Cloud
O projeto possui um identificador de projeto Cypress Cloud configurado. A gravação de execuções não é obrigatória para o workflow de CI.

## Observações
A aplicação web e a API precisam estar em execução. Os testes dependem dos seletores e endpoints do ambiente Vollmed; valide esses serviços antes de interpretar falhas como defeitos da suíte.
