import * as angular from 'angular'

import toolbar from 'componentes/base/toolbar/toolbar'
import sidenav from 'componentes/base/sidenav/sidenav'
import fab from 'componentes/base/fab/fab'

const nombreComponente = 'base'

angular.module(nombreComponente, [toolbar, sidenav, fab])

export default nombreComponente