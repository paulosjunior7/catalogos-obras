import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: #FAFBFC;
    /* background-image: url("https://wallpaperaccess.com/full/773716.jpg");
    background-position: 0;
    background-size : 'cover';
    background-repeat: 'no-repeat' */
    
`;

export const BackgroudImage = styled.div`
    background-image: linear-gradient( 135deg, #359ECB 10%, #359ECB 100%);
    height: 40vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    /* border-radius: 0 0 85% 85% / 10%; */

`

export const Content = styled.div`
    margin-top: 3vw;
    z-index: 9999;
    width: 100%;
    max-width: 1000px;
    background: #FFFFFF;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 5.5rem;
    background-color: #236BAB;
    left: 0;
    top: 0;

    justify-content : flex-end;
    align-items: center;
    padding-right: 12px;

    svg {
        color: #FFFFFF;
        cursor: pointer;
    }
`

export const Body = styled.div`
    justify-content: center;
    align-items: center;
    padding: 30px;
    display: flex;
    
    @media(max-width: 845px) {
        flex-direction: column-reverse;
    }
`


export const Section2 = styled.div`
    width: 100%;
    max-width: 750px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`



export const Section = styled.div`
    line-height: 20px;
    width: 100%;
    max-width: 750px;
    display: flex;
    flex-direction: column;

    h2 {
        //margin: 49px 0 22px;
        margin-bottom: 20px;
        font-size: 2.0rem;
        margin-top: 14px;
    }

    p {
        font-size: 1.5rem;
        color: #333;
        line-height: 3.2rem;
        font-weight: bold;

        a {
            font-weight: normal;

        }
    }

    ul, li {
        margin-left: 15px;
        font-size:  1.4rem;
        color: #333;
        line-height: 3.2rem;
        line-height: 2.0rem;
    }

    p {
        h2 {
            font-size: 2.7rem;
            color: #333;
        }
    }

    form {
        width: 100%;
        max-width: 450px;

        input, textarea {
            margin-top: 2px;
        }
    }

    
`;

export const Carousel = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
        width: 100%;
        height: 42.0rem;
        display: flex;
        justify-content: center;
        flex-direction: row;
        border-radius: 8px;
      
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
             border-radius: 4px;
             height: 2.8rem;
             svg {
                 color: #fff;
             }
         }
`

export const Navegador = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;

    button {
        width: 40%;
        font-size: 1.2rem;
        margin: 8px 0px 0px;
        padding: 12px 30px;
        text-decoration: none;
        transition: all 150ms linear 0s;
        width: 100%;
        cursor: pointer;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3295CF;
        border-radius: 4px;
        height: 3.0rem;
        width: 45%;

        &:hover {
            opacity: 1.9;
            background-color: #3295CF;
        }

        svg {
            color: #ffff;
        }
    }
    

    svg {
    }
`

export const Acao = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    button {
        font-size: 1.2rem;
        margin: 8px 0px 0px;
        padding: 12px 30px;
        text-decoration: none;
        transition: all 150ms linear 0s;
        width: 100%;
        cursor: pointer;
        border: 0;
        border-radius: 4px;
        height: 2.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3295CF;
        border-radius: 4px;
        
        width: 100%;
        height: 3.4rem;

        &:hover {
            opacity: 1.9;
            background-color: #ffff;
        }

        svg {
         color: #ffff;
        }

        a { 
            color: #ffff;
            font-weight: bold;
        }
    }

    svg {
        margin-right: 5px;
    }
`


