import { WEIGHT_KEY_NAME } from "./getWeightFromStorage";

const setWeightToStorage = (weight: number) => {
  localStorage.setItem(WEIGHT_KEY_NAME, weight.toString());

  return true;
};

export default setWeightToStorage;
