import {test, expect} from '@playwright/test'

test('Skal gå til login siden', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')
})

test('Skal søke etter Kamera og sjekker man har ankommet annonsen', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.fill('#searchField', 'Kamera');

    await page.click('text=SØK')

    await expect(page).toHaveURL('http://localhost:3000/annonse/O5lI8Vjp')
})

test('Dobbel sjekker om søkefeltet virker. Om man ankommer siden', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.fill('#searchField', 'Kiste fra langt tilbake');

    await page.click('text=SØK')

    await expect(page).toHaveURL('http://localhost:3000/annonse/coGMX5Zo')
})

test('Skal gå til login siden, så klikke på Show All så gå til forsiden', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.click('text=Show all')

    await expect(page).toHaveURL('http://localhost:3000')

})

test('Skal gå inn på annonsen Gammel Telefon på forsiden', async ({page}) =>{
    await page.goto('http://localhost:3000/')

    await expect(page).toHaveURL('http://localhost:3000/')

    await page.click('text=Gammel Telefon')

    await expect(page.locator('h2')).toContainText('Gammel Telefon')


})

test('Skal den forvente feil om det er en siden som ikke finnes. ', async ({page}) => {

    await page.goto('http://localhost:3000/user')

    await expect(page.locator('h2')).toContainText('This page could not be found.')

})

test('Om noen prøver å gå inn på admins dashboard uten å være innlogget ', async ({page}) => {

    await page.goto('http://localhost:3000/dashboard/admin')

    await expect(page.locator('h2')).toContainText('Du må være innlogget for å se denne siden')

})

test('Om noen prøver å gå inn å se brukers annonser uten å logge inn', async ({page}) => {

    await page.goto('http://localhost:3000/dashboard/view')

    await expect(page.locator('h2')).toContainText('Du må være innlogget for å se denne siden')

})

test('Om noen prøver å lage en annonse uten å logge inn ', async ({page}) => {

    await page.goto('http://localhost:3000/dashboard/create')

    await expect(page.locator('h2')).toContainText('Du må være innlogget for å se denne siden')

})

test('start -> login -> Dashboard for admin', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.fill('#username', 'admin');
    
    await page.fill('#password', 'admin');

    await page.click('text=Logg inn')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/admin')


})

test('start -> login -> Dashboard for admin -> Admin sine annonser', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.fill('#username', 'admin');
    
    await page.fill('#password', 'admin');

    await page.click('text=Logg inn')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/admin')

    await page.click('text=Mine Annonser')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/view')

})

test('start -> login -> Dashboard for admin -> Logg ut knapp -> Logg inn siden', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.fill('#username', 'admin');
    
    await page.fill('#password', 'admin');

    await page.click('text=Logg inn')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/admin')

    await page.click('text=Logg ut')

    await expect(page).toHaveURL('http://localhost:3000/')

})

