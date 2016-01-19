import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz ="./componentes/portada/lista-tareas/"
const nombreComponente = 'tarea'

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })

export default nombreComponente