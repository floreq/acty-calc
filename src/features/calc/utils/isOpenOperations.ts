export const IS_OPEN_OPERATIONS_KEY_NAME = "isOpenOperations";

export async function getIsOpenOperationsFromStorage() {
  const isOpen = await localStorage.getItem(IS_OPEN_OPERATIONS_KEY_NAME);

  if (isOpen === "true") {
    return true;
  }

  return false;
}

export async function setIsOpenOperationsToStorage(isOpen: boolean) {
  await localStorage.setItem(IS_OPEN_OPERATIONS_KEY_NAME, String(isOpen));
  return true;
}
