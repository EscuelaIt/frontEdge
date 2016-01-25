import * as angular from 'angular'

import toolbar from 'componentes/base/toolbar/toolbar'
import sidenav from 'componentes/base/sidenav/sidenav'
import fab from 'componentes/base/fab/fab'
import anuncio from 'componentes/base/anuncio/anuncio'

const nombreComponente = 'base'

angular.module(nombreComponente, [toolbar, sidenav, fab, anuncio])

export default nombreComponente