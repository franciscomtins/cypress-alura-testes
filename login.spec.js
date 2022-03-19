describe('login de usuários alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('fazer login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login com usuário inválido', ()=> {
        cy.login('Fco','fco');
        cy.on ('window:alert,', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
    
})