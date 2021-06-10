const leapyear = require('./leapyear');



describe('Testing leapyear function...', () => {

    test('If the year is divisible by 4, return true', () => {
        expect( leapyear(2004)).toBe(true);
    })

    test('If the year is divisible by 100, return false', () => {
        expect( leapyear(1900)).toBe(false);
    })

    test('If the year is divisible by 400, return true', () => {
        expect( leapyear(2000)).toBe(true);
    })

    test('If the year is not divisible by any, return false', () => {
        expect( leapyear(1999)).toBe(false);
    })
})