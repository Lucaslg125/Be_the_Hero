///<reference types="cypress"/>


it('Realizar Login', function(){

    cy.visit('https://bethehero-frontend.netlify.app/')
    
    cy.get('[href="/register"]').click()
    cy.get('[placeholder="Nome da ONG"]').type('cat')
    cy.get('[type="email"]').type('309.lucas@gmail.com')
    cy.get('[placeholder="Whatsapp"]').type('61992264205')
    cy.get('[placeholder="Cidade"]').type('Brasília')
    cy.get('[placeholder="UF"]').type('DF')

    cy.server();
    cy.route('POST', '**ongs').as('postOng');
    cy.get('.button').click();
    cy.wait('@postOng').then((xhr) => {
        expect(xhr.status).be.eq(403);
    })
    cy.screenshot('Cadastrar Usuário')

})

