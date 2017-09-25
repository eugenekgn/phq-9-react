import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config.dev.js';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';


const app = express();

//TODO: move express configuration in a separate file
app.use(bodyParser.json());


//TODO: move out routes to a separate file
import phq9 from './routes/phq9';

app.use('/api/phq9', phq9);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}));

app.use(webpackHotMiddleware(compiler));

//Index.js
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/static', express.static(path.join(__dirname, '../../style')));

app.listen(9001, () => {
  console.log('Running on port', 9001)
});
