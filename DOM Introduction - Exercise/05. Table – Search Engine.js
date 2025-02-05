function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputText = document.getElementById('searchField').value;
      const rowElements = document.querySelectorAll('.container tbody tr');

      inputText.value = '';
      for(let row of rowElements){
         row.className = '';
      }

      for(let i = 0; i < rowElements.length; i++){
         let name = document.querySelector(`.container tbody tr:nth-child(${i + 1}) td:nth-child(1)`).textContent;
         let email= document.querySelector(`.container tbody tr:nth-child(${i + 1}) td:nth-child(2)`).textContent;
         let course= document.querySelector(`.container tbody tr:nth-child(${i + 1}) td:nth-child(3)`).textContent;

         if(name.includes(inputText) ||
         email.includes(inputText) ||
         course.includes(inputText)){
            rowElements[i].className = 'select';
         }
      }
   }
}