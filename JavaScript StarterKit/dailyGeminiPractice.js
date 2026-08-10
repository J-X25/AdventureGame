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

// June 15th Practice: The Form Input Validator(Combining Strings and Booleans)
function validateRequiredInput(userInputText) {
    let cleanedInput = userInputText.trim();
    if (cleanedInput.length <= 5) {
        return false;
    } else {
        return true;
    }
}
// Scenario A: User accurately types their name
let testName ="NellyBuckitz";
console.log("Is Name Valid?", validateRequiredInput(testName));

//Scenario B: User completely skips the field
let blankInput ="";
console.log("Is Blank Valid?", validateRequiredInput(blankInput));

// Scenario C: User tries to cheat the system by hitting the spacebar twice
let sneakySpaces ="  ";
console.log("Are Spaces Valid?", validateRequiredInput(sneakySpaces));

// June 15th Practice: The Form Submit Gatekeeper(Combining Logic Rules)
function isValidUsername(usernameText) {
    let cleanUsername = usernameText.trim();
    if (cleanUsername.length > 4 && cleanUsername.length < 15) {

        return ("Success: Username is available!");
    } 
    else if (cleanUsername.length > 15) {

        return ("Error: Username must be less than 15 characters.");
    }
    else if (cleanUsername.length < 4) {

        return ("Error: Username must be more than 4 characters.");
    }


        
    

}

// Scenario A: Perfect username length
console.log("Is 'NellyB' valid?", isValidUsername("NellyB"));

// Scenario B: Too short
console.log("Is 'Jay' valid?", isValidUsername("Jay"));

// Scenario C: Too long
console.log("Is 'SuperMegaProducerJinel' valid?", isValidUsername("SuperMegaProducerJinel"));

// Scenario D: The sneaky cheat(Spaces hiding a short name)
console.log("Is '  V4  ' valid?", isValidUsername("  V4  "));

//June 17th Practice: The Playlist Duration Tracker(Array Loops and Accumulation)
function calculatePlaylistDuration(trackDurations) {
    let totalSeconds = 0; 
    for (let track of trackDurations) {
        totalSeconds += track;

    }
    return Math.round(totalSeconds / 60);
}

// Scenario A: A 3 track promotional single release
let promoSingle = [180, 215, 165];
console.log("Total Promo Seconds:", calculatePlaylistDuration(promoSingle));

// Scenario B: An empty playlist submission
let emptyPlaylist = [];
console.log("Total Empty Seconds:", calculatePlaylistDuration(emptyPlaylist));

// June 18th Practice: The Interview Score Evaluator(Array Filtering and Thresholds)
function getPassingScores(scoreList, passingGrade) {
    let acceptedCandidates =[];
    for (let score of scoreList) {
        if (score >= passingGrade) {
            acceptedCandidates.push(score)
        }
   
    }
    return acceptedCandidates;
}

let panelEvaluation = [85, 62, 95, 74, 90];
let baseLineScore = 80;
console.log("Passing Candidates:", getPassingScores(panelEvaluation, baseLineScore));

// June 19th Practice: The Social Media Tag Generator(Array Transformation)
function generateHashtags(keywordList) {
    let formattedTags = [];
    for(let word of keywordList) {
        let newTag = "#" + word;
        formattedTags.push(newTag);

    }
    return formattedTags;
}

let marketingWords = ["music", "producer", "coding", "tracks"];
console.log("Finished Tags", generateHashtags(marketingWords));

// June 19th Practice: Athe Asset Audit Flag(Array Threshold Extraction)
function getHighValueAlerts(scannedPrices, highRiskThreshold) {
    let flaggedAudits = [];
    for (let price of scannedPrices) {
        if (price >= highRiskThreshold) {
            flaggedAudits.push(price);
        }
    }
    return flaggedAudits;
}

let currentAudit = [15, 450, 89, 1200, 45, 600];
let premiumLimit = 400;

console.log("High Value Flags", getHighValueAlerts(currentAudit, premiumLimit));

// June 20th Practice: The Video Game Inventory Stack(Array Element Verification)
function checkPlayerInventory(inventoryBag, requiredItem) {
  let itemFound = false;
    for (let item of inventoryBag) {
        if (item === requiredItem) {
             itemFound = true;
        }
    } 
    if (itemFound === true) { 
    return "Access Granted: Item present.";
    
    } else {
    return "Access Denied: Missing required item.";
    }

}

let currentBag = ["Potion", "Sword", "Dragon Shield", "Bread"];

// Scenario A: Player has the correct gear
console.log(checkPlayerInventory(currentBag, "Dragon Shield"));

// Scenario B: Player tries to pass with a key they don't have
console.log(checkPlayerInventory(currentBag, "Golden Key"));

// June 21st Practice: The Business Tier Router(Array Indexing and Range Mapping)
function determinePricingTier(tierThresholds, currentUsers) {
    for (let i = 0; i < tierThresholds.length; i++) {
        if (currentUsers <= (tierThresholds[i])) {
            return i;
          }
        
    } 

    return "Enterprise Tier";
 }

 let subscriptionLimits = [100, 500, 1000];

 // Scenario A: A small startup with 45 users
 console.log("Tier Index:", determinePricingTier(subscriptionLimits, 45));

 // Scenario B: Mid-sized agency with 650 users
 console.log("Tier Index", determinePricingTier(subscriptionLimits, 650));

 // Scenario C: Massive corporationwith 2500 users
 console.log("Tier Index:", determinePricingTier(subscriptionLimits, 2500));

 // June 21st Practice: The Event Listener Connector(Bridging Logic to the Browser)
 function handleUserInput(inputString) {
    let cleanNumber = Number(inputString);
    let businessLimits = [100, 500, 1000];

    let assignedTier = determinePricingTier(businessLimits, cleanNumber);

    return "System Routing: Moving user to Tier " + assignedTier;
 }
let simulatedWebFormInput = "650";
console.log(handleUserInput(simulatedWebFormInput));

