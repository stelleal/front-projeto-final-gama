import styled from 'styled-components';

export const Container = styled.div`
	padding: 3rem;
	background-color: var(--primaryblue);
	color: var(--textwhite);

	footer {
		display: flex;
		justify-content: space-evenly;

		div {
			h4 {
				margin-bottom: 1.5rem;
			}

			#socialbuttonslist {
				display: flex;
				justify-content: space-between;
			}

			.socialbutton {
				display: flex;
				height: 1.75rem;

				img {
					transition: filter 0.2s;

					&:hover {
						filter: brightness(0.8);
					}
				}
			}

			li {
				list-style: none;
			}
		}

		> a {
			max-height: 73px;
			transition: filter 0.2s;

			&:hover {
				filter: brightness(0.8);
			}
		}
	}

	@media (max-width: 1000px) {
		footer > a img {
			max-height: 50px;
		}
	}
	@media (max-width: 800px) {
		footer > a img {
			display: none;
		}
	}
	@media (max-width: 580px) {
		footer {
			flex-direction: column;
			gap: 2rem;

			div #socialbuttonslist {
				justify-content: flex-start;
                gap: 2rem;
			}
		}
	}
`;
