(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JMMV:function(e,t,a){"use strict";var r=a("r0ML"),n=a.n(r),o=a("Wbzz");t.a=function(e){var t=e.title,r=e.name,l=e.month,c=e.category,i=t;l?(i=r,c="math"):c="science";var s=a("OgWq")("./"+c+".svg");return console.log(s),n.a.createElement(o.a,{to:""+t,style:{textDecoration:"none"}},n.a.createElement("div",{class:"card"},n.a.createElement("img",{src:s,class:"card-img-top",alt:"..."}),n.a.createElement("div",{class:"card-body"},n.a.createElement("h4",{class:"card-title",style:{alignContent:"center"}},i),n.a.createElement("p",{class:"card-text"}),n.a.createElement("a",{href:"#!",class:"btn btn-primary"},"Button"))))}},aWpR:function(e,t,a){"use strict";var r=a("r0ML"),n=a.n(r),o=a("Wbzz");a("9eSz"),a("JgAk");t.a=function(e){var t=e.article,r=e.year,l=e.month,c=(e.category,a("OgWq")("./"+t.category+".svg"));return n.a.createElement(o.a,{to:"/archives/"+r+"/"+l+"/"+t.slug},n.a.createElement("div",{class:"card"},n.a.createElement("img",{src:c,class:"card-img-top",alt:"..."}),n.a.createElement("div",{class:"card-body"},n.a.createElement("h4",{class:"card-title",style:{alignContent:"center"}},t.title),n.a.createElement("p",{class:"card-text"},t.description.description),n.a.createElement("a",{href:"#!",class:"btn btn-primary"},"Button"))))}},jr2i:function(e,t,a){e.exports={hero:"hero-module--hero--1u2ZB",heroImage:"hero-module--heroImage--15qjR",heroDetails:"hero-module--heroDetails--oQ0Hz",heroHeadline:"hero-module--heroHeadline--24FEQ",heroTitle:"hero-module--heroTitle--3ygoX"}},u7cK:function(e,t,a){"use strict";a.r(t);var r=a("9Hrx"),n=a("r0ML"),o=a.n(n),l=(a("qhky"),a("mwIZ")),c=a.n(l),i=(a("9eSz"),a("Bl7J")),s=(a("JMMV"),a("aWpR")),m=(a("jr2i"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=c()(this.props,"data.site.siteMetadata.title"),t=c()(this,"props.data.allContentfulBlogPost.edges").filter((function(e){return e.node.title}));console.log("HERE!",this.props);var a=this.props.location.href,r=(a=a.split("/")).pop(),n=a.pop();a="/"+n+"/"+r;var l=!1;return t.map((function(e){var t=e.node;t.year==n&&t.month==r&&(l=!0)})),l?o.a.createElement(i.a,{location:this.props.location,title:e},o.a.createElement("ul",{className:"article-list"},t.map((function(e){var t=e.node;if(t.year==n&&t.month==r)return l=!0,o.a.createElement("li",{key:t.slug},o.a.createElement(s.a,{article:t,year:n,month:r}))})))):o.a.createElement(i.a,{location:this.props.location,title:e},o.a.createElement("h1",null," NO POSTS "))},t}(o.a.Component));t.default=m}}]);
//# sourceMappingURL=component---src-templates-month-js-e6347947696515a361e6.js.map