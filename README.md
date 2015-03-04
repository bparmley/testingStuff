# Learning to Test
This repo is designed to bring JS testing down the simple bare bones, and learn how everthing connects.

##Objectives
1. Write some tests for some functions that are not yet written (Test Driven Development)

  The repo is designed to use [Expect.js](https://github.com/mjackson/expect) and [Mocha.js](http://mochajs.org/).

2. Write the functions to fuction as designed and pass the test.

##Instructions
1. Clone this repo localy
2. npm install
3. Install Mocha globally - npm install -g mocha
3. Write tests in the test.js file. See comments in math.js to know what the functions should do.
4. Run npm test (or mocha) to see the tests fail
5. Write functions in math.js
6. Run npm test as needed to see the tests pass

##Other Things
* When writing tests, try to think about all the different requirements that your functoin should have, and test for those requirements.
* Functions should do one thing, and do it well.
* Mocha is a testing framework. Frameworks run and orginize the tests and display the outputs of the tests.
* In the same way Angular.js is a framework used to orginize your JS. Mocha is a framework to orginize tests.
* Other testing frameworks include: qUinit and Jasmine. See more here: [JS Frameworks on Wikipedia](http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript)
* Expect.js is a testing assertion library. This is what acutually runs the test.
* At the root of things, all tests are is if statements. In the same way the jQuery is a libary, that adds simplicity and consistancy to JS. The assertion libraries just add simplicity and consistancy to tests. (If statements)
* Other assertion libraries include: Should.js, Assert.js, and Chai.js
