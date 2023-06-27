# Become a Software Professional 2023

## _Swag Labs - E2E Automated Testing_ 

Software developed for Swag Labs; with the purpose of adding value to our clients, offering them access to a virtual store with the best prices and quality in their products.

This automated testing aims to detect flaws in the developed software, avoiding that a person has to execute the tests manually, which means a decrease in test times, greater capacity for test execution and an increase in quality and reliability indicators.

For the Swap Labs project, automated tests were developed that include the entire user login flow, purchase, add and delete items, enter data for checkout, verify the links of published social networks, make a purchase without items and logout.

Additionally, we added the Allure Reports functionality, which allows us to visualize the results of the execution of an automated project in a clearer and more graphic way.

The users used for the tests are:

- standard_user
- locked_out_user
- problem_user
- performance_glitch_user

## Quick start

To run the automated test created you must:

- Have previously installed [Visual Studio Code](https://code.visualstudio.com/download) and [Node.js](https://nodejs.org/en/download)
- Open Visual Studio Code and select the Clone Git Repository option
- Copy the link: https://github.com/ryaev/Week-14.git and press Enter
- Select the directory where to store the project and select Open
- Open the VSC terminal and for installation of the WebdriverIO framework run the command: npm init --save-dev wdio
- Follow the steps and configure according to the options described in the following image attached in the [Link](https://ibb.co/ynrhsSj).
- Once the framework installation is finished, you can run the automated tests developed by entering the command in the terminal: npx wdio
- To run the Allure reports you must enter the command in the terminal: npm i --save-dev allure-commandline
- Then enter the command: npm allure-report

Author: Robert Yanez

## License
Copyright © 2023 Radium Rocket. All rights reserved.