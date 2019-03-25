module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e){n.exports=require("react")},function(n,e){n.exports=require("styled-components")},function(n,e,t){n.exports=t(3)},function(n,e,t){"use strict";var r,a=this&&this.__extends||(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),o=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},i=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var l=i(t(0)),s=t(1),d=i(t(4)),p=i(t(5)),c=i(t(6));e.TeaserFigure=c.default,e.TeaserFigureStyle=c.TeaserFigureStyle;var m=i(t(7));e.TeaserFooter=m.default,e.TeaserFooterStyle=m.TeaserFooterStyle;var f=i(t(8));e.TeaserRelated=f.default,e.TeaserRelatedStyle=f.TeaserRelatedStyle;var u=i(t(9));e.UpdateLabel=u.default,e.UpdateLabelStyle=u.UpdateLabelStyle;var h=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return a(e,n),e.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(x,null),l.default.createElement(d.default,{cardStyle:this.props.cardStyle?this.props.cardStyle:"default",id:this.props.id,className:"fd-teaser"+(this.props.className?" "+this.props.className:"")+(this.props.hideMeta?" no-meta":"")},l.default.createElement("a",{href:this.props.url},l.default.createElement(c.default,{figCaption:this.props.figCaption,image:this.props.image,sourceSets:this.props.sourceSets,theme:this.props.theme}),this.props.hideMeta?null:l.default.createElement("div",{className:"meta"},this.props.updated?l.default.createElement(u.default,null):l.default.createElement("span",{className:"prefix"},this.props.subject),l.default.createElement("time",null,this.props.readableAge)),l.default.createElement("div",{className:"text-container"},l.default.createElement(p.default,{textStyle:"teaser-h"},l.default.createElement("h1",null,this.props.title)),this.props.description?l.default.createElement("p",{className:"intro"},this.props.description):null)),this.props.hideRelated?null:l.default.createElement(f.default,{items:this.props.related}),this.props.hideFooter?null:l.default.createElement(m.default,{baseUrl:this.props.baseUrl,bookmarked:this.props.bookmarked,comments:this.props.comments,date:this.props.date,description:this.props.description,hashTags:this.props.hashTags,onBookmark:this.props.onBookmark,shareTitle:this.props.shareTitle,subject:this.props.subject,teaserId:this.props.id,title:this.props.title,url:this.props.url})))},e}(l.PureComponent);e.default=h;var g,y,x=s.createGlobalStyle(g||(g=o(["\n.fd-teaser {\n    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n\n    @media only screen and (min-width: 641px) {\n        &:not(.no-meta) {\n            padding-top: 45px; /* Hack to make meta stick to top of component and the rest of the content stay below. */\n        }\n    }\n\n    .meta,\n    .text-container {\n        padding: 0 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 0 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 0 15px;\n        }\n    }\n\n    > a {\n        width: 100%;\n        color: #191919;\n        display: inline-block;\n        text-decoration: none;\n        &:hover h1 {\n            color: #49a4a2;\n        }\n        h1 {\n            margin: 0;\n        }\n\n        figure {\n            margin: 0;\n            margin-bottom: .625rem;\n            @media only screen and (min-width: 641px) {\n                float: right;\n                width: 115px;\n                margin: 0 0 12px 10px;\n                padding: 0 12px;\n            }\n            @media only screen and (min-width: 861px) {\n                padding: 0 15px;\n                margin-bottom: 15px;\n            }\n\n            img {\n                display: block;\n                width: 100%;\n            }\n        }\n\n        > .meta {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            line-height: 1.2em;\n            color: #677381;\n            position: static;\n            top: 0;\n            left: 0;\n            right: 0;\n            font-size: 0.8125rem;\n            @media only screen and (min-width: 641px) {\n                position: absolute;\n                top: 1rem;\n                font-size: 0.875rem;\n            }\n            display: flex;\n            justify-content: space-between;\n            overflow: hidden;\n            margin: 0 0 .5rem 0;\n        }\n        .intro {\n            margin: .2rem 0 .5rem 0;\n            font-size: 1rem;\n            @media only screen and (min-width: 641px) {\n                font-size: 1.0625rem;\n            }\n        }\n    }\n\n    &.no-meta {\n        > a {\n            @media only screen and (min-width: 641px) {\n                margin-top: 12px;\n            }\n            @media only screen and (min-width: 861px) {\n                margin-top: 15px;\n            }\n        }\n    }\n    &.longread a:hover h1 {\n        color: #f05031;\n    }\n}\n"],["\n.fd-teaser {\n    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n\n    @media only screen and (min-width: 641px) {\n        &:not(.no-meta) {\n            padding-top: 45px; /* Hack to make meta stick to top of component and the rest of the content stay below. */\n        }\n    }\n\n    .meta,\n    .text-container {\n        padding: 0 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 0 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 0 15px;\n        }\n    }\n\n    > a {\n        width: 100%;\n        color: #191919;\n        display: inline-block;\n        text-decoration: none;\n        &:hover h1 {\n            color: #49a4a2;\n        }\n        h1 {\n            margin: 0;\n        }\n\n        figure {\n            margin: 0;\n            margin-bottom: .625rem;\n            @media only screen and (min-width: 641px) {\n                float: right;\n                width: 115px;\n                margin: 0 0 12px 10px;\n                padding: 0 12px;\n            }\n            @media only screen and (min-width: 861px) {\n                padding: 0 15px;\n                margin-bottom: 15px;\n            }\n\n            img {\n                display: block;\n                width: 100%;\n            }\n        }\n\n        > .meta {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            line-height: 1.2em;\n            color: #677381;\n            position: static;\n            top: 0;\n            left: 0;\n            right: 0;\n            font-size: 0.8125rem;\n            @media only screen and (min-width: 641px) {\n                position: absolute;\n                top: 1rem;\n                font-size: 0.875rem;\n            }\n            display: flex;\n            justify-content: space-between;\n            overflow: hidden;\n            margin: 0 0 .5rem 0;\n        }\n        .intro {\n            margin: .2rem 0 .5rem 0;\n            font-size: 1rem;\n            @media only screen and (min-width: 641px) {\n                font-size: 1.0625rem;\n            }\n        }\n    }\n\n    &.no-meta {\n        > a {\n            @media only screen and (min-width: 641px) {\n                margin-top: 12px;\n            }\n            @media only screen and (min-width: 861px) {\n                margin-top: 15px;\n            }\n        }\n    }\n    &.longread a:hover h1 {\n        color: #f05031;\n    }\n}\n"])));e.TeaserStyle=s.createGlobalStyle(y||(y=o(["\n","\n","\n","\n","\n","\n","\n","\n"],["\n","\n","\n","\n","\n","\n","\n","\n"])),d.getAllCardStyles().globalStyle.rules,p.getAllTextStyles(["teaser-h"]).globalStyle.rules,u.UpdateLabelStyle.globalStyle.rules,c.TeaserFigureStyle.globalStyle.rules,f.TeaserRelatedStyle.globalStyle.rules,m.TeaserFooterStyle.globalStyle.rules,x.globalStyle.rules)},function(n,e){n.exports=require("@fdmg/fd-card")},function(n,e){n.exports=require("@fdmg/fd-typography")},function(n,e,t){"use strict";var r,a=this&&this.__extends||(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),o=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},i=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var l=i(t(0)),s=t(1),d=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return a(e,n),e.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(c,null),l.default.createElement("figure",{className:"fd-teaser-figure"+(this.props.theme?" themed "+this.props.theme:"")},l.default.createElement("picture",null,this.props.sourceSets?this.props.sourceSets.map(function(n){return l.default.createElement("source",{key:n.media,media:n.media,srcSet:n.srcSet})}):null,this.props.image?l.default.createElement("img",{src:this.props.image.src,alt:this.props.image.alt,title:this.props.image?this.props.image.title:""}):null),this.props.theme?l.default.createElement("figcaption",null,this.props.figCaption):null))},e}(l.PureComponent);e.default=d;var p,c=s.createGlobalStyle(p||(p=o(['\n.fd-teaser-figure {\n    &.themed {\n        position: relative;\n        &:before {\n            content: "";\n            display: block;\n            width: 100%;\n            padding-top: 56.333%;\n        }\n        &:after {\n            position: absolute;\n            content: "";\n            width: 0px;\n            height: 0px;\n            border: 7.5px solid transparent;\n            margin-top: -7.5px;\n            border-bottom-color: #ffeadb;\n            border-left-color: transparent;\n            top: auto;\n            bottom: -1px;\n            left: 50%;\n            margin-left: -7.5px;\n        }\n        picture {\n            position: absolute;\n            width: 33%;\n            top: 12%;\n            left: 50%;\n            margin: 0 -16.5%;\n            border-radius: 50%;\n            overflow: hidden;\n        }\n\n        figcaption {\n            display: block;\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: 12%;\n            font-size: 1.1875rem;\n            color: #ffeadb;\n            padding: 0 10px;\n            text-align: center;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            font-family: \'ProximaNovaBold\', sans-serif;\n            -webkit-font-smoothing: antialiased;\n            @media only screen and (max-width: 640px) {\n                font-size: 1.25rem;\n            }\n        }\n    }\n\n    &.theme1 {\n        background-color: #677381;\n    }\n    &.theme2 {\n        background-color: #f05031;\n    }\n    &.theme3 {\n        background-color: #ddac68;\n    }\n    &.theme4 {\n        background-color: #f3736b;\n    }\n    &.theme5 {\n        background-color: #917caa;\n    }\n    &.theme6 {\n        background-color: #4393ab;\n    }\n    &.theme7 {\n        background-color: #49a4a2;\n    }\n    &.theme8 {\n        background-color: #c5324b;\n    }\n}\n'],['\n.fd-teaser-figure {\n    &.themed {\n        position: relative;\n        &:before {\n            content: "";\n            display: block;\n            width: 100%;\n            padding-top: 56.333%;\n        }\n        &:after {\n            position: absolute;\n            content: "";\n            width: 0px;\n            height: 0px;\n            border: 7.5px solid transparent;\n            margin-top: -7.5px;\n            border-bottom-color: #ffeadb;\n            border-left-color: transparent;\n            top: auto;\n            bottom: -1px;\n            left: 50%;\n            margin-left: -7.5px;\n        }\n        picture {\n            position: absolute;\n            width: 33%;\n            top: 12%;\n            left: 50%;\n            margin: 0 -16.5%;\n            border-radius: 50%;\n            overflow: hidden;\n        }\n\n        figcaption {\n            display: block;\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: 12%;\n            font-size: 1.1875rem;\n            color: #ffeadb;\n            padding: 0 10px;\n            text-align: center;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            font-family: \'ProximaNovaBold\', sans-serif;\n            -webkit-font-smoothing: antialiased;\n            @media only screen and (max-width: 640px) {\n                font-size: 1.25rem;\n            }\n        }\n    }\n\n    &.theme1 {\n        background-color: #677381;\n    }\n    &.theme2 {\n        background-color: #f05031;\n    }\n    &.theme3 {\n        background-color: #ddac68;\n    }\n    &.theme4 {\n        background-color: #f3736b;\n    }\n    &.theme5 {\n        background-color: #917caa;\n    }\n    &.theme6 {\n        background-color: #4393ab;\n    }\n    &.theme7 {\n        background-color: #49a4a2;\n    }\n    &.theme8 {\n        background-color: #c5324b;\n    }\n}\n'])));e.TeaserFigureStyle=c},function(n,e,t){"use strict";var r,a=this&&this.__extends||(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),o=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},i=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var l=i(t(0)),s=t(1),d=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return a(e,n),e.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(c,null),l.default.createElement("footer",{className:"fd-teaser-footer"+(this.props.className?" "+this.props.className:"")},l.default.createElement("menu",null,l.default.createElement("span",{className:"placeholder"}),l.default.createElement("a",{className:"share-social",href:"javascript: void(0);"},l.default.createElement("i",{"data-url":this.props.url,"data-id":this.props.teaserId,"data-title":this.props.title,"data-section":this.props.subject,"data-hashtags":this.props.hashTags,className:"icon-share-alt",title:this.props.shareTitle?this.props.shareTitle:"Delen"}),l.default.createElement("span",{className:"icon-label"},"Delen")),l.default.createElement("a",{href:"javascript: void(0);",className:"favorite"+(this.props.bookmarked?" selected":""),"data-key":this.props.teaserId,"data-addurl":"/add-favorite","data-deleteurl":"/delete-favorite","data-title":this.props.title,"data-url":this.props.url,"data-articleid":this.props.teaserId,title:"Bewaren",id:"favorite"+this.props.teaserId,onClick:this.props.onBookmark},l.default.createElement("i",{className:"icon-bookmark",title:this.props.bookmarkTitle?this.props.bookmarkTitle:"Bewaren"}),l.default.createElement("i",{className:"icon-bookmark1",title:this.props.removeBookmarkTitle?this.props.removeBookmarkTitle:"Verwijder van bewaarlijst"}),l.default.createElement("span",{className:"icon-label"},"Bewaren")),l.default.createElement("a",{"data-articleid":this.props.teaserId,className:"comments-link",href:this.props.url+"#comments"},this.props.comments?l.default.createElement(l.default.Fragment,null,l.default.createElement("i",{className:"icon-comment-alt"}),l.default.createElement("span",{className:"comments-count"},this.props.comments),l.default.createElement("span",{className:"comments-suffix"},this.props.comments>1?"reacties":"reactie")):null))))},e}(l.PureComponent);e.default=d;var p,c=s.createGlobalStyle(p||(p=o(["\n.fd-teaser-footer {\n    clear: both;\n    padding: 0 10px;\n    @media only screen and (min-width: 641px) {\n        padding: 0 12px;\n    }\n    @media only screen and (min-width: 861px) {\n        padding: 0 15px;\n    }\n    border-top: 1px solid rgba(0,0,0,0.1);\n    line-height: 2.8125rem;\n    min-height: 2.8125rem;\n    user-select: none;\n\n    a {\n        text-decoration: none;\n        color: #191919;\n    }\n\n    menu {\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: #677381;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        min-height: 44px;\n        line-height: 1.1em;\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.125rem;\n        }\n\n        > span.placeholder {\n            flex: 1 1 auto;\n        }\n\n        > a {\n            flex: 0 0 auto;\n            color: #677381;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            display: inline-flex;\n            align-items: center;\n            padding-left: 1rem;\n            &:empty {\n                padding-left: 0;\n            }\n            @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n                /* IE10+ specific styles go here */\n                padding-top: .5rem;\n            }\n\n            i, span {\n                font-size: 0.8125rem;\n                cursor: pointer;\n            }\n\n            .comments-suffix {\n                margin-left: .2rem;\n            }\n        }\n\n        i {\n            cursor: pointer;\n            padding: .5rem;\n        }\n\n        .share-social {\n            display: inline-flex;\n            align-items: center;\n        }\n\n        .favorite {\n            overflow: unset; // Reset fd styles\n            padding-right: unset; // Reset fd styles\n            .icon-bookmark1 {\n                display: none;\n            }\n            &.selected {\n                .icon-bookmark {\n                    display: none;\n                }\n                .icon-bookmark1 {\n                    display: inline;\n                }\n            }\n        }\n\n        @media only screen and (max-width: 640px) {\n            .icon-label,\n            .comments-suffix {\n                display: none;\n            }\n        }\n    }\n}\n"],["\n.fd-teaser-footer {\n    clear: both;\n    padding: 0 10px;\n    @media only screen and (min-width: 641px) {\n        padding: 0 12px;\n    }\n    @media only screen and (min-width: 861px) {\n        padding: 0 15px;\n    }\n    border-top: 1px solid rgba(0,0,0,0.1);\n    line-height: 2.8125rem;\n    min-height: 2.8125rem;\n    user-select: none;\n\n    a {\n        text-decoration: none;\n        color: #191919;\n    }\n\n    menu {\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: #677381;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        min-height: 44px;\n        line-height: 1.1em;\n        font-size: 1rem;\n        @media only screen and (min-width: 641px) {\n            font-size: 1.125rem;\n        }\n\n        > span.placeholder {\n            flex: 1 1 auto;\n        }\n\n        > a {\n            flex: 0 0 auto;\n            color: #677381;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            display: inline-flex;\n            align-items: center;\n            padding-left: 1rem;\n            &:empty {\n                padding-left: 0;\n            }\n            @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n                /* IE10+ specific styles go here */\n                padding-top: .5rem;\n            }\n\n            i, span {\n                font-size: 0.8125rem;\n                cursor: pointer;\n            }\n\n            .comments-suffix {\n                margin-left: .2rem;\n            }\n        }\n\n        i {\n            cursor: pointer;\n            padding: .5rem;\n        }\n\n        .share-social {\n            display: inline-flex;\n            align-items: center;\n        }\n\n        .favorite {\n            overflow: unset; // Reset fd styles\n            padding-right: unset; // Reset fd styles\n            .icon-bookmark1 {\n                display: none;\n            }\n            &.selected {\n                .icon-bookmark {\n                    display: none;\n                }\n                .icon-bookmark1 {\n                    display: inline;\n                }\n            }\n        }\n\n        @media only screen and (max-width: 640px) {\n            .icon-label,\n            .comments-suffix {\n                display: none;\n            }\n        }\n    }\n}\n"])));e.TeaserFooterStyle=c},function(n,e,t){"use strict";var r,a=this&&this.__extends||(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),o=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},i=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var l=i(t(0)),s=t(1),d=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return a(e,n),e.prototype.render=function(){return this.props.items?l.default.createElement(l.default.Fragment,null,l.default.createElement(c,null),l.default.createElement("nav",{className:"related"},this.props.items.map(function(n){return l.default.createElement("a",{key:n.uuid,className:"related-link"+(n.longread?" longread":""),href:n.url},l.default.createElement("span",{className:"related-title"},n.title),l.default.createElement("i",{className:"icon-chevron-right"}))}))):null},e}(l.PureComponent);e.default=d;var p,c=s.createGlobalStyle(p||(p=o(["\n.related {\n    display: flex;\n    flex-direction: column;\n    font-size: 1rem;\n    clear: both;\n    @media only screen and (min-width: 641px) {\n        font-size: 1.0625rem;\n    }\n    a {\n        color: #191919;\n        text-decoration: none;\n    }\n    .related-link {\n        margin: initial; // Reset for fd.screen.scss\n        background: initial; // Reset for fd.screen.scss\n        box-shadow: initial; // Reset for fd.screen.scss\n        font-family: 'ProximaNovaRegular', sans-serif;\n        border-top: 1px solid rgba(0,0,0,0.1);\n        text-decoration: none;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 12px 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 12px 15px;\n        }\n        i {\n            color: #677381;\n            margin-left: 10px;\n            @media only screen and (min-width: 641px) {\n                margin-left: 12px;\n            }\n            @media only screen and (min-width: 861px) {\n                margin-left: 15px;\n            }\n        }\n        &:hover {\n            &, i {\n                color: #49a4a2;\n            }\n        }\n    }\n}\n"],["\n.related {\n    display: flex;\n    flex-direction: column;\n    font-size: 1rem;\n    clear: both;\n    @media only screen and (min-width: 641px) {\n        font-size: 1.0625rem;\n    }\n    a {\n        color: #191919;\n        text-decoration: none;\n    }\n    .related-link {\n        margin: initial; // Reset for fd.screen.scss\n        background: initial; // Reset for fd.screen.scss\n        box-shadow: initial; // Reset for fd.screen.scss\n        font-family: 'ProximaNovaRegular', sans-serif;\n        border-top: 1px solid rgba(0,0,0,0.1);\n        text-decoration: none;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 12px 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 12px 15px;\n        }\n        i {\n            color: #677381;\n            margin-left: 10px;\n            @media only screen and (min-width: 641px) {\n                margin-left: 12px;\n            }\n            @media only screen and (min-width: 861px) {\n                margin-left: 15px;\n            }\n        }\n        &:hover {\n            &, i {\n                color: #49a4a2;\n            }\n        }\n    }\n}\n"])));e.TeaserRelatedStyle=c},function(n,e,t){"use strict";var r,a=this&&this.__extends||(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),o=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},i=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var l=i(t(0)),s=t(1),d=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return a(e,n),e.prototype.render=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(c,null),l.default.createElement("span",{className:"fd-update-label"},this.props.children?this.props.children:"UPDATE"))},e}(l.PureComponent);e.default=d;var p,c=s.createGlobalStyle(p||(p=o(["\n.fd-update-label {\n    padding: 1px 8px;\n    color: #ffeadb;\n    background-color: #49a4a2;\n    line-height: 2.0em;\n    font-size: 0.625rem;\n    letter-spacing: 2.5px;\n    font-family: 'ProximaNovaBold', sans-serif;\n}\n"],["\n.fd-update-label {\n    padding: 1px 8px;\n    color: #ffeadb;\n    background-color: #49a4a2;\n    line-height: 2.0em;\n    font-size: 0.625rem;\n    letter-spacing: 2.5px;\n    font-family: 'ProximaNovaBold', sans-serif;\n}\n"])));e.UpdateLabelStyle=c}]);