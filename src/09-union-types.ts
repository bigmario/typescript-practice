(()=>{
  let userId: string | number;
  userId = 1;
  userId = '1';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('MARIO');
  greeting(12.2121);

})()
