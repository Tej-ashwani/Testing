import{j as e,c as W,a as F}from"./utils-JTeuTVXr.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const R=F("leading-relaxed",{variants:{size:{xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl"},weight:{normal:"font-normal",medium:"font-medium",semibold:"font-semibold"},align:{left:"text-left",center:"text-center",right:"text-right"}},defaultVariants:{size:"base",weight:"normal",align:"left"}}),a=({size:r,weight:E,align:D,className:O,children:V,...U})=>e.jsx("p",{className:W(R({size:r,weight:E,align:D,className:O})),...U,children:V});try{a.displayName="Paragraph",a.__docgenInfo={description:"",displayName:"Paragraph",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"base"'},{value:'"xs"'},{value:'"xl"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}const I={title:"Design System/Typography/Paragraph",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","base","lg","xl"],description:"Text size"},weight:{control:{type:"select"},options:["normal","medium","semibold"],description:"Font weight"},align:{control:{type:"select"},options:["left","center","right"],description:"Text alignment"}}},s={args:{children:"This is a default paragraph with standard size and weight."}},i={args:{size:"sm",children:"This is a small paragraph that can be used for less prominent content."}},t={args:{size:"lg",children:"This is a large paragraph that can be used for emphasizing content."}},n={args:{weight:"medium",children:"This paragraph has medium weight for slight emphasis."}},l={args:{align:"center",children:"This paragraph is center-aligned for special layout needs."}},o={args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl."},decorators:[r=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(r,{})})]},c={render:()=>e.jsxs("div",{className:"space-y-6",style:{maxWidth:"600px"},children:[e.jsx(a,{size:"xl",children:"Extra Large: Use for introductory paragraphs or important information."}),e.jsx(a,{size:"lg",children:"Large: For content that needs more emphasis than the standard text."}),e.jsx(a,{children:"Base (Default): The standard paragraph size for most body content. Offers excellent readability for extended reading."}),e.jsx(a,{size:"sm",children:"Small: Use for supporting information, captions, or when space is limited."}),e.jsx(a,{size:"xs",children:"Extra Small: Reserved for legal text, footnotes, or other minimal emphasis content."})]})};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a default paragraph with standard size and weight.'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,u,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'This is a small paragraph that can be used for less prominent content.'
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'This is a large paragraph that can be used for emphasizing content.'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,z,q;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    weight: 'medium',
    children: 'This paragraph has medium weight for slight emphasis.'
  }
}`,...(q=(z=n.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var w,b,P;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    align: 'center',
    children: 'This paragraph is center-aligned for special layout needs.'
  }
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var S,T,N;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.\`
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>\r
        <Story />\r
      </div>]
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var L,j,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-6" style={{
    maxWidth: '600px'
  }}>\r
      <Paragraph size="xl">\r
        Extra Large: Use for introductory paragraphs or important information.\r
      </Paragraph>\r
      <Paragraph size="lg">\r
        Large: For content that needs more emphasis than the standard text.\r
      </Paragraph>\r
      <Paragraph>\r
        Base (Default): The standard paragraph size for most body content. Offers excellent readability for extended reading.\r
      </Paragraph>\r
      <Paragraph size="sm">\r
        Small: Use for supporting information, captions, or when space is limited.\r
      </Paragraph>\r
      <Paragraph size="xs">\r
        Extra Small: Reserved for legal text, footnotes, or other minimal emphasis content.\r
      </Paragraph>\r
    </div>
}`,...(_=(j=c.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const k=["Default","Small","Large","Medium","Centered","LongParagraph","Overview"];export{l as Centered,s as Default,t as Large,o as LongParagraph,n as Medium,c as Overview,i as Small,k as __namedExportsOrder,I as default};
