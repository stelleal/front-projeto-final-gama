import styled from 'styled-components';


export const Section = styled.section`
    height: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    
    section {
        display: flex;
        align-items: center;
        
    }
    div {
    margin: 8rem;
    max-width: 100vh;
    max-height: 20rem;
    color: var(--textdark);
        
        h2 {
        margin-bottom: 2rem;
        font-size: 2.375rem;
        color: var(--primaryorange);
        }

        p {
        margin-bottom: 3.5rem;
        font-size: 1rem;
        }
  }

  img {
    width: 48%;
            
 }

 .info {
     display: flex;
     flex-direction: column;
     background-color: rgba(255, 255, 255, 0.3);

     h1 {
        margin-bottom: 3.5rem;
        font-size: 2.75rem;
        color: var(--primaryorange);
     }

     ul {
        display: flex;
        gap: 1.5rem;

        li {
            list-style: none;
            
            h4 {
                display: flex;
                flex-wrap: wrap;
                font-size: 1rem;
                color: var(--primaryblue);
            }
        }
    }
 }
`;