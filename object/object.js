
x= 3;
y = 5;

let myObj = {
    name: "javaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1,
    x,
    y,
    // outside variable name and inside name are same then it is write in the way
};


var keys = Object.keys(myObj);
let values =Object.values(myObj);
let entries =Object.entries(myObj);


console.log(keys);
console.log(values);
console.log(entries)