# QA-Automation-Challenge

Cypress Test Suite for Adding a Computer

This is a test suite built with Cypress to test the functionality of adding a computer and inserting an invalid range of dates to a database in https://computer-database.gatling.io/computers. 
The test suite includes two scenarios: one for adding a computer with all mandatory fields and one for trying to add a computer with starting date superior to end date.

Getting Started
Prerequisites

    Node.js
    Cypress

Installation

    Clone this repository: git clone https://github.com/your-username/your-repo.git
    Navigate to the cloned directory: cd your-repo
    Install dependencies: npm install

Usage

    Open Cypress: npm run cy:open
    Select the test suite file
    The tests should run in the Cypress Test Runner

Tests Scenarios:

Scenario 1: Add a computer with valid information

Given the user is on the homepage
When the user clicks on "Add a new computer" button
And the user enters valid information for the computer
And the user selects a company from the dropdown list
And the user clicks on "Create this computer" button
Then a success message should be displayed indicating that the computer was added successfully.

Scenario 2: Add a computer with invalid date range

Given the user is on the homepage
When the user clicks on "Add a new computer" button
And the user enters an invalid date range for the computer
And the user selects a company from the dropdown list
And the user clicks on "Create this computer" button
Then an error message should be displayed indicating that the discontinued date is before the introduction date

