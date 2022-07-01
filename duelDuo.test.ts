
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
  await driver.findElement(By.id('draw')).click()
  const choices = await driver.findElement(By.id('choices'))
  const displayed = await choices.isDisplayed()
  expect(displayed).toBe(true)
   
})

test('Add to duo', async () => {
  await driver.findElement(By.id('player-duo')).click()
  const addDuo = await driver.findElement(By.id('addDuo'))
  const displayed = await addDuo.isDisplayed()
  expect(displayed).toBe(true)
  await driver.findElement(By.id('duel')).click()
})