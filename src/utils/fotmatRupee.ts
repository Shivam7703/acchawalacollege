export function formatRupee(number: number) {
    // Convert number to string
    let strNumber = String(number);
  
    // Split the number into integer and decimal parts
    let parts = strNumber.split('.');
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  
    // Add commas for thousands separator
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Add ₹ symbol and return formatted number
    return '₹ ' + integerPart + decimalPart;
  }