
const Artifactor = require('truffle-artifactor')


const contractNames = process.argv.slice(2)

contractNames.forEach(n => {
  const schema = require(__dirname + '/../../contracts/' + n + '.json')

  const artifactor = new Artifactor(__dirname + '/../../../src/contracts/' + n + '.ts')
  artifactor.save(schema)
});
