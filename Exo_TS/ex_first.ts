function formaterPrix(price: number | null, devise: string = "EUR"): string {
  if (price === null) {
    return "Prix non disponible";
  }
  return devise 
  ? `${price.toFixed(2)} ${devise}` 
  : price.toFixed(2); // condition ? value_if_true : value_if_false
}
console.log(formaterPrix(12.5, "EUR")); // "12.50 EUR"
console.log(formaterPrix(null)); // "Prix non disponible"
console.log(formaterPrix(15, "EUR")); // "15.00 EUR"
