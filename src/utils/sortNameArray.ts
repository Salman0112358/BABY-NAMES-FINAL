import { NameElementProp } from "../Types/types";

export const sortNameArray = (
  inputArray: NameElementProp[]
): NameElementProp[] => {
  const sortedNameArray = inputArray.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return sortedNameArray;
};
