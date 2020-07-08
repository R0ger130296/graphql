;
'use stric'
const cursos = [{
    _id: '1',
    titulo: 'Tendencias',
    profesor: 'Carlos',
    descripcion: '',
    genero: 'drama'
}, {
    _id: '2',
    titulo: 'Tesis',
    profesor: 'Roberto',
    descripcion: '',
    genero: 'Terror'
}, {
    _id: '3',
    titulo: 'Libro 1',
    profesor: 'Andy',
    descripcion: '',
    genero: 'Comedia'
}, {
    _id: '4',
    titulo: 'Libro 2',
    profesor: 'Carlos',
    descripcion: '',
    genero: 'drama'
}, ]


module.exports = {
    Query: {
        getCursos: () => {
            return cursos
        },
        // getCuroById: (_id) => {
        //     return cursos
        // }
    }
}