// June 22nd Practice: The Theme Toggler(Working with State and Default Fallbacks)
function activateSiteTheme(supportedThemes, requestedTheme) {
    let isThemeValid = false;
    for (let theme of supportedThemes) {
        if (theme === requestedTheme) {
             isThemeValid = true;
        } 
    }
            if (isThemeValid === true) {
                return "Setting applied: " + requestedTheme;
        } else {
                return "Setting missing. Default applied: light";
    

        }
    
}

let activePalette = ["light", "dark", "sepia", "ocean"];

// Scenario A: User clicks "dark" mode button
console.log(activateSiteTheme(activePalette, "dark"));

// Scenario B: User's profile has an unmapped or outdated style name
console.log(activateSiteTheme(activePalette, "neon-retro"));

// June 23rd Practice: The Multi-Stage Security Alert(Complex Conditional Filtering(See how the engine sweeps an incident sheet looking for items that are at least $500, but under the $5000 system limit))
function getHighRiskAlerts(incidentValues, minRiskCost) {
    let activeInvestigationList = [];
    for (let cost of incidentValues) {
        if (cost >= minRiskCost && cost < 5000) {
            activeInvestigationList.push(cost);
        }
    }
    return activeInvestigationList;
}

let logIncidentCosts = [150, 600, 1200, 45, 7500, 3200];
let highRiskFloor = 500;

console.log("Cases to Audit:", getHighRiskAlerts(logIncidentCosts, highRiskFloor));

// June 23rd Practice: The Audio Device Analyzer(Array Mapping and Boundary Clamping)
function normalizeAudioLevels(signalList, maxSafetyCeiling) {
    let safeSignals = [];
    for (let level of signalList) {
        if (level > maxSafetyCeiling) {
            safeSignals.push(maxSafetyCeiling);
    } else {
        safeSignals.push(level);
        }
    
    }
    return safeSignals;
}

let rawMicFeed = [30, 75, 120, 95, 105, 40];
let safetyCap = 100;

console.log("Mastered Audio output:", normalizeAudioLevels(rawMicFeed, safetyCap));

// June 24th Practice: The Audio Output Stream(Array Merging and Interleaving)
function mergeStereoStreams(leftChannel, rightChannel) {
    let masterOutputStream = [];
    for (let i =0; i < leftChannel.length; i++) {
        masterOutputStream.push(leftChannel[i]);
        masterOutputStream.push(rightChannel[i]);
    }
    return masterOutputStream;
}

let leftBuffer = [12, 45, 88];
let rightBuffer = [18, 50, 92];

console.log("Stereo Feed", mergeStereoStreams(leftBuffer, rightBuffer));

// June 25th Practice: The Audio Filter Log(Array Filtering & Value Inversion)
function cleanAndInvertAudio(rawSignalArray) {
    let processedSignals = [];
    for (let amplitude of rawSignalArray) {
        if (amplitude !== 0) {
            let invertedValue = amplitude * -1;
            processedSignals.push(invertedValue);
        }
    }
    return processedSignals;
}

let rawWaveData = [5, 0, -22, 14, 0, 0, -8];

console.log("Inverted Active Signals", cleanAndInvertAudio(rawWaveData));

// June 26th Practice: The Responsive Layout(Array Multi-Boundary Mapping)
function getResponsiveLayoutMode(breakpointWidths, currentScreenWidth) {
    for (let i = 0; i < breakpointWidths.length; i++) {
        if (currentScreenWidth <= breakpointWidths[i]) {
            if (i === 0) return "Mobile View";
            if (i === 1) return "Tablet View";
            if (i === 2) return "Laptop View";
        }
    }
    
    return "Desktop View";
    
}

let standardBreakpoints = [480, 768, 1024];

// Scenario A: A user opens the app on an iPhone (375px wide)
console.log(getResponsiveLayoutMode(standardBreakpoints, 375));

// Scenario B: A user opens the app on an iPad (768px wide)
console.log(getResponsiveLayoutMode(standardBreakpoints, 768));

// Scenario C: A user opens the app on a 4K monitor (2560px wide)
console.log(getResponsiveLayoutMode(standardBreakpoints, 2560));

// June 27th Practice: The Video Frame Rate Smoother(Array Interpolation & Averaging)
function smoothFrameDrop(fpsTimeLine, minAcceptableFPS) {
    let smoothedTimeLine = [];
    for (let i = 0; i < fpsTimeLine.length; i++) {
        if (i > 0 && i < fpsTimeLine.length - 1 && fpsTimeLine[i] < minAcceptableFPS) {
            let smoothedValue = (fpsTimeLine[i - 1] + fpsTimeLine[i + 1]) / 2;
            smoothedTimeLine.push(smoothedValue);
            
        } else {
            smoothedTimeLine.push(fpsTimeLine[i]);
        }
    }
    return smoothedTimeLine;
}

let videoRenderLog = [30, 59, 14, 60, 58];
let performanceFloor = 30;

console.log("Smoothed Output Time:", smoothFrameDrop(videoRenderLog, performanceFloor));

// June 28th Practice: The Game Loop Vector(Array Scalar Multiplication)
function scaleMovementVector(baseVector, multipler) {
    let scaledVector = [];
    for (let coordinate of baseVector) {
       let boostedSpeed = coordinate * multipler;
        scaledVector.push(boostedSpeed);
    }
    return scaledVector;
}

let arrowFlightPath = [15, -8];
let speedPadModifier = 3;

console.log("Boosted Vector Output", scaleMovementVector(arrowFlightPath, speedPadModifier));

// June 29th Practice(Day 50!): The Weekly Web Trend Analyzer(Array Ooptimization & Percent Shifts)
function analyzeSlowLoadSpeeds(weeklyLoadTimes, speedThreshold) {
    let totalSlowTime = 0;
    let slowPageCount = 0;
        for (let loadTime of weeklyLoadTimes) {
            if (loadTime > speedThreshold) {
                totalSlowTime += loadTime;
                slowPageCount++;

            }
          
            }
            if (slowPageCount > 0) {
                let average = totalSlowTime / slowPageCount;
                return "Average Slow Load Time: " + average + "ms";
            } else {
                return "Optimization Perfect: All pages fast!"
            }
                
         }

         let clientSiteLogs = [150, 480, 90, 550, 200, 320, 110];
         let maxTargetSpeed = 300;

         console.log(analyzeSlowLoadSpeeds(clientSiteLogs, maxTargetSpeed));

