import{j as e,c as x,a as ve}from"./utils-JTeuTVXr.js";import{c as de}from"./createLucideIcon-BBtjk-RZ.js";import{I as k,C as ue,T as fe,a as he,B as y}from"./button-Dt2mfl2z.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BteUvvMO.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=de("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),be=ve("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4",{variants:{variant:{info:"bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400",success:"bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-800 [&>svg]:text-green-600 dark:[&>svg]:text-green-400",warning:"bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-200 dark:border-yellow-800 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400",error:"bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-200 dark:border-red-800 [&>svg]:text-red-600 dark:[&>svg]:text-red-400"},size:{sm:"text-sm p-3",md:"text-base p-4",lg:"text-lg p-5"}},defaultVariants:{variant:"info",size:"md"}}),r=({className:t,variant:b,size:f,title:w,description:h,icon:pe,onClose:A,action:S,...me})=>{const ge=pe||we(b);return e.jsxs("div",{className:x(be({variant:b,size:f}),t),role:"alert",...me,children:[ge,e.jsxs("div",{className:"flex-1",children:[w&&e.jsx("h5",{className:x("font-medium mb-1",h?"":"mb-0"),children:w}),h&&e.jsx("div",{className:x("text-sm opacity-90",f==="sm"?"text-xs":"",f==="lg"?"text-base":""),children:h}),S&&e.jsx("div",{className:"mt-3",children:S})]}),A&&e.jsx("button",{onClick:A,className:"absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-1 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white",type:"button","aria-label":"Close alert",children:e.jsx(ye,{className:"h-4 w-4"})})]})};function we(t){switch(t){case"info":return e.jsx(k,{className:"h-5 w-5"});case"success":return e.jsx(he,{className:"h-5 w-5"});case"warning":return e.jsx(fe,{className:"h-5 w-5"});case"error":return e.jsx(ue,{className:"h-5 w-5"});default:return e.jsx(k,{className:"h-5 w-5"})}}try{r.displayName="AlertBanner",r.__docgenInfo={description:"",displayName:"AlertBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}}}}}catch{}const Ce={title:"Design System/Feedback/AlertBanner",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"],description:"Visual style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the alert"},title:{control:"text",description:"Alert title"},description:{control:"text",description:"Alert description"}}},a={args:{variant:"info",title:"Information",description:"This is an informational alert that provides neutral information to the user."}},s={args:{variant:"success",title:"Success",description:"Your changes have been saved successfully."}},i={args:{variant:"warning",title:"Warning",description:"This action cannot be undone. Please proceed with caution."}},n={args:{variant:"error",title:"Error",description:"There was a problem processing your request. Please try again."}},o={args:{variant:"info",description:"This is an alert with only description text."}},c={args:{variant:"info",title:"Getting Started",description:"Welcome to our application! Follow the quick start guide to get set up.",icon:e.jsx(xe,{className:"h-5 w-5"})}},l={args:{variant:"info",size:"sm",title:"Small Alert",description:"This is a compact alert for less important information."}},d={args:{variant:"warning",size:"lg",title:"Large Alert",description:"This is a larger alert for more critical information that needs user attention."}},u={args:{variant:"info",title:"Dismissible Alert",description:"Click the X button to dismiss this alert.",onClose:()=>console.log("Alert dismissed")}},p={args:{variant:"warning",title:"Account Verification Required",description:"Please verify your email address to continue using all features.",action:e.jsx(y,{size:"sm",children:"Verify Email"})}},m={args:{variant:"error",title:"Session Expired",description:"Your session has expired due to inactivity.",action:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(y,{size:"sm",variant:"secondary",children:"Cancel"}),e.jsx(y,{size:"sm",variant:"destructive",children:"Log In Again"})]})}},g={args:{variant:"info",title:"Custom Styled Alert",description:"This alert has custom styling applied to it.",className:"border-purple-300 bg-purple-50 text-purple-800 [&>svg]:text-purple-600",icon:e.jsx(ue,{className:"h-5 w-5"})}},v={render:()=>e.jsxs("div",{className:"space-y-4 w-full max-w-2xl",children:[e.jsx(r,{variant:"info",title:"Information",description:"A neutral message that doesn't require immediate attention."}),e.jsx(r,{variant:"success",title:"Success",description:"A positive message confirming a successful action or operation."}),e.jsx(r,{variant:"warning",title:"Warning",description:"A message that requires attention but isn't critical."}),e.jsx(r,{variant:"error",title:"Error",description:"A critical message about an error or failed operation."})]})};var j,N,z;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    description: 'This is an informational alert that provides neutral information to the user.'
  }
}`,...(z=(N=a.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var C,T,q;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    description: 'Your changes have been saved successfully.'
  }
}`,...(q=(T=s.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var I,B,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'This action cannot be undone. Please proceed with caution.'
  }
}`,...(W=(B=i.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var V,E,R;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    description: 'There was a problem processing your request. Please try again.'
  }
}`,...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var _,L,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    description: 'This is an alert with only description text.'
  }
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var M,P,X;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Getting Started',
    description: 'Welcome to our application! Follow the quick start guide to get set up.',
    icon: <RocketIcon className="h-5 w-5" />
  }
}`,...(X=(P=c.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var Y,F,O;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    size: 'sm',
    title: 'Small Alert',
    description: 'This is a compact alert for less important information.'
  }
}`,...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var G,H,$;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    size: 'lg',
    title: 'Large Alert',
    description: 'This is a larger alert for more critical information that needs user attention.'
  }
}`,...($=(H=d.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    description: 'Click the X button to dismiss this alert.',
    onClose: () => console.log('Alert dismissed')
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Z,ee;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Account Verification Required',
    description: 'Please verify your email address to continue using all features.',
    action: <Button size="sm">Verify Email</Button>
  }
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ae;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Session Expired',
    description: 'Your session has expired due to inactivity.',
    action: <div className="flex gap-2">\r
        <Button size="sm" variant="secondary">Cancel</Button>\r
        <Button size="sm" variant="destructive">Log In Again</Button>\r
      </div>
  }
}`,...(ae=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,ie,ne;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Custom Styled Alert',
    description: 'This alert has custom styling applied to it.',
    className: 'border-purple-300 bg-purple-50 text-purple-800 [&>svg]:text-purple-600',
    icon: <CircleAlertIcon className="h-5 w-5" />
  }
}`,...(ne=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var oe,ce,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-full max-w-2xl">\r
      <AlertBanner variant="info" title="Information" description="A neutral message that doesn't require immediate attention." />\r
      <AlertBanner variant="success" title="Success" description="A positive message confirming a successful action or operation." />\r
      <AlertBanner variant="warning" title="Warning" description="A message that requires attention but isn't critical." />\r
      <AlertBanner variant="error" title="Error" description="A critical message about an error or failed operation." />\r
    </div>
}`,...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Te=["Info","Success","Warning","Error","WithoutTitle","WithCustomIcon","SmallSize","LargeSize","Dismissible","WithAction","WithMultipleActions","CustomStyling","AlertsOverview"];export{v as AlertsOverview,g as CustomStyling,u as Dismissible,n as Error,a as Info,d as LargeSize,l as SmallSize,s as Success,i as Warning,p as WithAction,c as WithCustomIcon,m as WithMultipleActions,o as WithoutTitle,Te as __namedExportsOrder,Ce as default};
