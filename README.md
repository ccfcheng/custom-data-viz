# Custom Data Visualizations

Proof of concept web app to create arbitrary d3 charts for data

## Getting Started

Run `npm install` then `npm run serve` to start the development server with hot reloads

### Development & Scripts

Edit files in `./app/` folder, this is the entry point for the Webpack bundle. Built bundle will be written to `./dist` folder.

If any changes need to be made to the main html wrapper at `./index.html`, they will be copied to the `./dist` folder on build.

Start development server with live Webpack incremental builds:
```
npm run serve
```

Start production server and build Webpack bundle:
```
npm run serve:dist
```

Start production server only:
```
npm start
```

Run Mocha/Chai Unit Tests:
```
npm run mocha
```
To run tests continuously:
```
npm run mocha:watch
```

Run ESLint:
```
npm run lint
```

Run both unit tests and linting, same as Travis CI:
```
npm test
```

## Author

* Cliff Saporta Cheng - [ccfcheng](https://github.com/ccfcheng)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