// June 30th Practice (Day 51): The Layout Conversion Tracker(Data Range Constraints & Percentage Mapping)
function clampInterfacePercentage(rawCalculation) {
    if (rawCalculation < 0) {
        return 0;
    }
    else if (rawCalculation > 100) {
        return 100;
    }
    else {
        return rawCalculation;
    }
}

// Test Case A: User clicks a broken toggle that generates an underflow value
console.log("Sanitized Progress:", clampInterfacePercentage(-25));

// Test Case B: User finishes all tasks and triggers a bonus calculation spike 
console.log("Sanitized Progress:", clampInterfacePercentage(142));

// Test Case C: A standard normal user interaction
console.log("Sanitized Progress:", clampInterfacePercentage(68));

// June 30th Practice (Day 52): The UX Layout Shift Detector(Array Flagging & Boolean Logic)
function hasSeveralLayoutShift(shiftScores, dangerThreshold) {
    for (let score of shiftScores) {
        if (score > dangerThreshold) {
            return true;
        }
    }
    return false;
}

let stableSession = [0.01, 0.02, 0.05, 0.03];
let unstableSession = [0.02, 0.04, 0.35, 0.01];
let criticalLimit = 0.10;

console.log("Stable Audit:", hasSeveralLayoutShift(stableSession, criticalLimit));
console.log("Unstable Audit:", hasSeveralLayoutShift(unstableSession, criticalLimit));

// July 1st Practice (Day 53): The Acoustic Seal Leak Finder(Finding Array Minimums)
function findAcousticLeak(attenuationLog, safetyFloor) {
    let lowestIsolation = attenuationLog[0];
    for (let dbValue of attenuationLog) {
        if (dbValue < lowestIsolation) {
            lowestIsolation = dbValue;
        } 
         if (lowestIsolation < safetyFloor) {

        return "Leak Detected! Weakest point: " + lowestIsolation + "dB";
        } else {
        return "Acoustic Seal Secure: Pass!";    
        }

    }

}

let prototypeA = [25, 22, 11, 30, 28];
let prototypeB = [22, 26, 18, 24, 20];
let qcFloor = 15;

console.log("Prototype A Audit:", findAcousticLeak(prototypeA, qcFloor));

console.log("Prototype B Audit:", findAcousticLeak(prototypeB, qcFloor));

//July 2nd Practice (Day 54): The Asset Protection Audit Scanner(Array Filtering and Value Matches)
function scanAuditFlags(dailyFlags, targetRiskCode) {
    let isolatedIncidents = [];
    for (let eventCode of dailyFlags) {
        if (eventCode === targetRiskCode) {
            isolatedIncidents.push(eventCode);
        }
         if (isolatedIncidents.length > 0) {
            return "Audit Alert: Found " + isolatedIncidents.length + " high-risk exceptions.";
        } else {
            return "Audit Clean: Zero risk flags detected.";
        }
    }
}

let registerLogA = [12, 99, 10, 14, 99, 45, 99];
let registerLogB = [10, 12, 14, 11, 15, 20, 12];
let riskThreshold = 99;

console.log("Register A Report:", scanAuditFlags(registerLogA, riskThreshold));
console.log("Register B Report:", scanAuditFlags(registerLogB, riskThreshold));

// July 3rd Practice (Day 55) : The Hip Hop Track Duration Mixer(Array Accumulation and Time Conversion)
function calculateTrackRuntime(segmentSeconds) {
    let totalSeconds = 0;
    for (let seconds of segmentSeconds) {
        totalSeconds += seconds;
    let minutes = Math.floor(totalSeconds / 60);
    let remainingSeconds = totalSeconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    return "Total Runtime: " + minutes + ":" + remainingSeconds;
    
    }
   
}

let trackArrangement = [45, 120, 95, 14]; // Intro, Verse 1, Verse 2, Outro
console.log(calculateTrackRuntime(trackArrangement));

let shortRadioEdit = [60, 120, 5]; // Triggers the single digit padding check
console.log(calculateTrackRuntime(shortRadioEdit));

// July 4th Practice (Day 56): The Project File Type Validator(Array Extensions & String Matching)
function validateUploadedFiles(fileNames, allowedExtension) {
    let rejectedCount = 0;
        for (let fileName of fileNames) {
            if (!fileName.endsWith(allowedExtension)) {
                rejectedCount++;
            }
        }
            if (rejectedCount > 0) {
                return "Upload Blocked: " + rejectedCount + " invalid files detected.";
            } else {
                return "All files verified. Upload successful!";
            }
}

let clientGraphicsFolder = ["logo.png", "hero.-bg.png", "icon.png"];
let mixedAssetsFolder = ["avatar.png", "track.mp3", "promo.mov", "graphic.png"];
let targetFormat = ".png";

console.log("Graphics Batch:", validateUploadedFiles(clientGraphicsFolder,targetFormat));
console.log("Mixed Batch:", validateUploadedFiles(mixedAssetsFolder, targetFormat));

// July 5th Practice (Day 57): The Dynamic Portfolio Inventory Filter(Array reversal & Multi-Value Matching)
function preparePortfolioGrid(assetCollection, targetTag) {
    let matchedAssets =[];
    for (let asset of assetCollection) {
        if (asset.startsWith(targetTag)) {
            matchedAssets.push(asset);
        }
    }
    matchedAssets.reverse();
        return matchedAssets;
    }

    let mediaFiles = [
        "featured:track1.mp3",
        "standard:footer.jpg",
        "featured:promoVideo.mp4",
        "standard:sidebar.png",
        "featured:albumArt.png"
    ];
    let activeFilter = "featured";

    console.log("Render Queue:", preparePortfolioGrid(mediaFiles, activeFilter));

    // July 6th Practice (Day 58): The Store Foot-Traffic Tracker(Array Slicing & Peak Interval Analytics)
    function analyzePeakTraffic(hourlyTraffic, startIndex, endIndex, targetPeakVolume) {
        let trafficWindow = hourlyTraffic.slice(startIndex, endIndex);
        let windowTotal = 0;
        for (let count of trafficWindow) {
            windowTotal += count;
        }
        if (windowTotal >= targetPeakVolume) {
            return "High Volume Alert: " + windowTotal + " entries recorded during this shift.";
        } else {
            return "Normal Operations: Shift total is " + windowTotal + ".";
        }
    }

    // Full 8 hour log sequence
    let saturdayTraffic = [50, 75, 200, 350, 400, 110, 90, 60];

    // Foucus parameters: Starts at index2 (200), ends before inxex 5 (110)
    let startHour = 2;
    let endHour = 5;
    let alertThreshold = 800;

    console.log(analyzePeakTraffic(saturdayTraffic, startHour, endHour, alertThreshold));

