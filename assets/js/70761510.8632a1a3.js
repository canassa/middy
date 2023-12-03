"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[5024],{3455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(5893),r=t(1151);const i={title:"Small node_modules",sidebar_position:6},o=void 0,a={id:"best-practices/small-node-modules",title:"Small node_modules",description:"Using a bundler is the optimal solution, but can be complex depending on your setup.",source:"@site/docs/best-practices/06-small-node-modules.md",sourceDirName:"best-practices",slug:"/best-practices/small-node-modules",permalink:"/docs/best-practices/small-node-modules",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/best-practices/06-small-node-modules.md",tags:[],version:"current",lastUpdatedAt:1701628820,formattedLastUpdatedAt:"Dec 3, 2023",sidebarPosition:6,frontMatter:{title:"Small node_modules",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Bundling Lambda packages",permalink:"/docs/best-practices/bundling"},next:{title:"Profiling",permalink:"/docs/best-practices/profiling"}},c={},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Using a bundler is the optimal solution, but can be complex depending on your setup."}),"\n",(0,s.jsxs)(n.p,{children:["In this case you should remove excess files from your ",(0,s.jsx)(n.code,{children:"node_modules"})," directory to ensure it doesn't have anything excess shipped to AWS."]}),"\n",(0,s.jsxs)(n.p,{children:["We put together a ",(0,s.jsx)(n.code,{children:".yarnclean"})," file you can check out and use as part of your CI/CD process:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-git",metastring:'title=".yarnclean"',children:"# -- Middy.js --\n\n# Dependencies\n**/ajv/lib\n**/ajv/.runkit_examples.js\n**/ajv-errors/src\n**/ajv-formats/src\n**/ajv-formats-draft2019/.github\n**/ajv-formats-draft2019/.prettierrc.js\n**/ajv-formats-draft2019/index.test.js\n**/ajv-i18n/localize/.eslintrc.yml\n**/json-mask/bin\n**/json-mask/build\n**/qs/.github\n**/qs/dist\n**/qs/test\n**/qs/.editorconfig\n**/qs/.eslintrc\n**/qs/.nycrc\n**/qs/CHANGELOG.md\n\n# DevDependencies\n**/@types\n**/@serverless/event-mocks\n\n## Sub[/Sub] Dependencies\n**/bowser/src\n**/bowser/bundled.js\n**/dicer/bench\n**/dicer/test\n**/inherits/inherits_browser.js\n**/json-schema-traverse/.github\n**/json-schema-traverse/spec\n**/fast-deep-equal/es6\n**/fast-deep-equal/react.js\n**/querystring/test\n**/react-native-get-random-values/android\n**/react-native-get-random-values/ios\n**/react-native-get-random-values/index.web.js\n**/react-native-get-random-values/react-native-get-random-values.podspec\n**/setprototypeof/test\n**/tslib\n**/uri-js/dist/esnext\n**/url/.zuul.yml\n**/url/test.js\n**/uuid/bin\n\n# Builds\n*.ts\ntsconfig.json\n*.js.map\npackage-lock.json\nyarn.lock\n.travis.yml\n\n# Common\n.bin\n.cache\n.editorconfig\n.eslintignore\n.eslintrc\n.eslintrc.yml\n.gitattributes\n.npmignore\nAUTHORS\nLICENSE\n*.md\n*.txt\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);