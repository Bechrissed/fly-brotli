'use strict';

const compress = require('brotli/compress');
const defs = require('./config');

module.exports = {
	name: 'brotli',
	* func(file, opts) {
		opts = Object.assign({}, defs, opts);
		const comp = compress(file.data.toString(), opts).file.output.concat('.br');
        const compressedFile = comp.output.concat('.br');
		file.data = new Buffer(compressedFile);

        file.push();
	}
};
