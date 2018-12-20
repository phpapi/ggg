!
function() {
    function t(e, i, n) {
        function o(s, r) {
            if (!i[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!r && l) return l(s, !0);
                    if (a) return a(s, !0);
                    var d = new Error("Cannot find module '" + s + "'");
                    throw d.code = "MODULE_NOT_FOUND",
                    d
                }
                var c = i[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports,
                function(t) {
                    var i = e[s][1][t];
                    return o(i || t)
                },
                c, c.exports, t, e, i, n)
            }
            return i[s].exports
        }
        for (var a = "function" == typeof require && require,
        s = 0; s < n.length; s++) o(n[s]);
        return o
    }
    return t
} ()({
    1 : [function(t, e, i) {
        /*!
    * Bootstrap v3.3.7 (http://getbootstrap.com)
    * Copyright 2011-2016 Twitter, Inc.
    * Licensed under the MIT license
    */
        if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
        function(t) {
            "use strict";
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
        } (jQuery),
        function(t) {
            "use strict";
            function e() {
                var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var i in e) if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
                return ! 1
            }
            t.fn.emulateTransitionEnd = function(e) {
                var i = !1,
                n = this;
                t(this).one("bsTransitionEnd",
                function() {
                    i = !0
                });
                var o = function() {
                    i || t(n).trigger(t.support.transition.end)
                };
                return setTimeout(o, e),
                this
            },
            t(function() {
                t.support.transition = e(),
                t.support.transition && (t.event.special.bsTransitionEnd = {
                    bindType: t.support.transition.end,
                    delegateType: t.support.transition.end,
                    handle: function(e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                    }
                })
            })
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                return this.each(function() {
                    var i = t(this),
                    o = i.data("bs.alert");
                    o || i.data("bs.alert", o = new n(this)),
                    "string" == typeof e && o[e].call(i)
                })
            }
            var i = '[data-dismiss="alert"]',
            n = function(e) {
                t(e).on("click", i, this.close)
            };
            n.VERSION = "3.3.7",
            n.TRANSITION_DURATION = 150,
            n.prototype.close = function(e) {
                function i() {
                    s.detach().trigger("closed.bs.alert").remove()
                }
                var o = t(this),
                a = o.attr("data-target");
                a || (a = o.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
                var s = t("#" === a ? [] : a);
                e && e.preventDefault(),
                s.length || (s = o.closest(".alert")),
                s.trigger(e = t.Event("close.bs.alert")),
                e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
            };
            var o = t.fn.alert;
            t.fn.alert = e,
            t.fn.alert.Constructor = n,
            t.fn.alert.noConflict = function() {
                return t.fn.alert = o,
                this
            },
            t(document).on("click.bs.alert.data-api", i, n.prototype.close)
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                return this.each(function() {
                    var n = t(this),
                    o = n.data("bs.button"),
                    a = "object" == typeof e && e;
                    o || n.data("bs.button", o = new i(this, a)),
                    "toggle" == e ? o.toggle() : e && o.setState(e)
                })
            }
            var i = function(e, n) {
                this.$element = t(e),
                this.options = t.extend({},
                i.DEFAULTS, n),
                this.isLoading = !1
            };
            i.VERSION = "3.3.7",
            i.DEFAULTS = {
                loadingText: "loading..."
            },
            i.prototype.setState = function(e) {
                var i = "disabled",
                n = this.$element,
                o = n.is("input") ? "val": "html",
                a = n.data();
                e += "Text",
                null == a.resetText && n.data("resetText", n[o]()),
                setTimeout(t.proxy(function() {
                    n[o](null == a[e] ? this.options[e] : a[e]),
                    "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
                },
                this), 0)
            },
            i.prototype.toggle = function() {
                var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var i = this.$element.find("input");
                    "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
                    i.prop("checked", this.$el!
                    function() {
                        function t(e, i, n) {
                            function o(s, r) {
                                if (!i[s]) {
                                    if (!e[s]) {
                                        var l = "function" == typeof require && require;
                                        if (!r && l) return l(s, !0);
                                        if (a) return a(s, !0);
                                        var d = new Error("Cannot find module '" + s + "'");
                                        throw d.code = "MODULE_NOT_FOUND",
                                        d
                                    }
                                    var c = i[s] = {
                                        exports: {}
                                    };
                                    e[s][0].call(c.exports,
                                    function(t) {
                                        var i = e[s][1][t];
                                        return o(i || t)
                                    },
                                    c, c.exports, t, e, i, n)
                                }
                                return i[s].exports
                            }
                            for (var a = "function" == typeof require && require,
                            s = 0; s < n.length; s++) o(n[s]);
                            return o
                        }
                        return t
                    } ()({
                        1 : [function(t, e, i) {
                            /*!
                        * Bootstrap v3.3.7 (http://getbootstrap.com)
                        * Copyright 2011-2016 Twitter, Inc.
                        * Licensed under the MIT license
                        */
                            if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
                            function(t) {
                                "use strict";
                                var e = t.fn.jquery.split(" ")[0].split(".");
                                if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e() {
                                    var t = document.createElement("bootstrap"),
                                    e = {
                                        WebkitTransition: "webkitTransitionEnd",
                                        MozTransition: "transitionend",
                                        OTransition: "oTransitionEnd otransitionend",
                                        transition: "transitionend"
                                    };
                                    for (var i in e) if (void 0 !== t.style[i]) return {
                                        end: e[i]
                                    };
                                    return ! 1
                                }
                                t.fn.emulateTransitionEnd = function(e) {
                                    var i = !1,
                                    n = this;
                                    t(this).one("bsTransitionEnd",
                                    function() {
                                        i = !0
                                    });
                                    var o = function() {
                                        i || t(n).trigger(t.support.transition.end)
                                    };
                                    return setTimeout(o, e),
                                    this
                                },
                                t(function() {
                                    t.support.transition = e(),
                                    t.support.transition && (t.event.special.bsTransitionEnd = {
                                        bindType: t.support.transition.end,
                                        delegateType: t.support.transition.end,
                                        handle: function(e) {
                                            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                                        }
                                    })
                                })
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    return this.each(function() {
                                        var i = t(this),
                                        o = i.data("bs.alert");
                                        o || i.data("bs.alert", o = new n(this)),
                                        "string" == typeof e && o[e].call(i)
                                    })
                                }
                                var i = '[data-dismiss="alert"]',
                                n = function(e) {
                                    t(e).on("click", i, this.close)
                                };
                                n.VERSION = "3.3.7",
                                n.TRANSITION_DURATION = 150,
                                n.prototype.close = function(e) {
                                    function i() {
                                        s.detach().trigger("closed.bs.alert").remove()
                                    }
                                    var o = t(this),
                                    a = o.attr("data-target");
                                    a || (a = o.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
                                    var s = t("#" === a ? [] : a);
                                    e && e.preventDefault(),
                                    s.length || (s = o.closest(".alert")),
                                    s.trigger(e = t.Event("close.bs.alert")),
                                    e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
                                };
                                var o = t.fn.alert;
                                t.fn.alert = e,
                                t.fn.alert.Constructor = n,
                                t.fn.alert.noConflict = function() {
                                    return t.fn.alert = o,
                                    this
                                },
                                t(document).on("click.bs.alert.data-api", i, n.prototype.close)
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    return this.each(function() {
                                        var n = t(this),
                                        o = n.data("bs.button"),
                                        a = "object" == typeof e && e;
                                        o || n.data("bs.button", o = new i(this, a)),
                                        "toggle" == e ? o.toggle() : e && o.setState(e)
                                    })
                                }
                                var i = function(e, n) {
                                    this.$element = t(e),
                                    this.options = t.extend({},
                                    i.DEFAULTS, n),
                                    this.isLoading = !1
                                };
                                i.VERSION = "3.3.7",
                                i.DEFAULTS = {
                                    loadingText: "loading..."
                                },
                                i.prototype.setState = function(e) {
                                    var i = "disabled",
                                    n = this.$element,
                                    o = n.is("input") ? "val": "html",
                                    a = n.data();
                                    e += "Text",
                                    null == a.resetText && n.data("resetText", n[o]()),
                                    setTimeout(t.proxy(function() {
                                        n[o](null == a[e] ? this.options[e] : a[e]),
                                        "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
                                    },
                                    this), 0)
                                },
                                i.prototype.toggle = function() {
                                    var t = !0,
                                    e = this.$element.closest('[data-toggle="buttons"]');
                                    if (e.length) {
                                        var i = this.$element.find("input");
                                        "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
                                        i.prop("checked", this.$element.hasClass("active")),
                                        t && i.trigger("change")
                                    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                                    this.$element.toggleClass("active")
                                };
                                var n = t.fn.button;
                                t.fn.button = e,
                                t.fn.button.Constructor = i,
                                t.fn.button.noConflict = function() {
                                    return t.fn.button = n,
                                    this
                                },
                                t(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
                                function(i) {
                                    var n = t(i.target).closest(".btn");
                                    e.call(n, "toggle"),
                                    t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
                                }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
                                function(e) {
                                    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
                                })
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    return this.each(function() {
                                        var n = t(this),
                                        o = n.data("bs.carousel"),
                                        a = t.extend({},
                                        i.DEFAULTS, n.data(), "object" == typeof e && e),
                                        s = "string" == typeof e ? e: a.slide;
                                        o || n.data("bs.carousel", o = new i(this, a)),
                                        "number" == typeof e ? o.to(e) : s ? o[s]() : a.interval && o.pause().cycle()
                                    })
                                }
                                var i = function(e, i) {
                                    this.$element = t(e),
                                    this.$indicators = this.$element.find(".carousel-indicators"),
                                    this.options = i,
                                    this.paused = null,
                                    this.sliding = null,
                                    this.interval = null,
                                    this.$active = null,
                                    this.$items = null,
                                    this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
                                    "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
                                };
                                i.VERSION = "3.3.7",
                                i.TRANSITION_DURATION = 600,
                                i.DEFAULTS = {
                                    interval: 5e3,
                                    pause: "hover",
                                    wrap: !0,
                                    keyboard: !0
                                },
                                i.prototype.keydown = function(t) {
                                    if (!/input|textarea/i.test(t.target.tagName)) {
                                        switch (t.which) {
                                        case 37:
                                            this.prev();
                                            break;
                                        case 39:
                                            this.next();
                                            break;
                                        default:
                                            return
                                        }
                                        t.preventDefault()
                                    }
                                },
                                i.prototype.cycle = function(e) {
                                    return e || (this.paused = !1),
                                    this.interval && clearInterval(this.interval),
                                    this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
                                    this
                                },
                                i.prototype.getItemIndex = function(t) {
                                    return this.$items = t.parent().children(".item"),
                                    this.$items.index(t || this.$active)
                                },
                                i.prototype.getItemForDirection = function(t, e) {
                                    var i = this.getItemIndex(e);
                                    if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
                                    var n = "prev" == t ? -1 : 1,
                                    o = (i + n) % this.$items.length;
                                    return this.$items.eq(o)
                                },
                                i.prototype.to = function(t) {
                                    var e = this,
                                    i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                                    if (! (t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel",
                                    function() {
                                        e.to(t)
                                    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next": "prev", this.$items.eq(t))
                                },
                                i.prototype.pause = function(e) {
                                    return e || (this.paused = !0),
                                    this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
                                    this.interval = clearInterval(this.interval),
                                    this
                                },
                                i.prototype.next = function() {
                                    if (!this.sliding) return this.slide("next")
                                },
                                i.prototype.prev = function() {
                                    if (!this.sliding) return this.slide("prev")
                                },
                                i.prototype.slide = function(e, n) {
                                    var o = this.$element.find(".item.active"),
                                    a = n || this.getItemForDirection(e, o),
                                    s = this.interval,
                                    r = "next" == e ? "left": "right",
                                    l = this;
                                    if (a.hasClass("active")) return this.sliding = !1;
                                    var d = a[0],
                                    c = t.Event("slide.bs.carousel", {
                                        relatedTarget: d,
                                        direction: r
                                    });
                                    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                                        if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                                            this.$indicators.find(".active").removeClass("active");
                                            var u = t(this.$indicators.children()[this.getItemIndex(a)]);
                                            u && u.addClass("active")
                                        }
                                        var h = t.Event("slid.bs.carousel", {
                                            relatedTarget: d,
                                            direction: r
                                        });
                                        return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e), a[0].offsetWidth, o.addClass(r), a.addClass(r), o.one("bsTransitionEnd",
                                        function() {
                                            a.removeClass([e, r].join(" ")).addClass("active"),
                                            o.removeClass(["active", r].join(" ")),
                                            l.sliding = !1,
                                            setTimeout(function() {
                                                l.$element.trigger(h)
                                            },
                                            0)
                                        }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(h)),
                                        s && this.cycle(),
                                        this
                                    }
                                };
                                var n = t.fn.carousel;
                                t.fn.carousel = e,
                                t.fn.carousel.Constructor = i,
                                t.fn.carousel.noConflict = function() {
                                    return t.fn.carousel = n,
                                    this
                                };
                                var o = function(i) {
                                    var n, o = t(this),
                                    a = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
                                    if (a.hasClass("carousel")) {
                                        var s = t.extend({},
                                        a.data(), o.data()),
                                        r = o.attr("data-slide-to");
                                        r && (s.interval = !1),
                                        e.call(a, s),
                                        r && a.data("bs.carousel").to(r),
                                        i.preventDefault()
                                    }
                                };
                                t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
                                t(window).on("load",
                                function() {
                                    t('[data-ride="carousel"]').each(function() {
                                        var i = t(this);
                                        e.call(i, i.data())
                                    })
                                })
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
                                    return t(n)
                                }
                                function i(e) {
                                    return this.each(function() {
                                        var i = t(this),
                                        o = i.data("bs.collapse"),
                                        a = t.extend({},
                                        n.DEFAULTS, i.data(), "object" == typeof e && e); ! o && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
                                        o || i.data("bs.collapse", o = new n(this, a)),
                                        "string" == typeof e && o[e]()
                                    })
                                }
                                var n = function(e, i) {
                                    this.$element = t(e),
                                    this.options = t.extend({},
                                    n.DEFAULTS, i),
                                    this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
                                    this.transitioning = null,
                                    this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                                    this.options.toggle && this.toggle()
                                };
                                n.VERSION = "3.3.7",
                                n.TRANSITION_DURATION = 350,
                                n.DEFAULTS = {
                                    toggle: !0
                                },
                                n.prototype.dimension = function() {
                                    return this.$element.hasClass("width") ? "width": "height"
                                },
                                n.prototype.show = function() {
                                    if (!this.transitioning && !this.$element.hasClass("in")) {
                                        var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                                        if (! (o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                                            var a = t.Event("show.bs.collapse");
                                            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                                                o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                                                var s = this.dimension();
                                                this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                                                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                                                this.transitioning = 1;
                                                var r = function() {
                                                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                                                    this.transitioning = 0,
                                                    this.$element.trigger("shown.bs.collapse")
                                                };
                                                if (!t.support.transition) return r.call(this);
                                                var l = t.camelCase(["scroll", s].join("-"));
                                                this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                                            }
                                        }
                                    }
                                },
                                n.prototype.hide = function() {
                                    if (!this.transitioning && this.$element.hasClass("in")) {
                                        var e = t.Event("hide.bs.collapse");
                                        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                                            var i = this.dimension();
                                            this.$element[i](this.$element[i]())[0].offsetHeight,
                                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                                            this.transitioning = 1;
                                            var o = function() {
                                                this.transitioning = 0,
                                                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                            };
                                            if (!t.support.transition) return o.call(this);
                                            this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION)
                                        }
                                    }
                                },
                                n.prototype.toggle = function() {
                                    this[this.$element.hasClass("in") ? "hide": "show"]()
                                },
                                n.prototype.getParent = function() {
                                    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                                        var o = t(n);
                                        this.addAriaAndCollapsedClass(e(o), o)
                                    },
                                    this)).end()
                                },
                                n.prototype.addAriaAndCollapsedClass = function(t, e) {
                                    var i = t.hasClass("in");
                                    t.attr("aria-expanded", i),
                                    e.toggleClass("collapsed", !i).attr("aria-expanded", i)
                                };
                                var o = t.fn.collapse;
                                t.fn.collapse = i,
                                t.fn.collapse.Constructor = n,
                                t.fn.collapse.noConflict = function() {
                                    return t.fn.collapse = o,
                                    this
                                },
                                t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
                                function(n) {
                                    var o = t(this);
                                    o.attr("data-target") || n.preventDefault();
                                    var a = e(o),
                                    s = a.data("bs.collapse"),
                                    r = s ? "toggle": o.data();
                                    i.call(a, r)
                                })
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    var i = e.attr("data-target");
                                    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
                                    var n = i && t(i);
                                    return n && n.length ? n: e.parent()
                                }
                                function i(i) {
                                    i && 3 === i.which || (t(o).remove(), t(a).each(function() {
                                        var n = t(this),
                                        o = e(n),
                                        a = {
                                            relatedTarget: this
                                        };
                                        o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", a)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
                                    }))
                                }
                                function n(e) {
                                    return this.each(function() {
                                        var i = t(this),
                                        n = i.data("bs.dropdown");
                                        n || i.data("bs.dropdown", n = new s(this)),
                                        "string" == typeof e && n[e].call(i)
                                    })
                                }
                                var o = ".dropdown-backdrop",
                                a = '[data-toggle="dropdown"]',
                                s = function(e) {
                                    t(e).on("click.bs.dropdown", this.toggle)
                                };
                                s.VERSION = "3.3.7",
                                s.prototype.toggle = function(n) {
                                    var o = t(this);
                                    if (!o.is(".disabled, :disabled")) {
                                        var a = e(o),
                                        s = a.hasClass("open");
                                        if (i(), !s) {
                                            "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                                            var r = {
                                                relatedTarget: this
                                            };
                                            if (a.trigger(n = t.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
                                            o.trigger("focus").attr("aria-expanded", "true"),
                                            a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
                                        }
                                        return ! 1
                                    }
                                },
                                s.prototype.keydown = function(i) {
                                    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                                        var n = t(this);
                                        if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                                            var o = e(n),
                                            s = o.hasClass("open");
                                            if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && o.find(a).trigger("focus"),
                                            n.trigger("click");
                                            var r = o.find(".dropdown-menu li:not(.disabled):visible a");
                                            if (r.length) {
                                                var l = r.index(i.target);
                                                38 == i.which && l > 0 && l--,
                                                40 == i.which && l < r.length - 1 && l++,
                                                ~l || (l = 0),
                                                r.eq(l).trigger("focus")
                                            }
                                        }
                                    }
                                };
                                var r = t.fn.dropdown;
                                t.fn.dropdown = n,
                                t.fn.dropdown.Constructor = s,
                                t.fn.dropdown.noConflict = function() {
                                    return t.fn.dropdown = r,
                                    this
                                },
                                t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form",
                                function(t) {
                                    t.stopPropagation()
                                }).on("click.bs.dropdown.data-api", a, s.prototype.toggle).on("keydown.bs.dropdown.data-api", a, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e, n) {
                                    return this.each(function() {
                                        var o = t(this),
                                        a = o.data("bs.modal"),
                                        s = t.extend({},
                                        i.DEFAULTS, o.data(), "object" == typeof e && e);
                                        a || o.data("bs.modal", a = new i(this, s)),
                                        "string" == typeof e ? a[e](n) : s.show && a.show(n)
                                    })
                                }
                                var i = function(e, i) {
                                    this.options = i,
                                    this.$body = t(document.body),
                                    this.$element = t(e),
                                    this.$dialog = this.$element.find(".modal-dialog"),
                                    this.$backdrop = null,
                                    this.isShown = null,
                                    this.originalBodyPad = null,
                                    this.scrollbarWidth = 0,
                                    this.ignoreBackdropClick = !1,
                                    this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                                        this.$element.trigger("loaded.bs.modal")
                                    },
                                    this))
                                };
                                i.VERSION = "3.3.7",
                                i.TRANSITION_DURATION = 300,
                                i.BACKDROP_TRANSITION_DURATION = 150,
                                i.DEFAULTS = {
                                    backdrop: !0,
                                    keyboard: !0,
                                    show: !0
                                },
                                i.prototype.toggle = function(t) {
                                    return this.isShown ? this.hide() : this.show(t)
                                },
                                i.prototype.show = function(e) {
                                    var n = this,
                                    o = t.Event("show.bs.modal", {
                                        relatedTarget: e
                                    });
                                    this.$element.trigger(o),
                                    this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal",
                                    function() {
                                        n.$element.one("mouseup.dismiss.bs.modal",
                                        function(e) {
                                            t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                                        })
                                    }), this.backdrop(function() {
                                        var o = t.support.transition && n.$element.hasClass("fade");
                                        n.$element.parent().length || n.$element.appendTo(n.$body),
                                        n.$element.show().scrollTop(0),
                                        n.adjustDialog(),
                                        o && n.$element[0].offsetWidth,
                                        n.$element.addClass("in"),
                                        n.enforceFocus();
                                        var a = t.Event("shown.bs.modal", {
                                            relatedTarget: e
                                        });
                                        o ? n.$dialog.one("bsTransitionEnd",
                                        function() {
                                            n.$element.trigger("focus").trigger(a)
                                        }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(a)
                                    }))
                                },
                                i.prototype.hide = function(e) {
                                    e && e.preventDefault(),
                                    e = t.Event("hide.bs.modal"),
                                    this.$element.trigger(e),
                                    this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
                                },
                                i.prototype.enforceFocus = function() {
                                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                                        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                                    },
                                    this))
                                },
                                i.prototype.escape = function() {
                                    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                                        27 == t.which && this.hide()
                                    },
                                    this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                                },
                                i.prototype.resize = function() {
                                    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
                                },
                                i.prototype.hideModal = function() {
                                    var t = this;
                                    this.$element.hide(),
                                    this.backdrop(function() {
                                        t.$body.removeClass("modal-open"),
                                        t.resetAdjustments(),
                                        t.resetScrollbar(),
                                        t.$element.trigger("hidden.bs.modal")
                                    })
                                },
                                i.prototype.removeBackdrop = function() {
                                    this.$backdrop && this.$backdrop.remove(),
                                    this.$backdrop = null
                                },
                                i.prototype.backdrop = function(e) {
                                    var n = this,
                                    o = this.$element.hasClass("fade") ? "fade": "";
                                    if (this.isShown && this.options.backdrop) {
                                        var a = t.support.transition && o;
                                        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                                            if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                                            t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                                        },
                                        this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                                        a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
                                    } else if (!this.isShown && this.$backdrop) {
                                        this.$backdrop.removeClass("in");
                                        var s = function() {
                                            n.removeBackdrop(),
                                            e && e()
                                        };
                                        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
                                    } else e && e()
                                },
                                i.prototype.handleUpdate = function() {
                                    this.adjustDialog()
                                },
                                i.prototype.adjustDialog = function() {
                                    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                                    this.$element.css({
                                        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth: "",
                                        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth: ""
                                    })
                                },
                                i.prototype.resetAdjustments = function() {
                                    this.$element.css({
                                        paddingLeft: "",
                                        paddingRight: ""
                                    })
                                },
                                i.prototype.checkScrollbar = function() {
                                    var t = window.innerWidth;
                                    if (!t) {
                                        var e = document.documentElement.getBoundingClientRect();
                                        t = e.right - Math.abs(e.left)
                                    }
                                    this.bodyIsOverflowing = document.body.clientWidth < t,
                                    this.scrollbarWidth = this.measureScrollbar()
                                },
                                i.prototype.setScrollbar = function() {
                                    var t = parseInt(this.$body.css("padding-right") || 0, 10);
                                    this.originalBodyPad = document.body.style.paddingRight || "",
                                    this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
                                },
                                i.prototype.resetScrollbar = function() {
                                    this.$body.css("padding-right", this.originalBodyPad)
                                },
                                i.prototype.measureScrollbar = function() {
                                    var t = document.createElement("div");
                                    t.className = "modal-scrollbar-measure",
                                    this.$body.append(t);
                                    var e = t.offsetWidth - t.clientWidth;
                                    return this.$body[0].removeChild(t),
                                    e
                                };
                                var n = t.fn.modal;
                                t.fn.modal = e,
                                t.fn.modal.Constructor = i,
                                t.fn.modal.noConflict = function() {
                                    return t.fn.modal = n,
                                    this
                                },
                                t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
                                function(i) {
                                    var n = t(this),
                                    o = n.attr("href"),
                                    a = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                                    s = a.data("bs.modal") ? "toggle": t.extend({
                                        remote: !/#/.test(o) && o
                                    },
                                    a.data(), n.data());
                                    n.is("a") && i.preventDefault(),
                                    a.one("show.bs.modal",
                                    function(t) {
                                        t.isDefaultPrevented() || a.one("hidden.bs.modal",
                                        function() {
                                            n.is(":visible") && n.trigger("focus")
                                        })
                                    }),
                                    e.call(a, s, this)
                                })
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    return this.each(function() {
                                        var n = t(this),
                                        o = n.data("bs.tooltip"),
                                        a = "object" == typeof e && e; ! o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, a)), "string" == typeof e && o[e]())
                                    })
                                }
                                var i = function(t, e) {
                                    this.type = null,
                                    this.options = null,
                                    this.enabled = null,
                                    this.timeout = null,
                                    this.hoverState = null,
                                    this.$element = null,
                                    this.inState = null,
                                    this.init("tooltip", t, e)
                                };
                                i.VERSION = "3.3.7",
                                i.TRANSITION_DURATION = 150,
                                i.DEFAULTS = {
                                    animation: !0,
                                    placement: "top",
                                    selector: !1,
                                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                                    trigger: "hover focus",
                                    title: "",
                                    delay: 0,
                                    html: !1,
                                    container: !1,
                                    viewport: {
                                        selector: "body",
                                        padding: 0
                                    }
                                },
                                i.prototype.init = function(e, i, n) {
                                    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                                        click: !1,
                                        hover: !1,
                                        focus: !1
                                    },
                                    this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                                    for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
                                        var s = o[a];
                                        if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                                        else if ("manual" != s) {
                                            var r = "hover" == s ? "mouseenter": "focusin",
                                            l = "hover" == s ? "mouseleave": "focusout";
                                            this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                                            this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                                        }
                                    }
                                    this.options.selector ? this._options = t.extend({},
                                    this.options, {
                                        trigger: "manual",
                                        selector: ""
                                    }) : this.fixTitle()
                                },
                                i.prototype.getDefaults = function() {
                                    return i.DEFAULTS
                                },
                                i.prototype.getOptions = function(e) {
                                    return e = t.extend({},
                                    this.getDefaults(), this.$element.data(), e),
                                    e.delay && "number" == typeof e.delay && (e.delay = {
                                        show: e.delay,
                                        hide: e.delay
                                    }),
                                    e
                                },
                                i.prototype.getDelegateOptions = function() {
                                    var e = {},
                                    i = this.getDefaults();
                                    return this._options && t.each(this._options,
                                    function(t, n) {
                                        i[t] != n && (e[t] = n)
                                    }),
                                    e
                                },
                                i.prototype.enter = function(e) {
                                    var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
                                    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
                                    e instanceof t.Event && (i.inState["focusin" == e.type ? "focus": "hover"] = !0),
                                    i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
                                        "in" == i.hoverState && i.show()
                                    },
                                    i.options.delay.show)) : i.show())
                                },
                                i.prototype.isInStateTrue = function() {
                                    for (var t in this.inState) if (this.inState[t]) return ! 0;
                                    return ! 1
                                },
                                i.prototype.leave = function(e) {
                                    var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
                                    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus": "hover"] = !1), !i.isInStateTrue()) {
                                        if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
                                        i.timeout = setTimeout(function() {
                                            "out" == i.hoverState && i.hide()
                                        },
                                        i.options.delay.hide)
                                    }
                                },
                                i.prototype.show = function() {
                                    var e = t.Event("show.bs." + this.type);
                                    if (this.hasContent() && this.enabled) {
                                        this.$element.trigger(e);
                                        var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                                        if (e.isDefaultPrevented() || !n) return;
                                        var o = this,
                                        a = this.tip(),
                                        s = this.getUID(this.type);
                                        this.setContent(),
                                        a.attr("id", s),
                                        this.$element.attr("aria-describedby", s),
                                        this.options.animation && a.addClass("fade");
                                        var r = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                                        l = /\s?auto?\s?/i,
                                        d = l.test(r);
                                        d && (r = r.replace(l, "") || "top"),
                                        a.detach().css({
                                            top: 0,
                                            left: 0,
                                            display: "block"
                                        }).addClass(r).data("bs." + this.type, this),
                                        this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element),
                                        this.$element.trigger("inserted.bs." + this.type);
                                        var c = this.getPosition(),
                                        u = a[0].offsetWidth,
                                        h = a[0].offsetHeight;
                                        if (d) {
                                            var p = r,
                                            f = this.getPosition(this.$viewport);
                                            r = "bottom" == r && c.bottom + h > f.bottom ? "top": "top" == r && c.top - h < f.top ? "bottom": "right" == r && c.right + u > f.width ? "left": "left" == r && c.left - u < f.left ? "right": r,
                                            a.removeClass(p).addClass(r)
                                        }
                                        var m = this.getCalculatedOffset(r, c, u, h);
                                        this.applyPlacement(m, r);
                                        var g = function() {
                                            var t = o.hoverState;
                                            o.$element.trigger("shown.bs." + o.type),
                                            o.hoverState = null,
                                            "out" == t && o.leave(o)
                                        };
                                        t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
                                    }
                                },
                                i.prototype.applyPlacement = function(e, i) {
                                    var n = this.tip(),
                                    o = n[0].offsetWidth,
                                    a = n[0].offsetHeight,
                                    s = parseInt(n.css("margin-top"), 10),
                                    r = parseInt(n.css("margin-left"), 10);
                                    isNaN(s) && (s = 0),
                                    isNaN(r) && (r = 0),
                                    e.top += s,
                                    e.left += r,
                                    t.offset.setOffset(n[0], t.extend({
                                        using: function(t) {
                                            n.css({
                                                top: Math.round(t.top),
                                                left: Math.round(t.left)
                                            })
                                        }
                                    },
                                    e), 0),
                                    n.addClass("in");
                                    var l = n[0].offsetWidth,
                                    d = n[0].offsetHeight;
                                    "top" == i && d != a && (e.top = e.top + a - d);
                                    var c = this.getViewportAdjustedDelta(i, e, l, d);
                                    c.left ? e.left += c.left: e.top += c.top;
                                    var u = /top|bottom/.test(i),
                                    h = u ? 2 * c.left - o + l: 2 * c.top - a + d,
                                    p = u ? "offsetWidth": "offsetHeight";
                                    n.offset(e),
                                    this.replaceArrow(h, n[0][p], u)
                                },
                                i.prototype.replaceArrow = function(t, e, i) {
                                    this.arrow().css(i ? "left": "top", 50 * (1 - t / e) + "%").css(i ? "top": "left", "")
                                },
                                i.prototype.setContent = function() {
                                    var t = this.tip(),
                                    e = this.getTitle();
                                    t.find(".tooltip-inner")[this.options.html ? "html": "text"](e),
                                    t.removeClass("fade in top bottom left right")
                                },
                                i.prototype.hide = function(e) {
                                    function n() {
                                        "in" != o.hoverState && a.detach(),
                                        o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type),
                                        e && e()
                                    }
                                    var o = this,
                                    a = t(this.$tip),
                                    s = t.Event("hide.bs." + this.type);
                                    if (this.$element.trigger(s), !s.isDefaultPrevented()) return a.removeClass("in"),
                                    t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(),
                                    this.hoverState = null,
                                    this
                                },
                                i.prototype.fixTitle = function() {
                                    var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
                                },
                                i.prototype.hasContent = function() {
                                    return this.getTitle()
                                },
                                i.prototype.getPosition = function(e) {
                                    e = e || this.$element;
                                    var i = e[0],
                                    n = "BODY" == i.tagName,
                                    o = i.getBoundingClientRect();
                                    null == o.width && (o = t.extend({},
                                    o, {
                                        width: o.right - o.left,
                                        height: o.bottom - o.top
                                    }));
                                    var a = window.SVGElement && i instanceof window.SVGElement,
                                    s = n ? {
                                        top: 0,
                                        left: 0
                                    }: a ? null: e.offset(),
                                    r = {
                                        scroll: n ? document.documentElement.scrollTop || document.body.scrollTop: e.scrollTop()
                                    },
                                    l = n ? {
                                        width: t(window).width(),
                                        height: t(window).height()
                                    }: null;
                                    return t.extend({},
                                    o, r, l, s)
                                },
                                i.prototype.getCalculatedOffset = function(t, e, i, n) {
                                    return "bottom" == t ? {
                                        top: e.top + e.height,
                                        left: e.left + e.width / 2 - i / 2
                                    }: "top" == t ? {
                                        top: e.top - n,
                                        left: e.left + e.width / 2 - i / 2
                                    }: "left" == t ? {
                                        top: e.top + e.height / 2 - n / 2,
                                        left: e.left - i
                                    }: {
                                        top: e.top + e.height / 2 - n / 2,
                                        left: e.left + e.width
                                    }
                                },
                                i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
                                    var o = {
                                        top: 0,
                                        left: 0
                                    };
                                    if (!this.$viewport) return o;
                                    var a = this.options.viewport && this.options.viewport.padding || 0,
                                    s = this.getPosition(this.$viewport);
                                    if (/right|left/.test(t)) {
                                        var r = e.top - a - s.scroll,
                                        l = e.top + a - s.scroll + n;
                                        r < s.top ? o.top = s.top - r: l > s.top + s.height && (o.top = s.top + s.height - l)
                                    } else {
                                        var d = e.left - a,
                                        c = e.left + a + i;
                                        d < s.left ? o.left = s.left - d: c > s.right && (o.left = s.left + s.width - c)
                                    }
                                    return o
                                },
                                i.prototype.getTitle = function() {
                                    var t = this.$element,
                                    e = this.options;
                                    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
                                },
                                i.prototype.getUID = function(t) {
                                    do {
                                        t += ~~ (1e6 * Math.random())
                                    } while ( document . getElementById ( t ));
                                    return t
                                },
                                i.prototype.tip = function() {
                                    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                                    return this.$tip
                                },
                                i.prototype.arrow = function() {
                                    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                                },
                                i.prototype.enable = function() {
                                    this.enabled = !0
                                },
                                i.prototype.disable = function() {
                                    this.enabled = !1
                                },
                                i.prototype.toggleEnabled = function() {
                                    this.enabled = !this.enabled
                                },
                                i.prototype.toggle = function(e) {
                                    var i = this;
                                    e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))),
                                    e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
                                },
                                i.prototype.destroy = function() {
                                    var t = this;
                                    clearTimeout(this.timeout),
                                    this.hide(function() {
                                        t.$element.off("." + t.type).removeData("bs." + t.type),
                                        t.$tip && t.$tip.detach(),
                                        t.$tip = null,
                                        t.$arrow = null,
                                        t.$viewport = null,
                                        t.$element = null
                                    })
                                };
                                var n = t.fn.tooltip;
                                t.fn.tooltip = e,
                                t.fn.tooltip.Constructor = i,
                                t.fn.tooltip.noConflict = function() {
                                    return t.fn.tooltip = n,
                                    this
                                }
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    return this.each(function() {
                                        var n = t(this),
                                        o = n.data("bs.popover"),
                                        a = "object" == typeof e && e; ! o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, a)), "string" == typeof e && o[e]())
                                    })
                                }
                                var i = function(t, e) {
                                    this.init("popover", t, e)
                                };
                                if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
                                i.VERSION = "3.3.7",
                                i.DEFAULTS = t.extend({},
                                t.fn.tooltip.Constructor.DEFAULTS, {
                                    placement: "right",
                                    trigger: "click",
                                    content: "",
                                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                                }),
                                i.prototype = t.extend({},
                                t.fn.tooltip.Constructor.prototype),
                                i.prototype.constructor = i,
                                i.prototype.getDefaults = function() {
                                    return i.DEFAULTS
                                },
                                i.prototype.setContent = function() {
                                    var t = this.tip(),
                                    e = this.getTitle(),
                                    i = this.getContent();
                                    t.find(".popover-title")[this.options.html ? "html": "text"](e),
                                    t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html": "append": "text"](i),
                                    t.removeClass("fade top bottom left right in"),
                                    t.find(".popover-title").html() || t.find(".popover-title").hide()
                                },
                                i.prototype.hasContent = function() {
                                    return this.getTitle() || this.getContent()
                                },
                                i.prototype.getContent = function() {
                                    var t = this.$element,
                                    e = this.options;
                                    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
                                },
                                i.prototype.arrow = function() {
                                    return this.$arrow = this.$arrow || this.tip().find(".arrow")
                                };
                                var n = t.fn.popover;
                                t.fn.popover = e,
                                t.fn.popover.Constructor = i,
                                t.fn.popover.noConflict = function() {
                                    return t.fn.popover = n,
                                    this
                                }
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(i, n) {
                                    this.$body = t(document.body),
                                    this.$scrollElement = t(t(i).is(document.body) ? window: i),
                                    this.options = t.extend({},
                                    e.DEFAULTS, n),
                                    this.selector = (this.options.target || "") + " .nav li > a",
                                    this.offsets = [],
                                    this.targets = [],
                                    this.activeTarget = null,
                                    this.scrollHeight = 0,
                                    this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
                                    this.refresh(),
                                    this.process()
                                }
                                function i(i) {
                                    return this.each(function() {
                                        var n = t(this),
                                        o = n.data("bs.scrollspy"),
                                        a = "object" == typeof i && i;
                                        o || n.data("bs.scrollspy", o = new e(this, a)),
                                        "string" == typeof i && o[i]()
                                    })
                                }
                                e.VERSION = "3.3.7",
                                e.DEFAULTS = {
                                    offset: 10
                                },
                                e.prototype.getScrollHeight = function() {
                                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                                },
                                e.prototype.refresh = function() {
                                    var e = this,
                                    i = "offset",
                                    n = 0;
                                    this.offsets = [],
                                    this.targets = [],
                                    this.scrollHeight = this.getScrollHeight(),
                                    t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()),
                                    this.$body.find(this.selector).map(function() {
                                        var e = t(this),
                                        o = e.data("target") || e.attr("href"),
                                        a = /^#./.test(o) && t(o);
                                        return a && a.length && a.is(":visible") && [[a[i]().top + n, o]] || null
                                    }).sort(function(t, e) {
                                        return t[0] - e[0]
                                    }).each(function() {
                                        e.offsets.push(this[0]),
                                        e.targets.push(this[1])
                                    })
                                },
                                e.prototype.process = function() {
                                    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                                    i = this.getScrollHeight(),
                                    n = this.options.offset + i - this.$scrollElement.height(),
                                    o = this.offsets,
                                    a = this.targets,
                                    s = this.activeTarget;
                                    if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = a[a.length - 1]) && this.activate(t);
                                    if (s && e < o[0]) return this.activeTarget = null,
                                    this.clear();
                                    for (t = o.length; t--;) s != a[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(a[t])
                                },
                                e.prototype.activate = function(e) {
                                    this.activeTarget = e,
                                    this.clear();
                                    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                                    n = t(i).parents("li").addClass("active");
                                    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
                                    n.trigger("activate.bs.scrollspy")
                                },
                                e.prototype.clear = function() {
                                    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                                };
                                var n = t.fn.scrollspy;
                                t.fn.scrollspy = i,
                                t.fn.scrollspy.Constructor = e,
                                t.fn.scrollspy.noConflict = function() {
                                    return t.fn.scrollspy = n,
                                    this
                                },
                                t(window).on("load.bs.scrollspy.data-api",
                                function() {
                                    t('[data-spy="scroll"]').each(function() {
                                        var e = t(this);
                                        i.call(e, e.data())
                                    })
                                })
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    return this.each(function() {
                                        var n = t(this),
                                        o = n.data("bs.tab");
                                        o || n.data("bs.tab", o = new i(this)),
                                        "string" == typeof e && o[e]()
                                    })
                                }
                                var i = function(e) {
                                    this.element = t(e)
                                };
                                i.VERSION = "3.3.7",
                                i.TRANSITION_DURATION = 150,
                                i.prototype.show = function() {
                                    var e = this.element,
                                    i = e.closest("ul:not(.dropdown-menu)"),
                                    n = e.data("target");
                                    if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                                        var o = i.find(".active:last a"),
                                        a = t.Event("hide.bs.tab", {
                                            relatedTarget: e[0]
                                        }),
                                        s = t.Event("show.bs.tab", {
                                            relatedTarget: o[0]
                                        });
                                        if (o.trigger(a), e.trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                            var r = t(n);
                                            this.activate(e.closest("li"), i),
                                            this.activate(r, r.parent(),
                                            function() {
                                                o.trigger({
                                                    type: "hidden.bs.tab",
                                                    relatedTarget: e[0]
                                                }),
                                                e.trigger({
                                                    type: "shown.bs.tab",
                                                    relatedTarget: o[0]
                                                })
                                            })
                                        }
                                    }
                                },
                                i.prototype.activate = function(e, n, o) {
                                    function a() {
                                        s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                                        e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                                        r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
                                        e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                                        o && o()
                                    }
                                    var s = n.find("> .active"),
                                    r = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
                                    s.length && r ? s.one("bsTransitionEnd", a).emulateTransitionEnd(i.TRANSITION_DURATION) : a(),
                                    s.removeClass("in")
                                };
                                var n = t.fn.tab;
                                t.fn.tab = e,
                                t.fn.tab.Constructor = i,
                                t.fn.tab.noConflict = function() {
                                    return t.fn.tab = n,
                                    this
                                };
                                var o = function(i) {
                                    i.preventDefault(),
                                    e.call(t(this), "show")
                                };
                                t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
                            } (jQuery),
                            function(t) {
                                "use strict";
                                function e(e) {
                                    return this.each(function() {
                                        var n = t(this),
                                        o = n.data("bs.affix"),
                                        a = "object" == typeof e && e;
                                        o || n.data("bs.affix", o = new i(this, a)),
                                        "string" == typeof e && o[e]()
                                    })
                                }
                                var i = function(e, n) {
                                    this.options = t.extend({},
                                    i.DEFAULTS, n),
                                    this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
                                    this.$element = t(e),
                                    this.affixed = null,
                                    this.unpin = null,
                                    this.pinnedOffset = null,
                                    this.checkPosition()
                                };
                                i.VERSION = "3.3.7",
                                i.RESET = "affix affix-top affix-bottom",
                                i.DEFAULTS = {
                                    offset: 0,
                                    target: window
                                },
                                i.prototype.getState = function(t, e, i, n) {
                                    var o = this.$target.scrollTop(),
                                    a = this.$element.offset(),
                                    s = this.$target.height();
                                    if (null != i && "top" == this.affixed) return o < i && "top";
                                    if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= a.top) && "bottom": !(o + s <= t - n) && "bottom";
                                    var r = null == this.affixed,
                                    l = r ? o: a.top,
                                    d = r ? s: e;
                                    return null != i && o <= i ? "top": null != n && l + d >= t - n && "bottom"
                                },
                                i.prototype.getPinnedOffset = function() {
                                    if (this.pinnedOffset) return this.pinnedOffset;
                                    this.$element.removeClass(i.RESET).addClass("affix");
                                    var t = this.$target.scrollTop(),
                                    e = this.$element.offset();
                                    return this.pinnedOffset = e.top - t
                                },
                                i.prototype.checkPositionWithEventLoop = function() {
                                    setTimeout(t.proxy(this.checkPosition, this), 1)
                                },
                                i.prototype.checkPosition = function() {
                                    if (this.$element.is(":visible")) {
                                        var e = this.$element.height(),
                                        n = this.options.offset,
                                        o = n.top,
                                        a = n.bottom,
                                        s = Math.max(t(document).height(), t(document.body).height());
                                        "object" != typeof n && (a = o = n),
                                        "function" == typeof o && (o = n.top(this.$element)),
                                        "function" == typeof a && (a = n.bottom(this.$element));
                                        var r = this.getState(s, e, o, a);
                                        if (this.affixed != r) {
                                            null != this.unpin && this.$element.css("top", "");
                                            var l = "affix" + (r ? "-" + r: ""),
                                            d = t.Event(l + ".bs.affix");
                                            if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                                            this.affixed = r,
                                            this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
                                            this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                                        }
                                        "bottom" == r && this.$element.offset({
                                            top: s - e - a
                                        })
                                    }
                                };
                                var n = t.fn.affix;
                                t.fn.affix = e,
                                t.fn.affix.Constructor = i,
                                t.fn.affix.noConflict = function() {
                                    return t.fn.affix = n,
                                    this
                                },
                                t(window).on("load",
                                function() {
                                    t('[data-spy="affix"]').each(function() {
                                        var i = t(this),
                                        n = i.data();
                                        n.offset = n.offset || {},
                                        null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
                                        null != n.offsetTop && (n.offset.top = n.offsetTop),
                                        e.call(i, n)
                                    })
                                })
                            } (jQuery)
                        },
                        {}],
                        2 : [function(t, e, i) {
                            t("../../../Themer/src/js/jquery.lazyload"),
                            t("../../../Themer/src/js/jquery.fluidbox"),
                            function(t) {
                                function e() {
                                    t(".bdshare_popup_box").length ? t(".bdshare_popup_box").addClass("j-share") : setTimeout(function() {
                                        e()
                                    },
                                    3)
                                }
                                var i = t(window),
                                n = navigator.userAgent.toLowerCase(),
                                o = 1,
                                a = [],
                                s = void 0 !== _wpcom_js.webp && _wpcom_js.webp ? _wpcom_js.webp: null; (t(".wpcom-user-list").length || t(".wpcom-member").length) && (o = 0),
                                "Microsoft Internet Explorer" == navigator.appName && "9." == navigator.appVersion.match(/9./i) && (o = 0),
                                o && void 0 !== _wpcom_js.fluidbox && 1 == _wpcom_js.fluidbox && t(".entry-content img").each(function(e, i) {
                                    var o = t(i),
                                    s = o.parent(),
                                    r = o.data("original");
                                    if (r = r || o.attr("src"), r.match(/^\/\//) && (r = window.location.protocol + r), "a" === s.prop("tagName").toLowerCase()) {
                                        var l = s.attr("href"); (l == r || l.match(/.*(\.png|\.jpg|\.jpeg|\.gif|\.webp|\.bmp)$/i)) && (s.attr("data-fluidbox", !0).attr("data-fluidbox-loader", !0).addClass("fluidbox"), "micromessenger" == n.match(/MicroMessenger/i) && a.push(r))
                                    } else o.replaceWith('<a class="fluidbox" href="' + r + '" data-fluidbox data-fluidbox-loader="true">' + i.outerHTML + "</a>"),
                                    "micromessenger" == n.match(/MicroMessenger/i) && a.push(r)
                                }),
                                t(document).ready(function() {
                                    var e = t(".entry-content a[data-fluidbox]");
                                    if (e.length && (e.find("noscript").remove(), e.fluidbox({
                                        stackIndex: 9999,
                                        stackIndexDelta: 9998
                                    })), t(".j-lazy").lazyload({
                                        webp: s,
                                        threshold: -30,
                                        effect: "fadeIn"
                                    }), t(".wpcom-adv-menu").each(function(e, i) {
                                        var n = t(i);
                                        n.find(">.menu-item-style").each(function(e, i) {
                                            var o = t(i),
                                            a = o.find(">.menu-item-wrap"),
                                            s = o.position().left,
                                            r = a.outerWidth();
                                            s + r > n.outerWidth() && (s = n.outerWidth() - r),
                                            a.css("left", s)
                                        })
                                    }), t(document).on("click", 'a[href^="#"]',
                                    function(e) {
                                        var i = t(this).attr("role");
                                        if ("tab" != i && "button" != i && (e.preventDefault(), this.hash)) {
                                            var n = t(this.hash).length ? t(this.hash).offset().top: 0;
                                            n = n - t("header.header").outerHeight() - 10,
                                            n = t("#wpadminbar").length ? n - t("#wpadminbar").outerHeight() : n,
                                            n = n < 0 ? 0 : n,
                                            t("html, body").animate({
                                                scrollTop: n
                                            },
                                            400)
                                        }
                                    }), navigator.userAgent.match(/(iPhone|iPod|ios|iPad|Android|Windows Phone|BlackBerry)/i)) {
                                        if (void 0 !== _wpcom_js.xzh_head && 1 == _wpcom_js.xzh_head) {
                                            var i = t(t("header.header").length ? "header.header": "header#header");
                                            i.before('<div class="xzh-head-wrap" style="padding-left:15px;padding-right:15px;background: #fff;"><div id="j-xzh-head" style="padding-left:15px;padding-right:15px;"></div></div>'),
                                            cambrian.bar({
                                                data: {
                                                    type: "head",
                                                    anchor: document.getElementById("j-xzh-head")
                                                }
                                            }),
                                            i.css("border-top", "1px solid rgba(0,0,0,.05)")
                                        }
                                        t("#xhz-render-body").length && cambrian.bar({
                                            data: {
                                                type: "tail",
                                                anchor: document.getElementById("xhz-render-body")
                                            }
                                        })
                                    }
                                }),
                                t(document).on("DOMNodeInserted", ".widget_shopping_cart_content,.woocommerce-cart-form",
                                function() {
                                    t(this).find(".j-lazy").lazyload({
                                        webp: s,
                                        threshold: -50,
                                        effect: "fadeIn"
                                    }),
                                    t(window).trigger("scroll")
                                }),
                                t("body").on("click", ".navbar-toggle",
                                function() {
                                    t("body").toggleClass("navbar-on"),
                                    0 == t(".navbar-on-shadow").length && t("#wrap").append('<div class="navbar-on-shadow"></div>'),
                                    setTimeout(function() {
                                        t(window).trigger("scroll")
                                    },
                                    500)
                                }).on("click", ".m-dropdown",
                                function() {
                                    var e = t(this).parent();
                                    e.find("> .dropdown-menu").slideToggle("fast"),
                                    e.toggleClass("dropdown-open"),
                                    t(window).trigger("scroll")
                                }),
                                t("#wrap").on("click", ".navbar-on-shadow",
                                function() {
                                    t(".navbar-toggle").trigger("click")
                                }),
                                t(".woocommerce").off("click.quantity").on("click.quantity", ".qty-down,.qty-up",
                                function() {
                                    var e = t(this).hasClass("qty-down") ? 0 : 1,
                                    i = t(this).parent().find(".qty"),
                                    n = i.val();
                                    n = e ? ++n: --n,
                                    n = i.attr("min") && n < i.attr("min") ? i.attr("min") : n,
                                    n = i.attr("max") && n > i.attr("max") ? i.attr("max") : n,
                                    i.val(n).trigger("change")
                                }).off("blur.quantity").on("blur.quantity", ".qty",
                                function() {
                                    var e = t(this),
                                    i = e.val();
                                    i = e.attr("min") && i < e.attr("min") ? e.attr("min") : i,
                                    i = e.attr("max") && i > e.attr("max") ? e.attr("max") : i,
                                    e.val(i)
                                });
                                var r, l;
                                i.scroll(function() {
                                    i.scrollTop() > 100 ? t("#j-top").fadeIn("slow") : t("#j-top").fadeOut("slow")
                                }),
                                t(".action").on("mouseenter", ".wechat",
                                function() {
                                    clearTimeout(l),
                                    t(".contact-wrap").hide(),
                                    t(".wechat-wrap").show()
                                }).on("mouseleave", ".wechat",
                                function() {
                                    l = setTimeout(function() {
                                        t(".wechat-wrap").hide()
                                    },
                                    300)
                                }).on("mouseenter", ".contact",
                                function() {
                                    clearTimeout(r),
                                    t(".wechat-wrap").hide(),
                                    t(".contact-wrap").show()
                                }).on("mouseleave", ".contact",
                                function() {
                                    r = setTimeout(function() {
                                        t(".contact-wrap").hide()
                                    },
                                    300)
                                }).on("click", "#j-top",
                                function() {
                                    t("html, body").animate({
                                        scrollTop: 0
                                    },
                                    "slow")
                                }).on("mouseenter", ".bds_more",
                                function() {
                                    t(this).hasClass("share") ? t(".bdshare_popup_box").length ? t(".bdshare_popup_box").addClass("j-share") : setTimeout(function() {
                                        e()
                                    },
                                    15) : t(".bdshare_popup_box").removeClass("j-share")
                                }),
                                window.setup_share = function() {
                                    t(document).on("click", ".a-box.share",
                                    function(e) {
                                        e.preventDefault(),
                                        t(".at-svc-compact .at-icon-wrapper").trigger("click")
                                    })
                                },
                                function() {
                                    if ("micromessenger" == n.match(/MicroMessenger/i)) {
                                        var e, i = location.href.split("#")[0],
                                        o = document.querySelector("body").classList,
                                        r = 0;
                                        if (o.contains("page")) for (var l = 0; l < o.length; l++)(e = o[l].match(/page-id-(\d+)$/)) && (r = e[1]);
                                        else if (o.contains("single")) for (var l = 0; l < o.length; l++)(e = o[l].match(/postid-(\d+)$/)) && (r = e[1]);
                                        t.ajax({
                                            url: _wpcom_js.ajaxurl,
                                            type: "POST",
                                            data: {
                                                action: "wpcom_wx_config",
                                                url: encodeURIComponent(i),
                                                ID: r
                                            },
                                            dataType: "json",
                                            success: function(e) {
                                                if (e.signature) {
                                                    var n = e.thumb;
                                                    n.match(/^\/\//) && (n = window.location.protocol + n);
                                                    var o = document.title,
                                                    r = t("meta[name=description]").attr("content");
                                                    r = r || e.desc;
                                                    var l = document.createElement("script");
                                                    l.src = "//res.wx.qq.com/open/js/jweixin-1.2.0.js",
                                                    l.onload = function() {
                                                        window.wx.config({
                                                            debug: !1,
                                                            appId: e.appId,
                                                            timestamp: e.timestamp,
                                                            nonceStr: e.noncestr,
                                                            signature: e.signature,
                                                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "previewImage"]
                                                        }),
                                                        wx.ready(function() {
                                                            var e = {
                                                                imgUrl: n,
                                                                link: i,
                                                                desc: r,
                                                                title: o
                                                            },
                                                            l = {
                                                                imgUrl: n,
                                                                link: i,
                                                                title: o
                                                            };
                                                            wx.onMenuShareAppMessage(e),
                                                            wx.onMenuShareTimeline(l),
                                                            wx.onMenuShareQQ(e),
                                                            wx.onMenuShareWeibo(e),
                                                            t(".entry-content").find("a.fluidbox").each(function(e, i) {
                                                                t(i).fluidbox("destroy")
                                                            }),
                                                            t(".entry-content a.fluidbox .j-lazy").lazyload({
                                                                webp: s,
                                                                threshold: -30,
                                                                effect: "fadeIn"
                                                            }),
                                                            t(document).on("click", "a.fluidbox",
                                                            function(e) {
                                                                e.preventDefault(),
                                                                wx.previewImage({
                                                                    current: t(this).attr("href"),
                                                                    urls: a
                                                                })
                                                            })
                                                        }),
                                                        wx.error(function(t) {
                                                            console.log(t)
                                                        })
                                                    },
                                                    document.body.appendChild(l)
                                                }
                                            }
                                        })
                                    }
                                } (),
                                window.baidu_map = function(e, i, n, o) {
                                    if (0 != t("#" + e).length) {
                                        var a = new BMap.Map(e, {
                                            enableMapClick: !1
                                        }),
                                        s = new BMap.Point(n[0], n[1]),
                                        r = new BMap.Marker(s);
                                        if (a.centerAndZoom(s, 16), a.addOverlay(r), o && a.enableScrollWheelZoom(), a.setMapStyle({
                                            styleJson: [{
                                                featureType: "all",
                                                elementType: "all",
                                                stylers: {
                                                    lightness: 35,
                                                    saturation: -25
                                                }
                                            }]
                                        }), i) {
                                            var l = new BMap.InfoWindow(i);
                                            r.openInfoWindow(l),
                                            r.addEventListener("click",
                                            function() {
                                                this.openInfoWindow(l)
                                            })
                                        }
                                    }
                                }
                            } (jQuery)
                        },
                        {
                            "../../../Themer/src/js/jquery.fluidbox": 4,
                            "../../../Themer/src/js/jquery.lazyload": 5
                        }],
                        3 : [function(t, e, i) { !
                            function(t) {
                                t.flexslider = function(e, i) {
                                    var n = t(e);
                                    n.vars = t.extend({},
                                    t.flexslider.defaults, i);
                                    var o, a = n.vars.namespace,
                                    s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                                    r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
                                    l = "click touchend MSPointerUp keyup",
                                    d = "",
                                    c = "vertical" === n.vars.direction,
                                    u = n.vars.reverse,
                                    h = n.vars.itemWidth > 0,
                                    p = "fade" === n.vars.animation,
                                    f = "" !== n.vars.asNavFor,
                                    m = {};
                                    t.data(e, "flexslider", n),
                                    m = {
                                        init: function() {
                                            n.animating = !1,
                                            n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt: 0, 10),
                                            isNaN(n.currentSlide) && (n.currentSlide = 0),
                                            n.animatingTo = n.currentSlide,
                                            n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last,
                                            n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")),
                                            n.slides = t(n.vars.selector, n),
                                            n.container = t(n.containerSelector, n),
                                            n.count = n.slides.length,
                                            n.syncExists = t(n.vars.sync).length > 0,
                                            "slide" === n.vars.animation && (n.vars.animation = "swing"),
                                            n.prop = c ? "top": "marginLeft",
                                            n.args = {},
                                            n.manualPause = !1,
                                            n.stopped = !1,
                                            n.started = !1,
                                            n.startTimeout = null,
                                            n.transitions = !n.vars.video && !p && n.vars.useCSS &&
                                            function() {
                                                var t = document.createElement("div"),
                                                e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                                                for (var i in e) if (void 0 !== t.style[e[i]]) return n.pfx = e[i].replace("Perspective", "").toLowerCase(),
                                                n.prop = "-" + n.pfx + "-transform",
                                                !0;
                                                return ! 1
                                            } (),
                                            n.ensureAnimationEnd = "",
                                            "" !== n.vars.controlsContainer && (n.controlsContainer = t(n.vars.controlsContainer).length > 0 && t(n.vars.controlsContainer)),
                                            "" !== n.vars.manualControls && (n.manualControls = t(n.vars.manualControls).length > 0 && t(n.vars.manualControls)),
                                            "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === t(n.vars.customDirectionNav).length && t(n.vars.customDirectionNav)),
                                            n.vars.randomize && (n.slides.sort(function() {
                                                return Math.round(Math.random()) - .5
                                            }), n.container.empty().append(n.slides)),
                                            n.doMath(),
                                            n.setup("init"),
                                            n.vars.controlNav && m.controlNav.setup(),
                                            n.vars.directionNav && m.directionNav.setup(),
                                            n.vars.keyboard && (1 === t(n.containerSelector).length || n.vars.multipleKeyboard) && t(document).bind("keyup",
                                            function(t) {
                                                var e = t.keyCode;
                                                if (!n.animating && (39 === e || 37 === e)) {
                                                    var i = 39 === e ? n.getTarget("next") : 37 === e && n.getTarget("prev");
                                                    n.flexAnimate(i, n.vars.pauseOnAction)
                                                }
                                            }),
                                            n.vars.mousewheel && n.bind("mousewheel",
                                            function(t, e, i, o) {
                                                t.preventDefault();
                                                var a = e < 0 ? n.getTarget("next") : n.getTarget("prev");
                                                n.flexAnimate(a, n.vars.pauseOnAction)
                                            }),
                                            n.vars.pausePlay && m.pausePlay.setup(),
                                            n.vars.slideshow && n.vars.pauseInvisible && m.pauseInvisible.init(),
                                            n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                                                n.manualPlay || n.manualPause || n.pause()
                                            },
                                            function() {
                                                n.manualPause || n.manualPlay || n.stopped || n.play()
                                            }), n.vars.pauseInvisible && m.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())),
                                            f && m.asNav.setup(),
                                            r && n.vars.touch && m.touch(),
                                            (!p || p && n.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize),
                                            n.find("img").attr("draggable", "false"),
                                            setTimeout(function() {
                                                n.vars.start(n)
                                            },
                                            200)
                                        },
                                        asNav: {
                                            setup: function() {
                                                n.asNav = !0,
                                                n.animatingTo = Math.floor(n.currentSlide / n.move),
                                                n.currentItem = n.currentSlide,
                                                n.slides.removeClass(a + "active-slide").eq(n.currentItem).addClass(a + "active-slide"),
                                                s ? (e._slider = n, n.slides.each(function() {
                                                    var e = this;
                                                    e._gesture = new MSGesture,
                                                    e._gesture.target = e,
                                                    e.addEventListener("MSPointerDown",
                                                    function(t) {
                                                        t.preventDefault(),
                                                        t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                                                    },
                                                    !1),
                                                    e.addEventListener("MSGestureTap",
                                                    function(e) {
                                                        e.preventDefault();
                                                        var i = t(this),
                                                        o = i.index();
                                                        t(n.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (n.direction = n.currentItem < o ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                                                    })
                                                })) : n.slides.on(l,
                                                function(e) {
                                                    e.preventDefault();
                                                    var i = t(this),
                                                    o = i.index();
                                                    i.offset().left - t(n).scrollLeft() <= 0 && i.hasClass(a + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : t(n.vars.asNavFor).data("flexslider").animating || i.hasClass(a + "active-slide") || (n.direction = n.currentItem < o ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                                                })
                                            }
                                        },
                                        controlNav: {
                                            setup: function() {
                                                n.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                                            },
                                            setupPaging: function() {
                                                var e, i, o = "thumbnails" === n.vars.controlNav ? "control-thumbs": "control-paging",
                                                s = 1;
                                                if (n.controlNavScaffold = t('<ol class="' + a + "control-nav " + a + o + '"></ol>'), n.pagingCount > 1) for (var r = 0; r < n.pagingCount; r++) {
                                                    if (i = n.slides.eq(r), e = "thumbnails" === n.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>': "<a>" + s + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                                        var c = i.attr("data-thumbcaption");
                                                        "" !== c && void 0 !== c && (e += '<span class="' + a + 'caption">' + c + "</span>")
                                                    }
                                                    n.controlNavScaffold.append("<li>" + e + "</li>"),
                                                    s++
                                                }
                                                n.controlsContainer ? t(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold),
                                                m.controlNav.set(),
                                                m.controlNav.active(),
                                                n.controlNavScaffold.delegate("a, img", l,
                                                function(e) {
                                                    if (e.preventDefault(), "" === d || d === e.type) {
                                                        var i = t(this),
                                                        o = n.controlNav.index(i);
                                                        i.hasClass(a + "active") || (n.direction = o > n.currentSlide ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                                                    }
                                                    "" === d && (d = e.type),
                                                    m.setToClearWatchedEvent()
                                                })
                                            },
                                            setupManual: function() {
                                                n.controlNav = n.manualControls,
                                                m.controlNav.active(),
                                                n.controlNav.bind(l,
                                                function(e) {
                                                    if (e.preventDefault(), "" === d || d === e.type) {
                                                        var i = t(this),
                                                        o = n.controlNav.index(i);
                                                        i.hasClass(a + "active") || (o > n.currentSlide ? n.direction = "next": n.direction = "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                                                    }
                                                    "" === d && (d = e.type),
                                                    m.setToClearWatchedEvent()
                                                })
                                            },
                                            set: function() {
                                                var e = "thumbnails" === n.vars.controlNav ? "img": "a";
                                                n.controlNav = t("." + a + "control-nav li " + e, n.controlsContainer ? n.controlsContainer: n)
                                            },
                                            active: function() {
                                                n.controlNav.removeClass(a + "active").eq(n.animatingTo).addClass(a + "active")
                                            },
                                            update: function(e, i) {
                                                n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append(t("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(i).closest("li").remove(),
                                                m.controlNav.set(),
                                                n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(i, e) : m.controlNav.active()
                                            }
                                        },
                                        directionNav: {
                                            setup: function() {
                                                var e = t('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                                                n.customDirectionNav ? n.directionNav = n.customDirectionNav: n.controlsContainer ? (t(n.controlsContainer).append(e), n.directionNav = t("." + a + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = t("." + a + "direction-nav li a", n)),
                                                m.directionNav.update(),
                                                n.directionNav.bind(l,
                                                function(e) {
                                                    e.preventDefault();
                                                    var i;
                                                    "" !== d && d !== e.type || (i = t(this).hasClass(a + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(i, n.vars.pauseOnAction)),
                                                    "" === d && (d = e.type),
                                                    m.setToClearWatchedEvent()
                                                })
                                            },
                                            update: function() {
                                                var t = a + "disabled";
                                                1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + a + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + a + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                                            }
                                        },
                                        pausePlay: {
                                            setup: function() {
                                                var e = t('<div class="' + a + 'pauseplay"><a></a></div>');
                                                n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = t("." + a + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = t("." + a + "pauseplay a", n)),
                                                m.pausePlay.update(n.vars.slideshow ? a + "pause": a + "play"),
                                                n.pausePlay.bind(l,
                                                function(e) {
                                                    e.preventDefault(),
                                                    "" !== d && d !== e.type || (t(this).hasClass(a + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())),
                                                    "" === d && (d = e.type),
                                                    m.setToClearWatchedEvent()
                                                })
                                            },
                                            update: function(t) {
                                                "play" === t ? n.pausePlay.removeClass(a + "pause").addClass(a + "play").html(n.vars.playText) : n.pausePlay.removeClass(a + "play").addClass(a + "pause").html(n.vars.pauseText)
                                            }
                                        },
                                        touch: function() {
                                            function t(t) {
                                                t.stopPropagation(),
                                                n.animating ? t.preventDefault() : (n.pause(), e._gesture.addPointer(t.pointerId), C = 0, d = c ? n.h: n.w, m = Number(new Date), l = h && u && n.animatingTo === n.last ? 0 : h && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: h && n.currentSlide === n.last ? n.limit: h ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide: u ? (n.last - n.currentSlide + n.cloneOffset) * d: (n.currentSlide + n.cloneOffset) * d)
                                            }
                                            function i(t) {
                                                t.stopPropagation();
                                                var i = t.target._slider;
                                                if (i) {
                                                    var n = -t.translationX,
                                                    o = -t.translationY;
                                                    if (C += c ? o: n, f = C, w = c ? Math.abs(C) < Math.abs( - n) : Math.abs(C) < Math.abs( - o), t.detail === t.MSGESTURE_FLAG_INERTIA) return void setImmediate(function() {
                                                        e._gesture.stop()
                                                    }); (!w || Number(new Date) - m > 500) && (t.preventDefault(), !p && i.transitions && (i.vars.animationLoop || (f = C / (0 === i.currentSlide && C < 0 || i.currentSlide === i.last && C > 0 ? Math.abs(C) / d + 2 : 1)), i.setProps(l + f, "setTouch")))
                                                }
                                            }
                                            function o(t) {
                                                t.stopPropagation();
                                                var e = t.target._slider;
                                                if (e) {
                                                    if (e.animatingTo === e.currentSlide && !w && null !== f) {
                                                        var i = u ? -f: f,
                                                        n = i > 0 ? e.getTarget("next") : e.getTarget("prev");
                                                        e.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > d / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : p || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                                                    }
                                                    a = null,
                                                    r = null,
                                                    f = null,
                                                    l = null,
                                                    C = 0
                                                }
                                            }
                                            var a, r, l, d, f, m, g, v, b, w = !1,
                                            y = 0,
                                            x = 0,
                                            C = 0;
                                            s ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = n, e.addEventListener("MSGestureChange", i, !1), e.addEventListener("MSGestureEnd", o, !1)) : (g = function(t) {
                                                n.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (n.pause(), d = c ? n.h: n.w, m = Number(new Date), y = t.touches[0].pageX, x = t.touches[0].pageY, l = h && u && n.animatingTo === n.last ? 0 : h && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: h && n.currentSlide === n.last ? n.limit: h ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide: u ? (n.last - n.currentSlide + n.cloneOffset) * d: (n.currentSlide + n.cloneOffset) * d, a = c ? x: y, r = c ? y: x, e.addEventListener("touchmove", v, !1), e.addEventListener("touchend", b, !1))
                                            },
                                            v = function(t) {
                                                y = t.touches[0].pageX,
                                                x = t.touches[0].pageY,
                                                f = c ? a - x: a - y,
                                                w = c ? Math.abs(f) < Math.abs(y - r) : Math.abs(f) < Math.abs(x - r); (!w || Number(new Date) - m > 500) && (t.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (f /= 0 === n.currentSlide && f < 0 || n.currentSlide === n.last && f > 0 ? Math.abs(f) / d + 2 : 1), n.setProps(l + f, "setTouch")))
                                            },
                                            b = function(t) {
                                                if (e.removeEventListener("touchmove", v, !1), n.animatingTo === n.currentSlide && !w && null !== f) {
                                                    var i = u ? -f: f,
                                                    o = i > 0 ? n.getTarget("next") : n.getTarget("prev");
                                                    n.canAdvance(o) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > d / 2) ? n.flexAnimate(o, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                                                }
                                                e.removeEventListener("touchend", b, !1),
                                                a = null,
                                                r = null,
                                                f = null,
                                                l = null
                                            },
                                            e.addEventListener("touchstart", g, !1))
                                        },
                                        resize: function() { ! n.animating && n.is(":visible") && (h || n.doMath(), p ? m.smoothHeight() : h ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : c ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && m.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
                                        },
                                        smoothHeight: function(t) {
                                            if (!c || p) {
                                                var e = p ? n: n.viewport;
                                                t ? e.animate({
                                                    height: n.slides.eq(n.animatingTo).height()
                                                },
                                                t) : e.height(n.slides.eq(n.animatingTo).height())
                                            }
                                        },
                                        sync: function(e) {
                                            var i = t(n.vars.sync).data("flexslider"),
                                            o = n.animatingTo;
                                            switch (e) {
                                            case "animate":
                                                i.flexAnimate(o, n.vars.pauseOnAction, !1, !0);
                                                break;
                                            case "play":
                                                i.playing || i.asNav || i.play();
                                                break;
                                            case "pause":
                                                i.pause()
                                            }
                                        },
                                        uniqueID: function(e) {
                                            return e.filter("[id]").add(e.find("[id]")).each(function() {
                                                var e = t(this);
                                                e.attr("id", e.attr("id") + "_clone")
                                            }),
                                            e
                                        },
                                        pauseInvisible: {
                                            visProp: null,
                                            init: function() {
                                                var t = m.pauseInvisible.getHiddenProp();
                                                if (t) {
                                                    var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                                                    document.addEventListener(e,
                                                    function() {
                                                        m.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                                                    })
                                                }
                                            },
                                            isHidden: function() {
                                                var t = m.pauseInvisible.getHiddenProp();
                                                return !! t && document[t]
                                            },
                                            getHiddenProp: function() {
                                                var t = ["webkit", "moz", "ms", "o"];
                                                if ("hidden" in document) return "hidden";
                                                for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                                                return null
                                            }
                                        },
                                        setToClearWatchedEvent: function() {
                                            clearTimeout(o),
                                            o = setTimeout(function() {
                                                d = ""
                                            },
                                            3e3)
                                        }
                                    },
                                    n.flexAnimate = function(e, i, o, s, l) {
                                        if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next": "prev"), f && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next": "prev"), !n.animating && (n.canAdvance(e, l) || o) && n.is(":visible")) {
                                            if (f && s) {
                                                var d = t(n.vars.asNavFor).data("flexslider");
                                                if (n.atEnd = 0 === e || e === n.count - 1, d.flexAnimate(e, !0, !1, !0, l), n.direction = n.currentItem < e ? "next": "prev", d.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e,
                                                n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"),
                                                !1;
                                                n.currentItem = e,
                                                n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"),
                                                e = Math.floor(e / n.visible)
                                            }
                                            if (n.animating = !0, n.animatingTo = e, i && n.pause(), n.vars.before(n), n.syncExists && !l && m.sync("animate"), n.vars.controlNav && m.controlNav.active(), h || n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && m.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) r ? (n.slides.eq(n.currentSlide).css({
                                                opacity: 0,
                                                zIndex: 1
                                            }), n.slides.eq(e).css({
                                                opacity: 1,
                                                zIndex: 2
                                            }), n.wrapup(w)) : (n.slides.eq(n.currentSlide).css({
                                                zIndex: 1
                                            }).animate({
                                                opacity: 0
                                            },
                                            n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                                                zIndex: 2
                                            }).animate({
                                                opacity: 1
                                            },
                                            n.vars.animationSpeed, n.vars.easing, n.wrapup));
                                            else {
                                                var g, v, b, w = c ? n.slides.filter(":first").height() : n.computedW;
                                                h ? (g = n.vars.itemMargin, b = (n.itemW + g) * n.move * n.animatingTo, v = b > n.limit && 1 !== n.visible ? n.limit: b) : v = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * w: 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * w: u ? (n.count - 1 - e + n.cloneOffset) * w: (e + n.cloneOffset) * w,
                                                n.setProps(v, "", n.vars.animationSpeed),
                                                n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend",
                                                function() {
                                                    clearTimeout(n.ensureAnimationEnd),
                                                    n.wrapup(w)
                                                }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                                                    n.wrapup(w)
                                                },
                                                n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing,
                                                function() {
                                                    n.wrapup(w)
                                                })
                                            }
                                            n.vars.smoothHeight && m.smoothHeight(n.vars.animationSpeed)
                                        }
                                    },
                                    n.wrapup = function(t) {
                                        p || h || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")),
                                        n.animating = !1,
                                        n.currentSlide = n.animatingTo,
                                        n.vars.after(n)
                                    },
                                    n.animateSlides = function() {
                                        n.animating || n.flexAnimate(n.getTarget("next"))
                                    },
                                    n.pause = function() {
                                        clearInterval(n.animatedSlides),
                                        n.animatedSlides = null,
                                        n.playing = !1,
                                        n.vars.pausePlay && m.pausePlay.update("play"),
                                        n.syncExists && m.sync("pause")
                                    },
                                    n.play = function() {
                                        n.playing && clearInterval(n.animatedSlides),
                                        n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed),
                                        n.started = n.playing = !0,
                                        n.vars.pausePlay && m.pausePlay.update("pause"),
                                        n.syncExists && m.sync("play")
                                    },
                                    n.stop = function() {
                                        n.pause(),
                                        n.stopped = !0
                                    },
                                    n.canAdvance = function(t, e) {
                                        var i = f ? n.pagingCount - 1 : n.last;
                                        return !! e || (!(!f || n.currentItem !== n.count - 1 || 0 !== t || "prev" !== n.direction) || (!f || 0 !== n.currentItem || t !== n.pagingCount - 1 || "next" === n.direction) && (!(t === n.currentSlide && !f) && ( !! n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || t !== i || "next" === n.direction) && (!n.atEnd || n.currentSlide !== i || 0 !== t || "next" !== n.direction))))
                                    },
                                    n.getTarget = function(t) {
                                        return n.direction = t,
                                        "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last: n.currentSlide - 1
                                    },
                                    n.setProps = function(t, e, i) {
                                        var o = function() {
                                            var i = t || (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo;
                                            return - 1 *
                                            function() {
                                                if (h) return "setTouch" === e ? t: u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: n.animatingTo === n.last ? n.limit: i;
                                                switch (e) {
                                                case "setTotal":
                                                    return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t: (n.currentSlide + n.cloneOffset) * t;
                                                case "setTouch":
                                                    return t;
                                                case "jumpEnd":
                                                    return u ? t: n.count * t;
                                                case "jumpStart":
                                                    return u ? n.count * t: t;
                                                default:
                                                    return t
                                                }
                                            } () + "px"
                                        } ();
                                        n.transitions && (o = c ? "translate3d(0," + o + ",0)": "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s": "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)),
                                        n.args[n.prop] = o,
                                        (n.transitions || void 0 === i) && n.container.css(n.args),
                                        n.container.css("transform", o)
                                    },
                                    n.setup = function(e) {
                                        if (p) n.slides.css({
                                            width: "100%",
                                            float: "left",
                                            marginRight: "-100%",
                                            position: "relative"
                                        }),
                                        "init" === e && (r ? n.slides.css({
                                            opacity: 0,
                                            display: "block",
                                            webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                                            zIndex: 1
                                        }).eq(n.currentSlide).css({
                                            opacity: 1,
                                            zIndex: 2
                                        }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                                            opacity: 0,
                                            display: "block",
                                            zIndex: 1
                                        }).eq(n.currentSlide).css({
                                            zIndex: 2
                                        }).css({
                                            opacity: 1
                                        }) : n.slides.css({
                                            opacity: 0,
                                            display: "block",
                                            zIndex: 1
                                        }).eq(n.currentSlide).css({
                                            zIndex: 2
                                        }).animate({
                                            opacity: 1
                                        },
                                        n.vars.animationSpeed, n.vars.easing)),
                                        n.vars.smoothHeight && m.smoothHeight();
                                        else {
                                            var i, o;
                                            "init" === e && (n.viewport = t('<div class="' + a + 'viewport"></div>').css({
                                                overflow: "hidden",
                                                position: "relative"
                                            }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (o = t.makeArray(n.slides).reverse(), n.slides = t(o), n.container.empty().append(n.slides))),
                                            n.vars.animationLoop && !h && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(m.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                                            n.newSlides = t(n.vars.selector, n),
                                            i = u ? n.count - 1 - n.currentSlide + n.cloneOffset: n.currentSlide + n.cloneOffset,
                                            c && !h ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                                                n.newSlides.css({
                                                    display: "block"
                                                }),
                                                n.doMath(),
                                                n.viewport.height(n.h),
                                                n.setProps(i * n.h, "init")
                                            },
                                            "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(i * n.computedW, "init"), setTimeout(function() {
                                                n.doMath(),
                                                n.newSlides.css({
                                                    width: n.computedW,
                                                    float: "left",
                                                    display: "block"
                                                }),
                                                n.vars.smoothHeight && m.smoothHeight()
                                            },
                                            "init" === e ? 100 : 0))
                                        }
                                        h || n.slides.removeClass(a + "active-slide").eq(n.currentSlide).addClass(a + "active-slide"),
                                        n.vars.init(n)
                                    },
                                    n.doMath = function() {
                                        var t = n.slides.first(),
                                        e = n.vars.itemMargin,
                                        i = n.vars.minItems,
                                        o = n.vars.maxItems;
                                        n.w = void 0 === n.viewport ? n.width() : n.viewport.width(),
                                        n.h = t.height(),
                                        n.boxPadding = t.outerWidth() - t.width(),
                                        h ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT: n.w, n.maxW = o ? o * n.itemT - e: n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i: n.maxW < n.w ? (n.w - e * (o - 1)) / o: n.vars.itemWidth > n.w ? n.w: n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move: n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1),
                                        n.computedW = n.itemW - n.boxPadding
                                    },
                                    n.update = function(t, e) {
                                        n.doMath(),
                                        h || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1), n.animatingTo = n.currentSlide),
                                        n.vars.controlNav && !n.manualControls && ("add" === e && !h || n.pagingCount > n.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !h || n.pagingCount < n.controlNav.length) && (h && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), m.controlNav.update("remove", n.last))),
                                        n.vars.directionNav && m.directionNav.update()
                                    },
                                    n.addSlide = function(e, i) {
                                        var o = t(e);
                                        n.count += 1,
                                        n.last = n.count - 1,
                                        c && u ? void 0 !== i ? n.slides.eq(n.count - i).after(o) : n.container.prepend(o) : void 0 !== i ? n.slides.eq(i).before(o) : n.container.append(o),
                                        n.update(i, "add"),
                                        n.slides = t(n.vars.selector + ":not(.clone)", n),
                                        n.setup(),
                                        n.vars.added(n)
                                    },
                                    n.removeSlide = function(e) {
                                        var i = isNaN(e) ? n.slides.index(t(e)) : e;
                                        n.count -= 1,
                                        n.last = n.count - 1,
                                        isNaN(e) ? t(e, n.slides).remove() : c && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(),
                                        n.doMath(),
                                        n.update(i, "remove"),
                                        n.slides = t(n.vars.selector + ":not(.clone)", n),
                                        n.setup(),
                                        n.vars.removed(n)
                                    },
                                    m.init()
                                },
                                t(window).blur(function(t) {
                                    focused = !1
                                }).focus(function(t) {
                                    focused = !0
                                }),
                                t.flexslider.defaults = {
                                    namespace: "flex-",
                                    selector: ".slides > li",
                                    animation: "fade",
                                    easing: "swing",
                                    direction: "horizontal",
                                    reverse: !1,
                                    animationLoop: !0,
                                    smoothHeight: !1,
                                    startAt: 0,
                                    slideshow: !0,
                                    slideshowSpeed: 7e3,
                                    animationSpeed: 600,
                                    initDelay: 0,
                                    randomize: !1,
                                    fadeFirstSlide: !0,
                                    thumbCaptions: !1,
                                    pauseOnAction: !0,
                                    pauseOnHover: !1,
                                    pauseInvisible: !0,
                                    useCSS: !0,
                                    touch: !0,
                                    video: !1,
                                    controlNav: !0,
                                    directionNav: !0,
                                    prevText: "Previous",
                                    nextText: "Next",
                                    keyboard: !0,
                                    multipleKeyboard: !1,
                                    mousewheel: !1,
                                    pausePlay: !1,
                                    pauseText: "Pause",
                                    playText: "Play",
                                    controlsContainer: "",
                                    manualControls: "",
                                    customDirectionNav: "",
                                    sync: "",
                                    asNavFor: "",
                                    itemWidth: 0,
                                    itemMargin: 0,
                                    minItems: 1,
                                    maxItems: 0,
                                    move: 0,
                                    allowOneSlide: !0,
                                    start: function() {},
                                    before: function() {},
                                    after: function() {},
                                    end: function() {},
                                    added: function() {},
                                    removed: function() {},
                                    init: function() {}
                                },
                                t.fn.flexslider = function(e) {
                                    if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                                        var i = t(this),
                                        n = e.selector ? e.selector: ".slides > li",
                                        o = i.find(n);
                                        1 === o.length && !0 === e.allowOneSlide || 0 === o.length ? (o.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
                                    });
                                    var i = t(this).data("flexslider");
                                    switch (e) {
                                    case "play":
                                        i.play();
                                        break;
                                    case "pause":
                                        i.pause();
                                        break;
                                    case "stop":
                                        i.stop();
                                        break;
                                    case "next":
                                        i.flexAnimate(i.getTarget("next"), !0);
                                        break;
                                    case "prev":
                                    case "previous":
                                        i.flexAnimate(i.getTarget("prev"), !0);
                                        break;
                                    default:
                                        "number" == typeof e && i.flexAnimate(e, !0)
                                    }
                                }
                            } (jQuery)
                        },
                        {}],
                        4 : [function(t, e, i) { !
                            function(t, e, i, n) {
                                "use strict";
                                function o(e, i) {
                                    this.element = e;
                                    var n = {};
                                    t.each(t(this.element).data(),
                                    function(t, e) {
                                        var i = function(t) {
                                            return t && t[0].toLowerCase() + t.slice(1)
                                        } (t.replace("fluidbox", ""));
                                        "" === i && null === i || ("false" == e ? e = !1 : "true" == e && (e = !0), n[i] = e)
                                    }),
                                    this.settings = t.extend({},
                                    r, i, n),
                                    this.settings.viewportFill = Math.max(Math.min(parseFloat(this.settings.viewportFill), 1), 0),
                                    this.settings.stackIndex < this.settings.stackIndexDelta && (settings.stackIndexDelta = settings.stackIndex),
                                    this._name = s,
                                    this.init()
                                }
                                var a = t(e),
                                s = (t(i), "fluidbox"),
                                r = {
                                    immediateOpen: !1,
                                    loader: !1,
                                    maxWidth: 0,
                                    maxHeight: 0,
                                    resizeThrottle: 500,
                                    stackIndex: 1e3,
                                    stackIndexDelta: 10,
                                    viewportFill: .95
                                },
                                l = {},
                                d = 0;
                                "undefined" != typeof console && "undefined" !== console.warn || (console = {},
                                console.warn = function() {}),
                                t.isFunction(t.throttle);
                                var c = function() {
                                    var t, e = i.createElement("fakeelement"),
                                    n = {
                                        transition: "transitionend",
                                        OTransition: "oTransitionEnd",
                                        MozTransition: "transitionend",
                                        WebkitTransition: "webkitTransitionEnd"
                                    };
                                    for (t in n) if (void 0 !== e.style[t]) return n[t]
                                } (),
                                u = {
                                    dom: function() {
                                        var e = t("<div />", {
                                            class: "fluidbox__wrap",
                                            css: {
                                                zIndex: this.settings.stackIndex - this.settings.stackIndexDelta
                                            }
                                        });
                                        if (t(this.element).addClass("fluidbox--closed").wrapInner(e).find("img").first().css({
                                            opacity: 1
                                        }).addClass("fluidbox__thumb").after('<div class="fluidbox__ghost" />'), this.settings.loader) {
                                            var i = t("<div />", {
                                                class: "fluidbox__loader",
                                                css: {
                                                    zIndex: 2
                                                }
                                            });
                                            t(this.element).find(".fluidbox__wrap").append(i)
                                        }
                                    },
                                    prepareFb: function() {
                                        var e = this,
                                        i = t(this.element);
                                        i.trigger("thumbloaddone.fluidbox"),
                                        u.measure.fbElements.call(this),
                                        e.bindEvents(),
                                        i.addClass("fluidbox--ready"),
                                        e.bindListeners(),
                                        i.trigger("ready.fluidbox")
                                    },
                                    measure: {
                                        viewport: function() {
                                            l.viewport = {
                                                w: a.width(),
                                                h: a.height()
                                            }
                                        },
                                        fbElements: function() {
                                            var e = this,
                                            i = t(this.element),
                                            n = i.find("img").first(),
                                            o = i.find(".fluidbox__ghost"),
                                            a = i.find(".fluidbox__wrap");
                                            e.instanceData.thumb = {
                                                natW: n[0].naturalWidth,
                                                natH: n[0].naturalHeight,
                                                w: n.width(),
                                                h: n.height()
                                            },
                                            o.css({
                                                width: n.width(),
                                                height: n.height(),
                                                top: n.offset().top - a.offset().top + parseInt(n.css("borderTopWidth")) + parseInt(n.css("paddingTop")),
                                                left: n.offset().left - a.offset().left + parseInt(n.css("borderLeftWidth")) + parseInt(n.css("paddingLeft"))
                                            })
                                        }
                                    },
                                    checkURL: function(t) {
                                        var e = 0;
                                        return /[\s+]/g.test(t) ? (console.warn("Fluidbox: Fluidbox opening is halted because it has detected characters in your URL string that need to be properly encoded/escaped. Whitespace(s) have to be escaped manually. See RFC3986 documentation."), e = 1) : /[\"\'\(\)]/g.test(t) && (console.warn("Fluidbox: Fluidbox opening will proceed, but it has detected characters in your URL string that need to be properly encoded/escaped. These will be escaped for you. See RFC3986 documentation."), e = 0),
                                        e
                                    },
                                    formatURL: function(t) {
                                        return t.replace(/"/g, "%22").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")
                                    }
                                };
                                t.extend(o.prototype, {
                                    init: function() {
                                        var e = this,
                                        i = t(this.element),
                                        n = i.find("img").first();
                                        if (u.measure.viewport(), (!e.instanceData || !e.instanceData.initialized) && i.is("a") && 1 === i.children().length && (i.children().is("img") || i.children().is("picture") && 1 === i.find("img").length) && "none" !== i.css("display") && "none" !== i.children().css("display") && "none" !== i.parents().css("display")) {
                                            i.removeClass("fluidbox--destroyed"),
                                            e.instanceData = {},
                                            e.instanceData.initialized = !0,
                                            e.instanceData.originalNode = i.html(),
                                            d += 1,
                                            e.instanceData.id = d,
                                            i.addClass("fluidbox__instance-" + d),
                                            i.addClass("fluidbox--initialized"),
                                            u.dom.call(e),
                                            i.trigger("init.fluidbox");
                                            var o = new Image;
                                            n.width() > 0 && n.height() > 0 ? u.prepareFb.call(e) : (o.onload = function() {
                                                u.prepareFb.call(e)
                                            },
                                            o.onerror = function() {
                                                i.trigger("thumbloadfail.fluidbox")
                                            },
                                            o.src = n.attr("src"))
                                        }
                                    },
                                    open: function() {
                                        var e = this,
                                        i = t(this.element),
                                        n = i.find("img").first(),
                                        o = i.find(".fluidbox__ghost"),
                                        a = i.find(".fluidbox__wrap");
                                        e.instanceData.state = 1,
                                        o.off(c),
                                        t(".fluidbox--opened").fluidbox("close");
                                        var s = t("<div />", {
                                            class: "fluidbox__overlay",
                                            css: {
                                                zIndex: -1
                                            }
                                        });
                                        if (a.append(s), i.removeClass("fluidbox--closed").addClass("fluidbox--loading"), u.checkURL(n.attr("src"))) return e.close(),
                                        !1;
                                        o.css({
                                            "background-image": "url(" + u.formatURL(n.attr("src")) + ")",
                                            opacity: 1
                                        }),
                                        u.measure.fbElements.call(e);
                                        var r;
                                        e.settings.immediateOpen ? (i.addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({
                                            zIndex: e.settings.stackIndex + e.settings.stackIndexDelta
                                        }), i.trigger("openstart.fluidbox"), e.compute(), n.css({
                                            opacity: 0
                                        }), t(".fluidbox__overlay").css({
                                            opacity: 1
                                        }), o.one(c,
                                        function() {
                                            i.trigger("openend.fluidbox")
                                        }), r = new Image, r.onload = function() {
                                            if (i.trigger("imageloaddone.fluidbox"), 1 === e.instanceData.state) {
                                                if (e.instanceData.thumb.natW = r.naturalWidth, e.instanceData.thumb.natH = r.naturalHeight, i.removeClass("fluidbox--loading"), u.checkURL(r.src)) return e.close({
                                                    error: !0
                                                }),
                                                !1;
                                                o.css({
                                                    "background-image": "url(" + u.formatURL(r.src) + ")"
                                                }),
                                                e.compute()
                                            }
                                        },
                                        r.onerror = function() {
                                            e.close({
                                                error: !0
                                            }),
                                            i.trigger("imageloadfail.fluidbox"),
                                            i.trigger("delayedloadfail.fluidbox")
                                        },
                                        r.src = i.attr("href")) : (r = new Image, r.onload = function() {
                                            if (i.trigger("imageloaddone.fluidbox"), i.removeClass("fluidbox--loading").addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({
                                                zIndex: e.settings.stackIndex + e.settings.stackIndexDelta
                                            }), i.trigger("openstart.fluidbox"), u.checkURL(r.src)) return e.close({
                                                error: !0
                                            }),
                                            !1;
                                            o.css({
                                                "background-image": "url(" + u.formatURL(r.src) + ")"
                                            }),
                                            e.instanceData.thumb.natW = r.naturalWidth,
                                            e.instanceData.thumb.natH = r.naturalHeight,
                                            e.compute(),
                                            n.css({
                                                opacity: 0
                                            }),
                                            t(".fluidbox__overlay").css({
                                                opacity: 1
                                            }),
                                            o.one(c,
                                            function() {
                                                i.trigger("openend.fluidbox")
                                            })
                                        },
                                        r.onerror = function() {
                                            e.close({
                                                error: !0
                                            }),
                                            i.trigger("imageloadfail.fluidbox")
                                        },
                                        r.src = i.attr("href"))
                                    },
                                    compute: function() {
                                        var e = this,
                                        i = t(this.element),
                                        n = i.find("img").first(),
                                        o = i.find(".fluidbox__ghost"),
                                        s = i.find(".fluidbox__wrap"),
                                        r = e.instanceData.thumb.natW,
                                        d = e.instanceData.thumb.natH,
                                        c = e.instanceData.thumb.w,
                                        u = e.instanceData.thumb.h,
                                        h = r / d,
                                        p = l.viewport.w / l.viewport.h;
                                        e.settings.maxWidth > 0 ? (r = e.settings.maxWidth, d = r / h) : e.settings.maxHeight > 0 && (d = e.settings.maxHeight, r = d * h);
                                        var f, m, g, v, b;
                                        p > h ? (f = d < l.viewport.h ? d: l.viewport.h * e.settings.viewportFill, g = f / u, v = r * (u * g / d) / c, b = g) : (m = r < l.viewport.w ? r: l.viewport.w * e.settings.viewportFill, v = m / c, g = d * (c * v / r) / u, b = v),
                                        e.settings.maxWidth && e.settings.maxHeight && console.warn("Fluidbox: Both maxHeight and maxWidth are specified. You can only specify one. If both are specified, only the maxWidth property will be respected. This will not generate any error, but may cause unexpected sizing behavior.");
                                        var w = a.scrollTop() - n.offset().top + u * (b - 1) * .5 + .5 * (a.height() - u * b),
                                        y = c * (b - 1) * .5 + .5 * (a.width() - c * b) - n.offset().left,
                                        x = parseInt(100 * v) / 100 + "," + parseInt(100 * g) / 100;
                                        o.css({
                                            transform: "translate(" + parseInt(100 * y) / 100 + "px," + parseInt(100 * w) / 100 + "px) scale(" + x + ")",
                                            top: n.offset().top - s.offset().top,
                                            left: n.offset().left - s.offset().left
                                        }),
                                        i.find(".fluidbox__loader").css({
                                            transform: "translate(" + parseInt(100 * y) / 100 + "px," + parseInt(100 * w) / 100 + "px) scale(" + x + ")"
                                        }),
                                        i.trigger("computeend.fluidbox")
                                    },
                                    recompute: function() {
                                        this.compute()
                                    },
                                    close: function(e) {
                                        var i = this,
                                        n = t(this.element),
                                        o = n.find("img").first(),
                                        a = n.find(".fluidbox__ghost"),
                                        s = n.find(".fluidbox__wrap"),
                                        r = n.find(".fluidbox__overlay"),
                                        l = t.extend(null, {
                                            error: !1
                                        },
                                        e);
                                        if (null === i.instanceData.state || void 0 === i.instanceData.state || 0 === i.instanceData.state) return ! 1;
                                        i.instanceData.state = 0,
                                        n.trigger("closestart.fluidbox"),
                                        n.removeClass(function(t, e) {
                                            return (e.match(/(^|\s)fluidbox--(opened|loaded|loading)+/g) || []).join(" ")
                                        }).addClass("fluidbox--closed"),
                                        a.css({
                                            transform: "translate(0,0) scale(1,1)",
                                            top: o.offset().top - s.offset().top + parseInt(o.css("borderTopWidth")) + parseInt(o.css("paddingTop")),
                                            left: o.offset().left - s.offset().left + parseInt(o.css("borderLeftWidth")) + parseInt(o.css("paddingLeft"))
                                        }),
                                        n.find(".fluidbox__loader").css({
                                            transform: "none"
                                        }),
                                        a.one(c,
                                        function() {
                                            a.css({
                                                opacity: 0
                                            }),
                                            o.css({
                                                opacity: 1
                                            }),
                                            r.remove(),
                                            s.css({
                                                zIndex: i.settings.stackIndex - i.settings.stackIndexDelta
                                            }),
                                            n.trigger("closeend.fluidbox")
                                        }),
                                        l.error && a.trigger("transitionend"),
                                        r.css({
                                            opacity: 0
                                        })
                                    },
                                    bindEvents: function() {
                                        var e = this;
                                        t(this.element).on("click.fluidbox",
                                        function(t) {
                                            t.preventDefault(),
                                            e.instanceData.state && 0 !== e.instanceData.state ? e.close() : e.open()
                                        })
                                    },
                                    bindListeners: function() {
                                        var e = this,
                                        i = t(this.element),
                                        n = function() {
                                            u.measure.viewport(),
                                            u.measure.fbElements.call(e),
                                            i.hasClass("fluidbox--opened") && e.compute()
                                        };
                                        t.isFunction(t.throttle) ? a.on("resize.fluidbox" + e.instanceData.id, t.throttle(e.settings.resizeThrottle, n)) : a.on("resize.fluidbox" + e.instanceData.id, n),
                                        i.on("reposition.fluidbox",
                                        function() {
                                            e.reposition()
                                        }),
                                        i.on("recompute.fluidbox, compute.fluidbox",
                                        function() {
                                            e.compute()
                                        }),
                                        i.on("destroy.fluidbox",
                                        function() {
                                            e.destroy()
                                        }),
                                        i.on("close.fluidbox",
                                        function() {
                                            e.close()
                                        })
                                    },
                                    unbind: function() {
                                        t(this.element).off("click.fluidbox reposition.fluidbox recompute.fluidbox compute.fluidbox destroy.fluidbox close.fluidbox"),
                                        a.off("resize.fluidbox" + this.instanceData.id)
                                    },
                                    reposition: function() {
                                        u.measure.fbElements.call(this)
                                    },
                                    destroy: function() {
                                        var e = this.instanceData.originalNode;
                                        this.unbind(),
                                        t.data(this.element, "plugin_" + s, null),
                                        t(this.element).removeClass(function(t, e) {
                                            return (e.match(/(^|\s)fluidbox[--|__]\S+/g) || []).join(" ")
                                        }).empty().html(e).addClass("fluidbox--destroyed").trigger("destroyed.fluidbox")
                                    },
                                    getMetadata: function() {
                                        return this.instanceData
                                    }
                                }),
                                t.fn[s] = function(e) {
                                    var i = arguments;
                                    if (void 0 === e || "object" == typeof e) return this.each(function() {
                                        t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
                                    });
                                    if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
                                        var n;
                                        return this.each(function() {
                                            var a = t.data(this, "plugin_" + s);
                                            a instanceof o && "function" == typeof a[e] ? n = a[e].apply(a, Array.prototype.slice.call(i, 1)) : console.warn('Fluidbox: The method "' + e + '" used is not defined in Fluidbox. Please make sure you are calling the correct public method.')
                                        }),
                                        void 0 !== n ? n: this
                                    }
                                    return this
                                }
                            } (jQuery, window, document)
                        },
                        {}],
                        5 : [function(t, e, i) {
                            /*!
                        * Lazy Load - jQuery plugin for lazy loading images
                        *
                        * Copyright (c) 2007-2015 Mika Tuupola
                        *
                        * Licensed under the MIT license:
                        *   http://www.opensource.org/licenses/mit-license.php
                        *
                        * Project home:
                        *   http://www.appelsiini.net/projects/lazyload
                        *
                        * Version:  1.9.7
                        *
                        */
                            !
                            function(t, e, i, n) {
                                var o = t(e),
                                a = function() {
                                    try {
                                        return 0 === i.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
                                    } catch(t) {
                                        return ! 1
                                    }
                                } ();
                                t.fn.lazyload = function(n) {
                                    function s() {
                                        var e = 0;
                                        d.each(function() {
                                            var i = t(this);
                                            if (!c.skip_invisible || i.is(":visible")) if (t.abovethetop(this, c) || t.leftofbegin(this, c));
                                            else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                                                if (++e > c.failure_limit) return ! 1
                                            } else i.trigger("appear"),
                                            e = 0
                                        })
                                    }
                                    function r(t) {
                                        return t.split("?").length > 1 ? t.match(/([&?]+)x-oss-process=/i) ? t = t.replace(/([&?]+)x-oss-process=/i, "$1x-oss-process=image/format,webp,") : t.match(/([&?]+)imageMogr2/i) ? t = t.replace(/([&?]+)imageMogr2\//i, "$1imageMogr2/format/webp/") : t += c.webp.replace("?", "&") : t += c.webp,
                                        t
                                    }
                                    var l, d = this,
                                    c = {
                                        threshold: 0,
                                        failure_limit: 500,
                                        event: "scroll",
                                        effect: "show",
                                        container: e,
                                        data_attribute: "original",
                                        skip_invisible: !1,
                                        appear: null,
                                        load: null,
                                        webp: null,
                                        placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                    };
                                    /*!
                        * Lazy Load - jQuery plugin for lazy loading images
                        *
                        * Copyright (c) 2007-2015 Mika Tuupola
                        *
                        * Licensed under the MIT license:
                        *   http://www.opensource.org/licenses/mit-license.php
                        *
                        * Project home:
                        *   http://www.appelsiini.net/projects/lazyload
                        *
                        * Version:  1.9.7
                        *
                        */
                                    return n && (void 0 !== n.failurelimit && (n.failure_limit = n.failurelimit, delete n.failurelimit), void 0 !== n.effectspeed && (n.effect_speed = n.effectspeed, delete n.effectspeed), t.extend(c, n)),
                                    l = void 0 === c.container || c.container === e ? o: t(c.container),
                                    0 === c.event.indexOf("scroll") && l.on(c.event,
                                    function() {
                                        return s()
                                    }),
                                    this.each(function() {
                                        var e = this,
                                        i = t(e);
                                        e.loaded = !1,
                                        void 0 !== i.attr("src") && !1 !== i.attr("src") || i.is("img") && i.attr("src", c.placeholder),
                                        i.one("appear",
                                        function() {
                                            if (!this.loaded) {
                                                if (c.appear) {
                                                    var n = d.length;
                                                    c.appear.call(e, n, c)
                                                }
                                                var o = i.attr("data-" + c.data_attribute);
                                                a && c.webp && (o = r(o));
                                                var s = i.attr("data-srcset"),
                                                l = i.css("display");
                                                t("<img />").one("load",
                                                function() {
                                                    i.hide(),
                                                    i.is("img") ? (s && i.attr("srcset", s), i.attr("src", o)) : i.css("background-image", "url('" + o + "')"),
                                                    i[c.effect](c.effect_speed).css("display", l),
                                                    e.loaded = !0;
                                                    var n = t.grep(d,
                                                    function(t) {
                                                        return ! t.loaded
                                                    });
                                                    if (d = t(n), c.load) {
                                                        var a = d.length;
                                                        c.load.call(e, a, c)
                                                    }
                                                    i.trigger("DOMSubtreeModified")
                                                }).attr("src", o)
                                            }
                                        }),
                                        0 !== c.event.indexOf("scroll") && i.on(c.event,
                                        function() {
                                            e.loaded || i.trigger("appear")
                                        })
                                    }),
                                    o.on("resize",
                                    function() {
                                        s()
                                    }),
                                    /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.on("pageshow",
                                    function(e) {
                                        e.originalEvent && e.originalEvent.persisted && d.each(function() {
                                            t(this).trigger("appear")
                                        })
                                    }),
                                    t(i).ready(function() {
                                        s()
                                    }),
                                    this
                                },
                                t.belowthefold = function(i, n) {
                                    return (void 0 === n.container || n.container === e ? (e.innerHeight ? e.innerHeight: o.height()) + o.scrollTop() : t(n.container).offset().top + t(n.container).height()) <= t(i).offset().top - n.threshold
                                },
                                t.rightoffold = function(i, n) {
                                    return (void 0 === n.container || n.container === e ? o.width() + o.scrollLeft() : t(n.container).offset().left + t(n.container).width()) <= t(i).offset().left - n.threshold
                                },
                                t.abovethetop = function(i, n) {
                                    return (void 0 === n.container || n.container === e ? o.scrollTop() : t(n.container).offset().top) >= t(i).offset().top + n.threshold + t(i).height()
                                },
                                t.leftofbegin = function(i, n) {
                                    return (void 0 === n.container || n.container === e ? o.scrollLeft() : t(n.container).offset().left) >= t(i).offset().left + n.threshold + t(i).width()
                                },
                                t.inviewport = function(e, i) {
                                    return ! (t.rightoffold(e, i) || t.leftofbegin(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
                                },
                                t.extend(t.expr[":"], {
                                    "below-the-fold": function(e) {
                                        return t.belowthefold(e, {
                                            threshold: 0
                                        })
                                    },
                                    "above-the-top": function(e) {
                                        return ! t.belowthefold(e, {
                                            threshold: 0
                                        })
                                    },
                                    "right-of-screen": function(e) {
                                        return t.rightoffold(e, {
                                            threshold: 0
                                        })
                                    },
                                    "left-of-screen": function(e) {
                                        return ! t.rightoffold(e, {
                                            threshold: 0
                                        })
                                    },
                                    "in-viewport": function(e) {
                                        return t.inviewport(e, {
                                            threshold: 0
                                        })
                                    },
                                    "above-the-fold": function(e) {
                                        return ! t.belowthefold(e, {
                                            threshold: 0
                                        })
                                    },
                                    "right-of-fold": function(e) {
                                        return t.rightoffold(e, {
                                            threshold: 0
                                        })
                                    },
                                    "left-of-fold": function(e) {
                                        return ! t.rightoffold(e, {
                                            threshold: 0
                                        })
                                    }
                                })
                            } (jQuery, window, document)
                        },
                        {}],
                        6 : [function(t, e, i) { !
                            function(t) {
                                t.fn.qrcode = function(e) {
                                    function i(t) {
                                        this.mode = r,
                                        this.data = t
                                    }
                                    function n(t, e) {
                                        this.typeNumber = t,
                                        this.errorCorrectLevel = e,
                                        this.modules = null,
                                        this.moduleCount = 0,
                                        this.dataCache = null,
                                        this.dataList = []
                                    }
                                    function o(t, e) {
                                        if (void 0 == t.length) throw Error(t.length + "/" + e);
                                        for (var i = 0; i < t.length && 0 == t[i];) i++;
                                        this.num = Array(t.length - i + e);
                                        for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
                                    }
                                    function a(t, e) {
                                        this.totalCount = t,
                                        this.dataCount = e
                                    }
                                    function s() {
                                        this.buffer = [],
                                        this.length = 0
                                    }
                                    var r;
                                    i.prototype = {
                                        getLength: function() {
                                            return this.data.length
                                        },
                                        write: function(t) {
                                            for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
                                        }
                                    },
                                    n.prototype = {
                                        addData: function(t) {
                                            this.dataList.push(new i(t)),
                                            this.dataCache = null
                                        },
                                        isDark: function(t, e) {
                                            if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw Error(t + "," + e);
                                            return this.modules[t][e]
                                        },
                                        getModuleCount: function() {
                                            return this.moduleCount
                                        },
                                        make: function() {
                                            if (1 > this.typeNumber) {
                                                for (var t = 1,
                                                t = 1; 40 > t; t++) {
                                                    for (var e = a.getRSBlocks(t, this.errorCorrectLevel), i = new s, n = 0, o = 0; o < e.length; o++) n += e[o].dataCount;
                                                    for (o = 0; o < this.dataList.length; o++) e = this.dataList[o],
                                                    i.put(e.mode, 4),
                                                    i.put(e.getLength(), l.getLengthInBits(e.mode, t)),
                                                    e.write(i);
                                                    if (i.getLengthInBits() <= 8 * n) break
                                                }
                                                this.typeNumber = t
                                            }
                                            this.makeImpl(!1, this.getBestMaskPattern())
                                        },
                                        makeImpl: function(t, e) {
                                            this.moduleCount = 4 * this.typeNumber + 17,
                                            this.modules = Array(this.moduleCount);
                                            for (var i = 0; i < this.moduleCount; i++) {
                                                this.modules[i] = Array(this.moduleCount);
                                                for (var o = 0; o < this.moduleCount; o++) this.modules[i][o] = null
                                            }
                                            this.setupPositionProbePattern(0, 0),
                                            this.setupPositionProbePattern(this.moduleCount - 7, 0),
                                            this.setupPositionProbePattern(0, this.moduleCount - 7),
                                            this.setupPositionAdjustPattern(),
                                            this.setupTimingPattern(),
                                            this.setupTypeInfo(t, e),
                                            7 <= this.typeNumber && this.setupTypeNumber(t),
                                            null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                                            this.mapData(this.dataCache, e)
                                        },
                                        setupPositionProbePattern: function(t, e) {
                                            for (var i = -1; 7 >= i; i++) if (! ( - 1 >= t + i || this.moduleCount <= t + i)) for (var n = -1; 7 >= n; n++) - 1 >= e + n || this.moduleCount <= e + n || (this.modules[t + i][e + n] = 0 <= i && 6 >= i && (0 == n || 6 == n) || 0 <= n && 6 >= n && (0 == i || 6 == i) || 2 <= i && 4 >= i && 2 <= n && 4 >= n)
                                        },
                                        getBestMaskPattern: function() {
                                            for (var t = 0,
                                            e = 0,
                                            i = 0; 8 > i; i++) {
                                                this.makeImpl(!0, i);
                                                var n = l.getLostPoint(this); (0 == i || t > n) && (t = n, e = i)
                                            }
                                            return e
                                        },
                                        createMovieClip: function(t, e, i) {
                                            for (t = t.createEmptyMovieClip(e, i), this.make(), e = 0; e < this.modules.length; e++) for (var i = 1 * e,
                                            n = 0; n < this.modules[e].length; n++) {
                                                var o = 1 * n;
                                                this.modules[e][n] && (t.beginFill(0, 100), t.moveTo(o, i), t.lineTo(o + 1, i), t.lineTo(o + 1, i + 1), t.lineTo(o, i + 1), t.endFill())
                                            }
                                            return t
                                        },
                                        setupTimingPattern: function() {
                                            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
                                            for (t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
                                        },
                                        setupPositionAdjustPattern: function() {
                                            for (var t = l.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
                                                var n = t[e],
                                                o = t[i];
                                                if (null == this.modules[n][o]) for (var a = -2; 2 >= a; a++) for (var s = -2; 2 >= s; s++) this.modules[n + a][o + s] = -2 == a || 2 == a || -2 == s || 2 == s || 0 == a && 0 == s
                                            }
                                        },
                                        setupTypeNumber: function(t) {
                                            for (var e = l.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
                                                var n = !t && 1 == (e >> i & 1);
                                                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
                                            }
                                            for (i = 0; 18 > i; i++) n = !t && 1 == (e >> i & 1),
                                            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
                                        },
                                        setupTypeInfo: function(t, e) {
                                            for (var i = l.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), n = 0; 15 > n; n++) {
                                                var o = !t && 1 == (i >> n & 1);
                                                6 > n ? this.modules[n][8] = o: 8 > n ? this.modules[n + 1][8] = o: this.modules[this.moduleCount - 15 + n][8] = o
                                            }
                                            for (n = 0; 15 > n; n++) o = !t && 1 == (i >> n & 1),
                                            8 > n ? this.modules[8][this.moduleCount - n - 1] = o: 9 > n ? this.modules[8][15 - n - 1 + 1] = o: this.modules[8][15 - n - 1] = o;
                                            this.modules[this.moduleCount - 8][8] = !t
                                        },
                                        mapData: function(t, e) {
                                            for (var i = -1,
                                            n = this.moduleCount - 1,
                                            o = 7,
                                            a = 0,
                                            s = this.moduleCount - 1; 0 < s; s -= 2) for (6 == s && s--;;) {
                                                for (var r = 0; 2 > r; r++) if (null == this.modules[n][s - r]) {
                                                    var d = !1;
                                                    a < t.length && (d = 1 == (t[a] >>> o & 1)),
                                                    l.getMask(e, n, s - r) && (d = !d),
                                                    this.modules[n][s - r] = d,
                                                    o--,
                                                    -1 == o && (a++, o = 7)
                                                }
                                                if (0 > (n += i) || this.moduleCount <= n) {
                                                    n -= i,
                                                    i = -i;
                                                    break
                                                }
                                            }
                                        }
                                    },
                                    n.PAD0 = 236,
                                    n.PAD1 = 17,
                                    n.createData = function(t, e, i) {
                                        for (var e = a.getRSBlocks(t, e), o = new s, r = 0; r < i.length; r++) {
                                            var d = i[r];
                                            o.put(d.mode, 4),
                                            o.put(d.getLength(), l.getLengthInBits(d.mode, t)),
                                            d.write(o)
                                        }
                                        for (r = t = 0; r < e.length; r++) t += e[r].dataCount;
                                        if (o.getLengthInBits() > 8 * t) throw Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * t + ")");
                                        for (o.getLengthInBits() + 4 <= 8 * t && o.put(0, 4); 0 != o.getLengthInBits() % 8;) o.putBit(!1);
                                        for (; ! (o.getLengthInBits() >= 8 * t) && (o.put(n.PAD0, 8), !(o.getLengthInBits() >= 8 * t));) o.put(n.PAD1, 8);
                                        return n.createBytes(o, e)
                                    },
                                    n.createBytes = function(t, e) {
                                        for (var i = 0,
                                        n = 0,
                                        a = 0,
                                        s = Array(e.length), r = Array(e.length), d = 0; d < e.length; d++) {
                                            var c = e[d].dataCount,
                                            u = e[d].totalCount - c,
                                            n = Math.max(n, c),
                                            a = Math.max(a, u);
                                            s[d] = Array(c);
                                            for (var h = 0; h < s[d].length; h++) s[d][h] = 255 & t.buffer[h + i];
                                            for (i += c, h = l.getErrorCorrectPolynomial(u), c = new o(s[d], h.getLength() - 1).mod(h), r[d] = Array(h.getLength() - 1), h = 0; h < r[d].length; h++) u = h + c.getLength() - r[d].length,
                                            r[d][h] = 0 <= u ? c.get(u) : 0
                                        }
                                        for (h = d = 0; h < e.length; h++) d += e[h].totalCount;
                                        for (i = Array(d), h = c = 0; h < n; h++) for (d = 0; d < e.length; d++) h < s[d].length && (i[c++] = s[d][h]);
                                        for (h = 0; h < a; h++) for (d = 0; d < e.length; d++) h < r[d].length && (i[c++] = r[d][h]);
                                        return i
                                    },
                                    r = 4;
                                    for (var l = {
                                        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                                        G15: 1335,
                                        G18: 7973,
                                        G15_MASK: 21522,
                                        getBCHTypeInfo: function(t) {
                                            for (var e = t << 10; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G15);) e ^= l.G15 << l.getBCHDigit(e) - l.getBCHDigit(l.G15);
                                            return (t << 10 | e) ^ l.G15_MASK
                                        },
                                        getBCHTypeNumber: function(t) {
                                            for (var e = t << 12; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G18);) e ^= l.G18 << l.getBCHDigit(e) - l.getBCHDigit(l.G18);
                                            return t << 12 | e
                                        },
                                        getBCHDigit: function(t) {
                                            for (var e = 0; 0 != t;) e++,
                                            t >>>= 1;
                                            return e
                                        },
                                        getPatternPosition: function(t) {
                                            return l.PATTERN_POSITION_TABLE[t - 1]
                                        },
                                        getMask: function(t, e, i) {
                                            switch (t) {
                                            case 0:
                                                return 0 == (e + i) % 2;
                                            case 1:
                                                return 0 == e % 2;
                                            case 2:
                                                return 0 == i % 3;
                                            case 3:
                                                return 0 == (e + i) % 3;
                                            case 4:
                                                return 0 == (Math.floor(e / 2) + Math.floor(i / 3)) % 2;
                                            case 5:
                                                return 0 == e * i % 2 + e * i % 3;
                                            case 6:
                                                return 0 == (e * i % 2 + e * i % 3) % 2;
                                            case 7:
                                                return 0 == (e * i % 3 + (e + i) % 2) % 2;
                                            default:
                                                throw Error("bad maskPattern:" + t)
                                            }
                                        },
                                        getErrorCorrectPolynomial: function(t) {
                                            for (var e = new o([1], 0), i = 0; i < t; i++) e = e.multiply(new o([1, d.gexp(i)], 0));
                                            return e
                                        },
                                        getLengthInBits: function(t, e) {
                                            if (1 <= e && 10 > e) switch (t) {
                                            case 1:
                                                return 10;
                                            case 2:
                                                return 9;
                                            case r:
                                            case 8:
                                                return 8;
                                            default:
                                                throw Error("mode:" + t)
                                            } else if (27 > e) switch (t) {
                                            case 1:
                                                return 12;
                                            case 2:
                                                return 11;
                                            case r:
                                                return 16;
                                            case 8:
                                                return 10;
                                            default:
                                                throw Error("mode:" + t)
                                            } else {
                                                if (! (41 > e)) throw Error("type:" + e);
                                                switch (t) {
                                                case 1:
                                                    return 14;
                                                case 2:
                                                    return 13;
                                                case r:
                                                    return 16;
                                                case 8:
                                                    return 12;
                                                default:
                                                    throw Error("mode:" + t)
                                                }
                                            }
                                        },
                                        getLostPoint: function(t) {
                                            for (var e = t.getModuleCount(), i = 0, n = 0; n < e; n++) for (var o = 0; o < e; o++) {
                                                for (var a = 0,
                                                s = t.isDark(n, o), r = -1; 1 >= r; r++) if (! (0 > n + r || e <= n + r)) for (var l = -1; 1 >= l; l++) 0 > o + l || e <= o + l || 0 == r && 0 == l || s == t.isDark(n + r, o + l) && a++;
                                                5 < a && (i += 3 + a - 5)
                                            }
                                            for (n = 0; n < e - 1; n++) for (o = 0; o < e - 1; o++) a = 0,
                                            t.isDark(n, o) && a++,
                                            t.isDark(n + 1, o) && a++,
                                            t.isDark(n, o + 1) && a++,
                                            t.isDark(n + 1, o + 1) && a++,
                                            (0 == a || 4 == a) && (i += 3);
                                            for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (i += 40);
                                            for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (i += 40);
                                            for (o = a = 0; o < e; o++) for (n = 0; n < e; n++) t.isDark(n, o) && a++;
                                            return t = Math.abs(100 * a / e / e - 50) / 5,
                                            i + 10 * t
                                        }
                                    },
                                    d = {
                                        glog: function(t) {
                                            if (1 > t) throw Error("glog(" + t + ")");
                                            return d.LOG_TABLE[t]
                                        },
                                        gexp: function(t) {
                                            for (; 0 > t;) t += 255;
                                            for (; 256 <= t;) t -= 255;
                                            return d.EXP_TABLE[t]
                                        },
                                        EXP_TABLE: Array(256),
                                        LOG_TABLE: Array(256)
                                    },
                                    c = 0; 8 > c; c++) d.EXP_TABLE[c] = 1 << c;
                                    for (c = 8; 256 > c; c++) d.EXP_TABLE[c] = d.EXP_TABLE[c - 4] ^ d.EXP_TABLE[c - 5] ^ d.EXP_TABLE[c - 6] ^ d.EXP_TABLE[c - 8];
                                    for (c = 0; 255 > c; c++) d.LOG_TABLE[d.EXP_TABLE[c]] = c;
                                    return o.prototype = {
                                        get: function(t) {
                                            return this.num[t]
                                        },
                                        getLength: function() {
                                            return this.num.length
                                        },
                                        multiply: function(t) {
                                            for (var e = Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < t.getLength(); n++) e[i + n] ^= d.gexp(d.glog(this.get(i)) + d.glog(t.get(n)));
                                            return new o(e, 0)
                                        },
                                        mod: function(t) {
                                            if (0 > this.getLength() - t.getLength()) return this;
                                            for (var e = d.glog(this.get(0)) - d.glog(t.get(0)), i = Array(this.getLength()), n = 0; n < this.getLength(); n++) i[n] = this.get(n);
                                            for (n = 0; n < t.getLength(); n++) i[n] ^= d.gexp(d.glog(t.get(n)) + e);
                                            return new o(i, 0).mod(t)
                                        }
                                    },
                                    a.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                                    a.getRSBlocks = function(t, e) {
                                        var i = a.getRsBlockTable(t, e);
                                        if (void 0 == i) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                                        for (var n = i.length / 3,
                                        o = [], s = 0; s < n; s++) for (var r = i[3 * s + 0], l = i[3 * s + 1], d = i[3 * s + 2], c = 0; c < r; c++) o.push(new a(l, d));
                                        return o
                                    },
                                    a.getRsBlockTable = function(t, e) {
                                        switch (e) {
                                        case 1:
                                            return a.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                                        case 0:
                                            return a.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                                        case 3:
                                            return a.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                                        case 2:
                                            return a.RS_BLOCK_TABLE[4 * (t - 1) + 3]
                                        }
                                    },
                                    s.prototype = {
                                        get: function(t) {
                                            return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
                                        },
                                        put: function(t, e) {
                                            for (var i = 0; i < e; i++) this.putBit(1 == (t >>> e - i - 1 & 1))
                                        },
                                        getLengthInBits: function() {
                                            return this.length
                                        },
                                        putBit: function(t) {
                                            var e = Math.floor(this.length / 8);
                                            this.buffer.length <= e && this.buffer.push(0),
                                            t && (this.buffer[e] |= 128 >>> this.length % 8),
                                            this.length++
                                        }
                                    },
                                    "string" == typeof e && (e = {
                                        text: e
                                    }),
                                    e = t.extend({},
                                    {
                                        render: "canvas",
                                        width: 256,
                                        height: 256,
                                        typeNumber: -1,
                                        correctLevel: 2,
                                        background: "#ffffff",
                                        foreground: "#000000"
                                    },
                                    e),
                                    this.each(function() {
                                        var i;
                                        if ("canvas" == e.render) {
                                            i = new n(e.typeNumber, e.correctLevel),
                                            i.addData(e.text),
                                            i.make();
                                            var o = document.createElement("canvas");
                                            o.width = e.width,
                                            o.height = e.height;
                                            for (var a = o.getContext("2d"), s = e.width / i.getModuleCount(), r = e.height / i.getModuleCount(), l = 0; l < i.getModuleCount(); l++) for (var d = 0; d < i.getModuleCount(); d++) {
                                                a.fillStyle = i.isDark(l, d) ? e.foreground: e.background;
                                                var c = Math.ceil((d + 1) * s) - Math.floor(d * s),
                                                u = Math.ceil((l + 1) * s) - Math.floor(l * s);
                                                a.fillRect(Math.round(d * s), Math.round(l * r), c, u)
                                            }
                                        } else for (i = new n(e.typeNumber, e.correctLevel), i.addData(e.text), i.make(), o = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), a = e.width / i.getModuleCount(), s = e.height / i.getModuleCount(), r = 0; r < i.getModuleCount(); r++) for (l = t("<tr></tr>").css("height", s + "px").appendTo(o), d = 0; d < i.getModuleCount(); d++) t("<td></td>").css("width", a + "px").css("background-color", i.isDark(r, d) ? e.foreground: e.background).appendTo(l);
                                        i = o,
                                        jQuery(i).appendTo(this)
                                    })
                                }
                            } (jQuery)
                        },
                        {}],
                        7 : [function(t, e, i) { !
                            function(t) {
                                t(document).ready(function() {
                                    "Microsoft Internet Explorer" == navigator.appName && "9." == navigator.appVersion.match(/9./i) && t(".edit-cover, .edit-avatar").hide();
                                    var e, i, n = 0;
                                    t(document).on("click", ".edit-avatar, .edit-cover",
                                    function(o) {
                                        o.preventDefault(),
                                        n = t(this).hasClass("edit-cover") ? 1 : 0,
                                        i = t(this).data("user");
                                        var a = cropperModal({
                                            lg: n,
                                            title: _wpcom_js.cropper.title,
                                            desc: n ? _wpcom_js.cropper.desc_1: _wpcom_js.cropper.desc_0,
                                            btn: _wpcom_js.cropper.btn,
                                            loading: _wpcom_js.cropper.loading,
                                            apply: _wpcom_js.cropper.apply,
                                            cancel: _wpcom_js.cropper.cancel
                                        });
                                        t("#crop-modal").length ? t("#crop-modal").replaceWith(a) : t("body").append(a),
                                        e && (e.destroy(), e = null, t(".crop-img-wrap").hide(), t(".crop-img-btn").show(), t("#crop-img").remove(), t(".crop-notice").text("")),
                                        t("#crop-modal").modal("show")
                                    }).on("change", "#img-file",
                                    function(i) {
                                        if (t(".crop-notice").text(""), !this.files.length) return ! 1;
                                        if (this.files[0].size / 1024 > 5120) return alert(_wpcom_js.cropper.alert_size),
                                        !1;
                                        if (this.files[0].type.match(/image.*/)) {
                                            var o;
                                            o = window.URL.createObjectURL(this.files[0]),
                                            t(".crop-img-wrap").append('<img id="crop-img" src="' + o + '">').show(),
                                            t(".crop-img-btn").hide(),
                                            e = new Cropper(document.getElementById("crop-img"), {
                                                aspectRatio: n ? 2.7 : 1,
                                                minContainerHeight: 300,
                                                viewMode: n ? 3 : 1,
                                                ready: function() {
                                                    var t = {
                                                        width: 300,
                                                        height: 300
                                                    };
                                                    n && (t = {
                                                        width: 810,
                                                        height: 300,
                                                        left: 44
                                                    }),
                                                    e.setCropBoxData(t)
                                                }
                                            }),
                                            t(this).val("")
                                        } else alert(_wpcom_js.cropper.alert_filetype)
                                    }).on("click", ".j-crop-close",
                                    function() {
                                        e && e.destroy(),
                                        e = null,
                                        t(".crop-img-wrap").hide(),
                                        t(".crop-img-btn").show(),
                                        t("#crop-img").remove(),
                                        t(".crop-notice").text("")
                                    }).on("click", ".j-crop-apply",
                                    function() {
                                        var o = t(this).button("loading"),
                                        a = t(".crop-notice");
                                        if (a.text(""), e) {
                                            if (e.crop().cropped) {
                                                var s = {
                                                    minWidth: 200,
                                                    minHeight: 200,
                                                    maxWidth: 600,
                                                    maxHeight: 600,
                                                    fillColor: "#fff",
                                                    imageSmoothingQuality: "high"
                                                };
                                                n && (s = {
                                                    minWidth: 810,
                                                    minHeight: 300,
                                                    maxWidth: 1620,
                                                    maxHeight: 600,
                                                    fillColor: "#fff",
                                                    imageSmoothingQuality: "high"
                                                });
                                                var r = t.extend(e.getCropBoxData(), s),
                                                l = e.getCroppedCanvas(r).toDataURL("image/jpeg", 1);
                                                if (l) {
                                                    var d = new FormData;
                                                    d.append("action", "wpcom_cropped_upload"),
                                                    d.append("nonce", t("#wpcom_cropper_nonce").val()),
                                                    d.append("image", l),
                                                    d.append("type", n),
                                                    i && d.append("user", i),
                                                    t.ajax(_wpcom_js.ajaxurl, {
                                                        method: "POST",
                                                        data: d,
                                                        dataType: "json",
                                                        processData: !1,
                                                        contentType: !1,
                                                        success: function(e) {
                                                            "1" == e.result ? (n ? t(".wpcom-profile-head").css("background-image", "url(" + e.url + ")") : t(".member-account-avatar img.avatar,.wpcom-ph-avatar img.avatar,#j-user-wrap img.avatar").replaceWith('<img class="avatar photo" src="' + e.url + "?t=" + Date.parse(new Date) / 1e3 + '">'), t("#crop-modal").modal("hide")) : "-1" == e.result ? a.text(_wpcom_js.cropper.err_nonce) : "-2" == e.result ? a.text(_wpcom_js.cropper.err_fail) : "-3" == e.result && a.text(_wpcom_js.cropper.err_login),
                                                            o.button("reset")
                                                        },
                                                        error: function() {
                                                            alert(_wpcom_js.cropper.ajaxerr),
                                                            o.button("reset")
                                                        }
                                                    })
                                                } else o.button("reset")
                                            } else o.button("reset")
                                        } else a.text(_wpcom_js.cropper.err_empty),
                                        o.button("reset")
                                    })
                                });
                                var e = t("#j-user-wrap");
                                e.length && t.ajax({
                                    type: "POST",
                                    url: _wpcom_js.ajaxurl,
                                    data: {
                                        action: "wpcom_is_login"
                                    },
                                    dataType: "json",
                                    success: function(i) {
                                        if (0 == i.result) {
                                            var n = '<ul class="profile"><li class="menu-item dropdown"><a class="menu-item-user" href="' + (i.account ? i.account: i.url) + '"> ' + i.avatar + i.display_name + "</a>";
                                            if (i.menus && i.menus.length) {
                                                n += '<ul class="dropdown-menu">';
                                                for (var o = 0; o < i.menus.length; o++) n += '<li><a href="' + i.menus[o].url + '">' + i.menus[o].title + "</a></li>";
                                                n += "</ul>"
                                            }
                                            n += "</li></ul>",
                                            e.html(n)
                                        } else e.find(".login").addClass("cur");
                                        i.wc && (i.wc.fragments && i.wc.fragments["a.cart-contents"] && t("header .shopping-cart").html(i.wc.fragments["a.cart-contents"]), setTimeout(function() {
                                            i.wc.fragments && i.wc.fragments["div.widget_shopping_cart_content"] && t("header .shopping-cart").append(i.wc.fragments["div.widget_shopping_cart_content"])
                                        },
                                        100))
                                    }
                                }),
                                t(".social-login-wrap").on("submit", "#sl-form-create",
                                function() {
                                    var e = t(this);
                                    if (e.find(".sl-input-submit.disabled").length) return ! 1;
                                    e.find(".sl-input-submit").addClass("disabled");
                                    for (var i = 0,
                                    n = e.find(".sl-input input"), o = 0; o < n.length; o++) {
                                        var a = t(n[o]).val();
                                        "" == t.trim(a) && (t(n[o]).addClass("error"), i = 1)
                                    }
                                    return i ? e.find(".sl-input-submit").removeClass("disabled") : t.ajax({
                                        url: _wpcom_js.ajaxurl,
                                        data: t(this).serialize() + "&action=wpcom_sl_login",
                                        type: "POST",
                                        dataType: "json",
                                        success: function(t) {
                                            e.find(".sl-input-submit").removeClass("disabled"),
                                            "-1" == t ? e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error") : "1" == t.result ? e.find(".sl-result").text("ç”¨æˆ·åæˆ–å¯†ç ä¸èƒ½ä¸ºç©º").addClass("error") : "2" == t.result ? e.find(".sl-result").text("ç”¨æˆ·åæˆ–å¯†ç é”™è¯¯").addClass("error") : "3" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹åº”ç”¨æŽˆæƒå¤±è´¥ï¼Œè¯·é‡è¯•").addClass("error") : "4" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹å¸å·å·²ä¸Žæœ¬ç«™å…¶ä»–å¸å·ç»‘å®š").addClass("error") : "0" == t.result && (e.find(".sl-result").text("ç»‘å®šæˆåŠŸï¼").removeClass("error"), setTimeout(function() {
                                                window.location.href = t.redirect
                                            },
                                            100))
                                        },
                                        error: function(t) {
                                            e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error"),
                                            e.find(".sl-input-submit").removeClass("disabled")
                                        }
                                    }),
                                    !1
                                }).on("submit", "#sl-form-bind",
                                function() {
                                    var e = t(this);
                                    if (e.find(".sl-input-submit.disabled").length) return ! 1;
                                    e.find(".sl-input-submit").addClass("disabled");
                                    for (var i = 0,
                                    n = e.find(".sl-input input"), o = 0; o < n.length; o++) {
                                        var a = t(n[o]).val();
                                        "" == t.trim(a) && (t(n[o]).addClass("error"), i = 1)
                                    }
                                    return i ? e.find(".sl-input-submit").removeClass("disabled") : t.ajax({
                                        url: _wpcom_js.ajaxurl,
                                        data: t(this).serialize() + "&action=wpcom_sl_create",
                                        type: "POST",
                                        dataType: "json",
                                        success: function(t) {
                                            "-1" == t ? e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error") : "1" == t.result ? e.find(".sl-result").text("è¯·è¾“å…¥ç”µå­é‚®ç®±").addClass("error") : "2" == t.result ? e.find(".sl-result").text("è¯·è¾“å…¥æ­£ç¡®çš„ç”µå­é‚®ç®±").addClass("error") : "3" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹åº”ç”¨æŽˆæƒå¤±è´¥ï¼Œè¯·é‡è¯•").addClass("error") : "4" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹å¸å·å·²ä¸Žæœ¬ç«™å…¶ä»–å¸å·ç»‘å®š").addClass("error") : "5" == t.result ? e.find(".sl-result").text("è¯¥é‚®ç®±å·²è¢«æ³¨å†Œ").addClass("error") : "0" == t.result ? (e.find(".sl-result").text("æ³¨å†ŒæˆåŠŸï¼").removeClass("error"), setTimeout(function() {
                                                window.location.href = t.redirect
                                            },
                                            100)) : t.result && t.msg && e.find(".sl-result").text(t.msg).addClass("error"),
                                            e.find(".sl-input-submit").removeClass("disabled")
                                        },
                                        error: function(t) {
                                            e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error"),
                                            e.find(".sl-input-submit").removeClass("disabled")
                                        }
                                    }),
                                    !1
                                }).on("input change", ".sl-input input",
                                function() {
                                    var e = t(this);
                                    e.removeClass("error"),
                                    e.closest(".sl-info-form").find(".sl-result").text("")
                                }).on("click", ".sl-form-title",
                                function() {
                                    var e = t(this).closest(".sl-form-item");
                                    t(".sl-form-item").removeClass("active"),
                                    e.addClass("active")
                                })
                            } (jQuery)
                        },
                        {}],
                        8 : [function(t, e, i) {
                            e.exports = function(t) {
                                function e(t, e, i, n, o) {
                                    for (var a = 0,
                                    s = 0,
                                    r = 0,
                                    l = 0; l < t.length; l++) r = o.measureText(t[l]).width,
                                    a += r,
                                    a > 560 && (o.fillText(t.substring(s, l), e, i), i += n, a = 0, s = l),
                                    l == t.length - 1 && (o.fillText(t.substring(s, l + 1), e, i), i += n);
                                    return i
                                } !
                                function() {
                                    var i = document.createElement("canvas"),
                                    n = i.getContext("2d");
                                    i.width = 640,
                                    i.height = 1e4;
                                    var o = 0;
                                    n.fillStyle = "#fff",
                                    n.fillRect(0, 0, i.width, i.height);
                                    var a = new Image;
                                    a.crossOrigin = "anonymous",
                                    t.head.match(/^\/\//) && (t.head = window.location.protocol + t.head),
                                    a.src = t.head,
                                    a.onerror = function(t) {
                                        alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                                        $(".mobile-share-bg,.mobile-share-wrap").remove()
                                    },
                                    a.onload = function() {
                                        o += 640 / a.width * a.height,
                                        n.drawImage(this, 0, 0, a.width, a.height, 0, 0, 640, 640 / a.width * a.height);
                                        var s = new Date(1e3 * t.timestamp),
                                        r = s.getDate(),
                                        l = s.getFullYear(),
                                        d = s.getMonth() + 1;
                                        r = r < 10 ? "0" + r: "" + r,
                                        d = d < 10 ? "0" + d: "" + d,
                                        d = l + "/" + d;
                                        var c = 0,
                                        u = 0;
                                        n.fillStyle = "#fff",
                                        n.textAlign = "center",
                                        n.font = "68px PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif";
                                        for (var h = 0; h < r.length; h++) c += n.measureText(r[h]).width;
                                        n.fillText(r, 80, o - 72),
                                        n.fillStyle = "#fff",
                                        n.textAlign = "center",
                                        n.font = "30px PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif";
                                        for (var h = 0; h < d.length; h++) u += n.measureText(d[h]).width;
                                        n.fillText(d, 80, o - 28);
                                        var p = parseInt(u > c ? u: c);
                                        n.moveTo(80 - p / 2, o - 60),
                                        n.lineTo(80 - p / 2 + p, o - 60),
                                        n.lineWidth = 1,
                                        n.strokeStyle = "rgba(255,255,255, 1)",
                                        n.stroke(),
                                        n.fillStyle = "#000",
                                        n.textAlign = "center",
                                        n.font = "600 36px serif",
                                        o += 80,
                                        o = e(jQuery("<div>").html(t.title).text(), 320, o, 50, n),
                                        n.textAlign = "left",
                                        n.fillStyle = "#333",
                                        n.font = "300 26px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif",
                                        o += 30,
                                        o = e(jQuery("<div>").html(t.excerpt).text(), 30, o, 42, n),
                                        o += 100,
                                        n.lineWidth = 1,
                                        n.beginPath(),
                                        n.setLineDash([7, 7]),
                                        n.strokeStyle = "#ccc",
                                        n.moveTo(0, o),
                                        n.lineTo(640, o),
                                        n.stroke();
                                        var f = new Image;
                                        f.crossOrigin = "anonymous",
                                        t.logo.match(/^\/\//) && (t.logo = window.location.protocol + t.logo),
                                        f.src = t.logo,
                                        f.onerror = function(t) {
                                            alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                                            $(".mobile-share-bg,.mobile-share-wrap").remove()
                                        },
                                        f.onload = function() {
                                            o += 40;
                                            var e = 400 / f.width * f.height;
                                            e = e > 100 ? 100 : e;
                                            var a = f.width / (f.height / e);
                                            a = a > 400 ? 400 : a,
                                            e = a / f.width * f.height,
                                            n.drawImage(this, 0, 0, f.width, f.height, 30, o + (100 - e) / 2, a, e);
                                            var s = new Image;
                                            s.src = t.qrcode,
                                            s.onerror = function(t) {
                                                alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                                                $(".mobile-share-bg,.mobile-share-wrap").remove()
                                            },
                                            s.onload = function() {
                                                n.drawImage(this, 0, 0, s.width, s.height, 510, o, 100, 100 / s.width * s.height);
                                                var a = 100 / s.width * s.height;
                                                o += a > e ? a: e,
                                                o += 40;
                                                var r = n.getImageData(0, 0, 640, o);
                                                i.height = o,
                                                n.putImageData(r, 0, 0);
                                                var l = i.toDataURL("image/jpeg", 1);
                                                t.callback(l)
                                            }
                                        }
                                    }
                                } ()
                            }
                        },
                        {}],
                        9 : [function(t, e, i) {
                            t("../../../Themer/src/js/bootstrap"),
                            t("../../../Themer/src/js/jquery.flexslider");
                            var n = t("../../../Themer/src/js/text-image");
                            t("../../../Themer/src/js/member"),
                            t("../../../Themer/src/js/common"),
                            t("../../../Themer/src/js/jquery.qrcode.min"),
                            function(t) {
                                function e() {
                                    d.offset().top + d.outerHeight() > i.scrollTop() + o ? (d.addClass("fixed"), d.find(".entry-bar-inner").css("width", t(".content").width())) : d.removeClass("fixed")
                                }
                                var i = t(window),
                                o = i.height(),
                                a = 0,
                                s = void 0 !== _wpcom_js.webp && _wpcom_js.webp ? _wpcom_js.webp: null,
                                r = t(".navbar-toggle").is(":hidden");
                                i.resize(function() {
                                    r = t(".navbar-toggle").is(":hidden"),
                                    o = i.height()
                                }),
                                t(".main-slider").flexslider({
                                    animation: "slide",
                                    slideshowSpeed: _wpcom_js.slide_speed ? _wpcom_js.slide_speed: 5e3,
                                    pauseOnAction: !1,
                                    pauseOnHover: !0,
                                    touch: !0,
                                    useCSS: !1
                                }),
                                t(".woocommerce-product-gallery").flexslider({
                                    selector: ".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",
                                    rtl: !1,
                                    animation: "slide",
                                    smoothHeight: !1,
                                    directionNav: !1,
                                    controlNav: "thumbnails",
                                    slideshow: !1,
                                    animationSpeed: 500,
                                    animationLoop: !1,
                                    start: function() {
                                        t(window).trigger("scroll")
                                    },
                                    after: function() {
                                        t(window).trigger("scroll")
                                    }
                                });
                                var l = t(".sidebar");
                                t(document).ready(function() {
                                    var e = t(".j-qrcode");
                                    e.length && t.each(e,
                                    function(e, i) {
                                        var n = t(i),
                                        o = n.data("text");
                                        n.qrcode({
                                            text: o
                                        })
                                    }),
                                    t(".modules-navs").each(function(e, i) {
                                        var n = t(i),
                                        o = 0,
                                        a = n.find(".list-navs>.navs-link");
                                        a.outerHeight(""),
                                        a.each(function(e, i) {
                                            var n = t(i).outerHeight();
                                            n > o && (o = n)
                                        }),
                                        a.outerHeight(o)
                                    });
                                    var a = t("#wrap"),
                                    s = a.height(),
                                    r = t("footer.footer"),
                                    d = t(".member-form-wrap");
                                    if (t(document).bind("DOMSubtreeModified",
                                    function() {
                                        s = a.height(),
                                        a.css("min-height", o - a.offset().top - r.outerHeight()),
                                        d.length && t(".page-template-page-fullnotitle").length && (d.outerHeight(), d.css("margin-top", (s - d.outerHeight()) / 2))
                                    }), t(document).on("click", ".j-mobile-share",
                                    function() {
                                        var e = t(this),
                                        i = e.data("id");
                                        t("body").append('<div class="mobile-share-bg"><div class="top_tips">è¯·é•¿æŒ‰å›¾ç‰‡ï¼Œå°†å†…å®¹æŽ¨èç»™å¥½å‹</div></div><div class="mobile-share-wrap"><div class="loading">åˆ†äº«å›¾ç‰‡ç”Ÿæˆä¸­...</div></div>'),
                                        t.ajax({
                                            url: _wpcom_js.ajaxurl,
                                            data: {
                                                id: i,
                                                action: "wpcom_mobile_share"
                                            },
                                            method: "POST",
                                            dataType: "json",
                                            timeout: 1e4,
                                            success: function(i) {
                                                i.callback = function(e) {
                                                    t(".mobile-share-wrap").html('<img src="' + e + '"><div class="mobile-share-close">Ã—</div>'),
                                                    t(".mobile-share-bg .top_tips").show()
                                                };
                                                var o = t(".meta-item.wechat");
                                                o = o.length ? o: e.closest(".kx-meta").next().find(".wechat-img"),
                                                i.qrcode = o.find("canvas")[0].toDataURL(),
                                                i.head && i.logo && i.qrcode ? n(i) : (alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"), t(".mobile-share-bg,.mobile-share-wrap").remove())
                                            },
                                            error: function() {
                                                alert("èŽ·å–åˆ†äº«å›¾ç‰‡å¤±è´¥"),
                                                t(".mobile-share-bg,.mobile-share-wrap").remove()
                                            }
                                        })
                                    }).on("click", ".mobile-share-close",
                                    function() {
                                        t(".mobile-share-bg,.mobile-share-wrap").remove()
                                    }).on("click", ".kx-new",
                                    function() {
                                        window.location.href = window.location.href
                                    }).on("click", ".widget-kx-list .kx-title",
                                    function() {
                                        var e = t(this);
                                        e.next().slideToggle("fast"),
                                        e.closest(".kx-item").toggleClass("active"),
                                        i.trigger("scroll")
                                    }), l.length && l.find(".widget").length && i.width() > 991) {
                                        var c = l.offset().top,
                                        u = 0,
                                        h = 0,
                                        p = 0,
                                        r = t(t(".j-partner").length ? ".j-partner": "footer.footer");
                                        t(document).bind("DOMSubtreeModified",
                                        function() {
                                            u = l.outerHeight(),
                                            h = r.offset().top,
                                            p = t(".content").outerHeight()
                                        }),
                                        i.scroll(function() {
                                            if (! (p <= u)) {
                                                var t = i.scrollTop();
                                                o - c > u ? t + u + c > h ? l.removeClass("fixed").addClass("abs").css({
                                                    bottom: 0,
                                                    top: "auto"
                                                }) : l.removeClass("abs").addClass("fixed").css({
                                                    bottom: "auto",
                                                    top: c
                                                }) : t + o > h ? l.addClass("abs").removeClass("fixed") : t + o > c + u ? l.addClass("fixed").removeClass("abs") : l.removeClass("fixed").removeClass("abs")
                                            }
                                        })
                                    }
                                    var f = t(".kx-list");
                                    if (f.length) {
                                        window.kxDate = f.find(".kx-date");
                                        var m;
                                        m = t("#wpadminbar").length ? t("#wpadminbar").outerHeight() + t("header.header").outerHeight() : t("header.header").outerHeight();
                                        var g = kxDate.first().offset().top,
                                        v = {
                                            $el: null
                                        },
                                        b = t(".kx-new"),
                                        w = kxDate.first().outerHeight();
                                        i.scroll(function() {
                                            var e = i.scrollTop(),
                                            n = kxDate.length - 1;
                                            t.each(kxDate,
                                            function(i, o) {
                                                var a = t(o),
                                                s = a.offset().top - e - m;
                                                return s > 0 && v.$el && v.top < 0 ? (kxDate.removeClass("fixed"), v.$el.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), void f.css("padding-top", w)) : 0 == i && s <= 0 ? (g - m >= e ? (kxDate.removeClass("fixed"), b.removeClass("fixed"), f.css("padding-top", 0)) : (kxDate.removeClass("fixed"), a.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), f.css("padding-top", w)), v.$el = a, void(v.top = s)) : (i == n && s <= 0 && (kxDate.removeClass("fixed"), a.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), f.css("padding-top", w)), v.$el = a, void(v.top = s))
                                            })
                                        }),
                                        setInterval(function() {
                                            var e = t(".kx-item").first().data("id");
                                            t.ajax({
                                                url: _wpcom_js.ajaxurl,
                                                data: {
                                                    id: e,
                                                    action: "wpcom_new_kuaixun"
                                                },
                                                method: "POST",
                                                dataType: "text",
                                                success: function(e) {
                                                    e >= 1 && t(".kx-new").html("æ‚¨æœ‰" + e + "æ¡æ–°æ¶ˆæ¯ï¼").show()
                                                }
                                            })
                                        },
                                        1e4)
                                    }
                                    t(".kx-list,.widget-kx-list,.entry-footer").on("click", ".share-icon",
                                    function() {
                                        var e = t(this),
                                        i = e.closest(".kx-item"),
                                        n = "";
                                        if (i.length && i.closest(".widget-kx-list").length) {
                                            var o = encodeURIComponent(t.trim(i.find(".kx-title").text())),
                                            a = encodeURIComponent(t.trim(i.find(".kx-content p").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                                            s = i.find(".kx-share").data("url"),
                                            r = "";
                                            i.find(".kx-content img").length && (r = encodeURIComponent(i.find(".kx-content img").attr("src")))
                                        } else if (i.length && i.hasClass("entry-footer")) {
                                            i = t(".entry");
                                            var o = encodeURIComponent(t.trim(i.find(".entry-title").text())),
                                            a = encodeURIComponent(t.trim(i.find(".entry-content").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                                            s = encodeURIComponent(window.location.href),
                                            r = "";
                                            i.find(".entry-content img").length && (r = encodeURIComponent(i.find(".entry-content img").attr("src")))
                                        } else if (i.length) {
                                            var o = encodeURIComponent(t.trim(i.find("h2").text())),
                                            a = encodeURIComponent(t.trim(i.find(".kx-content p").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                                            s = e.closest(".kx-meta").data("url"),
                                            r = "";
                                            i.find(".kx-content img").length && (r = encodeURIComponent(i.find(".kx-content img").attr("src")))
                                        }
                                        if (e.hasClass("weibo")) n = "http://service.weibo.com/share/share.php?url=" + s + "&title=" + o + "&pic=" + r + "&searchPic=true";
                                        else if (e.hasClass("qq")) n = "https://connect.qq.com/widget/shareqq/index.html?url=" + s + "&title=" + o + "&desc=" + a + "&summary=&site=&pics=" + r;
                                        else if (e.hasClass("copy")) if (void 0 !== document.execCommand) {
                                            var l = decodeURIComponent(o) + "\r\n" + decodeURIComponent(a) + "\r\n" + decodeURIComponent(s),
                                            d = document.createElement("textarea");
                                            d.value = l,
                                            t("body").append(d),
                                            d.style.position = "fixed",
                                            d.style.height = 0,
                                            d.select(),
                                            document.execCommand("copy"),
                                            d.remove(),
                                            alert("å¤åˆ¶æˆåŠŸï¼")
                                        } else alert("æµè§ˆå™¨æš‚ä¸æ”¯æŒæ‹·è´åŠŸèƒ½");
                                        n && window.open(n)
                                    })
                                }),
                                t(".navbar-search").on("click", ".j-navbar-search",
                                function() {
                                    var e = t(this).parent();
                                    r ? e.hasClass("active") ? e.submit() : (e.addClass("active"), e.find(".navbar-search-input").focus()) : e.submit()
                                }).on("keydown", ".navbar-search-input",
                                function() {
                                    t(this).parent().removeClass("warning")
                                }).on("submit",
                                function() {
                                    var e = t(this);
                                    if ("" == t.trim(e.find(".navbar-search-input").val())) return e.addClass("warning"),
                                    e.find(".navbar-search-input").focus(),
                                    !1
                                }),
                                t(document).on("click",
                                function(e) {
                                    0 == t(e.target).closest(".navbar-search").length && t(".navbar-search").removeClass("active warning")
                                }),
                                t("#j-reading").on("click",
                                function() {
                                    t("body").addClass("reading").append('<div class="reading-back" id="j-reading-back"><i class="fa fa-reply"></i></div>')
                                }),
                                t("body").on("click", "#j-reading-back",
                                function() {
                                    t("body").removeClass("reading"),
                                    t(this).remove(),
                                    i.trigger("scroll")
                                }),
                                t(".entry").on("click", ".btn-zan",
                                function() {
                                    var e = t(this);
                                    if (!e.hasClass("liked")) {
                                        var i = e.data("id");
                                        t.ajax({
                                            type: "POST",
                                            url: _wpcom_js.ajaxurl,
                                            data: {
                                                action: "wpcom_like_it",
                                                id: i
                                            },
                                            dataType: "json",
                                            success: function(t) {
                                                0 == t.result ? e.addClass("liked").find("span").html("(" + t.likes + ")") : -2 == t.result && e.addClass("liked")
                                            }
                                        })
                                    }
                                }).on("click", ".j-heart",
                                function() {
                                    var e = t(this),
                                    i = e.data("id");
                                    t.ajax({
                                        type: "POST",
                                        url: _wpcom_js.ajaxurl,
                                        data: {
                                            action: "wpcom_heart_it",
                                            id: i
                                        },
                                        dataType: "json",
                                        success: function(i) {
                                            0 == i.result ? e.addClass("hearted").find("span").html(i.favorites) : 1 == i.result ? e.removeClass("hearted").find("span").html(i.favorites) : -1 == i.result && t("#login-modal").modal()
                                        }
                                    })
                                }),
                                t("#commentform").on("submit",
                                function() {
                                    var e = t(".comment-form-comment textarea"),
                                    i = 0,
                                    n = 0,
                                    o = t(this).find("input.required");
                                    if ("" == t.trim(e.val()) && (e.addClass("error").focus(), n = 1, i = 1), o.each(function(e, o) {
                                        var a = t(o);
                                        "" == t.trim(a.val()) && (a.addClass("error"), 0 == n && (a.focus(), n = 1), i = 1)
                                    }), i) return ! 1
                                }).on("keydown", ".required",
                                function() {
                                    t(this).removeClass("error")
                                }),
                                t("#comments, #reviews").on("click", ".comment-must-login,#must-submit,.comment-reply-login",
                                function() {
                                    return t("#login-modal").modal(),
                                    !1
                                });
                                var d = t(".entry-bar");
                                d.length && i.width() > 767 && (e(), i.scroll(function() {
                                    e()
                                })),
                                t("#j-newslist").on("click", ".tab",
                                function() {
                                    var e = t(this),
                                    i = e.parent(),
                                    n = t(".tab-list");
                                    i.find(".tab").removeClass("active"),
                                    e.addClass("active"),
                                    n.removeClass("active"),
                                    n.eq(e.index()).addClass("active");
                                    var o = e.find("a").data("id");
                                    o && 1 != e.data("loaded") && (n.eq(e.index()).addClass("loading"), t.ajax({
                                        type: "POST",
                                        url: _wpcom_js.ajaxurl,
                                        data: {
                                            action: "wpcom_load_posts",
                                            id: o
                                        },
                                        dataType: "html",
                                        success: function(i) {
                                            if (n.eq(e.index()).removeClass("loading"), "0" == i) n.eq(e.index()).html('<li class="item"><p style="text-align: center;color:#999;margin:10px 0;">æš‚æ— å†…å®¹</p></li>');
                                            else {
                                                var o = t(i);
                                                n.eq(e.index()).html(o),
                                                o.find(".j-lazy").lazyload({
                                                    webp: s,
                                                    threshold: -50,
                                                    effect: "fadeIn"
                                                }),
                                                t(window).trigger("scroll")
                                            }
                                            e.data("loaded", 1)
                                        },
                                        error: function() {
                                            n.eq(e.index()).html('<li class="item"><p style="text-align: center;color:#999;margin:10px 0;">åŠ è½½å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•ï¼</p></li>'),
                                            n.eq(e.index()).removeClass("loading")
                                        }
                                    }))
                                }),
                                t(".main").on("click", ".j-load-more, .j-user-posts, .j-user-comments, .j-user-favorites, .j-load-kx",
                                function() {
                                    if (!a) {
                                        a = 1;
                                        var e = t(this);
                                        if (e.hasClass("disabled")) return void(a = 0);
                                        var i = null,
                                        n = e.data("page");
                                        if (n = n ? n + 1 : 2, e.hasClass("j-user-posts")) {
                                            var o = t(".profile-posts-list").data("user");
                                            i = {
                                                action: "wpcom_user_posts",
                                                user: o || 0,
                                                page: n
                                            }
                                        } else if (e.hasClass("j-user-comments")) {
                                            var o = t(".profile-comments-list").data("user");
                                            i = {
                                                action: "wpcom_user_comments",
                                                user: o || 0,
                                                page: n
                                            }
                                        } else if (e.hasClass("j-user-favorites")) {
                                            var o = t(".profile-favorites-list").data("user");
                                            i = {
                                                action: "wpcom_user_favorites",
                                                user: o || 0,
                                                page: n
                                            }
                                        } else if (e.hasClass("j-load-kx")) i = {
                                            action: "wpcom_load_kuaixun",
                                            page: n
                                        };
                                        else {
                                            var o = e.data("id");
                                            i = {
                                                action: "wpcom_load_posts",
                                                id: o,
                                                page: n
                                            }
                                        }
                                        e.parent().addClass("loading"),
                                        t.ajax({
                                            type: "POST",
                                            url: _wpcom_js.ajaxurl,
                                            data: i,
                                            dataType: "html",
                                            success: function(i) {
                                                if ("0" == i) e.addClass("disabled").text("å·²ç»åˆ°åº•äº†");
                                                else {
                                                    var o = t(i);
                                                    if (e.hasClass("j-load-more")) e.parent().before(o);
                                                    else if (e.hasClass("j-load-kx")) {
                                                        t(o[0]).text() == t(".kx-list .kx-date:last").text() && o.first().hide(),
                                                        e.parent().before(o),
                                                        e.parent().parent().find(".kx-date:hidden").remove(),
                                                        window.kxDate = t(".kx-list .kx-date");
                                                        var r = o.find(".j-qrcode");
                                                        r.length && t.each(r,
                                                        function(e, i) {
                                                            var n = t(i),
                                                            o = n.data("text");
                                                            n.qrcode({
                                                                text: o
                                                            })
                                                        })
                                                    } else e.parent().prev().append(o);
                                                    o.find(".j-lazy").lazyload({
                                                        webp: s,
                                                        threshold: -50,
                                                        effect: "fadeIn"
                                                    }),
                                                    e.data("page", n),
                                                    t(window).trigger("scroll")
                                                }
                                                e.parent().removeClass("loading"),
                                                a = 0
                                            },
                                            error: function() {
                                                e.parent().removeClass("loading"),
                                                a = 0
                                            }
                                        })
                                    }
                                }),
                                t(".special-wrap").on("click", ".load-more",
                                function() {
                                    var e = t(this);
                                    if (!e.hasClass("disabled")) {
                                        var i = e.data("page");
                                        i = i ? i + 1 : 2,
                                        e.parent().addClass("loading"),
                                        t.ajax({
                                            type: "POST",
                                            url: _wpcom_js.ajaxurl,
                                            data: {
                                                action: "wpcom_load_special",
                                                page: i
                                            },
                                            dataType: "html",
                                            success: function(t) {
                                                "0" == t ? e.addClass("disabled").text("å·²ç»åˆ°åº•äº†") : (e.closest(".special-wrap").find(".special-list").append(t), e.data("page", i)),
                                                e.parent().removeClass("loading")
                                            },
                                            error: function() {
                                                e.parent().removeClass("loading")
                                            }
                                        })
                                    }
                                })
                            } (jQuery)
                        },
                        {
                            "../../../Themer/src/js/bootstrap": 1,
                            "../../../Themer/src/js/common": 2,
                            "../../../Themer/src/js/jquery.flexslider": 3,
                            "../../../Themer/src/js/jquery.qrcode.min": 6,
                            "../../../Themer/src/js/member": 7,
                            "../../../Themer/src/js/text-image": 8
                        }]
                    },
                    {},
                    [9]);ement.hasClass("active")),
                    t && i.trigger("change")
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                this.$element.toggleClass("active")
            };
            var n = t.fn.button;
            t.fn.button = e,
            t.fn.button.Constructor = i,
            t.fn.button.noConflict = function() {
                return t.fn.button = n,
                this
            },
            t(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
            function(i) {
                var n = t(i.target).closest(".btn");
                e.call(n, "toggle"),
                t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
            function(e) {
                t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
            })
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                return this.each(function() {
                    var n = t(this),
                    o = n.data("bs.carousel"),
                    a = t.extend({},
                    i.DEFAULTS, n.data(), "object" == typeof e && e),
                    s = "string" == typeof e ? e: a.slide;
                    o || n.data("bs.carousel", o = new i(this, a)),
                    "number" == typeof e ? o.to(e) : s ? o[s]() : a.interval && o.pause().cycle()
                })
            }
            var i = function(e, i) {
                this.$element = t(e),
                this.$indicators = this.$element.find(".carousel-indicators"),
                this.options = i,
                this.paused = null,
                this.sliding = null,
                this.interval = null,
                this.$active = null,
                this.$items = null,
                this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
            };
            i.VERSION = "3.3.7",
            i.TRANSITION_DURATION = 600,
            i.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            },
            i.prototype.keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                    switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                    }
                    t.preventDefault()
                }
            },
            i.prototype.cycle = function(e) {
                return e || (this.paused = !1),
                this.interval && clearInterval(this.interval),
                this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
                this
            },
            i.prototype.getItemIndex = function(t) {
                return this.$items = t.parent().children(".item"),
                this.$items.index(t || this.$active)
            },
            i.prototype.getItemForDirection = function(t, e) {
                var i = this.getItemIndex(e);
                if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
                var n = "prev" == t ? -1 : 1,
                o = (i + n) % this.$items.length;
                return this.$items.eq(o)
            },
            i.prototype.to = function(t) {
                var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                if (! (t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel",
                function() {
                    e.to(t)
                }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next": "prev", this.$items.eq(t))
            },
            i.prototype.pause = function(e) {
                return e || (this.paused = !0),
                this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
                this.interval = clearInterval(this.interval),
                this
            },
            i.prototype.next = function() {
                if (!this.sliding) return this.slide("next")
            },
            i.prototype.prev = function() {
                if (!this.sliding) return this.slide("prev")
            },
            i.prototype.slide = function(e, n) {
                var o = this.$element.find(".item.active"),
                a = n || this.getItemForDirection(e, o),
                s = this.interval,
                r = "next" == e ? "left": "right",
                l = this;
                if (a.hasClass("active")) return this.sliding = !1;
                var d = a[0],
                c = t.Event("slide.bs.carousel", {
                    relatedTarget: d,
                    direction: r
                });
                if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                    if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var u = t(this.$indicators.children()[this.getItemIndex(a)]);
                        u && u.addClass("active")
                    }
                    var h = t.Event("slid.bs.carousel", {
                        relatedTarget: d,
                        direction: r
                    });
                    return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e), a[0].offsetWidth, o.addClass(r), a.addClass(r), o.one("bsTransitionEnd",
                    function() {
                        a.removeClass([e, r].join(" ")).addClass("active"),
                        o.removeClass(["active", r].join(" ")),
                        l.sliding = !1,
                        setTimeout(function() {
                            l.$element.trigger(h)
                        },
                        0)
                    }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(h)),
                    s && this.cycle(),
                    this
                }
            };
            var n = t.fn.carousel;
            t.fn.carousel = e,
            t.fn.carousel.Constructor = i,
            t.fn.carousel.noConflict = function() {
                return t.fn.carousel = n,
                this
            };
            var o = function(i) {
                var n, o = t(this),
                a = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
                if (a.hasClass("carousel")) {
                    var s = t.extend({},
                    a.data(), o.data()),
                    r = o.attr("data-slide-to");
                    r && (s.interval = !1),
                    e.call(a, s),
                    r && a.data("bs.carousel").to(r),
                    i.preventDefault()
                }
            };
            t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
            t(window).on("load",
            function() {
                t('[data-ride="carousel"]').each(function() {
                    var i = t(this);
                    e.call(i, i.data())
                })
            })
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
                return t(n)
            }
            function i(e) {
                return this.each(function() {
                    var i = t(this),
                    o = i.data("bs.collapse"),
                    a = t.extend({},
                    n.DEFAULTS, i.data(), "object" == typeof e && e); ! o && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
                    o || i.data("bs.collapse", o = new n(this, a)),
                    "string" == typeof e && o[e]()
                })
            }
            var n = function(e, i) {
                this.$element = t(e),
                this.options = t.extend({},
                n.DEFAULTS, i),
                this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
                this.transitioning = null,
                this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle()
            };
            n.VERSION = "3.3.7",
            n.TRANSITION_DURATION = 350,
            n.DEFAULTS = {
                toggle: !0
            },
            n.prototype.dimension = function() {
                return this.$element.hasClass("width") ? "width": "height"
            },
            n.prototype.show = function() {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (! (o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                        var a = t.Event("show.bs.collapse");
                        if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                            o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                            var s = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                            this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                            this.transitioning = 1;
                            var r = function() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                                this.transitioning = 0,
                                this.$element.trigger("shown.bs.collapse")
                            };
                            if (!t.support.transition) return r.call(this);
                            var l = t.camelCase(["scroll", s].join("-"));
                            this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                        }
                    }
                }
            },
            n.prototype.hide = function() {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                        var i = this.dimension();
                        this.$element[i](this.$element[i]())[0].offsetHeight,
                        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                        this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                        this.transitioning = 1;
                        var o = function() {
                            this.transitioning = 0,
                            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        if (!t.support.transition) return o.call(this);
                        this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION)
                    }
                }
            },
            n.prototype.toggle = function() {
                this[this.$element.hasClass("in") ? "hide": "show"]()
            },
            n.prototype.getParent = function() {
                return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                    var o = t(n);
                    this.addAriaAndCollapsedClass(e(o), o)
                },
                this)).end()
            },
            n.prototype.addAriaAndCollapsedClass = function(t, e) {
                var i = t.hasClass("in");
                t.attr("aria-expanded", i),
                e.toggleClass("collapsed", !i).attr("aria-expanded", i)
            };
            var o = t.fn.collapse;
            t.fn.collapse = i,
            t.fn.collapse.Constructor = n,
            t.fn.collapse.noConflict = function() {
                return t.fn.collapse = o,
                this
            },
            t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
            function(n) {
                var o = t(this);
                o.attr("data-target") || n.preventDefault();
                var a = e(o),
                s = a.data("bs.collapse"),
                r = s ? "toggle": o.data();
                i.call(a, r)
            })
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                var i = e.attr("data-target");
                i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
                var n = i && t(i);
                return n && n.length ? n: e.parent()
            }
            function i(i) {
                i && 3 === i.which || (t(o).remove(), t(a).each(function() {
                    var n = t(this),
                    o = e(n),
                    a = {
                        relatedTarget: this
                    };
                    o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", a)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
                }))
            }
            function n(e) {
                return this.each(function() {
                    var i = t(this),
                    n = i.data("bs.dropdown");
                    n || i.data("bs.dropdown", n = new s(this)),
                    "string" == typeof e && n[e].call(i)
                })
            }
            var o = ".dropdown-backdrop",
            a = '[data-toggle="dropdown"]',
            s = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
            s.VERSION = "3.3.7",
            s.prototype.toggle = function(n) {
                var o = t(this);
                if (!o.is(".disabled, :disabled")) {
                    var a = e(o),
                    s = a.hasClass("open");
                    if (i(), !s) {
                        "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                        var r = {
                            relatedTarget: this
                        };
                        if (a.trigger(n = t.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
                        o.trigger("focus").attr("aria-expanded", "true"),
                        a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
                    }
                    return ! 1
                }
            },
            s.prototype.keydown = function(i) {
                if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                    var n = t(this);
                    if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                        var o = e(n),
                        s = o.hasClass("open");
                        if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && o.find(a).trigger("focus"),
                        n.trigger("click");
                        var r = o.find(".dropdown-menu li:not(.disabled):visible a");
                        if (r.length) {
                            var l = r.index(i.target);
                            38 == i.which && l > 0 && l--,
                            40 == i.which && l < r.length - 1 && l++,
                            ~l || (l = 0),
                            r.eq(l).trigger("focus")
                        }
                    }
                }
            };
            var r = t.fn.dropdown;
            t.fn.dropdown = n,
            t.fn.dropdown.Constructor = s,
            t.fn.dropdown.noConflict = function() {
                return t.fn.dropdown = r,
                this
            },
            t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form",
            function(t) {
                t.stopPropagation()
            }).on("click.bs.dropdown.data-api", a, s.prototype.toggle).on("keydown.bs.dropdown.data-api", a, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
        } (jQuery),
        function(t) {
            "use strict";
            function e(e, n) {
                return this.each(function() {
                    var o = t(this),
                    a = o.data("bs.modal"),
                    s = t.extend({},
                    i.DEFAULTS, o.data(), "object" == typeof e && e);
                    a || o.data("bs.modal", a = new i(this, s)),
                    "string" == typeof e ? a[e](n) : s.show && a.show(n)
                })
            }
            var i = function(e, i) {
                this.options = i,
                this.$body = t(document.body),
                this.$element = t(e),
                this.$dialog = this.$element.find(".modal-dialog"),
                this.$backdrop = null,
                this.isShown = null,
                this.originalBodyPad = null,
                this.scrollbarWidth = 0,
                this.ignoreBackdropClick = !1,
                this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                    this.$element.trigger("loaded.bs.modal")
                },
                this))
            };
            i.VERSION = "3.3.7",
            i.TRANSITION_DURATION = 300,
            i.BACKDROP_TRANSITION_DURATION = 150,
            i.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            },
            i.prototype.toggle = function(t) {
                return this.isShown ? this.hide() : this.show(t)
            },
            i.prototype.show = function(e) {
                var n = this,
                o = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
                this.$element.trigger(o),
                this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal",
                function() {
                    n.$element.one("mouseup.dismiss.bs.modal",
                    function(e) {
                        t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                    })
                }), this.backdrop(function() {
                    var o = t.support.transition && n.$element.hasClass("fade");
                    n.$element.parent().length || n.$element.appendTo(n.$body),
                    n.$element.show().scrollTop(0),
                    n.adjustDialog(),
                    o && n.$element[0].offsetWidth,
                    n.$element.addClass("in"),
                    n.enforceFocus();
                    var a = t.Event("shown.bs.modal", {
                        relatedTarget: e
                    });
                    o ? n.$dialog.one("bsTransitionEnd",
                    function() {
                        n.$element.trigger("focus").trigger(a)
                    }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(a)
                }))
            },
            i.prototype.hide = function(e) {
                e && e.preventDefault(),
                e = t.Event("hide.bs.modal"),
                this.$element.trigger(e),
                this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
            },
            i.prototype.enforceFocus = function() {
                t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                    document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                },
                this))
            },
            i.prototype.escape = function() {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                    27 == t.which && this.hide()
                },
                this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            },
            i.prototype.resize = function() {
                this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
            },
            i.prototype.hideModal = function() {
                var t = this;
                this.$element.hide(),
                this.backdrop(function() {
                    t.$body.removeClass("modal-open"),
                    t.resetAdjustments(),
                    t.resetScrollbar(),
                    t.$element.trigger("hidden.bs.modal")
                })
            },
            i.prototype.removeBackdrop = function() {
                this.$backdrop && this.$backdrop.remove(),
                this.$backdrop = null
            },
            i.prototype.backdrop = function(e) {
                var n = this,
                o = this.$element.hasClass("fade") ? "fade": "";
                if (this.isShown && this.options.backdrop) {
                    var a = t.support.transition && o;
                    if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    },
                    this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                    a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var s = function() {
                        n.removeBackdrop(),
                        e && e()
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
                } else e && e()
            },
            i.prototype.handleUpdate = function() {
                this.adjustDialog()
            },
            i.prototype.adjustDialog = function() {
                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth: "",
                    paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth: ""
                })
            },
            i.prototype.resetAdjustments = function() {
                this.$element.css({
                    paddingLeft: "",
                    paddingRight: ""
                })
            },
            i.prototype.checkScrollbar = function() {
                var t = window.innerWidth;
                if (!t) {
                    var e = document.documentElement.getBoundingClientRect();
                    t = e.right - Math.abs(e.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < t,
                this.scrollbarWidth = this.measureScrollbar()
            },
            i.prototype.setScrollbar = function() {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "",
                this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
            },
            i.prototype.resetScrollbar = function() {
                this.$body.css("padding-right", this.originalBodyPad)
            },
            i.prototype.measureScrollbar = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure",
                this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t),
                e
            };
            var n = t.fn.modal;
            t.fn.modal = e,
            t.fn.modal.Constructor = i,
            t.fn.modal.noConflict = function() {
                return t.fn.modal = n,
                this
            },
            t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
            function(i) {
                var n = t(this),
                o = n.attr("href"),
                a = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                s = a.data("bs.modal") ? "toggle": t.extend({
                    remote: !/#/.test(o) && o
                },
                a.data(), n.data());
                n.is("a") && i.preventDefault(),
                a.one("show.bs.modal",
                function(t) {
                    t.isDefaultPrevented() || a.one("hidden.bs.modal",
                    function() {
                        n.is(":visible") && n.trigger("focus")
                    })
                }),
                e.call(a, s, this)
            })
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                return this.each(function() {
                    var n = t(this),
                    o = n.data("bs.tooltip"),
                    a = "object" == typeof e && e; ! o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, a)), "string" == typeof e && o[e]())
                })
            }
            var i = function(t, e) {
                this.type = null,
                this.options = null,
                this.enabled = null,
                this.timeout = null,
                this.hoverState = null,
                this.$element = null,
                this.inState = null,
                this.init("tooltip", t, e)
            };
            i.VERSION = "3.3.7",
            i.TRANSITION_DURATION = 150,
            i.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            },
            i.prototype.init = function(e, i, n) {
                if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                },
                this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
                    var s = o[a];
                    if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != s) {
                        var r = "hover" == s ? "mouseenter": "focusin",
                        l = "hover" == s ? "mouseleave": "focusout";
                        this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                        this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = t.extend({},
                this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            i.prototype.getDefaults = function() {
                return i.DEFAULTS
            },
            i.prototype.getOptions = function(e) {
                return e = t.extend({},
                this.getDefaults(), this.$element.data(), e),
                e.delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }),
                e
            },
            i.prototype.getDelegateOptions = function() {
                var e = {},
                i = this.getDefaults();
                return this._options && t.each(this._options,
                function(t, n) {
                    i[t] != n && (e[t] = n)
                }),
                e
            },
            i.prototype.enter = function(e) {
                var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
                return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
                e instanceof t.Event && (i.inState["focusin" == e.type ? "focus": "hover"] = !0),
                i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
                    "in" == i.hoverState && i.show()
                },
                i.options.delay.show)) : i.show())
            },
            i.prototype.isInStateTrue = function() {
                for (var t in this.inState) if (this.inState[t]) return ! 0;
                return ! 1
            },
            i.prototype.leave = function(e) {
                var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
                if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus": "hover"] = !1), !i.isInStateTrue()) {
                    if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
                    i.timeout = setTimeout(function() {
                        "out" == i.hoverState && i.hide()
                    },
                    i.options.delay.hide)
                }
            },
            i.prototype.show = function() {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !n) return;
                    var o = this,
                    a = this.tip(),
                    s = this.getUID(this.type);
                    this.setContent(),
                    a.attr("id", s),
                    this.$element.attr("aria-describedby", s),
                    this.options.animation && a.addClass("fade");
                    var r = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    d = l.test(r);
                    d && (r = r.replace(l, "") || "top"),
                    a.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(r).data("bs." + this.type, this),
                    this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element),
                    this.$element.trigger("inserted.bs." + this.type);
                    var c = this.getPosition(),
                    u = a[0].offsetWidth,
                    h = a[0].offsetHeight;
                    if (d) {
                        var p = r,
                        f = this.getPosition(this.$viewport);
                        r = "bottom" == r && c.bottom + h > f.bottom ? "top": "top" == r && c.top - h < f.top ? "bottom": "right" == r && c.right + u > f.width ? "left": "left" == r && c.left - u < f.left ? "right": r,
                        a.removeClass(p).addClass(r)
                    }
                    var m = this.getCalculatedOffset(r, c, u, h);
                    this.applyPlacement(m, r);
                    var g = function() {
                        var t = o.hoverState;
                        o.$element.trigger("shown.bs." + o.type),
                        o.hoverState = null,
                        "out" == t && o.leave(o)
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
                }
            },
            i.prototype.applyPlacement = function(e, i) {
                var n = this.tip(),
                o = n[0].offsetWidth,
                a = n[0].offsetHeight,
                s = parseInt(n.css("margin-top"), 10),
                r = parseInt(n.css("margin-left"), 10);
                isNaN(s) && (s = 0),
                isNaN(r) && (r = 0),
                e.top += s,
                e.left += r,
                t.offset.setOffset(n[0], t.extend({
                    using: function(t) {
                        n.css({
                            top: Math.round(t.top),
                            left: Math.round(t.left)
                        })
                    }
                },
                e), 0),
                n.addClass("in");
                var l = n[0].offsetWidth,
                d = n[0].offsetHeight;
                "top" == i && d != a && (e.top = e.top + a - d);
                var c = this.getViewportAdjustedDelta(i, e, l, d);
                c.left ? e.left += c.left: e.top += c.top;
                var u = /top|bottom/.test(i),
                h = u ? 2 * c.left - o + l: 2 * c.top - a + d,
                p = u ? "offsetWidth": "offsetHeight";
                n.offset(e),
                this.replaceArrow(h, n[0][p], u)
            },
            i.prototype.replaceArrow = function(t, e, i) {
                this.arrow().css(i ? "left": "top", 50 * (1 - t / e) + "%").css(i ? "top": "left", "")
            },
            i.prototype.setContent = function() {
                var t = this.tip(),
                e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html": "text"](e),
                t.removeClass("fade in top bottom left right")
            },
            i.prototype.hide = function(e) {
                function n() {
                    "in" != o.hoverState && a.detach(),
                    o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type),
                    e && e()
                }
                var o = this,
                a = t(this.$tip),
                s = t.Event("hide.bs." + this.type);
                if (this.$element.trigger(s), !s.isDefaultPrevented()) return a.removeClass("in"),
                t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(),
                this.hoverState = null,
                this
            },
            i.prototype.fixTitle = function() {
                var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            },
            i.prototype.hasContent = function() {
                return this.getTitle()
            },
            i.prototype.getPosition = function(e) {
                e = e || this.$element;
                var i = e[0],
                n = "BODY" == i.tagName,
                o = i.getBoundingClientRect();
                null == o.width && (o = t.extend({},
                o, {
                    width: o.right - o.left,
                    height: o.bottom - o.top
                }));
                var a = window.SVGElement && i instanceof window.SVGElement,
                s = n ? {
                    top: 0,
                    left: 0
                }: a ? null: e.offset(),
                r = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop: e.scrollTop()
                },
                l = n ? {
                    width: t(window).width(),
                    height: t(window).height()
                }: null;
                return t.extend({},
                o, r, l, s)
            },
            i.prototype.getCalculatedOffset = function(t, e, i, n) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - i / 2
                }: "top" == t ? {
                    top: e.top - n,
                    left: e.left + e.width / 2 - i / 2
                }: "left" == t ? {
                    top: e.top + e.height / 2 - n / 2,
                    left: e.left - i
                }: {
                    top: e.top + e.height / 2 - n / 2,
                    left: e.left + e.width
                }
            },
            i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
                var o = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport) return o;
                var a = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var r = e.top - a - s.scroll,
                    l = e.top + a - s.scroll + n;
                    r < s.top ? o.top = s.top - r: l > s.top + s.height && (o.top = s.top + s.height - l)
                } else {
                    var d = e.left - a,
                    c = e.left + a + i;
                    d < s.left ? o.left = s.left - d: c > s.right && (o.left = s.left + s.width - c)
                }
                return o
            },
            i.prototype.getTitle = function() {
                var t = this.$element,
                e = this.options;
                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
            },
            i.prototype.getUID = function(t) {
                do {
                    t += ~~ (1e6 * Math.random())
                } while ( document . getElementById ( t ));
                return t
            },
            i.prototype.tip = function() {
                if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            },
            i.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            i.prototype.enable = function() {
                this.enabled = !0
            },
            i.prototype.disable = function() {
                this.enabled = !1
            },
            i.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            },
            i.prototype.toggle = function(e) {
                var i = this;
                e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))),
                e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
            },
            i.prototype.destroy = function() {
                var t = this;
                clearTimeout(this.timeout),
                this.hide(function() {
                    t.$element.off("." + t.type).removeData("bs." + t.type),
                    t.$tip && t.$tip.detach(),
                    t.$tip = null,
                    t.$arrow = null,
                    t.$viewport = null,
                    t.$element = null
                })
            };
            var n = t.fn.tooltip;
            t.fn.tooltip = e,
            t.fn.tooltip.Constructor = i,
            t.fn.tooltip.noConflict = function() {
                return t.fn.tooltip = n,
                this
            }
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                return this.each(function() {
                    var n = t(this),
                    o = n.data("bs.popover"),
                    a = "object" == typeof e && e; ! o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, a)), "string" == typeof e && o[e]())
                })
            }
            var i = function(t, e) {
                this.init("popover", t, e)
            };
            if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
            i.VERSION = "3.3.7",
            i.DEFAULTS = t.extend({},
            t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            i.prototype = t.extend({},
            t.fn.tooltip.Constructor.prototype),
            i.prototype.constructor = i,
            i.prototype.getDefaults = function() {
                return i.DEFAULTS
            },
            i.prototype.setContent = function() {
                var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
                t.find(".popover-title")[this.options.html ? "html": "text"](e),
                t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html": "append": "text"](i),
                t.removeClass("fade top bottom left right in"),
                t.find(".popover-title").html() || t.find(".popover-title").hide()
            },
            i.prototype.hasContent = function() {
                return this.getTitle() || this.getContent()
            },
            i.prototype.getContent = function() {
                var t = this.$element,
                e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
            },
            i.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            };
            var n = t.fn.popover;
            t.fn.popover = e,
            t.fn.popover.Constructor = i,
            t.fn.popover.noConflict = function() {
                return t.fn.popover = n,
                this
            }
        } (jQuery),
        function(t) {
            "use strict";
            function e(i, n) {
                this.$body = t(document.body),
                this.$scrollElement = t(t(i).is(document.body) ? window: i),
                this.options = t.extend({},
                e.DEFAULTS, n),
                this.selector = (this.options.target || "") + " .nav li > a",
                this.offsets = [],
                this.targets = [],
                this.activeTarget = null,
                this.scrollHeight = 0,
                this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
                this.refresh(),
                this.process()
            }
            function i(i) {
                return this.each(function() {
                    var n = t(this),
                    o = n.data("bs.scrollspy"),
                    a = "object" == typeof i && i;
                    o || n.data("bs.scrollspy", o = new e(this, a)),
                    "string" == typeof i && o[i]()
                })
            }
            e.VERSION = "3.3.7",
            e.DEFAULTS = {
                offset: 10
            },
            e.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            },
            e.prototype.refresh = function() {
                var e = this,
                i = "offset",
                n = 0;
                this.offsets = [],
                this.targets = [],
                this.scrollHeight = this.getScrollHeight(),
                t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()),
                this.$body.find(this.selector).map(function() {
                    var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    a = /^#./.test(o) && t(o);
                    return a && a.length && a.is(":visible") && [[a[i]().top + n, o]] || null
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).each(function() {
                    e.offsets.push(this[0]),
                    e.targets.push(this[1])
                })
            },
            e.prototype.process = function() {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                o = this.offsets,
                a = this.targets,
                s = this.activeTarget;
                if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = a[a.length - 1]) && this.activate(t);
                if (s && e < o[0]) return this.activeTarget = null,
                this.clear();
                for (t = o.length; t--;) s != a[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(a[t])
            },
            e.prototype.activate = function(e) {
                this.activeTarget = e,
                this.clear();
                var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
                n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
                n.trigger("activate.bs.scrollspy")
            },
            e.prototype.clear = function() {
                t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            };
            var n = t.fn.scrollspy;
            t.fn.scrollspy = i,
            t.fn.scrollspy.Constructor = e,
            t.fn.scrollspy.noConflict = function() {
                return t.fn.scrollspy = n,
                this
            },
            t(window).on("load.bs.scrollspy.data-api",
            function() {
                t('[data-spy="scroll"]').each(function() {
                    var e = t(this);
                    i.call(e, e.data())
                })
            })
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                return this.each(function() {
                    var n = t(this),
                    o = n.data("bs.tab");
                    o || n.data("bs.tab", o = new i(this)),
                    "string" == typeof e && o[e]()
                })
            }
            var i = function(e) {
                this.element = t(e)
            };
            i.VERSION = "3.3.7",
            i.TRANSITION_DURATION = 150,
            i.prototype.show = function() {
                var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
                if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                    var o = i.find(".active:last a"),
                    a = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    s = t.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                    if (o.trigger(a), e.trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        var r = t(n);
                        this.activate(e.closest("li"), i),
                        this.activate(r, r.parent(),
                        function() {
                            o.trigger({
                                type: "hidden.bs.tab",
                                relatedTarget: e[0]
                            }),
                            e.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: o[0]
                            })
                        })
                    }
                }
            },
            i.prototype.activate = function(e, n, o) {
                function a() {
                    s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                    e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                    r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
                    e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                    o && o()
                }
                var s = n.find("> .active"),
                r = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
                s.length && r ? s.one("bsTransitionEnd", a).emulateTransitionEnd(i.TRANSITION_DURATION) : a(),
                s.removeClass("in")
            };
            var n = t.fn.tab;
            t.fn.tab = e,
            t.fn.tab.Constructor = i,
            t.fn.tab.noConflict = function() {
                return t.fn.tab = n,
                this
            };
            var o = function(i) {
                i.preventDefault(),
                e.call(t(this), "show")
            };
            t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
        } (jQuery),
        function(t) {
            "use strict";
            function e(e) {
                return this.each(function() {
                    var n = t(this),
                    o = n.data("bs.affix"),
                    a = "object" == typeof e && e;
                    o || n.data("bs.affix", o = new i(this, a)),
                    "string" == typeof e && o[e]()
                })
            }
            var i = function(e, n) {
                this.options = t.extend({},
                i.DEFAULTS, n),
                this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
                this.$element = t(e),
                this.affixed = null,
                this.unpin = null,
                this.pinnedOffset = null,
                this.checkPosition()
            };
            i.VERSION = "3.3.7",
            i.RESET = "affix affix-top affix-bottom",
            i.DEFAULTS = {
                offset: 0,
                target: window
            },
            i.prototype.getState = function(t, e, i, n) {
                var o = this.$target.scrollTop(),
                a = this.$element.offset(),
                s = this.$target.height();
                if (null != i && "top" == this.affixed) return o < i && "top";
                if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= a.top) && "bottom": !(o + s <= t - n) && "bottom";
                var r = null == this.affixed,
                l = r ? o: a.top,
                d = r ? s: e;
                return null != i && o <= i ? "top": null != n && l + d >= t - n && "bottom"
            },
            i.prototype.getPinnedOffset = function() {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(i.RESET).addClass("affix");
                var t = this.$target.scrollTop(),
                e = this.$element.offset();
                return this.pinnedOffset = e.top - t
            },
            i.prototype.checkPositionWithEventLoop = function() {
                setTimeout(t.proxy(this.checkPosition, this), 1)
            },
            i.prototype.checkPosition = function() {
                if (this.$element.is(":visible")) {
                    var e = this.$element.height(),
                    n = this.options.offset,
                    o = n.top,
                    a = n.bottom,
                    s = Math.max(t(document).height(), t(document.body).height());
                    "object" != typeof n && (a = o = n),
                    "function" == typeof o && (o = n.top(this.$element)),
                    "function" == typeof a && (a = n.bottom(this.$element));
                    var r = this.getState(s, e, o, a);
                    if (this.affixed != r) {
                        null != this.unpin && this.$element.css("top", "");
                        var l = "affix" + (r ? "-" + r: ""),
                        d = t.Event(l + ".bs.affix");
                        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                        this.affixed = r,
                        this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
                        this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == r && this.$element.offset({
                        top: s - e - a
                    })
                }
            };
            var n = t.fn.affix;
            t.fn.affix = e,
            t.fn.affix.Constructor = i,
            t.fn.affix.noConflict = function() {
                return t.fn.affix = n,
                this
            },
            t(window).on("load",
            function() {
                t('[data-spy="affix"]').each(function() {
                    var i = t(this),
                    n = i.data();
                    n.offset = n.offset || {},
                    null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
                    null != n.offsetTop && (n.offset.top = n.offsetTop),
                    e.call(i, n)
                })
            })
        } (jQuery)
    },
    {}],
    2 : [function(t, e, i) {
        t("../../../Themer/src/js/jquery.lazyload"),
        t("../../../Themer/src/js/jquery.fluidbox"),
        function(t) {
            function e() {
                t(".bdshare_popup_box").length ? t(".bdshare_popup_box").addClass("j-share") : setTimeout(function() {
                    e()
                },
                3)
            }
            var i = t(window),
            n = navigator.userAgent.toLowerCase(),
            o = 1,
            a = [],
            s = void 0 !== _wpcom_js.webp && _wpcom_js.webp ? _wpcom_js.webp: null; (t(".wpcom-user-list").length || t(".wpcom-member").length) && (o = 0),
            "Microsoft Internet Explorer" == navigator.appName && "9." == navigator.appVersion.match(/9./i) && (o = 0),
            o && void 0 !== _wpcom_js.fluidbox && 1 == _wpcom_js.fluidbox && t(".entry-content img").each(function(e, i) {
                var o = t(i),
                s = o.parent(),
                r = o.data("original");
                if (r = r || o.attr("src"), r.match(/^\/\//) && (r = window.location.protocol + r), "a" === s.prop("tagName").toLowerCase()) {
                    var l = s.attr("href"); (l == r || l.match(/.*(\.png|\.jpg|\.jpeg|\.gif|\.webp|\.bmp)$/i)) && (s.attr("data-fluidbox", !0).attr("data-fluidbox-loader", !0).addClass("fluidbox"), "micromessenger" == n.match(/MicroMessenger/i) && a.push(r))
                } else o.replaceWith('<a class="fluidbox" href="' + r + '" data-fluidbox data-fluidbox-loader="true">' + i.outerHTML + "</a>"),
                "micromessenger" == n.match(/MicroMessenger/i) && a.push(r)
            }),
            t(document).ready(function() {
                var e = t(".entry-content a[data-fluidbox]");
                if (e.length && (e.find("noscript").remove(), e.fluidbox({
                    stackIndex: 9999,
                    stackIndexDelta: 9998
                })), t(".j-lazy").lazyload({
                    webp: s,
                    threshold: -30,
                    effect: "fadeIn"
                }), t(".wpcom-adv-menu").each(function(e, i) {
                    var n = t(i);
                    n.find(">.menu-item-style").each(function(e, i) {
                        var o = t(i),
                        a = o.find(">.menu-item-wrap"),
                        s = o.position().left,
                        r = a.outerWidth();
                        s + r > n.outerWidth() && (s = n.outerWidth() - r),
                        a.css("left", s)
                    })
                }), t(document).on("click", 'a[href^="#"]',
                function(e) {
                    var i = t(this).attr("role");
                    if ("tab" != i && "button" != i && (e.preventDefault(), this.hash)) {
                        var n = t(this.hash).length ? t(this.hash).offset().top: 0;
                        n = n - t("header.header").outerHeight() - 10,
                        n = t("#wpadminbar").length ? n - t("#wpadminbar").outerHeight() : n,
                        n = n < 0 ? 0 : n,
                        t("html, body").animate({
                            scrollTop: n
                        },
                        400)
                    }
                }), navigator.userAgent.match(/(iPhone|iPod|ios|iPad|Android|Windows Phone|BlackBerry)/i)) {
                    if (void 0 !== _wpcom_js.xzh_head && 1 == _wpcom_js.xzh_head) {
                        var i = t(t("header.header").length ? "header.header": "header#header");
                        i.before('<div class="xzh-head-wrap" style="padding-left:15px;padding-right:15px;background: #fff;"><div id="j-xzh-head" style="padding-left:15px;padding-right:15px;"></div></div>'),
                        cambrian.bar({
                            data: {
                                type: "head",
                                anchor: document.getElementById("j-xzh-head")
                            }
                        }),
                        i.css("border-top", "1px solid rgba(0,0,0,.05)")
                    }
                    t("#xhz-render-body").length && cambrian.bar({
                        data: {
                            type: "tail",
                            anchor: document.getElementById("xhz-render-body")
                        }
                    })
                }
            }),
            t(document).on("DOMNodeInserted", ".widget_shopping_cart_content,.woocommerce-cart-form",
            function() {
                t(this).find(".j-lazy").lazyload({
                    webp: s,
                    threshold: -50,
                    effect: "fadeIn"
                }),
                t(window).trigger("scroll")
            }),
            t("body").on("click", ".navbar-toggle",
            function() {
                t("body").toggleClass("navbar-on"),
                0 == t(".navbar-on-shadow").length && t("#wrap").append('<div class="navbar-on-shadow"></div>'),
                setTimeout(function() {
                    t(window).trigger("scroll")
                },
                500)
            }).on("click", ".m-dropdown",
            function() {
                var e = t(this).parent();
                e.find("> .dropdown-menu").slideToggle("fast"),
                e.toggleClass("dropdown-open"),
                t(window).trigger("scroll")
            }),
            t("#wrap").on("click", ".navbar-on-shadow",
            function() {
                t(".navbar-toggle").trigger("click")
            }),
            t(".woocommerce").off("click.quantity").on("click.quantity", ".qty-down,.qty-up",
            function() {
                var e = t(this).hasClass("qty-down") ? 0 : 1,
                i = t(this).parent().find(".qty"),
                n = i.val();
                n = e ? ++n: --n,
                n = i.attr("min") && n < i.attr("min") ? i.attr("min") : n,
                n = i.attr("max") && n > i.attr("max") ? i.attr("max") : n,
                i.val(n).trigger("change")
            }).off("blur.quantity").on("blur.quantity", ".qty",
            function() {
                var e = t(this),
                i = e.val();
                i = e.attr("min") && i < e.attr("min") ? e.attr("min") : i,
                i = e.attr("max") && i > e.attr("max") ? e.attr("max") : i,
                e.val(i)
            });
            var r, l;
            i.scroll(function() {
                i.scrollTop() > 100 ? t("#j-top").fadeIn("slow") : t("#j-top").fadeOut("slow")
            }),
            t(".action").on("mouseenter", ".wechat",
            function() {
                clearTimeout(l),
                t(".contact-wrap").hide(),
                t(".wechat-wrap").show()
            }).on("mouseleave", ".wechat",
            function() {
                l = setTimeout(function() {
                    t(".wechat-wrap").hide()
                },
                300)
            }).on("mouseenter", ".contact",
            function() {
                clearTimeout(r),
                t(".wechat-wrap").hide(),
                t(".contact-wrap").show()
            }).on("mouseleave", ".contact",
            function() {
                r = setTimeout(function() {
                    t(".contact-wrap").hide()
                },
                300)
            }).on("click", "#j-top",
            function() {
                t("html, body").animate({
                    scrollTop: 0
                },
                "slow")
            }).on("mouseenter", ".bds_more",
            function() {
                t(this).hasClass("share") ? t(".bdshare_popup_box").length ? t(".bdshare_popup_box").addClass("j-share") : setTimeout(function() {
                    e()
                },
                15) : t(".bdshare_popup_box").removeClass("j-share")
            }),
            window.setup_share = function() {
                t(document).on("click", ".a-box.share",
                function(e) {
                    e.preventDefault(),
                    t(".at-svc-compact .at-icon-wrapper").trigger("click")
                })
            },
            function() {
                if ("micromessenger" == n.match(/MicroMessenger/i)) {
                    var e, i = location.href.split("#")[0],
                    o = document.querySelector("body").classList,
                    r = 0;
                    if (o.contains("page")) for (var l = 0; l < o.length; l++)(e = o[l].match(/page-id-(\d+)$/)) && (r = e[1]);
                    else if (o.contains("single")) for (var l = 0; l < o.length; l++)(e = o[l].match(/postid-(\d+)$/)) && (r = e[1]);
                    t.ajax({
                        url: _wpcom_js.ajaxurl,
                        type: "POST",
                        data: {
                            action: "wpcom_wx_config",
                            url: encodeURIComponent(i),
                            ID: r
                        },
                        dataType: "json",
                        success: function(e) {
                            if (e.signature) {
                                var n = e.thumb;
                                n.match(/^\/\//) && (n = window.location.protocol + n);
                                var o = document.title,
                                r = t("meta[name=description]").attr("content");
                                r = r || e.desc;
                                var l = document.createElement("script");
                                l.src = "//res.wx.qq.com/open/js/jweixin-1.2.0.js",
                                l.onload = function() {
                                    window.wx.config({
                                        debug: !1,
                                        appId: e.appId,
                                        timestamp: e.timestamp,
                                        nonceStr: e.noncestr,
                                        signature: e.signature,
                                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "previewImage"]
                                    }),
                                    wx.ready(function() {
                                        var e = {
                                            imgUrl: n,
                                            link: i,
                                            desc: r,
                                            title: o
                                        },
                                        l = {
                                            imgUrl: n,
                                            link: i,
                                            title: o
                                        };
                                        wx.onMenuShareAppMessage(e),
                                        wx.onMenuShareTimeline(l),
                                        wx.onMenuShareQQ(e),
                                        wx.onMenuShareWeibo(e),
                                        t(".entry-content").find("a.fluidbox").each(function(e, i) {
                                            t(i).fluidbox("destroy")
                                        }),
                                        t(".entry-content a.fluidbox .j-lazy").lazyload({
                                            webp: s,
                                            threshold: -30,
                                            effect: "fadeIn"
                                        }),
                                        t(document).on("click", "a.fluidbox",
                                        function(e) {
                                            e.preventDefault(),
                                            wx.previewImage({
                                                current: t(this).attr("href"),
                                                urls: a
                                            })
                                        })
                                    }),
                                    wx.error(function(t) {
                                        console.log(t)
                                    })
                                },
                                document.body.appendChild(l)
                            }
                        }
                    })
                }
            } (),
            window.baidu_map = function(e, i, n, o) {
                if (0 != t("#" + e).length) {
                    var a = new BMap.Map(e, {
                        enableMapClick: !1
                    }),
                    s = new BMap.Point(n[0], n[1]),
                    r = new BMap.Marker(s);
                    if (a.centerAndZoom(s, 16), a.addOverlay(r), o && a.enableScrollWheelZoom(), a.setMapStyle({
                        styleJson: [{
                            featureType: "all",
                            elementType: "all",
                            stylers: {
                                lightness: 35,
                                saturation: -25
                            }
                        }]
                    }), i) {
                        var l = new BMap.InfoWindow(i);
                        r.openInfoWindow(l),
                        r.addEventListener("click",
                        function() {
                            this.openInfoWindow(l)
                        })
                    }
                }
            }
        } (jQuery)
    },
    {
        "../../../Themer/src/js/jquery.fluidbox": 4,
        "../../../Themer/src/js/jquery.lazyload": 5
    }],
    3 : [function(t, e, i) { !
        function(t) {
            t.flexslider = function(e, i) {
                var n = t(e);
                n.vars = t.extend({},
                t.flexslider.defaults, i);
                var o, a = n.vars.namespace,
                s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
                l = "click touchend MSPointerUp keyup",
                d = "",
                c = "vertical" === n.vars.direction,
                u = n.vars.reverse,
                h = n.vars.itemWidth > 0,
                p = "fade" === n.vars.animation,
                f = "" !== n.vars.asNavFor,
                m = {};
                t.data(e, "flexslider", n),
                m = {
                    init: function() {
                        n.animating = !1,
                        n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt: 0, 10),
                        isNaN(n.currentSlide) && (n.currentSlide = 0),
                        n.animatingTo = n.currentSlide,
                        n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last,
                        n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")),
                        n.slides = t(n.vars.selector, n),
                        n.container = t(n.containerSelector, n),
                        n.count = n.slides.length,
                        n.syncExists = t(n.vars.sync).length > 0,
                        "slide" === n.vars.animation && (n.vars.animation = "swing"),
                        n.prop = c ? "top": "marginLeft",
                        n.args = {},
                        n.manualPause = !1,
                        n.stopped = !1,
                        n.started = !1,
                        n.startTimeout = null,
                        n.transitions = !n.vars.video && !p && n.vars.useCSS &&
                        function() {
                            var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                            for (var i in e) if (void 0 !== t.style[e[i]]) return n.pfx = e[i].replace("Perspective", "").toLowerCase(),
                            n.prop = "-" + n.pfx + "-transform",
                            !0;
                            return ! 1
                        } (),
                        n.ensureAnimationEnd = "",
                        "" !== n.vars.controlsContainer && (n.controlsContainer = t(n.vars.controlsContainer).length > 0 && t(n.vars.controlsContainer)),
                        "" !== n.vars.manualControls && (n.manualControls = t(n.vars.manualControls).length > 0 && t(n.vars.manualControls)),
                        "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === t(n.vars.customDirectionNav).length && t(n.vars.customDirectionNav)),
                        n.vars.randomize && (n.slides.sort(function() {
                            return Math.round(Math.random()) - .5
                        }), n.container.empty().append(n.slides)),
                        n.doMath(),
                        n.setup("init"),
                        n.vars.controlNav && m.controlNav.setup(),
                        n.vars.directionNav && m.directionNav.setup(),
                        n.vars.keyboard && (1 === t(n.containerSelector).length || n.vars.multipleKeyboard) && t(document).bind("keyup",
                        function(t) {
                            var e = t.keyCode;
                            if (!n.animating && (39 === e || 37 === e)) {
                                var i = 39 === e ? n.getTarget("next") : 37 === e && n.getTarget("prev");
                                n.flexAnimate(i, n.vars.pauseOnAction)
                            }
                        }),
                        n.vars.mousewheel && n.bind("mousewheel",
                        function(t, e, i, o) {
                            t.preventDefault();
                            var a = e < 0 ? n.getTarget("next") : n.getTarget("prev");
                            n.flexAnimate(a, n.vars.pauseOnAction)
                        }),
                        n.vars.pausePlay && m.pausePlay.setup(),
                        n.vars.slideshow && n.vars.pauseInvisible && m.pauseInvisible.init(),
                        n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                            n.manualPlay || n.manualPause || n.pause()
                        },
                        function() {
                            n.manualPause || n.manualPlay || n.stopped || n.play()
                        }), n.vars.pauseInvisible && m.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())),
                        f && m.asNav.setup(),
                        r && n.vars.touch && m.touch(),
                        (!p || p && n.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize),
                        n.find("img").attr("draggable", "false"),
                        setTimeout(function() {
                            n.vars.start(n)
                        },
                        200)
                    },
                    asNav: {
                        setup: function() {
                            n.asNav = !0,
                            n.animatingTo = Math.floor(n.currentSlide / n.move),
                            n.currentItem = n.currentSlide,
                            n.slides.removeClass(a + "active-slide").eq(n.currentItem).addClass(a + "active-slide"),
                            s ? (e._slider = n, n.slides.each(function() {
                                var e = this;
                                e._gesture = new MSGesture,
                                e._gesture.target = e,
                                e.addEventListener("MSPointerDown",
                                function(t) {
                                    t.preventDefault(),
                                    t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                                },
                                !1),
                                e.addEventListener("MSGestureTap",
                                function(e) {
                                    e.preventDefault();
                                    var i = t(this),
                                    o = i.index();
                                    t(n.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (n.direction = n.currentItem < o ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                                })
                            })) : n.slides.on(l,
                            function(e) {
                                e.preventDefault();
                                var i = t(this),
                                o = i.index();
                                i.offset().left - t(n).scrollLeft() <= 0 && i.hasClass(a + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : t(n.vars.asNavFor).data("flexslider").animating || i.hasClass(a + "active-slide") || (n.direction = n.currentItem < o ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                            })
                        }
                    },
                    controlNav: {
                        setup: function() {
                            n.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                        },
                        setupPaging: function() {
                            var e, i, o = "thumbnails" === n.vars.controlNav ? "control-thumbs": "control-paging",
                            s = 1;
                            if (n.controlNavScaffold = t('<ol class="' + a + "control-nav " + a + o + '"></ol>'), n.pagingCount > 1) for (var r = 0; r < n.pagingCount; r++) {
                                if (i = n.slides.eq(r), e = "thumbnails" === n.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>': "<a>" + s + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                    var c = i.attr("data-thumbcaption");
                                    "" !== c && void 0 !== c && (e += '<span class="' + a + 'caption">' + c + "</span>")
                                }
                                n.controlNavScaffold.append("<li>" + e + "</li>"),
                                s++
                            }
                            n.controlsContainer ? t(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold),
                            m.controlNav.set(),
                            m.controlNav.active(),
                            n.controlNavScaffold.delegate("a, img", l,
                            function(e) {
                                if (e.preventDefault(), "" === d || d === e.type) {
                                    var i = t(this),
                                    o = n.controlNav.index(i);
                                    i.hasClass(a + "active") || (n.direction = o > n.currentSlide ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                                }
                                "" === d && (d = e.type),
                                m.setToClearWatchedEvent()
                            })
                        },
                        setupManual: function() {
                            n.controlNav = n.manualControls,
                            m.controlNav.active(),
                            n.controlNav.bind(l,
                            function(e) {
                                if (e.preventDefault(), "" === d || d === e.type) {
                                    var i = t(this),
                                    o = n.controlNav.index(i);
                                    i.hasClass(a + "active") || (o > n.currentSlide ? n.direction = "next": n.direction = "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                                }
                                "" === d && (d = e.type),
                                m.setToClearWatchedEvent()
                            })
                        },
                        set: function() {
                            var e = "thumbnails" === n.vars.controlNav ? "img": "a";
                            n.controlNav = t("." + a + "control-nav li " + e, n.controlsContainer ? n.controlsContainer: n)
                        },
                        active: function() {
                            n.controlNav.removeClass(a + "active").eq(n.animatingTo).addClass(a + "active")
                        },
                        update: function(e, i) {
                            n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append(t("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(i).closest("li").remove(),
                            m.controlNav.set(),
                            n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(i, e) : m.controlNav.active()
                        }
                    },
                    directionNav: {
                        setup: function() {
                            var e = t('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                            n.customDirectionNav ? n.directionNav = n.customDirectionNav: n.controlsContainer ? (t(n.controlsContainer).append(e), n.directionNav = t("." + a + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = t("." + a + "direction-nav li a", n)),
                            m.directionNav.update(),
                            n.directionNav.bind(l,
                            function(e) {
                                e.preventDefault();
                                var i;
                                "" !== d && d !== e.type || (i = t(this).hasClass(a + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(i, n.vars.pauseOnAction)),
                                "" === d && (d = e.type),
                                m.setToClearWatchedEvent()
                            })
                        },
                        update: function() {
                            var t = a + "disabled";
                            1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + a + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + a + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                        }
                    },
                    pausePlay: {
                        setup: function() {
                            var e = t('<div class="' + a + 'pauseplay"><a></a></div>');
                            n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = t("." + a + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = t("." + a + "pauseplay a", n)),
                            m.pausePlay.update(n.vars.slideshow ? a + "pause": a + "play"),
                            n.pausePlay.bind(l,
                            function(e) {
                                e.preventDefault(),
                                "" !== d && d !== e.type || (t(this).hasClass(a + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())),
                                "" === d && (d = e.type),
                                m.setToClearWatchedEvent()
                            })
                        },
                        update: function(t) {
                            "play" === t ? n.pausePlay.removeClass(a + "pause").addClass(a + "play").html(n.vars.playText) : n.pausePlay.removeClass(a + "play").addClass(a + "pause").html(n.vars.pauseText)
                        }
                    },
                    touch: function() {
                        function t(t) {
                            t.stopPropagation(),
                            n.animating ? t.preventDefault() : (n.pause(), e._gesture.addPointer(t.pointerId), C = 0, d = c ? n.h: n.w, m = Number(new Date), l = h && u && n.animatingTo === n.last ? 0 : h && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: h && n.currentSlide === n.last ? n.limit: h ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide: u ? (n.last - n.currentSlide + n.cloneOffset) * d: (n.currentSlide + n.cloneOffset) * d)
                        }
                        function i(t) {
                            t.stopPropagation();
                            var i = t.target._slider;
                            if (i) {
                                var n = -t.translationX,
                                o = -t.translationY;
                                if (C += c ? o: n, f = C, w = c ? Math.abs(C) < Math.abs( - n) : Math.abs(C) < Math.abs( - o), t.detail === t.MSGESTURE_FLAG_INERTIA) return void setImmediate(function() {
                                    e._gesture.stop()
                                }); (!w || Number(new Date) - m > 500) && (t.preventDefault(), !p && i.transitions && (i.vars.animationLoop || (f = C / (0 === i.currentSlide && C < 0 || i.currentSlide === i.last && C > 0 ? Math.abs(C) / d + 2 : 1)), i.setProps(l + f, "setTouch")))
                            }
                        }
                        function o(t) {
                            t.stopPropagation();
                            var e = t.target._slider;
                            if (e) {
                                if (e.animatingTo === e.currentSlide && !w && null !== f) {
                                    var i = u ? -f: f,
                                    n = i > 0 ? e.getTarget("next") : e.getTarget("prev");
                                    e.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > d / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : p || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                                }
                                a = null,
                                r = null,
                                f = null,
                                l = null,
                                C = 0
                            }
                        }
                        var a, r, l, d, f, m, g, v, b, w = !1,
                        y = 0,
                        x = 0,
                        C = 0;
                        s ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = n, e.addEventListener("MSGestureChange", i, !1), e.addEventListener("MSGestureEnd", o, !1)) : (g = function(t) {
                            n.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (n.pause(), d = c ? n.h: n.w, m = Number(new Date), y = t.touches[0].pageX, x = t.touches[0].pageY, l = h && u && n.animatingTo === n.last ? 0 : h && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: h && n.currentSlide === n.last ? n.limit: h ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide: u ? (n.last - n.currentSlide + n.cloneOffset) * d: (n.currentSlide + n.cloneOffset) * d, a = c ? x: y, r = c ? y: x, e.addEventListener("touchmove", v, !1), e.addEventListener("touchend", b, !1))
                        },
                        v = function(t) {
                            y = t.touches[0].pageX,
                            x = t.touches[0].pageY,
                            f = c ? a - x: a - y,
                            w = c ? Math.abs(f) < Math.abs(y - r) : Math.abs(f) < Math.abs(x - r); (!w || Number(new Date) - m > 500) && (t.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (f /= 0 === n.currentSlide && f < 0 || n.currentSlide === n.last && f > 0 ? Math.abs(f) / d + 2 : 1), n.setProps(l + f, "setTouch")))
                        },
                        b = function(t) {
                            if (e.removeEventListener("touchmove", v, !1), n.animatingTo === n.currentSlide && !w && null !== f) {
                                var i = u ? -f: f,
                                o = i > 0 ? n.getTarget("next") : n.getTarget("prev");
                                n.canAdvance(o) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > d / 2) ? n.flexAnimate(o, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                            }
                            e.removeEventListener("touchend", b, !1),
                            a = null,
                            r = null,
                            f = null,
                            l = null
                        },
                        e.addEventListener("touchstart", g, !1))
                    },
                    resize: function() { ! n.animating && n.is(":visible") && (h || n.doMath(), p ? m.smoothHeight() : h ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : c ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && m.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
                    },
                    smoothHeight: function(t) {
                        if (!c || p) {
                            var e = p ? n: n.viewport;
                            t ? e.animate({
                                height: n.slides.eq(n.animatingTo).height()
                            },
                            t) : e.height(n.slides.eq(n.animatingTo).height())
                        }
                    },
                    sync: function(e) {
                        var i = t(n.vars.sync).data("flexslider"),
                        o = n.animatingTo;
                        switch (e) {
                        case "animate":
                            i.flexAnimate(o, n.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            i.playing || i.asNav || i.play();
                            break;
                        case "pause":
                            i.pause()
                        }
                    },
                    uniqueID: function(e) {
                        return e.filter("[id]").add(e.find("[id]")).each(function() {
                            var e = t(this);
                            e.attr("id", e.attr("id") + "_clone")
                        }),
                        e
                    },
                    pauseInvisible: {
                        visProp: null,
                        init: function() {
                            var t = m.pauseInvisible.getHiddenProp();
                            if (t) {
                                var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                                document.addEventListener(e,
                                function() {
                                    m.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                                })
                            }
                        },
                        isHidden: function() {
                            var t = m.pauseInvisible.getHiddenProp();
                            return !! t && document[t]
                        },
                        getHiddenProp: function() {
                            var t = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                            return null
                        }
                    },
                    setToClearWatchedEvent: function() {
                        clearTimeout(o),
                        o = setTimeout(function() {
                            d = ""
                        },
                        3e3)
                    }
                },
                n.flexAnimate = function(e, i, o, s, l) {
                    if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next": "prev"), f && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next": "prev"), !n.animating && (n.canAdvance(e, l) || o) && n.is(":visible")) {
                        if (f && s) {
                            var d = t(n.vars.asNavFor).data("flexslider");
                            if (n.atEnd = 0 === e || e === n.count - 1, d.flexAnimate(e, !0, !1, !0, l), n.direction = n.currentItem < e ? "next": "prev", d.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e,
                            n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"),
                            !1;
                            n.currentItem = e,
                            n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"),
                            e = Math.floor(e / n.visible)
                        }
                        if (n.animating = !0, n.animatingTo = e, i && n.pause(), n.vars.before(n), n.syncExists && !l && m.sync("animate"), n.vars.controlNav && m.controlNav.active(), h || n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && m.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) r ? (n.slides.eq(n.currentSlide).css({
                            opacity: 0,
                            zIndex: 1
                        }), n.slides.eq(e).css({
                            opacity: 1,
                            zIndex: 2
                        }), n.wrapup(w)) : (n.slides.eq(n.currentSlide).css({
                            zIndex: 1
                        }).animate({
                            opacity: 0
                        },
                        n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                            zIndex: 2
                        }).animate({
                            opacity: 1
                        },
                        n.vars.animationSpeed, n.vars.easing, n.wrapup));
                        else {
                            var g, v, b, w = c ? n.slides.filter(":first").height() : n.computedW;
                            h ? (g = n.vars.itemMargin, b = (n.itemW + g) * n.move * n.animatingTo, v = b > n.limit && 1 !== n.visible ? n.limit: b) : v = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * w: 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * w: u ? (n.count - 1 - e + n.cloneOffset) * w: (e + n.cloneOffset) * w,
                            n.setProps(v, "", n.vars.animationSpeed),
                            n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend",
                            function() {
                                clearTimeout(n.ensureAnimationEnd),
                                n.wrapup(w)
                            }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                                n.wrapup(w)
                            },
                            n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing,
                            function() {
                                n.wrapup(w)
                            })
                        }
                        n.vars.smoothHeight && m.smoothHeight(n.vars.animationSpeed)
                    }
                },
                n.wrapup = function(t) {
                    p || h || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")),
                    n.animating = !1,
                    n.currentSlide = n.animatingTo,
                    n.vars.after(n)
                },
                n.animateSlides = function() {
                    n.animating || n.flexAnimate(n.getTarget("next"))
                },
                n.pause = function() {
                    clearInterval(n.animatedSlides),
                    n.animatedSlides = null,
                    n.playing = !1,
                    n.vars.pausePlay && m.pausePlay.update("play"),
                    n.syncExists && m.sync("pause")
                },
                n.play = function() {
                    n.playing && clearInterval(n.animatedSlides),
                    n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed),
                    n.started = n.playing = !0,
                    n.vars.pausePlay && m.pausePlay.update("pause"),
                    n.syncExists && m.sync("play")
                },
                n.stop = function() {
                    n.pause(),
                    n.stopped = !0
                },
                n.canAdvance = function(t, e) {
                    var i = f ? n.pagingCount - 1 : n.last;
                    return !! e || (!(!f || n.currentItem !== n.count - 1 || 0 !== t || "prev" !== n.direction) || (!f || 0 !== n.currentItem || t !== n.pagingCount - 1 || "next" === n.direction) && (!(t === n.currentSlide && !f) && ( !! n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || t !== i || "next" === n.direction) && (!n.atEnd || n.currentSlide !== i || 0 !== t || "next" !== n.direction))))
                },
                n.getTarget = function(t) {
                    return n.direction = t,
                    "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last: n.currentSlide - 1
                },
                n.setProps = function(t, e, i) {
                    var o = function() {
                        var i = t || (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo;
                        return - 1 *
                        function() {
                            if (h) return "setTouch" === e ? t: u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: n.animatingTo === n.last ? n.limit: i;
                            switch (e) {
                            case "setTotal":
                                return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t: (n.currentSlide + n.cloneOffset) * t;
                            case "setTouch":
                                return t;
                            case "jumpEnd":
                                return u ? t: n.count * t;
                            case "jumpStart":
                                return u ? n.count * t: t;
                            default:
                                return t
                            }
                        } () + "px"
                    } ();
                    n.transitions && (o = c ? "translate3d(0," + o + ",0)": "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s": "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)),
                    n.args[n.prop] = o,
                    (n.transitions || void 0 === i) && n.container.css(n.args),
                    n.container.css("transform", o)
                },
                n.setup = function(e) {
                    if (p) n.slides.css({
                        width: "100%",
                        float: "left",
                        marginRight: "-100%",
                        position: "relative"
                    }),
                    "init" === e && (r ? n.slides.css({
                        opacity: 0,
                        display: "block",
                        webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                        zIndex: 1
                    }).eq(n.currentSlide).css({
                        opacity: 1,
                        zIndex: 2
                    }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(n.currentSlide).css({
                        zIndex: 2
                    }).css({
                        opacity: 1
                    }) : n.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(n.currentSlide).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    },
                    n.vars.animationSpeed, n.vars.easing)),
                    n.vars.smoothHeight && m.smoothHeight();
                    else {
                        var i, o;
                        "init" === e && (n.viewport = t('<div class="' + a + 'viewport"></div>').css({
                            overflow: "hidden",
                            position: "relative"
                        }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (o = t.makeArray(n.slides).reverse(), n.slides = t(o), n.container.empty().append(n.slides))),
                        n.vars.animationLoop && !h && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(m.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                        n.newSlides = t(n.vars.selector, n),
                        i = u ? n.count - 1 - n.currentSlide + n.cloneOffset: n.currentSlide + n.cloneOffset,
                        c && !h ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                            n.newSlides.css({
                                display: "block"
                            }),
                            n.doMath(),
                            n.viewport.height(n.h),
                            n.setProps(i * n.h, "init")
                        },
                        "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(i * n.computedW, "init"), setTimeout(function() {
                            n.doMath(),
                            n.newSlides.css({
                                width: n.computedW,
                                float: "left",
                                display: "block"
                            }),
                            n.vars.smoothHeight && m.smoothHeight()
                        },
                        "init" === e ? 100 : 0))
                    }
                    h || n.slides.removeClass(a + "active-slide").eq(n.currentSlide).addClass(a + "active-slide"),
                    n.vars.init(n)
                },
                n.doMath = function() {
                    var t = n.slides.first(),
                    e = n.vars.itemMargin,
                    i = n.vars.minItems,
                    o = n.vars.maxItems;
                    n.w = void 0 === n.viewport ? n.width() : n.viewport.width(),
                    n.h = t.height(),
                    n.boxPadding = t.outerWidth() - t.width(),
                    h ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT: n.w, n.maxW = o ? o * n.itemT - e: n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i: n.maxW < n.w ? (n.w - e * (o - 1)) / o: n.vars.itemWidth > n.w ? n.w: n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move: n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1),
                    n.computedW = n.itemW - n.boxPadding
                },
                n.update = function(t, e) {
                    n.doMath(),
                    h || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1), n.animatingTo = n.currentSlide),
                    n.vars.controlNav && !n.manualControls && ("add" === e && !h || n.pagingCount > n.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !h || n.pagingCount < n.controlNav.length) && (h && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), m.controlNav.update("remove", n.last))),
                    n.vars.directionNav && m.directionNav.update()
                },
                n.addSlide = function(e, i) {
                    var o = t(e);
                    n.count += 1,
                    n.last = n.count - 1,
                    c && u ? void 0 !== i ? n.slides.eq(n.count - i).after(o) : n.container.prepend(o) : void 0 !== i ? n.slides.eq(i).before(o) : n.container.append(o),
                    n.update(i, "add"),
                    n.slides = t(n.vars.selector + ":not(.clone)", n),
                    n.setup(),
                    n.vars.added(n)
                },
                n.removeSlide = function(e) {
                    var i = isNaN(e) ? n.slides.index(t(e)) : e;
                    n.count -= 1,
                    n.last = n.count - 1,
                    isNaN(e) ? t(e, n.slides).remove() : c && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(),
                    n.doMath(),
                    n.update(i, "remove"),
                    n.slides = t(n.vars.selector + ":not(.clone)", n),
                    n.setup(),
                    n.vars.removed(n)
                },
                m.init()
            },
            t(window).blur(function(t) {
                focused = !1
            }).focus(function(t) {
                focused = !0
            }),
            t.flexslider.defaults = {
                namespace: "flex-",
                selector: ".slides > li",
                animation: "fade",
                easing: "swing",
                direction: "horizontal",
                reverse: !1,
                animationLoop: !0,
                smoothHeight: !1,
                startAt: 0,
                slideshow: !0,
                slideshowSpeed: 7e3,
                animationSpeed: 600,
                initDelay: 0,
                randomize: !1,
                fadeFirstSlide: !0,
                thumbCaptions: !1,
                pauseOnAction: !0,
                pauseOnHover: !1,
                pauseInvisible: !0,
                useCSS: !0,
                touch: !0,
                video: !1,
                controlNav: !0,
                directionNav: !0,
                prevText: "Previous",
                nextText: "Next",
                keyboard: !0,
                multipleKeyboard: !1,
                mousewheel: !1,
                pausePlay: !1,
                pauseText: "Pause",
                playText: "Play",
                controlsContainer: "",
                manualControls: "",
                customDirectionNav: "",
                sync: "",
                asNavFor: "",
                itemWidth: 0,
                itemMargin: 0,
                minItems: 1,
                maxItems: 0,
                move: 0,
                allowOneSlide: !0,
                start: function() {},
                before: function() {},
                after: function() {},
                end: function() {},
                added: function() {},
                removed: function() {},
                init: function() {}
            },
            t.fn.flexslider = function(e) {
                if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                    var i = t(this),
                    n = e.selector ? e.selector: ".slides > li",
                    o = i.find(n);
                    1 === o.length && !0 === e.allowOneSlide || 0 === o.length ? (o.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
                });
                var i = t(this).data("flexslider");
                switch (e) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "stop":
                    i.stop();
                    break;
                case "next":
                    i.flexAnimate(i.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    i.flexAnimate(i.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof e && i.flexAnimate(e, !0)
                }
            }
        } (jQuery)
    },
    {}],
    4 : [function(t, e, i) { !
        function(t, e, i, n) {
            "use strict";
            function o(e, i) {
                this.element = e;
                var n = {};
                t.each(t(this.element).data(),
                function(t, e) {
                    var i = function(t) {
                        return t && t[0].toLowerCase() + t.slice(1)
                    } (t.replace("fluidbox", ""));
                    "" === i && null === i || ("false" == e ? e = !1 : "true" == e && (e = !0), n[i] = e)
                }),
                this.settings = t.extend({},
                r, i, n),
                this.settings.viewportFill = Math.max(Math.min(parseFloat(this.settings.viewportFill), 1), 0),
                this.settings.stackIndex < this.settings.stackIndexDelta && (settings.stackIndexDelta = settings.stackIndex),
                this._name = s,
                this.init()
            }
            var a = t(e),
            s = (t(i), "fluidbox"),
            r = {
                immediateOpen: !1,
                loader: !1,
                maxWidth: 0,
                maxHeight: 0,
                resizeThrottle: 500,
                stackIndex: 1e3,
                stackIndexDelta: 10,
                viewportFill: .95
            },
            l = {},
            d = 0;
            "undefined" != typeof console && "undefined" !== console.warn || (console = {},
            console.warn = function() {}),
            t.isFunction(t.throttle);
            var c = function() {
                var t, e = i.createElement("fakeelement"),
                n = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (t in n) if (void 0 !== e.style[t]) return n[t]
            } (),
            u = {
                dom: function() {
                    var e = t("<div />", {
                        class: "fluidbox__wrap",
                        css: {
                            zIndex: this.settings.stackIndex - this.settings.stackIndexDelta
                        }
                    });
                    if (t(this.element).addClass("fluidbox--closed").wrapInner(e).find("img").first().css({
                        opacity: 1
                    }).addClass("fluidbox__thumb").after('<div class="fluidbox__ghost" />'), this.settings.loader) {
                        var i = t("<div />", {
                            class: "fluidbox__loader",
                            css: {
                                zIndex: 2
                            }
                        });
                        t(this.element).find(".fluidbox__wrap").append(i)
                    }
                },
                prepareFb: function() {
                    var e = this,
                    i = t(this.element);
                    i.trigger("thumbloaddone.fluidbox"),
                    u.measure.fbElements.call(this),
                    e.bindEvents(),
                    i.addClass("fluidbox--ready"),
                    e.bindListeners(),
                    i.trigger("ready.fluidbox")
                },
                measure: {
                    viewport: function() {
                        l.viewport = {
                            w: a.width(),
                            h: a.height()
                        }
                    },
                    fbElements: function() {
                        var e = this,
                        i = t(this.element),
                        n = i.find("img").first(),
                        o = i.find(".fluidbox__ghost"),
                        a = i.find(".fluidbox__wrap");
                        e.instanceData.thumb = {
                            natW: n[0].naturalWidth,
                            natH: n[0].naturalHeight,
                            w: n.width(),
                            h: n.height()
                        },
                        o.css({
                            width: n.width(),
                            height: n.height(),
                            top: n.offset().top - a.offset().top + parseInt(n.css("borderTopWidth")) + parseInt(n.css("paddingTop")),
                            left: n.offset().left - a.offset().left + parseInt(n.css("borderLeftWidth")) + parseInt(n.css("paddingLeft"))
                        })
                    }
                },
                checkURL: function(t) {
                    var e = 0;
                    return /[\s+]/g.test(t) ? (console.warn("Fluidbox: Fluidbox opening is halted because it has detected characters in your URL string that need to be properly encoded/escaped. Whitespace(s) have to be escaped manually. See RFC3986 documentation."), e = 1) : /[\"\'\(\)]/g.test(t) && (console.warn("Fluidbox: Fluidbox opening will proceed, but it has detected characters in your URL string that need to be properly encoded/escaped. These will be escaped for you. See RFC3986 documentation."), e = 0),
                    e
                },
                formatURL: function(t) {
                    return t.replace(/"/g, "%22").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")
                }
            };
            t.extend(o.prototype, {
                init: function() {
                    var e = this,
                    i = t(this.element),
                    n = i.find("img").first();
                    if (u.measure.viewport(), (!e.instanceData || !e.instanceData.initialized) && i.is("a") && 1 === i.children().length && (i.children().is("img") || i.children().is("picture") && 1 === i.find("img").length) && "none" !== i.css("display") && "none" !== i.children().css("display") && "none" !== i.parents().css("display")) {
                        i.removeClass("fluidbox--destroyed"),
                        e.instanceData = {},
                        e.instanceData.initialized = !0,
                        e.instanceData.originalNode = i.html(),
                        d += 1,
                        e.instanceData.id = d,
                        i.addClass("fluidbox__instance-" + d),
                        i.addClass("fluidbox--initialized"),
                        u.dom.call(e),
                        i.trigger("init.fluidbox");
                        var o = new Image;
                        n.width() > 0 && n.height() > 0 ? u.prepareFb.call(e) : (o.onload = function() {
                            u.prepareFb.call(e)
                        },
                        o.onerror = function() {
                            i.trigger("thumbloadfail.fluidbox")
                        },
                        o.src = n.attr("src"))
                    }
                },
                open: function() {
                    var e = this,
                    i = t(this.element),
                    n = i.find("img").first(),
                    o = i.find(".fluidbox__ghost"),
                    a = i.find(".fluidbox__wrap");
                    e.instanceData.state = 1,
                    o.off(c),
                    t(".fluidbox--opened").fluidbox("close");
                    var s = t("<div />", {
                        class: "fluidbox__overlay",
                        css: {
                            zIndex: -1
                        }
                    });
                    if (a.append(s), i.removeClass("fluidbox--closed").addClass("fluidbox--loading"), u.checkURL(n.attr("src"))) return e.close(),
                    !1;
                    o.css({
                        "background-image": "url(" + u.formatURL(n.attr("src")) + ")",
                        opacity: 1
                    }),
                    u.measure.fbElements.call(e);
                    var r;
                    e.settings.immediateOpen ? (i.addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({
                        zIndex: e.settings.stackIndex + e.settings.stackIndexDelta
                    }), i.trigger("openstart.fluidbox"), e.compute(), n.css({
                        opacity: 0
                    }), t(".fluidbox__overlay").css({
                        opacity: 1
                    }), o.one(c,
                    function() {
                        i.trigger("openend.fluidbox")
                    }), r = new Image, r.onload = function() {
                        if (i.trigger("imageloaddone.fluidbox"), 1 === e.instanceData.state) {
                            if (e.instanceData.thumb.natW = r.naturalWidth, e.instanceData.thumb.natH = r.naturalHeight, i.removeClass("fluidbox--loading"), u.checkURL(r.src)) return e.close({
                                error: !0
                            }),
                            !1;
                            o.css({
                                "background-image": "url(" + u.formatURL(r.src) + ")"
                            }),
                            e.compute()
                        }
                    },
                    r.onerror = function() {
                        e.close({
                            error: !0
                        }),
                        i.trigger("imageloadfail.fluidbox"),
                        i.trigger("delayedloadfail.fluidbox")
                    },
                    r.src = i.attr("href")) : (r = new Image, r.onload = function() {
                        if (i.trigger("imageloaddone.fluidbox"), i.removeClass("fluidbox--loading").addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({
                            zIndex: e.settings.stackIndex + e.settings.stackIndexDelta
                        }), i.trigger("openstart.fluidbox"), u.checkURL(r.src)) return e.close({
                            error: !0
                        }),
                        !1;
                        o.css({
                            "background-image": "url(" + u.formatURL(r.src) + ")"
                        }),
                        e.instanceData.thumb.natW = r.naturalWidth,
                        e.instanceData.thumb.natH = r.naturalHeight,
                        e.compute(),
                        n.css({
                            opacity: 0
                        }),
                        t(".fluidbox__overlay").css({
                            opacity: 1
                        }),
                        o.one(c,
                        function() {
                            i.trigger("openend.fluidbox")
                        })
                    },
                    r.onerror = function() {
                        e.close({
                            error: !0
                        }),
                        i.trigger("imageloadfail.fluidbox")
                    },
                    r.src = i.attr("href"))
                },
                compute: function() {
                    var e = this,
                    i = t(this.element),
                    n = i.find("img").first(),
                    o = i.find(".fluidbox__ghost"),
                    s = i.find(".fluidbox__wrap"),
                    r = e.instanceData.thumb.natW,
                    d = e.instanceData.thumb.natH,
                    c = e.instanceData.thumb.w,
                    u = e.instanceData.thumb.h,
                    h = r / d,
                    p = l.viewport.w / l.viewport.h;
                    e.settings.maxWidth > 0 ? (r = e.settings.maxWidth, d = r / h) : e.settings.maxHeight > 0 && (d = e.settings.maxHeight, r = d * h);
                    var f, m, g, v, b;
                    p > h ? (f = d < l.viewport.h ? d: l.viewport.h * e.settings.viewportFill, g = f / u, v = r * (u * g / d) / c, b = g) : (m = r < l.viewport.w ? r: l.viewport.w * e.settings.viewportFill, v = m / c, g = d * (c * v / r) / u, b = v),
                    e.settings.maxWidth && e.settings.maxHeight && console.warn("Fluidbox: Both maxHeight and maxWidth are specified. You can only specify one. If both are specified, only the maxWidth property will be respected. This will not generate any error, but may cause unexpected sizing behavior.");
                    var w = a.scrollTop() - n.offset().top + u * (b - 1) * .5 + .5 * (a.height() - u * b),
                    y = c * (b - 1) * .5 + .5 * (a.width() - c * b) - n.offset().left,
                    x = parseInt(100 * v) / 100 + "," + parseInt(100 * g) / 100;
                    o.css({
                        transform: "translate(" + parseInt(100 * y) / 100 + "px," + parseInt(100 * w) / 100 + "px) scale(" + x + ")",
                        top: n.offset().top - s.offset().top,
                        left: n.offset().left - s.offset().left
                    }),
                    i.find(".fluidbox__loader").css({
                        transform: "translate(" + parseInt(100 * y) / 100 + "px," + parseInt(100 * w) / 100 + "px) scale(" + x + ")"
                    }),
                    i.trigger("computeend.fluidbox")
                },
                recompute: function() {
                    this.compute()
                },
                close: function(e) {
                    var i = this,
                    n = t(this.element),
                    o = n.find("img").first(),
                    a = n.find(".fluidbox__ghost"),
                    s = n.find(".fluidbox__wrap"),
                    r = n.find(".fluidbox__overlay"),
                    l = t.extend(null, {
                        error: !1
                    },
                    e);
                    if (null === i.instanceData.state || void 0 === i.instanceData.state || 0 === i.instanceData.state) return ! 1;
                    i.instanceData.state = 0,
                    n.trigger("closestart.fluidbox"),
                    n.removeClass(function(t, e) {
                        return (e.match(/(^|\s)fluidbox--(opened|loaded|loading)+/g) || []).join(" ")
                    }).addClass("fluidbox--closed"),
                    a.css({
                        transform: "translate(0,0) scale(1,1)",
                        top: o.offset().top - s.offset().top + parseInt(o.css("borderTopWidth")) + parseInt(o.css("paddingTop")),
                        left: o.offset().left - s.offset().left + parseInt(o.css("borderLeftWidth")) + parseInt(o.css("paddingLeft"))
                    }),
                    n.find(".fluidbox__loader").css({
                        transform: "none"
                    }),
                    a.one(c,
                    function() {
                        a.css({
                            opacity: 0
                        }),
                        o.css({
                            opacity: 1
                        }),
                        r.remove(),
                        s.css({
                            zIndex: i.settings.stackIndex - i.settings.stackIndexDelta
                        }),
                        n.trigger("closeend.fluidbox")
                    }),
                    l.error && a.trigger("transitionend"),
                    r.css({
                        opacity: 0
                    })
                },
                bindEvents: function() {
                    var e = this;
                    t(this.element).on("click.fluidbox",
                    function(t) {
                        t.preventDefault(),
                        e.instanceData.state && 0 !== e.instanceData.state ? e.close() : e.open()
                    })
                },
                bindListeners: function() {
                    var e = this,
                    i = t(this.element),
                    n = function() {
                        u.measure.viewport(),
                        u.measure.fbElements.call(e),
                        i.hasClass("fluidbox--opened") && e.compute()
                    };
                    t.isFunction(t.throttle) ? a.on("resize.fluidbox" + e.instanceData.id, t.throttle(e.settings.resizeThrottle, n)) : a.on("resize.fluidbox" + e.instanceData.id, n),
                    i.on("reposition.fluidbox",
                    function() {
                        e.reposition()
                    }),
                    i.on("recompute.fluidbox, compute.fluidbox",
                    function() {
                        e.compute()
                    }),
                    i.on("destroy.fluidbox",
                    function() {
                        e.destroy()
                    }),
                    i.on("close.fluidbox",
                    function() {
                        e.close()
                    })
                },
                unbind: function() {
                    t(this.element).off("click.fluidbox reposition.fluidbox recompute.fluidbox compute.fluidbox destroy.fluidbox close.fluidbox"),
                    a.off("resize.fluidbox" + this.instanceData.id)
                },
                reposition: function() {
                    u.measure.fbElements.call(this)
                },
                destroy: function() {
                    var e = this.instanceData.originalNode;
                    this.unbind(),
                    t.data(this.element, "plugin_" + s, null),
                    t(this.element).removeClass(function(t, e) {
                        return (e.match(/(^|\s)fluidbox[--|__]\S+/g) || []).join(" ")
                    }).empty().html(e).addClass("fluidbox--destroyed").trigger("destroyed.fluidbox")
                },
                getMetadata: function() {
                    return this.instanceData
                }
            }),
            t.fn[s] = function(e) {
                var i = arguments;
                if (void 0 === e || "object" == typeof e) return this.each(function() {
                    t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
                });
                if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
                    var n;
                    return this.each(function() {
                        var a = t.data(this, "plugin_" + s);
                        a instanceof o && "function" == typeof a[e] ? n = a[e].apply(a, Array.prototype.slice.call(i, 1)) : console.warn('Fluidbox: The method "' + e + '" used is not defined in Fluidbox. Please make sure you are calling the correct public method.')
                    }),
                    void 0 !== n ? n: this
                }
                return this
            }
        } (jQuery, window, document)
    },
    {}],
    5 : [function(t, e, i) {
        /*!
    * Lazy Load - jQuery plugin for lazy loading images
    *
    * Copyright (c) 2007-2015 Mika Tuupola
    *
    * Licensed under the MIT license:
    *   http://www.opensource.org/licenses/mit-license.php
    *
    * Project home:
    *   http://www.appelsiini.net/projects/lazyload
    *
    * Version:  1.9.7
    *
    */
        !
        function(t, e, i, n) {
            var o = t(e),
            a = function() {
                try {
                    return 0 === i.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
                } catch(t) {
                    return ! 1
                }
            } ();
            t.fn.lazyload = function(n) {
                function s() {
                    var e = 0;
                    d.each(function() {
                        var i = t(this);
                        if (!c.skip_invisible || i.is(":visible")) if (t.abovethetop(this, c) || t.leftofbegin(this, c));
                        else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                            if (++e > c.failure_limit) return ! 1
                        } else i.trigger("appear"),
                        e = 0
                    })
                }
                function r(t) {
                    return t.split("?").length > 1 ? t.match(/([&?]+)x-oss-process=/i) ? t = t.replace(/([&?]+)x-oss-process=/i, "$1x-oss-process=image/format,webp,") : t.match(/([&?]+)imageMogr2/i) ? t = t.replace(/([&?]+)imageMogr2\//i, "$1imageMogr2/format/webp/") : t += c.webp.replace("?", "&") : t += c.webp,
                    t
                }
                var l, d = this,
                c = {
                    threshold: 0,
                    failure_limit: 500,
                    event: "scroll",
                    effect: "show",
                    container: e,
                    data_attribute: "original",
                    skip_invisible: !1,
                    appear: null,
                    load: null,
                    webp: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
                /*!
    * Lazy Load - jQuery plugin for lazy loading images
    *
    * Copyright (c) 2007-2015 Mika Tuupola
    *
    * Licensed under the MIT license:
    *   http://www.opensource.org/licenses/mit-license.php
    *
    * Project home:
    *   http://www.appelsiini.net/projects/lazyload
    *
    * Version:  1.9.7
    *
    */
                return n && (void 0 !== n.failurelimit && (n.failure_limit = n.failurelimit, delete n.failurelimit), void 0 !== n.effectspeed && (n.effect_speed = n.effectspeed, delete n.effectspeed), t.extend(c, n)),
                l = void 0 === c.container || c.container === e ? o: t(c.container),
                0 === c.event.indexOf("scroll") && l.on(c.event,
                function() {
                    return s()
                }),
                this.each(function() {
                    var e = this,
                    i = t(e);
                    e.loaded = !1,
                    void 0 !== i.attr("src") && !1 !== i.attr("src") || i.is("img") && i.attr("src", c.placeholder),
                    i.one("appear",
                    function() {
                        if (!this.loaded) {
                            if (c.appear) {
                                var n = d.length;
                                c.appear.call(e, n, c)
                            }
                            var o = i.attr("data-" + c.data_attribute);
                            a && c.webp && (o = r(o));
                            var s = i.attr("data-srcset"),
                            l = i.css("display");
                            t("<img />").one("load",
                            function() {
                                i.hide(),
                                i.is("img") ? (s && i.attr("srcset", s), i.attr("src", o)) : i.css("background-image", "url('" + o + "')"),
                                i[c.effect](c.effect_speed).css("display", l),
                                e.loaded = !0;
                                var n = t.grep(d,
                                function(t) {
                                    return ! t.loaded
                                });
                                if (d = t(n), c.load) {
                                    var a = d.length;
                                    c.load.call(e, a, c)
                                }
                                i.trigger("DOMSubtreeModified")
                            }).attr("src", o)
                        }
                    }),
                    0 !== c.event.indexOf("scroll") && i.on(c.event,
                    function() {
                        e.loaded || i.trigger("appear")
                    })
                }),
                o.on("resize",
                function() {
                    s()
                }),
                /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.on("pageshow",
                function(e) {
                    e.originalEvent && e.originalEvent.persisted && d.each(function() {
                        t(this).trigger("appear")
                    })
                }),
                t(i).ready(function() {
                    s()
                }),
                this
            },
            t.belowthefold = function(i, n) {
                return (void 0 === n.container || n.container === e ? (e.innerHeight ? e.innerHeight: o.height()) + o.scrollTop() : t(n.container).offset().top + t(n.container).height()) <= t(i).offset().top - n.threshold
            },
            t.rightoffold = function(i, n) {
                return (void 0 === n.container || n.container === e ? o.width() + o.scrollLeft() : t(n.container).offset().left + t(n.container).width()) <= t(i).offset().left - n.threshold
            },
            t.abovethetop = function(i, n) {
                return (void 0 === n.container || n.container === e ? o.scrollTop() : t(n.container).offset().top) >= t(i).offset().top + n.threshold + t(i).height()
            },
            t.leftofbegin = function(i, n) {
                return (void 0 === n.container || n.container === e ? o.scrollLeft() : t(n.container).offset().left) >= t(i).offset().left + n.threshold + t(i).width()
            },
            t.inviewport = function(e, i) {
                return ! (t.rightoffold(e, i) || t.leftofbegin(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
            },
            t.extend(t.expr[":"], {
                "below-the-fold": function(e) {
                    return t.belowthefold(e, {
                        threshold: 0
                    })
                },
                "above-the-top": function(e) {
                    return ! t.belowthefold(e, {
                        threshold: 0
                    })
                },
                "right-of-screen": function(e) {
                    return t.rightoffold(e, {
                        threshold: 0
                    })
                },
                "left-of-screen": function(e) {
                    return ! t.rightoffold(e, {
                        threshold: 0
                    })
                },
                "in-viewport": function(e) {
                    return t.inviewport(e, {
                        threshold: 0
                    })
                },
                "above-the-fold": function(e) {
                    return ! t.belowthefold(e, {
                        threshold: 0
                    })
                },
                "right-of-fold": function(e) {
                    return t.rightoffold(e, {
                        threshold: 0
                    })
                },
                "left-of-fold": function(e) {
                    return ! t.rightoffold(e, {
                        threshold: 0
                    })
                }
            })
        } (jQuery, window, document)
    },
    {}],
    6 : [function(t, e, i) { !
        function(t) {
            t.fn.qrcode = function(e) {
                function i(t) {
                    this.mode = r,
                    this.data = t
                }
                function n(t, e) {
                    this.typeNumber = t,
                    this.errorCorrectLevel = e,
                    this.modules = null,
                    this.moduleCount = 0,
                    this.dataCache = null,
                    this.dataList = []
                }
                function o(t, e) {
                    if (void 0 == t.length) throw Error(t.length + "/" + e);
                    for (var i = 0; i < t.length && 0 == t[i];) i++;
                    this.num = Array(t.length - i + e);
                    for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
                }
                function a(t, e) {
                    this.totalCount = t,
                    this.dataCount = e
                }
                function s() {
                    this.buffer = [],
                    this.length = 0
                }
                var r;
                i.prototype = {
                    getLength: function() {
                        return this.data.length
                    },
                    write: function(t) {
                        for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
                    }
                },
                n.prototype = {
                    addData: function(t) {
                        this.dataList.push(new i(t)),
                        this.dataCache = null
                    },
                    isDark: function(t, e) {
                        if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw Error(t + "," + e);
                        return this.modules[t][e]
                    },
                    getModuleCount: function() {
                        return this.moduleCount
                    },
                    make: function() {
                        if (1 > this.typeNumber) {
                            for (var t = 1,
                            t = 1; 40 > t; t++) {
                                for (var e = a.getRSBlocks(t, this.errorCorrectLevel), i = new s, n = 0, o = 0; o < e.length; o++) n += e[o].dataCount;
                                for (o = 0; o < this.dataList.length; o++) e = this.dataList[o],
                                i.put(e.mode, 4),
                                i.put(e.getLength(), l.getLengthInBits(e.mode, t)),
                                e.write(i);
                                if (i.getLengthInBits() <= 8 * n) break
                            }
                            this.typeNumber = t
                        }
                        this.makeImpl(!1, this.getBestMaskPattern())
                    },
                    makeImpl: function(t, e) {
                        this.moduleCount = 4 * this.typeNumber + 17,
                        this.modules = Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++) {
                            this.modules[i] = Array(this.moduleCount);
                            for (var o = 0; o < this.moduleCount; o++) this.modules[i][o] = null
                        }
                        this.setupPositionProbePattern(0, 0),
                        this.setupPositionProbePattern(this.moduleCount - 7, 0),
                        this.setupPositionProbePattern(0, this.moduleCount - 7),
                        this.setupPositionAdjustPattern(),
                        this.setupTimingPattern(),
                        this.setupTypeInfo(t, e),
                        7 <= this.typeNumber && this.setupTypeNumber(t),
                        null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                        this.mapData(this.dataCache, e)
                    },
                    setupPositionProbePattern: function(t, e) {
                        for (var i = -1; 7 >= i; i++) if (! ( - 1 >= t + i || this.moduleCount <= t + i)) for (var n = -1; 7 >= n; n++) - 1 >= e + n || this.moduleCount <= e + n || (this.modules[t + i][e + n] = 0 <= i && 6 >= i && (0 == n || 6 == n) || 0 <= n && 6 >= n && (0 == i || 6 == i) || 2 <= i && 4 >= i && 2 <= n && 4 >= n)
                    },
                    getBestMaskPattern: function() {
                        for (var t = 0,
                        e = 0,
                        i = 0; 8 > i; i++) {
                            this.makeImpl(!0, i);
                            var n = l.getLostPoint(this); (0 == i || t > n) && (t = n, e = i)
                        }
                        return e
                    },
                    createMovieClip: function(t, e, i) {
                        for (t = t.createEmptyMovieClip(e, i), this.make(), e = 0; e < this.modules.length; e++) for (var i = 1 * e,
                        n = 0; n < this.modules[e].length; n++) {
                            var o = 1 * n;
                            this.modules[e][n] && (t.beginFill(0, 100), t.moveTo(o, i), t.lineTo(o + 1, i), t.lineTo(o + 1, i + 1), t.lineTo(o, i + 1), t.endFill())
                        }
                        return t
                    },
                    setupTimingPattern: function() {
                        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
                        for (t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
                    },
                    setupPositionAdjustPattern: function() {
                        for (var t = l.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
                            var n = t[e],
                            o = t[i];
                            if (null == this.modules[n][o]) for (var a = -2; 2 >= a; a++) for (var s = -2; 2 >= s; s++) this.modules[n + a][o + s] = -2 == a || 2 == a || -2 == s || 2 == s || 0 == a && 0 == s
                        }
                    },
                    setupTypeNumber: function(t) {
                        for (var e = l.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
                            var n = !t && 1 == (e >> i & 1);
                            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
                        }
                        for (i = 0; 18 > i; i++) n = !t && 1 == (e >> i & 1),
                        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
                    },
                    setupTypeInfo: function(t, e) {
                        for (var i = l.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), n = 0; 15 > n; n++) {
                            var o = !t && 1 == (i >> n & 1);
                            6 > n ? this.modules[n][8] = o: 8 > n ? this.modules[n + 1][8] = o: this.modules[this.moduleCount - 15 + n][8] = o
                        }
                        for (n = 0; 15 > n; n++) o = !t && 1 == (i >> n & 1),
                        8 > n ? this.modules[8][this.moduleCount - n - 1] = o: 9 > n ? this.modules[8][15 - n - 1 + 1] = o: this.modules[8][15 - n - 1] = o;
                        this.modules[this.moduleCount - 8][8] = !t
                    },
                    mapData: function(t, e) {
                        for (var i = -1,
                        n = this.moduleCount - 1,
                        o = 7,
                        a = 0,
                        s = this.moduleCount - 1; 0 < s; s -= 2) for (6 == s && s--;;) {
                            for (var r = 0; 2 > r; r++) if (null == this.modules[n][s - r]) {
                                var d = !1;
                                a < t.length && (d = 1 == (t[a] >>> o & 1)),
                                l.getMask(e, n, s - r) && (d = !d),
                                this.modules[n][s - r] = d,
                                o--,
                                -1 == o && (a++, o = 7)
                            }
                            if (0 > (n += i) || this.moduleCount <= n) {
                                n -= i,
                                i = -i;
                                break
                            }
                        }
                    }
                },
                n.PAD0 = 236,
                n.PAD1 = 17,
                n.createData = function(t, e, i) {
                    for (var e = a.getRSBlocks(t, e), o = new s, r = 0; r < i.length; r++) {
                        var d = i[r];
                        o.put(d.mode, 4),
                        o.put(d.getLength(), l.getLengthInBits(d.mode, t)),
                        d.write(o)
                    }
                    for (r = t = 0; r < e.length; r++) t += e[r].dataCount;
                    if (o.getLengthInBits() > 8 * t) throw Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * t + ")");
                    for (o.getLengthInBits() + 4 <= 8 * t && o.put(0, 4); 0 != o.getLengthInBits() % 8;) o.putBit(!1);
                    for (; ! (o.getLengthInBits() >= 8 * t) && (o.put(n.PAD0, 8), !(o.getLengthInBits() >= 8 * t));) o.put(n.PAD1, 8);
                    return n.createBytes(o, e)
                },
                n.createBytes = function(t, e) {
                    for (var i = 0,
                    n = 0,
                    a = 0,
                    s = Array(e.length), r = Array(e.length), d = 0; d < e.length; d++) {
                        var c = e[d].dataCount,
                        u = e[d].totalCount - c,
                        n = Math.max(n, c),
                        a = Math.max(a, u);
                        s[d] = Array(c);
                        for (var h = 0; h < s[d].length; h++) s[d][h] = 255 & t.buffer[h + i];
                        for (i += c, h = l.getErrorCorrectPolynomial(u), c = new o(s[d], h.getLength() - 1).mod(h), r[d] = Array(h.getLength() - 1), h = 0; h < r[d].length; h++) u = h + c.getLength() - r[d].length,
                        r[d][h] = 0 <= u ? c.get(u) : 0
                    }
                    for (h = d = 0; h < e.length; h++) d += e[h].totalCount;
                    for (i = Array(d), h = c = 0; h < n; h++) for (d = 0; d < e.length; d++) h < s[d].length && (i[c++] = s[d][h]);
                    for (h = 0; h < a; h++) for (d = 0; d < e.length; d++) h < r[d].length && (i[c++] = r[d][h]);
                    return i
                },
                r = 4;
                for (var l = {
                    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(t) {
                        for (var e = t << 10; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G15);) e ^= l.G15 << l.getBCHDigit(e) - l.getBCHDigit(l.G15);
                        return (t << 10 | e) ^ l.G15_MASK
                    },
                    getBCHTypeNumber: function(t) {
                        for (var e = t << 12; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G18);) e ^= l.G18 << l.getBCHDigit(e) - l.getBCHDigit(l.G18);
                        return t << 12 | e
                    },
                    getBCHDigit: function(t) {
                        for (var e = 0; 0 != t;) e++,
                        t >>>= 1;
                        return e
                    },
                    getPatternPosition: function(t) {
                        return l.PATTERN_POSITION_TABLE[t - 1]
                    },
                    getMask: function(t, e, i) {
                        switch (t) {
                        case 0:
                            return 0 == (e + i) % 2;
                        case 1:
                            return 0 == e % 2;
                        case 2:
                            return 0 == i % 3;
                        case 3:
                            return 0 == (e + i) % 3;
                        case 4:
                            return 0 == (Math.floor(e / 2) + Math.floor(i / 3)) % 2;
                        case 5:
                            return 0 == e * i % 2 + e * i % 3;
                        case 6:
                            return 0 == (e * i % 2 + e * i % 3) % 2;
                        case 7:
                            return 0 == (e * i % 3 + (e + i) % 2) % 2;
                        default:
                            throw Error("bad maskPattern:" + t)
                        }
                    },
                    getErrorCorrectPolynomial: function(t) {
                        for (var e = new o([1], 0), i = 0; i < t; i++) e = e.multiply(new o([1, d.gexp(i)], 0));
                        return e
                    },
                    getLengthInBits: function(t, e) {
                        if (1 <= e && 10 > e) switch (t) {
                        case 1:
                            return 10;
                        case 2:
                            return 9;
                        case r:
                        case 8:
                            return 8;
                        default:
                            throw Error("mode:" + t)
                        } else if (27 > e) switch (t) {
                        case 1:
                            return 12;
                        case 2:
                            return 11;
                        case r:
                            return 16;
                        case 8:
                            return 10;
                        default:
                            throw Error("mode:" + t)
                        } else {
                            if (! (41 > e)) throw Error("type:" + e);
                            switch (t) {
                            case 1:
                                return 14;
                            case 2:
                                return 13;
                            case r:
                                return 16;
                            case 8:
                                return 12;
                            default:
                                throw Error("mode:" + t)
                            }
                        }
                    },
                    getLostPoint: function(t) {
                        for (var e = t.getModuleCount(), i = 0, n = 0; n < e; n++) for (var o = 0; o < e; o++) {
                            for (var a = 0,
                            s = t.isDark(n, o), r = -1; 1 >= r; r++) if (! (0 > n + r || e <= n + r)) for (var l = -1; 1 >= l; l++) 0 > o + l || e <= o + l || 0 == r && 0 == l || s == t.isDark(n + r, o + l) && a++;
                            5 < a && (i += 3 + a - 5)
                        }
                        for (n = 0; n < e - 1; n++) for (o = 0; o < e - 1; o++) a = 0,
                        t.isDark(n, o) && a++,
                        t.isDark(n + 1, o) && a++,
                        t.isDark(n, o + 1) && a++,
                        t.isDark(n + 1, o + 1) && a++,
                        (0 == a || 4 == a) && (i += 3);
                        for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (i += 40);
                        for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (i += 40);
                        for (o = a = 0; o < e; o++) for (n = 0; n < e; n++) t.isDark(n, o) && a++;
                        return t = Math.abs(100 * a / e / e - 50) / 5,
                        i + 10 * t
                    }
                },
                d = {
                    glog: function(t) {
                        if (1 > t) throw Error("glog(" + t + ")");
                        return d.LOG_TABLE[t]
                    },
                    gexp: function(t) {
                        for (; 0 > t;) t += 255;
                        for (; 256 <= t;) t -= 255;
                        return d.EXP_TABLE[t]
                    },
                    EXP_TABLE: Array(256),
                    LOG_TABLE: Array(256)
                },
                c = 0; 8 > c; c++) d.EXP_TABLE[c] = 1 << c;
                for (c = 8; 256 > c; c++) d.EXP_TABLE[c] = d.EXP_TABLE[c - 4] ^ d.EXP_TABLE[c - 5] ^ d.EXP_TABLE[c - 6] ^ d.EXP_TABLE[c - 8];
                for (c = 0; 255 > c; c++) d.LOG_TABLE[d.EXP_TABLE[c]] = c;
                return o.prototype = {
                    get: function(t) {
                        return this.num[t]
                    },
                    getLength: function() {
                        return this.num.length
                    },
                    multiply: function(t) {
                        for (var e = Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < t.getLength(); n++) e[i + n] ^= d.gexp(d.glog(this.get(i)) + d.glog(t.get(n)));
                        return new o(e, 0)
                    },
                    mod: function(t) {
                        if (0 > this.getLength() - t.getLength()) return this;
                        for (var e = d.glog(this.get(0)) - d.glog(t.get(0)), i = Array(this.getLength()), n = 0; n < this.getLength(); n++) i[n] = this.get(n);
                        for (n = 0; n < t.getLength(); n++) i[n] ^= d.gexp(d.glog(t.get(n)) + e);
                        return new o(i, 0).mod(t)
                    }
                },
                a.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                a.getRSBlocks = function(t, e) {
                    var i = a.getRsBlockTable(t, e);
                    if (void 0 == i) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                    for (var n = i.length / 3,
                    o = [], s = 0; s < n; s++) for (var r = i[3 * s + 0], l = i[3 * s + 1], d = i[3 * s + 2], c = 0; c < r; c++) o.push(new a(l, d));
                    return o
                },
                a.getRsBlockTable = function(t, e) {
                    switch (e) {
                    case 1:
                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                    case 0:
                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                    case 3:
                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                    case 2:
                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 3]
                    }
                },
                s.prototype = {
                    get: function(t) {
                        return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
                    },
                    put: function(t, e) {
                        for (var i = 0; i < e; i++) this.putBit(1 == (t >>> e - i - 1 & 1))
                    },
                    getLengthInBits: function() {
                        return this.length
                    },
                    putBit: function(t) {
                        var e = Math.floor(this.length / 8);
                        this.buffer.length <= e && this.buffer.push(0),
                        t && (this.buffer[e] |= 128 >>> this.length % 8),
                        this.length++
                    }
                },
                "string" == typeof e && (e = {
                    text: e
                }),
                e = t.extend({},
                {
                    render: "canvas",
                    width: 256,
                    height: 256,
                    typeNumber: -1,
                    correctLevel: 2,
                    background: "#ffffff",
                    foreground: "#000000"
                },
                e),
                this.each(function() {
                    var i;
                    if ("canvas" == e.render) {
                        i = new n(e.typeNumber, e.correctLevel),
                        i.addData(e.text),
                        i.make();
                        var o = document.createElement("canvas");
                        o.width = e.width,
                        o.height = e.height;
                        for (var a = o.getContext("2d"), s = e.width / i.getModuleCount(), r = e.height / i.getModuleCount(), l = 0; l < i.getModuleCount(); l++) for (var d = 0; d < i.getModuleCount(); d++) {
                            a.fillStyle = i.isDark(l, d) ? e.foreground: e.background;
                            var c = Math.ceil((d + 1) * s) - Math.floor(d * s),
                            u = Math.ceil((l + 1) * s) - Math.floor(l * s);
                            a.fillRect(Math.round(d * s), Math.round(l * r), c, u)
                        }
                    } else for (i = new n(e.typeNumber, e.correctLevel), i.addData(e.text), i.make(), o = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), a = e.width / i.getModuleCount(), s = e.height / i.getModuleCount(), r = 0; r < i.getModuleCount(); r++) for (l = t("<tr></tr>").css("height", s + "px").appendTo(o), d = 0; d < i.getModuleCount(); d++) t("<td></td>").css("width", a + "px").css("background-color", i.isDark(r, d) ? e.foreground: e.background).appendTo(l);
                    i = o,
                    jQuery(i).appendTo(this)
                })
            }
        } (jQuery)
    },
    {}],
    7 : [function(t, e, i) { !
        function(t) {
            t(document).ready(function() {
                "Microsoft Internet Explorer" == navigator.appName && "9." == navigator.appVersion.match(/9./i) && t(".edit-cover, .edit-avatar").hide();
                var e, i, n = 0;
                t(document).on("click", ".edit-avatar, .edit-cover",
                function(o) {
                    o.preventDefault(),
                    n = t(this).hasClass("edit-cover") ? 1 : 0,
                    i = t(this).data("user");
                    var a = cropperModal({
                        lg: n,
                        title: _wpcom_js.cropper.title,
                        desc: n ? _wpcom_js.cropper.desc_1: _wpcom_js.cropper.desc_0,
                        btn: _wpcom_js.cropper.btn,
                        loading: _wpcom_js.cropper.loading,
                        apply: _wpcom_js.cropper.apply,
                        cancel: _wpcom_js.cropper.cancel
                    });
                    t("#crop-modal").length ? t("#crop-modal").replaceWith(a) : t("body").append(a),
                    e && (e.destroy(), e = null, t(".crop-img-wrap").hide(), t(".crop-img-btn").show(), t("#crop-img").remove(), t(".crop-notice").text("")),
                    t("#crop-modal").modal("show")
                }).on("change", "#img-file",
                function(i) {
                    if (t(".crop-notice").text(""), !this.files.length) return ! 1;
                    if (this.files[0].size / 1024 > 5120) return alert(_wpcom_js.cropper.alert_size),
                    !1;
                    if (this.files[0].type.match(/image.*/)) {
                        var o;
                        o = window.URL.createObjectURL(this.files[0]),
                        t(".crop-img-wrap").append('<img id="crop-img" src="' + o + '">').show(),
                        t(".crop-img-btn").hide(),
                        e = new Cropper(document.getElementById("crop-img"), {
                            aspectRatio: n ? 2.7 : 1,
                            minContainerHeight: 300,
                            viewMode: n ? 3 : 1,
                            ready: function() {
                                var t = {
                                    width: 300,
                                    height: 300
                                };
                                n && (t = {
                                    width: 810,
                                    height: 300,
                                    left: 44
                                }),
                                e.setCropBoxData(t)
                            }
                        }),
                        t(this).val("")
                    } else alert(_wpcom_js.cropper.alert_filetype)
                }).on("click", ".j-crop-close",
                function() {
                    e && e.destroy(),
                    e = null,
                    t(".crop-img-wrap").hide(),
                    t(".crop-img-btn").show(),
                    t("#crop-img").remove(),
                    t(".crop-notice").text("")
                }).on("click", ".j-crop-apply",
                function() {
                    var o = t(this).button("loading"),
                    a = t(".crop-notice");
                    if (a.text(""), e) {
                        if (e.crop().cropped) {
                            var s = {
                                minWidth: 200,
                                minHeight: 200,
                                maxWidth: 600,
                                maxHeight: 600,
                                fillColor: "#fff",
                                imageSmoothingQuality: "high"
                            };
                            n && (s = {
                                minWidth: 810,
                                minHeight: 300,
                                maxWidth: 1620,
                                maxHeight: 600,
                                fillColor: "#fff",
                                imageSmoothingQuality: "high"
                            });
                            var r = t.extend(e.getCropBoxData(), s),
                            l = e.getCroppedCanvas(r).toDataURL("image/jpeg", 1);
                            if (l) {
                                var d = new FormData;
                                d.append("action", "wpcom_cropped_upload"),
                                d.append("nonce", t("#wpcom_cropper_nonce").val()),
                                d.append("image", l),
                                d.append("type", n),
                                i && d.append("user", i),
                                t.ajax(_wpcom_js.ajaxurl, {
                                    method: "POST",
                                    data: d,
                                    dataType: "json",
                                    processData: !1,
                                    contentType: !1,
                                    success: function(e) {
                                        "1" == e.result ? (n ? t(".wpcom-profile-head").css("background-image", "url(" + e.url + ")") : t(".member-account-avatar img.avatar,.wpcom-ph-avatar img.avatar,#j-user-wrap img.avatar").replaceWith('<img class="avatar photo" src="' + e.url + "?t=" + Date.parse(new Date) / 1e3 + '">'), t("#crop-modal").modal("hide")) : "-1" == e.result ? a.text(_wpcom_js.cropper.err_nonce) : "-2" == e.result ? a.text(_wpcom_js.cropper.err_fail) : "-3" == e.result && a.text(_wpcom_js.cropper.err_login),
                                        o.button("reset")
                                    },
                                    error: function() {
                                        alert(_wpcom_js.cropper.ajaxerr),
                                        o.button("reset")
                                    }
                                })!
                                function() {
                                    function t(e, i, n) {
                                        function o(s, r) {
                                            if (!i[s]) {
                                                if (!e[s]) {
                                                    var l = "function" == typeof require && require;
                                                    if (!r && l) return l(s, !0);
                                                    if (a) return a(s, !0);
                                                    var d = new Error("Cannot find module '" + s + "'");
                                                    throw d.code = "MODULE_NOT_FOUND",
                                                    d
                                                }
                                                var c = i[s] = {
                                                    exports: {}
                                                };
                                                e[s][0].call(c.exports,
                                                function(t) {
                                                    var i = e[s][1][t];
                                                    return o(i || t)
                                                },
                                                c, c.exports, t, e, i, n)
                                            }
                                            return i[s].exports
                                        }
                                        for (var a = "function" == typeof require && require,
                                        s = 0; s < n.length; s++) o(n[s]);
                                        return o
                                    }
                                    return t
                                } ()({
                                    1 : [function(t, e, i) {
                                        /*!
                                    * Bootstrap v3.3.7 (http://getbootstrap.com)
                                    * Copyright 2011-2016 Twitter, Inc.
                                    * Licensed under the MIT license
                                    */
                                        if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
                                        function(t) {
                                            "use strict";
                                            var e = t.fn.jquery.split(" ")[0].split(".");
                                            if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e() {
                                                var t = document.createElement("bootstrap"),
                                                e = {
                                                    WebkitTransition: "webkitTransitionEnd",
                                                    MozTransition: "transitionend",
                                                    OTransition: "oTransitionEnd otransitionend",
                                                    transition: "transitionend"
                                                };
                                                for (var i in e) if (void 0 !== t.style[i]) return {
                                                    end: e[i]
                                                };
                                                return ! 1
                                            }
                                            t.fn.emulateTransitionEnd = function(e) {
                                                var i = !1,
                                                n = this;
                                                t(this).one("bsTransitionEnd",
                                                function() {
                                                    i = !0
                                                });
                                                var o = function() {
                                                    i || t(n).trigger(t.support.transition.end)
                                                };
                                                return setTimeout(o, e),
                                                this
                                            },
                                            t(function() {
                                                t.support.transition = e(),
                                                t.support.transition && (t.event.special.bsTransitionEnd = {
                                                    bindType: t.support.transition.end,
                                                    delegateType: t.support.transition.end,
                                                    handle: function(e) {
                                                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                                                    }
                                                })
                                            })
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                return this.each(function() {
                                                    var i = t(this),
                                                    o = i.data("bs.alert");
                                                    o || i.data("bs.alert", o = new n(this)),
                                                    "string" == typeof e && o[e].call(i)
                                                })
                                            }
                                            var i = '[data-dismiss="alert"]',
                                            n = function(e) {
                                                t(e).on("click", i, this.close)
                                            };
                                            n.VERSION = "3.3.7",
                                            n.TRANSITION_DURATION = 150,
                                            n.prototype.close = function(e) {
                                                function i() {
                                                    s.detach().trigger("closed.bs.alert").remove()
                                                }
                                                var o = t(this),
                                                a = o.attr("data-target");
                                                a || (a = o.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
                                                var s = t("#" === a ? [] : a);
                                                e && e.preventDefault(),
                                                s.length || (s = o.closest(".alert")),
                                                s.trigger(e = t.Event("close.bs.alert")),
                                                e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
                                            };
                                            var o = t.fn.alert;
                                            t.fn.alert = e,
                                            t.fn.alert.Constructor = n,
                                            t.fn.alert.noConflict = function() {
                                                return t.fn.alert = o,
                                                this
                                            },
                                            t(document).on("click.bs.alert.data-api", i, n.prototype.close)
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                return this.each(function() {
                                                    var n = t(this),
                                                    o = n.data("bs.button"),
                                                    a = "object" == typeof e && e;
                                                    o || n.data("bs.button", o = new i(this, a)),
                                                    "toggle" == e ? o.toggle() : e && o.setState(e)
                                                })
                                            }
                                            var i = function(e, n) {
                                                this.$element = t(e),
                                                this.options = t.extend({},
                                                i.DEFAULTS, n),
                                                this.isLoading = !1
                                            };
                                            i.VERSION = "3.3.7",
                                            i.DEFAULTS = {
                                                loadingText: "loading..."
                                            },
                                            i.prototype.setState = function(e) {
                                                var i = "disabled",
                                                n = this.$element,
                                                o = n.is("input") ? "val": "html",
                                                a = n.data();
                                                e += "Text",
                                                null == a.resetText && n.data("resetText", n[o]()),
                                                setTimeout(t.proxy(function() {
                                                    n[o](null == a[e] ? this.options[e] : a[e]),
                                                    "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
                                                },
                                                this), 0)
                                            },
                                            i.prototype.toggle = function() {
                                                var t = !0,
                                                e = this.$element.closest('[data-toggle="buttons"]');
                                                if (e.length) {
                                                    var i = this.$element.find("input");
                                                    "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
                                                    i.prop("checked", this.$element.hasClass("active")),
                                                    t && i.trigger("change")
                                                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                                                this.$element.toggleClass("active")
                                            };
                                            var n = t.fn.button;
                                            t.fn.button = e,
                                            t.fn.button.Constructor = i,
                                            t.fn.button.noConflict = function() {
                                                return t.fn.button = n,
                                                this
                                            },
                                            t(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
                                            function(i) {
                                                var n = t(i.target).closest(".btn");
                                                e.call(n, "toggle"),
                                                t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
                                            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
                                            function(e) {
                                                t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
                                            })
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                return this.each(function() {
                                                    var n = t(this),
                                                    o = n.data("bs.carousel"),
                                                    a = t.extend({},
                                                    i.DEFAULTS, n.data(), "object" == typeof e && e),
                                                    s = "string" == typeof e ? e: a.slide;
                                                    o || n.data("bs.carousel", o = new i(this, a)),
                                                    "number" == typeof e ? o.to(e) : s ? o[s]() : a.interval && o.pause().cycle()
                                                })
                                            }
                                            var i = function(e, i) {
                                                this.$element = t(e),
                                                this.$indicators = this.$element.find(".carousel-indicators"),
                                                this.options = i,
                                                this.paused = null,
                                                this.sliding = null,
                                                this.interval = null,
                                                this.$active = null,
                                                this.$items = null,
                                                this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
                                                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
                                            };
                                            i.VERSION = "3.3.7",
                                            i.TRANSITION_DURATION = 600,
                                            i.DEFAULTS = {
                                                interval: 5e3,
                                                pause: "hover",
                                                wrap: !0,
                                                keyboard: !0
                                            },
                                            i.prototype.keydown = function(t) {
                                                if (!/input|textarea/i.test(t.target.tagName)) {
                                                    switch (t.which) {
                                                    case 37:
                                                        this.prev();
                                                        break;
                                                    case 39:
                                                        this.next();
                                                        break;
                                                    default:
                                                        return
                                                    }
                                                    t.preventDefault()
                                                }
                                            },
                                            i.prototype.cycle = function(e) {
                                                return e || (this.paused = !1),
                                                this.interval && clearInterval(this.interval),
                                                this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
                                                this
                                            },
                                            i.prototype.getItemIndex = function(t) {
                                                return this.$items = t.parent().children(".item"),
                                                this.$items.index(t || this.$active)
                                            },
                                            i.prototype.getItemForDirection = function(t, e) {
                                                var i = this.getItemIndex(e);
                                                if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
                                                var n = "prev" == t ? -1 : 1,
                                                o = (i + n) % this.$items.length;
                                                return this.$items.eq(o)
                                            },
                                            i.prototype.to = function(t) {
                                                var e = this,
                                                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                                                if (! (t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel",
                                                function() {
                                                    e.to(t)
                                                }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next": "prev", this.$items.eq(t))
                                            },
                                            i.prototype.pause = function(e) {
                                                return e || (this.paused = !0),
                                                this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
                                                this.interval = clearInterval(this.interval),
                                                this
                                            },
                                            i.prototype.next = function() {
                                                if (!this.sliding) return this.slide("next")
                                            },
                                            i.prototype.prev = function() {
                                                if (!this.sliding) return this.slide("prev")
                                            },
                                            i.prototype.slide = function(e, n) {
                                                var o = this.$element.find(".item.active"),
                                                a = n || this.getItemForDirection(e, o),
                                                s = this.interval,
                                                r = "next" == e ? "left": "right",
                                                l = this;
                                                if (a.hasClass("active")) return this.sliding = !1;
                                                var d = a[0],
                                                c = t.Event("slide.bs.carousel", {
                                                    relatedTarget: d,
                                                    direction: r
                                                });
                                                if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                                                    if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                                                        this.$indicators.find(".active").removeClass("active");
                                                        var u = t(this.$indicators.children()[this.getItemIndex(a)]);
                                                        u && u.addClass("active")
                                                    }
                                                    var h = t.Event("slid.bs.carousel", {
                                                        relatedTarget: d,
                                                        direction: r
                                                    });
                                                    return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e), a[0].offsetWidth, o.addClass(r), a.addClass(r), o.one("bsTransitionEnd",
                                                    function() {
                                                        a.removeClass([e, r].join(" ")).addClass("active"),
                                                        o.removeClass(["active", r].join(" ")),
                                                        l.sliding = !1,
                                                        setTimeout(function() {
                                                            l.$element.trigger(h)
                                                        },
                                                        0)
                                                    }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(h)),
                                                    s && this.cycle(),
                                                    this
                                                }
                                            };
                                            var n = t.fn.carousel;
                                            t.fn.carousel = e,
                                            t.fn.carousel.Constructor = i,
                                            t.fn.carousel.noConflict = function() {
                                                return t.fn.carousel = n,
                                                this
                                            };
                                            var o = function(i) {
                                                var n, o = t(this),
                                                a = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
                                                if (a.hasClass("carousel")) {
                                                    var s = t.extend({},
                                                    a.data(), o.data()),
                                                    r = o.attr("data-slide-to");
                                                    r && (s.interval = !1),
                                                    e.call(a, s),
                                                    r && a.data("bs.carousel").to(r),
                                                    i.preventDefault()
                                                }
                                            };
                                            t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
                                            t(window).on("load",
                                            function() {
                                                t('[data-ride="carousel"]').each(function() {
                                                    var i = t(this);
                                                    e.call(i, i.data())
                                                })
                                            })
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
                                                return t(n)
                                            }
                                            function i(e) {
                                                return this.each(function() {
                                                    var i = t(this),
                                                    o = i.data("bs.collapse"),
                                                    a = t.extend({},
                                                    n.DEFAULTS, i.data(), "object" == typeof e && e); ! o && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
                                                    o || i.data("bs.collapse", o = new n(this, a)),
                                                    "string" == typeof e && o[e]()
                                                })
                                            }
                                            var n = function(e, i) {
                                                this.$element = t(e),
                                                this.options = t.extend({},
                                                n.DEFAULTS, i),
                                                this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
                                                this.transitioning = null,
                                                this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                                                this.options.toggle && this.toggle()
                                            };
                                            n.VERSION = "3.3.7",
                                            n.TRANSITION_DURATION = 350,
                                            n.DEFAULTS = {
                                                toggle: !0
                                            },
                                            n.prototype.dimension = function() {
                                                return this.$element.hasClass("width") ? "width": "height"
                                            },
                                            n.prototype.show = function() {
                                                if (!this.transitioning && !this.$element.hasClass("in")) {
                                                    var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                                                    if (! (o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                                                        var a = t.Event("show.bs.collapse");
                                                        if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                                                            o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                                                            var s = this.dimension();
                                                            this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                                                            this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                                                            this.transitioning = 1;
                                                            var r = function() {
                                                                this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                                                                this.transitioning = 0,
                                                                this.$element.trigger("shown.bs.collapse")
                                                            };
                                                            if (!t.support.transition) return r.call(this);
                                                            var l = t.camelCase(["scroll", s].join("-"));
                                                            this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                                                        }
                                                    }
                                                }
                                            },
                                            n.prototype.hide = function() {
                                                if (!this.transitioning && this.$element.hasClass("in")) {
                                                    var e = t.Event("hide.bs.collapse");
                                                    if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                                                        var i = this.dimension();
                                                        this.$element[i](this.$element[i]())[0].offsetHeight,
                                                        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                                                        this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                                                        this.transitioning = 1;
                                                        var o = function() {
                                                            this.transitioning = 0,
                                                            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                                        };
                                                        if (!t.support.transition) return o.call(this);
                                                        this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION)
                                                    }
                                                }
                                            },
                                            n.prototype.toggle = function() {
                                                this[this.$element.hasClass("in") ? "hide": "show"]()
                                            },
                                            n.prototype.getParent = function() {
                                                return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                                                    var o = t(n);
                                                    this.addAriaAndCollapsedClass(e(o), o)
                                                },
                                                this)).end()
                                            },
                                            n.prototype.addAriaAndCollapsedClass = function(t, e) {
                                                var i = t.hasClass("in");
                                                t.attr("aria-expanded", i),
                                                e.toggleClass("collapsed", !i).attr("aria-expanded", i)
                                            };
                                            var o = t.fn.collapse;
                                            t.fn.collapse = i,
                                            t.fn.collapse.Constructor = n,
                                            t.fn.collapse.noConflict = function() {
                                                return t.fn.collapse = o,
                                                this
                                            },
                                            t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
                                            function(n) {
                                                var o = t(this);
                                                o.attr("data-target") || n.preventDefault();
                                                var a = e(o),
                                                s = a.data("bs.collapse"),
                                                r = s ? "toggle": o.data();
                                                i.call(a, r)
                                            })
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                var i = e.attr("data-target");
                                                i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
                                                var n = i && t(i);
                                                return n && n.length ? n: e.parent()
                                            }
                                            function i(i) {
                                                i && 3 === i.which || (t(o).remove(), t(a).each(function() {
                                                    var n = t(this),
                                                    o = e(n),
                                                    a = {
                                                        relatedTarget: this
                                                    };
                                                    o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", a)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
                                                }))
                                            }
                                            function n(e) {
                                                return this.each(function() {
                                                    var i = t(this),
                                                    n = i.data("bs.dropdown");
                                                    n || i.data("bs.dropdown", n = new s(this)),
                                                    "string" == typeof e && n[e].call(i)
                                                })
                                            }
                                            var o = ".dropdown-backdrop",
                                            a = '[data-toggle="dropdown"]',
                                            s = function(e) {
                                                t(e).on("click.bs.dropdown", this.toggle)
                                            };
                                            s.VERSION = "3.3.7",
                                            s.prototype.toggle = function(n) {
                                                var o = t(this);
                                                if (!o.is(".disabled, :disabled")) {
                                                    var a = e(o),
                                                    s = a.hasClass("open");
                                                    if (i(), !s) {
                                                        "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                                                        var r = {
                                                            relatedTarget: this
                                                        };
                                                        if (a.trigger(n = t.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
                                                        o.trigger("focus").attr("aria-expanded", "true"),
                                                        a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
                                                    }
                                                    return ! 1
                                                }
                                            },
                                            s.prototype.keydown = function(i) {
                                                if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                                                    var n = t(this);
                                                    if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                                                        var o = e(n),
                                                        s = o.hasClass("open");
                                                        if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && o.find(a).trigger("focus"),
                                                        n.trigger("click");
                                                        var r = o.find(".dropdown-menu li:not(.disabled):visible a");
                                                        if (r.length) {
                                                            var l = r.index(i.target);
                                                            38 == i.which && l > 0 && l--,
                                                            40 == i.which && l < r.length - 1 && l++,
                                                            ~l || (l = 0),
                                                            r.eq(l).trigger("focus")
                                                        }
                                                    }
                                                }
                                            };
                                            var r = t.fn.dropdown;
                                            t.fn.dropdown = n,
                                            t.fn.dropdown.Constructor = s,
                                            t.fn.dropdown.noConflict = function() {
                                                return t.fn.dropdown = r,
                                                this
                                            },
                                            t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form",
                                            function(t) {
                                                t.stopPropagation()
                                            }).on("click.bs.dropdown.data-api", a, s.prototype.toggle).on("keydown.bs.dropdown.data-api", a, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e, n) {
                                                return this.each(function() {
                                                    var o = t(this),
                                                    a = o.data("bs.modal"),
                                                    s = t.extend({},
                                                    i.DEFAULTS, o.data(), "object" == typeof e && e);
                                                    a || o.data("bs.modal", a = new i(this, s)),
                                                    "string" == typeof e ? a[e](n) : s.show && a.show(n)
                                                })
                                            }
                                            var i = function(e, i) {
                                                this.options = i,
                                                this.$body = t(document.body),
                                                this.$element = t(e),
                                                this.$dialog = this.$element.find(".modal-dialog"),
                                                this.$backdrop = null,
                                                this.isShown = null,
                                                this.originalBodyPad = null,
                                                this.scrollbarWidth = 0,
                                                this.ignoreBackdropClick = !1,
                                                this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                                                    this.$element.trigger("loaded.bs.modal")
                                                },
                                                this))
                                            };
                                            i.VERSION = "3.3.7",
                                            i.TRANSITION_DURATION = 300,
                                            i.BACKDROP_TRANSITION_DURATION = 150,
                                            i.DEFAULTS = {
                                                backdrop: !0,
                                                keyboard: !0,
                                                show: !0
                                            },
                                            i.prototype.toggle = function(t) {
                                                return this.isShown ? this.hide() : this.show(t)
                                            },
                                            i.prototype.show = function(e) {
                                                var n = this,
                                                o = t.Event("show.bs.modal", {
                                                    relatedTarget: e
                                                });
                                                this.$element.trigger(o),
                                                this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal",
                                                function() {
                                                    n.$element.one("mouseup.dismiss.bs.modal",
                                                    function(e) {
                                                        t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                                                    })
                                                }), this.backdrop(function() {
                                                    var o = t.support.transition && n.$element.hasClass("fade");
                                                    n.$element.parent().length || n.$element.appendTo(n.$body),
                                                    n.$element.show().scrollTop(0),
                                                    n.adjustDialog(),
                                                    o && n.$element[0].offsetWidth,
                                                    n.$element.addClass("in"),
                                                    n.enforceFocus();
                                                    var a = t.Event("shown.bs.modal", {
                                                        relatedTarget: e
                                                    });
                                                    o ? n.$dialog.one("bsTransitionEnd",
                                                    function() {
                                                        n.$element.trigger("focus").trigger(a)
                                                    }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(a)
                                                }))
                                            },
                                            i.prototype.hide = function(e) {
                                                e && e.preventDefault(),
                                                e = t.Event("hide.bs.modal"),
                                                this.$element.trigger(e),
                                                this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
                                            },
                                            i.prototype.enforceFocus = function() {
                                                t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                                                    document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                                                },
                                                this))
                                            },
                                            i.prototype.escape = function() {
                                                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                                                    27 == t.which && this.hide()
                                                },
                                                this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                                            },
                                            i.prototype.resize = function() {
                                                this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
                                            },
                                            i.prototype.hideModal = function() {
                                                var t = this;
                                                this.$element.hide(),
                                                this.backdrop(function() {
                                                    t.$body.removeClass("modal-open"),
                                                    t.resetAdjustments(),
                                                    t.resetScrollbar(),
                                                    t.$element.trigger("hidden.bs.modal")
                                                })
                                            },
                                            i.prototype.removeBackdrop = function() {
                                                this.$backdrop && this.$backdrop.remove(),
                                                this.$backdrop = null
                                            },
                                            i.prototype.backdrop = function(e) {
                                                var n = this,
                                                o = this.$element.hasClass("fade") ? "fade": "";
                                                if (this.isShown && this.options.backdrop) {
                                                    var a = t.support.transition && o;
                                                    if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                                                        if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                                                        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                                                    },
                                                    this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                                                    a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
                                                } else if (!this.isShown && this.$backdrop) {
                                                    this.$backdrop.removeClass("in");
                                                    var s = function() {
                                                        n.removeBackdrop(),
                                                        e && e()
                                                    };
                                                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
                                                } else e && e()
                                            },
                                            i.prototype.handleUpdate = function() {
                                                this.adjustDialog()
                                            },
                                            i.prototype.adjustDialog = function() {
                                                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                                                this.$element.css({
                                                    paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth: "",
                                                    paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth: ""
                                                })
                                            },
                                            i.prototype.resetAdjustments = function() {
                                                this.$element.css({
                                                    paddingLeft: "",
                                                    paddingRight: ""
                                                })
                                            },
                                            i.prototype.checkScrollbar = function() {
                                                var t = window.innerWidth;
                                                if (!t) {
                                                    var e = document.documentElement.getBoundingClientRect();
                                                    t = e.right - Math.abs(e.left)
                                                }
                                                this.bodyIsOverflowing = document.body.clientWidth < t,
                                                this.scrollbarWidth = this.measureScrollbar()
                                            },
                                            i.prototype.setScrollbar = function() {
                                                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                                                this.originalBodyPad = document.body.style.paddingRight || "",
                                                this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
                                            },
                                            i.prototype.resetScrollbar = function() {
                                                this.$body.css("padding-right", this.originalBodyPad)
                                            },
                                            i.prototype.measureScrollbar = function() {
                                                var t = document.createElement("div");
                                                t.className = "modal-scrollbar-measure",
                                                this.$body.append(t);
                                                var e = t.offsetWidth - t.clientWidth;
                                                return this.$body[0].removeChild(t),
                                                e
                                            };
                                            var n = t.fn.modal;
                                            t.fn.modal = e,
                                            t.fn.modal.Constructor = i,
                                            t.fn.modal.noConflict = function() {
                                                return t.fn.modal = n,
                                                this
                                            },
                                            t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
                                            function(i) {
                                                var n = t(this),
                                                o = n.attr("href"),
                                                a = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                                                s = a.data("bs.modal") ? "toggle": t.extend({
                                                    remote: !/#/.test(o) && o
                                                },
                                                a.data(), n.data());
                                                n.is("a") && i.preventDefault(),
                                                a.one("show.bs.modal",
                                                function(t) {
                                                    t.isDefaultPrevented() || a.one("hidden.bs.modal",
                                                    function() {
                                                        n.is(":visible") && n.trigger("focus")
                                                    })
                                                }),
                                                e.call(a, s, this)
                                            })
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                return this.each(function() {
                                                    var n = t(this),
                                                    o = n.data("bs.tooltip"),
                                                    a = "object" == typeof e && e; ! o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, a)), "string" == typeof e && o[e]())
                                                })
                                            }
                                            var i = function(t, e) {
                                                this.type = null,
                                                this.options = null,
                                                this.enabled = null,
                                                this.timeout = null,
                                                this.hoverState = null,
                                                this.$element = null,
                                                this.inState = null,
                                                this.init("tooltip", t, e)
                                            };
                                            i.VERSION = "3.3.7",
                                            i.TRANSITION_DURATION = 150,
                                            i.DEFAULTS = {
                                                animation: !0,
                                                placement: "top",
                                                selector: !1,
                                                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                                                trigger: "hover focus",
                                                title: "",
                                                delay: 0,
                                                html: !1,
                                                container: !1,
                                                viewport: {
                                                    selector: "body",
                                                    padding: 0
                                                }
                                            },
                                            i.prototype.init = function(e, i, n) {
                                                if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                                                    click: !1,
                                                    hover: !1,
                                                    focus: !1
                                                },
                                                this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                                                for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
                                                    var s = o[a];
                                                    if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                                                    else if ("manual" != s) {
                                                        var r = "hover" == s ? "mouseenter": "focusin",
                                                        l = "hover" == s ? "mouseleave": "focusout";
                                                        this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                                                        this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                                                    }
                                                }
                                                this.options.selector ? this._options = t.extend({},
                                                this.options, {
                                                    trigger: "manual",
                                                    selector: ""
                                                }) : this.fixTitle()
                                            },
                                            i.prototype.getDefaults = function() {
                                                return i.DEFAULTS
                                            },
                                            i.prototype.getOptions = function(e) {
                                                return e = t.extend({},
                                                this.getDefaults(), this.$element.data(), e),
                                                e.delay && "number" == typeof e.delay && (e.delay = {
                                                    show: e.delay,
                                                    hide: e.delay
                                                }),
                                                e
                                            },
                                            i.prototype.getDelegateOptions = function() {
                                                var e = {},
                                                i = this.getDefaults();
                                                return this._options && t.each(this._options,
                                                function(t, n) {
                                                    i[t] != n && (e[t] = n)
                                                }),
                                                e
                                            },
                                            i.prototype.enter = function(e) {
                                                var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
                                                return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
                                                e instanceof t.Event && (i.inState["focusin" == e.type ? "focus": "hover"] = !0),
                                                i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
                                                    "in" == i.hoverState && i.show()
                                                },
                                                i.options.delay.show)) : i.show())
                                            },
                                            i.prototype.isInStateTrue = function() {
                                                for (var t in this.inState) if (this.inState[t]) return ! 0;
                                                return ! 1
                                            },
                                            i.prototype.leave = function(e) {
                                                var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
                                                if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus": "hover"] = !1), !i.isInStateTrue()) {
                                                    if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
                                                    i.timeout = setTimeout(function() {
                                                        "out" == i.hoverState && i.hide()
                                                    },
                                                    i.options.delay.hide)
                                                }
                                            },
                                            i.prototype.show = function() {
                                                var e = t.Event("show.bs." + this.type);
                                                if (this.hasContent() && this.enabled) {
                                                    this.$element.trigger(e);
                                                    var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                                                    if (e.isDefaultPrevented() || !n) return;
                                                    var o = this,
                                                    a = this.tip(),
                                                    s = this.getUID(this.type);
                                                    this.setContent(),
                                                    a.attr("id", s),
                                                    this.$element.attr("aria-describedby", s),
                                                    this.options.animation && a.addClass("fade");
                                                    var r = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                                                    l = /\s?auto?\s?/i,
                                                    d = l.test(r);
                                                    d && (r = r.replace(l, "") || "top"),
                                                    a.detach().css({
                                                        top: 0,
                                                        left: 0,
                                                        display: "block"
                                                    }).addClass(r).data("bs." + this.type, this),
                                                    this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element),
                                                    this.$element.trigger("inserted.bs." + this.type);
                                                    var c = this.getPosition(),
                                                    u = a[0].offsetWidth,
                                                    h = a[0].offsetHeight;
                                                    if (d) {
                                                        var p = r,
                                                        f = this.getPosition(this.$viewport);
                                                        r = "bottom" == r && c.bottom + h > f.bottom ? "top": "top" == r && c.top - h < f.top ? "bottom": "right" == r && c.right + u > f.width ? "left": "left" == r && c.left - u < f.left ? "right": r,
                                                        a.removeClass(p).addClass(r)
                                                    }
                                                    var m = this.getCalculatedOffset(r, c, u, h);
                                                    this.applyPlacement(m, r);
                                                    var g = function() {
                                                        var t = o.hoverState;
                                                        o.$element.trigger("shown.bs." + o.type),
                                                        o.hoverState = null,
                                                        "out" == t && o.leave(o)
                                                    };
                                                    t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
                                                }
                                            },
                                            i.prototype.applyPlacement = function(e, i) {
                                                var n = this.tip(),
                                                o = n[0].offsetWidth,
                                                a = n[0].offsetHeight,
                                                s = parseInt(n.css("margin-top"), 10),
                                                r = parseInt(n.css("margin-left"), 10);
                                                isNaN(s) && (s = 0),
                                                isNaN(r) && (r = 0),
                                                e.top += s,
                                                e.left += r,
                                                t.offset.setOffset(n[0], t.extend({
                                                    using: function(t) {
                                                        n.css({
                                                            top: Math.round(t.top),
                                                            left: Math.round(t.left)
                                                        })
                                                    }
                                                },
                                                e), 0),
                                                n.addClass("in");
                                                var l = n[0].offsetWidth,
                                                d = n[0].offsetHeight;
                                                "top" == i && d != a && (e.top = e.top + a - d);
                                                var c = this.getViewportAdjustedDelta(i, e, l, d);
                                                c.left ? e.left += c.left: e.top += c.top;
                                                var u = /top|bottom/.test(i),
                                                h = u ? 2 * c.left - o + l: 2 * c.top - a + d,
                                                p = u ? "offsetWidth": "offsetHeight";
                                                n.offset(e),
                                                this.replaceArrow(h, n[0][p], u)
                                            },
                                            i.prototype.replaceArrow = function(t, e, i) {
                                                this.arrow().css(i ? "left": "top", 50 * (1 - t / e) + "%").css(i ? "top": "left", "")
                                            },
                                            i.prototype.setContent = function() {
                                                var t = this.tip(),
                                                e = this.getTitle();
                                                t.find(".tooltip-inner")[this.options.html ? "html": "text"](e),
                                                t.removeClass("fade in top bottom left right")
                                            },
                                            i.prototype.hide = function(e) {
                                                function n() {
                                                    "in" != o.hoverState && a.detach(),
                                                    o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type),
                                                    e && e()
                                                }
                                                var o = this,
                                                a = t(this.$tip),
                                                s = t.Event("hide.bs." + this.type);
                                                if (this.$element.trigger(s), !s.isDefaultPrevented()) return a.removeClass("in"),
                                                t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(),
                                                this.hoverState = null,
                                                this
                                            },
                                            i.prototype.fixTitle = function() {
                                                var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
                                            },
                                            i.prototype.hasContent = function() {
                                                return this.getTitle()
                                            },
                                            i.prototype.getPosition = function(e) {
                                                e = e || this.$element;
                                                var i = e[0],
                                                n = "BODY" == i.tagName,
                                                o = i.getBoundingClientRect();
                                                null == o.width && (o = t.extend({},
                                                o, {
                                                    width: o.right - o.left,
                                                    height: o.bottom - o.top
                                                }));
                                                var a = window.SVGElement && i instanceof window.SVGElement,
                                                s = n ? {
                                                    top: 0,
                                                    left: 0
                                                }: a ? null: e.offset(),
                                                r = {
                                                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop: e.scrollTop()
                                                },
                                                l = n ? {
                                                    width: t(window).width(),
                                                    height: t(window).height()
                                                }: null;
                                                return t.extend({},
                                                o, r, l, s)
                                            },
                                            i.prototype.getCalculatedOffset = function(t, e, i, n) {
                                                return "bottom" == t ? {
                                                    top: e.top + e.height,
                                                    left: e.left + e.width / 2 - i / 2
                                                }: "top" == t ? {
                                                    top: e.top - n,
                                                    left: e.left + e.width / 2 - i / 2
                                                }: "left" == t ? {
                                                    top: e.top + e.height / 2 - n / 2,
                                                    left: e.left - i
                                                }: {
                                                    top: e.top + e.height / 2 - n / 2,
                                                    left: e.left + e.width
                                                }
                                            },
                                            i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
                                                var o = {
                                                    top: 0,
                                                    left: 0
                                                };
                                                if (!this.$viewport) return o;
                                                var a = this.options.viewport && this.options.viewport.padding || 0,
                                                s = this.getPosition(this.$viewport);
                                                if (/right|left/.test(t)) {
                                                    var r = e.top - a - s.scroll,
                                                    l = e.top + a - s.scroll + n;
                                                    r < s.top ? o.top = s.top - r: l > s.top + s.height && (o.top = s.top + s.height - l)
                                                } else {
                                                    var d = e.left - a,
                                                    c = e.left + a + i;
                                                    d < s.left ? o.left = s.left - d: c > s.right && (o.left = s.left + s.width - c)
                                                }
                                                return o
                                            },
                                            i.prototype.getTitle = function() {
                                                var t = this.$element,
                                                e = this.options;
                                                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
                                            },
                                            i.prototype.getUID = function(t) {
                                                do {
                                                    t += ~~ (1e6 * Math.random())
                                                } while ( document . getElementById ( t ));
                                                return t
                                            },
                                            i.prototype.tip = function() {
                                                if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                                                return this.$tip
                                            },
                                            i.prototype.arrow = function() {
                                                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                                            },
                                            i.prototype.enable = function() {
                                                this.enabled = !0
                                            },
                                            i.prototype.disable = function() {
                                                this.enabled = !1
                                            },
                                            i.prototype.toggleEnabled = function() {
                                                this.enabled = !this.enabled
                                            },
                                            i.prototype.toggle = function(e) {
                                                var i = this;
                                                e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))),
                                                e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
                                            },
                                            i.prototype.destroy = function() {
                                                var t = this;
                                                clearTimeout(this.timeout),
                                                this.hide(function() {
                                                    t.$element.off("." + t.type).removeData("bs." + t.type),
                                                    t.$tip && t.$tip.detach(),
                                                    t.$tip = null,
                                                    t.$arrow = null,
                                                    t.$viewport = null,
                                                    t.$element = null
                                                })
                                            };
                                            var n = t.fn.tooltip;
                                            t.fn.tooltip = e,
                                            t.fn.tooltip.Constructor = i,
                                            t.fn.tooltip.noConflict = function() {
                                                return t.fn.tooltip = n,
                                                this
                                            }
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                return this.each(function() {
                                                    var n = t(this),
                                                    o = n.data("bs.popover"),
                                                    a = "object" == typeof e && e; ! o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, a)), "string" == typeof e && o[e]())
                                                })
                                            }
                                            var i = function(t, e) {
                                                this.init("popover", t, e)
                                            };
                                            if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
                                            i.VERSION = "3.3.7",
                                            i.DEFAULTS = t.extend({},
                                            t.fn.tooltip.Constructor.DEFAULTS, {
                                                placement: "right",
                                                trigger: "click",
                                                content: "",
                                                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                                            }),
                                            i.prototype = t.extend({},
                                            t.fn.tooltip.Constructor.prototype),
                                            i.prototype.constructor = i,
                                            i.prototype.getDefaults = function() {
                                                return i.DEFAULTS
                                            },
                                            i.prototype.setContent = function() {
                                                var t = this.tip(),
                                                e = this.getTitle(),
                                                i = this.getContent();
                                                t.find(".popover-title")[this.options.html ? "html": "text"](e),
                                                t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html": "append": "text"](i),
                                                t.removeClass("fade top bottom left right in"),
                                                t.find(".popover-title").html() || t.find(".popover-title").hide()
                                            },
                                            i.prototype.hasContent = function() {
                                                return this.getTitle() || this.getContent()
                                            },
                                            i.prototype.getContent = function() {
                                                var t = this.$element,
                                                e = this.options;
                                                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
                                            },
                                            i.prototype.arrow = function() {
                                                return this.$arrow = this.$arrow || this.tip().find(".arrow")
                                            };
                                            var n = t.fn.popover;
                                            t.fn.popover = e,
                                            t.fn.popover.Constructor = i,
                                            t.fn.popover.noConflict = function() {
                                                return t.fn.popover = n,
                                                this
                                            }
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(i, n) {
                                                this.$body = t(document.body),
                                                this.$scrollElement = t(t(i).is(document.body) ? window: i),
                                                this.options = t.extend({},
                                                e.DEFAULTS, n),
                                                this.selector = (this.options.target || "") + " .nav li > a",
                                                this.offsets = [],
                                                this.targets = [],
                                                this.activeTarget = null,
                                                this.scrollHeight = 0,
                                                this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
                                                this.refresh(),
                                                this.process()
                                            }
                                            function i(i) {
                                                return this.each(function() {
                                                    var n = t(this),
                                                    o = n.data("bs.scrollspy"),
                                                    a = "object" == typeof i && i;
                                                    o || n.data("bs.scrollspy", o = new e(this, a)),
                                                    "string" == typeof i && o[i]()
                                                })
                                            }
                                            e.VERSION = "3.3.7",
                                            e.DEFAULTS = {
                                                offset: 10
                                            },
                                            e.prototype.getScrollHeight = function() {
                                                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                                            },
                                            e.prototype.refresh = function() {
                                                var e = this,
                                                i = "offset",
                                                n = 0;
                                                this.offsets = [],
                                                this.targets = [],
                                                this.scrollHeight = this.getScrollHeight(),
                                                t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()),
                                                this.$body.find(this.selector).map(function() {
                                                    var e = t(this),
                                                    o = e.data("target") || e.attr("href"),
                                                    a = /^#./.test(o) && t(o);
                                                    return a && a.length && a.is(":visible") && [[a[i]().top + n, o]] || null
                                                }).sort(function(t, e) {
                                                    return t[0] - e[0]
                                                }).each(function() {
                                                    e.offsets.push(this[0]),
                                                    e.targets.push(this[1])
                                                })
                                            },
                                            e.prototype.process = function() {
                                                var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                                                i = this.getScrollHeight(),
                                                n = this.options.offset + i - this.$scrollElement.height(),
                                                o = this.offsets,
                                                a = this.targets,
                                                s = this.activeTarget;
                                                if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = a[a.length - 1]) && this.activate(t);
                                                if (s && e < o[0]) return this.activeTarget = null,
                                                this.clear();
                                                for (t = o.length; t--;) s != a[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(a[t])
                                            },
                                            e.prototype.activate = function(e) {
                                                this.activeTarget = e,
                                                this.clear();
                                                var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                                                n = t(i).parents("li").addClass("active");
                                                n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
                                                n.trigger("activate.bs.scrollspy")
                                            },
                                            e.prototype.clear = function() {
                                                t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                                            };
                                            var n = t.fn.scrollspy;
                                            t.fn.scrollspy = i,
                                            t.fn.scrollspy.Constructor = e,
                                            t.fn.scrollspy.noConflict = function() {
                                                return t.fn.scrollspy = n,
                                                this
                                            },
                                            t(window).on("load.bs.scrollspy.data-api",
                                            function() {
                                                t('[data-spy="scroll"]').each(function() {
                                                    var e = t(this);
                                                    i.call(e, e.data())
                                                })
                                            })
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                return this.each(function() {
                                                    var n = t(this),
                                                    o = n.data("bs.tab");
                                                    o || n.data("bs.tab", o = new i(this)),
                                                    "string" == typeof e && o[e]()
                                                })
                                            }
                                            var i = function(e) {
                                                this.element = t(e)
                                            };
                                            i.VERSION = "3.3.7",
                                            i.TRANSITION_DURATION = 150,
                                            i.prototype.show = function() {
                                                var e = this.element,
                                                i = e.closest("ul:not(.dropdown-menu)"),
                                                n = e.data("target");
                                                if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                                                    var o = i.find(".active:last a"),
                                                    a = t.Event("hide.bs.tab", {
                                                        relatedTarget: e[0]
                                                    }),
                                                    s = t.Event("show.bs.tab", {
                                                        relatedTarget: o[0]
                                                    });
                                                    if (o.trigger(a), e.trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                                        var r = t(n);
                                                        this.activate(e.closest("li"), i),
                                                        this.activate(r, r.parent(),
                                                        function() {
                                                            o.trigger({
                                                                type: "hidden.bs.tab",
                                                                relatedTarget: e[0]
                                                            }),
                                                            e.trigger({
                                                                type: "shown.bs.tab",
                                                                relatedTarget: o[0]
                                                            })
                                                        })
                                                    }
                                                }
                                            },
                                            i.prototype.activate = function(e, n, o) {
                                                function a() {
                                                    s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                                                    e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                                                    r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
                                                    e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                                                    o && o()
                                                }
                                                var s = n.find("> .active"),
                                                r = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
                                                s.length && r ? s.one("bsTransitionEnd", a).emulateTransitionEnd(i.TRANSITION_DURATION) : a(),
                                                s.removeClass("in")
                                            };
                                            var n = t.fn.tab;
                                            t.fn.tab = e,
                                            t.fn.tab.Constructor = i,
                                            t.fn.tab.noConflict = function() {
                                                return t.fn.tab = n,
                                                this
                                            };
                                            var o = function(i) {
                                                i.preventDefault(),
                                                e.call(t(this), "show")
                                            };
                                            t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
                                        } (jQuery),
                                        function(t) {
                                            "use strict";
                                            function e(e) {
                                                return this.each(function() {
                                                    var n = t(this),
                                                    o = n.data("bs.affix"),
                                                    a = "object" == typeof e && e;
                                                    o || n.data("bs.affix", o = new i(this, a)),
                                                    "string" == typeof e && o[e]()
                                                })
                                            }
                                            var i = function(e, n) {
                                                this.options = t.extend({},
                                                i.DEFAULTS, n),
                                                this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
                                                this.$element = t(e),
                                                this.affixed = null,
                                                this.unpin = null,
                                                this.pinnedOffset = null,
                                                this.checkPosition()
                                            };
                                            i.VERSION = "3.3.7",
                                            i.RESET = "affix affix-top affix-bottom",
                                            i.DEFAULTS = {
                                                offset: 0,
                                                target: window
                                            },
                                            i.prototype.getState = function(t, e, i, n) {
                                                var o = this.$target.scrollTop(),
                                                a = this.$element.offset(),
                                                s = this.$target.height();
                                                if (null != i && "top" == this.affixed) return o < i && "top";
                                                if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= a.top) && "bottom": !(o + s <= t - n) && "bottom";
                                                var r = null == this.affixed,
                                                l = r ? o: a.top,
                                                d = r ? s: e;
                                                return null != i && o <= i ? "top": null != n && l + d >= t - n && "bottom"
                                            },
                                            i.prototype.getPinnedOffset = function() {
                                                if (this.pinnedOffset) return this.pinnedOffset;
                                                this.$element.removeClass(i.RESET).addClass("affix");
                                                var t = this.$target.scrollTop(),
                                                e = this.$element.offset();
                                                return this.pinnedOffset = e.top - t
                                            },
                                            i.prototype.checkPositionWithEventLoop = function() {
                                                setTimeout(t.proxy(this.checkPosition, this), 1)
                                            },
                                            i.prototype.checkPosition = function() {
                                                if (this.$element.is(":visible")) {
                                                    var e = this.$element.height(),
                                                    n = this.options.offset,
                                                    o = n.top,
                                                    a = n.bottom,
                                                    s = Math.max(t(document).height(), t(document.body).height());
                                                    "object" != typeof n && (a = o = n),
                                                    "function" == typeof o && (o = n.top(this.$element)),
                                                    "function" == typeof a && (a = n.bottom(this.$element));
                                                    var r = this.getState(s, e, o, a);
                                                    if (this.affixed != r) {
                                                        null != this.unpin && this.$element.css("top", "");
                                                        var l = "affix" + (r ? "-" + r: ""),
                                                        d = t.Event(l + ".bs.affix");
                                                        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                                                        this.affixed = r,
                                                        this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
                                                        this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                                                    }
                                                    "bottom" == r && this.$element.offset({
                                                        top: s - e - a
                                                    })
                                                }
                                            };
                                            var n = t.fn.affix;
                                            t.fn.affix = e,
                                            t.fn.affix.Constructor = i,
                                            t.fn.affix.noConflict = function() {
                                                return t.fn.affix = n,
                                                this
                                            },
                                            t(window).on("load",
                                            function() {
                                                t('[data-spy="affix"]').each(function() {
                                                    var i = t(this),
                                                    n = i.data();
                                                    n.offset = n.offset || {},
                                                    null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
                                                    null != n.offsetTop && (n.offset.top = n.offsetTop),
                                                    e.call(i, n)
                                                })
                                            })
                                        } (jQuery)
                                    },
                                    {}],
                                    2 : [function(t, e, i) {
                                        t("../../../Themer/src/js/jquery.lazyload"),
                                        t("../../../Themer/src/js/jquery.fluidbox"),
                                        function(t) {
                                            function e() {
                                                t(".bdshare_popup_box").length ? t(".bdshare_popup_box").addClass("j-share") : setTimeout(function() {
                                                    e()
                                                },
                                                3)
                                            }
                                            var i = t(window),
                                            n = navigator.userAgent.toLowerCase(),
                                            o = 1,
                                            a = [],
                                            s = void 0 !== _wpcom_js.webp && _wpcom_js.webp ? _wpcom_js.webp: null; (t(".wpcom-user-list").length || t(".wpcom-member").length) && (o = 0),
                                            "Microsoft Internet Explorer" == navigator.appName && "9." == navigator.appVersion.match(/9./i) && (o = 0),
                                            o && void 0 !== _wpcom_js.fluidbox && 1 == _wpcom_js.fluidbox && t(".entry-content img").each(function(e, i) {
                                                var o = t(i),
                                                s = o.parent(),
                                                r = o.data("original");
                                                if (r = r || o.attr("src"), r.match(/^\/\//) && (r = window.location.protocol + r), "a" === s.prop("tagName").toLowerCase()) {
                                                    var l = s.attr("href"); (l == r || l.match(/.*(\.png|\.jpg|\.jpeg|\.gif|\.webp|\.bmp)$/i)) && (s.attr("data-fluidbox", !0).attr("data-fluidbox-loader", !0).addClass("fluidbox"), "micromessenger" == n.match(/MicroMessenger/i) && a.push(r))
                                                } else o.replaceWith('<a class="fluidbox" href="' + r + '" data-fluidbox data-fluidbox-loader="true">' + i.outerHTML + "</a>"),
                                                "micromessenger" == n.match(/MicroMessenger/i) && a.push(r)
                                            }),
                                            t(document).ready(function() {
                                                var e = t(".entry-content a[data-fluidbox]");
                                                if (e.length && (e.find("noscript").remove(), e.fluidbox({
                                                    stackIndex: 9999,
                                                    stackIndexDelta: 9998
                                                })), t(".j-lazy").lazyload({
                                                    webp: s,
                                                    threshold: -30,
                                                    effect: "fadeIn"
                                                }), t(".wpcom-adv-menu").each(function(e, i) {
                                                    var n = t(i);
                                                    n.find(">.menu-item-style").each(function(e, i) {
                                                        var o = t(i),
                                                        a = o.find(">.menu-item-wrap"),
                                                        s = o.position().left,
                                                        r = a.outerWidth();
                                                        s + r > n.outerWidth() && (s = n.outerWidth() - r),
                                                        a.css("left", s)
                                                    })
                                                }), t(document).on("click", 'a[href^="#"]',
                                                function(e) {
                                                    var i = t(this).attr("role");
                                                    if ("tab" != i && "button" != i && (e.preventDefault(), this.hash)) {
                                                        var n = t(this.hash).length ? t(this.hash).offset().top: 0;
                                                        n = n - t("header.header").outerHeight() - 10,
                                                        n = t("#wpadminbar").length ? n - t("#wpadminbar").outerHeight() : n,
                                                        n = n < 0 ? 0 : n,
                                                        t("html, body").animate({
                                                            scrollTop: n
                                                        },
                                                        400)
                                                    }
                                                }), navigator.userAgent.match(/(iPhone|iPod|ios|iPad|Android|Windows Phone|BlackBerry)/i)) {
                                                    if (void 0 !== _wpcom_js.xzh_head && 1 == _wpcom_js.xzh_head) {
                                                        var i = t(t("header.header").length ? "header.header": "header#header");
                                                        i.before('<div class="xzh-head-wrap" style="padding-left:15px;padding-right:15px;background: #fff;"><div id="j-xzh-head" style="padding-left:15px;padding-right:15px;"></div></div>'),
                                                        cambrian.bar({
                                                            data: {
                                                                type: "head",
                                                                anchor: document.getElementById("j-xzh-head")
                                                            }
                                                        }),
                                                        i.css("border-top", "1px solid rgba(0,0,0,.05)")
                                                    }
                                                    t("#xhz-render-body").length && cambrian.bar({
                                                        data: {
                                                            type: "tail",
                                                            anchor: document.getElementById("xhz-render-body")
                                                        }
                                                    })
                                                }
                                            }),
                                            t(document).on("DOMNodeInserted", ".widget_shopping_cart_content,.woocommerce-cart-form",
                                            function() {
                                                t(this).find(".j-lazy").lazyload({
                                                    webp: s,
                                                    threshold: -50,
                                                    effect: "fadeIn"
                                                }),
                                                t(window).trigger("scroll")
                                            }),
                                            t("body").on("click", ".navbar-toggle",
                                            function() {
                                                t("body").toggleClass("navbar-on"),
                                                0 == t(".navbar-on-shadow").length && t("#wrap").append('<div class="navbar-on-shadow"></div>'),
                                                setTimeout(function() {
                                                    t(window).trigger("scroll")
                                                },
                                                500)
                                            }).on("click", ".m-dropdown",
                                            function() {
                                                var e = t(this).parent();
                                                e.find("> .dropdown-menu").slideToggle("fast"),
                                                e.toggleClass("dropdown-open"),
                                                t(window).trigger("scroll")
                                            }),
                                            t("#wrap").on("click", ".navbar-on-shadow",
                                            function() {
                                                t(".navbar-toggle").trigger("click")
                                            }),
                                            t(".woocommerce").off("click.quantity").on("click.quantity", ".qty-down,.qty-up",
                                            function() {
                                                var e = t(this).hasClass("qty-down") ? 0 : 1,
                                                i = t(this).parent().find(".qty"),
                                                n = i.val();
                                                n = e ? ++n: --n,
                                                n = i.attr("min") && n < i.attr("min") ? i.attr("min") : n,
                                                n = i.attr("max") && n > i.attr("max") ? i.attr("max") : n,
                                                i.val(n).trigger("change")
                                            }).off("blur.quantity").on("blur.quantity", ".qty",
                                            function() {
                                                var e = t(this),
                                                i = e.val();
                                                i = e.attr("min") && i < e.attr("min") ? e.attr("min") : i,
                                                i = e.attr("max") && i > e.attr("max") ? e.attr("max") : i,
                                                e.val(i)
                                            });
                                            var r, l;
                                            i.scroll(function() {
                                                i.scrollTop() > 100 ? t("#j-top").fadeIn("slow") : t("#j-top").fadeOut("slow")
                                            }),
                                            t(".action").on("mouseenter", ".wechat",
                                            function() {
                                                clearTimeout(l),
                                                t(".contact-wrap").hide(),
                                                t(".wechat-wrap").show()
                                            }).on("mouseleave", ".wechat",
                                            function() {
                                                l = setTimeout(function() {
                                                    t(".wechat-wrap").hide()
                                                },
                                                300)
                                            }).on("mouseenter", ".contact",
                                            function() {
                                                clearTimeout(r),
                                                t(".wechat-wrap").hide(),
                                                t(".contact-wrap").show()
                                            }).on("mouseleave", ".contact",
                                            function() {
                                                r = setTimeout(function() {
                                                    t(".contact-wrap").hide()
                                                },
                                                300)
                                            }).on("click", "#j-top",
                                            function() {
                                                t("html, body").animate({
                                                    scrollTop: 0
                                                },
                                                "slow")
                                            }).on("mouseenter", ".bds_more",
                                            function() {
                                                t(this).hasClass("share") ? t(".bdshare_popup_box").length ? t(".bdshare_popup_box").addClass("j-share") : setTimeout(function() {
                                                    e()
                                                },
                                                15) : t(".bdshare_popup_box").removeClass("j-share")
                                            }),
                                            window.setup_share = function() {
                                                t(document).on("click", ".a-box.share",
                                                function(e) {
                                                    e.preventDefault(),
                                                    t(".at-svc-compact .at-icon-wrapper").trigger("click")
                                                })
                                            },
                                            function() {
                                                if ("micromessenger" == n.match(/MicroMessenger/i)) {
                                                    var e, i = location.href.split("#")[0],
                                                    o = document.querySelector("body").classList,
                                                    r = 0;
                                                    if (o.contains("page")) for (var l = 0; l < o.length; l++)(e = o[l].match(/page-id-(\d+)$/)) && (r = e[1]);
                                                    else if (o.contains("single")) for (var l = 0; l < o.length; l++)(e = o[l].match(/postid-(\d+)$/)) && (r = e[1]);
                                                    t.ajax({
                                                        url: _wpcom_js.ajaxurl,
                                                        type: "POST",
                                                        data: {
                                                            action: "wpcom_wx_config",
                                                            url: encodeURIComponent(i),
                                                            ID: r
                                                        },
                                                        dataType: "json",
                                                        success: function(e) {
                                                            if (e.signature) {
                                                                var n = e.thumb;
                                                                n.match(/^\/\//) && (n = window.location.protocol + n);
                                                                var o = document.title,
                                                                r = t("meta[name=description]").attr("content");
                                                                r = r || e.desc;
                                                                var l = document.createElement("script");
                                                                l.src = "//res.wx.qq.com/open/js/jweixin-1.2.0.js",
                                                                l.onload = function() {
                                                                    window.wx.config({
                                                                        debug: !1,
                                                                        appId: e.appId,
                                                                        timestamp: e.timestamp,
                                                                        nonceStr: e.noncestr,
                                                                        signature: e.signature,
                                                                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "previewImage"]
                                                                    }),
                                                                    wx.ready(function() {
                                                                        var e = {
                                                                            imgUrl: n,
                                                                            link: i,
                                                                            desc: r,
                                                                            title: o
                                                                        },
                                                                        l = {
                                                                            imgUrl: n,
                                                                            link: i,
                                                                            title: o
                                                                        };
                                                                        wx.onMenuShareAppMessage(e),
                                                                        wx.onMenuShareTimeline(l),
                                                                        wx.onMenuShareQQ(e),
                                                                        wx.onMenuShareWeibo(e),
                                                                        t(".entry-content").find("a.fluidbox").each(function(e, i) {
                                                                            t(i).fluidbox("destroy")
                                                                        }),
                                                                        t(".entry-content a.fluidbox .j-lazy").lazyload({
                                                                            webp: s,
                                                                            threshold: -30,
                                                                            effect: "fadeIn"
                                                                        }),
                                                                        t(document).on("click", "a.fluidbox",
                                                                        function(e) {
                                                                            e.preventDefault(),
                                                                            wx.previewImage({
                                                                                current: t(this).attr("href"),
                                                                                urls: a
                                                                            })
                                                                        })
                                                                    }),
                                                                    wx.error(function(t) {
                                                                        console.log(t)
                                                                    })
                                                                },
                                                                document.body.appendChild(l)
                                                            }
                                                        }
                                                    })
                                                }
                                            } (),
                                            window.baidu_map = function(e, i, n, o) {
                                                if (0 != t("#" + e).length) {
                                                    var a = new BMap.Map(e, {
                                                        enableMapClick: !1
                                                    }),
                                                    s = new BMap.Point(n[0], n[1]),
                                                    r = new BMap.Marker(s);
                                                    if (a.centerAndZoom(s, 16), a.addOverlay(r), o && a.enableScrollWheelZoom(), a.setMapStyle({
                                                        styleJson: [{
                                                            featureType: "all",
                                                            elementType: "all",
                                                            stylers: {
                                                                lightness: 35,
                                                                saturation: -25
                                                            }
                                                        }]
                                                    }), i) {
                                                        var l = new BMap.InfoWindow(i);
                                                        r.openInfoWindow(l),
                                                        r.addEventListener("click",
                                                        function() {
                                                            this.openInfoWindow(l)
                                                        })
                                                    }
                                                }
                                            }
                                        } (jQuery)
                                    },
                                    {
                                        "../../../Themer/src/js/jquery.fluidbox": 4,
                                        "../../../Themer/src/js/jquery.lazyload": 5
                                    }],
                                    3 : [function(t, e, i) { !
                                        function(t) {
                                            t.flexslider = function(e, i) {
                                                var n = t(e);
                                                n.vars = t.extend({},
                                                t.flexslider.defaults, i);
                                                var o, a = n.vars.namespace,
                                                s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                                                r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
                                                l = "click touchend MSPointerUp keyup",
                                                d = "",
                                                c = "vertical" === n.vars.direction,
                                                u = n.vars.reverse,
                                                h = n.vars.itemWidth > 0,
                                                p = "fade" === n.vars.animation,
                                                f = "" !== n.vars.asNavFor,
                                                m = {};
                                                t.data(e, "flexslider", n),
                                                m = {
                                                    init: function() {
                                                        n.animating = !1,
                                                        n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt: 0, 10),
                                                        isNaN(n.currentSlide) && (n.currentSlide = 0),
                                                        n.animatingTo = n.currentSlide,
                                                        n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last,
                                                        n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")),
                                                        n.slides = t(n.vars.selector, n),
                                                        n.container = t(n.containerSelector, n),
                                                        n.count = n.slides.length,
                                                        n.syncExists = t(n.vars.sync).length > 0,
                                                        "slide" === n.vars.animation && (n.vars.animation = "swing"),
                                                        n.prop = c ? "top": "marginLeft",
                                                        n.args = {},
                                                        n.manualPause = !1,
                                                        n.stopped = !1,
                                                        n.started = !1,
                                                        n.startTimeout = null,
                                                        n.transitions = !n.vars.video && !p && n.vars.useCSS &&
                                                        function() {
                                                            var t = document.createElement("div"),
                                                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                                                            for (var i in e) if (void 0 !== t.style[e[i]]) return n.pfx = e[i].replace("Perspective", "").toLowerCase(),
                                                            n.prop = "-" + n.pfx + "-transform",
                                                            !0;
                                                            return ! 1
                                                        } (),
                                                        n.ensureAnimationEnd = "",
                                                        "" !== n.vars.controlsContainer && (n.controlsContainer = t(n.vars.controlsContainer).length > 0 && t(n.vars.controlsContainer)),
                                                        "" !== n.vars.manualControls && (n.manualControls = t(n.vars.manualControls).length > 0 && t(n.vars.manualControls)),
                                                        "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === t(n.vars.customDirectionNav).length && t(n.vars.customDirectionNav)),
                                                        n.vars.randomize && (n.slides.sort(function() {
                                                            return Math.round(Math.random()) - .5
                                                        }), n.container.empty().append(n.slides)),
                                                        n.doMath(),
                                                        n.setup("init"),
                                                        n.vars.controlNav && m.controlNav.setup(),
                                                        n.vars.directionNav && m.directionNav.setup(),
                                                        n.vars.keyboard && (1 === t(n.containerSelector).length || n.vars.multipleKeyboard) && t(document).bind("keyup",
                                                        function(t) {
                                                            var e = t.keyCode;
                                                            if (!n.animating && (39 === e || 37 === e)) {
                                                                var i = 39 === e ? n.getTarget("next") : 37 === e && n.getTarget("prev");
                                                                n.flexAnimate(i, n.vars.pauseOnAction)
                                                            }
                                                        }),
                                                        n.vars.mousewheel && n.bind("mousewheel",
                                                        function(t, e, i, o) {
                                                            t.preventDefault();
                                                            var a = e < 0 ? n.getTarget("next") : n.getTarget("prev");
                                                            n.flexAnimate(a, n.vars.pauseOnAction)
                                                        }),
                                                        n.vars.pausePlay && m.pausePlay.setup(),
                                                        n.vars.slideshow && n.vars.pauseInvisible && m.pauseInvisible.init(),
                                                        n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                                                            n.manualPlay || n.manualPause || n.pause()
                                                        },
                                                        function() {
                                                            n.manualPause || n.manualPlay || n.stopped || n.play()
                                                        }), n.vars.pauseInvisible && m.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())),
                                                        f && m.asNav.setup(),
                                                        r && n.vars.touch && m.touch(),
                                                        (!p || p && n.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize),
                                                        n.find("img").attr("draggable", "false"),
                                                        setTimeout(function() {
                                                            n.vars.start(n)
                                                        },
                                                        200)
                                                    },
                                                    asNav: {
                                                        setup: function() {
                                                            n.asNav = !0,
                                                            n.animatingTo = Math.floor(n.currentSlide / n.move),
                                                            n.currentItem = n.currentSlide,
                                                            n.slides.removeClass(a + "active-slide").eq(n.currentItem).addClass(a + "active-slide"),
                                                            s ? (e._slider = n, n.slides.each(function() {
                                                                var e = this;
                                                                e._gesture = new MSGesture,
                                                                e._gesture.target = e,
                                                                e.addEventListener("MSPointerDown",
                                                                function(t) {
                                                                    t.preventDefault(),
                                                                    t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                                                                },
                                                                !1),
                                                                e.addEventListener("MSGestureTap",
                                                                function(e) {
                                                                    e.preventDefault();
                                                                    var i = t(this),
                                                                    o = i.index();
                                                                    t(n.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (n.direction = n.currentItem < o ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                                                                })
                                                            })) : n.slides.on(l,
                                                            function(e) {
                                                                e.preventDefault();
                                                                var i = t(this),
                                                                o = i.index();
                                                                i.offset().left - t(n).scrollLeft() <= 0 && i.hasClass(a + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : t(n.vars.asNavFor).data("flexslider").animating || i.hasClass(a + "active-slide") || (n.direction = n.currentItem < o ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                                                            })
                                                        }
                                                    },
                                                    controlNav: {
                                                        setup: function() {
                                                            n.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                                                        },
                                                        setupPaging: function() {
                                                            var e, i, o = "thumbnails" === n.vars.controlNav ? "control-thumbs": "control-paging",
                                                            s = 1;
                                                            if (n.controlNavScaffold = t('<ol class="' + a + "control-nav " + a + o + '"></ol>'), n.pagingCount > 1) for (var r = 0; r < n.pagingCount; r++) {
                                                                if (i = n.slides.eq(r), e = "thumbnails" === n.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>': "<a>" + s + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                                                    var c = i.attr("data-thumbcaption");
                                                                    "" !== c && void 0 !== c && (e += '<span class="' + a + 'caption">' + c + "</span>")
                                                                }
                                                                n.controlNavScaffold.append("<li>" + e + "</li>"),
                                                                s++
                                                            }
                                                            n.controlsContainer ? t(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold),
                                                            m.controlNav.set(),
                                                            m.controlNav.active(),
                                                            n.controlNavScaffold.delegate("a, img", l,
                                                            function(e) {
                                                                if (e.preventDefault(), "" === d || d === e.type) {
                                                                    var i = t(this),
                                                                    o = n.controlNav.index(i);
                                                                    i.hasClass(a + "active") || (n.direction = o > n.currentSlide ? "next": "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                                                                }
                                                                "" === d && (d = e.type),
                                                                m.setToClearWatchedEvent()
                                                            })
                                                        },
                                                        setupManual: function() {
                                                            n.controlNav = n.manualControls,
                                                            m.controlNav.active(),
                                                            n.controlNav.bind(l,
                                                            function(e) {
                                                                if (e.preventDefault(), "" === d || d === e.type) {
                                                                    var i = t(this),
                                                                    o = n.controlNav.index(i);
                                                                    i.hasClass(a + "active") || (o > n.currentSlide ? n.direction = "next": n.direction = "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                                                                }
                                                                "" === d && (d = e.type),
                                                                m.setToClearWatchedEvent()
                                                            })
                                                        },
                                                        set: function() {
                                                            var e = "thumbnails" === n.vars.controlNav ? "img": "a";
                                                            n.controlNav = t("." + a + "control-nav li " + e, n.controlsContainer ? n.controlsContainer: n)
                                                        },
                                                        active: function() {
                                                            n.controlNav.removeClass(a + "active").eq(n.animatingTo).addClass(a + "active")
                                                        },
                                                        update: function(e, i) {
                                                            n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append(t("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(i).closest("li").remove(),
                                                            m.controlNav.set(),
                                                            n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(i, e) : m.controlNav.active()
                                                        }
                                                    },
                                                    directionNav: {
                                                        setup: function() {
                                                            var e = t('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                                                            n.customDirectionNav ? n.directionNav = n.customDirectionNav: n.controlsContainer ? (t(n.controlsContainer).append(e), n.directionNav = t("." + a + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = t("." + a + "direction-nav li a", n)),
                                                            m.directionNav.update(),
                                                            n.directionNav.bind(l,
                                                            function(e) {
                                                                e.preventDefault();
                                                                var i;
                                                                "" !== d && d !== e.type || (i = t(this).hasClass(a + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(i, n.vars.pauseOnAction)),
                                                                "" === d && (d = e.type),
                                                                m.setToClearWatchedEvent()
                                                            })
                                                        },
                                                        update: function() {
                                                            var t = a + "disabled";
                                                            1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + a + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + a + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                                                        }
                                                    },
                                                    pausePlay: {
                                                        setup: function() {
                                                            var e = t('<div class="' + a + 'pauseplay"><a></a></div>');
                                                            n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = t("." + a + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = t("." + a + "pauseplay a", n)),
                                                            m.pausePlay.update(n.vars.slideshow ? a + "pause": a + "play"),
                                                            n.pausePlay.bind(l,
                                                            function(e) {
                                                                e.preventDefault(),
                                                                "" !== d && d !== e.type || (t(this).hasClass(a + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())),
                                                                "" === d && (d = e.type),
                                                                m.setToClearWatchedEvent()
                                                            })
                                                        },
                                                        update: function(t) {
                                                            "play" === t ? n.pausePlay.removeClass(a + "pause").addClass(a + "play").html(n.vars.playText) : n.pausePlay.removeClass(a + "play").addClass(a + "pause").html(n.vars.pauseText)
                                                        }
                                                    },
                                                    touch: function() {
                                                        function t(t) {
                                                            t.stopPropagation(),
                                                            n.animating ? t.preventDefault() : (n.pause(), e._gesture.addPointer(t.pointerId), C = 0, d = c ? n.h: n.w, m = Number(new Date), l = h && u && n.animatingTo === n.last ? 0 : h && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: h && n.currentSlide === n.last ? n.limit: h ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide: u ? (n.last - n.currentSlide + n.cloneOffset) * d: (n.currentSlide + n.cloneOffset) * d)
                                                        }
                                                        function i(t) {
                                                            t.stopPropagation();
                                                            var i = t.target._slider;
                                                            if (i) {
                                                                var n = -t.translationX,
                                                                o = -t.translationY;
                                                                if (C += c ? o: n, f = C, w = c ? Math.abs(C) < Math.abs( - n) : Math.abs(C) < Math.abs( - o), t.detail === t.MSGESTURE_FLAG_INERTIA) return void setImmediate(function() {
                                                                    e._gesture.stop()
                                                                }); (!w || Number(new Date) - m > 500) && (t.preventDefault(), !p && i.transitions && (i.vars.animationLoop || (f = C / (0 === i.currentSlide && C < 0 || i.currentSlide === i.last && C > 0 ? Math.abs(C) / d + 2 : 1)), i.setProps(l + f, "setTouch")))
                                                            }
                                                        }
                                                        function o(t) {
                                                            t.stopPropagation();
                                                            var e = t.target._slider;
                                                            if (e) {
                                                                if (e.animatingTo === e.currentSlide && !w && null !== f) {
                                                                    var i = u ? -f: f,
                                                                    n = i > 0 ? e.getTarget("next") : e.getTarget("prev");
                                                                    e.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > d / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : p || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                                                                }
                                                                a = null,
                                                                r = null,
                                                                f = null,
                                                                l = null,
                                                                C = 0
                                                            }
                                                        }
                                                        var a, r, l, d, f, m, g, v, b, w = !1,
                                                        y = 0,
                                                        x = 0,
                                                        C = 0;
                                                        s ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = n, e.addEventListener("MSGestureChange", i, !1), e.addEventListener("MSGestureEnd", o, !1)) : (g = function(t) {
                                                            n.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (n.pause(), d = c ? n.h: n.w, m = Number(new Date), y = t.touches[0].pageX, x = t.touches[0].pageY, l = h && u && n.animatingTo === n.last ? 0 : h && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: h && n.currentSlide === n.last ? n.limit: h ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide: u ? (n.last - n.currentSlide + n.cloneOffset) * d: (n.currentSlide + n.cloneOffset) * d, a = c ? x: y, r = c ? y: x, e.addEventListener("touchmove", v, !1), e.addEventListener("touchend", b, !1))
                                                        },
                                                        v = function(t) {
                                                            y = t.touches[0].pageX,
                                                            x = t.touches[0].pageY,
                                                            f = c ? a - x: a - y,
                                                            w = c ? Math.abs(f) < Math.abs(y - r) : Math.abs(f) < Math.abs(x - r); (!w || Number(new Date) - m > 500) && (t.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (f /= 0 === n.currentSlide && f < 0 || n.currentSlide === n.last && f > 0 ? Math.abs(f) / d + 2 : 1), n.setProps(l + f, "setTouch")))
                                                        },
                                                        b = function(t) {
                                                            if (e.removeEventListener("touchmove", v, !1), n.animatingTo === n.currentSlide && !w && null !== f) {
                                                                var i = u ? -f: f,
                                                                o = i > 0 ? n.getTarget("next") : n.getTarget("prev");
                                                                n.canAdvance(o) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > d / 2) ? n.flexAnimate(o, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                                                            }
                                                            e.removeEventListener("touchend", b, !1),
                                                            a = null,
                                                            r = null,
                                                            f = null,
                                                            l = null
                                                        },
                                                        e.addEventListener("touchstart", g, !1))
                                                    },
                                                    resize: function() { ! n.animating && n.is(":visible") && (h || n.doMath(), p ? m.smoothHeight() : h ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : c ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && m.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
                                                    },
                                                    smoothHeight: function(t) {
                                                        if (!c || p) {
                                                            var e = p ? n: n.viewport;
                                                            t ? e.animate({
                                                                height: n.slides.eq(n.animatingTo).height()
                                                            },
                                                            t) : e.height(n.slides.eq(n.animatingTo).height())
                                                        }
                                                    },
                                                    sync: function(e) {
                                                        var i = t(n.vars.sync).data("flexslider"),
                                                        o = n.animatingTo;
                                                        switch (e) {
                                                        case "animate":
                                                            i.flexAnimate(o, n.vars.pauseOnAction, !1, !0);
                                                            break;
                                                        case "play":
                                                            i.playing || i.asNav || i.play();
                                                            break;
                                                        case "pause":
                                                            i.pause()
                                                        }
                                                    },
                                                    uniqueID: function(e) {
                                                        return e.filter("[id]").add(e.find("[id]")).each(function() {
                                                            var e = t(this);
                                                            e.attr("id", e.attr("id") + "_clone")
                                                        }),
                                                        e
                                                    },
                                                    pauseInvisible: {
                                                        visProp: null,
                                                        init: function() {
                                                            var t = m.pauseInvisible.getHiddenProp();
                                                            if (t) {
                                                                var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                                                                document.addEventListener(e,
                                                                function() {
                                                                    m.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                                                                })
                                                            }
                                                        },
                                                        isHidden: function() {
                                                            var t = m.pauseInvisible.getHiddenProp();
                                                            return !! t && document[t]
                                                        },
                                                        getHiddenProp: function() {
                                                            var t = ["webkit", "moz", "ms", "o"];
                                                            if ("hidden" in document) return "hidden";
                                                            for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                                                            return null
                                                        }
                                                    },
                                                    setToClearWatchedEvent: function() {
                                                        clearTimeout(o),
                                                        o = setTimeout(function() {
                                                            d = ""
                                                        },
                                                        3e3)
                                                    }
                                                },
                                                n.flexAnimate = function(e, i, o, s, l) {
                                                    if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next": "prev"), f && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next": "prev"), !n.animating && (n.canAdvance(e, l) || o) && n.is(":visible")) {
                                                        if (f && s) {
                                                            var d = t(n.vars.asNavFor).data("flexslider");
                                                            if (n.atEnd = 0 === e || e === n.count - 1, d.flexAnimate(e, !0, !1, !0, l), n.direction = n.currentItem < e ? "next": "prev", d.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e,
                                                            n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"),
                                                            !1;
                                                            n.currentItem = e,
                                                            n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"),
                                                            e = Math.floor(e / n.visible)
                                                        }
                                                        if (n.animating = !0, n.animatingTo = e, i && n.pause(), n.vars.before(n), n.syncExists && !l && m.sync("animate"), n.vars.controlNav && m.controlNav.active(), h || n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && m.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) r ? (n.slides.eq(n.currentSlide).css({
                                                            opacity: 0,
                                                            zIndex: 1
                                                        }), n.slides.eq(e).css({
                                                            opacity: 1,
                                                            zIndex: 2
                                                        }), n.wrapup(w)) : (n.slides.eq(n.currentSlide).css({
                                                            zIndex: 1
                                                        }).animate({
                                                            opacity: 0
                                                        },
                                                        n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                                                            zIndex: 2
                                                        }).animate({
                                                            opacity: 1
                                                        },
                                                        n.vars.animationSpeed, n.vars.easing, n.wrapup));
                                                        else {
                                                            var g, v, b, w = c ? n.slides.filter(":first").height() : n.computedW;
                                                            h ? (g = n.vars.itemMargin, b = (n.itemW + g) * n.move * n.animatingTo, v = b > n.limit && 1 !== n.visible ? n.limit: b) : v = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * w: 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * w: u ? (n.count - 1 - e + n.cloneOffset) * w: (e + n.cloneOffset) * w,
                                                            n.setProps(v, "", n.vars.animationSpeed),
                                                            n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend",
                                                            function() {
                                                                clearTimeout(n.ensureAnimationEnd),
                                                                n.wrapup(w)
                                                            }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                                                                n.wrapup(w)
                                                            },
                                                            n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing,
                                                            function() {
                                                                n.wrapup(w)
                                                            })
                                                        }
                                                        n.vars.smoothHeight && m.smoothHeight(n.vars.animationSpeed)
                                                    }
                                                },
                                                n.wrapup = function(t) {
                                                    p || h || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")),
                                                    n.animating = !1,
                                                    n.currentSlide = n.animatingTo,
                                                    n.vars.after(n)
                                                },
                                                n.animateSlides = function() {
                                                    n.animating || n.flexAnimate(n.getTarget("next"))
                                                },
                                                n.pause = function() {
                                                    clearInterval(n.animatedSlides),
                                                    n.animatedSlides = null,
                                                    n.playing = !1,
                                                    n.vars.pausePlay && m.pausePlay.update("play"),
                                                    n.syncExists && m.sync("pause")
                                                },
                                                n.play = function() {
                                                    n.playing && clearInterval(n.animatedSlides),
                                                    n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed),
                                                    n.started = n.playing = !0,
                                                    n.vars.pausePlay && m.pausePlay.update("pause"),
                                                    n.syncExists && m.sync("play")
                                                },
                                                n.stop = function() {
                                                    n.pause(),
                                                    n.stopped = !0
                                                },
                                                n.canAdvance = function(t, e) {
                                                    var i = f ? n.pagingCount - 1 : n.last;
                                                    return !! e || (!(!f || n.currentItem !== n.count - 1 || 0 !== t || "prev" !== n.direction) || (!f || 0 !== n.currentItem || t !== n.pagingCount - 1 || "next" === n.direction) && (!(t === n.currentSlide && !f) && ( !! n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || t !== i || "next" === n.direction) && (!n.atEnd || n.currentSlide !== i || 0 !== t || "next" !== n.direction))))
                                                },
                                                n.getTarget = function(t) {
                                                    return n.direction = t,
                                                    "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last: n.currentSlide - 1
                                                },
                                                n.setProps = function(t, e, i) {
                                                    var o = function() {
                                                        var i = t || (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo;
                                                        return - 1 *
                                                        function() {
                                                            if (h) return "setTouch" === e ? t: u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: n.animatingTo === n.last ? n.limit: i;
                                                            switch (e) {
                                                            case "setTotal":
                                                                return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t: (n.currentSlide + n.cloneOffset) * t;
                                                            case "setTouch":
                                                                return t;
                                                            case "jumpEnd":
                                                                return u ? t: n.count * t;
                                                            case "jumpStart":
                                                                return u ? n.count * t: t;
                                                            default:
                                                                return t
                                                            }
                                                        } () + "px"
                                                    } ();
                                                    n.transitions && (o = c ? "translate3d(0," + o + ",0)": "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s": "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)),
                                                    n.args[n.prop] = o,
                                                    (n.transitions || void 0 === i) && n.container.css(n.args),
                                                    n.container.css("transform", o)
                                                },
                                                n.setup = function(e) {
                                                    if (p) n.slides.css({
                                                        width: "100%",
                                                        float: "left",
                                                        marginRight: "-100%",
                                                        position: "relative"
                                                    }),
                                                    "init" === e && (r ? n.slides.css({
                                                        opacity: 0,
                                                        display: "block",
                                                        webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                                                        zIndex: 1
                                                    }).eq(n.currentSlide).css({
                                                        opacity: 1,
                                                        zIndex: 2
                                                    }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                                                        opacity: 0,
                                                        display: "block",
                                                        zIndex: 1
                                                    }).eq(n.currentSlide).css({
                                                        zIndex: 2
                                                    }).css({
                                                        opacity: 1
                                                    }) : n.slides.css({
                                                        opacity: 0,
                                                        display: "block",
                                                        zIndex: 1
                                                    }).eq(n.currentSlide).css({
                                                        zIndex: 2
                                                    }).animate({
                                                        opacity: 1
                                                    },
                                                    n.vars.animationSpeed, n.vars.easing)),
                                                    n.vars.smoothHeight && m.smoothHeight();
                                                    else {
                                                        var i, o;
                                                        "init" === e && (n.viewport = t('<div class="' + a + 'viewport"></div>').css({
                                                            overflow: "hidden",
                                                            position: "relative"
                                                        }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (o = t.makeArray(n.slides).reverse(), n.slides = t(o), n.container.empty().append(n.slides))),
                                                        n.vars.animationLoop && !h && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(m.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                                                        n.newSlides = t(n.vars.selector, n),
                                                        i = u ? n.count - 1 - n.currentSlide + n.cloneOffset: n.currentSlide + n.cloneOffset,
                                                        c && !h ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                                                            n.newSlides.css({
                                                                display: "block"
                                                            }),
                                                            n.doMath(),
                                                            n.viewport.height(n.h),
                                                            n.setProps(i * n.h, "init")
                                                        },
                                                        "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(i * n.computedW, "init"), setTimeout(function() {
                                                            n.doMath(),
                                                            n.newSlides.css({
                                                                width: n.computedW,
                                                                float: "left",
                                                                display: "block"
                                                            }),
                                                            n.vars.smoothHeight && m.smoothHeight()
                                                        },
                                                        "init" === e ? 100 : 0))
                                                    }
                                                    h || n.slides.removeClass(a + "active-slide").eq(n.currentSlide).addClass(a + "active-slide"),
                                                    n.vars.init(n)
                                                },
                                                n.doMath = function() {
                                                    var t = n.slides.first(),
                                                    e = n.vars.itemMargin,
                                                    i = n.vars.minItems,
                                                    o = n.vars.maxItems;
                                                    n.w = void 0 === n.viewport ? n.width() : n.viewport.width(),
                                                    n.h = t.height(),
                                                    n.boxPadding = t.outerWidth() - t.width(),
                                                    h ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT: n.w, n.maxW = o ? o * n.itemT - e: n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i: n.maxW < n.w ? (n.w - e * (o - 1)) / o: n.vars.itemWidth > n.w ? n.w: n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move: n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1),
                                                    n.computedW = n.itemW - n.boxPadding
                                                },
                                                n.update = function(t, e) {
                                                    n.doMath(),
                                                    h || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1), n.animatingTo = n.currentSlide),
                                                    n.vars.controlNav && !n.manualControls && ("add" === e && !h || n.pagingCount > n.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !h || n.pagingCount < n.controlNav.length) && (h && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), m.controlNav.update("remove", n.last))),
                                                    n.vars.directionNav && m.directionNav.update()
                                                },
                                                n.addSlide = function(e, i) {
                                                    var o = t(e);
                                                    n.count += 1,
                                                    n.last = n.count - 1,
                                                    c && u ? void 0 !== i ? n.slides.eq(n.count - i).after(o) : n.container.prepend(o) : void 0 !== i ? n.slides.eq(i).before(o) : n.container.append(o),
                                                    n.update(i, "add"),
                                                    n.slides = t(n.vars.selector + ":not(.clone)", n),
                                                    n.setup(),
                                                    n.vars.added(n)
                                                },
                                                n.removeSlide = function(e) {
                                                    var i = isNaN(e) ? n.slides.index(t(e)) : e;
                                                    n.count -= 1,
                                                    n.last = n.count - 1,
                                                    isNaN(e) ? t(e, n.slides).remove() : c && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(),
                                                    n.doMath(),
                                                    n.update(i, "remove"),
                                                    n.slides = t(n.vars.selector + ":not(.clone)", n),
                                                    n.setup(),
                                                    n.vars.removed(n)
                                                },
                                                m.init()
                                            },
                                            t(window).blur(function(t) {
                                                focused = !1
                                            }).focus(function(t) {
                                                focused = !0
                                            }),
                                            t.flexslider.defaults = {
                                                namespace: "flex-",
                                                selector: ".slides > li",
                                                animation: "fade",
                                                easing: "swing",
                                                direction: "horizontal",
                                                reverse: !1,
                                                animationLoop: !0,
                                                smoothHeight: !1,
                                                startAt: 0,
                                                slideshow: !0,
                                                slideshowSpeed: 7e3,
                                                animationSpeed: 600,
                                                initDelay: 0,
                                                randomize: !1,
                                                fadeFirstSlide: !0,
                                                thumbCaptions: !1,
                                                pauseOnAction: !0,
                                                pauseOnHover: !1,
                                                pauseInvisible: !0,
                                                useCSS: !0,
                                                touch: !0,
                                                video: !1,
                                                controlNav: !0,
                                                directionNav: !0,
                                                prevText: "Previous",
                                                nextText: "Next",
                                                keyboard: !0,
                                                multipleKeyboard: !1,
                                                mousewheel: !1,
                                                pausePlay: !1,
                                                pauseText: "Pause",
                                                playText: "Play",
                                                controlsContainer: "",
                                                manualControls: "",
                                                customDirectionNav: "",
                                                sync: "",
                                                asNavFor: "",
                                                itemWidth: 0,
                                                itemMargin: 0,
                                                minItems: 1,
                                                maxItems: 0,
                                                move: 0,
                                                allowOneSlide: !0,
                                                start: function() {},
                                                before: function() {},
                                                after: function() {},
                                                end: function() {},
                                                added: function() {},
                                                removed: function() {},
                                                init: function() {}
                                            },
                                            t.fn.flexslider = function(e) {
                                                if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                                                    var i = t(this),
                                                    n = e.selector ? e.selector: ".slides > li",
                                                    o = i.find(n);
                                                    1 === o.length && !0 === e.allowOneSlide || 0 === o.length ? (o.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
                                                });
                                                var i = t(this).data("flexslider");
                                                switch (e) {
                                                case "play":
                                                    i.play();
                                                    break;
                                                case "pause":
                                                    i.pause();
                                                    break;
                                                case "stop":
                                                    i.stop();
                                                    break;
                                                case "next":
                                                    i.flexAnimate(i.getTarget("next"), !0);
                                                    break;
                                                case "prev":
                                                case "previous":
                                                    i.flexAnimate(i.getTarget("prev"), !0);
                                                    break;
                                                default:
                                                    "number" == typeof e && i.flexAnimate(e, !0)
                                                }
                                            }
                                        } (jQuery)
                                    },
                                    {}],
                                    4 : [function(t, e, i) { !
                                        function(t, e, i, n) {
                                            "use strict";
                                            function o(e, i) {
                                                this.element = e;
                                                var n = {};
                                                t.each(t(this.element).data(),
                                                function(t, e) {
                                                    var i = function(t) {
                                                        return t && t[0].toLowerCase() + t.slice(1)
                                                    } (t.replace("fluidbox", ""));
                                                    "" === i && null === i || ("false" == e ? e = !1 : "true" == e && (e = !0), n[i] = e)
                                                }),
                                                this.settings = t.extend({},
                                                r, i, n),
                                                this.settings.viewportFill = Math.max(Math.min(parseFloat(this.settings.viewportFill), 1), 0),
                                                this.settings.stackIndex < this.settings.stackIndexDelta && (settings.stackIndexDelta = settings.stackIndex),
                                                this._name = s,
                                                this.init()
                                            }
                                            var a = t(e),
                                            s = (t(i), "fluidbox"),
                                            r = {
                                                immediateOpen: !1,
                                                loader: !1,
                                                maxWidth: 0,
                                                maxHeight: 0,
                                                resizeThrottle: 500,
                                                stackIndex: 1e3,
                                                stackIndexDelta: 10,
                                                viewportFill: .95
                                            },
                                            l = {},
                                            d = 0;
                                            "undefined" != typeof console && "undefined" !== console.warn || (console = {},
                                            console.warn = function() {}),
                                            t.isFunction(t.throttle);
                                            var c = function() {
                                                var t, e = i.createElement("fakeelement"),
                                                n = {
                                                    transition: "transitionend",
                                                    OTransition: "oTransitionEnd",
                                                    MozTransition: "transitionend",
                                                    WebkitTransition: "webkitTransitionEnd"
                                                };
                                                for (t in n) if (void 0 !== e.style[t]) return n[t]
                                            } (),
                                            u = {
                                                dom: function() {
                                                    var e = t("<div />", {
                                                        class: "fluidbox__wrap",
                                                        css: {
                                                            zIndex: this.settings.stackIndex - this.settings.stackIndexDelta
                                                        }
                                                    });
                                                    if (t(this.element).addClass("fluidbox--closed").wrapInner(e).find("img").first().css({
                                                        opacity: 1
                                                    }).addClass("fluidbox__thumb").after('<div class="fluidbox__ghost" />'), this.settings.loader) {
                                                        var i = t("<div />", {
                                                            class: "fluidbox__loader",
                                                            css: {
                                                                zIndex: 2
                                                            }
                                                        });
                                                        t(this.element).find(".fluidbox__wrap").append(i)
                                                    }
                                                },
                                                prepareFb: function() {
                                                    var e = this,
                                                    i = t(this.element);
                                                    i.trigger("thumbloaddone.fluidbox"),
                                                    u.measure.fbElements.call(this),
                                                    e.bindEvents(),
                                                    i.addClass("fluidbox--ready"),
                                                    e.bindListeners(),
                                                    i.trigger("ready.fluidbox")
                                                },
                                                measure: {
                                                    viewport: function() {
                                                        l.viewport = {
                                                            w: a.width(),
                                                            h: a.height()
                                                        }
                                                    },
                                                    fbElements: function() {
                                                        var e = this,
                                                        i = t(this.element),
                                                        n = i.find("img").first(),
                                                        o = i.find(".fluidbox__ghost"),
                                                        a = i.find(".fluidbox__wrap");
                                                        e.instanceData.thumb = {
                                                            natW: n[0].naturalWidth,
                                                            natH: n[0].naturalHeight,
                                                            w: n.width(),
                                                            h: n.height()
                                                        },
                                                        o.css({
                                                            width: n.width(),
                                                            height: n.height(),
                                                            top: n.offset().top - a.offset().top + parseInt(n.css("borderTopWidth")) + parseInt(n.css("paddingTop")),
                                                            left: n.offset().left - a.offset().left + parseInt(n.css("borderLeftWidth")) + parseInt(n.css("paddingLeft"))
                                                        })
                                                    }
                                                },
                                                checkURL: function(t) {
                                                    var e = 0;
                                                    return /[\s+]/g.test(t) ? (console.warn("Fluidbox: Fluidbox opening is halted because it has detected characters in your URL string that need to be properly encoded/escaped. Whitespace(s) have to be escaped manually. See RFC3986 documentation."), e = 1) : /[\"\'\(\)]/g.test(t) && (console.warn("Fluidbox: Fluidbox opening will proceed, but it has detected characters in your URL string that need to be properly encoded/escaped. These will be escaped for you. See RFC3986 documentation."), e = 0),
                                                    e
                                                },
                                                formatURL: function(t) {
                                                    return t.replace(/"/g, "%22").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")
                                                }
                                            };
                                            t.extend(o.prototype, {
                                                init: function() {
                                                    var e = this,
                                                    i = t(this.element),
                                                    n = i.find("img").first();
                                                    if (u.measure.viewport(), (!e.instanceData || !e.instanceData.initialized) && i.is("a") && 1 === i.children().length && (i.children().is("img") || i.children().is("picture") && 1 === i.find("img").length) && "none" !== i.css("display") && "none" !== i.children().css("display") && "none" !== i.parents().css("display")) {
                                                        i.removeClass("fluidbox--destroyed"),
                                                        e.instanceData = {},
                                                        e.instanceData.initialized = !0,
                                                        e.instanceData.originalNode = i.html(),
                                                        d += 1,
                                                        e.instanceData.id = d,
                                                        i.addClass("fluidbox__instance-" + d),
                                                        i.addClass("fluidbox--initialized"),
                                                        u.dom.call(e),
                                                        i.trigger("init.fluidbox");
                                                        var o = new Image;
                                                        n.width() > 0 && n.height() > 0 ? u.prepareFb.call(e) : (o.onload = function() {
                                                            u.prepareFb.call(e)
                                                        },
                                                        o.onerror = function() {
                                                            i.trigger("thumbloadfail.fluidbox")
                                                        },
                                                        o.src = n.attr("src"))
                                                    }
                                                },
                                                open: function() {
                                                    var e = this,
                                                    i = t(this.element),
                                                    n = i.find("img").first(),
                                                    o = i.find(".fluidbox__ghost"),
                                                    a = i.find(".fluidbox__wrap");
                                                    e.instanceData.state = 1,
                                                    o.off(c),
                                                    t(".fluidbox--opened").fluidbox("close");
                                                    var s = t("<div />", {
                                                        class: "fluidbox__overlay",
                                                        css: {
                                                            zIndex: -1
                                                        }
                                                    });
                                                    if (a.append(s), i.removeClass("fluidbox--closed").addClass("fluidbox--loading"), u.checkURL(n.attr("src"))) return e.close(),
                                                    !1;
                                                    o.css({
                                                        "background-image": "url(" + u.formatURL(n.attr("src")) + ")",
                                                        opacity: 1
                                                    }),
                                                    u.measure.fbElements.call(e);
                                                    var r;
                                                    e.settings.immediateOpen ? (i.addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({
                                                        zIndex: e.settings.stackIndex + e.settings.stackIndexDelta
                                                    }), i.trigger("openstart.fluidbox"), e.compute(), n.css({
                                                        opacity: 0
                                                    }), t(".fluidbox__overlay").css({
                                                        opacity: 1
                                                    }), o.one(c,
                                                    function() {
                                                        i.trigger("openend.fluidbox")
                                                    }), r = new Image, r.onload = function() {
                                                        if (i.trigger("imageloaddone.fluidbox"), 1 === e.instanceData.state) {
                                                            if (e.instanceData.thumb.natW = r.naturalWidth, e.instanceData.thumb.natH = r.naturalHeight, i.removeClass("fluidbox--loading"), u.checkURL(r.src)) return e.close({
                                                                error: !0
                                                            }),
                                                            !1;
                                                            o.css({
                                                                "background-image": "url(" + u.formatURL(r.src) + ")"
                                                            }),
                                                            e.compute()
                                                        }
                                                    },
                                                    r.onerror = function() {
                                                        e.close({
                                                            error: !0
                                                        }),
                                                        i.trigger("imageloadfail.fluidbox"),
                                                        i.trigger("delayedloadfail.fluidbox")
                                                    },
                                                    r.src = i.attr("href")) : (r = new Image, r.onload = function() {
                                                        if (i.trigger("imageloaddone.fluidbox"), i.removeClass("fluidbox--loading").addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({
                                                            zIndex: e.settings.stackIndex + e.settings.stackIndexDelta
                                                        }), i.trigger("openstart.fluidbox"), u.checkURL(r.src)) return e.close({
                                                            error: !0
                                                        }),
                                                        !1;
                                                        o.css({
                                                            "background-image": "url(" + u.formatURL(r.src) + ")"
                                                        }),
                                                        e.instanceData.thumb.natW = r.naturalWidth,
                                                        e.instanceData.thumb.natH = r.naturalHeight,
                                                        e.compute(),
                                                        n.css({
                                                            opacity: 0
                                                        }),
                                                        t(".fluidbox__overlay").css({
                                                            opacity: 1
                                                        }),
                                                        o.one(c,
                                                        function() {
                                                            i.trigger("openend.fluidbox")
                                                        })
                                                    },
                                                    r.onerror = function() {
                                                        e.close({
                                                            error: !0
                                                        }),
                                                        i.trigger("imageloadfail.fluidbox")
                                                    },
                                                    r.src = i.attr("href"))
                                                },
                                                compute: function() {
                                                    var e = this,
                                                    i = t(this.element),
                                                    n = i.find("img").first(),
                                                    o = i.find(".fluidbox__ghost"),
                                                    s = i.find(".fluidbox__wrap"),
                                                    r = e.instanceData.thumb.natW,
                                                    d = e.instanceData.thumb.natH,
                                                    c = e.instanceData.thumb.w,
                                                    u = e.instanceData.thumb.h,
                                                    h = r / d,
                                                    p = l.viewport.w / l.viewport.h;
                                                    e.settings.maxWidth > 0 ? (r = e.settings.maxWidth, d = r / h) : e.settings.maxHeight > 0 && (d = e.settings.maxHeight, r = d * h);
                                                    var f, m, g, v, b;
                                                    p > h ? (f = d < l.viewport.h ? d: l.viewport.h * e.settings.viewportFill, g = f / u, v = r * (u * g / d) / c, b = g) : (m = r < l.viewport.w ? r: l.viewport.w * e.settings.viewportFill, v = m / c, g = d * (c * v / r) / u, b = v),
                                                    e.settings.maxWidth && e.settings.maxHeight && console.warn("Fluidbox: Both maxHeight and maxWidth are specified. You can only specify one. If both are specified, only the maxWidth property will be respected. This will not generate any error, but may cause unexpected sizing behavior.");
                                                    var w = a.scrollTop() - n.offset().top + u * (b - 1) * .5 + .5 * (a.height() - u * b),
                                                    y = c * (b - 1) * .5 + .5 * (a.width() - c * b) - n.offset().left,
                                                    x = parseInt(100 * v) / 100 + "," + parseInt(100 * g) / 100;
                                                    o.css({
                                                        transform: "translate(" + parseInt(100 * y) / 100 + "px," + parseInt(100 * w) / 100 + "px) scale(" + x + ")",
                                                        top: n.offset().top - s.offset().top,
                                                        left: n.offset().left - s.offset().left
                                                    }),
                                                    i.find(".fluidbox__loader").css({
                                                        transform: "translate(" + parseInt(100 * y) / 100 + "px," + parseInt(100 * w) / 100 + "px) scale(" + x + ")"
                                                    }),
                                                    i.trigger("computeend.fluidbox")
                                                },
                                                recompute: function() {
                                                    this.compute()
                                                },
                                                close: function(e) {
                                                    var i = this,
                                                    n = t(this.element),
                                                    o = n.find("img").first(),
                                                    a = n.find(".fluidbox__ghost"),
                                                    s = n.find(".fluidbox__wrap"),
                                                    r = n.find(".fluidbox__overlay"),
                                                    l = t.extend(null, {
                                                        error: !1
                                                    },
                                                    e);
                                                    if (null === i.instanceData.state || void 0 === i.instanceData.state || 0 === i.instanceData.state) return ! 1;
                                                    i.instanceData.state = 0,
                                                    n.trigger("closestart.fluidbox"),
                                                    n.removeClass(function(t, e) {
                                                        return (e.match(/(^|\s)fluidbox--(opened|loaded|loading)+/g) || []).join(" ")
                                                    }).addClass("fluidbox--closed"),
                                                    a.css({
                                                        transform: "translate(0,0) scale(1,1)",
                                                        top: o.offset().top - s.offset().top + parseInt(o.css("borderTopWidth")) + parseInt(o.css("paddingTop")),
                                                        left: o.offset().left - s.offset().left + parseInt(o.css("borderLeftWidth")) + parseInt(o.css("paddingLeft"))
                                                    }),
                                                    n.find(".fluidbox__loader").css({
                                                        transform: "none"
                                                    }),
                                                    a.one(c,
                                                    function() {
                                                        a.css({
                                                            opacity: 0
                                                        }),
                                                        o.css({
                                                            opacity: 1
                                                        }),
                                                        r.remove(),
                                                        s.css({
                                                            zIndex: i.settings.stackIndex - i.settings.stackIndexDelta
                                                        }),
                                                        n.trigger("closeend.fluidbox")
                                                    }),
                                                    l.error && a.trigger("transitionend"),
                                                    r.css({
                                                        opacity: 0
                                                    })
                                                },
                                                bindEvents: function() {
                                                    var e = this;
                                                    t(this.element).on("click.fluidbox",
                                                    function(t) {
                                                        t.preventDefault(),
                                                        e.instanceData.state && 0 !== e.instanceData.state ? e.close() : e.open()
                                                    })
                                                },
                                                bindListeners: function() {
                                                    var e = this,
                                                    i = t(this.element),
                                                    n = function() {
                                                        u.measure.viewport(),
                                                        u.measure.fbElements.call(e),
                                                        i.hasClass("fluidbox--opened") && e.compute()
                                                    };
                                                    t.isFunction(t.throttle) ? a.on("resize.fluidbox" + e.instanceData.id, t.throttle(e.settings.resizeThrottle, n)) : a.on("resize.fluidbox" + e.instanceData.id, n),
                                                    i.on("reposition.fluidbox",
                                                    function() {
                                                        e.reposition()
                                                    }),
                                                    i.on("recompute.fluidbox, compute.fluidbox",
                                                    function() {
                                                        e.compute()
                                                    }),
                                                    i.on("destroy.fluidbox",
                                                    function() {
                                                        e.destroy()
                                                    }),
                                                    i.on("close.fluidbox",
                                                    function() {
                                                        e.close()
                                                    })
                                                },
                                                unbind: function() {
                                                    t(this.element).off("click.fluidbox reposition.fluidbox recompute.fluidbox compute.fluidbox destroy.fluidbox close.fluidbox"),
                                                    a.off("resize.fluidbox" + this.instanceData.id)
                                                },
                                                reposition: function() {
                                                    u.measure.fbElements.call(this)
                                                },
                                                destroy: function() {
                                                    var e = this.instanceData.originalNode;
                                                    this.unbind(),
                                                    t.data(this.element, "plugin_" + s, null),
                                                    t(this.element).removeClass(function(t, e) {
                                                        return (e.match(/(^|\s)fluidbox[--|__]\S+/g) || []).join(" ")
                                                    }).empty().html(e).addClass("fluidbox--destroyed").trigger("destroyed.fluidbox")
                                                },
                                                getMetadata: function() {
                                                    return this.instanceData
                                                }
                                            }),
                                            t.fn[s] = function(e) {
                                                var i = arguments;
                                                if (void 0 === e || "object" == typeof e) return this.each(function() {
                                                    t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
                                                });
                                                if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
                                                    var n;
                                                    return this.each(function() {
                                                        var a = t.data(this, "plugin_" + s);
                                                        a instanceof o && "function" == typeof a[e] ? n = a[e].apply(a, Array.prototype.slice.call(i, 1)) : console.warn('Fluidbox: The method "' + e + '" used is not defined in Fluidbox. Please make sure you are calling the correct public method.')
                                                    }),
                                                    void 0 !== n ? n: this
                                                }
                                                return this
                                            }
                                        } (jQuery, window, document)
                                    },
                                    {}],
                                    5 : [function(t, e, i) {
                                        /*!
                                    * Lazy Load - jQuery plugin for lazy loading images
                                    *
                                    * Copyright (c) 2007-2015 Mika Tuupola
                                    *
                                    * Licensed under the MIT license:
                                    *   http://www.opensource.org/licenses/mit-license.php
                                    *
                                    * Project home:
                                    *   http://www.appelsiini.net/projects/lazyload
                                    *
                                    * Version:  1.9.7
                                    *
                                    */
                                        !
                                        function(t, e, i, n) {
                                            var o = t(e),
                                            a = function() {
                                                try {
                                                    return 0 === i.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
                                                } catch(t) {
                                                    return ! 1
                                                }
                                            } ();
                                            t.fn.lazyload = function(n) {
                                                function s() {
                                                    var e = 0;
                                                    d.each(function() {
                                                        var i = t(this);
                                                        if (!c.skip_invisible || i.is(":visible")) if (t.abovethetop(this, c) || t.leftofbegin(this, c));
                                                        else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                                                            if (++e > c.failure_limit) return ! 1
                                                        } else i.trigger("appear"),
                                                        e = 0
                                                    })
                                                }
                                                function r(t) {
                                                    return t.split("?").length > 1 ? t.match(/([&?]+)x-oss-process=/i) ? t = t.replace(/([&?]+)x-oss-process=/i, "$1x-oss-process=image/format,webp,") : t.match(/([&?]+)imageMogr2/i) ? t = t.replace(/([&?]+)imageMogr2\//i, "$1imageMogr2/format/webp/") : t += c.webp.replace("?", "&") : t += c.webp,
                                                    t
                                                }
                                                var l, d = this,
                                                c = {
                                                    threshold: 0,
                                                    failure_limit: 500,
                                                    event: "scroll",
                                                    effect: "show",
                                                    container: e,
                                                    data_attribute: "original",
                                                    skip_invisible: !1,
                                                    appear: null,
                                                    load: null,
                                                    webp: null,
                                                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                };
                                                /*!
                                    * Lazy Load - jQuery plugin for lazy loading images
                                    *
                                    * Copyright (c) 2007-2015 Mika Tuupola
                                    *
                                    * Licensed under the MIT license:
                                    *   http://www.opensource.org/licenses/mit-license.php
                                    *
                                    * Project home:
                                    *   http://www.appelsiini.net/projects/lazyload
                                    *
                                    * Version:  1.9.7
                                    *
                                    */
                                                return n && (void 0 !== n.failurelimit && (n.failure_limit = n.failurelimit, delete n.failurelimit), void 0 !== n.effectspeed && (n.effect_speed = n.effectspeed, delete n.effectspeed), t.extend(c, n)),
                                                l = void 0 === c.container || c.container === e ? o: t(c.container),
                                                0 === c.event.indexOf("scroll") && l.on(c.event,
                                                function() {
                                                    return s()
                                                }),
                                                this.each(function() {
                                                    var e = this,
                                                    i = t(e);
                                                    e.loaded = !1,
                                                    void 0 !== i.attr("src") && !1 !== i.attr("src") || i.is("img") && i.attr("src", c.placeholder),
                                                    i.one("appear",
                                                    function() {
                                                        if (!this.loaded) {
                                                            if (c.appear) {
                                                                var n = d.length;
                                                                c.appear.call(e, n, c)
                                                            }
                                                            var o = i.attr("data-" + c.data_attribute);
                                                            a && c.webp && (o = r(o));
                                                            var s = i.attr("data-srcset"),
                                                            l = i.css("display");
                                                            t("<img />").one("load",
                                                            function() {
                                                                i.hide(),
                                                                i.is("img") ? (s && i.attr("srcset", s), i.attr("src", o)) : i.css("background-image", "url('" + o + "')"),
                                                                i[c.effect](c.effect_speed).css("display", l),
                                                                e.loaded = !0;
                                                                var n = t.grep(d,
                                                                function(t) {
                                                                    return ! t.loaded
                                                                });
                                                                if (d = t(n), c.load) {
                                                                    var a = d.length;
                                                                    c.load.call(e, a, c)
                                                                }
                                                                i.trigger("DOMSubtreeModified")
                                                            }).attr("src", o)
                                                        }
                                                    }),
                                                    0 !== c.event.indexOf("scroll") && i.on(c.event,
                                                    function() {
                                                        e.loaded || i.trigger("appear")
                                                    })
                                                }),
                                                o.on("resize",
                                                function() {
                                                    s()
                                                }),
                                                /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.on("pageshow",
                                                function(e) {
                                                    e.originalEvent && e.originalEvent.persisted && d.each(function() {
                                                        t(this).trigger("appear")
                                                    })
                                                }),
                                                t(i).ready(function() {
                                                    s()
                                                }),
                                                this
                                            },
                                            t.belowthefold = function(i, n) {
                                                return (void 0 === n.container || n.container === e ? (e.innerHeight ? e.innerHeight: o.height()) + o.scrollTop() : t(n.container).offset().top + t(n.container).height()) <= t(i).offset().top - n.threshold
                                            },
                                            t.rightoffold = function(i, n) {
                                                return (void 0 === n.container || n.container === e ? o.width() + o.scrollLeft() : t(n.container).offset().left + t(n.container).width()) <= t(i).offset().left - n.threshold
                                            },
                                            t.abovethetop = function(i, n) {
                                                return (void 0 === n.container || n.container === e ? o.scrollTop() : t(n.container).offset().top) >= t(i).offset().top + n.threshold + t(i).height()
                                            },
                                            t.leftofbegin = function(i, n) {
                                                return (void 0 === n.container || n.container === e ? o.scrollLeft() : t(n.container).offset().left) >= t(i).offset().left + n.threshold + t(i).width()
                                            },
                                            t.inviewport = function(e, i) {
                                                return ! (t.rightoffold(e, i) || t.leftofbegin(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
                                            },
                                            t.extend(t.expr[":"], {
                                                "below-the-fold": function(e) {
                                                    return t.belowthefold(e, {
                                                        threshold: 0
                                                    })
                                                },
                                                "above-the-top": function(e) {
                                                    return ! t.belowthefold(e, {
                                                        threshold: 0
                                                    })
                                                },
                                                "right-of-screen": function(e) {
                                                    return t.rightoffold(e, {
                                                        threshold: 0
                                                    })
                                                },
                                                "left-of-screen": function(e) {
                                                    return ! t.rightoffold(e, {
                                                        threshold: 0
                                                    })
                                                },
                                                "in-viewport": function(e) {
                                                    return t.inviewport(e, {
                                                        threshold: 0
                                                    })
                                                },
                                                "above-the-fold": function(e) {
                                                    return ! t.belowthefold(e, {
                                                        threshold: 0
                                                    })
                                                },
                                                "right-of-fold": function(e) {
                                                    return t.rightoffold(e, {
                                                        threshold: 0
                                                    })
                                                },
                                                "left-of-fold": function(e) {
                                                    return ! t.rightoffold(e, {
                                                        threshold: 0
                                                    })
                                                }
                                            })
                                        } (jQuery, window, document)
                                    },
                                    {}],
                                    6 : [function(t, e, i) { !
                                        function(t) {
                                            t.fn.qrcode = function(e) {
                                                function i(t) {
                                                    this.mode = r,
                                                    this.data = t
                                                }
                                                function n(t, e) {
                                                    this.typeNumber = t,
                                                    this.errorCorrectLevel = e,
                                                    this.modules = null,
                                                    this.moduleCount = 0,
                                                    this.dataCache = null,
                                                    this.dataList = []
                                                }
                                                function o(t, e) {
                                                    if (void 0 == t.length) throw Error(t.length + "/" + e);
                                                    for (var i = 0; i < t.length && 0 == t[i];) i++;
                                                    this.num = Array(t.length - i + e);
                                                    for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
                                                }
                                                function a(t, e) {
                                                    this.totalCount = t,
                                                    this.dataCount = e
                                                }
                                                function s() {
                                                    this.buffer = [],
                                                    this.length = 0
                                                }
                                                var r;
                                                i.prototype = {
                                                    getLength: function() {
                                                        return this.data.length
                                                    },
                                                    write: function(t) {
                                                        for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
                                                    }
                                                },
                                                n.prototype = {
                                                    addData: function(t) {
                                                        this.dataList.push(new i(t)),
                                                        this.dataCache = null
                                                    },
                                                    isDark: function(t, e) {
                                                        if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw Error(t + "," + e);
                                                        return this.modules[t][e]
                                                    },
                                                    getModuleCount: function() {
                                                        return this.moduleCount
                                                    },
                                                    make: function() {
                                                        if (1 > this.typeNumber) {
                                                            for (var t = 1,
                                                            t = 1; 40 > t; t++) {
                                                                for (var e = a.getRSBlocks(t, this.errorCorrectLevel), i = new s, n = 0, o = 0; o < e.length; o++) n += e[o].dataCount;
                                                                for (o = 0; o < this.dataList.length; o++) e = this.dataList[o],
                                                                i.put(e.mode, 4),
                                                                i.put(e.getLength(), l.getLengthInBits(e.mode, t)),
                                                                e.write(i);
                                                                if (i.getLengthInBits() <= 8 * n) break
                                                            }
                                                            this.typeNumber = t
                                                        }
                                                        this.makeImpl(!1, this.getBestMaskPattern())
                                                    },
                                                    makeImpl: function(t, e) {
                                                        this.moduleCount = 4 * this.typeNumber + 17,
                                                        this.modules = Array(this.moduleCount);
                                                        for (var i = 0; i < this.moduleCount; i++) {
                                                            this.modules[i] = Array(this.moduleCount);
                                                            for (var o = 0; o < this.moduleCount; o++) this.modules[i][o] = null
                                                        }
                                                        this.setupPositionProbePattern(0, 0),
                                                        this.setupPositionProbePattern(this.moduleCount - 7, 0),
                                                        this.setupPositionProbePattern(0, this.moduleCount - 7),
                                                        this.setupPositionAdjustPattern(),
                                                        this.setupTimingPattern(),
                                                        this.setupTypeInfo(t, e),
                                                        7 <= this.typeNumber && this.setupTypeNumber(t),
                                                        null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                                                        this.mapData(this.dataCache, e)
                                                    },
                                                    setupPositionProbePattern: function(t, e) {
                                                        for (var i = -1; 7 >= i; i++) if (! ( - 1 >= t + i || this.moduleCount <= t + i)) for (var n = -1; 7 >= n; n++) - 1 >= e + n || this.moduleCount <= e + n || (this.modules[t + i][e + n] = 0 <= i && 6 >= i && (0 == n || 6 == n) || 0 <= n && 6 >= n && (0 == i || 6 == i) || 2 <= i && 4 >= i && 2 <= n && 4 >= n)
                                                    },
                                                    getBestMaskPattern: function() {
                                                        for (var t = 0,
                                                        e = 0,
                                                        i = 0; 8 > i; i++) {
                                                            this.makeImpl(!0, i);
                                                            var n = l.getLostPoint(this); (0 == i || t > n) && (t = n, e = i)
                                                        }
                                                        return e
                                                    },
                                                    createMovieClip: function(t, e, i) {
                                                        for (t = t.createEmptyMovieClip(e, i), this.make(), e = 0; e < this.modules.length; e++) for (var i = 1 * e,
                                                        n = 0; n < this.modules[e].length; n++) {
                                                            var o = 1 * n;
                                                            this.modules[e][n] && (t.beginFill(0, 100), t.moveTo(o, i), t.lineTo(o + 1, i), t.lineTo(o + 1, i + 1), t.lineTo(o, i + 1), t.endFill())
                                                        }
                                                        return t
                                                    },
                                                    setupTimingPattern: function() {
                                                        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
                                                        for (t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
                                                    },
                                                    setupPositionAdjustPattern: function() {
                                                        for (var t = l.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
                                                            var n = t[e],
                                                            o = t[i];
                                                            if (null == this.modules[n][o]) for (var a = -2; 2 >= a; a++) for (var s = -2; 2 >= s; s++) this.modules[n + a][o + s] = -2 == a || 2 == a || -2 == s || 2 == s || 0 == a && 0 == s
                                                        }
                                                    },
                                                    setupTypeNumber: function(t) {
                                                        for (var e = l.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
                                                            var n = !t && 1 == (e >> i & 1);
                                                            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
                                                        }
                                                        for (i = 0; 18 > i; i++) n = !t && 1 == (e >> i & 1),
                                                        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
                                                    },
                                                    setupTypeInfo: function(t, e) {
                                                        for (var i = l.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), n = 0; 15 > n; n++) {
                                                            var o = !t && 1 == (i >> n & 1);
                                                            6 > n ? this.modules[n][8] = o: 8 > n ? this.modules[n + 1][8] = o: this.modules[this.moduleCount - 15 + n][8] = o
                                                        }
                                                        for (n = 0; 15 > n; n++) o = !t && 1 == (i >> n & 1),
                                                        8 > n ? this.modules[8][this.moduleCount - n - 1] = o: 9 > n ? this.modules[8][15 - n - 1 + 1] = o: this.modules[8][15 - n - 1] = o;
                                                        this.modules[this.moduleCount - 8][8] = !t
                                                    },
                                                    mapData: function(t, e) {
                                                        for (var i = -1,
                                                        n = this.moduleCount - 1,
                                                        o = 7,
                                                        a = 0,
                                                        s = this.moduleCount - 1; 0 < s; s -= 2) for (6 == s && s--;;) {
                                                            for (var r = 0; 2 > r; r++) if (null == this.modules[n][s - r]) {
                                                                var d = !1;
                                                                a < t.length && (d = 1 == (t[a] >>> o & 1)),
                                                                l.getMask(e, n, s - r) && (d = !d),
                                                                this.modules[n][s - r] = d,
                                                                o--,
                                                                -1 == o && (a++, o = 7)
                                                            }
                                                            if (0 > (n += i) || this.moduleCount <= n) {
                                                                n -= i,
                                                                i = -i;
                                                                break
                                                            }
                                                        }
                                                    }
                                                },
                                                n.PAD0 = 236,
                                                n.PAD1 = 17,
                                                n.createData = function(t, e, i) {
                                                    for (var e = a.getRSBlocks(t, e), o = new s, r = 0; r < i.length; r++) {
                                                        var d = i[r];
                                                        o.put(d.mode, 4),
                                                        o.put(d.getLength(), l.getLengthInBits(d.mode, t)),
                                                        d.write(o)
                                                    }
                                                    for (r = t = 0; r < e.length; r++) t += e[r].dataCount;
                                                    if (o.getLengthInBits() > 8 * t) throw Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * t + ")");
                                                    for (o.getLengthInBits() + 4 <= 8 * t && o.put(0, 4); 0 != o.getLengthInBits() % 8;) o.putBit(!1);
                                                    for (; ! (o.getLengthInBits() >= 8 * t) && (o.put(n.PAD0, 8), !(o.getLengthInBits() >= 8 * t));) o.put(n.PAD1, 8);
                                                    return n.createBytes(o, e)
                                                },
                                                n.createBytes = function(t, e) {
                                                    for (var i = 0,
                                                    n = 0,
                                                    a = 0,
                                                    s = Array(e.length), r = Array(e.length), d = 0; d < e.length; d++) {
                                                        var c = e[d].dataCount,
                                                        u = e[d].totalCount - c,
                                                        n = Math.max(n, c),
                                                        a = Math.max(a, u);
                                                        s[d] = Array(c);
                                                        for (var h = 0; h < s[d].length; h++) s[d][h] = 255 & t.buffer[h + i];
                                                        for (i += c, h = l.getErrorCorrectPolynomial(u), c = new o(s[d], h.getLength() - 1).mod(h), r[d] = Array(h.getLength() - 1), h = 0; h < r[d].length; h++) u = h + c.getLength() - r[d].length,
                                                        r[d][h] = 0 <= u ? c.get(u) : 0
                                                    }
                                                    for (h = d = 0; h < e.length; h++) d += e[h].totalCount;
                                                    for (i = Array(d), h = c = 0; h < n; h++) for (d = 0; d < e.length; d++) h < s[d].length && (i[c++] = s[d][h]);
                                                    for (h = 0; h < a; h++) for (d = 0; d < e.length; d++) h < r[d].length && (i[c++] = r[d][h]);
                                                    return i
                                                },
                                                r = 4;
                                                for (var l = {
                                                    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                                                    G15: 1335,
                                                    G18: 7973,
                                                    G15_MASK: 21522,
                                                    getBCHTypeInfo: function(t) {
                                                        for (var e = t << 10; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G15);) e ^= l.G15 << l.getBCHDigit(e) - l.getBCHDigit(l.G15);
                                                        return (t << 10 | e) ^ l.G15_MASK
                                                    },
                                                    getBCHTypeNumber: function(t) {
                                                        for (var e = t << 12; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G18);) e ^= l.G18 << l.getBCHDigit(e) - l.getBCHDigit(l.G18);
                                                        return t << 12 | e
                                                    },
                                                    getBCHDigit: function(t) {
                                                        for (var e = 0; 0 != t;) e++,
                                                        t >>>= 1;
                                                        return e
                                                    },
                                                    getPatternPosition: function(t) {
                                                        return l.PATTERN_POSITION_TABLE[t - 1]
                                                    },
                                                    getMask: function(t, e, i) {
                                                        switch (t) {
                                                        case 0:
                                                            return 0 == (e + i) % 2;
                                                        case 1:
                                                            return 0 == e % 2;
                                                        case 2:
                                                            return 0 == i % 3;
                                                        case 3:
                                                            return 0 == (e + i) % 3;
                                                        case 4:
                                                            return 0 == (Math.floor(e / 2) + Math.floor(i / 3)) % 2;
                                                        case 5:
                                                            return 0 == e * i % 2 + e * i % 3;
                                                        case 6:
                                                            return 0 == (e * i % 2 + e * i % 3) % 2;
                                                        case 7:
                                                            return 0 == (e * i % 3 + (e + i) % 2) % 2;
                                                        default:
                                                            throw Error("bad maskPattern:" + t)
                                                        }
                                                    },
                                                    getErrorCorrectPolynomial: function(t) {
                                                        for (var e = new o([1], 0), i = 0; i < t; i++) e = e.multiply(new o([1, d.gexp(i)], 0));
                                                        return e
                                                    },
                                                    getLengthInBits: function(t, e) {
                                                        if (1 <= e && 10 > e) switch (t) {
                                                        case 1:
                                                            return 10;
                                                        case 2:
                                                            return 9;
                                                        case r:
                                                        case 8:
                                                            return 8;
                                                        default:
                                                            throw Error("mode:" + t)
                                                        } else if (27 > e) switch (t) {
                                                        case 1:
                                                            return 12;
                                                        case 2:
                                                            return 11;
                                                        case r:
                                                            return 16;
                                                        case 8:
                                                            return 10;
                                                        default:
                                                            throw Error("mode:" + t)
                                                        } else {
                                                            if (! (41 > e)) throw Error("type:" + e);
                                                            switch (t) {
                                                            case 1:
                                                                return 14;
                                                            case 2:
                                                                return 13;
                                                            case r:
                                                                return 16;
                                                            case 8:
                                                                return 12;
                                                            default:
                                                                throw Error("mode:" + t)
                                                            }
                                                        }
                                                    },
                                                    getLostPoint: function(t) {
                                                        for (var e = t.getModuleCount(), i = 0, n = 0; n < e; n++) for (var o = 0; o < e; o++) {
                                                            for (var a = 0,
                                                            s = t.isDark(n, o), r = -1; 1 >= r; r++) if (! (0 > n + r || e <= n + r)) for (var l = -1; 1 >= l; l++) 0 > o + l || e <= o + l || 0 == r && 0 == l || s == t.isDark(n + r, o + l) && a++;
                                                            5 < a && (i += 3 + a - 5)
                                                        }
                                                        for (n = 0; n < e - 1; n++) for (o = 0; o < e - 1; o++) a = 0,
                                                        t.isDark(n, o) && a++,
                                                        t.isDark(n + 1, o) && a++,
                                                        t.isDark(n, o + 1) && a++,
                                                        t.isDark(n + 1, o + 1) && a++,
                                                        (0 == a || 4 == a) && (i += 3);
                                                        for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (i += 40);
                                                        for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (i += 40);
                                                        for (o = a = 0; o < e; o++) for (n = 0; n < e; n++) t.isDark(n, o) && a++;
                                                        return t = Math.abs(100 * a / e / e - 50) / 5,
                                                        i + 10 * t
                                                    }
                                                },
                                                d = {
                                                    glog: function(t) {
                                                        if (1 > t) throw Error("glog(" + t + ")");
                                                        return d.LOG_TABLE[t]
                                                    },
                                                    gexp: function(t) {
                                                        for (; 0 > t;) t += 255;
                                                        for (; 256 <= t;) t -= 255;
                                                        return d.EXP_TABLE[t]
                                                    },
                                                    EXP_TABLE: Array(256),
                                                    LOG_TABLE: Array(256)
                                                },
                                                c = 0; 8 > c; c++) d.EXP_TABLE[c] = 1 << c;
                                                for (c = 8; 256 > c; c++) d.EXP_TABLE[c] = d.EXP_TABLE[c - 4] ^ d.EXP_TABLE[c - 5] ^ d.EXP_TABLE[c - 6] ^ d.EXP_TABLE[c - 8];
                                                for (c = 0; 255 > c; c++) d.LOG_TABLE[d.EXP_TABLE[c]] = c;
                                                return o.prototype = {
                                                    get: function(t) {
                                                        return this.num[t]
                                                    },
                                                    getLength: function() {
                                                        return this.num.length
                                                    },
                                                    multiply: function(t) {
                                                        for (var e = Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < t.getLength(); n++) e[i + n] ^= d.gexp(d.glog(this.get(i)) + d.glog(t.get(n)));
                                                        return new o(e, 0)
                                                    },
                                                    mod: function(t) {
                                                        if (0 > this.getLength() - t.getLength()) return this;
                                                        for (var e = d.glog(this.get(0)) - d.glog(t.get(0)), i = Array(this.getLength()), n = 0; n < this.getLength(); n++) i[n] = this.get(n);
                                                        for (n = 0; n < t.getLength(); n++) i[n] ^= d.gexp(d.glog(t.get(n)) + e);
                                                        return new o(i, 0).mod(t)
                                                    }
                                                },
                                                a.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                                                a.getRSBlocks = function(t, e) {
                                                    var i = a.getRsBlockTable(t, e);
                                                    if (void 0 == i) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                                                    for (var n = i.length / 3,
                                                    o = [], s = 0; s < n; s++) for (var r = i[3 * s + 0], l = i[3 * s + 1], d = i[3 * s + 2], c = 0; c < r; c++) o.push(new a(l, d));
                                                    return o
                                                },
                                                a.getRsBlockTable = function(t, e) {
                                                    switch (e) {
                                                    case 1:
                                                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                                                    case 0:
                                                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                                                    case 3:
                                                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                                                    case 2:
                                                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 3]
                                                    }
                                                },
                                                s.prototype = {
                                                    get: function(t) {
                                                        return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
                                                    },
                                                    put: function(t, e) {
                                                        for (var i = 0; i < e; i++) this.putBit(1 == (t >>> e - i - 1 & 1))
                                                    },
                                                    getLengthInBits: function() {
                                                        return this.length
                                                    },
                                                    putBit: function(t) {
                                                        var e = Math.floor(this.length / 8);
                                                        this.buffer.length <= e && this.buffer.push(0),
                                                        t && (this.buffer[e] |= 128 >>> this.length % 8),
                                                        this.length++
                                                    }
                                                },
                                                "string" == typeof e && (e = {
                                                    text: e
                                                }),
                                                e = t.extend({},
                                                {
                                                    render: "canvas",
                                                    width: 256,
                                                    height: 256,
                                                    typeNumber: -1,
                                                    correctLevel: 2,
                                                    background: "#ffffff",
                                                    foreground: "#000000"
                                                },
                                                e),
                                                this.each(function() {
                                                    var i;
                                                    if ("canvas" == e.render) {
                                                        i = new n(e.typeNumber, e.correctLevel),
                                                        i.addData(e.text),
                                                        i.make();
                                                        var o = document.createElement("canvas");
                                                        o.width = e.width,
                                                        o.height = e.height;
                                                        for (var a = o.getContext("2d"), s = e.width / i.getModuleCount(), r = e.height / i.getModuleCount(), l = 0; l < i.getModuleCount(); l++) for (var d = 0; d < i.getModuleCount(); d++) {
                                                            a.fillStyle = i.isDark(l, d) ? e.foreground: e.background;
                                                            var c = Math.ceil((d + 1) * s) - Math.floor(d * s),
                                                            u = Math.ceil((l + 1) * s) - Math.floor(l * s);
                                                            a.fillRect(Math.round(d * s), Math.round(l * r), c, u)
                                                        }
                                                    } else for (i = new n(e.typeNumber, e.correctLevel), i.addData(e.text), i.make(), o = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), a = e.width / i.getModuleCount(), s = e.height / i.getModuleCount(), r = 0; r < i.getModuleCount(); r++) for (l = t("<tr></tr>").css("height", s + "px").appendTo(o), d = 0; d < i.getModuleCount(); d++) t("<td></td>").css("width", a + "px").css("background-color", i.isDark(r, d) ? e.foreground: e.background).appendTo(l);
                                                    i = o,
                                                    jQuery(i).appendTo(this)
                                                })
                                            }
                                        } (jQuery)
                                    },
                                    {}],
                                    7 : [function(t, e, i) { !
                                        function(t) {
                                            t(document).ready(function() {
                                                "Microsoft Internet Explorer" == navigator.appName && "9." == navigator.appVersion.match(/9./i) && t(".edit-cover, .edit-avatar").hide();
                                                var e, i, n = 0;
                                                t(document).on("click", ".edit-avatar, .edit-cover",
                                                function(o) {
                                                    o.preventDefault(),
                                                    n = t(this).hasClass("edit-cover") ? 1 : 0,
                                                    i = t(this).data("user");
                                                    var a = cropperModal({
                                                        lg: n,
                                                        title: _wpcom_js.cropper.title,
                                                        desc: n ? _wpcom_js.cropper.desc_1: _wpcom_js.cropper.desc_0,
                                                        btn: _wpcom_js.cropper.btn,
                                                        loading: _wpcom_js.cropper.loading,
                                                        apply: _wpcom_js.cropper.apply,
                                                        cancel: _wpcom_js.cropper.cancel
                                                    });
                                                    t("#crop-modal").length ? t("#crop-modal").replaceWith(a) : t("body").append(a),
                                                    e && (e.destroy(), e = null, t(".crop-img-wrap").hide(), t(".crop-img-btn").show(), t("#crop-img").remove(), t(".crop-notice").text("")),
                                                    t("#crop-modal").modal("show")
                                                }).on("change", "#img-file",
                                                function(i) {
                                                    if (t(".crop-notice").text(""), !this.files.length) return ! 1;
                                                    if (this.files[0].size / 1024 > 5120) return alert(_wpcom_js.cropper.alert_size),
                                                    !1;
                                                    if (this.files[0].type.match(/image.*/)) {
                                                        var o;
                                                        o = window.URL.createObjectURL(this.files[0]),
                                                        t(".crop-img-wrap").append('<img id="crop-img" src="' + o + '">').show(),
                                                        t(".crop-img-btn").hide(),
                                                        e = new Cropper(document.getElementById("crop-img"), {
                                                            aspectRatio: n ? 2.7 : 1,
                                                            minContainerHeight: 300,
                                                            viewMode: n ? 3 : 1,
                                                            ready: function() {
                                                                var t = {
                                                                    width: 300,
                                                                    height: 300
                                                                };
                                                                n && (t = {
                                                                    width: 810,
                                                                    height: 300,
                                                                    left: 44
                                                                }),
                                                                e.setCropBoxData(t)
                                                            }
                                                        }),
                                                        t(this).val("")
                                                    } else alert(_wpcom_js.cropper.alert_filetype)
                                                }).on("click", ".j-crop-close",
                                                function() {
                                                    e && e.destroy(),
                                                    e = null,
                                                    t(".crop-img-wrap").hide(),
                                                    t(".crop-img-btn").show(),
                                                    t("#crop-img").remove(),
                                                    t(".crop-notice").text("")
                                                }).on("click", ".j-crop-apply",
                                                function() {
                                                    var o = t(this).button("loading"),
                                                    a = t(".crop-notice");
                                                    if (a.text(""), e) {
                                                        if (e.crop().cropped) {
                                                            var s = {
                                                                minWidth: 200,
                                                                minHeight: 200,
                                                                maxWidth: 600,
                                                                maxHeight: 600,
                                                                fillColor: "#fff",
                                                                imageSmoothingQuality: "high"
                                                            };
                                                            n && (s = {
                                                                minWidth: 810,
                                                                minHeight: 300,
                                                                maxWidth: 1620,
                                                                maxHeight: 600,
                                                                fillColor: "#fff",
                                                                imageSmoothingQuality: "high"
                                                            });
                                                            var r = t.extend(e.getCropBoxData(), s),
                                                            l = e.getCroppedCanvas(r).toDataURL("image/jpeg", 1);
                                                            if (l) {
                                                                var d = new FormData;
                                                                d.append("action", "wpcom_cropped_upload"),
                                                                d.append("nonce", t("#wpcom_cropper_nonce").val()),
                                                                d.append("image", l),
                                                                d.append("type", n),
                                                                i && d.append("user", i),
                                                                t.ajax(_wpcom_js.ajaxurl, {
                                                                    method: "POST",
                                                                    data: d,
                                                                    dataType: "json",
                                                                    processData: !1,
                                                                    contentType: !1,
                                                                    success: function(e) {
                                                                        "1" == e.result ? (n ? t(".wpcom-profile-head").css("background-image", "url(" + e.url + ")") : t(".member-account-avatar img.avatar,.wpcom-ph-avatar img.avatar,#j-user-wrap img.avatar").replaceWith('<img class="avatar photo" src="' + e.url + "?t=" + Date.parse(new Date) / 1e3 + '">'), t("#crop-modal").modal("hide")) : "-1" == e.result ? a.text(_wpcom_js.cropper.err_nonce) : "-2" == e.result ? a.text(_wpcom_js.cropper.err_fail) : "-3" == e.result && a.text(_wpcom_js.cropper.err_login),
                                                                        o.button("reset")
                                                                    },
                                                                    error: function() {
                                                                        alert(_wpcom_js.cropper.ajaxerr),
                                                                        o.button("reset")
                                                                    }
                                                                })
                                                            } else o.button("reset")
                                                        } else o.button("reset")
                                                    } else a.text(_wpcom_js.cropper.err_empty),
                                                    o.button("reset")
                                                })
                                            });
                                            var e = t("#j-user-wrap");
                                            e.length && t.ajax({
                                                type: "POST",
                                                url: _wpcom_js.ajaxurl,
                                                data: {
                                                    action: "wpcom_is_login"
                                                },
                                                dataType: "json",
                                                success: function(i) {
                                                    if (0 == i.result) {
                                                        var n = '<ul class="profile"><li class="menu-item dropdown"><a class="menu-item-user" href="' + (i.account ? i.account: i.url) + '"> ' + i.avatar + i.display_name + "</a>";
                                                        if (i.menus && i.menus.length) {
                                                            n += '<ul class="dropdown-menu">';
                                                            for (var o = 0; o < i.menus.length; o++) n += '<li><a href="' + i.menus[o].url + '">' + i.menus[o].title + "</a></li>";
                                                            n += "</ul>"
                                                        }
                                                        n += "</li></ul>",
                                                        e.html(n)
                                                    } else e.find(".login").addClass("cur");
                                                    i.wc && (i.wc.fragments && i.wc.fragments["a.cart-contents"] && t("header .shopping-cart").html(i.wc.fragments["a.cart-contents"]), setTimeout(function() {
                                                        i.wc.fragments && i.wc.fragments["div.widget_shopping_cart_content"] && t("header .shopping-cart").append(i.wc.fragments["div.widget_shopping_cart_content"])
                                                    },
                                                    100))
                                                }
                                            }),
                                            t(".social-login-wrap").on("submit", "#sl-form-create",
                                            function() {
                                                var e = t(this);
                                                if (e.find(".sl-input-submit.disabled").length) return ! 1;
                                                e.find(".sl-input-submit").addClass("disabled");
                                                for (var i = 0,
                                                n = e.find(".sl-input input"), o = 0; o < n.length; o++) {
                                                    var a = t(n[o]).val();
                                                    "" == t.trim(a) && (t(n[o]).addClass("error"), i = 1)
                                                }
                                                return i ? e.find(".sl-input-submit").removeClass("disabled") : t.ajax({
                                                    url: _wpcom_js.ajaxurl,
                                                    data: t(this).serialize() + "&action=wpcom_sl_login",
                                                    type: "POST",
                                                    dataType: "json",
                                                    success: function(t) {
                                                        e.find(".sl-input-submit").removeClass("disabled"),
                                                        "-1" == t ? e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error") : "1" == t.result ? e.find(".sl-result").text("ç”¨æˆ·åæˆ–å¯†ç ä¸èƒ½ä¸ºç©º").addClass("error") : "2" == t.result ? e.find(".sl-result").text("ç”¨æˆ·åæˆ–å¯†ç é”™è¯¯").addClass("error") : "3" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹åº”ç”¨æŽˆæƒå¤±è´¥ï¼Œè¯·é‡è¯•").addClass("error") : "4" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹å¸å·å·²ä¸Žæœ¬ç«™å…¶ä»–å¸å·ç»‘å®š").addClass("error") : "0" == t.result && (e.find(".sl-result").text("ç»‘å®šæˆåŠŸï¼").removeClass("error"), setTimeout(function() {
                                                            window.location.href = t.redirect
                                                        },
                                                        100))
                                                    },
                                                    error: function(t) {
                                                        e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error"),
                                                        e.find(".sl-input-submit").removeClass("disabled")
                                                    }
                                                }),
                                                !1
                                            }).on("submit", "#sl-form-bind",
                                            function() {
                                                var e = t(this);
                                                if (e.find(".sl-input-submit.disabled").length) return ! 1;
                                                e.find(".sl-input-submit").addClass("disabled");
                                                for (var i = 0,
                                                n = e.find(".sl-input input"), o = 0; o < n.length; o++) {
                                                    var a = t(n[o]).val();
                                                    "" == t.trim(a) && (t(n[o]).addClass("error"), i = 1)
                                                }
                                                return i ? e.find(".sl-input-submit").removeClass("disabled") : t.ajax({
                                                    url: _wpcom_js.ajaxurl,
                                                    data: t(this).serialize() + "&action=wpcom_sl_create",
                                                    type: "POST",
                                                    dataType: "json",
                                                    success: function(t) {
                                                        "-1" == t ? e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error") : "1" == t.result ? e.find(".sl-result").text("è¯·è¾“å…¥ç”µå­é‚®ç®±").addClass("error") : "2" == t.result ? e.find(".sl-result").text("è¯·è¾“å…¥æ­£ç¡®çš„ç”µå­é‚®ç®±").addClass("error") : "3" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹åº”ç”¨æŽˆæƒå¤±è´¥ï¼Œè¯·é‡è¯•").addClass("error") : "4" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹å¸å·å·²ä¸Žæœ¬ç«™å…¶ä»–å¸å·ç»‘å®š").addClass("error") : "5" == t.result ? e.find(".sl-result").text("è¯¥é‚®ç®±å·²è¢«æ³¨å†Œ").addClass("error") : "0" == t.result ? (e.find(".sl-result").text("æ³¨å†ŒæˆåŠŸï¼").removeClass("error"), setTimeout(function() {
                                                            window.location.href = t.redirect
                                                        },
                                                        100)) : t.result && t.msg && e.find(".sl-result").text(t.msg).addClass("error"),
                                                        e.find(".sl-input-submit").removeClass("disabled")
                                                    },
                                                    error: function(t) {
                                                        e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error"),
                                                        e.find(".sl-input-submit").removeClass("disabled")
                                                    }
                                                }),
                                                !1
                                            }).on("input change", ".sl-input input",
                                            function() {
                                                var e = t(this);
                                                e.removeClass("error"),
                                                e.closest(".sl-info-form").find(".sl-result").text("")
                                            }).on("click", ".sl-form-title",
                                            function() {
                                                var e = t(this).closest(".sl-form-item");
                                                t(".sl-form-item").removeClass("active"),
                                                e.addClass("active")
                                            })
                                        } (jQuery)
                                    },
                                    {}],
                                    8 : [function(t, e, i) {
                                        e.exports = function(t) {
                                            function e(t, e, i, n, o) {
                                                for (var a = 0,
                                                s = 0,
                                                r = 0,
                                                l = 0; l < t.length; l++) r = o.measureText(t[l]).width,
                                                a += r,
                                                a > 560 && (o.fillText(t.substring(s, l), e, i), i += n, a = 0, s = l),
                                                l == t.length - 1 && (o.fillText(t.substring(s, l + 1), e, i), i += n);
                                                return i
                                            } !
                                            function() {
                                                var i = document.createElement("canvas"),
                                                n = i.getContext("2d");
                                                i.width = 640,
                                                i.height = 1e4;
                                                var o = 0;
                                                n.fillStyle = "#fff",
                                                n.fillRect(0, 0, i.width, i.height);
                                                var a = new Image;
                                                a.crossOrigin = "anonymous",
                                                t.head.match(/^\/\//) && (t.head = window.location.protocol + t.head),
                                                a.src = t.head,
                                                a.onerror = function(t) {
                                                    alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                                                    $(".mobile-share-bg,.mobile-share-wrap").remove()
                                                },
                                                a.onload = function() {
                                                    o += 640 / a.width * a.height,
                                                    n.drawImage(this, 0, 0, a.width, a.height, 0, 0, 640, 640 / a.width * a.height);
                                                    var s = new Date(1e3 * t.timestamp),
                                                    r = s.getDate(),
                                                    l = s.getFullYear(),
                                                    d = s.getMonth() + 1;
                                                    r = r < 10 ? "0" + r: "" + r,
                                                    d = d < 10 ? "0" + d: "" + d,
                                                    d = l + "/" + d;
                                                    var c = 0,
                                                    u = 0;
                                                    n.fillStyle = "#fff",
                                                    n.textAlign = "center",
                                                    n.font = "68px PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif";
                                                    for (var h = 0; h < r.length; h++) c += n.measureText(r[h]).width;
                                                    n.fillText(r, 80, o - 72),
                                                    n.fillStyle = "#fff",
                                                    n.textAlign = "center",
                                                    n.font = "30px PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif";
                                                    for (var h = 0; h < d.length; h++) u += n.measureText(d[h]).width;
                                                    n.fillText(d, 80, o - 28);
                                                    var p = parseInt(u > c ? u: c);
                                                    n.moveTo(80 - p / 2, o - 60),
                                                    n.lineTo(80 - p / 2 + p, o - 60),
                                                    n.lineWidth = 1,
                                                    n.strokeStyle = "rgba(255,255,255, 1)",
                                                    n.stroke(),
                                                    n.fillStyle = "#000",
                                                    n.textAlign = "center",
                                                    n.font = "600 36px serif",
                                                    o += 80,
                                                    o = e(jQuery("<div>").html(t.title).text(), 320, o, 50, n),
                                                    n.textAlign = "left",
                                                    n.fillStyle = "#333",
                                                    n.font = "300 26px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif",
                                                    o += 30,
                                                    o = e(jQuery("<div>").html(t.excerpt).text(), 30, o, 42, n),
                                                    o += 100,
                                                    n.lineWidth = 1,
                                                    n.beginPath(),
                                                    n.setLineDash([7, 7]),
                                                    n.strokeStyle = "#ccc",
                                                    n.moveTo(0, o),
                                                    n.lineTo(640, o),
                                                    n.stroke();
                                                    var f = new Image;
                                                    f.crossOrigin = "anonymous",
                                                    t.logo.match(/^\/\//) && (t.logo = window.location.protocol + t.logo),
                                                    f.src = t.logo,
                                                    f.onerror = function(t) {
                                                        alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                                                        $(".mobile-share-bg,.mobile-share-wrap").remove()
                                                    },
                                                    f.onload = function() {
                                                        o += 40;
                                                        var e = 400 / f.width * f.height;
                                                        e = e > 100 ? 100 : e;
                                                        var a = f.width / (f.height / e);
                                                        a = a > 400 ? 400 : a,
                                                        e = a / f.width * f.height,
                                                        n.drawImage(this, 0, 0, f.width, f.height, 30, o + (100 - e) / 2, a, e);
                                                        var s = new Image;
                                                        s.src = t.qrcode,
                                                        s.onerror = function(t) {
                                                            alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                                                            $(".mobile-share-bg,.mobile-share-wrap").remove()
                                                        },
                                                        s.onload = function() {
                                                            n.drawImage(this, 0, 0, s.width, s.height, 510, o, 100, 100 / s.width * s.height);
                                                            var a = 100 / s.width * s.height;
                                                            o += a > e ? a: e,
                                                            o += 40;
                                                            var r = n.getImageData(0, 0, 640, o);
                                                            i.height = o,
                                                            n.putImageData(r, 0, 0);
                                                            var l = i.toDataURL("image/jpeg", 1);
                                                            t.callback(l)
                                                        }
                                                    }
                                                }
                                            } ()
                                        }
                                    },
                                    {}],
                                    9 : [function(t, e, i) {
                                        t("../../../Themer/src/js/bootstrap"),
                                        t("../../../Themer/src/js/jquery.flexslider");
                                        var n = t("../../../Themer/src/js/text-image");
                                        t("../../../Themer/src/js/member"),
                                        t("../../../Themer/src/js/common"),
                                        t("../../../Themer/src/js/jquery.qrcode.min"),
                                        function(t) {
                                            function e() {
                                                d.offset().top + d.outerHeight() > i.scrollTop() + o ? (d.addClass("fixed"), d.find(".entry-bar-inner").css("width", t(".content").width())) : d.removeClass("fixed")
                                            }
                                            var i = t(window),
                                            o = i.height(),
                                            a = 0,
                                            s = void 0 !== _wpcom_js.webp && _wpcom_js.webp ? _wpcom_js.webp: null,
                                            r = t(".navbar-toggle").is(":hidden");
                                            i.resize(function() {
                                                r = t(".navbar-toggle").is(":hidden"),
                                                o = i.height()
                                            }),
                                            t(".main-slider").flexslider({
                                                animation: "slide",
                                                slideshowSpeed: _wpcom_js.slide_speed ? _wpcom_js.slide_speed: 5e3,
                                                pauseOnAction: !1,
                                                pauseOnHover: !0,
                                                touch: !0,
                                                useCSS: !1
                                            }),
                                            t(".woocommerce-product-gallery").flexslider({
                                                selector: ".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",
                                                rtl: !1,
                                                animation: "slide",
                                                smoothHeight: !1,
                                                directionNav: !1,
                                                controlNav: "thumbnails",
                                                slideshow: !1,
                                                animationSpeed: 500,
                                                animationLoop: !1,
                                                start: function() {
                                                    t(window).trigger("scroll")
                                                },
                                                after: function() {
                                                    t(window).trigger("scroll")
                                                }
                                            });
                                            var l = t(".sidebar");
                                            t(document).ready(function() {
                                                var e = t(".j-qrcode");
                                                e.length && t.each(e,
                                                function(e, i) {
                                                    var n = t(i),
                                                    o = n.data("text");
                                                    n.qrcode({
                                                        text: o
                                                    })
                                                }),
                                                t(".modules-navs").each(function(e, i) {
                                                    var n = t(i),
                                                    o = 0,
                                                    a = n.find(".list-navs>.navs-link");
                                                    a.outerHeight(""),
                                                    a.each(function(e, i) {
                                                        var n = t(i).outerHeight();
                                                        n > o && (o = n)
                                                    }),
                                                    a.outerHeight(o)
                                                });
                                                var a = t("#wrap"),
                                                s = a.height(),
                                                r = t("footer.footer"),
                                                d = t(".member-form-wrap");
                                                if (t(document).bind("DOMSubtreeModified",
                                                function() {
                                                    s = a.height(),
                                                    a.css("min-height", o - a.offset().top - r.outerHeight()),
                                                    d.length && t(".page-template-page-fullnotitle").length && (d.outerHeight(), d.css("margin-top", (s - d.outerHeight()) / 2))
                                                }), t(document).on("click", ".j-mobile-share",
                                                function() {
                                                    var e = t(this),
                                                    i = e.data("id");
                                                    t("body").append('<div class="mobile-share-bg"><div class="top_tips">è¯·é•¿æŒ‰å›¾ç‰‡ï¼Œå°†å†…å®¹æŽ¨èç»™å¥½å‹</div></div><div class="mobile-share-wrap"><div class="loading">åˆ†äº«å›¾ç‰‡ç”Ÿæˆä¸­...</div></div>'),
                                                    t.ajax({
                                                        url: _wpcom_js.ajaxurl,
                                                        data: {
                                                            id: i,
                                                            action: "wpcom_mobile_share"
                                                        },
                                                        method: "POST",
                                                        dataType: "json",
                                                        timeout: 1e4,
                                                        success: function(i) {
                                                            i.callback = function(e) {
                                                                t(".mobile-share-wrap").html('<img src="' + e + '"><div class="mobile-share-close">Ã—</div>'),
                                                                t(".mobile-share-bg .top_tips").show()
                                                            };
                                                            var o = t(".meta-item.wechat");
                                                            o = o.length ? o: e.closest(".kx-meta").next().find(".wechat-img"),
                                                            i.qrcode = o.find("canvas")[0].toDataURL(),
                                                            i.head && i.logo && i.qrcode ? n(i) : (alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"), t(".mobile-share-bg,.mobile-share-wrap").remove())
                                                        },
                                                        error: function() {
                                                            alert("èŽ·å–åˆ†äº«å›¾ç‰‡å¤±è´¥"),
                                                            t(".mobile-share-bg,.mobile-share-wrap").remove()
                                                        }
                                                    })
                                                }).on("click", ".mobile-share-close",
                                                function() {
                                                    t(".mobile-share-bg,.mobile-share-wrap").remove()
                                                }).on("click", ".kx-new",
                                                function() {
                                                    window.location.href = window.location.href
                                                }).on("click", ".widget-kx-list .kx-title",
                                                function() {
                                                    var e = t(this);
                                                    e.next().slideToggle("fast"),
                                                    e.closest(".kx-item").toggleClass("active"),
                                                    i.trigger("scroll")
                                                }), l.length && l.find(".widget").length && i.width() > 991) {
                                                    var c = l.offset().top,
                                                    u = 0,
                                                    h = 0,
                                                    p = 0,
                                                    r = t(t(".j-partner").length ? ".j-partner": "footer.footer");
                                                    t(document).bind("DOMSubtreeModified",
                                                    function() {
                                                        u = l.outerHeight(),
                                                        h = r.offset().top,
                                                        p = t(".content").outerHeight()
                                                    }),
                                                    i.scroll(function() {
                                                        if (! (p <= u)) {
                                                            var t = i.scrollTop();
                                                            o - c > u ? t + u + c > h ? l.removeClass("fixed").addClass("abs").css({
                                                                bottom: 0,
                                                                top: "auto"
                                                            }) : l.removeClass("abs").addClass("fixed").css({
                                                                bottom: "auto",
                                                                top: c
                                                            }) : t + o > h ? l.addClass("abs").removeClass("fixed") : t + o > c + u ? l.addClass("fixed").removeClass("abs") : l.removeClass("fixed").removeClass("abs")
                                                        }
                                                    })
                                                }
                                                var f = t(".kx-list");
                                                if (f.length) {
                                                    window.kxDate = f.find(".kx-date");
                                                    var m;
                                                    m = t("#wpadminbar").length ? t("#wpadminbar").outerHeight() + t("header.header").outerHeight() : t("header.header").outerHeight();
                                                    var g = kxDate.first().offset().top,
                                                    v = {
                                                        $el: null
                                                    },
                                                    b = t(".kx-new"),
                                                    w = kxDate.first().outerHeight();
                                                    i.scroll(function() {
                                                        var e = i.scrollTop(),
                                                        n = kxDate.length - 1;
                                                        t.each(kxDate,
                                                        function(i, o) {
                                                            var a = t(o),
                                                            s = a.offset().top - e - m;
                                                            return s > 0 && v.$el && v.top < 0 ? (kxDate.removeClass("fixed"), v.$el.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), void f.css("padding-top", w)) : 0 == i && s <= 0 ? (g - m >= e ? (kxDate.removeClass("fixed"), b.removeClass("fixed"), f.css("padding-top", 0)) : (kxDate.removeClass("fixed"), a.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), f.css("padding-top", w)), v.$el = a, void(v.top = s)) : (i == n && s <= 0 && (kxDate.removeClass("fixed"), a.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), f.css("padding-top", w)), v.$el = a, void(v.top = s))
                                                        })
                                                    }),
                                                    setInterval(function() {
                                                        var e = t(".kx-item").first().data("id");
                                                        t.ajax({
                                                            url: _wpcom_js.ajaxurl,
                                                            data: {
                                                                id: e,
                                                                action: "wpcom_new_kuaixun"
                                                            },
                                                            method: "POST",
                                                            dataType: "text",
                                                            success: function(e) {
                                                                e >= 1 && t(".kx-new").html("æ‚¨æœ‰" + e + "æ¡æ–°æ¶ˆæ¯ï¼").show()
                                                            }
                                                        })
                                                    },
                                                    1e4)
                                                }
                                                t(".kx-list,.widget-kx-list,.entry-footer").on("click", ".share-icon",
                                                function() {
                                                    var e = t(this),
                                                    i = e.closest(".kx-item"),
                                                    n = "";
                                                    if (i.length && i.closest(".widget-kx-list").length) {
                                                        var o = encodeURIComponent(t.trim(i.find(".kx-title").text())),
                                                        a = encodeURIComponent(t.trim(i.find(".kx-content p").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                                                        s = i.find(".kx-share").data("url"),
                                                        r = "";
                                                        i.find(".kx-content img").length && (r = encodeURIComponent(i.find(".kx-content img").attr("src")))
                                                    } else if (i.length && i.hasClass("entry-footer")) {
                                                        i = t(".entry");
                                                        var o = encodeURIComponent(t.trim(i.find(".entry-title").text())),
                                                        a = encodeURIComponent(t.trim(i.find(".entry-content").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                                                        s = encodeURIComponent(window.location.href),
                                                        r = "";
                                                        i.find(".entry-content img").length && (r = encodeURIComponent(i.find(".entry-content img").attr("src")))
                                                    } else if (i.length) {
                                                        var o = encodeURIComponent(t.trim(i.find("h2").text())),
                                                        a = encodeURIComponent(t.trim(i.find(".kx-content p").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                                                        s = e.closest(".kx-meta").data("url"),
                                                        r = "";
                                                        i.find(".kx-content img").length && (r = encodeURIComponent(i.find(".kx-content img").attr("src")))
                                                    }
                                                    if (e.hasClass("weibo")) n = "http://service.weibo.com/share/share.php?url=" + s + "&title=" + o + "&pic=" + r + "&searchPic=true";
                                                    else if (e.hasClass("qq")) n = "https://connect.qq.com/widget/shareqq/index.html?url=" + s + "&title=" + o + "&desc=" + a + "&summary=&site=&pics=" + r;
                                                    else if (e.hasClass("copy")) if (void 0 !== document.execCommand) {
                                                        var l = decodeURIComponent(o) + "\r\n" + decodeURIComponent(a) + "\r\n" + decodeURIComponent(s),
                                                        d = document.createElement("textarea");
                                                        d.value = l,
                                                        t("body").append(d),
                                                        d.style.position = "fixed",
                                                        d.style.height = 0,
                                                        d.select(),
                                                        document.execCommand("copy"),
                                                        d.remove(),
                                                        alert("å¤åˆ¶æˆåŠŸï¼")
                                                    } else alert("æµè§ˆå™¨æš‚ä¸æ”¯æŒæ‹·è´åŠŸèƒ½");
                                                    n && window.open(n)
                                                })
                                            }),
                                            t(".navbar-search").on("click", ".j-navbar-search",
                                            function() {
                                                var e = t(this).parent();
                                                r ? e.hasClass("active") ? e.submit() : (e.addClass("active"), e.find(".navbar-search-input").focus()) : e.submit()
                                            }).on("keydown", ".navbar-search-input",
                                            function() {
                                                t(this).parent().removeClass("warning")
                                            }).on("submit",
                                            function() {
                                                var e = t(this);
                                                if ("" == t.trim(e.find(".navbar-search-input").val())) return e.addClass("warning"),
                                                e.find(".navbar-search-input").focus(),
                                                !1
                                            }),
                                            t(document).on("click",
                                            function(e) {
                                                0 == t(e.target).closest(".navbar-search").length && t(".navbar-search").removeClass("active warning")
                                            }),
                                            t("#j-reading").on("click",
                                            function() {
                                                t("body").addClass("reading").append('<div class="reading-back" id="j-reading-back"><i class="fa fa-reply"></i></div>')
                                            }),
                                            t("body").on("click", "#j-reading-back",
                                            function() {
                                                t("body").removeClass("reading"),
                                                t(this).remove(),
                                                i.trigger("scroll")
                                            }),
                                            t(".entry").on("click", ".btn-zan",
                                            function() {
                                                var e = t(this);
                                                if (!e.hasClass("liked")) {
                                                    var i = e.data("id");
                                                    t.ajax({
                                                        type: "POST",
                                                        url: _wpcom_js.ajaxurl,
                                                        data: {
                                                            action: "wpcom_like_it",
                                                            id: i
                                                        },
                                                        dataType: "json",
                                                        success: function(t) {
                                                            0 == t.result ? e.addClass("liked").find("span").html("(" + t.likes + ")") : -2 == t.result && e.addClass("liked")
                                                        }
                                                    })
                                                }
                                            }).on("click", ".j-heart",
                                            function() {
                                                var e = t(this),
                                                i = e.data("id");
                                                t.ajax({
                                                    type: "POST",
                                                    url: _wpcom_js.ajaxurl,
                                                    data: {
                                                        action: "wpcom_heart_it",
                                                        id: i
                                                    },
                                                    dataType: "json",
                                                    success: function(i) {
                                                        0 == i.result ? e.addClass("hearted").find("span").html(i.favorites) : 1 == i.result ? e.removeClass("hearted").find("span").html(i.favorites) : -1 == i.result && t("#login-modal").modal()
                                                    }
                                                })
                                            }),
                                            t("#commentform").on("submit",
                                            function() {
                                                var e = t(".comment-form-comment textarea"),
                                                i = 0,
                                                n = 0,
                                                o = t(this).find("input.required");
                                                if ("" == t.trim(e.val()) && (e.addClass("error").focus(), n = 1, i = 1), o.each(function(e, o) {
                                                    var a = t(o);
                                                    "" == t.trim(a.val()) && (a.addClass("error"), 0 == n && (a.focus(), n = 1), i = 1)
                                                }), i) return ! 1
                                            }).on("keydown", ".required",
                                            function() {
                                                t(this).removeClass("error")
                                            }),
                                            t("#comments, #reviews").on("click", ".comment-must-login,#must-submit,.comment-reply-login",
                                            function() {
                                                return t("#login-modal").modal(),
                                                !1
                                            });
                                            var d = t(".entry-bar");
                                            d.length && i.width() > 767 && (e(), i.scroll(function() {
                                                e()
                                            })),
                                            t("#j-newslist").on("click", ".tab",
                                            function() {
                                                var e = t(this),
                                                i = e.parent(),
                                                n = t(".tab-list");
                                                i.find(".tab").removeClass("active"),
                                                e.addClass("active"),
                                                n.removeClass("active"),
                                                n.eq(e.index()).addClass("active");
                                                var o = e.find("a").data("id");
                                                o && 1 != e.data("loaded") && (n.eq(e.index()).addClass("loading"), t.ajax({
                                                    type: "POST",
                                                    url: _wpcom_js.ajaxurl,
                                                    data: {
                                                        action: "wpcom_load_posts",
                                                        id: o
                                                    },
                                                    dataType: "html",
                                                    success: function(i) {
                                                        if (n.eq(e.index()).removeClass("loading"), "0" == i) n.eq(e.index()).html('<li class="item"><p style="text-align: center;color:#999;margin:10px 0;">æš‚æ— å†…å®¹</p></li>');
                                                        else {
                                                            var o = t(i);
                                                            n.eq(e.index()).html(o),
                                                            o.find(".j-lazy").lazyload({
                                                                webp: s,
                                                                threshold: -50,
                                                                effect: "fadeIn"
                                                            }),
                                                            t(window).trigger("scroll")
                                                        }
                                                        e.data("loaded", 1)
                                                    },
                                                    error: function() {
                                                        n.eq(e.index()).html('<li class="item"><p style="text-align: center;color:#999;margin:10px 0;">åŠ è½½å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•ï¼</p></li>'),
                                                        n.eq(e.index()).removeClass("loading")
                                                    }
                                                }))
                                            }),
                                            t(".main").on("click", ".j-load-more, .j-user-posts, .j-user-comments, .j-user-favorites, .j-load-kx",
                                            function() {
                                                if (!a) {
                                                    a = 1;
                                                    var e = t(this);
                                                    if (e.hasClass("disabled")) return void(a = 0);
                                                    var i = null,
                                                    n = e.data("page");
                                                    if (n = n ? n + 1 : 2, e.hasClass("j-user-posts")) {
                                                        var o = t(".profile-posts-list").data("user");
                                                        i = {
                                                            action: "wpcom_user_posts",
                                                            user: o || 0,
                                                            page: n
                                                        }
                                                    } else if (e.hasClass("j-user-comments")) {
                                                        var o = t(".profile-comments-list").data("user");
                                                        i = {
                                                            action: "wpcom_user_comments",
                                                            user: o || 0,
                                                            page: n
                                                        }
                                                    } else if (e.hasClass("j-user-favorites")) {
                                                        var o = t(".profile-favorites-list").data("user");
                                                        i = {
                                                            action: "wpcom_user_favorites",
                                                            user: o || 0,
                                                            page: n
                                                        }
                                                    } else if (e.hasClass("j-load-kx")) i = {
                                                        action: "wpcom_load_kuaixun",
                                                        page: n
                                                    };
                                                    else {
                                                        var o = e.data("id");
                                                        i = {
                                                            action: "wpcom_load_posts",
                                                            id: o,
                                                            page: n
                                                        }
                                                    }
                                                    e.parent().addClass("loading"),
                                                    t.ajax({
                                                        type: "POST",
                                                        url: _wpcom_js.ajaxurl,
                                                        data: i,
                                                        dataType: "html",
                                                        success: function(i) {
                                                            if ("0" == i) e.addClass("disabled").text("å·²ç»åˆ°åº•äº†");
                                                            else {
                                                                var o = t(i);
                                                                if (e.hasClass("j-load-more")) e.parent().before(o);
                                                                else if (e.hasClass("j-load-kx")) {
                                                                    t(o[0]).text() == t(".kx-list .kx-date:last").text() && o.first().hide(),
                                                                    e.parent().before(o),
                                                                    e.parent().parent().find(".kx-date:hidden").remove(),
                                                                    window.kxDate = t(".kx-list .kx-date");
                                                                    var r = o.find(".j-qrcode");
                                                                    r.length && t.each(r,
                                                                    function(e, i) {
                                                                        var n = t(i),
                                                                        o = n.data("text");
                                                                        n.qrcode({
                                                                            text: o
                                                                        })
                                                                    })
                                                                } else e.parent().prev().append(o);
                                                                o.find(".j-lazy").lazyload({
                                                                    webp: s,
                                                                    threshold: -50,
                                                                    effect: "fadeIn"
                                                                }),
                                                                e.data("page", n),
                                                                t(window).trigger("scroll")
                                                            }
                                                            e.parent().removeClass("loading"),
                                                            a = 0
                                                        },
                                                        error: function() {
                                                            e.parent().removeClass("loading"),
                                                            a = 0
                                                        }
                                                    })
                                                }
                                            }),
                                            t(".special-wrap").on("click", ".load-more",
                                            function() {
                                                var e = t(this);
                                                if (!e.hasClass("disabled")) {
                                                    var i = e.data("page");
                                                    i = i ? i + 1 : 2,
                                                    e.parent().addClass("loading"),
                                                    t.ajax({
                                                        type: "POST",
                                                        url: _wpcom_js.ajaxurl,
                                                        data: {
                                                            action: "wpcom_load_special",
                                                            page: i
                                                        },
                                                        dataType: "html",
                                                        success: function(t) {
                                                            "0" == t ? e.addClass("disabled").text("å·²ç»åˆ°åº•äº†") : (e.closest(".special-wrap").find(".special-list").append(t), e.data("page", i)),
                                                            e.parent().removeClass("loading")
                                                        },
                                                        error: function() {
                                                            e.parent().removeClass("loading")
                                                        }
                                                    })
                                                }
                                            })
                                        } (jQuery)
                                    },
                                    {
                                        "../../../Themer/src/js/bootstrap": 1,
                                        "../../../Themer/src/js/common": 2,
                                        "../../../Themer/src/js/jquery.flexslider": 3,
                                        "../../../Themer/src/js/jquery.qrcode.min": 6,
                                        "../../../Themer/src/js/member": 7,
                                        "../../../Themer/src/js/text-image": 8
                                    }]
                                },
                                {},
                                [9]);
                            } else o.button("reset")
                        } else o.button("reset")
                    } else a.text(_wpcom_js.cropper.err_empty),
                    o.button("reset")
                })
            });
            var e = t("#j-user-wrap");
            e.length && t.ajax({
                type: "POST",
                url: _wpcom_js.ajaxurl,
                data: {
                    action: "wpcom_is_login"
                },
                dataType: "json",
                success: function(i) {
                    if (0 == i.result) {
                        var n = '<ul class="profile"><li class="menu-item dropdown"><a class="menu-item-user" href="' + (i.account ? i.account: i.url) + '"> ' + i.avatar + i.display_name + "</a>";
                        if (i.menus && i.menus.length) {
                            n += '<ul class="dropdown-menu">';
                            for (var o = 0; o < i.menus.length; o++) n += '<li><a href="' + i.menus[o].url + '">' + i.menus[o].title + "</a></li>";
                            n += "</ul>"
                        }
                        n += "</li></ul>",
                        e.html(n)
                    } else e.find(".login").addClass("cur");
                    i.wc && (i.wc.fragments && i.wc.fragments["a.cart-contents"] && t("header .shopping-cart").html(i.wc.fragments["a.cart-contents"]), setTimeout(function() {
                        i.wc.fragments && i.wc.fragments["div.widget_shopping_cart_content"] && t("header .shopping-cart").append(i.wc.fragments["div.widget_shopping_cart_content"])
                    },
                    100))
                }
            }),
            t(".social-login-wrap").on("submit", "#sl-form-create",
            function() {
                var e = t(this);
                if (e.find(".sl-input-submit.disabled").length) return ! 1;
                e.find(".sl-input-submit").addClass("disabled");
                for (var i = 0,
                n = e.find(".sl-input input"), o = 0; o < n.length; o++) {
                    var a = t(n[o]).val();
                    "" == t.trim(a) && (t(n[o]).addClass("error"), i = 1)
                }
                return i ? e.find(".sl-input-submit").removeClass("disabled") : t.ajax({
                    url: _wpcom_js.ajaxurl,
                    data: t(this).serialize() + "&action=wpcom_sl_login",
                    type: "POST",
                    dataType: "json",
                    success: function(t) {
                        e.find(".sl-input-submit").removeClass("disabled"),
                        "-1" == t ? e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error") : "1" == t.result ? e.find(".sl-result").text("ç”¨æˆ·åæˆ–å¯†ç ä¸èƒ½ä¸ºç©º").addClass("error") : "2" == t.result ? e.find(".sl-result").text("ç”¨æˆ·åæˆ–å¯†ç é”™è¯¯").addClass("error") : "3" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹åº”ç”¨æŽˆæƒå¤±è´¥ï¼Œè¯·é‡è¯•").addClass("error") : "4" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹å¸å·å·²ä¸Žæœ¬ç«™å…¶ä»–å¸å·ç»‘å®š").addClass("error") : "0" == t.result && (e.find(".sl-result").text("ç»‘å®šæˆåŠŸï¼").removeClass("error"), setTimeout(function() {
                            window.location.href = t.redirect
                        },
                        100))
                    },
                    error: function(t) {
                        e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error"),
                        e.find(".sl-input-submit").removeClass("disabled")
                    }
                }),
                !1
            }).on("submit", "#sl-form-bind",
            function() {
                var e = t(this);
                if (e.find(".sl-input-submit.disabled").length) return ! 1;
                e.find(".sl-input-submit").addClass("disabled");
                for (var i = 0,
                n = e.find(".sl-input input"), o = 0; o < n.length; o++) {
                    var a = t(n[o]).val();
                    "" == t.trim(a) && (t(n[o]).addClass("error"), i = 1)
                }
                return i ? e.find(".sl-input-submit").removeClass("disabled") : t.ajax({
                    url: _wpcom_js.ajaxurl,
                    data: t(this).serialize() + "&action=wpcom_sl_create",
                    type: "POST",
                    dataType: "json",
                    success: function(t) {
                        "-1" == t ? e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error") : "1" == t.result ? e.find(".sl-result").text("è¯·è¾“å…¥ç”µå­é‚®ç®±").addClass("error") : "2" == t.result ? e.find(".sl-result").text("è¯·è¾“å…¥æ­£ç¡®çš„ç”µå­é‚®ç®±").addClass("error") : "3" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹åº”ç”¨æŽˆæƒå¤±è´¥ï¼Œè¯·é‡è¯•").addClass("error") : "4" == t.result ? e.find(".sl-result").text("ç¬¬ä¸‰æ–¹å¸å·å·²ä¸Žæœ¬ç«™å…¶ä»–å¸å·ç»‘å®š").addClass("error") : "5" == t.result ? e.find(".sl-result").text("è¯¥é‚®ç®±å·²è¢«æ³¨å†Œ").addClass("error") : "0" == t.result ? (e.find(".sl-result").text("æ³¨å†ŒæˆåŠŸï¼").removeClass("error"), setTimeout(function() {
                            window.location.href = t.redirect
                        },
                        100)) : t.result && t.msg && e.find(".sl-result").text(t.msg).addClass("error"),
                        e.find(".sl-input-submit").removeClass("disabled")
                    },
                    error: function(t) {
                        e.find(".sl-result").text("è¯·æ±‚å‡ºé”™ï¼Œè¯·é‡è¯•ï¼").addClass("error"),
                        e.find(".sl-input-submit").removeClass("disabled")
                    }
                }),
                !1
            }).on("input change", ".sl-input input",
            function() {
                var e = t(this);
                e.removeClass("error"),
                e.closest(".sl-info-form").find(".sl-result").text("")
            }).on("click", ".sl-form-title",
            function() {
                var e = t(this).closest(".sl-form-item");
                t(".sl-form-item").removeClass("active"),
                e.addClass("active")
            })
        } (jQuery)
    },
    {}],
    8 : [function(t, e, i) {
        e.exports = function(t) {
            function e(t, e, i, n, o) {
                for (var a = 0,
                s = 0,
                r = 0,
                l = 0; l < t.length; l++) r = o.measureText(t[l]).width,
                a += r,
                a > 560 && (o.fillText(t.substring(s, l), e, i), i += n, a = 0, s = l),
                l == t.length - 1 && (o.fillText(t.substring(s, l + 1), e, i), i += n);
                return i
            } !
            function() {
                var i = document.createElement("canvas"),
                n = i.getContext("2d");
                i.width = 640,
                i.height = 1e4;
                var o = 0;
                n.fillStyle = "#fff",
                n.fillRect(0, 0, i.width, i.height);
                var a = new Image;
                a.crossOrigin = "anonymous",
                t.head.match(/^\/\//) && (t.head = window.location.protocol + t.head),
                a.src = t.head,
                a.onerror = function(t) {
                    alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                    $(".mobile-share-bg,.mobile-share-wrap").remove()
                },
                a.onload = function() {
                    o += 640 / a.width * a.height,
                    n.drawImage(this, 0, 0, a.width, a.height, 0, 0, 640, 640 / a.width * a.height);
                    var s = new Date(1e3 * t.timestamp),
                    r = s.getDate(),
                    l = s.getFullYear(),
                    d = s.getMonth() + 1;
                    r = r < 10 ? "0" + r: "" + r,
                    d = d < 10 ? "0" + d: "" + d,
                    d = l + "/" + d;
                    var c = 0,
                    u = 0;
                    n.fillStyle = "#fff",
                    n.textAlign = "center",
                    n.font = "68px PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif";
                    for (var h = 0; h < r.length; h++) c += n.measureText(r[h]).width;
                    n.fillText(r, 80, o - 72),
                    n.fillStyle = "#fff",
                    n.textAlign = "center",
                    n.font = "30px PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif";
                    for (var h = 0; h < d.length; h++) u += n.measureText(d[h]).width;
                    n.fillText(d, 80, o - 28);
                    var p = parseInt(u > c ? u: c);
                    n.moveTo(80 - p / 2, o - 60),
                    n.lineTo(80 - p / 2 + p, o - 60),
                    n.lineWidth = 1,
                    n.strokeStyle = "rgba(255,255,255, 1)",
                    n.stroke(),
                    n.fillStyle = "#000",
                    n.textAlign = "center",
                    n.font = "600 36px serif",
                    o += 80,
                    o = e(jQuery("<div>").html(t.title).text(), 320, o, 50, n),
                    n.textAlign = "left",
                    n.fillStyle = "#333",
                    n.font = "300 26px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif",
                    o += 30,
                    o = e(jQuery("<div>").html(t.excerpt).text(), 30, o, 42, n),
                    o += 100,
                    n.lineWidth = 1,
                    n.beginPath(),
                    n.setLineDash([7, 7]),
                    n.strokeStyle = "#ccc",
                    n.moveTo(0, o),
                    n.lineTo(640, o),
                    n.stroke();
                    var f = new Image;
                    f.crossOrigin = "anonymous",
                    t.logo.match(/^\/\//) && (t.logo = window.location.protocol + t.logo),
                    f.src = t.logo,
                    f.onerror = function(t) {
                        alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                        $(".mobile-share-bg,.mobile-share-wrap").remove()
                    },
                    f.onload = function() {
                        o += 40;
                        var e = 400 / f.width * f.height;
                        e = e > 100 ? 100 : e;
                        var a = f.width / (f.height / e);
                        a = a > 400 ? 400 : a,
                        e = a / f.width * f.height,
                        n.drawImage(this, 0, 0, f.width, f.height, 30, o + (100 - e) / 2, a, e);
                        var s = new Image;
                        s.src = t.qrcode,
                        s.onerror = function(t) {
                            alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"),
                            $(".mobile-share-bg,.mobile-share-wrap").remove()
                        },
                        s.onload = function() {
                            n.drawImage(this, 0, 0, s.width, s.height, 510, o, 100, 100 / s.width * s.height);
                            var a = 100 / s.width * s.height;
                            o += a > e ? a: e,
                            o += 40;
                            var r = n.getImageData(0, 0, 640, o);
                            i.height = o,
                            n.putImageData(r, 0, 0);
                            var l = i.toDataURL("image/jpeg", 1);
                            t.callback(l)
                        }
                    }
                }
            } ()
        }
    },
    {}],
    9 : [function(t, e, i) {
        t("../../../Themer/src/js/bootstrap"),
        t("../../../Themer/src/js/jquery.flexslider");
        var n = t("../../../Themer/src/js/text-image");
        t("../../../Themer/src/js/member"),
        t("../../../Themer/src/js/common"),
        t("../../../Themer/src/js/jquery.qrcode.min"),
        function(t) {
            function e() {
                d.offset().top + d.outerHeight() > i.scrollTop() + o ? (d.addClass("fixed"), d.find(".entry-bar-inner").css("width", t(".content").width())) : d.removeClass("fixed")
            }
            var i = t(window),
            o = i.height(),
            a = 0,
            s = void 0 !== _wpcom_js.webp && _wpcom_js.webp ? _wpcom_js.webp: null,
            r = t(".navbar-toggle").is(":hidden");
            i.resize(function() {
                r = t(".navbar-toggle").is(":hidden"),
                o = i.height()
            }),
            t(".main-slider").flexslider({
                animation: "slide",
                slideshowSpeed: _wpcom_js.slide_speed ? _wpcom_js.slide_speed: 5e3,
                pauseOnAction: !1,
                pauseOnHover: !0,
                touch: !0,
                useCSS: !1
            }),
            t(".woocommerce-product-gallery").flexslider({
                selector: ".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",
                rtl: !1,
                animation: "slide",
                smoothHeight: !1,
                directionNav: !1,
                controlNav: "thumbnails",
                slideshow: !1,
                animationSpeed: 500,
                animationLoop: !1,
                start: function() {
                    t(window).trigger("scroll")
                },
                after: function() {
                    t(window).trigger("scroll")
                }
            });
            var l = t(".sidebar");
            t(document).ready(function() {
                var e = t(".j-qrcode");
                e.length && t.each(e,
                function(e, i) {
                    var n = t(i),
                    o = n.data("text");
                    n.qrcode({
                        text: o
                    })
                }),
                t(".modules-navs").each(function(e, i) {
                    var n = t(i),
                    o = 0,
                    a = n.find(".list-navs>.navs-link");
                    a.outerHeight(""),
                    a.each(function(e, i) {
                        var n = t(i).outerHeight();
                        n > o && (o = n)
                    }),
                    a.outerHeight(o)
                });
                var a = t("#wrap"),
                s = a.height(),
                r = t("footer.footer"),
                d = t(".member-form-wrap");
                if (t(document).bind("DOMSubtreeModified",
                function() {
                    s = a.height(),
                    a.css("min-height", o - a.offset().top - r.outerHeight()),
                    d.length && t(".page-template-page-fullnotitle").length && (d.outerHeight(), d.css("margin-top", (s - d.outerHeight()) / 2))
                }), t(document).on("click", ".j-mobile-share",
                function() {
                    var e = t(this),
                    i = e.data("id");
                    t("body").append('<div class="mobile-share-bg"><div class="top_tips">è¯·é•¿æŒ‰å›¾ç‰‡ï¼Œå°†å†…å®¹æŽ¨èç»™å¥½å‹</div></div><div class="mobile-share-wrap"><div class="loading">åˆ†äº«å›¾ç‰‡ç”Ÿæˆä¸­...</div></div>'),
                    t.ajax({
                        url: _wpcom_js.ajaxurl,
                        data: {
                            id: i,
                            action: "wpcom_mobile_share"
                        },
                        method: "POST",
                        dataType: "json",
                        timeout: 1e4,
                        success: function(i) {
                            i.callback = function(e) {
                                t(".mobile-share-wrap").html('<img src="' + e + '"><div class="mobile-share-close">Ã—</div>'),
                                t(".mobile-share-bg .top_tips").show()
                            };
                            var o = t(".meta-item.wechat");
                            o = o.length ? o: e.closest(".kx-meta").next().find(".wechat-img"),
                            i.qrcode = o.find("canvas")[0].toDataURL(),
                            i.head && i.logo && i.qrcode ? n(i) : (alert("ç”Ÿæˆåˆ†äº«å›¾ç‰‡å¤±è´¥"), t(".mobile-share-bg,.mobile-share-wrap").remove())
                        },
                        error: function() {
                            alert("èŽ·å–åˆ†äº«å›¾ç‰‡å¤±è´¥"),
                            t(".mobile-share-bg,.mobile-share-wrap").remove()
                        }
                    })
                }).on("click", ".mobile-share-close",
                function() {
                    t(".mobile-share-bg,.mobile-share-wrap").remove()
                }).on("click", ".kx-new",
                function() {
                    window.location.href = window.location.href
                }).on("click", ".widget-kx-list .kx-title",
                function() {
                    var e = t(this);
                    e.next().slideToggle("fast"),
                    e.closest(".kx-item").toggleClass("active"),
                    i.trigger("scroll")
                }), l.length && l.find(".widget").length && i.width() > 991) {
                    var c = l.offset().top,
                    u = 0,
                    h = 0,
                    p = 0,
                    r = t(t(".j-partner").length ? ".j-partner": "footer.footer");
                    t(document).bind("DOMSubtreeModified",
                    function() {
                        u = l.outerHeight(),
                        h = r.offset().top,
                        p = t(".content").outerHeight()
                    }),
                    i.scroll(function() {
                        if (! (p <= u)) {
                            var t = i.scrollTop();
                            o - c > u ? t + u + c > h ? l.removeClass("fixed").addClass("abs").css({
                                bottom: 0,
                                top: "auto"
                            }) : l.removeClass("abs").addClass("fixed").css({
                                bottom: "auto",
                                top: c
                            }) : t + o > h ? l.addClass("abs").removeClass("fixed") : t + o > c + u ? l.addClass("fixed").removeClass("abs") : l.removeClass("fixed").removeClass("abs")
                        }
                    })
                }
                var f = t(".kx-list");
                if (f.length) {
                    window.kxDate = f.find(".kx-date");
                    var m;
                    m = t("#wpadminbar").length ? t("#wpadminbar").outerHeight() + t("header.header").outerHeight() : t("header.header").outerHeight();
                    var g = kxDate.first().offset().top,
                    v = {
                        $el: null
                    },
                    b = t(".kx-new"),
                    w = kxDate.first().outerHeight();
                    i.scroll(function() {
                        var e = i.scrollTop(),
                        n = kxDate.length - 1;
                        t.each(kxDate,
                        function(i, o) {
                            var a = t(o),
                            s = a.offset().top - e - m;
                            return s > 0 && v.$el && v.top < 0 ? (kxDate.removeClass("fixed"), v.$el.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), void f.css("padding-top", w)) : 0 == i && s <= 0 ? (g - m >= e ? (kxDate.removeClass("fixed"), b.removeClass("fixed"), f.css("padding-top", 0)) : (kxDate.removeClass("fixed"), a.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), f.css("padding-top", w)), v.$el = a, void(v.top = s)) : (i == n && s <= 0 && (kxDate.removeClass("fixed"), a.addClass("fixed").css("top", m), b.addClass("fixed").css("top", m + 36), f.css("padding-top", w)), v.$el = a, void(v.top = s))
                        })
                    }),
                    setInterval(function() {
                        var e = t(".kx-item").first().data("id");
                        t.ajax({
                            url: _wpcom_js.ajaxurl,
                            data: {
                                id: e,
                                action: "wpcom_new_kuaixun"
                            },
                            method: "POST",
                            dataType: "text",
                            success: function(e) {
                                e >= 1 && t(".kx-new").html("æ‚¨æœ‰" + e + "æ¡æ–°æ¶ˆæ¯ï¼").show()
                            }
                        })
                    },
                    1e4)
                }
                t(".kx-list,.widget-kx-list,.entry-footer").on("click", ".share-icon",
                function() {
                    var e = t(this),
                    i = e.closest(".kx-item"),
                    n = "";
                    if (i.length && i.closest(".widget-kx-list").length) {
                        var o = encodeURIComponent(t.trim(i.find(".kx-title").text())),
                        a = encodeURIComponent(t.trim(i.find(".kx-content p").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                        s = i.find(".kx-share").data("url"),
                        r = "";
                        i.find(".kx-content img").length && (r = encodeURIComponent(i.find(".kx-content img").attr("src")))
                    } else if (i.length && i.hasClass("entry-footer")) {
                        i = t(".entry");
                        var o = encodeURIComponent(t.trim(i.find(".entry-title").text())),
                        a = encodeURIComponent(t.trim(i.find(".entry-content").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                        s = encodeURIComponent(window.location.href),
                        r = "";
                        i.find(".entry-content img").length && (r = encodeURIComponent(i.find(".entry-content img").attr("src")))
                    } else if (i.length) {
                        var o = encodeURIComponent(t.trim(i.find("h2").text())),
                        a = encodeURIComponent(t.trim(i.find(".kx-content p").text()).replace("[åŽŸæ–‡é“¾æŽ¥]", "")),
                        s = e.closest(".kx-meta").data("url"),
                        r = "";
                        i.find(".kx-content img").length && (r = encodeURIComponent(i.find(".kx-content img").attr("src")))
                    }
                    if (e.hasClass("weibo")) n = "http://service.weibo.com/share/share.php?url=" + s + "&title=" + o + "&pic=" + r + "&searchPic=true";
                    else if (e.hasClass("qq")) n = "https://connect.qq.com/widget/shareqq/index.html?url=" + s + "&title=" + o + "&desc=" + a + "&summary=&site=&pics=" + r;
                    else if (e.hasClass("copy")) if (void 0 !== document.execCommand) {
                        var l = decodeURIComponent(o) + "\r\n" + decodeURIComponent(a) + "\r\n" + decodeURIComponent(s),
                        d = document.createElement("textarea");
                        d.value = l,
                        t("body").append(d),
                        d.style.position = "fixed",
                        d.style.height = 0,
                        d.select(),
                        document.execCommand("copy"),
                        d.remove(),
                        alert("å¤åˆ¶æˆåŠŸï¼")
                    } else alert("æµè§ˆå™¨æš‚ä¸æ”¯æŒæ‹·è´åŠŸèƒ½");
                    n && window.open(n)
                })
            }),
            t(".navbar-search").on("click", ".j-navbar-search",
            function() {
                var e = t(this).parent();
                r ? e.hasClass("active") ? e.submit() : (e.addClass("active"), e.find(".navbar-search-input").focus()) : e.submit()
            }).on("keydown", ".navbar-search-input",
            function() {
                t(this).parent().removeClass("warning")
            }).on("submit",
            function() {
                var e = t(this);
                if ("" == t.trim(e.find(".navbar-search-input").val())) return e.addClass("warning"),
                e.find(".navbar-search-input").focus(),
                !1
            }),
            t(document).on("click",
            function(e) {
                0 == t(e.target).closest(".navbar-search").length && t(".navbar-search").removeClass("active warning")
            }),
            t("#j-reading").on("click",
            function() {
                t("body").addClass("reading").append('<div class="reading-back" id="j-reading-back"><i class="fa fa-reply"></i></div>')
            }),
            t("body").on("click", "#j-reading-back",
            function() {
                t("body").removeClass("reading"),
                t(this).remove(),
                i.trigger("scroll")
            }),
            t(".entry").on("click", ".btn-zan",
            function() {
                var e = t(this);
                if (!e.hasClass("liked")) {
                    var i = e.data("id");
                    t.ajax({
                        type: "POST",
                        url: _wpcom_js.ajaxurl,
                        data: {
                            action: "wpcom_like_it",
                            id: i
                        },
                        dataType: "json",
                        success: function(t) {
                            0 == t.result ? e.addClass("liked").find("span").html("(" + t.likes + ")") : -2 == t.result && e.addClass("liked")
                        }
                    })
                }
            }).on("click", ".j-heart",
            function() {
                var e = t(this),
                i = e.data("id");
                t.ajax({
                    type: "POST",
                    url: _wpcom_js.ajaxurl,
                    data: {
                        action: "wpcom_heart_it",
                        id: i
                    },
                    dataType: "json",
                    success: function(i) {
                        0 == i.result ? e.addClass("hearted").find("span").html(i.favorites) : 1 == i.result ? e.removeClass("hearted").find("span").html(i.favorites) : -1 == i.result && t("#login-modal").modal()
                    }
                })
            }),
            t("#commentform").on("submit",
            function() {
                var e = t(".comment-form-comment textarea"),
                i = 0,
                n = 0,
                o = t(this).find("input.required");
                if ("" == t.trim(e.val()) && (e.addClass("error").focus(), n = 1, i = 1), o.each(function(e, o) {
                    var a = t(o);
                    "" == t.trim(a.val()) && (a.addClass("error"), 0 == n && (a.focus(), n = 1), i = 1)
                }), i) return ! 1
            }).on("keydown", ".required",
            function() {
                t(this).removeClass("error")
            }),
            t("#comments, #reviews").on("click", ".comment-must-login,#must-submit,.comment-reply-login",
            function() {
                return t("#login-modal").modal(),
                !1
            });
            var d = t(".entry-bar");
            d.length && i.width() > 767 && (e(), i.scroll(function() {
                e()
            })),
            t("#j-newslist").on("click", ".tab",
            function() {
                var e = t(this),
                i = e.parent(),
                n = t(".tab-list");
                i.find(".tab").removeClass("active"),
                e.addClass("active"),
                n.removeClass("active"),
                n.eq(e.index()).addClass("active");
                var o = e.find("a").data("id");
                o && 1 != e.data("loaded") && (n.eq(e.index()).addClass("loading"), t.ajax({
                    type: "POST",
                    url: _wpcom_js.ajaxurl,
                    data: {
                        action: "wpcom_load_posts",
                        id: o
                    },
                    dataType: "html",
                    success: function(i) {
                        if (n.eq(e.index()).removeClass("loading"), "0" == i) n.eq(e.index()).html('<li class="item"><p style="text-align: center;color:#999;margin:10px 0;">æš‚æ— å†…å®¹</p></li>');
                        else {
                            var o = t(i);
                            n.eq(e.index()).html(o),
                            o.find(".j-lazy").lazyload({
                                webp: s,
                                threshold: -50,
                                effect: "fadeIn"
                            }),
                            t(window).trigger("scroll")
                        }
                        e.data("loaded", 1)
                    },
                    error: function() {
                        n.eq(e.index()).html('<li class="item"><p style="text-align: center;color:#999;margin:10px 0;">åŠ è½½å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•ï¼</p></li>'),
                        n.eq(e.index()).removeClass("loading")
                    }
                }))
            }),
            t(".main").on("click", ".j-load-more, .j-user-posts, .j-user-comments, .j-user-favorites, .j-load-kx",
            function() {
                if (!a) {
                    a = 1;
                    var e = t(this);
                    if (e.hasClass("disabled")) return void(a = 0);
                    var i = null,
                    n = e.data("page");
                    if (n = n ? n + 1 : 2, e.hasClass("j-user-posts")) {
                        var o = t(".profile-posts-list").data("user");
                        i = {
                            action: "wpcom_user_posts",
                            user: o || 0,
                            page: n
                        }
                    } else if (e.hasClass("j-user-comments")) {
                        var o = t(".profile-comments-list").data("user");
                        i = {
                            action: "wpcom_user_comments",
                            user: o || 0,
                            page: n
                        }
                    } else if (e.hasClass("j-user-favorites")) {
                        var o = t(".profile-favorites-list").data("user");
                        i = {
                            action: "wpcom_user_favorites",
                            user: o || 0,
                            page: n
                        }
                    } else if (e.hasClass("j-load-kx")) i = {
                        action: "wpcom_load_kuaixun",
                        page: n
                    };
                    else {
                        var o = e.data("id");
                        i = {
                            action: "wpcom_load_posts",
                            id: o,
                            page: n
                        }
                    }
                    e.parent().addClass("loading"),
                    t.ajax({
                        type: "POST",
                        url: _wpcom_js.ajaxurl,
                        data: i,
                        dataType: "html",
                        success: function(i) {
                            if ("0" == i) e.addClass("disabled").text("å·²ç»åˆ°åº•äº†");
                            else {
                                var o = t(i);
                                if (e.hasClass("j-load-more")) e.parent().before(o);
                                else if (e.hasClass("j-load-kx")) {
                                    t(o[0]).text() == t(".kx-list .kx-date:last").text() && o.first().hide(),
                                    e.parent().before(o),
                                    e.parent().parent().find(".kx-date:hidden").remove(),
                                    window.kxDate = t(".kx-list .kx-date");
                                    var r = o.find(".j-qrcode");
                                    r.length && t.each(r,
                                    function(e, i) {
                                        var n = t(i),
                                        o = n.data("text");
                                        n.qrcode({
                                            text: o
                                        })
                                    })
                                } else e.parent().prev().append(o);
                                o.find(".j-lazy").lazyload({
                                    webp: s,
                                    threshold: -50,
                                    effect: "fadeIn"
                                }),
                                e.data("page", n),
                                t(window).trigger("scroll")
                            }
                            e.parent().removeClass("loading"),
                            a = 0
                        },
                        error: function() {
                            e.parent().removeClass("loading"),
                            a = 0
                        }
                    })
                }
            }),
            t(".special-wrap").on("click", ".load-more",
            function() {
                var e = t(this);
                if (!e.hasClass("disabled")) {
                    var i = e.data("page");
                    i = i ? i + 1 : 2,
                    e.parent().addClass("loading"),
                    t.ajax({
                        type: "POST",
                        url: _wpcom_js.ajaxurl,
                        data: {
                            action: "wpcom_load_special",
                            page: i
                        },
                        dataType: "html",
                        success: function(t) {
                            "0" == t ? e.addClass("disabled").text("å·²ç»åˆ°åº•äº†") : (e.closest(".special-wrap").find(".special-list").append(t), e.data("page", i)),
                            e.parent().removeClass("loading")
                        },
                        error: function() {
                            e.parent().removeClass("loading")
                        }
                    })
                }
            })
        } (jQuery)
    },
    {
        "../../../Themer/src/js/bootstrap": 1,
        "../../../Themer/src/js/common": 2,
        "../../../Themer/src/js/jquery.flexslider": 3,
        "../../../Themer/src/js/jquery.qrcode.min": 6,
        "../../../Themer/src/js/member": 7,
        "../../../Themer/src/js/text-image": 8
    }]
},
{},
[9]);