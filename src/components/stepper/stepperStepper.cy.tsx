import React from 'react'
import Stepper from './stepper'

describe('<Stepper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />)
  })

  it('mounts', () => {
    cy.mount(<Stepper />)
    //Stepper should have initial count of 0 (default)
    cy.get('[data-cy=counter]').should('have.text', '0')
  })

  it('mounts', () => {
    cy.mount(<Stepper initialCount={100} />)
    //Stepper should have initial count of 100
    cy.get('[data-cy=counter]').should('have.text', '100')
  })

  it('clicking + fires a change event with the incremented value', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<Stepper onChange={onChangeSpy} />)
    cy.get('[data-cy=decrement]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', -1)
    cy.get('[data-cy=decrement]').click()
  })
})