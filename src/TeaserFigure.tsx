import React, { PureComponent } from "react";
import { createGlobalStyle, css } from "styled-components";

export interface SourceSetType {
    media: string;
    srcSet: string;
}

export interface ImageType {
    alt: string;
    title?: string;
    src: string;
}

export type Theme = 'theme1'
    | 'theme2'
    | 'theme3'
    | 'theme4'
    | 'theme5'
    | 'theme6'
    | 'theme7'
    | 'theme8'
;

export interface Props {
    sourceSets?: SourceSetType[];
    image?: ImageType;
    figCaption?: string;
    theme?: Theme;
}

export default class TeaserFigure extends PureComponent<Props, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <figure className={`fd-teaser-figure${this.props.theme ? ` themed ${this.props.theme}` : ''}`}>
                    <picture>
                        {this.props.sourceSets ? this.props.sourceSets.map((srcSet) => <source key={srcSet.media} media={srcSet.media} srcSet={srcSet.srcSet}/>) : null}
                        {this.props.image ? <img src={this.props.image.src} alt={this.props.image.alt} title={this.props.image ? this.props.image.title : ''}/> : null}
                    </picture>
                    {this.props.theme ? <figcaption>{this.props.figCaption}</figcaption> : null}
                </figure>
            </>
        );
    }
}

const styles = css`
.fd-teaser-figure {
    &.themed {
        position: relative;
        &:before {
            content: "";
            display: block;
            width: 100%;
            padding-top: 56.333%;
        }
        &:after {
            position: absolute;
            content: "";
            width: 0px;
            height: 0px;
            border: 7.5px solid transparent;
            margin-top: -7.5px;
            border-bottom-color: #ffeadb;
            border-left-color: transparent;
            top: auto;
            bottom: -1px;
            left: 50%;
            margin-left: -7.5px;
        }
        picture {
            position: absolute;
            width: 33%;
            top: 12%;
            left: 50%;
            margin: 0 -16.5%;
            border-radius: 50%;
            overflow: hidden;
        }

        figcaption {
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 12%;
            font-size: 1.1875rem;
            color: #ffeadb;
            padding: 0 10px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: 'ProximaNovaBold', sans-serif;
            -webkit-font-smoothing: antialiased;
            @media only screen and (max-width: 640px) {
                font-size: 1.25rem;
            }
        }
    }

    &.theme1 {
        background-color: #677381;
    }
    &.theme2 {
        background-color: #f05031;
    }
    &.theme3 {
        background-color: #ddac68;
    }
    &.theme4 {
        background-color: #f3736b;
    }
    &.theme5 {
        background-color: #917caa;
    }
    &.theme6 {
        background-color: #4393ab;
    }
    &.theme7 {
        background-color: #49a4a2;
    }
    &.theme8 {
        background-color: #c5324b;
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export {styles as TeaserFigureStyle};
