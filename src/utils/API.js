import axios from 'axios';

const URL_PREFIX = 'http://www.omdbapi.com/?s='
const API_KEY = '&apikey=6dfb3408'

const API = {
    searchByTitle: query => {
        return axios.get(`${URL_PREFIX}${query}${API_KEY}`)
    }
}

export default API;