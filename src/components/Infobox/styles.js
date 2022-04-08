import styled from 'styled-components';
import coffeeBeansImg from '../../assets/images/coffee-beans.webp';

export const SectionText = styled.section`
	height: 45rem;
	display: flex;
	align-items: center;
	background-image: url(${coffeeBeansImg});
	background-position: right center;
	background-repeat: no-repeat;
	background-size: contain;

	div {
		padding-left: 9rem;
		color: var(--textblack);

		h2 {
			max-width: 30ch;
			margin-bottom: 2rem;
			font-size: 2.375rem;
			color: var(--primaryorange);
		}

		p {
			max-width: 50ch;
			font-size: 1rem;
		}
	}

	@media (max-width: 1300px) {
		height: 38rem;
	}

	@media (max-width: 1240px) {
		height: 32rem;
		div {
			padding-left: 4.625rem;
			padding-right: 4.625rem;
		}
	}

	@media (max-width: 1000px) {
		background-image: none;

		div {
			h2 {
				max-width: 35ch;
			}

			p {
				max-width: 56ch;
			}
		}
	}

	@media (max-width: 500px) {
		height: max-content;
		padding-top: 3.5rem;
	}

`;

export const SectionInfo = styled.section`
	margin-bottom: 4rem;
	padding: 5.625rem;
	background: rgba(255, 255, 255, 0.3);
	box-shadow: 10px 10px 128px rgba(7, 48, 68, 0.07);
	backdrop-filter: blur(20px);

	h1 {
		margin-bottom: 5rem;
		font-size: 2.75rem;
		color: var(--primaryorange);
		text-align: center;
	}

	ul {
		margin-bottom: 5rem;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 3rem;
		text-align: center;

		li {
			max-width: 15rem;
			list-style: none;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1rem;

			div {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 5.5rem;
				height: 5.5rem;
				background-color: var(--secondarygreen);
				border-radius: 100%;

				h1 {
					margin: 0;
					color: var(--textwhite);
				}
			}

			h4 {
				display: flex;
				flex-wrap: wrap;
				font-size: 1rem;
				color: var(--primaryblue);
			}
		}
	}

	button {
		margin: 0 auto;
		display: block;
	}

	@media (max-width: 700px) {
		ul {
			flex-direction: column;
			align-items: center;
		}
	}
`;
