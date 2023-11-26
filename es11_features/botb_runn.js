// globalThis.setTimeout(() => console.log('hello'), 100);
// node js and browers both work this...
// ===============================================================

// let largest_number = Number.MAX_SAFE_INTEGER;
// largest_number += 1;
// largest_number += 1;
// console.log(largest_number);


// BigInt
// ====================================================
// let largest_number = Number.MAX_SAFE_INTEGER;
// largest_number += 1;
// largest_number = BigInt(largest_number) + 1n;
// console.log(largest_number);


// object 
// ==================================

// const language = {
//     name: 'javaScript',
//     creator: 'Brendan Eich',
//     library: {
//         react: {
//             company: 'Facebook'
//         }
//     }
// };

// let company = language.library.react.company;
// console.log(company);

// if i am write code in this way the it will be wrong because of 
// if any component absenct or it is come from api.. then it will be
// wrong. so it is not correct way...
// we can to this in the following way.

// let company = language?.library?.react?.company;
// console.log(company);

// ==================================


// collising operator


// let language;
// language = null;
// console.log(language ?? 'JavaScript');
// console.log(language || 'JavaScript');
// it is not same. because of ?? if first if not indifined then output first otherwise second..


// ========================================================================


// video 25 ... r o ase.

