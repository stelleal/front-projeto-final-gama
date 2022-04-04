import styled from 'styled-components';

export const Section = styled.footer`
    margin: auto;
    padding: 3rem;
    background-color: var(--primaryblue);
    color: var(--textwhite);
    
    footer {
        display: flex;
        justify-content: space-evenly;

    h4{
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

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

        a {
            display: inline-block;
            text-decoration: none;
            margin-bottom: 1rem;
            font-size: 0.8rem;
            color: var(--black);
            
        }        
    }
}
`