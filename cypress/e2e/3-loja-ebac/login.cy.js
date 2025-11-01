/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('natocastro@outlook.com.br')
        cy.get('#password').type('Natocastro')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content').should('contain' , 'Olá, natocastro-8871 (não é natocastro-8871? Sair)')
    })
})