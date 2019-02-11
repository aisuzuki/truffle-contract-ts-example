"use strict";
const artifactor = require('truffle-artifactor');
const contractNames = process.argv.slice(2);
contractNames.forEach(n => {
    const schema = require('../../build/contracts/' + n + '.json');
    artifactor.save(schema, '../contracts/' + n + '.js');
});
//# sourceMappingURL=artifactor.js.map