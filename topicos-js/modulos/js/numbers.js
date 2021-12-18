export function sum(num1, num2) {
  return num1 + num2;
}

function exp(base, exponent) {
  return base ** exponent;
}

export function round(value, precision) {
  var multiplier = exp(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// export { sum, round };
