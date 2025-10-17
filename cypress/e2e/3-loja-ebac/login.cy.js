/// <reference types="cypress"/>
const perfil= require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, natocastro (não é natocastro? Sair)') 
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados =>{
           cy.get('#username').type(dados.usuario, { log:false})
           cy.get('#password').type(dados.senha, { log: false})
           cy.get('.woocommerce-form > .button').click()
           cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, natocastro (não é natocastro? Sair)')    
        })
    });

    it.only('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('natocastro@outlook.com', 'Natocastro1,')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, natocastro (não é natocastro? Sair)')
    });
})