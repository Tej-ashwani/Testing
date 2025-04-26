import{j as l,c as J,a as K}from"./utils-JTeuTVXr.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P=K("font-bold leading-tight tracking-tight",{variants:{level:{1:"text-4xl md:text-5xl lg:text-6xl",2:"text-3xl md:text-4xl lg:text-5xl",3:"text-2xl md:text-3xl lg:text-4xl",4:"text-xl md:text-2xl lg:text-3xl",5:"text-lg md:text-xl lg:text-2xl",6:"text-base md:text-lg lg:text-xl"},weight:{normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},align:{left:"text-left",center:"text-center",right:"text-right"}},defaultVariants:{weight:"bold",align:"left"}}),e=({as:g,level:v,weight:R,align:$,className:z,children:A,...B})=>{const G=g||`h${v}`;return l.jsx(G,{className:J(P({level:v,weight:R,align:$,className:z})),...B,children:A})};try{e.displayName="Heading",e.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"bold"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}}}catch{}const Y={title:"Design System/Typography/Heading",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6],description:"Heading level (h1-h6)"},as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],description:"HTML element to use (overrides level for semantic HTML)"},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"],description:"Font weight"},align:{control:{type:"select"},options:["left","center","right"],description:"Text alignment"}}},a={args:{level:1,children:"Heading Level 1"}},r={args:{level:2,children:"Heading Level 2"}},n={args:{level:3,children:"Heading Level 3"}},t={args:{level:4,children:"Heading Level 4"}},s={args:{level:5,children:"Heading Level 5"}},i={args:{level:6,children:"Heading Level 6"}},d={args:{level:2,align:"center",children:"Centered Heading"}},o={args:{level:2,weight:"normal",children:"Light Weight Heading"}},c={render:()=>l.jsxs("div",{className:"space-y-6",children:[l.jsx(e,{level:1,children:"Heading Level 1"}),l.jsx(e,{level:2,children:"Heading Level 2"}),l.jsx(e,{level:3,children:"Heading Level 3"}),l.jsx(e,{level:4,children:"Heading Level 4"}),l.jsx(e,{level:5,children:"Heading Level 5"}),l.jsx(e,{level:6,children:"Heading Level 6"})]})};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Heading Level 1'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,x,H;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Heading Level 2'
  }
}`,...(H=(x=r.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var L,f,y;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'Heading Level 3'
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,j,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'Heading Level 4'
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var S,_,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'Heading Level 5'
  }
}`,...(T=(_=s.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var V,N,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: 'Heading Level 6'
  }
}`,...(q=(N=i.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var C,W,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    level: 2,
    align: 'center',
    children: 'Centered Heading'
  }
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var E,M,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: 2,
    weight: 'normal',
    children: 'Light Weight Heading'
  }
}`,...(k=(M=o.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var D,F,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <Heading level={1}>Heading Level 1</Heading>\r
      <Heading level={2}>Heading Level 2</Heading>\r
      <Heading level={3}>Heading Level 3</Heading>\r
      <Heading level={4}>Heading Level 4</Heading>\r
      <Heading level={5}>Heading Level 5</Heading>\r
      <Heading level={6}>Heading Level 6</Heading>\r
    </div>
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const Z=["Level1","Level2","Level3","Level4","Level5","Level6","Centered","LightWeight","Overview"];export{d as Centered,a as Level1,r as Level2,n as Level3,t as Level4,s as Level5,i as Level6,o as LightWeight,c as Overview,Z as __namedExportsOrder,Y as default};
