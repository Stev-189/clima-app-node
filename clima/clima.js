const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cc25e71c7b991f6b01aef0d634bd4a60&units=metric`)
    return resp.data.main.temp;
}

module.exports = { getClima };