import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: "producto 1",
  createdAt: new Date,
  stock: 5
});

addProduct({
  title: "producto 2",
  createdAt: new Date,
  stock: 6,
  size: "L"
});

const total = calcStock();
console.log(total);

