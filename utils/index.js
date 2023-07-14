export function convertDimensionsToInches(dimensions) {
  const conversionFactor = 0.393701;
  let convertedDimensions = {};

  for (let key in dimensions) {
    convertedDimensions[key] = Math.round(dimensions[key] * conversionFactor);
  }

  return convertedDimensions;
}
