import * as angular from 'angular'
const nombreServicio = 'servicioTareas'

function funcionTareas() {
  this.tareas = []
  this.tareasId = 0
  
  this.tareasIniciales = () => {
    this.tareas = [
      { id: 1, titulo: 'tarea inicial', estado: 'inbox' },
      { id: 2, titulo: 'tarea programada', estado: 'scheduled', fecha: new Date() },
      { id: 3, titulo: 'tarea ya hecha', estado: 'done' }]
    this.tareasId = 3
  }
  
  this.obtenerTarea = tareaId => {
    return tareaId == 0 ? { id:0, estado: 'add' } : this.tareas.find(tarea => tarea.id == tareaId)
  }
  this.guardarTarea = tarea => {
    if (tarea.id == 0) {
      this.tareasId++
      tarea.id = this.tareasId
      tarea.estado = 'inbox'
      this.tareas.push(tarea)
    }
    else{
      this.cambiarTarea(tarea)
    }
  }
  this.borrarTarea = tareaId => {
    let tareaIndex = this.tareas.findIndex(tarea => tarea.id == tareaId)
    this.tareas.splice(tareaIndex, 1)
  }

  this.cambiarTarea = (tareaCambiada) => {
    let tareaActual = this.tareas.find(tarea => tarea.id == tareaCambiada.id)
    tareaActual = tareaCambiada
  }

  this.tareasIniciales()
}

angular.module(nombreServicio, [])
  .service(nombreServicio, funcionTareas)

export default nombreServicio