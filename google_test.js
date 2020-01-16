const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    //and now using the instance "driver" of selenium webdriver
    //visit google
driver.get('http://www.google.com');

//find the text input element by its name
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.sleep(1000).then(function() 
{
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
});
//You should see an instance of Chrome automatically open up! Google should automatically be loaded in a tab, "webdriver" should be entered in the search box, and the search button will be clicked. 
driver.findElement(By.name('btnK')).click();

console.log("Page title is: " + driver.getTitle())

driver.sleep(2000).then(function() 
{
  driver.getTitle().then(function(title) {
    if(title === 'webdriver - Google Search') {
      console.log('Test passed'); // if it is "webdriver - Google Search", we will return a message to claim the test is passed.
    } else {
      console.log('Test failed');
    }
    driver.quit(); //WebDriver will then close down the chrome instance and stop.
  });
});
