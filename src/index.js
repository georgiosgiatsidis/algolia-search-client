const importJsx = require('import-jsx');
const React = require('react');
const inquirer = require('inquirer');
const { render } = require('ink');
require('./config');

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

inquirer
    .prompt([
        {
            type: 'input',
            name: 'query',
            message: 'Search something 🔎',
        },
    ])
    .then(({ query }) => {
        run(query);
    });
