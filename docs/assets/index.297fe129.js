import{d as A,r as e,a as s,u as a,b as n,w as l,o as t,c as o,e as i,f as d,n as r,g as c,p as u,h as g,i as p,j as b,k as v,l as M,m}from"./vendor.abcb2dcc.js";!function(){const A=document.createElement("link").relList;if(!(A&&A.supports&&A.supports("modulepreload"))){for(const A of document.querySelectorAll('link[rel="modulepreload"]'))e(A);new MutationObserver((A=>{for(const s of A)if("childList"===s.type)for(const A of s.addedNodes)"LINK"===A.tagName&&"modulepreload"===A.rel&&e(A)})).observe(document,{childList:!0,subtree:!0})}function e(A){if(A.ep)return;A.ep=!0;const e=function(A){const e={};return A.integrity&&(e.integrity=A.integrity),A.referrerpolicy&&(e.referrerPolicy=A.referrerpolicy),"use-credentials"===A.crossorigin?e.credentials="include":"anonymous"===A.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(A);fetch(A.href,e)}}();var f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAUCAYAAAAZb7T/AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvwAADr8BOAVTJAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAKxJREFUSEvVlUEKgDAMBH2qP/ZHrRvSiJI9NEYhXRiaThT2ILj13peDyupQWR0qq0PlGyyzPgOVUVprB8599HOR3XjGvfsGKiNYKSBxxcXpSnc401AZwYLZFZdZ1cOloTKKBfNVciD5tLBAZZR7cLeyksfngvsnUBnlHtzXKo15jc/DgpmV/KU4lRFGEVfOIk5XusOZhsooy/1cDMusz0BldaisDpXVobI2fTsBvFzh3OtNZ/AAAAAASUVORK5CYII=",h=(A,e)=>{for(const[s,a]of e)A[s]=a;return A};var w=h(A({props:{dragging:{type:Boolean,required:!0}},setup(A){const u=A,g=e({left:125,top:125,width:800,height:500}),p=s({n:!1,e:!1,w:!1,s:!1}),b=()=>p.value={n:!1,e:!1,w:!1,s:!1};a("mouseup",b),a("dragend",b);const{x:v,y:M}=n();l([v,M],(([A,e],[s,a])=>{if(!0===u.dragging&&(g.left+=A-s,g.top+=e-a,b()),p.value.w){const e=A-g.left;g.width-=e,g.left=A}else p.value.e&&(g.width=A-g.left);if(p.value.n){const A=e-g.top;g.height-=A,g.top=e}else p.value.s&&(g.height=e-g.top)}));const m=({n:A=!1,w:e=!1,e:s=!1,s:a=!1})=>{A?p.value.n=!0:a&&(p.value.s=!0),e?p.value.w=!0:s&&(p.value.e=!0)};return(A,e)=>(t(),o("div",{class:"main",style:r(c(g))},[i("div",{onMousedown:e[0]||(e[0]=A=>m({n:!0,w:!0})),class:"nw"},null,32),i("div",{onMousedown:e[1]||(e[1]=A=>m({n:!0})),class:"n"},null,32),i("div",{onMousedown:e[2]||(e[2]=A=>m({n:!0,e:!0})),class:"ne"},null,32),i("div",{onMousedown:e[3]||(e[3]=A=>m({w:!0})),class:"w"},null,32),d(A.$slots,"default",{},void 0,!0),i("div",{onMousedown:e[4]||(e[4]=A=>m({e:!0})),class:"e"},null,32),i("div",{onMousedown:e[5]||(e[5]=A=>m({s:!0,w:!0})),class:"sw"},null,32),i("div",{onMousedown:e[6]||(e[6]=A=>m({s:!0})),class:"s"},null,32),i("div",{onMousedown:e[7]||(e[7]=A=>m({s:!0,e:!0})),class:"se"},null,32)],4))}}),[["__scopeId","data-v-3f6e6004"]]);const U={};u("data-v-be7143b0");const B={class:"content"},V=[p('<p class="purple" data-v-be7143b0>Links</p><p class="yellow" data-v-be7143b0><a href="https://github.com/JockeM" data-v-be7143b0>github </a></p><p class="yellow" data-v-be7143b0><a href="https://www.linkedin.com/in/joakim-malmberg-b494311a9/" data-v-be7143b0>linkedin </a></p><p class="white" data-v-be7143b0>Very wip...</p>',4)];g();var E=h(U,[["render",function(A,e){return t(),o("div",B,V)}],["__scopeId","data-v-be7143b0"]]);u("data-v-29578302");const R={class:"terminal"},Y=[i("div",{class:"tabs"},[i("div",{class:"tabs-prefix-before"}),i("div",{class:"tab"},[i("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAMAAADTXB33AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAdRQTFRFAAAAWmhzn7jMnrfMnrbMnLXMmrPMmbLMl7DMlq/Mla7Mk6zMkqrMkKnMjqfMfZOlLUZkb4CUbn+TKkFdKD5YJTpTIzZNIDJHHS1AGig5FiMyEx4qboOjFBcadI2lytHY////eYeXJjtUIzZOIDJIHS5BGik6FyQzEx4rEBkjYXOOPEVNWHGLLEViUmV88vP18vT4TV50ITNIHi5CGik7FyQ0FB8sEBkkJS89RlJmWWdzO1NvK0JfKT9aT2B18fP08fL0SFZmGyo7FyU0FB8tERolDRQdQ1BmIykzcYWYK0NfKT9bJzxVJDhQWWd38fLzHC5GFCAuERomDRUeCg8VYXORCQoNCgwNeJGqKUBbJzxWS1tt1dndytXkIDpfERsnDhUfChAWBgoOXm+OJy0zWnKMJz1XJDlRg46biJ/BIT5lEx8uDhYfChAXBwoPFBgfTFpzTVlmPVNtM0ZdusDI19/qUnKgV2mCiY6Vh4uRhYmNhIaIMjQ1MzxNa32SJTpSkZumo7XPNFSBFyU2iY+Vhpq4VWSAERQae5KuPEteUGqRITteEx0qDxgiHDNVGjBQGC1MFitJEyU/ZniZkarMj6jMjqbMjKXMiqPMiaLMiKHMh6DMiLqVPwAAANVJREFUeJxjYBgqgJGJmYWVjZ2Dk4ubh5cPRYpfQFBIWERUTFxCUkpaBllGVk5AXkFRSVlFVU1dQ1MLWUpbR1dP38DQyNjE1MzcwhJZysraxtbO3sHRydnF1c3dA1nK08vbx9dPwT8gMCg4JDQMSSY8IjLKNzpGITYuPiExKRlZU0pqWnqGgkJmVnZObl5+AbJUYVFxiUJpWXlFZVV1TW0tslRdfYNCY1NziwIQtLa1I0t1iHV2dUv19Pb1T5g4aTJKWICCZ8rUadNnzJw1ezaKVYMaAACfTDK6606OIgAAAABJRU5ErkJggg=="}),i("h2",null,"PowerShell"),i("button",{class:"tab-close"},[i("img",{src:f})])]),i("div",{class:"tabs-prefix-after"})],-1),i("div",{class:"tab-actions"},[i("button",null,""),i("button",null,"")],-1),i("div",{class:"space"},null,-1),i("div",{class:"window-actions"},[i("button",null,[i("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAATCAYAAAAEaoRHAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAEhJREFUSEvVy7ENACAQAzH2X/pZwAVQHZHcnJQ1M99hrGOsY6xjrGOsY6xjrGOsY3x0On2vMNYx1jHWMdYx1jHWMdYx1jG2zdoKygWIaDQ4LQAAAABJRU5ErkJggg=="})]),i("button",null,[i("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAUCAYAAAAZb7T/AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAHxJREFUSEvVyzEKADEAAsH8/9M57Cy2iFaeMM2C5977OxjXYVyHcR3GdRgLr6NvDGNBo+406jGMBY2606jHMBY06k6jHsNY0Kg7jXoMY0Gj7jTqMYwFjbrTqMcwFjTqTqMew1jQqDuNegxj4XX0jWFch3EdxnUY12Hcds8Hmf6l51aUsd8AAAAASUVORK5CYII="})]),i("button",{class:"close"},[i("img",{src:f})])],-1)],F={class:"terminal-body"};g();var y=h(A({setup(A){const e=s(!1);a("mouseup",(()=>e.value=!1)),a("dragend",(()=>e.value=!1));const n=A=>{e.value=!0};return(A,s)=>(t(),b(w,{dragging:e.value,class:"wrapper"},{default:v((()=>[i("div",R,[i("header",{class:"header",onMousedown:n,ref:(A,e)=>{e.draggableElement=A}},Y,544),i("div",F,[M(E)])])])),_:1},8,["dragging"]))}}),[["__scopeId","data-v-29578302"]]);m(A({setup:A=>(A,e)=>(t(),o("main",null,[M(y)]))})).mount("#app");
