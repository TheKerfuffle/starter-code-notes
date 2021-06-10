const translateToPigLatin = require('./piglatin');

// Write a test to make sure if we get a blank string in
// we get a blank string back

describe('Testing translating TO pig latin...', () => {

    test('If empty string goes in, empty string goes out', () => {
        expect( translateToPigLatin('')).toBe('');
    })

    test('Starting consonant moves to end with with ay...', () => {
        expect( translateToPigLatin('pig')).toBe('igpay');
    })

    test('Starting vowel stays at beginning, word ends with ay...', () => {
        expect( translateToPigLatin('eat')).toBe('eatay');
    })

})