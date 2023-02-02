"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[842],{4842:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var a,r,i,o,s,l,d,c,u,p,h,x,m=t(168),f=t(6444),g=(f.ZP.input(a||(a=(0,m.Z)([""]))),f.ZP.h1(r||(r=(0,m.Z)(["\n  margin: 0;\n"])))),b=(f.ZP.label(i||(i=(0,m.Z)([""]))),f.ZP.div(o||(o=(0,m.Z)(["\n  padding-top: 40px;\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])))),Z=t(9439),j=t(2791),v=t(9434),y=t(6052),w=t(6351),P=f.ZP.form(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  gap: 20px;\n  padding: 30px 0;\n"]))),k=f.ZP.input(l||(l=(0,m.Z)(["\n  width: 210px;\n  height: 20px;\n  padding-left: 10px;\n"]))),C=f.ZP.button(d||(d=(0,m.Z)(["\nborder-color: red;\nbox-shadow: 3px 2px 7px 1px rgba(242, 19, 19, 1);\n  background-color: ",";\n  display: inline-flex;\n  width: 150px;\n  height: 35px;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  border-radius: 5px;\n  transition: all 250ms linear;\n  &:hover {\n    background-color: green;\n    border-color: transparent;\n  }\n"])),(function(n){return n.main?"green":"transparent"})),_=f.ZP.label(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),A=t(184),I=function(){var n=(0,v.I0)(),e=(0,v.v9)(w.el),t=(0,j.useState)(""),a=(0,Z.Z)(t,2),r=a[0],i=a[1],o=(0,j.useState)(""),s=(0,Z.Z)(o,2),l=s[0],d=s[1],c=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":i(a);break;case"number":d(a)}};return(0,A.jsxs)(P,{onSubmit:function(t){if(t.preventDefault(),e.some((function(n){return n.name.toLowerCase()===r.toLowerCase()})))return alert("".concat(r," is already in contact"));var a={name:r,number:l};n((0,y.G3)(a)),t.target.reset()},children:[(0,A.jsxs)(_,{children:["Name",(0,A.jsx)(k,{onChange:c,placeholder:"enter name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,A.jsxs)(_,{children:["Number",(0,A.jsx)(k,{onChange:c,placeholder:"enter phone number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,A.jsx)(C,{round:"50%",type:"submit",children:"Add contact"})]})},S=f.ZP.ul(u||(u=(0,m.Z)(["\n  width: 400px;\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  padding: 0;\n"]))),z=f.ZP.h2(p||(p=(0,m.Z)([""]))),F=f.ZP.li(h||(h=(0,m.Z)(["\ndisplay: flex;\nalign-items:center ;\njustify-content: space-between ;\n"]))),N=f.ZP.button(x||(x=(0,m.Z)(["\ndisplay: block;\nwidth: 135px;\nmargin-left: auto;\ntransition: background-color 250ms linear;\noutline: none;\n&:hover{\n    background-color: green;\n    border-color: transparent;\n}\n"]))),q=t(8402);function D(n){var e=n.name,t=n.number,a=n.id,r=n.elId,i=n.idChanger,o=(0,v.v9)(w.VO),s=(0,v.I0)();return(0,A.jsxs)(F,{children:[e,": ",t,o&&r===a?(0,A.jsx)(q.fe,{height:"40",width:"80"}):(0,A.jsx)(N,{onClick:function(n){i(n.target.dataset.id),s((0,y.ku)(n.target.dataset.id))},"data-id":a,children:"Delete contact"})]})}function L(){var n=(0,j.useState)(""),e=(0,Z.Z)(n,2),t=e[0],a=e[1],r=function(n){a(n)},i=(0,v.v9)(w.vu);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(z,{children:"Contacts"}),(0,A.jsx)(S,{children:i.map((function(n){return(0,A.jsx)(D,{elId:t,idChanger:r,id:n.id,name:n.name,number:n.number},n.id)}))})]})}var B,E,G=t(6895),J=f.ZP.label(B||(B=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  gap: 20px;\n"]))),M=f.ZP.input(E||(E=(0,m.Z)(["\n  height: 20px;\n"])));function O(){var n=(0,v.v9)(w.S7),e=(0,v.I0)();return(0,A.jsxs)(J,{children:["Find contacts by name",(0,A.jsx)(M,{name:"filter",value:n,onChange:function(n){var t=n.target.value;e((0,G.s)(t))},type:"text"})]})}function Q(){var n=(0,v.I0)();return(0,j.useEffect)((function(){n((0,y.XQ)())}),[n]),(0,A.jsxs)(b,{children:[(0,A.jsx)(g,{children:"Phonebook"}),(0,A.jsx)(I,{}),(0,A.jsx)(O,{}),(0,A.jsx)(L,{})]})}}}]);
//# sourceMappingURL=842.a38062fe.chunk.js.map