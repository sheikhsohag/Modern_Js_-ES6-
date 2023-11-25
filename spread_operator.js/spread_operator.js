var numbers = [1,2,3];
// manual 
let newNumbers = [numbers[0], numbers[1], numbers[2],3,4,5];

// spread operator
let newspreadnumbers = [...numbers, 2,3,4,5,6];

console.log(newspreadnumbers);


// let a = numbers;
// here if i change in numbers the change in a but we can this word following ways
// let b = [...numbers]  it is seperate array
// again numbers.push(4)

// it change in numbers but not is a...

var numbers = [1,2,3];
var numbers1 = [1,2,3];


var numbers2 = [...numbers, ...numbers1]

