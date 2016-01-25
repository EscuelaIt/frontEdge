import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz = "./componentes/portada/lista-tareas/"
const nombreComponente = 'filaTarea'
const nombreFichero = 'fila-tarea'

angular.module(nombreComponente, ['ngMaterial'])
  .component(nombreComponente, {
    templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`,
    bindings: { tarea: '=' }
  })

export default nombreComponente