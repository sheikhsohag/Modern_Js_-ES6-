// acsending/desending

const cars = [
    {
        type: "volvo",
        year: 2016,
    },
    {
        type: "bmw",
        year: 2017,
    },
    {
        type: "audi",
        year: 2011,
    },
]

// object sorted

// const car = cars.sort(function(a, b){
//     // return a.year - b.year;
//     // if a and b is integer

//     // if a and b are string 
//     // first it convert into lowecase because A,a is differnt in javascript...
//     const x = a.type.toLowerCase();
//     const y = b.type.toLowerCase();
//     // -1 return hole x sorted before y
//     // 1 return y sorted before x
//     // 0 both are same not sorted
//     if(x < y)
//     return -1;
//     else if(x > y)
//     return 1;
//     else return 0;
// });
// above code is mutted means main array is changed with sort 

// ===================================================================


// Avoid this issue used toSorted function
// now it is ummuted because of main array does not changed..

const car = cars.toSorted(function(a, b){
        // return a.year - b.year;
        // if a and b is integer
    
        // if a and b are string 
        // first it convert into lowecase because A,a is differnt in javascript...
        const x = a.type.toLowerCase();
        const y = b.type.toLowerCase();
        // -1 return hole x sorted before y
        // 1 return y sorted before x
        // 0 both are same not sorted
        if(x < y)
        return -1;
        else if(x > y)
        return 1;
        else return 0;
    });


console.log(car);





