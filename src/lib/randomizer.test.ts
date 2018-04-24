import Randomizer from './randomizer';

test('get generates integers from startInc to endExc when howMany is greater than endExc', () => {
    const numbers = Randomizer.get(11, 0, 3);
    expect(numbers).toEqual([0, 1, 2]);
});

test('get generates integers from startInc to endExc when howMany is equal to endExc', () => {
    const numbers = Randomizer.get(3, 0, 3);
    expect(numbers).toEqual([0, 1, 2]);
});

test('get generates 100 unique integers in range of 0 to 1000', () => {
    const numbers = Randomizer.get(100, 0, 1000);
    
    for (let i of numbers) {
        expect(i).toBeGreaterThanOrEqual(0);
        expect(i).toBeLessThan(1000);
        expect(numbers.filter((val) => { return val === i; }).length).toEqual(1);
    }
    expect(numbers.length).toEqual(100);
});

test('get generates the correct amount of integers 100 times in a row', () => {
    for (let i = 0; i < 100; i++) {
        const numbers = Randomizer.get(3, 0, 9);
        expect(numbers.length).toBe(3);
    }
});