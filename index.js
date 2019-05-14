const { cursos, obtenerCursoPorId } = require('./datos');
const { yargs } = require('./argumentos');
const fs = require('fs');

const imprimirCursos = (cursos) => {
    let i = 0;
    let intervalo = setInterval(() => {
        const {id, nombre, duracion, valor} = cursos[i];
        console.log(`Id del curso: ${id}. Nombre del curso: ${nombre}. Duración del curso: ${duracion}. Valor del curso: ${valor}`);
        i++;
        if (i === cursos.length) {
            clearInterval(intervalo);
        }
    }, 2000);
}

const crearArchivoDelCurso = (curso, nombreInteresado, cedula) => {
    texto = `Se ha registrado con exito al interesado ${nombreInteresado} identificado con el número de cédula ${cedula} en el curso ${curso.nombre}`;
    fs.writeFile('inscripcion.txt', texto, (error) => {
        console.log('error',error);
    });    
    console.log("Interesado inscrito satisfactoriamente, por favor revisar el archivo \"inscripcion.txt\"");
}


const validarArgumentos = (yargs, cursos) => {
    if (yargs._[0] === 'cursos') {
        imprimirCursos(cursos);
    } else if(yargs._[0] === 'inscribir') {
        const curso = obtenerCursoPorId(yargs.idCurso);
        if (curso) {
            crearArchivoDelCurso(curso, yargs.nombreInteresado, yargs.cedula);
        } else{
            console.log('Por favor ingrese un id de un curso válido, revise los cursos creados por medio de la opción "cursos"')
        }
    } else {
        console.log('Por favor ingrese una opción válida, sólo se permiten las opciones "cursos" y "matricula"')
    }
}

validarArgumentos(yargs, cursos);