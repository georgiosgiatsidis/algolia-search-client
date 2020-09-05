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
 * @param {String} page The page number
 */
const run = async (query, page) => {
    try {
        const App = importJsx('./components/App');
        render(<App query={query} page={page} />);
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

    const { page } = await inquirer.prompt([
        {
            type: 'input',
            name: 'page',
            message: 'Enter the page number, if you are not sure about it leave it blank.',
            default: 1,
        },
    ]);
    run(query, Number(page));
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
