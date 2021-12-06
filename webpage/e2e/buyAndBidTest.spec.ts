import {test, expect} from '@playwright/test'


test('start -> Gå inn på en annonse', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Gammel Telefon')

    await expect(page).toHaveURL('http://localhost:3000/annonse/qHw4LG42')

})

test('start -> Gå inn på en annonse -> klikk Kjøp nå uten å logge inn', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Gammel Telefon')

    await expect(page).toHaveURL('http://localhost:3000/annonse/qHw4LG42')

    await page.click('text=Kjøp nå')

    await expect(page).toHaveURL('http://localhost:3000/annonse/qHw4LG42')

})

test('start -> Logg inn side -> Forside -> Gå inn på en annonse -> klikk Kjøp nå -> Transaksjonside', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.fill('#username', 'admin');
    
    await page.fill('#password', 'admin');

    await page.click('text=Logg inn')

    await page.click('text=Show All')

    await expect(page).toHaveURL('http://localhost:3000/')

    await page.click('text=Gammel Telefon')

    await page.click('text=Kjøp varen nå')

    await expect(page).toHaveURL('http://localhost:3000/annonse/transaksjon')
})

test('start -> Logg inn side -> Forside -> Gå inn på en annonse -> klikk Gi Bud -> Fyller inn noen tall', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.fill('#username', 'admin');
    
    await page.fill('#password', 'admin');

    await page.click('text=Logg inn')

    await page.click('text=Show All')

    await expect(page).toHaveURL('http://localhost:3000/')

    await page.click('text=Gammel Telefon')

    await page.click('text=Gi Bud')

    await page.fill('#bud', '1000');

    await page.click('text=Plasser bud')


})

test('start -> Logg inn side -> Forside -> Gå inn på en annonse -> klikk Kjøp nå -> Transaksjonside -> Forsiden ', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.fill('#username', 'admin');
    
    await page.fill('#password', 'admin');

    await page.click('text=Logg inn')

    await page.click('text=Show All')

    await expect(page).toHaveURL('http://localhost:3000/')

    await page.click('text=Gammel Telefon')

    await page.click('text=Kjøp varen nå')

    await expect(page).toHaveURL('http://localhost:3000/annonse/transaksjon')

    await page.click('text=Gå videre')

    await expect(page).toHaveURL('http://localhost:3000/')
})


