import styled from 'styled-components';
import banner from "../../../src/assets/images/banner.svg"

export const Background = styled.article`
  background-color: #e1e1e1;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
  margin: auto;
  padding: 0 1rem;
  height: 36rem;
  display: flex;
  justify-content: end;
  

  div {
    margin: 5rem;
    max-width: 40rem;
    max-height: 20rem;
    color: var(--textwhite);

    h1 {
      margin-bottom: 3rem;
      font-size: 2.75rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
}
`;