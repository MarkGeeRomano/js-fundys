const app = require('express')()
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.resolve('assets','smol.pdf'))
})

app.listen(3000, () => console.log('listening on 3000'))