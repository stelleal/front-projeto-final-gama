import styled from 'styled-components';

export const Background = styled.article`
  background-color: #e1e1e1;

  .container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  height: 535px;
  border: 1px solid red; //retirar
  display: flex;
  align-items: center;

  div {
    max-width: 632px;
    border: 1px solid blue; //retirar

    h1 {
      margin-bottom: 81px;
      font-size: 2.75rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
}
`;