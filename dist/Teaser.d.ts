import React from "react";
import { CardTypes } from "@fdmg/fd-card";
import TeaserFigure, { Theme, TeaserFigureStyle, ImageType } from "./TeaserFigure";
import TeaserFooter, { TeaserFooterStyle } from "./TeaserFooter";
import TeaserRelated, { TeaserRelatedStyle, RelatedArticle } from "./TeaserRelated";
import UpdateLabel, { UpdateLabelStyle } from "./UpdateLabel";
export { TeaserFigure, TeaserFigureStyle, Theme, ImageType };
export { TeaserFooter, TeaserFooterStyle };
export { TeaserRelated, TeaserRelatedStyle, RelatedArticle };
export { UpdateLabel, UpdateLabelStyle };
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
export default function Teaser(props: Props): JSX.Element;
/**
 * Used for the FD Style Guide Kitchensink
 */
export declare const TeaserStyle: import("styled-components").FlattenSimpleInterpolation;
