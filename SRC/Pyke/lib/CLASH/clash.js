const endpoints = require('../../endpoint');
const got = require('got');
var api_url = ".api.riotgames.com";

module.exports = class Clash {
    constructor(api_key, LRU){
        this.api_key = api_key;
        this.LRU = LRU;
    }
    /**
     * 
     * @param {String} summonerId Summoner Id
     * @param {String} regionId Region
     * @returns {Promise<[{summonerId: String, teamId: String, position: String, role: String}]>}
     */
    async getPlayersBySummonerId(summonerId, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.clash.players + summonerId}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
               json: true,
                cache: this.LRU
            }).then(data => {
                var body = data.body;
                resolve(
                    body
                );
            }).catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }
    /**
     * 
     * @param {String} teamId Team Id
     * @param {String} regionId Region
     * @returns {Promise<{id: String, tournamentId: int, name: String, iconId: int, tier: int, captain: String, abbreviation: String, players: Array}>}
     */
    async getTeamsByTeamId(teamId, regionId) {
        return new Promise(async (resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.clash.teams + teamId}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
               json: true,
                cache: this.LRU
            }).then(data => {
                var body = data.body;
                resolve({
                    id: body.id,
                    tournamentId: body.tournamentId,
                    name: body.name,
                    iconId: body.iconId,
                    tier: body.tier,
                    captain: body.captain,
                    abbreviation: body.abbreviation,
                    players: body.players
                });
            }).catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }
}
