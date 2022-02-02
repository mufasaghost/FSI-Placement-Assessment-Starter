// First, tell us your name
let yourName = "Senam Dagnon";// HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 ;// Gingerbread
let cc = 0 ;// Chocolate Chip
let sugar = 0 ;// Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");


// Code to update name display
document.getElementById ('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
//Increment by one on the click
gb += 1;
//Update the table below post click >gingerbread and total cell
document.getElementById('qty-gb').textContent = gb;
document.getElementById('qty-total').textContent = gb + cc + sugar;
})

// TODO: Hook up event listeners for the rest of the buttons
// Event listener for clicks on the "-" button for Gingerbread cook
document.getElementById('minus-gb').addEventListener('click', function() {
    // Subtract one from the ginger bread count on the click -
    gb -= 1;

    // Count Condition to avoid negative value
    if (gb < 0) {
        gb = 0;
    }

    // Update the table cells for gingerbread and total
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = gb + cc + sugar;
})
// Event listener for "+" button clicks for Chocolate Chip cooks
document.getElementById('add-cc').addEventListener('click', function() {
    //Increment the chocolate chip count
    cc += 1;
    // Update the table cells with new value post the "+"click
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = gb + cc + sugar;
})

// Event listener for "-" button clicks for Chocolate Chip cooks
document.getElementById('minus-cc').addEventListener('click', function() {
    // Decrement one from the chocolate chip count
    cc -= 1

    // Count Condition to avoid negative value when taking count back
    if (cc < 0) {
        cc = 0
    }

    // Update the table cells with new value post the "-"click for cc table and total
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = gb + cc + sugar;
})

// Event listener for "+" button clicks for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    // Increment the sugar sprinkle count
    sugar += 1;

    // Update the table cells with new value post the "+"click
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = gb + cc + sugar;
})

// Event listener for "-" button clicks  for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    // decrement one from the sugar sprinkle count
    sugar -= 1;
     // Count Condition to avoid negative value when taking count back
     if (sugar < 0) {
        sugar = 0;
    }

    // Update the table cells with new value post the "-"click
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = gb + cc + sugar;
})

