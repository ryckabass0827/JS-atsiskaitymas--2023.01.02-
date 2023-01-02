/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive = () => this.budget > 100000000
};

let movie1 = new Movie('Tadas Blinda', 'Balis Bratkauskas', 3500000);
let movie2 = new Movie('Pirates of the Caribbean: On Stranger Tides', 'Rob Marshall', 379000000);
let movie3 = new Movie('Avengers: Age of Ultron', 'Joss Whedon', 365000000);

console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
console.log(movie3.wasExpensive());