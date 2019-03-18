import React, { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
import TeaserFigure, { Theme, TeaserFigureStyle } from "./TeaserFigure";
import TeaserFooter, { TeaserFooterStyle } from "./TeaserFooter";
import TeaserRelated, { TeaserRelatedStyle, RelatedArticle } from "./TeaserRelated";
import UpdateLabel, { UpdateLabelStyle } from "./UpdateLabel";
export { TeaserFigure, TeaserFigureStyle, Theme };
export { TeaserFooter, TeaserFooterStyle };
export { TeaserRelated, TeaserRelatedStyle, RelatedArticle };
export { UpdateLabel, UpdateLabelStyle };
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
    id: string;
    image?: {
        src: string;
        alt: string;
    };
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    readableAge: string;
    related?: RelatedArticle[];
    shareTitle?: string;
    sourceSets?: [{
        media: '(max-width: 640px)' | '(max-width: 860px)' | '(min-width: 861px)';
        srcSet: string;
    }];
    subject: string;
    theme?: Theme;
    title: string;
    updated?: boolean;
    url: string;
}
export default class Teaser extends PureComponent<Props, any> {
    state: any;
    render(): JSX.Element;
}
/**
 * Used for the FD Style Guide Kitchensink
 */
export declare const TeaserStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
