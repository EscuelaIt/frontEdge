import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as toolbar from 'componentes/toolbar/toolbar'

const nombreApp = 'frontEdge'

angular.module(nombreApp,['ngMaterial', toolbar.nombre])

let documentoHTML = angular.element(document)

let iniciarApp = ()=>angular.bootstrap(documentoHTML,[nombreApp])

documentoHTML.ready(iniciarApp)