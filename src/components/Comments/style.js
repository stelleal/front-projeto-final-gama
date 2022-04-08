import styled from "styled-components";

export const Commentcard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
    border-radius: 32px;
    padding: 2rem;
    width: 20rem;
    height: 20rem;

    h2 {
        font-size: 1.125rem;
        color: var(--primaryblue);
    }

    p {
        text-align: center;
        color: var(--primaryblue);
    }

    img {
        max-height: 0.8rem;
        margin-top: 1rem;
        margin-bottom: 0.2rem;
    }
`
