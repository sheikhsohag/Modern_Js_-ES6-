// let myset = new Set();
// // always constructor form a likhte hobe

// myset.add(3).add(4);
// myset.add("bangladesh");
// console.log(myset.has(3));

// console.log(myset);

// =======================================================================

// myset.size()
// myset.delete(Element);
// myset.clear

// ===================================================================

// let array = []

// let myset = new Set(array);

// array to set

// ======================================

// set to array conversion
// spread operator

// let myset = new Set();

// myset.add(4).add(5).add("sohag").add("ali");
// console.log(myset);

// let myarray = [...myset];
// console.log(myarray);

// ====================================================================



let myset = new Set();
let youset = new Set();

myset.add(4).add(5).add("sohag").add("ali");
youset.add(42).add(5).add("sog").add("al");
console.log(myset);

// let myarray = new Set([...myset].filter(x => youset.has(x)));
// intersection

let myarray = new Set([...myset].filter(x => !youset.has(x)));
// difference

console.log(myarray);
