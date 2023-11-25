const user = {
    id: 234,
    name: "sohag",
    age: 24,
    education: {
        degree: "Masters",
    },
}

// const { education:{
//     degree
// }} = user;

// console.log(degree)


// if take value in another variable 

// const { education:{
//     degree: x,
// }} = user;

// console.log(x)

// suppose education does not exist in the object.. or the data come from api then 
// we found a errors... so we can do  assigned defualt value in the object..


const { education: { degree } = {} } = user;
console.log(degree)

