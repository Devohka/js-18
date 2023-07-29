// 1
// const arr = [
//     {name: "Oleg"},
//     {name: "Anny"},
//     {name: "Max"}
// ];

// const arrName = arr.map(ar => ar.name);
// console.log(arrName);

// 2

// const user = [
//     {name: "Oleg", eyeColor: "red"},
//     {name: "Anny",  eyeColor: "green"},
//     {name: "Max",  eyeColor: "gray"}
// ];

// const arrEyeColor = user.map(use => use.eyeColor);
// console.log(arrEyeColor);

// 3
// const arr = [
//     {name: "Oleg", gender: "men"},
//     {name: "Anny", gender: "men"},
//     {name: "Max", gender: "men"},
//     {name: "Hanna", gender: "girl"},
// ];

// const people = arr.map(gende => gende.name);
// console.log(people);

// 4

// const user = [
//     { name: "Oleg", isActive: true },
//     { name: "Anny", isActive: false },
//     { name: "Max", isActive: false },
// ];

// const filterUser = user.filter(use => use.isActive === false);
// console.log(filterUser);

// 5
// const user = [
//     { name: "Oleg", email: "oleg.bobr@gmail.com"},
//     { name: "Anny", email: "andr.fedak@gmail.com"},
//     { name: "Max", email: "max.teh@gmail.com"},
// ];
// const emailUser = user.every(use => use.email === "andr.fedak@gmail.com");
// console.log(emailUser);

// 6
const arrUser = [
    { name: "Oleg", age: 15},
    { name: "Anny", age: 14},
    { name: "Max", age: 13}
];

const filterUser = arrUser.filter(arrUse => arrUse.age >= 12 && arrUse.age <= 14);
console.log(filterUser);