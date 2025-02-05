function search() {
    const resetElements = (a) => {
        a.style.textDecoration = 'none';
        a.style.fontWeight = 'normal';
    }
   const townCollection = document.querySelectorAll('#towns li');

   for (let town of townCollection){
       resetElements(town);
   }

   let inputElement = document.getElementById('searchText');
    let br = 0;

   for(let i = 0; i < townCollection.length; i++){
       if(townCollection[i].textContent.includes(inputElement.value)){
           let liElement =  document.querySelector(`#towns li:nth-child(${i + 1})`);
           liElement.style.fontWeight = 'bold';
           liElement.style.textDecoration = 'underline';
           br++;
       }
   }

   let resultElement = document.getElementById('result');
   resultElement.textContent = `${br} matches found`;
}