// July 7th Practice(Day 59): The DOM Node List Parser(Array Mapping & Layout Extraction)
function parseLayoutPrices(domNodeStrings, maxBudget) {
    let cleanBudgetPrices = [];
    for (let rawPrice of domNodeStrings) {
    let cleanString = rawPrice.replace("$", "");
    let numericPrice = parseFloat(cleanString);
    if (numericPrice <= maxBudget) {
        cleanBudgetPrices.push(numericPrice);
    }

    }
    return cleanBudgetPrices;
}


let layoutElementData = ["$150.00", "$24.99", "$55.00", "$89.00", "$12.50"];
let clientLimit = 60;

console.log("Filtered Numbers:", parseLayoutPrices(layoutElementData, clientLimit));

// July 8th Practice(Day 60): The Dynamic UI Theme Toggler(Array Toggling & Cyclic Indexing)
function getNextLayoutTheme(themePalette, currentTheme) {
let currentIndex = themePalette.indexOf(currentTheme);
    if (currentTheme === -1) {
        return themePalette[0];

    }
let nextIndex = (currentIndex + 1) % themePalette.length;
return themePalette[nextIndex];

}

let limeBrandThemes = ["light", "dark", "lime-classic", "slate-neon"];

//Test A: Standard progression from index 0 to index 1
console.log("Next Look:", getNextLayoutTheme(limeBrandThemes, "light"));

//Test B: The wrap-around trigger from the final index back to 0
console.log("Next Look:", getNextLayoutTheme(limeBrandThemes, "slate-neon"));

//Test C: An invalid input fallback trigger
console.log("Next Look:", getNextLayoutTheme(limeBrandThemes, "retro-blue"));

// July 9th Practice(Day 61): The Sub-Grid Asset Spacer(Array Chunking & Layout Row Math)
function splitGridRows(masterAssets, rowSize) {
    let gridRows = [];
    for (let i = 0; i < masterAssets.length; i += rowSize) {
        let rowChunk = masterAssets.slice(i, i = rowSize);
        gridRows.push(rowChunk);
    }
    return gridRows;
}

let galleryFiles = ["hero.jpg", "thumb1.png", "banner.jpg", "logo.svg"];
let columnPerLayoutRow = 2;

console.log("Structured Grid rows:", splitGridRows(galleryFiles, columnPerLayoutRow));

// July 10th Practice(Day 62): The Brand Palette Contrast Checker(Array Mapping & Threshold Filtering)
function checkContrastCompliance(contrastScores, minimumPassingScore) {
    let failingScores = [];
    for (let score of contrastScores) {
        if (score < minimumPassingScore) {
            failingScores.push(score);
        }
    }
        if (failingScores.length > 0) {
            return "Accessibility Alert: Fix " + failingScores.length + " low-contrast layout elements(s).";
        } else {
            return "Design Fully Compliant: All elements pass accessibility specifications";
        }
}

let darkNeonPalette = [5.1, 4.8, 7.2, 8.5];
let draftLayout     = [4.6, 3.1, 6.0, 2.9, 5.0];
let wcagStandard = 4.5;

console.log("Dark Neon Theme:", checkContrastCompliance, (darkNeonPalette, wcagStandard));
console.log("Draft Layout:", checkContrastCompliance, (draftLayout, wcagStandard));

// July 10th Practice (Day 63): The Event Attendance Cap(Array Slicing & Boundary Reporting)
function manageEventCapacity(guestList, maxCapacity) {
    let approvedGuests = guestList.slice(0, maxCapacity);
    let waitListCount = guestList.length - maxCapacity;
        if (guestList.length > maxCapacity) {
            return "Event Full: Admitted " + approvedGuests.length + " guests. " + waitListCount + " turned away.";
        } else {
            return "Event Open: All " + guestList.length + " registered guests admitted.";
        }
}

let rsvpListA = ["Malik", "Chloe", "Tariq", "Elena", "Devon"];
let rsvpListB = ["Marcus", "Nia",];
let venueLimit = 3;

console.log("Roster A Audit:", manageEventCapacity(rsvpListA, venueLimit));
console.log("Roster B Audit:", manageEventCapacity(rsvpListB, venueLimit));

// July 11th Practice (Day 64): The Runway VIP Seat Allocator(Array Swapping & Index Re-ordering)
function swapRunwaySeats(seatingRow, index1, index2) {
    if (index1 < 0 || index1 >= seatingRow.length || index2 < 0 || index2 >= seatingRow.length) {
        return seatingRow;
    }
    let holdingSeat = seatingRow[index1];
    seatingRow[index1] = seatingRow[index2];
    seatingRow[index2] = holdingSeat;

    return seatingRow;
}

let currentFrontRow = ["Editor Alex", "Guest Blake", "Stylist Casey", "VIP Jordan"];
let targetSeat = 1;
let prioritySeat = 3;

console.log("Updated Seating:", swapRunwaySeats(currentFrontRow, targetSeat, prioritySeat));

// July 12th Practice (Day 65): The Media Asset Metadata Sanitizer(Array Cleaning & Whitespace Stripping)
function sanitizeAssetMetadata(rawMetadata) {
    let cleanMetadata = [];
    for (let textItem of rawMetadata) {
        let trimmedText = textItem.trim();
        if (trimmedText !== "") {
            cleanMetadata.push(trimmedText);
    }
}
    return cleanMetadata;
}

