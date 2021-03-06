import React from "react";
import { createGlobalStyle, css } from "styled-components";

export default function UpdateLabel(props: any) {
    return (
        <>
            <GlobalStyle/>
            <span className="fd-update-label">{props.children ? props.children : 'UPDATE'}</span>
        </>
    );
}

const styles = css`
.fd-update-label {
    padding: 1px 8px;
    color: #ffeadb;
    background-color: #49a4a2;
    line-height: 2.0em;
    font-size: 0.625rem;
    letter-spacing: 2.5px;
    font-family: 'ProximaNovaBold', sans-serif;
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export {styles as UpdateLabelStyle};
