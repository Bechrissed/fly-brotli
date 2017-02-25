'use strict';

const compress = require('brotli/compress');
const defs = require('./config');

module.exports = {
	name: 'brotli',
	* func(file, opts) {
		opts = Object.assign({}, defs, opts);
		const comp = compress(file.data.toString(), opts);
		file.data = new Buffer(comp);
	}
};
