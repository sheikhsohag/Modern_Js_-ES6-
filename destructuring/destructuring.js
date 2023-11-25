const user = {
    id: 234,
    name: "sohag",
    age: 24,
}

// object ar akta element ber kore onno variable a kaj kora jonno kajkore..

// destructuring
// var name = user['name']
// console.log(name);

// same as 

const { name } = user;

console.log(name);

// if a take result a another variable 

const { name: title } = user;
console.log(title);