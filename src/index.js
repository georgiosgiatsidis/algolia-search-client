const importJsx = require('import-jsx');
const React = require('react');
const cli = require('commander');
const fs = require('fs');
const inquirer = require('inquirer');
const { render } = require('ink');
const pkg = require('../package.json');

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

cli.command('setup')
    .requiredOption('-a, --applicationId <id>', 'The application ID')
    .requiredOption('-k, --key <key>', 'The API Key')
    .requiredOption('-i, --index <index>', 'The index name')
    .action((cmd) => {
        const envVars = [`APPLICATION_ID=${cmd.applicationId}`, `API_KEY=${cmd.key}`, `INDEX_NAME=${cmd.index}`];

        fs.writeFile(`${process.cwd()}/.env`, envVars.join('\n'), (err) => {
            if (err) return console.error(err);
            return true;
        });
    });

cli.version(pkg.version, '-v, --version');

cli.parse(process.argv);
