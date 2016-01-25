import * as angular from 'angular'
import 'angular-material'

const raiz ='./componentes/base/'
const nombreComponente = 'sidenav'

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
      templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })

export default nombreComponente