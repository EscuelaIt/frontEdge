import * as angular from 'angular'
import * as angularUiRouter from 'angular-ui-router'

import listaTareas from 'componentes/portada/lista-tareas/lista-tareas'

const nombreComponente = 'portada'

let configurarEstado = ($stateProvider) => {
    $stateProvider
        .state(nombreComponente, {
            url: '/',
            template: '<lista-tareas></lista-tareas>'
        });
}

angular.module(nombreComponente, ['ui.router',listaTareas])
  .config(configurarEstado)

    
export default nombreComponente