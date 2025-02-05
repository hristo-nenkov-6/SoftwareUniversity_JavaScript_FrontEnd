function solve(input, commands) {
    for (let fullCommand of commands) {
        let splttedCommand = fullCommand.split(' ');
        let command = splttedCommand.shift();
        let app = splttedCommand.join(' ');

        if (command === 'Close') {
            if (input["Open Tabs"].includes(app)) {
                input["Open Tabs"].splice(input["Open Tabs"].indexOf(app), 1);
                input["Recently Closed"].push(app);
                input["Browser Logs"].push(fullCommand);
            }
        }else if (command === 'Open') {
                input["Open Tabs"].push(app);
                input["Browser Logs"].push(fullCommand);
        }else {
            for (let prop in input) {
                if (typeof input[prop] != 'string') {
                    input[prop] = [];
                }
            }
        }
    }

    console.log(input['Browser Name']);
    console.log(`Open Tabs: ${input["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${input["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${input["Browser Logs"].join(', ')}`);
}