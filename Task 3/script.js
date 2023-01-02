/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
document.getElementById("btn").addEventListener("click", () => {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            let output = document.getElementById("output");
            let userCardsHTML = "";
            data.forEach(user => {
                userCardsHTML += `
            <div class="userCard">
              <h2 class="userLogin">${user.login}</h2>
              <img class="userAvatar" src="${user.avatar_url}" alt="User avatar">
            </div>
          `;
            });


            output.innerHTML = userCardsHTML;
        });
});