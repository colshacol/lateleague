import vision from '@google-cloud/vision'

import * as updaters from '../../database/updaters'
import * as croppers from '../../images/croppers'
import * as text from '../../text/processor'

const handleImageBuffer = async (error, data, info) => {
  if (error) throw new Error(error)
  const client = new vision.ImageAnnotatorClient()

  try {
    const [result] = await client.textDetection(data)
    const [winners, losers] = text.parsePlayerNames(result.textAnnotations)

    winners.forEach((winner) => {
      updaters.winner(winner)
    })

    losers.forEach((loser) => {
      updaters.loser(loser)
    })
  } catch (error) {
    console.log('ERROR:\n\n', error)
  }
}

export const post = async (request, response) => {
  const { filename } = request.params
  const inputPath = `uploads/${filename}.png`
  const outputPath = `uploads/${filename}_playerNames.png`

  response.send(request.files[0].filename)

  try {
    const playerNamesImage = await croppers.cropPlayerNames({
      inputPath,
      outputPath
    })

    playerNamesImage.toBuffer(handleImageBuffer)
  } catch (error) {
    console.log('ERROR:\n\n', error)
  }
}
