const app = require('express')()
const path = require('path')

app.get('/', (req, res) => {
  console.log('!')
  res.sendFile(path.resolve('jsct-fundamentals.pdf'))
})

require('dns').lookup(require('os').hostname(), function (err, address, fam) {
  console.log('IP:', address)
})

app.listen(3000, () => console.log('listening on 3000'))