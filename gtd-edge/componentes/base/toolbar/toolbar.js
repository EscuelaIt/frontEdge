import * as angular from 'angular'
import 'angular-material'

const raiz ='./componentes/base/'
const nombreComponente = 'toolbar'

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
      templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })


export default nombreComponente