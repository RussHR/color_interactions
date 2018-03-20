# Color Interactions

This is the source code for a collection of interactive exercises that explore different phenomena of color. The exercises are loosely based on ones present in [Josef Albers](https://en.wikipedia.org/wiki/Josef_Albers)’s renowned book, [Interaction of Color](https://yalebooks.yale.edu/book/9780300179354/interaction-color). This site exists as a non-profit, educational resource.

[russrinzler.com/color-interactions](http://russrinzler.com/color-interactions/#/)


## Getting Started

These are rough guidelines on how to get this running locally on your computer.

### Prerequisites

You will need node and npm accessible in your cli. You can get those here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)


### Installing

Clone or download this respository and then within it, run
```
npm i
```

Once things have finished installing, runs the following command to get a local server started:
```
npm run dev
```

Then visit `localhost:8080` and you're good to go!


## Building production-ready files

Running `npm run build` will create a `dist/` directory with an `index.html`, `bundle.js`, and `bundle.js.map/` (the source maps).

## Built With

* [React Color](https://casesandberg.github.io/react-color/) - the color picker
* [Classnames](https://github.com/JedWatson/classnames) - a JavaScript utility for conditionally joining classNames together
* [React](https://reactjs.org/) - a JavaScript library for building user interfaces
* [webpack](https://webpack.js.org/) - module bundler
* [autoprefixer](https://github.com/postcss/autoprefixer) - parses CSS and adds vendor prefixes to CSS rules
* [Babel](https://babeljs.io/) - transpiler for es6
* [Sass](http://sass-lang.com/) - a scripting language that is compiled into CSS
* [lodash](https://lodash.com/) - javascript utility library
* [noisejs](https://github.com/josephg/noisejs) - library for Perlin noise
* [normalize.css](https://necolas.github.io/normalize.css/) - makes browsers render elements more consistently
* [Redux](https://redux.js.org/) - a predictable state container for JavaScript apps
* [React Router](https://github.com/ReactTraining/react-router) - creates a client-side, hash-dependent router
* [es6 boilerplate](https://github.com/RussHR/es6-boilerplate) - a personal boilerplate for es6 projects
* [color](https://www.npmjs.com/package/color) - does color calculations

## Random thoughts

* Does this need Redux? Absolutely not, but work was picking it up and I needed to brush up on it.
* The JS is messy! I was rushing to get an MVP out the door and an end-of-the-year deadline snuck up on me.
* Yes, I know I don't have tests.
* Yes, the CSS is messy. I was playing around with a [BEM CSS](http://getbem.com/introduction/) approach for a while and then realized I have a very shallow understanding of it.


## Acknowledgments

* This gist for providing an excellent README.md template: [https://gist.github.com/PurpleBooth/109311bb0361f32d87a2](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* Thank you everyone for all the npm packages
* [http://lea.verou.me/css3patterns/#steps](http://lea.verou.me/css3patterns/#steps) for the CSS used in demonstrating the Bezold effect
* [https://stackoverflow.com/questions/35361986/css-gradient-checkerboard-pattern](https://stackoverflow.com/questions/35361986/css-gradient-checkerboard-pattern) for the Checkerboard CSS
