/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const convertWeight = () => {
    // Get the input value
    let kg = document.getElementById("kg").value;

    // Convert to lbs
    let lbs = kg * 2.2046;

    // Convert to grams
    let grams = kg / 0.0010000;

    // Convert to oz
    let oz = kg * 35.274;

    // Get the output element
    let output = document.getElementById("output");

    // Build the output string
    let result = "Weight in lbs: " + lbs + "<br>";
    result += "Weight in grams: " + grams + "<br>";
    result += "Weight in oz: " + oz;

    // Set the output element's HTML
    output.innerHTML = result;
};
document.getElementById("kg").addEventListener("input", convertWeight);

