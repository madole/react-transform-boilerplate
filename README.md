React Transform Boilerplate
=====================

A *new* Webpack boilerplate with:

* hot reloading React components;
* error handling inside component `render()` function;
* error handling for syntax errors (thanks, **[@glenjamin](https://github.com/glenjamin)**!)
* Redux
* Redux dev tools
* Async Actions 
* Redux Thunk middleware
* Material UI
* React-mixins (for use with ES7 Decorators)

Built with **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)** and a few custom transforms.  
**[Does not](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4)** use React Hot Loader.

[![react-transform channel on slack](https://img.shields.io/badge/slack-react--transform%40reactiflux-61DAFB.svg?style=flat-square)](http://www.reactiflux.com)

## Demo

```
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```

Then go ahead and edit files inside `src` (any file except `index.js`).

## What’s Inside


The component instrumentation is implemented on top of **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)**:

* **[react-transform-webpack-hmr](https://github.com/gaearon/react-transform-webpack-hmr)** handles hot reloading
* **[react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors)** catches component errors

The syntax errors are displayed in an overlay by **[@glenjamin](https://github.com/glenjamin)**’s **[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)** which replaces Webpack Dev Server.

## Discussion

You can discuss React Transform and related projects in **#react-transform** channel on [Reactiflux Slack](http://reactiflux.com).

## License

CC0 (public domain)
