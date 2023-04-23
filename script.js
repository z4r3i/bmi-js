function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value / 100; // convert cm to m
  var bmi = weight / (height * height);
  var result = document.getElementById("result");

  if (bmi < 18.5) {
    result.innerHTML = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = "Overweight";
  } else {
    result.innerHTML = "Obese";
  }
}
