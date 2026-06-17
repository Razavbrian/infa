import{ad as j,j as t,T as o,ae as w,I as r,af as C,b as L,a as T,ag as M,ah as v,m as l,ai as W,aj as I,ak as S,al as D,am as $,an as A,ao as K,ap as N,R as m,ab as G}from"./strapi-tMF-qYDi.js";import{W as u}from"./WidgetHelpers-03Pyxdtl.js";import{g as E,a as R}from"./users-DLc-PG84.js";const z=l(r)`
  font-size: 2.4rem;
`,B=()=>{const e=j("User",s=>s.user),n=E(e),c=R(e);return t.jsxs(o,{direction:"column",gap:3,height:"100%",justifyContent:"center",children:[t.jsx(w.Item,{delayMs:0,fallback:c}),n&&t.jsx(z,{fontWeight:"bold",textTransform:"none",textAlign:"center",children:n}),e?.email&&t.jsx(r,{variant:"omega",textColor:"neutral600",children:e?.email}),e?.roles?.length&&t.jsx(o,{marginTop:2,gap:1,wrap:"wrap",children:e?.roles?.map(s=>t.jsx(C,{children:s.name},s.id))})]})},F=l(m)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  overflow: hidden;
`,O=l(m)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &:nth-child(2n) {
    border-right: none;
  }
  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }
`,P=({locale:e,number:n})=>new Intl.NumberFormat(e,{notation:"compact",maximumFractionDigits:1}).format(n),Q=l(G)`
  text-decoration: none;
  padding: ${({theme:e})=>e.spaces[3]};
`,H=()=>{const{trackUsage:e}=L(),{formatMessage:n,locale:c}=T(),{data:s,isLoading:p}=M(),{data:d,isLoading:b}=v();if(b||p)return t.jsx(u.Loading,{});if(!d||!s)return t.jsx(u.Error,{});const k={entries:{label:{id:"widget.key-statistics.list.entries",defaultMessage:"Entries"},icon:{component:t.jsx(N,{}),background:"primary100",color:"primary600"},link:"/content-manager"},assets:{label:{id:"widget.key-statistics.list.assets",defaultMessage:"Assets"},icon:{component:t.jsx(K,{}),background:"warning100",color:"warning600"},link:"/plugins/upload"},contentTypes:{label:{id:"widget.key-statistics.list.contentTypes",defaultMessage:"Content-Types"},icon:{component:t.jsx(A,{}),background:"secondary100",color:"secondary600"},link:"/plugins/content-type-builder"},components:{label:{id:"widget.key-statistics.list.components",defaultMessage:"Components"},icon:{component:t.jsx($,{}),background:"alternative100",color:"alternative600"},link:"/plugins/content-type-builder"},locales:{label:{id:"widget.key-statistics.list.locales",defaultMessage:"Locales"},icon:{component:t.jsx(D,{}),background:"success100",color:"success600"},link:"/settings/internationalization"},admins:{label:{id:"widget.key-statistics.list.admins",defaultMessage:"Admins"},icon:{component:t.jsx(S,{}),background:"danger100",color:"danger600"},link:"/settings/users?pageSize=10&page=1&sort=firstname"},webhooks:{label:{id:"widget.key-statistics.list.webhooks",defaultMessage:"Webhooks"},icon:{component:t.jsx(I,{}),background:"alternative100",color:"alternative600"},link:"/settings/webhooks"},apiTokens:{label:{id:"widget.key-statistics.list.apiTokens",defaultMessage:"API Tokens"},icon:{component:t.jsx(W,{}),background:"neutral100",color:"neutral600"},link:"/settings/api-tokens?sort=name:ASC"}},{draft:x,published:f,modified:h}=s??{draft:0,published:0,modified:0},y=x+f+h;return t.jsx(F,{children:Object.entries(k).map(([i,a])=>{const g=d?.[i];return g!==null&&t.jsx(O,{as:Q,to:a.link,"data-testid":`stat-${i}`,onClick:()=>e("didOpenKeyStatisticsWidgetLink",{itemKey:i}),children:t.jsxs(o,{alignItems:"center",gap:2,children:[t.jsx(o,{padding:2,borderRadius:1,background:a.icon.background,color:a.icon.color,children:a.icon.component}),t.jsxs(o,{direction:"column",alignItems:"flex-start",children:[t.jsx(r,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:n(a.label)}),t.jsx(r,{variant:"omega",fontWeight:"bold",textColor:"neutral800",children:P({locale:c,number:i==="entries"?y:g})})]})]})},`key-statistics-${i}`)})})};export{H as KeyStatisticsWidget,B as ProfileWidget};
