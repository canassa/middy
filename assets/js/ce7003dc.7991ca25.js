"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9071],{1884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(5893),i=t(1151);const s={title:"Inline Middlewares",position:3},o=void 0,d={id:"writing-middlewares/inline-middlewares",title:"Inline Middlewares",description:"Sometimes you want to create handlers that serve a very small need and that are not",source:"@site/docs/writing-middlewares/03-inline-middlewares.md",sourceDirName:"writing-middlewares",slug:"/writing-middlewares/inline-middlewares",permalink:"/docs/writing-middlewares/inline-middlewares",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/writing-middlewares/03-inline-middlewares.md",tags:[],version:"current",lastUpdatedAt:1701628820,formattedLastUpdatedAt:"Dec 3, 2023",sidebarPosition:3,frontMatter:{title:"Inline Middlewares",position:3},sidebar:"tutorialSidebar",previous:{title:"Configurable Middlewares",permalink:"/docs/writing-middlewares/configurable-middlewares"},next:{title:"Internal Storage",permalink:"/docs/writing-middlewares/internal-storage"}},a={},l=[];function c(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Sometimes you want to create handlers that serve a very small need and that are not\nnecessarily re-usable. In such cases, you probably will need to hook only into one of\nthe different phases (",(0,r.jsx)(n.code,{children:"before"}),", ",(0,r.jsx)(n.code,{children:"after"})," or ",(0,r.jsx)(n.code,{children:"onError"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["In these cases you can use ",(0,r.jsx)(n.strong,{children:"inline middlewares"})," which are shortcut functions to hook\nlogic into Middy's control flow."]}),"\n",(0,r.jsx)(n.p,{children:"Let's see how inline middlewares work with a simple example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import middy from '@middy/core'\n\nconst lambdaHandler = (event, context) => {\n  // do stuff\n}\n\nexport const handler = middy()\n  .before(async (request) => {\n    // do something in the before phase\n  })\n  .after(async (request) => {\n    // do something in the after phase\n  })\n  .onError(async (request) => {\n    // do something in the on error phase\n  })\n  .handler(lambdaHandler)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see above, a middy instance also exposes the ",(0,r.jsx)(n.code,{children:"before"}),", ",(0,r.jsx)(n.code,{children:"after"})," and ",(0,r.jsx)(n.code,{children:"onError"}),"\nmethods to allow you to quickly hook in simple inline middlewares."]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);