describe('template spec', () => {

  beforeEach(() => {
    cy.visit("/");
  })
  
  it('Correct login & pass', () => {
    cy.visit('http://localhost:3000');
    cy.get('.ml-auto > .ml-2').click();
    cy.get('#mail').type('test@test.com');
    cy.get('#pass').type('test');
    cy.get('form > .ml-2').click();
    cy.contains('Log out').should('be.visible');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  })

  it('Ввод пустого поля пароль ', () => {
    cy.visit('http://localhost:3000');
    cy.get('.ml-auto > .ml-2').click();
    cy.get('#mail').type('test@test.com');
    cy.get('form > .ml-2').click();
    cy.get('#pass').then((elements) => elements[0].checkValidity()).should('be.false')
   
  })
  it('Ввод пустого поля логина ', () => {
    cy.visit('http://localhost:3000');
    cy.get('.ml-auto > .ml-2').click();
    cy.get('#pass').type('test');
    cy.get('form > .ml-2').click();
    cy.get('#mail').then((elements) => elements[0].checkValidity()).should('be.false')
  })
})