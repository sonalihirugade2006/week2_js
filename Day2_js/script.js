let products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Phone", price: 20000, category: "Electronics" },
    { name: "Book", price: 500, category: "Education" },
    { name: "Bag", price: 1000, category: "Accessories" },
    { name: "Watch", price: 3000, category: "Accessories" }
];

const totalPrice = () => {
    let total = 0;

    for (let product of products) {
        total += product.price;
    }

    return total;
};

console.log("Total Price:", totalPrice());

const { name, price } = products[0];

console.log("Product Name:", name);
console.log("Product Price:", price);