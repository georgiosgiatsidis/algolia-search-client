const importJsx = require('import-jsx');
const React = require('react');
const cli = require('commander');
const inquirer = require('inquirer');
const { render } = require('ink');
const pkg = require('../package.json');
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

cli.command('search').action(async () => {
    const { query } = await inquirer.prompt([
        {
            type: 'input',
            name: 'query',
            message: 'Search something 🔎',
        },
    ]);
    run(query);
});

cli.version(pkg.version, '-v, --version');

cli.parse(process.argv);
