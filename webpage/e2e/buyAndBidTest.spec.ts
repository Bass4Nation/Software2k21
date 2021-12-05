import {test, expect} from '@playwright/test'


test('start -> Gå inn på en annonse', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Gammel Telefon')

    await expect(page).toHaveURL('http://localhost:3000/annonse/qHw4LG42')

})

test('start -> Gå inn på en annonse -> klikk Kjøp nå', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Gammel Telefon')

    await expect(page).toHaveURL('http://localhost:3000/annonse/qHw4LG42')

    await page.click('text=Kjøp nå')
})

