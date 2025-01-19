import{p as Q,m as se,h as Pe,i as pe,j as Z,b as k,k as ee,e as l,l as z,v as J,M as Fe,I as ne,E as ae,q as Re,x as Se,y as Be,z as Te,A as $e,B as De,C as Ee,D as Le,r as $,G as Oe,H as Ae,J as We,K as Me,L as Ne,N as Ue,O as Ke,F as W,P as G,Q as qe,R as je,S as ze,T as He,U as Xe,W as Ye,X as Ge,Y as Je,Z as de,$ as Qe,s as Ze,d as et,w as L,g as tt,o as T,a as m,a0 as ce,u as O,c as A,a1 as fe,f as ve,t as me,V as j}from"./index-BZuhAmpw.js";import{u as lt}from"./list-BnpDxUAg.js";import{b as he,V as X,a as nt}from"./route-block-DKs480U_.js";import{V as at,m as it,u as xe,a as ot,b as rt,c as ge,d as ye}from"./VInput-CYGu0ldi.js";class ie{constructor(o){let{x:a,y:i,width:t,height:n}=o;this.x=a,this.y=i,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function st(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,n,r,c,f;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),n=+t[0],r=+t[5],c=+t[12],f=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),n=+t[0],r=+t[3],c=+t[4],f=+t[5];else return new ie(o);const v=a.transformOrigin,g=o.x-c-(1-n)*parseFloat(v),h=o.y-f-(1-r)*parseFloat(v.slice(v.indexOf(" ")+1)),I=n?o.width/n:e.offsetWidth+1,b=r?o.height/r:e.offsetHeight+1;return new ie({x:g,y:h,width:I,height:b})}else return new ie(o)}function ut(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const dt="cubic-bezier(0.4, 0, 0.2, 1)",ct=Q({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...se(),...Pe({transition:{component:pe}})},"VCounter"),ft=Z()({name:"VCounter",functional:!0,props:ct(),setup(e,o){let{slots:a}=o;const i=k(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ee(()=>l(Fe,{transition:e.transition},{default:()=>[z(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[J,e.active]])]})),{}}}),vt=Q({floating:Boolean,...se()},"VFieldLabel"),Y=Z()({name:"VFieldLabel",props:vt(),setup(e,o){let{slots:a}=o;return ee(()=>l(at,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),mt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Ce=Q({appendInnerIcon:ne,bgColor:String,clearable:Boolean,clearIcon:{type:ne,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ne,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>mt.includes(e)},"onClick:clear":ae(),"onClick:appendInner":ae(),"onClick:prependInner":ae(),...se(),...Re(),...Se(),...Be()},"VField"),Ve=Z()({name:"VField",inheritAttrs:!1,props:{id:String,...it(),...Ce()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const{themeClasses:n}=Te(e),{loaderClasses:r}=$e(e),{focusClasses:c,isFocused:f,focus:v,blur:g}=xe(e),{InputIcon:h}=ot(e),{roundedClasses:I}=De(e),{rtlClasses:b}=Ee(),p=k(()=>e.dirty||e.active),x=k(()=>!e.singleLine&&!!(e.label||t.label)),F=Le(),s=k(()=>e.id||`input-${F}`),u=k(()=>`${s.value}-messages`),D=$(),V=$(),H=$(),d=k(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:w,backgroundColorStyles:P}=Oe(Ae(e,"bgColor")),{textColorClasses:R,textColorStyles:te}=We(k(()=>e.error||e.disabled?void 0:p.value&&f.value?e.color:e.baseColor));Me(p,y=>{if(x.value){const C=D.value.$el,S=V.value.$el;requestAnimationFrame(()=>{const B=st(C),_=S.getBoundingClientRect(),q=_.x-B.x,N=_.y-B.y-(B.height/2-_.height/2),U=_.width/.75,K=Math.abs(U-B.width)>1?{maxWidth:ze(U)}:void 0,_e=getComputedStyle(C),ue=getComputedStyle(S),ke=parseFloat(_e.transitionDuration)*1e3||150,Ie=parseFloat(ue.getPropertyValue("--v-field-label-scale")),we=ue.getPropertyValue("color");C.style.visibility="visible",S.style.visibility="hidden",ut(C,{transform:`translate(${q}px, ${N}px) scale(${Ie})`,color:we,...K},{duration:ke,easing:dt,direction:y?"normal":"reverse"}).finished.then(()=>{C.style.removeProperty("visibility"),S.style.removeProperty("visibility")})})}},{flush:"post"});const M=k(()=>({isActive:p,isFocused:f,controlRef:H,blur:g,focus:v}));function le(y){y.target!==document.activeElement&&y.preventDefault()}function E(y){var C;y.key!=="Enter"&&y.key!==" "||(y.preventDefault(),y.stopPropagation(),(C=e["onClick:clear"])==null||C.call(e,new MouseEvent("click")))}return ee(()=>{var q,N,U;const y=e.variant==="outlined",C=!!(t["prepend-inner"]||e.prependInnerIcon),S=!!(e.clearable||t.clear),B=!!(t["append-inner"]||e.appendInnerIcon||S),_=()=>t.label?t.label({...M.value,label:e.label,props:{for:s.value}}):e.label;return l("div",G({class:["v-field",{"v-field--active":p.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!d.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":C,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!_(),[`v-field--variant-${e.variant}`]:!0},n.value,w.value,c.value,r.value,I.value,b.value,e.class],style:[P.value,e.style],onClick:le},a),[l("div",{class:"v-field__overlay"},null),l(Ne,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),C&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(h,{key:"prepend-icon",name:"prependInner"},null),(q=t["prepend-inner"])==null?void 0:q.call(t,M.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&x.value&&l(Y,{key:"floating-label",ref:V,class:[R.value],floating:!0,for:s.value,style:te.value},{default:()=>[_()]}),x.value&&l(Y,{key:"label",ref:D,for:s.value},{default:()=>[_()]}),(N=t.default)==null?void 0:N.call(t,{...M.value,props:{id:s.value,class:"v-field__input","aria-describedby":u.value},focus:v,blur:g})]),S&&l(Ue,{key:"clear"},{default:()=>[z(l("div",{class:"v-field__clearable",onMousedown:K=>{K.preventDefault(),K.stopPropagation()}},[l(Ke,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...M.value,props:{onKeydown:E,onFocus:v,onBlur:g,onClick:e["onClick:clear"]}}):l(h,{name:"clear",onKeydown:E,onFocus:v,onBlur:g},null)]})]),[[J,e.dirty]])]}),B&&l("div",{key:"append",class:"v-field__append-inner"},[(U=t["append-inner"])==null?void 0:U.call(t,M.value),e.appendInnerIcon&&l(h,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",R.value],style:te.value},[y&&l(W,null,[l("div",{class:"v-field__outline__start"},null),x.value&&l("div",{class:"v-field__outline__notch"},[l(Y,{ref:V,floating:!0,for:s.value},{default:()=>[_()]})]),l("div",{class:"v-field__outline__end"},null)]),d.value&&x.value&&l(Y,{ref:V,floating:!0,for:s.value},{default:()=>[_()]})])])}),{controlRef:H}}});function ht(e){const o=Object.keys(Ve.props).filter(a=>!qe(a)&&a!=="class"&&a!=="style");return je(e,o)}const oe=Symbol("Forwarded refs");function re(e,o){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,o);if(i)return i;a=Object.getPrototypeOf(a)}}function gt(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e[oe]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,n)){const c=Reflect.get(r.value,n);return typeof c=="function"?c.bind(r.value):c}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,n))return!0;return!1},set(t,n,r){if(Reflect.has(t,n))return Reflect.set(t,n,r);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const c of a)if(c.value&&Reflect.has(c.value,n))return Reflect.set(c.value,n,r);return!1},getOwnPropertyDescriptor(t,n){var c;const r=Reflect.getOwnPropertyDescriptor(t,n);if(r)return r;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const f of a){if(!f.value)continue;const v=re(f.value,n)??("_"in f.value?re((c=f.value._)==null?void 0:c.setupState,n):void 0);if(v)return v}for(const f of a){const v=f.value&&f.value[oe];if(!v)continue;const g=v.slice();for(;g.length;){const h=g.shift(),I=re(h.value,n);if(I)return I;const b=h.value&&h.value[oe];b&&g.push(...b)}}}}})}const yt=["color","file","time","date","datetime-local","week","month"],bt=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...rt(),...Ce()},"VTextField"),be=Z()({name:"VTextField",directives:{Intersect:He},inheritAttrs:!1,props:bt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const n=Xe(e,"modelValue"),{isFocused:r,focus:c,blur:f}=xe(e),v=k(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:(n.value??"").toString().length),g=k(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),h=k(()=>["plain","underlined"].includes(e.variant));function I(d,w){var P,R;!e.autofocus||!d||(R=(P=w[0].target)==null?void 0:P.focus)==null||R.call(P)}const b=$(),p=$(),x=$(),F=k(()=>yt.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function s(){var d;x.value!==document.activeElement&&((d=x.value)==null||d.focus()),r.value||c()}function u(d){i("mousedown:control",d),d.target!==x.value&&(s(),d.preventDefault())}function D(d){s(),i("click:control",d)}function V(d){d.stopPropagation(),s(),de(()=>{n.value=null,Qe(e["onClick:clear"],d)})}function H(d){var P;const w=d.target;if(n.value=w.value,(P=e.modelModifiers)!=null&&P.trim&&["text","search","password","tel","url"].includes(e.type)){const R=[w.selectionStart,w.selectionEnd];de(()=>{w.selectionStart=R[0],w.selectionEnd=R[1]})}}return ee(()=>{const d=!!(t.counter||e.counter!==!1&&e.counter!=null),w=!!(d||t.details),[P,R]=Ye(a),{modelValue:te,...M}=ge.filterProps(e),le=ht(e);return l(ge,G({ref:b,modelValue:n.value,"onUpdate:modelValue":E=>n.value=E,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":h.value},e.class],style:e.style},P,M,{centerAffix:!h.value,focused:r.value}),{...t,default:E=>{let{id:y,isDisabled:C,isDirty:S,isReadonly:B,isValid:_}=E;return l(Ve,G({ref:p,onMousedown:u,onClick:D,"onClick:clear":V,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},le,{id:y.value,active:F.value||S.value,dirty:S.value||e.dirty,disabled:C.value,focused:r.value,error:_.value===!1}),{...t,default:q=>{let{props:{class:N,...U}}=q;const K=z(l("input",G({ref:x,value:n.value,onInput:H,autofocus:e.autofocus,readonly:B.value,disabled:C.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:f},U,R),null),[[Ge("intersect"),{handler:I},null,{once:!0}]]);return l(W,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:N,"data-no-activator":""},[t.default(),K]):Je(K,{class:N}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:w?E=>{var y;return l(W,null,[(y=t.details)==null?void 0:y.call(t,E),d&&l(W,null,[l("span",null,null),l(ft,{active:e.persistentCounter||r.value,value:v.value,max:g.value,disabled:e.disabled},t.counter)])])}:void 0})}),gt({},b,p,x)}}),xt={key:0},Ct={key:0},Vt={__name:"list",setup(e){const o=lt(),{addItem:a,editItem:i,delItem:t,cancelEditItem:n,confirmEditItem:r,delFinishedItem:c}=o,{items:f,finishedItems:v}=Ze(o),g=$(""),h=$(null),I=$([]),b={required:F=>!!F||"欄位必填",length:F=>F.length>=3||"必須三個字以上"},p=()=>{console.log(h.value.isValid),h.value.isValid&&(a(g.value),h.value.reset())},x=(F,s)=>{I.value[s].isValid&&r(F)};return(F,s)=>(T(),et(tt,null,{default:L(()=>[l(nt,null,{default:L(()=>[l(X,{cols:"12"},{default:L(()=>s[1]||(s[1]=[m("h1",{class:"text-center"},"未完成",-1)])),_:1}),l(X,{cols:"12"},{default:L(()=>[l(be,{ref_key:"inputTextField",ref:h,modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]=u=>g.value=u),"append-icon":"mdi-plus",label:"新增事項",clearable:"",rules:[b.required,b.length],onKeydown:ce(p,["enter"]),"onClick:append":p},null,8,["modelValue","rules"]),l(ye,null,{default:L(()=>[s[3]||(s[3]=m("thead",null,[m("tr",null,[m("th",null,"事項"),m("th",null,"操作")])],-1)),m("tbody",null,[O(f).length===0?(T(),A("tr",xt,s[2]||(s[2]=[m("td",{colspan:"2"},"沒有項目",-1)]))):fe("",!0),(T(!0),A(W,null,ve(O(f),(u,D)=>(T(),A("tr",{key:u.id},[m("td",null,[z(l(be,{ref_for:!0,ref_key:"editTextField",ref:I,modelValue:u.model,"onUpdate:modelValue":V=>u.model=V,rules:[b.required,b.length],autofocus:"",onKeydown:ce(V=>x(u.id,D),["enter"])},null,8,["modelValue","onUpdate:modelValue","rules","onKeydown"]),[[J,u.edit]]),z(m("span",null,me(u.text),513),[[J,!u.edit]])]),m("td",null,[u.edit?(T(),A(W,{key:0},[l(j,{icon:"mdi-check",onClick:V=>x(u.id,D)},null,8,["onClick"]),l(j,{icon:"mdi-undo",onClick:V=>O(n)(u.id)},null,8,["onClick"])],64)):(T(),A(W,{key:1},[l(j,{icon:"mdi-pencil",onClick:V=>O(i)(u.id)},null,8,["onClick"]),l(j,{icon:"mdi-delete",onClick:V=>O(t)(u.id)},null,8,["onClick"])],64))])]))),128))])]),_:1})]),_:1}),l(X,{cols:"12"},{default:L(()=>s[4]||(s[4]=[m("h1",{class:"text-center"},"已完成",-1)])),_:1}),l(X,{cols:"12"},{default:L(()=>[l(ye,null,{default:L(()=>[s[6]||(s[6]=m("thead",null,[m("tr",null,[m("th",null,"事項"),m("th",null,"操作")])],-1)),m("tbody",null,[O(v).length===0?(T(),A("tr",Ct,s[5]||(s[5]=[m("td",{colspan:"2"},"沒有項目",-1)]))):fe("",!0),(T(!0),A(W,null,ve(O(v),u=>(T(),A("tr",{key:u.id},[m("td",null,me(u.text),1),m("td",null,[l(j,{icon:"mdi-delete",onClick:D=>O(c)(u.id)},null,8,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};typeof he=="function"&&he(Vt);export{Vt as default};
