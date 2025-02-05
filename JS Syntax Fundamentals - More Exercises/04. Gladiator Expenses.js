function gladiator(lost, helmet, sword, shield, armor){
    let h = Math.floor(lost / 2);
    let s = Math.floor(lost / 3);
    let sh = Math.floor(lost / 6);
    let a = Math.floor(lost / 12);
    let res = h * helmet +
        s * sword +
        sh * shield +
        a * armor;
    console.log(`Gladiator expenses: ${res.toFixed(2)} aureus`)
}