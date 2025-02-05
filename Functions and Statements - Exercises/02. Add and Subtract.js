function solve(a, b, c) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    console.log(subtract(sum(a, b), c));
}