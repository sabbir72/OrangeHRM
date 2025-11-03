# 🟠 OrangeHRM Cypress Automation

[![Cypress.io](https://img.shields.io/badge/Cypress-Testing-brightgreen)](https://www.cypress.io/)  
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

This repository contains **end-to-end automated tests** for **OrangeHRM** using **Cypress**.  
The focus is on **Login** and **Leave Management** modules including **Apply Leave** and **My Leave** pages.

---

## 📁 Folder Structure

- `cypress/e2e/ApplyForLeave.cy.js`  
  Main test script for leave application functionality.

- `cypress/fixtures/`  
  Test data and example JSON files.

- `cypress/support/`  
  Custom commands and support utilities.

- `.gitignore`  
  Recommended ignores (test results, environment files, logs, etc.)

---

## ✅ Features Covered

- Login with valid credentials.  
- Navigation to **Apply Leave** and **My Leave** pages.  
- Validation of **Leave Type** dropdown (if present).  
- Attempt to list leave types available for the user.  
- Basic negative test cases and UI element checks.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd <repo-folder>
npm install
# Example
BASE_URL=https://opensource-demo.orangehrmlive.com
USERNAME=Admin
PASSWORD=admin123



npx cypress open
npx cypress run


⚠️ Notes

Default demo URL: OrangeHRM Demo

Tests assume admin login credentials.

Some workflow issues (like missing dropdowns for Leave Type) are documented as bugs.

Don't forget to add the .env file.

🛠 Contribution

Fork this repo and submit pull requests with improvements.

Add new test cases for other modules or pages as needed.

🖼 File Structure Preview
