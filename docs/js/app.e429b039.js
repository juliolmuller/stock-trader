(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2e8a":function(t,e,a){},"3e89":function(t,e,a){},4045:function(t,e,a){t.exports=a.p+"img/loading.07e75c2f.svg"},5175:function(t,e,a){"use strict";a("2e8a")},"56d7":function(t,e,a){"use strict";a.r(e);a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-header"),a("v-main",[a("v-container",[a("transition",{attrs:{name:"slide",mode:"out-in",appear:""}},[a("router-view")],1)],1)],1),a("app-footer")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",[a("router-link",{staticClass:"v-toolbar__title",attrs:{to:"/"}},[a("span",[t._v("Stock")]),a("span",[t._v("Trader")])])],1),a("v-toolbar-items",t._l(t.navigation,(function(e){return a("v-btn",{key:e.name,attrs:{text:"",to:{name:e.name},exact:""}},[t._v(t._s(e.label))])})),1),a("v-spacer"),a("v-toolbar-items",[a("v-layout",{attrs:{"align-center":""}},[a("span",{staticClass:"subtitle-2 text--grey text--darken-2"},[t._v(" Fundos para investir: ")]),a("span",{staticClass:"subtitle-1 text--grey font-weight-bold ml-3 mr-5"},[t._v(" R$ "+t._s(t._f("number")(t.$store.getters["portfolio/unappliedFunds"],2))+" ")])]),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{text:""}},s),[a("span",[t._v("Salvar Transações")]),a("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-title",{on:{click:t.commitChanges}},[a("v-icon",[t._v("mdi-content-save")]),t._v(" Salvar ")],1)],1),a("v-list-item",[a("v-list-item-title",{on:{click:t.discardChanges}},[a("v-icon",[t._v("mdi-undo-variant")]),t._v(" Descartar ")],1)],1)],1)],1)],1)],1)},i=[],c=a("2f62"),l={data(){return{navigation:[{name:"home",label:"Home"},{name:"portfolio",label:"Portfólio"},{name:"stocks",label:"Ações"}]}},methods:{...Object(c["d"])("storage",["commitChanges"]),...Object(c["b"])("storage",["discardChanges"])}},u=l,d=(a("5175"),a("2877")),p=a("6544"),f=a.n(p),m=a("40dc"),v=a("8336"),h=a("132d"),b=a("a722"),g=a("8860"),k=a("da13"),y=a("5d23"),_=a("e449"),C=a("2fa4"),x=a("2a7f"),S=Object(d["a"])(u,n,i,!1,null,"553777b6",null),V=S.exports;f()(S,{VAppBar:m["a"],VBtn:v["a"],VIcon:h["a"],VLayout:b["a"],VList:g["a"],VListItem:k["a"],VListItemTitle:y["a"],VMenu:_["a"],VSpacer:C["a"],VToolbarItems:x["a"],VToolbarTitle:x["b"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"d-flex justify-center align-center",attrs:{app:"",bottom:""}},[a("span",{staticClass:"caption"},[t._v(" Todos os direitos reservados © 2020 "),a("span",{staticClass:"font-weight-black"},[t._v("LacusSoft")])]),t._l(t.icons,(function(e){return a("v-tooltip",{key:e.name,attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var o=s.on;return[a("v-btn",t._g({staticClass:"mr-8",attrs:{icon:"",href:e.href}},o),[a("v-icon",[t._v(t._s(e.name))])],1)]}}],null,!0)},[a("span",[t._v(t._s(e.tooltip))])])}))],2)},O=[],w={data:()=>({icons:[{href:"https://github.com/juliolmuller/stock-trader",tooltip:"Veja no GitHub",name:"mdi-github"}]})},q=w,F=a("3a2f"),$=Object(d["a"])(q,j,O,!1,null,"55ac7d6c",null),I=$.exports;f()($,{VAppBar:m["a"],VBtn:v["a"],VIcon:h["a"],VTooltip:F["a"]});var A={components:{AppHeader:V,AppFooter:I},beforeCreate(){const t=3e5;this.$store.dispatch("storage/restoreData"),this.$store.dispatch("stocks/fetchStocks"),setInterval(this.$store.dispatch,t,"stocks/fetchStocks")}},N=A,T=(a("034f"),a("7496")),E=a("a523"),D=a("f6c4"),L=Object(d["a"])(N,o,r,!1,null,null,null),P=L.exports;f()(L,{VApp:T["a"],VContainer:E["a"],VMain:D["a"]});var B=a("8c4f"),M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"display-2 text-center font-weight-bold mt-8 mb-6"},[t._v(" Brinque de Negociar Ações em Tempo Real ")]),s("alert-unsaved-changes"),s("alert-market-is-closed"),s("v-layout",{staticClass:"mt-12",attrs:{row:"",wrap:""}},[t.$store.state.appLoading?s("v-img",{staticClass:"mx-auto",attrs:{src:a("4045"),"açt":"Carregando","max-width":"10%"}}):t._l(t.cards,(function(t){return s("dashboard-card",{key:t.title,attrs:{info:t}})}))],2)],1)},R=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",{staticClass:"subtitle-1",attrs:{color:"info",dark:"",icon:"mdi-information-outline",transition:"scale-transition",value:!1}},[t._v(" As negociações na Volsa de Valores estão fechadas. Nenhuma alteração poderá ser salva neste período. ")])},J=[],U={computed:Object(c["c"])("storage",["hasChanges"])},H=U,G=a("0798"),z=Object(d["a"])(H,Q,J,!1,null,null,null),K=z.exports;f()(z,{VAlert:G["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",{staticClass:"subtitle-1",attrs:{color:"warning",dark:"",icon:"mdi-alert-decagram-outline",transition:"scale-transition",value:t.hasChanges}},[t._v(" Você tem alterações não salvas na sua carteira de ações. Se você fechar o navegador ou esta aba de navegação, todas as alterações serão perdidas. ")])},X=[],Y={computed:Object(c["c"])("storage",["hasChanges"])},Z=Y,tt=Object(d["a"])(Z,W,X,!1,null,null,null),et=tt.exports;f()(tt,{VAlert:G["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"text-center mx-4",attrs:{height:"100%"}},[a("v-card-text",{staticClass:"text--primary"},[a("span",{staticClass:"headline"},[t._v(t._s(t.info.title))]),a("div",{staticClass:"d-flex justify-center align-center mt-4"},[a("span",{staticClass:"headline"},[t._v("R$")]),a("span",{staticClass:"display-3"},[t._v(t._s(t._f("number")(t.info.value,2)))])])]),t.info.route?a("v-card-actions",{staticClass:"pb-4"},[a("v-btn",{attrs:{color:"primary",text:"","x-large":"",block:"",to:t.info.route}},[a("span",{staticClass:"text-uppercase"},[t._v(t._s(t.info.route.label))])])],1):t._e()],1)],1)},st=[],ot={props:{info:{type:Object,required:!0}}},rt=ot,nt=a("b0af"),it=a("99d9"),ct=a("0e8f"),lt=Object(d["a"])(rt,at,st,!1,null,"a1b68e4c",null),ut=lt.exports;f()(lt,{VBtn:v["a"],VCard:nt["a"],VCardActions:it["a"],VCardText:it["b"],VFlex:ct["a"]});var dt={components:{AlertMarketIsClosed:K,AlertUnsavedChanges:et,DashboardCard:ut},computed:{...Object(c["c"])("portfolio",["appliedFunds","unappliedFunds","totalFunds"]),cards(){return[{title:"Valor em ações",value:this.appliedFunds,route:{name:"portfolio",label:"Ir para carteira"}},{title:"Valor não investido",value:this.unappliedFunds,route:{name:"stocks",label:"Comprar ações"}},{title:"Fundos totais",value:this.totalFunds}]}}},pt=dt,ft=(a("ad60"),a("adda")),mt=Object(d["a"])(pt,M,R,!1,null,"ae6075f2",null),vt=mt.exports;f()(mt,{VImg:ft["a"],VLayout:b["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"display-1 font-weight-bold mt-8 mb-6"},[t._v(" Sua Carteira de Ações ")]),a("alert-unsaved-changes"),a("alert-market-is-closed"),t.portfolioStocks.length?a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.portfolioStocks,(function(t){return a("PortfolioCard",{key:t.id,attrs:{stock:t}})})),1):a("span",{staticClass:"d-block text-center title font-weight-regular"},[t._v(" Você não possui nenhum ativo. "),a("router-link",{attrs:{to:{name:"stocks"}}},[a("a",[t._v("Comprar ações")])]),t._v(". ")],1)],1)},bt=[],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{staticClass:"pr-5 pb-5",attrs:{xs12:"",md6:"",lg4:""}},[a("v-card",{staticClass:"blue darken-3 white--text"},[a("v-card-title",{staticClass:"d-flex justify-space-between"},[a("h2",{staticClass:"subtitle-1 order-2"},[t._v(t._s(t.stock.company))]),a("span",{staticClass:"subtitle-1 order-1"},[t._v(t._s(t.stock.id))]),a("span",{staticClass:"subtitle-1 order-3"},[t._v("R$"+t._s(t._f("number")(t.stock.price,2))+"/ação")])])],1),a("v-card",[a("v-container",{attrs:{"fill-height":""}},[a("v-text-field",{attrs:{type:"number",label:"Quantidade (max. "+t.stock.quantity+")",error:0!==t.quantity&&!t.canSell},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}}),a("v-btn",{staticClass:"blue darken-3 white--text",attrs:{disabled:!t.canSell},on:{click:t.sellStock}},[t._v("Vender")])],1)],1)],1)},kt=[],yt={data:()=>({quantity:0}),computed:{canSell(){return this.quantity>0&&Number.isInteger(this.quantity)&&this.quantity<=this.stock.quantity}},props:{stock:{type:Object,required:!0}},methods:{sellStock(){const t={stockId:this.stock.id,stockPrice:this.stock.price,stockQuantity:this.quantity};this.$store.dispatch("sellStocks",t),this.quantity=0}}},_t=yt,Ct=a("8654"),xt=Object(d["a"])(_t,gt,kt,!1,null,"4e74a812",null),St=xt.exports;f()(xt,{VBtn:v["a"],VCard:nt["a"],VCardTitle:it["c"],VContainer:E["a"],VFlex:ct["a"],VTextField:Ct["a"]});var Vt={components:{AlertMarketIsClosed:K,AlertUnsavedChanges:et,PortfolioCard:St},computed:Object(c["c"])("portfolio",["portfolioStocks"])},jt=Vt,Ot=Object(d["a"])(jt,ht,bt,!1,null,"66561a99",null),wt=Ot.exports;f()(Ot,{VLayout:b["a"]});var qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex justify-space-between align-center-end mt-8"},[s("h1",{staticClass:"display-1 font-weight-bold"},[t._v(" Mercado de Ações ")]),s("v-spacer"),s("v-text-field",{staticStyle:{"max-width":"300px"},attrs:{"append-icon":"mdi-magnify",placeholder:"Procurar ativo...",filled:"",rounded:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("alert-unsaved-changes"),s("alert-market-is-closed"),s("v-layout",{attrs:{row:"",wrap:""}},[t.$store.state.appLoading?s("v-img",{staticClass:"mx-auto",attrs:{src:a("4045"),"açt":"Carregando","max-width":"10%"}}):t._l(t.searchResult,(function(t){return s("StockCard",{key:t.id,attrs:{stock:t}})}))],2)],1)},Ft=[],$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{staticClass:"pr-5 pb-5",attrs:{xs12:"",md6:"",lg4:""}},[a("v-card",{staticClass:"green darken-3 white--text"},[a("v-card-title",{staticClass:"d-flex justify-space-between"},[a("h3",{staticClass:"subtitle-1 order-2"},[t._v(t._s(t.stock.company))]),a("span",{staticClass:"subtitle-1 order-1"},[t._v(t._s(t.stock.id))]),a("span",{staticClass:"subtitle-1 order-3"},[t._v("R$"+t._s(t._f("number")(t.stock.price,2))+"/ação")])])],1),a("v-card",[a("v-container",{attrs:{"fill-height":""}},[a("v-text-field",{attrs:{type:"number",label:"Quantidade",error:0!==t.quantity&&!t.canBuy},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}}),a("v-btn",{staticClass:"green darken-3 white--text",attrs:{disabled:!t.canBuy},on:{click:t.buyStock}},[t._v("Comprar")])],1)],1)],1)},It=[],At={data:()=>({quantity:0}),computed:{availableFunds(){return this.$store.getters["portfolio/unappliedFunds"]},canBuy(){return this.quantity>0&&Number.isInteger(this.quantity)&&this.quantity*this.stock.price<=this.availableFunds}},props:{stock:{type:Object,required:!0}},methods:{buyStock(){const t={stockId:this.stock.id,stockPrice:this.stock.price,stockQuantity:this.quantity};this.$store.dispatch("buyStocks",t),this.quantity=0}}},Nt=At,Tt=Object(d["a"])(Nt,$t,It,!1,null,"4dfe6b4e",null),Et=Tt.exports;f()(Tt,{VBtn:v["a"],VCard:nt["a"],VCardTitle:it["c"],VContainer:E["a"],VFlex:ct["a"],VTextField:Ct["a"]});var Dt={components:{AlertMarketIsClosed:K,AlertUnsavedChanges:et,StockCard:Et},data:()=>({search:""}),computed:{...Object(c["c"])("stocks",["stocks"]),searchResult(){return this.search?this.stocks.filter(t=>JSON.stringify(t).match(new RegExp(this.search,"i"))):this.stocks}}},Lt=Dt,Pt=(a("5c93"),Object(d["a"])(Lt,qt,Ft,!1,null,"0e12aed0",null)),Bt=Pt.exports;f()(Pt,{VImg:ft["a"],VLayout:b["a"],VSpacer:C["a"],VTextField:Ct["a"]}),s["a"].use(B["a"]);var Mt=new B["a"]({mode:"hash",routes:[{path:"/",name:"home",component:vt},{path:"/portfolio",name:"portfolio",component:wt},{path:"/stocks",name:"stocks",component:Bt},{path:"*",redirect:"/"}]}),Rt=(a("ddb0"),a("bc3a")),Qt=a.n(Rt),Jt={namespaced:!0,state:{stocks:[]},getters:{stocks(t){return t.stocks}},mutations:{setStocks(t,e){t.stocks=e}},actions:{async fetchStocks({commit:t}){const e=await Qt()("https://sheet.best/api/sheets/38ec96b3-7c75-4639-9d81-f138f44ba2f5",{transformResponse:[...Qt.a.defaults.transformResponse,t=>t.map(t=>(Object.keys(t).forEach(e=>{isNaN(t[e])||(t[e]=Number(t[e]))}),t))]});t("setStocks",e.data),t("setLoading",!1,{root:!0})}}},Ut=(a("13d5"),{namespaced:!0,state:{funds:0,portfolio:[]},getters:{portfolioStocks(t,e,a,s){return t.portfolio.map(t=>{const e=s["stocks/stocks"].find(e=>e.id===t.id);return{...e,quantity:t.quantity}})},appliedFunds(t,e){return e.portfolioStocks.reduce((t,e)=>t+e.price*e.quantity,0)},unappliedFunds(t){return t.funds},totalFunds(t,e){return e.appliedFunds+e.unappliedFunds}},mutations:{setData(t,e){t.funds=e.funds,t.portfolio=e.portfolio},buyStocks(t,e){const a=t.portfolio.find(t=>t.id===e.stockId);a?a.quantity+=e.stockQuantity:t.portfolio.push({id:e.stockId,quantity:e.stockQuantity}),t.funds-=e.stockQuantity*e.stockPrice},sellStocks(t,e){const a=t.portfolio.find(t=>t.id===e.stockId);a.quantity>e.stockQuantity?a.quantity-=e.stockQuantity:t.portfolio.splice(t.portfolio.indexOf(a),1),t.funds+=e.stockQuantity*e.stockPrice}},actions:{resetData({commit:t,state:e}){t("setData",{funds:1e4,portfolio:[]}),t("storage/stageChanges",e,{root:!0}),t("storage/commitChanges",null,{root:!0})},buyStocks:{root:!0,handler({commit:t,state:e},a){t("buyStocks",a),t("storage/stageChanges",e,{root:!0})}},sellStocks:{root:!0,handler({commit:t,state:e},a){t("sellStocks",a),t("storage/stageChanges",e,{root:!0})}}}});const Ht="my_data";var Gt={namespaced:!0,state:{persistent:{},temporary:{}},getters:{hasChanges(t){const e=JSON.stringify(t.persistent),a=JSON.stringify(t.temporary);return a!==e}},mutations:{setStorages(t,{local:e,session:a}){a&&(t.temporary=a),e&&(t.persistent=e)},stageChanges(t,e){t.temporary=e,sessionStorage.setItem(Ht,JSON.stringify(e))},commitChanges(t){t.persistent={...t.temporary},localStorage.setItem(Ht,sessionStorage.getItem(Ht))}},actions:{restoreData({commit:t,dispatch:e}){const a=JSON.parse(localStorage.getItem(Ht)),s=JSON.parse(sessionStorage.getItem(Ht))||a;s?(t("portfolio/setData",s,{root:!0}),t("setStorages",{local:a,session:s})):e("portfolio/resetData",null,{root:!0})},discardChanges({commit:t,state:e}){if(confirm("Esse é um comando irreversível. Deseja continuar?")){const a=e.persistent;t("stageChanges",a),t("portfolio/setData",a,{root:!0})}}}};s["a"].use(c["a"]);var zt=new c["a"].Store({state:{appLoading:!0},mutations:{setLoading(t,e){t.appLoading=Boolean(e)}},modules:{stocks:Jt,portfolio:Ut,storage:Gt}}),Kt=a("f309");s["a"].use(Kt["a"]);var Wt=new Kt["a"]({});a("8975");s["a"].config.productionTip=!1,new s["a"]({router:Mt,store:zt,vuetify:Wt,render:t=>t(P)}).$mount("#app")},"5c93":function(t,e,a){"use strict";a("ae7b")},7690:function(t,e,a){var s={"./index.js":"8975","./number.js":"f1f7"};function o(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=r,t.exports=o,o.id="7690"},"85ec":function(t,e,a){},8975:function(t,e,a){"use strict";a.r(e);a("5319"),a("ddb0");var s=a("2b0e");const o=a("7690");o.keys().forEach(t=>{if("./index.js"!==t){const e=o(t).default,a=t.replace(/^\.\//,"").replace(/\.js$/,"");s["a"].filter(a,e)}})},ad60:function(t,e,a){"use strict";a("3e89")},ae7b:function(t,e,a){},f1f7:function(t,e,a){"use strict";a.r(e),e["default"]=function(t,e=1){return Number.isNaN(t)?t:Intl.NumberFormat("pt-BR",{maximumFractionDigits:e,minimumFractionDigits:e}).format(t)}}});
//# sourceMappingURL=app.e429b039.js.map