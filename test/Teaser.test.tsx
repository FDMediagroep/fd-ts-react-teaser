import TestRenderer from 'react-test-renderer';
import Teaser from '../src/Teaser';
import React from 'react';
import uniqid from 'uniqid';

describe('Teaser', () => {
    const teaserData: any = {
        id: "1286721",
        baseUrl: "https://fd.nl",
        url: "https://fd.nl/economie-politiek/1286721/amsterdam-doet-er-toe",
        image: {
            src: 'https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=',
            alt: 'Amsterdam doet ertoe'
        },
        sourceSets: [{
            media: '(max-width: 640px)',
            srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=`
        }, {
            media: '(max-width: 860px)',
            srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=`
        }, {
            media: '(min-width: 861px)',
            srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=`
        }],
        figCaption: "Amsterdam doet ertoe",
        subject: "Buitenland",
        comments: 1,
        readableAge: "34 min",
        date: "17 Nov 1981",
        title: "Amsterdam doet ertoe",
        description: "Een wethouder Verkeer en Vervoer, in Davos? Zeker! Wethouder Sharon Dijksma legt op het World Economic Forum uit hoe Amsterdam omgaat met duurzame mobiliteit.",
        related: [{
            longread: true,
            title: '"Als vrouw moet je altijd onafhankelijk zijn"',
            url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
            uuid: uniqid()
        }, {
            title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
            url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
            uuid: uniqid()
        }]
    };

    test('renders correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders bookmarked correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData} bookmarked={true}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders multiple comments correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData} comments={99}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders hidden footer correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData} hideFooter={true}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders hidden meta correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData} hideMeta={true}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders hidden related correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData} hideRelated={true}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders longread correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData} cardStyle='longread'/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders persoonlijk correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData} cardStyle='persoonlijk'/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders persoonlijk longread correctly', () => {
        let teaser = TestRenderer.create(<Teaser {...teaserData} cardStyle='persoonlijk longread'/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

});
