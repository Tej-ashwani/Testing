import{j as e,c as V,a as Ee}from"./utils-JTeuTVXr.js";import{r as ze}from"./index-CleY8y_P.js";import{T as I}from"./Text-uUPv_D_w.js";import{c as E}from"./createLucideIcon-BBtjk-RZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=E("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=E("FishSymbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=E("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Fe=Ee("flex h-10 px-3 py-2 bg-background border border-input rounded-md transition-colors",{variants:{size:{sm:"h-8 text-sm",md:"h-10 text-base",lg:"h-12 text-lg"},variant:{default:"shadow-sm",filled:"bg-muted/50 border-transparent hover:bg-muted/80 focus-visible:bg-background",outline:"border-2"},state:{default:"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",error:"border-destructive focus-visible:ring-destructive text-destructive",success:"border-green-500 focus-visible:ring-green-500"}},defaultVariants:{size:"md",variant:"default",state:"default"}}),qe=Ee("grid gap-1.5",{variants:{fullWidth:{true:"w-full",false:"w-auto"}},defaultVariants:{fullWidth:!1}}),r=ze.forwardRef(({label:a,helperText:j,errorMessage:s,leftIcon:S,rightIcon:w,isLoading:t,fullWidth:T,className:je,size:Te,variant:We,disabled:W,state:Ne=s?"error":"default",...N},Ve)=>e.jsxs("div",{className:V(qe({fullWidth:T})),children:[a&&e.jsx(I,{as:"label",htmlFor:N.id,variant:"label",children:a}),e.jsxs("div",{className:"relative flex items-center",children:[S&&e.jsx("div",{className:"absolute left-3 flex items-center pointer-events-none text-muted-foreground",children:S}),e.jsx("input",{ref:Ve,className:V(Fe({size:Te,variant:We,state:Ne,className:je}),S&&"pl-10",w&&"pr-10",t&&"pr-10 cursor-wait",T&&"w-full",W&&"opacity-50 cursor-not-allowed"),disabled:W||t,...N}),t&&e.jsx("div",{className:"absolute right-3 flex items-center pointer-events-none",children:e.jsxs("svg",{className:"animate-spin h-5 w-5 text-muted-foreground",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),w&&!t&&e.jsx("div",{className:"absolute right-3 flex items-center pointer-events-none text-muted-foreground",children:w})]}),j&&!s&&e.jsx(I,{variant:"helper",children:j}),s&&e.jsx(I,{variant:"helper",className:"text-destructive",children:s})]}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"React.ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outline"'},{value:'"filled"'}]}},state:{defaultValue:{value:"errorMessage ? 'error' : 'default'"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'}]}}}}}catch{}const Oe={title:"Design System/Input/TextInput",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input field"},variant:{control:{type:"select"},options:["default","filled","outline"],description:"Visual style variant"},state:{control:{type:"select"},options:["default","error","success"],description:"Current state of the input"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},isLoading:{control:{type:"boolean"},description:"Shows a loading indicator"},fullWidth:{control:{type:"boolean"},description:"Makes the input take full width of container"}}},l={args:{placeholder:"Enter text..."}},o={args:{label:"Email Address",placeholder:"Enter your email..."}},n={args:{label:"Username",placeholder:"Enter username",helperText:"Username must be 3-16 characters long"}},c={args:{label:"Password",type:"password",placeholder:"Enter password",errorMessage:"Password must be at least 8 characters"}},i={args:{label:"Email",placeholder:"Enter your email",leftIcon:e.jsx(ke,{className:"h-4 w-4"})}},d={args:{label:"Search",placeholder:"Search...",rightIcon:e.jsx(Ce,{className:"h-4 w-4"})}},u={args:{label:"Processing",placeholder:"Loading...",isLoading:!0}},p={args:{label:"Disabled Field",placeholder:"Cannot be edited",disabled:!0}},m={args:{label:"Filled Input",placeholder:"Enter text...",variant:"filled"}},h={args:{label:"Outline Input",placeholder:"Enter text...",variant:"outline"}},g={args:{label:"Small Input",placeholder:"Small size",size:"sm"}},f={args:{label:"Large Input",placeholder:"Large size",size:"lg"}},b={args:{label:"Valid Input",placeholder:"Valid value",state:"success",value:"Correct value"}},x={args:{label:"Full Width Input",placeholder:"Takes full width of container",fullWidth:!0},decorators:[a=>e.jsx("div",{style:{width:"500px"},children:e.jsx(a,{})})]},v={render:()=>e.jsx(r,{label:"Password",type:"password",placeholder:"Enter your password",rightIcon:e.jsx(Le,{className:"h-4 w-4 cursor-pointer"}),helperText:"Click the eye icon to toggle visibility"})},y={render:()=>e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx(r,{label:"Default",placeholder:"Regular input"}),e.jsx(r,{label:"Focused",placeholder:"Click to focus",className:"ring-2 ring-ring ring-offset-2"}),e.jsx(r,{label:"With error",placeholder:"Error state",errorMessage:"This field has an error"}),e.jsx(r,{label:"Success",placeholder:"Success state",state:"success",value:"Correct value"}),e.jsx(r,{label:"Disabled",placeholder:"Cannot edit",disabled:!0}),e.jsx(r,{label:"Loading",placeholder:"Processing...",isLoading:!0})]})};var z,L,k;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var C,F,q;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email...'
  }
}`,...(q=(F=o.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var P,D,R;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Username must be 3-16 characters long'
  }
}`,...(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var _,M,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    errorMessage: 'Password must be at least 8 characters'
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var A,U,H;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    leftIcon: <AtSymbolIcon className="h-4 w-4" />
  }
}`,...(H=(U=i.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var B,G,J;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    rightIcon: <SearchIcon className="h-4 w-4" />
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Processing',
    placeholder: 'Loading...',
    isLoading: true
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot be edited',
    disabled: true
  }
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Filled Input',
    placeholder: 'Enter text...',
    variant: 'filled'
  }
}`,...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,te,le;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Outline Input',
    placeholder: 'Enter text...',
    variant: 'outline'
  }
}`,...(le=(te=h.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ne,ce;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm'
  }
}`,...(ce=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var ie,de,ue;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg'
  }
}`,...(ue=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,he;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: 'Valid Input',
    placeholder: 'Valid value',
    state: 'success',
    value: 'Correct value'
  }
}`,...(he=(me=b.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,fe,be;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'Takes full width of container',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '500px'
  }}>\r
        <Story />\r
      </div>]
}`,...(be=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var xe,ve,ye;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    // This would normally use React state, but for Storybook we just show the concept
    return <TextInput label="Password" type="password" placeholder="Enter your password" rightIcon={<EyeIcon className="h-4 w-4 cursor-pointer" />} helperText="Click the eye icon to toggle visibility" />;
  }
}`,...(ye=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Se,we,Ie;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-80">\r
      <TextInput label="Default" placeholder="Regular input" />\r
      <TextInput label="Focused" placeholder="Click to focus" className="ring-2 ring-ring ring-offset-2" />\r
      <TextInput label="With error" placeholder="Error state" errorMessage="This field has an error" />\r
      <TextInput label="Success" placeholder="Success state" state="success" value="Correct value" />\r
      <TextInput label="Disabled" placeholder="Cannot edit" disabled />\r
      <TextInput label="Loading" placeholder="Processing..." isLoading />\r
    </div>
}`,...(Ie=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};const Ae=["Default","WithLabel","WithHelperText","WithError","WithLeftIcon","WithRightIcon","Loading","Disabled","FilledVariant","OutlineVariant","SmallSize","LargeSize","SuccessState","FullWidth","PasswordWithToggle","InputStates"];export{l as Default,p as Disabled,m as FilledVariant,x as FullWidth,y as InputStates,f as LargeSize,u as Loading,h as OutlineVariant,v as PasswordWithToggle,g as SmallSize,b as SuccessState,c as WithError,n as WithHelperText,o as WithLabel,i as WithLeftIcon,d as WithRightIcon,Ae as __namedExportsOrder,Oe as default};
