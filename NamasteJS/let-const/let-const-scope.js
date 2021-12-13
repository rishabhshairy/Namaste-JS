/* 
    var declared inside block can be accessed 
    as it is inside global scope.

    where as let and const are in separate space called block
*/
{
    // Its a Compound Statement
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);