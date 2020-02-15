const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=f5b03c1e2c5cf13ccfa77f77f91be3d2');

    return respuesta.data.main.temp;
}


module.exports = {
    getClima
}