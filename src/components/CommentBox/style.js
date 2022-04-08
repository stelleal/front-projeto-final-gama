import styled from "styled-components";

export const Row = styled.section `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 1110px) {
        flex-wrap: wrap;
}
`   

export const Container = styled.div `
    padding: 3rem;
    margin: auto;
    text-align: center;
    
    h1 {
        color: var(--primaryblue);
}
`
