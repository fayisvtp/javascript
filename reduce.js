let arr = [1,3,4,5,6,7]

// let output = arr.reduce((acc,cur)=>acc=acc+cur)

// console.log(output);

let output = arr.reduce((acc,cur)=>{
return acc = acc+cur
},10)
console.log(output);

// ****************************************************
// ****************************************************

let arr1 = [1,2,3,4,-5,-4,-8]

let negtv = arr1.filter((x)=>x<0)
console.log(negtv);

let postv = arr1.filter((x)=>x>0).reduce((x,y)=>x=x+y)
console.log(postv);