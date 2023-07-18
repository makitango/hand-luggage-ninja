export function convertDimension(value, unitSystem) {
  return Math.round(unitSystem === "metric" ? value : value * 0.393701);
}

export function calculateVolume({ length, width, height }) {
  const volume = length * width * height;
  return Math.round(volume / 1000);
}
