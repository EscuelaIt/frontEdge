import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as tarea from 'componentes/lista-tareas/tarea/tarea'

const raiz ="./componentes/"
const nombreComponente = 'listaTareas'
const nombreFichero = 'lista-tareas'

angular.module(nombreComponente, ['ngMaterial', tarea.nombre])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`
    })


export var nombre = nombreComponente