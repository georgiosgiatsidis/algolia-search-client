const { search } = require('./algolia');

describe('Testing algolia service', () => {
    test('Should call the depedency search function', () => {
        const searchMock = jest.fn();
        const query = 'George';
        const options = { page: 0 };

        search(query, options, searchMock);

        expect(searchMock).toHaveBeenCalledWith(query, options);
    });
});
