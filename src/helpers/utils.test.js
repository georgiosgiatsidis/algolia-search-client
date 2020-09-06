const { sanitize } = require('./utils');

describe('Testing sanitize util', () => {
    test('Should not mutate the array when properties are primitives', () => {
        const arr = [
            { id: 1, name: 'George' },
            { id: 2, name: 'Angie' },
        ];

        expect(sanitize(arr)).toEqual(arr);
    });

    test('Should filter non primitives properties', () => {
        const initialArray = [
            { id: 1, name: 'George', images: ['image1.jpg', 'image2.jpg'] },
            { id: 2, name: 'Angie', images: ['image3.jpg', 'image4.jpg'] },
        ];

        const expectedArray = [
            { id: 1, name: 'George' },
            { id: 2, name: 'Angie' },
        ];

        expect(sanitize(initialArray)).toEqual(expectedArray);
    });
});
