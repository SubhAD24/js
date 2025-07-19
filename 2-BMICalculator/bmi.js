const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value); // Use parseFloat
    const weight = parseFloat(document.querySelector('#Weight').value); // Use parseFloat and correct variable name
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) { 
        results.innerHTML = `Please give a valid height.`;
    } else if (isNaN(weight) || weight <= 0) { 
        results.innerHTML = `Please give a valid weight.`;
    } else {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let bmiCategory = "";
        if (bmi < 18.6) {
            bmiCategory = "Under Weight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            bmiCategory = "Normal Range";
        } else {
            bmiCategory = "Overweight";
        }
        // Display the result regardless of category
        results.innerHTML = `Your BMI is: <span>${bmi}</span> - ${bmiCategory}`;
    }
});