const express = require('express')
const app = express()

app.use(express.static('src'))

app.post('/message', (req, res) => {
  console.log(req.data)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html')
})

app.listen(process.env.PORT || 8000, () => {
  console.log('DMS Jindabad')
})
