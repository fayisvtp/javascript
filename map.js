// Input array
let arr = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
let newArr = arr.map(function (val, index) {
	return { key: index, value: val * val };
})

// Display output
console.log(newArr)

// ***********************************************************
// ***********************************************************

const users =[
	{Firstname :'Mohammed', Lastname : 'fayis', age: 50},
	{Firstname :'Mohammed', Lastname : 'Souban',age: 20 },
	{Firstname :'Mohammed', Lastname : 'Nabeel',age: 10},
	{Firstname :'Mohammed', Lastname : 'Adil',age: 70}
];

const fullname = users.map((x)=>x.Firstname + " " + x.Lastname)
console.log(fullname);

const {middleage,youngers}   = users.reduce((acc,cur)=>{
  if (cur.age > 30) {
	acc.middleage.push(cur);
  }
  else{
	acc.youngers.push(cur)
  }
  return acc

},{middleage : [],youngers : []})
console.log('middleage =', middleage );
console.log('youngers' , youngers);


 