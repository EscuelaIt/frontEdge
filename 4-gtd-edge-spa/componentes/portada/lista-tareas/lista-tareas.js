import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import tarea from 'componentes/portada/lista-tareas/tarea/tarea'

const raiz ="./componentes/portada/"
const nombreComponente = 'listaTareas'
const nombreFichero = 'lista-tareas'

angular.module(nombreComponente, ['ngMaterial', tarea])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`
    })


export default nombreComponente