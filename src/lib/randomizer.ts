class Randomizer {
    /** Returns random unique integers in range of startInc and endExc */
    static get(howMany: number, startInc: number, endExc: number): number[] {
        const numbers: number[] = [];
        if (howMany >= endExc) {
            for (let i = 0; i < endExc; i++) {
                numbers.push(i);
            }
            return numbers;
        }

        while (numbers.length < howMany) {
            const nr = Randomizer.gen(startInc, endExc);
            if (numbers.indexOf(nr) >= 0) continue;
            numbers.push(nr);
        }
        return numbers;
    }

    private static gen(startInc: number, endExc: number): number {
        return startInc + Math.floor(Math.random() * endExc);
    }
}

export default Randomizer;