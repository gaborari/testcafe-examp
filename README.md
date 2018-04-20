## Background:
1. [An Overview of JavaScript Testing in 2017](https://medium.com/powtoon-engineering/a-complete-guide-to-testing-javascript-in-2017-a217b4cd5a2a)
2. [Use React tools for better Angular apps](https://medium.com/@martin_hotell/use-react-tools-for-better-angular-apps-b0f14f3f8114)
3. [UI Test Automation Frameworks Showdown: TestCafé versus Nightwatch.js](http://www.pqatesting.com/our_ideas/blog/u)
4. [End-to-End Testing with TestCafe](http://mherman.org/testcafe-example/#1)
5. [TestCafe: Easier End-to-end Web App Testing with Node.js](https://www.sitepoint.com/testcafe-easier-end-end-web-app-testing-node-js/)

## Main Goal:
Create a demo project with TestCafe to cover a cluster creation workflow.

### Possibilities with testcafe/testcafe Docker images

[Official TestCafe Docker image.](https://hub.docker.com/r/testcafe/testcafe/)

## Comparison (brief list from several articles):

|Categories|Protractor|WebDriverIO|Night Watch|TestCafe|
|:---------|:--------:|:---------:|:---------:|:------:|
|Architecture|Protractor is a wrapper around WebdriverJS (selenium-webdriver node module).|WebdriverIO is custom implementation of W3C webdriver JSON wire protocol.|Night Watch is custom implementation of W3C webdriver JSON wire protocol.|TestCafe uses a URL-rewriting proxy instead of WebDriver. This proxy injects the driver script that emulates user actions into the tested page. This way TestCafe can do everything required for the testing: it can emulate user actions, authentication, run its own scripts & etc.|
|Supported browsers|Edge, Chrome, Firefox, Safari, Opera, HtmlUnit|Edge, Chrome, Firefox, Safari, Opera, HtmlUnit, PhantomJs|Edge, Chrome, Firefox, Safari, Opera, HtmlUnit, PhantomJs|Edge, Chrome, Firefox, Safari, Opera (works with any browser that supports HTML5 without any plugins)|
|Angular specific locator strategies|Supported|Partially supported by adding ‘webdriverjs-angular’ node module. Only ‘WaitForAngular’ has been implemented.|Not supported. But still we should be able to automate angular js application as selenium does.|Supported|
|Inbuilt test runner|Available|Available|Available|Available|
|Supported testing frameworks|Jasmine, Mocha, Cucumber|Jasmine, Mocha, Cucumber|Mocha, inbuilt framework|inbuilt framework|
|Reporting|Junit Xml Reporter, Protractor Html screenshot reporter, Jasmine spec reporter|Allure reporting, Jasmine Spec reporter, Junit xml reporter, Cucumber reporting|Junit xml reporter,Mocha reporting|spec,list,minimal,xUnit,JSON|
|Parallel Execution	Supported|Supported|Supported|Only Concurrency (is an optional mode that allows you to invoke multiple instances of the same browser. These instances constitute the pool of browsers against which tests run concurrently, i.e. each test runs in the first free instance.)|
|Cloud Execution (Sauce Labs, BrowserStack, Testing bot)|Supported|Supported|Supported|Supported|
|Mobile Support (Appium)|Partial support (Supports mobile browsers but does not support native apps)|Android, IOS|Android, IOS|Android, IOS (can run on mobile devices by default, without requiring custom configuration)|
|Synchronous execution|Supported|Supported|Supported|Supported|
|Page Object Pattern|Supported|Supported|Supported|Supported|
|Continuous Integration|Supported|Supported|Supported|Supported|
|Retrying flaky tests|Possible|Possible|Possible|Possible (With enabling the quarantine mode for tests that fail. In this mode, a failed test is executed several more times.)|
|TypeScript support|Inbuilt support|Possible when using Codecept.js|Not yet supported|Inbuilt support|
|Additional Features|Angular application support|CSS regression testing using ‘webdrivercss’ npm package.|–|Plug-in Free Testing (after install, immediately functional), nice async/await syntax|
|Licenses|MIT|MIT|MIT|MIT|
|Dependencies|15|21|10|62|
