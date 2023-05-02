const axios = require('axios');
const validator = require('jsonschema');
describe(`API tests OZ`, function () {
test('status code should be 200', async ()=>{
    const response = await axios.get('https:/oz.by/goods/ajax/html_box.php',{
        params:{
            idGoods:'10751217',
            type:'html'
        },
    })
    expect(response.status).toBe(200)
})
})