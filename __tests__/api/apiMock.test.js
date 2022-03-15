import { getMenu } from '../../src/apis/menuApi';

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve()
}));

describe('"Get menu API', () => {

    let menuResponse
    beforeEach(async () => {
        const menuRespons = await getMenu();
        console.log(menuRespons, 'ESTOOOOO')
    });

    it('Then the correct average should be returned', () => {

        async () => {
            const menuRespons = await getMenu();
            console.log(menuRespons, 'ESTOOOOO')
        }

    });
});
