async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        const data = await response.json();

        const firstFive = data.slice(0, 5);

        document.getElementById("products").innerHTML =
            firstFive.map(product =>
                `<p><b>${product.title}</b> - ${product.price}</p>`
            ).join('');

    } catch (error) {
        document.getElementById("products").innerHTML =
            "<p>Error loading products!</p>";

        console.log(error);
    }
}