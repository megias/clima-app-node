const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encondeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php/latlon.php?location=' + encondeUlr,
        headers: { 'x-rapidapi-key': '7f3a5af530msh5093bc5e09178fdp11e3aejsnb89ed7127a95' }
    });

    const resp = await instance.get();
    if (resp.data.Results[0] === 0) {
        throw new Error('No hay resultados para ' + dir)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    /*.then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('ERRROR!!!!', err);
    })*/

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}