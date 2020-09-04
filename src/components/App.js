/* eslint-disable react/no-array-index-key */
const React = require('react');
const PropTypes = require('prop-types');
const importJsx = require('import-jsx');
const { Box } = require('ink');
const { search } = require('../services/algolia');
const { sanitize } = require('../helpers/utils');

const Table = importJsx('./Table');

const App = ({ query }) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const searchData = async () => {
            const result = await search(query);
            setData(result);
        };

        searchData();
    }, []);

    if (!data) return null;

    return (
        <Box flexDirection="column" marginTop={1} marginBottom={1}>
            <Table data={sanitize(data.hits)} />
        </Box>
    );
};

App.propTypes = {
    query: PropTypes.string,
};

module.exports = App;
