const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function login_test1(){  
let driver =await new webdriver.Builder()
    .forBrowser('chrome')
    .build();

await driver.get('https://iris-se.netlify.com/login')

await driver.findElement(By.xpath("//*[@type=\"text\"]")).sendKeys('egayu3@gmail.com');
await driver.findElement(By.xpath("//*[@type=\"password\"]")).sendKeys('pass');
/*
driver.sleep(1000).then(function() 
{
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
});
*/
const button =
driver.until.elementLocated(By.css("button[type=button]"),20000);
button.click(); 

await d.getPageSource().then(function(content) 
{
  if(content.indexOf('Welcome ') !==-1 ) {
   console.log('Test passed');
   /*console.log('Target page');
   d.get('https://iris-se.netlify.com') */
  } else {
      console.log('Test failed');
      return false;
  }
  //driver.quit();
});
}
login_test1();

/*driver.wait(webdriver.until.elementLocated(By.id("logged-in-message")), 10000).getText().then(function(txt){
    console.log("test success: "+txt);
})  */