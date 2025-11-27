let productName: string = "Laptop";
let productPrice: number = 1000;
let productId: string | number = "ABC123";

interface Product {
    name: string;
    price: number;
}

let myProduct: Product = {
    name: productName,
    price: productPrice
};

console.log("Product Name:", myProduct.name);
console.log("Product Price:", myProduct.price);
console.log("Product ID (string):", productId);

productId = 123;
console.log("Product ID (number):", productId);