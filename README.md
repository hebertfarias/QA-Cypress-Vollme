# QA Automation — Vollmed

Projeto de automação de testes web e de API com Cypress para a aplicação Vollmed.

## Cobertura e recursos identificados

- Comando customizado de login web com `cy.session()`.
- Login via API com `cy.request()` e validações de status, autenticação e token.
- Comando de apoio ao cadastro de especialista.
- Cypress, Faker, Mochawesome e cypress-plugin-api.
- Execução em viewport desktop/tablet e suporte a lint com ESLint.

## Requisitos

- Node.js 20 (recomendado)
- Aplicação web disponível em `CYPRESS_BASE_URL`.
- API disponível nos endereços configurados abaixo.

## Instalação

```bash
npm install
```

## Configuração segura

Não mantenha e-mail ou senha reais no código ou no repositório. Configure as variáveis de ambiente antes de executar:

```bash
export CYPRESS_EMAIL="seu-email-de-teste"
export CYPRESS_PASSWORD="sua-senha-de-teste"
export CYPRESS_BASE_URL="http://localhost:3000"
export CYPRESS_API_LOGIN="http://localhost:8080/auth/login"
export CYPRESS_API_CLINICA="http://localhost:8080/clinica"
export CYPRESS_API_ESPECIALISTA="http://localhost:8080/especialista"
```

No PowerShell, use `$env:NOME="valor"`. Os nomes de variáveis são lidos pela configuração do Cypress. Nunca publique segredos em commits, screenshots ou logs.

## Execução

```bash
npm test
npm run test:tablet
npm run lint
```

Para abrir a interface:

```bash
npm run cy:open
```

## Cypress Cloud

O projeto possui um identificador de projeto Cypress Cloud configurado. Para gravar execuções, configure também o segredo `CYPRESS_RECORD_KEY` e habilite a gravação no comando de execução, se desejado.

## Observações

A aplicação web e a API precisam estar em execução e acessíveis. Os testes dependem dos seletores e endpoints do ambiente Vollmed; valide esses serviços antes de interpretar falhas como defeitos da suíte.
