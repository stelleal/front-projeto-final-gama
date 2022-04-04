import styled from 'styled-components';


export const Section = styled.section`
    margin: auto;
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
     margin: 5rem 0;
     display: flex;
     flex-direction: column;
     background-color: rgba(255, 255, 255, 0.3);


    .steps {
        margin: 0 0 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.5rem;
        height: 5.5rem;
        background-color: var(--secondaryblue);
        border-radius: 100%;

        h1 {
            margin: 0;
            color: var(--textwhite);
        }
    }

     h1 {
        margin-bottom: 5rem;
        font-size: 2.75rem;
        color: var(--primaryorange);
     }

     ul {
        margin-bottom: 5rem;
        display: flex;
        justify-content: center;
        gap: 1.5rem;

        li {
            
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
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