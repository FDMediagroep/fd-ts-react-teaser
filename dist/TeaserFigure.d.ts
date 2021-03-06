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
export default function TeaserFigure(props: Props): JSX.Element;
declare const styles: import("styled-components").FlattenSimpleInterpolation;
export { styles as TeaserFigureStyle };
