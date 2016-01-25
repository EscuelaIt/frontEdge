import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz ="./componentes/base/"
const nombreComponente = 'anuncio'

angular.module(nombreComponente, ['ngMaterial'])
    .directive(nombreComponente, ()=>{
      return {
        restrict: 'E',
        transclude: { titulo:'titulo', texto:'?texto'  },
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
      };
  })



export default nombreComponente