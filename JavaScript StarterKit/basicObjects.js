// Object methods example
console.log("\nObject Methods Example:");

// Create user object with methods
let user = {
    username: "nelly_hendriiix",
    email: "the_nelly_hendriiix@example.com",
    password: "bigpassword123",
    lastLogin: new Date("2023-12-05"),

    // Method to update email
    updateEmail: function (newEmail) {
        if (newEmail.includes("@") && newEmail.includes(".")) {
            this.email = newEmail;
            console.log("Email updated to:", this.email);
            return true;
        } else {
            console.log("Invalid email format. Email not updated.");
            return false;
        }
    }
    };

    console.log("Intitial email:", user.email);
    user.updateEmail("nelly.hendriiix@example.com");
    console.log("After update:", user.email);

// Practice with object methods
let book = {
    title: "The Coldest Winter Ever",
    author: "Sister Souljah",
    publicationYear: 1999,
    isAvailable: true,
}

console.log("\nBook Information:");
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Publication Year:", book.publicationYear);
console.log("Available:", book.isAvailable ? "Yes" : "No");