function create(words) {
   const divSectionsElement = document.getElementById('content');
   for(let word of words){
      let section = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      section.appendChild(paragraph);

      section.addEventListener('click', (event) => {
         paragraph.style.display = 'inline';
      })

      divSectionsElement.appendChild(section);
   }
}