import { createGlobalStyle } from "styled-components";

const GlobalStype = createGlobalStyle`
    body {
        margin : 0;
        padding: 0;
        width: 100%;
        min-height : 100%;
        font-family : 'Roboto', sans-serif;
        overflow-x: hidden;
    }

    :root {
        --brown : #151515;
        --pink-slate : #CCAC98;
        --pink : #C9C2BF;
        --white : #DBCFCE;

        --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', 'Roboto', -apple-system, system-ui, sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;

        --border-radius : 2px;

        --letter-spacing : 0.215em;

        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 10px 0;
        font-weight: 600;
        color: var(--brown);
        line-height: 1.1;
    }

    section {
    margin : 0 auto;
    max-width: 900px;
    padding: 0 0 200px;

    @media (max-width: 1080px) {
      padding: 100px 90px;
    }
    
    @media (max-width: 768px) {
      padding: 80px 60px;
    }
    
    @media (max-width: 480px) {
      padding: 60px 30px;
    }
  }

`;

export default GlobalStype;
