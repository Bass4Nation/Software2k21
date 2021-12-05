import {test, expect} from '@playwright/test'


test('start -> login -> Dashboard for admin -> lage annonse -> Så lage annonsen -> Se alle admins annonser', async ({page}) => {

    await page.goto('http://localhost:3000/')

    await page.click('text=Login')

    await expect(page).toHaveURL('http://localhost:3000/user/login')

    await page.fill('#username', 'admin');
    
    await page.fill('#password', 'admin');

    await page.click('text=Logg inn')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/admin')

    await page.click('text=Lag annonse')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/create')

    await page.fill('#tittel', 'laget av playwright test');
    
    await page.fill('#beskrivelse', 'beskrivelse laget i testingen');

    await page.fill('#kjopnu', '10000');
    
    await page.fill('#startbud', '1000');

    await page.click('text=Legg ut')

    await expect(page).toHaveURL('http://localhost:3000/dashboard/view')

    await expect(page.locator('p')).toContainText('Tittel: laget av playwright test')




})

