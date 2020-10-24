// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('./config/yargs').argv;
//argv.direccion

// lugar.getLugarLatLng(argv.direccion)
// .then(e => console.log(e.direccion))
// .catch(console.log);

// clima.getClima(-34.7285856, -71.2738582)
// .then(console.log)
// .catch(console.log)

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng)
        return `el clima de ${coords.direccion} es de ${temp}ª.`;
    } catch (error) {
        return `no se puedo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)