# JavaScript Data types
# Primitive Data Types
# Immutable
Number(typeof -> Number)
    -> +Infinity, -Infinity, NaN
    -> Number.MAX_VALUE, NUMBER.MIN_VALUE
    -> CHECK DOUNLE PRESSION VALUES Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.isSafeInteger()
String(typeof -> string)
Boolean(typeof -> boolean)

Symbol(typeof -> symbol)
BigInt(typeof -> undefined)

Undefined(typeof -> undefined)
    -> Undefined means a variable has been declared but has not yet been assigned a value.
Null(typeof -> Object)
    -> Null is an empty or non-existent value
    -> Null must be assigned.

# Mutable
Object
    -> Functions are objects. Arrays are objects

# There are 7 falsy values in JavaScript.
0, 0n, null, undefined, false, NaN, the empty string “”
Useful Link:
https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4

console.log("The number NaN")
console.log(NaN===NaN) // false
console.log(NaN==="") // false

# There are three types of errors:
Load time errors: Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically.
Run time errors: Errors that come due to misuse of the command inside the HTML language.
Logical Errors: These are the errors that occur due to the bad logic performed on a function which is having different operation.

# Var vs Let vs const

# Scoping and Hoisting
Scoping
    -> Global Scope and Local Scope
    -> Global Scoping: There is only one Global scope throughout a JavaScript document. A variable is in the Global scope if it’s defined outside of a function.
    -> Local Scoping: Variables declared within a function are in the local scope.
    -> If you declare a local variable and a global variable with the same name, the local variable will take precedence when you use it inside a function. This type of behavior is called shadowing
Hoisting:
Hoisting in JavaScript is a feature in which the interpreter moves the function and variable declarations to the top of their containing scope.




