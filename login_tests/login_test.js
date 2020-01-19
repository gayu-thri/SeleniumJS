const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    
 const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://iris-se.netlify.com/login')

driver.findElement(By.xpath("//*[@type=\"text\"]")).sendKeys('egayu3@gmail.com');
driver.findElement(By.xpath("//*[@type=\"password\"]")).sendKeys('pass');

driver.sleep(1000).then(function() 
{
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
});

driver.findElement(By.css("button[type=button]")).click(); 

driver.sleep(2000).then(function() 
{
  driver.getTitle().then(function(title) {
    if(title === 'Login Success') 
    {
      console.log('Test passed'); 
    } else {
      console.log('Test failed');
    }
    driver.quit(); 
  });
});


/*driver.wait(webdriver.until.elementLocated(By.id("logged-in-message")), 10000).getText().then(function(txt){
    console.log("test success: "+txt);
})  */