function solve(input){
    class Song{
        constructor(typeList, name, age) {
            this.typeList = typeList;
            this.name = name;
            this.age = age;
        }
    }

    let n = input.shift();
    let songs = [];
    for(let i = 0; i < n; i++){
        let tokens = input[i].split('_');
        songs.push(new Song(tokens[0], tokens[1], tokens[2]));
    }

    if(input[n] === 'all'){
        for(let song of songs){
            console.log(song.name);
        }
    }else{
        for(let song of songs){
            if(song.typeList === input[n]){
                console.log(song.name);
            }
        }
    }
}