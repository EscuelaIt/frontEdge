import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import filaTarea from 'componentes/portada/lista-tareas/fila-tarea/fila-tarea'

import moduloServicioTareas from 'servicioTareas.js'

const raiz ="./componentes/portada/"
const nombreComponente = 'listaTareas'
const nombreFichero = 'lista-tareas'


angular.module(nombreComponente, ['ngMaterial', filaTarea, moduloServicioTareas])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`,
        controller : function(servicioTareas){
            this.tareas = servicioTareas.tareas
        }
    })


export default nombreComponente