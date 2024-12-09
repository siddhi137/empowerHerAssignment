//Problem Statement 19

let age = 20;
function displayAge(){
    console.log("The age is:",age);
}

function changeAge(newAge){
    age = newAge;
    console.log("Updated age is:" , newAge);
}
displayAge();
changeAge(25);

//---------------------------------------------

//Problem Statement 20

//Question 1:

 function createCounter(){
    let count = 0;

    return{
        increment: function(){
            count++;
            console.log(count)
        },
        decrement: function(){
            count--;
            console.log(count)
        },
        display: function(){
            console.log(count)
        }
    };
 }
 const counter = createCounter();
 counter.increment();
 counter.increment();
 counter.decrement();

 //Explain how closures are being used to encapsulate the counter variable.

 // Ans- 

 //What happens if multiple counters are created using the same function? Provide examples to demonstrate this behavior.

 // Ans-


 //----------------------------------------------------------------------------------------------------------------------------------

 //Question 2:

 function createBankAccount(){
    
 }
