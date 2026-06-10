// Create a product catalog using an array of objects
let productCatalog = [
    {
        id: 101,
        name: "Wireless Headphones",
        price: 79.99,
        category: "Electronics",
        inStock: true
    },
    {
        id: 102,
        name: "Running Shoes",
        price: 59.95,
        category: "Footwear",
        inStock: false
    },
    {
        id: 103,
        name: "Coffee Mug",
        price: 12.50,
        category: "Kitchen",
        inStock: true
    },
    {
        id: 104,
        name: "Lawn Chair",
        price: 39.95,
        category: "Outdoor Furniture",
        inStock: true
    }
];
// Display all product names
console.log("Products in catalog:");
for (let i = 0; i < productCatalog.length; i++) {
    console.log(productCatalog[i].name + " - $" + productCatalog[i].price);
}
// Find products in a specific category
console.log("\nElectronics products:");
for (let i = 0; i < productCatalog.length; i++) {
    if (productCatalog[i].category === "Outdoor Furniture") {
        console.log(productCatalog[i].name);
    }
}

// Nested Objects:
// Create a company structure using nested objects
let company = {
    name: "Tech Innovations Inc",
    founded: 2010,
    departments: {
        engineering: {
            head: "Alex Wong",
            employees: 45,
            teams: ["Frontend", "Backend", "QA"]
        },
        marketing: {
            head: "Sarah Chen",
            employees: 18,
            teams: ["Digital", "Events", "Content"]
        },
        hr: {
            head: "Taylor Johnson",
            employees: 12,
            teams: ["Recruiting", "Benefits"]
        },
        finance: {
            head: "Jinel Abraham",
            employees: 19,
            teams: ["Payroll", "Accounts"]
        }
    },
    location: {
        city: "San Francisco",
        state: "CA",
        address: "123 Tech Blvd"
    }
};
// Access nested data
console.log("Company: " + company.name);
console.log("Engineering Head: " + company.departments.engineering.head);
console.log("Finance Teams: " + company.departments.finance.teams);
console.log("Location: " + company.location.city + ", " + company.location.state);

// Shopping Cart Example:
// Product catalog
let products = [
    {id: 1, name: "Laptop", price: 999.99, category: "Electronics"},
    {id: 2, name: "T-shirt", price: 19.99, category: "Clothing"},
    {id: 3, name: "Coffee Maker", price: 89.95, category: "Kitchen"}
];
// Shopping cart
let cart = {
    userId: "user123",
    items: [],
    created: new Date(),
    status: "active"
};
// Add item to cart
function addToCart(productId, quantity = 1) {
    // Find product
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }
    
    if (!product) {
        return "Product not found";
    }
    
    // Check if already in cart
    for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].productId === productId) {
            cart.items[i].quantity += quantity;
            return "Updated quantity";
        }
    }
    
    // Add new item
    cart.items.push({
        productId: productId,
        name: product.name,
        price: product.price,
        quantity: quantity
    });
    
    return "Added to cart";
}
// Remove item from cart
function removeFromCart(productId) {
    for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].productId === productId) {
            cart.items.splice(i, 1);
            return "Removed from cart";
        }
    }
    return "Item not in cart";
}
// Calculate cart total
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.items.length; i++) {
        total += cart.items[i].price * cart.items[i].quantity;
    }
    return total;
}
// Test operations
console.log("Adding laptop...");
console.log(addToCart(1, 1));
console.log("Adding two t-shirts...");
console.log(addToCart(2, 2));
console.log("Current cart:");
console.log(cart.items);
console.log("Total: $" + calculateTotal());
console.log("Removing t-shirt...");
console.log(removeFromCart(2));
console.log("Final cart:");
console.log(cart.items);
console.log("Final total: $" + calculateTotal());

// Data Transformation Example:
function calculateStudentAverages(students) {
    let report = [];
    
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let grades = student.grades;
        
        // Calculate average
        let total = grades.math + grades.science + grades.english;
        let average = total / 3;
        
        // Find highest grade and subject
        let highestGrade = Math.max(grades.math, grades.science, grades.english);
        let highestSubject = "";
        if (grades.math === highestGrade) highestSubject = "math";
        if (grades.science === highestGrade) highestSubject = "science";
        if (grades.english === highestGrade) highestSubject = "english";
        
        // Add to report
        report.push({
            name: student.name,
            id: student.id,
            average: average.toFixed(1),
            highestGrade: highestGrade,
            highestSubject: highestSubject
        });
    }
    
    return report;
}
let studentReport = calculateStudentAverages(studentRecords);
console.log("Student Performance Report:");
for (let i = 0; i < studentReport.length; i++) {
    let student = studentReport[i];
    console.log(student.name + " (ID: " + student.id + ")");
    console.log("  Average Grade: " + student.average);
    console.log("  Highest Grade: " + student.highestGrade + " in " + student.highestSubject);
    console.log("-----------------");
}

// From dialoge with AI Coach:
let hipHopGenre = {
    name: "Hip Hop",
    nameOfPlaylist: "Nelly's Hip Hop Hits",
    artists: [{
        name: "Missy",
        songs: ["Sock It 2 Me", "The Rain (Supa Dupa Fly)"],
        album: "Supa Dupa Fly",
        releaseYear: 1997
    },
    {
        name: "Jay-Z",
        songs: ["PSA", "Dirt off Your Shoulder"],
        album: "The Black Album",
        releaseYear: 2003   
    },
    ]

}

