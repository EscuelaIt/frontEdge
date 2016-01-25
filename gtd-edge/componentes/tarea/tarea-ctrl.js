class tareaCtrl {
  constructor(servicioTareas, $stateParams, $state, $mdToast) {
    this.servicioTareas= servicioTareas
    this.$stateParams= $stateParams
    this.$state = $state
    this.$mdToast= $mdToast
    this.tareaId = $stateParams.tareaId
    this.tarea = servicioTareas.obtenerTarea(this.tareaId)
    this.guardar = () => {
      servicioTareas.guardarTarea(this.tarea)
      $mdToast.show($mdToast.simple().content("Tarea guadada").hideDelay(3000))
      $state.go('portada')
    }
  }

  borrar() {
    this.servicioTareas.borrarTarea(this.tareaId)
    this.$mdToast.show(this.$mdToast.simple().content("Tarea borrada").hideDelay(3000))
    this.$state.go('portada')
  }
}

export default tareaCtrl