"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[8185],{2737:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var t=r(5893),d=r(1151);const o={title:"ws-router"},s=void 0,a={id:"routers/ws-router",title:"ws-router",description:"This handler can route to requests to one of a nested handler based on routeKey of an WebSocket event from API Gateway (WebSocket).",source:"@site/docs/routers/ws-router.md",sourceDirName:"routers",slug:"/routers/ws-router",permalink:"/docs/routers/ws-router",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/routers/ws-router.md",tags:[],version:"current",lastUpdatedAt:1701628820,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"ws-router"},sidebar:"tutorialSidebar",previous:{title:"http-router",permalink:"/docs/routers/http-router"},next:{title:"Upgrade",permalink:"/docs/category/upgrade"}},l={},i=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This handler can route to requests to one of a nested handler based on ",(0,t.jsx)(n.code,{children:"routeKey"})," of an WebSocket event from API Gateway (WebSocket)."]}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @middy/ws-router\n"})}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"routes"})," (array[{routeKey, handler}]) (required): Array of route objects.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"routeKey"})," (string) (required): AWS formatted route key. ie ",(0,t.jsx)(n.code,{children:"$connect"}),", ",(0,t.jsx)(n.code,{children:"$disconnect"}),", ",(0,t.jsx)(n.code,{children:"$default"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"handler"})," (function) (required): Any ",(0,t.jsx)(n.code,{children:"handler(event, context, {signal})"})," function"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"NOTES:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Errors should be handled as part of the router middleware stack ",(0,t.jsx)(n.strong,{children:"or"})," the lambdaHandler middleware stack. Handled errors in the later will trigger the ",(0,t.jsx)(n.code,{children:"after"})," middleware stack of the former."]}),"\n",(0,t.jsx)(n.li,{children:"Shared middlewares, connected to the router middleware stack, can only be run before the lambdaHandler middleware stack."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport wsRouterHandler from '@middy/ws-router'\nimport wsResponseMiddleware from '@middy/ws-response'\nimport validatorMiddleware from '@middy/validator'\n\nconst connectHandler = middy()\n  .use(validatorMiddleware({eventSchema: {...} }))\n  .handler((event, context) => {\n    return 'connected'\n  })\n\nconst disconnectHandler = middy()\n  .use(validatorMiddleware({eventSchema: {...} }))\n  .handler((event, context) => {\n    return 'disconnected'\n  })\n\nconst routes = [\n  {\n    routeKey: '$connect',\n    handler: connectHandler\n  },\n  {\n    routeKey: '$disconnect',\n    handler: disconnectHandler\n  }\n]\n\nexport const handler = middy()\n  .use(wsResponseMiddleware())\n  .handler(wsRouterHandler(routes))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(7294);const d={},o=t.createContext(d);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);