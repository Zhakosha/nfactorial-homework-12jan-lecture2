// Task 1
let bookshelf = {
    capacity: 14,
    available: true,
    books: {
        first: "Принципы",
        second: "Понедельник начинается в субботу",
        third: "Думай как математик",
    }
}

// console.log(bookshelf);

bookshelf.beRead = false;
bookshelf['status'] = undefined;

//console.log(bookshelf);

delete bookshelf.available;

// console.log(bookshelf);

// Task 2

let vehicle ={};

vehicle.brandName = "BMW";
vehicle.model = "X5";

//console.log(vehicle);

vehicle.model = "M1";

//console.log(vehicle);

delete vehicle.model;

// console.log(vehicle);

// Task 3

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let sum = 0;
    for (let key in salaries) {
        sum = sum + salaries[key];
}
console.log(sum);
