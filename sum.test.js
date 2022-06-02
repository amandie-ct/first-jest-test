import sum from './sum'

test('properly adds two numbers', () => {
    expect(sum(5, 5)).toBe(10)
})