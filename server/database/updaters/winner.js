import * as db from '../'

import {
  RANK_PROMO_LOSS_LPS,
  LEAGUE_PROMO_LOSS_LPS,
  PROMO_MATCH_TOTALS,
  PROMO_WINS_REQUIRED,
  MMRS
} from './consts'

const determinePromoType = (player) => {
  return player.rank === 1 ? 'league' : 'rank'
}

const handleWinToPromos = (player) => {
  const promos = {
    type: determinePromoType(player),
    wins: 0,
    losses: 0
  }

  db.savePlayer({
    ...player,
    promos
  })
}

// Has the user won 3 or more games in their league promos?
const isFinalLeaguePromoGame = (player) => {
  return player.promos.wins + 1 >= PROMO_WINS_REQUIRED.league
}

// Has the user won 2 or more games in their rank promos?
const isFinalRankPromoGame = (player) => {
  return player.promos.wins + 1 >= PROMO_WINS_REQUIRED.rank
}

// Add one to player's promo wins and save the updated user's
// data in the DB.
const incrementPromoWinsAndSavePlayer = (player) => {
  const streak = calculateWinnerStreak(player)

  const promos = {
    ...player.promos,
    wins: player.promos.wins + 1
  }

  db.savePlayer({
    ...player,
    streak,
    promos
  })
}

const handleLeaguePromoWinner = (player) => {
  // If player has reached number of wins required to pass league promos,
  // set LP to 0, set league to next league and rank 3, get correct MMR,
  // unset the player's promos data, and save the user in the DB.
  if (isFinalLeaguePromoGame(player)) {
    const lp = 0
    const promos = undefined
    const rank = 3
    const league = player.league === 'bronze' ? 'silver' : 'bronze'
    const mmr = MMRS[`${league} ${rank}`]
    const streak = calculateWinnerStreak(player)

    db.savePlayer({
      ...player,
      promos,
      lp,
      rank,
      league,
      mmr,
      streak
    })
  }

  // Otherwise, just increment the player's promo wins and save
  // the updated user in the DB.
  incrementPromoWinsAndSavePlayer(player)
}

const handleRankPromoWinner = (player) => {
  // If player has reached number of wins required to pass rank promos,
  // set LP to 0, set rank to former rank plus 1, get correct MMR,
  // unset the player's promos data, and save the user in the DB.
  if (isFinalRankPromoGame(player)) {
    const lp = 0
    const promos = undefined
    const rank = player.rank + 1
    const mmr = MMRS[`${player.league} ${rank}`]
    const streak = calculateWinnerStreak(player)

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
  // the updated user in the DB.
  incrementPromoWinsAndSavePlayer(player)
}

const calculateWinnerLP = (player) => {
  // If streak is 3 or greater, calculate
  // 1 added bonus point for every 3 in streak.
  // (Maxed out at 15.)
  const streak = player.streak + 1
  const bonus = streak > 2 ? Math.floor(streak / 3) : 0
  const newLP = player.lp + 3 + bonus
  return newLP > 15 ? 15 : newLP
}

export const calculateWinnerStreak = (won) => (player) => {
  return player.streak >= 0 ? player.streak + 1 : 1
}

export const winner = (name) => {
  const player = db.getPlayer(name)

  // handle promo win
  if (player.promos) {
    return player.promos.type === 'rank'
      ? handleRankPromoWinner(player)
      : handleLeaguePromoWinner(player)
  }

  // enter promos
  if (player.lp === 15) {
    return handleWinToPromos(player)
  }

  const lp = calculateWinnerLP(player)
  const streak = calculateWinnerStreak(player)

  db.savePlayer({
    ...player,
    lp,
    streak
  })
}
