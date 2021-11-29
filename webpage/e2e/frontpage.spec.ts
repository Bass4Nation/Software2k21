import {test, expect} from '@playwright/test'

test('Skal gå til login siden', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')
})

test('Skal gå til login siden, så klikke på Show All så gå til den siden', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.click('text=Show all')

    await expect(page).toHaveURL('http://localhost:3000')

})

test('Skal den forvente feil om det er en siden som ikke finnes. ', async ({page}) => {

    await page.goto('http://localhost:3000/user')

    await expect(page.locator('h2')).toContainText('This page could not be found.')

})

test('start -> login -> Mine Annonser -> se alle brukerens info', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.click('text=Logg inn')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/admin')

    await page.click('text=Mine Annonser')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/view')

})

