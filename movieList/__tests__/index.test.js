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
    test('Adding a movie', async() =>{
        // clearing the input box
        await driver.findElement(By.xpath('//input')).clear() 

        // inputting Home Alone
        await driver.findElement(By.xpath('//input')).sendKeys(`Home Alone`)
            await driver.sleep(2000)

        // clicking the button 
        await driver.findElement(By.xpath('//button')).click()

        let movie =await driver.findElement(By.xpath('//li'))
        let displayed= movie.isDisplayed()
        await driver.sleep(1000)
        expect(displayed).toBeTruthy()


    })

    test('Crossing off a movie and testing value ', async() =>{
        await driver.sleep(2000)

    // the movie is hidden after being watched
    await driver.findElement(By.xpath('//span')).click()
    let message = await driver.findElement(By.id("message")).getText()
    console.log(message)
    expect(message).toBe('Home Alone watched!')

    })

        
    test('Deleting the movie', async() => {

        await driver.sleep(2000)
    // deleting the movie after being "watched"
    await driver.findElement(By.xpath('(//button)[2]')).click()
    let message = await driver.findElement(By.id("message")).getText()
    console.log(message)
    expect(message).toBe('Home Alone deleted!')

        await driver.sleep(1000)
    })   

})
