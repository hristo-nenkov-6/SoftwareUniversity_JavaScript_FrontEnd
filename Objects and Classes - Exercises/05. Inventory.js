function solve(heroesArray){
    let heroes = [];

    for(let hero of heroesArray){
        let tokens = hero.split(' / ');

        let heroName = tokens[0];
        let heroLevel = tokens[1];
        let items = tokens[2].split(', ');

        heroes.push({
            heroName,
            heroLevel,
            items,
        });
    }

    let sortedHeroes = heroes
        .sort((x, y) => x.heroLevel - y.heroLevel);

    for(let hero of sortedHeroes){
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}