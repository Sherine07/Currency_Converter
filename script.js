const apiKey = '2ba596e7de467352df9ca2b5';  // Replace with your actual API key
const apiUrl = 'https://v6.exchangerate-api.com/v6/2ba596e7de467352df9ca2b5/latest/USD';

// Fetch currencies and populate select elements
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const currencyOptions = Object.keys(data.conversion_rates);
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");

    currencyOptions.forEach(currency => {
      const option1 = document.createElement("option");
      option1.value = currency;
      option1.text = currency;
      fromCurrency.add(option1);

      const option2 = document.createElement("option");
      option2.value = currency;
      option2.text = currency;
      toCurrency.add(option2);
    });
  })
  .catch(error => console.error("Error fetching currency data:", error));

// Convert currency
function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;

  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`)
    .then(response => response.json())
    .then(data => {
      const result = document.getElementById("result");
      result.innerText = `${amount} ${fromCurrency} = ${data.conversion_result} ${toCurrency}`;
    })
    .catch(error => console.error("Error converting currency:", error));
}
