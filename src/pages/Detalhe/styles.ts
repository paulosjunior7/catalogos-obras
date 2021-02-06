import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
   // width: 100%;
    padding: 15px;
    background: #fbfbfb;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
   // display: flex;
//justify-content: space-between;
 //   align-items: center;
 //   flex-wrap: nowrap;

    width: 90%;
  max-width: 980px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`


export const Section2 = styled.div`
    width: 100%;
    height: 100%;
    display: 1;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  

    button {
        font-size: 1.6rem;
        font-weight: 600;
        color: rgb(255, 255, 255);
        background-color: #56A3A6;
        margin: 20px 0px 0px;
        padding: 12px 30px;
        text-decoration: none;
        border-radius: 5px;
        transition: all 150ms linear 0s;
        width: 100%;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }

        
    }

    
`

export const Section = styled.div`
        padding-left: 32px;  
    padding-right: 32px;  

    h2 {
        //margin: 49px 0 22px;
        margin-bottom: 12px;
        font-size: 30px;
        margin-top: 12px;
    }

    p {
        font-size: 18px;
        color: #737380;
        line-height: 32px;
    }

    ul, li {
        margin-left: 15px;
        font-size: 18px;
        color: #737380;
        line-height: 32px;
    }

    form {
        width: 100%;
        max-width: 450px;

        input, textarea {
            margin-top: 8px;
        }
    }

    
`;

export const Carousel = styled.div`

    width: 450px;
    float: left;
    margin: 3px;
    padding: 3px;

    img {
        width: 100%;
        height: 420px;
    }
`

export const Page = styled.div`
    
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: space-between;

     button {
             border : 0;
             cursor: pointer;
             z-index: 9999;
             
             svg {
                 color: #fff;
             }
         }
`

export const Nav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between  ;

    button {
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; 
    }

    svg {
        height: 20px;
        display: flex;
        align-items: center;   
        justify-content: space-between  ;    
    }
`

