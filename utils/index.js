export function convertDimension(value, unitSystem) {
  return Math.round(unitSystem === "metric" ? value : value * 0.393701);
}

export function calculateVolume({ length, width, height }) {
  return Math.round((length * width * height) / 1000);
}

export function calculateVolumeCombined(personalItem, cabinBag) {
  return calculateVolume(personalItem) + calculateVolume(cabinBag);
}
