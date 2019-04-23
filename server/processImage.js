const Tesseract = require('tesseract.js')

const sharp = require('sharp');
 
// Set default values. 

    


const pruneFindings = (findings) => {
  const { text, confidence } = findings

  return {
    text,
    confidence
  }
}

module.exports = (imageName) => {
  const imagePath = 'uploads/' + imageName

  // sharp(imagePath)
  // .resize(2880, 1620)
  // .toFile('uploads/UPSCALED' + imageName, (err, info) => {
  //   console.log('DONE UPSCALE...', { err, info })
  //   const results = []
  //   Tesseract.recognize('uploads/UPSCALED' + imageName)
  //     .then(result => {
  //       console.log('DONE...')
  //       console.log(typeof result)
  //       console.log(Object.keys(result))
  //       console.log(result.text)
  //       console.log(result.confidence)
  //     })
  //  })

  Tesseract.recognize('uploads/its.png')
      .then(result => {
        console.log('DONE...')
        console.log(typeof result)
        console.log(Object.keys(result))
        console.log(result.text)
        console.log(result.confidence)
      })

  // Tesseract.recognize('uploads/' + imageName)
  // .progress(message => console.log(message))
  // .catch(err => console.error(err))
  // .then(result => console.log(result))
  // .finally(resultOrError => console.log(resultOrError))

    // .then(function(result){console.log('result is: ', result)})
}
