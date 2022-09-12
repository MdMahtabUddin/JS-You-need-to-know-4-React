// PH 42-2 template string, arrow function, spread operator

const numbers =[70,50,35,40,15];

const students={
    name:'Md Mahtab Uddin',
    age:30,
    hobies: ['travelling',' cycling'],
    movies:['bahubali','kgf']
};

// template string  
const about =`My name is ${students.name} age of ${students.age} my hobbie is ${students.hobies} my favourite movie is${students.movies}`;

console.log(about);

// arrow function 

// without parametter 
const fiftyFive =()=> 55;
// with parametter  
const sixty = (num)=> num +60;
// multiple parameter
const addThree =(x,y,z)=> x+y+z;
// multiline 
const doMath =(num1, num2)=>{
    const number =num1+num2;
    return;
}

// spread operator  

// when a copy same array using ... 
const newNumbers =[...numbers];
console.log(newNumbers);

// create new array from older array and add a Element
const currenrNumbers= [...numbers,45];

console.log(currenrNumbers)
