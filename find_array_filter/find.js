var numbers = [1,2,3,4,5,6,7,8,9];

var result = numbers.find(function(currentValue, currentIndex, arr)
{
    return currentValue > 4;
});


// console.log(result);

// findindex

result = numbers.findIndex( (currentValue, index, arr) => {
     return currentValue > 6;
})

console.log(result);

// if value is not exist in the array it return -1


// array prototype.filter()
// return a array which element fill the conditions

result = numbers.filter( (currentValue, index, arr) => {
      return currentValue>6;
})

console.log(result)