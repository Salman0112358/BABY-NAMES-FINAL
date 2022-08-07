import React from "react";

import {
  Wrapper,
  NameElementNeutral,
  NameElementFemale,
  NameElementMale,
} from "./FilterButton.styles";

type FilterButtonProps = {
  SetGenderFilter: React.Dispatch<React.SetStateAction<string>>;
};

const FilterButtons = ({ SetGenderFilter }: FilterButtonProps): JSX.Element => {
  return (
    <Wrapper>
      <NameElementNeutral onClick={() => SetGenderFilter("")}>
        <a href="#">
          <span>ALL</span>
        </a>
      </NameElementNeutral>
      <NameElementFemale onClick={() => SetGenderFilter("f")}>
        <a href="#">
          <span>F</span>
        </a>
      </NameElementFemale>
      <NameElementMale onClick={() => SetGenderFilter("m")}>
        <a href="#">
          <span>M</span>
        </a>
      </NameElementMale>
    </Wrapper>
  );
};

export default FilterButtons;
