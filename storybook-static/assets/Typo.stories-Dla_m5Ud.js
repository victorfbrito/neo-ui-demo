import{j as e}from"./jsx-runtime-CDt2p4po.js";import{T as p}from"./Typo-B1DNflFC.js";import"./index-GiUgBvb1.js";import"./index-B8ehKEGt.js";const h={title:"Components/Typo",component:p,args:{children:"The quick brown fox jumps over the lazy dog",variant:"body-md",bold:"normal",muted:!1},argTypes:{variant:{control:"select",options:["display-lg","display-md","display-sm","headline-lg","headline-md","headline-sm","title-lg","title-md","title-sm","label-lg","label-md","label-sm","body-lg","body-md","body-sm","button"]},bold:{control:"radio",options:["normal","medium","semibold","bold"]},muted:{control:"boolean"},as:{control:!1}}},l={},a={render:()=>{const c=["display-lg","display-md","display-sm","headline-lg","headline-md","headline-sm","title-lg","title-md","title-sm","label-lg","label-md","label-sm","body-lg","body-md","body-sm","button"],b=["normal","medium","semibold","bold"];return e.jsx("div",{className:"grid grid-cols-1 gap-4",children:c.map(s=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"text-sm",children:s}),e.jsx("div",{className:"flex flex-wrap gap-6",children:b.map(o=>e.jsxs(p,{variant:s,bold:o,children:["The quick brown fox — ",o]},o))})]},s))})}};var d,i,t;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(t=(i=l.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var r,m,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const variants: TypoVariant[] = ["display-lg", "display-md", "display-sm", "headline-lg", "headline-md", "headline-sm", "title-lg", "title-md", "title-sm", "label-lg", "label-md", "label-sm", "body-lg", "body-md", "body-sm", "button"];
    const weights: TypoWeight[] = ["normal", "medium", "semibold", "bold"];
    return <div className="grid grid-cols-1 gap-4">
        {variants.map(v => <div key={v} className="flex flex-col gap-1">
            <div className="text-sm">{v}</div>
            <div className="flex flex-wrap gap-6">
              {weights.map(w => <Typo key={w} variant={v} bold={w}>
                  The quick brown fox — {w}
                </Typo>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const v=["Playground","Matrix"];export{a as Matrix,l as Playground,v as __namedExportsOrder,h as default};
