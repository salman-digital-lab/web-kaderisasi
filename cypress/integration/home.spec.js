describe('Home Page', () => {
    it('testing', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Wait until overlay is hide
        cy.get('#overlay', { timeout: 10000 }).should('not.exist')
    })
})
