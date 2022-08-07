import React, { useState } from "react";
/*Importing React Components*/
import Header from "../Header/Header";
import Grid from "../Grid/Grid";
import NameButton from "../NameButton/NameButton";
import SearchBar from "../../SearchBar/SearchBar";
import FilterButtons from "../../FilterButtons/FilterButtons";

/*Importing Name Data*/
import NameData from "../../names.json";

/*Importing Utility Functions*/
import filterSearchArray from "../../utils/filterSearchArray";
import { sortNameArray } from "../../utils/sortNameArray";
import { handleAddToFavourites } from "../../utils/handleAddToFavourites";
import notInFavouriteNames from "../../utils/notInFavouriteNames";
import { handleRemoveFromFavourites } from "../../utils/handleRemoveFromFavourites";
import filterGenderArray from "../../utils/filterGenderArray";

/*Importing Types */
import { NameElementProp } from "../../Types/types";

const fullNameArray = NameData; //original unsorted name data

const Home = (): JSX.Element => {
  const [searchTerm, SetSearchTerm] = useState("");
  const [favouriteBabyNames, SetFavouriteBabyNames] = useState<
    NameElementProp[]
  >([]);
  const [genderFilter, SetGenderFilter] = useState<string>("");

  const sortedNameArray = sortNameArray(fullNameArray); // sorting array alphabetically
  const searchFilterArray: NameElementProp[] = filterSearchArray(
    searchTerm,
    sortedNameArray
  );
  const mainBabyNames = filterGenderArray(
    genderFilter,
    searchFilterArray.filter((item) =>
      notInFavouriteNames(item, favouriteBabyNames)
    )
  );

  return (
    <>
      <Header></Header>
      <SearchBar
        searchTerm={searchTerm}
        SetSearchTerm={SetSearchTerm}
      ></SearchBar>
      <FilterButtons SetGenderFilter={SetGenderFilter}></FilterButtons>

      <Grid header={`Showing ${favouriteBabyNames.length} Favourite Names`}>
        {favouriteBabyNames.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              handleRemoveFromFavourites(
                item,
                SetFavouriteBabyNames,
                favouriteBabyNames
              )
            }
          >
            <NameButton id={item.id} name={item.name} sex={item.sex} />
          </div>
        ))}
      </Grid>
      <Grid header={`Showing ${mainBabyNames.length} Names In The Main List`}>
        {mainBabyNames.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              handleAddToFavourites(
                item,
                favouriteBabyNames,
                SetFavouriteBabyNames
              )
            }
          >
            <NameButton id={item.id} name={item.name} sex={item.sex} />
          </div>
        ))}
      </Grid>
    </>
  );
};

export default Home;
