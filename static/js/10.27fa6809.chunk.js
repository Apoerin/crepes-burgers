(this["webpackJsonpcrepes-burgers"]=this["webpackJsonpcrepes-burgers"]||[]).push([[10],{93:function(e,t,c){"use strict";c.r(t);var r=c(11),i=c(33),a=c(3),n=c(0),s=c(91),o=(c(90),c(37)),d=[{id:"1",category:"burger",image:c.p+"static/media/cranberry-burger.473d2d9d.jpg",title:"Cranberry",description:"100% Beef, Camembert, cranberry sauce, red onion, arugula, lamb`s lettuce",price:5},{id:"2",category:"burger",image:c.p+"static/media/italian-taste.d2d1b05f.jpg",title:"Italian taste",description:"100% Beef, mascarpone, black olives, dried tomatoes, red onion, arugula, iceberg lettuce",price:4},{id:"3",category:"burger",image:c.p+"static/media/mushroom-burger.7a7ff9a6.jpg",title:"Mushroom",description:"100% beef, mushrooms in sour cream, red onion, arugula, cheddar, iceberg lettuce",price:4},{id:"4",category:"burger",image:c.p+"static/media/seasonal-burger.dfc88c14.jpg",title:"Seasonal",description:"100% beef, tomato sauce, asparagus, red onion, iceberg lettuce, lamb`s lettuce",price:5},{id:"5",category:"burger",image:c.p+"static/media/vege-burger.be23a60a.jpg",title:"Vege",description:"Halloumi cheese, red onion, beetroot marinated in honey, homemade sauce, sunflower sprouts, lamb`s lettuce",price:5},{id:"6",category:"crepe",image:c.p+"static/media/bacon-crepe.7daddcdb.jpg",title:"Bacon",description:"Mozzarella, grilled chicken, fried bacon, fresh tomatoes, BBQ sauce, spinach, arugula",price:5},{id:"7",category:"crepe",image:c.p+"static/media/four-cheese-crepe.d1a6df41.jpg",title:"4 cheese",description:"Mozzarella, gorgonzola, camembert, parmesan, white sauce, arugula",price:5},{id:"8",category:"crepe",image:c.p+"static/media/nutella-crepe.26e0811a.jpg",title:"Nutella",description:"Nutella, Oreo bisquits, strawberries",price:5},{id:"9",category:"crepe",image:c.p+"static/media/salmon-crepe.51ce3dba.jpg",title:"Salmon",description:"Philadelphia cheese, fresh salmon, avocado, fresh cucumber",price:5},{id:"10",category:"crepe",image:c.p+"static/media/vege-salad.bcc20032.jpg",title:"Vege salad",description:"Beetroot marinated in honey, Halloumi cheese, pomegranate seeds, lamb`s lettuce, cashew nuts",price:5},{id:"11",category:"crepe",image:c.p+"static/media/coleslow.14dbd173.jpg",title:"Coleslow salad",description:"Cabbage, lime juice, mayonnaise, lemongrass, coriander",price:5}];function l(e){var t=e.product,c=e.addToCart,r=t.image,i=t.title,n=t.description,s=t.price;return Object(a.jsxs)("li",{children:[Object(a.jsx)("h4",{children:i}),Object(a.jsxs)("span",{children:[s,"$"]}),Object(a.jsx)("img",{src:r,alt:i}),Object(a.jsx)("p",{children:n}),Object(a.jsx)("button",{type:"submit",onClick:function(){return c(t)},children:"Add to cart"})]})}function u(e){var t=e.product,c=e.removeFromCart,r=e.count,i=e.incrementCount,n=e.decrementCount,s=t.image,d=t.title,l=t.price;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("li",{className:"cart-item__container",children:[Object(a.jsx)("img",{src:s,alt:d,className:"cart-item__image"}),Object(a.jsx)("h4",{className:"cart-item__title",children:d}),Object(a.jsxs)("h4",{className:"cart-item__price",children:[l,"$"]}),Object(a.jsxs)("h4",{className:"cart-item__buttons",children:[Object(a.jsx)("button",{className:"btn-count__decrease",disabled:1===r,onClick:function(){return n(t)},children:"-"}),Object(a.jsx)("span",{className:"count-value",children:r}),Object(a.jsx)("button",{className:"btn-count__increase",onClick:function(){return i(t)},children:"+"})]}),Object(a.jsx)(o.e,{className:"icon__remove",onClick:function(){return c(t)}})]})})}var j=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(a.jsxs)("div",{className:"form-wrapper",children:[Object(a.jsx)("h2",{children:"Submit Your Order"}),c&&Object(a.jsx)("div",{children:"Submitting Your Order..."}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(!0),setTimeout((function(){r(!1)}),1e3)},children:[Object(a.jsxs)("fieldset",{children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("p",{children:"Your Name"}),Object(a.jsx)("input",{name:"name",required:!0})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("p",{children:"Your Mobile Phone"}),Object(a.jsx)("input",{type:"number",pattern:"^-?[0-9]\\d*\\.?\\d*$",required:!0})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("p",{children:"Street Name"}),Object(a.jsx)("input",{name:"name",required:!0})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("p",{children:"House Number"}),Object(a.jsx)("input",{type:"number",pattern:"^-?[0-9]\\d*\\.?\\d*$",required:!0})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("p",{children:"Choose Delivery Time"}),Object(a.jsx)("input",{type:"radio",name:"radio",required:!0})," In 30 minutes",Object(a.jsx)("input",{type:"radio",name:"radio",required:!0})," In 1 hour",Object(a.jsx)("input",{type:"radio",name:"radio",required:!0})," In 1,5 hour"]})]}),Object(a.jsx)("button",{type:"submit",className:"submit-order",children:"Submit"})]})]})},b=c.p+"static/media/sweet-lunch.bbc9fc22.jpg",m=c.p+"static/media/sweet-crepes.f2c79364.jpg";t.default=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],p=t[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),g=O[0],x=O[1],f=function(e){var t=c.slice(),i=t.findIndex((function(t){return e.id===t.id}));if(-1===i)t.push(Object(r.a)(Object(r.a)({},e),{},{count:1}));else{var a=t[i];t[i]=Object(r.a)(Object(r.a)({},a),{},{count:a.count+1})}p(t)},N=function(e){var t=c.filter((function(t){return e.id!==t.id}));p(t)},v=function(e){var t=c.slice(),i=t.findIndex((function(t){return e.id===t.id})),a=t[i];t[i]=Object(r.a)(Object(r.a)({},a),{},{count:a.count+1}),p(t)},y=function(e){var t=c.slice(),i=t.findIndex((function(t){return e.id===t.id})),a=t[i];t[i]=Object(r.a)(Object(r.a)({},a),{},{count:a.count-1}),p(t)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(s.d,{className:"tabs-wrapper",id:"menu",children:[Object(a.jsxs)(s.b,{className:"tabs",children:[Object(a.jsx)(s.a,{className:"tab-item",children:"Burgers"}),Object(a.jsx)(s.a,{className:"tab-item",children:"Lunch of the day"}),Object(a.jsx)(s.a,{className:"tab-item",children:"Crepes"})]}),Object(a.jsx)(s.c,{children:Object(a.jsx)("div",{className:"burgers",children:Object(a.jsx)("ul",{children:d.filter((function(e){return"burger"===e.category})).map((function(e){return Object(a.jsx)(l,{product:e,addToCart:f},e.id)}))})})}),Object(a.jsx)(s.c,{children:Object(a.jsxs)("div",{className:"lunch",children:[Object(a.jsx)("h4",{children:"Sweet lunch today!"}),Object(a.jsx)("span",{children:"7$"}),Object(a.jsxs)("p",{children:["You can choose one of our 3 sweet crepes + one of our 4 cold drinks!",Object(a.jsx)("br",{}),"Nutella crepe, Crepe with salted caramel and nuts or Oreo Bang crepe with whipped cream and raspberries.",Object(a.jsx)("br",{}),"For drink - one of our homemade lemonades - Melon, Orange or Lemon-Mint. Or a Frozen Coffee!"]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:b,alt:"Sweet crepe lunch"}),Object(a.jsx)("img",{src:m,alt:"Sweet crepes lunch"})]})]})}),Object(a.jsx)(s.c,{children:Object(a.jsx)("div",{className:"crepes",children:Object(a.jsx)("ul",{children:d.filter((function(e){return"crepe"===e.category})).map((function(e){return Object(a.jsx)(l,{product:e,addToCart:f},e.id)}))})})})]}),Object(a.jsxs)("div",{className:"cart-icon__container",children:[Object(a.jsx)("span",{className:"cart-items__quantity",children:c.reduce((function(e,t){return e+t.count}),0)}),Object(a.jsx)(o.d,{className:"cart-icon",onClick:function(){return x(!g)}})]}),g&&Object(a.jsxs)("div",{className:"cart__container",children:[Object(a.jsxs)("div",{className:"cart-items__container",children:[c.map((function(e){return Object(a.jsx)(u,{product:e,count:e.count,removeFromCart:N,incrementCount:v,decrementCount:y},e.id)})),Object(a.jsxs)("h4",{className:"cart__total",children:["Total Price: ",c.reduce((function(e,t){return e+t.price*t.count}),0),"$"]}),Object(a.jsx)("button",{className:"btn__clear",onClick:function(){return p([])},children:"Clear cart"})]}),Object(a.jsx)(j,{})]})]})}}}]);
//# sourceMappingURL=10.27fa6809.chunk.js.map