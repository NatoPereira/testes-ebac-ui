/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('natocastro@outlook.com')
        cy.get('#password').type('Natocastro1,')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, natocastro (não é natocastro? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('natocastr@outlook.com')
        cy.get('#password').type('Natocastro1,')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('natocastro@outlook.com')
        cy.get('#password').type('Natocastro1')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'A senha fornecida para o e-mail natocastro@outlook.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
    });
})