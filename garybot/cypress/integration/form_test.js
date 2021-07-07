describe('validate form data', () => {
  it('get name input and enter name', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input#name').type('markymarky')
    cy.get('input#name').should('have.value', 'markymarky')
  })

  it('gets email input and enters email', () => {
    cy.get('input#email').type('markymarky@gmail.com')
  })

  it('gets password input and enters password', () => {
    cy.get('input#password').type('markymarky')
  })

  it('check use of terms checkbox', () => {
    cy.get('input#terms').check()
  })

  it('check to see if use can submit form data', () => {
    cy.get('form#submitForm').submit()
  })

  it('check if input is empty and submitBtn is disabled', () => {
    cy.get('input#submitBtn').should('be.disabled')
  })
})