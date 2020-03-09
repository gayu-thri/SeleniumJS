const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

async function reg_test1(){  
let driver =await new webdriver.Builder()
    .forBrowser('chrome')
    .build();

   await driver.get('https://iris-se.netlify.com/register')

   await driver.findElement(By.id("input-90")).sendKeys("egayu3@gmail.com")
           await driver.findElement(By.id("input-93")).sendKeys("")

/*
driver.sleep(1000).then(function() 
{
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
});
*/
// .mr-4

await await(driver.findElement(By.id("registerButton"),20000).click());

await driver.getPageSource().then(function(content) 
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


async function reg_test2(){  
    let driver =await new webdriver.Builder()
        .forBrowser('firefox')
        .build();
    
    await driver.get('https://iris-se.netlify.com/register')
    
    await driver.findElement(By.id("input-90")).sendKeys("")
    await driver.findElement(By.id("input-93")).sendKeys("password@123")
    /*
    driver.sleep(1000).then(function() 
    {
        driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
    });
    */
    // .mr-4
    await await(driver.findElement(By.id("registerButton"),20000).click());
    
    await driver.getPageSource().then(function(content) 
    {
      if(content.indexOf('Must be at least 8 characters') !==-1 ) {
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


    async function reg_test3(){  
        let driver =await new webdriver.Builder()
            .forBrowser('firefox')
            .build();
        
        await driver.get('https://iris-se.netlify.com/register')
        
           await driver.findElement(By.id("input-90")).sendKeys("egayu3@gmail.com")
           await driver.findElement(By.id("input-93")).sendKeys("password@123")
        /*
        driver.sleep(1000).then(function() 
        {
            driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
        });
        */
        // .mr-4
        await await(driver.findElement(By.id("registerButton"),20000).click());
        
        await driver.getPageSource().then(function(content) 
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
        async function reg_test4(){  
          let driver =await new webdriver.Builder()
              .forBrowser('firefox')
              .build();
          
          await driver.get('https://iris-se.netlify.com/register')
          
             await driver.findElement(By.id("input-90")).sendKeys("asdfgmail.com")
             await driver.findElement(By.id("input-93")).sendKeys("password@123")
          /*
          driver.sleep(1000).then(function() 
          {
              driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
          });
          */
          // .mr-4
          await await(driver.findElement(By.id("registerButton"),20000).click());
          
          await driver.getPageSource().then(function(content) 
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

reg_test1();
setTimeout(reg_test2,25000);
setTimeout(reg_test3,20000);
setTimeout(reg_test4,20000);


/*driver.wait(webdriver.until.elementLocated(By.id("logged-in-message")), 10000).getText().then(function(txt){
    console.log("test success: "+txt);
})  */