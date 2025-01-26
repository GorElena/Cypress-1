describe('Тесты на авторизацию сайта библиотека', () => {
  
  beforeEach(() => {
    cy.visit('/');
  })
  
  it('Успешная авторизация в библиотеке', () => {
    cy.login('test@test.com', 'test');
    cy.contains('Добро пожаловать test@test.com').should('be.visible').true;
    //cy.contains("Добро пожаловать").should("have.length", 1)
  })

  it("Ввод пустого поля Email", () => {
    cy.login(null, 'test');
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    })
  })

  it('Ввод пустого Password', () => {
    cy.login('test@test.com', null);
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    })
  });
})















