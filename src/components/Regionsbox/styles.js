import styled from 'styled-components';

export const Section = styled.section`
    
    #title {
        margin: 0;
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
        }
    }

    div {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 4rem;
    }
`