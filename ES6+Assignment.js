//problem statement 11: 

const multiply = (a=1,b=1)=> a*b;

console.log(multiply(3,4));
console.log(multiply());




//problem statement 12: 

const result = (a)=> ({square: a**2 , cube: a**3});
console.log(result(5));




//problem statement 13: 

const people = [ 
    { 
        name: "Alice", 
        address: { 
            city: "New York", 
            street: { name: "Broadway", number: 123 } 
        } 
    }, 
    { 
        name: "Bob", 
        address: { 
            city: "Los Angeles", 
            street: { 
                name: "Sunset Boulevard", 
                number: 456 } 
            } 
        } 
    ];
    
    

const formattedArray = people.map(({name, address:{city,street:{name: streetName}}})=>{
        return (`${name} lives in ${city} on ${streetName}`);
});
console.log(formattedArray);
 



//problem statement 14:

const profile = {
    name:"charlie",
    age:29,
    address:{
        city:"San Francisco",
        zipCode:"94101"
    }
}

const updates = {
    age:30,
    address:{
        zipCode:"94109",
        country:"USA"
    }
}

const mergedData = {...profile, 
    ...updates,
    address:{
        ...profile.address,
    ...updates.address,
}
};
console.log(mergedData);











