export function convertDimension(value, unitSystem) {
  return Math.round(unitSystem === "metric" ? value : value / 2.54);
}

export function calculateVolume({ length, width, height }) {
  const volume = length * width * height;
  return Math.round(volume / 1000);
}
export function getColor(value, averageValue) {
  if (typeof value !== "number") {
    return "inherit";
  }
  const percentageDiff = (value - averageValue) / averageValue;
  return percentageDiff < -0.2
    ? "red"
    : percentageDiff > 0.2
    ? "green"
    : "inherit";
}
