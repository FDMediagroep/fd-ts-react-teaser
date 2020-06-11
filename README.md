> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-teaser.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-teaser)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-teaser/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-teaser?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-teaser.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-teaser)

# fd-teaser

FD-themed default teaser.

# Installation

-   Run `npm i -D @fdmg/fd-teaser`

# Demo

To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.

-   [Demo](http://static.fd.nl/react/teaser/demo.html)

# Usage

```
import Teaser from '@fdmg/fd-teaser';
...
<Teaser
    id="123"
    title="Congo verwacht weinig van Nederlands ebola-vaccin"
    description="Autoriteiten in het Afrikaanse land vrezen toename van verzet en verwarring bij inzet van tweede vaccin, dat in Nederland wordt gemaakt."
    baseUrl=""
    url="/economie-politiek/1304718/congo-verwacht-weinig-van-nederlands-ebola-vaccin"
    readableAge="2 uur"
    date="13:11 13-06-2019"
    subject="buitenland"
    image={{
        src: 'https://images.fd.nl/BjzAQW5j11hip-ad0R6OxM0CJoA.jpg?fit=crop&crop=faces&auto=format&w=599&h=337&q=45&fm=jpg&cs=tinysrgb&rect=.0%2C.0787992495309568%2C.9999999999999999%2C.8442776735459663',
        alt: 'Congo verwacht weinig van Nederlands ebola-vaccin'
    }}
    sourceSets={[{
        media: '(max-width: 640px)',
        srcSet: `https://images.fd.nl/BjzAQW5j11hip-ad0R6OxM0CJoA.jpg?fit=crop&crop=faces&auto=format&w=599&h=337&q=45&fm=jpg&cs=tinysrgb&rect=.0%2C.0787992495309568%2C.9999999999999999%2C.8442776735459663`
    }, {
        media: '(max-width: 860px)',
        srcSet: `https://images.fd.nl/BjzAQW5j11hip-ad0R6OxM0CJoA.jpg?fit=crop&crop=faces&auto=format&w=115&h=115&q=45&fm=jpg&cs=tinysrgb&rect=.16125%2C.0%2C.66625%2C.9999999999999999`
    }, {
        media: '(min-width: 861px)',
        srcSet: `https://images.fd.nl/BjzAQW5j11hip-ad0R6OxM0CJoA.jpg?fit=crop&crop=faces&auto=format&w=115&h=115&q=45&fm=jpg&cs=tinysrgb&rect=.16125%2C.0%2C.66625%2C.9999999999999999`
    }]}
    related={[{
        longread: true,
        title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
        url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
        uuid: "12345"
    }, {
        title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
        url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
        uuid: "123456"
    }]}
/>
```
