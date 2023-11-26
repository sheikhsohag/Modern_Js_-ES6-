// let arr = [1,2,3,4,5,6];
// // const reverseArray = arr.reverse();
// // main array and new ar both are change...
// const reverseArray = arr.toReversed();
// console.log(reverseArray);

// console.log(arr)


// ============================================================


// let arr = [1,2,3,4,5,6];
// // const spliceArray = arr.splice(2,1,100,400);
// // return removed element;
// // it can insert element in index
// // it can be possible negative index that means from right side.
// // but change in main array it is means mutted ways not immuted 

// // it can be following way

// const spliceArray = arr.toSpliced(2,1,100,400);
// console.log(spliceArray);
// console.log(arr);



// ===================================================================


// const arr = [1,2,3,4,5,6];
// const result = arr.with(1, 400);
// console.log(result);

// immutable way change ...

// ============================================================

const arr = [70, 60, 2, 21, 4, 3];


const func = function(a, b)
{
    return a - b;
    // ascending

    // return b - a;
    // desending   
}
// const sortedarr = arr.sort();
// it sort alphabatically
// and right way
const newsorted = arr.sort(func);

console.log(newsorted)