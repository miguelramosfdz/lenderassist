
/*
 Highcharts 4.2.5 JS v/Highstock 4.2.5 (2016-05-06)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
 */
(function(G, W) {
    "object" === typeof module && module.exports ? module.exports = G.document ? W(G) : W : G.Highcharts = W(G)
})("undefined" !== typeof window ? window : this, function(G) {
    function W(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw Error(c);
        G.console && console.log(c)
    }
    function Za(a, b, c) {
        this.options = b;
        this.elem = a;
        this.prop = c
    }
    function J() {
        var a, b = arguments,
            c, d = {}, e = function(a, b) {
                var c, d;
                "object" !== typeof a && (a = {});
                for (d in b) b.hasOwnProperty(d) && ((c = b[d]) && "object" === typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" !== typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]);
                return a
            };
        !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }
    function O(a, b) {
        return parseInt(a, b || 10)
    }
    function ka(a) {
        return "string" === typeof a
    }
    function ea(a) {
        return a && "object" === typeof a
    }
    function Fa(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function Ga(a, b) {
        for (var c = a.length; c--;) if (a[c] === b) {
            a.splice(c, 1);
            break
        }
    }
    function v(a) {
        return a !== D && null !== a
    }
    function M(a, b, c) {
        var d, e;
        if (ka(b)) v(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (v(b) && ea(b)) for (d in b) a.setAttribute(d, b[d]);
        return e
    }
    function la(a) {
        return Fa(a) ? a : [a]
    }
    function ya(a, b, c) {
        if (b) return setTimeout(a, b, c);
        a.call(0, c)
    }
    function Y(a, b) {
        na && !Z && b && b.opacity !== D && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
        B(a.style, b)
    }
    function za(a, b, c, d, e) {
        a = C.createElement(a);
        b && B(a, b);
        e && Y(a, {
            padding: 0,
            border: "none",
            margin: 0
        });
        c && Y(a, c);
        d && d.appendChild(a);
        return a
    }

    function Ha(a, b) {
        var c = function() {};
        c.prototype = new a;
        B(c.prototype, b);
        return c
    }
    function oa(a, b, c) {
        return Array((b || 2) + 1 - String(a).length).join(c || 0) + a
    }
    function zb(a, b) {
        return /%$/.test(a) ? b * parseFloat(a) / 100 : parseFloat(a)
    }
    function Aa(a, b) {
        for (var c = "{", d = !1, e, f, g, h, l, m = []; - 1 !== (c = a.indexOf(c));) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                l = g.length;
                e = b;
                for (h = 0; h < l; h++) e = e[g[h]];
                f.length && (f = f.join(":"), h = /\.([0-9])/, g = N.lang, /f$/.test(f) ? (h = (h = f.match(h)) ? h[1] : -1, null !== e && (e = x.numberFormat(e,
                    h, g.decimalPoint, - 1 < f.indexOf(",") ? g.thousandsSep : ""))) : e = Ba(f, e))
            }
            m.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        m.push(a);
        return m.join("")
    }
    function Ab(a, b, c, d, e) {
        var f, g = a;
        c = r(c, 1);
        f = a / c;
        b || (b = [1, 2, 2.5, 5, 10], !1 === d && (1 === c ? b = [1, 2, 5, 10] : .1 >= c && (b = [1 / c])));
        for (d = 0; d < b.length && !(g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2); d++);
        return g * c
    }
    function Oa(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].safeI = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return 0 === d ? a.safeI - c.safeI : d
        });
        for (e = 0; e < c; e++) delete a[e].safeI
    }

    function Ia(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }
    function Ca(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }
    function Pa(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }
    function Qa(a) {
        Ra || (Ra = za("div"));
        a && Ra.appendChild(a);
        Ra.innerHTML = ""
    }
    function fa(a, b) {
        return parseFloat(a.toPrecision(b || 14))
    }
    function Ja(a) {
        return ea(a) ? J(a) : {
            duration: a ? 500 : 0
        }
    }
    function kb() {
        var a = N.global,
            b = a.useUTC,
            c = b ? "getUTC" : "get",
            d = b ? "setUTC" : "set";
        pa = a.Date || G.Date;
        lb = b && a.timezoneOffset;
        $a = b && a.getTimezoneOffset;
        mb = c + "Minutes";
        nb = c + "Hours";
        ob = c + "Day";
        ab = c + "Date";
        bb = c + "Month";
        cb = c + "FullYear";
        pb = d + "Date";
        qb = d + "Month";
        rb = d + "FullYear"
    }
    function ha(a) {
        if (!(this instanceof ha)) return new ha(a);
        this.init(a)
    }
    function V() {}
    function Da(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        c || d || this.addLabel()
    }
    var D, C = G.document,
        ba = Math,
        E = ba.round,
        ca = ba.floor,
        ia = ba.ceil,
        w = ba.max,
        H = ba.min,
        U = ba.abs,
        qa = ba.cos,
        Ea = ba.sin,
        sb = ba.PI,
        va = 2 * sb / 360,
        ra = G.navigator && G.navigator.userAgent || "",
        Bb = G.opera,
        na = /(msie|trident|edge)/i.test(ra) && !Bb,
        tb = !na && /AppleWebKit/.test(ra),
        Ka = /Firefox/.test(ra),
        ub = /(Mobile|Android|Windows Phone)/.test(ra),
        Z = C && C.createElementNS && !! C.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        Cb = Ka && 4 > parseInt(ra.split("Firefox/")[1], 10),
        ga = C && !Z && !na && !! C.createElement("canvas").getContext,
        La, vb = {}, db = 0,
        Ra, N, Ba, Sa, eb = function() {}, T = [],
        Ma = 0,
        Db = /^[0-9]+$/,
        Ta = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
        pa, lb, $a, mb,
        nb, ob, ab, bb, cb, pb, qb, rb, P = {}, x;
    x = G.Highcharts ? W(16, !0) : {
        win: G
    };
    x.seriesTypes = P;
    var sa = [],
        da, ta, t, ua, fb, wa, R, S, I, Ua, xa;
    Za.prototype = {
        dSetter: function() {
            var a = this.paths[0],
                b = this.paths[1],
                c = [],
                d = this.now,
                e = a.length,
                f;
            if (1 === d) c = this.toD;
            else if (e === b.length && 1 > d) for (; e--;) f = parseFloat(a[e]), c[e] = isNaN(f) ? a[e] : d * parseFloat(b[e] - f) + f;
            else c = b;
            this.elem.attr("d", c)
        },
        update: function() {
            var a = this.elem,
                b = this.prop,
                c = this.now,
                d = this.options.step;
            if (this[b + "Setter"]) this[b + "Setter"]();
            else a.attr ? a.element && a.attr(b, c) : a.style[b] = c + this.unit;
            d && d.call(a, c, this)
        },
        run: function(a, b, c) {
            var d = this,
                e = function(a) {
                    return e.stopped ? !1 : d.step(a)
                }, f;
            this.startTime = +new pa;
            this.start = a;
            this.end = b;
            this.unit = c;
            this.now = this.start;
            this.pos = 0;
            e.elem = this.elem;
            e() && 1 === sa.push(e) && (e.timerId = setInterval(function() {
                for (f = 0; f < sa.length; f++) sa[f]() || sa.splice(f--, 1);
                sa.length || clearInterval(e.timerId)
            }, 13))
        },
        step: function(a) {
            var b = +new pa,
                c, d = this.options;
            c = this.elem;
            var e = d.complete,
                f = d.duration,
                g = d.curAnim,
                h;
            if (c.attr && !c.element) c = !1;
            else if (a || b >= f + this.startTime) {
                this.now = this.end;
                this.pos = 1;
                this.update();
                a = g[this.prop] = !0;
                for (h in g)!0 !== g[h] && (a = !1);
                a && e && e.call(c);
                c = !1
            } else this.pos = d.easing((b - this.startTime) / f), this.now = this.start + (this.end - this.start) * this.pos, this.update(), c = !0;
            return c
        },
        initPath: function(a, b, c) {
            b = b || "";
            var d = a.shift,
                e = -1 < b.indexOf("C"),
                f = e ? 7 : 3,
                g;
            b = b.split(" ");
            c = [].concat(c);
            var h = a.isArea,
                l = h ? 2 : 1,
                m = function(a) {
                    for (g = a.length; g--;) "M" !== a[g] && "L" !== a[g] || a.splice(g + 1, 0, a[g + 1], a[g + 2],
                        a[g + 1], a[g + 2])
                };
            e && (m(b), m(c));
            if (d <= c.length / f && b.length === c.length) for (; d--;) c = c.slice(0, f).concat(c), h && (c = c.concat(c.slice(c.length - f)));
            a.shift = 0;
            if (b.length) for (a = c.length; b.length < a;) d = b.slice().splice(b.length / l - f, f * l), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), [].splice.apply(b, [b.length / l, 0].concat(d));
            return [b, c]
        }
    };
    var B = x.extend = function(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }, L = x.isNumber = function(a) {
        return "number" === typeof a && !isNaN(a)
    }, r = x.pick = function() {
        var a = arguments,
            b, c, d = a.length;
        for (b = 0; b < d; b++) if (c = a[b], c !== D && null !== c) return c
    }, Eb = x.wrap = function(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a)
        }
    };
    Ba = function(a, b, c) {
        if (!L(b)) return N.lang.invalidDate || "";
        a = r(a, "%Y-%m-%d %H:%M:%S");
        var d = new pa(b - 6E4 * ($a && $a(b) || lb || 0)),
            e, f = d[nb](),
            g = d[ob](),
            h = d[ab](),
            l = d[bb](),
            m = d[cb](),
            k = N.lang,
            n = k.weekdays,
            p = k.shortWeekdays,
            d = B({
                a: p ? p[g] : n[g].substr(0, 3),
                A: n[g],
                d: oa(h),
                e: oa(h, 2, " "),
                w: g,
                b: k.shortMonths[l],
                B: k.months[l],
                m: oa(l + 1),
                y: m.toString().substr(2, 2),
                Y: m,
                H: oa(f),
                k: f,
                I: oa(f % 12 || 12),
                l: f % 12 || 12,
                M: oa(d[mb]()),
                p: 12 > f ? "AM" : "PM",
                P: 12 > f ? "am" : "pm",
                S: oa(d.getSeconds()),
                L: oa(E(b % 1E3), 3)
            }, x.dateFormats);
        for (e in d) for (; - 1 !== a.indexOf("%" + e);) a = a.replace("%" + e, "function" === typeof d[e] ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    Sa = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5
    };
    x.numberFormat = function(a, b, c, d) {
        a = +a || 0;
        b = +b;
        var e = N.lang,
            f = (a.toString().split(".")[1] || "").length,
            g, h, l = Math.abs(a); - 1 === b ? b = Math.min(f, 20) : L(b) || (b = 2);
        g = String(O(l.toFixed(b)));
        h = 3 < g.length ? g.length % 3 : 0;
        c = r(c, e.decimalPoint);
        d = r(d, e.thousandsSep);
        a = (0 > a ? "-" : "") + (h ? g.substr(0, h) + d : "");
        a += g.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + d);
        b && (d = Math.abs(l - g + Math.pow(10, - Math.max(b, f) - 1)), a += c + d.toFixed(b).slice(2));
        return a
    };
    Math.easeInOutSine = function(a) {
        return -.5 * (Math.cos(Math.PI * a) - 1)
    };
    da = function(a, b) {
        var c;
        return "width" === b ? Math.min(a.offsetWidth, a.scrollWidth) - da(a, "padding-left") - da(a, "padding-right") : "height" === b ? Math.min(a.offsetHeight, a.scrollHeight) - da(a, "padding-top") - da(a, "padding-bottom") : (c = G.getComputedStyle(a, void 0)) && O(c.getPropertyValue(b))
    };
    ta = function(a, b) {
        return b.indexOf ? b.indexOf(a) : [].indexOf.call(b, a)
    };
    ua = function(a, b) {
        return [].filter.call(a, b)
    };
    wa = function(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = b.call(a[d], a[d], d, a);
        return c
    };
    fb = function(a) {
        var b = C.documentElement;
        a = a.getBoundingClientRect();
        return {
            top: a.top + (G.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left: a.left + (G.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        }
    };
    xa = function(a) {
        for (var b = sa.length; b--;) sa[b].elem === a && (sa[b].stopped = !0)
    };
    t = function(a, b) {
        return Array.prototype.forEach.call(a, b)
    };
    R = function(a, b, c) {
        function d(b) {
            b.target = b.srcElement || G;
            c.call(a, b)
        }
        var e = a.hcEvents = a.hcEvents || {};
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && (a.hcEventsIE || (a.hcEventsIE = {}), a.hcEventsIE[c.toString()] = d, a.attachEvent("on" + b, d));
        e[b] || (e[b] = []);
        e[b].push(c)
    };
    S = function(a, b, c) {
        function d(b,
                   c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.attachEvent && (c = a.hcEventsIE[c.toString()], a.detachEvent("on" + b, c))
        }
        function e() {
            var c, e;
            if (a.nodeName) for (e in b ? (c = {}, c[b] = !0) : c = g, c) if (g[e]) for (c = g[e].length; c--;) d(e, g[e][c])
        }
        var f, g = a.hcEvents,
            h;
        g && (b ? (f = g[b] || [], c ? (h = ta(c, f), - 1 < h && (f.splice(h, 1), g[b] = f), d(b, c)) : (e(), g[b] = [])) : (e(), a.hcEvents = {}))
    };
    I = function(a, b, c, d) {
        var e;
        e = a.hcEvents;
        var f, g;
        c = c || {};
        if (C.createEvent && (a.dispatchEvent || a.fireEvent)) e = C.createEvent("Events"), e.initEvent(b, !0, !0), e.target = a, B(e, c), a.dispatchEvent ? a.dispatchEvent(e) : a.fireEvent(b, e);
        else if (e) for (e = e[b] || [], f = e.length, c.preventDefault || (c.preventDefault = function() {
            c.defaultPrevented = !0
        }), c.target = a, c.type || (c.type = b), b = 0; b < f; b++) g = e[b], !1 === g.call(a, c) && c.preventDefault();
        d && !c.defaultPrevented && d(c)
    };
    Ua = function(a, b, c) {
        var d, e = "",
            f, g, h;
        ea(c) || (d = arguments, c = {
            duration: d[2],
            easing: d[3],
            complete: d[4]
        });
        L(c.duration) || (c.duration = 400);
        c.easing = "function" === typeof c.easing ? c.easing : Math[c.easing] || Math.easeInOutSine;
        c.curAnim = J(b);
        for (h in b) g = new Za(a, c, h), f = null, "d" === h ? (g.paths = g.initPath(a, a.d, b.d), g.toD = b.d, d = 0, f = 1) : a.attr ? d = a.attr(h) : (d = parseFloat(da(a, h)) || 0, "opacity" !== h && (e = "px")), f || (f = b[h]), f.match && f.match("px") && (f = f.replace(/px/g, "")), g.run(d, f, e)
    };
    G.jQuery && (G.jQuery.fn.highcharts = function() {
        var a = [].slice.call(arguments);
        if (this[0]) return a[0] ? (new(x[ka(a[0]) ? a.shift() : "Chart"])(this[0], a[0], a[1]), this) : T[M(this[0], "data-highcharts-chart")]
    });
    C && !C.defaultView && (da = function(a, b) {
        var c;
        c = {
            width: "clientWidth",
            height: "clientHeight"
        }[b];
        if (a.style[b]) return O(a.style[b]);
        "opacity" === b && (b = "filter");
        if (c) return a.style.zoom = 1, Math.max(a[c] - 2 * da(a, "padding"), 0);
        c = a.currentStyle[b.replace(/\-(\w)/g, function(a, b) {
            return b.toUpperCase()
        })];
        "filter" === b && (c = c.replace(/alpha\(opacity=([0-9]+)\)/, function(a, b) {
            return b / 100
        }));
        return "" === c ? 1 : O(c)
    });
    Array.prototype.forEach || (t = function(a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (!1 === b.call(a[c], a[c], c, a)) return c
    });
    Array.prototype.indexOf || (ta = function(a, b) {
        var c, d = 0;
        if (b) for (c = b.length; d < c; d++) if (b[d] === a) return d;
        return -1
    });
    Array.prototype.filter || (ua = function(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]);
        return c
    });
    x.Fx = Za;
    x.inArray = ta;
    x.each = t;
    x.grep = ua;
    x.offset = fb;
    x.map = wa;
    x.addEvent = R;
    x.removeEvent = S;
    x.fireEvent = I;
    x.animate = Ua;
    x.animObject = Ja;
    x.stop = xa;
    N = {
        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com@product.cdnpath@//Highstock 4.2.5/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@//Highstock 4.2.5/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            },
            widthAdjust: -44
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            },
            widthAdjust: -44
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    align: "center",
                    formatter: function() {
                        return null === this.y ? "" : x.numberFormat(this.y, - 1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: Z,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: ub ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var ja = N.plotOptions,
        wb = ja.line;
    kb();
    ha.prototype = {
        parsers: [{
            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function(a) {
                return [O(a[1]), O(a[2]), O(a[3]), parseFloat(a[4], 10)]
            }
        }, {
            regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function(a) {
                return [O(a[1], 16), O(a[2], 16), O(a[3], 16),
                    1]
            }
        }, {
            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            parse: function(a) {
                return [O(a[1]), O(a[2]), O(a[3]), 1]
            }
        }],
        init: function(a) {
            var b, c, d, e;
            if ((this.input = a) && a.stops) this.stops = wa(a.stops, function(a) {
                return new ha(a[1])
            });
            else for (d = this.parsers.length; d-- && !c;) e = this.parsers[d], (b = e.regex.exec(a)) && (c = e.parse(b));
            this.rgba = c || []
        },
        get: function(a) {
            var b = this.input,
                c = this.rgba,
                d;
            this.stops ? (d = J(b), d.stops = [].concat(d.stops), t(this.stops, function(b, c) {
                d.stops[c] = [d.stops[c][0],
                    b.get(a)]
            })) : d = c && L(c[0]) ? "rgb" === a || !a && 1 === c[3] ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : "a" === a ? c[3] : "rgba(" + c.join(",") + ")" : b;
            return d
        },
        brighten: function(a) {
            var b, c = this.rgba;
            if (this.stops) t(this.stops, function(b) {
                b.brighten(a)
            });
            else if (L(a) && 0 !== a) for (b = 0; 3 > b; b++) c[b] += O(255 * a), 0 > c[b] && (c[b] = 0), 255 < c[b] && (c[b] = 255);
            return this
        },
        setOpacity: function(a) {
            this.rgba[3] = a;
            return this
        }
    };
    V.prototype = {
        opacity: 1,
        textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textShadow".split(" "),
        init: function(a, b) {
            this.element = "span" === b ? za(b) : C.createElementNS("http://www.w3.org/2000/svg", b);
            this.renderer = a
        },
        animate: function(a, b, c) {
            b = r(b, this.renderer.globalAnimation, !0);
            xa(this);
            b ? (c && (b.complete = c), Ua(this, a, b)) : this.attr(a, null, c);
            return this
        },
        colorGradient: function(a, b, c) {
            var d = this.renderer,
                e, f, g, h, l, m, k, n, p, q, u, F = [],
                r;
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                l = d.gradients;
                k = a.stops;
                q = c.radialReference;
                Fa(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                "radialGradient" === f && q && !v(g.gradientUnits) && (h = g, g = J(g, d.getRadialAttr(q, h), {
                    gradientUnits: "userSpaceOnUse"
                }));
                for (u in g) "id" !== u && F.push(u, g[u]);
                for (u in k) F.push(k[u]);
                F = F.join(",");
                l[F] ? q = l[F].attr("id") : (g.id = q = "highcharts-" + db++, l[F] = m = d.createElement(f).attr(g).add(d.defs), m.radAttr = h, m.stops = [], t(k, function(a) {
                    0 === a[1].indexOf("rgba") ? (e = ha(a[1]), n = e.get("rgb"), p = e.get("a")) : (n = a[1], p = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": n,
                        "stop-opacity": p
                    }).add(m);
                    m.stops.push(a)
                }));
                r = "url(" + d.url + "#" + q + ")";
                c.setAttribute(b, r);
                c.gradient = F;
                a.toString = function() {
                    return r
                }
            }
        },
        applyTextShadow: function(a) {
            var b = this.element,
                c, d = -1 !== a.indexOf("contrast"),
                e = {}, f = this.renderer.forExport,
                g = f || b.style.textShadow !== D && !na;
            d && (e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
            if (tb || f) e.textRendering = "geometricPrecision";
            g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")),
                t(a.split(/\s?,\s?/g), function(a) {
                    var d = b.firstChild,
                        e, f;
                    a = a.split(" ");
                    e = a[a.length - 1];
                    (f = a[a.length - 2]) && t(c, function(a, c) {
                        var g;
                        0 === c && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), null === c && b.setAttribute("y", 0));
                        g = a.cloneNode(1);
                        M(g, {
                            "class": "highcharts-text-shadow",
                            fill: e,
                            stroke: e,
                            "stroke-opacity": 1 / w(O(f), 3),
                            "stroke-width": f,
                            "stroke-linejoin": "round"
                        });
                        b.insertBefore(g, d)
                    })
                }))
        },
        attr: function(a, b, c) {
            var d, e = this.element,
                f, g = this,
                h;
            "string" === typeof a && b !== D && (d = a, a = {}, a[d] = b);
            if ("string" === typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (d in a) b = a[d], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0), !this.rotation || "x" !== d && "y" !== d || (this.doTransform = !0), h || (h = this[d + "Setter"] || this._defaultSetter, h.call(this, b, d, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, h));
                this.doTransform && (this.updateTransform(),
                    this.doTransform = !1)
            }
            c && c();
            return g
        },
        updateShadows: function(a, b, c) {
            for (var d = this.shadows, e = d.length; e--;) c.call(d[e], "height" === a ? Math.max(b - (d[e].cutHeight || 0), 0) : "d" === a ? this.d : b, a, d[e])
        },
        addClass: function(a) {
            var b = this.element,
                c = M(b, "class") || ""; - 1 === c.indexOf(a) && M(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function(a) {
            var b = this;
            t("x y r start end width height innerR anchorX anchorY".split(" "), function(c) {
                b[c] = r(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height,
                    b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
        },
        crisp: function(a) {
            var b, c = {}, d, e = this.strokeWidth || 0;
            d = E(e) % 2 / 2;
            a.x = ca(a.x || this.x || 0) + d;
            a.y = ca(a.y || this.y || 0) + d;
            a.width = ca((a.width || this.width || 0) - 2 * d);
            a.height = ca((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function(a) {
            var b = this.styles,
                c = {}, d = this.element,
                e, f, g = "";
            e = !b;
            a && a.color && (a.fill = a.color);
            if (b) for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && O(a.width) || this.textWidth;
                b && (a = B(b, c));
                this.styles = a;
                e && (ga || !Z && this.renderer.forExport) && delete a.width;
                if (na && !Z) Y(this.element, a);
                else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    M(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(a, b) {
            var c = this,
                d = c.element;
            La && "click" === a ? (d.ontouchstart = function(a) {
                c.touchEventFired = pa.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function(a) {
                (-1 === ra.indexOf("Android") || 1100 < pa.now() - (c.touchEventFired || 0)) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            var b = this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                c = this.scaleX,
                d = this.scaleY,
                e = this.inverted,
                f = this.rotation,
                g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (v(c) || v(d)) && a.push("scale(" + r(c, 1) + " " + r(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a,
                        b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || ka(c)) this.alignTo = d = c || "renderer", Ga(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = r(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if ("right" === d || "center" === d) f += (c.width - (a.width || 0)) / {
                    right: 1,
                    center: 2
                }[d];
            h[b ? "translateX" : "x"] = E(f);
            if ("bottom" === e || "middle" === e) g += (c.height - (a.height || 0)) / ({
                    bottom: 1,
                    middle: 2
                }[e] || 1);
            h[b ? "translateY" : "y"] = E(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function(a, b) {
            var c, d = this.renderer,
                e, f, g, h = this.element,
                l = this.styles;
            e = this.textStr;
            var m, k = h.style,
                n, p = d.cache,
                q = d.cacheKeys,
                u;
            f = r(b, this.rotation);
            g = f * va;
            e !== D && (u = ["", f || 0, l && l.fontSize, h.style.width].join(), u = "" === e || Db.test(e) ? "num:" + e.toString().length + u : e + u);
            u && !a && (c = p[u]);
            if (!c) {
                if ("http://www.w3.org/2000/svg" === h.namespaceURI || d.forExport) {
                    try {
                        n = this.fakeTS && function(a) {
                                t(h.querySelectorAll(".highcharts-text-shadow"),

                                    function(b) {
                                        b.style.display = a
                                    })
                            }, Ka && k.textShadow ? (m = k.textShadow, k.textShadow = "") : n && n("none"), c = h.getBBox ? B({}, h.getBBox()) : {
                            width: h.offsetWidth,
                            height: h.offsetHeight
                        }, m ? k.textShadow = m : n && n("")
                    } catch (F) {}
                    if (!c || 0 > c.width) c = {
                        width: 0,
                        height: 0
                    }
                } else c = this.htmlGetBBox();
                d.isSVG && (d = c.width, e = c.height, na && l && "11px" === l.fontSize && "16.9" === e.toPrecision(3) && (c.height = e = 14), f && (c.width = U(e * Ea(g)) + U(d * qa(g)), c.height = U(e * qa(g)) + U(d * Ea(g))));
                if (u) {
                    for (; 250 < q.length;) delete p[q.shift()];
                    p[u] || q.push(u);
                    p[u] = c
                }
            }
            return c
        },
        show: function(a) {
            return this.attr({
                visibility: a ? "inherit" : "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(a) {
            var b = this.renderer,
                c = this.element,
                d;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            void 0 !== this.textStr && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex) d = this.zIndexSetter();
            d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a = this,
                b = a.element || {}, c = a.shadows,
                d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup,
                e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            xa(a);
            a.clipPath && (a.clipPath = a.clipPath.destroy());
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && t(c, function(b) {
                a.safeRemoveChild(b)
            }); d && d.div && 0 === d.div.childNodes.length;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && Ga(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, l, m, k;
            if (a) {
                l = r(a.width, 3);
                m = (a.opacity || .15) / l;
                k = this.parentInverted ? "(-1,-1)" : "(" + r(a.offsetX, 1) + ", " + r(a.offsetY, 1) + ")";
                for (e = 1; e <= l; e++) f = g.cloneNode(0), h = 2 * l + 1 - 2 * e, M(f, {
                    isShadow: "true",
                    stroke: a.color || "black",
                    "stroke-opacity": m * e,
                    "stroke-width": h,
                    transform: "translate" + k,
                    fill: "none"
                }),
                c && (M(f, "height", w(M(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f);
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            "circle" === this.element.nodeName && (a = {
                    x: "cx",
                    y: "cy"
                }[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function(a) {
            a = r(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b,
                a);
            this[b] = a
        },
        dashstyleSetter: function(a) {
            var b, c = this["stroke-width"];
            "inherit" === c && (c = 1);
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = O(a[b]) * c;
                a = a.join(",").replace(/NaN/g, "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a])
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = C.createElementNS("http://www.w3.org/2000/svg", "title"), this.element.appendChild(b));
            b.firstChild && b.removeChild(b.firstChild);
            b.appendChild(C.createTextNode(String(r(a), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function(a) {
            a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
        },
        fillSetter: function(a, b, c) {
            "string" === typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        visibilitySetter: function(a, b, c) {
            "inherit" === a ? c.removeAttribute(b) : c.setAttribute(b, a)
        },
        zIndexSetter: function(a, b) {
            var c = this.renderer,
                d = this.parentGroup,
                c = (d || c).element || c.box,
                e, f, g = this.element,
                h;
            e = this.added;
            var l;
            v(a) && (g.zIndex = a, a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                (a = this.zIndex) && d && (d.handleZ = !0);
                d = c.childNodes;
                for (l = 0; l < d.length && !h; l++) e = d[l], f = e.zIndex, e !== g && (O(f) > a || !v(a) && v(f)) && (c.insertBefore(g, e), h = !0);
                h || c.appendChild(g)
            }
            return h
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }
    };
    V.prototype.yGetter = V.prototype.xGetter;
    V.prototype.translateXSetter = V.prototype.translateYSetter = V.prototype.rotationSetter = V.prototype.verticalAlignSetter = V.prototype.scaleXSetter = V.prototype.scaleYSetter = function(a, b) {
        this[b] = a;
        this.doTransform = !0
    };
    V.prototype["stroke-widthSetter"] = V.prototype.strokeSetter = function(a, b, c) {
        this[b] = a;
        this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"],
            V.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), this.hasStroke = !1)
    };
    var Va = function() {
        this.init.apply(this, arguments)
    };
    Va.prototype = {
        Element: V,
        init: function(a, b, c, d, e, f) {
            var g;
            d = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g); - 1 === a.innerHTML.indexOf("xmlns") && M(g, "xmlns", "http://www.w3.org/2000/svg");
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (Ka || tb) && C.getElementsByTagName("base").length ? G.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(C.createTextNode("Created with Highcharts 4.2.5 /Highstock 4.2.5"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = f;
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.imgCount = 0;
            this.setSize(b, c, !1);
            var h;
            Ka && a.getBoundingClientRect && (this.subPixelFix = b = function() {
                Y(a, {
                    left: 0,
                    top: 0
                });
                h = a.getBoundingClientRect();
                Y(a, {
                    left: ia(h.left) - h.left + "px",
                    top: ia(h.top) - h.top + "px"
                })
            }, b(), R(G, "resize", b))
        },
        getStyle: function(a) {
            return this.style = B({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            Pa(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.subPixelFix && S(G, "resize", this.subPixelFix);
            return this.alignedObjects = null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        getRadialAttr: function(a, b) {
            return {
                cx: a[0] - a[2] / 2 + b.cx * a[2],
                cy: a[1] - a[2] / 2 + b.cy * a[2],
                r: b.r * a[2]
            }
        },
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = r(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, h, l, m, k = M(b, "x"), n = a.styles, p = a.textWidth, q = n && n.lineHeight,
                     u = n && n.textShadow, F = n && "ellipsis" === n.textOverflow, Q = g.length, y = p && !a.added && this.box, A = function(a) {
                    return q ? O(q) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : n && n.fontSize || c.style.fontSize || 12, a).h
                }; Q--;) b.removeChild(g[Q]);
            f || u || F || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, l = /<.*href="(http[^"]+)".*>/, y && y.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e = ua(e, function(a) {
                return "" !== a
            }), t(e, function(e, f) {
                var g, q = 0;
                e = e.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                t(g, function(e) {
                    if ("" !== e || 1 === g.length) {
                        var u = {}, r = C.createElementNS("http://www.w3.org/2000/svg", "tspan"),
                            t;
                        h.test(e) && (t = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), M(r, "style", t));
                        l.test(e) && !d && (M(r, "onclick", 'location.href="' + e.match(l)[1] + '"'), Y(r, {
                            cursor: "pointer"
                        }));
                        e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/</g, "<").replace(/>/g, ">");
                        if (" " !== e) {
                            r.appendChild(C.createTextNode(e));
                            q ? u.dx = 0 : f && null !== k && (u.x = k);
                            M(r, u);
                            b.appendChild(r);
                            !q && f && (!Z && d && Y(r, {
                                display: "block"
                            }), M(r, "dy", A(r)));
                            if (p) {
                                for (var u = e.replace(/([^\^])-/g, "$1- ").split(" "), y = 1 < g.length || f || 1 < u.length && "nowrap" !== n.whiteSpace, Q, z, v = [], w = A(r), D = 1, E = a.rotation, B = e, x = B.length;
                                     (y || F) && (u.length || v.length);) a.rotation = 0, Q = a.getBBox(!0), z = Q.width, !Z && c.forExport && (z = c.measureSpanWidth(r.firstChild.data, a.styles)),
                                    Q = z > p, void 0 === m && (m = Q), F && m ? (x /= 2, "" === B || !Q && .5 > x ? u = [] : (B = e.substring(0, B.length + (Q ? -1 : 1) * ia(x)), u = [B + (3 < p ? "\u2026" : "")], r.removeChild(r.firstChild))) : Q && 1 !== u.length ? (r.removeChild(r.firstChild), v.unshift(u.pop())) : (u = v, v = [], u.length && (D++, r = C.createElementNS("http://www.w3.org/2000/svg", "tspan"), M(r, {
                                    dy: w,
                                    x: k
                                }), t && M(r, "style", t), b.appendChild(r)), z > p && (p = z)), u.length && r.appendChild(C.createTextNode(u.join(" ").replace(/- /g, "-")));
                                a.rotation = E
                            }
                            q++
                        }
                    }
                })
            }), m && a.attr("title", a.textStr), y && y.removeChild(b),
            u && a.applyTextShadow && a.applyTextShadow(u)) : b.appendChild(C.createTextNode(e.replace(/</g, "<").replace(/>/g, ">")))
        },
        getContrast: function(a) {
            a = ha(a).rgba;
            return 384 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF"
        },
        button: function(a, b, c, d, e, f, g, h, l) {
            var m = this.label(a, b, c, l, null, null, null, null, "button"),
                k = 0,
                n, p, q, u, F, r;
            a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            };
            e = J({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FEFEFE"],
                        [1, "#F6F6F6"]
                    ]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            }, e);
            q = e.style;
            delete e.style;
            f = J(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, f);
            u = f.style;
            delete f.style;
            g = J(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, g);
            F = g.style;
            delete g.style;
            h = J(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            r = h.style;
            delete h.style;
            R(m.element, na ? "mouseover" : "mouseenter", function() {
                3 !== k && m.attr(f).css(u)
            });
            R(m.element, na ? "mouseout" : "mouseleave", function() {
                3 !== k && (n = [e, f, g][k], p = [q, u, F][k], m.attr(n).css(p))
            });
            m.setState = function(a) {
                (m.state = k = a) ? 2 === a ? m.attr(g).css(F) : 3 === a && m.attr(h).css(r) : m.attr(e).css(q)
            };
            return m.on("click", function(a) {
                3 !== k && d.call(m, a)
            }).attr(e).css(B({
                cursor: "default"
            }, q))
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = E(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = E(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: "none"
            };
            Fa(a) ? b.d = a : ea(a) && B(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = ea(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            b = this.createElement("circle");
            b.xSetter = b.ySetter = function(a, b, c) {
                c.setAttribute("c" + b, a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            ea(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x);
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a
        },
        rect: function(a, b, c, d, e, f) {
            e = ea(a) ? a.r : e;
            var g = this.createElement("rect");
            a = ea(a) ? a : a === D ? {} : {
                x: a,
                y: b,
                width: w(c, 0),
                height: w(d, 0)
            };
            f !== D && (g.strokeWidth = f, a = g.crisp(a));
            e && (a.r = e);
            g.rSetter = function(a, b, c) {
                M(c, {
                    rx: a,
                    ry: a
                })
            };
            return g.attr(a)
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[r(c, !0) ? "animate" : "attr"]({
                width: a,
                height: b
            }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return v(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: "none"
            };
            1 < arguments.length && B(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a, b, c, d, e, f) {
            var g = this,
                h, l = this.symbols[a],
                l = l && l(E(b), E(c), d, e, f),
                m = /^url\((.*?)\)$/,
                k, n;
            l ? (h = this.path(l), B(h, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && B(h, f)) : m.test(a) && (n = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(E((d - b[0]) / 2), E((e - b[1]) / 2)))
            }, k = a.match(m)[1], a = vb[k] || f && f.width && f.height && [f.width, f.height], h = this.image(k).attr({
                x: b,
                y: c
            }), h.isImg = !0, a ? n(h, a) : (h.attr({
                width: 0,
                height: 0
            }), za("img", {
                onload: function() {
                    0 === this.width && (Y(this, {
                        position: "absolute",
                        top: "-999em"
                    }), C.body.appendChild(this));
                    n(h, vb[k] = [this.width, this.height]);
                    this.parentNode && this.parentNode.removeChild(this);
                    g.imgCount--;
                    if (!g.imgCount && T[g.chartIndex].onload) T[g.chartIndex].onload()
                },
                src: k
            }), this.imgCount++));
            return h
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = .166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a,
                    b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start;
                c = e.r || c || d;
                var g = e.end - .001;
                d = e.innerR;
                var h = e.open,
                    l = qa(f),
                    m = Ea(f),
                    k = qa(g),
                    g = Ea(g);
                e = e.end - f < sb ? 0 : 1;
                return ["M", a + c * l, b + c * m, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * l, b + d * m, h ? "" : "Z"]
            },
            callout: function(a, b, c, d, e) {
                var f = H(e && e.r || 0, c, d),
                    g = f + 6,
                    h = e && e.anchorX;
                e = e && e.anchorY;
                var l;
                l = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
                h && h > c && e > b + g && e < b + d - g ? l.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && 0 > h && e > b + g && e < b + d - g ? l.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? l.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && 0 > e && h > a + g && h < a + c - g && l.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return l
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + db++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a
        },
        text: function(a, b, c, d) {
            var e = ga || !Z && this.forExport,
                f = {};
            if (d && (this.allowHTML || !this.forExport)) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            c && (f.y = Math.round(c));
            if (a || 0 === a) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            d || (a.xSetter = function(a, b, c) {
                var d = c.getElementsByTagName("tspan"),
                    e, f = c.getAttribute(b),
                    p;
                for (p = 0; p < d.length; p++) e = d[p], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            });
            return a
        },
        fontMetrics: function(a, b) {
            var c, d;
            a = a || this.style.fontSize;
            !a && b && G.getComputedStyle && (b = b.element || b, a = (c = G.getComputedStyle(b, "")) && c.fontSize);
            a = /px/.test(a) ? O(a) : /em/.test(a) ? 12 * parseFloat(a) : 12;
            c = 24 > a ? a + 3 : E(1.2 * a);
            d = E(.8 * c);
            return {
                h: c,
                b: d,
                f: a
            }
        },
        rotCorr: function(a, b, c) {
            var d = a;
            b && c && (d = w(d * qa(b * va), 4));
            return {
                x: -a / 3 * Ea(b * va),
                y: d
            }
        },
        label: function(a, b, c, d, e, f, g, h, l) {
            var m = this,
                k = m.g(l),
                n = m.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                p, q, u = 0,
                F = 3,
                r = 0,
                y, A, z, w, Wa = 0,
                aa = {}, x, C, K, G, H;
            K = function() {
                var a, b;
                a = n.element.style;
                q = (void 0 === y || void 0 === A || k.styles.textAlign) && v(n.textStr) && n.getBBox();
                k.width = (y || q.width || 0) + 2 * F + r;
                k.height = (A || q.height || 0) + 2 * F;
                x = F + m.fontMetrics(a && a.fontSize, n).b;
                C && (p || (a = Wa, b = (h ? -x : 0) + Wa, k.box = p = d ? m.symbol(d, a, b, k.width, k.height, aa) : m.rect(a, b, k.width, k.height, 0, aa["stroke-width"]), p.isImg || p.attr("fill", "none"), p.add(k)), p.isImg || p.attr(B({
                    width: E(k.width),
                    height: E(k.height)
                }, aa)), aa = null)
            };
            G = function() {
                var a = k.styles,
                    a = a && a.textAlign,
                    b = r + F,
                    c;
                c = h ? 0 : x;
                v(y) && q && ("center" === a || "right" === a) && (b += {
                        center: .5,
                        right: 1
                    }[a] * (y - q.width));
                if (b !== n.x || c !== n.y) n.attr("x", b), c !== D && n.attr("y", c);
                n.x = b;
                n.y = c
            };
            H = function(a, b) {
                p ? p.attr(a, b) : aa[a] = b
            };
            k.onAdd = function() {
                n.add(k);
                k.attr({
                    text: a || 0 === a ? a : "",
                    x: b,
                    y: c
                });
                p && v(e) && k.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            k.widthSetter = function(a) {
                y = a
            };
            k.heightSetter = function(a) {
                A = a
            };
            k.paddingSetter = function(a) {
                v(a) && a !== F && (F = k.padding = a, G())
            };
            k.paddingLeftSetter = function(a) {
                v(a) && a !== r && (r = a, G())
            };
            k.alignSetter = function(a) {
                a = {
                    left: 0,
                    center: .5,
                    right: 1
                }[a];
                a !== u && (u = a, q && k.attr({
                    x: z
                }))
            };
            k.textSetter = function(a) {
                a !== D && n.textSetter(a);
                K();
                G()
            };
            k["stroke-widthSetter"] = function(a, b) {
                a && (C = !0);
                Wa = a % 2 / 2;
                H(b, a)
            };
            k.strokeSetter = k.fillSetter = k.rSetter = function(a, b) {
                "fill" === b && a && (C = !0);
                H(b, a)
            };
            k.anchorXSetter = function(a, b) {
                e = a;
                H(b, E(a) - Wa - z)
            };
            k.anchorYSetter = function(a, b) {
                f = a;
                H(b, a - w)
            };
            k.xSetter = function(a) {
                k.x = a;
                u && (a -= u * ((y || q.width) + 2 * F));
                z = E(a);
                k.attr("translateX", z)
            };
            k.ySetter = function(a) {
                w = k.y = E(a);
                k.attr("translateY", w)
            };
            var I = k.css;
            return B(k, {
                css: function(a) {
                    if (a) {
                        var b = {};
                        a = J(a);
                        t(k.textProps, function(c) {
                            a[c] !== D && (b[c] = a[c], delete a[c])
                        });
                        n.css(b)
                    }
                    return I.call(k, a)
                },
                getBBox: function() {
                    return {
                        width: q.width + 2 * F,
                        height: q.height + 2 * F,
                        x: q.x - F,
                        y: q.y - F
                    }
                },
                shadow: function(a) {
                    p && p.shadow(a);
                    return k
                },
                destroy: function() {
                    S(k.element, "mouseenter");
                    S(k.element, "mouseleave");
                    n && (n = n.destroy());
                    p && (p = p.destroy());
                    V.prototype.destroy.call(k);
                    k = m = K = G = H = null
                }
            })
        }
    };
    Da.prototype = {
        addLabel: function() {
            var a = this.axis,
                b = a.options,
                c = a.chart,
                d = a.categories,
                e = a.names,
                f = this.pos,
                g = b.labels,
                h = a.tickPositions,
                l = f === h[0],
                m = f === h[h.length - 1],
                e = d ? r(d[f], e[f], f) : f,
                d = this.label,
                h = h.info,
                k;
            a.isDatetimeAxis && h && (k = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = l;
            this.isLast = m;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: l,
                isLast: m,
                dateTimeLabelFormat: k,
                value: a.isLog ? fa(a.lin2log(e)) : e
            });
            v(d) ? d && d.attr({
                text: b
            }) : (this.labelLength = (this.label = d = v(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(J(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
        },
        getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        },
        handleOverflow: function(a) {
            var b = this.axis,
                c = a.x,
                d = b.chart.chartWidth,
                e = b.chart.spacing,
                f = r(b.labelLeft, H(b.pos, e[3])),
                e = r(b.labelRight, w(b.pos + b.len, d - e[1])),
                g = this.label,
                h = this.rotation,
                l = {
                    left: 0,
                    center: .5,
                    right: 1
                }[b.labelAlign],
                m = g.getBBox().width,
                k = b.getSlotWidth(),
                n = k,
                p = 1,
                q, u = {};
            if (h) 0 > h && c - l * m < f ? q = E(c / qa(h * va) - f) : 0 < h && c + l * m > e && (q = E((d - c) / qa(h * va)));
            else if (d = c + (1 - l) * m, c - l * m < f ? n = a.x + n * (1 - l) - f : d > e && (n = e - a.x + n * l, p = -1), n = H(k, n), n < k && "center" === b.labelAlign && (a.x += p * (k - n - l * (k - H(m, n)))), m > n || b.autoRotation && g.styles.width) q = n;
            q && (u.width = q, b.options.labels.style.textOverflow || (u.textOverflow = "ellipsis"), g.css(u))
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var l = this.axis,
                m = l.transA,
                k = l.reversed,
                n = l.staggerLines,
                p = l.tickRotCorr || {
                        x: 0,
                        y: 0
                    }, q = e.y;
            v(q) || (q = 0 === l.side ? c.rotation ? -8 : -c.getBBox().height : 2 === l.side ? p.y + 8 : qa(c.rotation * va) * (p.y - c.getBBox(!1, 0).height / 2));
            a = a + e.x + p.x - (f && d ? f * m * (k ? -1 : 1) : 0);
            b = b + q - (f && !d ? f * m * (k ? 1 : -1) : 0);
            n && (c = g / (h || 1) % n, l.opposite && (c = n - c - 1), b += l.labelOffset / n * c);
            return {
                x: a,
                y: E(b)
            }
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M",
                a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a, b, c) {
            var d = this.axis,
                e = d.options,
                f = d.chart.renderer,
                g = d.horiz,
                h = this.type,
                l = this.label,
                m = this.pos,
                k = e.labels,
                n = this.gridLine,
                p = h ? h + "Grid" : "grid",
                q = h ? h + "Tick" : "tick",
                u = e[p + "LineWidth"],
                F = e[p + "LineColor"],
                t = e[p + "LineDashStyle"],
                p = d.tickSize(q),
                q = e[q + "Color"],
                y = this.mark,
                A = k.step,
                z = !0,
                v = d.tickmarkOffset,
                w = this.getPosition(g, m, v, b),
                aa = w.x,
                w = w.y,
                x = g && aa === d.pos + d.len || !g && w === d.pos ? -1 : 1;
            c = r(c, 1);
            this.isActive = !0;
            if (u && (m = d.getPlotLinePath(m + v, u * x, b, !0),
                n === D && (n = {
                    stroke: F,
                    "stroke-width": u
                }, t && (n.dashstyle = t), h || (n.zIndex = 1), b && (n.opacity = 0), this.gridLine = n = u ? f.path(m).attr(n).add(d.gridGroup) : null), !b && n && m)) n[this.isNew ? "attr" : "animate"]({
                d: m,
                opacity: c
            });
            p && (d.opposite && (p[0] = -p[0]), h = this.getMarkPath(aa, w, p[0], p[1] * x, g, f), y ? y.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: q,
                "stroke-width": p[1],
                opacity: c
            }).add(d.axisGroup));
            l && L(aa) && (l.xy = w = this.getLabelPosition(aa, w, l, g, k, v, a, A), this.isFirst && !this.isLast && !r(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !r(e.showLastLabel, 1) ? z = !1 : !g || d.isRadial || k.step || k.rotation || b || 0 === c || this.handleOverflow(w), A && a % A && (z = !1), z && L(w.y) ? (w.opacity = c, l[this.isNew ? "attr" : "animate"](w), this.isNew = !1) : l.attr("y", - 9999))
        },
        destroy: function() {
            Pa(this, this.axis)
        }
    };
    var gb = x.Axis = function() {
        this.init.apply(this, arguments)
    };
    gb.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {
                enabled: !0,
                style: {
                    color: "#606060",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0
            },
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return x.numberFormat(this.total, - 1)
                },
                style: J(ja.line.dataLabels.style, {
                    color: "#000000"
                })
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.chart = a;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options,
                e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.reversed = d.reversed;
            this.visible = !1 !== d.visible;
            this.zoomEnabled = !1 !== d.zoomEnabled;
            this.categories = d.categories || "category" === e;
            this.names = this.names || [];
            this.isLog = "logarithmic" === e;
            this.isDatetimeAxis = "datetime" === e;
            this.isLinked = v(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksTouched = 0;
            this.min = this.max = null;
            this.crosshair = r(d.crosshair, la(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events; - 1 === ta(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            a.inverted && c && this.reversed === D && (this.reversed = !0);
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) R(this, f, d[f]);
            this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
        },
        setOptions: function(a) {
            this.options = J(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions,
                this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], J(N[this.coll], a))
        },
        defaultLabelFormatter: function() {
            var a = this.axis,
                b = this.value,
                c = a.categories,
                d = this.dateTimeLabelFormat,
                e = N.lang.numericSymbols,
                f = e && e.length,
                g, h = a.options.labels.format,
                a = a.isLog ? b : a.tickInterval;
            if (h) g = Aa(h, this);
            else if (c) g = b;
            else if (d) g = Ba(d, b);
            else if (f && 1E3 <= a) for (; f-- && g === D;) c = Math.pow(1E3, f + 1), a >= c && 0 === 10 * b % c && null !== e[f] && (g = x.numberFormat(b / c, - 1) + e[f]);
            g === D && (g = 1E4 <= U(b) ? x.numberFormat(b, - 1) : x.numberFormat(b, - 1, D, ""));
            return g
        },
        getSeriesExtremes: function() {
            var a = this,
                b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.threshold = null;
            a.softThreshold = !a.isXAxis;
            a.buildStacks && a.buildStacks();
            t(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options,
                        e = d.threshold,
                        f;
                    a.hasVisibleSeries = !0;
                    a.isLog && 0 >= e && (e = null);
                    if (a.isXAxis) d = c.xData, d.length && (c = Ia(d), L(c) || c instanceof pa || (d = ua(d, function(a) {
                        return L(a)
                    }), c = Ia(d)), a.dataMin = H(r(a.dataMin, d[0]), c), a.dataMax = w(r(a.dataMax,
                        d[0]), Ca(d)));
                    else if (c.getExtremes(), f = c.dataMax, c = c.dataMin, v(c) && v(f) && (a.dataMin = H(r(a.dataMin, c), c), a.dataMax = w(r(a.dataMax, f), f)), v(e) && (a.threshold = e), !d.softThreshold || a.isLog) a.softThreshold = !1
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = this.linkedParent || this,
                h = 1,
                l = 0,
                m = d ? g.oldTransA : g.transA;
            d = d ? g.oldMin : g.min;
            var k = g.minPixelPadding;
            e = (g.isOrdinal || g.isBroken || g.isLog && e) && g.lin2val;
            m || (m = g.transA);
            c && (h *= -1, l = g.len);
            g.reversed && (h *= -1, l -= h * (g.sector || g.len));
            b ? (a = (a * h + l - k) / m + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), "between" === f && (f = .5), a = h * (a - d) * m + l + h * k + (L(f) ? m * f * g.pointRange : 0));
            return a
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart,
                g = this.left,
                h = this.top,
                l, m, k = c && f.oldChartHeight || f.chartHeight,
                n = c && f.oldChartWidth || f.chartWidth,
                p;
            l = this.transB;
            var q = function(a, b, c) {
                if (a < b || a > c) d ? a = H(w(b, a), c) : p = !0;
                return a
            };
            e = r(e, this.translate(a, null, null, c));
            a = c = E(e + l);
            l = m = E(k - e - l);
            L(e) ? this.horiz ? (l = h, m = k - this.bottom, a = c = q(a, g, g + this.width)) : (a = g, c = n - this.right, l = m = q(l, h, h + this.height)) : p = !0;
            return p && !d ? null : f.renderer.crispLine(["M", a, l, "L", c, m], b || 1)
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = fa(ca(b / a) * a),
                f = fa(ia(c / a) * a),
                g = [];
            if (b === c && L(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = fa(b + a);
                if (b === d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e, f = this.pointRangePadding || 0;
            e = this.min - f;
            var f = this.max + f,
                g = f - e;
            if (g && g / c < this.len / 3) if (this.isLog) for (f = b.length, e = 1; e < f; e++) d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0));
            else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek));
            else for (b = e + (b[0] - e) % c; b <= f; b += c) d.push(b);
            0 !== d.length && this.trimTicks(d, a.startOnTick, a.endOnTick);
            return d
        },
        adjustForMinRange: function() {
            var a = this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, l, m, k;
            this.isXAxis && this.minRange === D && !this.isLog && (v(a.min) || v(a.max) ? this.minRange = null : (t(this.series, function(a) {
                l = a.xData;
                for (g = m = a.xIncrement ? 1 : l.length - 1; 0 < g; g--) if (h = l[g] - l[g - 1], f === D || h < f) f = h
            }), this.minRange = H(5 * f, this.dataMax - this.dataMin)));
            c - b < this.minRange && (k = this.minRange, d = (k - c + b) / 2, d = [b - d, r(a.min, b - d)], e && (d[2] = this.dataMin), b = Ca(d), c = [b + k, r(a.max, b + k)], e && (c[2] = this.dataMax), c = Ia(c), c - b < k && (d[0] = c - k, d[1] = r(a.min, c - k), b = Ca(d)));
            this.min = b;
            this.max = c
        },
        getClosest: function() {
            var a;
            t(this.series, function(b) {
                var c = b.closestPointRange;
                !b.noSharedTooltip && v(c) && (a = v(a) ? H(a, c) : c)
            });
            return a
        },
        setAxisTranslation: function(a) {
            var b = this,
                c = b.max - b.min,
                d = b.axisPointRange || 0,
                e, f = 0,
                g = 0,
                h = b.linkedParent,
                l = !! b.categories,
                m = b.transA,
                k = b.isXAxis;
            if (k || l || d) h ? (f = h.minPointOffset, g = h.pointRangePadding) : (e = b.getClosest(), t(b.series, function(a) {
                var c = l ? 1 : k ? r(a.options.pointRange, e, 0) : b.axisPointRange || 0;
                a = a.options.pointPlacement;
                d = w(d,
                    c);
                b.single || (f = w(f, ka(a) ? 0 : c / 2), g = w(g, "on" === a ? 0 : c))
            })), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = H(d, c), k && (b.closestPointRange = e);
            a && (b.oldTransA = m);
            b.translationSlope = b.transA = m = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = m * f
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = b.isLog,
                f = b.log2lin,
                g = b.isDatetimeAxis,
                h = b.isXAxis,
                l = b.isLinked,
                m = d.maxPadding,
                k = d.minPadding,
                n = d.tickInterval,
                p = d.tickPixelInterval,
                q = b.categories,
                u = b.threshold,
                F = b.softThreshold,
                Q, y, A, z;
            g || q || l || this.getTickAmount();
            A = r(b.userMin, d.min);
            z = r(b.userMax, d.max);
            l ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = r(c.min, c.dataMin), b.max = r(c.max, c.dataMax), d.type !== b.linkedParent.options.type && W(11, 1)) : (!F && v(u) && (b.dataMin >= u ? (Q = u, k = 0) : b.dataMax <= u && (y = u, m = 0)), b.min = r(A, Q, b.dataMin), b.max = r(z, y, b.dataMax));
            e && (!a && 0 >= H(b.min, r(b.dataMin, b.min)) && W(10,
                1), b.min = fa(f(b.min), 15), b.max = fa(f(b.max), 15));
            b.range && v(b.max) && (b.userMin = b.min = A = w(b.min, b.minFromRange()), b.userMax = z = b.max, b.range = null);
            I(b, "foundExtremes");
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            !(q || b.axisPointRange || b.usePercentage || l) && v(b.min) && v(b.max) && (f = b.max - b.min) && (!v(A) && k && (b.min -= f * k), !v(z) && m && (b.max += f * m));
            L(d.floor) && (b.min = w(b.min, d.floor));
            L(d.ceiling) && (b.max = H(b.max, d.ceiling));
            F && v(b.dataMin) && (u = u || 0, !v(A) && b.min < u && b.dataMin >= u ? b.min = u : !v(z) && b.max > u && b.dataMax <= u && (b.max = u));
            b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : l && !n && p === b.linkedParent.options.tickPixelInterval ? n = b.linkedParent.tickInterval : r(n, this.tickAmount ? (b.max - b.min) / w(this.tickAmount - 1, 1) : void 0, q ? 1 : (b.max - b.min) * p / w(b.len, p));
            h && !a && t(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && !n && (b.tickInterval = w(b.pointRange, b.tickInterval));
            a = r(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
            !n && b.tickInterval < a && (b.tickInterval = a);
            g || e || n || (b.tickInterval = Ab(b.tickInterval, null, ba.pow(10, ca(ba.log(b.tickInterval) / ba.LN10)), r(d.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !! this.tickAmount));
            !this.tickAmount && this.len && (b.tickInterval = b.unsquish());
            this.setTickPositions()
        },
        setTickPositions: function() {
            var a = this.options,
                b, c = a.tickPositions,
                d = a.tickPositioner,
                e = a.startOnTick,
                f = a.endOnTick,
                g;
            this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
            this.minorTickInterval = "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = c && c.slice();
            !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval,
                this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max]))) && (this.tickPositions = b = d);
            this.isLinked || (this.trimTicks(b, e, f), this.min === this.max && v(this.min) && !this.tickAmount && (g = !0, this.min -= .5, this.max += .5), this.single = g, c || d || this.adjustTickAmount())
        },
        trimTicks: function(a, b, c) {
            var d = a[0],
                e = a[a.length - 1],
                f = this.minPointOffset || 0;
            if (b) this.min = d;
            else for (; this.min - f > a[0];) a.shift();
            if (c) this.max = e;
            else for (; this.max + f < a[a.length - 1];) a.pop();
            0 === a.length && v(d) && a.push((e + d) / 2)
        },
        alignToOthers: function() {
            var a = {}, b, c = this.options;
            !1 !== this.chart.options.chart.alignTicks && !1 !== c.alignTicks && t(this.chart[this.coll], function(c) {
                var e = c.options,
                    e = [c.horiz ? e.left : e.top, e.width, e.height, e.pane].join();
                c.series.length && (a[e] ? b = !0 : a[e] = 1)
            });
            return b
        },
        getTickAmount: function() {
            var a = this.options,
                b = a.tickAmount,
                c = a.tickPixelInterval;
            !v(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
            !b && this.alignToOthers() && (b = ia(this.len / c) + 1);
            4 > b && (this.finalTickAmt = b, b = 5);
            this.tickAmount = b
        },
        adjustTickAmount: function() {
            var a = this.tickInterval,
                b = this.tickPositions,
                c = this.tickAmount,
                d = this.finalTickAmt,
                e = b && b.length;
            if (e < c) {
                for (; b.length < c;) b.push(fa(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1]
            } else e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (v(d)) {
                for (a = c = b.length; a--;)(3 === d && 1 === a % 2 || 2 >= d && 0 < a && a < c - 1) && b.splice(a, 1);
                this.finalTickAmt = D
            }
        },
        setScale: function() {
            var a, b;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            b = this.len !== this.oldAxisLength;
            t(this.series, function(b) {
                if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0
            });
            b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this,
                g = f.chart;
            c = r(c, !0);
            t(f.series, function(a) {
                delete a.kdTree
            });
            e = B(e, {
                min: a,
                max: b
            });
            I(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            var c = this.dataMin,
                d = this.dataMax,
                e = this.options,
                f = H(c, r(e.min, c)),
                e = w(d, r(e.max, d));
            this.allowZoomOutside || (v(c) && a <= f && (a = f), v(d) && b >= e && (b = e));
            this.displayBtn = a !== D || b !== D;
            this.setExtremes(a, b, !1, D, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = this.horiz,
                e = r(b.width, a.plotWidth - c + (b.offsetRight || 0)),
                f = r(b.height, a.plotHeight),
                g = r(b.top, a.plotTop),
                b = r(b.left, a.plotLeft + c),
                c = /%$/;
            c.test(f) && (f = Math.round(parseFloat(f) / 100 * a.plotHeight));
            c.test(g) && (g = Math.round(parseFloat(g) / 100 * a.plotHeight + a.plotTop));
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = w(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function() {
            var a = this.isLog,
                b = this.lin2log;
            return {
                min: a ? fa(b(this.min)) : this.min,
                max: a ? fa(b(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = this.lin2log,
                d = b ? c(this.min) : this.min,
                b = b ? c(this.max) : this.max;
            null === a ? a = 0 > b ? b : d : d > a ? a = d : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function(a) {
            a = (r(a, 0) - 90 * this.side + 720) % 360;
            return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
        },
        tickSize: function(a) {
            var b = this.options,
                c = b[a + "Length"],
                d = r(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0);
            if (d && c) return "inside" === b[a + "Position"] && (c = -c), [c, d]
        },
        labelMetrics: function() {
            return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
        },
        unsquish: function() {
            var a = this.options.labels,
                b = this.horiz,
                c = this.tickInterval,
                d = c,
                e = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c),
                f,
                g = a.rotation,
                h = this.labelMetrics(),
                l, m = Number.MAX_VALUE,
                k, n = function(a) {
                    a /= e || 1;
                    a = 1 < a ? ia(a) : 1;
                    return a * c
                };
            b ? (k = !a.staggerLines && !a.step && (v(g) ? [g] : e < r(a.autoRotationLimit, 80) && a.autoRotation)) && t(k, function(a) {
                var b;
                if (a === g || a && -90 <= a && 90 >= a) l = n(U(h.h / Ea(va * a))), b = l + U(a / 360), b < m && (m = b, f = a, d = l)
            }) : a.step || (d = n(h.h));
            this.autoRotation = k;
            this.labelRotation = r(f, g);
            return d
        },
        getSlotWidth: function() {
            var a = this.chart,
                b = this.horiz,
                c = this.options.labels,
                d = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                e = a.margin[3];
            return b && 2 > (c.step || 0) && !c.rotation && (this.staggerLines || 1) * a.plotWidth / d || !b && (e && e - a.spacing[3] || .33 * a.chartWidth)
        },
        renderUnsquish: function() {
            var a = this.chart,
                b = a.renderer,
                c = this.tickPositions,
                d = this.ticks,
                e = this.options.labels,
                f = this.horiz,
                g = this.getSlotWidth(),
                h = w(1, E(g - 2 * (e.padding || 5))),
                l = {}, m = this.labelMetrics(),
                k = e.style.textOverflow,
                n, p = 0,
                q, u;
            ka(e.rotation) || (l.rotation = e.rotation || 0);
            if (this.autoRotation) t(c, function(a) {
                (a = d[a]) && a.labelLength > p && (p = a.labelLength)
            }),
                p > h && p > m.h ? l.rotation = this.labelRotation : this.labelRotation = 0;
            else if (g && (n = {
                    width: h + "px"
                }, !k)) for (n.textOverflow = "clip", q = c.length; !f && q--;) if (u = c[q], h = d[u].label) "ellipsis" === h.styles.textOverflow ? h.css({
                textOverflow: "clip"
            }) : d[u].labelLength > g && h.css({
                width: g + "px"
            }), h.getBBox().height > this.len / c.length - (m.h - m.f) && (h.specCss = {
                textOverflow: "ellipsis"
            });
            l.rotation && (n = {
                width: (p > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px"
            }, k || (n.textOverflow = "ellipsis"));
            if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation)) l.align = this.labelAlign;
            t(c, function(a) {
                var b = (a = d[a]) && a.label;
                b && (b.attr(l), n && b.css(J(n, b.specCss)), delete b.specCss, a.rotation = l.rotation)
            });
            this.tickRotCorr = b.rotCorr(m.b, this.labelRotation || 0, 0 !== this.side)
        },
        hasData: function() {
            return this.hasVisibleSeries || v(this.min) && v(this.max) && !! this.tickPositions
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                l = b.inverted ? [1, 0, 3, 2][h] : h,
                m, k, n = 0,
                p, q = 0,
                u = d.title,
                F = d.labels,
                Q = 0,
                y = a.opposite,
                A = b.axisOffset,
                b = b.clipOffset,
                z = [-1, 1, 1, - 1][h],
                x, D = a.axisParent,
                aa = this.tickSize("tick");
            m = a.hasData();
            a.showAxis = k = m || r(d.showEmpty, !0);
            a.staggerLines = a.horiz && F.staggerLines;
            a.axisGroup || (a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(D), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(D), a.labelGroup = c.g("axis-labels").attr({
                zIndex: F.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add(D));
            if (m || a.isLinked) t(e, function(b) {
                f[b] ? f[b].addLabel() : f[b] = new Da(a, b)
            }), a.renderUnsquish(), !1 === F.reserveSpace || 0 !== h && 2 !== h && {
                1: "left",
                3: "right"
            }[h] !== a.labelAlign && "center" !== a.labelAlign || t(e, function(a) {
                Q = w(f[a].getLabelSize(), Q)
            }), a.staggerLines && (Q *= a.staggerLines, a.labelOffset = Q * (a.opposite ? -1 : 1));
            else for (x in f) f[x].destroy(), delete f[x];
            u && u.text && !1 !== u.enabled && (a.axisTitle || ((x = u.textAlign) || (x = (g ? {
                low: "left",
                middle: "center",
                high: "right"
            } : {
                low: y ? "right" : "left",
                middle: "center",
                high: y ? "left" : "right"
            })[u.align]), a.axisTitle = c.text(u.text, 0, 0, u.useHTML).attr({
                zIndex: 7,
                rotation: u.rotation || 0,
                align: x
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(u.style).add(a.axisGroup), a.axisTitle.isNew = !0), k && (n = a.axisTitle.getBBox()[g ? "height" : "width"], p = u.offset, q = v(p) ? 0 : r(u.margin, g ? 5 : 10)), a.axisTitle[k ? "show" : "hide"](!0));
            a.offset = z * r(d.offset, A[h]);
            a.tickRotCorr = a.tickRotCorr || {
                    x: 0,
                    y: 0
                };
            c = 0 === h ? -a.labelMetrics().h : 2 === h ? a.tickRotCorr.y : 0;
            q = Math.abs(Q) + q;
            Q && (q = q - c + z * (g ? r(F.y, a.tickRotCorr.y + 8 * z) : F.x));
            a.axisTitleMargin = r(p, q);
            A[h] = w(A[h], a.axisTitleMargin + n + z * a.offset, q, m && e.length && aa ? aa[0] : 0);
            d = d.offset ? 0 : 2 * ca(d.lineWidth / 2);
            b[l] = w(b[l], d)
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f = this.left + (c ? this.width : 0) + d,
                d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        },
        getTitlePosition: function() {
            var a = this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                l = e.x || 0,
                m = e.y || 0,
                k = O(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? k : 0);
            return {
                x: a ? d + l : b + (g ? this.width : 0) + h + l,
                y: a ? b + m - (g ? this.height : 0) + h : d + m
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.isLog,
                f = a.lin2log,
                g = a.isLinked,
                h = a.tickPositions,
                l = a.axisTitle,
                m = a.ticks,
                k = a.minorTicks,
                n = a.alternateBands,
                p = d.stackLabels,
                q = d.alternateGridColor,
                u = a.tickmarkOffset,
                r = d.lineWidth,
                Q, y = b.hasRendered && L(a.oldMin),
                A = a.showAxis,
                z = Ja(c.globalAnimation),
                w, v;
            a.labelEdge.length = 0;
            a.overlap = !1;
            t([m, k, n], function(a) {
                for (var b in a) a[b].isActive = !1
            });
            if (a.hasData() || g) a.minorTickInterval && !a.categories && t(a.getMinorTickPositions(), function(b) {
                k[b] || (k[b] = new Da(a, b, "minor"));
                y && k[b].isNew && k[b].render(null, !0);
                k[b].render(null, !1, 1)
            }), h.length && (t(h, function(b, c) {
                if (!g || b >= a.min && b <= a.max) m[b] || (m[b] = new Da(a, b)), y && m[b].isNew && m[b].render(c, !0, .1), m[b].render(c)
            }), u && (0 === a.min || a.single) && (m[-1] || (m[-1] = new Da(a, - 1, null, !0)), m[-1].render(-1))), q && t(h, function(c, d) {
                v = h[d + 1] !== D ? h[d + 1] + u : a.max - u;
                0 === d % 2 && c < a.max && v <= a.max + (b.polar ? -u : u) && (n[c] || (n[c] = new x.PlotLineOrBand(a)), w = c + u, n[c].options = {
                    from: e ? f(w) : w,
                    to: e ? f(v) : v,
                    color: q
                }, n[c].render(), n[c].isActive = !0)
            }), a._addedPlotLB || (t((d.plotLines || []).concat(d.plotBands || []), function(b) {
                a.addPlotBandOrLine(b)
            }), a._addedPlotLB = !0);
            t([m, k, n], function(a) {
                var c, d, e = [],
                    f = z.duration;
                for (c in a) a[c].isActive || (a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c));
                ya(function() {
                    for (d = e.length; d--;) a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                }, a !== n && b.hasRendered && f ? f : 0)
            });
            r && (Q = a.getLinePath(r), a.axisLine ? a.axisLine.animate({
                d: Q
            }) : a.axisLine = c.path(Q).attr({
                stroke: d.lineColor,
                "stroke-width": r,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[A ? "show" : "hide"](!0));
            l && A && (l[l.isNew ? "attr" : "animate"](a.getTitlePosition()), l.isNew = !1);
            p && p.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function() {
            this.visible && (this.render(), t(this.plotLinesAndBands,

                function(a) {
                    a.render()
                }));
            t(this.series, function(a) {
                a.isDirty = !0
            })
        },
        destroy: function(a) {
            var b = this,
                c = b.stacks,
                d, e = b.plotLinesAndBands;
            a || S(b);
            for (d in c) Pa(c[d]), c[d] = null;
            t([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                Pa(a)
            });
            for (a = e.length; a--;) e[a].destroy();
            t("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "), function(a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(a, b) {
            var c, d = this.crosshair,
                e, f;
            this.crosshair && !1 !== (v(b) || !r(d.snap, !0)) ? (r(d.snap, !0) ? v(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : r(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, null === c ? this.hideCrosshair() : (e = this.categories && !this.isRadial, f = r(d.width, e ? this.transA : 1), this.cross ? this.cross.attr({
                d: c,
                visibility: "visible",
                "stroke-width": f
            }) : (e = {
                "pointer-events": "none",
                "stroke-width": f,
                stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                zIndex: r(d.zIndex, 2)
            }, d.dashStyle && (e.dashstyle = d.dashStyle), this.cross = this.chart.renderer.path(c).attr(e).add()))) : this.hideCrosshair()
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    };
    B(gb.prototype, void 0);
    var xb = x.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    xb.prototype = {
        init: function(a, b) {
            var c = b.borderWidth,
                d = b.style,
                e = O(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = a.renderer.label("",
                0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e,
                fill: b.backgroundColor,
                "stroke-width": c,
                r: b.borderRadius,
                zIndex: 8
            }).css(d).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            ga || this.label.shadow(b.shadow);
            this.shared = b.shared
        },
        destroy: function() {
            this.label && (this.label = this.label.destroy());
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        },
        move: function(a, b, c, d) {
            var e = this,
                f = e.now,
                g = !1 !== e.options.animation && !e.isHidden && (1 < U(a - f.x) || 1 < U(b - f.y)),
                h = e.followPointer || 1 < e.len;
            B(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? D : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? D : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            g && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32))
        },
        hide: function(a) {
            var b = this;
            clearTimeout(this.hideTimer);
            a = r(a, this.options.hideDelay, 500);
            this.isHidden || (this.hideTimer = ya(function() {
                b.label[a ? "fadeOut" : "hide"]();
                b.isHidden = !0
            }, a))
        },
        getAnchor: function(a, b) {
            var c, d = this.chart,
                e = d.inverted,
                f = d.plotTop,
                g = d.plotLeft,
                h = 0,
                l = 0,
                m, k;
            a = la(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === D && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (t(a, function(a) {
                m = a.series.yAxis;
                k = a.series.xAxis;
                h += a.plotX + (!e && k ? k.left - g : 0);
                l += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && m ? m.top - f : 0)
            }), h /= a.length, l /= a.length, c = [e ? d.plotWidth - l : h, this.shared && !e && 1 < a.length && b ? b.chartY - f : e ? d.plotHeight - h : l]);
            return wa(c, E)
        },
        getPosition: function(a, b, c) {
            var d = this.chart,
                e = this.distance,
                f = {}, g = c.h || 0,
                h, l = ["y", d.chartHeight,
                    b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight],
                m = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth],
                k = !this.followPointer && r(c.ttBelow, !d.inverted === !! c.negative),
                n = function(a, b, c, d, h, l) {
                    var m = c < d - e,
                        n = d + e + c < b,
                        p = d - e - c;
                    d += e;
                    if (k && n) f[a] = d;
                    else if (!k && m) f[a] = p;
                    else if (m) f[a] = H(l - c, 0 > p - g ? p : p - g);
                    else if (n) f[a] = w(h, d + g + c > b ? d : d + g);
                    else return !1
                }, p = function(a, b, c, d) {
                    var g;
                    d < e || d > b - e ? g = !1 : f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2;
                    return g
                }, q = function(a) {
                    var b = l;
                    l = m;
                    m = b;
                    h = a
                }, u = function() {
                    !1 !== n.apply(0, l) ? !1 !== p.apply(0, m) || h || (q(!0), u()) : h ? f.x = f.y = 0 : (q(!0), u())
                };
            (d.inverted || 1 < this.len) && q();
            u();
            return f
        },
        defaultFormatter: function(a) {
            var b = this.points || la(this),
                c;
            c = [a.tooltipFooterHeaderFormatter(b[0])];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("")
        },
        refresh: function(a, b) {
            var c = this.chart,
                d = this.label,
                e = this.options,
                f, g, h, l = {}, m, k = [];
            m = e.formatter || this.defaultFormatter;
            var l = c.hoverPoints,
                n, p = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = la(a)[0].series.tooltipOptions.followPointer;
            h = this.getAnchor(a, b);
            f = h[0];
            g = h[1];
            !p || a.series && a.series.noSharedTooltip ? l = a.getLabelConfig() : (c.hoverPoints = a, l && t(l, function(a) {
                a.setState()
            }), t(a, function(a) {
                a.setState("hover");
                k.push(a.getLabelConfig())
            }), l = {
                x: a[0].category,
                y: a[0].y
            }, l.points = k, this.len = k.length, a = a[0]);
            m = m.call(l, this);
            l = a.series;
            this.distance = r(l.tooltipOptions.distance, 16);
            !1 === m ? this.hide() : (this.isHidden && (xa(d), d.attr("opacity", 1).show()), d.attr({
                text: m
            }),
                n = e.borderColor || a.color || l.color || "#606060", d.attr({
                stroke: n
            }), this.updatePosition({
                plotX: f,
                plotY: g,
                negative: a.negative,
                ttBelow: a.ttBelow,
                h: h[2] || 0
            }), this.isHidden = !1);
            I(c, "tooltipRefresh", {
                text: m,
                x: f + c.plotLeft,
                y: g + c.plotTop,
                borderColor: n
            })
        },
        updatePosition: function(a) {
            var b = this.chart,
                c = this.label,
                c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(E(c.x), E(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        },
        getXDateFormat: function(a, b, c) {
            var d;
            b = b.dateTimeLabelFormats;
            var e = c && c.closestPointRange,
                f, g = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                }, h, l = "millisecond";
            if (e) {
                h = Ba("%m-%d %H:%M:%S.%L", a.x);
                for (f in Sa) {
                    if (e === Sa.week && +Ba("%w", a.x) === c.options.startOfWeek && "00:00:00.000" === h.substr(6)) {
                        f = "week";
                        break
                    }
                    if (Sa[f] > e) {
                        f = l;
                        break
                    }
                    if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) break;
                    "week" !== f && (l = f)
                }
                f && (d = b[f])
            } else d = b.day;
            return d || b.year
        },
        tooltipFooterHeaderFormatter: function(a, b) {
            var c = b ? "footer" : "header",
                d = a.series,
                e = d.tooltipOptions,
                f = e.xDateFormat,
                g = d.xAxis,
                h = g && "datetime" === g.options.type && L(a.key),
                c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a, e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
            return Aa(c, {
                point: a,
                series: d
            })
        },
        bodyFormatter: function(a) {
            return wa(a, function(a) {
                var c = a.series.tooltipOptions;
                return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
            })
        }
    };
    var ma;
    La = C && C.documentElement.ontouchstart !== D;
    var yb = x.Pointer = function(a, b) {
        this.init(a, b)
    };
    yb.prototype = {
        init: function(a, b) {
            var c = b.chart,
                d = c.events,
                e = ga ? "" : c.zoomType,
                c = a.inverted,
                f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !! d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            x.Tooltip && b.tooltip.enabled && (a.tooltip = new xb(a, b.tooltip), this.followTouchMove = r(b.tooltip.followTouchMove, !0));
            this.setDOMEvents()
        },
        normalize: function(a, b) {
            var c, d;
            a = a || G.event;
            a.target || (a.target = a.srcElement);
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            b || (this.chartPosition = b = fb(this.chart.container));
            d.pageX === D ? (c = w(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return B(a, {
                chartX: E(c),
                chartY: E(d)
            })
        },
        getCoordinates: function(a) {
            var b = {
                xAxis: [],
                yAxis: []
            };
            t(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: c,
                    value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                })
            });
            return b
        },
        runPointActions: function(a) {
            var b = this.chart,
                c = b.series,
                d = b.tooltip,
                e = d ? d.shared : !1,
                f = b.hoverPoint,
                g = b.hoverSeries,
                h, l = [Number.MAX_VALUE, Number.MAX_VALUE],
                m, k, n = [],
                p = [],
                q;
            if (!e && !g) for (h = 0; h < c.length; h++) if (c[h].directTouch || !c[h].options.stickyTracking) c = [];
            g && (e ? g.noSharedTooltip : g.directTouch) && f ? p = [f] : (t(c, function(b) {
                m = b.noSharedTooltip && e;
                k = !e && b.directTouch;
                b.visible && !m && !k && r(b.options.enableMouseTracking, !0) && (q = b.searchPoint(a, !m && 1 === b.kdDimensions)) && n.push(q)
            }), t(n, function(a) {
                a && t(["dist", "distX"], function(b, c) {
                    if (L(a[b])) {
                        var d = a[b] === l[c] && a.series.group.zIndex >= p[c].series.group.zIndex;
                        if (a[b] < l[c] || d) l[c] = a[b], p[c] = a
                    }
                })
            }));
            if (e) for (h = n.length; h--;)(n[h].clientX !== p[1].clientX || n[h].series.noSharedTooltip) && n.splice(h, 1);
            if (p[0] && (p[0] !== this.prevKDPoint || d && d.isHidden)) if (e && !p[0].series.noSharedTooltip) n.length && d && d.refresh(n, a), t(n, function(b) {
                b.onMouseOver(a, b !== (g && g.directTouch && f || p[0]))
            }), this.prevKDPoint = p[1];
            else {
                d && d.refresh(p[0], a);
                if (!g || !g.directTouch) p[0].onMouseOver(a);
                this.prevKDPoint = p[0]
            } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}],
                a), d.updatePosition({
                plotX: c[0],
                plotY: c[1]
            }));
            this._onDocumentMouseMove || (this._onDocumentMouseMove = function(a) {
                if (T[ma]) T[ma].pointer.onDocumentMouseMove(a)
            }, R(C, "mousemove", this._onDocumentMouseMove));
            t(e ? n : [r(f, p[1])], function(c) {
                t(b.axes, function(b) {
                    c && c.series[b.coll] !== b || b.drawCrosshair(a, c)
                })
            })
        },
        reset: function(a, b) {
            var c = this.chart,
                d = c.hoverSeries,
                e = c.hoverPoint,
                f = c.hoverPoints,
                g = c.tooltip,
                h = g && g.shared ? f : e;
            a && h && t(la(h), function(b) {
                b.series.isCartesian && void 0 === b.plotX && (a = !1)
            });
            if (a) g && h && (g.refresh(h), e && (e.setState(e.state, !0), t(c.axes, function(a) {
                r(a.crosshair && a.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair()
            })));
            else {
                if (e) e.onMouseOut();
                f && t(f, function(a) {
                    a.setState()
                });
                if (d) d.onMouseOut();
                g && g.hide(b);
                this._onDocumentMouseMove && (S(C, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null);
                t(c.axes, function(a) {
                    a.hideCrosshair()
                });
                this.hoverX = c.hoverPoints = c.hoverPoint = null
            }
        },
        scaleGroups: function(a, b) {
            var c = this.chart,
                d;
            t(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        },
        dragStart: function(a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY
        },
        drag: function(a) {
            var b = this.chart,
                c = b.options.chart,
                d = a.chartX,
                e = a.chartY,
                f = this.zoomHor,
                g = this.zoomVert,
                h = b.plotLeft,
                l = b.plotTop,
                m = b.plotWidth,
                k = b.plotHeight,
                n, p = this.selectionMarker,
                q = this.mouseDownX,
                u = this.mouseDownY,
                r = c.panKey && a[c.panKey + "Key"];
            p && p.touch || (d < h ? d = h : d > h + m && (d = h + m), e < l ? e = l : e > l + k && (e = l + k), this.hasDragged = Math.sqrt(Math.pow(q - d, 2) + Math.pow(u - e, 2)), 10 < this.hasDragged && (n = b.isInsidePlot(q - h, u - l), b.hasCartesianSeries && (this.zoomX || this.zoomY) && n && !r && !p && (this.selectionMarker = p = b.renderer.rect(h, l, f ? 1 : m, g ? 1 : k, 0).attr({
                fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                zIndex: 7
            }).add()), p && f && (d -= q, p.attr({
                width: U(d),
                x: (0 < d ? 0 : d) + q
            })), p && g && (d = e - u, p.attr({
                height: U(d),
                y: (0 < d ? 0 : d) + u
            })), n && !p && c.panning && b.pan(a, c.panning)))
        },
        drop: function(a) {
            var b = this,
                c = this.chart,
                d = this.hasPinched;
            if (this.selectionMarker) {
                var e = {
                        originalEvent: a,
                        xAxis: [],
                        yAxis: []
                    }, f = this.selectionMarker,
                    g = f.attr ? f.attr("x") : f.x,
                    h = f.attr ? f.attr("y") : f.y,
                    l = f.attr ? f.attr("width") : f.width,
                    m = f.attr ? f.attr("height") : f.height,
                    k;
                if (this.hasDragged || d) t(c.axes, function(c) {
                    if (c.zoomEnabled && v(c.min) && (d || b[{
                            xAxis: "zoomX",
                            yAxis: "zoomY"
                        }[c.coll]])) {
                        var f = c.horiz,
                            q = "touchend" === a.type ? c.minPixelPadding : 0,
                            u = c.toValue((f ? g : h) + q),
                            f = c.toValue((f ? g + l : h + m) - q);
                        e[c.coll].push({
                            axis: c,
                            min: H(u, f),
                            max: w(u, f)
                        });
                        k = !0
                    }
                }), k && I(c, "selection", e, function(a) {
                    c.zoom(B(a, d ? {
                        animation: !1
                    } : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                d && this.scaleGroups()
            }
            c && (Y(c.container, {
                cursor: c._cursor
            }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        },
        onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        },
        onDocumentMouseUp: function(a) {
            T[ma] && T[ma].pointer.drop(a)
        },
        onDocumentMouseMove: function(a) {
            var b = this.chart,
                c = this.chartPosition;
            a = this.normalize(a, c);
            !c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
        },
        onContainerMouseLeave: function(a) {
            var b = T[ma];
            b && (a.relatedTarget || a.toElement) && (b.pointer.reset(), b.pointer.chartPosition = null)
        },
        onContainerMouseMove: function(a) {
            var b = this.chart;
            v(ma) && T[ma] && T[ma].mouseIsDown || (ma = b.index);
            a = this.normalize(a);
            a.returnValue = !1;
            "mousedown" === b.mouseIsDown && this.drag(a);
            !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a)
        },
        inClass: function(a, b) {
            for (var c; a;) {
                if (c = M(a, "class")) {
                    if (-1 !== c.indexOf(b)) return !0;
                    if (-1 !== c.indexOf("highcharts-container")) return !1
                }
                a = a.parentNode
            }
        },
        onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries;
            a = a.relatedTarget || a.toElement;
            if (b && a && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a, "highcharts-series-" + b.index)) b.onMouseOut()
        },
        onContainerClick: function(a) {
            var b = this.chart,
                c = b.hoverPoint,
                d = b.plotLeft,
                e = b.plotTop;
            a = this.normalize(a);
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (I(c.series, "click", B(a, {
                point: c
            })), b.hoverPoint && c.firePointEvent("click", a)) : (B(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && I(b, "click", a)))
        },
        setDOMEvents: function() {
            var a = this,
                b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            R(b, "mouseleave", a.onContainerMouseLeave);
            1 === Ma && R(C, "mouseup", a.onDocumentMouseUp);
            La && (b.ontouchstart = function(b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function(b) {
                a.onContainerTouchMove(b)
            }, 1 === Ma && R(C, "touchend", a.onDocumentTouchEnd))
        },
        destroy: function() {
            var a;
            S(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            Ma || (S(C, "mouseup",
                this.onDocumentMouseUp), S(C, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    };
    var Xa = x.Legend = function(a, b) {
        this.init(a, b)
    };
    Xa.prototype = {
        init: function(a, b) {
            var c = this,
                d = b.itemStyle,
                e = b.itemMarginTop || 0;
            this.options = b;
            b.enabled && (c.itemStyle = d, c.itemHiddenStyle = J(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = r(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = r(b.symbolWidth, 16), c.pages = [], c.render(), R(c.chart, "endResize", function() {
                c.positionCheckboxes()
            }))
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e = a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color : g,
                h = b ? a.legendColor || a.color || "#CCC" : g,
                g = a.options && a.options.marker,
                l = {
                    fill: h
                }, m;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker) for (m in l.stroke = h, g = a.convertAttribs(g), g) d = g[m], d !== D && (l[m] = d);
                f.attr(l)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            f && (f.x = e, f.y = d)
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            t(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Qa(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            b && (this.box = b.destroy());
            a && (this.group = a.destroy())
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight,
                e = this.titleHeight;
            b && (c = b.translateY, t(this.allItems, function(f) {
                var g = f.checkbox,
                    h;
                g && (h = c + e + g.y + (a || 0) + 3, Y(g, {
                    left: b.translateX + f.checkboxOffset + g.x - 20 + "px",
                    top: h + "px",
                    display: h > c - 6 && h < c + d - 6 ? "" : "none"
                }))
            }))
        },
        renderTitle: function() {
            var a = this.padding,
                b = this.options.title,
                c = 0;
            b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                zIndex: 1
            }).css(b.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
                translateY: c
            }));
            this.titleHeight = c
        },
        setText: function(a) {
            var b = this.options;
            a.legendItem.attr({
                text: b.labelFormat ? Aa(b.labelFormat, a) : b.labelFormatter.call(a)
            })
        },
        renderItem: function(a) {
            var b = this.chart,
                c = b.renderer,
                d = this.options,
                e = "horizontal" === d.layout,
                f = this.symbolWidth,
                g = d.symbolPadding,
                h = this.itemStyle,
                l = this.itemHiddenStyle,
                m = this.padding,
                k = e ? r(d.itemDistance, 20) : 0,
                n = !d.rtl,
                p = d.width,
                q = d.itemMarginBottom || 0,
                u = this.itemMarginTop,
                t = this.initialItemX,
                v = a.legendItem,
                y = a.series && a.series.drawLegendSymbol ? a.series : a,
                A = y.options,
                A = this.createCheckboxForItem && A && A.showCheckbox,
                z = d.useHTML;
            v || (a.legendGroup = c.g("legend-item").attr({
                zIndex: 1
            }).add(this.scrollGroup), a.legendItem = v = c.text("", n ? f + g : -g, this.baseline || 0, z).css(J(a.visible ? h : l)).attr({
                align: n ? "left" : "right",
                zIndex: 2
            }).add(a.legendGroup), this.baseline || (this.fontMetrics = c.fontMetrics(h.fontSize, v), this.baseline = this.fontMetrics.f + 3 + u, v.attr("y", this.baseline)), y.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, v, z, h, l), A && this.createCheckboxForItem(a));
            this.colorizeItem(a, a.visible);
            this.setText(a);
            c = v.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (A ? 20 : 0);
            this.itemHeight = g = E(a.legendItemHeight || c.height);
            e && this.itemX - t + f > (p || b.chartWidth - 2 * m - t - d.x) && (this.itemX = t, this.itemY += u + this.lastLineHeight + q, this.lastLineHeight = 0);
            this.maxItemWidth = w(this.maxItemWidth, f);
            this.lastItemY = u + this.itemY + q;
            this.lastLineHeight = w(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += u + g + q, this.lastLineHeight = g);
            this.offsetWidth = p || w((e ? this.itemX - t - k : f) + m, this.offsetWidth)
        },
        getAllItems: function() {
            var a = [];
            t(this.chart.series, function(b) {
                var c = b.options;
                r(c.showInLegend, v(c.linkedTo) ? !1 : D, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)))
            });
            return a
        },
        adjustMargins: function(a, b) {
            var c = this.chart,
                d = this.options,
                e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
            this.display && !d.floating && t([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(f, g) {
                f.test(e) && !v(a[g]) && (c[Ta[g]] = w(c[Ta[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, - 1, - 1, 1][g] * d[g % 2 ? "x" : "y"] + r(d.margin, 12) + b[g]))
            })
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, l = a.box,
                m = a.options,
                k = a.padding,
                n = m.borderWidth,
                p = m.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            d || (a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup));
            a.renderTitle();
            e = a.getAllItems();
            Oa(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            m.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !! e.length;
            a.lastLineHeight = 0;
            t(e, function(b) {
                a.renderItem(b)
            });
            g = (m.width || a.offsetWidth) + k;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            h += k;
            if (n || p) l ? 0 < g && 0 < h && (l[l.isNew ? "attr" : "animate"](l.crisp({
                width: g,
                height: h
            })), l.isNew = !1) : (a.box = l = c.rect(0, 0, g, h, m.borderRadius, n || 0).attr({
                stroke: m.borderColor,
                "stroke-width": n || 0,
                fill: p || "none"
            }).add(d).shadow(m.shadow), l.isNew = !0), l[f ? "show" : "hide"]();
            a.legendWidth = g;
            a.legendHeight = h;
            t(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(B({
                width: g,
                height: h
            }, m), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this,
                c = this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding,
                g = e.maxHeight,
                h, l = this.clipRect,
                m = e.navigation,
                k = r(m.animation, !0),
                n = m.arrowSize || 12,
                p = this.nav,
                q = this.pages,
                u = this.padding,
                F, v = this.allItems,
                y = function(a) {
                    l.attr({
                        height: a
                    });
                    b.contentGroup.div && (b.contentGroup.div.style.clip = "rect(" + u + "px,9999px," + (u + a) + "px,0)")
                };
            "horizontal" === e.layout && (f /= 2);
            g && (f = H(f, g));
            q.length = 0;
            a > f && !1 !== m.enabled ? (this.clipHeight = h = w(f - 20 - this.titleHeight - u, 0), this.currentPage = r(this.currentPage, 1), this.fullHeight = a, t(v, function(a, b) {
                var c = a._legendItemPos[1],
                    d = E(a.legendItem.getBBox().height),
                    e = q.length;
                if (!e || c - q[e - 1] > h && (F || c) !== q[e - 1]) q.push(F || c), e++;
                b === v.length - 1 && c + d - q[e - 1] > h && q.push(c);
                c !== F && (F = c)
            }), l || (l = b.clipRect = d.clipRect(0, u, 9999, 0), b.contentGroup.clip(l)), y(h), p || (this.nav = p = d.g().attr({
                zIndex: 1
            }).add(this.group), this.up = d.symbol("triangle", 0, 0, n, n).on("click", function() {
                b.scroll(-1, k)
            }).add(p), this.pager = d.text("", 15, 10).css(m.style).add(p), this.down = d.symbol("triangle-down", 0, 0, n, n).on("click", function() {
                b.scroll(1, k)
            }).add(p)), b.scroll(0), a = f) : p && (y(c.chartHeight), p.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0);
            return a
        },
        scroll: function(a, b) {
            var c = this.pages,
                d = c.length,
                e = this.currentPage + a,
                f = this.clipHeight,
                g = this.options.navigation,
                h = g.activeColor,
                g = g.inactiveColor,
                l = this.pager,
                m = this.padding;
            e > d && (e = d);
            if (0 < e) {
                if (b !== D) {
                    var k = this.chart;
                    k.renderer.globalAnimation = r(b, k.animation)
                }
                this.nav.attr({
                    translateX: m,
                    translateY: f + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                });
                this.up.attr({
                    fill: 1 === e ? g : h
                }).css({
                    cursor: 1 === e ? "default" : "pointer"
                });
                l.attr({
                    text: e + "/" + d
                });
                this.down.attr({
                    x: 18 + this.pager.getBBox().width,
                    fill: e === d ? g : h
                }).css({
                    cursor: e === d ? "default" : "pointer"
                });
                c = -c[e - 1] + this.initialItemY;
                this.scrollGroup.animate({
                    translateY: c
                });
                this.currentPage = e;
                this.positionCheckboxes(c)
            }
        }
    };
    var hb = x.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || a.fontMetrics.f;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup)
        },
        drawLineMarker: function(a) {
            var b = this.options,
                c = b.marker,
                d = a.symbolWidth,
                e = this.chart.renderer,
                f = this.legendGroup;
            a = a.baseline - E(.3 * a.fontMetrics.b);
            var g;
            b.lineWidth && (g = {
                "stroke-width": b.lineWidth
            }, b.dashStyle && (g.dashstyle = b.dashStyle), this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f));
            c && !1 !== c.enabled && (b = c.radius, this.legendSymbol = c = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b, c).add(f), c.isMarker = !0)
        }
    };
    (/Trident\/7\.0/.test(ra) || Ka) && Eb(Xa.prototype, "positionItem", function(a, b) {
        var c = this,
            d = function() {
                b._legendItemPos && a.call(c, b)
            };
        d();
        setTimeout(d)
    });
    var ib = x.Chart = function() {
        this.getArgs.apply(this, arguments)
    };
    x.chart = function(a, b, c) {
        return new ib(a, b, c)
    };
    ib.prototype = {
        callbacks: [],
        getArgs: function() {
            var a = [].slice.call(arguments);
            if (ka(a[0]) || a[0].nodeName) this.renderTo = a.shift();
            this.init(a[0], a[1])
        },
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = J(N, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this,
                g;
            f.index = T.length;
            T.push(f);
            Ma++;
            !1 !== d.reflow && R(f, "load", function() {
                f.initReflow()
            });
            if (e) for (g in e) R(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ga ? !1 : r(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = P[a.type || b.type || b.defaultSeriesType]) || W(17, !0);
            b = new b;
            b.init(this, a);
            return b
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a;
            a = c ? a : b;
            return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.pointer,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h, l = this.hasCartesianSeries,
                m = this.isDirtyBox,
                k = c.length,
                n = k,
                p = this.renderer,
                q = p.isHidden(),
                u = [];
            this.renderer.globalAnimation = r(a, this.animation);
            q && this.cloneRenderTo();
            for (this.layOutTitles(); n--;) if (a = c[n], a.options.stacking && (g = !0, a.isDirty)) {
                h = !0;
                break
            }
            if (h) for (n = k; n--;) a = c[n], a.options.stacking && (a.isDirty = !0);
            t(c, function(a) {
                a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), f = !0);
                a.isDirtyData && I(a, "updatedData")
            });
            f && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
            g && this.getStacks();
            l && !this.isResizing && (this.maxTicks = null, t(b, function(a) {
                a.setScale()
            }));
            this.getMargins();
            l && (t(b, function(a) {
                a.isDirty && (m = !0)
            }), t(b, function(a) {
                var b = a.min + "," + a.max;
                a.extKey !== b && (a.extKey = b, u.push(function() {
                    I(a, "afterSetExtremes", B(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                }));
                (m || g) && a.redraw()
            }));
            m && this.drawChartBox();
            t(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            p.draw();
            I(this, "redraw");
            q && this.cloneRenderTo(!0);
            t(u, function(a) {
                a.call()
            })
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) for (e = c[d].points || [], b = 0; b < e.length; b++) if (e[b].id === a) return e[b];
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis = la(b.xAxis || {}),
                b = b.yAxis = la(b.yAxis || {});
            t(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            t(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            t(c, function(b) {
                new gb(a, b)
            })
        },
        getSelectedPoints: function() {
            var a = [];
            t(this.series, function(b) {
                a = a.concat(ua(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return ua(this.series, function(a) {
                return a.selected
            })
        },
        setTitle: function(a, b, c) {
            var d = this,
                e = d.options,
                f;
            f = e.title = J(e.title, a);
            e = e.subtitle = J(e.subtitle, b);
            t([
                ["title", a, f],
                ["subtitle", b, e]
            ], function(a) {
                var b = a[0],
                    c = d[b],
                    e = a[1];
                a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        },
        layOutTitles: function(a) {
            var b = 0,
                c = this.title,
                d = this.subtitle,
                e = this.options,
                f = e.title,
                e = e.subtitle,
                g = this.renderer,
                h = this.spacingBox;
            c && (c.css({
                width: (f.width || h.width + f.widthAdjust) + "px"
            }).align(B({
                y: g.fontMetrics(f.style.fontSize, c).b - 3
            }, f), !1, h), f.floating || f.verticalAlign || (b = c.getBBox().height));
            d && (d.css({
                width: (e.width || h.width + e.widthAdjust) + "px"
            }).align(B({
                y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b
            }, e), !1, h), e.floating || e.verticalAlign || (b = ia(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && r(a, !0) && this.isDirtyBox && this.redraw())
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = a.width,
                a = a.height,
                c = this.renderToClone || this.renderTo;
            v(b) || (this.containerWidth = da(c, "width"));
            v(a) || (this.containerHeight = da(c, "height"));
            this.chartWidth = w(0, b || this.containerWidth || 600);
            this.chartHeight = w(0, r(a, 19 < this.containerHeight ? this.containerHeight : 400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), Qa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), Y(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), C.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options,
                c = b.chart,
                d, e;
            a = this.renderTo;
            var f = "highcharts-" + db++;
            a || (this.renderTo = a = c.renderTo);
            ka(a) && (this.renderTo = a = C.getElementById(a));
            a || W(13, !0);
            d = O(M(a, "data-highcharts-chart"));
            L(d) && T[d] && T[d].hasRendered && T[d].destroy();
            M(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            c.skipClone || a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            d = this.chartWidth;
            e = this.chartHeight;
            this.container = a = za("div", {
                className: "highcharts-container" + (c.className ? " " + c.className : ""),
                id: f
            }, B({
                position: "relative",
                overflow: "hidden",
                width: d + "px",
                height: e + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, c.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = new(x[c.renderer] || Va)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML);
            ga && this.renderer.create(this, a, d, e);
            this.renderer.chartIndex = this.index
        },
        getMargins: function(a) {
            var b = this.spacing,
                c = this.margin,
                d = this.titleOffset;
            this.resetMargins();
            d && !v(c[0]) && (this.plotTop = w(this.plotTop, d + this.options.title.margin + b[0]));
            this.legend.adjustMargins(c, b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins()
        },
        getAxisMargins: function() {
            var a = this,
                b = a.axisOffset = [0, 0, 0, 0],
                c = a.margin;
            a.hasCartesianSeries && t(a.axes, function(a) {
                a.visible && a.getOffset()
            });
            t(Ta, function(d, e) {
                v(c[e]) || (a[d] += b[e])
            });
            a.setChartSize()
        },
        reflow: function(a) {
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e = c.width || da(d, "width"),
                f = c.height || da(d, "height"),
                c = a ? a.target : G;
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === G || c === C)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = ya(function() {
                    b.container && (b.setSize(e, f, !1), b.hasUserSize = null)
                }, a ? 100 : 0);
                b.containerWidth = e;
                b.containerHeight = f
            }
        },
        initReflow: function() {
            var a = this,
                b = function(b) {
                    a.reflow(b)
                };
            R(G, "resize", b);
            R(a, "destroy",

                function() {
                    S(G, "resize", b)
                })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g = d.renderer;
            d.isResizing += 1;
            d.renderer.globalAnimation = r(c, d.animation);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            v(a) && (d.chartWidth = e = w(0, E(a)), d.hasUserSize = !! e);
            v(b) && (d.chartHeight = f = w(0, E(b)));
            a = g.globalAnimation;
            (a ? Ua : Y)(d.container, {
                width: e + "px",
                height: f + "px"
            }, a);
            d.setChartSize(!0);
            g.setSize(e, f, c);
            d.maxTicks = null;
            t(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            t(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            I(d, "resize");
            ya(function() {
                d && I(d, "endResize", null, function() {
                    --d.isResizing
                })
            }, Ja(a).duration)
        },
        setChartSize: function(a) {
            var b = this.inverted,
                c = this.renderer,
                d = this.chartWidth,
                e = this.chartHeight,
                f = this.options.chart,
                g = this.spacing,
                h = this.clipOffset,
                l, m, k, n;
            this.plotLeft = l = E(this.plotLeft);
            this.plotTop = m = E(this.plotTop);
            this.plotWidth = k = w(0, E(d - l - this.marginRight));
            this.plotHeight = n = w(0, E(e - m - this.marginBottom));
            this.plotSizeX = b ? n : k;
            this.plotSizeY = b ? k : n;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: l,
                y: m,
                width: k,
                height: n
            };
            d = 2 * ca(this.plotBorderWidth / 2);
            b = ia(w(d, h[3]) / 2);
            c = ia(w(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: ca(this.plotSizeX - w(d, h[1]) / 2 - b),
                height: w(0, ca(this.plotSizeY - w(d, h[2]) / 2 - c))
            };
            a || t(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a = this;
            t(Ta, function(b,
                           c) {
                a[b] = r(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                l = a.borderWidth || 0,
                m = a.backgroundColor,
                k = a.plotBackgroundColor,
                n = a.plotBackgroundImage,
                p = a.plotBorderWidth || 0,
                q, u = this.plotLeft,
                r = this.plotTop,
                t = this.plotWidth,
                y = this.plotHeight,
                v = this.plotBox,
                z = this.clipRect,
                w = this.clipBox;
            q = l + (a.shadow ? 8 : 0);
            if (l || m) e ? e.animate(e.crisp({
                width: c - q,
                height: d - q
            })) : (e = {
                fill: m || "none"
            }, l && (e.stroke = a.borderColor, e["stroke-width"] = l), this.chartBackground = b.rect(q / 2, q / 2, c - q, d - q, a.borderRadius, l).attr(e).addClass("highcharts-background").add().shadow(a.shadow));
            k && (f ? f.animate(v) : this.plotBackground = b.rect(u, r, t, y, 0).attr({
                fill: k
            }).add().shadow(a.plotShadow));
            n && (h ? h.animate(v) : this.plotBGImage = b.image(n, u, r, t, y).add());
            z ? z.animate({
                width: w.width,
                height: w.height
            }) : this.clipRect = b.clipRect(w);
            p && (g ? (g.strokeWidth = -p, g.animate(g.crisp({
                x: u,
                y: r,
                width: t,
                height: y
            }))) : this.plotBorder = b.rect(u, r, t, y, 0, - p).attr({
                stroke: a.plotBorderColor,
                "stroke-width": p,
                fill: "none",
                zIndex: 1
            }).add());
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            t(["inverted", "angular", "polar"], function(g) {
                c = P[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = P[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        linkSeries: function() {
            var a = this,
                b = a.series;
            t(b,

                function(a) {
                    a.linkedSeries.length = 0
                });
            t(b, function(b) {
                var d = b.options.linkedTo;
                ka(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), b.linkedParent = d, b.visible = r(b.options.visible, d.options.visible, b.visible))
            })
        },
        renderSeries: function() {
            t(this.series, function(a) {
                a.translate();
                a.render()
            })
        },
        renderLabels: function() {
            var a = this,
                b = a.options.labels;
            b.items && t(b.items, function(c) {
                var d = B(b.style, c.style),
                    e = O(d.left) + a.plotLeft,
                    f = O(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add()
            })
        },
        render: function() {
            var a = this.axes,
                b = this.renderer,
                c = this.options,
                d, e, f, g;
            this.setTitle();
            this.legend = new Xa(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 21;
            t(a, function(a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = 1.1 < d / this.plotWidth;
            g = 1.05 < e / this.plotHeight;
            if (f || g) this.maxTicks = null, t(a, function(a) {
                (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
            }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && t(a, function(a) {
                a.visible && a.render()
            });
            this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({
                zIndex: 3
            }).add());
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        },
        showCredits: function(a) {
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text, 0, 0).on("click", function() {
                a.href && (G.location.href = a.href)
            }).attr({
                align: a.position.align,
                zIndex: 8
            }).css(a.style).add().align(a.position))
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            I(a, "destroy");
            T[a.index] = D;
            Ma--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            S(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            t("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            d && (d.innerHTML = "", S(d), f && Qa(d));
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !Z && G == G.top && "complete" !== C.readyState || ga && !G.canvg ? (ga ? CanVGController.push(function() {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : C.attachEvent("onreadystatechange", function() {
                C.detachEvent("onreadystatechange", a.firstRender);
                "complete" === C.readyState && a.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options;
            if (a.isReadyToRender()) {
                a.getContainer();
                I(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                t(b.series || [], function(b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                I(a, "beforeRender");
                x.Pointer && (a.pointer = new yb(a, b));
                a.render();
                a.renderer.draw();
                if (!a.renderer.imgCount && a.onload) a.onload();
                a.cloneRenderTo(!0)
            }
        },
        onload: function() {
            var a = this;
            t([this.callback].concat(this.callbacks), function(b) {
                b && void 0 !== a.index && b.apply(a, [a])
            });
            I(a, "load");
            this.onload = null
        },
        splashArray: function(a, b) {
            var c = b[a],
                c = ea(c) ? c : [c, c, c, c];
            return [r(b[a + "Top"], c[0]), r(b[a + "Right"], c[1]), r(b[a + "Bottom"], c[2]), r(b[a + "Left"], c[3])]
        }
    };
    var Na = function() {};
    Na.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b, c);
            this.pointAttr = {};
            a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length && (a.colorCounter = 0));
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a, b) {
            var c = this.series,
                d = c.options.pointValKey || c.pointValKey;
            a = Na.prototype.optionsToObject.call(this, a);
            B(this, a);
            this.options = this.options ? B(this.options, a) : a;
            d && (this.y = this[d]);
            this.isNull = null === this.x || null === this.y;
            void 0 === this.x && c && (this.x = void 0 === b ? c.autoIncrement() : b);
            return this
        },
        optionsToObject: function(a) {
            var b = {}, c = this.series,
                d = c.options.keys,
                e = d || c.pointArrayMap || ["y"],
                f = e.length,
                g = 0,
                h = 0;
            if (L(a) || null === a) b[e[0]] = a;
            else if (Fa(a)) for (!d && a.length > f && (c = typeof a[0], "string" === c ? b.name = a[0] : "number" === c && (b.x = a[0]), g++); h < f;) d && void 0 === a[g] || (b[e[h]] = a[g]), g++, h++;
            else "object" === typeof a && (b = a, a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0));
            return b
        },
        destroy: function() {
            var a = this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            b && (this.setState(), Ga(b, this), b.length || (a.hoverPoints = null));
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) S(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(a) {
            var b = this.series,
                c = b.tooltipOptions,
                d = r(c.valueDecimals, ""),
                e = c.valuePrefix || "",
                f = c.valueSuffix || "";
            t(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return Aa(a, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            "click" === a && e.allowPointSelect && (c = function(a) {
                d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            I(this, a, b, c)
        },
        visible: !0
    };
    var X = x.Series = function() {};
    X.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Na,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(a, b) {
            var c = this,
                d, e, f = a.series,
                g = function(a, b) {
                    return r(a.options.index, a._i) - r(b.options.index, b._i)
                };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            B(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: !1 !== b.visible,
                selected: !0 === b.selected
            });
            ga && (b.animation = !1);
            e = b.events;
            for (d in e) R(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            t(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            c.isCartesian && (a.hasCartesianSeries = !0);
            f.push(c);
            c._i = f.length - 1;
            Oa(f, g);
            this.yAxis && Oa(this.yAxis.series, g);
            t(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            t(a.axisTypes || [], function(e) {
                t(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== D && b[e] === d.id || b[e] === D && 0 === d.index) c.series.push(a), a[e] = c, c.isDirty = !0
                });
                a[e] || a.optionalAxis === e || W(18, !0)
            })
        },
        updateParallelArrays: function(a, b) {
            var c = a.series,
                d = arguments,
                e = L(b) ? function(d) {
                    var e = "y" === d && c.toYData ? c.toYData(a) : a[d];
                    c[d + "Data"][b] = e
                } : function(a) {
                    Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
                };
            t(c.parallelArrays, e)
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                c, d = a.pointIntervalUnit,
                b = r(b, a.pointStart, 0);
            this.pointInterval = c = r(this.pointInterval, a.pointInterval, 1);
            d && (a = new pa(b), "day" === d ? a = +a[pb](a[ab]() + c) : "month" === d ? a = +a[qb](a[bb]() + c) : "year" === d && (a = +a[rb](a[cb]() + c)), c = a - b);
            this.xIncrement = b + c;
            return b
        },
        setOptions: function(a) {
            var b = this.chart,
                c = b.options.plotOptions,
                b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
            this.userOptions = a;
            c = J(e, c.series, a);
            this.tooltipOptions = J(N.tooltip, N.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            null === e.marker && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            !c.negativeColor && !c.negativeFillColor || c.zones || a.push({
                value: c[this.zoneAxis + "Threshold"] || c.threshold || 0,
                color: c.negativeColor,
                fillColor: c.negativeFillColor
            });
            a.length && v(a[a.length - 1].value) && a.push({
                color: this.color,
                fillColor: this.fillColor
            });
            return c
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions,
                e = "_" + a + "Index",
                f = a + "Counter";
            b || (v(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || ja[this.type].color,
                this.chart.options.colors)
        },
        getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            /^url/.test(this.symbol) && (a.radius = 0)
        },
        drawLegendSymbol: hb.drawLineMarker,
        setData: function(a, b, c, d) {
            var e = this,
                f = e.points,
                g = f && f.length || 0,
                h, l = e.options,
                m = e.chart,
                k = null,
                n = e.xAxis,
                p = n && !! n.categories,
                q = l.turboThreshold,
                u = this.xData,
                F = this.yData,
                w = (h = e.pointArrayMap) && h.length;
            a = a || [];
            h = a.length;
            b = r(b, !0);
            if (!1 !== d && h && g === h && !e.cropped && !e.hasGroupedData && e.visible) t(a,

                function(a, b) {
                    f[b].update && a !== l.data[b] && f[b].update(a, !1, null, !1)
                });
            else {
                e.xIncrement = null;
                e.colorCounter = 0;
                t(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (q && h > q) {
                    for (c = 0; null === k && c < h;) k = a[c], c++;
                    if (L(k)) {
                        p = r(l.pointStart, 0);
                        k = r(l.pointInterval, 1);
                        for (c = 0; c < h; c++) u[c] = p, F[c] = a[c], p += k;
                        e.xIncrement = p
                    } else if (Fa(k)) if (w) for (c = 0; c < h; c++) k = a[c], u[c] = k[0], F[c] = k.slice(1, w + 1);
                    else for (c = 0; c < h; c++) k = a[c], u[c] = k[0], F[c] = k[1];
                    else W(12)
                } else for (c = 0; c < h; c++) a[c] !== D && (k = {
                    series: e
                }, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), p && v(k.name) && (n.names[k.x] = k.name));
                ka(F[0]) && W(14, !0);
                e.data = [];
                e.options.data = e.userOptions.data = a;
                for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy();
                n && (n.minRange = n.userMinRange);
                e.isDirty = e.isDirtyData = m.isDirtyBox = !0;
                c = !1
            }
            "point" === l.legendType && (this.processData(), this.generatePoints());
            b && m.redraw(c)
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e;
            e = 0;
            var f, g, h = this.xAxis,
                l, m = this.options;
            l = m.cropThreshold;
            var k = this.getExtremesFromAll || m.getExtremesFromAll,
                n = this.isCartesian,
                m = h && h.val2lin,
                p = h && h.isLog,
                q, u;
            if (n && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            h && (a = h.getExtremes(), q = a.min, u = a.max);
            if (n && this.sorted && !k && (!l || d > l || this.forceCrop)) if (b[d - 1] < q || b[0] > u) b = [], c = [];
            else if (b[0] < q || b[d - 1] > u) e = this.cropData(this.xData, this.yData, q, u), b = e.xData, c = e.yData, e = e.start, f = !0;
            for (l = b.length || 1; --l;) d = p ? m(b[l]) - m(b[l - 1]) : b[l] - b[l - 1], 0 < d && (g === D || d < g) ? g = d : 0 > d && this.requireSorting && W(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.closestPointRange = g
        },
        cropData: function(a, b, c, d) {
            var e = a.length,
                f = 0,
                g = e,
                h = r(this.cropShoulder, 1),
                l;
            for (l = 0; l < e; l++) if (a[l] >= c) {
                f = w(0, l - h);
                break
            }
            for (c = l; c < e; c++) if (a[c] > d) {
                g = c + h;
                break
            }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            }
        },
        generatePoints: function() {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                l, m = this.hasGroupedData,
                k, n = [],
                p;
            b || m || (b = [], b.length = a.length, b = this.data = b);
            for (p = 0; p < g; p++) l = h + p, m ? (n[p] = (new f).init(this, [d[p]].concat(la(e[p]))), n[p].dataGroup = this.groupMap[p]) : (b[l] ? k = b[l] : a[l] !== D && (b[l] = k = (new f).init(this, a[l], d[p])), n[p] = k), n[p].index = l;
            if (b && (g !== (c = b.length) || m)) for (p = 0; p < c; p++) p !== h || m || (p += g), b[p] && (b[p].destroyElements(), b[p].plotX = D);
            this.data = b;
            this.points = n
        },
        getExtremes: function(a) {
            var b = this.yAxis,
                c = this.processedXData,
                d, e = [],
                f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min,
                h = d.max,
                l, m, k, n;
            a = a || this.stackedYData || this.processedYData || [];
            d = a.length;
            for (n = 0; n < d; n++) if (m = c[n], k = a[n], l = null !== k && k !== D && (!b.isLog || k.length || 0 < k), m = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[n + 1] || m) >= g && (c[n - 1] || m) <= h, l && m) if (l = k.length) for (; l--;) null !== k[l] && (e[f++] = k[l]);
            else e[f++] = k;
            this.dataMin = Ia(e);
            this.dataMax = Ca(e)
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !! this.modifyValue,
                     l = a.pointPlacement, m = "between" === l || L(l), k = a.threshold, n = a.startFromThreshold ? k : 0, p, q, u, t, Q = Number.MAX_VALUE, a = 0; a < g; a++) {
                var y = f[a],
                    A = y.x,
                    z = y.y;
                q = y.low;
                var x = b && e.stacks[(this.negStacks && z < (n ? 0 : k) ? "-" : "") + this.stackKey];
                e.isLog && null !== z && 0 >= z && (y.y = z = null, W(10));
                y.plotX = p = fa(H(w(-1E5, c.translate(A, 0, 0, 0, 1, l, "flags" === this.type)), 1E5));
                b && this.visible && !y.isNull && x && x[A] && (t = this.getStackIndicator(t, A, this.index), x = x[A], z = x.points[t.key], q = z[0], z = z[1], q === n && (q = r(k, e.min)), e.isLog && 0 >= q && (q = null),
                    y.total = y.stackTotal = x.total, y.percentage = x.total && y.y / x.total * 100, y.stackY = z, x.setOffset(this.pointXOffset || 0, this.barW || 0));
                y.yBottom = v(q) ? e.translate(q, 0, 1, 0, 1) : null;
                h && (z = this.modifyValue(z, y));
                y.plotY = q = "number" === typeof z && Infinity !== z ? H(w(-1E5, e.translate(z, 0, 1, 0, 1)), 1E5) : D;
                y.isInside = q !== D && 0 <= q && q <= e.len && 0 <= p && p <= c.len;
                y.clientX = m ? c.translate(A, 0, 0, 0, 1) : p;
                y.negative = y.y < (k || 0);
                y.category = d && d[y.x] !== D ? d[y.x] : y.x;
                y.isNull || (void 0 !== u && (Q = H(Q, U(p - u))), u = p)
            }
            this.closestPointRangePx = Q
        },
        getValidPoints: function(a,
                                 b) {
            var c = this.chart;
            return ua(a || this.points || [], function(a) {
                return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull
            })
        },
        setClip: function(a) {
            var b = this.chart,
                c = this.options,
                d = b.renderer,
                e = b.inverted,
                f = this.clipBox,
                g = f || b.clipBox,
                h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(),
                l = b[h],
                m = b[h + "m"];
            l || (a && (g.width = 0, b[h + "m"] = m = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight)), b[h] = l = d.clipRect(g));
            a && (l.count += 1);
            !1 !== c.clip && (this.group.clip(a || f ? l : b.clipRect), this.markerGroup.clip(m), this.sharedClipKey = h);
            a || (--l.count, 0 >= l.count && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
        },
        animate: function(a) {
            var b = this.chart,
                c = this.options.animation,
                d;
            c && !ea(c) && (c = ja[this.type].animation);
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({
                width: b.plotSizeX
            }, c), b[d + "m"] && b[d + "m"].animate({
                width: b.plotSizeX + 99
            }, c), this.animate = null)
        },
        afterAnimate: function() {
            this.setClip();
            I(this, "afterAnimate")
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, l, m, k, n = this.options.marker,
                p = this.pointAttr[""],
                q, u, t, v = this.markerGroup,
                w = r(n.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * n.radius);
            if (!1 !== n.enabled || this._hasPointMarkers) for (f = b.length; f--;) g = b[f], d = ca(g.plotX), e = g.plotY, k = g.graphic, q = g.marker || {}, u = !! g.marker, a = w && q.enabled === D || q.enabled, t = g.isInside, a && L(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || p, h = a.r, l = r(q.symbol, this.symbol), m = 0 === l.indexOf("url"),
                k ? k[t ? "show" : "hide"](!0).attr(a).animate(B({
                    x: d - h,
                    y: e - h
                }, k.symbolName ? {
                    width: 2 * h,
                    height: 2 * h
                } : {})) : t && (0 < h || m) && (g.graphic = c.renderer.symbol(l, d - h, e - h, 2 * h, 2 * h, u ? q : n).attr(a).add(v))) : k && (g.graphic = k.destroy())
        },
        convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) g = e[f], h[f] = r(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = a.options,
                c = ja[a.type].marker ? b.marker : b,
                d = c.states,
                e = d.hover,
                f, g = a.color,
                h = a.options.negativeColor,
                l = {
                    stroke: g,
                    fill: g
                }, m = a.points || [],
                k, n = [],
                p, q = a.pointAttrToOptions;
            f = a.hasPointSpecificOptions;
            var u = c.lineColor,
                w = c.fillColor;
            k = b.turboThreshold;
            var x = a.zones,
                y = a.zoneAxis || "y",
                A, z;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || ha(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || ha(e.negativeColor || h).brighten(e.brightness).get());
            n[""] = a.convertAttribs(c, l);
            t(["hover", "select"], function(b) {
                n[b] = a.convertAttribs(d[b], n[""])
            });
            a.pointAttr = n;
            g = m.length;
            if (!k || g < k || f) for (; g--;) {
                k = m[g];
                (c = k.options && k.options.marker || k.options) && !1 === c.enabled && (c.radius = 0);
                l = null;
                if (x.length) {
                    f = 0;
                    for (l = x[f]; k[y] >= l.value;) l = x[++f];
                    k.color = k.fillColor = l = r(l.color, a.color)
                }
                f = b.colorByPoint || k.color;
                if (k.options) for (z in q) v(c[q[z]]) && (f = !0);
                if (f) {
                    c = c || {};
                    p = [];
                    d = c.states || {};
                    f = d.hover = d.hover || {};
                    if (!b.marker || k.negative && !f.fillColor && !e.fillColor) f[a.pointAttrToOptions.fill] = f.color || !k.options.color && e[k.negative && h ? "negativeColor" : "color"] || ha(k.color).brighten(f.brightness || e.brightness).get();
                    A = {
                        color: k.color
                    };
                    w || (A.fillColor = k.color);
                    u || (A.lineColor = k.color);
                    c.hasOwnProperty("color") && !c.color && delete c.color;
                    l && !e.fillColor && (f.fillColor = l);
                    p[""] = a.convertAttribs(B(A, c), n[""]);
                    p.hover = a.convertAttribs(d.hover, n.hover, p[""]);
                    p.select = a.convertAttribs(d.select, n.select, p[""])
                } else p = n;
                k.pointAttr = p
            }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(ra),
                d, e = a.data || [],
                f, g, h;
            I(a, "destroy");
            S(a);
            t(a.axisTypes || [], function(b) {
                if (h = a[b]) Ga(h.series, a), h.isDirty = h.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (d = e.length; d--;)(f = e[d]) && f.destroy && f.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            for (g in a) a[g] instanceof V && !a[g].survive && (d = c && "group" === g ? "hide" : "destroy", a[g][d]());
            b.hoverSeries === a && (b.hoverSeries = null);
            Ga(b.series, a);
            for (g in a) delete a[g]
        },
        getGraphPath: function(a, b, c) {
            var d = this,
                e = d.options,
                f = e.step,
                g, h = [],
                l;
            a = a || d.points;
            (g = a.reversed) && a.reverse();
            (f = {
                    right: 1,
                    center: 2
                }[f] || f && 3) && g && (f = 4 - f);
            !e.connectNulls || b || c || (a = this.getValidPoints(a));
            t(a, function(g, k) {
                var n = g.plotX,
                    p = g.plotY,
                    q = a[k - 1];
                (g.leftCliff || q && q.rightCliff) && !c && (l = !0);
                g.isNull && !v(b) && 0 < k ? l = !e.connectNulls : g.isNull && !b ? l = !0 : (0 === k || l ? q = ["M", g.plotX, g.plotY] : d.getPointSpline ? q = d.getPointSpline(a, g, k) : f ? (q = 1 === f ? ["L", q.plotX, p] : 2 === f ? ["L", (q.plotX + n) / 2, q.plotY, "L", (q.plotX + n) / 2, p] : ["L", n, q.plotY], q.push("L", n, p)) : q = ["L", n, p], h.push.apply(h, q), l = !1)
            });
            return d.graphPath = h
        },
        drawGraph: function() {
            var a = this,
                b = this.options,
                c = [
                    ["graph", b.lineColor || this.color, b.dashStyle]
                ],
                d = b.lineWidth,
                e = "square" !== b.linecap,
                f = (this.gappedPath || this.getGraphPath).call(this),
                g = this.fillGraph && this.color || "none";
            t(this.zones, function(d, e) {
                c.push(["zoneGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle])
            });
            t(c, function(c, l) {
                var m = c[0],
                    k = a[m];
                k ? k.animate({
                    d: f
                }) : (d || g) && f.length && (k = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: g,
                    zIndex: 1
                }, c[2] ? k.dashstyle = c[2] : e && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), a[m] = a.chart.renderer.path(f).attr(k).add(a.group).shadow(2 > l && b.shadow))
            })
        },
        applyZones: function() {
            var a = this,
                b = this.chart,
                c = b.renderer,
                d = this.zones,
                e, f, g = this.clips || [],
                h, l = this.graph,
                m = this.area,
                k = w(b.chartWidth, b.chartHeight),
                n = this[(this.zoneAxis || "y") + "Axis"],
                p, q = n.reversed,
                u = b.inverted,
                v = n.horiz,
                x, y, A, z = !1;
            d.length && (l || m) && n.min !== D && (l && l.hide(), m && m.hide(), p = n.getExtremes(), t(d, function(d, t) {
                e = q ? v ? b.plotWidth : 0 : v ? 0 : n.toPixels(p.min);
                e = H(w(r(f, e), 0), k);
                f = H(w(E(n.toPixels(r(d.value,
                    p.max), !0)), 0), k);
                z && (e = f = n.toPixels(p.max));
                x = Math.abs(e - f);
                y = H(e, f);
                A = w(e, f);
                n.isXAxis ? (h = {
                    x: u ? A : y,
                    y: 0,
                    width: x,
                    height: k
                }, v || (h.x = b.plotHeight - h.x)) : (h = {
                    x: 0,
                    y: u ? A : y,
                    width: k,
                    height: x
                }, v && (h.y = b.plotWidth - h.y));
                b.inverted && c.isVML && (h = n.isXAxis ? {
                    x: 0,
                    y: q ? y : A,
                    height: h.width,
                    width: b.chartWidth
                } : {
                    x: h.y - b.plotLeft - b.spacingBox.x,
                    y: 0,
                    width: h.height,
                    height: b.chartHeight
                });
                g[t] ? g[t].animate(h) : (g[t] = c.clipRect(h), l && a["zoneGraph" + t].clip(g[t]), m && a["zoneArea" + t].clip(g[t]));
                z = d.value > p.max
            }), this.clips = g)
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                t(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this,
                c = b.chart;
            b.xAxis && (R(c, "resize", a), R(b, "destroy", function() {
                S(c, "resize", a)
            }), a(), b.invertGroups = a)
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                zIndex: d || .1
            }).add(e), f.addClass("highcharts-series-" + this.index));
            f.attr({
                visibility: c
            })[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function() {
            var a = this.chart,
                b = this.xAxis,
                c = this.yAxis;
            a.inverted && (b = c, c = this.xAxis);
            return {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c, d = a.options,
                e = !! a.animate && b.renderer.isSVG && Ja(d.animation).duration,
                f = a.visible ? "inherit" : "hidden",
                g = d.zIndex,
                h = a.hasRendered,
                l = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, l);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, l);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            t(a.points, function(a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            b.inverted && a.invertGroups();
            !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect);
            e && a.animate();
            h || (a.animationTimeout = ya(function() {
                a.afterAnimate()
            }, e));
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirty || this.isDirtyData,
                c = this.group,
                d = this.xAxis,
                e = this.yAxis;
            c && (a.inverted && c.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), c.animate({
                translateX: r(d && d.left, a.plotLeft),
                translateY: r(e && e.top, a.plotTop)
            }));
            this.translate();
            this.render();
            b && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function(a, b) {
            var c = this.xAxis,
                d = this.yAxis,
                e = this.chart.inverted;
            return this.searchKDTree({
                clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos
            }, b)
        },
        buildKDTree: function() {
            function a(c,
                       e, f) {
                var g, h;
                if (h = c && c.length) return g = b.kdAxisArray[e % f], c.sort(function(a, b) {
                    return a[g] - b[g]
                }), h = Math.floor(h / 2), {
                    point: c[h],
                    left: a(c.slice(0, h), e + 1, f),
                    right: a(c.slice(h + 1), e + 1, f)
                }
            }
            var b = this,
                c = b.kdDimensions;
            delete b.kdTree;
            ya(function() {
                b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c)
            }, b.options.kdNow ? 0 : 1)
        },
        searchKDTree: function(a, b) {
            function c(a, b, m, k) {
                var n = b.point,
                    p = d.kdAxisArray[m % k],
                    q, u, r = n;
                u = v(a[e]) && v(n[e]) ? Math.pow(a[e] - n[e], 2) : null;
                q = v(a[f]) && v(n[f]) ? Math.pow(a[f] - n[f], 2) : null;
                q = (u || 0) + (q || 0);
                n.dist = v(q) ? Math.sqrt(q) : Number.MAX_VALUE;
                n.distX = v(u) ? Math.sqrt(u) : Number.MAX_VALUE;
                p = a[p] - n[p];
                q = 0 > p ? "left" : "right";
                u = 0 > p ? "right" : "left";
                b[q] && (q = c(a, b[q], m + 1, k), r = q[g] < r[g] ? q : n);
                b[u] && Math.sqrt(p * p) < r[g] && (a = c(a, b[u], m + 1, k), r = a[g] < r[g] ? a : r);
                return r
            }
            var d = this,
                e = this.kdAxisArray[0],
                f = this.kdAxisArray[1],
                g = b ? "distX" : "dist";
            this.kdTree || this.buildKDTree();
            if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    };
    var Fb = Ha(X);
    P.line = Fb;
    ja.area = J(wb, {
        softThreshold: !1,
        threshold: 0
    });
    var Gb = Ha(X, {
        type: "area",
        singleStacks: !1,
        getStackPoints: function() {
            var a = [],
                b = [],
                c = this.xAxis,
                d = this.yAxis,
                e = d.stacks[this.stackKey],
                f = {}, g = this.points,
                h = this.index,
                l = d.series,
                m = l.length,
                k, n = r(d.options.reversedStacks, !0) ? 1 : -1,
                p, q;
            if (this.options.stacking) {
                for (p = 0; p < g.length; p++) f[g[p].x] = g[p];
                for (q in e) null !== e[q].total && b.push(q);
                b.sort(function(a, b) {
                    return a - b
                });
                k = wa(l, function() {
                    return this.visible
                });
                t(b, function(g, l) {
                    var q = 0,
                        r, v;
                    if (f[g] && !f[g].isNull) a.push(f[g]), t([-1, 1], function(a) {
                        var c = 1 === a ? "rightNull" : "leftNull",
                            d = 0,
                            q = e[b[l + a]];
                        if (q) for (p = h; 0 <= p && p < m;) r = q.points[p], r || (p === h ? f[g][c] = !0 : k[p] && (v = e[g].points[p]) && (d -= v[1] - v[0])), p += n;
                        f[g][1 === a ? "rightCliff" : "leftCliff"] = d
                    });
                    else {
                        for (p = h; 0 <= p && p < m;) {
                            if (r = e[g].points[p]) {
                                q = r[1];
                                break
                            }
                            p += n
                        }
                        q = d.toPixels(q, !0);
                        a.push({
                            isNull: !0,
                            plotX: c.toPixels(g, !0),
                            plotY: q,
                            yBottom: q
                        })
                    }
                })
            }
            return a
        },
        getGraphPath: function(a) {
            var b = X.prototype.getGraphPath,
                c = this.options,
                d = c.stacking,
                e = this.yAxis,
                f, g, h = [],
                l = [],
                m = this.index,
                k, n = e.stacks[this.stackKey],
                p = c.threshold,
                q = e.getThreshold(c.threshold),
                u, c = c.connectNulls || "percent" === d,
                t = function(b, c, f) {
                    var g = a[b];
                    b = d && n[g.x].points[m];
                    var u = g[f + "Null"] || 0;
                    f = g[f + "Cliff"] || 0;
                    var r, t, g = !0;
                    f || u ? (r = (u ? b[0] : b[1]) + f, t = b[0] + f, g = !! u) : !d && a[c] && a[c].isNull && (r = t = p);
                    void 0 !== r && (l.push({
                        plotX: k,
                        plotY: null === r ? q : e.getThreshold(r),
                        isNull: g
                    }), h.push({
                        plotX: k,
                        plotY: null === t ? q : e.getThreshold(t)
                    }))
                };
            a = a || this.points;
            d && (a = this.getStackPoints());
            for (f = 0; f < a.length; f++) if (g = a[f].isNull, k = r(a[f].rectPlotX, a[f].plotX), u = r(a[f].yBottom, q), !g || c) c || t(f, f - 1, "left"), g && !d && c || (l.push(a[f]), h.push({
                x: f,
                plotX: k,
                plotY: u
            })), c || t(f, f + 1, "right");
            f = b.call(this, l, !0, !0);
            h.reversed = !0;
            g = b.call(this, h, !0, !0);
            g.length && (g[0] = "L");
            f = f.concat(g);
            b = b.call(this, l, !1, c);
            this.areaPath = f;
            return b
        },
        drawGraph: function() {
            this.areaPath = [];
            X.prototype.drawGraph.apply(this);
            var a = this,
                b = this.areaPath,
                c = this.options,
                d = [
                    ["area", this.color, c.fillColor]
                ];
            t(this.zones, function(b, f) {
                d.push(["zoneArea" + f, b.color || a.color, b.fillColor || c.fillColor])
            });
            t(d, function(d) {
                var f = d[0],
                    g = a[f];
                g ? g.animate({
                    d: b
                }) : (g = {
                    fill: d[2] || d[1],
                    zIndex: 0
                }, d[2] || (g["fill-opacity"] = r(c.fillOpacity, .75)), a[f] = a.chart.renderer.path(b).attr(g).add(a.group))
            })
        },
        drawLegendSymbol: hb.drawRectangle
    });
    P.area = Gb;
    ja.column = J(wb, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: .1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    var jb = Ha(X, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            X.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && t(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0)
            })
        },
        getColumnMetrics: function() {
            var a = this,
                b = a.options,
                c = a.xAxis,
                d = a.yAxis,
                e = c.reversed,
                f, g = {}, h = 0;
            !1 === b.grouping ? h = 1 : t(a.chart.series, function(b) {
                var c = b.options,
                    e = b.yAxis,
                    l;
                b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos && (c.stacking ? (f = b.stackKey, g[f] === D && (g[f] = h++), l = g[f]) : !1 !== c.grouping && (l = h++), b.columnIndex = l)
            });
            var l = H(U(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
                m = l * b.groupPadding,
                k = (l - 2 * m) / h,
                b = H(b.maxPointWidth || c.len, r(b.pointWidth, k * (1 - 2 * b.pointPadding)));
            a.columnMetrics = {
                width: b,
                offset: (k - b) / 2 + (m + ((a.columnIndex || 0) + (e ? 1 : 0)) * k - l / 2) * (e ? -1 : 1)
            };
            return a.columnMetrics
        },
        crispCol: function(a, b, c, d) {
            var e = this.chart,
                f = this.borderWidth,
                g = -(f % 2 ? .5 : 0),
                f = f % 2 ? .5 : 1;
            e.inverted && e.renderer.isVML && (f += 1);
            c = Math.round(a + c) + g;
            a = Math.round(a) + g;
            c -= a;
            d = Math.round(b + d) + f;
            g = .5 >= U(b) && .5 < d;
            b = Math.round(b) + f;
            d -= b;
            g && d && (--b, d += 1);
            return {
                x: a,
                y: b,
                width: c,
                height: d
            }
        },
        translate: function() {
            var a = this,
                b = a.chart,
                c = a.options,
                d = a.borderWidth = r(c.borderWidth, 2 > a.closestPointRange * a.xAxis.transA ? 0 : 1),
                e = a.yAxis,
                f = a.translatedThreshold = e.getThreshold(c.threshold),
                g = r(c.minPointLength, 5),
                h = a.getColumnMetrics(),
                l = h.width,
                m = a.barW = w(l, 1 + 2 * d),
                k = a.pointXOffset = h.offset;
            b.inverted && (f -= .5);
            c.pointPadding && (m = ia(m));
            X.prototype.translate.apply(a);
            t(a.points, function(c) {
                var d = H(r(c.yBottom, f), 9E4),
                    h = 999 + U(d),
                    h = H(w(-h, c.plotY), e.len + h),
                    u = c.plotX + k,
                    t = m,
                    v = H(h, d),
                    y, x = w(h, d) - v;
                U(x) < g && g && (x = g, y = !e.reversed && !c.negative || e.reversed && c.negative, v = U(v - f) > g ? d - g : f - (y ? g : 0));
                c.barX = u;
                c.pointWidth = l;
                c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h,
                    a.xAxis.len - u - t / 2, x] : [u + t / 2, h + e.pos - b.plotTop, x];
                c.shapeType = "rect";
                c.shapeArgs = a.crispCol(u, v, t, x)
            })
        },
        getSymbol: eb,
        drawLegendSymbol: hb.drawRectangle,
        drawGraph: eb,
        drawPoints: function() {
            var a = this,
                b = this.chart,
                c = a.options,
                d = b.renderer,
                e = c.animationLimit || 250,
                f, g;
            t(a.points, function(h) {
                var l = h.graphic,
                    m;
                L(h.plotY) && null !== h.y ? (f = h.shapeArgs, m = v(a.borderWidth) ? {
                    "stroke-width": a.borderWidth
                } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], l ? (xa(l), l.attr(m).attr(g)[b.pointCount < e ? "animate" : "attr"](J(f))) : h.graphic = d[h.shapeType](f).attr(m).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius)) : l && (h.graphic = l.destroy())
            })
        },
        animate: function(a) {
            var b = this,
                c = this.yAxis,
                d = b.options,
                e = this.chart.inverted,
                f = {};
            Z && (a ? (f.scaleY = .001, a = H(c.pos + c.len, w(c.pos, c.toPixels(d.threshold))), e ? f.translateX = a - c.len : f.translateY = a, b.group.attr(f)) : (f[e ? "translateX" : "translateY"] = c.pos, b.group.animate(f, B(Ja(b.options.animation), {
                step: function(a, c) {
                    b.group.attr({
                        scaleY: w(.001,
                            c.pos)
                    })
                }
            })), b.animate = null))
        },
        remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && t(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0)
            });
            X.prototype.remove.apply(a, arguments)
        }
    });
    P.column = jb;
    ja.bar = J(ja.column);
    var Hb = Ha(jb, {
        type: "bar",
        inverted: !0
    });
    P.bar = Hb;
    X.prototype.drawDataLabels = function() {
        var a = this,
            b = a.options,
            c = b.cursor,
            d = b.dataLabels,
            e = a.points,
            f, g, h = a.hasRendered || 0,
            l, m, k = r(d.defer, !0),
            n = a.chart.renderer;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), m = a.plotGroup("dataLabelsGroup", "data-labels", k && !h ? "hidden" : "visible", d.zIndex || 6), k && (m.attr({
            opacity: +h
        }), h || R(a, "afterAnimate", function() {
            a.visible && m.show();
            m[b.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            })
        })), g = d, t(e, function(e) {
            var h, k = e.dataLabel,
                t, w, y = e.connector,
                x = !0,
                z, E = {};
            f = e.dlOptions || e.options && e.options.dataLabels;
            h = r(f && f.enabled, g.enabled) && null !== e.y;
            if (k && !h) e.dataLabel = k.destroy();
            else if (h) {
                d = J(g, f);
                z = d.style;
                h = d.rotation;
                t = e.getLabelConfig();
                l = d.format ? Aa(d.format, t) : d.formatter.call(t, d);
                z.color = r(d.color, z.color, a.color, "black");
                if (k) v(l) ? (k.attr({
                    text: l
                }), x = !1) : (e.dataLabel = k = k.destroy(), y && (e.connector = y.destroy()));
                else if (v(l)) {
                    k = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius || 0,
                        rotation: h,
                        padding: d.padding,
                        zIndex: 1
                    };
                    "contrast" === z.color && (E.color = d.inside || 0 > d.distance || b.stacking ? n.getContrast(e.color || a.color) : "#000000");
                    c && (E.cursor = c);
                    for (w in k) k[w] === D && delete k[w];
                    k = e.dataLabel = n[h ? "text" : "label"](l, 0, - 9999, d.shape, null, null, d.useHTML).attr(k).css(B(z,
                        E)).add(m).shadow(d.shadow)
                }
                k && a.alignDataLabel(e, k, d, null, x)
            }
        })
    };
    X.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = r(a.plotX, - 9999),
            l = r(a.plotY, - 9999),
            m = b.getBBox(),
            k = f.renderer.fontMetrics(c.style.fontSize).b,
            n = c.rotation,
            p = c.align,
            q = this.visible && (a.series.forceDL || f.isInsidePlot(h, E(l), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g)),
            t = "justify" === r(c.overflow, "justify");
        q && (d = B({
            x: g ? f.plotWidth - l : h,
            y: E(g ? f.plotHeight - h : l),
            width: 0,
            height: 0
        }, d), B(c, {
            width: m.width,
            height: m.height
        }), n ? (t = !1, g = f.renderer.rotCorr(k, n), g = {
            x: d.x + c.x + d.width / 2 + g.x,
            y: d.y + c.y + {
                top: 0,
                middle: .5,
                bottom: 1
            }[c.verticalAlign] * d.height
        }, b[e ? "attr" : "animate"](g).attr({
            align: p
        }), h = (n + 720) % 360, h = 180 < h && 360 > h, "left" === p ? g.y -= h ? m.height : 0 : "center" === p ? (g.x -= m.width / 2, g.y -= m.height / 2) : "right" === p && (g.x -= m.width, g.y -= h ? 0 : m.height)) : (b.align(c, null, d), g = b.alignAttr), t ? this.justifyDataLabel(b, c, g, m, d, e) : r(c.crop, !0) && (q = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + m.width, g.y + m.height)), c.shape && !n && b.attr({
            anchorX: a.plotX,
            anchorY: a.plotY
        }));
        q || (xa(b), b.attr({
            y: -9999
        }), b.placed = !1)
    };
    X.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart,
            h = b.align,
            l = b.verticalAlign,
            m, k, n = a.box ? 0 : a.padding || 0;
        m = c.x + n;
        0 > m && ("right" === h ? b.align = "left" : b.x = -m, k = !0);
        m = c.x + d.width - n;
        m > g.plotWidth && ("left" === h ? b.align = "right" : b.x = g.plotWidth - m, k = !0);
        m = c.y + n;
        0 > m && ("bottom" === l ? b.verticalAlign = "top" : b.y = -m, k = !0);
        m = c.y + d.height - n;
        m > g.plotHeight && ("top" === l ? b.verticalAlign = "bottom" : b.y = g.plotHeight - m, k = !0);
        k && (a.placed = !f, a.align(b, null, e))
    };
    P.pie && (P.pie.prototype.drawDataLabels = function() {
        var a = this,
            b = a.data,
            c, d = a.chart,
            e = a.options.dataLabels,
            f = r(e.connectorPadding, 10),
            g = r(e.connectorWidth, 1),
            h = d.plotWidth,
            l = d.plotHeight,
            m, k, n = r(e.softConnector, !0),
            p = e.distance,
            q = a.center,
            u = q[2] / 2,
            v = q[1],
            x = 0 < p,
            y, A, z, D = [
                [],
                []
            ],
            B, C, G, J, K, I = [0, 0, 0, 0],
            O = function(a, b) {
                return b.y - a.y
            };
        if (a.visible && (e.enabled || a._hasPointLabels)) {
            X.prototype.drawDataLabels.apply(a);
            t(b, function(a) {
                a.dataLabel && a.visible && (D[a.half].push(a),
                    a.dataLabel._pos = null)
            });
            for (J = 2; J--;) {
                var L = [],
                    R = [],
                    M = D[J],
                    P = M.length,
                    N;
                if (P) {
                    a.sortByAngle(M, J - .5);
                    for (K = b = 0; !b && M[K];) b = M[K] && M[K].dataLabel && (M[K].dataLabel.getBBox().height || 21), K++;
                    if (0 < p) {
                        A = H(v + u + p, d.plotHeight);
                        for (K = w(0, v - u - p); K <= A; K += b) L.push(K);
                        A = L.length;
                        if (P > A) {
                            c = [].concat(M);
                            c.sort(O);
                            for (K = P; K--;) c[K].rank = K;
                            for (K = P; K--;) M[K].rank >= A && M.splice(K, 1);
                            P = M.length
                        }
                        for (K = 0; K < P; K++) {
                            c = M[K];
                            z = c.labelPos;
                            c = 9999;
                            var T, S;
                            for (S = 0; S < A; S++) T = U(L[S] - z[1]), T < c && (c = T, N = S);
                            if (N < K && null !== L[K]) N = K;
                            else for (A < P - K + N && null !== L[K] && (N = A - P + K); null === L[N];) N++;
                            R.push({
                                i: N,
                                y: L[N]
                            });
                            L[N] = null
                        }
                        R.sort(O)
                    }
                    for (K = 0; K < P; K++) {
                        c = M[K];
                        z = c.labelPos;
                        y = c.dataLabel;
                        G = !1 === c.visible ? "hidden" : "inherit";
                        c = z[1];
                        if (0 < p) {
                            if (A = R.pop(), N = A.i, C = A.y, c > C && null !== L[N + 1] || c < C && null !== L[N - 1]) C = H(w(0, c), d.plotHeight)
                        } else C = c;
                        B = e.justify ? q[0] + (J ? -1 : 1) * (u + p) : a.getX(C === v - u - p || C === v + u + p ? c : C, J);
                        y._attr = {
                            visibility: G,
                            align: z[6]
                        };
                        y._pos = {
                            x: B + e.x + ({
                                left: f,
                                right: -f
                            }[z[6]] || 0),
                            y: C + e.y - 10
                        };
                        y.connX = B;
                        y.connY = C;
                        null === this.options.size && (A = y.width,
                            B - A < f ? I[3] = w(E(A - B + f), I[3]) : B + A > h - f && (I[1] = w(E(B + A - h + f), I[1])), 0 > C - b / 2 ? I[0] = w(E(-C + b / 2), I[0]) : C + b / 2 > l && (I[2] = w(E(C + b / 2 - l), I[2])))
                    }
                }
            }
            if (0 === Ca(I) || this.verifyDataLabelOverflow(I)) this.placeDataLabels(), x && g && t(this.points, function(b) {
                m = b.connector;
                z = b.labelPos;
                (y = b.dataLabel) && y._pos && b.visible ? (G = y._attr.visibility, B = y.connX, C = y.connY, k = n ? ["M", B + ("left" === z[6] ? 5 : -5), C, "C", B, C, 2 * z[2] - z[4], 2 * z[3] - z[5], z[2], z[3], "L", z[4], z[5]] : ["M", B + ("left" === z[6] ? 5 : -5), C, "L", z[2], z[3], "L", z[4], z[5]], m ? (m.animate({
                    d: k
                }),
                    m.attr("visibility", G)) : b.connector = m = a.chart.renderer.path(k).attr({
                    "stroke-width": g,
                    stroke: e.connectorColor || b.color || "#606060",
                    visibility: G
                }).add(a.dataLabelsGroup)) : m && (b.connector = m.destroy())
            })
        }
    }, P.pie.prototype.placeDataLabels = function() {
        t(this.points, function(a) {
            var b = a.dataLabel;
            b && a.visible && ((a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({
                y: -9999
            }))
        })
    }, P.pie.prototype.alignDataLabel = eb, P.pie.prototype.verifyDataLabelOverflow = function(a) {
        var b = this.center,
            c = this.options,
            d = c.center,
            e = c.minSize || 80,
            f, g;
        null !== d[0] ? f = w(b[2] - w(a[1], a[3]), e) : (f = w(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
        null !== d[1] ? f = w(H(f, b[2] - w(a[0], a[2])), e) : (f = w(H(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
        f < b[2] ? (b[2] = f, b[3] = Math.min(zb(c.innerSize || 0, f), f), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : g = !0;
        return g
    });
    P.column && (P.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart.inverted,
            g = a.series,
            h = a.dlBox || a.shapeArgs,
            l = r(a.below, a.plotY > r(this.translatedThreshold,
                    g.yAxis.len)),
            m = r(c.inside, !! this.options.stacking);
        h && (d = J(h), 0 > d.y && (d.height += d.y, d.y = 0), h = d.y + d.height - g.yAxis.len, 0 < h && (d.height -= h), f && (d = {
            x: g.yAxis.len - d.y - d.height,
            y: g.xAxis.len - d.x - d.width,
            width: d.height,
            height: d.width
        }), m || (f ? (d.x += l ? 0 : d.width, d.width = 0) : (d.y += l ? d.height : 0, d.height = 0)));
        c.align = r(c.align, !f || m ? "center" : l ? "right" : "left");
        c.verticalAlign = r(c.verticalAlign, f || m ? "middle" : l ? "top" : "bottom");
        X.prototype.alignDataLabel.call(this, a, b, c, d, e)
    });
    var Ya = x.TrackerMixin = {
        drawTrackerPoint: function() {
            var a = this,
                b = a.chart,
                c = b.pointer,
                d = a.options.cursor,
                e = d && {
                        cursor: d
                    }, f = function(a) {
                    for (var c = a.target, d; c && !d;) d = c.point, c = c.parentNode;
                    if (d !== D && d !== b.hoverPoint) d.onMouseOver(a)
                };
            t(a.points, function(a) {
                a.graphic && (a.graphic.element.point = a);
                a.dataLabel && (a.dataLabel.element.point = a)
            });
            a._hasTracking || (t(a.trackerGroups, function(b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                        c.onTrackerMouseOut(a)
                    }).css(e), La)) a[b].on("touchstart", f)
            }), a._hasTracking = !0)
        },
        drawTrackerGraph: function() {
            var a = this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                g = f.pointer,
                h = f.renderer,
                l = f.options.tooltip.snap,
                m = a.tracker,
                k = b.cursor,
                n = k && {
                        cursor: k
                    }, p = function() {
                    if (f.hoverSeries !== a) a.onMouseOver()
                }, q = "rgba(192,192,192," + (Z ? 1E-4 : .002) + ")";
            if (e && !c) for (k = e + 1; k--;) "M" === d[k] && d.splice(k + 1, 0, d[k + 1] - l, d[k + 2], "L"), (k && "M" === d[k] || k === e) && d.splice(k, 0, "L", d[k - 2] + l, d[k - 1]);
            m ? m.attr({
                d: d
            }) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: q,
                fill: c ? q : "none",
                "stroke-width": b.lineWidth + (c ? 0 : 2 * l),
                zIndex: 2
            }).add(a.group), t([a.tracker, a.markerGroup], function(a) {
                a.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a)
                }).css(n);
                if (La) a.on("touchstart", p)
            }))
        }
    };
    P.column && (jb.prototype.drawTracker = Ya.drawTrackerPoint);
    P.pie && (P.pie.prototype.drawTracker = Ya.drawTrackerPoint);
    P.scatter && (ScatterSeries.prototype.drawTracker = Ya.drawTrackerPoint);
    B(Xa.prototype, {
        setItemEvents: function(a, b,
                                c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function(b) {
                var c = function() {
                    a.setVisible && a.setVisible()
                };
                b = {
                    browserEvent: b
                };
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : I(a, "legendItemClick", b, c)
            })
        },
        createCheckboxForItem: function(a) {
            a.checkbox = za("input", {
                    type: "checkbox",
                    checked: a.selected,
                    defaultChecked: a.selected
                }, this.options.itemCheckboxStyle,
                this.chart.container);
            R(a.checkbox, "click", function(b) {
                I(a.series || a, "checkboxClick", {
                    checked: b.target.checked,
                    item: a
                }, function() {
                    a.select()
                })
            })
        }
    });
    N.legend.itemStyle.cursor = "pointer";
    B(ib.prototype, {
        showResetZoom: function() {
            var a = this,
                b = N.lang,
                c = a.options.chart.resetZoomButton,
                d = c.theme,
                e = d.states,
                f = "chart" === c.relativeTo ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, f)
        },
        zoomOut: function() {
            var a = this;
            I(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom()
            })
        },
        zoom: function(a) {
            var b, c = this.pointer,
                d = !1,
                e;
            !a || a.resetSelection ? t(this.axes, function(a) {
                b = a.zoom()
            }) : t(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis,
                    h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            d && !e ? this.showResetZoom() : !d && ea(e) && (this.resetZoomButton = e.destroy());
            b && this.redraw(r(this.options.chart.animation, a && a.animation,
                100 > this.pointCount))
        },
        pan: function(a, b) {
            var c = this,
                d = c.hoverPoints,
                e;
            d && t(d, function(a) {
                a.setState()
            });
            t("xy" === b ? [1, 0] : [1], function(b) {
                b = c[b ? "xAxis" : "yAxis"][0];
                var d = b.horiz,
                    h = a[d ? "chartX" : "chartY"],
                    d = d ? "mouseDownX" : "mouseDownY",
                    l = c[d],
                    m = (b.pointRange || 0) / 2,
                    k = b.getExtremes(),
                    n = b.toValue(l - h, !0) + m,
                    m = b.toValue(l + b.len - h, !0) - m,
                    l = l > h;
                b.series.length && (l || n > H(k.dataMin, k.min)) && (!l || m < w(k.dataMax, k.max)) && (b.setExtremes(n, m, !1, !1, {
                    trigger: "pan"
                }), e = !0);
                c[d] = h
            });
            e && c.redraw(!1);
            Y(c.container, {
                cursor: "move"
            })
        }
    });
    B(Na.prototype, {
        select: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart;
            a = r(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = c.options.selected = a;
                d.options.data[ta(c, d.data)] = c.options;
                c.setState(a && "select");
                b || t(e.getSelectedPoints(), function(a) {
                    a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[ta(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                })
            })
        },
        onMouseOver: function(a, b) {
            var c = this.series,
                d = c.chart,
                e = d.tooltip,
                f = d.hoverPoint;
            if (d.hoverSeries !== c) c.onMouseOver();
            if (f && f !== this) f.onMouseOut();
            this.series && (this.firePointEvent("mouseOver"), !e || e.shared && !c.noSharedTooltip || e.refresh(this, a), this.setState("hover"), b || (d.hoverPoint = this))
        },
        onMouseOut: function() {
            var a = this.series.chart,
                b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            b && -1 !== ta(this, b) || (this.setState(), a.hoverPoint = null)
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = J(this.series.options.point, this.options).events,
                    b;
                this.events = a;
                for (b in a) R(this,
                    b, a[b]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(a, b) {
            var c = ca(this.plotX),
                d = this.plotY,
                e = this.series,
                f = e.options.states,
                g = ja[e.type].marker && e.options.marker,
                h = g && !g.enabled,
                l = g && g.states[a],
                m = l && !1 === l.enabled,
                k = e.stateMarkerGraphic,
                n = this.marker || {}, p = e.chart,
                q = e.halo,
                r;
            a = a || "";
            r = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && "select" !== a || f[a] && !1 === f[a].enabled || a && (m || h && !1 === l.enabled) || a && n.states && n.states[a] && !1 === n.states[a].enabled)) {
                if (this.graphic) g = g && this.graphic.symbolName && r.r, this.graphic.attr(J(r, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), k && k.hide();
                else {
                    if (a && l) if (g = l.radius, n = n.symbol || e.symbol, k && k.currentSymbol !== n && (k = k.destroy()), k) k[b ? "animate" : "attr"]({
                        x: c - g,
                        y: d - g
                    });
                    else n && (e.stateMarkerGraphic = k = p.renderer.symbol(n, c - g, d - g, 2 * g, 2 * g).attr(r).add(e.markerGroup), k.currentSymbol = n);
                    k && (k[a && p.isInsidePlot(c, d, p.inverted) ? "show" : "hide"](), k.element.point = this)
                }(c = f[a] && f[a].halo) && c.size ? (q || (e.halo = q = p.renderer.path().add(p.seriesGroup)),
                    q.attr(B({
                        fill: this.color || e.color,
                        "fill-opacity": c.opacity,
                        zIndex: -1
                    }, c.attributes))[b ? "animate" : "attr"]({
                        d: this.haloPath(c.size)
                    })) : q && q.attr({
                    d: []
                });
                this.state = a
            }
        },
        haloPath: function(a) {
            var b = this.series,
                c = b.chart,
                d = b.getPlotBox(),
                e = c.inverted,
                f = Math.floor(this.plotX);
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : f) - a, d.translateY + (e ? b.xAxis.len - f : this.plotY) - a, 2 * a, 2 * a)
        }
    });
    B(X.prototype, {
        onMouseOver: function() {
            var a = this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && I(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        },
        onMouseOut: function() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            b.hoverSeries = null;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && I(this, "mouseOut");
            !c || a.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
            this.setState()
        },
        setState: function(a) {
            var b = this.options,
                c = this.graph,
                d = b.states,
                e = b.lineWidth,
                b = 0;
            a = a || "";
            if (this.state !== a && (this.state = a, !d[a] || !1 !== d[a].enabled) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle)) for (a = {
                "stroke-width": e
            }, c.attr(a); this["zoneGraph" + b];) this["zoneGraph" + b].attr(a), b += 1
        },
        setVisible: function(a, b) {
            var c = this,
                d = c.chart,
                e = c.legendItem,
                f, g = d.options.chart.ignoreHiddenSeries,
                h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === D ? !h : a) ? "show" : "hide";
            t(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && t(d.series, function(a) {
                a.options.stacking && a.visible && (a.isDirty = !0)
            });
            t(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            g && (d.isDirtyBox = !0);
            !1 !== b && d.redraw();
            I(c, f)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(a) {
            this.selected = a = a === D ? !this.selected : a;
            this.checkbox && (this.checkbox.checked = a);
            I(this, a ? "select" : "unselect")
        },
        drawTracker: Ya.drawTrackerGraph
    });
    B(x, {
        Color: ha,
        Point: Na,
        Tick: Da,
        Renderer: Va,
        SVGElement: V,
        SVGRenderer: Va,
        arrayMin: Ia,
        arrayMax: Ca,
        charts: T,
        correctFloat: fa,
        dateFormat: Ba,
        error: W,
        format: Aa,
        pathAnim: void 0,
        getOptions: function() {
            return N
        },
        hasBidiBug: Cb,
        isTouchDevice: ub,
        setOptions: function(a) {
            N = J(!0, N, a);
            kb();
            return N
        },
        addEvent: R,
        removeEvent: S,
        createElement: za,
        discardElement: Qa,
        css: Y,
        each: t,
        map: wa,
        merge: J,
        splat: la,
        stableSort: Oa,
        extendClass: Ha,
        pInt: O,
        svg: Z,
        canvas: ga,
        vml: !Z && !ga,
        product: "Highcharts 4.2.5",
        version: "/Highstock 4.2.5"
    });
    return x
}); 