let rawInputList = ["  See It ", "  ", "Caribbean Flex    ", "  ", " Intro Beat  "];
console.log("Sanitized List:", sanitizeAssetMetadata(rawInputList));

// July 13th Practice (Day 66): The Fashion Show Model Lineup Selector(Array Inversion & Index Slicing)
function generateFinaleLineup(fullLineup, start, end) {
    let selectedSegment = fullLineup.slice(start, end);
    selectedSegment.reverse();
    return selectedSegment;
}
let runwayShowOrder = ["Elena", "Wyntress", "Chloe", "Tariq", "Will", "Dom"];
let segmentStart = 1;
let segmentEnd = 4;

console.log("Finale Segment:", generateFinaleLineup(runwayShowOrder, segmentStart, segmentEnd));

// July 14th Practice (Day 67): The Live Show Inventory Reconciliation(Array Intersection & Discrepancy Auditing)
function reconcileInventory(expectedManifest, physicalCount) {
    let missingItems = [];
    for (let barcode of expectedManifest) {
        if (!physicalCount.includes(barcode)) {

        }
    }
    if (missingItems.length > 0) {
        return "Audit Alert: " + missingItems.length + " item(s) unaccounted for. Missing: " + missingItems.join(", ");
    } else {
        return "Reconciliation Clean: Physical count matches manifest perfectly!";
    }
}

let expectedPremiumRack = ["JACKET-01", "HOODIE-02", "HAT-03", "DENIM-04"];
let actualFloorScan = ["JACKET-01", "HAT-03"];

let cleanBinExpected = ["SHIRT-10", "SHIRT-11"];
let cleanBinActual = ["SHIRT-10", "SHIRT-11"];

console.log(reconcileInventory(expectedPremiumRack, actualFloorScan));
console.log(reconcileInventory(cleanBinExpected, cleanBinActual));

// July 15th Practice (Day 68): The Promo Tag Deduplicator(Array Deduplication & Filtering)
function getUniqueTags(rawTags) {
    let uniqueTags = [];
    for (let tag of rawTags) {
        if (!uniqueTags.includes(tag)) {
            uniqueTags.push(tag);
        }
    }
    return uniqueTags;
}

let rawProjectTags = ["hiphop", "fashion", "hiphop", "video", "fashion", "music"];
console.log("Clean Navigation Tags:", getUniqueTags(rawProjectTags));

// July 16th Practice (Day 69) The Audio Track Decibel Normalizer (Array Modification & Limit Clamping)
function clampTrackDecibels(decibelLevels, safetyCeiling) {
  let normalizedTrack = [];
  for (let dbLevel of decibelLevels) {
    if (dbLevel > safetyCeiling) {
        normalizedTrack.push(safetyCeiling);
    } else {
        normalizedTrack.push(dbLevel);
    }
  }
  return normalizedTrack;
}

let vocalTrackPeaks = [-10, -5, 1, -1, 3, -4, 0];
let absoluteCeiling = -2;

console.log("Limiter Output:", clampTrackDecibels(vocalTrackPeaks, absoluteCeiling));

// July 17th Practice (Day 70) The Asset Protection Surveillance Log(Array Rotation & Circular Buffers)
function updateSurveillanceLog(activeLog, newEvent, maxLogCapacity) {
    activeLog.push(newEvent);
    if (activeLog.length > maxLogCapacity) {
        activeLog.shift();
    }
    return activeLog;
}

let currentLog = ["back_door_trip", "vault_access"];
let limit = 3;

// Test Case A: Event added without hitting maximum limit
console.log("Log State 1:", updateSurveillanceLog(currentLog, "register_short", limit));
// Test Case B: Buffer is full! Adding a new event must force the oldest out
console.log("Log State 2:", updateSurveillanceLog(currentLog, "motion_dock_4", limit));

// July 17th Practice (Day 71): The Web Configurator Customizer(Array Mapping & String Interpolation)
function formatConfiguratorSelections(selections, brandPrefix) {
    let formattedOptions = [];
    for (let options of selections) {
        let labeledOption = `${brandPrefix} Custom:${options}`;
        formattedOptions.push(labeledOption);

    }
        return formattedOptions;
}
let customerSelections = ["Acid Wash Green", "Embroidery Logo", "Heavyweight Hood"];
let clientBrand = "LIME";

console.log("Invoice Package:", formatConfiguratorSelections(customerSelections, clientBrand));

// July 18th Practice (Day 72): The Media Asset Aspect-Ratio Validator(Array Mapping & Boundary Checks)
function filterLandscapeAssets(mediaRatios, minLandscapeRatio) {
    let approvedLandscapeRatios = [];
    for (let ratio of mediaRatios) {
        if (ratio >= minLandscapeRatio) {
            approvedLandscapeRatios.push(ratio);
        }
    }
    return approvedLandscapeRatios;
}

let clientUpoladRatios = [1.77, 0.56, 2.39, 0.75, 1.33];
let landscapeBaseline = 1.0;

console.log("Verified Assets for Grid:", filterLandscapeAssets(clientUpoladRatios, landscapeBaseline));

// July 19 Pactice (Day 73): The Live Audio Session Tracklist(Array Concatenation & Master Set Construction)
function compileMasterSetlist(warmupTracks, mainStems) {
    let masterSet = warmupTracks.concat(mainStems);
    if (masterSet.length >= 4) {
        return "Showtime Ready: Master set compiled with " + masterSet.length + " tracks total.";
    } else {
        return "Setlist Warning: Add more tracks. Current lineup only has " + masterSet.length + " tracks.";
    }
}

let myWarmup = ["Intro Ambient", "LIME Instrumental"];
let myMainVocal = ["See It", "Caribbean Flex"];
let shortSet = ["Solo Verse"];

console.log("Full Show Test:", compileMasterSetlist(myWarmup, myMainVocal));
console.log("Short Show Test:", compileMasterSetlist(shortSet, myMainVocal));

// July 20th Practice (Day 74): The Retail Asset Recovery Log(Array Splice & Incident Removal)
function resolveIncidentFile(activeCases, falseAlarmID) {
    let targetIndex = activeCases.indexOf(falseAlarmID);
    if (targetIndex !== -1) {
        activeCases.splice(targetIndex, 1);
    }
    return activeCases;
} 

