import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100vh;
        font: 62.5% Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
    }

    html,
    body {
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
        background-color: '#FAFBFC';
    }

    body {
        font-size: 1.6rem;
    }


    body, input, button , textarea {
        font: 14px arial , sans-serif;
    }

    @media (max-width: 1440px) {
        html {
            font-size: 57.5% ;
        }
    }
    @media (max-width: 1205px) {
        html {
            font-size: 55.5% ;
        }
    }
    @media (max-width: 1024px) {
        html {
            font-size: 52.5% ;
        }
    }
    @media (max-width: 768px) {
        html {
            font-size: 52.5% ;
        }
    }

    @media (max-width: 474px) {
        html {
            font-size: 50.5% ;
        }
    }
   
`;

