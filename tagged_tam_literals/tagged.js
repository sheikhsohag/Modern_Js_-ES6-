// we have ${player1} and ${player2} in our cirkect team.`
// strings means = we have ,,, and ,,, in our cirkect team.`
// values = player1 and player2.
function modifier(strings, ...values)
{
     const m = strings.reduce((prev, current) =>
     {
          return prev + current + (values.length ? "Mr. " + values.shift(): "")   //values.shift()  akta akta kore value pull kore...
     }, "");

     return m;
}

let player1 = "Sakin";
let player2 = "Tamim";

console.log(modifier`we have ${player1} and ${player2} in our cirkect team.`);