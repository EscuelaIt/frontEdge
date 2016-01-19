import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as toolbar from 'componentes/toolbar/toolbar'
import * as sidenav from 'componentes/sidenav/sidenav'
import * as listaTareas from 'componentes/lista-tareas/lista-tareas'
import * as fichaTarea from 'componentes/ficha-tarea/ficha-tarea'
import * as fab from 'componentes/fab/fab'

const nombreApp = 'frontEdge'

angular.module(nombreApp,['ngMaterial', toolbar.nombre, sidenav.nombre, listaTareas.nombre, fichaTarea.nombre, fab.nombre])

let documentoHTML = angular.element(document)

let iniciarApp = ()=>angular.bootstrap(documentoHTML,[nombreApp])

documentoHTML.ready(iniciarApp)