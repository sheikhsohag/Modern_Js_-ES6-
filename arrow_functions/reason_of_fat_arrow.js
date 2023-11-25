var javascript = {
    name: "javascript",
    libraries: ["React", "Angular", "Vue"],
    printlibraries: function()
    {
        // console.log(this);
        // here this is hole object

        var storeThis = this
        this.libraries.forEach(
        function(a)
        {
            // outter this and in function this is not same 
            // forEach function change it so as a result fat arrow function comes

            // so used a variable to store this that are do above

            console.log(`${storeThis.name} loves ${a}`)
        }
        );
    }
}; 

// javascript.printlibraries();



// same as above arrow function don't change parent this

let javascripts = {
    name: "javascripts",
    libraries: ["React", "Angular", "Vue"],
    printlibraries: function()
    {
        this.libraries.forEach( (a) => console.log(`${this.name} loves ${a}`));
    }
};

// javascripts.printlibraries()


// new keyword in fat arrow function


// javascript every function is a constructor function
// so it is create like this
// therefore it is a constructor function so new keyword can be posible here
function Person(name)
{
    this.name = name;
}

var sakib = new Person("sakib")

// for arrow function
// arrow function is not a constructor function
// we cann't use new key word
var Person = (name) =>
{
    this.name = name;
};

var sakib = new Person("sakib")

