OrangeHRM Cypress Automation
This repository contains automated end-to-end test scripts for OrangeHRM using Cypress. The tests focus on Login and Leave Management (Apply Leave, My Leave) features.

Folder Structure
cypress/e2e/ApplyForLeave.cy.js : Main test script for leave application functionality.

cypress/fixtures/ : Test data and example JSON files.

cypress/support/ : Custom commands and support utilities.

.gitignore : Recommended ignores (test results, environment files, logs, etc.)

Features Covered
Login with valid credentials.

Navigation to "Apply Leave" and "My Leave" pages.

Validation of Leave Type dropdown (if present).

Attempt to list leave types present for the user.

Basic negative test cases and UI element checks.

Getting Started
Clone the repo:

text
git clone <repo-url>
cd <repo-folder>
Install dependencies:

text
npm install
Run tests in Cypress UI:

text
npx cypress open
(or run in headless mode: npx cypress run)

Notes
The scripts are written for the OrangeHRM demo URL:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Tests assume admin login:
Username: Admin, Password: admin123

Some workflow issues (like missing dropdowns for Leave Type) are documented as bugs.

Contribution
Fork this repo and open pull requests with improvements.

Add new test cases for other modules or pages as needed.

"Don't forget to add the .env file."


File structure
<img width="492" height="375" alt="image" src="https://github.com/user-attachments/assets/108b6025-05ad-445b-82d2-1e935006e651" />
