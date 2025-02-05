function solve(array){
    let flights = array[0];
    let changed = array[1];
    let status = array[2][0];

    let objFlights = [];
    for(let flight of flights){
        flight = flight.split(' ');
        let name = flight.shift();
        let destination = flight.join(' ');
        objFlights.push({
            'Name': name,
            'Destination': destination,
            'Status': '',
        });
    }

    for(let ch of changed){
        let [name, status] = ch.split(' ');
        let ob = objFlights.find(x => x['Name'] === name);
        if(ob){
            ob['Status'] = status;
        }
    }

    if(status === 'Ready to fly'){
        for(let flight of objFlights){
            if(flight['Status'] === '') {
                flight['Status'] = 'Ready to fly';
                console.log(`{ Destination: '${flight['Destination']}', Status: '${flight['Status']}' }`);
            }
        }
    }else{
        let fl = objFlights.filter(x => x['Status'] === status);
        for(let flight of fl){
            console.log(`{ Destination: '${flight['Destination']}', Status: '${flight['Status']}' }`);
        }
    }
}