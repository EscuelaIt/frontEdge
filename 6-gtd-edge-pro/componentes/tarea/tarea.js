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
    controller: function (servicioTareas, $stateParams, $state, $mdToast) {
      this.tareaId = $stateParams.tareaId
      this.tarea = servicioTareas.obtenerTarea(this.tareaId)
      this.guardar = () =>{
        servicioTareas.guardarTarea(this.tarea)
        $mdToast.show($mdToast.simple().content("Tarea guadada").hideDelay(3000))
        $state.go('portada')
      }
      this.borrar = () => {
        servicioTareas.borrarTarea(this.tareaId) 
        $mdToast.show($mdToast.simple().content("Tarea borrada").hideDelay(3000))
        $state.go('portada')
      }
    }
    
    
    
  })
  .config(configurarEstado)

export default nombreComponente