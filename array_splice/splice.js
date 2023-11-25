var num = [1,2,3,4,5,6,7,8]

// num.splice(start,number of delete,  add element)
// result is deleted element. but change original array
var result = num.splice(1,3,1,2,3);
console.log(result)