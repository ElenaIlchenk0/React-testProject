(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var a=t(1),n=t(2),o=t.n(n),c=t(9),l=t.n(c),r=(t(15),t(16),t(7));t(17),t(18),t(19);var u=function(e){return Object(a.jsx)("div",{className:"Select",children:Object(a.jsxs)("select",{name:"sort",onChange:function(i){return e.changeSorting(i.target.value)},children:[Object(a.jsx)("option",{value:"default",defaultValue:!0,children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(a.jsx)("option",{value:"date",children:"\u041f\u043e \u0434\u0430\u0442\u0435"}),Object(a.jsx)("option",{value:"alphabet",children:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"})]})})};var s=function(e){return Object(a.jsxs)("div",{className:"Header",children:[Object(a.jsx)("h1",{children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(a.jsx)(u,{changeSorting:e.changeSorting})]})},d=(t(20),function(e,i){for(var t=[],n=function(e){t.push(Object(a.jsx)("div",{style:{color:i.activePage===e?"#333":"grey"},onClick:function(){return i.clickHandler(e)},children:e},e))},o=1;o<=e;o++)n(o);return t});var m=function(e){var i=Math.ceil(e.allItems/e.perPage);return Object(a.jsxs)("div",{className:"Pagination",children:[Object(a.jsx)("div",{className:"prev",onClick:function(){e.activePage>1&&e.clickHandler(e.activePage-1)},children:" \u276e"}),Object(a.jsx)("div",{className:"countPages","data-testid":"countPages",children:d(i,e)}),Object(a.jsx)("div",{className:"next",onClick:function(){e.activePage<i&&e.clickHandler(e.activePage+1)},children:" \u276f"})]})},p=[{id:"1",title:"Occaecat pariatur amet aute laborum tempor nostrud.",caption:"Dolor nulla voluptate dolore et velit ad. Mollit do cupidatat officia est eu commodo pariatur. Minim officia velit adipisicing ex tempor mollit occaecat anim cillum amet. Duis et ullamco aliqua quis nulla non dolor eu ipsum. Sunt sint esse velit cupidatat aliqua pariatur aliqua amet minim ipsum. Laborum nostrud velit ipsum pariatur aliquip deserunt nostrud labore dolor exercitation.",date:"1425157200",views:"11",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"2",title:"Id nisi dolor Lorem adipisicing mollit elit enim.",caption:"Excepteur irure dolore eiusmod labore ex reprehenderit qui voluptate id voluptate qui. Enim velit velit pariatur aliqua aliqua ut dolor voluptate voluptate id. Ipsum irure nisi enim anim id do amet dolor est ea sint minim nostrud. Minim consectetur ad irure tempor minim. Ad proident amet eu in. Nostrud esse Lorem proident reprehenderit elit dolore minim excepteur anim consequat.",date:"1373140800",views:"8",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"3",title:"Dolor sunt dolor id pariatur mollit occaecat officia nisi.",caption:"Laborum veniam aliqua sint ex aute. Duis quis consectetur consequat in. Et officia qui in minim sit sit consectetur et.",date:"1378497600",views:"233",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"4",title:"Amet reprehenderit dolor consectetur velit pariatur et ex qui adipisicing laboris ullamco.",caption:"Sunt pariatur proident ea velit amet est ullamco velit deserunt ut quis mollit. Non enim incididunt labore excepteur pariatur reprehenderit anim duis consequat laborum veniam occaecat quis aliquip. Culpa Lorem anim consequat non deserunt. Ad ad est labore nisi tempor do culpa elit quis do ad magna. Ullamco voluptate officia cillum consequat velit in pariatur cupidatat. Labore tempor tempor ex occaecat eu sit nisi mollit ut proident.",date:"1378602000",views:"85",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"5",title:"Ea adipisicing ut culpa ipsum do tempor qui cillum cillum irure consectetur in dolor exercitation.",caption:"Consequat consequat sunt ex commodo exercitation eu nulla irure. Quis minim cupidatat elit ut in consectetur ea proident. Fugiat Lorem esse ullamco ullamco esse officia sint ea mollit officia eiusmod proident. Aliquip in esse aute veniam consequat sint. Laboris incididunt incididunt excepteur consectetur officia exercitation tempor duis. Consequat laborum exercitation adipisicing Lorem eiusmod pariatur commodo. Labore veniam do nulla eiusmod incididunt reprehenderit.",date:"1383872400",views:"2",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"6",title:"Laborum consectetur laboris ipsum culpa est nulla labore ut quis magna.",caption:"Occaecat Lorem magna in non mollit nostrud adipisicing sint. Ipsum voluptate et non dolor laborum ullamco officia mollit exercitation enim enim. Esse consectetur in ipsum est deserunt quis deserunt mollit excepteur. Ad enim eu ad sunt irure veniam pariatur dolor labore ad eiusmod ex amet. Duis laborum culpa nisi excepteur commodo. Aliqua tempor mollit sit est in.",date:"1362600000",views:"11",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"7",title:"Ad nulla pariatur reprehenderit nulla mollit.",caption:"Aute do minim qui commodo eu occaecat nostrud minim aute qui sit cupidatat. Labore aliqua mollit veniam aliquip sint est culpa quis ad consequat fugiat laboris aliqua magna. Fugiat cillum ullamco labore eu ea aliqua.",date:"1494104400",views:"87",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"8",title:"Qui anim eu eu et veniam sit id ullamco non consequat in.",caption:"Aute occaecat sunt commodo quis culpa nisi deserunt fugiat proident. Amet irure est adipisicing id commodo qui aliquip labore aliqua dolor ullamco do velit. Qui aliquip anim pariatur excepteur esse dolore aliquip in aliqua nisi dolore. Quis pariatur dolore tempor Lorem et nulla incididunt aliqua duis cillum. Minim dolor qui sint amet incididunt incididunt fugiat nostrud officia. Sint eiusmod ut dolore ullamco quis.",date:"1423256400",views:"64",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"9",title:"Pariatur reprehenderit pariatur mollit quis eu aute consequat quis laborum.",caption:"Pariatur sint veniam laborum fugiat consectetur cillum occaecat. Ullamco velit mollit magna laborum qui. Mollit velit elit proident aliqua laboris reprehenderit enim irure.",date:"1430946000",views:"12",img:"https://placekitten.com/300/300",link:"https://google.com"},{id:"10",title:"Ad exercitation ea ad eiusmod do.",caption:"Laboris dolore commodo irure laborum magna laboris eiusmod. Incididunt ipsum ad ad veniam dolor eiusmod nulla sint non laborum incididunt exercitation. Excepteur sit voluptate proident tempor voluptate. Consequat est et duis id nostrud occaecat nisi duis aliqua veniam amet irure. Veniam sunt sunt elit mollit nulla quis consequat elit pariatur. Ea veniam sit tempor exercitation eiusmod amet duis reprehenderit quis. Do laborum in qui cillum veniam duis sit adipisicing non dolore.",date:"1438376400",views:"33",img:"https://placekitten.com/300/300",link:"https://google.com"}],v=t(5),g=(t(21),t(0)),b=t(6);var j=function(e){var i=new Date(1e3*+e.articleItem.date),t="".concat(i.getDate(),".").concat(i.getMonth()+1,".").concat(i.getFullYear());return Object(a.jsxs)("div",{className:"Article ".concat(e.inactive?"inactive":""),children:[Object(a.jsx)("div",{className:"img_wrapper",children:Object(a.jsx)("img",{src:e.articleItem.img,alt:""})}),Object(a.jsxs)("div",{className:"content_wrapper",children:[Object(a.jsx)("h3",{children:e.articleItem.title}),Object(a.jsx)("div",{className:"icons",children:Object(a.jsxs)(g.b.Provider,{value:{color:"#aeaeae"},children:[Object(a.jsxs)("div",{className:"icons_item","data-testid":"date",children:[Object(a.jsx)(b.a,{}),Object(a.jsx)("span",{children:t})]}),Object(a.jsxs)("div",{className:"icons_item","data-testid":"views",children:[Object(a.jsx)(b.b,{}),Object(a.jsx)("span",{children:e.articleItem.views})]})]})}),Object(a.jsx)("div",{className:"text",children:e.articleItem.caption}),Object(a.jsx)("a",{href:e.articleItem.link,children:"\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435"})]})]})},h=function(e,i){var t=3*e-1,n=t-3+1;return i.map((function(e,i){return Object(a.jsx)(j,{articleItem:e,inactive:!(i>=n&&i<=t)},e.id)}))},x=function(e,i){switch(e){case"date":return h(i,function(e){var i=Object(v.a)(e);return i.sort((function(e,i){return e.date>i.date?-1:e.date<i.date?1:0})),i}(p));case"alphabet":return h(i,function(e){var i=Object(v.a)(e);return i.sort((function(e,i){return e.title>i.title?1:e.title<i.title?-1:0})),i}(p));default:return h(i,p)}};var f=function(){var e=Object(n.useState)(1),i=Object(r.a)(e,2),t=i[0],o=i[1],c=Object(n.useState)("default"),l=Object(r.a)(c,2),u=l[0],d=l[1];return Object(a.jsxs)("div",{className:"Layout",children:[Object(a.jsxs)("div",{className:"mainContent",children:[Object(a.jsx)(s,{changeSorting:function(e){return function(e){d(e),o(1)}(e)}}),Object(a.jsx)("div",{className:"articlesWrapper",children:x(u,t)})]}),Object(a.jsx)(m,{allItems:p.length,perPage:"3",clickHandler:o,activePage:t})]})};var q=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(f,{})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(i){var t=i.getCLS,a=i.getFID,n=i.getFCP,o=i.getLCP,c=i.getTTFB;t(e),a(e),n(e),o(e),c(e)}))};l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root")),O()}],[[22,1,2]]]);
//# sourceMappingURL=main.6c62685a.chunk.js.map