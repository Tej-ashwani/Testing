import{j as e}from"./utils-JTeuTVXr.js";import{T as r}from"./Text-DhoaToas.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O={title:"Design System/Typography/Text",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:{type:"select"},options:["span","label","caption"],description:"HTML element to render"},variant:{control:{type:"select"},options:["label","caption","helper"],description:"Text variant"},size:{control:{type:"select"},options:["xs","sm","base","lg"],description:"Text size"},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"],description:"Font weight"}}},a={args:{variant:"label",children:"Form Field Label"}},s={args:{variant:"caption",children:"Image Caption Text"}},t={args:{variant:"helper",children:"Helper text provides additional guidance"}},o={args:{weight:"bold",children:"Bold emphasized text"}},n={args:{size:"lg",children:"Larger text element"}},l={args:{as:"label",htmlFor:"example-input",children:"Form Label Element"},render:z=>e.jsxs("div",{children:[e.jsx(r,{...z}),e.jsx("input",{id:"example-input",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm"})]})},i={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"label",children:"Label Text"}),e.jsx("input",{className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm"})]}),e.jsxs("div",{children:[e.jsx("img",{src:"https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Example",className:"w-64 h-48 object-cover rounded"}),e.jsx(r,{variant:"caption",className:"block mt-1",children:"Caption: Professional workspace with computer"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"label",children:"Password"}),e.jsx("input",{type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm"}),e.jsx(r,{variant:"helper",className:"mt-1",children:"Helper: Password must be at least 8 characters"})]})]})};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'label',
    children: 'Form Field Label'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'caption',
    children: 'Image Caption Text'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'helper',
    children: 'Helper text provides additional guidance'
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,w,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    weight: 'bold',
    children: 'Bold emphasized text'
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var T,j,L;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Larger text element'
  }
}`,...(L=(j=n.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var N,f,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    as: 'label',
    htmlFor: 'example-input',
    children: 'Form Label Element'
  },
  render: args => <div>\r
      <Text {...args} />\r
      <input id="example-input" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />\r
    </div>
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var F,S,H;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div>\r
        <Text variant="label">Label Text</Text>\r
        <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />\r
      </div>\r
      \r
      <div>\r
        <img src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Example" className="w-64 h-48 object-cover rounded" />\r
        <Text variant="caption" className="block mt-1">\r
          Caption: Professional workspace with computer\r
        </Text>\r
      </div>\r
      \r
      <div>\r
        <Text variant="label">Password</Text>\r
        <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />\r
        <Text variant="helper" className="mt-1">\r
          Helper: Password must be at least 8 characters\r
        </Text>\r
      </div>\r
    </div>
}`,...(H=(S=i.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};const A=["Label","Caption","Helper","Bold","Large","AsLabel","Overview"];export{l as AsLabel,o as Bold,s as Caption,t as Helper,a as Label,n as Large,i as Overview,A as __namedExportsOrder,O as default};
