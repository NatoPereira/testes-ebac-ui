/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('natocastro@outlook.com.br')
        cy.get('#password').type('Natocastro')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content').should('contain' , 'Olá, natocastro-8871 (não é natocastro-8871? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('natocastro@outlook.com.b')
        cy.get('#password').type('Natocastro')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('natocastro@outlook.com.br')
        cy.get('#password').type('Natocastr')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail natocastro@outlook.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
        
    });
})