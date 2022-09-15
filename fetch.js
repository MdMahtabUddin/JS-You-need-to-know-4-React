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
// fetch('url')
// .then(Response => Response.json())
// .then(data=>(console.log(data)));

// find object keys and value  

const keys =Object.keys(students);
const values =Object.values(students);


// for
// array te loop use korte hole foreach use korbo .
// if return no need 

const number =[30,45,50,67,70];
number.forEach(num =>console.log(num));
number.map(num=>num*2);

// for of use array like object 
// loop on in object using for in 


// add or remove from array 

const products =[
    {name: 'laptop' , price: 12000, brand: 'mac' , color:'silver'},
    {name: 'phone' , price: 120000, brand: 'iphone' , color:'gray'},
    {name: 'camera' , price: 50000, brand: 'canon' , color:'blue'},
    {name: 'watch' , price: 11000, brand: 'casio' , color:'black'}

];

const newProducts = {name: 'webcam', price:2000, brand: 'a4tech' ,color:'black'};

// copy products then add newProducts in array 
const newProduct =[...products, newProducts];

// craete a new array without specific items 
// remove phone means create new array without phone 

const rename = products.filter(p =>p.name !=='phone');
console.log(rename);





