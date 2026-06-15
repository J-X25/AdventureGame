function removeSong(playlist, songToRemove) {
    // Find where the song lives
    let songIndex = playlist.indexOf(songToRemove);
    // Let's return it to see what number JavaScript gives us
    return songIndex;
    // Safety check; if the song isn't there do nothing
    if (songIndex === -1) {
        return playlist;
    }
    playlist.splice(songIndex, 1);
    return playlist;
} 

let myQueue = ["Ruff Ryders Anthem", "In Da Club", "Nuthin' But A G Thang"];

console.log(removeSong(myQueue, "In Da Club"));
console.log(removeSong(myQueue, "Missing Song"));

// May 29th Practice: Object Methods
function generateBadge(userObject) {
    let first = userObject.firstName;
    let last = userObject.lastName;
    let currentJob = userObject.role;

    return "BADGE: " + first + " " + last + " - " + currentJob;
}

    let employee1 = {
        firstName: "Nelly",
        lastName: "Hendriiix",
        role: "Software Engineer",

    };

    let employee2 = {
        firstName: "King",
        lastName: "Grip",
        role: "Scrummaster",
    };
    
console.log(generateBadge(employee1));
console.log(generateBadge(employee2));

// From Coursera Practice:
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isAvailable: true,
    pages: 180,
    genre: "Fiction",
    rating: 4.5
};
console.log("=== Book Information ===");
console.log("Title: " + book.title);
console.log("Author: " + book.author);
console.log("Year: " + book.year);
console.log("Genre: " + book.genre);
console.log("Pages: " + book.pages);
console.log("Rating: " + book.rating + "/5");
console.log("Available: " + book.isAvailable);

// June 2nd Practice: Object Methods
let car = {
    color: "red",

    honk: function() {
        return "Beep!";
    }
}

// Let's test our car's honk method
console.log(car.honk());

// June 2nd Practice 2: Object Methods
let pet = {
    name: "Rocky",
    type: "dog",

    speak: function() {
        return "Woof! My name is Rocky!";

    }

}

console.log(pet.speak());

// June 2nd Practice 3: Object Methods
let phone = {
    owner: "Nelly",
    pinCode: 1234,

    unlock : function(enteredPin) {
        if (enteredPin === this.pinCode) {
            return "Access Granted, welcome Nelly!";
        } else {
            return "Incorrect PIN. Access Denied.";
        }
    }
}
    console.log(phone.unlock(9999));
    console.log(phone.unlock(1234));

    // May 30th Practice 4: Object Methods
    let tracker = {
        userName: "Nelly",
        totalSteps: 0,

        logWalk: function(stepsWalked) {
            this.totalSteps += stepsWalked;

            return `Success! ${this.userName} has walked a total of ${this.totalSteps} steps today.`;
        }
    };

    console.log(tracker.logWalk(6500));
    console.log(tracker.logWalk(3600));

    // June 3rd Practice: Arrays, Loops, and Basic Logic:
    function  removeNegatives(numbersArray) {
        cleanedArray = [];
        for ( let num of numbersArray) {
            if (num >= 0) {
                cleanedArray.push(num);
                
            }
        }
        return cleanedArray;
    }

    let weeklyBalances = [150, -20, 99, -10, 98];
    let results = removeNegatives(weeklyBalances);
    console.log(results);

    // June 4th Practice: Arrays, Loops, and Basic Logic:
    function applyCurvedGrades(gradesArray) {
        let curvedGrades = [];

        for (let score of gradesArray) {
            if (score < 60) {
                curvedGrades.push(score + 5);
            } else {
                curvedGrades.push(score);
            }
            }
            return curvedGrades;
        }
        
    let classroomScores = [55, 70, 45, 90, 82];
    let finalReportCard = applyCurvedGrades(classroomScores);
    console.log("Original Grades: ", classroomScores);
    console.log("Curved Grades: ", finalReportCard);

    // June 5th Practice: Arrays, Loops, and Basic Logic:
    function findItemIndex(inventoryArray, targetItem) {
       let  index = 0;
        for (let item of inventoryArray) {
            if (item === targetItem) {
                return index;
            } if (item.toLowerCase() === targetItem.toLowerCase()) {
                return index;
            }
            index++;
        }
        return "Item not found";
    }

    let pantry = ["apples", "bananas", "cereal", "donuts"];
    console.log(findItemIndex(pantry, "cereal"));
    console.log(findItemIndex(pantry, "milk"));

    // June 6th Practice: Arrays, Loops, and Basic Logic:
    function weaveArrays(arrayA, arrayB) {
        let wovenResult = [];

        for (let i =0; i < arrayA.length; i++) {
            wovenResult.push(arrayA[i]);
            wovenResult.push(arrayB[i]);
        }
        return wovenResult;
    }

    let users = ["Nelly", "Grip", "Caveman the Juggernaut"];
    let ids = [101, 102, 103];

    let dynamicTimeline = weaveArrays(users, ids);
    console.log("Woven Results:", dynamicTimeline);

    // June 7th Practice: Arrays, Loops, and Basic Logic:
    function limitListLength(originalArray, maxLength) {
        let trucatedResult = [];

        for (let i = 0; i < originalArray.length && i < maxLength; i++) {
            trucatedResult.push(originalArray[i]);
        }
        if (originalArray.length > maxLength) {
            trucatedResult.push("...");
        }
        return trucatedResult;
    }
    
    console.log(limitListLength([1, 2, 3, 4, 5], 3));

    // June 8th Practice: Arrays, Loops, and Basic Logic:
    function findAndReplace(dataArray, targetItem, newItem) {
        let modifiedArray = [];

        for (let item of dataArray) {
            if (item === targetItem) {
                modifiedArray.push(newItem);
            } else {
                modifiedArray.push(item);
            }
        }
        return modifiedArray;
    }

    let messageFeed = findAndReplace(["hello", "badWord", "good morning", "badWord", "awesome"]);
    let moderatedFeed = findAndReplace(messageFeed, "badWord", "[REDACTED]");

    console.log("Cleaned Feed:", moderatedFeed);

    // June 9th Practice: Arrays, Loops, and Basic Logic:
    function checkListIntegrity(mixedArray, expectedType) {
        for (let element of mixedArray) {
            if (typeof element !== expectedType) {
                return `Security Breach: Found a $ {typeof element} instead of a ${expectedType}`;
            }
        }
        return true;
    }
