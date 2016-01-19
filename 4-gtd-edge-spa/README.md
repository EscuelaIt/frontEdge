# Getting Things Done Seed

## npm

```
npm init

npm install jspm -g
```

## jspm
```
jspm init

create index.html

jspm install angular=npm:angular@1.5.0-rc.0

ng-App
module

bootstrap app


Material
jspm install angular-animate=npm:angular-animate@1.5.0-rc.0
jspm install angular-aria=npm:angular-aria@1.5.0-rc.0

hojas de estilo
iconos https://design.google.com/icons/

jspm install angular-material=npm:angular-material@^1.0.2


flex


```

y comentar lineas en config.js

```javascript
map: {
  // ...
  "npm:angular-material@1.0.1": {
      //"angular": "github:angular/bower-angular@1.4.8",
      //"angular-animate": "github:angular/bower-angular-animate@1.4.8",
      //"angular-aria": "github:angular/bower-angular-aria@1.4.8",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
 }
 ```
 
## Angular Material Design
 
 md-toolbar

stylesheet
<link href="jspm_packages/npm/angular-material@1.0.2/angular-material.css" rel="stylesheet"/>
 
 
 
 ## intellisense: ayudas al tecleo en VSCode con 
 [definitelytyped](http://definitelytyped.org/tsd/)
 
 ```
 npm install tsd -g
 
 tsd install angular -s -v latest
 tsd install angular-material -s -v latest
 ```
 
 Esto genera un fichero tsd.json y un directorio typings