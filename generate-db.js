const fs = require('fs');

const categories = [
    { id: 1, name: "Smartphones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Tablets" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Smartwatches" },
    { id: 6, name: "Monitors" },
    { id: 7, name: "Keyboards" },
    { id: 8, name: "Mice" },
    { id: 9, name: "Headphones" },
    { id: 10, name: "Speakers" },
    { id: 11, name: "Gaming Consoles" },
    { id: 12, name: "Cameras" },
    { id: 13, name: "Drones" },
    { id: 14, name: "Printers" },
    { id: 15, name: "Networking" },
    { id: 16, name: "Software" },
    { id: 17, name: "Furniture" },
    { id: 18, name: "Office Supplies" }
];

const products = [];

for (let i = 1; i <= 100; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const randomRating = (Math.random() * 2 + 3).toFixed(1); // Ratings between 3.0 and 5.0
    const randomSku = `SKU-${Math.random().toString(36).substring(2, 8).toUpperCase()}`; // Random SKU

    products.push({
        id: i,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 950) + 50,
        categoryId: category.id,
        sku: randomSku,
        rating: Number(randomRating),
        description: `This is a description for Product ${i} from ${category.name}.`,
        image: `https://via.placeholder.com/300x300?text=Product+${i}`
    });
}

const db = { categories, products };

fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
console.log('✅ db.json created with 100 products, 18 categories, ratings and SKUs!');
