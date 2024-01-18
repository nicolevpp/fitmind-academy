import{c as I,k,m as S,x as y,y as n,aE as N,V as A,aF as x,M as E,s as F,l as M,Q as O,aG as G,H as L,af as U,d as w,i as j,t as H,aH as P,A as C,aI as V,_ as R,E as _,w as z,aJ as B,v as b,T as W,aj as v}from"./core-00582efd.js";class $ extends H{constructor(){super(...arguments),this.state={textId:y()}}render(){let{theme:e,dateEnv:t,options:s,viewApi:i}=this.context,{cellId:r,dayDate:c,todayRange:o}=this.props,{textId:l}=this.state,d=P(c,o),f=s.listDayFormat?t.format(c,s.listDayFormat):"",h=s.listDaySideFormat?t.format(c,s.listDaySideFormat):"",u=Object.assign({date:t.toDate(c),view:i,textId:l,text:f,sideText:h,navLinkAttrs:C(this.context,c),sideNavLinkAttrs:C(this.context,c,"day",!1)},d);return n(x,{elTag:"tr",elClasses:["fc-list-day",...V(d,e)],elAttrs:{"data-date":E(c)},renderProps:u,generatorName:"dayHeaderContent",customGenerator:s.dayHeaderContent,defaultGenerator:q,classNameGenerator:s.dayHeaderClassNames,didMount:s.dayHeaderDidMount,willUnmount:s.dayHeaderWillUnmount},g=>n("th",{scope:"colgroup",colSpan:3,id:r,"aria-labelledby":l},n(g,{elTag:"div",elClasses:["fc-list-day-cushion",e.getClass("tableCellShaded")]})))}}function q(a){return n(R,null,a.text&&n("a",Object.assign({id:a.textId,className:"fc-list-day-text"},a.navLinkAttrs),a.text),a.sideText&&n("a",Object.assign({"aria-hidden":!0,className:"fc-list-day-side-text"},a.sideNavLinkAttrs),a.sideText))}const Y=I({hour:"numeric",minute:"2-digit",meridiem:"short"});class J extends H{render(){let{props:e,context:t}=this,{options:s}=t,{seg:i,timeHeaderId:r,eventHeaderId:c,dateHeaderId:o}=e,l=s.eventTimeFormat||Y;return n(_,Object.assign({},e,{elTag:"tr",elClasses:["fc-list-event",i.eventRange.def.url&&"fc-event-forced-url"],defaultGenerator:()=>K(i,t),seg:i,timeText:"",disableDragging:!0,disableResizing:!0}),(d,f)=>n(R,null,Q(i,l,t,r,o),n("td",{"aria-hidden":!0,className:"fc-list-event-graphic"},n("span",{className:"fc-list-event-dot",style:{borderColor:f.borderColor||f.backgroundColor}})),n(d,{elTag:"td",elClasses:["fc-list-event-title"],elAttrs:{headers:`${c} ${o}`}})))}}function K(a,e){let t=z(a,e);return n("a",Object.assign({},t),a.eventRange.def.title)}function Q(a,e,t,s,i){let{options:r}=t;if(r.displayEventTime!==!1){let c=a.eventRange.def,o=a.eventRange.instance,l=!1,d;if(c.allDay?l=!0:B(a.eventRange.range)?a.isStart?d=b(a,e,t,null,null,o.range.start,a.end):a.isEnd?d=b(a,e,t,null,null,a.start,o.range.end):l=!0:d=b(a,e,t),l){let f={text:t.options.allDayText,view:t.viewApi};return n(x,{elTag:"td",elClasses:["fc-list-event-time"],elAttrs:{headers:`${s} ${i}`},renderProps:f,generatorName:"allDayContent",customGenerator:r.allDayContent,defaultGenerator:X,classNameGenerator:r.allDayClassNames,didMount:r.allDayDidMount,willUnmount:r.allDayWillUnmount})}return n("td",{className:"fc-list-event-time"},d)}return null}function X(a){return a.text}class Z extends k{constructor(){super(...arguments),this.computeDateVars=S(te),this.eventStoreToSegs=S(this._eventStoreToSegs),this.state={timeHeaderId:y(),eventHeaderId:y(),dateHeaderIdRoot:y()},this.setRootEl=e=>{e?this.context.registerInteractiveComponent(this,{el:e}):this.context.unregisterInteractiveComponent(this)}}render(){let{props:e,context:t}=this,{dayDates:s,dayRanges:i}=this.computeDateVars(e.dateProfile),r=this.eventStoreToSegs(e.eventStore,e.eventUiBases,i);return n(A,{elRef:this.setRootEl,elClasses:["fc-list",t.theme.getClass("table"),t.options.stickyHeaderDates!==!1?"fc-list-sticky":""],viewSpec:t.viewSpec},n(N,{liquid:!e.isHeightAuto,overflowX:e.isHeightAuto?"visible":"hidden",overflowY:e.isHeightAuto?"visible":"auto"},r.length>0?this.renderSegList(r,s):this.renderEmptyMessage()))}renderEmptyMessage(){let{options:e,viewApi:t}=this.context,s={text:e.noEventsText,view:t};return n(x,{elTag:"div",elClasses:["fc-list-empty"],renderProps:s,generatorName:"noEventsContent",customGenerator:e.noEventsContent,defaultGenerator:ee,classNameGenerator:e.noEventsClassNames,didMount:e.noEventsDidMount,willUnmount:e.noEventsWillUnmount},i=>n(i,{elTag:"div",elClasses:["fc-list-empty-cushion"]}))}renderSegList(e,t){let{theme:s,options:i}=this.context,{timeHeaderId:r,eventHeaderId:c,dateHeaderIdRoot:o}=this.state,l=ae(e);return n(O,{unit:"day"},(d,f)=>{let h=[];for(let u=0;u<l.length;u+=1){let g=l[u];if(g){let m=E(t[u]),D=o+"-"+m;h.push(n($,{key:m,cellId:D,dayDate:t[u],todayRange:f})),g=F(g,i.eventOrder);for(let p of g)h.push(n(J,Object.assign({key:m+":"+p.eventRange.instance.instanceId,seg:p,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,timeHeaderId:r,eventHeaderId:c,dateHeaderId:D},M(p,f,d))))}}return n("table",{className:"fc-list-table "+s.getClass("table")},n("thead",null,n("tr",null,n("th",{scope:"col",id:r},i.timeHint),n("th",{scope:"col","aria-hidden":!0}),n("th",{scope:"col",id:c},i.eventHint))),n("tbody",null,h))})}_eventStoreToSegs(e,t,s){return this.eventRangesToSegs(G(e,t,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,s)}eventRangesToSegs(e,t){let s=[];for(let i of e)s.push(...this.eventRangeToSegs(i,t));return s}eventRangeToSegs(e,t){let{dateEnv:s}=this.context,{nextDayThreshold:i}=this.context.options,r=e.range,c=e.def.allDay,o,l,d,f=[];for(o=0;o<t.length;o+=1)if(l=L(r,t[o]),l&&(d={component:this,eventRange:e,start:l.start,end:l.end,isStart:e.isStart&&l.start.valueOf()===r.start.valueOf(),isEnd:e.isEnd&&l.end.valueOf()===r.end.valueOf(),dayIndex:o},f.push(d),!d.isEnd&&!c&&o+1<t.length&&r.end<s.add(t[o+1].start,i))){d.end=r.end,d.isEnd=!0;break}return f}}function ee(a){return a.text}function te(a){let e=U(a.renderRange.start),t=a.renderRange.end,s=[],i=[];for(;e<t;)s.push(e),i.push({start:e,end:w(e,1)}),e=w(e,1);return{dayDates:s,dayRanges:i}}function ae(a){let e=[],t,s;for(t=0;t<a.length;t+=1)s=a[t],(e[s.dayIndex]||(e[s.dayIndex]=[])).push(s);return e}var se=':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';j(se);const ne={listDayFormat:T,listDaySideFormat:T,noEventsClassNames:v,noEventsContent:v,noEventsDidMount:v,noEventsWillUnmount:v};function T(a){return a===!1?null:I(a)}var re=W({name:"@fullcalendar/list",optionRefiners:ne,views:{list:{component:Z,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}});export{re as i};
