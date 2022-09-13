// PH 42-3 Array methods map filter find forEach

// array of object  
const products =[
    {name: 'laptop' , price: 12000, brand: 'mac' , color:'silver'},
    {name: 'phone' , price: 120000, brand: 'iphone' , color:'gray'},
    {name: 'camera' , price: 50000, brand: 'canon' , color:'blue'},
    {name: 'watch' , price: 11000, brand: 'casio' , color:'black'}

];

// map returns array 
const brand =products.map(product =>product.brand);
// console.log(brand);

// foreach returnkorbe na  
products.forEach(product=>console.log(product.price));

// filter works like a condion  
const chepPrice =products.filter(product =>product.price <= 15000);
// console.log(chepPrice);

// searching name includes letter p 
const names =products.filter(product=>product.name.includes('p'));
// console.log(names);

// foreach & fund works similer but find returns first item . find similer items but returns first 
const myName =products.find(product=>product.name.includes('n'));
console.log(myName)

