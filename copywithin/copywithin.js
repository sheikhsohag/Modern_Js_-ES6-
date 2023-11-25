let array = ['java', 'c', 'c++', 'php', 'rust'];

let arr = array.copyWithin(3, 1, 3);

console.log(arr);


// target is requeired 
// start default to 0
// end default to array.length 
// never changes array.length
// overwrites original array
// returns modified array
