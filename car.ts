// Définition de l'interface Vehicle
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implémentation de la classe Car
class car implements Vehicle {
    make: string;
    model: string;
    year: number;

    // Constructeur
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implémentation de la méthode start
    start(): void {
        console.log("Car engine started");
    }
}

// Création d'une instance de Car
const mycar = new Car("Toyota", "Corolla", 2024);

// Appel de la méthode start
myCar.start();
