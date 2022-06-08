(()=>{
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = 'aaaaaa';
  myDinamicVar = null;
  myDinamicVar = {};


  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).toLowerCase();
  console.log(rta);

  myDinamicVar = 1212;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2);

})()
