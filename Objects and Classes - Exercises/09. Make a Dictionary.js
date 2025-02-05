function solve(input) {
    const dictionary = {};

    const words = input.map(JSON.parse)

    for (const wordObj of words) {
        const word = Object.keys(wordObj)[0];

        dictionary[word] = wordObj[word];
    }

    Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([term, definition]) => console.log(`Term: ${term} => Definition: ${definition}`))
}