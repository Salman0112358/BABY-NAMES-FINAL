import { NameElementProp } from "../Types/types";

export function handleRemoveFromFavourites(
  targetNameData: NameElementProp,
  SetFavouriteBabyNames: React.Dispatch<
    React.SetStateAction<NameElementProp[]>
  >,
  favouriteBabyNames: NameElementProp[]
): void {
  function doesNotMatchTarget(candidate: NameElementProp) {
    return candidate.name !== targetNameData.name;
  }
  //STEP 1. newFavourites = prepare new, copied list of
  //favourite baby names but MISSING the targetNameData one
  const newFavourites: NameElementProp[] =
    favouriteBabyNames.filter(doesNotMatchTarget);
  //STEP 2....
  SetFavouriteBabyNames(newFavourites);
}
