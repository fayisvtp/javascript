let numbers = [1,2,3,4,5,6]

let sum = 0;

numbers.forEach(item =>{
    sum += item
})

console.log(sum);

let numbers1 = [1,2,3,4,5,6,7]

// **********************************************************
// **********************************************************

// count finding using forEach Method
// ***********************************

const ltr = 'fayisfayis'
let lettars = ltr.split('')
let count = {}

lettars.forEach((item)=>{
    if (count[item]){
        count[item]++
    }
    else{
        count[item]=1
    }
})
console.log(count);