let morningCases = ["Case-A8", "Case-B2", "Case-C9", "Case-D4"];
let mistakeCode = "Case-C9";

console.log("Updated Cases:", resolveIncidentFile(morningCases, mistakeCode));

console.log("Rogue Code Check:", resolveIncidentFile(morningCases, "Case-Z10"));

// July 21st Practice (Day 75): The UI Component Depth Indexer(Array Search & Index Inspection)
function getComponentDepth(layoutStack, targetComponent) {
    let layerDepth = layoutStack.indexOf(targetComponent);
    if (layerDepth !== -1) {
        return "Component Found: " + targetComponent + " is active at Layer Depth " + layerDepth + ".";
     } else {
        return "Render Notice: " + targetComponent + " is not present in the current layout stack.";
     }
}

let activeUIStack = ["BaseCanvas", "SleeveDesign", "ChestLogo", "ModalOverlay"];

console.log(getComponentDepth(activeUIStack, "ChestLogo"));
console.log(getComponentDepth(activeUIStack, "FooterNav"));

// July 22nd (Day 76): The Audio Stem Mute Toggle(Array Replacement & In-Place Mutation)
function toggleStemMute(activeStems, targetStem) {
    let stemIndex = activeStems.indexOf(targetStem);
    if (stemIndex !== -1) {
    let activeStems = [stemIndex] = 'Muted:  ${targetStem}';
    return "Channel Updated: " + targetStem + " has been muted.";
    } else {
        return "Mixer Error: " + targetStem + " was not found in current session.";
    }
}

let currentSessionStems = ["Lead Vocals", "808 Kick", "HiHats", "Guitar Lead"];

console.log(toggleStemMute(currentSessionStems, "808 Kick"));
console.log("Updated Mixer Stems:", currentSessionStems);
console.log(toggleStemMute(currentSessionStems, "Brass Horns"));

// July 23rd Practice (Day 77): The Retail Asset Priority Re-Order(Array Unshift & Queue Prepending)
function dispatchPriorityAlert(eventQueue, incomingAlert) {
    if (incomingAlert.includes("PRIORITY")) {
        eventQueue.unshift(incomingAlert);
        return "EMERGENCY DISPATCH: Priority alert prepended to position 0."
    } else {
        eventQueue.push();
        return "Standard Log: Alert appended to back of queue."
    }
}

let activeSecurityQueue =  ["cash_drawer_open", "stockroom_motion"];

// Test Case A: Standard Alert
console.log(dispatchPriorityAlert(activeSecurityQueue, "fitting_room_assistance"));

// Test Case B: Priority Alert
console.log(dispatchPriorityAlert(activeSecurityQueue, "PRIORITY: jewel_case_breach"));

console.log("Final Queue State:", activeSecurityQueue);

// July 24th Practice (Day 78): The Resposive Canvas Layout Scale(Array Math & Dimensions Normalization)
function scaleCanvasDimensions(rawDimensions, scaleFactor) {
    let scaledDimensions = [];
    for (let pixelVal of rawDimensions) {
        let newMeasurement = Math.round(pixelVal * scaleFactor);
        scaledDimensions.push(newMeasurement);
    }
    return scaledDimensions;
}

let originalCanvas = [1920, 1080, 1280, 720];
let mobileZoom = 0.33;

console.log("Scaled Canvas Dimensions", scaleCanvasDimensions(originalCanvas, mobileZoom));

// July 25th Practice (Day 79): The Setlist Runtime Accumulator(Array Accumulation & Boundary Summing)
function calculateTotalRuntime(trackDurations, targetLimit) {
    let totalSeconds = 0;
    for (let duration of trackDurations) {
         totalSeconds += duration;
    }
        if (totalSeconds <= targetLimit) {
            return "Set Approved: Total runtime is " + totalSeconds + " seconds (withing target limit).";
        } else {
        let overage = totalSeconds - targetLimit;
            return "Over Limit: Total runtime is " + totalSeconds + " seconds (exceeds target by " + (totalSeconds - targetLimit) + " seconds).";
        }
    
}

let mySetList = [100, 210, 165,];
let maxAllowedTime = 600;

console.log(calculateTotalRuntime(mySetList, maxAllowedTime));

let extendedSetList = [180, 210, 165, 240];
console.log(calculateTotalRuntime(extendedSetList, maxAllowedTime));
// July 26th Practice (Day 80): The E-Commerce Product Tag Filter(Array Filtering & Dynamic Creation)
function filterProductsByTag(productTags, targetCatagory) {
    let matchedProducts = [];
    for (let tag of productTags) {
        if (tag.includes(targetCatagory)) {
            matchedProducts.push(tag);
        }
    }
    return matchedProducts;
}

let inventoryTags = [
    "Apparel: Heavyweight Hoodie",
    "Accessory: Trucker Cap",
    "Apparel: Graphic Tee",
    "Footwear: Leather Boots",
    "Accessory: Silver Chain"
];

console.log("Apparel Filter:", filterProductsByTag(inventoryTags, "Apparel"));

console.log("Accessory Filter:", filterProductsByTag(inventoryTags, "Accessory"));

// July 26th Practice (Day 81): The Live Stream Frame Rate Drop Detector(Array Threshold Filtering & Ratio Analysis)
function analyzeStreamPerformance(fpsLogs, minimumFPS) {
    let lagSpikeCount = 0;
    for (let fpsValue of fpsLogs) {
        if (fpsValue < minimumFPS) {
            lagSpikeCount++;
        }
        
    }
    if (lagSpikeCount === 0) {
            return "Stream Pristine: 0 lag spkes detected across " + fpsLogs.length + " logged samples.";
        } else {
            return "Performance Alert: " + lagSpikeCount + " lag spike(s) detected below " + minimumFPS + " FPS.";
        }
}
let targetFrameFloor = 30;
let smoothStream = [60, 59, 60, 58, 60, 60];
console.log(analyzeStreamPerformance(smoothStream, targetFrameFloor));

