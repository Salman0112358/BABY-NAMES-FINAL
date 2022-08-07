import { NameElementProp } from "../Types/types";



export const handleAddToFavourites = (
  singleNameData: NameElementProp,
  favouriteBabyNames: NameElementProp[],
  SetFavouriteBabyNames: React.Dispatch<React.SetStateAction<NameElementProp[]>>,
) :string => {

  const newFavouriteBabyNames = [...favouriteBabyNames, singleNameData];
  SetFavouriteBabyNames(newFavouriteBabyNames);

  return `${singleNameData.name} has been added to the favourites list `
};
