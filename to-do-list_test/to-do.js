const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function todo(){  
let driver =await new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//await driver.get('https://iris-se.netlify.com/login')
await driver.get('https://iris-beta.netlify.com/to-do/')  // changed UI
//await driver.findElement(By.name('email')).sendKeys('saibalsu@gmail.com')
string = "TESTING IF ITS WORKING"
await driver.findElement(By.xpath('//*[@id="__layout"]/div/div/div/div[2]/div/section[2]/div[2]/input')).sendKeys(string)

    await(await driver.findElement(By.xpath('//*[@id="__layout"]/div/div/div/div[2]/div/section[2]/div[3]/span/button'))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf(string) !==-1 ) {
   console.log('Test passed');
   /*console.log('Target page');
   d.get('https://iris-se.netlify.com') */
  } else {
      console.log('Test failed');
      return false;
  }
  
});
}
todo();
