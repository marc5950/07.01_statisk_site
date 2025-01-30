function onSale(pris, rabat) {
  return pris * (1 - rabat); // Returnér den nye pris
}

// Funktion til at opdatere priser for et produkt
function price(originalPriceElement, beforePriceElement, newPriceElement, discountPercentElement, pris, rabat) {
  let nyPris = onSale(pris, rabat); // Beregn ny pris

  newPriceElement.textContent = nyPris.toFixed(2) + " kr"; // Format: 555.55 kr
  discountPercentElement.textContent = `Save -${(rabat * 100).toFixed(0)}%`; // Format: Spar -55%
  originalPriceElement.textContent = pris.toFixed(2) + " kr";
  beforePriceElement.textContent = pris.toFixed(2) + " kr";
}

// Opdater produkt 1163
price(document.querySelector(".pris_1163"), document.querySelector(".priceBefore_1163"), document.querySelector(".nyPris_1163"), document.querySelector(".rabatProcent_1163"), 895, 0.0);

// Opdater produkt 1526
price(document.getElementById("pris_1526"), document.getElementById("pricebefore_1526"), document.getElementById("nyPris_1526"), document.getElementById("rabatProcent_1526"), 1299, 0.0);

// Opdater produkt 1525
price(document.getElementById("pris_1525"), document.getElementById("pricebefore_1525"), document.getElementById("nyPris_1525"), document.getElementById("rabatProcent_1525"), 1299, 0.55);

// Opdater produkt 1165
price(document.getElementById("pris_1165"), document.getElementById("pricebefore_1165"), document.getElementById("nyPris_1165"), document.getElementById("rabatProcent_1165"), 2495, 0.45);

// Opdater produkt 1164
price(document.getElementById("pris_1164"), document.getElementById("pricebefore_1164"), document.getElementById("nyPris_1164"), document.getElementById("rabatProcent_1164"), 1595, 0.28);
