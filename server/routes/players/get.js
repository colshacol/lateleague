import * as db from '../../database'

export const get = async (request, response) => {
  const allPlayers = db.getAllPlayers()
  response.send(allPlayers)
}
