(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s,c=n(1),a=n.n(c),i=n(7),r=n.n(i),o=n(2),l=(n(13),n(8)),u=n(0),d=function(e){var t=e.data,n=e.onAnswerUpdate,s=e.numberOfQuestions,a=e.activeQuestion,i=e.onSetActiveQuestion,r=e.onSetstep,d=Object(c.useState)(""),j=Object(o.a)(d,2),b=j[0],h=j[1],O=Object(c.useState)(""),f=Object(o.a)(O,2),m=f[0],v=f[1],x=Object(c.useRef)();Object(c.useEffect)((function(){var e=x.current.querySelector("input:checked");e&&(e.checked=!1)}),[t]);var p=function(e){h(e.target.value),m&&v("")};return Object(u.jsx)("div",{className:"card",children:Object(u.jsx)("div",{className:"card-content",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{className:"mb-5",children:t.title}),Object(u.jsxs)("div",{className:"control",ref:x,children:[t.choices.map((function(e,t){return Object(u.jsxs)("label",{className:"radio has-background-light",children:[Object(u.jsx)("input",{type:"radio",name:"answer",value:e,onChange:p}),e]})})),m&&Object(u.jsx)("div",{className:"has-text-danger",children:m}),Object(u.jsx)("button",{className:"button is-link is-medium is-fullwidth mt-4",onClick:function(e){if(""===b)return v("Please select an option");n((function(e){return[].concat(Object(l.a)(e),[{q:t.question,a:b}])})),h(""),a<s-1?i(a+1):r(3)},children:"Next"})]})]})})})},j=n(5),b=function(e){return e<60?e<10?"0".concat(e,"s"):"".concat(e,"s"):Math.floor(e/60)+"m"+e%60+"s"},h=function(e){var t=e.results,n=e.data,s=e.onReset,a=e.onAnswersCheck,i=e.time,r=Object(c.useState)(0),l=Object(o.a)(r,2),d=l[0],j=l[1];return Object(c.useEffect)((function(){var e=0;t.forEach((function(t,s){t.a===n[s].answer&&e++})),j(e)})),Object(u.jsx)("div",{className:"card",children:Object(u.jsx)("div",{className:"card-component",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h3",{children:"Your Results!"}),Object(u.jsxs)("p",{children:[d," out of ",n.length]}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[Math.floor(d/n.length*100),"%"]})}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Your time: "}),b(i)]}),Object(u.jsx)("button",{className:"button is-info mr-2",onClick:a,children:"Check your answers"}),Object(u.jsx)("button",{className:"button is-success",onClick:s,children:"Try again"})]})})})},O=function(e){var t=e.onQuizStart;return Object(u.jsx)("div",{className:"card",children:Object(u.jsx)("div",{className:"card-content",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{children:"Start the quiz"}),Object(u.jsx)("p",{children:"Good luck!"}),Object(u.jsx)("button",{className:"button is-info is-medium",onClick:t,children:"Start"})]})})})},f=function(){var e=Object(c.useState)(1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),r=Object(o.a)(i,2),l=r[0],b=r[1],f=Object(c.useState)([]),m=Object(o.a)(f,2),v=m[0],x=m[1],p=Object(c.useState)(0),g=Object(o.a)(p,2),N=g[0],S=g[1];Object(c.useEffect)((function(){3===n&&clearInterval(s)}),[n]);return Object(u.jsxs)("div",{className:"App",children:[1===n&&Object(u.jsx)(O,{onQuizStart:function(){a(2),s=setInterval((function(){S((function(e){return e+1}))}),1e3)}}),2===n&&Object(u.jsx)(d,{data:j.data[l],onAnswerUpdate:x,numberOfQuestions:j.data.length,activeQuestion:l,onSetActiveQuestion:b,onSetstep:a}),3===n&&Object(u.jsx)(h,{results:v,data:j.data,onReset:function(){b(0),x([]),a(2),S(0),s=setInterval((function(){S((function(e){return e+1}))}),1e3)},onAnswersCheck:function(){},time:N})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"data":[{"title":"Commonly used data types DO NOT include:","choices":["strings","booleans","alerts","numbers"],"answer":"alerts"},{"title":"The condition in an if / else statement is enclosed within ____.","choices":["quotes","curly brackets","parentheses","square brackets"],"answer":"parentheses"},{"title":"Arrays in JavaScript can be used to store ____.","choices":["numbers and strings","other arrays","booleans","all of the above"],"answer":"all of the above"},{"title":"String values must be enclosed within ____ when being assigned to variables.","choices":["commas","curly brackets","quotes","parentheses"],"answer":"quotes"},{"title":"A very useful tool used during development and debugging for printing content to the debugger is:","choices":["JavaScript","terminal / bash","for loops","console.log"],"answer":"console.log"}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.8b9376d6.chunk.js.map