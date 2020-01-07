import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}
    @font-face { font-family: '행복고흥L'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/행복고흥L.woff') format('woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'TlabShin'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.3/TlabShinYBA1.woff') format('woff'); font-weight: normal; font-style: normal;}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:boerder-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
    }
`;

export default globalStyles;
