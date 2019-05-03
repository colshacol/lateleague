import * as db from '../'

import { handlePlacementsWinner } from './handlers/placements'
import { handlePromoWinner } from './handlers/promos'

export const calculateWinnerStreak = (player) => {
  return player.streak >= 0 ? player.streak + 1 : 1
}

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

const calculateWinnerLP = (player) => {
  // If streak is 3 or greater, calculate
  // 1 added bonus point for every 3 in streak.
  // (Maxed out at 15.)
  const bonus = player.streak > 2 ? Math.floor(player.streak / 3) : 0
  const newLP = player.lp + 3 + bonus
  return newLP > 15 ? 15 : newLP
}

const canGoIntoPromos = (player) => {
  if (player.league === 'silver' && player.rank == 1) {
    return false
  }

  return true
}

export const winner = (name) => {
  const player = db.getPlayer(name)
  player.streak = calculateWinnerStreak(player)

  if (player.placements) {
    console.log(`${player.name} won a placements match.`)
    player.placements.wins += 1
    return handlePlacementsWinner(player)
  }

  // handle promo win
  if (player.promos) {
    console.log(`${player.name} won a promo match.`)
    player.promos.wins += 1
    return handlePromoWinner(player)
  }

  // If players lp is already 15 and they won, then they will
  // now enter promos.
  if (player.lp === 15 && canGoIntoPromos(player)) {
    console.log(`${player.name} entering promos.`)
    return handleWinToPromos(player)
  }

  const lp = calculateWinnerLP(player)

  db.savePlayer({
    ...player,
    lp
  })
}
