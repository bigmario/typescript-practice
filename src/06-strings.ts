(()=>{
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);
  let productPrice = 100;
  let isNew = false;

  const productDescription = "lorem";
  const summary = `
    title: ${productTitle},
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log(summary);
})()
