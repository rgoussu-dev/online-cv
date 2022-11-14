"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[7375],{67375:(fn,Ne,i)=>{i.d(Ne,{Z:()=>on});var a=i(67294),P=i(97132),g=i(68547),ae=i(62031),Le=i(80831),k=i(96486),se=i(49656),oe=i(23724),Be=i(8610),j=i(23998),re=i(47292),we=i(73825);const De=(e,t,n="en")=>{if(t&&typeof t=="number"){const o=t/24/60/60/1e3;return(0,re.format)((0,re.addDays)(new Date(e),o),"PPP",{locale:we[n]})}return"Unlimited"};var B=i(53209);const je=B.Ry().shape({name:B.Z_(g.translatedErrors.string).required(g.translatedErrors.required),type:B.Z_(g.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(g.translatedErrors.required),description:B.Z_().nullable(),lifespan:B.Rx().integer().min(0).nullable().defined(g.translatedErrors.required)}),ie=e=>{const t={allActionsIds:[],permissions:[]};return t.permissions=Object.keys(e).map(n=>({apiId:n,label:n.split("::")[1],controllers:(0,k.flatten)(Object.keys(e[n].controllers).map(o=>({controller:o,actions:(0,k.flatten)(e[n].controllers[o].map(r=>{const c=`${n}.${o}.${r}`;return n.includes("api::")&&t.allActionsIds.push(c),{action:r,actionId:c}}))})))})),t};var V=i(78862),K=i(19408),Ve=i(84734),le=i.n(Ve),Ge=i(45697),s=i.n(Ge);const W=({apiTokenName:e})=>{const{formatMessage:t}=(0,P.useIntl)();return(0,g.useFocusWhenNavigate)(),a.createElement(ae.Main,{"aria-busy":"true"},a.createElement(g.SettingsPageTitle,{name:"API Tokens"}),a.createElement(V.HeaderLayout,{primaryAction:a.createElement(K.Button,{disabled:!0,startIcon:a.createElement(le(),null),type:"button",size:"L"},t({id:"global.save",defaultMessage:"Save"})),title:e||t({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),a.createElement(V.ContentLayout,null,a.createElement(g.LoadingIndicatorPage,null)))};W.defaultProps={apiTokenName:null},W.propTypes={apiTokenName:s().string};const Ue=W;var Fe=i(68717),$e=i.n(Fe),S=i(9008),He=i(27590),ce=i.n(He),Ke=i(78143),We=(e,t,n)=>new Promise((o,r)=>{var c=m=>{try{u(n.next(m))}catch(y){r(y)}},l=m=>{try{u(n.throw(m))}catch(y){r(y)}},u=m=>m.done?o(m.value):Promise.resolve(m.value).then(c,l);u((n=n.apply(e,t)).next())});const z=({onRegenerate:e,idToRegenerate:t})=>{const{formatMessage:n}=(0,P.useIntl)(),[o,r]=(0,a.useState)(!1),{regenerateData:c,isLoadingConfirmation:l}=(0,Ke.rW)(t,e),u=()=>We(void 0,null,function*(){c(),r(!1)});return a.createElement(a.Fragment,null,a.createElement(K.Button,{startIcon:a.createElement(ce(),null),type:"button",size:"S",variant:"tertiary",onClick:()=>r(!0),name:"regenerate"},n({id:"Settings.apiTokens.regenerate",defaultMessage:"Regenerate"})),a.createElement(g.ConfirmDialog,{bodyText:{id:"Settings.apiTokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:a.createElement(ce(),null),isConfirmButtonLoading:l,isOpen:o,onToggleDialog:()=>r(!1),onConfirm:u,leftButtonText:{id:"Settings.apiTokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.apiTokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.apiTokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};z.defaultProps={onRegenerate(){}},z.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired};const de=z;var ze=Object.defineProperty,Ye=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xe=(e,t)=>{for(var n in t||(t={}))Qe.call(t,n)&&ue(e,n,t[n]);if(pe)for(var n of pe(t))Je.call(t,n)&&ue(e,n,t[n]);return e},qe=(e,t)=>Ye(e,Ze(t));const Y=({apiToken:e,setApiToken:t,canEditInputs:n,canRegenerate:o,isSubmitting:r})=>{const{formatMessage:c}=(0,P.useIntl)(),l=u=>{t(qe(Xe({},e),{accessKey:u}))};return a.createElement(V.HeaderLayout,{title:(e==null?void 0:e.name)||c({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"}),primaryAction:n?a.createElement(S.Stack,{horizontal:!0,spacing:2},o&&(e==null?void 0:e.id)&&a.createElement(de,{onRegenerate:l,idToRegenerate:e==null?void 0:e.id}),a.createElement(K.Button,{disabled:r,loading:r,startIcon:a.createElement(le(),null),type:"submit",size:"S"},c({id:"global.save",defaultMessage:"Save"}))):o&&(e==null?void 0:e.id)&&a.createElement(de,{onRegenerate:l,idToRegenerate:e==null?void 0:e.id}),navigationAction:a.createElement(g.Link,{startIcon:a.createElement($e(),null),to:"/settings/api-tokens"},c({id:"global.back",defaultMessage:"Back"}))})};Y.propTypes={apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().number,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setApiToken:s().func.isRequired,isSubmitting:s().bool.isRequired},Y.defaultProps={apiToken:void 0};const _e=Y;var et=i(30741),tt=i(67483),nt=i.n(tt),at=i(74855),st=i(69666),ot=i.n(st);const Z=({apiToken:e})=>{const{formatMessage:t}=(0,P.useIntl)(),n=(0,g.useNotification)(),{trackUsage:o}=(0,g.useTracking)(),r=(0,a.useRef)(o);return a.createElement(g.ContentBox,{endAction:e&&a.createElement("span",{style:{alignSelf:"start"}},a.createElement(at.CopyToClipboard,{onCopy:()=>{r.current("didCopyTokenKey"),n({type:"success",message:{id:"Settings.apiTokens.notification.copied"}})},text:e},a.createElement(et.IconButton,{label:t({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:a.createElement(nt(),null),style:{padding:0,height:"1rem"}}))),title:e||t({id:"Settings.apiTokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:t(e?{id:"Settings.apiTokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.apiTokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:a.createElement(ot(),null),iconBackground:"neutral100"})};Z.defaultProps={apiToken:null},Z.propTypes={apiToken:s().string};const rt=Z;var A=i(5493),T=i(34626),C=i(43808),it=i(59626),lt=i(55967),h=i(49425);const Q=({errors:e,onChange:t,canEditInputs:n,isCreating:o,values:r,apiToken:c,onDispatch:l,setHasChangedPermissions:u})=>{var m,y,N,b;const{formatMessage:f}=(0,P.useIntl)(),[D]=(0,g.usePersistentState)("strapi-admin-language","en"),R=({target:{value:d}})=>{u(!1),d==="full-access"&&l({type:"SELECT_ALL_ACTIONS"}),d==="read-only"&&l({type:"ON_CHANGE_READ_ONLY"})};return a.createElement(A.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},a.createElement(S.Stack,{spacing:4},a.createElement(h.Typography,{variant:"delta",as:"h2"},f({id:"global.details",defaultMessage:"Details"})),a.createElement(T.Grid,{gap:5},a.createElement(T.GridItem,{key:"name",col:6,xs:12},a.createElement(lt.TextInput,{name:"name",error:e.name?f((m=e.name)!=null&&m.id?e.name:{id:e.name,defaultMessage:e.name}):null,label:f({id:"Settings.apiTokens.form.name",defaultMessage:"Name"}),onChange:t,value:r.name,disabled:!n,required:!0})),a.createElement(T.GridItem,{key:"description",col:6,xs:12},a.createElement(it.Textarea,{label:f({id:"Settings.apiTokens.form.description",defaultMessage:"Description"}),name:"description",error:e.description?f((y=e.description)!=null&&y.id?e.description:{id:e.description,defaultMessage:e.description}):null,onChange:t,disabled:!n},r.description)),a.createElement(T.GridItem,{key:"lifespan",col:6,xs:12},a.createElement(C.Select,{name:"lifespan",label:f({id:"Settings.apiTokens.form.duration",defaultMessage:"Token duration"}),value:r.lifespan!==null?r.lifespan:"0",error:e.lifespan?f((N=e.lifespan)!=null&&N.id?e.lifespan:{id:e.lifespan,defaultMessage:e.lifespan}):null,onChange:d=>{t({target:{name:"lifespan",value:d}})},required:!0,disabled:!o,placeholder:"Select"},a.createElement(C.Option,{value:"604800000"},f({id:"Settings.apiTokens.duration.7-days",defaultMessage:"7 days"})),a.createElement(C.Option,{value:"2592000000"},f({id:"Settings.apiTokens.duration.30-days",defaultMessage:"30 days"})),a.createElement(C.Option,{value:"7776000000"},f({id:"Settings.apiTokens.duration.90-days",defaultMessage:"90 days"})),a.createElement(C.Option,{value:"0"},f({id:"Settings.apiTokens.duration.unlimited",defaultMessage:"Unlimited"}))),a.createElement(h.Typography,{variant:"pi",textColor:"neutral600"},!o&&`${f({id:"Settings.apiTokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${De(c==null?void 0:c.createdAt,parseInt(r.lifespan,10),D)}`)),a.createElement(T.GridItem,{key:"type",col:6,xs:12},a.createElement(C.Select,{name:"type",label:f({id:"Settings.apiTokens.form.type",defaultMessage:"Token type"}),value:r==null?void 0:r.type,error:e.type?f((b=e.type)!=null&&b.id?e.type:{id:e.type,defaultMessage:e.type}):null,onChange:d=>{R({target:{value:d}}),t({target:{name:"type",value:d}})},placeholder:"Select",required:!0,disabled:!n},a.createElement(C.Option,{value:"read-only"},f({id:"Settings.apiTokens.types.read-only",defaultMessage:"Read-only"})),a.createElement(C.Option,{value:"full-access"},f({id:"Settings.apiTokens.types.full-access",defaultMessage:"Full access"})),a.createElement(C.Option,{value:"custom"},f({id:"Settings.apiTokens.types.custom",defaultMessage:"Custom"})))))))};Q.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}).isRequired,isCreating:s().bool.isRequired,apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().number,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},Q.defaultProps={errors:{},apiToken:{}};const ct=Q;var J=i(96654),me=i(81325),dt=i(67826),pt=i(70736),ut=i.n(pt),G=i(16384),ge=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,ft=(e,t)=>{var n={};for(var o in e)mt.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&ge)for(var o of ge(e))t.indexOf(o)<0&&gt.call(e,o)&&(n[o]=e[o]);return n};const fe=(0,a.createContext)({}),ye=e=>{var t=e,{children:n}=t,o=ft(t,["children"]);return a.createElement(fe.Provider,{value:o},n)},X=()=>(0,a.useContext)(fe);ye.propTypes={children:s().node.isRequired};const ve=G.css`
  background: ${e=>e.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,yt=(0,G.default)(A.Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${e=>e.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${e=>e.isActive&&ve}
  &:hover {
    ${ve}
  }
`,vt=G.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,q=({controllers:e,label:t,orderNumber:n,disabled:o,onExpanded:r,indexExpandendCollapsedContent:c})=>{const{value:{onChangeSelectAll:l,onChange:u,selectedActions:m,setSelectedAction:y,selectedAction:N}}=X(),[b,f]=(0,a.useState)(!1),D=()=>{f(d=>!d),r(n)};(0,a.useEffect)(()=>{c!==null&&c!==n&&b&&f(!1)},[c,n,b]);const R=d=>d===N;return a.createElement(J.Accordion,{expanded:b,onToggle:D,variant:n%2?"primary":"secondary"},a.createElement(J.AccordionToggle,{title:(0,k.capitalize)(t)}),a.createElement(J.AccordionContent,null,e==null?void 0:e.map(d=>{const x=d.actions.every(E=>m.includes(E.actionId)),v=d.actions.some(E=>m.includes(E.actionId));return a.createElement(A.Box,{key:`${t}.${d==null?void 0:d.controller}`},a.createElement(dt.Flex,{justifyContent:"space-between",alignItems:"center",padding:4},a.createElement(A.Box,{paddingRight:4},a.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},d==null?void 0:d.controller)),a.createElement(vt,null),a.createElement(A.Box,{paddingLeft:4},a.createElement(me.Checkbox,{value:x,indeterminate:!x&&v,onValueChange:()=>{l({target:{value:[...d.actions]}})},disabled:o},"Select all"))),a.createElement(T.Grid,{gap:4,padding:4},(d==null?void 0:d.actions)&&(d==null?void 0:d.actions.map(E=>a.createElement(T.GridItem,{col:6,key:E.actionId},a.createElement(yt,{isActive:R(E.actionId),padding:2,hasRadius:!0},a.createElement(me.Checkbox,{value:m.includes(E.actionId),name:E.actionId,onValueChange:()=>{u({target:{value:E.actionId}})},disabled:o},E.action),a.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>y({target:{value:E.actionId}}),style:{display:"inline-flex",alignItems:"center"}},a.createElement(ut(),null))))))))})))};q.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},q.propTypes={controllers:s().array,orderNumber:s().number,label:s().string.isRequired,disabled:s().bool,onExpanded:s().func,indexExpandendCollapsedContent:s().number};const Et=q;var ht=Object.defineProperty,U=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,Te=(e,t,n)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tt=(e,t)=>{for(var n in t||(t={}))Ee.call(t,n)&&Te(e,n,t[n]);if(U)for(var n of U(t))he.call(t,n)&&Te(e,n,t[n]);return e},Pt=(e,t)=>{var n={};for(var o in e)Ee.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&U)for(var o of U(e))t.indexOf(o)<0&&he.call(e,o)&&(n[o]=e[o]);return n};const _=e=>{var t=e,{section:n}=t,o=Pt(t,["section"]);const[r,c]=(0,a.useState)(null),l=u=>c(u);return a.createElement(A.Box,{padding:4,background:"neutral0"},n&&n.map((u,m)=>a.createElement(Et,Tt({key:u.apiId,label:u.label,controllers:u.controllers,orderNumber:m,indexExpandendCollapsedContent:r,onExpanded:l,name:u.apiId},o))))};_.defaultProps={section:null},_.propTypes={section:s().arrayOf(s().object)};const Ct=_;var Ot=i(35161),St=i.n(Ot),At=i(13217),bt=i.n(At);const It=e=>{switch(e){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},kt=(0,G.default)(A.Box)`
  margin: -1px;
  border-radius: ${({theme:e})=>e.spaces[1]} 0 0 ${({theme:e})=>e.spaces[1]};
`;function ee({route:e}){const{formatMessage:t}=(0,P.useIntl)(),{method:n,handler:o,path:r}=e,c=r?bt()(r.split("/")):[],[l="",u=""]=o?o.split("."):[],m=It(e.method);return a.createElement(S.Stack,{spacing:2},a.createElement(h.Typography,{variant:"delta",as:"h3"},t({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",a.createElement("span",null,l),a.createElement(h.Typography,{variant:"delta",textColor:"primary600"},".",u)),a.createElement(S.Stack,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},a.createElement(kt,{background:m.background,borderColor:m.border,padding:2},a.createElement(h.Typography,{fontWeight:"bold",textColor:m.text},n)),a.createElement(A.Box,{paddingLeft:2,paddingRight:2},St()(c,y=>a.createElement(h.Typography,{key:y,textColor:y.includes(":")?"neutral600":"neutral900"},"/",y)))))}ee.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},ee.propTypes={route:s().shape({handler:s().string,method:s().string,path:s().string})};const Rt=ee,xt=()=>{var e;const{value:{selectedAction:t,routes:n}}=X(),{formatMessage:o}=(0,P.useIntl)(),r=t==null?void 0:t.split(".")[0];return a.createElement(T.GridItem,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},t?a.createElement(S.Stack,{spacing:2},(e=n[r])==null?void 0:e.map(c=>{var l,u;return((u=(l=c.config.auth)==null?void 0:l.scope)==null?void 0:u.includes(t))||c.handler===t?a.createElement(Rt,{key:c.handler,route:c}):null})):a.createElement(S.Stack,{spacing:2},a.createElement(h.Typography,{variant:"delta",as:"h3"},o({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),a.createElement(h.Typography,{as:"p",textColor:"neutral600"},o({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var Mt=Object.defineProperty,F=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,Oe=(e,t,n)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Nt=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&Oe(e,n,t[n]);if(F)for(var n of F(t))Ce.call(t,n)&&Oe(e,n,t[n]);return e},Lt=(e,t)=>{var n={};for(var o in e)Pe.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&F)for(var o of F(e))t.indexOf(o)<0&&Ce.call(e,o)&&(n[o]=e[o]);return n};const Bt=e=>{var t=Lt(e,[]);const{value:{data:n}}=X(),{formatMessage:o}=(0,P.useIntl)();return a.createElement(T.Grid,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},a.createElement(T.GridItem,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},a.createElement(S.Stack,{spacing:2},a.createElement(h.Typography,{variant:"delta",as:"h2"},o({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),a.createElement(h.Typography,{as:"p",textColor:"neutral600"},o({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),(n==null?void 0:n.permissions)&&a.createElement(Ct,Nt({section:n==null?void 0:n.permissions},t))),a.createElement(xt,null))},wt=(0,a.memo)(Bt),te=({apiToken:e,errors:t,onChange:n,canEditInputs:o,isCreating:r,values:c,onDispatch:l,setHasChangedPermissions:u})=>a.createElement(V.ContentLayout,null,a.createElement(S.Stack,{spacing:6},Boolean(e==null?void 0:e.name)&&a.createElement(rt,{apiToken:e==null?void 0:e.accessKey}),a.createElement(ct,{errors:t,onChange:n,canEditInputs:o,isCreating:r,values:c,apiToken:e,onDispatch:l,setHasChangedPermissions:u}),a.createElement(wt,{disabled:!o||(c==null?void 0:c.type)==="read-only"||(c==null?void 0:c.type)==="full-access"})));te.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().number,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,isCreating:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}).isRequired,onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},te.defaultProps={errors:{},apiToken:{}};const Dt=te;var jt=i(87751),Vt=Object.defineProperty,Gt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,Ae=(e,t,n)=>t in e?Vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ht=(e,t)=>{for(var n in t||(t={}))Ft.call(t,n)&&Ae(e,n,t[n]);if(Se)for(var n of Se(t))$t.call(t,n)&&Ae(e,n,t[n]);return e},Kt=(e,t)=>Gt(e,Ut(t));const Wt=(e,t=[])=>Kt(Ht({},e),{selectedAction:null,routes:[],selectedActions:[],data:ie(t)});var zt=i(8041),Yt=Object.defineProperty,be=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable,Ie=(e,t,n)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jt=(e,t)=>{for(var n in t||(t={}))Zt.call(t,n)&&Ie(e,n,t[n]);if(be)for(var n of be(t))Qt.call(t,n)&&Ie(e,n,t[n]);return e};const Xt={data:{},selectedActions:[]},qt=(e,t)=>(0,zt.default)(e,n=>{switch(t.type){case"ON_CHANGE":{n.selectedActions.includes(t.value)?(0,k.pull)(n.selectedActions,t.value):n.selectedActions.push(t.value);break}case"SELECT_ALL_IN_PERMISSION":{t.value.every(r=>n.selectedActions.includes(r.actionId))?t.value.forEach(r=>{(0,k.pull)(n.selectedActions,r.actionId)}):t.value.forEach(r=>{n.selectedActions.push(r.actionId)});break}case"SELECT_ALL_ACTIONS":{n.selectedActions=[...n.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const o=n.data.allActionsIds.filter(r=>r.includes("find")||r.includes("findOne"));n.selectedActions=[...o];break}case"UPDATE_PERMISSIONS_LAYOUT":{n.data=ie(t.value);break}case"UPDATE_ROUTES":{n.routes=Jt({},t.value);break}case"UPDATE_PERMISSIONS":{n.selectedActions=[...t.value];break}case"SET_SELECTED_ACTION":{n.selectedAction=t.value;break}default:return n}});var _t=Object.defineProperty,en=Object.defineProperties,tn=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,nn=Object.prototype.hasOwnProperty,an=Object.prototype.propertyIsEnumerable,Re=(e,t,n)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))nn.call(t,n)&&Re(e,n,t[n]);if(ke)for(var n of ke(t))an.call(t,n)&&Re(e,n,t[n]);return e},xe=(e,t)=>en(e,tn(t)),$=(e,t,n)=>new Promise((o,r)=>{var c=m=>{try{u(n.next(m))}catch(y){r(y)}},l=m=>{try{u(n.throw(m))}catch(y){r(y)}},u=m=>m.done?o(m.value):Promise.resolve(m.value).then(c,l);u((n=n.apply(e,t)).next())});const sn="Name already taken",on=()=>{var e;(0,g.useFocusWhenNavigate)();const{formatMessage:t}=(0,P.useIntl)(),{lockApp:n,unlockApp:o}=(0,g.useOverlayBlocker)(),r=(0,g.useNotification)(),c=(0,se.useHistory)(),[l,u]=(0,a.useState)((e=c.location.state)!=null&&e.apiToken.accessKey?w({},c.location.state.apiToken):null),{trackUsage:m}=(0,g.useTracking)(),y=(0,a.useRef)(m),{setCurrentStep:N}=(0,g.useGuidedTour)(),{allowedActions:{canCreate:b,canUpdate:f,canRegenerate:D}}=(0,g.useRBAC)(jt.Z.settings["api-tokens"]),[R,d]=(0,a.useReducer)(qt,Xt,p=>Wt(p,{})),{params:{id:x}}=(0,se.useRouteMatch)("/settings/api-tokens/:id"),v=x==="create";(0,oe.useQuery)("content-api-permissions",()=>$(void 0,null,function*(){const[p,M]=yield Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(L=>$(void 0,null,function*(){const{data:I}=yield j.be.get(L);return I.data})));d({type:"UPDATE_PERMISSIONS_LAYOUT",value:p}),d({type:"UPDATE_ROUTES",value:M}),l&&((l==null?void 0:l.type)==="read-only"&&d({type:"ON_CHANGE_READ_ONLY"}),(l==null?void 0:l.type)==="full-access"&&d({type:"SELECT_ALL_ACTIONS"}),(l==null?void 0:l.type)==="custom"&&d({type:"UPDATE_PERMISSIONS",value:l==null?void 0:l.permissions}))}),{onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,a.useEffect)(()=>{y.current(v?"didAddTokenFromList":"didEditTokenFromList")},[v]);const{status:E}=(0,oe.useQuery)(["api-token",x],()=>$(void 0,null,function*(){const{data:{data:p}}=yield j.be.get(`/admin/api-tokens/${x}`);return u(w({},p)),(p==null?void 0:p.type)==="read-only"&&d({type:"ON_CHANGE_READ_ONLY"}),(p==null?void 0:p.type)==="full-access"&&d({type:"SELECT_ALL_ACTIONS"}),(p==null?void 0:p.type)==="custom"&&d({type:"UPDATE_PERMISSIONS",value:p==null?void 0:p.permissions}),p}),{enabled:!v&&!l,onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),rn=(p,M)=>$(void 0,null,function*(){var L,I,H;y.current(v?"willCreateToken":"willEditToken"),n();const mn=p.lifespan&&parseInt(p.lifespan,10)&&p.lifespan!=="0"?parseInt(p.lifespan,10):null;try{const{data:{data:O}}=v?yield j.be.post("/admin/api-tokens",xe(w({},p),{lifespan:mn,permissions:p.type==="custom"?R.selectedActions:null})):yield j.be.put(`/admin/api-tokens/${x}`,{name:p.name,description:p.description,type:p.type,permissions:p.type==="custom"?R.selectedActions:null});v&&(c.replace(`/settings/api-tokens/${O.id}`,{apiToken:O}),N("apiTokens.success")),o(),u(w({},O)),r({type:"success",message:t(v?{id:"notification.success.tokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.tokenedited",defaultMessage:"API Token successfully edited"})}),y.current(v?"didCreateToken":"didEditToken",{type:l.type})}catch(O){const gn=(0,Be.Iz)(O.response.data);M.setErrors(gn),((H=(I=(L=O==null?void 0:O.response)==null?void 0:L.data)==null?void 0:I.error)==null?void 0:H.message)===sn?r({type:"warning",message:(0,k.get)(O,"response.data.message","notification.error.tokennamenotunique")}):r({type:"warning",message:(0,k.get)(O,"response.data.message","notification.error")}),o()}}),[ln,ne]=(0,a.useState)(!1),cn=({target:{value:p}})=>{ne(!0),d({type:"ON_CHANGE",value:p})},dn=({target:{value:p}})=>{ne(!0),d({type:"SELECT_ALL_IN_PERMISSION",value:p})},pn=({target:{value:p}})=>{d({type:"SET_SELECTED_ACTION",value:p})},un=xe(w({},R),{onChange:cn,onChangeSelectAll:dn,setSelectedAction:pn}),Me=f&&!v||b&&v;return!v&&!l&&E!=="success"?a.createElement(Ue,{apiTokenName:l==null?void 0:l.name}):a.createElement(ye,{value:un},a.createElement(ae.Main,null,a.createElement(g.SettingsPageTitle,{name:"API Tokens"}),a.createElement(Le.Formik,{validationSchema:je,validateOnChange:!1,initialValues:{name:(l==null?void 0:l.name)||"",description:(l==null?void 0:l.description)||"",type:l==null?void 0:l.type,lifespan:l!=null&&l.lifespan?l.lifespan.toString():l==null?void 0:l.lifespan},enableReinitialize:!0,onSubmit:(p,M)=>rn(p,M)},({errors:p,handleChange:M,isSubmitting:L,values:I,setFieldValue:H})=>(ln&&(I==null?void 0:I.type)!=="custom"&&H("type","custom"),a.createElement(g.Form,null,a.createElement(_e,{apiToken:l,setApiToken:u,canEditInputs:Me,canRegenerate:D,isSubmitting:L}),a.createElement(Dt,{apiToken:l,errors:p,onChange:M,canEditInputs:Me,isCreating:v,values:I,onDispatch:d,setHasChangedPermissions:ne}))))))}}}]);
