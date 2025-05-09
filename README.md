# 🚀 Automation Testing Assessment – Saucedemo.com

This is a WebDriverIO-based automation test suite built to test [SauceDemo](https://www.saucedemo.com/) as part of an assessment.

# 🛠 The project uses:

- **WebdriverIO**
- - **JavaScript**
- **Mocha** (test framework)
- **Allure Reporter** (for detailed test reports)
- **Node.js & NPM**

---

## 📁 Project Structure
├── test/
│   ├── specs/
│   │   ├── Q1.spec.js
│   │   ├── Q2.spec.js
│   │   └── Q3.spec.js
│   └── pageObjects/
├── wdio.conf.js
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/kibria282096/Automation_Project_002.git
cd Automation_Project_002
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
#### Q1 – Locked Out User Test with allure report
```bash
npm run test:q1
```
#### Q2 – Standard User Checkout Flow with allure report
```bash
npm run test:q2
```
#### Q3 – Performance Glitch User Test with allure report
```bash
npm run test:q3
```
### 🧾 Notes
1. Ensure you have Chrome installed and up to date
2. You can update the browser settings or selectors in wdio.conf.js if needed
3. All tests use explicit waits and POM for maintainability
