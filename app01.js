//1a
const express = require('express')
//1b
const app = express()


//2
app.get('/', (req, res) => {
  console.log('ani hasharat - raz')
  res.send('Home Page')
  //res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

//3 
app.get('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})


//4
app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

