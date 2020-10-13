const array = [1, 2, 3, 4, 5, 6];

function simpleArraySum(ar) {
  let response = 0;

for (let index = 0; index < ar.length; index++) {
    const element = ar[index];
    response = response + element;
    
}



  return response

}
const sum = simpleArraySum(array);

console.log(sum)
