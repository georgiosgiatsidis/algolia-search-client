const importJsx = require('import-jsx');
const React = require('react');
const yargs = require('yargs');
const { render } = require('ink');
require('./config');

const options = yargs
    .usage('Usage: $0 [options]')
    .help('h')
    .alias('h', 'help')
    .option('q', { alias: 'query', type: 'string', demandOption: true, describe: 'The search query parameter' }).argv;

/**
 * Run the application
 *
 * @param {String} query The search query.
 */
const run = async (query) => {
    try {
        const App = importJsx('./components/App');
        render(<App query={query} />);
    } catch (error) {
        console.error(`${error.message}`);
        throw error;
    }
};

const { query } = options;
run(query);
