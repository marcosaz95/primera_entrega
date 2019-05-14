const opciones = {
    idCurso: {
        demand: true,
        alias: 'c'
    },
    nombreInteresado: {
        demand: true,
        alias: 'ni'
    },
    cedula: {
        demand: true,
        alias: 'cc'
    }
}

const yargs = require('yargs').command('cursos', 'Mostrar los cursos').command('matricula', 'Matricular interesado a un curso', opciones).argv;

module.exports = { yargs };