const cursos = [
    {
        id: 1,
        nombre: 'Programacion',
        duracion: '4 meses',
        valor: 500000
    },
    {
        id: 2,
        nombre: 'Ingles',
        duracion: '12 meses',
        valor: 1000000
    },
    {
        id: 3,
        nombre: 'Calculo 1',
        duracion: '6 meses',
        valor: 750000
    },
    {
        id: 4,
        nombre: 'Sistemas Digitales',
        duracion: '3 meses',
        valor: 250000
    }
];

const obtenerCursoPorId = (idCurso) => cursos.find(cur => cur.id === idCurso);

module.exports = { cursos, obtenerCursoPorId };