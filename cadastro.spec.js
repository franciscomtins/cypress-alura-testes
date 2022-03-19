describe('cadastro de usuários alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('verifica mensagem de validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagem e-mail inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('francisco');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem tamanho mínimo full name', () =>{
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('f');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem tamanhiomáximo full name', () =>{
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('01234567901234567901234567901234567901234');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
    })

    it('verifica mensagem tamanho mínimo user name', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('f');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem tamanho máximo user name', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('0123456789012345678901234567891');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('verifica mensagem letras maiúsculas user name', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('fM');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('verifica mensagem tamanho mínimo password', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('f');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagem tamanho mínimo password', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('012345678901234');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })


      // passando direto
      it('registrar novo usuário', () => {
        //(email, fullName, userName, password)
        //cy.contains('a', 'Register now').click();
        cy.registrarUsuario('usuario-novo5@gmail.com', 'Usuario Novo5', 'new-user5', '0123456789');
        cy.contains('button', 'Register').click();
    }) 

    //usando massa de dados

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it(`registrar novo usuário ${usuario.userName}`, () => {
            //(email, fullName, userName, password)
            cy.registrarUsuario(usuario.email, usuario.fullName, usuario.userName, usuario.password);
            cy.contains('button', 'Register').click();
        })
  
    });


})