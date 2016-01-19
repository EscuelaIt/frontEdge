import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz ="./componentes/"
const nombreComponente = 'fab'

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })


export var nombre = nombreComponente