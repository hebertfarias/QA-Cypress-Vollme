# QA Automation — Vollmed

Projeto de automação de testes web e de API com Cypress para a aplicação Vollmed.

## Recursos identificados
- Login web com `cy.session()`.
- Login via API com `cy.request()` e validações de status, autenticação e token.
- Comandos customizados para apoiar fluxos de cadastro.
- Cypress, Faker, Mochawesome e cypress-plugin-api.
- Execução em viewport desktop/tablet e lint com ESLint.

## Requisitos
- Node.js 20 (recomendado).
- Aplicação web e API disponíveis localmente.

## Instalação
```bash
npm install
```

## Configuração segura
Não mantenha e-mail ou senha reais no código ou no repositório. Configure as variáveis de ambiente:

```bash
export CYPRESS_EMAIL="seu-email-de-teste"
export CYPRESS_PASSWORD="sua-senha-de-teste"
export CYPRESS_BASE_URL="http://localhost:3000"
export CYPRESS_API_LOGIN="http://localhost:8080/auth/login"
export CYPRESS_API_CLINICA="http://localhost:8080/clinica"
export CYPRESS_API_ESPECIALISTA="http://localhost:8080/especialista"
```

No PowerShell, use `$env:NOME="valor"`. Nunca publique segredos em commits, screenshots ou logs.

## Execução
```bash
npm test
npm run test:tablet
npm run lint
npm run cy:open
```

## Cypress Cloud
O projeto possui um identificador de projeto Cypress Cloud configurado. Para gravar execuções, configure o segredo `CYPRESS_RECORD_KEY` e habilite a gravação no comando, se desejado.

## Observações
A aplicação web e a API precisam estar em execução e acessíveis. Os testes dependem dos seletores e endpoints do ambiente Vollmed; valide esses serviços antes de interpretar falhas como defeitos da suíte.
