let StatsFactory = function ($http) {
    return {
        enum() {
            return $http.get('http://api.fantasy.nfl.com/v1/game/stats', {
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

export default StatsFactory;