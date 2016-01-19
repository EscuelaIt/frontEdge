import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz ="./componentes/"
const nombreComponente = 'toolbar'

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
        //templateUrl: './componentes/toolbar/toolbar.html'
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })


export var nombre = nombreComponente