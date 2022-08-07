import { NameElementProp } from "../Types/types";

export default function filterSearchArray(
  searchTerm: string,
  inputArray: NameElementProp[]
): NameElementProp[] {
  const filterSearchArray = inputArray.filter((item) => {
    if (item.name) {
      return item.name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    } else {
      return false;
    }
  });
  return filterSearchArray;
}
