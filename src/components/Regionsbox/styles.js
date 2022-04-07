import styled from 'styled-components';

export const Section = styled.section`
	#title {
		margin: 0 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			margin-bottom: 1rem;
			font-size: 2.75rem;
			color: var(--primaryblue);
		}

		p {
			margin-bottom: 2.5rem;
			font-size: 1.125rem;
			color: var(--textblack);
            text-align: center;
		}
	}

	#buttonsregion {
		margin-left: 1rem;
		margin-right: 1rem;
		margin-bottom: 4rem;
		display: flex;
		justify-content: space-evenly;
		gap: 1.2rem;
	}

	@media (max-width: 1300px) {
		#buttonsregion {
			flex-wrap: wrap;
		}
	}
`;
