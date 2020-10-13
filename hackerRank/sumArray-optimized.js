const array = [1, 2, 3, 4, 5, 6];
// this is an arrow function
const simpleArraySum = ar =>{
  let response = 0;

  for (let index = 0; index < ar.length; index++) {
      response += ar[index]
      
  }
  
  
  
    return response
  
}


console.log(simpleArraySum(array))
