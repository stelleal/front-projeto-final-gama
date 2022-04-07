import styled from 'styled-components';

export const Container = styled.header`
	background-color: var(--primaryblue);
	color: var(--textwhite);

	.wrapper {
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		max-width: 1140px;

		a {
			display: inline-block;
			text-decoration: none;
			padding: 1rem;
			color: var(--textwhite);
			font-size: 0.9rem;
			text-align: center;

			&:hover {
				color: var(--primaryorange);
			}

			img {
				max-width: 8rem;
			}
		}
	}

	@media (max-width: 800px) {
		.wrapper {
			padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      
      .logo {
				display: none;
			}
		}
	}
`;
