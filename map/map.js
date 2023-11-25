let numbers = [1,2,3,4,5];


// map iterate all element in the array but does not change in the main array

let nums = numbers.map((num) => {
    return 2*num;
})

console.log(nums)