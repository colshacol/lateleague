import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter)

// Mutation will not affect the filesystem DB entry.
export const getPlayer = (name) => {
  const players = db.get('players')
  return players.find({ name }).value()
}

export const getAllPlayers = () => {
  return db.get('players').value()
}

export const getAllPlayerNames = () => {
  return db
    .get('players')
    .value()
    .map((player) => {
      return player.name
    })
}

export const savePlayer = (player) => {
  const { name } = player

  db.get('players')
    .find({ name })
    .assign(player)
    .write()

  // In case we decide to post-validate.
  return db.find({ name })
}
