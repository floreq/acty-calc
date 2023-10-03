const roundToFirstDecimalPlace = (number: number) => {
  return Math.round(number * 10) / 10;
};

export default roundToFirstDecimalPlace;
