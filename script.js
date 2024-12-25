const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const submitButton = document.getElementById("submit");
const results = document.getElementById("results");
const display = document.createElement("p");
const remark = document.createElement("p");

display.id = "result";
results.appendChild(display);
results.appendChild(remark);

submitButton.addEventListener("click", () => {
  const heightValue = Number(heightInput.value);
  const weightValue = Number(weightInput.value);
  let BMI;
  // Check for invalid inputs or empty fields
  if (
    isNaN(heightValue) ||
    isNaN(weightValue) ||
    heightInput.value.trim() === "" ||
    weightInput.value.trim() === "" ||
    heightValue <= 0 ||
    weightValue <= 0
  ) {
    display.innerHTML =
      "Enter some valid digits! And don't leave any fields empty!";
  } else {
    BMI = weightValue / heightValue ** 2;
    display.innerHTML = `The BMI is: ${BMI.toFixed(2)}`;
  }

  if (BMI < 18.5) {
    remark.innerHTML = "You are underweight 👋";
  } else if (BMI < 24.9) {
    remark.innerHTML = "Normal weight 😏";
  } else if (BMI < 29.9) {
    remark.innerHTML = "Overweight 🏃‍♂️";
  } else {
    remark.innerHTML = "Obese 🫡";
  }
});
