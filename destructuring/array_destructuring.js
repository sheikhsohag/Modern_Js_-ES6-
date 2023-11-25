let numbers = [1,2,3,4,5,6,7,8];
let [a, b] = numbers

console.log(a, b);

// if some element need and some element don't need so can 


// for one element one comma;
let [, c, , , d] = numbers;
console.log(c,d);



// nested value

let number = [1,2,3,[100, 400,500],6,7,8];
let [, , , [,aa, bb]] = number

console.log(aa, bb);

// if some element need and some element don't need so can 


// for one element one comma;


// swap new way
// destrucuring
[b, a] = [a, b]  