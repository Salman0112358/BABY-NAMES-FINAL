import { NameElementProp } from "../Types/types";

export default function notInFavouriteNames(
  singleNameData: NameElementProp,
  favouriteBabyNames: NameElementProp[]
): boolean {
  return !favouriteBabyNames.includes(singleNameData);
}
