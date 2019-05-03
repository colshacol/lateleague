import * as db from '../'

import { handlePlacementsLoser } from './handlers/placements'
import { handlePromoLoser } from './handlers/promos'

const getNextRankDown = (player) => {
  if (player.rank == 3 && player.league === 'silver') {
    return ['bronze', 1]
  }

  if (player.rank < 3) {
    return [player.league, player.rank + 1]
  }
}

const handleRankDrop = (player) => {
  const [league, rank] = getNextRankDown(player)

  db.savePlayer({
    ...player,
    league,
    rank
  })
}

const canDropRank = (player) => {
  return !(player.league === 'bronze' && player.rank == 3)
}

export const calculateLoserStreak = (player) => {
  return player.streak > 0 ? -1 : player.streak - 1
}

const calculateLoserLP = (player) => {
  // If streak is -3 or greater, calculate
  // 1 added bonus point for every -3 in streak.
  // (Maxed out at -15.)
  const bonus = player.streak < -2 ? Math.floor(player.streak / -3) : 0
  const newLP = player.lp - 3 - bonus
  return newLP < -15 ? -15 : newLP
}

export const loser = (name) => {
  const player = db.getPlayer(name)
  player.streak = calculateLoserStreak(player)

  if (player.placements) {
    console.log(`${player.name} lost a placements match.`)
    player.placements.losses += 1
    return handlePlacementsLoser(player)
  }

  if (player.promos) {
    console.log(`${player.name} lost a promo match.`)
    player.promos.losses += 1
    return handlePromoLoser(player)
  }

  if (player.lp === 0 && canDropRank(player)) {
    console.log(`${player.name} dropping rank.`)
    return handleRankDrop(player)
  }

  const lp = calculateLoserLP(player)

  db.savePlayer({
    ...player,
    lp
  })
}
