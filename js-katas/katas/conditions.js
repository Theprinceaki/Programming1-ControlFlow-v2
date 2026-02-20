function fizzBuzz(n = 100) {
if(n<1){
  throw new Error('n must be positive');
}
  const result = []
    for(let i=1; i <= n; i+=1){
      if(i %15 ===0){
        result.push("FizzBuzz");
      } 
      else if(i % 3 ===0){
        result.push("Fizz");
      }else if (i % 5 === 0){
        result.push("Buzz");
      } else{
        result.push(i)
      }
      
    }

    return result

}
fizzBuzz(5);

globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.fizzBuzz = fizzBuzz;