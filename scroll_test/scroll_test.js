const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

async function scroll()
{
    let driver =await new webdriver.Builder()
    .forBrowser('chrome')
    .build();
   
    await driver.get('https://iris-se.netlify.com/register')
//give waitttt hereeeee

    setTimeout(timeout,4000);
    function timeout() 
    {
        console.log("Quitting driver...");
    }

    await driver.executeScript("window.scrollBy(0, 1000)")

    if (driver.scroll===false)
    {
        console.log("Test failêd!");
    }
    else
    {
        console.log("Test passed!");
    }
    driver.quit()
}


scroll();