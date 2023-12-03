"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9647],{6592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(5893),r=n(1151);const a={title:"Internal Storage",position:4},o=void 0,i={id:"writing-middlewares/internal-storage",title:"Internal Storage",description:"The handler also contains an internal object that can be used to store values securely between middlewares that",source:"@site/docs/writing-middlewares/04-internal-storage.md",sourceDirName:"writing-middlewares",slug:"/writing-middlewares/internal-storage",permalink:"/docs/writing-middlewares/internal-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/writing-middlewares/04-internal-storage.md",tags:[],version:"current",lastUpdatedAt:1701628820,formattedLastUpdatedAt:"Dec 3, 2023",sidebarPosition:4,frontMatter:{title:"Internal Storage",position:4},sidebar:"tutorialSidebar",previous:{title:"Inline Middlewares",permalink:"/docs/writing-middlewares/inline-middlewares"},next:{title:"Handle Timeouts",permalink:"/docs/writing-middlewares/timeouts"}},c={},d=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The handler also contains an ",(0,s.jsx)(t.code,{children:"internal"})," object that can be used to store values securely between middlewares that\nexpires when the event ends. To compliment this there is also a cache where middleware can store request promises.\nDuring ",(0,s.jsx)(t.code,{children:"before"})," these promises can be stored into ",(0,s.jsx)(t.code,{children:"internal"})," then resolved only when needed. This pattern is useful to\ntake advantage of the async nature of node especially when you have multiple middleware that require reaching out the\nexternal APIs."]}),"\n",(0,s.jsx)(t.p,{children:"Here is a middleware boilerplate using this pattern:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { canPrefetch, getInternal, processCache } from '@middy/util'\n\nconst defaults = {\n  fetchData: {}, // { internalKey: params }\n  disablePrefetch: false,\n  cacheKey: 'custom',\n  cacheExpiry: -1,\n  setToContext: false\n}\n\nconst customMiddleware = (opts = {}) => {\n  const options = { ...defaults, ...opts }\n\n  const fetch = () => {\n    const values = {}\n    // Start your custom fetch\n    for (const internalKey of Object.keys(options.fetchData)) {\n      values[internalKey] = fetch('...', options.fetchData[internalKey]).then(\n        (res) => res.text()\n      )\n    }\n    // End your custom fetch\n    return values\n  }\n\n  if (canPrefetch(options)) {\n    processCache(options, fetch)\n  }\n\n  const customMiddlewareBefore = async (request) => {\n    const { value } = processCache(options, fetch, request)\n\n    Object.assign(request.internal, value)\n    if (options.setToContext) {\n      const data = await getInternal(Object.keys(options.fetchData), request)\n      Object.assign(request.context, data)\n    }\n  }\n\n  return {\n    before: customMiddlewareBefore\n  }\n}\n\nexport default customMiddleware\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(7294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);