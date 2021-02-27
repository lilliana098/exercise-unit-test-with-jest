const { sum, fromDollarToPound, fromDollarToYen, fromEuroToDollar } = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

let oneEuroIs = {
    "JYP": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

describe("conversion de moneda", function () {
    test("One euro should be 1.206 dollars", function () {

        const dollars = fromEuroToDollar(3.5)
        const expected = 3.5 * 1.2;

        expect(expected).toBe(dollars);
    })

    test("One dollar should be ", function () {

        const yenes = fromDollarToYen(3.5)
        const expected = 3.5 * 127.9;

        expect(expected).toBe(yenes);
    })

    test("One dollar should be ", function () {

        const yenes = fromDollarToYen(3.5)
        const expected = 3.5 * 127.9;

        expect(expected).toBe(yenes);
    })
})


describe("calculo de precio", function (){

    test("Totales", function () {

        const yenes = fromDollarToYen(3.5)
        const expected = 3.5 * 127.9;

        expect(expected).toBe(yenes);
    })

})