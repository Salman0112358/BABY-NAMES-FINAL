import { NameElementProp } from "../Types/types";

export const handleAddToFavourites = (
  singleNameData: NameElementProp,
  favouriteBabyNames: NameElementProp[],
  SetFavouriteBabyNames: React.Dispatch<React.SetStateAction<NameElementProp[]>>
) => {
  const newFavouriteBabyNames = [...favouriteBabyNames, singleNameData];
  SetFavouriteBabyNames(newFavouriteBabyNames);
};
