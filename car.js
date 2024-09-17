"use strict";
// Implémentation de la classe Car
class Car {
    // Constructeur
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implémentation de la méthode start
    start() {
        console.log("Car engine started");
    }
}
// Création d'une instance de Car
const myCar = new Car("Toyota", "Corolla", 2024);
// Appel de la méthode start
myCar.start();
