const express = require('express')
const app = express()
const port = process.env.PORT || 3030
const serveIndex = require('serve-index')

app.use(express.static('./public/'))
app.use(serveIndex('/public/', {
  icons: true
}))

app.listen(port, function () {
  console.log('Express server listening on port ' + port)
  console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd())
})
