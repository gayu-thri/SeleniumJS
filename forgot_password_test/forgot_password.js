const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function nonexist()
{
    let driver=await new webdriver.Builder()
    .forBrowser('chrome')
    .build()

    await driver.get('https://iris-beta.netlify.com/forgot-password')


    await driver.findElement(By.name('email')).sendKeys('egayu3@gmail.com')
    
    await (await driver.findElement(By.xpath('//*[@id="__layout"]/div/div/div/div/div/form/div[2]/button'))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf('no user') ==-1 ) {
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
nonexist();