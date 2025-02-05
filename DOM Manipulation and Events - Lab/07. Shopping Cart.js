function solve() {
   let arrayOfProductObjects = {};
   const textArea = document.querySelector('textarea');
   const addButtonElements = document.querySelectorAll('.add-product');
   const checkoutButtonElement = document.querySelector('.checkout');

   Array.from(addButtonElements).forEach(element => element.addEventListener('click', (event) => {
       let price = Number(element.parentElement.parentElement.querySelector('.product-line-price').textContent.split('$')[0]);
       let name = element.parentElement.parentElement.querySelector('.product-title').textContent;
       if(!arrayOfProductObjects[name]){
           arrayOfProductObjects[name] = price;
       }else{
           arrayOfProductObjects[name] += price;
       }
       textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   }));

   checkoutButtonElement.addEventListener('click', (event) => {
       let sum = 0;
       Array.from(Object.values(arrayOfProductObjects)).forEach(x => sum += x);
       textArea.textContent += `You bought ${Array.from(Object.keys(arrayOfProductObjects)).join(', ')} for ${sum.toFixed(2)}.\n`;

       Array.from(addButtonElements).forEach(element => element.disabled = true);
       checkoutButtonElement.disabled = true;
   });
}