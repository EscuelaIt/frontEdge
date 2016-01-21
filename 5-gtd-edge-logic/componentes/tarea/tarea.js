import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as angularUiRouter from 'angular-ui-router'

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
    controller: function (servicioTareas, $stateParams) {
      this.tareaId = $stateParams.tareaId
      this.tarea = servicioTareas.obtenerTarea(this.tareaId)
      this.guardar = servicioTareas.guardarTarea(this.tarea) 
    }
  })
  .config(configurarEstado)

export default nombreComponente