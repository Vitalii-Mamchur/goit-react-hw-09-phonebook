(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{130:function(e,t,a){},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(40);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},137:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(22),c=a(131),o=a(0),l=a(10),i=a(16),s=(a(130),a(129)),u=a(2);t.default=function(){var e=Object(l.c)(),t=Object(o.useState)({name:"",email:"",password:""}),a=Object(c.a)(t,2),b=a[0],m=a[1],j=Object(o.useCallback)((function(e){var t=e.currentTarget,a=t.name,c=t.value;m((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a,c))}))}),[]),d=b.name,p=b.email,h=b.password;return Object(u.jsx)("div",{className:"Container",children:Object(u.jsxs)("div",{className:"RegisterSection",children:[Object(u.jsx)("h1",{className:"Title",children:"Create account"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i.a.register(b)),m({name:"",email:"",password:""})},className:"form",autoComplete:"off",children:[Object(u.jsxs)("label",{className:"label",children:["Name",Object(u.jsx)("input",{type:"text",name:"name",value:d,onChange:j,placeholder:"Enter name"})]}),Object(u.jsxs)("label",{className:"label",children:["Email",Object(u.jsx)("input",{type:"email",name:"email",value:p,onChange:j,placeholder:"Enter email"})]}),Object(u.jsxs)("label",{className:"label",children:["Password",Object(u.jsx)("input",{type:"password",name:"password",value:h,onChange:j,placeholder:"Enter password"})]}),Object(u.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",children:"SIGN UP"})]})]})})}}}]);
//# sourceMappingURL=register-view.88963694.chunk.js.map