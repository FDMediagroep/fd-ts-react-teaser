import { PureComponent } from "react";
export interface SourceSetType {
    media: string;
    srcSet: string;
}
export interface ImageType {
    alt: string;
    title?: string;
    src: string;
}
export declare type Theme = 'theme1' | 'theme2' | 'theme3' | 'theme4' | 'theme5' | 'theme6' | 'theme7' | 'theme8';
export interface Props {
    sourceSets?: SourceSetType[];
    image?: ImageType;
    figCaption?: string;
    theme?: Theme;
}
export default class TeaserFigure extends PureComponent<Props, any> {
    render(): JSX.Element;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyle as TeaserFigureStyle };
