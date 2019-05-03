import sharp from 'sharp'
import vision from '@google-cloud/vision'

const PLAYER_NAMES_CROP_OPTIONS = {
  left: 150,
  top: 180,
  width: 300,
  height: 390
}

export const cropPlayerNames = async ({ inputPath, outputPath }) => {
  return sharp(inputPath)
    .sharpen()
    .flatten()
    .greyscale()
  // .extract(PLAYER_NAMES_CROP_OPTIONS)
}
