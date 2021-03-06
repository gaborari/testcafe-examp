import { BASE_URL } from '../environment/environment';
import BasePage from '../pages/basePage';
import LoginPage from '../pages/loginPage';

const basePage = new BasePage();
const loginPage = new LoginPage();

fixture `Cloudbreak Base examples`
    .page(BASE_URL)
    .beforeEach(async t => {
        await loginPage.login();
    });

const actualURL = basePage.getPageUrl();

test('Smoke | Clusters menu item is present | 004', async t => {
    await t
        .expect(basePage.isMenuItemPresent('.menu-clusters')).gte(1, 'check Clusters menu is visible')
});

test('Smoke | Cloudbreak Logout has been done successfully | 005', async t => {
    await t
        .click(basePage.logoutIcon)
        .click(basePage.confirmation)
        .expect(actualURL()).notContains('clusters', 'check actual URL does not contain "clusters"')
});
