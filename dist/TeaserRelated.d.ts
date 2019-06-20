export interface RelatedArticle {
    longread?: boolean;
    title: string;
    url: string;
    uuid: string;
}
export interface Props {
    items?: RelatedArticle[];
}
export default function TeaserRelated(props: Props): JSX.Element | null;
declare const styles: import("styled-components").FlattenSimpleInterpolation;
export { styles as TeaserRelatedStyle };
