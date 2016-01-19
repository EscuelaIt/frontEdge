import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

import base from 'componentes/base/base'
import portada from 'componentes/portada/portada'
import tarea from 'componentes/tarea/tarea'
import configuracion from 'componentes/configuracion/configuracion'

const nombreApp = 'frontEdge'

angular.module(nombreApp,['ngMaterial', base, portada])

let documentoHTML = angular.element(document)

let iniciarApp = ()=>angular.bootstrap(documentoHTML,[nombreApp])

documentoHTML.ready(iniciarApp)