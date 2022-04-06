import styled from 'styled-components';

export const Section = styled.footer`
    margin: auto;
    padding: 3rem;
    background-color: var(--primaryblue);
    color: var(--textwhite);
    
    footer {
        display: flex;
        justify-content: space-evenly;

    #socialbuttons {
        display: flex;
        justify-content: space-between;
    }

    .socialbutton {
            display: flex;
            height: 1.75rem;
    }

    li{
        list-style: none;     
    }
}
`