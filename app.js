// console.log("Hello World!");



const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99, inStock: true },
    { id: 2, name: "Smartphone", category: "Electronics", price: 499.99, inStock: true },
    { id: 3, name: "Tablet", category: "Electronics", price: 299.99, inStock: true },
    { id: 4, name: "Headphones", category: "Electronics", price: 89.99, inStock: true },
    { id: 5, name: "Smartwatch", category: "Electronics", price: 199.99, inStock: true },
    { id: 6, name: "Camera", category: "Electronics", price: 599.99, inStock: true },
    { id: 7, name: "Bluetooth Speaker", category: "Electronics", price: 129.99, inStock: true },
    { id: 8, name: "Portable Charger", category: "Electronics", price: 39.99, inStock: true },
    { id: 9, name: "Gaming Console", category: "Electronics", price: 499.99, inStock: true },
    { id: 10, name: "Smart TV", category: "Electronics", price: 799.99, inStock: false },
    { id: 11, name: "Microwave Oven", category: "Appliances", price: 199.99, inStock: true },
    { id: 12, name: "Refrigerator", category: "Appliances", price: 899.99, inStock: false },
    { id: 13, name: "Washing Machine", category: "Appliances", price: 499.99, inStock: true },
    { id: 14, name: "Coffee Maker", category: "Appliances", price: 49.99, inStock: true },
    { id: 15, name: "Air Fryer", category: "Appliances", price: 89.99, inStock: true },
    { id: 16, name: "Electric Kettle", category: "Appliances", price: 29.99, inStock: true },
    { id: 17, name: "Toaster", category: "Appliances", price: 29.99, inStock: true },
    { id: 18, name: "Vacuum Cleaner", category: "Appliances", price: 199.99, inStock: true },
    { id: 19, name: "Blender", category: "Appliances", price: 49.99, inStock: true },
    { id: 20, name: "Slow Cooker", category: "Appliances", price: 69.99, inStock: true },
    { id: 21, name: "T-Shirt", category: "Clothing", price: 19.99, inStock: true },
    { id: 22, name: "Jeans", category: "Clothing", price: 39.99, inStock: true },
    { id: 23, name: "Jacket", category: "Clothing", price: 89.99, inStock: false },
    { id: 24, name: "Sneakers", category: "Footwear", price: 59.99, inStock: true },
    { id: 25, name: "Sandals", category: "Footwear", price: 29.99, inStock: true },
    { id: 26, name: "Boots", category: "Footwear", price: 79.99, inStock: false },
    { id: 27, name: "Socks", category: "Footwear", price: 9.99, inStock: true },
    { id: 28, name: "Hat", category: "Accessories", price: 14.99, inStock: true },
    { id: 29, name: "Scarf", category: "Accessories", price: 19.99, inStock: true },
    { id: 30, name: "Belt", category: "Accessories", price: 24.99, inStock: true },
    { id: 31, name: "Backpack", category: "Accessories", price: 39.99, inStock: true },
    { id: 32, name: "Sunglasses", category: "Accessories", price: 29.99, inStock: true },
    { id: 33, name: "Watch", category: "Accessories", price: 99.99, inStock: true },
    { id: 34, name: "Perfume", category: "Beauty", price: 59.99, inStock: true },
    { id: 35, name: "Moisturizer", category: "Beauty", price: 29.99, inStock: true },
    { id: 36, name: "Lipstick", category: "Beauty", price: 19.99, inStock: true },
    { id: 37, name: "Foundation", category: "Beauty", price: 34.99, inStock: true },
    { id: 38, name: "Hair Dryer", category: "Beauty", price: 49.99, inStock: true },
    { id: 39, name: "Straightener", category: "Beauty", price: 59.99, inStock: true },
    { id: 40, name: "Curling Iron", category: "Beauty", price: 39.99, inStock: true },
    { id: 41, name: "Skincare Set", category: "Beauty", price: 99.99, inStock: true },
    { id: 42, name: "Yoga Mat", category: "Fitness", price: 29.99, inStock: true },
    { id: 43, name: "Dumbbells", category: "Fitness", price: 39.99, inStock: true },
    { id: 44, name: "Treadmill", category: "Fitness", price: 499.99, inStock: false },
    { id: 45, name: "Exercise Bike", category: "Fitness", price: 299.99, inStock: true },
    { id: 46, name: "Resistance Bands", category: "Fitness", price: 19.99, inStock: true },
    { id: 47, name: "Kettlebell", category: "Fitness", price: 29.99, inStock: true },
    { id: 48, name: "Jump Rope", category: "Fitness", price: 9.99, inStock: true },
    { id: 49, name: "Fitness Tracker", category: "Fitness", price: 79.99, inStock: true },
    { id: 50, name: "Cookbook", category: "Books", price: 24.99, inStock: true },
    { id: 51, name: "Novel", category: "Books", price: 14.99, inStock: true },
    { id: 52, name: "Biography", category: "Books", price: 19.99, inStock: true },
    { id: 53, name: "Mystery Book", category: "Books", price: 22.99, inStock: true },
    { id: 54, name: "Science Fiction Book", category: "Books", price: 24.99, inStock: true },
    { id: 55, name: "Children's Book", category: "Books", price: 9.99, inStock: true },
    { id: 56, name: "Textbook", category: "Books", price: 59.99, inStock: true },
    { id: 57, name: "Art Book", category: "Books", price: 39.99, inStock: true },
    { id: 58, name: "Puzzles", category: "Toys", price: 19.99, inStock: true },
    { id: 59, name: "Board Game", category: "Toys", price: 29.99, inStock: true },
    { id: 60, name: "Action Figure", category: "Toys", price: 14.99, inStock: true },
    { id: 61, name: "Doll", category: "Toys", price: 24.99, inStock: true },
    { id: 62, name: "Building Blocks", category: "Toys", price: 34.99, inStock: true },
    { id: 63, name: "Model Kit", category: "Toys", price: 19.99, inStock: true },
    { id: 64, name: "Stuffed Animal", category: "Toys", price: 29.99, inStock: true },
    { id: 65, name: "Craft Kit", category: "Toys", price: 39.99, inStock: true },
    ]  



// console.log(products[9]);

function allItems(){
    scrItem.innerHTML = ""
    render(products)
}





var scrItem = document.querySelector(".items")
    
function render(products){
    
    
    products.filter((items) => {
    // console.log(items);
    scrItem.innerHTML += `<div id="card">
            <h1>Name : ${items.name}</h1>
            <h2>Category : ${items.category}</h2>
            <h2>Price : ${items.price}</h2>
            <h2>InStock : ${items.inStock}</h2>
            <button class="btn" onclick="addCart()">Add to Cart</button>
            </div>`
    
})
}

render(products)

function filter(btn){
    // console.log("helo");
    scrItem.innerHTML = ""
    // console.log(btn.innerHTML);
    // console.log(scrItem.innerHTML);

    const buttons = btn.innerHTML
       
       var filteredArr = products.filter( (items) => items.category == buttons)

    // console.log(filteredArr);
        render(filteredArr)

}

var count = document.querySelector("#counting")
var num = 0;

function addCart() {
    num++
    count.innerHTML = "0" + num
    if(num > 9){
        count.innerHTML = num
    }
}

