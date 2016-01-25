import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as angularUiRouter from 'angular-ui-router'

const raiz ="./componentes/"
const nombreComponente = 'navegacion'



let configurarEstado = ($stateProvider) => {
    $stateProvider
        .state(nombreComponente, {
            url: `/${nombreComponente}`,
            template: `<${nombreComponente}></${nombreComponente}>`
        });
}

angular.module(nombreComponente, ['ngMaterial','ui.router'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })
    .config(configurarEstado)

export default nombreComponente