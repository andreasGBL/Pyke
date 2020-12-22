const got = require('got');
const summoner_spell = require('./summoner_spell');

module.exports = class Download {
    constructor() {
        this.base_url_https = 'https://ddragon.leagueoflegends.com';
        this.base_url_http = 'http://ddragon.leagueoflegends.com';
    };

    async getVersions() {
        return new Promise((resolve, reject) => {
            got.get(`https://ddragon.leagueoflegends.com/api/versions.json`, { json: true })
                .then(data => {
                    resolve(data.body);
                })
                .catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        })
    }
    /**
     * @param {Object} opts Options for API
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.
     */
    async getChampionList(opts) {
        var locale = opts.locale || "fr_FR";
        var version = opts.version || (await this.getVersions())[0];
        var full = opts.full || false;
        var fullString = full ? "Full" : "";
        return new Promise((resolve, reject) =>{
            got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/champion${fullString}.json`, {
                json: true
            }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) })
            .then(data =>{
                var body = data.body;
                resolve(body);
            })
        });
    };

    /**
     * @param {Object} opts Options for API
     * @param {long} opts.id Champion ID
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.
     * 
     */
    async getChampionById(opts) {
        var id = opts.id || undefined;
        var locale = opts.locale || "fr_FR";
        var version = opts.version || (await this.getVersions())[0];
        return new Promise(async (resolve, reject) =>{
            if (!id) reject({status: {status_code: 404, message: 'Data not Found'}});
            var ChampionList = (await this.getChampionList({locale: locale, version: version}));
            var name = ChampionList['keys'][id];
            if (!name) reject({status: {status_code: 404, message: 'Data not Found'}});
            resolve(ChampionList["data"][name]); 
        })
    };

    /**
     * @param {Object} opts Options for API
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.
    
     */
    async getItemList(opts) {
        var locale = opts.locale || 'fr_FR';
        var version = opts.version || (await this.getVersions())[0];
        return new Promise((resolve, reject) =>{
            got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/item.json`, {json: true})
                .then(data =>{
                    var response = data.body;
                    resolve(response);
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        });
    };

    /**
     * @param {Object} opts Options for API
     * @param {long} opts.id Item ID
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.   
     */

    async getItemById(opts) {
        return new Promise(async (resolve, reject) =>{
            if (!opts.id) reject({status: {status_code: 404, message: 'Data not Found'}});
            var ItemList = await this.getItemList({
                locale: opts.locale,
                version: opts.version || (await this.getVersions())[0]
            }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            var itemid = ItemList['data'][opts.id];
            if(!itemid) reject({status: {status_code: 404, message: 'Data not Found'}});
            resolve(itemid);
        });
    };

    /**
     * @param {Object} opts Options for API
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.   
     */
    async getLanguageStrings(opts) {
        var locale = opts.locale || 'fr_FR';
        var version = opts.version || (await this.getVersions())[0];
        return new Promise((resolve, reject) =>{
            got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/language.json`, {json: true})
                .then(data =>{
                    var response = data.body;
                    resolve(response);
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        });
    };

    async getLanguages() {
        return new Promise((resolve, reject) => {
            got.get(`https://ddragon.leagueoflegends.com/cdn/languages.json`, { json: true })
                .then(data => {
                    resolve(data.body);
                })
                .catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        })
    };

    /**
     * @param {Object} opts Options for API
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.   
     */

    async getMapData(opts) {
        var locale = opts.locale || 'fr_FR';
        var version = opts.version || (await this.getVersions())[0];
        return new Promise((resolve, reject) =>{
            got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/map.json`, {json: true})
                .then(data =>{
                    var response = data.body;
                    resolve(response);
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        });
    };

    async getMasteryList(opts) {

    };

    async getMasteryById(id, locale, version) {

    };

    /**
     * @param {Object} opts Options for API
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.   
     */
    async getProfileIcons(opts) {
        var locale = opts.locale || 'fr_FR';
        var version = opts.version || (await this.getVersions())[0];
        return new Promise((resolve, reject) =>{
            got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/profileicon.json`, {json: true})
                .then(data =>{
                    var response = data.body;
                    resolve(response);
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        });
    };

    /**
     * @param {Object} opts Options for API
     * @param {string} opts.region Dont used RegionID but just Region (na, euw, eune...)
     */
    async getRealm(opts) {
        var region = opts.region || 'na';
        return new Promise(async (resolve, reject) =>{
            await got.get(`https://ddragon.leagueoflegends.com/realms/${region.toLowerCase()}.json`, {json: true})
                .then(data =>{
                    var response = data.body;
                    resolve(response);
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        });
    };

    /**
     * @param {Object} opts Options for API
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.   
     */
    async getReforgedRunePaths(opts) {
        var locale = opts.locale || 'fr_FR';
        var version = opts.version || (await this.getVersions())[0];
        return new Promise(async (resolve, reject) =>{
            await got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/runesReforged.json`, {json: true})
                .then(data =>{
                    var response = data.body;
                    resolve(response);
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        });
    };

        /**
     * @param {Object} opts Options for API
     * @param {long} opts.id Reforged rune path ID
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.   
     */
    async getReforgedRunePathById(opts) {
        return new Promise(async (resolve, reject) =>{
            if (!opts.id) reject({status: {status_code: 404, message: 'Data not Found'}});
            var ReforgedRunePaths = new Array();
            ReforgedRunePaths = await this.getReforgedRunePaths({
                locale: opts.locale,
                version: opts.version || (await this.getVersions())[0]
            }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            const slots = ReforgedRunePaths.find(RunePathById => RunePathById.id === opts.id);
            if (!slots) reject({status: {status_code: 404, message: 'Data not Found'}});
            resolve(slots)
            
        });
    };
    
    /**
    * @param {Object} opts Options for API
    * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
    * @param {string} opts.version Patch 7.23.1 maximum
    * @deprecated since patch 7.23.1
    * 
    */
    async getRuneList(opts) {
        var locale = opts.locale || 'fr_FR';
        var version = opts.version || '7.23.1';
        return new Promise(async (resolve, reject) =>{
            await got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/rune.json`, {json: true})
                .then(data =>{
                    var response = data.body;
                    resolve(response);
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        })
    };

    /**
    * @param {Object} opts Options for API
    * @param {long} opts.id Rune ID
    * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
    * @param {string} opts.version Patch 7.23.1 maximum
    * @deprecated since patch 7.23.1
    * 
    */
    async getRuneById(opts) {
        var id = opts.id;
        var locale = opts.locale || 'fr_FR';
        var version = opts.version || '7.23.1';
        return new Promise(async (resolve, reject) =>{
            if (!id) reject({status: {status_code: 404, message: 'Data not Found'}});
            await got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/rune.json`, {json: true})
                .then(data =>{
                    var runeId = data.body.data[id];
                    if (!runeId) reject({ status: { status_code: 404, message: 'Data not Found' } });
                    runeId.id = id;
                    resolve(runeId);
                })
                .catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
        });
    };
    /**
    * @param {Object} opts Options for API
    * @param {boolean} opts.dataById If specified as true, the returned data map will use the spells' IDs as the keys. If not specified or specified as false, the returned data map will use the spells' keys instead.
    * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
    * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.
    * 
    */

    async getSummonerSpellList(opts) {
        var dataById = opts.dataById || false;
        var locale = opts.locale || 'fr_FR';
        var version = opts.version || (await this.getVersions())[0];
        return new Promise(async (resolve, reject) => {
            await got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/summoner.json`, { json: true })
                .then(async data => {
                    var body = data.body;
                    if (dataById == true) {
                        var spell = await summoner_spell(data.body);
                        body.data = spell;
                    }
                    resolve(body);
                })
                .catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) })
        })
    };

    /**
     * @param {Object} opts Options for API
     * @param {long} opts.id Summoner spell ID
     * @param {string} opts.locale Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.
     * @param {string} opts.version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.
     * 
     */
    async getSummonerSpellById(opts) {
        return new Promise(async (resolve, reject) => {
            var locale = opts.locale || 'fr_FR';
            var id = opts.id;
            var version = opts.version || (await this.getVersions())[0];
            if (!id) {
                reject({
                    "status": {
                        "status_code": 403,
                        "message": "Forbidden"
                    }
                })
            } else {
                await got.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${locale}/summoner.json`, { json: true })
                    .catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) })
                    .then(async data => {
                        var body = data.body;
                        var spell = await summoner_spell(data.body);
                        var response = spell[opts.id];
                        if (!response) reject({
                            "status": {
                                "status_code": 404,
                                "message": "Data not found"
                            }
                        });
                        resolve(spell[opts.id]);
                    })
            }
        })
    };
    /**
     * @param {string} version Patch version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.
     * 
     */
    async getFullTarballLink(version) {
        return new Promise(async (resolve, reject) => {
            if (!version) {
                await got.get(`https://ddragon.leagueoflegends.com/api/versions.json`, { json: true })
                    .then(data => {
                        resolve(`https://ddragon.leagueoflegends.com/cdn/dragontail-${data.body[0]}.tgz`);
                    })
                    .catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            } else {
                await got.head(`https://ddragon.leagueoflegends.com/cdn/dragontail-${version}.tgz`)
                    .then(ok => {
                        resolve(ok.url);
                    })
                    .catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) })
            }
        })
    };

}
