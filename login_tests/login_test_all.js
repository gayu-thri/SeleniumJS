const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


async function login_test1(){  
    let driver =await new webdriver.Builder()
        .forBrowser('chrome')       //chrome-driver
        .build();
    
    await driver.get('https://iris-se.netlify.com/login')
    
    await driver.findElement(By.xpath("//*[@type=\"text\"]")).sendKeys('srishilesh@gmail.com');
    await driver.findElement(By.xpath("//*[@type=\"password\"]")).sendKeys('password123');
    /*
    driver.sleep(1000).then(function() 
    {
        driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
    });
    */   

    await await(driver.findElement(By.id("loginButton"),20000).click());
    
    await driver.getPageSource().then(function(content) 
    {
      if(content.indexOf('Welcome ') !==-1 ) 
      {
       console.log('Test passed');
       /*console.log('Target page');
       d.get('https://iris-se.netlify.com') */
      } else
        {
          console.log('Test failed');
          return false;
        } 
    });
}

async function login_test2()
{  
    let driver =await new webdriver.Builder()
    .forBrowser('chrome')
    .build();
        
    await driver.get('https://iris-se.netlify.com/login')
        
    await driver.findElement(By.xpath("//*[@type=\"text\"]")).sendKeys('alien@gmail.com');
    await driver.findElement(By.xpath("//*[@type=\"password\"]")).sendKeys('polo');
    /*
    driver.sleep(1000).then(function() 
    {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
    });
    */
   await await(driver.findElement(By.id("loginButton"),20000).click());
        
        
    await driver.getPageSource().then(function(content) 
    {
        if(content.indexOf('Welcome ') !==-1 ) 
        {
        console.log('Test passed');
        /*console.log('Target page');
        d.get('https://iris-se.netlify.com') */
        } else 
            {
              console.log('Test failed');
              return false;
            }
          
    });
}

async function login_test3()
{  
    let driver =await new webdriver.Builder() 
    .forBrowser('chrome')
    .build();
            
    await driver.get('https://iris-se.netlify.com/login')
            
    await driver.findElement(By.xpath("//*[@type=\"text\"]")).sendKeys('srishilesh@gmail.com');
    await driver.findElement(By.xpath("//*[@type=\"password\"]")).sendKeys('');
    /*
    driver.sleep(1000).then(function() 
    {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
    });
    */
    
   await await(driver.findElement(By.id("loginButton"),20000).click());

    await driver.getPageSource().then(function(content) 
        {
            if(content.indexOf('Welcome ') !==-1 ) 
            {
               console.log('Test passed');
               /*console.log('Target page');
               d.get('https://iris-se.netlify.com') */
            } else 
                {
                console.log('Test failed');
                return false;
                }
              
        });
}   


login_test1();
setTimeout(login_test2,25000);
setTimeout(login_test3,20000);


/*
login_test1();
login_test2();
login_test3();
*/