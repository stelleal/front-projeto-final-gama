import styled from 'styled-components';

export const Container = styled.header`
	max-width: 1140px;
	margin: 0 auto;
  padding: 2rem 1rem 1rem;
  display: flex;
  justify-content: center;
	nav ul {
		display: flex;
		align-items: center;
		gap: 36px;

		li {
      list-style: none;

      a {
        display: inline-block;
        text-decoration: none;
        padding: 7px 0;
        margin: 10px 0;
        color: var(--black);
        font-size: 1.25rem;
      }
		}
	}
`;
