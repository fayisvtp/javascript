// odd numbers 
// ************************

let arr = [1,2,3,4,-5,-4,0,9]

// function oddnums(x) {
//     return x % 2
// }
// let answer = arr.filter(oddnums)
// console.log(answer);

let answer = arr.filter((x)=>x%2)
console.log(answer);

// let answer = arr.filter((x)=>{
//     return x %2
// })
// console.log(answer);

// *****************************************************
// *****************************************************

// even number
// ***********
let arr1 = [1,12,3,4,-5,4,0,9]

// function evennums(x) {
//     return x%2===0
    
// }
// let answer1 = arr1.filter(evennums)
// console.log(answer);

let answer1 = arr1.filter((x)=>x%2==0).reduce((x,y)=>x=x+y)
console.log(answer1);

// let answer1 = arr.filter((x)=>{
//     return x%2===0
// })
// console.log(answer1.reduce());