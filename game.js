console.warn("this is game.js");

let rand1 = Math.floor(Math.random() * 10);
let rand2 = Math.floor(Math.random() * 10);
let rand3 = Math.floor(Math.random() * 10);
let rand4 = Math.floor(Math.random() * 10);

function game(event) {
    event.preventDefault();
    
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let num3 = document.getElementById("num3");
    let num4 = document.getElementById("num4");

    let inputs = [num1, num2, num3, num4];
    let nums = [num1.value, num2.value, num3.value, num4.value];
    let randValues = [rand1, rand2, rand3, rand4];

    let verfy = [];

    nums.forEach((num, index) => {
        if (num == randValues[index]) {
            console.warn("V");
            verfy[index] = "V";
            inputs[index].style.borderColor = "green"; // Green for correct number and position
        } else if (randValues.includes(parseInt(num))) {
            console.warn("P");
            verfy[index] = "P";
            inputs[index].style.borderColor = "yellow"; // Yellow for correct number but wrong position
        } else {
            console.warn("N");
            verfy[index] = "N";
            inputs[index].style.borderColor = "red"; // Red for incorrect number
        }
    });

    let done = ['V', 'V', 'V', 'V'];
    console.error("done : ", done);
    console.error("verfy : ", verfy);

    if (JSON.stringify(verfy) === JSON.stringify(done)) {
        console.log("Congratulations! You won!");
        window.location.reload();
    } else {
        console.log("Keep trying!");
    }
}

// Restrict input to digits only and move to the next input field on "Enter"
document.querySelectorAll('.inputs input').forEach((input, index, inputs) => {
    input.addEventListener('input', function() {
        // Ensure only a single digit is entered
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            // Focus the next input field if 'Enter' is pressed
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });
});
