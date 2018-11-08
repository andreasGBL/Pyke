const got = require('got');

module.exports = class Summoner {
    constructor(api_key) {
        this.api_key = api_key;
    }

    /**
     * 
     * @param {String} summonerName Nom de l'invocateur
     * @param {String} regionId Region
     * @returns {Promise<{id: String, accountId: String, summonerLevel: String, profileIconId: String, profileIconUrl: String, name: String, puuid: String, revisionDate: Date}>}
     */
    async getBySummonerName(summonerName, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + 'api.riotgames.com/lol/summoner/v4/summoners/by-name/' + encodeURIComponent(summonerName)}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
               json: true,
            }).then(data => {
                var body = data.body;
                resolve({
                    id: body.id,
                    accountId: body.accountId,
                    summonerLevel: body.summonerLevel,
                    profileIconId: body.profileIconId,
                    profileIconUrl: `https://avatar.leagueoflegends.com/${regionId}/${encodeURIComponent(summonerName)}.png`,
                    name: body.name,
                    puuid: body.puuid,
                    revisionDate: body.revisionDate
                });
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
     * @param {String} summonerId Id de l'invocateur
     * @param {String} regionId Region
     * @returns {Promise<{id: String, accountId: String, summonerLevel: String, profileIconId: String, profileIconUrl: String, name: String, puuid: String, revisionDate: Date}>}
     */
    async getBySummonerId(summonerId, regionId) {
        return new Promise(async (resolve, reject) => {
            await got.get(`https://${regionId + 'api.riotgames.com/lol/summoner/v4/summoners/' + summonerId}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
               json: true,
            }).then(data => {
                var body = data.body;
                resolve({
                    id: body.id,
                    accountId: body.accountId,
                    summonerLevel: body.summonerLevel,
                    profileIconId: body.profileIconId,
                    name: body.name,
                    profileIconUrl: `https://avatar.leagueoflegends.com/${regionId}/${encodeURIComponent(body.name)}.png`,
                    puuid: body.puuid,
                    revisionDate: body.revisionDate
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
