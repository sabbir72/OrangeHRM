describe('OrangeHRM Leave Flow', () => {
  

  it('Login and navigate to Leave modules', () => {
   
cy.loginToOrangeHRM();
    // Dashboard should load
    cy.url().should('include', '/dashboard');

    // Open Leave menu (sidebar)
    cy.contains('Leave').click();

    // Go to Apply Leave
    cy.contains('Apply').click();
    cy.url().should('include', '/leave/applyLeave');

    // Get Leave Type options (assuming dropdown renders correctly)
    cy.get('label').contains('Leave Type').parent().within(() => {
      cy.get('select').then($select => {
        if ($select.length) {
          // Print leave type options to console
          cy.get('option').each(($option) => {
            cy.log($option.text());
          });
        } else {
          cy.log('Leave Type dropdown not found!');
        }
      });
    });

    // Go to My Leave
    cy.contains('My Leave').click();
    cy.url().should('include', '/leave/viewLeaveList');
  });
});
