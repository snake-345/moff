!function(d){"use strict";var i='[data-toggle="dropdown"]',n=function(t){d(t).on("click.bs.dropdown",this.toggle)};function s(t){var o=t.attr("data-target");o||(o=(o=t.attr("href"))&&/#[A-Za-z]/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var e=o&&d(o);return e&&e.length?e:t.parent()}function a(n){n&&3===n.which||(d(".dropdown-backdrop").remove(),d(i).each(function(){var t=d(this),o=s(t),e={relatedTarget:this};o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&d.contains(o[0],n.target)||(o.trigger(n=d.Event("hide.bs.dropdown",e)),n.isDefaultPrevented()||(t.attr("aria-expanded","false"),o.removeClass("open").trigger("hidden.bs.dropdown",e))))}))}n.VERSION="3.3.5",n.prototype.toggle=function(t){var o=d(this);if(!o.is(".disabled, :disabled")){var e=s(o),n=e.hasClass("open");if(a(),!n){"ontouchstart"in document.documentElement&&!e.closest(".navbar-nav").length&&d(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(d(this)).on("click",a);var r={relatedTarget:this};if(e.trigger(t=d.Event("show.bs.dropdown",r)),t.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),e.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},n.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var o=d(this);if(t.preventDefault(),t.stopPropagation(),!o.is(".disabled, :disabled")){var e=s(o),n=e.hasClass("open");if(!n&&27!=t.which||n&&27==t.which)return 27==t.which&&e.find(i).trigger("focus"),o.trigger("click");var r=e.find(".dropdown-menu li:not(.disabled):visible a");if(r.length){var a=r.index(t.target);38==t.which&&0<a&&a--,40==t.which&&a<r.length-1&&a++,~a||(a=0),r.eq(a).trigger("focus")}}}};var t=d.fn.dropdown;d.fn.dropdown=function(e){return this.each(function(){var t=d(this),o=t.data("bs.dropdown");o||t.data("bs.dropdown",o=new n(this)),"string"==typeof e&&o[e].call(t)})},d.fn.dropdown.Constructor=n,d.fn.dropdown.noConflict=function(){return d.fn.dropdown=t,this},d(document).on("click.bs.dropdown.data-api",a).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",i,n.prototype.toggle).on("keydown.bs.dropdown.data-api",i,n.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",n.prototype.keydown)}(jQuery);