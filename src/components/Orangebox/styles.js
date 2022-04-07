import styled from 'styled-components';
import coffeepackImg from '../../../src/assets/images/coffee-pack.webp';

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: var(--primaryorange);

	background-image: url(${coffeepackImg});
	background-position: left center;
	background-repeat: no-repeat;
	background-size: contain;

	div {
		padding: 8rem 4rem;

		h1 {
			margin-bottom: 2rem;
			font-size: 2.75rem;
			color: var(--primaryblue);
			max-width: 28ch;
		}

		p {
			margin-bottom: 3.5rem;
			font-size: 1.125rem;
			color: var(--textwhite);
			max-width: 45ch;
		}
	}

	@media (max-width: 1300px) {
		div {
			padding-top: 6rem;
			padding-bottom: 6rem;
		}
	}

	@media (max-width: 1240px) {
		div {
			padding-top: 3.5rem;
			padding-bottom: 3.5rem;
		}
	}

	@media (max-width: 1150px) {
		background-image: none;

		div {
			padding-right: 2rem;
			padding-left: 2rem;

			h2 {
				max-width: 35ch;
			}

			p {
				max-width: 55ch;
			}
		}
	}
`;
