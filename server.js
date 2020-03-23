
let cats=['Newton','Instance','Sherry','Street Cat'];
cats.forEach((cat) =>{
    console.log(cat.toUpperCase());
    //the return will return undefined
    //return cat.toUpperCase()

});
//in the console it will appear uppercase but the same array still lower 
//for eash doesn't change the original array


/*//here newCats is not defined
let newCats=cats.forEach((cat) =>{
    return cat.toUpperCase();
});*/


//hay altare2a badeel la al map
let newcats=[];
cats.forEach((cat) =>{
    newcats.push(cat.toUpperCase());
    
});
//hay ra7 tetba3hom kolhom upper
console.log(newcats);


//i want to map cats array and for each cat i will run this fun (upper)
//also mapped doesn't change the original array it maked a a map "a copy" of it and work on that copy
let mappedCats=cats.map((cat)=>{
    //i want to know for eash one if it has the letter S 
    //it will return a boolean for each string if it's contain an S
    return cat.toUpperCase().includes('S');
});




//filter change the original
//reduce return a sub array from the original



