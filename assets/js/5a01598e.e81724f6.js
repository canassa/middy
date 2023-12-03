"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4297],{1627:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var s=n(5893),d=n(1151);const i={title:"Upgrade 3.x -> 4.x",sidebar_position:10},l=void 0,t={id:"upgrade/3-4",title:"Upgrade 3.x -> 4.x",description:'aka "The AWS SDK v3 Update"',source:"@site/docs/upgrade/3-4.md",sourceDirName:"upgrade",slug:"/upgrade/3-4",permalink:"/docs/upgrade/3-4",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/upgrade/3-4.md",tags:[],version:"current",lastUpdatedAt:1701628820,formattedLastUpdatedAt:"Dec 3, 2023",sidebarPosition:10,frontMatter:{title:"Upgrade 3.x -> 4.x",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Upgrade 4.x -> 5.x",permalink:"/docs/upgrade/4-5"},next:{title:"Upgrade 2.x -> 3.x",permalink:"/docs/upgrade/2-3"}},a={},o=[{value:"Notable changes",id:"notable-changes",level:2},{value:"Core",id:"core",level:2},{value:"Util",id:"util",level:2},{value:"Middleware",id:"middleware",level:2},{value:"cloudwatch-metrics",id:"cloudwatch-metrics",level:3},{value:"do-not-wait-for-empty-event-loop",id:"do-not-wait-for-empty-event-loop",level:3},{value:"error-logger",id:"error-logger",level:3},{value:"event-normalizer",id:"event-normalizer",level:3},{value:"http-content-encoding",id:"http-content-encoding",level:3},{value:"http-content-negotiation",id:"http-content-negotiation",level:3},{value:"http-cors",id:"http-cors",level:3},{value:"http-error-handler",id:"http-error-handler",level:3},{value:"http-event-normalizer",id:"http-event-normalizer",level:3},{value:"http-header-normalizer",id:"http-header-normalizer",level:3},{value:"http-json-body-parser",id:"http-json-body-parser",level:3},{value:"http-multipart-body-parser",id:"http-multipart-body-parser",level:3},{value:"http-partial-response",id:"http-partial-response",level:3},{value:"http-response-serializer",id:"http-response-serializer",level:3},{value:"http-router",id:"http-router",level:3},{value:"http-security-headers",id:"http-security-headers",level:3},{value:"http-urlencode-body-parser",id:"http-urlencode-body-parser",level:3},{value:"http-urlencode-path-parser",id:"http-urlencode-path-parser",level:3},{value:"input-output-logger",id:"input-output-logger",level:3},{value:"rds-signer",id:"rds-signer",level:3},{value:"s3-object-response",id:"s3-object-response",level:3},{value:"secrets-manager",id:"secrets-manager",level:3},{value:"service-discovery",id:"service-discovery",level:3},{value:"sqs-partial-batch-failure",id:"sqs-partial-batch-failure",level:3},{value:"ssm",id:"ssm",level:3},{value:"sts",id:"sts",level:3},{value:"validator",id:"validator",level:3},{value:"warmup",id:"warmup",level:3},{value:"ws-json-body-parser",id:"ws-json-body-parser",level:3},{value:"ws-response",id:"ws-response",level:3},{value:"ws-router",id:"ws-router",level:3},{value:"Notes",id:"notes",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:'aka "The AWS SDK v3 Update"'}),"\n",(0,s.jsx)(r.p,{children:"Version 4.x of Middy no longer supports Node.js versions 14.x. You are highly encouraged to move to Node.js 18.x."}),"\n",(0,s.jsx)(r.h2,{id:"notable-changes",children:"Notable changes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Middy now uses AWS SDK v3 by default."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"core",children:"Core"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Remove polyfill for ",(0,s.jsx)(r.code,{children:"AbortControler"})]}),"\n",(0,s.jsxs)(r.li,{children:["Remove polyfill for ",(0,s.jsx)(r.code,{children:"timers/promises"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"util",children:"Util"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"normalizeResponse"})," now will set the ",(0,s.jsx)(r.code,{children:"statusCode"})," to ",(0,s.jsx)(r.code,{children:"200"})," when casting to a new object or ",(0,s.jsx)(r.code,{children:"500"})," when missing ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"middleware",children:"Middleware"}),"\n",(0,s.jsx)(r.h3,{id:"cloudwatch-metrics",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/cloudwatch-metrics",children:"cloudwatch-metrics"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"do-not-wait-for-empty-event-loop",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/do-not-wait-for-empty-event-loop",children:"do-not-wait-for-empty-event-loop"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"error-logger",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/error-logger",children:"error-logger"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"event-normalizer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/event-normalizer",children:"event-normalizer"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-content-encoding",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-content-encoding",children:"http-content-encoding"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Removed body as stream support, will be brought back as a new middleware in a future middleware ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-content-negotiation",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-content-negotiation",children:"http-content-negotiation"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-cors",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-cors",children:"http-cors"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-error-handler",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-error-handler",children:"http-error-handler"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-event-normalizer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-event-normalizer",children:"http-event-normalizer"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-header-normalizer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-header-normalizer",children:"http-header-normalizer"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-json-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-json-body-parser",children:"http-json-body-parser"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Deprecate ",(0,s.jsx)(r.code,{children:"event.rawBody"})," ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"You can add in an inline middleware as a workaround."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"  .before((request) => {\n    request.event.rawBody = request.event.body\n  })\n  .use(httpJSONBodyParserMiddleware())\n"})}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"https://github.com/middyjs/middy/issues/945",children:"https://github.com/middyjs/middy/issues/945"})," for discussion and reasoning."]}),"\n",(0,s.jsx)(r.h3,{id:"http-multipart-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-multipart-body-parser",children:"http-multipart-body-parser"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Add new option to set ",(0,s.jsx)(r.code,{children:"charset"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-partial-response",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-partial-response",children:"http-partial-response"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-response-serializer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-response-serializer",children:"http-response-serializer"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-router",children:(0,s.jsx)(r.a,{href:"/docs/routers/http-router",children:"http-router"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-security-headers",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-security-headers",children:"http-security-headers"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-urlencode-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-urlencode-body-parser",children:"http-urlencode-body-parser"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Now throws 422 when unable to parse JSON ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-urlencode-path-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-urlencode-path-parser",children:"http-urlencode-path-parser"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"input-output-logger",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/input-output-logger",children:"input-output-logger"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"rds-signer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/rds-signer",children:"rds-signer"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Updated to use AWS SDK v3 ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"s3-object-response",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/s3-object-response",children:"s3-object-response"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Updated to use AWS SDK v3 ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"secrets-manager",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/secrets-manager",children:"secrets-manager"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Updated to use AWS SDK v3 ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"service-discovery",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/service-discovery",children:"service-discovery"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Updated to use AWS SDK v3 ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"sqs-partial-batch-failure",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/sqs-partial-batch-failure",children:"sqs-partial-batch-failure"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"ssm",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/ssm",children:"ssm"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Updated to use AWS SDK v3 ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"sts",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/sts",children:"sts"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Updated to use AWS SDK v3 ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"validator",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/validator",children:"validator"})}),"\n",(0,s.jsx)(r.p,{children:"We've put a lot of work into making this middleware bundle smaller and faster by default, while allowing for opting into more functionality."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Deprecate ",(0,s.jsx)(r.code,{children:"inputSchema"})," and ",(0,s.jsx)(r.code,{children:"outputSchema"})," options ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n",(0,s.jsxs)(r.li,{children:["Deprecated ",(0,s.jsx)(r.code,{children:"i18nEnabled"})," ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n",(0,s.jsxs)(r.li,{children:["Must now pass in ",(0,s.jsx)(r.code,{children:"defaultLanguage"})," localizations to ",(0,s.jsx)(r.code,{children:"languages"})," ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n",(0,s.jsxs)(r.li,{children:["Added in ",(0,s.jsx)(r.code,{children:"ajv-error"})," support"]}),"\n",(0,s.jsxs)(r.li,{children:["Pulled ",(0,s.jsx)(r.code,{children:"transpileSchema"})," out of middleware to allow for tree shaking and pre-compile option ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n",(0,s.jsxs)(r.li,{children:["Added in ",(0,s.jsx)(r.code,{children:"transpileLocale"})," to allow for custom internationalization of error messages including ",(0,s.jsx)(r.code,{children:"errorMessage"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"How to update use of middleware"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"import validatorMiddleware from '@middy/validator'\n// 1. Import transpileSchema\nimport { transpileSchema } from '@middy/validator/transpile'\n\nexport const handler = middy(...)\n  .use(validatorMiddleware({\n    // 2. Wrap schemas with transpileSchema\n    eventSchema: transpileSchema(eventJsonSchema)\n  }))\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"import validatorMiddleware from '@middy/validator'\n// 1. Import localizations\nimport { en, fr } from 'ajv-ftl-i18n'\n\nexport const handler = middy(...)\n  .use(validatorMiddleware({\n    eventSchema: transpileSchema(eventJsonSchema),\n    // 2. Add localizations in\n    langauges: { en, fr }\n  }))\n"})}),"\n",(0,s.jsx)(r.h3,{id:"warmup",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/warmup",children:"warmup"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"ws-json-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/ws-json-body-parser",children:"ws-json-body-parser"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"ws-response",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/ws-response",children:"ws-response"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Updated to use AWS SDK v3 ",(0,s.jsx)(r.strong,{children:"Breaking Change"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"ws-router",children:(0,s.jsx)(r.a,{href:"/docs/routers/ws-router",children:"ws-router"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(r.p,{children:"None"})]})}function c(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>l});var s=n(7294);const d={},i=s.createContext(d);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);