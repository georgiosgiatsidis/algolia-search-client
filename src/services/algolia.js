const algoliasearch = require('algoliasearch');
const config = require('../config');

const client = algoliasearch(config.applicationID, config.apiKey);
const index = client.initIndex(config.indexName);

/**
 * Search
 *
 * @param {String} query The search query
 * @param {Object} options The search options
 *
 * @return {Promise<>}
 */
const search = async (query, options, searchFn = index.search) => {
    return searchFn(query, options);
};

exports.search = search;
