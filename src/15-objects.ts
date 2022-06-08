(()=>{
  const login = (data: {email: string, password: string})=>{
    console.log(data.email, data.password);
  }

  login({
    email: 'mario@mario.com',
    password: '123456'
  });

  type Sizes = 'S'|'M'|'L'|'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product)=>{
    products.push(data);
  }

  addProduct({
    title: "producto 1",
    createdAt: new Date,
    stock: 100
  });

  addProduct({
    title: "producto 2",
    createdAt: new Date,
    stock: 100,
    size: "L"
  });

  console.log(products);

  products.push({
    title: "producto 3",
    createdAt: new Date,
    stock: 100,
    size: "XL",
  })
})();
