(this["webpackJsonpclient-view-genially"]=this["webpackJsonpclient-view-genially"]||[]).push([[1],{878:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t(1),c=t.n(i),s=t(6),o=t(54),p=function(){return(p=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},d=s.d.div.withConfig({displayName:"TableChartWrapper",componentId:"sc-1ibkby6"})((function(){return{width:"100%",height:"100%",wordBreak:"break-all"}})),u=s.d.table.withConfig({displayName:"TableStyled",componentId:"sc-cgk0bz"})((function(e){return{borderCollapse:"collapse",height:"100%",width:"100%",tableLayout:e.fixed?"fixed":"auto"}})),f=s.d.td.withConfig({displayName:"TableCell",componentId:"sc-tufg18"})((function(){return p({},o.a.increaseSpecificity({padding:"0.15em"}))})),y=function(e){var a=e.data,t=e.id,n=e.cellStyles,l="fixed"===e.tableStyles.css.tableLayout;return r.a.createElement(d,{className:"genially-chart-wrapper"},r.a.createElement(u,{fixed:l},r.a.createElement("tbody",null,a.map((function(e,a){var l="t_"+t+"_r_"+a;return r.a.createElement("tr",{key:l},e.map((function(e,l){var i="t_"+t+"_c_"+a+"_"+l;return r.a.createElement(f,{style:n[a][l].css,key:i},r.a.createElement("span",null,e))})))})))))};y.propTypes={data:c.a.arrayOf(c.a.arrayOf(c.a.oneOfType([c.a.string,c.a.number]))),cellStyles:c.a.arrayOf(c.a.arrayOf(c.a.shape({css:c.a.object}))),tableStyles:c.a.shape({css:c.a.shape({tableLayout:c.a.oneOf(["auto","fixed"])})}),id:c.a.string},y.defaultProps={};a.default=Object(l.c)(y)}}]);
//# sourceMappingURL=tableChart.f53ab1f7.chunk.js.map