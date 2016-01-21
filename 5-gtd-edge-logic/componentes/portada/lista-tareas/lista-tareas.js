import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import tarea from 'componentes/portada/lista-tareas/tarea/tarea'
//import filaTarea from 'componentes/portada/lista-tareas/fila-tarea/fila-tarea'

const raiz ="./componentes/portada/"
const nombreComponente = 'listaTareas'
const nombreFichero = 'lista-tareas'


angular.module(nombreComponente, ['ngMaterial', tarea])
//angular.module(nombreComponente, ['ngMaterial', tarea, filaTarea])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`
    })


export default nombreComponente