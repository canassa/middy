"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[481],{2865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=r(5893),a=r(1151);const d={title:"Application Load Balancer"},o=void 0,i={id:"events/application-load-balancer",title:"Application Load Balancer",description:"Same as API Gateway (REST)",source:"@site/docs/events/application-load-balancer.md",sourceDirName:"events",slug:"/events/application-load-balancer",permalink:"/docs/events/application-load-balancer",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/application-load-balancer.md",tags:[],version:"current",lastUpdatedAt:1701628820,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"Application Load Balancer"},sidebar:"tutorialSidebar",previous:{title:"API Gateway (WebSocket)",permalink:"/docs/events/api-gateway-ws"},next:{title:"AppSync",permalink:"/docs/events/appsync"}},s={},l=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Same as API Gateway (REST)"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."})}),"\n",(0,n.jsx)(t.h2,{id:"aws-documentation",children:"AWS Documentation"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html",children:"Using AWS Lambda with an Application Load Balancer"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport httpRouterHandler from '@middy/http-router'\nimport errorLoggerMiddleware from '@middy/error-logger'\nimport inputOutputLoggerMiddleware from '@middy/input-output-logger'\nimport httpContentNegotiationMiddleware from '@middy/http-content-negotiation'\nimport httpContentEncodingMiddleware from '@middy/http-content-encoding'\nimport httpCorsMiddleware from '@middy/http-cors'\nimport httpErrorHandlerMiddleware from '@middy/http-error-handler'\nimport httpEventNormalizerMiddleware from '@middy/http-event-normalizer'\nimport httpHeaderNormalizerMiddleware from '@middy/http-header-normalizer'\nimport httpJsonBodyParserMiddleware from '@middy/http-json-body-parser'\nimport httpMultipartBodyParserMiddleware from '@middy/http-multipart-body-parser'\nimport httpPartialResponseMiddleware from '@middy/http-partial-response'\nimport httpResponseSerializerMiddleware from '@middy/http-response-serializer'\nimport httpSecurityHeadersMiddleware from '@middy/http-security-headers'\nimport httpUrlencodeBodyParserMiddleware from '@middy/http-urlencode-body-parser'\nimport httpUrlencodePathParametersParserMiddleware from '@middy/http-urlencode-path-parser'\nimport warmupMiddleware from 'warmup'\n\nimport { handler as getHandler } from './handlers/get-user.js'\nimport { handler as postHandler } from './handlers/get-user.js'\n\nconst routes = [\n  {\n    method: 'GET',\n    path: '/user/{id}',\n    handler: getHandler\n  },\n  {\n    method: 'POST',\n    path: '/user',\n    handler: postHandler\n  }\n]\n\nexport const handler = middy({\n  timeoutEarlyResponse: () => {\n    return {\n      statusCode: 408\n    }\n  }\n})\n  .use(warmupMiddleware())\n  .use(httpEventNormalizerMiddleware())\n  .use(httpHeaderNormalizerMiddleware())\n  .use(\n    httpContentNegotiationMiddleware({\n      availableLanguages: ['en-CA', 'fr-CA'],\n      availableMediaTypes: ['application/json']\n    })\n  )\n  .use(httpUrlencodePathParametersParserMiddleware())\n  // Start oneOf\n  .use(httpUrlencodeBodyParserMiddleware())\n  .use(httpJsonBodyParserMiddleware())\n  .use(httpMultipartBodyParserMiddleware())\n  // End oneOf\n  .use(httpSecurityHeadersMiddleware())\n  .use(httpCorsMiddleware())\n  .use(httpContentEncodingMiddleware())\n  .use(\n    httpResponseSerializerMiddleware({\n      serializers: [\n        {\n          regex: /^application\\/json$/,\n          serializer: ({ body }) => JSON.stringify(body)\n        }\n      ],\n      default: 'application/json'\n    })\n  )\n  .use(httpPartialResponseMiddleware())\n  .use(httpErrorHandlerMiddleware())\n  .handler(httpRouterHandler(routes))\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(7294);const a={},d=n.createContext(a);function o(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);