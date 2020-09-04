/**
 * Sanitize
 *
 * @param {Array} arr The input array
 *
 * @return {Array}
 */
const sanitize = (arr) =>
    arr.map((item) => {
        return Object.keys(item).reduce((acc, curr) => {
            if (typeof item[curr] !== 'object') {
                acc[curr] = item[curr];
            }

            return acc;
        }, {});
    });

exports.sanitize = sanitize;
