(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"0mAl":function(t,e,i){"use strict";i("9d8Q"),i("bHjy"),i("AHoX")},"2rMq":function(t,e,i){var n;(function(){"use strict";var s=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:s&&!!window.screen};n=function(){return o}.call(e,i,e,t),void 0===n||(t.exports=n)})()},"9d8Q":function(t,e,i){},AHoX:function(t,e,i){},Ng4X:function(t,e,i){"use strict";var n=i("YEIV"),s=i.n(n),o=i("QbLZ"),r=i.n(o),a=i("iCc5"),l=i.n(a),u=i("V7oC"),d=i.n(u),c=i("FYw3"),p=i.n(c),h=i("mRg0"),f=i.n(h),g=i("TSYQ"),v=i.n(g),S=i("q1tI"),y=i.n(S),m=[{component:function(t){function e(){l()(this,e);var t=p()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.previousSlide()},t}return f()(e,t),d()(e,[{key:"render",value:function(){return y.a.createElement("button",{style:this.getButtonStyles(0===this.props.currentSlide&&!this.props.wrapAround),onClick:this.handleClick},"PREV")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(y.a.Component),position:"CenterLeft"},{component:function(t){function e(){l()(this,e);var t=p()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.nextSlide&&t.props.nextSlide()},t}return f()(e,t),d()(e,[{key:"render",value:function(){return y.a.createElement("button",{style:this.getButtonStyles(this.props.currentSlide+this.props.slidesToScroll>=this.props.slideCount&&!this.props.wrapAround),onClick:this.handleClick},"NEXT")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(y.a.Component),position:"CenterRight"},{component:function(t){function e(){return l()(this,e),p()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f()(e,t),d()(e,[{key:"render",value:function(){var t=this,e=this.getIndexes(this.props.slideCount,this.props.slidesToScroll);return y.a.createElement("ul",{style:this.getListStyles()},e.map((function(e){return y.a.createElement("li",{style:t.getListItemStyles(),key:e},y.a.createElement("button",{style:t.getButtonStyles(t.props.currentSlide===e),onClick:t.props.goToSlide&&t.props.goToSlide.bind(null,e)},"\u2022"))})))}},{key:"getIndexes",value:function(t,e){for(var i=[],n=0;n<t;n+=e)i.push(n);return i}},{key:"getListStyles",value:function(){return{position:"relative",margin:0,top:-10,padding:0}}},{key:"getListItemStyles",value:function(){return{listStyleType:"none",display:"inline-block"}}},{key:"getButtonStyles",value:function(t){return{border:0,background:"transparent",color:"black",cursor:"pointer",padding:10,outline:0,fontSize:24,opacity:t?1:.5}}}]),e}(y.a.Component),position:"BottomCenter"}],b=m,w=i("2rMq"),T=i.n(w),k=i("xEkU"),C=i.n(k);function E(t,e,i,n){var s=i-e;return s*Math.sqrt(1-(t=t/n-1)*t)+e}function x(t,e,i,n){var s=i-e;return s*t/n+e}var O="ADDITIVE",M=300,W=0,D={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},I=function(t,e,i){null!==t&&"undefined"!==typeof t&&(t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i)},A=function(t,e,i){null!==t&&"undefined"!==typeof t&&(t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=null)},j=function(t){function e(t){l()(this,e);var i=p()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i._rafCb=function(){var t=i.state;if(0!==t.tweenQueue.length){for(var e=Date.now(),n=[],s=0;s<t.tweenQueue.length;s++){var o=t.tweenQueue[s],r=o.initTime,a=o.config;e-r<a.duration?n.push(o):a.onEnd&&a.onEnd()}-1!==i._rafID&&(i.setState({tweenQueue:n}),i._rafID=C()(i._rafCb))}},i.handleClick=function(t){!0===i.clickSafe&&(t.preventDefault(),t.stopPropagation(),t.nativeEvent&&t.nativeEvent.stopPropagation())},i.autoplayIterator=function(){if(i.props.wrapAround)return i.nextSlide();i.state.currentSlide!==i.state.slideCount-i.state.slidesToShow?i.nextSlide():i.stopAutoplay()},i.goToSlide=function(t){var e=i.props,n=e.beforeSlide,s=e.afterSlide;if(t>=y.a.Children.count(i.props.children)||t<0){if(!i.props.wrapAround)return;if(t>=y.a.Children.count(i.props.children))return n(i.state.currentSlide,0),i.setState({currentSlide:0},(function(){i.animateSlide(null,null,i.getTargetLeft(null,t),(function(){i.animateSlide(null,.01),s(0),i.resetAutoplay(),i.setExternalData()}))}));var o=y.a.Children.count(i.props.children)-i.state.slidesToScroll;return n(i.state.currentSlide,o),i.setState({currentSlide:o},(function(){i.animateSlide(null,null,i.getTargetLeft(null,t),(function(){i.animateSlide(null,.01),s(o),i.resetAutoplay(),i.setExternalData()}))}))}n(i.state.currentSlide,t),i.setState({currentSlide:t},(function(){i.animateSlide(),i.props.afterSlide(t),i.resetAutoplay(),i.setExternalData()}))},i.nextSlide=function(){var t=y.a.Children.count(i.props.children),e=i.props.slidesToShow;if("auto"===i.props.slidesToScroll&&(e=i.state.slidesToScroll),!(i.state.currentSlide>=t-e)||i.props.wrapAround)if(i.props.wrapAround)i.goToSlide(i.state.currentSlide+i.state.slidesToScroll);else{if(1!==i.props.slideWidth)return i.goToSlide(i.state.currentSlide+i.state.slidesToScroll);i.goToSlide(Math.min(i.state.currentSlide+i.state.slidesToScroll,t-e))}},i.previousSlide=function(){i.state.currentSlide<=0&&!i.props.wrapAround||(i.props.wrapAround?i.goToSlide(i.state.currentSlide-i.state.slidesToScroll):i.goToSlide(Math.max(0,i.state.currentSlide-i.state.slidesToScroll)))},i.onResize=function(){i.setDimensions()},i.onReadyStateChange=function(){i.setDimensions()},i.state={currentSlide:i.props.slideIndex,dragging:!1,frameWidth:0,left:0,slideCount:0,slidesToScroll:i.props.slidesToScroll,slideWidth:0,top:0,tweenQueue:[]},i.touchObject={},i.clickSafe=!0,i}return f()(e,t),d()(e,[{key:"componentWillMount",value:function(){this.setInitialDimensions()}},{key:"componentDidMount",value:function(){this.setDimensions(),this.bindEvents(),this.setExternalData(),this.props.autoplay&&this.startAutoplay()}},{key:"componentWillReceiveProps",value:function(t){this.setState({slideCount:t.children.length}),this.setDimensions(t),this.props.slideIndex!==t.slideIndex&&t.slideIndex!==this.state.currentSlide&&this.goToSlide(t.slideIndex),this.props.autoplay!==t.autoplay&&(t.autoplay?this.startAutoplay():this.stopAutoplay())}},{key:"componentWillUnmount",value:function(){this.unbindEvents(),this.stopAutoplay(),C.a.cancel(this._rafID),this._rafID=-1}},{key:"tweenState",value:function(t,e){var i=this,n=e.easing,s=e.duration,o=e.delay,r=e.beginValue,a=e.endValue,l=e.onEnd,u=e.stackBehavior;this.setState((function(e){var d=e,c=void 0,p=void 0;if("string"===typeof t)c=t,p=t;else{for(var h=0;h<t.length-1;h++)d=d[t[h]];c=t[t.length-1],p=t.join("|")}var f={easing:n,duration:null==s?M:s,delay:null==o?W:o,beginValue:null==r?d[c]:r,endValue:a,onEnd:l,stackBehavior:u||O},g=e.tweenQueue;return f.stackBehavior===D.DESTRUCTIVE&&(g=e.tweenQueue.filter((function(t){return t.pathHash!==p}))),g.push({pathHash:p,config:f,initTime:Date.now()+f.delay}),d[c]=f.endValue,1===g.length&&(i._rafID=C()(i._rafCb)),{tweenQueue:g}}))}},{key:"getTweeningValue",value:function(t){var e=this.state,i=void 0,n=void 0;if("string"===typeof t)i=e[t],n=t;else{i=e;for(var s=0;s<t.length;s++)i=i[t[s]];n=t.join("|")}for(var o=Date.now(),r=0;r<e.tweenQueue.length;r++){var a=e.tweenQueue[r],l=a.pathHash,u=a.initTime,d=a.config;if(l===n){var c=o-u>d.duration?d.duration:Math.max(0,o-u),p=0===d.duration?d.endValue:d.easing(c,d.beginValue,d.endValue,d.duration),h=p-d.endValue;i+=h}}return i}},{key:"render",value:function(){var t=this,e=y.a.Children.count(this.props.children)>1?this.formatChildren(this.props.children):this.props.children;return y.a.createElement("div",{className:["slider",this.props.className||""].join(" "),ref:"slider",style:r()({},this.getSliderStyles(),this.props.style)},y.a.createElement("div",r()({className:"slider-frame",ref:"frame",style:this.getFrameStyles()},this.getTouchEvents(),this.getMouseEvents(),{onClick:this.handleClick}),y.a.createElement("ul",{className:"slider-list",ref:"list",style:this.getListStyles()},e)),this.props.decorators?this.props.decorators.map((function(e,i){return y.a.createElement("div",{style:r()({},t.getDecoratorStyles(e.position),e.style||{}),className:"slider-decorator-"+i,key:i},y.a.createElement(e.component,{currentSlide:t.state.currentSlide,slideCount:t.state.slideCount,frameWidth:t.state.frameWidth,slideWidth:t.state.slideWidth,slidesToScroll:t.state.slidesToScroll,cellSpacing:t.props.cellSpacing,slidesToShow:t.props.slidesToShow,wrapAround:t.props.wrapAround,nextSlide:t.nextSlide,previousSlide:t.previousSlide,goToSlide:t.goToSlide}))})):null,y.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:this.getStyleTagStyles()}}))}},{key:"getTouchEvents",value:function(){var t=this;return!1===this.props.swiping?null:{onTouchStart:function(e){t.touchObject={startX:e.touches[0].pageX,startY:e.touches[0].pageY},t.handleMouseOver()},onTouchMove:function(e){var i=t.swipeDirection(t.touchObject.startX,e.touches[0].pageX,t.touchObject.startY,e.touches[0].pageY);0!==i&&e.preventDefault();var n=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.touches[0].pageY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.touches[0].pageX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.touches[0].pageX,endY:e.touches[0].pageY,length:n,direction:i},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})},onTouchEnd:function(e){t.handleSwipe(e),t.handleMouseOut()},onTouchCancel:function(e){t.handleSwipe(e)}}}},{key:"getMouseEvents",value:function(){var t=this;return!1===this.props.dragging?null:{onMouseOver:function(){t.handleMouseOver()},onMouseOut:function(){t.handleMouseOut()},onMouseDown:function(e){t.touchObject={startX:e.clientX,startY:e.clientY},t.setState({dragging:!0})},onMouseMove:function(e){if(t.state.dragging){var i=t.swipeDirection(t.touchObject.startX,e.clientX,t.touchObject.startY,e.clientY);0!==i&&e.preventDefault();var n=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.clientY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.clientX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.clientX,endY:e.clientY,length:n,direction:i},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})}},onMouseUp:function(e){t.state.dragging&&t.handleSwipe(e)},onMouseLeave:function(e){t.state.dragging&&t.handleSwipe(e)}}}},{key:"handleMouseOver",value:function(){this.props.autoplay&&(this.autoplayPaused=!0,this.stopAutoplay())}},{key:"handleMouseOut",value:function(){this.props.autoplay&&this.autoplayPaused&&(this.startAutoplay(),this.autoplayPaused=null)}},{key:"handleSwipe",value:function(t){"undefined"!==typeof this.touchObject.length&&this.touchObject.length>44?this.clickSafe=!0:this.clickSafe=!1;var e=this.props,i=e.slidesToShow,n=e.slidesToScroll,s=e.swipeSpeed;"auto"===n&&(i=this.state.slidesToScroll),y.a.Children.count(this.props.children)>1&&this.touchObject.length>this.state.slideWidth/i/s?1===this.touchObject.direction?this.state.currentSlide>=y.a.Children.count(this.props.children)-i&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.nextSlide():-1===this.touchObject.direction&&(this.state.currentSlide<=0&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.previousSlide()):this.goToSlide(this.state.currentSlide),this.touchObject={},this.setState({dragging:!1})}},{key:"swipeDirection",value:function(t,e,i,n){var s=t-e,o=i-n,r=Math.atan2(o,s),a=Math.round(180*r/Math.PI);return a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?1:a>=135&&a<=225?-1:!0===this.props.vertical?a>=35&&a<=135?1:-1:0}},{key:"startAutoplay",value:function(){y.a.Children.count(this.props.children)<=1||(this.autoplayID=setInterval(this.autoplayIterator,this.props.autoplayInterval))}},{key:"resetAutoplay",value:function(){this.props.resetAutoplay&&this.props.autoplay&&!this.autoplayPaused&&(this.stopAutoplay(),this.startAutoplay())}},{key:"stopAutoplay",value:function(){this.autoplayID&&clearInterval(this.autoplayID)}},{key:"animateSlide",value:function(t,e,i,n){this.tweenState(this.props.vertical?"top":"left",{easing:t||this.props.easing,duration:e||this.props.speed,endValue:i||this.getTargetLeft(),delay:null,beginValue:null,onEnd:n||null,stackBehavior:D})}},{key:"getTargetLeft",value:function(t,e){var i=void 0,n=e||this.state.currentSlide,s=this.props.cellSpacing;switch(this.props.cellAlign){case"left":i=0,i-=s*n;break;case"center":i=(this.state.frameWidth-this.state.slideWidth)/2,i-=s*n;break;case"right":i=this.state.frameWidth-this.state.slideWidth,i-=s*n;break;default:break}var o=this.state.slideWidth*n,r=this.state.currentSlide>0&&n+this.state.slidesToScroll>=this.state.slideCount;return r&&1!==this.props.slideWidth&&!this.props.wrapAround&&"auto"===this.props.slidesToScroll&&(o=this.state.slideWidth*this.state.slideCount-this.state.frameWidth,i=0,i-=s*(this.state.slideCount-1)),i-=t||0,-1*(o-i)}},{key:"bindEvents",value:function(){T.a.canUseDOM&&(I(window,"resize",this.onResize),I(document,"readystatechange",this.onReadyStateChange))}},{key:"unbindEvents",value:function(){T.a.canUseDOM&&(A(window,"resize",this.onResize),A(document,"readystatechange",this.onReadyStateChange))}},{key:"formatChildren",value:function(t){var e=this,i=this.props.vertical?this.getTweeningValue("top"):this.getTweeningValue("left");return y.a.Children.map(t,(function(t,n){return y.a.createElement("li",{className:"slider-slide",style:e.getSlideStyles(n,i),key:n},t)}))}},{key:"setInitialDimensions",value:function(){var t=this,e=this.props,i=e.vertical,n=e.initialSlideHeight,s=e.initialSlideWidth,o=e.slidesToShow,r=e.cellSpacing,a=e.children,l=i?n||0:s||0,u=n?n*o:0,d=u+r*(o-1);this.setState({slideHeight:u,frameWidth:i?d:"100%",slideCount:y.a.Children.count(a),slideWidth:l},(function(){t.setLeft(),t.setExternalData()}))}},{key:"setDimensions",value:function(t){var e=this;t=t||this.props;var i=void 0,n=void 0,s=void 0,o=void 0,r=t.slidesToScroll,a=this.refs.frame,l=a.childNodes[0].childNodes[0];l?(l.style.height="auto",s=this.props.vertical?l.offsetHeight*t.slidesToShow:l.offsetHeight):s=100,o="number"!==typeof t.slideWidth?parseInt(t.slideWidth,10):t.vertical?s/t.slidesToShow*t.slideWidth:a.offsetWidth/t.slidesToShow*t.slideWidth,t.vertical||(o-=t.cellSpacing*((100-100/t.slidesToShow)/100)),n=s+t.cellSpacing*(t.slidesToShow-1),i=t.vertical?n:a.offsetWidth,"auto"===t.slidesToScroll&&(r=Math.floor(i/(o+t.cellSpacing))),this.setState({slideHeight:s,frameWidth:i,slideWidth:o,slidesToScroll:r,left:t.vertical?0:this.getTargetLeft(),top:t.vertical?this.getTargetLeft():0},(function(){e.setLeft()}))}},{key:"setLeft",value:function(){this.setState({left:this.props.vertical?0:this.getTargetLeft(),top:this.props.vertical?this.getTargetLeft():0})}},{key:"setExternalData",value:function(){this.props.data&&this.props.data()}},{key:"getListStyles",value:function(){var t=this.state.slideWidth*y.a.Children.count(this.props.children),e=this.props.cellSpacing,i=e*y.a.Children.count(this.props.children),n="translate3d("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px, 0)";return{transform:n,WebkitTransform:n,msTransform:"translate("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px)",position:"relative",display:"block",margin:this.props.vertical?e/2*-1+"px 0px":"0px "+e/2*-1+"px",padding:0,height:this.props.vertical?t+i:this.state.slideHeight,width:this.props.vertical?"auto":t+i,cursor:!0===this.state.dragging?"pointer":"inherit",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getFrameStyles",value:function(){return{position:"relative",display:"block",overflow:this.props.frameOverflow,height:this.props.vertical?this.state.frameWidth||"initial":"auto",margin:this.props.framePadding,padding:0,transform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",msTransform:"translate(0, 0)",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getSlideStyles",value:function(t,e){var i=this.getSlideTargetPosition(t,e),n=this.props.cellSpacing;return{position:"absolute",left:this.props.vertical?0:i,top:this.props.vertical?i:0,display:this.props.vertical?"block":"inline-block",listStyleType:"none",verticalAlign:"top",width:this.props.vertical?"100%":this.state.slideWidth,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",marginLeft:this.props.vertical?"auto":n/2,marginRight:this.props.vertical?"auto":n/2,marginTop:this.props.vertical?n/2:"auto",marginBottom:this.props.vertical?n/2:"auto"}}},{key:"getSlideTargetPosition",value:function(t,e){var i=this.state.frameWidth/this.state.slideWidth,n=(this.state.slideWidth+this.props.cellSpacing)*t,s=(this.state.slideWidth+this.props.cellSpacing)*i*-1;if(this.props.wrapAround){var o=Math.ceil(e/this.state.slideWidth);if(this.state.slideCount-o<=t)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount-t)*-1;var r=Math.ceil((Math.abs(e)-Math.abs(s))/this.state.slideWidth);if(1!==this.state.slideWidth&&(r=Math.ceil((Math.abs(e)-this.state.slideWidth)/this.state.slideWidth)),t<=r-1)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount+t)}return n}},{key:"getSliderStyles",value:function(){return{position:"relative",display:"block",width:this.props.width,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",visibility:this.state.slideWidth?"visible":"hidden"}}},{key:"getStyleTagStyles",value:function(){return".slider-slide > img {width: 100%; display: block;}"}},{key:"getDecoratorStyles",value:function(t){switch(t){case"TopLeft":return{position:"absolute",top:0,left:0};case"TopCenter":return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case"TopRight":return{position:"absolute",top:0,right:0};case"CenterLeft":return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"CenterCenter":return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case"CenterRight":return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"BottomLeft":return{position:"absolute",bottom:0,left:0};case"BottomCenter":return{position:"absolute",bottom:0,width:"100%",textAlign:"center"};case"BottomRight":return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}}}]),e}(y.a.Component);j.defaultProps={afterSlide:function(){},autoplay:!1,resetAutoplay:!0,swipeSpeed:12,autoplayInterval:3e3,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,data:function(){},decorators:b,dragging:!0,easing:E,edgeEasing:x,framePadding:"0px",frameOverflow:"hidden",slideIndex:0,slidesToScroll:1,slidesToShow:1,slideWidth:1,speed:500,swiping:!0,vertical:!1,width:"100%",wrapAround:!1,style:{}};var L=j,_=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&(i[n[s]]=t[n[s]])}return i},Y=function(t){function e(t){l()(this,e);var i=p()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.onChange=function(t){i.setState({selectedIndex:t},(function(){i.props.afterChange&&i.props.afterChange(t)}))},i.state={selectedIndex:i.props.selectedIndex},i}return f()(e,t),d()(e,[{key:"render",value:function(){var t=this.props,e=t.infinite,i=t.selectedIndex,n=t.beforeChange,o=(t.afterChange,t.dots),a=_(t,["infinite","selectedIndex","beforeChange","afterChange","dots"]),l=a.prefixCls,u=a.dotActiveStyle,d=a.dotStyle,c=a.className,p=a.vertical,h=r()({},a,{wrapAround:e,slideIndex:i,beforeSlide:n}),f=[];o&&(f=[{component:function(t){for(var e=t.slideCount,i=t.slidesToScroll,n=t.currentSlide,o=[],r=0;r<e;r+=i)o.push(r);var a=o.map((function(t){var e=v()(l+"-wrap-dot",s()({},l+"-wrap-dot-active",t===n)),i=t===n?u:d;return S["createElement"]("div",{className:e,key:t},S["createElement"]("span",{style:i}))}));return S["createElement"]("div",{className:l+"-wrap"},a)},position:"BottomCenter"}]);var g=v()(l,c,s()({},l+"-vertical",p));return S["createElement"](L,r()({},h,{className:g,decorators:f,afterSlide:this.onChange}))}}]),e}(S["Component"]);e["a"]=Y;Y.defaultProps={prefixCls:"am-carousel",dots:!0,arrows:!1,autoplay:!1,infinite:!1,cellAlign:"center",selectedIndex:0,dotStyle:{},dotActiveStyle:{}}},bHjy:function(t,e,i){}}]);