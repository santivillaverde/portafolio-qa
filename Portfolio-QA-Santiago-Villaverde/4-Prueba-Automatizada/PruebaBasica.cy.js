describe('Test suite- conjunto de pruebas basicas', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Validaciones para la pagina de inicio', () => {
     // Logo de OrangeHRM
    cy.get('.orangehrm-login-branding > img').should('be.visible')

    // Campo de username
    cy.get('input[name="username"]').should('be.visible') // más directo y menos frágil que usar :nth-child

    // Texto de versión
    cy.get('.orangehrm-copyright-wrapper')
      .should('contain.text', 'OrangeHRM OS 5.7') // más robusto ante cambios menores

    // Botón de login
    cy.get('button[type="submit"]').should('be.visible')
  })

    



















})