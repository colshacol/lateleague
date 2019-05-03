import stringSimilarity from 'string-similarity'

import * as db from '../database'
import updaters from '../database/updaters'

const similarity = (a, b) => {
  return stringSimilarity.compareTwoStrings(a.toLowerCase(), b.toLowerCase())
}

// Removes the "clan"s from the lines of text. i.e:
// [mcln]
// player0
// [xcln]
// player1
const filterPlayerNames = (textLines) => {
  return textLines.filter((text, i) => {
    return i % 2
  })
}

const extractPlayerNames = (text) => {
  const names = text.description.split('\n')
  return filterPlayerNames(names)
}

const getWinnersAndLosers = (names) => {
  // First 4 names will be winners.
  const winners = names.slice(0, 4)
  // Last 4 names will be losers.
  const losers = names.slice(4)

  return {
    winners,
    losers
  }
}

// NOTE: Needs to be updated to sort all DB player names by similarity
// and then chooses the highest similarity name.
const getLeaguePlayers = (matchPlayers) => {
  const leaguePlayerNames = db.getAllPlayerNames()

  return matchPlayers.reduce((final, name, index) => {
    const match = leaguePlayerNames.find((leaguePlayerName) => {
      return similarity(name, leaguePlayerName) > 0.9
    })

    return match ? [...final, match] : final
  }, [])
}

export const parsePlayerNames = (annotations) => {
  const playerNames = extractPlayerNames(annotations[0])
  const { winners, losers } = getWinnersAndLosers(playerNames)

  const leagueWinners = getLeaguePlayers(winners)
  const leagueLosers = getLeaguePlayers(losers)

  return [leagueWinners, leagueLosers]
}

module.exports = {
  parsePlayerNames
}
