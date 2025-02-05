function solve(moviesArray){
    let movies = [];

    for(let input of moviesArray){
        let splitted = input.split(' ');

        let firstWord = splitted[0];
        if(firstWord === 'addMovie'){

            splitted.shift();
            let movieName = splitted.join(' ');
            movies.push({
                'name': movieName,
            });
        }else {
            for(let word of splitted){
                if(word === 'directedBy'){
                    let [movieName, director] = input
                        .split(' directedBy ');
                    let wantedMovie = movies
                        .find(x => x['name'] === movieName);
                    if(wantedMovie){
                        wantedMovie['director'] = director;
                    }
                }else if(word === 'onDate'){
                    let [movieName, date] = input
                        .split(' onDate ');
                    let wantedMovie = movies
                        .find(x => x['name'] === movieName);
                    if(wantedMovie){
                        wantedMovie['date'] = date;
                    }
                }
            }
        }
    }

    for(let movie of movies){
        if(movie['name'] &&
        movie['director'] &&
        movie['date']){
            console.log(JSON.stringify(movie));
        }
    }
}