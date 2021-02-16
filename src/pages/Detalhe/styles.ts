import styled from 'styled-components';


import ReactWhatsapp from 'react-whatsapp';


export const Container = styled.div`
    width: 99vw;
    height: auto;
    margin: 0   ;
    display: flex;
    justify-content: center;
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
    margin-top: 1vw;
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-left: 30px;
    padding-right: 30px;
    
    margin-bottom: 12px;
    @media(max-width: 845px) {
        flex-direction: column;
    }
`


export const Section2 = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    padding-top: 32px;
    
`

export const Contato = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 8px;
    justify-content: flex-start;

    div {
        display: flex;

        a {
        }
    }
`

export const Whatsapp = styled(ReactWhatsapp)`
    height: 32px;
    padding : 8px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    border: 0;
    background-color: #2FB86E;
    cursor: pointer;

    &:last-child {
        margin-left: 4px;
    }
    a {
        font-size: 1.5rem;
        color: #fff;
    }

    svg {
        margin-right: 4px;
        color: #fff;

    }
`

export const Section = styled.div`
    line-height: 20px;
    width: 100%;
    max-width: 740px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 8px;

    h2 {
        //margin: 49px 0 22px;
        margin-bottom: 20px;
        font-size: 2.0rem;
        margin-top: 14px;
    }

    p {
        font-size: 1.5rem;

        @media(max-width: 450px) {
            font-size: 1.7rem;
        }
        color: #333;
        line-height: 3.2rem;
        font-weight: bold;

        a {
            font-weight: normal;

        }
    }

    ul, li {
        margin-left: 15px;
        font-size:  1.6rem;
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
    
   // flex-wrap: wrap;
  width: 100%;
  max-width: 98rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(10rem, 1fr));
  grid-row-gap: 1.5rem;
  
  @media(max-width: 450px) {
    grid-column-gap: 4rem;
  }
  justify-items: center;
  


    div {
         
            &:first-child {
            justify-content: center;
            display: flex;
         }

        .c-loader {
        animation: is-rotating 1s infinite;
        border: 6px solid #e5e5e5;
        border-radius: 50%;
        border-top-color: #51d4db;
        height: 50px;
        width: 50px;

       

        @keyframes is-rotating {
            to {
                transform: rotate(1turn);
            }
        }
    }
    }


   
    
`;

interface Props {
    img : string;
}
export const Imagem = styled.div<Props>`
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    background-image: url(${(props) => props.img});
    width: 20.5rem;
    height: 20.5rem;
    background-size: cover; 
    /* img {
        width: 100%;
        overflow: hidden;
        position: relative;
    } */
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
        width: 100%;
        width: 20%;
        font-size: 1.2rem;
        margin: 7px 0px 0px;
        padding: 12px 30px;
        text-decoration: none;
        transition: all 150ms linear 0s;
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

    a {
        margin-top: 1.4rem;
        margin-left: 3px;
        margin-right: 3px;
    }

    svg {
    }

    margin-bottom: 8px;
`

export const Acao = styled.div`
    @media(max-width: 768px) {
        display: none;
    }

    display: flex;
    justify-content: space-between;
    flex-direction: row;

    button {
        font-size: 1.2rem;
        margin: 7px 0px 0px;
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


export const ImagemModal = styled.img`
    width: 30vw;

    @media(max-width: 450px) {
       width: 90vw;
    }

    //style={{ maxWidth: '22vw' , @media( maxWidht : '400px') { }}
`