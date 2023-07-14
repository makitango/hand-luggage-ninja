export function convertDimensionsToInches(dimensions) {
  const conversionFactor = 0.393701;
  let convertedDimensions = {};

  for (let key in dimensions) {
    convertedDimensions[key] = (dimensions[key] * conversionFactor).toFixed(1);
  }

  return convertedDimensions;
}
