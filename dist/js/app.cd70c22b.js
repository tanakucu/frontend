(function(){"use strict";var t={7354:function(t,e,a){var o=a(5130),l=a(6768);const n={id:"app"},r={key:0},u={key:1};function d(t,e,a,o,d,s){const i=(0,l.g2)("router-link"),p=(0,l.g2)("router-view"),c=(0,l.g2)("LoginComponent");return(0,l.uX)(),(0,l.CE)("div",n,[d.isLoggedIn?((0,l.uX)(),(0,l.CE)("div",r,[(0,l.Lk)("nav",null,[(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[(0,l.bF)(i,{to:"/table"},{default:(0,l.k6)((()=>[(0,l.eW)("Table")])),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(i,{to:"/history"},{default:(0,l.k6)((()=>[(0,l.eW)("History Log")])),_:1})])])]),(0,l.bF)(p)])):((0,l.uX)(),(0,l.CE)("div",u,[(0,l.bF)(c)]))])}a(4114);const s=t=>((0,l.Qi)("data-v-e8d39e60"),t=t(),(0,l.jt)(),t),i={class:"login-container"},p=s((()=>(0,l.Lk)("h2",null,"Login",-1))),c={class:"input-wrapper"},m={class:"input-wrapper"},h={class:"button-wrapper"};function L(t,e,a,n,r,u){return(0,l.uX)(),(0,l.CE)("div",i,[p,(0,l.Lk)("div",c,[(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.username=t),placeholder:"Username",class:"input-field"},null,512),[[o.Jo,r.username]])]),(0,l.Lk)("div",m,[(0,l.bo)((0,l.Lk)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>r.password=t),placeholder:"Password",class:"input-field"},null,512),[[o.Jo,r.password]])]),(0,l.Lk)("div",h,[(0,l.Lk)("button",{onClick:e[2]||(e[2]=(0,o.D$)(((...t)=>u.login&&u.login(...t)),["prevent"])),class:"login-button"},"Login")])])}var k=a(8355),f={data(){return{username:"",password:""}},methods:{async login(){k.A.post("http://10.21.60.152:9000/user/login",{username:this.username,password:this.password},{headers:{"Content-Type":"application/json"}}).then((t=>{console.log("Login response:",t),200!==t.status&&201!==t.status||("success"===t.data.status?(localStorage.setItem("user",JSON.stringify({userName:this.username,passWord:this.password})),console.log("Logged in user:",this.username),setTimeout((()=>{this.$router.push("/table"),location.reload()}),1e3)):window.alert("INVALID USER"))})).catch((t=>{console.error("Login error:",t)}))}},mounted(){localStorage.getItem("user")&&this.$router.push("/table")}},g=a(1241);const b=(0,g.A)(f,[["render",L],["__scopeId","data-v-e8d39e60"]]);var v=b,y={data(){return{isLoggedIn:!1}},components:{LoginComponent:v},methods:{goToLogin(){this.$router.push("/login")}},mounted(){localStorage.getItem("user")?this.isLoggedIn=!0:this.isLoggedIn=!1}};const w=(0,g.A)(y,[["render",d]]);var D=w,S=a(1387),_=a(4232);const C=t=>((0,l.Qi)("data-v-3c08ad7e"),t=t(),(0,l.jt)(),t),U=C((()=>(0,l.Lk)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"},null,-1))),I={class:"main-container"},M={class:"button-container"},E={class:"table-container"},O={class:"custom-table"},T=C((()=>(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"№"),(0,l.Lk)("th",null,"Огноо"),(0,l.Lk)("th",null,"Эзэмшигч"),(0,l.Lk)("th",null,"Хэлтэс / Нэгж"),(0,l.Lk)("th",null,"Гомдол"),(0,l.Lk)("th",null,"Баркод"),(0,l.Lk)("th",null,"Tөрөл"),(0,l.Lk)("th",null,"Модел"),(0,l.Lk)("th",null,"Service Tag"),(0,l.Lk)("th",null,"Storage"),(0,l.Lk)("th",null,"RAM"),(0,l.Lk)("th",null,"CPU"),(0,l.Lk)("th",null,"MAC"),(0,l.Lk)("th",null,"OS"),(0,l.Lk)("th",null,"PC Name"),(0,l.Lk)("th",null,"Power Supply"),(0,l.Lk)("th",null,"User"),(0,l.Lk)("th",null,"Operation"),(0,l.Lk)("th",null,"Comment"),(0,l.Lk)("th",null,"Шаардах / Акт"),(0,l.Lk)("th",null,"Actions")])],-1))),A={class:"action-buttons"},V=["onClick"],J=C((()=>(0,l.Lk)("i",{class:"material-icons"},"edit",-1))),X=[J],x=["onClick"],N=C((()=>(0,l.Lk)("i",{class:"material-icons"},"delete",-1))),W=[N];function P(t,e,a,o,n,r){const u=(0,l.g2)("edit-modal");return(0,l.uX)(),(0,l.CE)(l.FK,null,[U,(0,l.Lk)("div",I,[(0,l.Lk)("div",M,[(0,l.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>r.addInput&&r.addInput(...t)),class:"add-button"},"Add"),(0,l.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>r.logout&&r.logout(...t)),class:"logout-button"},"Logout")]),(0,l.Lk)("div",E,[(0,l.Lk)("table",O,[T,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.filteredInputs,(t=>((0,l.uX)(),(0,l.CE)("tr",{key:t.id},[(0,l.Lk)("td",null,(0,_.v_)(t.id),1),(0,l.Lk)("td",null,(0,_.v_)(r.formatDate(t.date)),1),(0,l.Lk)("td",null,(0,_.v_)(t.owner),1),(0,l.Lk)("td",null,(0,_.v_)(t.department),1),(0,l.Lk)("td",null,(0,_.v_)(t.complain),1),(0,l.Lk)("td",null,(0,_.v_)(t.barcode),1),(0,l.Lk)("td",null,(0,_.v_)(t.type),1),(0,l.Lk)("td",null,(0,_.v_)(t.model),1),(0,l.Lk)("td",null,(0,_.v_)(t.serviceTag),1),(0,l.Lk)("td",null,(0,_.v_)(t.storage),1),(0,l.Lk)("td",null,(0,_.v_)(t.ram),1),(0,l.Lk)("td",null,(0,_.v_)(t.cpu),1),(0,l.Lk)("td",null,(0,_.v_)(t.mac),1),(0,l.Lk)("td",null,(0,_.v_)(t.os),1),(0,l.Lk)("td",null,(0,_.v_)(t.pcName),1),(0,l.Lk)("td",null,(0,_.v_)(t.powerSupply),1),(0,l.Lk)("td",null,(0,_.v_)(t.user),1),(0,l.Lk)("td",null,(0,_.v_)(t.operation),1),(0,l.Lk)("td",null,(0,_.v_)(t.description),1),(0,l.Lk)("td",null,(0,_.v_)(t.demand),1),(0,l.Lk)("td",A,[(0,l.Lk)("button",{onClick:e=>r.openModal(t)},X,8,V),(0,l.Lk)("button",{onClick:e=>r.deleteInput(t)},W,8,x)])])))),128))])])]),(0,l.Lk)("div",{class:(0,_.C4)(["modal fade",{show:n.modalShow}]),role:"dialog"},[n.modalShow?((0,l.uX)(),(0,l.Wv)(u,{key:0,isOpen:n.modalShow,rowData:n.selectedRow,isEditMode:n.isEditMode,onClose:e[2]||(e[2]=t=>n.modalShow=!1)},null,8,["isOpen","rowData","isEditMode"])):(0,l.Q3)("",!0)],2)])],64)}const j={class:"modal-backdrop"},B={key:0,class:"modal",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},$={class:"modal-content"},F={class:"input-grid"},R={class:"radio-button"},G={class:"radio-button"},Q={class:"radio-button"},H={class:"radio-button"};function K(t,e,a,n,r,u){return(0,l.uX)(),(0,l.Wv)(o.eB,{name:"modal-fade"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",j,[a.isOpen?((0,l.uX)(),(0,l.CE)("div",B,[(0,l.Lk)("div",$,[(0,l.Lk)("div",F,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.formData.date=t),type:"date"},null,512),[[o.Jo,r.formData.date]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.formData.owner=t),type:"text",placeholder:"Эзэмшигч"},null,512),[[o.Jo,r.formData.owner]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.formData.department=t),type:"text",placeholder:"Хэлтэс / Нэгж"},null,512),[[o.Jo,r.formData.department]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>r.formData.complain=t),type:"text",placeholder:"Complaints"},null,512),[[o.Jo,r.formData.complain]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>r.formData.barcode=t),type:"text",placeholder:"Barcode"},null,512),[[o.Jo,r.formData.barcode]]),(0,l.Lk)("div",R,[(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[5]||(e[5]=t=>r.formData.type=t),value:"PC"},null,512),[[o.XL,r.formData.type]]),(0,l.eW)("PC")]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[6]||(e[6]=t=>r.formData.type=t),value:"Laptop"},null,512),[[o.XL,r.formData.type]]),(0,l.eW)("Laptop")])]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>r.formData.model=t),type:"text",placeholder:"Model"},null,512),[[o.Jo,r.formData.model]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>r.formData.serviceTag=t),type:"text",placeholder:"Service Tag"},null,512),[[o.Jo,r.formData.serviceTag]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>r.formData.storage=t),type:"text",placeholder:"Storage"},null,512),[[o.Jo,r.formData.storage]]),(0,l.Lk)("div",G,[(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[10]||(e[10]=t=>r.formData.ram=t),value:"4GB"},null,512),[[o.XL,r.formData.ram]]),(0,l.eW)("4GB RAM")]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[11]||(e[11]=t=>r.formData.ram=t),value:"8GB"},null,512),[[o.XL,r.formData.ram]]),(0,l.eW)("8GB RAM")]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[12]||(e[12]=t=>r.formData.ram=t),value:"16GB"},null,512),[[o.XL,r.formData.ram]]),(0,l.eW)("16GB RAM")])]),(0,l.Lk)("div",Q,[(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[13]||(e[13]=t=>r.formData.cpu=t),value:"Intel"},null,512),[[o.XL,r.formData.cpu]]),(0,l.eW)("Intel")]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[14]||(e[14]=t=>r.formData.cpu=t),value:"AMD"},null,512),[[o.XL,r.formData.cpu]]),(0,l.eW)("AMD")])]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[15]||(e[15]=t=>r.formData.mac=t),type:"text",placeholder:"MAC"},null,512),[[o.Jo,r.formData.mac]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[16]||(e[16]=t=>r.formData.os=t),type:"text",placeholder:"OS"},null,512),[[o.Jo,r.formData.os]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[17]||(e[17]=t=>r.formData.pcName=t),type:"text",placeholder:"PC Name"},null,512),[[o.Jo,r.formData.pcName]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[18]||(e[18]=t=>r.formData.powerSupply=t),type:"text",placeholder:"Power Supply"},null,512),[[o.Jo,r.formData.powerSupply]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[19]||(e[19]=t=>r.formData.user=t),type:"text",placeholder:"User"},null,512),[[o.Jo,r.formData.user]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[20]||(e[20]=t=>r.formData.operation=t),type:"text",placeholder:"Operation / Онош"},null,512),[[o.Jo,r.formData.operation]]),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[21]||(e[21]=t=>r.formData.description=t),type:"text",placeholder:"Тайлбар"},null,512),[[o.Jo,r.formData.description]]),(0,l.Lk)("div",H,[(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[22]||(e[22]=t=>r.formData.demand=t),value:"Актлах"},null,512),[[o.XL,r.formData.demand]]),(0,l.eW)("Актлах")]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[23]||(e[23]=t=>r.formData.demand=t),value:"Сэлбэг"},null,512),[[o.XL,r.formData.demand]]),(0,l.eW)("Сэлбэг")]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[24]||(e[24]=t=>r.formData.demand=t),value:"Устгах"},null,512),[[o.XL,r.formData.demand]]),(0,l.eW)("Устгах")])])]),(0,l.Lk)("button",{class:"button",onClick:e[25]||(e[25]=(...t)=>u.saveChanges&&u.saveChanges(...t))},(0,_.v_)(a.isEditMode?"Save":"Add"),1),(0,l.Lk)("button",{class:"button-close",onClick:e[26]||(e[26]=(...t)=>u.close&&u.close(...t))},"x")])])):(0,l.Q3)("",!0)])])),_:1})}var q=a(5768),z={props:{isOpen:Boolean,rowData:{type:Object,default:()=>({})},isEditMode:{type:Boolean,default:!0}},data(){return{formData:{...this.rowData}}},watch:{rowData:{handler(t){this.formData={...t}},immediate:!0}},created(){if(this.isEditMode){const t=new Date(this.rowData.date);this.formData.date=(0,q.GP)(t,"yyyy-MM-dd")}else this.formData.date=(new Date).toISOString().split("T")[0]},methods:{async saveChanges(){try{const t=localStorage.getItem("user");if(!t)return;if(this.formData.username=JSON.parse(t).userName,this.isEditMode){const t=await k.A.put(`http://10.21.60.152:9000/user/updateTable/${this.rowData.id}`,this.formData);"success"===t.data.message?(window.alert("Successfully updated row"),this.$emit("close")):window.alert("Failed to update row")}else{const t=await k.A.post("http://10.21.60.152:9000/user/insertTable",this.formData);"success"===t.data.message?(window.alert("Successfully added new row"),this.formData={},this.$emit("close")):window.alert("Failed to add new row")}}catch(t){window.alert("Error saving changes:",t.message)}},close(){this.$emit("close")},formatDate(t){const e=new Date(t);return(0,q.GP)(e,"yyyy-MM-dd")}}};const Y=(0,g.A)(z,[["render",K],["__scopeId","data-v-01f21041"]]);var Z=Y,tt={components:{EditModal:Z},data(){return{inputs:[],apiLoading:!1,modalShow:!1,isEditMode:!1,modalTitle:"",selectedRow:{},newInput:{date:"",owner:"",department:"",complain:"",barcode:"",type:"",model:"",serviceTag:"",storage:"",ram:"",cpu:"",mac:"",os:"",pcName:"",powerSupply:"",user:"",operation:"",description:"",demand:""}}},created(){this.fetchTable()},computed:{filteredInputs(){return this.inputs.filter((t=>!t.deletedAt))}},methods:{async fetchTable(){try{const t=await k.A.get("http://10.21.60.152:9000/user/getTable");this.inputs=t.data.sort(((t,e)=>t.id-e.id))}catch(t){console.error("Error fetching table data:",t)}},openModal(t){this.selectedRow=t?{...t}:{},this.isEditMode=!!t,this.modalShow=!0},async updateTable(t){try{const e=localStorage.getItem("user");console.log("Username:",e);const a=(new Date).toISOString();t.updatedAt=a,t.updatedBy=JSON.parse(e).userName;const o={...t,username:JSON.parse(e).userName};await k.A.put(`http://10.21.60.152:9000/user/updateTable/${t.id}`,o),console.log("Successfully updated input:",t)}catch(e){console.error("Error updating input:",e)}},async addInput(){this.openModal(null),await this.fetchTable()},closeModal(){this.modalShow=!1},async deleteInput(t){try{const e=localStorage.getItem("user");await k.A.delete(`http://10.21.60.152:9000/user/deleteTable/${t.id}`,{data:{username:JSON.parse(e).userName}}),this.inputs=this.inputs.filter((e=>e.id!==t.id)),window.alert("Row deleted")}catch(e){console.error("Error deleting input:",e)}},logout(){localStorage.removeItem("user"),this.$router.push("/login"),location.reload()},formatDate(t){const e=new Date(t);return e.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})}}};const et=(0,g.A)(tt,[["render",P],["__scopeId","data-v-3c08ad7e"]]);var at=et;const ot=t=>((0,l.Qi)("data-v-097d571d"),t=t(),(0,l.jt)(),t),lt={class:"history-log"},nt=ot((()=>(0,l.Lk)("h1",null,"History Log",-1))),rt={class:"log-table"},ut=ot((()=>(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"Action"),(0,l.Lk)("th",null,"User ID"),(0,l.Lk)("th",null,"Timestamp")])],-1)));function dt(t,e,a,o,n,r){return(0,l.uX)(),(0,l.CE)("div",lt,[nt,(0,l.Lk)("table",rt,[ut,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.historyLog,((t,e)=>((0,l.uX)(),(0,l.CE)("tr",{key:t.id,class:(0,_.C4)({"even-row":e%2===0})},[(0,l.Lk)("td",null,(0,_.v_)(t.action),1),(0,l.Lk)("td",null,(0,_.v_)(t.user_id),1),(0,l.Lk)("td",null,(0,_.v_)(r.formatDate(t.created_at)),1)],2)))),128))])])])}var st={data(){return{historyLog:[],username:""}},async mounted(){try{this.username=JSON.parse(localStorage.getItem("user")).userName;const t=await k.A.get("http://10.21.60.152:9000/user/historyLog",{params:{username:this.username}});this.historyLog=t.data}catch(t){console.error("Error fetching history log:",t)}},methods:{formatDate(t){const e=new Date(t);return e.toLocaleString()}}};const it=(0,g.A)(st,[["render",dt],["__scopeId","data-v-097d571d"]]);var pt=it;const ct=[{path:"/",name:" ",component:v},{path:"/login",name:"LoginComponent",component:v},{path:"/table",name:"Table",component:at,children:[{path:"edit/:id",name:"EditModal",component:Z,props:!0}]},{path:"/history",name:"HistoryLog",component:pt}],mt=(0,S.aE)({history:(0,S.LA)("/"),routes:ct});var ht=mt;(0,o.Ef)(D).use(ht).mount("#app")}},e={};function a(o){var l=e[o];if(void 0!==l)return l.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,o,l,n){if(!o){var r=1/0;for(i=0;i<t.length;i++){o=t[i][0],l=t[i][1],n=t[i][2];for(var u=!0,d=0;d<o.length;d++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[d])}))?o.splice(d--,1):(u=!1,n<r&&(r=n));if(u){t.splice(i--,1);var s=l();void 0!==s&&(e=s)}}return e}n=n||0;for(var i=t.length;i>0&&t[i-1][2]>n;i--)t[i]=t[i-1];t[i]=[o,l,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,n,r=o[0],u=o[1],d=o[2],s=0;if(r.some((function(e){return 0!==t[e]}))){for(l in u)a.o(u,l)&&(a.m[l]=u[l]);if(d)var i=d(a)}for(e&&e(o);s<r.length;s++)n=r[s],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(i)},o=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(7354)}));o=a.O(o)})();
//# sourceMappingURL=app.cd70c22b.js.map