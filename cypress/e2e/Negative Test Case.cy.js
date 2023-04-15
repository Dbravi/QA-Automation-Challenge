describe('Add a computer with mandatory fields', () => {
    it('should add a computer with mandatory fields successfully', () => {
      cy.visit('https://computer-database.gatling.io/computers'); // visit the homepage
      cy.contains('Add a new computer').click(); // click on "Add a new computer" button
      cy.get('#name').type('Dell Inspiron 15'); // enter computer name
      cy.get('#introduced').type('2022-12-01'); // enter an introduced date
      cy.get('#discontinued').type('2021-12-01'); // enter a discontinued
      cy.get('#company').select('Lenovo Group'); // select company
      cy.contains('Create this computer').click(); // click on "Create this computer" button
      cy.contains('Discontinued date is before introduction date'); // assert that error is succesfully shown
    });
  });  