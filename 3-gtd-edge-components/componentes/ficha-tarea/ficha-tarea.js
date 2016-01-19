import * as angular from 'angular'
import * as angularMaterial from 'angular-material'


const raiz ="./componentes/"
const nombreComponente = 'fichaTarea'
const nombreFichero = 'ficha-tarea'

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`
    })


export var nombre = nombreComponente