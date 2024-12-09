//Problem Statement 11

function processProducts(products){
const productName = products.map(product=>product.name);


products.forEach(product => {
    if(product.price>50){
        console.log(`${product.name} is above $50`)
    }else{
        console.log(`${product.name} is below $50`)
    }
});
}

processProducts([{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]);

//------------------------------------------------------------------------------------------------


//Problem Statement 12

function processStudents(studentData){
const filteredData = studentData.filter(student=>student.marks>60);

const sortedData = filteredData.sort((a,b)=>b.marks-a.marks)
console.log(sortedData);

const sortedNames = sortedData.map(student=>student.name)
return sortedNames;
}

console.log(processStudents([ { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 } 
]))


//--------------------------------------------------------------------------------


//Problem Statement 13

function productData (categories){
const objectCounts = categories.reduce((accumulator,category)=>{
accumulator[category]=(accumulator[category] || 0)+1;
return accumulator
},{})

const sortedArray = Object.entries(objectCounts)
.sort((a,b)=> b[1]-a[1])
return sortedArray
}

console.log(productData (["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]));


//----------------------------------------------------------------------------------------------------------------------

//Problem Statement 14

function empPerformanceData(employee){

    const filterData = employee.filter(emp => emp.tasksCompleted > 5);
    
    const empName = filterData.map(employee=>{
        let performanceLevel = 0;
        if(employee.rating>4.5){
            performanceLevel = "Excellent"
        }else if(employee.rating>=3 && employee.rating<=4.5){
            performanceLevel = "Good";
        }else{
            performanceLevel = "Needs Improvement"
        }
        return {
            name : employee.name,
            performanceLevel : performanceLevel
        }

    })

    const order = {
        "Excellent": 1,
        "Good" : 2,
        "Need Improvement":3
    }
    const sortEmp = empName.sort((a,b)=>(order[a.performanceLevel]-order[b.performanceLevel]));
    return sortEmp

    }


console.log(empPerformanceData( [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    ]))