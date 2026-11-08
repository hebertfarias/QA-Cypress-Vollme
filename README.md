# QA Automation — Vollmed

Projeto de automação de testes web e de API com Cypress para a aplicação Vollmed.

## Recursos
- Login web com `cy.session()`.
- Login via API com `cy.request()` e validações de status, autenticação e token.
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

No GitHub Actions, cadastre `CYPRESS_EMAIL` e `CYPRESS_PASSWORD` como Actions Secrets para habilitar os cenários autenticados. Sem esses secrets, os testes que exigem login são explicitamente ignorados; os cenários públicos continuam sendo executados.

## CI
O workflow instala as dependências raiz, backend e frontend, compila o backend, inicia os dois serviços e executa os cenários Cypress. Logs do frontend/backend e evidências de teste são publicados como artefatos para facilitar o diagnóstico de falhas.

## Cypress Cloud
O projeto possui um identificador de projeto Cypress Cloud configurado. A gravação de execuções não é obrigatória para o workflow de CI.

## Observações
A aplicação web e a API precisam estar em execução. Os testes dependem dos seletores e endpoints do ambiente Vollmed; valide esses serviços antes de interpretar falhas como defeitos da suíte.
