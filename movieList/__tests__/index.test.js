const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to the index.html
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})



describe('movie app tests', () => {
    test('Testing the functionality of the movie app', async() =>{

        await driver.findElement(By.xpath('//input')).clear() 

        await driver.findElement(By.xpath('//input')).sendKeys(`Home Alone\n`)

        // the movie is added hidden

        await driver.findElement(By.xpath('//span')).click()

        await driver.sleep(3000)

        // gets added when we want to watch

        await driver.findElement(By.xpath('//span')).click()

        await driver.sleep(3000)

        // the movie is hidden after being watched

        await driver.findElement(By.xpath('//span')).click()

        await driver.sleep(3000)

        // deleting the movie after being "watched"

        await driver.findElement(By.xpath('(//button)[2]')).click()

        await driver.sleep(3000)

        
    })

})
