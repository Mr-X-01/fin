flexbe_cli.entity.setClientJs("zone","zone",{onInit(){this.setMeta()},onUpdate(){this.setMeta()},setMeta(){const i=this.lastViewport,e=this.lastVisibility;this.lastViewport=flexbe_cli.resize.viewportWidth,this.lastVisibility=flexbe_cli.is_admin&&$("body").hasClass("show-hidden"),this.needFixOrder=this.needFixOrder||this.lastViewport!==i||this.lastVisibility!==e},onResize(){this.inScreen&&this.isVisible&&this.fixElementOrder()},fixElementOrder(){if(this.setMeta(),!this.needFixOrder)return;this.needFixOrder=!1;const i=this.$area.find(".elements-list");i.find("[data-hidden]").length&&i.each(((i,e)=>{const t=$(e).find(".element-item--static"),s=t.filter(":visible");t.removeClass("is-first-child is-last-child"),s.first().addClass("is-first-child"),s.last().addClass("is-last-child")}))}});

flexbe_cli.entity.setClientJs("zone","zone_grid",{isPure:!0});

flexbe_cli.entity.setClientJs("modal","BASIC",{onOpen(){this.$scroll=this.$area.find(".scroller"),this.$content=this.$area.find(".modal-content"),this.$close=this.$scroll.find("> .close--outside"),this.dispatchClasses(),this.$scroll.on("scroll.close-check",$.throttle((()=>{this.dispatchClasses()}),60))},onClose(){this.$scroll.off("scroll.close-check")},dispatchClasses(){if("mobile"!==flexbe_cli.resize.responsiveMode||!this.$close.length)return;const s=this.$scroll[0].scrollTop,e=this.$content[0].offsetTop,l=this.$close[0].offsetHeight;this.$close.toggleClass("stuck",e-s<l)}});

flexbe_cli.entity.setClientJs("element","form01",{isPure:!0});

flexbe_cli.entity.setClientJs("element","logo01",{isPure:!0});

