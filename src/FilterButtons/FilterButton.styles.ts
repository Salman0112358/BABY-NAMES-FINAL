import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
`;

export const NameElementMale = styled.a`
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  margin: 0 2rem;

  a {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid deepskyblue;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }

  a span {
    position: relative;
    z-index: 2;
  }

  a:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: deepskyblue;
    transition: all 0.35s;
  }

  a:hover {
    color: #fff;
  }

  a:hover:after {
    width: 100%;
  }
`;

export const NameElementFemale = styled.a`
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  margin: 0 2rem;

  a {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid deeppink;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }

  a span {
    position: relative;
    z-index: 2;
  }

  a:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: deeppink;
    transition: all 0.35s;
  }

  a:hover {
    color: #fff;
  }

  a:hover:after {
    width: 100%;
  }
`;

export const NameElementNeutral = styled.a`
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  margin: 0 2rem;

  a {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid coral;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }

  a span {
    position: relative;
    z-index: 2;
  }

  a:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: coral;
    transition: all 0.35s;
  }

  a:hover {
    color: #fff;
  }

  a:hover:after {
    width: 100%;
  }
`;
