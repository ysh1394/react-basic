import { createGlobalStyle } from "styled-components";
// import { normalize } from "styled-normalize";

/* ${normalize} */
const GlobalStyle = createGlobalStyle`

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
  }
  // antd.css와 기존 css 겹칩으로 인한 설정
  ul {
    margin: 0
  }
  .lnb {
    margin-bottom:0
  }
  .category, .api-result-text{
    margin:0
  }
  button {
    border:0;
  }
  p,div {
    margin :0;
  }
  
  .ant-modal-content {
    min-width: min-content;
  }

  .ant-modal-confirm-body {
    display: flex;
    align-items: center;
  }

  .ant-modal-confirm-content {
    margin :0 !important;
  }

  .ant-tooltip {
    max-width:unset;
  }



`;

export default GlobalStyle;
