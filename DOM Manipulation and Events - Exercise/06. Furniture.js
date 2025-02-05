function solve() {
    const listElement = document.querySelector('table tbody');
    const textAreaJSONElement = document.querySelector('#exercise textarea');
    const generateButton = document.querySelector('#exercise button');
    const boughtTextAreaElement = document.querySelector("#exercise > textarea:nth-child(5)")
    const buyButton = document.querySelector("#exercise > button:nth-child(6)")

    document.querySelector("#exercise > div > div > div > div > table > tbody > tr > td:nth-child(5) > input[type=checkbox]").disabled = false;
    document.querySelector("#exercise > div > div > div > div > table > tbody > tr > td:nth-child(5) > input[type=checkbox]").checked = false;
    generateButton.addEventListener('click', () => {
        const newItemObjectArray = JSON.parse(textAreaJSONElement.value);
        for(let item of newItemObjectArray){
            const image = item['img'];
            const name = item['name'];
            const price = item['price'];
            const decFactor = item['decFactor'];

            const newListItem = document.createElement('tr');

            const newListItemIMG = document.createElement('td');
            const img = document.createElement('img');
            img.src = image;
            newListItemIMG.appendChild(img);

            const newListItemName = document.createElement('td');
            newListItemName.appendChild(document.createElement('p')).textContent = name;

            const newListItemPrice = document.createElement('td');
            newListItemPrice.appendChild(document.createElement('p')).textContent = price;

            const newListItemdecFactor = document.createElement('td');
            newListItemdecFactor.appendChild(document.createElement('p')).textContent = decFactor;

            const mark = document.createElement('td');
            mark.innerHTML = '<input type="checkbox">';

            newListItem.appendChild(newListItemIMG);
            newListItem.appendChild(newListItemName);
            newListItem.appendChild(newListItemPrice);
            newListItem.appendChild(newListItemdecFactor);
            newListItem.appendChild(mark);

            listElement.appendChild(newListItem);
        }
    });

    buyButton.addEventListener('click', () => {
       const newListElement = document.querySelectorAll('table tbody tr');
       let markedObject = [];
       for(let item of newListElement){
           let markOfItem = item.querySelector(" tr > td:nth-child(5) > input[type=checkbox]");
           if(markOfItem.checked === true){
               markedObject.push({
                   'name': item.querySelector('tr td:nth-child(2) p').textContent,
                   'price': Number(item.querySelector('tr td:nth-child(3) p').textContent),
                   'factor': Number(item.querySelector('tr td:nth-child(4) p').textContent),
               });
           }
       }

       const names = markedObject.map(x => x['name']);

       let sum = 0;
       for(let item of markedObject){
           sum += item['price'];
       }

       let factor = 0;
       let br = 0;
        for(let item of markedObject){
            factor += item['factor'];
            br++;
        }
        factor = factor / br;

       boughtTextAreaElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
       boughtTextAreaElement.textContent += `Total price: ${sum.toFixed(2)}\n`;
       boughtTextAreaElement.textContent += `Average decoration factor: ${factor}`;

    });
}