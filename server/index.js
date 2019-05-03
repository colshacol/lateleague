import multer from 'multer'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import express from 'express'
import makeDir from 'make-dir'

import * as players from './routes/players'
import * as screenshots from './routes/screenshots'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

const generateFilename = async (request, file, callback) => {
  const { filename } = request.params
  callback(null, `${filename}.png`)
}

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: generateFilename
  })
})

app.get('/', (request, response) => {
  response.send('made it!')
})

app.get('/players', players.get)

app.post('/screenshots/:filename', upload.any(), screenshots.post)

app.listen(3001, () => {
  console.log('listening @ http://localhost:3001')
})
