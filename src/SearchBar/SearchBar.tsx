import React from "react";

import { Wrapper, Content } from "./SearchBar.styles";

import searchIcon from "../Assests/Images/search.png";

type SearchBarProps = {
  searchTerm: string;
  SetSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({
  searchTerm,
  SetSearchTerm,
}: SearchBarProps): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-img" />
        <input
          type="text"
          placeholder="Search Baby Names"
          onChange={(event) => SetSearchTerm(event.currentTarget.value)}
          value={searchTerm}
        ></input>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
