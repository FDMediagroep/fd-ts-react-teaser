import React from "react";
import { createGlobalStyle, css } from "styled-components";

export interface Props {
    baseUrl: string;
    bookmarked?: boolean;
    bookmarkTitle?: string;
    className?: string;
    comments?: number;
    date?: string;
    description: string;
    hashTags?: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    removeBookmarkTitle?: string;
    shareTitle?: string;
    subject: string;
    teaserId: string;
    title: string;
    url: string;
}

export default function TeaserFooter(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <footer className={`fd-teaser-footer${props.className ? ` ${props.className}` : ''}`}>
                <menu>
                    <span className="placeholder"/>
                    <a className="share-social" href="javascript: void(0);">
                        <i
                            data-url={props.url}
                            data-id={props.teaserId}
                            data-title={props.title}
                            data-section={props.subject}
                            data-hashtags={props.hashTags}
                            className="icon-share-alt"
                            title={props.shareTitle ? props.shareTitle : 'Delen'}
                        />
                        <span className="icon-label">Delen</span>
                    </a>
                    <a
                        href="javascript: void(0);"
                        className={`favorite${props.bookmarked ? ' selected' : ''}`}
                        data-key={props.teaserId}
                        data-addurl='/add-favorite'
                        data-deleteurl='/delete-favorite'
                        data-title={props.title}
                        data-url={props.url}
                        data-articleid={props.teaserId}
                        title="Bewaren"
                        id={`favorite${props.teaserId}`}
                        onClick={props.onBookmark}
                    >
                        <i className="icon-bookmark" title={props.bookmarkTitle ? props.bookmarkTitle : 'Bewaren'}/>
                        <i className="icon-bookmark1" title={props.removeBookmarkTitle ? props.removeBookmarkTitle : 'Verwijder van bewaarlijst'}/>
                        <span className="icon-label">Bewaren</span>
                    </a>
                    <a data-articleid={props.teaserId} className="comments-link" href={`${props.url}#comments`}>
                        {props.comments ? (
                            <>
                                <i className="icon-comment-alt"/>
                                <span className="comments-count">{props.comments}</span>
                                <span className="comments-suffix">{props.comments > 1 ? 'reacties' : 'reactie'}</span>
                            </>
                        ) : null}
                    </a>
                </menu>
            </footer>
        </>
    );
}

const styles = css`
.fd-teaser-footer {
    clear: both;
    padding: 0 10px;
    @media only screen and (min-width: 641px) {
        padding: 0 12px;
    }
    @media only screen and (min-width: 861px) {
        padding: 0 15px;
    }
    border-top: 1px solid rgba(0,0,0,0.1);
    line-height: 2.8125rem;
    min-height: 2.8125rem;
    user-select: none;

    a {
        text-decoration: none;
        color: #191919;
    }

    menu {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #677381;
        font-family: 'ProximaNovaRegular', sans-serif;
        min-height: 44px;
        line-height: 1.1em;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }

        > span.placeholder {
            flex: 1 1 auto;
        }

        > a {
            flex: 0 0 auto;
            color: #677381;
            font-family: 'ProximaNovaRegular', sans-serif;
            display: inline-flex;
            align-items: center;
            padding-left: 1rem;
            &:empty {
                padding-left: 0;
            }
            @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
                /* IE10+ specific styles go here */
                padding-top: .5rem;
            }

            i, span {
                font-size: 0.8125rem;
                cursor: pointer;
            }

            .comments-suffix {
                margin-left: .2rem;
            }
        }

        i {
            cursor: pointer;
            padding: .5rem;
        }

        .share-social {
            display: inline-flex;
            align-items: center;
        }

        .favorite {
            overflow: unset; // Reset fd styles
            padding-right: unset; // Reset fd styles
            .icon-bookmark1 {
                display: none;
            }
            &.selected {
                .icon-bookmark {
                    display: none;
                }
                .icon-bookmark1 {
                    display: inline;
                }
            }
        }

        @media only screen and (max-width: 640px) {
            .icon-label,
            .comments-suffix {
                display: none;
            }
        }
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export {styles as TeaserFooterStyle};
