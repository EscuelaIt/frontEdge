import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const nombreApp = 'frontEdge'

angular.module(nombreApp,['ngMaterial'])

let documentoHTML = angular.element(document)

let iniciarApp = ()=>angular.bootstrap(documentoHTML,[nombreApp])

documentoHTML.ready(iniciarApp)