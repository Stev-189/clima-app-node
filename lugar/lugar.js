const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUlr = encodeURI(dir);
    const instance = axios.create({
        //baseURL: 'http://api.meteored.cl/index.php?api_lang=cl&localidad=516397&affiliate_id=rk29n4dqatb5&v=3.0'//clima solo chepica
        baseURL: `https://nominatim.openstreetmap.org/search/${encodedUlr}?format=json&addressdetails=1&limit=1&polygon_svg=1`
            //timeout: 1000
            //,header :{'key', 'valuekey'}
    });

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.day[1]);
    //     })
    //     .catch(err => { console.log('ERROR!!!', err); })
    const resp = await instance.get()
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data[0]
    const direccion = data.display_name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = { getLugarLatLng };