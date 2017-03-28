# Servifacil web site

## Installation

### Node
You can go to the [oficial web page](https://nodejs.org) and download it or you can use [nvm](https://github.com/creationix/nvm).

### NPM
The node package manager (`npm`) comes with node, dont worrie.

### Project
```
$ git clone git@github.com:SteedMx/servifacil.git
$ cd servifacil
$ npm install
```

## Build
You need to have installed [gulp](http://gulpjs.com/) in your machine.

### Development (debug)
```
$ gulp [default]
```

Gulp will run the next tasks:
- `debug:html`: will move `index.html` from `src` directory to `build` directory.
- `debug:images`: will move all images from `src` directory to `build` directory.
- `debug:css`: will compile all the stylus files ffom `src` directory and will create `main.css` in `build` directory.
- `debug:javascript`: will concat all javascript files from `src` and will create `all.js` in `build` directory.
- `server`: will start a server at `localhost:8080` that will serve `build` directory
- `watch`: will watch all `src` files, if some file changes will re-run the corresponding task.

### Production
```
$ gulp build
```

Gulp will run the next tasks:
- `dist:html`: will move and minify `index.html` from `src` directory to `build` directory.
- `dist:images`: will move and optimize all images from `src` directory to `build` directory.
- `dist:css`: will compile and compress all the stylus files ffom `src` directory and will create `main.css` in `build` directory.
- `dist:javascript`: will concat, compress and uglify all javascript files from `src` and will create `all.js` in `build` directory.
- `clean`: will delete `src` directory and will move all files and directories from `build` to the root of the project.

### Github
```
$ gulp github
```

Gulp will run the next tasks:
- `gh:html`: will move and minify `index.html` from `src` directory to `docs` directory.
- `gh:images`: will move and optimize all images from `src` directory to `docs` directory.
- `gh:css`: will compile and compress all the stylus files ffom `src` directory and will create `main.css` in `docs` directory.
- `gh:javascript`: will concat, compress and uglify all javascript files from `src` and will create `all.js` in `docs` directory.

