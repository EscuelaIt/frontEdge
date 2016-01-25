# Getting Things Done SPA

## jspm
``` 
jspm update

```


transclusion multi-slot : directiva anuncio en configuracion y navegacion
clases ES6 en los controladores de lista-tareas y tarea


paso a producción
http://jspm.io/docs/production-workflows.html


``` 
jspm bundle main build.js
// <script src="build.js"></script>

jspm bundle main build.js --inject
// sin tocar html

jspm unbundle
// para volver a ficheros


jspm bundle-sfx main.js app.js
// app.js autocontiene un microcargador


css

jspm install css
jspm install clean-css
import 'jspm_packages/npm/angular-material@1.0.2/angular-material.css!';


sudo npm install ng-annotate -g  -save-dev

jspm bundle-sfx main.js app.js -m



```