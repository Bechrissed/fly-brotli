'use strict';

const fs = require('fs');
const compress = require('brotli/compress');
const defs = require('./config');

module.exports = {
	name: 'brotli',
	* func(file, opts) {
		opts = Object.assign({}, defs, opts);

        const comp = compress(fs.readFileSync(file.data.toString()), opts);
        fs.writeFile('file.br', comp, function (err) {
            if (err) return console.log(err);
            console.log('Hello World > helloworld.txt');
        });
	}
};
