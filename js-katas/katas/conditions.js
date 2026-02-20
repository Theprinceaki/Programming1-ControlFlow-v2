// Conditions kata: FizzBuzz-style function that returns an array for 1..n

function fizzbuzz(n = 100) {
if(n<1){
  throw new Error('n must be positive')
}
 
  //Purpose: return an array
  
  const result = []
    for(let i=1; i <= n; i+=1){
      if(i %15 ===0){
        result.push("fizzbuzz")
      } 
      else if(i % 3 ===0){
        result.push("fizz");
      }else if (i % 5 === 0){
        result.push("buzz");
      } else{
        result.push(i)
      }
      
    }

    return result;

}
fizzBuzz(5)

globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.fizzBuzz = fizzBuzz;
