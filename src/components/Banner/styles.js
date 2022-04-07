import styled from 'styled-components';
import bannerImg from "../../../src/assets/images/banner.svg"

export const Background = styled.article`
  background-color: #e1e1e1;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
  margin: auto;
  padding: 0 1rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: end;

  div {
    margin: 8rem 4rem;
    max-width: 55ch;
    color: var(--textwhite);

    h1 {
      margin-bottom: 2rem;
      font-size: 2.75rem;
    }

    p {
      margin-bottom: 3.5rem;
      font-size: 1rem;
      color: inherit;

    }
  }
}
`;