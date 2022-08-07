/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { NameElementProp } from "../../Types/types";

import {
  Wrapper,
  NameElementMale,
  NameElementFemale,
} from "../NameButton/NameButton.styles";

const NameButton = ({ id, name, sex }: NameElementProp): JSX.Element => {
  return (
    <Wrapper>
      {sex === "m" ? (
        <NameElementMale>
          <a href="#">
            <span>{name}</span>
          </a>
        </NameElementMale>
      ) : (
        <NameElementFemale>
          <a href="#">
            <span>{name}</span>
          </a>
        </NameElementFemale>
      )}
    </Wrapper>
  );
};

export default NameButton;
