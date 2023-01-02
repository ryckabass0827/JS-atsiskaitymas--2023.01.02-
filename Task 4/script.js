/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => a.brand.localeCompare(b.brand));
        let output = document.getElementById("output");
        let carCardsHTML = "";
        data.forEach(car => {
            carCardsHTML += `
        <div class="carCard">
          <h2 class="carBrand">${car.brand}</h2>
          <ol class="carModels">
            ${car.models.map(model => `<li class="car__model">${model}</li>`).join('')}
          </ol>
        </div>
      `;
        });

        output.innerHTML = carCardsHTML;
    });
