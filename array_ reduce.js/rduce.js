let numbers = [1,2,3,4,5,6];
var result = numbers.reduce((preValue, currentValue)=> {
    return preValue+currentValue;
}, 0);

console.log(result)

// it can store previous value so it is effiecny and for first index take a '0' because previous value null it occur errors.



// var result = numbers.reduce((preValue, currentValue, currentIndex, arr)=> {
//     return preValue+currentValue;
// }, 0);
