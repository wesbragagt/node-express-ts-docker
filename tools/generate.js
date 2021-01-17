const path = require('path')
const fs = require('fs')

const [_, routeName] = process.argv
const filesToRead = fs.readdirSync(path.resolve(__dirname, 'templates'))
const files = filesToRead.map(file =>
  fs.readFileSync(path.join(__dirname, 'templates', file))
)

const testDir = path.resolve(__dirname, '../src/__tests__')
const routesDir = path.resolve(__dirname, '../src/routes')

console.log({ testDir, routesDir })
