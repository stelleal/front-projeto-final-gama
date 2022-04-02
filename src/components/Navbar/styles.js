import styled from 'styled-components';

export const Container = styled.header`
	margin: auto;
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: center;
  background-color: var(--primaryblue);
  color: var(--textwhite);
	nav {
      display: flex;
      align-items: center;
    ul{
      display: flex;
      gap: 1.5rem;
		li {
      list-style: none;
      a {
        display: inline-block;
        text-decoration: none;
        padding: 1rem;
        color: var(--black);
        font-size: 1.25rem;
      }
    }
		}
	}
`;
