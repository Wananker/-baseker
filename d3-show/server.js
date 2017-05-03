var webpack = require('webpack')
var proxy = require("express-http-proxy");
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))();
var port = 3000;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

const API_HOST = 'http://localhost:8081';

var apiProxy = proxy(API_HOST, {
    forwardPath: function (req, res) {
        return req._parsedUrl.path
    }
});
app.use("/api/*", apiProxy);

app.use(function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
