import * as React from 'react';

export const useState = players => {
  const [query, setQuery] = React.useState('');
  const [leagues, setLeagues] = React.useState([]);
  const [filteredPlayers, setFilteredPlayers] = React.useState(players);

  React.useEffect(() => {
    const filteredPlayers = players.filter(player => {
      const lowerName = player.name.toLowerCase();
      const lowerQuery = query.toLowerCase();
      const hasLeagueFilters = leagues.length;
      const hasSearchQuery = query.length;
      const matchesLeagueFilter = leagues.includes(player.league);
      const matchesSearchQuery = lowerName.includes(lowerQuery);

      return (
        (!hasLeagueFilters || matchesLeagueFilter) &&
        (!hasSearchQuery || matchesSearchQuery)
      );
    });

    setFilteredPlayers(filteredPlayers);
  }, [leagues, query, players]);

  const state = {
    query,
    leagues,
    filteredPlayers,
  };

  const stateActions = {
    setLeagues,
    setQuery,
    setFilteredPlayers,
  };

  return [state, stateActions];
};
