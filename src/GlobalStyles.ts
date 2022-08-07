import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 1280px;
        --white: #fff
        --lightCrimson: #DC143C;
        --medGrey: #FF1493;
        --darkGrey: #FF1493;
        --fontSuperBig: 2.5rem
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;  
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {

        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        /* background: var(--lightGrey); */

        h1 {

            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
            padding-bottom: 3rem

        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white)
        }

    }

    .parent-buttons { 
        /* overflow:auto; // stops buttons wrapping */
        white-space:nowrap; // stops buttons wrapping
        margin: 1rem;
        padding: 1rem;
        text-align: center;
        /* margin-left: -12% */
        ;
    }


`;
