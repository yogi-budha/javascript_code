// primitive (call by value (copy of value))

// Types 7 : String , Number , Boolean , BigInt , Null , Undefined , Symbol

// let Name = "yogesh";
const phoneno = 9847999256;
// let IdLogedIn = True;
// const BigNumber = 345879843597n;
// let empty = null;
// let score;
let unique = Symbol("123");
let unique1 = Symbol("123");

console.log(unique==unique1);


// Non primitive (Call by Reference)

// Array , Object , Function

const number = [1,2,3,4,5,5]

 let mydetails={
    name:"yogesh",
    age: 21
}

const myfunction =function(){
    console.log("hello world")
}

console.log(typeof phoneno)



//+++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive)-->copy  & Heap (non-primitive)-->reference
