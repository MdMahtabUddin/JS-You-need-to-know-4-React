// 42-4 Array and object Destructuring, optional chaining

// destructuring
[x,y]=[52, 67];
console.log(x);

// object destructuring

const students={
    name:'Md Mahtab Uddin',
    age:30,
    hobies: ['travelling',' cycling'],
    movies:['bahubali','kgf']
};

const [firstMovie, secondMovie] = students.movies;


console.log(firstMovie);

