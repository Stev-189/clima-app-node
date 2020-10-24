const hola = []
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion del lugar donde requiere el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = { argv }