const algoliasearch = require('algoliasearch');
const config = require('../config');

const client = algoliasearch(config.applicationID, config.apiKey);
const index = client.initIndex(config.indexName);

/**
 * Search
 *
 * @param {String} query The search query
 *
 * @return {Promise<>}
 */
const search = async (query) => {
    return index.search(query);
};

exports.search = search;
