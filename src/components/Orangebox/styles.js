import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    background-color: var(--primaryorange);

    div {
        margin-right: 8rem;
        max-width: 100vh;
        max-height: 20rem;

        h1 {
            margin-bottom: 2rem;
            font-size: 2.75rem;
            color: var(--primaryblue);
            }

        p {
            margin-bottom: 3.5rem;
            font-size: 1.125rem;
            color: var(--textwhite);
        }
    }
`;