"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8276,7807],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/foundations/icons/icons.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_iconsStoryArray__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/foundations/icons/iconsStoryArray.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_icons_stories_tsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/foundations/icons/icons.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Foundations/Icons",of:_icons_stories_tsx__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"icons",children:"Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#icon-set",children:"Icon Set"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#deprecated-icons",children:"Deprecated Icons"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#accessibility",children:"Accessibility"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Icons are used to visually indicate core parts of the app and available actions. They can be purely decorative, or they can be used to convey meaning (e.g. as part of interactive controls)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"import { SearchIcon } from '@lokalise/louis';\n\nexport default () => <SearchIcon />;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"With a custom color from the theme:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"import { SearchIcon } from '@lokalise/louis';\nimport { useTheme } from '@lokalise/styled';\n\nexport default () => {\n\tconst theme = useTheme();\n\treturn <SearchIcon color={theme.color.text.success} />;\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.figma.com/file/998GqUr24TjUPJBVKBTpEX/Foundations?node-id=444%3A3246",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Icons"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.$4,{of:_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.l}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"icon-set",children:"Icon Set"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["All icons are suffixed with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Icon"})," and can be imported as e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SearchIcon"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Lo,{children:_iconsStoryArray__WEBPACK_IMPORTED_MODULE_6__.i.filter((([iconName])=>!iconName.startsWith("Deprecated"))).map((([iconName,IconComponent])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._R,{name:iconName.replace(/(.*)Icon/i,"$1"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconComponent,{})})))}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"deprecated-icons",children:"Deprecated Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["All deprecated icons are prefixed with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Deprecated"})," and can be imported as e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DeprecatedSearchIcon"}),".\nDeprecated icons should not be used in new features, they are included here for backwards compatibility."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Lo,{children:_iconsStoryArray__WEBPACK_IMPORTED_MODULE_6__.i.filter((([iconName])=>iconName.startsWith("Deprecated"))).map((([iconName,IconComponent])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._R,{name:iconName.replace(/Deprecated(.*)Icon/i,"$1"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconComponent,{})})))}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The optional ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ariaLabel"})," prop can be used when the icon is used in a meaningful context (instead of purely decorative)."]})]})}}},"./src/foundations/icons/icons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_iconsStoryArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/iconsStoryArray.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Playground=({icon:Component,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{...args});Playground.displayName="Playground";const __WEBPACK_DEFAULT_EXPORT__={title:"Foundations/Icons",component:_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,args:{icon:"AddIcon",size:"64px"},argTypes:{icon:{options:_iconsStoryArray__WEBPACK_IMPORTED_MODULE_2__.i.map((([iconName])=>iconName)),mapping:Object.fromEntries(_iconsStoryArray__WEBPACK_IMPORTED_MODULE_2__.i),control:{type:"select"}},color:{control:{type:"color"}}}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  icon: Component,\n  ...args\n}) => <Component {...args} />",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"./src/foundations/icons/LoadingSign/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>LoadingSign});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Rectangle=({rotation,begin})=>(0,jsx_runtime.jsx)("g",{transform:`rotate(${rotation} 10 10)`,children:(0,jsx_runtime.jsx)("rect",{x:"9",y:"3",rx:"1",ry:"1.232",width:"2",height:"4.4",children:(0,jsx_runtime.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:`${begin}s`,repeatCount:"indefinite"})})});Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{rotation:{defaultValue:null,description:"",name:"rotation",required:!0,type:{name:"number"}},begin:{defaultValue:null,description:"",name:"begin",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}var SvgIcon=__webpack_require__("./src/foundations/icons/SvgIcon.tsx");const LoadingSign=props=>(0,jsx_runtime.jsxs)(SvgIcon.l,{...props,children:[(0,jsx_runtime.jsx)(Rectangle,{rotation:0,begin:-.875}),(0,jsx_runtime.jsx)(Rectangle,{rotation:45,begin:-.75}),(0,jsx_runtime.jsx)(Rectangle,{rotation:90,begin:-.625}),(0,jsx_runtime.jsx)(Rectangle,{rotation:135,begin:-.5}),(0,jsx_runtime.jsx)(Rectangle,{rotation:180,begin:-.375}),(0,jsx_runtime.jsx)(Rectangle,{rotation:225,begin:-.25}),(0,jsx_runtime.jsx)(Rectangle,{rotation:270,begin:-.125}),(0,jsx_runtime.jsx)(Rectangle,{rotation:315,begin:0})]});LoadingSign.displayName="LoadingSign";try{LoadingSign.displayName="LoadingSign",LoadingSign.__docgenInfo={description:"",displayName:"LoadingSign",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/index.tsx#LoadingSign"]={docgenInfo:LoadingSign.__docgenInfo,name:"LoadingSign",path:"src/foundations/icons/LoadingSign/index.tsx#LoadingSign"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const commonStyles=styled_components_browser_esm.iv`
	pointer-events: all;
	box-sizing: border-box;
	color: var(--louis-svgicon-color);
	fill: currentColor;
	font-size: var(--louis-svgicon-size);
`,SvgRoot=styled_components_browser_esm.ZP.svg.withConfig({displayName:"icons__SvgRoot",componentId:"sc-4ot8tf-0"})(["",";width:1em;height:1em;"],commonStyles);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const reservedKeywords=["currentColor","inherit"],colorDefaults={color:"inherit",fill:"currentColor",stroke:void 0},SvgIcon=({color="inherit",size="inherit",ariaLabel,children,...props})=>{return(0,jsx_runtime.jsx)(SvgRoot,{style:{"--louis-svgicon-color":(colorType="color",inputColor=color,inputColor&&!reservedKeywords.includes(inputColor)?inputColor:colorDefaults[colorType]),"--louis-svgicon-size":size},...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children});var colorType,inputColor};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=foundations-icons-icons-mdx.1482d1c0.iframe.bundle.js.map