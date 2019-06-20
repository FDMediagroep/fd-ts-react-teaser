import React from "react";
import { createGlobalStyle, css } from "styled-components";

export interface RelatedArticle {
    longread?: boolean;
    title: string;
    url: string;
    uuid: string;
}

export interface Props {
    items?: RelatedArticle[];
}

export default function TeaserRelated(props: Props) {
    if (!props.items) { return null; }
    return (
        <>
            <GlobalStyle/>
            <nav className="related">
                {props.items.map((item: RelatedArticle) => {
                    return (
                        <a key={item.uuid} className={`related-link${item.longread ? ' longread' : ''}`} href={item.url}>
                            <span className="related-title">{item.title}</span>
                            <i className="icon-chevron-right"/>
                        </a>
                    );
                })}
            </nav>
        </>
    );
}

const styles = css`
.related {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    clear: both;
    @media only screen and (min-width: 641px) {
        font-size: 1.0625rem;
    }
    a {
        color: #191919;
        text-decoration: none;
    }
    .related-link {
        margin: 0; // Reset for fd.screen.scss
        background: none; // Reset for fd.screen.scss
        box-shadow: none; // Reset for fd.screen.scss
        font-family: 'ProximaNovaRegular', sans-serif;
        border-top: 1px solid rgba(0,0,0,0.1);
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 10px;
        @media only screen and (min-width: 641px) {
            padding: 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 12px 15px;
        }
        i {
            color: #677381;
            margin-left: 10px;
            @media only screen and (min-width: 641px) {
                margin-left: 12px;
            }
            @media only screen and (min-width: 861px) {
                margin-left: 15px;
            }
        }
        &:hover {
            &, i {
                color: #49a4a2;
            }
        }
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export {styles as TeaserRelatedStyle};
