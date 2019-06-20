import React from "react";
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
export default function TeaserFooter(props: Props): JSX.Element;
declare const styles: import("styled-components").FlattenSimpleInterpolation;
export { styles as TeaserFooterStyle };
