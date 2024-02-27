function calculateCost() {
  // Get user selections
  const itemType = document.getElementById("Item-type").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const size = document.getElementById("size").value;

  // Define price based on item type
  let basePrice = 0;
  switch (itemType) {
    case "CoffeeMug":
      price = 9.99;
      break;
    case "CoffeeCup":
      price = 6.88;
      break;
    case "RostedCoffee":
      price = 12.99;
      break;
      case "T-Shert":
      price = 15.99;
      break;
    case "EthiopianCoffee":
      price = 5.99;
      break;
    case "ServingCoffee":
      price = 4.99;
      break;
    case "AbolCoffee":
      price = 5.99;
      break;
    case "EthiopianBuna":
      price = 3.99;
      break;
  }

  // Calculate size multiplier (different prices for sizes)
  let sizeMultiplier = 1;
  if (size === "medium") {
    sizeMultiplier = 1.2;
  } else if (size === "large") {
    sizeMultiplier = 1.3;
  }

  // Calculate total cost
  const totalCost = price * quantity * sizeMultiplier;

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

  