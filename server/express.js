const multer = require('multer')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const app = express()
const makeDir = require('make-dir')
const croppers = require('./images/croppers')
const vision = require('@google-cloud/vision')
const text = require('./text/processor')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: async (request, file, callback) => {
    const { identifier, filename } = request.params
    const dirPath = await makeDir(`uploads/${identifier}`)
    callback(null, `${identifier}/${filename}.png`)
  }
})

const upload = multer({ storage })

app.get('/', (request, response) => {
  response.send('made it!')
})

app.post(
  '/screenshots/:identifier/:filename',
  upload.any(),
  async (request, response) => {
    const { identifier, filename } = request.params
    const inputPath = `uploads/${identifier}/${filename}.png`
    const outputPath = `uploads/${identifier}/${filename}_playerNames.png`

    response.send(request.files[0].filename)

    const playerNamesImage = await croppers.cropPlayerNames({
      inputPath,
      outputPath
    })

    playerNamesImage.toBuffer(async (error, data, info) => {
      if (error) throw new Error(error)
      const client = new vision.ImageAnnotatorClient();
      const [result] = await client.textDetection(data)
      text.parsePlayerNames(result.textAnnotations)
    })
  }
)

app.listen(3001, () => {
  console.log('listening @ http://localhost:3001')
})
