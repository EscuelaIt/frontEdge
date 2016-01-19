import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz ="./componentes/"
const nombreComponente = 'tarea'

let configurarEstado = ($stateProvider) => {
    $stateProvider
        .state(nombreComponente, {
            url: `/${nombreComponente}`,
            template: `<${nombreComponente}></${nombreComponente}>`
        });
}

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })
    .config(configurarEstado)

export default nombreComponente