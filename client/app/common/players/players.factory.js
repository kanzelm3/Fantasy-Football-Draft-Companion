let PlayersFactory = function ($http) {
    return {
        list() {
            return $http.get('http://api.fantasy.nfl.com/v1/players/editordraftranks', {
                params: {
                    format: 'json'
                }
            }).then((res) => res.data.players);
        },
        get(playerId) {
            return $http.get('http://api.fantasy.nfl.com/v1/players/details', {
                params: {
                    format: 'json',
                    playerId,
                    statType: 'seasonStats'
                }
            }).then((res) => res.data.players[0]);
        }
    }
};

export default PlayersFactory;