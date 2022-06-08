(()=>{
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | undefined = undefined;
  myNumber = 12;
  myNumber = undefined;

  let myString: string | null = null;
  myString = 'asdsa';
  myString = null;

  function hi(name: string | null) {
    let hello = 'Hola'
    if (name) {
      hello += ` ${name}`;
    } else {
      hello += ' Nobody'
    }
    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola'
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('Mario');
  hi(null);

  hiV2('Mario');
  hiV2(null);


})()
