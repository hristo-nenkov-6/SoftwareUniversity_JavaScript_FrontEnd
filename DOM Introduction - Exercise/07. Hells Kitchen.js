function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants = [];

      const inputElementArray = JSON.parse(document.querySelector('#inputs textarea').value.toString().trim());
      for(let restaurant of inputElementArray) {
         let tokens = restaurant.toString().split(' - ');
         let restaurantName = tokens[0];
         let workers = tokens[1].split(', ');
         if(!restaurants.find(x => x['Name'] === restaurantName)) {
            let restaurantObject = {
               'Name': restaurantName,
            };

            for (let worker of workers) {
               let workerName = worker.split(' ')[0];
               restaurantObject[workerName] = Number(worker.split(' ')[1])
            }

            restaurants.push(restaurantObject);
         }else{
            let oldRestaurant = restaurants.find(x => x['Name'] === restaurantName);

            for (let worker of workers) {
               let workerName = worker.split(' ')[0];
               oldRestaurant[workerName] = Number(worker.split(' ')[1])
            }
         }
      }

      let bestRestaurant = {};
      let bestAverageSalary = 0;
      let bestRestaurantName = '';
      for(let restaurant of restaurants){
         let averageSalary = 0;
         let restaurantName = '';
         for(let workerName of Object.keys(restaurant)){
            if(workerName !== 'Name'){
               averageSalary += restaurant[workerName];
            }else{
               restaurantName = restaurant[workerName];
               delete restaurant[workerName];
            }
         }

         averageSalary = averageSalary / Object.keys(restaurant).length;
         if(averageSalary > bestAverageSalary){
            bestAverageSalary = averageSalary;
            bestRestaurant = restaurant;
            bestRestaurantName = restaurantName;
         }
      }

      const outputElement = document.querySelector('#outputs #bestRestaurant p');
      outputElement.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${Math.max(...Object.values(bestRestaurant)).toFixed(2)}`;

      const outputWorkersElement = document.querySelector('#outputs #workers p');
      let workersArray = [];
      bestRestaurant = Object
          .entries(bestRestaurant)
          .sort((a, b) => b[1] - a[1]);
      for(let worker of bestRestaurant){
         workersArray.push(`Name: ${worker[0]} With Salary: ${worker[1]}`);
      }
      outputWorkersElement.textContent = workersArray.join(' ');
   }
}