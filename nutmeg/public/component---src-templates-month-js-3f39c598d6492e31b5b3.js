(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JMMV:function(e,t,a){"use strict";var r=a("r0ML"),o=a.n(r),n=a("Wbzz");t.a=function(e){var t=e.title,r=e.name,l=e.month,c=e.category,s=t;l?(s=r,c="math"):c="science";var i=a("OgWq")("./"+c+".svg");return console.log(i),o.a.createElement(n.a,{to:""+t,style:{textDecoration:"none"}},o.a.createElement("div",{class:"card"},o.a.createElement("img",{src:i,class:"card-img-top",alt:"..."}),o.a.createElement("div",{class:"card-body"},o.a.createElement("h4",{class:"card-title",style:{alignContent:"center"}},s),o.a.createElement("p",{class:"card-text"}),o.a.createElement("a",{href:"#!",class:"btn btn-primary"},"Button"))))}},aWpR:function(e,t,a){"use strict";var r=a("r0ML"),o=a.n(r),n=a("Wbzz");a("9eSz"),a("JgAk");t.a=function(e){var t=e.article,r=e.year,l=e.month,c=(e.category,a("OgWq")("./"+t.category+".svg"));return o.a.createElement(n.a,{to:"/archives/"+r+"/"+l+"/"+t.slug},o.a.createElement("div",{class:"card"},o.a.createElement("img",{src:c,class:"card-img-top",alt:"..."}),o.a.createElement("div",{class:"card-body"},o.a.createElement("h4",{class:"card-title",style:{alignContent:"center"}},t.title),o.a.createElement("p",{class:"card-text"},t.description.description),o.a.createElement("a",{href:"#!",class:"btn btn-primary"},"Button"))))}},jr2i:function(e,t,a){e.exports={hero:"hero-module--hero--1u2ZB",heroImage:"hero-module--heroImage--15qjR",heroDetails:"hero-module--heroDetails--oQ0Hz",heroHeadline:"hero-module--heroHeadline--24FEQ",heroTitle:"hero-module--heroTitle--3ygoX"}},u7cK:function(e,t,a){"use strict";a.r(t);var r=a("9Hrx"),o=a("r0ML"),n=a.n(o),l=(a("qhky"),a("mwIZ")),c=a.n(l),s=(a("9eSz"),a("Bl7J")),i=(a("JMMV"),a("aWpR")),m=(a("jr2i"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=c()(this.props,"data.site.siteMetadata.title"),t=c()(this,"props.data.allContentfulBlogPost.edges").filter((function(e){return e.node.title}));console.log("PROPS!",this.props),console.log("PATH",this.props.path);var a=this.props.path[2];a=a.split("/"),console.log(a);var r=a[2],o=a[3];console.log(r,o),a="/"+o+"/"+r,console.log(a);var l=!1;return t.map((function(e){var t=e.node;console.log(t),t.year==o&&t.month==r&&(l=!0)})),l?n.a.createElement(s.a,{location:this.props.location,title:e},n.a.createElement("ul",{className:"article-list"},t.map((function(e){var t=e.node;if(t.year==o&&t.month==r)return l=!0,n.a.createElement("li",{key:t.slug},n.a.createElement(i.a,{article:t,year:o,month:r}))})))):n.a.createElement(s.a,{location:this.props.location,title:e},n.a.createElement("h1",null," NO POSTS "))},t}(n.a.Component));t.default=m}}]);
//# sourceMappingURL=component---src-templates-month-js-3f39c598d6492e31b5b3.js.map