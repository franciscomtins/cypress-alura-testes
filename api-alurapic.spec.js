describe('buscar fotos e dados', () => {

    it('buscar fotos usuario flavio', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('urlGET')
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
            expect(resp.body).is.not.empty
            expect(resp.body[0]).to.have.property('description')
            expect(resp.body[0].description).to.be.equal('Farol iluminado')
        })
    })

    it('fazer login usuario flavio', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('urlPOST'),
            body: Cypress.env()
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
            expect(resp.body).is.not.empty
            expect(resp.body).to.have.property('id')
            expect(resp.body.id).to.be.equal(1)
            expect(resp.body).to.have.property('email')
            expect(resp.body.email).to.be.equal('flavio@alurapic.com.br')
            
        })
    })



    
})
