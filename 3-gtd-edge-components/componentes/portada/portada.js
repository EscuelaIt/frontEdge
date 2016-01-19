import * as angular from 'angular'

import * as toolbar from 'componentes/toolbar/toolbar'
import * as sidenav from 'componentes/sidenav/sidenav'
import * as listaTareas from 'componentes/lista-tareas/lista-tareas'
import * as fichaTarea from 'componentes/ficha-tarea/ficha-tarea'
import * as fab from 'componentes/fab/fab'

const nombreComponente = 'portada'

angular.module(nombreComponente, [toolbar.nombre, sidenav.nombre, listaTareas.nombre, fichaTarea.nombre, fab.nombre])
    


export default nombreComponente