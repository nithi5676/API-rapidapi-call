const axios = require('axios');

const RAPIDAPI_KEY = "fe7fc2862amshac814666b9db1f8p13a76bjsn78b6492bc40d";

const url = "https://imdb8.p.rapidapi.com/title/get-top-stripe";

const titleId = "tt0120338";

const headers = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
};

const params = {
    "currentCountry": "US",
    "purchaseCountry": "US",
    "region": "US",
    "tconst": titleId,
};

axios.get(url, { headers, params })
    .then(response => {
        console.log('IMDb API Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.message || error);
    });
