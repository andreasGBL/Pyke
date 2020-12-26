const endpoints = require('../../endpoint');
const got = require('got');
var api_url = ".api.riotgames.com";

module.exports = class status {
    constructor(api_key){
        this.api_key = api_key;
    }
    /**
     * 
     * @param {String} regionId Region
     * @returns {Promise<{name: String, region_tag: String, hostname: String, services: Array, slug: String, locales: Array}>}
     */
    getThirdPartyCodeBySummonerId (summonerId, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.platform.thirdpartycode + summonerId}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                }
            })
            .then(data =>{
                // vérification ok
                resolve({
                    statusCode: 200,
                    msg: data.body
                });
            })
            .catch(error => {
                if (error.statusCode === 404) return resolve(error.headers);
                                                            
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    };
}
