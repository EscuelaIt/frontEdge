// fichero principal
// importar librerias ES5 estilo ES6 
import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const appName = 'frontEdge'

// declaración del módulo principal y sus dependencias
angular.
  module(appName, ['ngMaterial'])
  
// arranque manual de AngularJS 
// uso de las arrow functions de ES6 
angular.
  element(document).
    ready(() => angular.bootstrap(document, [appName]))
