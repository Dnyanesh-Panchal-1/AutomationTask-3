# Automation Task 3 - BDD Automation Framework

This repository contains the completed BDD Automation Task.

This project is developed using **Playwright**, **TypeScript** and **Cucumber (BDD)** for automating the Login functionality of **The Internet Heroku App**. The framework follows the **Page Object Model (POM)** design pattern with reusable page classes, step definitions, hooks, scenario outlines and HTML reporting to improve readability, maintainability and scalability.

**Application under test:**

https://the-internet.herokuapp.com/login

---



# Prerequisites

Make sure the following are installed on your system:
- Node.js
- VS Code
- Playwright
- TypeScript
- Cucumber
---

# Project Objectives
- Understand Behaviour Driven Development (BDD)
- Configure Cucumber with Playwright
- Create Feature Files using Gherkin syntax
- Implement Step Definitions
- Use Hooks (Before & After)
- Implement Page Object Model
- Create reusable test data
- Execute tagged test scenarios
- Implement Scenario Outline
- Generate HTML Reports

---

# Tasks Completed

Day 1
-
## Task 1: BDD Framework Setup

- Configured Playwright with Cucumber
- Created project folder structure
- Configured cucumber.js
- Configured TypeScript support

---



## Task 2: Feature File Creation

Created feature files using Gherkin syntax.

Implemented:
- Feature
- Background
- Scenario
- Scenario Outline
- Examples
- Tags

---


## Task 3: Step Definitions

Implemented reusable parameterized step definitions.

Examples:
- Login
- Logout
- Success validation
- Invalid username validation
- Invalid password validation



------

## Task 4: Scenario Outline

Implemented data-driven testing using:

- Scenario Outline
- Examples table

Executed login validation using multiple sets of credentials.

---

# Challenges Faced



- Configuring Cucumber with Playwright
- Understanding Hooks and Custom World
- Implementing parameterized step definitions
- Configuring Scenario Outline
- Debugging undefined step definitions
- Handling flash messages using toContainText()
- Resolving switch-case fall-through issue
- Generating HTML reports
- Managing navigation timeout issues
---




This project demonstrates the implementation of a maintainable and scalable BDD automation framework using Playwright, TypeScript and Cucumber by following industry-standard automation practices.
