(()=>{var o={n:a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return o.d(e,{a:e}),e},d:(a,e)=>{for(var n in e)o.o(e,n)&&!o.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})},o:(o,a)=>Object.prototype.hasOwnProperty.call(o,a)};(()=>{"use strict";const a=flarum.core.compat["common/app"];o.n(a)().initializers.add("leomahdi/flarum-wall",(function(){console.log("[leomahdi/flarum-wall] Hello, forum and admin!")}));const e=flarum.core.compat["admin/app"];var n=o.n(e);const l=flarum.core.compat["common/extend"],t=flarum.core.compat["admin/components/AdminPage"];var r=o.n(t);n().initializers.add("leomahdi/flarum-wall",(function(){console.log("[leomahdi/flarum-wall] Hello, admin!"),(0,l.extend)(r().prototype,"content",(function(o){console.log("Adding custom box to admin panel")}))}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map