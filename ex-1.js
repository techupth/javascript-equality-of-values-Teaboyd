// Exercise #1: Strict and Same
// Start commenting here
console.log(Object.is(10, 20)); //false
console.log(Object.is(0, -0));//false
console.log(Object.is(NaN, 100));//false
console.log(Object.is("one", "two"));//false
console.log(Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }));//false
console.log(Object.is(null, undefined));//faslse

console.log(10 === 20);//false
console.log(10 === "10")//false
console.log(3.14 !== 3.14);//false
console.log("TechUp" !== "TechUp");//false
console.log(NaN === NaN);//false
console.log(0 !== -0);

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
console.log(objectA === objectB);//false
