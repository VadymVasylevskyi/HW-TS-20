// Задание 1

class Animal {
    name: string; 
    species: string; 

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    sound() {
        console.log("The animal makes a sound"); 
    }
}

class Dog extends Animal {
    breed: string; // Порода собаки

    constructor(name: string, species: string, breed: string) {
        super(name, species); 
        this.breed = breed; 
    }

    sound() {
        console.log("The dog barks"); 
    }
}

// Задание 2

class Library {
    static totalBooks: number = 0; 

    constructor() {
        
    }

    static addBook() {
        this.totalBooks++; 
    }
}


// Задание 3

class Vehicle {
    make: string; 
    model: string; 

    constructor(make: string, model: string) {
        this.make = make; 
        this.model = model; 
    }
}

class Motorcycle extends Vehicle {
    type: string; // Тип мотоцикла

    constructor(make: string, model: string, type: string) {
        super(make, model); 
        this.type = type; 
    }
}

