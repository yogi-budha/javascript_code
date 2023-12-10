// Array
 const myArr = [1,2,3,4,5,6,7]

//  ArrayMethod

// push and pop

// myArr.push(9)
// myArr.pop()


//unshift and shift

// myArr.unshift(3)
// myArr.shift();



// include & indexof

// console.log(myArr.indexOf(4))
// console.log(myArr.includes(3))


// slice & splice

// console.log("A",myArr)

// console.log(myArr.slice(0 , 4))

// console.log("B" , myArr);

// console.log(myArr.splice(0 ,4));

// console.log(myArr)


// +++++++++++++++++++++++++++++++++++++++++++++++++

const marval_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros)

// const allheros = marval_heros.concat(dc_heros)
// console.log(allheros)

// console.log(...marval_heros, ...dc_heros)

const anynum = [1,2,3,4,[2,4,5,[1,5,67,3,]],4,5,6,[6,5,4]]

// console.log(anynum.flat(Infinity))

// console.log(Array.isArray("yogesh"))
// console.log(Array.from("yogesh"))
// console.log(Array.from({name:"yogesh"}))

let score1 = 1002;
let score2 = 1020;
let score3 = 1300;
let score4 = 400;

const totalscore = Array.of(score1,score2,score3,score4)
console.log(totalscore)

