export const WEIGHT_KEY_NAME = "weight";

const getWeightFromStorage = () => {
  const weight = localStorage.getItem(WEIGHT_KEY_NAME);

  const canReturn =
    typeof weight !== "undefined" && weight !== null && !isNaN(Number(weight));

  if (canReturn) {
    return Number(weight);
  }
};

export default getWeightFromStorage;