let choppyStream = [60, 58, 22, 60, 15, 59, 60];
console.log(analyzeStreamPerformance(choppyStream, targetFrameFloor));

// July 27th Practice(Day 82): The Fashion Show Runway Queue Rotator(Array Shift & Push Rotation)
function rotateRunwayQueue(modelLineup) {
    if (modelLineup.length === 0) {
        return "Queue Empty: No models available to rotate.";
    }
        let leadModel = modelLineup.shift();
        modelLineup.push(leadModel);
        return "Rotation Complete: " + leadModel + " moved to the back. New lead on stage is " + modelLineup[0] + ".";
    
}
let currentLineup = ["Wyntress", "Will", "Dom", "Serena"];
console.log(rotateRunwayQueue(currentLineup));
console.log("Updated Lineup State:", currentLineup);

// July 28 Practice(Day83): The Audio Vocal Take Ranker(Array Min/Max & Range Calculation)
function analyzeVocalTakes(takeScores) {
    if (takeScores.length === 0) {
        return "Session Error: No vocal take scores logged.";
    }
        let highestScore = Math.max(...takeScores);
        let lowestScore = Math.min(...takeScores);
        let scoreVariance = highestScore - lowestScore;
        return "Session Summary: Peak Take is " + highestScore + ", Floor Take is " + lowestScore + " (Variance: " + scoreVariance + " pts).";
    
}

let studioSession1 = [82, 95, 88, 74, 91];
console.log(analyzeVocalTakes(studioSession1));

let emptySession = [];
console.log(analyzeVocalTakes(emptySession));

// July 29th Practice(Day 84): The Merchanct Inventory Variance Audit(Cross Array Difference Inspection)
function auditInventoryVariance(expectedItems, scannedItems) {
    let missingItems = [];
    for (let sku of expectedItems) {
        if (!scannedItems.includes(sku)) {
            missingItems.push(sku);
        }
    }
    if (missingItems.length === 0) {
        return "Audit Clean: All expected items physically accounted for.";
    } else {
        return "Variance Detected: " + missingItems.length + " items(s) missing: " + missingItems.join(", ") + ".";
    }
}

let manifest = ["JACKET-BLK-L", "TEE-WHT-M", "DENIM-BLUE-32", "HAT-RED-OS"];
//Test A
let partialScan = ["JACKET-BLK-L", "HAT-RED'OS"];
console.log(auditInventoryVariance(manifest, partialScan));

//Test B
let fullScan = ["JACKET-BLK-L", "TEE-WHT-M", "DENIM-BLUE-32", "HAT-RED-OS"];
console.log(auditInventoryVariance(manifest, fullScan));

// July 30th Practice(Day 85): The Audio Loop BPM Tempo Clamping Engine(Array Mapping & Boundary Clamping)
function clampBpmTempoList(bpmList, minBpm, maxBpm) {
    let clampedList = [];
    for (let bpm of bpmList) {
        if (bpm < minBpm) {
            clampedList.push(minBpm);
        } 
        else if (bpm > maxBpm) {
            clampedList.push(maxBpm);
        } else {
            clampedList.push(bpm);
        }
    }
    return clampedList;
}

let rawAudioTempos = [55, 92, 140, 185, 70, 165];
let minFloor = 70;
let maxCeiling = 160;

let sanitizedTempos = clampBpmTempoList(rawAudioTempos, minFloor, maxCeiling);

console.log("Original Tempos: ", rawAudioTempos);
console.log("Sanitised Tempos:", sanitizedTempos);

// July 31st Practice(Day 86): The Web Asset Gallery Paginated Slicer(Array Slicing & Page Range Indexing)
function getPageItems(itemsArray, pageNumber, pageSize) {
    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    if (startIndex < 0 || startIndex >= itemsArray.length) {
        return [];
    }
    let pageSubset = itemsArray.slice(startIndex, endIndex);
    return pageSubset;
}

let galleryAssets = ["Banner_1", "Logo_Main", "Card_Front", "Card_Back", "Footer_Icon"];
let itemsPerPage = 2;

console.log("Page 1:", getPageItems(galleryAssets, 1, itemsPerPage));
console.log("Page 2:", getPageItems(galleryAssets, 2, itemsPerPage));
console.log("Page 3:", getPageItems(galleryAssets, 3, itemsPerPage));
console.log("Page 4:", getPageItems(galleryAssets, 4, itemsPerPage));

// August 1st Practice(Day 87): The Single Release Stream Analyzer(Array Averaging & Milestone Thresholds)
function analyzeReleasePerformance(dailyStreams, targetAverage) {
    if (dailyStreams.length === 0) {
        return "Data Error: No stream logs available for analysis.";
    }
    let totalStreams = 0;
    for (let streams of dailyStreams) {
        totalStreams += streams;
    }
    let averageStreams = Math.round(totalStreams / dailyStreams.length);
    if (averageStreams >= targetAverage) {
        return "Campaign Success: Averaged " + averageStreams + " streams/day (Target: " + targetAverage + ").";
    } else {
        let shortfall = targetAverage - averageStreams;
        return "Under Target: Averaged " + averageStreams + " streams/day (Short by " + shortfall + ").";
    }
}

let targetGoal = 1500;

// Test A: Strong Campaign
let launchWeekStreams = [1200, 1500, 1800, 2100, 2400];
console.log(analyzeReleasePerformance(launchWeekStreams, targetGoal));

// Test B: Slow Start
let quietWeekStreams =  [800, 950, 1100, 1200];
console.log(analyzeReleasePerformance(quietWeekStreams, targetGoal));

// August 2nd Practice(Day 88): The Multi-Format Media Asset Depuplicator(Array Deduplication & First-Seen Indexing)
function deduplicateMediaAssets(assetList) {
    let uniqueAssets = [];
    for (let fileName of assetList) {
        if (!uniqueAssets.includes(fileName)) {
            uniqueAssets.push(fileName); 
        }
    }
    return uniqueAssets; 
}

let rawUploads = [
    "cover_art.jpg",
    "vocal_stem.wav",
    "cover_art.jpg",
    "press_kit.pdf",
    "vocal_stem.wav"
];

