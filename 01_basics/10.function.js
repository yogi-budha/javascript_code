function calculateCartPrice(valu1 , value2,...num1){//rest operator
    return num1;
}

// console.log(calculateCartPrice(200,500,5,2000))


// object
let student = {
    name : "yogesh",
    age : "21"
}
function handleobject(getObject) {
    return `Hi ${getObject.name}, your email id is ${getObject.email} and your contact no is ${getObject.contactNo}`;
}

// console.log(handleobject(student))
// console.log(handleobject({
//     name : "yogi",
//     email : "yogesh@gmail.com",
//     contactNo : 984799256
// }))

const Array1 = ["yogesh", "ram", "shyam", " hari"]
function handleArray(getArray){
    return `My name is  ${getArray[0]} and my friend name are ${getArray[1]},${getArray[2]},${getArray[3]}`
}
console.log(handleArray(Array1))
