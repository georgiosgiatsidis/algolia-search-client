/* eslint-disable react/no-array-index-key */
const React = require('react');
const PropTypes = require('prop-types');
const importJsx = require('import-jsx');
const { Box, Text } = require('ink');
const { search } = require('../services/algolia');
const { sanitize } = require('../helpers/utils');

const Table = importJsx('./Table');

const App = ({ query, page }) => {
    const options = {
        page: page - 1,
    };

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const searchData = async () => {
            const result = await search(query, options);
            setData(result);
        };

        searchData();
    }, []);

    if (!data) return null;

    return (
        <Box flexDirection="column" marginTop={1} marginBottom={1}>
            {data.hits.length === 0 ? (
                <Text color="red">No results found, Try with another search term or another page number</Text>
            ) : (
                <Table data={sanitize(data.hits)} />
            )}
            {data.nbPages > 0 && <Text>Total Pages: {data.nbPages}</Text>}
        </Box>
    );
};

App.propTypes = {
    query: PropTypes.string,
    page: PropTypes.number,
};

module.exports = App;
