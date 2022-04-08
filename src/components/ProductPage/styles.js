import styled from 'styled-components';

export const Container = styled.div`
	background-color: var(--secondarypink);

	.content {
    padding: 2rem;

		display: grid;
		grid-template-columns: auto 3fr 5fr;
		place-items: stretch;
		place-content: center;
		gap: 3.85rem;

		span {
			align-self: start;

			a {
				text-decoration: none;
				color: var(--primaryblue);
				transition: color 0.2s;

				&:hover {
					color: var(--primaryorange);
				}
			}
		}

		.productImg {
			background-color: var(--secondaryblue);
			border-radius: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				max-width: 32.5rem;
				padding: 2rem;
			}
		}

		.productInfo {
			display: flex;
			flex-direction: column;
			justify-content: stretch;
			align-items: center;
			max-width: 56ch;
			gap: 2rem;

			padding-right: 4rem;

			h1 {
				font-size: 2.75rem;
			}
			p {
				font-size: 1rem;
				margin-bottom: 1rem;
			}
		}
	}

	@media (max-width: 1150px) {
		.productImg img {
			width: 24rem;
		}
	}

	@media (max-width: 1000px) {
		.content {
			grid-template-columns: auto 1fr;
			place-items: center;

			span {
				grid-row: 1 / 3;
			}

			.productInfo {
				max-width: 65ch;

				h1 {
					text-align: center;
				}
			}
		}
	}

	@media (max-width: 800px) {
		.content {
      gap: 1rem;
    }
	}

  @media (max-width: 500px) {
		.content {
      grid-template-columns: 1fr;

      span {
        justify-self: start;
      }

      .productImg img {
			width: 20rem;
		}
    }
	}

`;
