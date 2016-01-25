import * as angular from 'angular'
import 'angular-material'
import filaTarea from 'componentes/portada/lista-tareas/fila-tarea/fila-tarea'
import listaTareasCtrl from 'componentes/portada/lista-tareas/lista-tareas-ctrl'

import moduloServicioTareas from 'servicioTareas.js'

const raiz ='./componentes/portada/'
const nombreComponente = 'listaTareas'
const nombreFichero = 'lista-tareas'


angular.module(nombreComponente, ['ngMaterial', filaTarea, moduloServicioTareas])
    .component(nombreComponente, {
      templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`,
      controller : ['servicioTareas',listaTareasCtrl]
    })


export default nombreComponente