import React from "react";
import { createGlobalStyle, css } from "styled-components";
import Card, { getAllCardStyles, CardTypes } from "@fdmg/fd-card";
import TypoGraphy, {getAllTextStyles} from "@fdmg/fd-typography";
import TeaserFigure, { Theme, TeaserFigureStyle, ImageType } from "./TeaserFigure";
import TeaserFooter, { TeaserFooterStyle } from "./TeaserFooter";
import TeaserRelated, { TeaserRelatedStyle, RelatedArticle } from "./TeaserRelated";
import UpdateLabel, { UpdateLabelStyle } from "./UpdateLabel";

export {TeaserFigure, TeaserFigureStyle, Theme, ImageType};
export {TeaserFooter, TeaserFooterStyle};
export {TeaserRelated, TeaserRelatedStyle, RelatedArticle};
export {UpdateLabel, UpdateLabelStyle};

export interface SourceSet {
    media: '(max-width: 640px)' | '(max-width: 860px)' | '(min-width: 861px)';
    srcSet: string;
}

export interface Props {
    baseUrl: string;
    bookmarked?: boolean;
    cardStyle?: CardTypes;
    className?: string;
    comments?: number;
    date: string;
    description: string;
    figCaption?: string;
    hashTags?: string;
    hideFooter?: boolean;
    hideMeta?: boolean;
    hideRelated?: boolean;
    id: string;
    image?: ImageType;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    readableAge: string;
    related?: RelatedArticle[];
    shareTitle?: string;
    sourceSets?: SourceSet[];
    subject: string;
    theme?: Theme;
    title: string;
    updated?: boolean;
    url: string;
}

export default function Teaser(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <Card cardStyle={props.cardStyle ? props.cardStyle : 'default'} id={props.id} className={`fd-teaser${props.className ? ` ${props.className}` : ''}${props.hideMeta ? ' no-meta' : ''}`}>
                <a href={props.url}>
                    <TeaserFigure
                        figCaption={props.figCaption}
                        image={props.image}
                        sourceSets={props.sourceSets}
                        theme={props.theme}
                    />
                    {props.hideMeta ? null : <div className="meta">
                        {props.updated ? <UpdateLabel/> : <span className="prefix">{props.subject}</span>}
                        <time>{props.readableAge}</time>
                    </div>}
                    <div className="text-container">
                        <TypoGraphy textStyle="teaser-h"><h1>{props.title}</h1></TypoGraphy>
                        {props.description ? <p className="intro">{props.description}</p> : null}
                    </div>
                </a>
                {props.hideRelated ? null : <TeaserRelated
                    items={props.related}
                />}
                {props.hideFooter ? null : <TeaserFooter
                    baseUrl={props.baseUrl}
                    bookmarked={props.bookmarked}
                    comments={props.comments}
                    date={props.date}
                    description={props.description}
                    hashTags={props.hashTags}
                    onBookmark={props.onBookmark}
                    shareTitle={props.shareTitle}
                    subject={props.subject}
                    teaserId={props.id}
                    title={props.title}
                    url={props.url}
                />}
            </Card>
        </>
    );
}

const styles = css`
.fd-teaser {
    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;

    @media only screen and (min-width: 641px) {
        &:not(.no-meta) {
            padding-top: 45px; /* Hack to make meta stick to top of component and the rest of the content stay below. */
        }
    }

    .meta,
    .text-container {
        padding: 0 10px;
        @media only screen and (min-width: 641px) {
            padding: 0 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 0 15px;
        }
    }

    > a {
        width: 100%;
        color: #191919;
        display: inline-block;
        text-decoration: none;
        &:hover h1 {
            color: #49a4a2;
        }
        h1 {
            margin: 0;
        }

        figure {
            margin: 0;
            margin-bottom: .625rem;
            @media only screen and (min-width: 641px) {
                float: right;
                width: 115px;
                margin: 0 0 12px 10px;
                padding: 0 12px;
            }
            @media only screen and (min-width: 861px) {
                padding: 0 15px;
                margin-bottom: 15px;
            }

            img {
                display: block;
                width: 100%;
            }
        }

        > .meta {
            font-family: 'ProximaNovaRegular',sans-serif;
            line-height: 1.2em;
            color: #677381;
            position: static;
            top: 0;
            left: 0;
            right: 0;
            font-size: 0.8125rem;
            @media only screen and (min-width: 641px) {
                position: absolute;
                top: 1rem;
                font-size: 0.875rem;
            }
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            margin: 0 0 .5rem 0;
        }
        .intro {
            margin: .2rem 0 .5rem 0;
            font-size: 1rem;
            @media only screen and (min-width: 641px) {
                font-size: 1.0625rem;
            }
        }
    }

    &.no-meta {
        > a {
            @media only screen and (min-width: 641px) {
                margin-top: 12px;
            }
            @media only screen and (min-width: 861px) {
                margin-top: 15px;
            }
        }
    }
    &.longread a:hover h1 {
        color: #f05031;
    }
}
`;

/**
 * Used for the FD Style Guide Kitchensink
 */
export const TeaserStyle = css`
${getAllCardStyles()}
${getAllTextStyles(['teaser-h'])}
${UpdateLabelStyle}
${TeaserFigureStyle}
${TeaserRelatedStyle}
${TeaserFooterStyle}
${styles}
`;

const GlobalStyle = createGlobalStyle`${TeaserStyle}`;
