// Product Dashboard JavaScript

console.log('Product Dashboard loaded');

// Function to fetch products using fetch() and .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.log('Fetch error:', error);
        });
}

// Function to fetch products using async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Function to display products
function displayProducts(products) {
    console.log('Displaying products:', products);
    // Product display logic will be added here
}

// Function to handle errors
function handleError(error) {
    console.error('Error fetching products:', error);
}