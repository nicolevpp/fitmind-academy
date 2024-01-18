import{i as J,c as j,a as L,D as Q,b as z,d as I,e as Z,m as E,f as x,y as o,g as X,h as ee,j as te,k as D,R as k,s as se,_ as C,l as M,B as ne,r as ie,n as re,P,o as O,S as ae,V as B,p as le,q as oe,t as W,u as de,v as ce,w as fe,E as ge,x as ue,z as A,W as he,A as F,C as pe,F as ye,G as me,H as ve,I as be,J as N,K as Re,L as Se,M as Ce,N as Ee,O as xe,Q as we,T as De}from"./core-00582efd.js";var ke=':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';J(ke);function T(n,e){let t=[];for(let s=0;s<e;s+=1)t[s]=[];for(let s of n)t[s.row].push(s);return t}function H(n,e){let t=[];for(let s=0;s<e;s+=1)t[s]=[];for(let s of n)t[s.firstCol].push(s);return t}function G(n,e){let t=[];if(n){for(let s=0;s<e;s+=1)t[s]={affectedInstances:n.affectedInstances,isEvent:n.isEvent,segs:[]};for(let s of n.segs)t[s.row].segs.push(s)}else for(let s=0;s<e;s+=1)t[s]=null;return t}const V=j({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function q(n){let{display:e}=n.eventRange.ui;return e==="list-item"||e==="auto"&&!n.eventRange.def.allDay&&n.firstCol===n.lastCol&&n.isStart&&n.isEnd}class U extends W{render(){let{props:e}=this;return o(de,Object.assign({},e,{elClasses:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:V,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}}class _ extends W{render(){let{props:e,context:t}=this,{options:s}=t,{seg:r}=e,i=s.eventTimeFormat||V,a=ce(r,i,t,!0,e.defaultDisplayEventEnd);return o(ge,Object.assign({},e,{elTag:"a",elClasses:["fc-daygrid-event","fc-daygrid-dot-event"],elAttrs:fe(e.seg,t),defaultGenerator:Me,timeText:a,isResizing:!1,isDateSelecting:!1}))}}function Me(n){return o(C,null,o("div",{className:"fc-daygrid-event-dot",style:{borderColor:n.borderColor||n.backgroundColor}}),n.timeText&&o("div",{className:"fc-event-time"},n.timeText),o("div",{className:"fc-event-title"},n.event.title||o(C,null," ")))}class Te extends W{constructor(){super(...arguments),this.compileSegs=E(He)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:s}=this.compileSegs(e.singlePlacements);return o(xe,{elClasses:["fc-daygrid-more-link"],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:s,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let r=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return o(C,null,t.map(i=>{let a=i.eventRange.instance.instanceId;return o("div",{className:"fc-daygrid-event-harness",key:a,style:{visibility:r[a]?"hidden":""}},q(i)?o(_,Object.assign({seg:i,isDragging:!1,isSelected:a===e.eventSelection,defaultDisplayEventEnd:!1},M(i,e.todayRange))):o(U,Object.assign({seg:i,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:a===e.eventSelection,defaultDisplayEventEnd:!1},M(i,e.todayRange))))}))}})}}function He(n){let e=[],t=[];for(let s of n)e.push(s.seg),s.isVisible||t.push(s.seg);return{allSegs:e,invisibleSegs:t}}const Pe=j({week:"narrow"});class Ne extends D{constructor(){super(...arguments),this.rootElRef=x(),this.state={dayNumberId:ue()},this.handleRootEl=e=>{A(this.rootElRef,e),A(this.props.elRef,e)}}render(){let{context:e,props:t,state:s,rootElRef:r}=this,{options:i,dateEnv:a}=e,{date:l,dateProfile:h}=t;const u=t.showDayNumber&&We(l,h.currentRange,a);return o(ye,{elTag:"td",elRef:this.handleRootEl,elClasses:["fc-daygrid-day",...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":s.dayNumberId}:{}),{role:"gridcell"}),defaultGenerator:Ie,date:l,dateProfile:h,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:u,extraRenderProps:t.extraRenderProps},(c,v)=>o("div",{ref:t.innerElRef,className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",style:{minHeight:t.minHeight}},t.showWeekNumber&&o(he,{elTag:"a",elClasses:["fc-daygrid-week-number"],elAttrs:F(e,l,"week"),date:l,defaultFormat:Pe}),!v.isDisabled&&(t.showDayNumber||pe(i)||t.forceDayTop)?o("div",{className:"fc-daygrid-day-top"},o(c,{elTag:"a",elClasses:["fc-daygrid-day-number",u&&"fc-daygrid-month-start"],elAttrs:Object.assign(Object.assign({},F(e,l)),{id:s.dayNumberId})})):t.showDayNumber?o("div",{className:"fc-daygrid-day-top",style:{visibility:"hidden"}},o("a",{className:"fc-daygrid-day-number"}," ")):void 0,o("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,o("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},o(Te,{allDayDate:l,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:r,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),o("div",{className:"fc-daygrid-day-bg"},t.bgContent)))}}function Ie(n){return n.dayNumberText||o(C,null," ")}function We(n,e,t){const{start:s,end:r}=e,i=me(r,-1),a=t.getYear(s),l=t.getMonth(s),h=t.getYear(i),u=t.getMonth(i);return!(a===h&&l===u)&&(n.valueOf()===s.valueOf()||t.getDay(n)===1&&n.valueOf()<r.valueOf())}function K(n){return n.eventRange.instance.instanceId+":"+n.firstCol}function Y(n){return K(n)+":"+n.lastCol}function ze(n,e,t,s,r,i,a){let l=new Ae(g=>{let m=n[g.index].eventRange.instance.instanceId+":"+g.span.start+":"+(g.span.end-1);return r[m]});l.allowReslicing=!0,l.strictOrder=s,e===!0||t===!0?(l.maxCoord=i,l.hiddenConsumes=!0):typeof e=="number"?l.maxStackCnt=e:typeof t=="number"&&(l.maxStackCnt=t,l.hiddenConsumes=!0);let h=[],u=[];for(let g=0;g<n.length;g+=1){let m=n[g],R=Y(m);r[R]!=null?h.push({index:g,span:{start:m.firstCol,end:m.lastCol+1}}):u.push(m)}let c=l.addSegs(h),v=l.toRects(),{singleColPlacements:b,multiColPlacements:d,leftoverMargins:p}=Oe(v,n,a),f=[],y=[];for(let g of u){d[g.firstCol].push({seg:g,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let m=g.firstCol;m<=g.lastCol;m+=1)b[m].push({seg:w(g,m,m+1,a),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let g=0;g<a.length;g+=1)f.push(0);for(let g of c){let m=n[g.index],R=g.span;d[R.start].push({seg:w(m,R.start,R.end,a),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let S=R.start;S<R.end;S+=1)f[S]+=1,b[S].push({seg:w(m,S,S+1,a),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let g=0;g<a.length;g+=1)y.push(p[g]);return{singleColPlacements:b,multiColPlacements:d,moreCnts:f,moreMarginTops:y}}function Oe(n,e,t){let s=Be(n,t.length),r=[],i=[],a=[];for(let l=0;l<t.length;l+=1){let h=s[l],u=[],c=0,v=0;for(let d of h){let p=e[d.index];u.push({seg:w(p,l,l+1,t),isVisible:!0,isAbsolute:!1,absoluteTop:d.levelCoord,marginTop:d.levelCoord-c}),c=d.levelCoord+d.thickness}let b=[];c=0,v=0;for(let d of h){let p=e[d.index],f=d.span.end-d.span.start>1,y=d.span.start===l;v+=d.levelCoord-c,c=d.levelCoord+d.thickness,f?(v+=d.thickness,y&&b.push({seg:w(p,d.span.start,d.span.end,t),isVisible:!0,isAbsolute:!0,absoluteTop:d.levelCoord,marginTop:0})):y&&(b.push({seg:w(p,d.span.start,d.span.end,t),isVisible:!0,isAbsolute:!1,absoluteTop:d.levelCoord,marginTop:v}),v=0)}r.push(u),i.push(b),a.push(v)}return{singleColPlacements:r,multiColPlacements:i,leftoverMargins:a}}function Be(n,e){let t=[];for(let s=0;s<e;s+=1)t.push([]);for(let s of n)for(let r=s.span.start;r<s.span.end;r+=1)t[r].push(s);return t}function w(n,e,t,s){if(n.firstCol===e&&n.lastCol===t-1)return n;let r=n.eventRange,i=r.range,a=ve(i,{start:s[e].date,end:I(s[t-1].date,1)});return Object.assign(Object.assign({},n),{firstCol:e,lastCol:t-1,eventRange:{def:r.def,ui:Object.assign(Object.assign({},r.ui),{durationEditable:!1}),instance:r.instance,range:a},isStart:n.isStart&&a.start.valueOf()===i.start.valueOf(),isEnd:n.isEnd&&a.end.valueOf()===i.end.valueOf()})}class Ae extends be{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){const t=super.addSegs(e),{entriesByLevel:s}=this,r=i=>!this.forceHidden[N(i)];for(let i=0;i<s.length;i+=1)s[i]=s[i].filter(r);return t}handleInvalidInsertion(e,t,s){const{entriesByLevel:r,forceHidden:i}=this,{touchingEntry:a,touchingLevel:l,touchingLateral:h}=e;if(this.hiddenConsumes&&a){const u=N(a);if(!i[u])if(this.allowReslicing){const c=Object.assign(Object.assign({},a),{span:Re(a.span,t.span)}),v=N(c);i[v]=!0,r[l][h]=c,this.splitEntry(a,t,s)}else i[u]=!0,s.push(a)}return super.handleInvalidInsertion(e,t,s)}}class $ extends D{constructor(){super(...arguments),this.cellElRefs=new k,this.frameElRefs=new k,this.fgElRefs=new k,this.segHarnessRefs=new k,this.rootElRef=x(),this.state={framePositions:null,maxContentHeight:null,segHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:s}=this,{options:r}=s,i=e.cells.length,a=H(e.businessHourSegs,i),l=H(e.bgEventSegs,i),h=H(this.getHighlightSegs(),i),u=H(this.getMirrorSegs(),i),{singleColPlacements:c,multiColPlacements:v,moreCnts:b,moreMarginTops:d}=ze(se(e.fgEventSegs,r.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,r.eventOrderStrict,t.segHeights,t.maxContentHeight,e.cells),p=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return o("tr",{ref:this.rootElRef,role:"row"},e.renderIntro&&e.renderIntro(),e.cells.map((f,y)=>{let g=this.renderFgSegs(y,e.forPrint?c[y]:v[y],e.todayRange,p),m=this.renderFgSegs(y,Fe(u[y],v),e.todayRange,{},!!e.eventDrag,!!e.eventResize,!1);return o(Ne,{key:f.key,elRef:this.cellElRefs.createRef(f.key),innerElRef:this.frameElRefs.createRef(f.key),dateProfile:e.dateProfile,date:f.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&y===0,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:f.extraRenderProps,extraDataAttrs:f.extraDataAttrs,extraClassNames:f.extraClassNames,extraDateSpan:f.extraDateSpan,moreCnt:b[y],moreMarginTop:d[y],singlePlacements:c[y],fgContentElRef:this.fgElRefs.createRef(f.key),fgContent:o(C,null,o(C,null,g),o(C,null,m)),bgContent:o(C,null,this.renderFillSegs(h[y],"highlight"),this.renderFillSegs(a[y],"non-business"),this.renderFillSegs(l[y],"bg-event")),minHeight:e.cellMinHeight})}))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){let s=this.props;this.updateSizing(!L(e,s))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,s,r,i,a,l){let{context:h}=this,{eventSelection:u}=this.props,{framePositions:c}=this.state,v=this.props.cells.length===1,b=i||a||l,d=[];if(c)for(let p of t){let{seg:f}=p,{instanceId:y}=f.eventRange.instance,g=p.isVisible&&!r[y],m=p.isAbsolute,R="",S="";m&&(h.isRtl?(S=0,R=c.lefts[f.lastCol]-c.lefts[f.firstCol]):(R=0,S=c.rights[f.firstCol]-c.rights[f.lastCol])),d.push(o("div",{className:"fc-daygrid-event-harness"+(m?" fc-daygrid-event-harness-abs":""),key:K(f),ref:b?null:this.segHarnessRefs.createRef(Y(f)),style:{visibility:g?"":"hidden",marginTop:m?"":p.marginTop,top:m?p.absoluteTop:"",left:R,right:S}},q(f)?o(_,Object.assign({seg:f,isDragging:i,isSelected:y===u,defaultDisplayEventEnd:v},M(f,s))):o(U,Object.assign({seg:f,isDragging:i,isResizing:a,isDateSelecting:l,isSelected:y===u,defaultDisplayEventEnd:v},M(f,s)))))}return d}renderFillSegs(e,t){let{isRtl:s}=this.context,{todayRange:r}=this.props,{framePositions:i}=this.state,a=[];if(i)for(let l of e){let h=s?{right:0,left:i.lefts[l.lastCol]-i.lefts[l.firstCol]}:{left:0,right:i.rights[l.firstCol]-i.rights[l.lastCol]};a.push(o("div",{key:re(l.eventRange),className:"fc-daygrid-bg-harness",style:h},t==="bg-event"?o(ne,Object.assign({seg:l},M(l,r))):ie(t)))}return o(C,{},...a)}updateSizing(e){let{props:t,state:s,frameElRefs:r}=this;if(!t.forPrint&&t.clientWidth!==null){if(e){let h=t.cells.map(u=>r.currentMap[u.key]);if(h.length){let u=this.rootElRef.current,c=new P(u,h,!0,!1);(!s.framePositions||!s.framePositions.similarTo(c))&&this.setState({framePositions:new P(u,h,!0,!1)})}}const i=this.state.segHeights,a=this.querySegHeights(),l=t.dayMaxEvents===!0||t.dayMaxEventRows===!0;this.safeSetState({segHeights:Object.assign(Object.assign({},i),a),maxContentHeight:l?this.computeMaxContentHeight():null})}}querySegHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let s in e){let r=Math.round(e[s].getBoundingClientRect().height);t[s]=Math.max(t[s]||0,r)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],s=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-s.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map(t=>e[t.key])}}$.addStateEquality({segHeights:L});function Fe(n,e){if(!n.length)return[];let t=Ge(e);return n.map(s=>({seg:s,isVisible:!0,isAbsolute:!0,absoluteTop:t[s.eventRange.instance.instanceId],marginTop:0}))}function Ge(n){let e={};for(let t of n)for(let s of t)e[s.seg.eventRange.instance.instanceId]=s.absoluteTop;return e}class je extends D{constructor(){super(...arguments),this.splitBusinessHourSegs=E(T),this.splitBgEventSegs=E(T),this.splitFgEventSegs=E(T),this.splitDateSelectionSegs=E(T),this.splitEventDrag=E(G),this.splitEventResize=E(G),this.rowRefs=new k}render(){let{props:e,context:t}=this,s=e.cells.length,r=this.splitBusinessHourSegs(e.businessHourSegs,s),i=this.splitBgEventSegs(e.bgEventSegs,s),a=this.splitFgEventSegs(e.fgEventSegs,s),l=this.splitDateSelectionSegs(e.dateSelectionSegs,s),h=this.splitEventDrag(e.eventDrag,s),u=this.splitEventResize(e.eventResize,s),c=s>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return o(we,{unit:"day"},(v,b)=>o(C,null,e.cells.map((d,p)=>o($,{ref:this.rowRefs.createRef(p),key:d.length?d[0].date.toISOString():p,showDayNumbers:s>1,showWeekNumbers:e.showWeekNumbers,todayRange:b,dateProfile:e.dateProfile,cells:d,renderIntro:e.renderRowIntro,businessHourSegs:r[p],eventSelection:e.eventSelection,bgEventSegs:i[p].filter(Le),fgEventSegs:a[p],dateSelectionSegs:l[p],eventDrag:h[p],eventResize:u[p],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:c,forPrint:e.forPrint}))))}componentDidMount(){this.registerInteractiveComponent()}componentDidUpdate(){this.registerInteractiveComponent()}registerInteractiveComponent(){if(!this.rootEl){const e=this.rowRefs.currentMap[0].getCellEls()[0],t=e?e.closest(".fc-daygrid-body"):null;t&&(this.rootEl=t,this.context.registerInteractiveComponent(this,{el:t,isHitComboAllowed:this.props.isHitComboAllowed}))}}componentWillUnmount(){this.rootEl&&(this.context.unregisterInteractiveComponent(this),this.rootEl=null)}prepareHits(){this.rowPositions=new P(this.rootEl,this.rowRefs.collect().map(e=>e.getCellEls()[0]),!1,!0),this.colPositions=new P(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:s,rowPositions:r}=this,i=s.leftToIndex(e),a=r.topToIndex(t);if(a!=null&&i!=null){let l=this.props.cells[a][i];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(a,i),allDay:!0},l.extraDateSpan),dayEl:this.getCellEl(a,i),rect:{left:s.lefts[i],right:s.rights[i],top:r.tops[a],bottom:r.bottoms[a]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let s=this.props.cells[e][t].date,r=I(s,1);return{start:s,end:r}}}function Le(n){return n.eventRange.def.allDay}class Ve extends D{constructor(){super(...arguments),this.elRef=x(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:s,expandRows:r}=e,i=s===!0||t===!0;i&&!r&&(i=!1,t=null,s=null);let a=["fc-daygrid-body",i?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",r?"":"fc-daygrid-body-natural"];return o("div",{ref:this.elRef,className:a.join(" "),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},o("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:r?e.clientHeight:""}},e.colGroupNode,o("tbody",{role:"presentation"},o(je,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:s,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile!==this.props.dateProfile?this.requestScrollReset():this.flushScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){const e=qe(this.elRef.current,this.props.dateProfile);if(e){const t=e.closest(".fc-daygrid-body"),s=t.closest(".fc-scroller"),r=e.getBoundingClientRect().top-t.getBoundingClientRect().top;s.scrollTop=r?r+1:0}this.needsScrollReset=!1}}}function qe(n,e){let t;return e.currentRangeUnit.match(/year|month/)&&(t=n.querySelector(`[data-date="${Se(e.currentDate)}-01"]`)),t||(t=n.querySelector(`[data-date="${Ce(e.currentDate)}"]`)),t}class Ue extends Ee{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}}class _e extends D{constructor(){super(...arguments),this.slicer=new Ue,this.tableRef=x()}render(){let{props:e,context:t}=this;return o(Ve,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}}class Ke extends Q{buildRenderRange(e,t,s){let r=super.buildRenderRange(e,t,s),{props:i}=this;return Ye({currentRange:r,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:i.fixedWeekCount,dateEnv:i.dateEnv})}}function Ye(n){let{dateEnv:e,currentRange:t}=n,{start:s,end:r}=t,i;if(n.snapToWeek&&(s=e.startOfWeek(s),i=e.startOfWeek(r),i.valueOf()!==r.valueOf()&&(r=z(i,1))),n.fixedWeekCount){let a=e.startOfWeek(e.startOfMonth(I(t.end,-1))),l=Math.ceil(Z(a,r));r=z(r,6-l)}return{start:s,end:r}}class $e extends D{constructor(){super(...arguments),this.headerElRef=x()}renderSimpleLayout(e,t){let{props:s,context:r}=this,i=[],a=O(r.options);return e&&i.push({type:"header",key:"header",isSticky:a,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),i.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),o(B,{elClasses:["fc-daygrid"],viewSpec:r.viewSpec},o(ae,{liquid:!s.isHeightAuto&&!s.forPrint,collapsibleWidth:s.forPrint,cols:[],sections:i}))}renderHScrollLayout(e,t,s,r){let i=this.context.pluginHooks.scrollGridImpl;if(!i)throw new Error("No ScrollGrid implementation");let{props:a,context:l}=this,h=!a.forPrint&&O(l.options),u=!a.forPrint&&le(l.options),c=[];return e&&c.push({type:"header",key:"header",isSticky:h,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),c.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),u&&c.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:oe}]}),o(B,{elClasses:["fc-daygrid"],viewSpec:l.viewSpec},o(i,{liquid:!a.isHeightAuto&&!a.forPrint,forPrint:a.forPrint,collapsibleWidth:a.forPrint,colGroups:[{cols:[{span:s,minWidth:r}]}],sections:c}))}}class Je extends $e{constructor(){super(...arguments),this.buildDayTableModel=E(Qe),this.headerRef=x(),this.tableRef=x()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:s}=this,r=this.buildDayTableModel(s.dateProfile,t),i=e.dayHeaders&&o(X,{ref:this.headerRef,dateProfile:s.dateProfile,dates:r.headerDates,datesRepDistinctDays:r.rowCnt===1}),a=l=>o(_e,{ref:this.tableRef,dateProfile:s.dateProfile,dayTableModel:r,businessHours:s.businessHours,dateSelection:s.dateSelection,eventStore:s.eventStore,eventUiBases:s.eventUiBases,eventSelection:s.eventSelection,eventDrag:s.eventDrag,eventResize:s.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:l.tableColGroupNode,tableMinWidth:l.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!s.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:l.clientWidth,clientHeight:l.clientHeight,forPrint:s.forPrint});return e.dayMinWidth?this.renderHScrollLayout(i,a,r.colCnt,e.dayMinWidth):this.renderSimpleLayout(i,a)}}function Qe(n,e){let t=new ee(n.renderRange,e);return new te(t,/year|month|week/.test(n.currentRangeUnit))}var Xe=De({name:"@fullcalendar/daygrid",initialView:"dayGridMonth",views:{dayGrid:{component:Je,dateProfileGeneratorClass:Ke},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:"dayGrid",duration:{years:1}}}});export{_e as D,Xe as i};
