describe('Teste Cypress', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.contains('Ir para o Cadastro')
    .click()

    cy.get('input[placeholder="Nome Completo"]')
    .type('Pobrezinho Dele')

    cy.get('input[placeholder="Email"]')
    .type('Pobrezinho2234@tuamaeaquelaursa.com')

    cy.get('input[placeholder="senha"]')
    .type('Pobrezinhodele2234')

    cy.get('input[placeholder="Confirme a senha"]')
    .type('Pobrezinhodele2234')
    

    cy.contains('Criar conta')
    .click()

    cy.contains('Você está logado!').should('be.visible')

  })

  it('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.get('input[placeholder="Email"]').type('cypress@teste.com')
    cy.get('input[placeholder="senha"]').type('cypress')

    cy.get('button[type="submit"]')
    .click()

    cy.contains('Você está logado!').should('be.visible')

  })
})