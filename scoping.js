// Scoping

var myGlobalVar = 'This is a global variable'

function myNewFunction() {
    var myLocalVar = 'This is a local variable'
    console.log(myGlobalVar)
    console.log(myLocalVar)
}

console.log(myGlobalVar)
console.log(myLocalVar)