let scoreList = [95, 87, 100, 42, 88];
let registrationList = ["Nelly", "Grip", "Caveman the Juggernaut", 42];

console.log(checkListIntegrity(scoreList, "number"));
console.log(checkListIntegrity(registrationList, "string"));

// June 10th Practice: Complex Data Structures:
function calculateInventoryValue(productsArray) {
   let totalValue = 0;
    for (let product of productsArray) {
        let itemTotal = product.price * product.quantity;
        totalValue += itemTotal;
        if (product.quantity === 0) {
        console.log("Warning: " + product.name + " is out of stock!");
    }
}
    return totalValue;

}

let storeInventory = [
    { name: "Sneakers", price: 100, quantity: 4},
    { name: "Hoodie", price: 50, quantity: 0},
    { name: "Socks", price: 10, quantity: 5},
];

let grandTotal = calculateInventoryValue(storeInventory);
console.log("Total Shop Value: $ ", grandTotal);

// June 11th Practice: Complex Data Structures

function getHighPerformanceCars(carArray, minHorsePower) {
    let filteredFleet = [];
    for (let car of carArray) {
        if (car.horsepower >= minHorsePower) {
            filteredFleet.push(car);
        }
    }

    return filteredFleet;
     
}
let myGarage = [
    {model: "Civic Type R", horsepower: 315, trackReady: true },
    {model: "Corvette Z06", horsepower: 670, trackReady: true },
    {model: "Miata", horsepower: 181, trackReady: false },
    {model: "GT-R Nismo", horsepower: 600, trackReady: true },
];
let trackDaySelection = getHighPerformanceCars(myGarage, 400);
console.log("Track Ready Selection:", trackDaySelection);

// June 12th Practice: Array Mapping with Conditions
function generateFleetReport(carFleet) {

    let fleetReport = [];
    for(let car of carFleet) {
        let tier;

        if (car.horsepower >= 500) {
         tier = "Hypercar";

        } else {
         tier = "Sport";
        }
        let updatedCar = {
            model: car.model,
            class: tier 
        };
        fleetReport.push(updatedCar);
    }
    return fleetReport;
}
 
let localTrackFleet = [
    {model: "Porshe 911 GT3", horsepower: 502},
    {model: "Supra MK5", horsepower: 382},
    {model: "Ferrari SF90", horsepower: 986}
];
let finalReport = generateFleetReport(localTrackFleet);
console.log(finalReport);

// June 13th Practice: Freelance Invoice Calculator
function calculateProjectQuote(baseRate, pageCount, ratePerPage, hasCustomJS) {
    let totalEstimate = baseRate;

    totalEstimate += (pageCount * ratePerPage);
    if (hasCustomJS === true) {
        totalEstimate += 250;
    }
    return totalEstimate;
}
// Client 1: Local diner needs a basic 4-page HTML/CSS site. No fancy JS.
let dinerQuote = calculateProjectQuote(300, 4, 100, false);
console.log("Diner Estimate: $", dinerQuote);

// Client 2: An indie artist wants a sleek 3 page site WITH a custom JS audio player.
let artistQuote = calculateProjectQuote(300, 3, 100, true);
console.log("Artist Estimate: $", artistQuote);

// June 13th Practice: The Dynamic Portfolio Layout(Array Layout Mapping)
function generateGalleryLayout(imageFilesArray) {
    let htmlTagsCollection = [];
    for (let filename of imageFilesArray) {
        let imgTag = `<img src="images/${filename}" class="poertfolio-thumb" />`;
        htmlTagsCollection.push(imgTag);
    }
    return htmlTagsCollection;
}

let artistsUploads = ["neon-city.jpg", "retro-car.png", "sculpture.webp"];
let structureGrid = generateGalleryLayout(artistsUploads);
console.log(structureGrid);

// June 14th Practice: Working with basic arrays and elements
function formatEventList(eventsArray) {
    let cleanedEvents = [];
    for (let eventText of eventsArray) {
        let cleanedText = eventText.trim();
        
        if (eventText.length === 0) {
        cleanedEvents.push("TBD - EVENT DATE COMING SOON");
        } else {
            cleanedEvents.push(cleanedText.toUpperCase());
        }

    }
    return cleanedEvents;
}

let rawArtistSchedule = [
    "june 20 - downtown studio tour",
    "july 4 - independence day showcase",
    "august 12 - live pottery workshop",
    "",
];

let polishedSchedule = formatEventList(rawArtistSchedule);
console.log(polishedSchedule);




