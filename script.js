const kahvilanNimi = "Koirakahvila Pennanen";
let asiakkaita = 12;

console.log("Tervetuloa! Kahvila:", kahvilanNimi);
console.log("Asiakkaita tänään:", asiakkaita);

let juomia = 1;

if (juomia >= 2) 
    {
    console.log("Kaksi juomaa tai enemmän: koirat saavat ilmaisia herkkuja!");
} else {
    console.log("Koirat eivät saa herkkuja tällä kertaa. Osta vähintään kaksi juomaa!");
}
function laskeAlennushinta(hinta, alennusprosentti) 
{
    let alennus = hinta * alennusprosentti / 100;
    let uusiHinta = hinta - alennus;
    return uusiHinta;
}

console.log("Latte -10 %:", laskeAlennushinta(4.00, 10), "€");
console.log("Espresso -20 %:", laskeAlennushinta(3.00, 20), "€");

const hinnasto = ["Suodatinkahvi", "Latte", "Espresso", "Tee", "Herkut henkilökunnalle", "Hymy ja kiitos"];

for (let i = 0; i < hinnasto.length; i++) 
    {
    console.log("Hinnastossa:", hinnasto[i]);
}
const tilausnappi = document.getElementById("ennakkotilaus");

tilausnappi.addEventListener("click", function () {
    console.log("Ennakkotilaus vastaanotettu!");
    alert("Kiitos ennakkotilauksesta! Pena valmistelee tilauksesi.");
});