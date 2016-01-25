import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as angularUiRouter from 'angular-ui-router'
import tareaCtrl from 'componentes/tarea/tarea-ctrl'

const raiz = "./componentes/"
const nombreComponente = 'tarea'

let configurarEstado = ($stateProvider) => {
  $stateProvider
    .state(nombreComponente, {
      url: `/${nombreComponente}/:tareaId`,
      template: `<${nombreComponente}></${nombreComponente}>`
    });
}

angular.module(nombreComponente, ['ngMaterial', 'ui.router'])
  .component(nombreComponente, {
    templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`,
    controller: tareaCtrl
  })
  .config(configurarEstado)

export default nombreComponente