const axios = require('axios');
const validator = require('jsonschema');
const spotifySchema = require('../testData/spotifySchema.json');
const userDataSchema = require('../testData/userDataSchema.json');
const { sendHttpRequest } = require('../testHelpers/sendHttpRequests')
describe(`API tests Spotify`, function () {
    describe('first', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://spotify117.p.rapidapi.com/spotify_playlist/', {
                headers: {
                    'X-RapidAPI-Key': 'b3a6002d1cmsh38a218b54c5978dp115769jsn6478e073b381',
                    'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
                },
                params: {url: 'https://open.spotify.com/playlist/3nS8d7ekVjFLM4jVyqbDGY'},
            })
        });
        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })
        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, spotifySchema);
            expect(result.valid).toEqual(true)
        })
    })
    describe('user profile data test', function () {
        let response;
        beforeAll(async () => {
            response = await axios({
                method: "GET",
                url: 'https://spotify117.p.rapidapi.com/get_user_details/',
                headers: {
                    'X-RapidAPI-Key': 'b3a6002d1cmsh38a218b54c5978dp115769jsn6478e073b381',
                    'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
                },
                params: {user_id: 'cruilla'}
            })
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })
        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, userDataSchema);
            expect(result.valid).toEqual(true)
        })
    })
});
