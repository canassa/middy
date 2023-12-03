"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[5258],{957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(5893),i=r(1151);const o={title:"VPC Lattice"},d=void 0,a={id:"events/vpc-lattice",title:"VPC Lattice",description:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.",source:"@site/docs/events/vpc-lattice.md",sourceDirName:"events",slug:"/events/vpc-lattice",permalink:"/docs/events/vpc-lattice",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/vpc-lattice.md",tags:[],version:"current",lastUpdatedAt:1701628820,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"VPC Lattice"},sidebar:"tutorialSidebar",previous:{title:"SQS",permalink:"/docs/events/sqs"},next:{title:"WorkMail",permalink:"/docs/events/workmail"}},s={},p=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."})}),"\n",(0,n.jsxs)(t.p,{children:["We recommend using ",(0,n.jsx)(t.code,{children:"@middy/http-event-normalizer"})," if you place to use any of the following: ",(0,n.jsx)(t.code,{children:"@middy/http-json-body-parser"}),", ",(0,n.jsx)(t.code,{children:"@middy/http-multipart-body-parser"}),", ",(0,n.jsx)(t.code,{children:"@middy/http-urlencode-body-parser"}),", ",(0,n.jsx)(t.code,{children:"@middy/http-partial-response"})]}),"\n",(0,n.jsx)(t.h2,{id:"aws-documentation",children:"AWS Documentation"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/services-vpc-lattice.html",children:"Using AWS Lambda with Amazon VPC Lattice"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport errorLoggerMiddleware from '@middy/error-logger'\nimport inputOutputLoggerMiddleware from '@middy/input-output-logger'\nimport httpContentNegotiationMiddleware from '@middy/http-content-negotiation'\nimport httpContentEncodingMiddleware from '@middy/http-content-encoding'\nimport httpCorsMiddleware from '@middy/http-cors'\nimport httpErrorHandlerMiddleware from '@middy/http-error-handler'\nimport httpEventNormalizerMiddleware from '@middy/http-event-normalizer' // required\nimport httpHeaderNormalizerMiddleware from '@middy/http-header-normalizer'\nimport httpJsonBodyParserMiddleware from '@middy/http-json-body-parser'\nimport httpMultipartBodyParserMiddleware from '@middy/http-multipart-body-parser'\nimport httpPartialResponseMiddleware from '@middy/http-partial-response'\nimport httpResponseSerializerMiddleware from '@middy/http-response-serializer'\nimport httpSecurityHeadersMiddleware from '@middy/http-security-headers'\nimport httpUrlencodeBodyParserMiddleware from '@middy/http-urlencode-body-parser'\nimport httpUrlencodePathParametersParserMiddleware from '@middy/http-urlencode-path-parser'\nimport validatorMiddleware from 'validator'\nimport warmupMiddleware from 'warmup'\n\nimport eventSchema from './eventSchema.json' assert { type: 'json' }\nimport responseSchema from './responseSchema.json' assert { type: 'json' }\n\nexport const handler = middy({\n  timeoutEarlyResponse: () => {\n    return {\n      statusCode: 408\n    }\n  }\n})\n  .use(warmupMiddleware())\n  .use(httpEventNormalizerMiddleware())\n  .use(httpHeaderNormalizerMiddleware())\n  .use(\n    httpContentNegotiationMiddleware({\n      availableLanguages: ['en-CA', 'fr-CA'],\n      availableMediaTypes: ['application/json']\n    })\n  )\n  .use(httpUrlencodePathParametersParserMiddleware())\n  // Start oneOf\n  .use(httpUrlencodeBodyParserMiddleware())\n  .use(httpJsonBodyParserMiddleware())\n  .use(httpMultipartBodyParserMiddleware())\n  // End oneOf\n  .use(httpSecurityHeadersMiddleware())\n  .use(httpCorsMiddleware())\n  .use(httpContentEncodingMiddleware())\n  .use(\n    httpResponseSerializerMiddleware({\n      serializers: [\n        {\n          regex: /^application\\/json$/,\n          serializer: ({ body }) => JSON.stringify(body)\n        }\n      ],\n      default: 'application/json'\n    })\n  )\n  .use(httpPartialResponseMiddleware())\n  .use(validatorMiddleware({ eventSchema, responseSchema }))\n  .use(httpErrorHandlerMiddleware())\n  .handler((event, context, { signal }) => {\n    // ...\n  })\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>d});var n=r(7294);const i={},o=n.createContext(i);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);