// PH 42-5 JSON, Fetch, keys, values, array add or remove using dots

// Json 
const students={
    name:'Md Mahtab Uddin',
    age:30,
    hobies: ['travelling',' cycling'],
    movies:['bahubali','kgf']
};

// convert obj to json
const studentsJson =JSON.stringify(students);
// convert  json to object 
const studentsObj =JSON.parse(studentsJson);

// fetch 
fetch('url')
.then(Response => Response.json())
.then(data=>(console.log(data)));

// find object keys and value  

const keys =Object.keys(students);
const values =Object.values(students);

