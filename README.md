# uuComponentLibrary

## AlertBox komponenta
![](/home/pfilip/Projects/unicorn/tga/uuComponentLibrary/alertBox.png)
Demo: tga_petrFilipg01/demo/core/alert-box.html


## UnexpectedSuccess komponenta
![](/home/pfilip/Projects/unicorn/tga/uuComponentLibrary/unexpectedSuccess.png)
Demo: tga_petrFilipg01/demo/core/unexpected-success.html

## sumCounter funkce
- sečte všechna čísla v poli zaslaném v parametru
- veškeré nenumerické znaky jsou ignorovány
- použití `SumCounter([...])` - snad vše pokryto testy

## Jak udělat novou uuLib

Vygenerování nové libky: `npx create-uulib`

```js
Library stack - one of uu5, iso, nodejs, java, ruby [uu5]:
Library name [uu_component_library]: tga_petrFilipg01
JS global namespace, e.g. UuTiles [TgaPetrFilip]:
Generate specific content - one of decoration, empty [empty]:

Creating project tga_petrFilipg01:
  Creating project structure...
Generating project content...
Registering project in uuapp.json...
Installing packages (this may take a while)...

added 2010 packages in 1m

121 packages are looking for funding
  run `npm fund` for details
  Installing packages in workspace root (this may take a while)...

added 2011 packages in 32s

121 packages are looking for funding
  run `npm fund` for details
  ...finished.

```

Vygenerování nové komponenty `cd tga_petrFilipg01/ && npm run generate component Core.AlertBox`
```
> tga_petrFilipg01@0.1.0 generate
> uu_appg01_devkit generate "component" "Core.AlertBox"

  src/config/config.js... creating
  src/index.js... updating
  src/core/config/config.js... creating
  src/core/core.js... creating
  src/core/alert-box.js... creating
  demo/core/alert-box.html... creating
  test/core/alert-box.test.js... creating
  src/core/core.js... updating
  ../uuapp.json... updating

```

Spuštění serveru `npm start`

```
> tga_petrFilipg01@0.1.0 start
> uu_appg01_devkit start

Building project.

BUILD OVERVIEW
External dependencies (including transitive):
  create-react-class  
  prop-types          
  react               
  react-dom           
  uu5g04              
  uu5g04-block-layout 
  uu5g04-bricks       
  uu5g04-bricks-editable
  uu5g04-forms        
  uu5g04-hooks        

Dependencies from package.json bundled directly into main JS file (if imported):
  <none>

Running webpack.
Project is running at http://localhost:4321 (bound to all IPs)
Webpack output is served from /home/pfilip/Projects/unicorn/tga/uuComponentLibrary/tga_petrFilipg01/target/dist
Compiling...
(node:1237257) ExperimentalWarning: Package name self resolution is an experimental feature. This feature could change at any time
Compiled successfully! [451ms]


```

V demo souboru smazat slovo `production` v závislosti:

```
      SystemJS.config({
        "paths": {
          "react": "https://cdn.plus4u.net/libs/react/16.14.0/react.production.min.js",
          "react-dom": "https://cdn.plus4u.net/libs/react-dom/16.14.0/react-dom.production.min.js",
```

```
  SystemJS.config({
        "paths": {
          "react": "https://cdn.plus4u.net/libs/react/16.14.0/react.min.js",
          "react-dom": "https://cdn.plus4u.net/libs/react-dom/16.14.0/react-dom.min.js",
```

Server je spuštěn na adrese: http://localhost:4321

# Development and Usage

See following guidelines:

- [uuAppg01Devkit Documentation](https://uuapp.plus4u.net/uu-bookkit-maing01/e884539c8511447a977c7ff070e7f2cf/book)
- [uuSubApp Instance Descriptor](https://uuapp.plus4u.net/uu-bookkit-maing01/289fcd2e11d34f3e9b2184bedb236ded/book/page?code=uuSubAppInstanceDescriptor)
- [UU5 Library Project](https://uuapp.plus4u.net/uu-bookkit-maing01/e884539c8511447a977c7ff070e7f2cf/book/page?code=uuLibCreation)
