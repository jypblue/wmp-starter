'use strict';
const path = require('path');
const config = require('../config');

const resolve = function(dir) {
  return path.join(__dirname, '../', dir);
}

const srcDir = resolve('src');


exports.resolve = resolve;

exports.fileLoader = name => ({
  loader: 'file-loader',
  options: {
    publicPath: '',
    context: path.resolve(__dirname, srcDir),
    name
  }
})

exports.parseAlias = () => {
  const alias = {
    '@': srcDir,
  };
  for (const k in config.alias) {
    alias[k] = resolve(config.alias[k]);
  }
  return alias;
};

exports.copyPatterns = [
  {
    from: path.resolve(__dirname, resolve('static')),
    to: path.resolve(__dirname, resolve('dist/static'))
  }
]
	.concat(config.copyWebpack || [])
	.map(
		(pattern) =>
			typeof pattern === 'string' ? { from: pattern, to: pattern } : pattern,
	);

exports.srcDir = srcDir;
