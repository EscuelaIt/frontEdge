import * as angular from 'angular'

const nombreServicio = 'servicioTareas'

function funcionTareas() {
  this.tareas = []
  this.tareasId = 0

  this.tareasIniciales = () => {
    this.tareas = [
      { id: 1, texto: 'tarea inicial', estado: 'inbox' }, 
      { id: 2, texto: 'tarea programada', estado: 'scheduled' }, 
      { id: 3, texto: 'tarea ya hecha', estado: 'done' }]
    this.tareasId = 3
  }

  this.crearTarea = tarea => {
    this.tareasId++
    tarea.id = this.tareasId
    tarea.estado = 'inbox'
    this.tareas.push(tarea)
  }

  this.borrarTarea = tareaID => {
    let tareaIndex = this.tareas.findIndex(tarea => tarea.id == tareaID)
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