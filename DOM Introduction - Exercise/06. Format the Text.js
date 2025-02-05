function solve() {
  let inputElementText = document.getElementById('input').value;
  let outputElement = document.getElementById('output');
  let sentences = inputElementText.split('.');

  let stringParagraph = [];
  let output = [];
  let br = 0;
  for(let sentence of sentences){
      if(sentence.length > 0) {
          br++;
          stringParagraph.push(sentence);
      }

      if(br === 3){
          output.push(`<p>${stringParagraph.join('. ') + '.'}</p>`);
          br = 0;
          stringParagraph = [];
      }
  }

    if(br > 0){
        output.push(`<p>${stringParagraph.join('. ') + '.'}</p>`);
    }

    outputElement.innerHTML = output.join('\n');
}