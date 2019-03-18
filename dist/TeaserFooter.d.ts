import React, { PureComponent } from "react";
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
export default class TeaserFooter extends PureComponent<Props, any> {
    render(): JSX.Element;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyle as TeaserFooterStyle };
