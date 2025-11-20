function fibs(num) {
  //check base cases
  if (num < 1 || isNaN(num)) return "Please enter a valid number";
  if (num === 1) return [0];

  const fibArr = [0, 1];

  //build fibonacci array
  for (let i = 2; i < num; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }

  return fibArr;
}

function fibsRec(num) {
  //check base cases
  if (num < 1 || isNaN(num)) return "Please enter a valid number";
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const prevFib = fibsRec(num - 1); //only one recursive call per layer
  const nextFib = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
  return [...prevFib, nextFib]; // Spread the previous array and add the new number
}

//Iterative
console.log(fibs("a")); //Please enter a valid number
console.log(fibs(-2)); //Please enter a valid number
console.log(fibs(0)); //Please enter a valid number
console.log(fibs(1)); // [0]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

//Recursive
console.log(fibsRec("a")); //Please enter a valid number
console.log(fibsRec(-2)); //Please enter a valid number
console.log(fibsRec(0)); //Please enter a valid number
console.log(fibsRec(1)); // [0]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
