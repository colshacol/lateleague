import * as db from '../../'

import {
  PROMO_WINS_REQUIRED,
  PROMO_LOSSES_MAX,
  RANK_PROMO_LOSS_LPS,
  LEAGUE_PROMO_LOSS_LPS,
  MMRS
} from '../consts'

const playerPassedLeaguePromos = (player) => {
  return player.promos.wins >= PROMO_WINS_REQUIRED.league
}

const playerFailedLeaguePromos = (player) => {
  return player.promos.losses > PROMO_LOSSES_MAX.league
}

const playerPassedRankPromos = (player) => {
  return player.promos.wins >= PROMO_WINS_REQUIRED.rank
}

const playerFailedRankPromos = (player) => {
  return player.promos.wins > PROMO_LOSSES_MAX.rank
}

const getNextRank = (player) => {
  if (player.rank == 1) return 3
  if (player.rank == 2) return 1
  if (player.rank == 3) return 2
}

const handleLeaguePromoLoser = (player) => {
  if (playerFailedLeaguePromos(player)) {
    const lp = LEAGUE_PROMO_LOSS_LPS[player.promos.losses]
    const promos = undefined

    return db.savePlayer({
      ...player,
      promos,
      lp
    })
  }

  db.savePlayer(player)
}

const handleRankPromoLoser = (player) => {
  if (playerFailedRankPromos(player)) {
    const lp = RANK_PROMO_LOSS_LPS[player.promos.losses]
    const promos = undefined

    return db.savePlayer({
      ...player,
      promos,
      lp
    })
  }

  db.savePlayer(player)
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

    return db.savePlayer({
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
  db.savePlayer(player)
}

const handleRankPromoWinner = (player) => {
  // If player has reached number of wins required to pass rank promos,
  // set LP to 0, set rank to former rank plus 1, get correct MMR,
  // unset the player's promos data, and save the player in the DB.
  if (playerPassedRankPromos(player)) {
    const lp = 0
    const promos = undefined
    const rank = getNextRank(player)
    const mmr = MMRS[`${player.league} ${rank}`]

    return db.savePlayer({
      ...player,
      promos,
      lp,
      rank,
      mmr
    })
  }

  // Otherwise, just increment the player's promo wins and save
  // the updated player in the DB.
  db.savePlayer(player)
}

export const handlePromoWinner = (player) => {
  return player.promos.type === 'rank'
    ? handleRankPromoWinner(player)
    : handleLeaguePromoWinner(player)
}

export const handlePromoLoser = (player) => {
  return player.promos.type === 'rank'
    ? handleRankPromoLoser(player)
    : handleLeaguePromoLoser(player)
}

export const handlePromo = (which) => (player) => {
  return which === 'winner'
    ? handlePromoWinner(player)
    : handlePromoLoser(player)
}
