import styled from 'styled-components'

export const Wrapper = styled.div`
  background: crimson;
  padding: 0 20px;
  :hover {
    background: crimson;
    opacity: 0.9;
  }
  max-height: 100px ;
`;

export const Content = styled.div`
  display: inline-flex;
  width: auto;
  max-width: var(--maxWidth);
  padding: 10px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }

  max-height: 5rem;
`;