!function(){const e=({lang:e,provider:t})=>{e=e||flexbe_cli.locale.language;const s={yandex:{ru:"ru_RU",by:"ru_RU",ge:"ru_RU",kz:"ru_RU",ua:"uk_UA",default:"en_US"},google:{ru:"ru",by:"be",ge:"ru",kz:"kk",ua:"uk",fr:"fr",pl:"pl",de:"de",es:"es",it:"it",default:"en"}};return!!s[t]&&(s[t][e]||s[t].default)};function t(e,t){if(!{}.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var s=0;function o(e){return"__private_"+s+++"_"+e}const i=new WeakMap,n=e=>{const{is:t,component:s}=e;i.has(s)||i.set(s,Math.floor(999999999*Math.random()));return`.component-${t}-${i.get(s)}`};var a=o("inheritEvents"),r=o("syncStates");class l{get is(){return this.constructor.is}constructor({component:e,core:t,reason:s}){Object.defineProperty(this,r,{value:h}),Object.defineProperty(this,a,{value:c}),this.require=[],this.core=null,this.owner=null,this.root=null,this.component=null,this.$component=null,this.componentWidth=null,this.componentHeight=null,this.isInited=!1,this.isLoaded=!1,this.isUpdated=!1,this.isOpen=null,this.isVisible=null,this.inScreen=!1,this.inBeside=!1,this.inView=!1,this.inFocus=!1,this.wasVisible=null,this.wasScreen=!1,this.wasBeside=!1,this.wasView=!1,this.wasFocus=!1,this.core=t,this.owner=t.area,this.root=t.root,this.component=e,this.$component=$(e),this.isUpdated="update"===s}onInit(){}onLoad(){}onVisible(e){}onScreen(e){}onBeside(e){}onView(e){}onFocus(e){}onResize(e){}onOpen(e){}onClose(e){}onHideShowUI(e){}onDestroy(){}_clearEvents(){const e=n(this);$(this.owner).off(e),$(this.root).off(e)}_onInit(){this.isInited=!0,"function"==typeof this.onInit&&this.onInit(),t(this,r)[r](),t(this,a)[a](),flexbe_cli.require(this.require,(()=>this._onLoad()))}_onLoad(){this.isLoaded=!0,"function"==typeof this.onLoad&&this.onLoad(),this.require.length&&t(this,r)[r]()}_onVisible({state:e}){if(null==this.isVisible)return this.isVisible=e,void(this.wasVisible=e);const t=e&&!this.wasVisible;this.isVisible=e,this.onVisible({state:e,first:t}),e&&(this.wasVisible=!0)}_onScreen({state:e}){const t=e&&!this.wasScreen;this.inScreen=e,this.onScreen({state:e,first:t}),e&&(this.wasScreen=!0)}_onView({state:e}){const t=e&&!this.wasView;this.inView=e,this.onView({state:e,first:t}),e&&(this.wasView=!0)}_onBeside({state:e}){const t=e&&!this.wasBeside;this.inBeside=e,this.onBeside({state:e,first:t}),e&&(this.wasBeside=!0)}_onFocus({state:e}){const t=e&&!this.wasFocus;this.inFocus=e,this.onFocus({state:e,first:t}),e&&(this.wasFocus=!0)}_onResize(e){this.onResize(e)}_onOpen(e){this.isOpen=!0,t(this,r)[r](),this.onOpen(e)}_onClose(e){this.isOpen=!1,t(this,r)[r](),this.onClose(e)}_onWindowResize(){this.onWindowResize&&(t(this,r)[r](),this.onWindowResize())}_onHideShowUI(e){this.onHideShowUI(e)}destroy(){this._clearEvents(),this.onDestroy()}}function c(){this._clearEvents();const e=n(this);$(this.owner).on(`tween${e}`,(e=>t(this,r)[r](e.detail))),$(this.root).on(`open${e}`,(e=>this._onOpen(e.detail))),$(this.root).on(`close${e}`,(e=>this._onClose(e.detail)))}function h({force:e=!1}={}){const t=null==this.componentWidth||null==this.componentHeight,s=this.core.isVisible,o=s&&this.component.offsetWidth||0,i=s&&this.component.offsetHeight||0,n=!(!o&&!i),a=n&&this.core.inBeside,r=n&&this.core.inScreen,l=n&&this.core.inView,c=n&&this.core.inFocus,h=this.componentWidth!==o,p=this.componentHeight!==i,d=e||n&&!t&&(h||p);n&&(this.componentWidth=o,this.componentHeight=i),n!==this.isVisible&&this._onVisible({state:n}),d&&this._onResize({force:e}),a!==this.inBeside&&this._onBeside({state:a}),r!==this.inScreen&&this._onScreen({state:r}),l!==this.inView&&this._onView({state:l}),c!==this.inFocus&&this._onFocus({state:c})}l.is=null;class p extends l{constructor(...e){super(...e),this.mapScripts=[],this.mapScriptsLoaded=!1,this.data=this.$component.data("data"),this.$component.removeAttr("data-data")}onInit(){this.isUpdated&&this.mapScriptsLoaded&&this.createMap()}async onBeside({state:e}){if(!e||this.isCreated||this.isLoading)return!1;await this.loadMapScripts(),this.createMap()}onOpen(){this.isCreated&&this.fitToViewport()}onResize(){this.isCreated&&this.fitToViewport()}async loadMapScripts(){return this.isLoading=!0,new Promise((e=>flexbe_cli.require(this.mapScripts,(()=>{this.isLoading=!1,this.mapScriptsLoaded=!0,e()}))))}createMap(){this.isCreated=!0}fitToViewport(){}}p.is="map";class d extends p{constructor(...t){super(...t);const s=flexbe_cli.vars._project.googleMapsKey,o=e({provider:"google"})||"ru";this.mapScripts=[`https://maps.googleapis.com/maps/api/js?key=${s}&language=${o}`]}createMap(){"undefined"!=typeof google&&(super.createMap(),this.createVendor(),this.styleMap(),this.setPlaces(),this.dispatchEvents(),this.fixBehavior(),this.$component.trigger("mapInit"),this.$component.removeClass("loading"))}createVendor(){const{data:e}=this,t=e.mapType||"map",s={map:google.maps.MapTypeId.ROADMAP,satellite:google.maps.MapTypeId.SATELLITE,hybrid:google.maps.MapTypeId.HYBRID};this.map=new google.maps.Map(this.$component.find(".map")[0],{center:{lat:e.center[0],lng:e.center[1]},zoom:e.zoom,disableDefaultUI:!0,panControl:!0,zoomControl:!0,fullscreenControl:!0,mapTypeControl:!1,streetViewControl:!1,mapTypeId:s[t],scrollwheel:!1})}dispatchEvents(){const{$component:e,map:t}=this;let s=!1;t&&(e.on("selectMark",((e,t)=>{this.selectMark(t,!0)})),this.$component.on("mousedown",(()=>{s=!0,this.$component.trigger("preventSliderMove",{state:!0}),this.$component.trigger("reduceSliderControls",{state:!0})})),$(window).on("mouseup",(()=>{s&&(this.$component.trigger("preventSliderMove",{state:!1}),this.$component.trigger("reduceSliderControls",{state:!1}),s=!1)})))}fitToViewport(){const{map:e}=this;e&&google.maps.event.trigger(e,"resize")}setPlaces(){const{data:e,map:t}=this;t&&e.places.forEach(((e,s)=>{const o=`<svg width="32" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36 0 0 5.36 0 12c0 8 12 20 12 20s12-12 12-20c0-6.64-5.36-12-12-12zm0 8a4 4 0 0 1 4 4c0 2.22-1.78 4-4 4a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z" fill="${e.color||"#222"}" fill-rule="evenodd"/></svg>`,i=new google.maps.Marker({position:{lat:e.coords[0],lng:e.coords[1]},map:t,visible:!0,animation:google.maps.Animation.DROP,icon:{url:`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(o)}`}});e._mark=i,i.addListener("click",(()=>{this.selectMark(s)}))}))}styleMap(){const{data:e,map:t}=this;if(t)if(!e.style||/default|inherit/.test(e.style))t.setOptions({styles:[]});else{const s=`/_s/lib/google/maps/styles/${e.style}.json`;$.getJSON(s,(e=>{e&&Array.isArray(e)&&t.setOptions({styles:e})}))}}selectMark(e,t=!1){const{data:s,map:o}=this,{places:i}=s;if(!(o&&i&&i.length&&i[e]))return;i.forEach((e=>e._info&&e._info.close()));const n=i[e];let a="";n.name&&(a+=`<div style="margin-bottom: 3px;"><strong>${n.name}</strong></div>`),n.address&&(a+=`<div>${n.address}</div>`),n._info=new google.maps.InfoWindow({content:a}),n._info.open(o,n._mark),t&&o.panTo({lat:n.coords[0],lng:n.coords[1]}),this.$component.trigger("balloonOpen",e,n)}fixBehavior(){const{$component:e,map:t}=this;if(!t)return;let s;e.off("mouseenter.preventzoom").on("mouseenter.preventzoom",(()=>{s=setTimeout((()=>{t.setOptions({scrollwheel:!0})}),500)})),e.off("mouseleave.preventzoom").on("mouseleave.preventzoom",(()=>{s&&(clearTimeout(s),t.setOptions({scrollwheel:!1}))}))}}class m extends p{constructor(...t){super(...t);const s=e({provider:"yandex"})||"ru_RU",o=flexbe_cli.vars._project.yandexMapsKey?`&apikey=${flexbe_cli.vars._project.yandexMapsKey}`:"";this.mapScripts=[`https://api-maps.yandex.ru/2.1/?lang=${s}${o}`]}fitToViewport(){const{map:e}=this;e&&e.container.fitToViewport()}createMap(){"undefined"!=typeof ymaps&&(super.createMap(),ymaps.ready((()=>{this.createVendor(),this.setPlaces(),this.dispatchEvents(),this.fixBehavior(),this.$component.trigger("mapInit"),this.$component.removeClass("loading")})))}createVendor(){this.map&&this.map.destroy();const e=this.data,t=e.mapType||"map";this.map=new ymaps.Map(this.$component.find(".map")[0],{center:e.center,zoom:e.zoom,controls:["zoomControl"],behaviors:["default","scrollZoom"],type:{map:"yandex#map",satellite:"yandex#satellite",hybrid:"yandex#hybrid"}[t]})}setPlaces(){const{map:e,data:t}=this;if(!e)return;e.geoObjects.removeAll();const s=ymaps.templateLayoutFactory.createClass('<svg title="$[properties.balloonContent]" class="placemark" width="32" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36 0 0 5.36 0 12c0 8 12 20 12 20s12-12 12-20c0-6.64-5.36-12-12-12zm0 8a4 4 0 0 1 4 4c0 2.22-1.78 4-4 4a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z" fill="$[properties.color]" fill-rule="evenodd"/></svg>');ymaps.layout.storage.get("custom#placemark")||ymaps.layout.storage.add("custom#placemark",s),t.places.forEach(((t,s)=>{t.color=t.color||"#3D52B0";const o=new ymaps.Placemark(t.coords,{balloonContentHeader:t.name||!1,balloonContent:t.address,color:t.color},{hideIconOnBalloonOpen:!1,balloonOffset:[0,-48],balloonCloseButton:!1,iconLayout:"custom#placemark",iconShape:{type:"Rectangle",coordinates:[[-16,-48],[16,0]]}});o.events.add("balloonopen",(()=>{this.$component.trigger("balloonOpen",s,t)})),e.geoObjects.add(o),t._mark=o}))}dispatchEvents(){const{data:e,map:t}=this;let s=!1;t&&(this.$component.on("selectMark",(async(s,o)=>{if(e.places.length&&e.places[o]){const s=e.places[o];await t.setCenter(s.coords,e.zoom,{duration:350,checkZoomRange:!0}),await t.setCenter(s.coords),s._mark&&s._mark.balloon.open()}})),this.$component.on("mousedown",(()=>{s=!0,this.$component.trigger("preventSliderMove",{state:!0}),this.$component.trigger("reduceSliderControls",{state:!0})})),$(window).on("mouseup",(()=>{s&&(this.$component.trigger("preventSliderMove",{state:!1}),this.$component.trigger("reduceSliderControls",{state:!1}),s=!1)})))}fixBehavior(){const{map:e}=this;if(!e)return;let t;e.behaviors.disable("scrollZoom"),this.$component.off("mouseenter.preventzoom").on("mouseenter.preventzoom",(()=>{t=setTimeout((()=>{e.behaviors.enable("scrollZoom")}),500)})),this.$component.off("mouseleave.preventzoom").on("mouseleave.preventzoom",(()=>{t&&(clearTimeout(t),e.behaviors.disable("scrollZoom"))})),flexbe_cli.run.is_mobile&&e.behaviors.disable("drag")}}class u{constructor(e){var t;return"yandex"===(null!=(t=e.component.getAttribute("data-type"))?t:"google")?new m(e):new d(e)}}u.is="map",flexbe_cli.entity.setClientJs("element","map01",{components:[u]})}();

flexbe_cli.entity.setClientJs("element","text01",{isPure:!0});

!function(){class t{get isOnScreen(){if(!this.$tabsList)return!1;const{top:t,height:i}=this.$tabsList[0].getBoundingClientRect();return t>0&&t+i<flexbe_cli.resize.viewportHeight}constructor(t){if(this.inited=!1,this.interacted=!1,this.opts=void 0,this.$area=void 0,this.uidAttr=void 0,this.classContainer=void 0,this.activeUid=void 0,this.$activeTab=void 0,this.$activeSection=void 0,this.$mainContainer=void 0,this.$tabsContainer=void 0,this.$tabsList=void 0,this.$swiperHelper=void 0,this.$tabs=void 0,this.$sections=void 0,this.opts=t,this.$area=t.$area,this.uidAttr=t.uidAttr||"data-tab-uid",this.classContainer=t.classContainer,this.initTabs(),t.activeUid)this.selectTab(t.activeUid);else if(window.location.hash){const t=window.location.hash.replace("#",""),i=$(`._anchor[name="${t}" i]`),e=i.length?i.closest("[data-id]"):$(`[data-id="${t}" i]`),s=i[0]||e[0];s&&this.selectTabFromTarget(s)}this.$area.on("bringIntoView",(t=>this.selectTabFromTarget(t.target)))}initTabs(){if(this.$mainContainer="self"===this.classContainer?this.$area:this.$area.find(this.classContainer),this.$tabsContainer=this.$area.find(".container-tabs"),this.$tabsList=this.$area.find('[role="tablist"]'),this.$swiperHelper=this.$area.find(".tab-swiper-helper"),this.inited=!!this.$tabsList.length,this.inited&&(this.$tabs=this.$tabsList.find('[role="tab"]'),this.$sections=this.$mainContainer.find('[role="tabpanel"]'),this.normalizeLines(),setTimeout((()=>{this.$mainContainer.addClass("main-area--tabs-inited")}),50),this.$tabsContainer.on("click",".tab",(t=>{const i=$(t.currentTarget).closest(`[${this.uidAttr}]`).attr(`${this.uidAttr}`);i&&this.selectTab(i)})),this.$tabsList.on("wheel",(t=>{const i=this.$tabsList[0],e=t.originalEvent.wheelDeltaX,s=t.originalEvent.wheelDeltaY;i.scrollWidth<=i.clientWidth||s<0&&0===i.scrollLeft||s>0&&i.scrollLeft===i.scrollWidth-i.clientWidth||flexbe_cli.run.is_pointer&&!e&&s&&(t.preventDefault(),i.scrollLeft+=s)})),this.$tabsList.on("touchstart",(()=>{this.interacted=!0,this.destroySwipeAnimation()})),flexbe_cli.is_admin)){let t;this.$tabsContainer.on("mouseenter",".tab",(i=>{1===i.buttons&&document.body.classList.contains("state--in-move")&&(clearTimeout(t),t=setTimeout((()=>{const t=$(i.target).closest(`[${this.uidAttr}]`).attr(`${this.uidAttr}`);this.selectTab(t)}),700))})),this.$tabsContainer.on("mouseleave",".tab",(()=>{clearTimeout(t)}))}}swipeAnimationController(){if(!this.inited)return;const t=this.$tabsList[0]&&this.$tabsList[0].scrollWidth>this.$tabsList[0].clientWidth,i=this.isOnScreen;t&&i?this.initSwiperAnimation():i||this.destroySwipeAnimation()}initSwiperAnimation(){this.$swiperHelper.hasClass("show")||this.interacted||this.$swiperHelper.addClass("show")}destroySwipeAnimation(){this.$swiperHelper.hasClass("show")&&this.$swiperHelper.removeClass("show")}selectTabFromIndex(t){const i=this.$tabs.get(t);this.selectTabFromTarget(i)}selectTabFromTarget(t){const i=$(t).closest(`[${this.uidAttr}]`).attr(`${this.uidAttr}`);this.selectTab(i)}selectTab(t,{force:i}={}){var e,s;if(!t||!i&&this.activeUid===t)return;this.inited||this.initTabs();const a=null!=(e=null==(s=this.$tabs)?void 0:s.filter(`[${this.uidAttr}="${t}"]`))?e:[];if(!a.length)return;const n=this.$sections.filter(".active"),o=n[0]&&n[0].offsetTop,r=this.$sections.filter(`[${this.uidAttr}="${t}"]`);this.scrollToTab(a),this.$tabs.removeClass("active").attr("aria-selected",!1).attr("tabindex",-1),a.addClass("active").attr("aria-selected",!0).attr("tabindex",0),this.$sections.removeClass("active").prop("hidden",!0),r.addClass("active").prop("hidden",!1);const l=r[0]&&r[0].offsetTop;if(this.activeUid=t,this.$activeTab=a,this.$activeSection=r,n[0].dispatchEvent(new CustomEvent("element-become-hidden")),r[0].dispatchEvent(new CustomEvent("element-become-visible")),"function"==typeof this.opts.onSelectTab&&this.opts.onSelectTab({uid:t,$tab:a}),!flexbe_cli.run.is_mobile&&null!=o&&null!=l&&Math.abs(o-l)>0&&"undefined"!=typeof anime){const t=this.$mainContainer,i=o-l;t.css("will-change","transform"),anime({targets:t[0],translateY:[i,0],duration:250,easing:"easeOutCubic",complete:()=>{t.css({transform:"","will-change":""})}})}}normalizeLines(){if(!this.inited)return;let t;const i=this.$tabs;this.$tabsList.find(".tab-spacer").remove(),i.removeClass("first-in-line last-in-line"),i.first().addClass("first-in-line"),i.last().addClass("last-in-line"),i.each(((i,e)=>{t&&t.offsetTop!==e.offsetTop&&($(e).addClass("first-in-line"),$(t).addClass("last-in-line"),$(t).after('<span class="tab-spacer"></span>')),t=e}))}scrollToTab(t){if(!this.inited)return;const i=this.$tabsList,e=i[0].scrollWidth;if(e>i[0].offsetWidth){const s=t[0].offsetLeft,a=t[0].getBoundingClientRect(),n=flexbe_cli.resize.viewportWidth;let o;a.width>n||a.left<20?o=s-20:a.right>n-20&&(o=s-(n-20-a.width)),null!=o&&(o=Math.max(0,Math.min(e-n,o)),i.animate({scrollLeft:o},{duration:250}))}}resetHash(){if(!this.inited)return;String(window.location.hash).replace(/^#{1,2}(tab)?/,"")===this.activeUid&&(flexbe_cli.lockPopstate=!0,window.history.replaceState(null,null,window.location.pathname),flexbe_cli.lockPopstate=!1)}}flexbe_cli.entity.setClientJs("block","BUNDLE",{tabsController:void 0,shouldInitTabs:!0,onUpdate({templateRendered:t,reasonData:i}){t&&(this.shouldInitTabs=!0),["create","copy"].includes(i.source)&&requestAnimationFrame((()=>this.tabsController.selectTabFromIndex(i.to)))},onResize(){this.tabsController&&this.tabsController.normalizeLines()},onBeside({state:t}){t&&this.shouldInitTabs&&this.createTabs()},onScreen({state:t}){this.tabsController&&(t||(this.tabsController.swipeAnimationController(),this.tabsController.resetHash()))},onFocus({state:t}){this.tabsController&&t&&this.tabsController.swipeAnimationController()},createTabs(){this.shouldInitTabs=!1,this.$area.find('[role="tabpanel"]').length?this.tabsController=new t({$area:this.$area,classContainer:".main-area",activeUid:this.selectedTabUid,onSelectTab:({uid:t})=>{this.selectedTabUid=t,this.updateTween()}}):this.tabsController=null}})}();

flexbe_cli.entity.setClientJs("block","FOOTER",{});

flexbe_cli.entity.setClientJs("block","HTML",{});

flexbe_cli.entity.setClientJs("element","button01",{isPure:!0});

flexbe_cli.entity.setClientJs("element","contacts01",{onReady(){this.fixIcon()},onMsg(t){"change_contact"===t&&this.fixIcon()},fixIcon(){const t=this.$area,e=t.find(".component-icon"),n=t.find(".element-text--contact");if(t.find(".element-text--desc").length&&n.length&&e.length){const t=n[0].offsetHeight,c=e[0].offsetHeight;if(t>c){const n=t/2-c/2;e.css("margin-top",`${n}px`)}else e.css("margin-top","")}}});
