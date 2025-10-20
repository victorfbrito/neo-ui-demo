import{j as s}from"./jsx-runtime-CDt2p4po.js";import{A as f}from"./Avatar-Oy2jbprJ.js";import{A as o}from"./AvatarGroup-DdCv6cY9.js";import"./index-GiUgBvb1.js";import"./index-B8ehKEGt.js";import"./Typo-B1DNflFC.js";const G={title:"Components/AvatarGroup",component:o,args:{max:5,withRings:!0,overlapPx:8}},l=[{name:"Ada Lovelace",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=facearea&facepad=2"},{name:"Grace Hopper",src:"https://images.unsplash.com/photo-1545184180-25d471fe75d8?q=80&w=128&auto=format&fit=facearea&facepad=2"},{name:"Alan Turing"},{name:"Edsger Dijkstra"},{name:"Barbara Liskov"},{name:"Donald Knuth"}],r={render:t=>s.jsx(o,{...t,children:l.map((a,m)=>s.jsx(f,{name:a.name,src:a.src,size:"sm"},m))})},e={args:{max:3},render:t=>s.jsx(o,{...t,children:l.map((a,m)=>s.jsx(f,{name:a.name,src:a.src,size:"sm"},m))})};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>
      {sample.map((p, i) => <Avatar key={i} name={p.name} src={p.src} size="sm" />)}
    </AvatarGroup>
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    max: 3
  },
  render: args => <AvatarGroup {...args}>
      {sample.map((p, i) => <Avatar key={i} name={p.name} src={p.src} size="sm" />)}
    </AvatarGroup>
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const k=["Default","LimitedWithCounter"];export{r as Default,e as LimitedWithCounter,k as __namedExportsOrder,G as default};
