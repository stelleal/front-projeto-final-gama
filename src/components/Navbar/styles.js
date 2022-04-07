import styled from 'styled-components';

export const Container = styled.header`
	/* margin: auto; */
  /* padding: 2.5rem 1rem; */
  background-color: var(--primaryblue);
  color: var(--textwhite);

    /* ul{
      display: flex;
      gap: 1.5rem;

		li {
      list-style: none; */
  .wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1140px;
  
      a {
        display: inline-block;
        text-decoration: none;
        padding: 1rem;
        color: var(--textwhite);
        font-size: 0.9rem;
      
        img {
          max-width: 8rem;
        }
      }
    
    a:hover {
      color: var(--primaryorange);
    }
} 
`;
