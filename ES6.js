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
