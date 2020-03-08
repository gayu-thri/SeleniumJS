const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

async function reg_test1(){  
let driver =await new webdriver.Builder()
    .forBrowser('chrome')
    .build();

   await driver.get('https://iris-se.netlify.com/register')

   await driver.findElement(By.id("input-51")).sendKeys("Prathyusha")
   await driver.findElement(By.id("input-54")).sendKeys("Ilam")
   await driver.findElement(By.id("input-57")).sendKeys("prathyui")
   await driver.findElement(By.id("input-61")).sendKeys("CB.EN.U4CSE17424")
   await driver.findElement(By.id("input-64")).sendKeys("prathyu0398@gmail.com")
   await driver.findElement(By.id("input-67")).sendKeys("Female")
   await driver.findElement(By.id("input-74")).sendKeys("CSE")

/*
driver.sleep(1000).then(function() 
{
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
});
*/
// .mr-4

  const button =
  driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/div/div/div[2]/form/button[1]"))
  button.click() 

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
    
       await driver.findElement(By.id("input-51")).sendKeys("Prathyusha")
       await driver.findElement(By.id("input-54")).sendKeys("Ilam")
       await driver.findElement(By.id("input-57")).sendKeys("prathyu")
       await driver.findElement(By.id("input-61")).sendKeys("CB.EN.U4CSE17424")
       await driver.findElement(By.id("input-64")).sendKeys("prathyu0398@gmail.com")
       await driver.findElement(By.id("input-67")).sendKeys("Female")
       await driver.findElement(By.id("input-74")).sendKeys("CSE")
    
    /*
    driver.sleep(1000).then(function() 
    {
        driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
    });
    */
    // .mr-4
      const button =
      driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/div/div/div[2]/form/button[1]"))
      button.click()
    
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
        
           await driver.findElement(By.id("input-51")).sendKeys("Prathyusha")
           await driver.findElement(By.id("input-54")).sendKeys("Ilam")
           await driver.findElement(By.id("input-57")).sendKeys("prathyui")
           await driver.findElement(By.id("input-61")).sendKeys("CB.EN.U4CSE17424")
           await driver.findElement(By.id("input-64")).sendKeys("prathyu0398@gmail.com")
           await driver.findElement(By.id("input-67")).sendKeys("")
           await driver.findElement(By.id("input-74")).sendKeys("CSE")
        
        /*
        driver.sleep(1000).then(function() 
        {
            driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
        });
        */
        // .mr-4
          const button =
          driver.findElement(By.xpath("/html/body/div/div/div/div[2]/main/div/div/div/div/div[2]/form/button[1]"))
          button.click()
        
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
reg_test2();
reg_test3();


/*driver.wait(webdriver.until.elementLocated(By.id("logged-in-message")), 10000).getText().then(function(txt){
    console.log("test success: "+txt);
})  */