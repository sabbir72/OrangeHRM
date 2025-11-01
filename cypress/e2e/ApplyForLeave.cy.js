// describe('Apply Leave in OrangeHRM', () => {
//   it('Logs in and applies for leave', () => {
//     cy.loginToOrangeHRM();

//     cy.contains('Leave').click().wait(1000);
//     cy.contains('Apply').click().wait(1000) ;
//     cy.get('i.bi-chevron-left').click().wait(1000);

// cy.get('label').contains('Leave Type').parent().next().click(); // open dropdown
// cy.get('.oxd-select-dropdown').first().click();   // select first option



//   cy.get('input[placeholder="yyyy-dd-mm"]').first() .clear().type('2025-11-10');

//     cy.get('input[placeholder="yyyy-dd-mm"]').last().clear().type('2025-11-12');

//     cy.get('textarea').click({ force: true }).type('Need one day off for personal reason');
//     cy.get('button[type="submit"]').click();

//    cy.contains(/Successfully Applied|Failed to submit/i, { timeout: 10000 })
//   .should('be.visible');

//   });
// });


describe('Apply Leave in OrangeHRM', () => {
  it('Logs in and applies for leave, retries if Failed to submit', () => {
    // 1️⃣ Login
    cy.loginToOrangeHRM();

    // 2️⃣ Navigate to Apply Leave
    cy.contains('Leave').click().wait(1000);
    cy.contains('Apply').click().wait(1000);
    cy.get('i.bi-chevron-left').click().wait(1000); // optional, depends on UI

    // 3️⃣ Select Leave Type (first option)
    cy.get('label').contains('Leave Type').parent().next().click(); // open dropdown
    cy.get('.oxd-select-dropdown').first().click(); // select first option

    // 4️⃣ Enter Start Date & End Date
    const startDateInput = cy.get('input[placeholder="yyyy-dd-mm"]').first();
    const endDateInput = cy.get('input[placeholder="yyyy-dd-mm"]').last();

    startDateInput.clear().type('2025-11-10');
    endDateInput.clear().type('2025-11-12');

    // 5️⃣ Enter Comment
    cy.get('textarea').click({ force: true }).type('Need one day off for personal reason');

    // 6️⃣ Submit Leave
    cy.get('button[type="submit"]').click();

    // 7️⃣ Check result & retry if failed
    cy.contains(/Successfully Applied|Failed to submit/i, { timeout: 10000 }).then($msg => {
      const text = $msg.text();
      if (text.includes('Failed to submit')) {
        cy.log('Submission failed, changing leave dates and retrying');

        // Change leave dates
        startDateInput.clear().type('2025-11-13');
        endDateInput.clear().type('2025-11-14');

        // Retry submit
        cy.get('button[type="submit"]').click();

        // Final check for success
        cy.contains('Successfully Applied', { timeout: 10000 }).should('be.visible');
      } else {
        cy.log('Submission successful on first try');
      }
    });
  });
});