let cleanQueue = deduplicateMediaAssets(rawUploads);

console.log("Raw Upload Count:  ", rawUploads.length);
console.log("Sanitized Uploads:  ", cleanQueue);
console.log("Unique File Count:  ", cleanQueue.length);

// August 3rd Practice(Day 89): The Audio Track Stems Reorder Engine(Array Index Placement & Splice Mutations)
function reorderAudioStems(stemsList, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= stemsList.length ||
         toIndex < 0 || toIndex >= stemsList.length
        ) {
        return "Invalid Reorder Request: Index out of bounds.";
    }
        let movedStem = stemsList.splice(fromIndex, 1)[0];
        stemsList.splice(toIndex, 0, movedStem);
        return stemsList;
    
}

let myStems = ["Drums", "Vocals", "Bass", "Guitars"];

// Move Vocals from index 1 to the end of the list (index 3)
console.log("Reordered Stems:", reorderAudioStems(myStems, 1, 3));

// Test Out-Of-Bounds Index
console.log(reorderAudioStems(myStems, 0, 10));

// August 4th Practice(Day 90): The Audio Track Crossfade Time Interpolator(Linear Mapping & Step Calculation)
function generateCrossfadeRamp(startVolume, endVolume, totalSteps) {
    if (totalSteps <= 1) {
        return "Transition Error: Step count must be at least 2.";
    }
        let volumeRamp = [];
        let stepSize = (endVolume - startVolume) / (totalSteps - 1);
        for (let i = 0; i < totalSteps; i++) {
            let currentLevel = Math.round(startVolume + (i * stepSize));
            volumeRamp.push(currentLevel);
        }
    
    return volumeRamp;
}

// Test Case A: Fade-In (0 to 100 in 5 steps)
console.log("Fade-In Ramp: ", generateCrossfadeRamp(0, 100, 5));

// Test Case B: Fade-Out (80 to 20 in 4 steps)
console.log("Fade-Out Ramp: ", generateCrossfadeRamp(80, 20, 4));

// August 5 Practice (Day 91): The Audio Stem Mute/Solo State Filter(Boolean Array Masking)
function filterActiveAudioStems(stems, activeStates) {
    if (stems.length !== activeStates.length) {
        return "Config Error: Mismatch between stems and active states.";
    }
        let activeStems = [];
        for (let i = 0; i < stems.length; i++) {
            if (activeStates[i] === true) {
                activeStems.push(stems[i]);
            }
        }
    
    return activeStems;
}

let trackList = ["Drums", "Vocals", "Bass", "Synths", "FX"];
let muteMask = [true, false, true, true, false];

console.log("Active Audio Bus:", filterActiveAudioStems(trackList, muteMask));

// Mismatched Array Length Guard
console.log(filterActiveAudioStems(["Drums", "Vocals"], [true]));

// August 6th Practice (Day 92): The Digital Audio Playlist Shuffler (Fisher-Yates Array Randomization)
function shufflePlaylist(trackList) {
    if (trackList.length <= 1) {
        return trackList;
    }
    let shuffled = [...trackList];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
let masterAlbum = ["01_Intro.wav", "02_Single.mp3", "03_Interlude.wav", "04_Outro.mp3"];
console.log("Original Order:", masterAlbum);

let randomizedQueue = shufflePlaylist(masterAlbum);
console.log("Shuffled Queue:", randomizedQueue);

// August 7th Practice (Day 93): The Dynamic Event Landing Page Countdown Timer(Time Unit Formatting & String Padding)
function formatCountdownTime(totalSeconds) {
    if (totalSeconds < 0) {
        return "Invalid Time: Input must be a positive number of seconds.";
    }
        let hours = Math.floor(totalSeconds / 3600);
        let remainingAfterHours = totalSeconds % 3600;
        let minutes = Math.floor(remainingAfterHours / 60);
        let seconds = remainingAfterHours % 60;

        let paddedHours   = String(hours).padStart(2, "0");
  let paddedMinutes = String(minutes).padStart(2, "0");
  let paddedSeconds = String(seconds).padStart(2, "0");

  return paddedHours + ":" + paddedMinutes + ":" + paddedSeconds;
    
}

// Test Case A: Standard Event Timer (3725 seconds)
console.log("Broadcast Starting In:", formatCountdownTime(3725));
// Test Case B: Short Timer (90 seconds)
console.log("Show Intro Starting In:", formatCountdownTime(90));
// Test Case C: Zero Seconds
console.log("Stream Status:", formatCountdownTime(0));

// August 8th Practice (Day 94): The Live Event Stream Viewer Access Auditor (Range Boundaries & Binary Array Flagging)
function auditStreamAccess(userTiers, minAllowedTier, maxAllowedTier) {
    if (userTiers.length === 0) {
        return [];
    }
    let accessFlags = [];
    for (let tier of userTiers) {
        if (tier >= minAllowedTier && tier <= maxAllowedTier) {
            accessFlags.push(true);
        } else {
            accessFlags.push(false);
        }
    }
    return accessFlags;
}
let streamQueue = [150, 200, 275, 399, 401, 500];
let passMin = 200;
let passMax = 400;

let auditResults = auditStreamAccess(streamQueue, passMin, passMax);
console.log("User Tier IDs:  ", streamQueue);
console.log("Access Granted?: ", auditResults);

// August 9th Practice (Day 95): The Live Broadcast Audio Peak Indicator (Array Peak Detection & Status Mapping)
function mapAudioPeakStatus(peakLevels, clipThreshold) {
    if (peakLevels.length === 0) {
        return [];
    }
    let statusList = [];
    for (let level of peakLevels) {
        if (level >= clipThreshold) {
            statusList.push("CLIP");
        } else {
            statusList.push("OK");
        }
    }
    return statusList;
}

let liveInputBus = [-18, -10, -3, 0, 4, -12];
let maxSafeLevel = 0;

let meterDisplay = mapAudioPeakStatus(liveInputBus, maxSafeLevel);

console.log("Channel Peaks:  ", liveInputBus);
console.log("Meter Indicators:", meterDisplay);

// August 10th Practice (Day 96)






















