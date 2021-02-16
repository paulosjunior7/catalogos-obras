
import styled , { css } from 'styled-components';
import { FiX } from 'react-icons/fi';


export const Background  = styled.div`
    background-color: rgba(0,0,0,0.3);
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
   // left: 200px;
   // top: 40px;
    color: black;
    justify-content: center;
    align-items: center;

`

interface Props {
    tamanhoReduzido: boolean;
}

export const Content = styled.div<Props>`
    max-width: 90vw;
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
`

export const CloseModalButton = styled(FiX)`
    cursor: pointer;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    color: #fff;
`;

export const Head = styled.div`
    background-color: transparent;
    height: 44px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    bottom: 0;

    button {
        background-color: #236BAB;
        color: #fff;
        height: 35px;
        width: 100%;
        margin-right: 3px;
        align-items: center;
        display: flex;
        justify-content: center;
        border-radius: 4px;
        border: 0;
        font-weight: bold;
        font-size: 1.5rem;
        cursor: pointer;
        &:last-child {
            background-color: #ff6961;
            color: #fff;
        }
        
    }
    
    a {
        font-weight: 500;
        font-size: 2.0rem;
        color: #ccc;
    }
    
    svg {
        cursor: pointer;
        color: #359ECB;
        margin-right: 1rem;
        margin-left: 1rem;
    }

   
`
export const Body = styled.div`
    width: 100%;

    display: flex;
    
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;

    @media (max-width: 2560px) { 
        width: 100%;
    }
`
