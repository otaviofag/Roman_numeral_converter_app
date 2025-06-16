const convertBtn = document.getElementById("convert-btn");

function convertToRoman(num) {
  const lookup = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let result = "";
  for (const { value, symbol } of lookup) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

convertBtn.addEventListener("click", () => {
  const input = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (input === "" || isNaN(input)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  const num = parseInt(input);

  if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = convertToRoman(num);
  }
});
