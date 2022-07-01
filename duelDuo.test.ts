
import { Builder, Capabilities, By } from "selenium-webdriver"
import { convertToObject } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

afterEach(async () => {
    await driver.sleep(6000)
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking Draw button', async () => {
  const choices = await driver.findElement(By.id('choices')).click()
  const displayed = await choices.isDisplayed()
  expect(displayed).toBeTruthy(true)
   
})

test('Add to duo', async () => {
    const player-duo = await driver.findElement(By.id('player-duo')).click()
    const displayed = await player-duo.isDisplayed()
    expect(displayed).toBeTruthy()
})