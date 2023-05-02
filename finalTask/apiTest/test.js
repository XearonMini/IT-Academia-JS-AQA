const axios = require('axios');
const validator = require('jsonschema');
describe(`API tests OZ`, function () {
test('status code should be 200', async ()=> {
    const response = await axios.get('https:/oz.by/goods/ajax/html_box.php', {
        params: {
            idGoods: '10751217',
            type: 'html'
        },
    })
    expect(response.status).toBe(200)
})
    test('status code should be 200', async ()=>{
    const picStatus = await axios.get('https://s4-listing.ozstatic.by/200200/827/648/10/10648827_0.jpg',{
    })
    expect(picStatus.status).toBe(200)
})
})
describe('second', function () {
    test('status code should be 200', async () => {
        const response = await axios.get('https://oz.by/goods/ajax/html_box.php', {
            params: {
                idGoods: '10768913',
                type: 'html'
            },
        })
        expect(response.status).toBe(200)
    })
})