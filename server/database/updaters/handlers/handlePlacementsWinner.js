import * as db from '../../..'

import { POST_PLACEMENTS_LEAGUES, MMRS } from '../consts'

const isFinalPlacementsMatch = (player) => {
  return player.placements.wins + player.placements.losses === 5
}

const calculatePostPlacementsLeague = (player) => {
  const finalStreak = `${player.placements.wins}-${player.placements.losses}`
  return POST_PLACEMENTS_LEAGUES[finalStreak]
}

export const handlePlacementsWinner = (player) => {
  if (isFinalPlacementsMatch(player)) {
    const [league, rank] = calculatePostPlacementsLeague(player)
    const mmr = MMRS[`${league} ${rank}`]
    const placements = undefined

    db.savePlayer({
      ...player,
      placements,
      league,
      rank,
      mmr
    })
  }

  const placements = {
    ...player.placements,
    wins: player.placements.wins + 1
  }

  db.savePlayer({
    ...player,
    placements
  })
}
