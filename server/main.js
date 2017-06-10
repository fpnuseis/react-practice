import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import bodyParser from 'body-parser'

const app = express();
const port = 3000;
const devPort = 3001;


if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//app.use(express.bodyParser());
app.use('/', express.static(__dirname + '/../public'));

import counter from './routes/counter';
let data = { number: 0 };
app.use('/counter', counter(data));

import login from './routes/login';
let login_data = {msg:''};
app.use('/login',login(login_data));

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});