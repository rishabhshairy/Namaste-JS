// Even before code is executed memory is allocated 
//to each and every function and variable

/* If we use arrow function it get assigned just like variable --> undefined */


var x=7;

function getNames() {
    console.log("Namaste JS");
}

var getNames2 = () => {
    console.log("From Arrow fun JS");
}


getNames();
console.log(getNames)
console.log(x);
