import * as React from 'react'

export const useState = () => {
  const [players, setPlayers] = React.useState([])
  const [query, setQuery] = React.useState('')
  const [leagues, setLeagues] = React.useState([])
  const [filteredPlayers, setFilteredPlayers] = React.useState(players)

  const fetchPlayers = async () => {
    try {
      const result = await fetch('/players')
      const data = await result.json()
      setPlayers(data)
    } catch (error) {}
  }

  React.useEffect(() => {
    fetchPlayers()
  }, [])

  React.useEffect(() => {
    if (players.length) {
      const filteredPlayers = players.filter((player) => {
        const lowerName = player.name.toLowerCase()
        const lowerQuery = query.toLowerCase()
        const hasLeagueFilters = leagues.length
        const hasSearchQuery = query.length
        const matchesLeagueFilter = leagues.includes(player.league)
        const matchesSearchQuery = lowerName.includes(lowerQuery)

        return (
          (!hasLeagueFilters || matchesLeagueFilter) &&
          (!hasSearchQuery || matchesSearchQuery)
        )
      })

      setFilteredPlayers(filteredPlayers)
    }
  }, [leagues, query, players])

  const state = {
    query,
    leagues,
    filteredPlayers
  }

  const stateActions = {
    setLeagues,
    setQuery,
    setFilteredPlayers
  }

  return [state, stateActions]
}
