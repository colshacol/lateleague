const stringSimilarity = require('string-similarity')
const feedData = require('./feedData.json')

const similarity = (a, b) => {
  return stringSimilarity.compareTwoStrings(a.toLowerCase(), b.toLowerCase())
}

const filterPlayerNames = (textLines) => {
  return textLines.filter((text, i) => {
    return i % 2
  })
}

const parsePlayerNames = (annotations) => {
  const [completeText] = annotations.map(annotation => {
    return annotation.description.split('\n')
  })

  const playerNames = filterPlayerNames(completeText)

  const applicablePlayerNames = playerNames.reduce((final, name, index) => {
    const match = feedData.playerNames.find(feedName => {
      return similarity(name, feedName) > 0.9
    })

    if (match) {
      final[index] = { playerName: match }
    }

    return final
  }, {})

  console.log(applicablePlayerNames)
}

module.exports = {
  parsePlayerNames
}