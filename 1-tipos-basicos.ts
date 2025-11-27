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

productId = 123;