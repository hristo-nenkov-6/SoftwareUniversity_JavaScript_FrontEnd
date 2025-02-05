function solve(meetingsArray){
    let calendar = {};

    for(let meet of meetingsArray){
        let [day, name] = meet.split(' ');

        if(!calendar[day]){
            calendar[day] = name;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }

    for(let day in calendar){
        console.log(`${day} -> ${calendar[day]}`);
    }
}