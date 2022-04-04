import styled from 'styled-components';


export const Section = styled.section`
    height: auto;
    display: flex;
    justify-content: end;
    align-items: center;

    img {
        width: 45%;
    }
    div {
    margin: 8rem;
    max-width: 35rem;
    max-height: 20rem;
    color: var(--textdark);

    h2 {
      margin-bottom: 2rem;
      font-size: 2.375rem;
      color: var(--primaryorange);
    }

    p {
      margin-bottom: 3.5rem;
      font-size: 1rem;
    }
  }
}
`;