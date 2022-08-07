import { NameElementProp } from "../Types/types";

export default function filterGenderArray(
  genderFilter: string,
  inputArray: NameElementProp[]
): NameElementProp[] {
  if (genderFilter === "m" || genderFilter === "f") {
    const genderFilterArray = inputArray.filter((item) => {
      if (item.sex === genderFilter) {
        return true;
      } else {
        return false;
      }
    });
    return genderFilterArray;
  } else return inputArray;
}
