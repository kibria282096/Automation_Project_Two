#  Automation Testing Assessment – Saucedemo.com

This is a WebDriverIO-based automation test suite built to test [SauceDemo](https://www.saucedemo.com/) as part of an assessment.

The project uses:

- **WebdriverIO**
- - **JavaScript**
- **Mocha** (test framework)
- **Allure Reporter** (for detailed test reports)
- **Node.js & NPM**

---

## 📁 Project Structure
Automation_Project2/
│
├── test/
│ ├── specs/ # Test scenarios (Q1, Q2, Q3)
│ ├── pageobjects/ # Page Object Model (POM)
│ ├── pageActions/ # Page actions encapsulated as methods
│
├── wdio.conf.js # WebdriverIO configuration
├── package.json # NPM scripts and dependencies
├── .gitignore
├── README.md # You're reading it!

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Automation_Project2.git
cd Automation_Project2
```
### 2. Install Project Dependencies
```bash
npm install
```
### 3. Install Allure CLI (if not installed globally)
```bash
npm install -g allure-commandline --save-dev
```
### Run All Tests Sequentially (Q1 → Q2 → Q3 → Allure report)
```bash
npm run test:full
```
### Run Individual Test Suites
## Q1 – Locked Out User Test with report
```bash
npm run test:q1
```
## Q2 – Standard User Checkout Flow
```bash
npm run test:q2
```
## Q3 – Performance Glitch User Test
```bash
npm run test:q3
```
