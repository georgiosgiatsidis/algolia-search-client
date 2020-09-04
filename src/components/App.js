const React = require('react');
const PropTypes = require('prop-types');
const { Box, Text } = require('ink');
const { search } = require('../services/algolia');

const App = ({ query }) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const searchData = async () => {
            const result = await search(query);
            setData(result);
        };

        searchData();
    }, []);

    return (
        <Box marginTop={1} marginBottom={1}>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </Box>
    );
};

App.propTypes = {
    query: PropTypes.string,
};

module.exports = App;
