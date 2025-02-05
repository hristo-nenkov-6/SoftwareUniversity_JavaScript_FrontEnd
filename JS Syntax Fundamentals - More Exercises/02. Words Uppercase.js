function convertor(text){
    let upperText = text
        .toUpperCase()
        .split(/[\W]+/gm)
        .filter(w => w.length > 0);
    console.log(upperText.join(', '));
}