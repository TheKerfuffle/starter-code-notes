const fizzbuzz = require('./fizzbuzz');



describe('Testing fizzbuzz function...', () => {

    test('If the number is divisible by 3, return Fizz', () => {
        expect( fizzbuzz(153)).toBe('Fizz');
    })

    test('If the number is divisible by 5, return Buzz', () => {
        expect( fizzbuzz(125)).toBe('Buzz');
    })

    test('If the number is divisible by both 3 and 5, return FizzBuzz', () => {
        expect( fizzbuzz(90)).toBe('FizzBuzz');
    })

    test('Otherwise, just return the number that was passed into the function', () => {
        expect( fizzbuzz(209)).toBe(209);
    })
})