(()=>{
  let prices = [1,2,3,4,5,6];
  // prices.push('asss');
  prices.push(7);

  let products = ['hola', true];
  // products.push(12);
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ["hola", true];
  mixed.push(123);
  mixed.push({})
  mixed.push([])

  let numbers = [1,2,3,4,5,6];
  numbers.map(item => item*2);

})()
