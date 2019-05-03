import * as db from '../../'

import { PROMO_WINS_REQUIRED, MMRS } from '../consts'

// Has the player won 3 or more games in their league promos?
const playerPassedLeaguePromos = (player) => {
  return player.promos.wins + 1 >= PROMO_WINS_REQUIRED.league
}

// Has the player won 2 or more games in their rank promos?
const playerPassedRankPromos = (player) => {
  return player.promos.wins + 1 >= PROMO_WINS_REQUIRED.rank
}

// Add one to player's promo wins and save the updated player's
// data in the DB.
const incrementPromoWinsAndSavePlayer = (player) => {
  const promos = {
    ...player.promos,
    wins: player.promos.wins + 1
  }

  db.savePlayer({
    ...player,
    promos
  })
}

const handleLeaguePromoWinner = (player) => {
  // If player has reached number of wins required to pass league promos,
  // set LP to 0, set league to next league and rank 3, get correct MMR,
  // unset the player's promos data, and save the player in the DB.
  if (playerPassedLeaguePromos(player)) {
    const lp = 0
    const promos = undefined
    const rank = 3
    const league = 'silver'
    const mmr = MMRS[`${league} ${rank}`]

    db.savePlayer({
      ...player,
      promos,
      lp,
      rank,
      league,
      mmr
    })
  }

  // Otherwise, just increment the player's promo wins and save
  // the updated player in the DB.
  incrementPromoWinsAndSavePlayer(player)
}

const handleRankPromoWinner = (player) => {
  // If player has reached number of wins required to pass rank promos,
  // set LP to 0, set rank to former rank plus 1, get correct MMR,
  // unset the player's promos data, and save the player in the DB.
  if (playerPassedRankPromos(player)) {
    const lp = 0
    const promos = undefined
    const rank = player.rank + 1
    const mmr = MMRS[`${player.league} ${rank}`]

    db.savePlayer({
      ...player,
      promos,
      lp,
      rank,
      mmr,
      streak
    })
  }

  // Otherwise, just increment the player's promo wins and save
  // the updated player in the DB.
  incrementPromoWinsAndSavePlayer(player)
}

export const handlePromoWinner = (player) => {
  return player.promos.type === 'rank'
    ? handleRankPromoWinner(player)
    : handleLeaguePromoWinner(player)
}
