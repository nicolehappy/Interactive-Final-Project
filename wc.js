! function() {
	function p(e, t) {
		return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
	}

	function d(e) {
		return e != null && !isNaN(e)
	}

	function v(e) {
		return {
			left: function(t, n, r, i) {
				arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length);
				while (r < i) {
					var s = r + i >>> 1;
					e(t[s], n) < 0 ? r = s + 1 : i = s
				}
				return r
			},
			right: function(t, n, r, i) {
				arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length);
				while (r < i) {
					var s = r + i >>> 1;
					e(t[s], n) > 0 ? i = s : r = s + 1
				}
				return r
			}
		}
	}

	function g(e) {
		return e.length
	}

	function b(e) {
		var t = 1;
		while (e * t % 1) t *= 10;
		return t
	}

	function w(e, t) {
		try {
			for (var n in t) Object.defineProperty(e.prototype, n, {
				value: t[n],
				enumerable: !1
			})
		} catch (r) {
			e.prototype = t
		}
	}

	function E() {}

	function T(e) {
		return S + e in this
	}

	function N(e) {
		return e = S + e, e in this && delete this[e]
	}

	function C() {
		var e = [];
		return this.forEach(function(t) {
			e.push(t)
		}), e
	}

	function k() {
		var e = 0;
		for (var t in this) t.charCodeAt(0) === x && ++e;
		return e
	}

	function L() {
		for (var e in this)
			if (e.charCodeAt(0) === x) return !1;
		return !0
	}

	function A() {}

	function O(e, t, n) {
		return function() {
			var r = n.apply(t, arguments);
			return r === t ? e : r
		}
	}

	function M(e, t) {
		if (t in e) return t;
		t = t.charAt(0).toUpperCase() + t.substring(1);
		for (var n = 0, r = _.length; n < r; ++n) {
			var i = _[n] + t;
			if (i in e) return i
		}
	}

	function D() {}

	function P() {}

	function H(e) {
		function r() {
			var n = t,
				r = -1,
				i = n.length,
				s;
			while (++r < i)(s = n[r].on) && s.apply(this, arguments);
			return e
		}
		var t = [],
			n = new E;
		return r.on = function(r, i) {
			var s = n.get(r),
				o;
			return arguments.length < 2 ? s && s.on : (s && (s.on = null, t = t.slice(0, o = t.indexOf(s)).concat(t.slice(o + 1)), n.remove(r)), i && t.push(n.set(r, {
				on: i
			})), e)
		}, r
	}

	function B() {
		e.event.preventDefault()
	}

	function j() {
		var t = e.event,
			n;
		while (n = t.sourceEvent) t = n;
		return t
	}

	function F(t) {
		var n = new P,
			r = 0,
			i = arguments.length;
		while (++r < i) n[arguments[r]] = H(n);
		return n.of = function(r, i) {
			return function(s) {
				try {
					var o = s.sourceEvent = e.event;
					s.target = t, e.event = s, n[s.type].apply(r, i)
				} finally {
					e.event = o
				}
			}
		}, n
	}

	function R(e) {
		return q(e, V), e
	}

	function $(e) {
		return typeof e == "function" ? e : function() {
			return U(e, this)
		}
	}

	function J(e) {
		return typeof e == "function" ? e : function() {
			return z(e, this)
		}
	}

	function Q(t, n) {
		function r() {
			this.removeAttribute(t)
		}

		function i() {
			this.removeAttributeNS(t.space, t.local)
		}

		function s() {
			this.setAttribute(t, n)
		}

		function o() {
			this.setAttributeNS(t.space, t.local, n)
		}

		function u() {
			var e = n.apply(this, arguments);
			e == null ? this.removeAttribute(t) : this.setAttribute(t, e)
		}

		function a() {
			var e = n.apply(this, arguments);
			e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
		}
		return t = e.ns.qualify(t), n == null ? t.local ? i : r : typeof n == "function" ? t.local ? a : u : t.local ? o : s
	}

	function G(e) {
		return e.trim().replace(/\s+/g, " ")
	}

	function Y(t) {
		return new RegExp("(?:^|\\s+)" + e.requote(t) + "(?:\\s+|$)", "g")
	}

	function Z(e) {
		return e.trim().split(/^|\s+/)
	}

	function et(e, t) {
		function r() {
			var r = -1;
			while (++r < n) e[r](this, t)
		}

		function i() {
			var r = -1,
				i = t.apply(this, arguments);
			while (++r < n) e[r](this, i)
		}
		e = Z(e).map(tt);
		var n = e.length;
		return typeof t == "function" ? i : r
	}

	function tt(e) {
		var t = Y(e);
		return function(n, r) {
			if (i = n.classList) return r ? i.add(e) : i.remove(e);
			var i = n.getAttribute("class") || "";
			r ? (t.lastIndex = 0, t.test(i) || n.setAttribute("class", G(i + " " + e))) : n.setAttribute("class", G(i.replace(t, " ")))
		}
	}

	function nt(e, t, n) {
		function r() {
			this.style.removeProperty(e)
		}

		function i() {
			this.style.setProperty(e, t, n)
		}

		function s() {
			var r = t.apply(this, arguments);
			r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
		}
		return t == null ? r : typeof t == "function" ? s : i
	}

	function rt(e, t) {
		function n() {
			delete this[e]
		}

		function r() {
			this[e] = t
		}

		function i() {
			var n = t.apply(this, arguments);
			n == null ? delete this[e] : this[e] = n
		}
		return t == null ? n : typeof t == "function" ? i : r
	}

	function it(t) {
		return typeof t == "function" ? t : (t = e.ns.qualify(t)).local ? function() {
			return this.ownerDocument.createElementNS(t.space, t.local)
		} : function() {
			return this.ownerDocument.createElementNS(this.namespaceURI, t)
		}
	}

	function st(e) {
		return {
			__data__: e
		}
	}

	function ot(e) {
		return function() {
			return X(this, e)
		}
	}

	function ut(e) {
		return arguments.length || (e = p),
			function(t, n) {
				return t && n ? e(t.__data__, n.__data__) : !t - !n
			}
	}

	function at(e, t) {
		for (var n = 0, r = e.length; n < r; n++)
			for (var i = e[n], s = 0, o = i.length, u; s < o; s++)(u = i[s]) && t(u, s, n);
		return e
	}

	function ft(e) {
		return q(e, lt), e
	}

	function ct(e) {
		var t, n;
		return function(r, i, s) {
			var o = e[s].update,
				u = o.length,
				a;
			s != n && (n = s, t = 0), i >= t && (t = i + 1);
			while (!(a = o[t]) && ++t < u);
			return a
		}
	}

	function ht() {
		var e = this.__transition__;
		e && ++e.active
	}

	function dt(t, r, i) {
		function f() {
			var e = this[s];
			e && (this.removeEventListener(t, e, e.$), delete this[s])
		}

		function l() {
			var e = u(r, n(arguments));
			f.call(this), this.addEventListener(t, this[s] = e, e.$ = i), e._ = r
		}

		function c() {
			var n = new RegExp("^__on([^.]+)" + e.requote(t) + "$"),
				r;
			for (var i in this)
				if (r = i.match(n)) {
					var s = this[i];
					this.removeEventListener(r[1], s, s.$), delete this[i]
				}
		}
		var s = "__on" + t,
			o = t.indexOf("."),
			u = mt;
		o > 0 && (t = t.substring(0, o));
		var a = vt.get(t);
		return a && (t = a, u = gt), o ? r ? l : f : r ? D : c
	}

	function mt(t, n) {
		return function(r) {
			var i = e.event;
			e.event = r, n[0] = this.__data__;
			try {
				t.apply(this, n)
			} finally {
				e.event = i
			}
		}
	}

	function gt(e, t) {
		var n = mt(e, t);
		return function(e) {
			var t = this,
				r = e.relatedTarget;
			(!r || r !== t && !(r.compareDocumentPosition(t) & 8)) && n.call(t, e)
		}
	}

	function wt() {
		var t = ".dragsuppress-" + ++bt,
			n = "click" + t,
			r = e.select(s).on("touchmove" + t, B).on("dragstart" + t, B).on("selectstart" + t, B);
		if (yt) {
			var o = i.style,
				u = o[yt];
			o[yt] = "none"
		}
		return function(e) {
			r.on(t, null), yt && (o[yt] = u);
			if (e) {
				function i() {
					r.on(n, null)
				}
				r.on(n, function() {
					B(), i()
				}, !0), setTimeout(i, 0)
			}
		}
	}

	function Et(e, t) {
		t.changedTouches && (t = t.changedTouches[0]);
		var n = e.ownerSVGElement || e;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y]
		}
		var i = e.getBoundingClientRect();
		return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop]
	}

	function St() {
		return e.event.changedTouches[0].identifier
	}

	function xt() {
		return e.event.target
	}

	function Tt() {
		return s
	}

	function _t(e) {
		return e > 0 ? 1 : e < 0 ? -1 : 0
	}

	function Dt(e, t, n) {
		return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0])
	}

	function Pt(e) {
		return e > 1 ? 0 : e < -1 ? Nt : Math.acos(e)
	}

	function Ht(e) {
		return e > 1 ? kt : e < -1 ? -kt : Math.asin(e)
	}

	function Bt(e) {
		return ((e = Math.exp(e)) - 1 / e) / 2
	}

	function jt(e) {
		return ((e = Math.exp(e)) + 1 / e) / 2
	}

	function Ft(e) {
		return ((e = Math.exp(2 * e)) - 1) / (e + 1)
	}

	function It(e) {
		return (e = Math.sin(e / 2)) * e
	}

	function Vt() {}

	function $t(e, t, n) {
		return new Jt(e, t, n)
	}

	function Jt(e, t, n) {
		this.h = e, this.s = t, this.l = n
	}

	function Qt(e, t, n) {
		function s(e) {
			return e > 360 ? e -= 360 : e < 0 && (e += 360), e < 60 ? r + (i - r) * e / 60 : e < 180 ? i : e < 240 ? r + (i - r) * (240 - e) / 60 : r
		}

		function o(e) {
			return Math.round(s(e) * 255)
		}
		var r, i;
		return e = isNaN(e) ? 0 : (e %= 360) < 0 ? e + 360 : e, t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t, n = n < 0 ? 0 : n > 1 ? 1 : n, i = n <= .5 ? n * (1 + t) : n + t - n * t, r = 2 * n - i, mn(o(e + 120), o(e), o(e - 120))
	}

	function Gt(e, t, n) {
		return new Yt(e, t, n)
	}

	function Yt(e, t, n) {
		this.h = e, this.c = t, this.l = n
	}

	function en(e, t, n) {
		return isNaN(e) && (e = 0), isNaN(t) && (t = 0), tn(n, Math.cos(e *= Ot) * t, Math.sin(e) * t)
	}

	function tn(e, t, n) {
		return new nn(e, t, n)
	}

	function nn(e, t, n) {
		this.l = e, this.a = t, this.b = n
	}

	function fn(e, t, n) {
		var r = (e + 16) / 116,
			i = r + t / 500,
			s = r - n / 200;
		return i = cn(i) * sn, r = cn(r) * on, s = cn(s) * un, mn(pn(3.2404322 * i - 1.1271385 * r - .4981214 * s), pn(-0.969266 * i + 1.8760108 * r + .041556 * s), pn(.0556434 * i - .2040259 * r + 1.0572252 * s))
	}

	function ln(e, t, n) {
		return e > 0 ? Gt(Math.atan2(n, t) * Mt, Math.sqrt(t * t + n * n), e) : Gt(NaN, NaN, e)
	}

	function cn(e) {
		return e > .206893034 ? e * e * e : (e - 4 / 29) / 7.787037
	}

	function hn(e) {
		return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
	}

	function pn(e) {
		return Math.round(255 * (e <= .00304 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055))
	}

	function dn(e) {
		return mn(e >> 16, e >> 8 & 255, e & 255)
	}

	function vn(e) {
		return dn(e) + ""
	}

	function mn(e, t, n) {
		return new gn(e, t, n)
	}

	function gn(e, t, n) {
		this.r = e, this.g = t, this.b = n
	}

	function bn(e) {
		return e < 16 ? "0" + Math.max(0, e).toString(16) : Math.min(255, e).toString(16)
	}

	function wn(e, t, n) {
		var r = 0,
			i = 0,
			s = 0,
			o, u, a;
		o = /([a-z]+)\((.*)\)/i.exec(e);
		if (o) {
			u = o[2].split(",");
			switch (o[1]) {
				case "hsl":
					return n(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
				case "rgb":
					return t(Tn(u[0]), Tn(u[1]), Tn(u[2]))
			}
		}
		return (a = Nn.get(e)) ? t(a.r, a.g, a.b) : (e != null && e.charAt(0) === "#" && !isNaN(a = parseInt(e.substring(1), 16)) && (e.length === 4 ? (r = (a & 3840) >> 4, r = r >> 4 | r, i = a & 240, i = i >> 4 | i, s = a & 15, s = s << 4 | s) : e.length === 7 && (r = (a & 16711680) >> 16, i = (a & 65280) >> 8, s = a & 255)), t(r, i, s))
	}

	function En(e, t, n) {
		var r = Math.min(e /= 255, t /= 255, n /= 255),
			i = Math.max(e, t, n),
			s = i - r,
			o, u, a = (i + r) / 2;
		return s ? (u = a < .5 ? s / (i + r) : s / (2 - i - r), e == i ? o = (t - n) / s + (t < n ? 6 : 0) : t == i ? o = (n - e) / s + 2 : o = (e - t) / s + 4, o *= 60) : (o = NaN, u = a > 0 && a < 1 ? 0 : o), $t(o, u, a)
	}

	function Sn(e, t, n) {
		e = xn(e), t = xn(t), n = xn(n);
		var r = hn((.4124564 * e + .3575761 * t + .1804375 * n) / sn),
			i = hn((.2126729 * e + .7151522 * t + .072175 * n) / on),
			s = hn((.0193339 * e + .119192 * t + .9503041 * n) / un);
		return tn(116 * i - 16, 500 * (r - i), 200 * (i - s))
	}

	function xn(e) {
		return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
	}

	function Tn(e) {
		var t = parseFloat(e);
		return e.charAt(e.length - 1) === "%" ? Math.round(t * 2.55) : t
	}

	function Cn(e) {
		return typeof e == "function" ? e : function() {
			return e
		}
	}

	function kn(e) {
		return e
	}

	function Ln(e) {
		return function(t, n, r) {
			return arguments.length === 2 && typeof n == "function" && (r = n, n = null), An(t, n, e, r)
		}
	}

	function An(t, r, i, o) {
		function h() {
			var e = l.status,
				t;
			if (!e && l.responseText || e >= 200 && e < 300 || e === 304) {
				try {
					t = i.call(u, l)
				} catch (n) {
					a.error.call(u, n);
					return
				}
				a.load.call(u, t)
			} else a.error.call(u, l)
		}
		var u = {},
			a = e.dispatch("beforesend", "progress", "load", "error"),
			f = {},
			l = new XMLHttpRequest,
			c = null;
		return s.XDomainRequest && !("withCredentials" in l) && /^(http(s)?:)?\/\//.test(t) && (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = h : l.onreadystatechange = function() {
			l.readyState > 3 && h()
		}, l.onprogress = function(t) {
			var n = e.event;
			e.event = t;
			try {
				a.progress.call(u, l)
			} finally {
				e.event = n
			}
		}, u.header = function(e, t) {
			return e = (e + "").toLowerCase(), arguments.length < 2 ? f[e] : (t == null ? delete f[e] : f[e] = t + "", u)
		}, u.mimeType = function(e) {
			return arguments.length ? (r = e == null ? null : e + "", u) : r
		}, u.responseType = function(e) {
			return arguments.length ? (c = e, u) : c
		}, u.response = function(e) {
			return i = e, u
		}, ["get", "post"].forEach(function(e) {
			u[e] = function() {
				return u.send.apply(u, [e].concat(n(arguments)))
			}
		}), u.send = function(e, n, i) {
			arguments.length === 2 && typeof n == "function" && (i = n, n = null), l.open(e, t, !0), r != null && !("accept" in f) && (f.accept = r + ",*/*");
			if (l.setRequestHeader)
				for (var s in f) l.setRequestHeader(s, f[s]);
			return r != null && l.overrideMimeType && l.overrideMimeType(r), c != null && (l.responseType = c), i != null && u.on("error", i).on("load", function(e) {
				i(null, e)
			}), a.beforesend.call(u, l), l.send(n == null ? null : n), u
		}, u.abort = function() {
			return l.abort(), u
		}, e.rebind(u, a, "on"), o == null ? u : u.get(On(o))
	}

	function On(e) {
		return e.length === 1 ? function(t, n) {
			e(t == null ? n : null)
		} : e
	}

	function jn() {
		var e = Fn(),
			t = In() - e;
		t > 24 ? (isFinite(t) && (clearTimeout(Pn), Pn = setTimeout(jn, t)), Dn = 0) : (Dn = 1, Bn(jn))
	}

	function Fn() {
		var e = Date.now();
		Hn = Mn;
		while (Hn) e >= Hn.t && (Hn.f = Hn.c(e - Hn.t)), Hn = Hn.n;
		return e
	}

	function In() {
		var e, t = Mn,
			n = Infinity;
		while (t) t.f ? t = e ? e.n = t.n : Mn = t.n : (t.t < n && (n = t.t), t = (e = t).n);
		return _n = e, n
	}

	function qn(e, t) {
		return t - (e ? Math.ceil(Math.log(e) / Math.LN10) : 1)
	}

	function Un(e, t) {
		var n = Math.pow(10, y(8 - t) * 3);
		return {
			scale: t > 8 ? function(e) {
				return e / n
			} : function(e) {
				return e * n
			},
			symbol: e
		}
	}

	function zn(t) {
		var n = t.decimal,
			r = t.thousands,
			i = t.grouping,
			s = t.currency,
			o = i ? function(e) {
				var t = e.length,
					n = [],
					s = 0,
					o = i[0];
				while (t > 0 && o > 0) n.push(e.substring(t -= o, t + o)), o = i[s = (s + 1) % i.length];
				return n.reverse().join(r)
			} : kn;
		return function(t) {
			var r = Wn.exec(t),
				i = r[1] || " ",
				u = r[2] || ">",
				a = r[3] || "",
				f = r[4] || "",
				l = r[5],
				c = +r[6],
				h = r[7],
				p = r[8],
				d = r[9],
				v = 1,
				m = "",
				g = "",
				y = !1;
			p && (p = +p.substring(1));
			if (l || i === "0" && u === "=") l = i = "0", u = "=", h && (c -= Math.floor((c - 1) / 4));
			switch (d) {
				case "n":
					h = !0, d = "g";
					break;
				case "%":
					v = 100, g = "%", d = "f";
					break;
				case "p":
					v = 100, g = "%", d = "r";
					break;
				case "b":
				case "o":
				case "x":
				case "X":
					f === "#" && (m = "0" + d.toLowerCase());
				case "c":
				case "d":
					y = !0, p = 0;
					break;
				case "s":
					v = -1, d = "r"
			}

			f === "$" && (m = s[0], g = s[1]), d == "r" && !p && (d = "g");
			if (p != null)
				if (d == "g") p = Math.max(1, Math.min(21, p));
				else if (d == "e" || d == "f") p = Math.max(0, Math.min(20, p));
			d = Xn.get(d) || Vn;
			var b = l && h;
			return function(t) {
				var r = g;
				if (y && t % 1) return "";
				var s = t < 0 || t === 0 && 1 / t < 0 ? (t = -t, "-") : a;
				if (v < 0) {
					var f = e.formatPrefix(t, p);
					t = f.scale(t), r = f.symbol + g
				} else t *= v;
				t = d(t, p);
				var w = t.lastIndexOf("."),
					E = w < 0 ? t : t.substring(0, w),
					S = w < 0 ? "" : n + t.substring(w + 1);
				!l && h && (E = o(E));
				var x = m.length + E.length + S.length + (b ? 0 : s.length),
					T = x < c ? (new Array(x = c - x + 1)).join(i) : "";
				return b && (E = o(T + E)), s += m, t = E + S, (u === "<" ? s + t + T : u === ">" ? T + s + t : u === "^" ? T.substring(0, x >>= 1) + s + t + T.substring(x) : s + (b ? t : T + t)) + r
			}
		}
	}

	function Vn(e) {
		return e + ""
	}

	function Kn() {
		this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
	}

	function Gn(e, t, n) {
		function r(t) {
			var n = e(t),
				r = s(n, 1);
			return t - n < r - t ? n : r
		}

		function i(n) {
			return t(n = e(new Jn(n - 1)), 1), n
		}

		function s(e, n) {
			return t(e = new Jn(+e), n), e
		}

		function o(e, r, s) {
			var o = i(e),
				u = [];
			if (s > 1)
				while (o < r) n(o) % s || u.push(new Date(+o)), t(o, 1);
			else
				while (o < r) u.push(new Date(+o)), t(o, 1);
			return u
		}

		function u(e, t, n) {
			try {
				Jn = Kn;
				var r = new Kn;
				return r._ = e, o(r, t, n)
			} finally {
				Jn = Date
			}
		}
		e.floor = e, e.round = r, e.ceil = i, e.offset = s, e.range = o;
		var a = e.utc = Yn(e);
		return a.floor = a, a.round = Yn(r), a.ceil = Yn(i), a.offset = Yn(s), a.range = u, e
	}

	function Yn(e) {
		return function(t, n) {
			try {
				Jn = Kn;
				var r = new Kn;
				return r._ = t, e(r, n)._
			} finally {
				Jn = Date
			}
		}
	}

	function Zn(t) {
		function l(e) {
			function n(n) {
				var r = [],
					i = -1,
					s = 0,
					o, u, a;
				while (++i < t)
					if (e.charCodeAt(i) === 37) {
						r.push(e.substring(s, i)), (u = er[o = e.charAt(++i)]) != null && (o = e.charAt(++i));
						if (a = E[o]) o = a(n, u == null ? o === "e" ? " " : "0" : u);
						r.push(o), s = i + 1
					}
				return r.push(e.substring(s, i)), r.join("")
			}
			var t = e.length;
			return n.parse = function(t) {
				var n = {
						y: 1900,
						m: 0,
						d: 1,
						H: 0,
						M: 0,
						S: 0,
						L: 0,
						Z: null
					},
					r = c(n, e, t, 0);
				if (r != t.length) return null;
				"p" in n && (n.H = n.H % 12 + n.p * 12);
				var i = n.Z != null && Jn !== Kn,
					s = new(i ? Kn : Jn);
				return "j" in n ? s.setFullYear(n.y, 0, n.j) : "w" in n && ("W" in n || "U" in n) ? (s.setFullYear(n.y, 0, 1), s.setFullYear(n.y, 0, "W" in n ? (n.w + 6) % 7 + n.W * 7 - (s.getDay() + 5) % 7 : n.w + n.U * 7 - (s.getDay() + 6) % 7)) : s.setFullYear(n.y, n.m, n.d), s.setHours(n.H + Math.floor(n.Z / 100), n.M + n.Z % 100, n.S, n.L), i ? s._ : s
			}, n.toString = function() {
				return e
			}, n
		}

		function c(e, t, n, r) {
			var i, s, o, u = 0,
				a = t.length,
				f = n.length;
			while (u < a) {
				if (r >= f) return -1;
				i = t.charCodeAt(u++);
				if (i === 37) {
					o = t.charAt(u++), s = S[o in er ? t.charAt(u++) : o];
					if (!s || (r = s(e, n, r)) < 0) return -1
				} else if (i != n.charCodeAt(r++)) return -1
			}
			return r
		}

		function x(e, t, n) {
			v.lastIndex = 0;
			var r = v.exec(t.substring(n));
			return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1
		}

		function T(e, t, n) {
			p.lastIndex = 0;
			var r = p.exec(t.substring(n));
			return r ? (e.w = d.get(r[0].toLowerCase()), n + r[0].length) : -1
		}

		function N(e, t, n) {
			b.lastIndex = 0;
			var r = b.exec(t.substring(n));
			return r ? (e.m = w.get(r[0].toLowerCase()), n + r[0].length) : -1
		}

		function C(e, t, n) {
			g.lastIndex = 0;
			var r = g.exec(t.substring(n));
			return r ? (e.m = y.get(r[0].toLowerCase()), n + r[0].length) : -1
		}

		function k(e, t, n) {
			return c(e, E.c.toString(), t, n)
		}

		function L(e, t, n) {
			return c(e, E.x.toString(), t, n)
		}

		function A(e, t, n) {
			return c(e, E.X.toString(), t, n)
		}

		function O(e, t, n) {
			var r = h.get(t.substring(n, n += 2).toLowerCase());
			return r == null ? -1 : (e.p = r, n)
		}
		var n = t.dateTime,
			r = t.date,
			i = t.time,
			s = t.periods,
			o = t.days,
			u = t.shortDays,
			a = t.months,
			f = t.shortMonths;
		l.utc = function(e) {
			function n(e) {
				try {
					Jn = Kn;
					var n = new Jn;
					return n._ = e, t(n)
				} finally {
					Jn = Date
				}
			}
			var t = l(e);
			return n.parse = function(e) {
				try {
					Jn = Kn;
					var n = t.parse(e);
					return n && n._
				} finally {
					Jn = Date
				}
			}, n.toString = t.toString, n
		}, l.multi = l.utc.multi = Sr;
		var h = e.map(),
			p = ir(o),
			d = sr(o),
			v = ir(u),
			m = sr(u),
			g = ir(a),
			y = sr(a),
			b = ir(f),
			w = sr(f);
		s.forEach(function(e, t) {
			h.set(e.toLowerCase(), t)
		});
		var E = {
				a: function(e) {
					return u[e.getDay()]
				},
				A: function(e) {
					return o[e.getDay()]
				},
				b: function(e) {
					return f[e.getMonth()]
				},
				B: function(e) {
					return a[e.getMonth()]
				},
				c: l(n),
				d: function(e, t) {
					return rr(e.getDate(), t, 2)
				},
				e: function(e, t) {
					return rr(e.getDate(), t, 2)
				},
				H: function(e, t) {
					return rr(e.getHours(), t, 2)
				},
				I: function(e, t) {
					return rr(e.getHours() % 12 || 12, t, 2)
				},
				j: function(e, t) {
					return rr(1 + $n.dayOfYear(e), t, 3)
				},
				L: function(e, t) {
					return rr(e.getMilliseconds(), t, 3)
				},
				m: function(e, t) {
					return rr(e.getMonth() + 1, t, 2)
				},
				M: function(e, t) {
					return rr(e.getMinutes(), t, 2)
				},
				p: function(e) {
					return s[+(e.getHours() >= 12)]
				},
				S: function(e, t) {
					return rr(e.getSeconds(), t, 2)
				},
				U: function(e, t) {
					return rr($n.sundayOfYear(e), t, 2)
				},
				w: function(e) {
					return e.getDay()
				},
				W: function(e, t) {
					return rr($n.mondayOfYear(e), t, 2)
				},
				x: l(r),
				X: l(i),
				y: function(e, t) {
					return rr(e.getFullYear() % 100, t, 2)
				},
				Y: function(e, t) {
					return rr(e.getFullYear() % 1e4, t, 4)
				},
				Z: wr,
				"%": function() {
					return "%"
				}
			},
			S = {
				a: x,
				A: T,
				b: N,
				B: C,
				c: k,
				d: dr,
				e: dr,
				H: mr,
				I: mr,
				j: vr,
				L: br,
				m: pr,
				M: gr,
				p: O,
				S: yr,
				U: ur,
				w: or,
				W: ar,
				x: L,
				X: A,
				y: lr,
				Y: fr,
				Z: cr,
				"%": Er
			};
		return l
	}

	function rr(e, t, n) {
		var r = e < 0 ? "-" : "",
			i = (r ? -e : e) + "",
			s = i.length;
		return r + (s < n ? (new Array(n - s + 1)).join(t) + i : i)
	}

	function ir(t) {
		return new RegExp("^(?:" + t.map(e.requote).join("|") + ")", "i")
	}

	function sr(e) {
		var t = new E,
			n = -1,
			r = e.length;
		while (++n < r) t.set(e[n].toLowerCase(), n);
		return t
	}

	function or(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 1));
		return r ? (e.w = +r[0], n + r[0].length) : -1
	}

	function ur(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n));
		return r ? (e.U = +r[0], n + r[0].length) : -1
	}

	function ar(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n));
		return r ? (e.W = +r[0], n + r[0].length) : -1
	}

	function fr(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 4));
		return r ? (e.y = +r[0], n + r[0].length) : -1
	}

	function lr(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 2));
		return r ? (e.y = hr(+r[0]), n + r[0].length) : -1
	}

	function cr(e, t, n) {
		return /^[+-]\d{4}$/.test(t = t.substring(n, n + 5)) ? (e.Z = -t, n + 5) : -1
	}

	function hr(e) {
		return e + (e > 68 ? 1900 : 2e3)
	}

	function pr(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 2));
		return r ? (e.m = r[0] - 1, n + r[0].length) : -1
	}

	function dr(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 2));
		return r ? (e.d = +r[0], n + r[0].length) : -1
	}

	function vr(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 3));
		return r ? (e.j = +r[0], n + r[0].length) : -1
	}

	function mr(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 2));
		return r ? (e.H = +r[0], n + r[0].length) : -1
	}

	function gr(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 2));
		return r ? (e.M = +r[0], n + r[0].length) : -1
	}

	function yr(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 2));
		return r ? (e.S = +r[0], n + r[0].length) : -1
	}

	function br(e, t, n) {
		tr.lastIndex = 0;
		var r = tr.exec(t.substring(n, n + 3));
		return r ? (e.L = +r[0], n + r[0].length) : -1
	}

	function wr(e) {
		var t = e.getTimezoneOffset(),
			n = t > 0 ? "-" : "+",
			r = ~~(y(t) / 60),
			i = y(t) % 60;
		return n + rr(r, "0", 2) + rr(i, "0", 2)
	}

	function Er(e, t, n) {
		nr.lastIndex = 0;
		var r = nr.exec(t.substring(n, n + 1));
		return r ? n + r[0].length : -1
	}

	function Sr(e) {
		var t = e.length,
			n = -1;
		while (++n < t) e[n][0] = this(e[n][0]);
		return function(t) {
			var n = 0,
				r = e[n];
			while (!r[1](t)) r = e[++n];
			return r[0](t)
		}
	}

	function Tr() {}

	function Cr(e, t, n) {
		var r = n.s = e + t,
			i = r - e,
			s = r - i;
		n.t = e - s + (t - i)
	}

	function kr(e, t) {
		e && Ar.hasOwnProperty(e.type) && Ar[e.type](e, t)
	}

	function Or(e, t, n) {
		var r = -1,
			i = e.length - n,
			s;
		t.lineStart();
		while (++r < i) s = e[r], t.point(s[0], s[1], s[2]);
		t.lineEnd()
	}

	function Mr(e, t) {
		var n = -1,
			r = e.length;
		t.polygonStart();
		while (++n < r) Or(e[n], t, 1);
		t.polygonEnd()
	}

	function Hr() {
		function s(e, t) {
			e *= Ot, t = t * Ot / 2 + Nt / 4;
			var s = e - n,
				o = s >= 0 ? 1 : -1,
				u = o * s,
				a = Math.cos(t),
				f = Math.sin(t),
				l = i * f,
				c = r * a + l * Math.cos(u),
				h = l * o * Math.sin(u);
			Dr.add(Math.atan2(h, c)), n = e, r = a, i = f
		}
		var e, t, n, r, i;
		Pr.point = function(o, u) {
			Pr.point = s, n = (e = o) * Ot, r = Math.cos(u = (t = u) * Ot / 2 + Nt / 4), i = Math.sin(u)
		}, Pr.lineEnd = function() {
			s(e, t)
		}
	}

	function Br(e) {
		var t = e[0],
			n = e[1],
			r = Math.cos(n);
		return [r * Math.cos(t), r * Math.sin(t), Math.sin(n)]
	}

	function jr(e, t) {
		return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
	}

	function Fr(e, t) {
		return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
	}

	function Ir(e, t) {
		e[0] += t[0], e[1] += t[1], e[2] += t[2]
	}

	function qr(e, t) {
		return [e[0] * t, e[1] * t, e[2] * t]
	}

	function Rr(e) {
		var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
		e[0] /= t, e[1] /= t, e[2] /= t
	}

	function Ur(e) {
		return [Math.atan2(e[1], e[0]), Ht(e[2])]
	}

	function zr(e, t) {
		return y(e[0] - t[0]) < Lt && y(e[1] - t[1]) < Lt
	}

	function ni(e, t) {
		e *= Ot;
		var n = Math.cos(t *= Ot);
		ri(n * Math.cos(e), n * Math.sin(e), Math.sin(t))
	}

	function ri(e, t, n) {
		++Wr, Vr += (e - Vr) / Wr, $r += (t - $r) / Wr, Jr += (n - Jr) / Wr
	}

	function ii() {
		function r(r, i) {
			r *= Ot;
			var s = Math.cos(i *= Ot),
				o = s * Math.cos(r),
				u = s * Math.sin(r),
				a = Math.sin(i),
				f = Math.atan2(Math.sqrt((f = t * a - n * u) * f + (f = n * o - e * a) * f + (f = e * u - t * o) * f), e * o + t * u + n * a);
			Xr += f, Kr += f * (e + (e = o)), Qr += f * (t + (t = u)), Gr += f * (n + (n = a)), ri(e, t, n)
		}
		var e, t, n;
		ti.point = function(i, s) {
			i *= Ot;
			var o = Math.cos(s *= Ot);
			e = o * Math.cos(i), t = o * Math.sin(i), n = Math.sin(s), ti.point = r, ri(e, t, n)
		}
	}

	function si() {
		ti.point = ni
	}

	function oi() {
		function s(e, t) {
			e *= Ot;
			var s = Math.cos(t *= Ot),
				o = s * Math.cos(e),
				u = s * Math.sin(e),
				a = Math.sin(t),
				f = r * a - i * u,
				l = i * o - n * a,
				c = n * u - r * o,
				h = Math.sqrt(f * f + l * l + c * c),
				p = n * o + r * u + i * a,
				d = h && -Pt(p) / h,
				v = Math.atan2(h, p);
			Yr += d * f, Zr += d * l, ei += d * c, Xr += v, Kr += v * (n + (n = o)), Qr += v * (r + (r = u)), Gr += v * (i + (i = a)), ri(n, r, i)
		}
		var e, t, n, r, i;
		ti.point = function(o, u) {
			e = o, t = u, ti.point = s, o *= Ot;
			var a = Math.cos(u *= Ot);
			n = a * Math.cos(o), r = a * Math.sin(o), i = Math.sin(u), ri(n, r, i)
		}, ti.lineEnd = function() {
			s(e, t), ti.lineEnd = si, ti.point = ni
		}
	}

	function ui() {
		return !0
	}

	function ai(e, t, n, r, i) {
		var s = [],
			o = [];
		e.forEach(function(e) {
			if ((t = e.length - 1) <= 0) return;
			var t, n = e[0],
				r = e[t];
			if (zr(n, r)) {
				i.lineStart();
				for (var u = 0; u < t; ++u) i.point((n = e[u])[0], n[1]);
				i.lineEnd();
				return
			}
			var a = new li(n, e, null, !0),
				f = new li(n, null, a, !1);
			a.o = f, s.push(a), o.push(f), a = new li(r, e, null, !1), f = new li(r, null, a, !0), a.o = f, s.push(a), o.push(f)
		}), o.sort(t), fi(s), fi(o);
		if (!s.length) return;
		for (var u = 0, a = n, f = o.length; u < f; ++u) o[u].e = a = !a;
		var l = s[0],
			c, h;
		for (;;) {
			var p = l,
				d = !0;
			while (p.v)
				if ((p = p.n) === l) return;
			c = p.z, i.lineStart();
			do {
				p.v = p.o.v = !0;
				if (p.e) {
					if (d)
						for (var u = 0, f = c.length; u < f; ++u) i.point((h = c[u])[0], h[1]);
					else r(p.x, p.n.x, 1, i);
					p = p.n
				} else {
					if (d) {
						c = p.p.z;
						for (var u = c.length - 1; u >= 0; --u) i.point((h = c[u])[0], h[1])
					} else r(p.x, p.p.x, -1, i);
					p = p.p
				}
				p = p.o, c = p.z, d = !d
			} while (!p.v);
			i.lineEnd()
		}
	}

	function fi(e) {
		if (!(t = e.length)) return;
		var t, n = 0,
			r = e[0],
			i;
		while (++n < t) r.n = i = e[n], i.p = r, r = i;
		r.n = i = e[0], i.p = r
	}

	function li(e, t, n, r) {
		this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
	}

	function ci(t, n, r, i) {
		return function(s, o) {
			function l(e, n) {
				var r = s(e, n);
				t(e = r[0], n = r[1]) && o.point(e, n)
			}

			function c(e, t) {
				var n = s(e, t);
				u.point(n[0], n[1])
			}

			function h() {
				f.point = c, u.lineStart()
			}

			function p() {
				f.point = l, u.lineEnd()
			}

			function w(e, t) {
				b.push([e, t]);
				var n = s(e, t);
				m.point(n[0], n[1])
			}

			function E() {
				m.lineStart(), b = []
			}

			function S() {
				w(b[0][0], b[0][1]), m.lineEnd();
				var e = m.clean(),
					t = v.buffer(),
					n, r = t.length;
				b.pop(), y.push(b), b = null;
				if (!r) return;
				if (e & 1) {
					n = t[0];
					var r = n.length - 1,
						i = -1,
						s;
					if (r > 0) {
						g || (o.polygonStart(), g = !0), o.lineStart();
						while (++i < r) o.point((s = n[i])[0], s[1]);
						o.lineEnd()
					}
					return
				}
				r > 1 && e & 2 && t.push(t.pop().concat(t.shift())), d.push(t.filter(hi))
			}
			var u = n(o),
				a = s.invert(i[0], i[1]),
				f = {
					point: l,
					lineStart: h,
					lineEnd: p,
					polygonStart: function() {
						f.point = w, f.lineStart = E, f.lineEnd = S, d = [], y = []
					},
					polygonEnd: function() {
						f.point = l, f.lineStart = h, f.lineEnd = p, d = e.merge(d);
						var t = vi(a, y);
						d.length ? (g || (o.polygonStart(), g = !0), ai(d, di, t, r, o)) : t && (g || (o.polygonStart(), g = !0), o.lineStart(), r(null, null, 1, o), o.lineEnd()), g && (o.polygonEnd(), g = !1), d = y = null
					},
					sphere: function() {
						o.polygonStart(), o.lineStart(), r(null, null, 1, o), o.lineEnd(), o.polygonEnd()
					}
				},
				d, v = pi(),
				m = n(v),
				g = !1,
				y, b;
			return f
		}
	}

	function hi(e) {
		return e.length > 1
	}

	function pi() {
		var e = [],
			t;
		return {
			lineStart: function() {
				e.push(t = [])
			},
			point: function(e, n) {
				t.push([e, n])
			},
			lineEnd: D,
			buffer: function() {
				var n = e;
				return e = [], t = null, n
			},
			rejoin: function() {
				e.length > 1 && e.push(e.pop().concat(e.shift()))
			}
		}
	}

	function di(e, t) {
		return ((e = e.x)[0] < 0 ? e[1] - kt - Lt : kt - e[1]) - ((t = t.x)[0] < 0 ? t[1] - kt - Lt : kt - t[1])
	}

	function vi(e, t) {
		var n = e[0],
			r = e[1],
			i = [Math.sin(n), -Math.cos(n), 0],
			s = 0,
			o = 0;
		Dr.reset();
		for (var u = 0, a = t.length; u < a; ++u) {
			var f = t[u],
				l = f.length;
			if (!l) continue;
			var c = f[0],
				h = c[0],
				p = c[1] / 2 + Nt / 4,
				d = Math.sin(p),
				v = Math.cos(p),
				m = 1;
			for (;;) {
				m === l && (m = 0), e = f[m];
				var g = e[0],
					y = e[1] / 2 + Nt / 4,
					b = Math.sin(y),
					w = Math.cos(y),
					E = g - h,
					S = E >= 0 ? 1 : -1,
					x = S * E,
					T = x > Nt,
					N = d * b;
				Dr.add(Math.atan2(N * S * Math.sin(x), v * w + N * Math.cos(x))), s += T ? E + S * Ct : E;
				if (T ^ h >= n ^ g >= n) {
					var C = Fr(Br(c), Br(e));
					Rr(C);
					var k = Fr(i, C);
					Rr(k);
					var L = (T ^ E >= 0 ? -1 : 1) * Ht(k[2]);
					if (r > L || r === L && (C[0] || C[1])) o += T ^ E >= 0 ? 1 : -1
				}
				if (!(m++)) break;
				h = g, d = b, v = w, c = e
			}
		}
		return (s < -Lt || s < Lt && Dr < 0) ^ o & 1
	}

	function gi(e) {
		var t = NaN,
			n = NaN,
			r = NaN,
			i;
		return {
			lineStart: function() {
				e.lineStart(), i = 1
			},
			point: function(s, o) {
				var u = s > 0 ? Nt : -Nt,
					a = y(s - t);
				y(a - Nt) < Lt ? (e.point(t, n = (n + o) / 2 > 0 ? kt : -kt), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(u, n), e.point(s, n), i = 0) : r !== u && a >= Nt && (y(t - r) < Lt && (t -= r * Lt), y(s - u) < Lt && (s -= u * Lt), n = yi(t, n, s, o), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(u, n), i = 0), e.point(t = s, n = o), r = u
			},
			lineEnd: function() {
				e.lineEnd(), t = n = NaN
			},
			clean: function() {
				return 2 - i
			}
		}
	}

	function yi(e, t, n, r) {
		var i, s, o = Math.sin(e - n);
		return y(o) > Lt ? Math.atan((Math.sin(t) * (s = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(e)) / (i * s * o)) : (t + r) / 2
	}

	function bi(e, t, n, r) {
		var i;
		if (e == null) i = n * kt, r.point(-Nt, i), r.point(0, i), r.point(Nt, i), r.point(Nt, 0), r.point(Nt, -i), r.point(0, -i), r.point(-Nt, -i), r.point(-Nt, 0), r.point(-Nt, i);
		else if (y(e[0] - t[0]) > Lt) {
			var s = e[0] < t[0] ? Nt : -Nt;
			i = n * s / 2, r.point(-s, i), r.point(0, i), r.point(s, i)
		} else r.point(t[0], t[1])
	}

	function wi(e) {
		function s(e, n) {
			return Math.cos(e) * Math.cos(n) > t
		}

		function o(e) {
			var t, i, o, f, l;
			return {
				lineStart: function() {
					f = o = !1, l = 1
				},
				point: function(c, h) {
					var p = [c, h],
						d, v = s(c, h),
						m = n ? v ? 0 : a(c, h) : v ? a(c + (c < 0 ? Nt : -Nt), h) : 0;
					!t && (f = o = v) && e.lineStart();
					if (v !== o) {
						d = u(t, p);
						if (zr(t, d) || zr(p, d)) p[0] += Lt, p[1] += Lt, v = s(p[0], p[1])
					}
					if (v !== o) l = 0, v ? (e.lineStart(), d = u(p, t), e.point(d[0], d[1])) : (d = u(t, p), e.point(d[0], d[1]), e.lineEnd()), t = d;
					else if (r && t && n ^ v) {
						var g;
						!(m & i) && (g = u(p, t, !0)) && (l = 0, n ? (e.lineStart(), e.point(g[0][0], g[0][1]), e.point(g[1][0], g[1][1]), e.lineEnd()) : (e.point(g[1][0], g[1][1]), e.lineEnd(), e.lineStart(), e.point(g[0][0], g[0][1])))
					}
					v && (!t || !zr(t, p)) && e.point(p[0], p[1]), t = p, o = v, i = m
				},
				lineEnd: function() {
					o && e.lineEnd(), t = null
				},
				clean: function() {
					return l | (f && o) << 1
				}
			}
		}

		function u(e, n, r) {
			var i = Br(e),
				s = Br(n),
				o = [1, 0, 0],
				u = Fr(i, s),
				a = jr(u, u),
				f = u[0],
				l = a - f * f;
			if (!l) return !r && e;
			var c = t * a / l,
				h = -t * f / l,
				p = Fr(o, u),
				d = qr(o, c),
				v = qr(u, h);
			Ir(d, v);
			var m = p,
				g = jr(d, m),
				b = jr(m, m),
				w = g * g - b * (jr(d, d) - 1);
			if (w < 0) return;
			var E = Math.sqrt(w),
				S = qr(m, (-g - E) / b);
			Ir(S, d), S = Ur(S);
			if (!r) return S;
			var x = e[0],
				T = n[0],
				N = e[1],
				C = n[1],
				k;
			T < x && (k = x, x = T, T = k);
			var L = T - x,
				A = y(L - Nt) < Lt,
				O = A || L < Lt;
			!A && C < N && (k = N, N = C, C = k);
			if (O ? A ? N + C > 0 ^ S[1] < (y(S[0] - x) < Lt ? N : C) : N <= S[1] && S[1] <= C : L > Nt ^ (x <= S[0] && S[0] <= T)) {
				var M = qr(m, (-g + E) / b);
				return Ir(M, d), [S, Ur(M)]
			}
		}

		function a(t, r) {
			var i = n ? e : Nt - e,
				s = 0;
			return t < -i ? s |= 1 : t > i && (s |= 2), r < -i ? s |= 4 : r > i && (s |= 8), s
		}
		var t = Math.cos(e),
			n = t > 0,
			r = y(t) > Lt,
			i = is(e, 6 * Ot);
		return ci(s, o, i, n ? [0, -e] : [-Nt, e - Nt])
	}

	function Ei(e, t, n, r) {
		return function(i) {
			var s = i.a,
				o = i.b,
				u = s.x,
				a = s.y,
				f = o.x,
				l = o.y,
				c = 0,
				h = 1,
				p = f - u,
				d = l - a,
				v;
			v = e - u;
			if (!p && v > 0) return;
			v /= p;
			if (p < 0) {
				if (v < c) return;
				v < h && (h = v)
			} else if (p > 0) {
				if (v > h) return;
				v > c && (c = v)
			}
			v = n - u;
			if (!p && v < 0) return;
			v /= p;
			if (p < 0) {
				if (v > h) return;
				v > c && (c = v)
			} else if (p > 0) {
				if (v < c) return;
				v < h && (h = v)
			}
			v = t - a;
			if (!d && v > 0) return;
			v /= d;
			if (d < 0) {
				if (v < c) return;
				v < h && (h = v)
			} else if (d > 0) {
				if (v > h) return;
				v > c && (c = v)
			}
			v = r - a;
			if (!d && v < 0) return;
			v /= d;
			if (d < 0) {
				if (v > h) return;
				v > c && (c = v)
			} else if (d > 0) {
				if (v < c) return;
				v < h && (h = v)
			}
			return c > 0 && (i.a = {
				x: u + c * p,
				y: a + c * d
			}), h < 1 && (i.b = {
				x: u + h * p,
				y: a + h * d
			}), i
		}
	}

	function xi(t, n, r, i) {
		function s(e, i) {
			return y(e[0] - t) < Lt ? i > 0 ? 0 : 3 : y(e[0] - r) < Lt ? i > 0 ? 2 : 1 : y(e[1] - n) < Lt ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
		}

		function o(e, t) {
			return u(e.x, t.x)
		}

		function u(e, t) {
			var n = s(e, 1),
				r = s(t, 1);										
			return n !== r ? n - r : n === 0 ? t[1] - e[1] : n === 1 ? e[0] - t[0] : n === 2 ? e[1] - t[1] : t[0] - e[0]
		}
		return function(a) {
			function m(e) {
				var t = 0,
					n = p.length,
					r = e[1];
				for (var i = 0; i < n; ++i)
					for (var s = 1, o = p[i], u = o.length, a = o[0], f; s < u; ++s) f = o[s], a[1] <= r ? f[1] > r && Dt(a, f, e) > 0 && ++t : f[1] <= r && Dt(a, f, e) < 0 && --t, a = f;
				return t !== 0
			}

			function g(e, o, a, f) {
				var l = 0,
					c = 0;
				if (e == null || (l = s(e, a)) !== (c = s(o, a)) || u(e, o) < 0 ^ a > 0) {
					do f.point(l === 0 || l === 3 ? t : r, l > 1 ? i : n); while ((l = (l + a + 4) % 4) !== c)
				} else f.point(o[0], o[1])
			}

			function y(e, s) {
				return t <= e && e <= r && n <= s && s <= i
			}

			function b(e, t) {
				y(e, t) && a.point(e, t)
			}

			function L() {
				v.point = O, p && p.push(d = []), C = !0, N = !1, x = T = NaN
			}

			function A() {
				h && (O(w, E), S && N && l.rejoin(), h.push(l.buffer())), v.point = b, N && a.lineEnd()
			}

			function O(e, t) {
				e = Math.max(-Si, Math.min(Si, e)), t = Math.max(-Si, Math.min(Si, t));
				var n = y(e, t);
				p && d.push([e, t]);
				if (C) w = e, E = t, S = n, C = !1, n && (a.lineStart(), a.point(e, t));
				else if (n && N) a.point(e, t);
				else {
					var r = {
						a: {
							x: x,
							y: T
						},
						b: {
							x: e,
							y: t
						}
					};
					c(r) ? (N || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), n || a.lineEnd(), k = !1) : n && (a.lineStart(), a.point(e, t), k = !1)
				}
				x = e, T = t, N = n
			}
			var f = a,
				l = pi(),
				c = Ei(t, n, r, i),
				h, p, d, v = {
					point: b,
					lineStart: L,
					lineEnd: A,
					polygonStart: function() {
						a = l, h = [], p = [], k = !0
					},
					polygonEnd: function() {
						a = f, h = e.merge(h);
						var n = m([t, i]),
							r = k && n,
							s = h.length;
						if (r || s) a.polygonStart(), r && (a.lineStart(), g(null, null, 1, a), a.lineEnd()), s && ai(h, o, n, g, a), a.polygonEnd();
						h = p = d = null
					}
				},
				w, E, S, x, T, N, C, k;
			return v
		}
	}

	function Ti(e, t) {
		function n(n, r) {
			return n = e(n, r), t(n[0], n[1])
		}
		return e.invert && t.invert && (n.invert = function(n, r) {
			return n = t.invert(n, r), n && e.invert(n[0], n[1])
		}), n
	}

	function Ni(e) {
		var t = 0,
			n = Nt / 3,
			r = Qi(e),
			i = r(t, n);
		return i.parallels = function(e) {
			return arguments.length ? r(t = e[0] * Nt / 180, n = e[1] * Nt / 180) : [t / Nt * 180, n / Nt * 180]
		}, i
	}

	function Ci(e, t) {
		function o(e, t) {
			var n = Math.sqrt(i - 2 * r * Math.sin(t)) / r;
			return [n * Math.sin(e *= r), s - n * Math.cos(e)]
		}
		var n = Math.sin(e),
			r = (n + Math.sin(t)) / 2,
			i = 1 + n * (2 * r - n),
			s = Math.sqrt(i) / r;
		return o.invert = function(e, t) {
			var n = s - t;
			return [Math.atan2(e, n) / r, Ht((i - (e * e + n * n) * r * r) / (2 * r))]
		}, o
	}

	function Oi() {
		function i(e, t) {
			Li += r * e - n * t, n = e, r = t
		}
		var e, t, n, r;
		Ai.point = function(s, o) {
			Ai.point = i, e = n = s, t = r = o
		}, Ai.lineEnd = function() {
			i(e, t)
		}
	}

	function Bi(e, t) {
		e < Mi && (Mi = e), e > Di && (Di = e), t < _i && (_i = t), t > Pi && (Pi = t)
	}

	function ji() {
		function r(n, r) {
			t.push("M", n, ",", r, e)
		}

		function i(e, r) {
			t.push("M", e, ",", r), n.point = s
		}

		function s(e, n) {
			t.push("L", e, ",", n)
		}

		function o() {
			n.point = r
		}

		function u() {
			t.push("Z")
		}
		var e = Fi(4.5),
			t = [],
			n = {
				point: r,
				lineStart: function() {
					n.point = i
				},
				lineEnd: o,
				polygonStart: function() {
					n.lineEnd = u
				},
				polygonEnd: function() {
					n.lineEnd = o, n.point = r
				},
				pointRadius: function(t) {
					return e = Fi(t), n
				},
				result: function() {
					if (t.length) {
						var e = t.join("");
						return t = [], e
					}
				}
			};
		return n
	}

	function Fi(e) {
		return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
	}

	function qi(e, t) {
		Vr += e, $r += t, ++Jr
	}

	function Ri() {
		function n(n, r) {
			var i = n - e,
				s = r - t,
				o = Math.sqrt(i * i + s * s);
			Kr += o * (e + n) / 2, Qr += o * (t + r) / 2, Gr += o, qi(e = n, t = r)
		}
		var e, t;
		Ii.point = function(r, i) {
			Ii.point = n, qi(e = r, t = i)
		}
	}

	function Ui() {
		Ii.point = qi
	}

	function zi() {
		function i(e, t) {
			var i = e - n,
				s = t - r,
				o = Math.sqrt(i * i + s * s);
			Kr += o * (n + e) / 2, Qr += o * (r + t) / 2, Gr += o, o = r * e - n * t, Yr += o * (n + e), Zr += o * (r + t), ei += o * 3, qi(n = e, r = t)
		}
		var e, t, n, r;
		Ii.point = function(s, o) {
			Ii.point = i, qi(e = n = s, t = r = o)
		}, Ii.lineEnd = function() {
			i(e, t)
		}
	}

	function Wi(e) {
		function r(n, r) {
			e.moveTo(n, r), e.arc(n, r, t, 0, Ct)
		}

		function i(t, r) {
			e.moveTo(t, r), n.point = s
		}

		function s(t, n) {
			e.lineTo(t, n)
		}

		function o() {
			n.point = r
		}

		function u() {
			e.closePath()
		}
		var t = 4.5,
			n = {
				point: r,
				lineStart: function() {
					n.point = i
				},
				lineEnd: o,
				polygonStart: function() {
					n.lineEnd = u
				},
				polygonEnd: function() {
					n.lineEnd = o, n.point = r
				},
				pointRadius: function(e) {
					return t = e, n
				},
				result: D
			};
		return n
	}

	function Xi(e) {
		function i(e) {
			return (r ? o : s)(e)
		}

		function s(t) {
			return Ji(t, function(n, r) {
				n = e(n, r), t.point(n[0], n[1])
			})
		}

		function o(t) {
			function y(n, r) {
				n = e(n, r), t.point(n[0], n[1])
			}

			function b() {
				h = NaN, g.point = w, t.lineStart()
			}

			function w(n, i) {
				var s = Br([n, i]),
					o = e(n, i);
				u(h, p, c, d, v, m, h = o[0], p = o[1], c = n, d = s[0], v = s[1], m = s[2], r, t), t.point(h, p)
			}

			function E() {
				g.point = y, t.lineEnd()
			}

			function S() {
				b(), g.point = x, g.lineEnd = T
			}

			function x(e, t) {
				w(n = e, i = t), s = h, o = p, a = d, f = v, l = m, g.point = w
			}

			function T() {
				u(h, p, c, d, v, m, s, o, n, a, f, l, r, t), g.lineEnd = E, E()
			}
			var n, i, s, o, a, f, l, c, h, p, d, v, m, g = {
				point: y,
				lineStart: b,
				lineEnd: E,
				polygonStart: function() {
					t.polygonStart(), g.lineStart = S
				},
				polygonEnd: function() {
					t.polygonEnd(), g.lineStart = b
				}
			};
			return g
		}

		function u(r, i, s, o, a, f, l, c, h, p, d, v, m, g) {
			var b = l - r,
				w = c - i,
				E = b * b + w * w;
			if (E > 4 * t && m--) {
				var S = o + p,
					x = a + d,
					T = f + v,
					N = Math.sqrt(S * S + x * x + T * T),
					C = Math.asin(T /= N),
					k = y(y(T) - 1) < Lt || y(s - h) < Lt ? (s + h) / 2 : Math.atan2(x, S),
					L = e(k, C),
					A = L[0],
					O = L[1],
					M = A - r,
					_ = O - i,
					D = w * M - b * _;
				if (D * D / E > t || y((b * M + w * _) / E - .5) > .3 || o * p + a * d + f * v < n) u(r, i, s, o, a, f, A, O, k, S /= N, x /= N, T, m, g), g.point(A, O), u(A, O, k, S, x, T, l, c, h, p, d, v, m, g)
			}
		}
		var t = .5,
			n = Math.cos(30 * Ot),
			r = 16;
		return i.precision = function(e) {
			return arguments.length ? (r = (t = e * e) > 0 && 16, i) : Math.sqrt(t)
		}, i
	}

	function Vi(e) {
		var t = Xi(function(t, n) {
			return e([t * Mt, n * Mt])
		});
		return function(e) {
			return Gi(t(e))
		}
	}

	function $i(e) {
		this.stream = e
	}

	function Ji(e, t) {
		return {
			point: t,
			sphere: function() {
				e.sphere()
			},
			lineStart: function() {
				e.lineStart()
			},
			lineEnd: function() {
				e.lineEnd()
			},
			polygonStart: function() {
				e.polygonStart()
			},
			polygonEnd: function() {
				e.polygonEnd()
			}
		}
	}

	function Ki(e) {
		return Qi(function() {
			return e
		})()
	}

	function Qi(t) {
		function E(e) {
			return e = i(e[0] * Ot, e[1] * Ot), [e[0] * o + d, v - e[1] * o]
		}

		function S(e) {
			return e = i.invert((e[0] - d) / o, (v - e[1]) / o), e && [e[0] * Mt, e[1] * Mt]
		}

		function x() {
			i = Ti(r = es(c, h, p), n);
			var e = n(f, l);
			return d = u - e[0] * o, v = a + e[1] * o, T()
		}

		function T() {
			return w && (w.valid = !1, w = null), E
		}
		var n, r, i, s = Xi(function(e, t) {
				return e = n(e, t), [e[0] * o + d, v - e[1] * o]
			}),
			o = 150,
			u = 480,
			a = 250,
			f = 0,
			l = 0,
			c = 0,
			h = 0,
			p = 0,
			d, v, m = mi,
			g = kn,
			y = null,
			b = null,
			w;
		return E.stream = function(e) {
				return w && (w.valid = !1), w = Gi(m(r, s(g(e)))), w.valid = !0, w
			}, E.clipAngle = function(e) {
				return arguments.length ? (m = e == null ? (y = e, mi) : wi((y = +e) * Ot), T()) : y
			}, E.clipExtent = function(e) {
				return arguments.length ? (b = e, g = e ? xi(e[0][0], e[0][1], e[1][0], e[1][1]) : kn, T()) : b
			}, E.scale = function(e) {
				return arguments.length ? (o = +e, x()) : o
			}, E.translate = function(e) {
				return arguments.length ? (u = +e[0], a = +e[1], x()) : [u, a]
			}, E.center = function(e) {
				return arguments.length ? (f = e[0] % 360 * Ot, l = e[1] % 360 * Ot, x()) : [f * Mt, l * Mt]
			}, E.rotate = function(e) {
				return arguments.length ? (c = e[0] % 360 * Ot, h = e[1] % 360 * Ot, p = e.length > 2 ? e[2] % 360 * Ot : 0, x()) : [c * Mt, h * Mt, p * Mt]
			}, e.rebind(E, s, "precision"),
			function() {
				return n = t.apply(this, arguments), E.invert = n.invert && S, x()
			}
	}

	function Gi(e) {
		return Ji(e, function(t, n) {
			e.point(t * Ot, n * Ot)
		})
	}

	function Yi(e, t) {
		return [e, t]
	}

	function Zi(e, t) {
		return [e > Nt ? e - Ct : e < -Nt ? e + Ct : e, t]
	}

	function es(e, t, n) {
		return e ? t || n ? Ti(ns(e), rs(t, n)) : ns(e) : t || n ? rs(t, n) : Zi
	}

	function ts(e) {
		return function(t, n) {
			return t += e, [t > Nt ? t - Ct : t < -Nt ? t + Ct : t, n]
		}
	}

	function ns(e) {
		var t = ts(e);
		return t.invert = ts(-e), t
	}

	function rs(e, t) {
		function o(e, t) {
			var o = Math.cos(t),
				u = Math.cos(e) * o,
				a = Math.sin(e) * o,
				f = Math.sin(t),
				l = f * n + u * r;
			return [Math.atan2(a * i - l * s, u * n - f * r), Ht(l * i + a * s)]
		}
		var n = Math.cos(e),
			r = Math.sin(e),
			i = Math.cos(t),
			s = Math.sin(t);
		return o.invert = function(e, t) {
			var o = Math.cos(t),
				u = Math.cos(e) * o,
				a = Math.sin(e) * o,
				f = Math.sin(t),
				l = f * i - a * s;
			return [Math.atan2(a * i + f * s, u * n + l * r), Ht(l * n - u * r)]
		}, o
	}

	function is(e, t) {
		var n = Math.cos(e),
			r = Math.sin(e);
		return function(i, s, o, u) {
			var a = o * t;
			if (i != null) {
				i = ss(n, i), s = ss(n, s);
				if (o > 0 ? i < s : i > s) i += o * Ct
			} else i = e + o * Ct, s = e - .5 * a;
			for (var f, l = i; o > 0 ? l > s : l < s; l -= a) u.point((f = Ur([n, -r * Math.cos(l), -r * Math.sin(l)]))[0], f[1])
		}
	}

	function ss(e, t) {
		var n = Br(t);
		n[0] -= e, Rr(n);
		var r = Pt(-n[1]);
		return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - Lt) % (2 * Math.PI)
	}

	function os(t, n, r) {
		var i = e.range(t, n - Lt, r).concat(n);
		return function(e) {
			return i.map(function(t) {
				return [e, t]
			})
		}
	}

	function us(t, n, r) {
		var i = e.range(t, n - Lt, r).concat(n);
		return function(e) {
			return i.map(function(t) {
				return [t, e]
			})
		}
	}

	function as(e) {
		return e.source
	}

	function fs(e) {
		return e.target
	}

	function ls(e, t, n, r) {
		var i = Math.cos(t),
			s = Math.sin(t),
			o = Math.cos(r),
			u = Math.sin(r),
			a = i * Math.cos(e),
			f = i * Math.sin(e),
			l = o * Math.cos(n),
			c = o * Math.sin(n),
			h = 2 * Math.asin(Math.sqrt(It(r - t) + i * o * It(n - e))),
			p = 1 / Math.sin(h),
			d = h ? function(e) {
				var t = Math.sin(e *= h) * p,
					n = Math.sin(h - e) * p,
					r = n * a + t * l,
					i = n * f + t * c,
					o = n * s + t * u;
				return [Math.atan2(i, r) * Mt, Math.atan2(o, Math.sqrt(r * r + i * i)) * Mt]
			} : function() {
				return [e * Mt, t * Mt]
			};
		return d.distance = h, d
	}

	function ps() {
		function r(r, i) {
			var s = Math.sin(i *= Ot),
				o = Math.cos(i),
				u = y((r *= Ot) - e),
				a = Math.cos(u);
			cs += Math.atan2(Math.sqrt((u = o * Math.sin(u)) * u + (u = n * s - t * o * a) * u), t * s + n * o * a), e = r, t = s, n = o
		}
		var e, t, n;
		hs.point = function(i, s) {
			e = i * Ot, t = Math.sin(s *= Ot), n = Math.cos(s), hs.point = r
		}, hs.lineEnd = function() {
			hs.point = hs.lineEnd = D
		}
	}

	function ds(e, t) {
		function n(t, n) {
			var r = Math.cos(t),
				i = Math.cos(n),
				s = e(r * i);
			return [s * i * Math.sin(t), s * Math.sin(n)]
		}
		return n.invert = function(e, n) {
			var r = Math.sqrt(e * e + n * n),
				i = t(r),
				s = Math.sin(i),
				o = Math.cos(i);
			return [Math.atan2(e * s, r * o), Math.asin(r && n * s / r)]
		}, n
	}

	function gs(e, t) {
		function o(e, t) {
			s > 0 ? t < -kt + Lt && (t = -kt + Lt) : t > kt - Lt && (t = kt - Lt);
			var n = s / Math.pow(r(t), i);
			return [n * Math.sin(i * e), s - n * Math.cos(i * e)]
		}
		var n = Math.cos(e),
			r = function(e) {
				return Math.tan(Nt / 4 + e / 2)
			},
			i = e === t ? Math.sin(e) : Math.log(n / Math.cos(t)) / Math.log(r(t) / r(e)),
			s = n * Math.pow(r(e), i) / i;
		return i ? (o.invert = function(e, t) {
			var n = s - t,
				r = _t(i) * Math.sqrt(e * e + n * n);
			return [Math.atan2(e, n) / i, 2 * Math.atan(Math.pow(s / r, 1 / i)) - kt]
		}, o) : ws
	}

	function ys(e, t) {
		function s(e, t) {
			var n = i - t;
			return [n * Math.sin(r * e), i - n * Math.cos(r * e)]
		}
		var n = Math.cos(e),
			r = e === t ? Math.sin(e) : (n - Math.cos(t)) / (t - e),
			i = n / r + e;
		return y(r) < Lt ? Yi : (s.invert = function(e, t) {
			var n = i - t;
			return [Math.atan2(e, n) / r, i - _t(r) * Math.sqrt(e * e + n * n)]
		}, s)
	}

	function ws(e, t) {
		return [e, Math.log(Math.tan(Nt / 4 + t / 2))]
	}

	function Es(e) {
		var t = Ki(e),
			n = t.scale,
			r = t.translate,
			i = t.clipExtent,
			s;
		return t.scale = function() {
			var e = n.apply(t, arguments);
			return e === t ? s ? t.clipExtent(null) : t : e
		}, t.translate = function() {
			var e = r.apply(t, arguments);
			return e === t ? s ? t.clipExtent(null) : t : e
		}, t.clipExtent = function(e) {
			var o = i.apply(t, arguments);
			if (o === t) {
				if (s = e == null) {
					var u = Nt * n(),
						a = r();
					i([
						[a[0] - u, a[1] - u],
						[a[0] + u, a[1] + u]
					])
				}
			} else s && (o = null);
			return o
		}, t.clipExtent(null)
	}

	function Ts(e, t) {
		return [Math.log(Math.tan(Nt / 4 + t / 2)), -e]
	}

	function Ns(e) {
		return e[0]
	}

	function Cs(e) {
		return e[1]
	}

	function ks(e) {
		var t = e.length,
			n = [0, 1],
			r = 2;
		for (var i = 2; i < t; i++) {
			while (r > 1 && Dt(e[n[r - 2]], e[n[r - 1]], e[i]) <= 0) --r;
			n[r++] = i
		}
		return n.slice(0, r)
	}

	function Ls(e, t) {
		return e[0] - t[0] || e[1] - t[1]
	}

	function Os(e, t, n) {
		return (n[0] - t[0]) * (e[1] - t[1]) < (n[1] - t[1]) * (e[0] - t[0])
	}

	function Ms(e, t, n, r) {
		var i = e[0],
			s = n[0],
			o = t[0] - i,
			u = r[0] - s,
			a = e[1],
			f = n[1],
			l = t[1] - a,
			c = r[1] - f,
			h = (u * (a - f) - c * (i - s)) / (c * o - u * l);
		return [i + h * o, a + h * l]
	}

	function _s(e) {
		var t = e[0],
			n = e[e.length - 1];
		return !(t[0] - n[0] || t[1] - n[1])
	}

	function qs() {
		uo(this), this.edge = this.site = this.circle = null
	}

	function Rs(e) {
		var t = Bs.pop() || new qs;
		return t.site = e, t
	}

	function Us(e) {
		Ys(e), Hs.remove(e), Bs.push(e), uo(e)
	}

	function zs(e) {
		var t = e.circle,
			n = t.x,
			r = t.cy,
			i = {
				x: n,
				y: r
			},
			s = e.P,
			o = e.N,
			u = [e];
		Us(e);
		var a = s;
		while (a.circle && y(n - a.circle.x) < Lt && y(r - a.circle.cy) < Lt) s = a.P, u.unshift(a), Us(a), a = s;
		u.unshift(a), Ys(a);
		var f = o;
		while (f.circle && y(n - f.circle.x) < Lt && y(r - f.circle.cy) < Lt) o = f.N, u.push(f), Us(f), f = o;
		u.push(f), Ys(f);
		var l = u.length,
			c;
		for (c = 1; c < l; ++c) f = u[c], a = u[c - 1], io(f.edge, a.site, f.site, i);
		a = u[0], f = u[l - 1], f.edge = no(a.site, f.site, null, i), Gs(a), Gs(f)
	}

	function Ws(e) {
		var t = e.x,
			n = e.y,
			r, i, s, o, u = Hs._;
		while (u) {
			s = Xs(u, n) - t;
			if (s > Lt) u = u.L;
			else {
				o = t - Vs(u, n);
				if (!(o > Lt)) {
					s > -Lt ? (r = u.P, i = u) : o > -Lt ? (r = u, i = u.N) : r = i = u;
					break
				}
				if (!u.R) {
					r = u;
					break
				}
				u = u.R
			}
		}
		var a = Rs(e);
		Hs.insert(r, a);
		if (!r && !i) return;
		if (r === i) {
			Ys(r), i = Rs(r.site), Hs.insert(a, i), a.edge = i.edge = no(r.site, a.site), Gs(r), Gs(i);
			return
		}
		if (!i) {
			a.edge = no(r.site, a.site);
			return
		}
		Ys(r), Ys(i);
		var f = r.site,
			l = f.x,
			c = f.y,
			h = e.x - l,
			p = e.y - c,
			d = i.site,
			v = d.x - l,
			m = d.y - c,
			g = 2 * (h * m - p * v),
			y = h * h + p * p,
			b = v * v + m * m,
			w = {
				x: (m * y - p * b) / g + l,
				y: (h * b - v * y) / g + c
			};
		io(i.edge, f, d, w), a.edge = no(f, e, null, w), i.edge = no(e, d, null, w), Gs(r), Gs(i)
	}

	function Xs(e, t) {
		var n = e.site,
			r = n.x,
			i = n.y,
			s = i - t;
		if (!s) return r;
		var o = e.P;
		if (!o) return -Infinity;
		n = o.site;
		var u = n.x,
			a = n.y,
			f = a - t;
		if (!f) return u;
		var l = u - r,
			c = 1 / s - 1 / f,
			h = l / f;
		return c ? (-h + Math.sqrt(h * h - 2 * c * (l * l / (-2 * f) - a + f / 2 + i - s / 2))) / c + r : (r + u) / 2
	}

	function Vs(e, t) {
		var n = e.N;
		if (n) return Xs(n, t);
		var r = e.site;
		return r.y === t ? r.x : Infinity
	}

	function $s(e) {
		this.site = e, this.edges = []
	}

	function Js(e) {
		var t = e[0][0],
			n = e[1][0],
			r = e[0][1],
			i = e[1][1],
			s, o, u, a, f = Ps,
			l = f.length,
			c, h, p, d, v, m;
		while (l--) {
			c = f[l];
			if (!c || !c.prepare()) continue;
			p = c.edges, d = p.length, h = 0;
			while (h < d) {
				m = p[h].end(), u = m.x, a = m.y, v = p[++h % d].start(), s = v.x, o = v.y;
				if (y(u - s) > Lt || y(a - o) > Lt) p.splice(h, 0, new so(ro(c.site, m, y(u - t) < Lt && i - a > Lt ? {
					x: t,
					y: y(s - t) < Lt ? o : i
				} : y(a - i) < Lt && n - u > Lt ? {
					x: y(o - i) < Lt ? s : n,
					y: i
				} : y(u - n) < Lt && a - r > Lt ? {
					x: n,
					y: y(s - n) < Lt ? o : r
				} : y(a - r) < Lt && u - t > Lt ? {
					x: y(o - r) < Lt ? s : t,
					y: r
				} : null), c.site, null)), ++d
			}
		}
	}

	function Ks(e, t) {
		return t.angle - e.angle
	}

	function Qs() {
		uo(this), this.x = this.y = this.arc = this.site = this.cy = null
	}

	function Gs(e) {
		var t = e.P,
			n = e.N;
		if (!t || !n) return;
		var r = t.site,
			i = e.site,
			s = n.site;
		if (r === s) return;
		var o = i.x,
			u = i.y,
			a = r.x - o,
			f = r.y - u,
			l = s.x - o,
			c = s.y - u,
			h = 2 * (a * c - f * l);
		if (h >= -At) return;
		var p = a * a + f * f,
			d = l * l + c * c,
			v = (c * p - f * d) / h,
			m = (a * d - l * p) / h,
			c = m + u,
			g = Is.pop() || new Qs;
		g.arc = e, g.site = i, g.x = v + o, g.y = c + Math.sqrt(v * v + m * m), g.cy = c, e.circle = g;
		var y = null,
			b = Fs._;
		while (b)
			if (g.y < b.y || g.y === b.y && g.x <= b.x) {
				if (!b.L) {
					y = b.P;
					break
				}
				b = b.L
			} else {
				if (!b.R) {
					y = b;
					break
				}
				b = b.R
			}
		Fs.insert(y, g), y || (js = g)
	}

	function Ys(e) {
		var t = e.circle;
		t && (t.P || (js = t.N), Fs.remove(t), Is.push(t), uo(t), e.circle = null)
	}

	function Zs(e) {
		var t = Ds,
			n = Ei(e[0][0], e[0][1], e[1][0], e[1][1]),
			r = t.length,
			i;
		while (r--) {
			i = t[r];
			if (!eo(i, e) || !n(i) || y(i.a.x - i.b.x) < Lt && y(i.a.y - i.b.y) < Lt) i.a = i.b = null, t.splice(r, 1)
		}
	}

	function eo(e, t) {
		var n = e.b;
		if (n) return !0;
		var r = e.a,
			i = t[0][0],
			s = t[1][0],
			o = t[0][1],
			u = t[1][1],
			a = e.l,
			f = e.r,
			l = a.x,
			c = a.y,
			h = f.x,
			p = f.y,
			d = (l + h) / 2,
			v = (c + p) / 2,
			m, g;
		if (p === c) {
			if (d < i || d >= s) return;
			if (l > h) {
				if (!r) r = {
					x: d,
					y: o
				};
				else if (r.y >= u) return;
				n = {
					x: d,
					y: u
				}
			} else {
				if (!r) r = {
					x: d,
					y: u
				};
				else if (r.y < o) return;
				n = {
					x: d,
					y: o
				}
			}
		} else {
			m = (l - h) / (p - c), g = v - m * d;
			if (m < -1 || m > 1)
				if (l > h) {
					if (!r) r = {
						x: (o - g) / m,
						y: o
					};
					else if (r.y >= u) return;
					n = {
						x: (u - g) / m,
						y: u
					}
				} else {
					if (!r) r = {
						x: (u - g) / m,
						y: u
					};
					else if (r.y < o) return;
					n = {
						x: (o - g) / m,
						y: o
					}
				}
			else if (c < p) {
				if (!r) r = {
					x: i,
					y: m * i + g
				};
				else if (r.x >= s) return;
				n = {
					x: s,
					y: m * s + g
				}
			} else {
				if (!r) r = {
					x: s,
					y: m * s + g
				};
				else if (r.x < i) return;
				n = {
					x: i,
					y: m * i + g
				}
			}
		}
		return e.a = r, e.b = n, !0
	}

	function to(e, t) {
		this.l = e, this.r = t, this.a = this.b = null
	}

	function no(e, t, n, r) {
		var i = new to(e, t);
		return Ds.push(i), n && io(i, e, t, n), r && io(i, t, e, r), Ps[e.i].edges.push(new so(i, e, t)), Ps[t.i].edges.push(new so(i, t, e)), i
	}

	function ro(e, t, n) {
		var r = new to(e, null);
		return r.a = t, r.b = n, Ds.push(r), r
	}

	function io(e, t, n, r) {
		!e.a && !e.b ? (e.a = r, e.l = t, e.r = n) : e.l === n ? e.b = r : e.a = r
	}

	function so(e, t, n) {
		var r = e.a,
			i = e.b;
		this.edge = e, this.site = t, this.angle = n ? Math.atan2(n.y - t.y, n.x - t.x) : e.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
	}

	function oo() {
		this._ = null
	}

	function uo(e) {
		e.U = e.C = e.L = e.R = e.P = e.N = null
	}

	function ao(e, t) {
		var n = t,
			r = t.R,
			i = n.U;
		i ? i.L === n ? i.L = r : i.R = r : e._ = r, r.U = i, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
	}

	function fo(e, t) {
		var n = t,
			r = t.L,
			i = n.U;
		i ? i.L === n ? i.L = r : i.R = r : e._ = r, r.U = i, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
	}

	function lo(e) {
		while (e.L) e = e.L;
		return e
	}

	function co(e, t) {
		var n = e.sort(ho).pop(),
			r, i, s;
		Ds = [], Ps = new Array(e.length), Hs = new oo, Fs = new oo;
		for (;;) {
			s = js;
			if (n && (!s || n.y < s.y || n.y === s.y && n.x < s.x)) {
				if (n.x !== r || n.y !== i) Ps[n.i] = new $s(n), Ws(n), r = n.x, i = n.y;
				n = e.pop()
			} else {
				if (!s) break;
				zs(s.arc)
			}
		}
		t && (Zs(t), Js(t));
		var o = {
			cells: Ps,
			edges: Ds
		};
		return Hs = Fs = Ds = Ps = null, o
	}

	function ho(e, t) {
		return t.y - e.y || t.x - e.x
	}

	function vo(e, t, n) {
		return (e.x - n.x) * (t.y - e.y) - (e.x - t.x) * (n.y - e.y)
	}

	function mo(e) {
		return e.x
	}

	function go(e) {
		return e.y
	}

	function yo() {
		return {
			leaf: !0,
			nodes: [],
			point: null,
			x: null,
			y: null
		}
	}

	function bo(e, t, n, r, i, s) {
		if (!e(t, n, r, i, s)) {
			var o = (n + i) * .5,
				u = (r + s) * .5,
				a = t.nodes;
			a[0] && bo(e, a[0], n, r, o, u), a[1] && bo(e, a[1], o, r, i, u), a[2] && bo(e, a[2], n, u, o, s), a[3] && bo(e, a[3], o, u, i, s)
		}
	}

	function wo(t, n) {
		t = e.rgb(t), n = e.rgb(n);
		var r = t.r,
			i = t.g,
			s = t.b,
			o = n.r - r,
			u = n.g - i,
			a = n.b - s;
		return function(e) {
			return "#" + bn(Math.round(r + o * e)) + bn(Math.round(i + u * e)) + bn(Math.round(s + a * e))
		}
	}

	function Eo(e, t) {
		var n = {},
			r = {},
			i;
		for (i in e) i in t ? n[i] = Co(e[i], t[i]) : r[i] = e[i];
		for (i in t) i in e || (r[i] = t[i]);
		return function(e) {
			for (i in n) r[i] = n[i](e);
			return r
		}
	}

	function So(e, t) {
		return t -= e = +e,
			function(n) {
				return e + t * n
			}
	}

	function xo(e, t) {
		var n = To.lastIndex = No.lastIndex = 0,
			r, i, s, o = -1,
			u = [],
			a = [];
		e += "", t += "";
		while ((r = To.exec(e)) && (i = No.exec(t)))(s = i.index) > n && (s = t.substring(n, s), u[o] ? u[o] += s : u[++o] = s), (r = r[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, a.push({
			i: o,
			x: So(r, i)
		})), n = No.lastIndex;
		return n < t.length && (s = t.substring(n), u[o] ? u[o] += s : u[++o] = s), u.length < 2 ? a[0] ? (t = a[0].x, function(e) {
			return t(e) + ""
		}) : function() {
			return t
		} : (t = a.length, function(e) {
			for (var n = 0, r; n < t; ++n) u[(r = a[n]).i] = r.x(e);
			return u.join("")
		})
	}

	function Co(t, n) {
		var r = e.interpolators.length,
			i;
		while (--r >= 0 && !(i = e.interpolators[r](t, n)));
		return i
	}

	function ko(e, t) {
		var n = [],
			r = [],
			i = e.length,
			s = t.length,
			o = Math.min(e.length, t.length),
			u;
		for (u = 0; u < o; ++u) n.push(Co(e[u], t[u]));
		for (; u < i; ++u) r[u] = e[u];
		for (; u < s; ++u) r[u] = t[u];
		return function(e) {
			for (u = 0; u < o; ++u) r[u] = n[u](e);
			return r
		}
	}

	function Mo(e) {
		return function(t) {
			return t <= 0 ? 0 : t >= 1 ? 1 : e(t)
		}
	}

	function _o(e) {
		return function(t) {
			return 1 - e(1 - t)
		}
	}

	function Do(e) {
		return function(t) {
			return .5 * (t < .5 ? e(2 * t) : 2 - e(2 - 2 * t))
		}
	}

	function Po(e) {
		return e * e
	}

	function Ho(e) {
		return e * e * e
	}

	function Bo(e) {
		if (e <= 0) return 0;
		if (e >= 1) return 1;
		var t = e * e,
			n = t * e;
		return 4 * (e < .5 ? n : 3 * (e - t) + n - .75)
	}

	function jo(e) {
		return function(t) {
			return Math.pow(t, e)
		}
	}

	function Fo(e) {
		return 1 - Math.cos(e * kt)
	}

	function Io(e) {
		return Math.pow(2, 10 * (e - 1))
	}

	function qo(e) {
		return 1 - Math.sqrt(1 - e * e)
	}

	function Ro(e, t) {
		var n;
		return arguments.length < 2 && (t = .45), arguments.length ? n = t / Ct * Math.asin(1 / e) : (e = 1, n = t / 4),
			function(r) {
				return 1 + e * Math.pow(2, -10 * r) * Math.sin((r - n) * Ct / t)
			}
	}

	function Uo(e) {
		return e || (e = 1.70158),
			function(t) {
				return t * t * ((e + 1) * t - e)
			}
	}

	function zo(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function Wo(t, n) {
		t = e.hcl(t), n = e.hcl(n);
		var r = t.h,
			i = t.c,
			s = t.l,
			o = n.h - r,
			u = n.c - i,
			a = n.l - s;
		return isNaN(u) && (u = 0, i = isNaN(i) ? n.c : i), isNaN(o) ? (o = 0, r = isNaN(r) ? n.h : r) : o > 180 ? o -= 360 : o < -180 && (o += 360),
			function(e) {
				return en(r + o * e, i + u * e, s + a * e) + ""
			}
	}

	function Xo(t, n) {
		t = e.hsl(t), n = e.hsl(n);
		var r = t.h,
			i = t.s,
			s = t.l,
			o = n.h - r,
			u = n.s - i,
			a = n.l - s;
		return isNaN(u) && (u = 0, i = isNaN(i) ? n.s : i), isNaN(o) ? (o = 0, r = isNaN(r) ? n.h : r) : o > 180 ? o -= 360 : o < -180 && (o += 360),
			function(e) {
				return Qt(r + o * e, i + u * e, s + a * e) + ""
			}
	}

	function Vo(t, n) {
		t = e.lab(t), n = e.lab(n);
		var r = t.l,
			i = t.a,
			s = t.b,
			o = n.l - r,
			u = n.a - i,
			a = n.b - s;
		return function(e) {
			return fn(r + o * e, i + u * e, s + a * e) + ""
		}
	}

	function $o(e, t) {
		return t -= e,
			function(n) {
				return Math.round(e + t * n)
			}
	}

	function Jo(e) {
		var t = [e.a, e.b],
			n = [e.c, e.d],
			r = Qo(t),
			i = Ko(t, n),
			s = Qo(Go(n, t, -i)) || 0;
		t[0] * n[1] < n[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-n[0], n[1])) * Mt, this.translate = [e.e, e.f], this.scale = [r, s], this.skew = s ? Math.atan2(i, s) * Mt : 0
	}

	function Ko(e, t) {
		return e[0] * t[0] + e[1] * t[1]
	}

	function Qo(e) {
		var t = Math.sqrt(Ko(e, e));
		return t && (e[0] /= t, e[1] /= t), t
	}

	function Go(e, t, n) {
		return e[0] += n * t[0], e[1] += n * t[1], e
	}

	function Zo(t, n) {
		var r = [],
			i = [],
			s, o = e.transform(t),
			u = e.transform(n),
			a = o.translate,
			f = u.translate,
			l = o.rotate,
			c = u.rotate,
			h = o.skew,
			p = u.skew,
			d = o.scale,
			v = u.scale;
		return a[0] != f[0] || a[1] != f[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
				i: 1,
				x: So(a[0], f[0])
			}, {
				i: 3,
				x: So(a[1], f[1])
			})) : f[0] || f[1] ? r.push("translate(" + f + ")") : r.push(""), l != c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), i.push({
				i: r.push(r.pop() + "rotate(", null, ")") - 2,
				x: So(l, c)
			})) : c && r.push(r.pop() + "rotate(" + c + ")"), h != p ? i.push({
				i: r.push(r.pop() + "skewX(", null, ")") - 2,
				x: So(h, p)
			}) : p && r.push(r.pop() + "skewX(" + p + ")"), d[0] != v[0] || d[1] != v[1] ? (s = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
				i: s - 4,
				x: So(d[0], v[0])
			}, {
				i: s - 2,
				x: So(d[1], v[1])
			})) : (v[0] != 1 || v[1] != 1) && r.push(r.pop() + "scale(" + v + ")"), s = i.length,
			function(e) {
				var t = -1,
					n;
				while (++t < s) r[(n = i[t]).i] = n.x(e);
				return r.join("")
			}
	}

	function eu(e, t) {
		return t = t - (e = +e) ? 1 / (t - e) : 0,
			function(n) {
				return (n - e) * t
			}
	}

	function tu(e, t) {
		return t = t - (e = +e) ? 1 / (t - e) : 0,
			function(n) {
				return Math.max(0, Math.min(1, (n - e) * t))
			}
	}

	function nu(e) {
		var t = e.source,
			n = e.target,
			r = iu(t, n),
			i = [t];
		while (t !== r) t = t.parent, i.push(t);
		var s = i.length;
		while (n !== r) i.splice(s, 0, n), n = n.parent;
		return i
	}

	function ru(e) {
		var t = [],
			n = e.parent;
		while (n != null) t.push(e), e = n, n = n.parent;
		return t.push(e), t
	}

	function iu(e, t) {
		if (e === t) return e;
		var n = ru(e),
			r = ru(t),
			i = n.pop(),
			s = r.pop(),
			o = null;
		while (i === s) o = i, i = n.pop(), s = r.pop();
		return o
	}

	function su(e) {
		e.fixed |= 2
	}

	function ou(e) {
		e.fixed &= -7
	}

	function uu(e) {
		e.fixed |= 4, e.px = e.x, e.py = e.y
	}

	function au(e) {
		e.fixed &= -5
	}

	function fu(e, t, n) {
		var r = 0,
			i = 0;
		e.charge = 0;
		if (!e.leaf) {
			var s = e.nodes,
				o = s.length,
				u = -1,
				a;
			while (++u < o) {
				a = s[u];
				if (a == null) continue;
				fu(a, t, n), e.charge += a.charge, r += a.charge * a.cx, i += a.charge * a.cy
			}
		}
		if (e.point) {
			e.leaf || (e.point.x += Math.random() - .5, e.point.y += Math.random() - .5);
			var f = t * n[e.point.index];
			e.charge += e.pointCharge = f, r += f * e.point.x, i += f * e.point.y
		}
		e.cx = r / e.charge, e.cy = i / e.charge
	}

	function pu(t, n) {
		return e.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = bu, t
	}

	function du(e, t) {
		var n = [e];
		while ((e = n.pop()) != null) {
			t(e);
			if ((i = e.children) && (r = i.length)) {
				var r, i;
				while (--r >= 0) n.push(i[r])
			}
		}
	}

	function vu(e, t) {
		var n = [e],
			r = [];
		while ((e = n.pop()) != null) {
			r.push(e);
			if ((o = e.children) && (s = o.length)) {
				var i = -1,
					s, o;
				while (++i < s) n.push(o[i])
			}
		}
		while ((e = r.pop()) != null) t(e)
	}

	function mu(e) {
		return e.children
	}

	function gu(e) {
		return e.value
	}

	function yu(e, t) {
		return t.value - e.value
	}

	function bu(t) {
		return e.merge(t.map(function(e) {
			return (e.children || []).map(function(t) {
				return {
					source: e,
					target: t
				}
			})
		}))
	}

	function Eu(e) {
		return e.x
	}

	function Su(e) {
		return e.y
	}

	function xu(e, t, n) {
		e.y0 = t, e.y = n
	}

	function Cu(t) {
		return e.range(t.length)
	}

	function ku(e) {
		var t = -1,
			n = e[0].length,
			r = [];
		while (++t < n) r[t] = 0;
		return r
	}

	function Lu(e) {
		var t = 1,
			n = 0,
			r = e[0][1],
			i, s = e.length;
		for (; t < s; ++t)(i = e[t][1]) > r && (n = t, r = i);
		return n
	}

	function Au(e) {
		return e.reduce(Ou, 0)
	}

	function Ou(e, t) {
		return e + t[1]
	}

	function Mu(e, t) {
		return _u(e, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
	}

	function _u(e, t) {
		var n = -1,
			r = +e[0],
			i = (e[1] - r) / t,
			s = [];
		while (++n <= t) s[n] = i * n + r;
		return s
	}

	function Du(t) {
		return [e.min(t), e.max(t)]
	}

	function Pu(e, t) {
		return e.value - t.value
	}

	function Hu(e, t) {
		var n = e._pack_next;
		e._pack_next = t, t._pack_prev = e, t._pack_next = n, n._pack_prev = t
	}

	function Bu(e, t) {
		e._pack_next = t, t._pack_prev = e
	}

	function ju(e, t) {
		var n = t.x - e.x,
			r = t.y - e.y,
			i = e.r + t.r;
		return .999 * i * i > n * n + r * r
	}

	function Fu(e) {
		function p(e) {
			n = Math.min(e.x - e.r, n), r = Math.max(e.x + e.r, r), i = Math.min(e.y - e.r, i), s = Math.max(e.y + e.r, s)
		}
		if (!(t = e.children) || !(h = t.length)) return;
		var t, n = Infinity,
			r = -Infinity,
			i = Infinity,
			s = -Infinity,
			o, u, a, f, l, c, h;
		t.forEach(Iu), o = t[0], o.x = -o.r, o.y = 0, p(o);
		if (h > 1) {
			u = t[1], u.x = u.r, u.y = 0, p(u);
			if (h > 2) {
				a = t[2], Uu(o, u, a), p(a), Hu(o, a), o._pack_prev = a, Hu(a, u), u = o._pack_next;
				for (f = 3; f < h; f++) {
					Uu(o, u, a = t[f]);
					var d = 0,
						v = 1,
						m = 1;
					for (l = u._pack_next; l !== u; l = l._pack_next, v++)
						if (ju(l, a)) {
							d = 1;
							break
						}
					if (d == 1)
						for (c = o._pack_prev; c !== l._pack_prev; c = c._pack_prev, m++)
							if (ju(c, a)) break;
					d ? (v < m || v == m && u.r < o.r ? Bu(o, u = l) : Bu(o = c, u), f--) : (Hu(o, a), u = a, p(a))
				}
			}
		}
		var g = (n + r) / 2,
			y = (i + s) / 2,
			b = 0;
		for (f = 0; f < h; f++) a = t[f], a.x -= g, a.y -= y, b = Math.max(b, a.r + Math.sqrt(a.x * a.x + a.y * a.y));
		e.r = b, t.forEach(qu)
	}

	function Iu(e) {
		e._pack_next = e._pack_prev = e
	}

	function qu(e) {
		delete e._pack_next, delete e._pack_prev
	}

	function Ru(e, t, n, r) {
		var i = e.children;
		e.x = t += r * e.x, e.y = n += r * e.y, e.r *= r;
		if (i) {
			var s = -1,
				o = i.length;
			while (++s < o) Ru(i[s], t, n, r)
		}
	}

	function Uu(e, t, n) {
		var r = e.r + n.r,
			i = t.x - e.x,
			s = t.y - e.y;
		if (r && (i || s)) {
			var o = t.r + n.r,
				u = i * i + s * s;
			o *= o, r *= r;
			var a = .5 + (r - o) / (2 * u),
				f = Math.sqrt(Math.max(0, 2 * o * (r + u) - (r -= u) * r - o * o)) / (2 * u);
			n.x = e.x + a * i + f * s, n.y = e.y + a * s - f * i
		} else n.x = e.x + r, n.y = e.y
	}

	function zu(e, t) {
		return e.parent == t.parent ? 1 : 2
	}

	function Wu(e) {
		var t = e.children;
		return t.length ? t[0] : e.t
	}

	function Xu(e) {
		var t = e.children,
			n;
		return (n = t.length) ? t[n - 1] : e.t
	}

	function Vu(e, t, n) {
		var r = n / (t.i - e.i);
		t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n
	}

	function $u(e) {
		var t = 0,
			n = 0,
			r = e.children,
			i = r.length,
			s;
		while (--i >= 0) s = r[i], s.z += t, s.m += t, t += s.s + (n += s.c)
	}

	function Ju(e, t, n) {
		return e.a.parent === t.parent ? e.a : n
	}

	function Ku(t) {
		return 1 + e.max(t, function(e) {
			return e.y
		})
	}

	function Qu(e) {
		return e.reduce(function(e, t) {
			return e + t.x
		}, 0) / e.length
	}

	function Gu(e) {
		var t = e.children;
		return t && t.length ? Gu(t[0]) : e
	}

	function Yu(e) {
		var t = e.children,
			n;
		return t && (n = t.length) ? Yu(t[n - 1]) : e
	}

	function Zu(e) {
		return {
			x: e.x,
			y: e.y,
			dx: e.dx,
			dy: e.dy
		}
	}

	function ea(e, t) {
		var n = e.x + t[3],
			r = e.y + t[0],
			i = e.dx - t[1] - t[3],
			s = e.dy - t[0] - t[2];
		return i < 0 && (n += i / 2, i = 0), s < 0 && (r += s / 2, s = 0), {
			x: n,
			y: r,
			dx: i,
			dy: s
		}
	}

	function ta(e) {
		var t = e[0],
			n = e[e.length - 1];
		return t < n ? [t, n] : [n, t]
	}

	function na(e) {
		return e.rangeExtent ? e.rangeExtent() : ta(e.range())
	}

	function ra(e, t, n, r) {
		var i = n(e[0], e[1]),
			s = r(t[0], t[1]);
		return function(e) {
			return s(i(e))
		}
	}

	function ia(e, t) {
		var n = 0,
			r = e.length - 1,
			i = e[n],
			s = e[r],
			o;
		return s < i && (o = n, n = r, r = o, o = i, i = s, s = o), e[n] = t.floor(i), e[r] = t.ceil(s), e
	}

	function sa(e) {
		return e ? {
			floor: function(t) {
				return Math.floor(t / e) * e
			},
			ceil: function(t) {
				return Math.ceil(t / e) * e
			}
		} : oa
	}

	function ua(t, n, r, i) {
		var s = [],
			o = [],
			u = 0,
			a = Math.min(t.length, n.length) - 1;
		t[a] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse());
		while (++u <= a) s.push(r(t[u - 1], t[u])), o.push(i(n[u - 1], n[u]));
		return function(n) {
			var r = e.bisect(t, n, 1, a) - 1;
			return o[r](s[r](n))
		}
	}

	function aa(e, t, n, r) {
		function o() {
			var o = Math.min(e.length, t.length) > 2 ? ua : ra,
				a = r ? tu : eu;
			return i = o(e, t, a, n), s = o(t, e, a, Co), u
		}

		function u(e) {
			return i(e)
		}
		var i, s;
		return u.invert = function(e) {
			return s(e)
		}, u.domain = function(t) {
			return arguments.length ? (e = t.map(Number), o()) : e
		}, u.range = function(e) {
			return arguments.length ? (t = e, o()) : t
		}, u.rangeRound = function(e) {
			return u.range(e).interpolate($o)
		}, u.clamp = function(e) {
			return arguments.length ? (r = e, o()) : r
		}, u.interpolate = function(e) {
			return arguments.length ? (n = e, o()) : n
		}, u.ticks = function(t) {
			return ha(e, t)
		}, u.tickFormat = function(t, n) {
			return pa(e, t, n)
		}, u.nice = function(t) {
			return la(e, t), o()
		}, u.copy = function() {
			return aa(e, t, n, r)
		}, o()
	}

	function fa(t, n) {
		return e.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
	}

	function la(e, t) {
		return ia(e, sa(ca(e, t)[2]))
	}

	function ca(e, t) {
		t == null && (t = 10);
		var n = ta(e),
			r = n[1] - n[0],
			i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
			s = t / r * i;
		return s <= .15 ? i *= 10 : s <= .35 ? i *= 5 : s <= .75 && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + i * .5, n[2] = i, n
	}

	function ha(t, n) {
		return e.range.apply(e, ca(t, n))
	}

	function pa(t, n, r) {
		var i = ca(t, n);
		if (r) {
			var s = Wn.exec(r);
			s.shift();
			if (s[8] === "s") {
				var o = e.formatPrefix(Math.max(y(i[0]), y(i[1])));
				return s[7] || (s[7] = "." + va(o.scale(i[2]))), s[8] = "f", r = e.format(s.join("")),
					function(e) {
						return r(o.scale(e)) + o.symbol
					}
			}
			s[7] || (s[7] = "." + ma(s[8], i)), r = s.join("")
		} else r = ",." + va(i[2]) + "f";
		return e.format(r)
	}

	function va(e) {
		return -Math.floor(Math.log(e) / Math.LN10 + .01)
	}

	function ma(e, t) {
		var n = va(t[2]);
		return e in da ? Math.abs(n - va(Math.max(y(t[0]), y(t[1])))) + +(e !== "e") : n - (e === "%") * 2
	}

	function ga(t, n, r, i) {
		function s(e) {
			return (r ? Math.log(e < 0 ? 0 : e) : -Math.log(e > 0 ? 0 : -e)) / Math.log(n)
		}

		function o(e) {
			return r ? Math.pow(n, e) : -Math.pow(n, -e)
		}

		function u(e) {
			return t(s(e))
		}
		return u.invert = function(e) {
			return o(t.invert(e))
		}, u.domain = function(e) {
			return arguments.length ? (r = e[0] >= 0, t.domain((i = e.map(Number)).map(s)), u) : i
		}, u.base = function(e) {
			return arguments.length ? (n = +e, t.domain(i.map(s)), u) : n
		}, u.nice = function() {
			var e = ia(i.map(s), r ? Math : ba);
			return t.domain(e), i = e.map(o), u
		}, u.ticks = function() {
			var e = ta(i),
				t = [],
				u = e[0],
				a = e[1],
				f = Math.floor(s(u)),
				l = Math.ceil(s(a)),
				c = n % 1 ? 2 : n;
			if (isFinite(l - f)) {
				if (r) {
					for (; f < l; f++)
						for (var h = 1; h < c; h++) t.push(o(f) * h);
					t.push(o(f))
				} else {
					t.push(o(f));
					for (; f++ < l;)
						for (var h = c - 1; h > 0; h--) t.push(o(f) * h)
				}
				for (f = 0; t[f] < u; f++);
				for (l = t.length; t[l - 1] > a; l--);
				t = t.slice(f, l)
			}
			return t
		}, u.tickFormat = function(t, n) {
			if (!arguments.length) return ya;
			arguments.length < 2 ? n = ya : typeof n != "function" && (n = e.format(n));
			var i = Math.max(.1, t / u.ticks().length),
				a = r ? (f = 1e-12, Math.ceil) : (f = -1e-12, Math.floor),
				f;
			return function(e) {
				return e / o(a(s(e) + f)) <= i ? n(e) : ""
			}
		}, u.copy = function() {
			return ga(t.copy(), n, r, i)
		}, fa(u, t)
	}

	function wa(e, t, n) {
		function s(t) {
			return e(r(t))
		}
		var r = Ea(t),
			i = Ea(1 / t);
		return s.invert = function(t) {
			return i(e.invert(t))
		}, s.domain = function(t) {
			return arguments.length ? (e.domain((n = t.map(Number)).map(r)), s) : n
		}, s.ticks = function(e) {
			return ha(n, e)
		}, s.tickFormat = function(e, t) {
			return pa(n, e, t)
		}, s.nice = function(e) {
			return s.domain(la(n, e))
		}, s.exponent = function(o) {
			return arguments.length ? (r = Ea(t = o), i = Ea(1 / t), e.domain(n.map(r)), s) : t
		}, s.copy = function() {
			return wa(e.copy(), t, n)
		}, fa(s, e)
	}

	function Ea(e) {
		return function(t) {
			return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
		}
	}

	function Sa(t, n) {
		function o(e) {
			return i[((r.get(e) || (n.t === "range" ? r.set(e, t.push(e)) : NaN)) - 1) % i.length]
		}

		function u(n, r) {
			return e.range(t.length).map(function(e) {
				return n + r * e
			})
		}
		var r, i, s;
		return o.domain = function(e) {
			if (!arguments.length) return t;
			t = [], r = new E;
			var i = -1,
				s = e.length,
				u;
			while (++i < s) r.has(u = e[i]) || r.set(u, t.push(u));
			return o[n.t].apply(o, n.a)
		}, o.range = function(e) {
			return arguments.length ? (i = e, s = 0, n = {
				t: "range",
				a: arguments
			}, o) : i
		}, o.rangePoints = function(e, r) {
			arguments.length < 2 && (r = 0);
			var a = e[0],
				f = e[1],
				l = (f - a) / (Math.max(1, t.length - 1) + r);
			return i = u(t.length < 2 ? (a + f) / 2 : a + l * r / 2, l), s = 0, n = {
				t: "rangePoints",
				a: arguments
			}, o
		}, o.rangeBands = function(e, r, a) {
			arguments.length < 2 && (r = 0), arguments.length < 3 && (a = r);
			var f = e[1] < e[0],
				l = e[f - 0],
				c = e[1 - f],
				h = (c - l) / (t.length - r + 2 * a);
			return i = u(l + h * a, h), f && i.reverse(), s = h * (1 - r), n = {
				t: "rangeBands",
				a: arguments
			}, o
		}, o.rangeRoundBands = function(e, r, a) {
			arguments.length < 2 && (r = 0), arguments.length < 3 && (a = r);
			var f = e[1] < e[0],
				l = e[f - 0],
				c = e[1 - f],
				h = Math.floor((c - l) / (t.length - r + 2 * a)),
				p = c - l - (t.length - r) * h;
			return i = u(l + Math.round(p / 2), h), f && i.reverse(), s = Math.round(h * (1 - r)), n = {
				t: "rangeRoundBands",
				a: arguments
			}, o
		}, o.rangeBand = function() {
			return s
		}, o.rangeExtent = function() {
			return ta(n.a[0])
		}, o.copy = function() {
			return Sa(t, n)
		}, o.domain(t)
	}

	function ka(t, n) {
		function i() {
			var i = 0,
				o = n.length;
			r = [];
			while (++i < o) r[i - 1] = e.quantile(t, i / o);
			return s
		}

		function s(t) {
			if (!isNaN(t = +t)) return n[e.bisect(r, t)]
		}
		var r;
		return s.domain = function(e) {
			return arguments.length ? (t = e.filter(d).sort(p), i()) : t
		}, s.range = function(e) {
			return arguments.length ? (n = e, i()) : n
		}, s.quantiles = function() {
			return r
		}, s.invertExtent = function(e) {
			return e = n.indexOf(e), e < 0 ? [NaN, NaN] : [e > 0 ? r[e - 1] : t[0], e < r.length ? r[e] : t[t.length - 1]]
		}, s.copy = function() {
			return ka(t, n)
		}, i()
	}

	function La(e, t, n) {
		function s(t) {
			return n[Math.max(0, Math.min(i, Math.floor(r * (t - e))))]
		}

		function o() {
			return r = n.length / (t - e), i = n.length - 1, s
		}
		var r, i;
		return s.domain = function(n) {
			return arguments.length ? (e = +n[0], t = +n[n.length - 1], o()) : [e, t]
		}, s.range = function(e) {
			return arguments.length ? (n = e, o()) : n
		}, s.invertExtent = function(t) {
			return t = n.indexOf(t), t = t < 0 ? NaN : t / r + e, [t, t + 1 / r]
		}, s.copy = function() {
			return La(e, t, n)
		}, o()
	}

	function Aa(t, n) {
		function r(r) {
			if (r <= r) return n[e.bisect(t, r)]
		}
		return r.domain = function(e) {
			return arguments.length ? (t = e, r) : t
		}, r.range = function(e) {
			return arguments.length ? (n = e, r) : n
		}, r.invertExtent = function(e) {
			return e = n.indexOf(e), [t[e - 1], t[e]]
		}, r.copy = function() {
			return Aa(t, n)
		}, r
	}

	function Oa(e) {
		function t(e) {
			return +e
		}
		return t.invert = t, t.domain = t.range = function(n) {
			return arguments.length ? (e = n.map(t), t) : e
		}, t.ticks = function(t) {
			return ha(e, t)
		}, t.tickFormat = function(t, n) {
			return pa(e, t, n)
		}, t.copy = function() {
			return Oa(e)
		}, t
	}

	function Da(e) {
		return e.innerRadius
	}

	function Pa(e) {
		return e.outerRadius
	}

	function Ha(e) {
		return e.startAngle
	}

	function Ba(e) {
		return e.endAngle
	}

	function ja(e) {
		function u(s) {
			function d() {
				u.push("M", i(e(a), o))
			}
			var u = [],
				a = [],
				f = -1,
				l = s.length,
				c, h = Cn(t),
				p = Cn(n);
			while (++f < l) r.call(this, c = s[f], f) ? a.push([+h.call(this, c, f), +p.call(this, c, f)]) : a.length && (d(), a = []);
			return a.length && d(), u.length ? u.join("") : null
		}
		var t = Ns,
			n = Cs,
			r = ui,
			i = Ia,
			s = i.key,
			o = .7;
		return u.x = function(e) {
			return arguments.length ? (t = e, u) : t
		}, u.y = function(e) {
			return arguments.length ? (n = e, u) : n
		}, u.defined = function(e) {
			return arguments.length ? (r = e, u) : r
		}, u.interpolate = function(e) {
			return arguments.length ? (typeof e == "function" ? s = i = e : s = (i = Fa.get(e) || Ia).key, u) : s
		}, u.tension = function(e) {
			return arguments.length ? (o = e, u) : o
		}, u
	}

	function Ia(e) {
		return e.join("L")
	}

	function qa(e) {
		return Ia(e) + "Z"
	}

	function Ra(e) {
		var t = 0,
			n = e.length,
			r = e[0],
			i = [r[0], ",", r[1]];
		while (++t < n) i.push("H", (r[0] + (r = e[t])[0]) / 2, "V", r[1]);
		return n > 1 && i.push("H", r[0]), i.join("")
	}

	function Ua(e) {
		var t = 0,
			n = e.length,
			r = e[0],
			i = [r[0], ",", r[1]];
		while (++t < n) i.push("V", (r = e[t])[1], "H", r[0]);
		return i.join("")
	}

	function za(e) {
		var t = 0,
			n = e.length,
			r = e[0],
			i = [r[0], ",", r[1]];
		while (++t < n) i.push("H", (r = e[t])[0], "V", r[1]);
		return i.join("")
	}

	function Wa(e, t) {
		return e.length < 4 ? Ia(e) : e[1] + $a(e.slice(1, e.length - 1), Ja(e, t))
	}

	function Xa(e, t) {
		return e.length < 3 ? Ia(e) : e[0] + $a((e.push(e[0]), e), Ja([e[e.length - 2]].concat(e, [e[1]]), t))
	}

	function Va(e, t) {
		return e.length < 3 ? Ia(e) : e[0] + $a(e, Ja(e, t))
	}

	function $a(e, t) {
		if (t.length < 1 || e.length != t.length && e.length != t.length + 2) return Ia(e);
		var n = e.length != t.length,
			r = "",
			i = e[0],
			s = e[1],
			o = t[0],
			u = o,
			a = 1;
		n && (r += "Q" + (s[0] - o[0] * 2 / 3) + "," + (s[1] - o[1] * 2 / 3) + "," + s[0] + "," + s[1], i = e[1], a = 2);
		if (t.length > 1) {
			u = t[1], s = e[a], a++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1];
			for (var f = 2; f < t.length; f++, a++) s = e[a], u = t[f], r += "S" + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1]
		}
		if (n) {
			var l = e[a];
			r += "Q" + (s[0] + u[0] * 2 / 3) + "," + (s[1] + u[1] * 2 / 3) + "," + l[0] + "," + l[1]
		}
		return r
	}

	function Ja(e, t) {
		var n = [],
			r = (1 - t) / 2,
			i, s = e[0],
			o = e[1],
			u = 1,
			a = e.length;
		while (++u < a) i = s, s = o, o = e[u], n.push([r * (o[0] - i[0]), r * (o[1] - i[1])]);
		return n
	}

	function Ka(e) {
		if (e.length < 3) return Ia(e);
		var t = 1,
			n = e.length,
			r = e[0],
			i = r[0],
			s = r[1],
			o = [i, i, i, (r = e[1])[0]],
			u = [s, s, s, r[1]],
			a = [i, ",", s, "L", Za(nf, o), ",", Za(nf, u)];
		e.push(e[n - 1]);
		while (++t <= n) r = e[t], o.shift(), o.push(r[0]), u.shift(), u.push(r[1]), rf(a, o, u);
		return e.pop(), a.push("L", r), a.join("")
	}

	function Qa(e) {
		if (e.length < 4) return Ia(e);
		var t = [],
			n = -1,
			r = e.length,
			i, s = [0],
			o = [0];
		while (++n < 3) i = e[n], s.push(i[0]), o.push(i[1]);
		t.push(Za(nf, s) + "," + Za(nf, o)), --n;
		while (++n < r) i = e[n], s.shift(), s.push(i[0]), o.shift(), o.push(i[1]), rf(t, s, o);
		return t.join("")
	}

	function Ga(e) {
		var t, n = -1,
			r = e.length,
			i = r + 4,
			s, o = [],
			u = [];
		while (++n < 4) s = e[n % r], o.push(s[0]), u.push(s[1]);
		t = [Za(nf, o), ",", Za(nf, u)], --n;
		while (++n < i) s = e[n % r], o.shift(), o.push(s[0]), u.shift(), u.push(s[1]), rf(t, o, u);
		return t.join("")
	}

	function Ya(e, t) {
		var n = e.length - 1;
		if (n) {
			var r = e[0][0],
				i = e[0][1],
				s = e[n][0] - r,
				o = e[n][1] - i,
				u = -1,
				a, f;
			while (++u <= n) a = e[u], f = u / n, a[0] = t * a[0] + (1 - t) * (r + f * s), a[1] = t * a[1] + (1 - t) * (i + f * o)
		}
		return Ka(e)
	}

	function Za(e, t) {
		return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
	}

	function rf(e, t, n) {
		e.push("C", Za(ef, t), ",", Za(ef, n), ",", Za(tf, t), ",", Za(tf, n), ",", Za(nf, t), ",", Za(nf, n))
	}

	function sf(e, t) {
		return (t[1] - e[1]) / (t[0] - e[0])
	}

	function of(e) {
		var t = 0,
			n = e.length - 1,
			r = [],
			i = e[0],
			s = e[1],
			o = r[0] = sf(i, s);
		while (++t < n) r[t] = (o + (o = sf(i = s, s = e[t + 1]))) / 2;
		return r[t] = o, r
	}

	function uf(e) {
		var t = [],
			n, r, i, s, o = of(e),
			u = -1,
			a = e.length - 1;
		while (++u < a) n = sf(e[u], e[u + 1]), y(n) < Lt ? o[u] = o[u + 1] = 0 : (r = o[u] / n, i = o[u + 1] / n, s = r * r + i * i, s > 9 && (s = n * 3 / Math.sqrt(s), o[u] = s * r, o[u + 1] = s * i));
		u = -1;
		while (++u <= a) s = (e[Math.min(a, u + 1)][0] - e[Math.max(0, u - 1)][0]) / (6 * (1 + o[u] * o[u])), t.push([s || 0, o[u] * s || 0]);
		return t
	}

	function af(e) {
		return e.length < 3 ? Ia(e) : e[0] + $a(e, uf(e))
	}

	function ff(e) {
		var t, n = -1,
			r = e.length,
			i, s;
		while (++n < r) t = e[n], i = t[0], s = t[1] + Ma, t[0] = i * Math.cos(s), t[1] = i * Math.sin(s);
		return e
	}

	function lf(e) {
		function c(u) {
			function x() {
				c.push("M", o(e(p), l), f, a(e(h.reverse()), l), "Z")
			}
			var c = [],
				h = [],
				p = [],
				d = -1,
				v = u.length,
				m, g = Cn(t),
				y = Cn(r),
				b = t === n ? function() {
					return E
				} : Cn(n),
				w = r === i ? function() {
					return S
				} : Cn(i),
				E, S;
			while (++d < v) s.call(this, m = u[d], d) ? (h.push([E = +g.call(this, m, d), S = +y.call(this, m, d)]), p.push([+b.call(this, m, d), +w.call(this, m, d)])) : h.length && (x(), h = [], p = []);
			return h.length && x(), c.length ? c.join("") : null
		}
		var t = Ns,
			n = Ns,
			r = 0,
			i = Cs,
			s = ui,
			o = Ia,
			u = o.key,
			a = o,
			f = "L",
			l = .7;
		return c.x = function(e) {
			return arguments.length ? (t = n = e, c) : n
		}, c.x0 = function(e) {
			return arguments.length ? (t = e, c) : t
		}, c.x1 = function(e) {
			return arguments.length ? (n = e, c) : n
		}, c.y = function(e) {
			return arguments.length ? (r = i = e, c) : i
		}, c.y0 = function(e) {
			return arguments.length ? (r = e, c) : r
		}, c.y1 = function(e) {
			return arguments.length ? (i = e, c) : i
		}, c.defined = function(e) {
			return arguments.length ? (s = e, c) : s
		}, c.interpolate = function(e) {
			return arguments.length ? (typeof e == "function" ? u = o = e : u = (o = Fa.get(e) || Ia).key, a = o.reverse || o, f = o.closed ? "M" : "L", c) : u
		}, c.tension = function(e) {
			return arguments.length ? (l = e, c) : l
		}, c
	}

	function cf(e) {
		return e.radius
	}

	function hf(e) {
		return [e.x, e.y]
	}

	function pf(e) {
		return function() {
			var t = e.apply(this, arguments),
				n = t[0],
				r = t[1] + Ma;
			return [n * Math.cos(r), n * Math.sin(r)]
		}
	}

	function df() {
		return 64
	}

	function vf() {
		return "circle"
	}

	function mf(e) {
		var t = Math.sqrt(e / Nt);
		return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
	}

	function wf(e, t) {
		return q(e, Ef), e.id = t, e
	}

	function Nf(e, t, n, r) {
		var i = e.id;
		return at(e, typeof n == "function" ? function(e, s, o) {
			e.__transition__[i].tween.set(t, r(n.call(e, e.__data__, s, o)))
		} : (n = r(n), function(e) {
			e.__transition__[i].tween.set(t, n)
		}))
	}

	function Cf(e) {
		return e == null && (e = ""),
			function() {
				this.textContent = e
			}
	}

	function kf(t, n, r, i) {
		var s = t.__transition__ || (t.__transition__ = {
				active: 0,
				count: 0
			}),
			o = s[r];
		if (!o) {
			var u = i.time;
			o = s[r] = {
				tween: new E,
				time: u,
				ease: i.ease,
				delay: i.delay,
				duration: i.duration
			}, ++s.count, e.timer(function(i) {
				function d(i) {
					if (s.active > r) return m();
					s.active = r, o.event && o.event.start.call(t, a, n), o.tween.forEach(function(e, r) {
						(r = r.call(t, a, n)) && p.push(r)
					}), e.timer(function() {
						return h.c = v(i || 1) ? ui : v, 1
					}, 0, u)
				}

				function v(e) {
					if (s.active !== r) return m();
					var i = e / c,
						u = f(i),
						l = p.length;
					while (l > 0) p[--l].call(t, u);
					if (i >= 1) return o.event && o.event.end.call(t, a, n), m()
				}

				function m() {
					return --s.count ? delete s[r] : delete t.__transition__, 1
				}
				var a = t.__data__,
					f = o.ease,
					l = o.delay,
					c = o.duration,
					h = Hn,
					p = [];
				h.t = l + u;
				if (l <= i) return d(i - l);
				h.c = d
			}, 0, u)
		}
	}

	function Of(e, t) {
		e.attr("transform", function(e) {
			return "translate(" + t(e) + ",0)"
		})
	}

	function Mf(e, t) {
		e.attr("transform", function(e) {
			return "translate(0," + t(e) + ")"
		})
	}

	function jf(e) {
		return e.toISOString()
	}

	function Ff(t, n, r) {
		function i(e) {
			return t(e)
		}

		function s(t, r) {
			var i = t[1] - t[0],
				s = i / r,
				o = e.bisect(qf, s);
			return o == qf.length ? [n.year, ca(t.map(function(e) {
				return e / 31126e6
			}), r)[2]] : o ? n[s / qf[o - 1] < qf[o] / s ? o - 1 : o] : [zf, ca(t, r)[2]]
		}
		return i.invert = function(e) {
			return If(t.invert(e))
		}, i.domain = function(e) {
			return arguments.length ? (t.domain(e), i) : t.domain().map(If)
		}, i.nice = function(e, t) {
			function u(n) {
				return !isNaN(n) && !e.range(n, If(+n + 1), t).length
			}
			var n = i.domain(),
				r = ta(n),
				o = e == null ? s(r, 10) : typeof e == "number" && s(r, e);
			return o && (e = o[0], t = o[1]), i.domain(ia(n, t > 1 ? {
				floor: function(t) {
					while (u(t = e.floor(t))) t = If(t - 1);
					return t
				},
				ceil: function(t) {
					while (u(t = e.ceil(t))) t = If(+t + 1);
					return t
				}
			} : e))
		}, i.ticks = function(e, t) {
			var n = ta(i.domain()),
				r = e == null ? s(n, 10) : typeof e == "number" ? s(n, e) : !e.range && [{
					range: e
				}, t];
			return r && (e = r[0], t = r[1]), e.range(n[0], If(+n[1] + 1), t < 1 ? 1 : t)
		}, i.tickFormat = function() {
			return r
		}, i.copy = function() {
			return Ff(t.copy(), n, r)
		}, fa(i, t)
	}

	function If(e) {
		return new Date(e)
	}

	function Vf(e) {
		return JSON.parse(e.responseText)
	}

	function $f(e) {
		var t = r.createRange();
		return t.selectNode(r.body), t.createContextualFragment(e.responseText)
	}
	var e = {
		version: "3.4.8"
	};
	Date.now || (Date.now = function() {
		return +(new Date)
	});
	var t = [].slice,
		n = function(e) {
			return t.call(e)
		},
		r = document,
		i = r.documentElement,
		s = window;
	try {
		n(i.childNodes)[0].nodeType
	} catch (o) {
		n = function(e) {
			var t = e.length,
				n = new Array(t);
			while (t--) n[t] = e[t];
			return n
		}
	}
	try {
		r.createElement("div").style.setProperty("opacity", 0, "")
	} catch (u) {
		var a = s.Element.prototype,
			f = a.setAttribute,
			l = a.setAttributeNS,
			c = s.CSSStyleDeclaration.prototype,
			h = c.setProperty;
		a.setAttribute = function(e, t) {
			f.call(this, e, t + "")
		}, a.setAttributeNS = function(e, t, n) {
			l.call(this, e, t, n + "")
		}, c.setProperty = function(e, t, n) {
			h.call(this, e, t + "", n)
		}
	}
	e.ascending = p, e.descending = function(e, t) {
		return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
	}, e.min = function(e, t) {
		var n = -1,
			r = e.length,
			i, s;
		if (arguments.length === 1) {
			while (++n < r && !((i = e[n]) != null && i <= i)) i = undefined;
			while (++n < r)(s = e[n]) != null && i > s && (i = s)
		} else {
			while (++n < r && !((i = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
			while (++n < r)(s = t.call(e, e[n], n)) != null && i > s && (i = s)
		}
		return i
	}, e.max = function(e, t) {
		var n = -1,
			r = e.length,
			i, s;
		if (arguments.length === 1) {
			while (++n < r && !((i = e[n]) != null && i <= i)) i = undefined;
			while (++n < r)(s = e[n]) != null && s > i && (i = s)
		} else {
			while (++n < r && !((i = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
			while (++n < r)(s = t.call(e, e[n], n)) != null && s > i && (i = s)
		}
		return i
	}, e.extent = function(e, t) {
		var n = -1,
			r = e.length,
			i, s, o;
		if (arguments.length === 1) {
			while (++n < r && !((i = o = e[n]) != null && i <= i)) i = o = undefined;
			while (++n < r)(s = e[n]) != null && (i > s && (i = s), o < s && (o = s))
		} else {
			while (++n < r && !((i = o = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
			while (++n < r)(s = t.call(e, e[n], n)) != null && (i > s && (i = s), o < s && (o = s))
		}
		return [i, o]
	}, e.sum = function(e, t) {
		var n = 0,
			r = e.length,
			i, s = -1;
		if (arguments.length === 1)
			while (++s < r) isNaN(i = +e[s]) || (n += i);
		else
			while (++s < r) isNaN(i = +t.call(e, e[s], s)) || (n += i);
		return n
	}, e.mean = function(e, t) {
		var n = 0,
			r = e.length,
			i, s = -1,
			o = r;
		if (arguments.length === 1)
			while (++s < r) d(i = e[s]) ? n += i : --o;
		else
			while (++s < r) d(i = t.call(e, e[s], s)) ? n += i : --o;
		return o ? n / o : undefined
	}, e.quantile = function(e, t) {
		var n = (e.length - 1) * t + 1,
			r = Math.floor(n),
			i = +e[r - 1],
			s = n - r;
		return s ? i + s * (e[r] - i) : i
	}, e.median = function(t, n) {
		return arguments.length > 1 && (t = t.map(n)), t = t.filter(d), t.length ? e.quantile(t.sort(p), .5) : undefined
	};
	var m = v(p);
	e.bisectLeft = m.left, e.bisect = e.bisectRight = m.right, e.bisector = function(e) {
		return v(e.length === 1 ? function(t, n) {
			return p(e(t), n)
		} : e)
	}, e.shuffle = function(e) {
		var t = e.length,
			n, r;
		while (t) r = Math.random() * t-- | 0, n = e[t], e[t] = e[r], e[r] = n;
		return e
	}, e.permute = function(e, t) {
		var n = t.length,
			r = new Array(n);
		while (n--) r[n] = e[t[n]];
		return r
	}, e.pairs = function(e) {
		var t = 0,
			n = e.length - 1,
			r, i = e[0],
			s = new Array(n < 0 ? 0 : n);
		while (t < n) s[t] = [r = i, i = e[++t]];
		return s
	}, e.zip = function() {
		if (!(s = arguments.length)) return [];
		for (var t = -1, n = e.min(arguments, g), r = new Array(n); ++t < n;)
			for (var i = -1, s, o = r[t] = new Array(s); ++i < s;) o[i] = arguments[i][t];
		return r
	}, e.transpose = function(t) {
		return e.zip.apply(e, t)
	}, e.keys = function(e) {
		var t = [];
		for (var n in e) t.push(n);
		return t
	}, e.values = function(e) {
		var t = [];
		for (var n in e) t.push(e[n]);
		return t
	}, e.entries = function(e) {
		var t = [];
		for (var n in e) t.push({
			key: n,
			value: e[n]
		});
		return t
	}, e.merge = function(e) {
		var t = e.length,
			n, r = -1,
			i = 0,
			s, o;
		while (++r < t) i += e[r].length;
		s = new Array(i);
		while (--t >= 0) {
			o = e[t], n = o.length;
			while (--n >= 0) s[--i] = o[n]
		}
		return s
	};
	var y = Math.abs;
	e.range = function(e, t, n) {
		arguments.length < 3 && (n = 1, arguments.length < 2 && (t = e, e = 0));
		if ((t - e) / n === Infinity) throw new Error("infinite range");
		var r = [],
			i = b(y(n)),
			s = -1,
			o;
		e *= i, t *= i, n *= i;
		if (n < 0)
			while ((o = e + n * ++s) > t) r.push(o / i);
		else
			while ((o = e + n * ++s) < t) r.push(o / i);
		return r
	}, e.map = function(e) {
		var t = new E;
		if (e instanceof E) e.forEach(function(e, n) {
			t.set(e, n)
		});
		else
			for (var n in e) t.set(n, e[n]);
		return t
	}, w(E, {
		has: T,
		get: function(e) {
			return this[S + e]
		},
		set: function(e, t) {
			return this[S + e] = t
		},
		remove: N,
		keys: C,
		values: function() {
			var e = [];
			return this.forEach(function(t, n) {
				e.push(n)
			}), e
		},
		entries: function() {
			var e = [];
			return this.forEach(function(t, n) {
				e.push({
					key: t,
					value: n
				})
			}), e
		},
		size: k,
		empty: L,
		forEach: function(e) {
			for (var t in this) t.charCodeAt(0) === x && e.call(this, t.substring(1), this[t])
		}
	});
	var S = "\0",
		x = S.charCodeAt(0);
	e.nest = function() {
		function o(e, r, u) {
			if (u >= n.length) return s ? s.call(t, r) : i ? r.sort(i) : r;
			var a = -1,
				f = r.length,
				l = n[u++],
				c, h, p, d = new E,
				v;
			while (++a < f)(v = d.get(c = l(h = r[a]))) ? v.push(h) : d.set(c, [h]);
			return e ? (h = e(), p = function(t, n) {
				h.set(t, o(e, n, u))
			}) : (h = {}, p = function(t, n) {
				h[t] = o(e, n, u)
			}), d.forEach(p), h
		}

		function u(e, t) {
			if (t >= n.length) return e;
			var i = [],
				s = r[t++];
			return e.forEach(function(e, n) {
				i.push({
					key: e,
					values: u(n, t)
				})
			}), s ? i.sort(function(e, t) {
				return s(e.key, t.key)
			}) : i
		}
		var t = {},
			n = [],
			r = [],
			i, s;
		return t.map = function(e, t) {
			return o(t, e, 0)
		}, t.entries = function(t) {
			return u(o(e.map, t, 0), 0)
		}, t.key = function(e) {
			return n.push(e), t
		}, t.sortKeys = function(e) {
			return r[n.length - 1] = e, t
		}, t.sortValues = function(e) {
			return i = e, t
		}, t.rollup = function(e) {
			return s = e, t
		}, t
	}, e.set = function(e) {
		var t = new A;
		if (e)
			for (var n = 0, r = e.length; n < r; ++n) t.add(e[n]);
		return t
	}, w(A, {
		has: T,
		add: function(e) {
			return this[S + e] = !0, e
		},
		remove: function(e) {
			return e = S + e, e in this && delete this[e]
		},
		values: C,
		size: k,
		empty: L,
		forEach: function(e) {
			for (var t in this) t.charCodeAt(0) === x && e.call(this, t.substring(1))
		}
	}), e.behavior = {}, e.rebind = function(e, t) {
		var n = 1,
			r = arguments.length,
			i;
		while (++n < r) e[i = arguments[n]] = O(e, t, t[i]);
		return e
	};
	var _ = ["webkit", "ms", "moz", "Moz", "o", "O"];
	e.dispatch = function() {
		var e = new P,
			t = -1,
			n = arguments.length;
		while (++t < n) e[arguments[t]] = H(e);
		return e
	}, P.prototype.on = function(e, t) {
		var n = e.indexOf("."),
			r = "";
		n >= 0 && (r = e.substring(n + 1), e = e.substring(0, n));
		if (e) return arguments.length < 2 ? this[e].on(r) : this[e].on(r, t);
		if (arguments.length === 2) {
			if (t == null)
				for (e in this) this.hasOwnProperty(e) && this[e].on(r, null);
			return this
		}
	}, e.event = null, e.requote = function(e) {
		return e.replace(I, "\\$&")
	};
	var I = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
		q = {}.__proto__ ? function(e, t) {
			e.__proto__ = t
		} : function(e, t) {
			for (var n in t) e[n] = t[n]
		},
		U = function(e, t) {
			return t.querySelector(e)
		},
		z = function(e, t) {
			return t.querySelectorAll(e)
		},
		W = i[M(i, "matchesSelector")],
		X = function(e, t) {
			return W.call(e, t)
		};
	typeof Sizzle == "function" && (U = function(e, t) {
		return Sizzle(e, t)[0] || null
	}, z = Sizzle, X = Sizzle.matchesSelector), e.selection = function() {
		return pt
	};
	var V = e.selection.prototype = [];
	V.select = function(e) {
		var t = [],
			n, r, i, s;
		e = $(e);
		for (var o = -1, u = this.length; ++o < u;) {
			t.push(n = []), n.parentNode = (i = this[o]).parentNode;
			for (var a = -1, f = i.length; ++a < f;)(s = i[a]) ? (n.push(r = e.call(s, s.__data__, a, o)), r && "__data__" in s && (r.__data__ = s.__data__)) : n.push(null)
		}
		return R(t)
	}, V.selectAll = function(e) {
		var t = [],
			r, i;
		e = J(e);
		for (var s = -1, o = this.length; ++s < o;)
			for (var u = this[s], a = -1, f = u.length; ++a < f;)
				if (i = u[a]) t.push(r = n(e.call(i, i.__data__, a, s))), r.parentNode = i;
		return R(t)
	};
	var K = {
		svg: "http://www.w3.org/2000/svg",
		xhtml: "http://www.w3.org/1999/xhtml",
		xlink: "http://www.w3.org/1999/xlink",
		xml: "http://www.w3.org/XML/1998/namespace",
		xmlns: "http://www.w3.org/2000/xmlns/"
	};
	e.ns = {
		prefix: K,
		qualify: function(e) {
			var t = e.indexOf(":"),
				n = e;
			return t >= 0 && (n = e.substring(0, t), e = e.substring(t + 1)), K.hasOwnProperty(n) ? {
				space: K[n],
				local: e
			} : e
		}
	}, V.attr = function(t, n) {
		if (arguments.length < 2) {
			if (typeof t == "string") {
				var r = this.node();
				return t = e.ns.qualify(t), t.local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t)
			}
			for (n in t) this.each(Q(n, t[n]));
			return this
		}
		return this.each(Q(t, n))
	}, V.classed = function(e, t) {
		if (arguments.length < 2) {
			if (typeof e == "string") {
				var n = this.node(),
					r = (e = Z(e)).length,
					i = -1;
				if (t = n.classList) {
					while (++i < r)
						if (!t.contains(e[i])) return !1
				} else {
					t = n.getAttribute("class");
					while (++i < r)
						if (!Y(e[i]).test(t)) return !1
				}
				return !0
			}
			for (t in e) this.each(et(t, e[t]));
			return this
		}
		return this.each(et(e, t))
	}, V.style = function(e, t, n) {
		var r = arguments.length;
		if (r < 3) {
			if (typeof e != "string") {
				r < 2 && (t = "");
				for (n in e) this.each(nt(n, e[n], t));
				return this
			}
			if (r < 2) return s.getComputedStyle(this.node(), null).getPropertyValue(e);
			n = ""
		}
		return this.each(nt(e, t, n))
	}, V.property = function(e, t) {
		if (arguments.length < 2) {
			if (typeof e == "string") return this.node()[e];
			for (t in e) this.each(rt(t, e[t]));
			return this
		}
		return this.each(rt(e, t))
	}, V.text = function(e) {
		return arguments.length ? this.each(typeof e == "function" ? function() {
			var t = e.apply(this, arguments);
			this.textContent = t == null ? "" : t
		} : e == null ? function() {
			this.textContent = ""
		} : function() {
			this.textContent = e
		}) : this.node().textContent
	}, V.html = function(e) {
		return arguments.length ? this.each(typeof e == "function" ? function() {
			var t = e.apply(this, arguments);
			this.innerHTML = t == null ? "" : t
		} : e == null ? function() {
			this.innerHTML = ""
		} : function() {
			this.innerHTML = e
		}) : this.node().innerHTML
	}, V.append = function(e) {
		return e = it(e), this.select(function() {
			return this.appendChild(e.apply(this, arguments))
		})
	}, V.insert = function(e, t) {
		return e = it(e), t = $(t), this.select(function() {
			return this.insertBefore(e.apply(this, arguments), t.apply(this, arguments) || null)
		})
	}, V.remove = function() {
		return this.each(function() {
			var e = this.parentNode;
			e && e.removeChild(this)
		})
	}, V.data = function(e, t) {
		function o(e, n) {
			var r, i = e.length,
				s = n.length,
				o = Math.min(i, s),
				l = new Array(s),
				c = new Array(s),
				h = new Array(i),
				p, d;
			if (t) {
				var v = new E,
					m = new E,
					g = [],
					y;
				for (r = -1; ++r < i;) y = t.call(p = e[r], p.__data__, r), v.has(y) ? h[r] = p : v.set(y, p), g.push(y);
				for (r = -1; ++r < s;) y = t.call(n, d = n[r], r), (p = v.get(y)) ? (l[r] = p, p.__data__ = d) : m.has(y) || (c[r] = st(d)), m.set(y, d), v.remove(y);
				for (r = -1; ++r < i;) v.has(g[r]) && (h[r] = e[r])
			} else {
				for (r = -1; ++r < o;) p = e[r], d = n[r], p ? (p.__data__ = d, l[r] = p) : c[r] = st(d);
				for (; r < s; ++r) c[r] = st(n[r]);
				for (; r < i; ++r) h[r] = e[r]
			}
			c.update = l, c.parentNode = l.parentNode = h.parentNode = e.parentNode, u.push(c), a.push(l), f.push(h)
		}
		var n = -1,
			r = this.length,
			i, s;
		if (!arguments.length) {
			e = new Array(r = (i = this[0]).length);
			while (++n < r)
				if (s = i[n]) e[n] = s.__data__;
			return e
		}
		var u = ft([]),
			a = R([]),
			f = R([]);
		if (typeof e == "function")
			while (++n < r) o(i = this[n], e.call(i, i.parentNode.__data__, n));
		else
			while (++n < r) o(i = this[n], e);
		return a.enter = function() {
			return u
		}, a.exit = function() {
			return f
		}, a
	}, V.datum = function(e) {
		return arguments.length ? this.property("__data__", e) : this.property("__data__")
	}, V.filter = function(e) {
		var t = [],
			n, r, i;
		typeof e != "function" && (e = ot(e));
		for (var s = 0, o = this.length; s < o; s++) {
			t.push(n = []), n.parentNode = (r = this[s]).parentNode;
			for (var u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i, i.__data__, u, s) && n.push(i)
		}
		return R(t)
	}, V.order = function() {
		for (var e = -1, t = this.length; ++e < t;)
			for (var n = this[e], r = n.length - 1, i = n[r], s; --r >= 0;)
				if (s = n[r]) i && i !== s.nextSibling && i.parentNode.insertBefore(s, i), i = s;
		return this
	}, V.sort = function(e) {
		e = ut.apply(this, arguments);
		for (var t = -1, n = this.length; ++t < n;) this[t].sort(e);
		return this.order()
	}, V.each = function(e) {
		return at(this, function(t, n, r) {
			e.call(t, t.__data__, n, r)
		})
	}, V.call = function(e) {
		var t = n(arguments);
		return e.apply(t[0] = this, t), this
	}, V.empty = function() {
		return !this.node()
	}, V.node = function() {
		for (var e = 0, t = this.length; e < t; e++)
			for (var n = this[e], r = 0, i = n.length; r < i; r++) {
				var s = n[r];
				if (s) return s
			}
		return null
	}, V.size = function() {
		var e = 0;
		return this.each(function() {
			++e
		}), e
	};
	var lt = [];
	e.selection.enter = ft, e.selection.enter.prototype = lt, lt.append = V.append, lt.empty = V.empty, lt.node = V.node, lt.call = V.call, lt.size = V.size, lt.select = function(e) {
		var t = [],
			n, r, i, s, o;
		for (var u = -1, a = this.length; ++u < a;) {
			i = (s = this[u]).update, t.push(n = []), n.parentNode = s.parentNode;
			for (var f = -1, l = s.length; ++f < l;)(o = s[f]) ? (n.push(i[f] = r = e.call(s.parentNode, o.__data__, f, u)), r.__data__ = o.__data__) : n.push(null)
		}
		return R(t)
	}, lt.insert = function(e, t) {
		return arguments.length < 2 && (t = ct(this)), V.insert.call(this, e, t)
	}, V.transition = function() {
		var e = xf || ++Sf,
			t = [],
			n, r, i = Tf || {
				time: Date.now(),
				ease: Bo,
				delay: 0,
				duration: 250
			};
		for (var s = -1, o = this.length; ++s < o;) {
			t.push(n = []);
			for (var u = this[s], a = -1, f = u.length; ++a < f;)(r = u[a]) && kf(r, a, e, i), n.push(r)
		}
		return wf(t, e)
	}, V.interrupt = function() {
		return this.each(ht)
	}, e.select = function(e) {
		var t = [typeof e == "string" ? U(e, r) : e];
		return t.parentNode = i, R([t])
	}, e.selectAll = function(e) {
		var t = n(typeof e == "string" ? z(e, r) : e);
		return t.parentNode = i, R([t])
	};
	var pt = e.select(i);
	V.on = function(e, t, n) {
		var r = arguments.length;
		if (r < 3) {
			if (typeof e != "string") {
				r < 2 && (t = !1);
				for (n in e) this.each(dt(n, e[n], t));
				return this
			}
			if (r < 2) return (r = this.node()["__on" + e]) && r._;
			n = !1
		}
		return this.each(dt(e, t, n))
	};
	var vt = e.map({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	});
	vt.forEach(function(e) {
		"on" + e in r && vt.remove(e)
	});
	var yt = "onselectstart" in r ? null : M(i.style, "userSelect"),
		bt = 0;
	e.mouse = function(e) {
		return Et(e, j())
	}, e.touches = function(e, t) {
		return arguments.length < 2 && (t = j().touches), t ? n(t).map(function(t) {
			var n = Et(e, t);
			return n.identifier = t.identifier, n
		}) : []
	}, e.behavior.drag = function() {
		function s() {
			this.on("mousedown.drag", r).on("touchstart.drag", i)
		}

		function o(r, i, s, o, u) {
			return function() {
				function b() {
					var e = i(l, p),
						t, n;
					if (!e) return;
					t = e[0] - y[0], n = e[1] - y[1], h |= t | n, y = e, c({
						type: "drag",
						x: e[0] + v[0],
						y: e[1] + v[1],
						dx: t,
						dy: n
					})
				}

				function w() {
					if (!i(l, p)) return;
					m.on(o + d, null).on(u + d, null), g(h && e.event.target === f), c({
						type: "dragend"
					})
				}
				var a = this,
					f = e.event.target,
					l = a.parentNode,
					c = t.of(a, arguments),
					h = 0,
					p = r(),
					d = ".drag" + (p == null ? "" : "-" + p),
					v, m = e.select(s()).on(o + d, b).on(u + d, w),
					g = wt(),
					y = i(l, p);
				n ? (v = n.apply(a, arguments), v = [v.x - y[0], v.y - y[1]]) : v = [0, 0], c({
					type: "dragstart"
				})
			}
		}
		var t = F(s, "drag", "dragstart", "dragend"),
			n = null,
			r = o(D, e.mouse, Tt, "mousemove", "mouseup"),
			i = o(St, e.touch, xt, "touchmove", "touchend");
		return s.origin = function(e) {
			return arguments.length ? (n = e, s) : n
		}, e.rebind(s, t, "on")
	};
	var Nt = Math.PI,
		Ct = 2 * Nt,
		kt = Nt / 2,
		Lt = 1e-6,
		At = Lt * Lt,
		Ot = Nt / 180,
		Mt = 180 / Nt,
		qt = Math.SQRT2,
		Rt = 2,
		Ut = 4;
	e.interpolateZoom = function(e, t) {
		function y(e) {
			var t = e * g;
			if (m) {
				var s = jt(d),
					o = i / (Rt * c) * (s * Ft(qt * t + d) - Bt(d));
				return [n + o * a, r + o * f, i * s / jt(qt * t + d)]
			}
			return [n + e * a, r + e * f, i * Math.exp(qt * t)]
		}
		var n = e[0],
			r = e[1],
			i = e[2],
			s = t[0],
			o = t[1],
			u = t[2],
			a = s - n,
			f = o - r,
			l = a * a + f * f,
			c = Math.sqrt(l),
			h = (u * u - i * i + Ut * l) / (2 * i * Rt * c),
			p = (u * u - i * i - Ut * l) / (2 * u * Rt * c),
			d = Math.log(Math.sqrt(h * h + 1) - h),
			v = Math.log(Math.sqrt(p * p + 1) - p),
			m = v - d,
			g = (m || Math.log(u / i)) / qt;
		return y.duration = g * 1e3, y
	}, e.behavior.zoom = function() {
		function y(e) {
			e.on(u, k).on(Xt + ".zoom", A).on(a, O).on("dblclick.zoom", M).on(c, L)
		}

		function b(e) {
			return [(e[0] - t.x) / t.k, (e[1] - t.y) / t.k]
		}

		function w(e) {
			return [e[0] * t.k + t.x, e[1] * t.k + t.y]
		}

		function E(e) {
			t.k = Math.max(o[0], Math.min(o[1], e))
		}

		function S(e, n) {
			n = w(n), t.x += e[0] - n[0], t.y += e[1] - n[1]
		}

		function x() {
			v && v.domain(d.range().map(function(e) {
				return (e - t.x) / t.k
			}).map(d.invert)), g && g.domain(m.range().map(function(e) {
				return (e - t.y) / t.k
			}).map(m.invert))
		}

		function T(e) {
			e({
				type: "zoomstart"
			})
		}

		function N(e) {
			x(), e({
				type: "zoom",
				scale: t.k,
				translate: [t.x, t.y]
			})
		}

		function C(e) {
			e({
				type: "zoomend"
			})
		}

		function k() {
			function c() {
				i = 1, S(e.mouse(t), u), N(r)
			}

			function h() {
				o.on(a, s === t ? O : null).on(f, null), l(i && e.event.target === n), C(r)
			}
			var t = this,
				n = e.event.target,
				r = p.of(t, arguments),
				i = 0,
				o = e.select(s).on(a, c).on(f, h),
				u = b(e.mouse(t)),
				l = wt();
			ht.call(t), T(r)
		}

		function L() {
			function g() {
				var r = e.touches(n);
				return o = t.k, r.forEach(function(e) {
					e.identifier in i && (i[e.identifier] = b(e))
				}), r
			}

			function y() {
				var n = e.event.target;
				e.select(n).on(f, w).on(l, x), d.push(n);
				var o = e.event.changedTouches;
				for (var u = 0, a = o.length; u < a; ++u) i[o[u].identifier] = null;
				var c = g(),
					p = Date.now();
				if (c.length === 1) {
					if (p - h < 500) {
						var v = c[0],
							m = i[v.identifier];
						E(t.k * 2), S(v, m), B(), N(r)
					}
					h = p
				} else if (c.length > 1) {
					var v = c[0],
						y = c[1],
						b = v[0] - y[0],
						T = v[1] - y[1];
					s = b * b + T * T
				}
			}

			function w() {
				var t = e.touches(n),
					u, a, f, l;
				for (var c = 0, p = t.length; c < p; ++c, l = null) {
					f = t[c];
					if (l = i[f.identifier]) {
						if (a) break;
						u = f, a = l
					}
				}
				if (l) {
					var d = (d = f[0] - u[0]) * d + (d = f[1] - u[1]) * d,
						v = s && Math.sqrt(d / s);
					u = [(u[0] + f[0]) / 2, (u[1] + f[1]) / 2], a = [(a[0] + l[0]) / 2, (a[1] + l[1]) / 2], E(v * o)
				}
				h = null, S(u, a), N(r)
			}

			function x() {
				if (e.event.touches.length) {
					var t = e.event.changedTouches;
					for (var n = 0, s = t.length; n < s; ++n) delete i[t[n].identifier];
					for (var o in i) return void g()
				}
				e.selectAll(d).on(a, null), v.on(u, k).on(c, L), m(), C(r)
			}
			var n = this,
				r = p.of(n, arguments),
				i = {},
				s = 0,
				o, a = ".zoom-" + e.event.changedTouches[0].identifier,
				f = "touchmove" + a,
				l = "touchend" + a,
				d = [],
				v = e.select(n).on(u, null).on(c, y),
				m = wt();
			ht.call(n), y(), T(r)
		}

		function A() {
			var i = p.of(this, arguments);
			l ? clearTimeout(l) : (ht.call(this), T(i)), l = setTimeout(function() {
				l = null, C(i)
			}, 50), B();
			var s = r || e.mouse(this);
			n || (n = b(s)), E(Math.pow(2, Wt() * .002) * t.k), S(s, n), N(i)
		}

		function O() {
			n = null
		}

		function M() {
			var n = p.of(this, arguments),
				r = e.mouse(this),
				i = b(r),
				s = Math.log(t.k) / Math.LN2;
			T(n), E(Math.pow(2, e.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), S(r, i), N(n), C(n)
		}
		var t = {
				x: 0,
				y: 0,
				k: 1
			},
			n, r, i = [960, 500],
			o = zt,
			u = "mousedown.zoom",
			a = "mousemove.zoom",
			f = "mouseup.zoom",
			l, c = "touchstart.zoom",
			h, p = F(y, "zoomstart", "zoom", "zoomend"),
			d, v, m, g;
		return y.event = function(n) {
			n.each(function() {
				var n = p.of(this, arguments),
					r = t;
				xf ? e.select(this).transition().each("start.zoom", function() {
					t = this.__chart__ || {
						x: 0,
						y: 0,
						k: 1
					}, T(n)
				}).tween("zoom:zoom", function() {
					var s = i[0],
						o = i[1],
						u = s / 2,
						a = o / 2,
						f = e.interpolateZoom([(u - t.x) / t.k, (a - t.y) / t.k, s / t.k], [(u - r.x) / r.k, (a - r.y) / r.k, s / r.k]);
					return function(e) {
						var r = f(e),
							i = s / r[2];
						this.__chart__ = t = {
							x: u - r[0] * i,
							y: a - r[1] * i,
							k: i
						}, N(n)
					}
				}).each("end.zoom", function() {
					C(n)
				}) : (this.__chart__ = t, T(n), N(n), C(n))
			})
		}, y.translate = function(e) {
			return arguments.length ? (t = {
				x: +e[0],
				y: +e[1],
				k: t.k
			}, x(), y) : [t.x, t.y]
		}, y.scale = function(e) {
			return arguments.length ? (t = {
				x: t.x,
				y: t.y,
				k: +e
			}, x(), y) : t.k
		}, y.scaleExtent = function(e) {
			return arguments.length ? (o = e == null ? zt : [+e[0], +e[1]], y) : o
		}, y.center = function(e) {
			return arguments.length ? (r = e && [+e[0], +e[1]], y) : r
		}, y.size = function(e) {
			return arguments.length ? (i = e && [+e[0], +e[1]], y) : i
		}, y.x = function(e) {
			return arguments.length ? (v = e, d = e.copy(), t = {
				x: 0,
				y: 0,
				k: 1
			}, y) : v
		}, y.y = function(e) {
			return arguments.length ? (g = e, m = e.copy(), t = {
				x: 0,
				y: 0,
				k: 1
			}, y) : g
		}, e.rebind(y, p, "on")
	};
	var zt = [0, Infinity],
		Wt, Xt = "onwheel" in r ? (Wt = function() {
			return -e.event.deltaY * (e.event.deltaMode ? 120 : 1)
		}, "wheel") : "onmousewheel" in r ? (Wt = function() {
			return e.event.wheelDelta
		}, "mousewheel") : (Wt = function() {
			return -e.event.detail
		}, "MozMousePixelScroll");
	Vt.prototype.toString = function() {
		return this.rgb() + ""
	}, e.hsl = function(e, t, n) {
		return arguments.length === 1 ? e instanceof Jt ? $t(e.h, e.s, e.l) : wn("" + e, En, $t) : $t(+e, +t, +n)
	};
	var Kt = Jt.prototype = new Vt;
	Kt.brighter = function(e) {
		return e = Math.pow(.7, arguments.length ? e : 1), $t(this.h, this.s, this.l / e)
	}, Kt.darker = function(e) {
		return e = Math.pow(.7, arguments.length ? e : 1), $t(this.h, this.s, e * this.l)
	}, Kt.rgb = function() {
		return Qt(this.h, this.s, this.l)
	}, e.hcl = function(t, n, r) {
		return arguments.length === 1 ? t instanceof Yt ? Gt(t.h, t.c, t.l) : t instanceof nn ? ln(t.l, t.a, t.b) : ln((t = Sn((t = e.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : Gt(+t, +n, +r)
	};
	var Zt = Yt.prototype = new Vt;
	Zt.brighter = function(e) {
		return Gt(this.h, this.c, Math.min(100, this.l + rn * (arguments.length ? e : 1)))
	}, Zt.darker = function(e) {
		return Gt(this.h, this.c, Math.max(0, this.l - rn * (arguments.length ? e : 1)))
	}, Zt.rgb = function() {
		return en(this.h, this.c, this.l).rgb()
	}, e.lab = function(t, n, r) {
		return arguments.length === 1 ? t instanceof nn ? tn(t.l, t.a, t.b) : t instanceof Yt ? en(t.l, t.c, t.h) : Sn((t = e.rgb(t)).r, t.g, t.b) : tn(+t, +n, +r)
	};
	var rn = 18,
		sn = .95047,
		on = 1,
		un = 1.08883,
		an = nn.prototype = new Vt;
	an.brighter = function(e) {
		return tn(Math.min(100, this.l + rn * (arguments.length ? e : 1)), this.a, this.b)
	}, an.darker = function(e) {
		return tn(Math.max(0, this.l - rn * (arguments.length ? e : 1)), this.a, this.b)
	}, an.rgb = function() {
		return fn(this.l, this.a, this.b)
	}, e.rgb = function(e, t, n) {
		return arguments.length === 1 ? e instanceof gn ? mn(e.r, e.g, e.b) : wn("" + e, mn, Qt) : mn(~~e, ~~t, ~~n)
	};
	var yn = gn.prototype = new Vt;
	yn.brighter = function(e) {
		e = Math.pow(.7, arguments.length ? e : 1);
		var t = this.r,
			n = this.g,
			r = this.b,
			i = 30;
		return !t && !n && !r ? mn(i, i, i) : (t && t < i && (t = i), n && n < i && (n = i), r && r < i && (r = i), mn(Math.min(255, ~~(t / e)), Math.min(255, ~~(n / e)), Math.min(255, ~~(r / e))))
	}, yn.darker = function(e) {
		return e = Math.pow(.7, arguments.length ? e : 1), mn(~~(e * this.r), ~~(e * this.g), ~~(e * this.b))
	}, yn.hsl = function() {
		return En(this.r, this.g, this.b)
	}, yn.toString = function() {
		return "#" + bn(this.r) + bn(this.g) + bn(this.b)
	};
	var Nn = e.map({
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65125,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16771288,
		crimson: 14423100,
		cyan: 65125,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 11208410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699129,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4911230,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393232,
		lightcoral: 15761126,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833712,
		lightslategrey: 7833712,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64132,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16712920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 63207,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	});
	Nn.forEach(function(e, t) {
		Nn.set(e, dn(t))
	}), e.functor = Cn, e.xhr = Ln(kn), e.dsv = function(e, t) {
		function i(e, n, r) {
			arguments.length < 3 && (r = n, n = null);
			var i = An(e, t, n == null ? s : o(n), r);
			return i.row = function(e) {
				return arguments.length ? i.response((n = e) == null ? s : o(e)) : n
			}, i
		}

		function s(e) {
			return i.parse(e.responseText)
		}

		function o(e) {
			return function(t) {
				return i.parse(t.responseText, e)
			}
		}

		function u(t) {
			return t.map(a).join(e)
		}

		function a(e) {
			return n.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e
		}
		var n = new RegExp('["' + e + "\n]"),
			r = e.charCodeAt(0);
		return i.parse = function(e, t) {
			var n;
			return i.parseRows(e, function(e, r) {
				if (n) return n(e, r - 1);
				var i = new Function("d", "return {" + e.map(function(e, t) {
					return JSON.stringify(e) + ": d[" + t + "]"
				}).join(",") + "}");
				n = t ? function(e, n) {
					return t(i(e), n)
				} : i
			})
		}, i.parseRows = function(e, t) {
			function c() {
				if (u >= o) return i;
				if (l) return l = !1, n;
				var t = u;
				if (e.charCodeAt(t) === 34) {
					var s = t;
					while (s++ < o)
						if (e.charCodeAt(s) === 34) {
							if (e.charCodeAt(s + 1) !== 34) break;
							++s
						}
					u = s + 2;
					var a = e.charCodeAt(s + 1);
					return a === 13 ? (l = !0, e.charCodeAt(s + 2) === 10 && ++u) : a === 10 && (l = !0), e.substring(t + 1, s).replace(/""/g, '"')
				}
				while (u < o) {
					var a = e.charCodeAt(u++),
						f = 1;
					if (a === 10) l = !0;
					else if (a === 13) l = !0, e.charCodeAt(u) === 10 && (++u, ++f);
					else if (a !== r) continue;
					return e.substring(t, u - f)
				}
				return e.substring(t)
			}
			var n = {},
				i = {},
				s = [],
				o = e.length,
				u = 0,
				a = 0,
				f, l;
			while ((f = c()) !== i) {
				var h = [];
				while (f !== n && f !== i) h.push(f), f = c();
				if (t && !(h = t(h, a++))) continue;
				s.push(h)
			}
			return s
		}, i.format = function(t) {
			if (Array.isArray(t[0])) return i.formatRows(t);
			var n = new A,
				r = [];
			return t.forEach(function(e) {
				for (var t in e) n.has(t) || r.push(n.add(t))
			}), [r.map(a).join(e)].concat(t.map(function(t) {
				return r.map(function(e) {
					return a(t[e])
				}).join(e)
			})).join("\n")
		}, i.formatRows = function(e) {
			return e.map(u).join("\n")
		}, i
	}, e.csv = e.dsv(",", "text/csv"), e.tsv = e.dsv("	", "text/tab-separated-values"), e.touch = function(e, t, n) {
		arguments.length < 3 && (n = t, t = j().changedTouches);
		if (t)
			for (var r = 0, i = t.length, s; r < i; ++r)
				if ((s = t[r]).identifier === n) return Et(e, s)
	};
	var Mn, _n, Dn, Pn, Hn, Bn = s[M(s, "requestAnimationFrame")] || function(e) {
		setTimeout(e, 17)
	};
	e.timer = function(e, t, n) {
		var r = arguments.length;
		r < 2 && (t = 0), r < 3 && (n = Date.now());
		var i = n + t,
			s = {
				c: e,
				t: i,
				f: !1,
				n: null
			};
		_n ? _n.n = s : Mn = s, _n = s, Dn || (Pn = clearTimeout(Pn), Dn = 1, Bn(jn))
	}, e.timer.flush = function() {
		Fn(), In()
	}, e.round = function(e, t) {
		return t ? Math.round(e * (t = Math.pow(10, t))) / t : Math.round(e)
	};
	var Rn = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Un);
	e.formatPrefix = function(t, n) {
		var r = 0;
		return t && (t < 0 && (t *= -1), n && (t = e.round(t, qn(t, n))), r = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), r = Math.max(-24, Math.min(24, Math.floor((r - 1) / 3) * 3))), Rn[8 + r / 3]
	};
	var Wn = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
		Xn = e.map({
			b: function(e) {
				return e.toString(2)
			},
			c: function(e) {
				return String.fromCharCode(e)
			},
			o: function(e) {
				return e.toString(8)
			},
			x: function(e) {
				return e.toString(16)
			},
			X: function(e) {
				return e.toString(16).toUpperCase()
			},
			g: function(e, t) {
				return e.toPrecision(t)
			},
			e: function(e, t) {
				return e.toExponential(t)
			},
			f: function(e, t) {
				return e.toFixed(t)
			},
			r: function(t, n) {
				return (t = e.round(t, qn(t, n))).toFixed(Math.max(0, Math.min(20, qn(t * (1 + 1e-15), n))))
			}
		}),
		$n = e.time = {},
		Jn = Date;
	Kn.prototype = {
		getDate: function() {
			return this._.getUTCDate()
		},
		getDay: function() {
			return this._.getUTCDay()
		},
		getFullYear: function() {
			return this._.getUTCFullYear()
		},
		getHours: function() {
			return this._.getUTCHours()
		},
		getMilliseconds: function() {
			return this._.getUTCMilliseconds()
		},
		getMinutes: function() {
			return this._.getUTCMinutes()
		},
		getMonth: function() {
			return this._.getUTCMonth()
		},
		getSeconds: function() {
			return this._.getUTCSeconds()
		},
		getTime: function() {
			return this._.getTime()
		},
		getTimezoneOffset: function() {
			return 0
		},
		valueOf: function() {
			return this._.valueOf()
		},
		setDate: function() {
			Qn.setUTCDate.apply(this._, arguments)
		},
		setDay: function() {
			Qn.setUTCDay.apply(this._, arguments)
		},
		setFullYear: function() {
			Qn.setUTCFullYear.apply(this._, arguments)
		},
		setHours: function() {
			Qn.setUTCHours.apply(this._, arguments)
		},
		setMilliseconds: function() {
			Qn.setUTCMilliseconds.apply(this._, arguments)
		},
		setMinutes: function() {
			Qn.setUTCMinutes.apply(this._, arguments)
		},
		setMonth: function() {
			Qn.setUTCMonth.apply(this._, arguments)
		},
		setSeconds: function() {
			Qn.setUTCSeconds.apply(this._, arguments)
		},
		setTime: function() {
			Qn.setTime.apply(this._, arguments)
		}
	};
	var Qn = Date.prototype;
	$n.year = Gn(function(e) {
		return e = $n.day(e), e.setMonth(0, 1), e
	}, function(e, t) {
		e.setFullYear(e.getFullYear() + t)
	}, function(e) {
		return e.getFullYear()
	}), $n.years = $n.year.range, $n.years.utc = $n.year.utc.range, $n.day = Gn(function(e) {
		var t = new Jn(2e3, 0);
		return t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), t
	}, function(e, t) {
		e.setDate(e.getDate() + t)
	}, function(e) {
		return e.getDate() - 1
	}), $n.days = $n.day.range, $n.days.utc = $n.day.utc.range, $n.dayOfYear = function(e) {
		var t = $n.year(e);
		return Math.floor((e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5)
	}, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(e, t) {
		t = 7 - t;
		var n = $n[e] = Gn(function(e) {
			return (e = $n.day(e)).setDate(e.getDate() - (e.getDay() + t) % 7), e
		}, function(e, t) {
			e.setDate(e.getDate() + Math.floor(t) * 7)
		}, function(e) {
			var n = $n.year(e).getDay();
			return Math.floor(($n.dayOfYear(e) + (n + t) % 7) / 7) - (n !== t)
		});
		$n[e + "s"] = n.range, $n[e + "s"].utc = n.utc.range, $n[e + "OfYear"] = function(e) {
			var n = $n.year(e).getDay();
			return Math.floor(($n.dayOfYear(e) + (n + t) % 7) / 7)
		}
	}), $n.week = $n.sunday, $n.weeks = $n.sunday.range, $n.weeks.utc = $n.sunday.utc.range, $n.weekOfYear = $n.sundayOfYear;
	var er = {
			"-": "",
			_: " ",
			0: "0"
		},
		tr = /^\s*\d+/,
		nr = /^%/;
	e.locale = function(e) {
		return {
			numberFormat: zn(e),
			timeFormat: Zn(e)
		}
	};
	var xr = e.locale({
		decimal: ".",
		thousands: ",",
		grouping: [3],
		currency: ["$", ""],
		dateTime: "%a %b %e %X %Y",
		date: "%m/%d/%Y",
		time: "%H:%M:%S",
		periods: ["AM", "PM"],
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});
	e.format = xr.numberFormat, e.geo = {}, Tr.prototype = {
		s: 0,
		t: 0,
		add: function(e) {
			Cr(e, this.t, Nr), Cr(Nr.s, this.s, this), this.s ? this.t += Nr.t : this.s = Nr.t
		},
		reset: function() {
			this.s = this.t = 0
		},
		valueOf: function() {
			return this.s
		}
	};
	var Nr = new Tr;
	e.geo.stream = function(e, t) {
		e && Lr.hasOwnProperty(e.type) ? Lr[e.type](e, t) : kr(e, t)
	};
	var Lr = {
			Feature: function(e, t) {
				kr(e.geometry, t)
			},
			FeatureCollection: function(e, t) {
				var n = e.features,
					r = -1,
					i = n.length;
				while (++r < i) kr(n[r].geometry, t)
			}
		},
		Ar = {
			Sphere: function(e, t) {
				t.sphere()
			},
			Point: function(e, t) {
				e = e.coordinates, t.point(e[0], e[1], e[2])
			},
			MultiPoint: function(e, t) {
				var n = e.coordinates,
					r = -1,
					i = n.length;
				while (++r < i) e = n[r], t.point(e[0], e[1], e[2])
			},
			LineString: function(e, t) {
				Or(e.coordinates, t, 0)
			},
			MultiLineString: function(e, t) {
				var n = e.coordinates,
					r = -1,
					i = n.length;
				while (++r < i) Or(n[r], t, 0)
			},
			Polygon: function(e, t) {
				Mr(e.coordinates, t)
			},
			MultiPolygon: function(e, t) {
				var n = e.coordinates,
					r = -1,
					i = n.length;
				while (++r < i) Mr(n[r], t)
			},
			GeometryCollection: function(e, t) {
				var n = e.geometries,
					r = -1,
					i = n.length;
				while (++r < i) kr(n[r], t)
			}
		};
	e.geo.area = function(t) {
		return _r = 0, e.geo.stream(t, Pr), _r
	};
	var _r, Dr = new Tr,
		Pr = {
			sphere: function() {
				_r += 4 * Nt
			},
			point: D,
			lineStart: D,
			lineEnd: D,
			polygonStart: function() {
				Dr.reset(), Pr.lineStart = Hr
			},
			polygonEnd: function() {
				var e = 2 * Dr;
				_r += e < 0 ? 4 * Nt + e : e, Pr.lineStart = Pr.lineEnd = Pr.point = D
			}
		};
	e.geo.bounds = function() {
		function p(e, s) {
			l.push(c = [t = e, r = e]), s < n && (n = s), s > i && (i = s)
		}

		function d(e, o) {
			var u = Br([e * Ot, o * Ot]);
			if (a) {
				var f = Fr(a, u),
					l = [f[1], -f[0], 0],
					c = Fr(l, f);
				Rr(c), c = Ur(c);
				var h = e - s,
					d = h > 0 ? 1 : -1,
					v = c[0] * Mt * d,
					m = y(h) > 180;
				if (m ^ (d * s < v && v < d * e)) {
					var g = c[1] * Mt;
					g > i && (i = g)
				} else if (v = (v + 360) % 360 - 180, m ^ (d * s < v && v < d * e)) {
					var g = -c[1] * Mt;
					g < n && (n = g)
				} else o < n && (n = o), o > i && (i = o);
				m ? e < s ? E(t, e) > E(t, r) && (r = e) : E(e, r) > E(t, r) && (t = e) : r >= t ? (e < t && (t = e), e > r && (r = e)) : e > s ? E(t, e) > E(t, r) && (r = e) : E(e, r) > E(t, r) && (t = e)
			} else p(e, o);
			a = u, s = e
		}

		function v() {
			h.point = d
		}

		function m() {
			c[0] = t, c[1] = r, h.point = p, a = null
		}

		function g(e, t) {
			if (a) {
				var n = e - s;
				f += y(n) > 180 ? n + (n > 0 ? 360 : -360) : n
			} else o = e, u = t;
			Pr.point(e, t), d(e, t)
		}

		function b() {
			Pr.lineStart()
		}

		function w() {
			g(o, u), Pr.lineEnd(), y(f) > Lt && (t = -(r = 180)), c[0] = t, c[1] = r, a = null
		}

		function E(e, t) {
			return (t -= e) < 0 ? t + 360 : t
		}

		function S(e, t) {
			return e[0] - t[0]
		}

		function x(e, t) {
			return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e
		}
		var t, n, r, i, s, o, u, a, f, l, c, h = {
			point: p,
			lineStart: v,
			lineEnd: m,
			polygonStart: function() {
				h.point = g, h.lineStart = b, h.lineEnd = w, f = 0, Pr.polygonStart()
			},
			polygonEnd: function() {
				Pr.polygonEnd(), h.point = p, h.lineStart = v, h.lineEnd = m, Dr < 0 ? (t = -(r = 180), n = -(i = 90)) : f > Lt ? i = 90 : f < -Lt && (n = -90), c[0] = t, c[1] = r
			}
		};
		return function(s) {
			i = r = -(t = n = Infinity), l = [], e.geo.stream(s, h);
			var o = l.length;
			if (o) {
				l.sort(S);
				for (var u = 1, a = l[0], f, p = [a]; u < o; ++u) f = l[u], x(f[0], a) || x(f[1], a) ? (E(a[0], f[1]) > E(a[0], a[1]) && (a[1] = f[1]), E(f[0], a[1]) > E(a[0], a[1]) && (a[0] = f[0])) : p.push(a = f);
				var d = -Infinity,
					v;
				for (var o = p.length - 1, u = 0, a = p[o], f; u <= o; a = f, ++u) f = p[u], (v = E(a[1], f[0])) > d && (d = v, t = f[0], r = a[1])
			}
			return l = c = null, t === Infinity || n === Infinity ? [
				[NaN, NaN],
				[NaN, NaN]
			] : [
				[t, n],
				[r, i]
			]
		}
	}(), e.geo.centroid = function(t) {
		Wr = Xr = Vr = $r = Jr = Kr = Qr = Gr = Yr = Zr = ei = 0, e.geo.stream(t, ti);
		var n = Yr,
			r = Zr,
			i = ei,
			s = n * n + r * r + i * i;
		if (s < At) {
			n = Kr, r = Qr, i = Gr, Xr < Lt && (n = Vr, r = $r, i = Jr), s = n * n + r * r + i * i;
			if (s < At) return [NaN, NaN]
		}
		return [Math.atan2(r, n) * Mt, Ht(i / Math.sqrt(s)) * Mt]
	};
	var Wr, Xr, Vr, $r, Jr, Kr, Qr, Gr, Yr, Zr, ei, ti = {
			sphere: D,
			point: ni,
			lineStart: ii,
			lineEnd: si,
			polygonStart: function() {
				ti.lineStart = oi
			},
			polygonEnd: function() {
				ti.lineStart = ii
			}
		},
		mi = ci(ui, gi, bi, [-Nt, -Nt / 2]),
		Si = 1e9;
	e.geo.clipExtent = function() {
		var e, t, n, r, i, s, o = {
			stream: function(e) {
				return i && (i.valid = !1), i = s(e), i.valid = !0, i
			},
			extent: function(u) {
				return arguments.length ? (s = xi(e = +u[0][0], t = +u[0][1], n = +u[1][0], r = +u[1][1]), i && (i.valid = !1, i = null), o) : [
					[e, t],
					[n, r]
				]
			}
		};
		return o.extent([
			[0, 0],
			[960, 500]
		])
	}, (e.geo.conicEqualArea = function() {
		return Ni(Ci)
	}).raw = Ci, e.geo.albers = function() {
		return e.geo.conicEqualArea().rotate([96, 0]).center([-0.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
	}, e.geo.albersUsa = function() {
		function f(e) {
			var t = e[0],
				n = e[1];
			return i = null, (o(t, n), i) || (u(t, n), i) || a(t, n), i
		}
		var t = e.geo.albers(),
			n = e.geo.conicEqualArea().rotate([132, 0]).center([-2, 58.5]).parallels([55, 65]),
			r = e.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
			i, s = {
				point: function(e, t) {
					i = [e, t]
				}
			},
			o, u, a;
		return f.invert = function(e) {
			var i = t.scale(),
				s = t.translate(),
				o = (e[0] - s[0]) / i,
				u = (e[1] - s[1]) / i;
			return (u >= .12 && u < .234 && o >= -0.425 && o < -0.214 ? n : u >= .166 && u < .234 && o >= -0.214 && o < -0.115 ? r : t).invert(e)
		}, f.stream = function(e) {
			var i = t.stream(e),
				s = n.stream(e),
				o = r.stream(e);
			return {
				point: function(e, t) {
					i.point(e, t), s.point(e, t), o.point(e, t)
				},
				sphere: function() {
					i.sphere(), s.sphere(), o.sphere()
				},
				lineStart: function() {
					i.lineStart(), s.lineStart(), o.lineStart()
				},
				lineEnd: function() {
					i.lineEnd(), s.lineEnd(), o.lineEnd()
				},
				polygonStart: function() {
					i.polygonStart(), s.polygonStart(), o.polygonStart()
				},
				polygonEnd: function() {
					i.polygonEnd(), s.polygonEnd(), o.polygonEnd()
				}
			}
		}, f.precision = function(e) {
			return arguments.length ? (t.precision(e), n.precision(e), r.precision(e), f) : t.precision()
		}, f.scale = function(e) {
			return arguments.length ? (t.scale(e), n.scale(e * .35), r.scale(e), f.translate(t.translate())) : t.scale()
		}, f.translate = function(e) {
			if (!arguments.length) return t.translate();
			var i = t.scale(),
				l = +e[0],
				c = +e[1];
			return o = t.translate(e).clipExtent([
				[l - .455 * i, c - .238 * i],
				[l + .455 * i, c + .238 * i]
			]).stream(s).point, u = n.translate([l - .307 * i, c + .201 * i]).clipExtent([
				[l - .425 * i + Lt, c + .12 * i + Lt],
				[l - .214 * i - Lt, c + .234 * i - Lt]
			]).stream(s).point, a = r.translate([l - .205 * i, c + .212 * i]).clipExtent([
				[l - .214 * i + Lt, c + .166 * i + Lt],
				[l - .115 * i - Lt, c + .234 * i - Lt]
			]).stream(s).point, f
		}, f.scale(1070)
	};
	var ki, Li, Ai = {
			point: D,
			lineStart: D,
			lineEnd: D,
			polygonStart: function() {
				Li = 0, Ai.lineStart = Oi
			},
			polygonEnd: function() {
				Ai.lineStart = Ai.lineEnd = Ai.point = D, ki += y(Li / 2)
			}
		},
		Mi, _i, Di, Pi, Hi = {
			point: Bi,
			lineStart: D,
			lineEnd: D,
			polygonStart: D,
			polygonEnd: D
		},
		Ii = {
			point: qi,
			lineStart: Ri,
			lineEnd: Ui,
			polygonStart: function() {
				Ii.lineStart = zi
			},
			polygonEnd: function() {
				Ii.point = qi, Ii.lineStart = Ri, Ii.lineEnd = Ui
			}
		};
	e.geo.path = function() {
		function u(n) {
			if (n) {
				typeof t == "function" && s.pointRadius(+t.apply(this, arguments));
				if (!o || !o.valid) o = i(s);
				e.geo.stream(n, o)
			}
			return s.result()
		}

		function a() {
			return o = null, u
		}
		var t = 4.5,
			n, r, i, s, o;
		return u.area = function(t) {
			return ki = 0, e.geo.stream(t, i(Ai)), ki
		}, u.centroid = function(t) {
			return Vr = $r = Jr = Kr = Qr = Gr = Yr = Zr = ei = 0, e.geo.stream(t, i(Ii)), ei ? [Yr / ei, Zr / ei] : Gr ? [Kr / Gr, Qr / Gr] : Jr ? [Vr / Jr, $r / Jr] : [NaN, NaN]
		}, u.bounds = function(t) {
			return Di = Pi = -(Mi = _i = Infinity), e.geo.stream(t, i(Hi)), [
				[Mi, _i],
				[Di, Pi]
			]
		}, u.projection = function(e) {
			return arguments.length ? (i = (n = e) ? e.stream || Vi(e) : kn, a()) : n
		}, u.context = function(e) {
			return arguments.length ? (s = (r = e) == null ? new ji : new Wi(e), typeof t != "function" && s.pointRadius(t), a()) : r
		}, u.pointRadius = function(e) {
			return arguments.length ? (t = typeof e == "function" ? e : (s.pointRadius(+e), +e), u) : t
		}, u.projection(e.geo.albersUsa()).context(null)
	}, e.geo.transform = function(e) {
		return {
			stream: function(t) {
				var n = new $i(t);
				for (var r in e) n[r] = e[r];
				return n
			}
		}
	}, $i.prototype = {
		point: function(e, t) {
			this.stream.point(e, t)
		},
		sphere: function() {
			this.stream.sphere()
		},
		lineStart: function() {
			this.stream.lineStart()
		},
		lineEnd: function() {
			this.stream.lineEnd()
		},
		polygonStart: function() {
			this.stream.polygonStart()
		},
		polygonEnd: function() {
			this.stream.polygonEnd()
		}
	}, e.geo.projection = Ki, e.geo.projectionMutator = Qi, (e.geo.equirectangular = function() {
		return Ki(Yi)
	}).raw = Yi.invert = Yi, e.geo.rotation = function(e) {
		function t(t) {
			return t = e(t[0] * Ot, t[1] * Ot), t[0] *= Mt, t[1] *= Mt, t
		}
		return e = es(e[0] % 360 * Ot, e[1] * Ot, e.length > 2 ? e[2] * Ot : 0), t.invert = function(t) {
			return t = e.invert(t[0] * Ot, t[1] * Ot), t[0] *= Mt, t[1] *= Mt, t
		}, t
	}, Zi.invert = Yi, e.geo.circle = function() {
		function i() {
			var t = typeof e == "function" ? e.apply(this, arguments) : e,
				n = es(-t[0] * Ot, -t[1] * Ot, 0).invert,
				i = [];
			return r(null, null, 1, {
				point: function(e, t) {
					i.push(e = n(e, t)), e[0] *= Mt, e[1] *= Mt
				}
			}), {
				type: "Polygon",
				coordinates: [i]
			}
		}
		var e = [0, 0],
			t, n = 6,
			r;
		return i.origin = function(t) {
			return arguments.length ? (e = t, i) : e
		}, i.angle = function(e) {
			return arguments.length ? (r = is((t = +e) * Ot, n * Ot), i) : t
		}, i.precision = function(e) {
			return arguments.length ? (r = is(t * Ot, (n = +e) * Ot), i) : n
		}, i.angle(90)
	}, e.geo.distance = function(e, t) {
		var n = (t[0] - e[0]) * Ot,
			r = e[1] * Ot,
			i = t[1] * Ot,
			s = Math.sin(n),
			o = Math.cos(n),
			u = Math.sin(r),
			a = Math.cos(r),
			f = Math.sin(i),
			l = Math.cos(i),
			c;
		return Math.atan2(Math.sqrt((c = l * s) * c + (c = a * f - u * l * o) * c), u * f + a * l * o)
	}, e.geo.graticule = function() {
		function b() {
			return {
				type: "MultiLineString",
				coordinates: w()
			}
		}

		function w() {
			return e.range(Math.ceil(i / c) * c, r, c).map(v).concat(e.range(Math.ceil(a / h) * h, u, h).map(m)).concat(e.range(Math.ceil(n / f) * f, t, f).filter(function(e) {
				return y(e % c) > Lt
			}).map(p)).concat(e.range(Math.ceil(o / l) * l, s, l).filter(function(e) {
				return y(e % h) > Lt
			}).map(d))
		}
		var t, n, r, i, s, o, u, a, f = 10,
			l = f,
			c = 90,
			h = 360,
			p, d, v, m, g = 2.5;
		return b.lines = function() {
			return w().map(function(e) {
				return {
					type: "LineString",
					coordinates: e
				}
			})
		}, b.outline = function() {
			return {
				type: "Polygon",
				coordinates: [v(i).concat(m(u).slice(1), v(r).reverse().slice(1), m(a).reverse().slice(1))]
			}
		}, b.extent = function(e) {
			return arguments.length ? b.majorExtent(e).minorExtent(e) : b.minorExtent()
		}, b.majorExtent = function(e) {
			return arguments.length ? (i = +e[0][0], r = +e[1][0], a = +e[0][1], u = +e[1][1], i > r && (e = i, i = r, r = e), a > u && (e = a, a = u, u = e), b.precision(g)) : [
				[i, a],
				[r, u]
			]
		}, b.minorExtent = function(e) {
			return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], s = +e[1][1], n > t && (e = n, n = t, t = e), o > s && (e = o, o = s, s = e), b.precision(g)) : [
				[n, o],
				[t, s]
			]
		}, b.step = function(e) {
			return arguments.length ? b.majorStep(e).minorStep(e) : b.minorStep()
		}, b.majorStep = function(e) {
			return arguments.length ? (c = +e[0], h = +e[1], b) : [c, h]
		}, b.minorStep = function(e) {
			return arguments.length ? (f = +e[0], l = +e[1], b) : [f, l]
		}, b.precision = function(e) {
			return arguments.length ? (g = +e, p = os(o, s, 90), d = us(n, t, g), v = os(a, u, 90), m = us(i, r, g), b) : g
		}, b.majorExtent([
			[-180, -90 + Lt],
			[180, 90 - Lt]
		]).minorExtent([
			[-180, -80 - Lt],
			[180, 80 + Lt]
		])
	}, e.geo.greatArc = function() {
		function s() {
			return {
				type: "LineString",
				coordinates: [n || t.apply(this, arguments), i || r.apply(this, arguments)]
			}
		}
		var t = as,
			n, r = fs,
			i;
		return s.distance = function() {
			return e.geo.distance(n || t.apply(this, arguments), i || r.apply(this, arguments))
		}, s.source = function(e) {
			return arguments.length ? (t = e, n = typeof e == "function" ? null : e, s) : t
		}, s.target = function(e) {
			return arguments.length ? (r = e, i = typeof e == "function" ? null : e, s) : r
		}, s.precision = function() {
			return arguments.length ? s : 0
		}, s
	}, e.geo.interpolate = function(e, t) {
		return ls(e[0] * Ot, e[1] * Ot, t[0] * Ot, t[1] * Ot)
	}, e.geo.length = function(t) {
		return cs = 0, e.geo.stream(t, hs), cs
	};
	var cs, hs = {
			sphere: D,
			point: D,
			lineStart: ps,
			lineEnd: D,
			polygonStart: D,
			polygonEnd: D
		},
		vs = ds(function(e) {
			return Math.sqrt(2 / (1 + e))
		}, function(e) {
			return 2 * Math.asin(e / 2)
		});
	(e.geo.azimuthalEqualArea = function() {
		return Ki(vs)
	}).raw = vs;
	var ms = ds(function(e) {
		var t = Math.acos(e);
		return t && t / Math.sin(t)
	}, kn);
	(e.geo.azimuthalEquidistant = function() {
		return Ki(ms)
	}).raw = ms, (e.geo.conicConformal = function() {
		return Ni(gs)
	}).raw = gs, (e.geo.conicEquidistant = function() {
		return Ni(ys)
	}).raw = ys;
	var bs = ds(function(e) {
		return 1 / e
	}, Math.atan);
	(e.geo.gnomonic = function() {
		return Ki(bs)
	}).raw = bs, ws.invert = function(e, t) {
		return [e, 2 * Math.atan(Math.exp(t)) - kt]
	}, (e.geo.mercator = function() {
		return Es(ws)
	}).raw = ws;
	var Ss = ds(function() {
		return 1
	}, Math.asin);
	(e.geo.orthographic = function() {
		return Ki(Ss)
	}).raw = Ss;
	var xs = ds(function(e) {
		return 1 / (1 + e)
	}, function(e) {
		return 2 * Math.atan(e)
	});
	(e.geo.stereographic = function() {
		return Ki(xs)
	}).raw = xs, Ts.invert = function(e, t) {
		return [-t, 2 * Math.atan(Math.exp(e)) - kt]
	}, (e.geo.transverseMercator = function() {
		var e = Es(Ts),
			t = e.center,
			n = e.rotate;
		return e.center = function(e) {
			return e ? t([-e[1], e[0]]) : (e = t(), [-e[1], e[0]])
		}, e.rotate = function(e) {
			return e ? n([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : (e = n(), [e[0], e[1], e[2] - 90])
		}, e.rotate([0, 0])
	}).raw = Ts, e.geom = {}, e.geom.hull = function(e) {
		function r(e) {
			if (e.length < 3) return [];
			var r = Cn(t),
				i = Cn(n),
				s, o = e.length,
				u = [],
				a = [];
			for (s = 0; s < o; s++) u.push([+r.call(this, e[s], s), +i.call(this, e[s], s), s]);
			u.sort(Ls);
			for (s = 0; s < o; s++) a.push([u[s][0], -u[s][1]]);
			var f = ks(u),
				l = ks(a),
				c = l[0] === f[0],
				h = l[l.length - 1] === f[f.length - 1],
				p = [];
			for (s = f.length - 1; s >= 0; --s) p.push(e[u[f[s]][2]]);
			for (s = +c; s < l.length - h; ++s) p.push(e[u[l[s]][2]]);
			return p
		}
		var t = Ns,
			n = Cs;
		return arguments.length ? r(e) : (r.x = function(e) {
			return arguments.length ? (t = e, r) : t
		}, r.y = function(e) {
			return arguments.length ? (n = e, r) : n
		}, r)
	}, e.geom.polygon = function(e) {
		return q(e, As), e
	};
	var As = e.geom.polygon.prototype = [];
	As.area = function() {
		var e = -1,
			t = this.length,
			n, r = this[t - 1],
			i = 0;
		while (++e < t) n = r, r = this[e], i += n[1] * r[0] - n[0] * r[1];
		return i * .5
	}, As.centroid = function(e) {
		var t = -1,
			n = this.length,
			r = 0,
			i = 0,
			s, o = this[n - 1],
			u;
		arguments.length || (e = -1 / (6 * this.area()));
		while (++t < n) s = o, o = this[t], u = s[0] * o[1] - o[0] * s[1], r += (s[0] + o[0]) * u, i += (s[1] + o[1]) * u;
		return [r * e, i * e]
	}, As.clip = function(e) {
		var t, n = _s(e),
			r = -1,
			i = this.length - _s(this),
			s, o, u = this[i - 1],
			a, f, l;
		while (++r < i) {
			t = e.slice(), e.length = 0, a = this[r], f = t[(o = t.length - n) - 1], s = -1;
			while (++s < o) l = t[s], Os(l, u, a) ? (Os(f, u, a) || e.push(Ms(f, l, u, a)), e.push(l)) : Os(f, u, a) && e.push(Ms(f, l, u, a)), f = l;
			n && e.push(e[0]), u = a
		}
		return e
	};
	var Ds, Ps, Hs, Bs = [],
		js, Fs, Is = [];
	$s.prototype.prepare = function() {
		var e = this.edges,
			t = e.length,
			n;
		while (t--) n = e[t].edge, (!n.b || !n.a) && e.splice(t, 1);
		return e.sort(Ks), e.length
	}, so.prototype = {
		start: function() {
			return this.edge.l === this.site ? this.edge.a : this.edge.b
		},
		end: function() {
			return this.edge.l === this.site ? this.edge.b : this.edge.a
		}
	}, oo.prototype = {
		insert: function(e, t) {
			var n, r, i;
			if (e) {
				t.P = e, t.N = e.N, e.N && (e.N.P = t), e.N = t;
				if (e.R) {
					e = e.R;
					while (e.L) e = e.L;
					e.L = t
				} else e.R = t;
				n = e
			} else this._ ? (e = lo(this._), t.P = null, t.N = e, e.P = e.L = t, n = e) : (t.P = t.N = null, this._ = t, n = null);
			t.L = t.R = null, t.U = n, t.C = !0, e = t;
			while (n && n.C) r = n.U, n === r.L ? (i = r.R, i && i.C ? (n.C = i.C = !1, r.C = !0, e = r) : (e === n.R && (ao(this, n), e = n, n = e.U), n.C = !1, r.C = !0, fo(this, r))) : (i = r.L, i && i.C ? (n.C = i.C = !1, r.C = !0, e = r) : (e === n.L && (fo(this, n), e = n, n = e.U), n.C = !1, r.C = !0, ao(this, r))), n = e.U;
			this._.C = !1
		},
		remove: function(e) {
			e.N && (e.N.P = e.P), e.P && (e.P.N = e.N), e.N = e.P = null;
			var t = e.U,
				n, r = e.L,
				i = e.R,
				s, o;
			r ? i ? s = lo(i) : s = r : s = i, t ? t.L === e ? t.L = s : t.R = s : this._ = s, r && i ? (o = s.C, s.C = e.C, s.L = r, r.U = s, s !== i ? (t = s.U, s.U = e.U, e = s.R, t.L = e, s.R = i, i.U = s) : (s.U = t, t = s, e = s.R)) : (o = e.C, e = s), e && (e.U = t);
			if (o) return;
			if (e && e.C) {
				e.C = !1;
				return
			}
			do {
				if (e === this._) break;
				if (e === t.L) {
					n = t.R, n.C && (n.C = !1, t.C = !0, ao(this, t), n = t.R);
					if (n.L && n.L.C || n.R && n.R.C) {
						if (!n.R || !n.R.C) n.L.C = !1, n.C = !0, fo(this, n), n = t.R;
						n.C = t.C, t.C = n.R.C = !1, ao(this, t), e = this._;
						break
					}
				} else {
					n = t.L, n.C && (n.C = !1, t.C = !0, fo(this, t), n = t.L);
					if (n.L && n.L.C || n.R && n.R.C) {
						if (!n.L || !n.L.C) n.R.C = !1, n.C = !0, ao(this, n), n = t.L;
						n.C = t.C, t.C = n.L.C = !1, fo(this, t), e = this._;
						break
					}
				}
				n.C = !0, e = t, t = t.U
			} while (!e.C);
			e && (e.C = !1)
		}
	}, e.geom.voronoi = function(e) {
		function o(e) {
			var t = new Array(e.length),
				n = s[0][0],
				r = s[0][1],
				i = s[1][0],
				o = s[1][1];
			return co(u(e), s).cells.forEach(function(s, u) {
				var a = s.edges,
					f = s.site,
					l = t[u] = a.length ? a.map(function(e) {
						var t = e.start();
						return [t.x, t.y]
					}) : f.x >= n && f.x <= i && f.y >= r && f.y <= o ? [
						[n, o],
						[i, o],
						[i, r],
						[n, r]
					] : [];
				l.point = e[u]
			}), t
		}

		function u(e) {
			return e.map(function(e, t) {
				return {
					x: Math.round(r(e, t) / Lt) * Lt,
					y: Math.round(i(e, t) / Lt) * Lt,
					i: t
				}
			})
		}
		var t = Ns,
			n = Cs,
			r = t,
			i = n,
			s = po;
		return e ? o(e) : (o.links = function(e) {
			return co(u(e)).edges.filter(function(e) {
				return e.l && e.r
			}).map(function(t) {
				return {
					source: e[t.l.i],
					target: e[t.r.i]
				}
			})
		}, o.triangles = function(e) {
			var t = [];
			return co(u(e)).cells.forEach(function(n, r) {
				var i = n.site,
					s = n.edges.sort(Ks),
					o = -1,
					u = s.length,
					a, f, l = s[u - 1].edge,
					c = l.l === i ? l.r : l.l;
				while (++o < u) a = l, f = c, l = s[o].edge, c = l.l === i ? l.r : l.l, r < f.i && r < c.i && vo(i, f, c) < 0 && t.push([e[r], e[f.i], e[c.i]])
			}), t
		}, o.x = function(e) {
			return arguments.length ? (r = Cn(t = e), o) : t
		}, o.y = function(e) {
			return arguments.length ? (i = Cn(n = e), o) : n
		}, o.clipExtent = function(e) {
			return arguments.length ? (s = e == null ? po : e, o) : s === po ? null : s
		}, o.size = function(e) {
			return arguments.length ? o.clipExtent(e && [
				[0, 0], e
			]) : s === po ? null : s && s[1]
		}, o)
	};
	var po = [
		[-1e6, -1e6],
		[1e6, 1e6]
	];
	e.geom.delaunay = function(t) {
		return e.geom.voronoi().triangles(t)
	}, e.geom.quadtree = function(e, t, n, r, i) {
		function a(e) {
			function T(e, t, n, r, i, s, o, u) {
				if (isNaN(n) || isNaN(r)) return;
				if (e.leaf) {
					var a = e.x,
						f = e.y;
					if (a != null)
						if (y(a - n) + y(f - r) < .01) N(e, t, n, r, i, s, o, u);
						else {
							var l = e.point;
							e.x = e.y = e.point = null, N(e, l, a, f, i, s, o, u), N(e, t, n, r, i, s, o, u)
						}
					else e.x = n, e.y = r, e.point = t
				} else N(e, t, n, r, i, s, o, u)
			}

			function N(e, t, n, r, i, s, o, u) {
				var a = (i + o) * .5,
					f = (s + u) * .5,
					l = n >= a,
					c = r >= f,
					h = (c << 1) + l;
				e.leaf = !1, e = e.nodes[h] || (e.nodes[h] = yo()), l ? i = a : o = a, c ? s = f : u = f, T(e, t, n, r, i, s, o, u)
			}
			var a, f = Cn(s),
				l = Cn(o),
				c, h, p, d, v, m, g, b;
			if (t != null) v = t, m = n, g = r, b = i;
			else {
				g = b = -(v = m = Infinity), c = [], h = [], d = e.length;
				if (u)
					for (p = 0; p < d; ++p) a = e[p], a.x < v && (v = a.x), a.y < m && (m = a.y), a.x > g && (g = a.x), a.y > b && (b = a.y), c.push(a.x), h.push(a.y);
				else
					for (p = 0; p < d; ++p) {
						var w = +f(a = e[p], p),
							E = +l(a, p);
						w < v && (v = w), E < m && (m = E), w > g && (g = w), E > b && (b = E), c.push(w), h.push(E)
					}
			}
			var S = g - v,
				x = b - m;
			S > x ? b = m + S : g = v + x;
			var C = yo();
			C.add = function(e) {
				T(C, e, +f(e, ++p), +l(e, p), v, m, g, b)
			}, C.visit = function(e) {
				bo(e, C, v, m, g, b)
			}, p = -1;
			if (t == null) {
				while (++p < d) T(C, e[p], c[p], h[p], v, m, g, b);
				--p
			} else e.forEach(C.add);
			return c = h = e = a = null, C
		}
		var s = Ns,
			o = Cs,
			u;
		return (u = arguments.length) ? (s = mo, o = go, u === 3 && (i = n, r = t, n = t = 0), a(e)) : (a.x = function(e) {
			return arguments.length ? (s = e, a) : s
		}, a.y = function(e) {
			return arguments.length ? (o = e, a) : o
		}, a.extent = function(e) {
			return arguments.length ? (e == null ? t = n = r = i = null : (t = +e[0][0], n = +e[0][1], r = +e[1][0], i = +e[1][1]), a) : t == null ? null : [
				[t, n],
				[r, i]
			]
		}, a.size = function(e) {
			return arguments.length ? (e == null ? t = n = r = i = null : (t = n = 0, r = +e[0], i = +e[1]), a) : t == null ? null : [r - t, i - n]
		}, a)
	}, e.interpolateRgb = wo, e.interpolateObject = Eo, e.interpolateNumber = So, e.interpolateString = xo;
	var To = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		No = new RegExp(To.source, "g");
	e.interpolate = Co, e.interpolators = [function(e, t) {
		var n = typeof t;
		return (n === "string" ? Nn.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? wo : xo : t instanceof Vt ? wo : Array.isArray(t) ? ko : n === "object" && isNaN(t) ? Eo : So)(e, t)
	}], e.interpolateArray = ko;
	var Lo = function() {
			return kn
		},
		Ao = e.map({
			linear: Lo,
			poly: jo,
			quad: function() {
				return Po
			},
			cubic: function() {
				return Ho
			},
			sin: function() {
				return Fo
			},
			exp: function() {
				return Io
			},
			circle: function() {
				return qo
			},
			elastic: Ro,
			back: Uo,
			bounce: function() {
				return zo
			}
		}),
		Oo = e.map({
			"in": kn,
			out: _o,
			"in-out": Do,
			"out-in": function(e) {
				return Do(_o(e))
			}
		});
	e.ease = function(e) {
		var n = e.indexOf("-"),
			r = n >= 0 ? e.substring(0, n) : e,
			i = n >= 0 ? e.substring(n + 1) : "in";
		return r = Ao.get(r) || Lo, i = Oo.get(i) || kn, Mo(i(r.apply(null, t.call(arguments, 1))))
	}, e.interpolateHcl = Wo, e.interpolateHsl = Xo, e.interpolateLab = Vo, e.interpolateRound = $o, e.transform = function(t) {
		var n = r.createElementNS(e.ns.prefix.svg, "g");
		return (e.transform = function(e) {
			if (e != null) {
				n.setAttribute("transform", e);
				var t = n.transform.baseVal.consolidate()
			}
			return new Jo(t ? t.matrix : Yo)
		})(t)
	}, Jo.prototype.toString = function() {
		return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
	};
	var Yo = {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e: 0,
		f: 0
	};
	e.interpolateTransform = Zo, e.layout = {}, e.layout.bundle = function() {
		return function(e) {
			var t = [],
				n = -1,
				r = e.length;
			while (++n < r) t.push(nu(e[n]));
			return t
		}
	}, e.layout.chord = function() {
		function l() {
			var t = {},
				l = [],
				h = e.range(s),
				p = [],
				d, v, m, g, y;
			n = [], r = [], d = 0, g = -1;
			while (++g < s) {
				v = 0, y = -1;
				while (++y < s) v += i[g][y];
				l.push(v), p.push(e.range(s)), d += v
			}
			u && h.sort(function(e, t) {
				return u(l[e], l[t])
			}), a && p.forEach(function(e, t) {
				e.sort(function(e, n) {
					return a(i[t][e], i[t][n])
				})
			}), d = (Ct - o * s) / d, v = 0, g = -1;
			while (++g < s) {
				m = v, y = -1;
				while (++y < s) {
					var b = h[g],
						w = p[b][y],
						E = i[b][w],
						S = v,
						x = v += E * d;
					t[b + "-" + w] = {
						index: b,
						subindex: w,
						startAngle: S,
						endAngle: x,
						value: E
					}
				}
				r[b] = {
					index: b,
					startAngle: m,
					endAngle: v,
					value: (v - m) / d
				}, v += o
			}
			g = -1;
			while (++g < s) {
				y = g - 1;
				while (++y < s) {
					var T = t[g + "-" + y],
						N = t[y + "-" + g];
					(T.value || N.value) && n.push(T.value < N.value ? {
						source: N,
						target: T
					} : {
						source: T,
						target: N
					})
				}
			}
			f && c()
		}

		function c() {
			n.sort(function(e, t) {
				return f((e.source.value + e.target.value) / 2, (t.source.value + t.target.value) / 2)
			})
		}
		var t = {},
			n, r, i, s, o = 0,
			u, a, f;
		return t.matrix = function(e) {
			return arguments.length ? (s = (i = e) && i.length, n = r = null, t) : i
		}, t.padding = function(e) {
			return arguments.length ? (o = e, n = r = null, t) : o
		}, t.sortGroups = function(e) {
			return arguments.length ? (u = e, n = r = null, t) : u
		}, t.sortSubgroups = function(e) {
			return arguments.length ? (a = e, n = null, t) : a
		}, t.sortChords = function(e) {
			return arguments.length ? (f = e, n && c(), t) : f
		}, t.chords = function() {
			return n || l(), n
		}, t.groups = function() {
			return r || l(), r
		}, t
	}, e.layout.force = function() {
		function y(e) {
			return function(t, n, r, i) {
				if (t.point !== e) {
					var s = t.cx - e.x,
						o = t.cy - e.y,
						u = i - n,
						a = s * s + o * o;
					if (u * u / h < a) {
						if (a < l) {
							var f = t.charge / a;
							e.px -= s * f, e.py -= o * f
						}
						return !0
					}
					if (t.point && a && a < l) {
						var f = t.pointCharge / a;
						e.px -= s * f, e.py -= o * f
					}
				}
				return !t.charge
			}
		}

		function b(n) {
			n.px = e.event.x, n.py = e.event.y, t.resume()
		}
		var t = {},
			n = e.dispatch("start", "tick", "end"),
			r = [1, 1],
			i, s, o = .9,
			u = lu,
			a = cu,
			f = -30,
			l = hu,
			c = .1,
			h = .64,
			p = [],
			d = [],
			v, m, g;
		return t.tick = function() {
			if ((s *= .99) < .005) return n.end({
				type: "end",
				alpha: s = 0
			}), !0;
			var t = p.length,
				i = d.length,
				u, a, l, h, b, w, E, S, x;
			for (a = 0; a < i; ++a) {
				l = d[a], h = l.source, b = l.target, S = b.x - h.x, x = b.y - h.y;
				if (w = S * S + x * x) w = s * m[a] * ((w = Math.sqrt(w)) - v[a]) / w, S *= w, x *= w, b.x -= S * (E = h.weight / (b.weight + h.weight)), b.y -= x * E, h.x += S * (E = 1 - E), h.y += x * E
			}
			if (E = s * c) {
				S = r[0] / 2, x = r[1] / 2, a = -1;
				if (E)
					while (++a < t) l = p[a], l.x += (S - l.x) * E, l.y += (x - l.y) * E
			}
			if (f) {
				fu(u = e.geom.quadtree(p), s, g), a = -1;
				while (++a < t)(l = p[a]).fixed || u.visit(y(l))
			}
			a = -1;
			while (++a < t) l = p[a], l.fixed ? (l.x = l.px, l.y = l.py) : (l.x -= (l.px - (l.px = l.x)) * o, l.y -= (l.py - (l.py = l.y)) * o);
			n.tick({
				type: "tick",
				alpha: s
			})
		}, t.nodes = function(e) {
			return arguments.length ? (p = e, t) : p
		}, t.links = function(e) {
			return arguments.length ? (d = e, t) : d
		}, t.size = function(e) {
			return arguments.length ? (r = e, t) : r
		}, t.linkDistance = function(e) {
			return arguments.length ? (u = typeof e == "function" ? e : +e, t) : u
		}, t.distance = t.linkDistance, t.linkStrength = function(e) {
			return arguments.length ? (a = typeof e == "function" ? e : +e, t) : a
		}, t.friction = function(e) {
			return arguments.length ? (o = +e, t) : o
		}, t.charge = function(e) {
			return arguments.length ? (f = typeof e == "function" ? e : +e, t) : f
		}, t.chargeDistance = function(e) {
			return arguments.length ? (l = e * e, t) : Math.sqrt(l)
		}, t.gravity = function(e) {
			return arguments.length ? (c = +e, t) : c
		}, t.theta = function(e) {
			return arguments.length ? (h = e * e, t) : Math.sqrt(h)
		}, t.alpha = function(r) {
			return arguments.length ? (r = +r, s ? r > 0 ? s = r : s = 0 : r > 0 && (n.start({
				type: "start",
				alpha: s = r
			}), e.timer(t.tick)), t) : s
		}, t.start = function() {
			function h(t, r) {
				if (!l) {
					l = new Array(n);
					for (o = 0; o < n; ++o) l[o] = [];
					for (o = 0; o < u; ++o) {
						var i = d[o];
						l[i.source.index].push(i.target), l[i.target.index].push(i.source)
					}
				}
				var s = l[e],
					o = -1,
					u = s.length,
					a;
				while (++o < u)
					if (!isNaN(a = s[o][t])) return a;
				return Math.random() * r
			}
			var e, n = p.length,
				i = d.length,
				s = r[0],
				o = r[1],
				l, c;
			for (e = 0; e < n; ++e)(c = p[e]).index = e, c.weight = 0;
			for (e = 0; e < i; ++e) c = d[e], typeof c.source == "number" && (c.source = p[c.source]), typeof c.target == "number" && (c.target = p[c.target]), ++c.source.weight, ++c.target.weight;
			for (e = 0; e < n; ++e) c = p[e], isNaN(c.x) && (c.x = h("x", s)), isNaN(c.y) && (c.y = h("y", o)), isNaN(c.px) && (c.px = c.x), isNaN(c.py) && (c.py = c.y);
			v = [];
			if (typeof u == "function")
				for (e = 0; e < i; ++e) v[e] = +u.call(this, d[e], e);
			else
				for (e = 0; e < i; ++e) v[e] = u;
			m = [];
			if (typeof a == "function")
				for (e = 0; e < i; ++e) m[e] = +a.call(this, d[e], e);
			else
				for (e = 0; e < i; ++e) m[e] = a;
			g = [];
			if (typeof f == "function")
				for (e = 0; e < n; ++e) g[e] = +f.call(this, p[e], e);
			else
				for (e = 0; e < n; ++e) g[e] = f;
			return t.resume()
		}, t.resume = function() {
			return t.alpha(.1)
		}, t.stop = function() {
			return t.alpha(0)
		}, t.drag = function() {
			i || (i = e.behavior.drag().origin(kn).on("dragstart.force", su).on("drag.force", b).on("dragend.force", ou));
			if (!arguments.length) return i;
			this.on("mouseover.force", uu).on("mouseout.force", au).call(i)
		}, e.rebind(t, n, "on")
	};
	var lu = 20,
		cu = 1,
		hu = Infinity;
	e.layout.hierarchy = function() {
		function r(i) {
			var s = [i],
				o = [],
				u;
			i.depth = 0;
			while ((u = s.pop()) != null) {
				o.push(u);
				if ((f = t.call(r, u, u.depth)) && (a = f.length)) {
					var a, f, l;
					while (--a >= 0) s.push(l = f[a]), l.parent = u, l.depth = u.depth + 1;
					n && (u.value = 0), u.children = f
				} else n && (u.value = +n.call(r, u, u.depth) || 0), delete u.children
			}
			return vu(i, function(t) {
				var r, i;
				e && (r = t.children) && r.sort(e), n && (i = t.parent) && (i.value += t.value)
			}), o
		}
		var e = yu,
			t = mu,
			n = gu;
		return r.sort = function(t) {
			return arguments.length ? (e = t, r) : e
		}, r.children = function(e) {
			return arguments.length ? (t = e, r) : t
		}, r.value = function(e) {
			return arguments.length ? (n = e, r) : n
		}, r.revalue = function(e) {
			return n && (du(e, function(e) {
				e.children && (e.value = 0)
			}), vu(e, function(e) {
				var t;
				e.children || (e.value = +n.call(r, e, e.depth) || 0);
				if (t = e.parent) t.value += e.value
			})), e
		}, r
	}, e.layout.partition = function() {
		function r(e, t, n, i) {
			var s = e.children;
			e.x = t, e.y = e.depth * i, e.dx = n, e.dy = i;
			if (s && (u = s.length)) {
				var o = -1,
					u, a, f;
				n = e.value ? n / e.value : 0;
				while (++o < u) r(a = s[o], t, f = a.value * n, i), t += f
			}
		}

		function i(e) {
			var t = e.children,
				n = 0;
			if (t && (s = t.length)) {
				var r = -1,
					s;
				while (++r < s) n = Math.max(n, i(t[r]))
			}
			return 1 + n
		}

		function s(e, s) {
			var o = t.call(this, e, s);
			return r(o[0], 0, n[0], n[1] / i(o[0])), o
		}
		var t = e.layout.hierarchy(),
			n = [1, 1];
		return s.size = function(e) {
			return arguments.length ? (n = e, s) : n
		}, pu(s, t)
	}, e.layout.pie = function() {
		function s(o) {
			var u = o.map(function(e, n) {
					return +t.call(s, e, n)
				}),
				a = +(typeof r == "function" ? r.apply(this, arguments) : r),
				f = ((typeof i == "function" ? i.apply(this, arguments) : i) - a) / e.sum(u),
				l = e.range(o.length);
			n != null && l.sort(n === wu ? function(e, t) {
				return u[t] - u[e]
			} : function(e, t) {
				return n(o[e], o[t])
			});
			var c = [];
			return l.forEach(function(e) {
				var t;
				c[e] = {
					data: o[e],
					value: t = u[e],
					startAngle: a,
					endAngle: a += t * f
				}
			}), c
		}
		var t = Number,
			n = wu,
			r = 0,
			i = Ct;
		return s.value = function(e) {
			return arguments.length ? (t = e, s) : t
		}, s.sort = function(e) {
			return arguments.length ? (n = e, s) : n
		}, s.startAngle = function(e) {
			return arguments.length ? (r = e, s) : r
		}, s.endAngle = function(e) {
			return arguments.length ? (i = e, s) : i
		}, s
	};
	var wu = {};
	e.layout.stack = function() {
		function u(a, f) {
			var l = a.map(function(e, n) {
					return t.call(u, e, n)
				}),
				c = l.map(function(e) {
					return e.map(function(e, t) {
						return [s.call(u, e, t), o.call(u, e, t)]
					})
				}),
				h = n.call(u, c, f);
			l = e.permute(l, h), c = e.permute(c, h);
			var p = r.call(u, c, f),
				d = l.length,
				v = l[0].length,
				m, g, y;
			for (g = 0; g < v; ++g) {
				i.call(u, l[0][g], y = p[g], c[0][g][1]);
				for (m = 1; m < d; ++m) i.call(u, l[m][g], y += c[m - 1][g][1], c[m][g][1])
			}
			return a
		}
		var t = kn,
			n = Cu,
			r = ku,
			i = xu,
			s = Eu,
			o = Su;
		return u.values = function(e) {
			return arguments.length ? (t = e, u) : t
		}, u.order = function(e) {
			return arguments.length ? (n = typeof e == "function" ? e : Tu.get(e) || Cu, u) : n
		}, u.offset = function(e) {
			return arguments.length ? (r = typeof e == "function" ? e : Nu.get(e) || ku, u) : r
		}, u.x = function(e) {
			return arguments.length ? (s = e, u) : s
		}, u.y = function(e) {
			return arguments.length ? (o = e, u) : o
		}, u.out = function(e) {
			return arguments.length ? (i = e, u) : i
		}, u
	};
	var Tu = e.map({
			"inside-out": function(t) {
				var n = t.length,
					r, i, s = t.map(Lu),
					o = t.map(Au),
					u = e.range(n).sort(function(e, t) {
						return s[e] - s[t]
					}),
					a = 0,
					f = 0,
					l = [],
					c = [];
				for (r = 0; r < n; ++r) i = u[r], a < f ? (a += o[i], l.push(i)) : (f += o[i], c.push(i));
				return c.reverse().concat(l)
			},
			reverse: function(t) {
				return e.range(t.length).reverse()
			},
			"default": Cu
		}),
		Nu = e.map({
			silhouette: function(e) {
				var t = e.length,
					n = e[0].length,
					r = [],
					i = 0,
					s, o, u, a = [];
				for (o = 0; o < n; ++o) {
					for (s = 0, u = 0; s < t; s++) u += e[s][o][1];
					u > i && (i = u), r.push(u)
				}
				for (o = 0; o < n; ++o) a[o] = (i - r[o]) / 2;
				return a
			},
			wiggle: function(e) {
				var t = e.length,
					n = e[0],
					r = n.length,
					i, s, o, u, a, f, l, c, h, p = [];
				p[0] = c = h = 0;
				for (s = 1; s < r; ++s) {
					for (i = 0, u = 0; i < t; ++i) u += e[i][s][1];
					for (i = 0, a = 0, l = n[s][0] - n[s - 1][0]; i < t; ++i) {
						for (o = 0, f = (e[i][s][1] - e[i][s - 1][1]) / (2 * l); o < i; ++o) f += (e[o][s][1] - e[o][s - 1][1]) / l;
						a += f * e[i][s][1]
					}
					p[s] = c -= u ? a / u * l : 0, c < h && (h = c)
				}
				for (s = 0; s < r; ++s) p[s] -= h;
				return p
			},
			expand: function(e) {
				var t = e.length,
					n = e[0].length,
					r = 1 / t,
					i, s, o, u = [];
				for (s = 0; s < n; ++s) {
					for (i = 0, o = 0; i < t; i++) o += e[i][s][1];
					if (o)
						for (i = 0; i < t; i++) e[i][s][1] /= o;
					else
						for (i = 0; i < t; i++) e[i][s][1] = r
				}
				for (s = 0; s < n; ++s) u[s] = 0;
				return u
			},
			zero: ku
		});
	e.layout.histogram = function() {
		function s(s, o) {
			var u = [],
				a = s.map(n, this),
				f = r.call(this, a, o),
				l = i.call(this, f, a, o),
				c, o = -1,
				h = a.length,
				p = l.length - 1,
				d = t ? 1 : 1 / h,
				v;
			while (++o < p) c = u[o] = [], c.dx = l[o + 1] - (c.x = l[o]), c.y = 0;
			if (p > 0) {
				o = -1;
				while (++o < h) v = a[o], v >= f[0] && v <= f[1] && (c = u[e.bisect(l, v, 1, p) - 1], c.y += d, c.push(s[o]))
			}
			return u
		}
		var t = !0,
			n = Number,
			r = Du,
			i = Mu;
		return s.value = function(e) {
			return arguments.length ? (n = e, s) : n
		}, s.range = function(e) {
			return arguments.length ? (r = Cn(e), s) : r
		}, s.bins = function(e) {
			return arguments.length ? (i = typeof e == "number" ? function(t) {
				return _u(t, e)
			} : Cn(e), s) : i
		}, s.frequency = function(e) {
			return arguments.length ? (t = !!e, s) : t
		}, s
	}, e.layout.pack = function() {
		function s(e, s) {
			var o = t.call(this, e, s),
				u = o[0],
				a = r[0],
				f = r[1],
				l = i == null ? Math.sqrt : typeof i == "function" ? i : function() {
					return i
				};
			u.x = u.y = 0, vu(u, function(e) {
				e.r = +l(e.value)
			}), vu(u, Fu);
			if (n) {
				var c = n * (i ? 1 : Math.max(2 * u.r / a, 2 * u.r / f)) / 2;
				vu(u, function(e) {
					e.r += c
				}), vu(u, Fu), vu(u, function(e) {
					e.r -= c
				})
			}
			return Ru(u, a / 2, f / 2, i ? 1 : 1 / Math.max(2 * u.r / a, 2 * u.r / f)), o
		}
		var t = e.layout.hierarchy().sort(Pu),
			n = 0,
			r = [1, 1],
			i;
		return s.size = function(e) {
			return arguments.length ? (r = e, s) : r
		}, s.radius = function(e) {
			return arguments.length ? (i = e == null || typeof e == "function" ? e : +e, s) : i
		}, s.padding = function(e) {
			return arguments.length ? (n = +e, s) : n
		}, pu(s, t)
	}, e.layout.tree = function() {
		function s(e, s) {
			var f = t.call(this, e, s),
				c = f[0],
				h = o(c);
			vu(h, u), h.parent.m = -h.z, du(h, a);
			if (i) du(c, l);
			else {
				var p = c,
					d = c,
					v = c;
				du(c, function(e) {
					e.x < p.x && (p = e), e.x > d.x && (d = e), e.depth > v.depth && (v = e)
				});
				var m = n(p, d) / 2 - p.x,
					g = r[0] / (d.x + n(d, p) / 2 + m),
					y = r[1] / (v.depth || 1);
				du(c, function(e) {
					e.x = (e.x + m) * g, e.y = e.depth * y
				})
			}
			return f
		}

		function o(e) {
			var t = {
					A: null,
					children: [e]
				},
				n = [t],
				r;
			while ((r = n.pop()) != null)
				for (var i = r.children, s, o = 0, u = i.length; o < u; ++o) n.push((i[o] = s = {
					_: i[o],
					parent: r,
					children: (s = i[o].children) && s.slice() || [],
					A: null,
					a: null,
					z: 0,
					m: 0,
					c: 0,
					s: 0,
					t: null,
					i: o
				}).a = s);
			return t.children[0]
		}

		function u(e) {
			var t = e.children,
				r = e.parent.children,
				i = e.i ? r[e.i - 1] : null;
			if (t.length) {
				$u(e);
				var s = (t[0].z + t[t.length - 1].z) / 2;
				i ? (e.z = i.z + n(e._, i._), e.m = e.z - s) : e.z = s
			} else i && (e.z = i.z + n(e._, i._));
			e.parent.A = f(e, i, e.parent.A || r[0])
		}

		function a(e) {
			e._.x = e.z + e.parent.m, e.m += e.parent.m
		}

		function f(e, t, r) {
			if (t) {
				var i = e,
					s = e,
					o = t,
					u = i.parent.children[0],
					a = i.m,
					f = s.m,
					l = o.m,
					c = u.m,
					h;
				while (o = Xu(o), i = Wu(i), o && i) u = Wu(u), s = Xu(s), s.a = e, h = o.z + l - i.z - a + n(o._, i._), h > 0 && (Vu(Ju(o, e, r), e, h), a += h, f += h), l += o.m, a += i.m, c += u.m, f += s.m;
				o && !Xu(s) && (s.t = o, s.m += l - f), i && !Wu(u) && (u.t = i, u.m += a - c, r = e)
			}
			return r
		}

		function l(e) {
			e.x *= r[0], e.y = e.depth * r[1]
		}
		var t = e.layout.hierarchy().sort(null).value(null),
			n = zu,
			r = [1, 1],
			i = null;
		return s.separation = function(e) {
			return arguments.length ? (n = e, s) : n
		}, s.size = function(e) {
			return arguments.length ? (i = (r = e) == null ? l : null, s) : i ? null : r
		}, s.nodeSize = function(e) {
			return arguments.length ? (i = (r = e) == null ? null : l, s) : i ? r : null
		}, pu(s, t)
	}, e.layout.cluster = function() {
		function s(e, s) {
			var o = t.call(this, e, s),
				u = o[0],
				a, f = 0;
			vu(u, function(e) {
				var t = e.children;
				t && t.length ? (e.x = Qu(t), e.y = Ku(t)) : (e.x = a ? f += n(e, a) : 0, e.y = 0, a = e)
			});
			var l = Gu(u),
				c = Yu(u),
				h = l.x - n(l, c) / 2,
				p = c.x + n(c, l) / 2;
			return vu(u, i ? function(e) {
				e.x = (e.x - u.x) * r[0], e.y = (u.y - e.y) * r[1]
			} : function(e) {
				e.x = (e.x - h) / (p - h) * r[0], e.y = (1 - (u.y ? e.y / u.y : 1)) * r[1]
			}), o
		}
		var t = e.layout.hierarchy().sort(null).value(null),
			n = zu,
			r = [1, 1],
			i = !1;
		return s.separation = function(e) {
			return arguments.length ? (n = e, s) : n
		}, s.size = function(e) {
			return arguments.length ? (i = (r = e) == null, s) : i ? null : r
		}, s.nodeSize = function(e) {
			return arguments.length ? (i = (r = e) != null, s) : i ? r : null
		}, pu(s, t)
	}, e.layout.treemap = function() {
		function l(e, t) {
			var n = -1,
				r = e.length,
				i, s;
			while (++n < r) s = (i = e[n]).value * (t < 0 ? 0 : t), i.area = isNaN(s) || s <= 0 ? 0 : s
		}

		function c(e) {
			var t = e.children;
			if (t && t.length) {
				var n = s(e),
					r = [],
					i = t.slice(),
					o, u = Infinity,
					f, h = a === "slice" ? n.dx : a === "dice" ? n.dy : a === "slice-dice" ? e.depth & 1 ? n.dy : n.dx : Math.min(n.dx, n.dy),
					v;
				l(i, n.dx * n.dy / e.value), r.area = 0;
				while ((v = i.length) > 0) r.push(o = i[v - 1]), r.area += o.area, a !== "squarify" || (f = p(r, h)) <= u ? (i.pop(), u = f) : (r.area -= r.pop().area, d(r, h, n, !1), h = Math.min(n.dx, n.dy), r.length = r.area = 0, u = Infinity);
				r.length && (d(r, h, n, !0), r.length = r.area = 0), t.forEach(c)
			}
		}

		function h(e) {
			var t = e.children;
			if (t && t.length) {
				var n = s(e),
					r = t.slice(),
					i, o = [];
				l(r, n.dx * n.dy / e.value), o.area = 0;
				while (i = r.pop()) o.push(i), o.area += i.area, i.z != null && (d(o, i.z ? n.dx : n.dy, n, !r.length), o.length = o.area = 0);
				t.forEach(h)
			}
		}

		function p(e, t) {
			var n = e.area,
				r, i = 0,
				s = Infinity,
				o = -1,
				u = e.length;
			while (++o < u) {
				if (!(r = e[o].area)) continue;
				r < s && (s = r), r > i && (i = r)
			}
			return n *= n, t *= t, n ? Math.max(t * i * f / n, n / (t * s * f)) : Infinity
		}

		function d(e, t, r, i) {
			var s = -1,
				o = e.length,
				u = r.x,
				a = r.y,
				f = t ? n(e.area / t) : 0,
				l;
			if (t == r.dx) {
				if (i || f > r.dy) f = r.dy;
				while (++s < o) l = e[s], l.x = u, l.y = a, l.dy = f, u += l.dx = Math.min(r.x + r.dx - u, f ? n(l.area / f) : 0);
				l.z = !0, l.dx += r.x + r.dx - u, r.y += f, r.dy -= f
			} else {
				if (i || f > r.dx) f = r.dx;
				while (++s < o) l = e[s], l.x = u, l.y = a, l.dx = f, a += l.dy = Math.min(r.y + r.dy - a, f ? n(l.area / f) : 0);
				l.z = !1, l.dy += r.y + r.dy - a, r.x += f, r.dx -= f
			}
		}

		function v(e) {
			var n = u || t(e),
				i = n[0];
			return i.x = 0, i.y = 0, i.dx = r[0], i.dy = r[1], u && t.revalue(i), l([i], i.dx * i.dy / i.value), (u ? h : c)(i), o && (u = n), n
		}
		var t = e.layout.hierarchy(),
			n = Math.round,
			r = [1, 1],
			i = null,
			s = Zu,
			o = !1,
			u, a = "squarify",
			f = .5 * (1 + Math.sqrt(5));
		return v.size = function(e) {
			return arguments.length ? (r = e, v) : r
		}, v.padding = function(e) {
			function t(t) {
				var n = e.call(v, t, t.depth);
				return n == null ? Zu(t) : ea(t, typeof n == "number" ? [n, n, n, n] : n)
			}

			function n(t) {
				return ea(t, e)
			}
			if (!arguments.length) return i;
			var r;
			return s = (i = e) == null ? Zu : (r = typeof e) === "function" ? t : r === "number" ? (e = [e, e, e, e], n) : n, v
		}, v.round = function(e) {
			return arguments.length ? (n = e ? Math.round : Number, v) : n != Number
		}, v.sticky = function(e) {
			return arguments.length ? (o = e, u = null, v) : o
		}, v.ratio = function(e) {
			return arguments.length ? (f = e, v) : f
		}, v.mode = function(e) {
			return arguments.length ? (a = e + "", v) : a
		}, pu(v, t)
	}, e.random = {
		normal: function(e, t) {
			var n = arguments.length;
			return n < 2 && (t = 1), n < 1 && (e = 0),
				function() {
					var n, r, i;
					do n = Math.random() * 2 - 1, r = Math.random() * 2 - 1, i = n * n + r * r; while (!i || i > 1);
					return e + t * n * Math.sqrt(-2 * Math.log(i) / i)
				}
		},
		logNormal: function() {
			var t = e.random.normal.apply(e, arguments);
			return function() {
				return Math.exp(t())
			}
		},
		bates: function(t) {
			var n = e.random.irwinHall(t);
			return function() {
				return n() / t
			}
		},
		irwinHall: function(e) {
			return function() {
				for (var t = 0, n = 0; n < e; n++) t += Math.random();
				return t
			}
		}
	}, e.scale = {};
	var oa = {
		floor: kn,
		ceil: kn
	};
	e.scale.linear = function() {
		return aa([0, 1], [0, 1], Co, !1)
	};
	var da = {
		s: 1,
		g: 1,
		p: 1,
		r: 1,
		e: 1
	};
	e.scale.log = function() {
		return ga(e.scale.linear().domain([0, 1]), 10, !0, [1, 10])
	};
	var ya = e.format(".0e"),
		ba = {
			floor: function(e) {
				return -Math.ceil(-e)
			},
			ceil: function(e) {
				return -Math.floor(-e)
			}
		};
	e.scale.pow = function() {
		return wa(e.scale.linear(), 1, [0, 1])
	}, e.scale.sqrt = function() {
		return e.scale.pow().exponent(.5)
	}, e.scale.ordinal = function() {
		return Sa([], {
			t: "range",
			a: [
				[]
			]
		})
	}, e.scale.category10 = function() {
		return e.scale.ordinal().range(xa)
	}, e.scale.category20 = function() {
		return e.scale.ordinal().range(Ta)
	}, e.scale.category20b = function() {
		return e.scale.ordinal().range(Na)
	}, e.scale.category20c = function() {
		return e.scale.ordinal().range(Ca)
	};
	var xa = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(vn),
		Ta = [2062260, 11432440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(vn),
		Na = [3750777, 1295619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589632].map(vn),
		Ca = [3244733, 7057110, 10406625, 13032431, 15095012, 16616764, 16625259, 16634018, 3212076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(vn);
	e.scale.quantile = function() {
		return ka([], [])
	}, e.scale.quantize = function() {
		return La(0, 1, [0, 1])
	}, e.scale.threshold = function() {
		return Aa([.5], [0, 1])
	}, e.scale.identity = function() {
		return Oa([0, 1])
	}, e.svg = {}, e.svg.arc = function() {
		function i() {
			var i = e.apply(this, arguments),
				s = t.apply(this, arguments),
				o = n.apply(this, arguments) + Ma,
				u = r.apply(this, arguments) + Ma,
				a = (u < o && (a = o, o = u, u = a), u - o),
				f = a < Nt ? "0" : "1",
				l = Math.cos(o),
				c = Math.sin(o),
				h = Math.cos(u),
				p = Math.sin(u);
			return a >= _a ? i ? "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "M0," + i + "A" + i + "," + i + " 0 1,0 0," + -i + "A" + i + "," + i + " 0 1,0 0," + i + "Z" : "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "Z" : i ? "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L" + i * h + "," + i * p + "A" + i + "," + i + " 0 " + f + ",0 " + i * l + "," + i * c + "Z" : "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L0,0" + "Z"
		}
		var e = Da,
			t = Pa,
			n = Ha,
			r = Ba;
		return i.innerRadius = function(t) {
			return arguments.length ? (e = Cn(t), i) : e
		}, i.outerRadius = function(e) {
			return arguments.length ? (t = Cn(e), i) : t
		}, i.startAngle = function(e) {
			return arguments.length ? (n = Cn(e), i) : n
		}, i.endAngle = function(e) {
			return arguments.length ? (r = Cn(e), i) : r
		}, i.centroid = function() {
			var i = (e.apply(this, arguments) + t.apply(this, arguments)) / 2,
				s = (n.apply(this, arguments) + r.apply(this, arguments)) / 2 + Ma;
			return [Math.cos(s) * i, Math.sin(s) * i]
		}, i
	};
	var Ma = -kt,
		_a = Ct - Lt;
	e.svg.line = function() {
		return ja(kn)
	};
	var Fa = e.map({
		linear: Ia,
		"linear-closed": qa,
		step: Ra,
		"step-before": Ua,
		"step-after": za,
		basis: Ka,
		"basis-open": Qa,
		"basis-closed": Ga,
		bundle: Ya,
		cardinal: Va,
		"cardinal-open": Wa,
		"cardinal-closed": Xa,
		monotone: af
	});
	Fa.forEach(function(e, t) {
		t.key = e, t.closed = /-closed$/.test(e)
	});
	var ef = [0, 2 / 3, 1 / 3, 0],
		tf = [0, 1 / 3, 2 / 3, 0],
		nf = [0, 1 / 6, 2 / 3, 1 / 6];
	e.svg.line.radial = function() {
		var e = ja(ff);
		return e.radius = e.x, delete e.x, e.angle = e.y, delete e.y, e
	}, Ua.reverse = za, za.reverse = Ua, e.svg.area = function() {
		return lf(kn)
	}, e.svg.area.radial = function() {
		var e = lf(ff);
		return e.radius = e.x, delete e.x, e.innerRadius = e.x0, delete e.x0, e.outerRadius = e.x1, delete e.x1, e.angle = e.y, delete e.y, e.startAngle = e.y0, delete e.y0, e.endAngle = e.y1, delete e.y1, e
	}, e.svg.chord = function() {
		function s(n, r) {
			var i = o(this, e, n, r),
				s = o(this, t, n, r);
			return "M" + i.p0 + a(i.r, i.p1, i.a1 - i.a0) + (u(i, s) ? f(i.r, i.p1, i.r, i.p0) : f(i.r, i.p1, s.r, s.p0) + a(s.r, s.p1, s.a1 - s.a0) + f(s.r, s.p1, i.r, i.p0)) + "Z"
		}

		function o(e, t, s, o) {
			var u = t.call(e, s, o),
				a = n.call(e, u, o),
				f = r.call(e, u, o) + Ma,
				l = i.call(e, u, o) + Ma;
			return {
				r: a,
				a0: f,
				a1: l,
				p0: [a * Math.cos(f), a * Math.sin(f)],
				p1: [a * Math.cos(l), a * Math.sin(l)]
			}
		}

		function u(e, t) {
			return e.a0 == t.a0 && e.a1 == t.a1
		}

		function a(e, t, n) {
			return "A" + e + "," + e + " 0 " + +(n > Nt) + ",1 " + t
		}

		function f(e, t, n, r) {
			return "Q 0,0 " + r
		}
		var e = as,
			t = fs,
			n = cf,
			r = Ha,
			i = Ba;
		return s.radius = function(e) {
			return arguments.length ? (n = Cn(e), s) : n
		}, s.source = function(t) {
			return arguments.length ? (e = Cn(t), s) : e
		}, s.target = function(e) {
			return arguments.length ? (t = Cn(e), s) : t
		}, s.startAngle = function(e) {
			return arguments.length ? (r = Cn(e), s) : r
		}, s.endAngle = function(e) {
			return arguments.length ? (i = Cn(e), s) : i
		}, s
	}, e.svg.diagonal = function() {
		function r(r, i) {
			var s = e.call(this, r, i),
				o = t.call(this, r, i),
				u = (s.y + o.y) / 2,
				a = [s, {
					x: s.x,
					y: u
				}, {
					x: o.x,
					y: u
				}, o];
			return a = a.map(n), "M" + a[0] + "C" + a[1] + " " + a[2] + " " + a[3]
		}
		var e = as,
			t = fs,
			n = hf;
		return r.source = function(t) {
			return arguments.length ? (e = Cn(t), r) : e
		}, r.target = function(e) {
			return arguments.length ? (t = Cn(e), r) : t
		}, r.projection = function(e) {
			return arguments.length ? (n = e, r) : n
		}, r
	}, e.svg.diagonal.radial = function() {
		var t = e.svg.diagonal(),
			n = hf,
			r = t.projection;
		return t.projection = function(e) {
			return arguments.length ? r(pf(n = e)) : n
		}, t
	}, e.svg.symbol = function() {
		function n(n, r) {
			return (gf.get(e.call(this, n, r)) || mf)(t.call(this, n, r))
		}
		var e = vf,
			t = df;
		return n.type = function(t) {
			return arguments.length ? (e = Cn(t), n) : e
		}, n.size = function(e) {
			return arguments.length ? (t = Cn(e), n) : t
		}, n
	};
	var gf = e.map({
		circle: mf,
		cross: function(e) {
			var t = Math.sqrt(e / 5) / 2;
			return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
		},
		diamond: function(e) {
			var t = Math.sqrt(e / (2 * bf)),
				n = t * bf;
			return "M0," + -t + "L" + n + ",0" + " 0," + t + " " + -n + ",0" + "Z"
		},
		square: function(e) {
			var t = Math.sqrt(e) / 2;
			return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
		},
		"triangle-down": function(e) {
			var t = Math.sqrt(e / yf),
				n = t * yf / 2;
			return "M0," + n + "L" + t + "," + -n + " " + -t + "," + -n + "Z"
		},
		"triangle-up": function(e) {
			var t = Math.sqrt(e / yf),
				n = t * yf / 2;
			return "M0," + -n + "L" + t + "," + n + " " + -t + "," + n + "Z"
		}
	});
	e.svg.symbolTypes = gf.keys();
	var yf = Math.sqrt(3),
		bf = Math.tan(30 * Ot),
		Ef = [],
		Sf = 0,
		xf, Tf;
	Ef.call = V.call, Ef.empty = V.empty, Ef.node = V.node, Ef.size = V.size, e.transition = function(e) {
		return arguments.length ? xf ? e.transition() : e : pt.transition()
	}, e.transition.prototype = Ef, Ef.select = function(e) {
		var t = this.id,
			n = [],
			r, i, s;
		e = $(e);
		for (var o = -1, u = this.length; ++o < u;) {
			n.push(r = []);
			for (var a = this[o], f = -1, l = a.length; ++f < l;)(s = a[f]) && (i = e.call(s, s.__data__, f, o)) ? ("__data__" in s && (i.__data__ = s.__data__), kf(i, f, t, s.__transition__[t]), r.push(i)) : r.push(null)
		}
		return wf(n, t)
	}, Ef.selectAll = function(e) {
		var t = this.id,
			n = [],
			r, i, s, o, u;
		e = J(e);
		for (var a = -1, f = this.length; ++a < f;)
			for (var l = this[a], c = -1, h = l.length; ++c < h;)
				if (s = l[c]) {
					u = s.__transition__[t], i = e.call(s, s.__data__, c, a), n.push(r = []);
					for (var p = -1, d = i.length; ++p < d;)(o = i[p]) && kf(o, p, t, u), r.push(o)
				}
		return wf(n, t)
	}, Ef.filter = function(e) {
		var t = [],
			n, r, i;
		typeof e != "function" && (e = ot(e));
		for (var s = 0, o = this.length; s < o; s++) {
			t.push(n = []);
			for (var r = this[s], u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i, i.__data__, u, s) && n.push(i)
		}
		return wf(t, this.id)
	}, Ef.tween = function(e, t) {
		var n = this.id;
		return arguments.length < 2 ? this.node().__transition__[n].tween.get(e) : at(this, t == null ? function(t) {
			t.__transition__[n].tween.remove(e)
		} : function(r) {
			r.__transition__[n].tween.set(e, t)
		})
	}, Ef.attr = function(t, n) {
		function s() {
			this.removeAttribute(i)
		}

		function o() {
			this.removeAttributeNS(i.space, i.local)
		}

		function u(e) {
			return e == null ? s : (e += "", function() {
				var t = this.getAttribute(i),
					n;
				return t !== e && (n = r(t, e), function(e) {
					this.setAttribute(i, n(e))
				})
			})
		}

		function a(e) {
			return e == null ? o : (e += "", function() {
				var t = this.getAttributeNS(i.space, i.local),
					n;
				return t !== e && (n = r(t, e), function(e) {
					this.setAttributeNS(i.space, i.local, n(e))
				})
			})
		}
		if (arguments.length < 2) {
			for (n in t) this.attr(n, t[n]);
			return this
		}
		var r = t == "transform" ? Zo : Co,
			i = e.ns.qualify(t);
		return Nf(this, "attr." + t, n, i.local ? a : u)
	}, Ef.attrTween = function(t, n) {
		function i(e, t) {
			var i = n.call(this, e, t, this.getAttribute(r));
			return i && function(e) {
				this.setAttribute(r, i(e))
			}
		}

		function s(e, t) {
			var i = n.call(this, e, t, this.getAttributeNS(r.space, r.local));
			return i && function(e) {
				this.setAttributeNS(r.space, r.local, i(e))
			}
		}
		var r = e.ns.qualify(t);
		return this.tween("attr." + t, r.local ? s : i)
	}, Ef.style = function(e, t, n) {
		function i() {
			this.style.removeProperty(e)
		}

		function o(t) {
			return t == null ? i : (t += "", function() {
				var r = s.getComputedStyle(this, null).getPropertyValue(e),
					i;
				return r !== t && (i = Co(r, t), function(t) {
					this.style.setProperty(e, i(t), n)
				})
			})
		}
		var r = arguments.length;
		if (r < 3) {
			if (typeof e != "string") {
				r < 2 && (t = "");
				for (n in e) this.style(n, e[n], t);
				return this
			}
			n = ""
		}
		return Nf(this, "style." + e, t, o)
	}, Ef.styleTween = function(e, t, n) {
		function r(r, i) {
			var o = t.call(this, r, i, s.getComputedStyle(this, null).getPropertyValue(e));
			return o && function(t) {
				this.style.setProperty(e, o(t), n)
			}
		}
		return arguments.length < 3 && (n = ""), this.tween("style." + e, r)
	}, Ef.text = function(e) {
		return Nf(this, "text", e, Cf)
	}, Ef.remove = function() {
		return this.each("end.transition", function() {
			var e;
			this.__transition__.count < 2 && (e = this.parentNode) && e.removeChild(this)
		})
	}, Ef.ease = function(t) {
		var n = this.id;
		return arguments.length < 1 ? this.node().__transition__[n].ease : (typeof t != "function" && (t = e.ease.apply(e, arguments)), at(this, function(e) {
			e.__transition__[n].ease = t
		}))
	}, Ef.delay = function(e) {
		var t = this.id;
		return arguments.length < 1 ? this.node().__transition__[t].delay : at(this, typeof e == "function" ? function(n, r, i) {
			n.__transition__[t].delay = +e.call(n, n.__data__, r, i)
		} : (e = +e, function(n) {
			n.__transition__[t].delay = e
		}))
	}, Ef.duration = function(e) {
		var t = this.id;
		return arguments.length < 1 ? this.node().__transition__[t].duration : at(this, typeof e == "function" ? function(n, r, i) {
			n.__transition__[t].duration = Math.max(1, e.call(n, n.__data__, r, i))
		} : (e = Math.max(1, e), function(n) {
			n.__transition__[t].duration = e
		}))
	}, Ef.each = function(t, n) {
		var r = this.id;
		if (arguments.length < 2) {
			var i = Tf,
				s = xf;
			xf = r, at(this, function(e, n, i) {
				Tf = e.__transition__[r], t.call(e, e.__data__, n, i)
			}), Tf = i, xf = s
		} else at(this, function(i) {
			var s = i.__transition__[r];
			(s.event || (s.event = e.dispatch("start", "end"))).on(t, n)
		});
		return this
	}, Ef.transition = function() {
		var e = this.id,
			t = ++Sf,
			n = [],
			r, i, s, o;
		for (var u = 0, a = this.length; u < a; u++) {
			n.push(r = []);
			for (var i = this[u], f = 0, l = i.length; f < l; f++) {
				if (s = i[f]) o = Object.create(s.__transition__[e]), o.delay += o.duration, kf(s, f, t, o);
				r.push(s)
			}
		}
		return wf(n, t)
	}, e.svg.axis = function() {
		function f(f) {
			f.each(function() {
				var f = e.select(this),
					l = this.__chart__ || t,
					c = this.__chart__ = t.copy(),
					h = u == null ? c.ticks ? c.ticks.apply(c, o) : c.domain() : u,
					p = a == null ? c.tickFormat ? c.tickFormat.apply(c, o) : kn : a,
					d = f.selectAll(".tick").data(h, c),
					v = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Lt),
					m = e.transition(d.exit()).style("opacity", Lt).remove(),
					g = e.transition(d.order()).style("opacity", 1),
					y, b = na(c),
					w = f.selectAll(".domain").data([0]),
					E = (w.enter().append("path").attr("class", "domain"), e.transition(w));
				v.append("line"), v.append("text");
				var S = v.select("line"),
					x = g.select("line"),
					T = d.select("text").text(p),
					N = v.select("text"),
					C = g.select("text");
				switch (n) {
					case "bottom":
						y = Of, S.attr("y2", r), N.attr("y", Math.max(r, 0) + s), x.attr("x2", 0).attr("y2", r), C.attr("x", 0).attr("y", Math.max(r, 0) + s), T.attr("dy", ".71em").style("text-anchor", "middle"), E.attr("d", "M" + b[0] + "," + i + "V0H" + b[1] + "V" + i);
						break;
					case "top":
						y = Of, S.attr("y2", -r), N.attr("y", -(Math.max(r, 0) + s)), x.attr("x2", 0).attr("y2", -r), C.attr("x", 0).attr("y", -(Math.max(r, 0) + s)), T.attr("dy", "0em").style("text-anchor", "middle"), E.attr("d", "M" + b[0] + "," + -i + "V0H" + b[1] + "V" + -i);
						break;
					case "left":
						y = Mf, S.attr("x2", -r), N.attr("x", -(Math.max(r, 0) + s)), x.attr("x2", -r).attr("y2", 0), C.attr("x", -(Math.max(r, 0) + s)).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "end"), E.attr("d", "M" + -i + "," + b[0] + "H0V" + b[1] + "H" + -i);
						break;
					case "right":
						y = Mf, S.attr("x2", r), N.attr("x", Math.max(r, 0) + s), x.attr("x2", r).attr("y2", 0), C.attr("x", Math.max(r, 0) + s).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "start"), E.attr("d", "M" + i + "," + b[0] + "H0V" + b[1] + "H" + i)
				}
				if (c.rangeBand) {
					var k = c,
						L = k.rangeBand() / 2;
					l = c = function(e) {
						return k(e) + L
					}
				} else l.rangeBand ? l = c : m.call(y, c);
				v.call(y, l), g.call(y, c)
			})
		}
		var t = e.scale.linear(),
			n = Lf,
			r = 6,
			i = 6,
			s = 3,
			o = [10],
			u = null,
			a;
		return f.scale = function(e) {
			return arguments.length ? (t = e, f) : t
		}, f.orient = function(e) {
			return arguments.length ? (n = e in Af ? e + "" : Lf, f) : n
		}, f.ticks = function() {
			return arguments.length ? (o = arguments, f) : o
		}, f.tickValues = function(e) {
			return arguments.length ? (u = e, f) : u
		}, f.tickFormat = function(e) {
			return arguments.length ? (a = e, f) : a
		}, f.tickSize = function(e) {
			var t = arguments.length;
			return t ? (r = +e, i = +arguments[t - 1], f) : r
		}, f.innerTickSize = function(e) {
			return arguments.length ? (r = +e, f) : r
		}, f.outerTickSize = function(e) {
			return arguments.length ? (i = +e, f) : i
		}, f.tickPadding = function(e) {
			return arguments.length ? (s = +e, f) : s
		}, f.tickSubdivide = function() {
			return arguments.length && f
		}, f
	};
	var Lf = "bottom",
		Af = {
			top: 1,
			right: 1,
			bottom: 1,
			left: 1
		};
	e.svg.brush = function() {
		function h(t) {
			t.each(function() {
				var t = e.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", m).on("touchstart.brush", m),
					i = t.selectAll(".background").data([0]);
				i.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
				var s = t.selectAll(".resize").data(c, kn);
				s.exit().remove(), s.enter().append("g").attr("class", function(e) {
					return "resize " + e
				}).style("cursor", function(e) {
					return _f[e]
				}).append("rect").attr("x", function(e) {
					return /[ew]$/.test(e) ? -3 : null
				}).attr("y", function(e) {
					return /^[ns]/.test(e) ? -3 : null
				}).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", h.empty() ? "none" : null);
				var o = e.transition(t),
					u = e.transition(i),
					a;
				n && (a = na(n), u.attr("x", a[0]).attr("width", a[1] - a[0]), d(o)), r && (a = na(r), u.attr("y", a[0]).attr("height", a[1] - a[0]), v(o)), p(o)
			})
		}

		function p(e) {
			e.selectAll(".resize").attr("transform", function(e) {
				return "translate(" + i[+/e$/.test(e)] + "," + o[+/^s/.test(e)] + ")"
			})
		}

		function d(e) {
			e.select(".extent").attr("x", i[0]), e.selectAll(".extent,.n>rect,.s>rect").attr("width", i[1] - i[0])
		}

		function v(e) {
			e.select(".extent").attr("y", o[0]), e.selectAll(".extent,.e>rect,.w>rect").attr("height", o[1] - o[0])
		}

		function m() {
			function O() {
				e.event.keyCode == 32 && (S || (T = null, N[0] -= i[1], N[1] -= o[1], S = 2), B())
			}

			function M() {
				e.event.keyCode == 32 && S == 2 && (N[0] += i[1], N[1] += o[1], S = 0, B())
			}

			function _() {
				var t = e.mouse(c),
					s = !1;
				C && (t[0] += C[0], t[1] += C[1]), S || (e.event.altKey ? (T || (T = [(i[0] + i[1]) / 2, (o[0] + o[1]) / 2]), N[0] = i[+(t[0] < T[0])], N[1] = o[+(t[1] < T[1])]) : T = null), w && D(t, n, 0) && (d(y), s = !0), E && D(t, r, 1) && (v(y), s = !0), s && (p(y), g({
					type: "brush",
					mode: S ? "move" : "resize"
				}))
			}

			function D(e, t, n) {
				var r = na(t),
					s = r[0],
					c = r[1],
					h = N[n],
					p = n ? o : i,
					d = p[1] - p[0],
					v, m;
				S && (s -= h, c -= d + h), v = (n ? l : f) ? Math.max(s, Math.min(c, e[n])) : e[n], S ? m = (v += h) + d : (T && (h = Math.max(s, Math.min(c, 2 * T[n] - v))), h < v ? (m = v, v = h) : m = h);
				if (p[0] != v || p[1] != m) return n ? a = null : u = null, p[0] = v, p[1] = m, !0
			}

			function P() {
				_(), y.style("pointer-events", "all").selectAll(".resize").style("display", h.empty() ? "none" : null), e.select("body").style("cursor", null), k.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), x(), g({
					type: "brushend"
				})
			}
			var c = this,
				m = e.select(e.event.target),
				g = t.of(c, arguments),
				y = e.select(c),
				b = m.datum(),
				w = !/^(n|s)$/.test(b) && n,
				E = !/^(e|w)$/.test(b) && r,
				S = m.classed("extent"),
				x = wt(),
				T, N = e.mouse(c),
				C, k = e.select(s).on("keydown.brush", O).on("keyup.brush", M);
			e.event.changedTouches ? k.on("touchmove.brush", _).on("touchend.brush", P) : k.on("mousemove.brush", _).on("mouseup.brush", P), y.interrupt().selectAll("*").interrupt();
			if (S) N[0] = i[0] - N[0], N[1] = o[0] - N[1];
			else if (b) {
				var L = +/w$/.test(b),
					A = +/^n/.test(b);
				C = [i[1 - L] - N[0], o[1 - A] - N[1]], N[0] = i[L], N[1] = o[A]
			} else e.event.altKey && (T = N.slice());
			y.style("pointer-events", "none").selectAll(".resize").style("display", null), e.select("body").style("cursor", m.style("cursor")), g({
				type: "brushstart"
			}), _()
		}
		var t = F(h, "brushstart", "brush", "brushend"),
			n = null,
			r = null,
			i = [0, 0],
			o = [0, 0],
			u, a, f = !0,
			l = !0,
			c = Df[0];
		return h.event = function(n) {
			n.each(function() {
				var n = t.of(this, arguments),
					r = {
						x: i,
						y: o,
						i: u,
						j: a
					},
					s = this.__chart__ || r;
				this.__chart__ = r, xf ? e.select(this).transition().each("start.brush", function() {
					u = s.i, a = s.j, i = s.x, o = s.y, n({
						type: "brushstart"
					})
				}).tween("brush:brush", function() {
					var e = ko(i, r.x),
						t = ko(o, r.y);
					return u = a = null,
						function(s) {
							i = r.x = e(s), o = r.y = t(s), n({
								type: "brush",
								mode: "resize"
							})
						}
				}).each("end.brush", function() {
					u = r.i, a = r.j, n({
						type: "brush",
						mode: "resize"
					}), n({
						type: "brushend"
					})
				}) : (n({
					type: "brushstart"
				}), n({
					type: "brush",
					mode: "resize"
				}), n({
					type: "brushend"
				}))
			})
		}, h.x = function(e) {
			return arguments.length ? (n = e, c = Df[!n << 1 | !r], h) : n
		}, h.y = function(e) {
			return arguments.length ? (r = e, c = Df[!n << 1 | !r], h) : r
		}, h.clamp = function(e) {
			return arguments.length ? (n && r ? (f = !!e[0], l = !!e[1]) : n ? f = !!e : r && (l = !!e), h) : n && r ? [f, l] : n ? f : r ? l : null
		}, h.extent = function(e) {
			var t, s, f, l, c;
			if (!arguments.length) return n && (u ? (t = u[0], s = u[1]) : (t = i[0], s = i[1], n.invert && (t = n.invert(t), s = n.invert(s)), s < t && (c = t, t = s, s = c))), r && (a ? (f = a[0], l = a[1]) : (f = o[0], l = o[1], r.invert && (f = r.invert(f), l = r.invert(l)), l < f && (c = f, f = l, l = c))), n && r ? [
				[t, f],
				[s, l]
			] : n ? [t, s] : r && [f, l];
			if (n) {
				t = e[0], s = e[1], r && (t = t[0], s = s[0]), u = [t, s], n.invert && (t = n(t), s = n(s)), s < t && (c = t, t = s, s = c);
				if (t != i[0] || s != i[1]) i = [t, s]
			}
			if (r) {
				f = e[0], l = e[1], n && (f = f[1], l = l[1]), a = [f, l], r.invert && (f = r(f), l = r(l)), l < f && (c = f, f = l, l = c);
				if (f != o[0] || l != o[1]) o = [f, l]
			}
			return h
		}, h.clear = function() {
			return h.empty() || (i = [0, 0], o = [0, 0], u = a = null), h
		}, h.empty = function() {
			return !!n && i[0] == i[1] || !!r && o[0] == o[1]
		}, e.rebind(h, t, "on")
	};
	var _f = {
			n: "ns-resize",
			e: "ew-resize",
			s: "ns-resize",
			w: "ew-resize",
			nw: "nwse-resize",
			ne: "nesw-resize",
			se: "nwse-resize",
			sw: "nesw-resize"
		},
		Df = [
			["n", "e", "s", "w", "nw", "ne", "se", "sw"],
			["e", "w"],
			["n", "s"],
			[]
		],
		Pf = $n.format = xr.timeFormat,
		Hf = Pf.utc,
		Bf = Hf("%Y-%m-%dT%H:%M:%S.%LZ");
	Pf.iso = Date.prototype.toISOString && +(new Date("2000-01-01T00:00:00.000Z")) ? jf : Bf, jf.parse = function(e) {
		var t = new Date(e);
		return isNaN(t) ? null : t
	}, jf.toString = Bf.toString, $n.second = Gn(function(e) {
		return new Jn(Math.floor(e / 1e3) * 1e3)
	}, function(e, t) {
		e.setTime(e.getTime() + Math.floor(t) * 1e3)
	}, function(e) {
		return e.getSeconds()
	}), $n.seconds = $n.second.range, $n.seconds.utc = $n.second.utc.range, $n.minute = Gn(function(e) {
		return new Jn(Math.floor(e / 6e4) * 6e4)
	}, function(e, t) {
		e.setTime(e.getTime() + Math.floor(t) * 6e4)
	}, function(e) {
		return e.getMinutes()
	}), $n.minutes = $n.minute.range, $n.minutes.utc = $n.minute.utc.range, $n.hour = Gn(function(e) {
		var t = e.getTimezoneOffset() / 60;
		return new Jn((Math.floor(e / 36e5 - t) + t) * 36e5)
	}, function(e, t) {
		e.setTime(e.getTime() + Math.floor(t) * 36e5)
	}, function(e) {
		return e.getHours()
	}), $n.hours = $n.hour.range, $n.hours.utc = $n.hour.utc.range, $n.month = Gn(function(e) {
		return e = $n.day(e), e.setDate(1), e
	}, function(e, t) {
		e.setMonth(e.getMonth() + t)
	}, function(e) {
		return e.getMonth()
	}), $n.months = $n.month.range, $n.months.utc = $n.month.utc.range;
	var qf = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31126e6],
		Rf = [
			[$n.second, 1],
			[$n.second, 5],
			[$n.second, 15],
			[$n.second, 30],
			[$n.minute, 1],
			[$n.minute, 5],
			[$n.minute, 15],
			[$n.minute, 30],
			[$n.hour, 1],
			[$n.hour, 3],
			[$n.hour, 6],
			[$n.hour, 12],
			[$n.day, 1],
			[$n.day, 2],
			[$n.week, 1],
			[$n.month, 1],
			[$n.month, 3],
			[$n.year, 1]
		],
		Uf = Pf.multi([
			[".%L", function(e) {
				return e.getMilliseconds()
			}],
			[":%S", function(e) {
				return e.getSeconds()
			}],
			["%I:%M", function(e) {
				return e.getMinutes()
			}],
			["%I %p", function(e) {
				return e.getHours()
			}],
			["%a %d", function(e) {
				return e.getDay() && e.getDate() != 1
			}],
			["%b %d", function(e) {
				return e.getDate() != 1
			}],
			["%B", function(e) {
				return e.getMonth()
			}],
			["%Y", ui]
		]),
		zf = {
			range: function(t, n, r) {
				return e.range(Math.ceil(t / r) * r, +n, r).map(If)
			},
			floor: kn,
			ceil: kn
		};
	Rf.year = $n.year, $n.scale = function() {
		return Ff(e.scale.linear(), Rf, Uf)
	};
	var Wf = Rf.map(function(e) {
			return [e[0].utc, e[1]]
		}),
		Xf = Hf.multi([
			[".%L", function(e) {
				return e.getUTCMilliseconds()
			}],
			[":%S", function(e) {
				return e.getUTCSeconds()
			}],
			["%I:%M", function(e) {
				return e.getUTCMinutes()
			}],
			["%I %p", function(e) {
				return e.getUTCHours()
			}],
			["%a %d", function(e) {
				return e.getUTCDay() && e.getUTCDate() != 1
			}],
			["%b %d", function(e) {
				return e.getUTCDate() != 1
			}],
			["%B", function(e) {
				return e.getUTCMonth()
			}],
			["%Y", ui]
		]);
	Wf.year = $n.year.utc, $n.scale.utc = function() {
		return Ff(e.scale.linear(), Wf, Xf)
	}, e.text = Ln(function(e) {
		return e.responseText
	}), e.json = function(e, t) {
		return An(e, "application/json", Vf, t)
	}, e.html = function(e, t) {
		return An(e, "text/html", $f, t)
	}, e.xml = Ln(function(e) {
		return e.responseXML
	}), typeof define == "function" && define.amd ? define("../node_modules/d3/d3", e) : typeof module == "object" && module.exports ? module.exports = e : this.d3 = e
}(), define("data/full.json", [], function() {
	return {
		directed: !1,
		graph: [],
		nodes: [

		{
			name:"Donald Trump",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Donald Trump",
			
		},


		{
			name:"Ted Cruz",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Ted Cruz",
			
		},


		{
			name:"Hilary Clinton",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Hilary Clinton",
			
		},


		{
			name:"Bernie Sanders",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Bernie Sanders",
			
		},


		{
			name:"Marco Rubio",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Marco Rubio",
			
		},


		{
			name:"Ben Carson",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Ben Carson",
			
		},



		{
			name:"Jeb Bush",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Jeb Bush",
			
		},


		{
			name:"Carly Fiorina",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Carly Fiorina",
			
		},


		{
			name:"Chris Christie",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Chris Christie",
			
		},

		{
			name:"Rand Paul",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Rand Paul",
			
		},

		{
			name:"Lindsey Graham",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Lindsey Graham",
			
		},

		{
			name:"Bobby Jindal",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Bobby Jindal",
			
		},

		{
			name:"Rick Perry",
			team_count: 2, // team count is important to draw a node
			type: "club",
			id: "Rick Perry",
			
		},


		{
			
			short_name: "#Building_wall",  // Hashtag_name
			team: "FL",
			club: "Donald Trump",
			country: "FL",
			type: "player",
			id: "#Building_wall"
			
		}, 
		{

			country: "AL",
			type: "team",
			id: "AL",
		},


		{
			country: "AK",
			type: "team",
			id: "AK",
		},

		{
			country: "AZ",
			type: "team",
			id: "AZ",
		},

		{
			country: "AR",
			type: "team",
			id: "AR",
		},

		{
			country: "CA",
			type: "team",
			id: "CA",
		},

		{
			country: "CO",
			type: "team",
			id: "CO",
		},

		{
			country: "CT",
			type: "team",
			id: "CT",
		},

		

		{
			country: "DE",
			type: "team",
			id: "DE",
		},

		{
			country: "FL",
			type: "team",
			id: "FL",
		},
		{
			country: "GA",
			type: "team",
			id: "GA",
		},

		{
			country: "HI",
			type: "team",
			id: "HI",
		},

		{
			country: "ID",
			type: "team",
			id: "ID",
		},

		{
			country: "IL",
			type: "team",
			id: "IL",
		},
		{
			country: "IN",
			type: "team",
			id: "IN",
		},
		

		{
			country: "IA",
			type: "team",
			id: "IA",
		},

		{
			country: "KS",
			type: "team",
			id: "KS",
		},
		
		{
			country: "KY",
			type: "team",
			id: "KY",
		},

		{
			country: "LA",
			type: "team",
			id: "LA",
		},

		{
			country: "ME",
			type: "team",
			id: "ME",
		},

		{
			country: "MD",
			type: "team",
			id: "MD",
		},

		{
			country: "MA",
			type: "team",
			id: "MA",
		},

		{
			country: "MI",
			type: "team",
			id: "MN",
		},

		{
			country: "MS",
			type: "team",
			id: "MS",
		},

		{
			country: "MO",
			type: "team",
			id: "MO",
		},

		{
			country: "MT",
			type: "team",
			id: "Mt",
		},

		{
			country: "NE",
			type: "team",
			id: "NE",
		},

		{
			country: "NV",
			type: "team",
			id: "NV",
		},

		{
			country: "NH",
			type: "team",
			id: "NH",
		},

		{
			country: "NJ",
			type: "team",
			id: "NJ",
		},

		{
			country: "NY",
			type: "team",
			id: "NY",
		},

		{
			country: "NC",
			type: "team",
			id: "NC",
		},

		{
			country: "ND",
			type: "team",
			id: "ND",
		},

		{
			country: "OH",
			type: "team",
			id: "OH",
		},
		{
			country: "OK",
			type: "team",
			id: "OK",
		},
		{
			country: "OR",
			type: "team",
			id: "OR",
		},
		{
			country: "PA",
			type: "team",
			id: "PA",
		},
		{
			country: "RI",
			type: "team",
			id: "RI",
		},
		{
			country: "SC",
			type: "team",
			id: "SC",
		},
		{
			country: "SD",
			type: "team",
			id: "SD",
		},
		{
			country: "TN",
			type: "team",
			id: "TN",
		},
		{
			country: "UT",
			type: "team",
			id: "UT",
		},
		{
			country: "VT",
			type: "team",
			id: "VT",
		},
		{
			country: "VA",
			type: "team",
			id: "VA",
		},
		{
			country: "WA",
			type: "team",
			id: "WA",
		},
		{
			country: "WV",
			type: "team",
			id: "WV",
		},
		{
			country: "WI",
			type: "team",
			id: "WI",
		},
		{
			country: "WY",
			type: "team",
			id: "WY",
		},















		],
		links: [{

			source:22,
			target: 13
		}, 

		 {

			source: 13,
			target: 0
		}, 


		{

			source:0,
			target: 25
		},{

			source:0,
			target: 30
		},{

			source:0,
			target: 29		
		}, {

			source:0,
			target: 15		
		
		}, {

			source:0,
			target: 24		
		}, {

			source:0,
			target: 50
		},{

			source:0,
			target: 58
		},{

			source:0,
			target: 40
		},{

			source:0,
			target: 55
		},{

			source:0,
			target: 54		
		}, {

			source:0,
			target: 50		
		
		}, {

			source:0,
			target: 48		
		},{

			source:0,
			target: 57		
		},{

			source:0,
			target: 17
		}, {

			source:0,
			target: 19
		},{

			source:0,
			target: 34
		},{

			source:0,
			target: 16
		},{

			source:0,
			target: 43
		},{

			source:0,
			target: 47		
		}, {

			source:0,
			target: 37		
		
		}, {

			source:0,
			target: 21		
		},{

			source:0,
			target: 42		
		}, {

			source:0,
			target: 57
		},{

			source:0,
			target: 15
		},{

			source:0,
			target: 39
		},{

			source:0,
			target:16
		},{

			source:0,
			target: 49		
		}, {

			source:0,
			target: 55	
		
		}, {

			source:0,
			target: 18		
		},{

			source:0,
			target: 27		
		},


		{

			source:1,
			target: 29		
		}, {

			source:1,
			target: 30		
		}, {

			source:1,
			target: 88		
		}, {

			source:1,
			target: 54		
		},
		{

			source:2,
			target: 39		
		},{

			source:2,
			target: 18		
		},  {

			source:2,
			target: 19		
		}, {

			source:3,
			target: 22		
		}, 
		{

			source:3,
			target: 44		
		}, {

			source:3,
			target: 52		
		}, {

			source:3,
			target: 30		
		},

		{

			source:4,
			target: 29		
		}, 

		{

			source:4,
			target: 23		
		},{

			source:5,
			target:58		
		}, {

			source:5,
			target: 45		
		}, 
		{

			source:5,
			target: 43		
		}, {
			source: 5,
			target: 52
		}, {
			source: 6,
			target: 15
		}, {
			source: 6,
			target: 49
		}, {
			source: 6,
			target: 29
		}, {
			source: 6,
			target: 54
		}, {
			source: 7,
			target: 12
		}, {
			source: 7,
			target: 56
		}, {
			source: 7,
			target: 46
		}, {
			source: 7,
			target: 35
		}, {
			source: 7,
			target: 39
		}, {
			source: 8,
			target: 38
		}, {
			source: 8,
			target: 37
		}, {
			source: 8,
			target: 23
		}, {
			source: 8,
			target: 44
		}, {
			source: 8,
			target: 34
		}, {
			source: 9,
			target: 45
		}, {
			source: 9,
			target: 25
		}, {
			source: 9,
			target: 24
		}, {
			source: 9,
			target: 14
		}, {
			source: 10,
			target: 29
		}, {
			source: 10,
			target: 53
		}, {
			source: 10,
			target: 31
		}, {
			source: 10,
			target: 57
		}, {
			source: 11,
			target: 23
		}, {
			source: 11,
			target: 29
		}, {
			source: 12,
			target: 27
		}, {
			source: 12,
			target: 43
		
		
		}],
		multigraph: !1
	}
}), define("data/precomputed.json", [], function() {
	return {
	}
}), define("format/shortTeamName", [], function() {
	return function(e) {
		return e == "South Korea" ? "S. Korea" : e == "Netherlands" ? "Nether-\nlands" : e == "Switzerland" ? "Switzer-\nland" : e == "Ivory Coast" ? "Ivory\nCoast" : e == "Bosnia and Herzegovina" ? "Bosnia/\nHerz." : e == "Costa Rica" ? "Costa\nRica" : e.length > 10 ? codes[e] : e
	}
}), define("format/shortClubName", [], function() {
	return function(e) {
		var t = {
			FC: !0,
			SS: !0,
			CF: !0,
			SSC: !0,
			AC: !0,
			SK: !0,
			CA: !0,
			CD: !0
		};
		return e = e.split(" ").filter(function(e) {
			return !t[e]
		}).join(" "), e == "Internazionale" ? "Inter\nMilan" : e == "Bayern Muenchen" ? "Bayern\nMunich" : e.length > 9 ? e.replace(/([^ ]{3}[^ ]+) /g, "$1\n") : e
	}
}), define("format/shortPlayerName", [], function() {
	return function(e) {
		return e.short_name == "V. PERSIE" ? "Van Persie" : e.short_name == "NEYMAR JR" ? "Neymar" : e.short_name.split(" ").map(function(e) {
			return e.slice(0, 1) + e.slice(1).toLowerCase()
		}).join(" ")
	}
}), define("data/playerMugs.json", [], function() {
	return {
		// "NEYMAR JR": "neymar.png",
		// SILVA: "david-silva.jpg",
		// SCHWEINSTEIGER: "schweinsteiger.jpg",
		// MESSI: "MESSI.png",
		// "V. PERSIE": "persie.jpg",
		// ROONEY: "rooney.jpg",
		// RONALDO: "ronaldo.jpg",
		// MARTINEZ: "martinez.jpg",
		// ALEXIS: "sanchez.jpg",
		// SUAREZ: "suarez.jpg",
		// BALOTELLI: "balotelli.jpg",
		// POGBA: "pogba.jpg",
		// BRADLEY: "bradley.jpg",
		// EDUARDO: "eduardo-da-silva.jpg",
		// KERZHAKOV: "kerzhakov.jpg",
		// HENRIQUE: "henrique.png",
		// MARCELO: "marcelo.png",
		// FERNANDINHO: "fernandinho.png",
		// DEMICHELIS: "DEMICHELIS.png",
		// AGUERO: "AGUERO.png",
		// LAVEZZI: "LAVEZZI.png",
		// ALVAREZ: "ALVAREZ.png"
	}
}), define("graph", ["../node_modules/d3/d3", "underscore/1.5", "format/shortTeamName", "format/shortClubName", "format/shortPlayerName", "data/playerMugs.json"], function(e, t, n, r, i, s) {
	function c(c, h) {
		function N(c, p, N, C, L, A) {
			function X(t) {
				function n() {
					var n = P.filter(t.filter),
						r = e.set(n.map(function(e) {
							return e.key
						})),
						i = D.filter(function(e) {
							return r.has("club:" + e.club)
						});
					x.classed({
						fade: function(e) {
							return e.faded = !0, e.type == "club" ? e.faded = !r.has(e.key) : e.type == "player" ? e.faded = !r.has("club:" + e.club) : (e.type == "team" && (e.faded = !0, i.forEach(function(t) {
								t.team == e.id && (e.faded = !1)
							})), e.faded)
						},
						focus: function(e) {
							return n.length > 1 && e.type == "player" ? !1 : !e.faded
						}
					}), S.classed({
						fade: function(e) {
							return e.source.faded || e.target.faded
						},
						focus: function(e) {
							return !e.source.faded && !e.target.faded
						}
					})
				}

				function r() {
					var n = H.filter(t.filter),
						r = e.set(n.map(function(e) {
							return e.key
						})),
						i = D.filter(function(e) {
							return r.has("team:" + e.team)
						}),
						s = e.set(i.map(function(e) {
							return "club:" + e.club
						})).values().map(M),
						o = e.set(s.map(function(e) {
							return e.id
						})),
						u = D.filter(function(e) {
							return o.has(e.club)
						}),
						a = e.set();
					u.forEach(function(e) {
						a.add(e.team)
					}), x.classed({
						fade: function(e) {
							return e.faded = !0, e.type == "team" ? e.faded = !a.has(e.country) : e.type == "player" ? e.faded = !o.has(e.club) : e.type == "club" ? e.faded = !o.has(e.id) : e.faded
						},
						focus: function(e) {
							return e.type == "player" && !e.faded ? i.length < 5 : e.type == "club" && !e.faded ? e.team_count > 1 : !e.faded
						}
					}), S.classed({
						fade: function(e) {
							return e.source.faded || e.target.faded
						},
						focus: function(e) {
							return !e.source.faded && !e.target.faded
						}
					})
				}

				function i() {
					var n = D.filter(t.filter),
						r = e.set(n.map(function(e) {
							return e.key
						})),
						i = D.filter(function(e) {
							return r.has("team:" + e.team)
						}),
						s = e.set(i.map(function(e) {
							return "club:" + e.club
						})).values().map(M),
						o = e.set(s.map(function(e) {
							return e.id
						})),
						u = e.set();
					n = D.filter(function(e) {
						return o.has(e.club)
					}), n.forEach(function(e) {
						u.add(e.team)
					}), x.classed({
						fade: function(e) {
							return e.faded = !0, e.type == "team" ? e.faded = !u.has(e.country) : e.type == "player" ? e.faded = !o.has(e.club) : e.type == "club" ? e.faded = !o.has(e.id) : e.faded
						},
						focus: function(e) {
							return e.type == "player" && !e.faded ? i.length < 5 : e.type == "club" && !e.faded ? e.team_count > 1 : !e.faded
						}
					}), S.classed({
						fade: function(e) {
							return e.source.faded || e.target.faded
						},
						focus: function(e) {
							return !e.source.faded && !e.target.faded
						}
					})
				}
				if (!t) {
					E.selectAll(".node.focus").each(function(e) {
						e.old_x && (e.x = e.old_x, e.y = e.old_y, e.old_x = null, e.old_y = null)
					}), x.classed({
						fade: !1,
						focus: !1
					}), S.classed({
						fade: !1,
						focus: !1
					}), ut(!0);
					return
				}
				t.type == "club" ? n() : t.type == "player" ? i() : r(), E.selectAll(".node.focus").each(function() {
					this.parentNode.appendChild(this)
				}), st(E.selectAll(".node." + (t.type == "club" ? "player" : "club") + ".focus"), t.type == "club" ? 9 : 3)
			}

			function V() {
				X(j && j.type != "player" ? {
					type: j.type,
					filter: function(e) {
						return e == j
					}
				} : null)
			}

			function $(e) {
				var t = e.source,
					n = e.target;
				return t.type == "club" ? J(t) : n.type == "club" ? J(n) : "#bbb"
			}

			function J(e) {
				return e.type == "player" ? e.topPlayer ? "url(#mug-" + e.topPlayer.replace(".", "-") + ")" : "#aaa" : e.type == "club" ? L(e) : "#aaa"
			}

			function K(e) {
				return e.type == "team" && !e.neighbors.values().length && P.length ? .3 : 1
			}

			function Q(e) {
				return "node " + e.type + (O.has(e.id) ? " top-club" : "") + (e.topPlayer ? " top-player" : "")
			}

			function G(e) {
				return function(t) {
					return t.type == e
				}
			}

			function Y() {
				o.nodes.forEach(function(t) {
					t.neighbors = e.set()
				}), o.links.forEach(function(e) {
					var t = o.nodes[e.source],
						n = o.nodes[e.target];
					t.neighbors.add(n.key), n.neighbors.add(t.key)
				})
			}

			function Z(e, t) {
				e.order = t, e.rank_radius = 3 + Math.pow((e.rank - 1200) / 840, 2) * 30, e.centrality_radius = 5 + Math.pow((e.centrality - .0255) / .67, 1) * 28, e.num_player_radius = Math.sqrt(e.neighbors.values().length) * 7 * A;
				if (H.length == 2) e.fixed = !0;
				else {
					var n = Math.random();
					e.phi = t / P.length * Math.PI * 2, e.x = m + Math.cos(e.phi) * (y * .2 + y * n * .6), e.y = g + Math.sin(e.phi) * (y * .2 + y * n * .6)
				}
			}

			function et(e) {
				var t = H.filter(function(t) {
						return t.country == e.country
					})[0],
					n = Math.random() * Math.PI * 2,
					r = 20 + Math.random() * 30;
				e.x = t.x + Math.cos(n) * r, e.y = t.y + Math.sin(n) * r, C.indexOf(e.short_name) > -1 && s[e.short_name] && (e.topPlayer = s[e.short_name])
			}

			function tt(e, t) {
				e.order = t, e.fixed = !0, e.phi = t / H.length * Math.PI * 2, e.x = m + Math.cos(e.phi) * (y - 30), e.y = g + Math.sin(e.phi) * (y - 30)
			}

			function nt(e) {
				var t = 0;
				return o.nodes.forEach(function(e) {
					e.radius = e.type == "team" ? 28 : e.type == "club" ? e.num_player_radius : e.topPlayer ? 20 / A : H.length < 5 ? 8 : 4, t += Math.PI * e.radius * e.radius
				}), o.nodes.length > 100 && (t = 2e5), Math.min(1, Math.sqrt(Math.PI * y * y * (1 - e) / t))
			}

			function rt(e) {
				x.each(at(.05 * e.alpha));
				if (e.alpha < .06 || T) {
					var t = ot(H.length > 2 ? 1 * b : 3 * b, .5);
					x.each(function(e) {
						t(e)
					})
				}
				ut(), e.alpha < .035 && (T = !0, w.stop(), it()), h || w.stop()
			}

			function it() {
				function r() {
					var e = ot(H.length > 2 ? 1 * b : 3 * b, .5);
					return t.each(function(t) {
						e(t)
					}), ut(), !(n--)
				}
				var t = E.selectAll(".node"),
					n = 15;
				e.timer(r)
			}

			function st(t, n) {
				var r = [];
				if (!T) return;
				w.stop(), t.each(function(e) {
					r.push(e), e.old_x || (e.old_x = e.x, e.old_y = e.y)
				}), e.range(50).forEach(function(e) {
					var i = ot(n, (50 - e) / 70, r, !0);
					t.each(function(e) {
						i(e)
					})
				}), ut(!0)
			}

			function ot(t, n, r, i) {
				r = r || o.nodes;
				var s = e.geom.quadtree(r);
				return function(e) {
					var r = e.radius + q + t,
						o = e.x - r,
						u = e.x + r,
						a = e.y - r,
						f = e.y + r;
					s.visit(function(r, s, l, c, h) {
						if (r.point && r.point !== e) {
							var p = e.x - r.point.x,
								d = e.y - r.point.y,
								v = i ? Math.abs(d) : Math.sqrt(p * p + d * d),
								m = e.radius + r.point.radius + t * (e.type == "club" ? 6 : 1);
							v < m && (v = (v - m) / v * n, i || (e.x -= p *= v), e.y -= d *= v, i || (r.point.x += p), r.point.y += d)
						}
						return s > u || c < o || l > f || h < a
					})
				}
			}

			function ut(e) {
				var t = e ? x.transition(200) : x,
					n = e ? S.transition(200) : S;
				n.attr("x1", function(e) {
					return e.source.x
				}).attr("y1", function(e) {
					return e.source.y
				}).attr("x2", function(e) {
					return e.target.x
				}).attr("y2", function(e) {
					return e.target.y
				}), t.attr("transform", function(e) {
					return "translate(" + e.x + "," + e.y + ")"
				})
			}

			function at(e) {
				return function(t) {
					t.y += (g - t.y) * e * (H.length == 2 && t.type == "club" ? -10 : 1), t.x += (m - t.x) * e
				}
			}

			function ft() {
				o.nodes.forEach(function(e) {
					u[e.key] = {
						x: e.x,
						y: e.y,
						r: e.radius
					}
				})
			}

			function lt() {
				o.nodes.forEach(function(e) {
					e.type != "team" && p && p[e.key] ? (e.x = d * p[e.key][0], e.y = v * p[e.key][1]) : e.type != "team" && u[e.key] && (e.x = u[e.key].x, e.y = u[e.key].y)
				})
			}

			function ct() {
				this.parentNode.appendChild(this)
			}
			o && ft(), p && (T = !0);
			var O = e.set(N || f);
			C = C ? l.slice().concat(C) : l.slice(), o = c;
			var M = k(o.nodes);
			Y();
			var D = o.nodes.filter(G("player")),
				P = o.nodes.filter(G("club")),
				H = o.nodes.filter(G("team")),
				B = y;
			H.length < 6 && (y *= .8), H.length < 2 && (y = 0);
			var j = null,
				F = "id";
			H.sort(function(e, t) {
				return e[F] > t[F] ? 1 : e[F] < t[F] ? -1 : 0
			}), H.forEach(tt), P.forEach(Z), D.forEach(et), y = B, lt(), b = nt(.8) * A;
			var I = 40 * b;
			E.selectAll("defs pattern").attr("width", I).attr("height", I).attr("x", -I * .5).attr("y", -I * .5).append("image").attr("xlink:href", function(e) {
				return NYTG_ASSETS + "mugs/" + e
			}).attr("width", I).attr("height", I);
			var q = 0;
			o.nodes.forEach(function(e) {
				q = Math.max(q, e.radius *= b)
			}), w.gravity(0).charge(H.length > 3 ? -30 : 200).linkDistance(H.length > 3 ? 10 : 35).linkStrength(function(e) {
				return H.length < 4 ? 1 : e.source.type == "club" || e.target.type == "club" ? e.source.topPlayer || e.target.topPlayer ? .5 : .3 : 1
			}).nodes(o.nodes).links(o.links).on("tick", rt).start(), S = E.selectAll(".link"), x = E.selectAll(".node"), S = S.data(o.links, function(e) {
				return e.source.key + "--" + e.target.key
			}).style("stroke", $), S.exit().remove(), S.enter().insert("line").attr("class", "link").style("stroke", $).style("stroke-width", function() {
				return .3
			}), x = x.data(o.nodes, function(e) {
				return e.key
			}).attr("class", Q), x.select("circle").transition(0).attr("fill", J).attr("r", function(e) {
				return e.radius
			}), x.select("text").transition(0).style("opacity", 1), x.transition(500).style("opacity", K), x.each(ct);
			var R = x.exit();
			R.transition(0).delay(500).remove(), R.selectAll("text").style("opacity", 0), R.selectAll("circle").transition(500).attr("r", 0);
			var U = x.enter().append("g").attr("class", Q);
			E.selectAll(".node.club").call(w.drag), U.append("circle").attr("fill", J).attr("r", 0).transition(500).attr("r", function(e) {
				return e.radius
			}), U.style("opacity", K), U.each(function(t) {
				var s = (t.type == "team" ? n(t.country) : t.type == "player" ? i(t) : r(t.id)).split("\n");
				e.select(this).append("text").attr("y", t.topPlayer ? 20 : 13 * s.length * -0.5).selectAll("tspan").data(s).enter().append("tspan").text(function(e) {
					return e
				}).attr("x", 0).attr("dy", 12)
			}), E.selectAll(".node.top-player").each(ct), E.selectAll(".node.top-club").each(ct);
			var z = t.throttle(V, 600, {
				leading: !1
			});
			x.on("mouseenter", function(e) {
				j = e, this.parent.appendChild(this), V()
			});
			var W = t.throttle(it, 1e3, {
				leading: !1
			});
			x.on("mouseleave", function() {
				j = null, z(), W()
			}), h || ut(), a.filter = X
		}

		function C() {
			var t = e.values(s),
				n = 40 * b;
			E.append("defs").selectAll("pattern").data(t).enter().append("pattern").attr("id", function(e) {
				return "mug-" + e.replace(".", "-")
			}).attr("patternUnits", "userSpaceOnUse").attr("width", n).attr("height", n).attr("x", -n * .5).attr("y", -n * .5).append("image").attr("xlink:href", function(e) {
				return NYTG_ASSETS + "mugs/" + e
			}).attr("width", n).attr("height", n)
		}

		function k(e) {
			var t = {};
			return e.forEach(function(e) {
					e.key = e.type + ":" + e.id, t[e.key] = e
				}),
				function(e) {
					return t[e]
				}
		}
		var p = c.append("div").attr("class", "graph-container"),
			d = p.node().clientWidth,
			v = Math.min(d * 1, Math.max(580, window.innerHeight - 120)),
			m = d * .5,
			g = v * .5,
			y = Math.min(d, v) * .49,
			b = 1,
			w = e.layout.force().charge(-30).chargeDistance(0).gravity(0).linkDistance(10).linkStrength(function(e) {
				return e.source.type == "club" || e.target.type == "club" ? e.source.topPlayer || e.target.topPlayer ? .5 : .3 : 1
			}).size([d, v]),
			E = p.append("svg").attr("width", d).attr("height", v);
		C();
		var S = E.selectAll(".link"),
			x = E.selectAll(".node"),
			T = !1;
		a.update = N, a.resize = function() {
			d = p.node().clientWidth, v = Math.min(d * 1, Math.max(580, window.innerHeight - 120)), m = d * .5, g = v * .5, y = Math.min(d, v) * .49, w.size([d, v]), E.attr("width", d).attr("height", v)
		};
		return
	}
	var o, u = {},
		a = {
			init: function(e, t) {
				c(e, t)
			}
		},
		f = ["Real Madrid CF", "FC Bayern Muenchen", "Juventus FC", "Manchester United FC", "FC Barcelona", "Chelsea FC", "Arsenal FC", "FC Dynamo Moskow", "AC Milan"],
		l = ["NEYMAR JR", "SILVA", "SCHWEINSTEIGER", "MESSI", "V. PERSIE", "ROONEY", "RONALDO", "MARTINEZ", "ALEXIS", "SUAREZ", "BALOTELLI", "POGBA", "BRADLEY", "EDUARDO", "KERZHAKOV"];
	return a
}), define("graph/filter", [], function() {
	return function(e, t, n) {
		function i(e) {
			return e.source > -1 && e.target > -1
		}

		function s(t) {
			t.source = e.nodes[t.source], t.target = e.nodes[t.target]
		}

		function o(t) {
			t.source = e.nodes.indexOf(t.source), t.target = e.nodes.indexOf(t.target)
		}

		function u(e) {
			var t = {};
			return e.forEach(function(e) {
				e.key = e.type + ":" + e.id, t[e.key] = e
			}), t
		}
		e = JSON.parse(JSON.stringify(e)), e.links.forEach(s), e.nodes = e.nodes.filter(t), e.links.forEach(o), e.links = e.links.filter(i);
		if (n) {
			e.links.forEach(s);
			var r = u(e.nodes);
			e.links.forEach(function(e) {
				e.target.type == "club" && (e.source = r["team:" + e.source.team])
			}), e.nodes = e.nodes.filter(function(e) {
				return e.type != "player"
			}), e.links.forEach(o), e.links = e.links.filter(i)
		}
		return e
	}
}), define("admanager", ["jquery/nyt", "underscore/1.5"], function(e, t) {
	var n = function(t) {
		this.o = e.extend(!0, {
			page: undefined,
			positions: "",
			autoconfirm: 0,
			impression: !0,
			v: "3",
			url: "http://www.nytimes.com/adx/bin/adxrun.html",
			dataType: "jsonp"
		}, t), this.o.autoconfirm = this.o.autoconfirm ? 1 : 0, this.dataLoaded = undefined, this.loadData(), this.o.impression && this.makeImpression()
	};
	return n.prototype = {
		loadData: function() {
			var t = decodeURIComponent(e.param({
				page: this.o.page,
				positions: this.o.positions,
				autoconfirm: this.o.autoconfirm,
				v: this.o.v,
				attributes: "nyt5",
				jsonp: this.o.dataType === "jsonp" ? "adloaded" : undefined
			}));
			this.dataLoaded = e.ajax({
				url: this.o.url,
				type: "GET",
				data: t,
				processData: !1,
				dataType: this.o.dataType,
				jsonpCallback: "adloaded",
				error: function(e) {}
			})
		},
		makeImpression: function() {
			var t = e("<div></div>").css({
				position: "absolute",
				overflow: "hidden",
				height: "0",
				width: "0"
			}).appendTo("body");
			this.place(t, "ADX_CLIENTSIDE", !1)
		},
		place: function(t, n, r) {
			this.dataLoaded.done(function(i, s) {
				var o = i.ads[n].creative;
				if (!o) {
					if (n === "ADX_CLIENTSIDE") return;
					throw new Error("AdManager Error: Position", n, " not found in ad data definition. Did you remember to specify the correct positons in the initial call?")
				}
				e(t).each(function() {
					var t = e(this).empty();
					if (r) {
						var n, i = document.createElement("iframe"),
							s = e(i);
						s.attr({
							frameBorder: 0,
							border: 0,
							scrolling: "no"
						}).appendTo(t).css({
							width: "100%",
							height: t.height()
						}), n = i.contentDocument || i.contentWindow.document, n.open(), n.write(o), n.close()
					} else t.html(o)
				})
			})
		}
	}, n
}), require(["jquery/nyt", "underscore/1.5", "foundation/views/page-manager", "../node_modules/d3/d3", "data/full.json", "data/precomputed.json", "graph", "graph/filter", "admanager"], function(e, t, n, r, i, s, o, u, a) {
	function h() {
		e(window).on("resize", function() {
			e("html").removeClass("g-tablet-landscape").removeClass("g-tablet-portrait").addClass(document.body.clientWidth < 780 ? "g-tablet-portrait" : "g-tablet-landscape")
		})
	}

	function p() {
		var t = e('<div class="g-kicker-brazil">Brazil 2014</div>'),
			n = e("#main").find(".kicker-container");
		t.appendTo(n)
	}

	function y(e) {
		return g(e.confederation)
	}

	function w(e) {
		if (e == "CAF") return "Africa";
		if (e == "AFC") return "Asia";
		if (e == "CONMEBOL") return "South America";
		if (e == "CONCACAF") return "North America";
		if (e == "UEFA") return "Europe"
	}

	function S(e) {
		return e == "England" ? "English Premier League" : e == "Spain" ? "Spanish La Liga" : e == "Germany" ? "German Bundesliga" : e == "Italy" ? "Italian Serie A" : e
	}

	function C() {
		N.each(function(e, t) {
			m[t].offset = this.offsetTop - 300
		})
	}

	function M() {
		function s() {
			var e = r.val().trim().toLowerCase();
			d.selectAll(".node.player").classed("highlighted", function(t) {
				return e && t.name.toLowerCase().indexOf(e) > -1
			})
		}

		function a(e, t, n) {
			var r;
			n == "all" ? r = I() : e == "team" ? r = D(function(e) {
				return t == "stage" ? e[t] >= n : e[t] == n
			}, !0) : r = B(function(e) {
				return t != "rank" ? e[t] == n : n == "Top 10" ? e.rank > 0 && e.rank <= 10 : n == "Top 50" ? e.rank <= 50 : n == "Top 100" ? e.rank <= 100 : e.rank > 100 || e.rank === 0
			}), O = u(i, r, Modernizr.touch), o.update(O, {}, null, null, y, 1)
		}
		var t = e("#g-slides .slide.explore"),
			n = e("select", t),
			r = e(".player-search", t);
		n.on("change", function(t) {
			var r = e(t.target),
				i = r.val();
			i != "all" ? (n.val("all"), r.val(i), a(r.data("type"), r.data("for"), i)) : a(null, null, "all")
		}), r.change(s).keyup(s)
	}

	function _(e) {
		L = m[k], v.html(L.caption), O = u(i, L.filter, Modernizr.touch), d.select("#g-graph svg").attr("class", L.id), o.update(O, e || !A || L.fixed ? s[k] : {}, L.highlightClubs, L.players, L.clubColors, L.zoom || 1)
	}

	function D(e, t) {
		var n = F(i.nodes);
		return function(r) {
			if (r.type == "team") return t || e(r);
			if (r.type == "player") return e(n["team:" + r.country]);
			if (r.type == "club") {
				var s = !1;
				return i.nodes.forEach(function(t) {
					t.type == "player" && t.club == r.id && (s = s || e(n["team:" + t.country]))
				}), s
			}
		}
	}

	function P(t) {
		if (x != "scroll") return;
		var n = e(window).scrollTop();
		d.classed({
			fixed: n > 88,
			"fixed-bottom": n - document.body.clientHeight + window.innerHeight > -490
		});
		var r = -1;
		m.forEach(function(e, t) {
			n > e.offset && (r = t)
		}), r != k && (r < 0 && (r = 0), k = r, N.classed("faded", function(e, t) {
			return t != k
		}), _(t == "first"))
	}

	function H(e) {
		var t = {};
		e.forEach(function(e) {
			t[e] = !0
		});
		var n = {};
		return i.nodes.forEach(function(e) {
				e.type == "player" && t[e.team] && (n[e.club] || (n[e.club] = r.set()), n[e.club].add(e.team))
			}), r.keys(n).forEach(function(e) {
				n[e] = n[e].values().length
			}),
			function(r) {
				if (r.type == "team") return t[r.id];
				if (r.type == "player") return t[r.team] && (n[r.club] > 1 || e.length == 1);
				if (r.type == "club") return n[r.id] > 1 || e.length == 1
			}
	}

	function B(e, n) {
		t.isString(e) && (e = [e]);
		if (t.isArray(e)) {
			var r = e;
			e = function(e) {
				return r.indexOf(e.id) > -1
			}
		}
		var s = F(i.nodes),
			o = {};
		return n && i.nodes.forEach(function(t) {
				t.type == "player" && e(s["club:" + t.club]) && (o[t.team] = !0)
			}),
			function(t) {
				return t.type == "club" ? e(t) : t.type == "player" ? e(s["club:" + t.club]) : n && t.type == "team" ? o[t.country] : !0
			}
	}

	function j(e, n) {
		return t.isString(e) && (e = [e]), B(function(t) {
			return e.indexOf(t.confederation) > -1
		}, n)
	}

	function F(e) {
		var t = {};
		return e.forEach(function(e) {
			e.key = e.type + ":" + e.id, t[e.key] = e
		}), t
	}

	function I() {
		return B(function(e) {
			return e.team_count >= 2
		})
	}

	function q() {
		var e = {},
			t = {},
			n = [];
		i.nodes.forEach(function(n) {
			n.type == "player" && (e[n.club] || (e[n.club] = 0), e[n.club]++, t[n.club] || (t[n.club] = r.set()), t[n.club].add(n.team))
		}), r.keys(t).forEach(function(r) {
			n.push({
				name: r,
				players: e[r],
				teams: t[r].values().length
			})
		}), n.sort(function(e, t) {
			return t.players - e.players
		}), n.sort(function(e, t) {
			return t.teams - e.teams
		})
	}

	function R(t, n) {
		var r = e("<div />");
		return n.forEach(function(i, s) {
			var o = e('<div class="item" />').appendTo(r);
			e('<div class="color" />').css("background", n[s]).appendTo(o), e('<div class="label" />').html(t[s]).appendTo(o)
		}), '<div class="legend">' + r.html() + "</div>"
	}

	function U(e) {
		return e >= 10051 ? 1300 : e >= 10030 ? 1050 : e >= 1030 ? 945 : e >= 1010 ? 720 : e >= 120 ? 600 : e >= 110 ? 480 : 300
	}
	var f = U(n.getCurrentBreakpoint());
	try {
		var l = new a({
			page: "www.nytimes.com/interactive/yr/mo/day/sports/worldcup",
			positions: "Sponsor1",
			autoconfirm: !0
		});
		l.place("#g-sponsor", "Sponsor1")
	} catch (c) {
		console.warn(c)
	}
	Modernizr.touch && window.screen.availWidth == 320 ? e("html").addClass("g-mobile-portrait") : document.body.clientWidth < 945 ? (e("html").addClass("g-tablet-portrait"), h()) : Modernizr.touch && document.body.clientWidth < 1100 && (e("html").addClass("g-tablet-landscape"), h()), n.on("nyt:page-breakpoint", function(t) {
		U(t) != f && (f = U(t), C(), f < 945 ? (x = "tablet", e("html").addClass("g-tablet-portrait")) : (x = "scroll", e("html").removeClass("g-tablet-portrait")), P(), o.resize(), _(!0))
	}), p();
	var d = r.select("#g-graph"),
		v = d.select("#g-caption"),
		m = [];
	q();
	var g = r.scale.ordinal().domain(["UEFA", "CAF", "AFC", "CONMEBOL", "CONCACAF"]).range(["#AAD348", "#E69980", "#c09ec6", "#FDC130", "#88bbdb"]),
		b = R(g.domain().map(w), g.range());
	m.push({
		id: "intro",
		title: "",
		text: "The best national teams come together every four years, but the global tournament is mostly a remix of the professional leagues that are in season most of the time. Three out of every four World Cup players play in Europe, and the top clubs like Barcelona, Bayern Munich and Manchester United have players from one end of the globe to the other.</p>" + b + "",
		caption: "Soccer clubs with players on at least two national teams",
		filter: I(),
		clubColors: y
	}), m.push({
		id: "brazil-vs-argentina",
		title: "Brazil vs. Argentina",
		text: "Even archrivals Brazil and Argentina overlap. Neymar, Brazilâ€™s star forward, plays alongside Lionel Messi, the Argentine captain, on powerhouse Barcelona. In all, eight Brazilians and 12 Argentines play together on European club teams.",
		caption: "Soccer club connections between the national teams of Argentina and Brazil",
		clubColors: y,
		zoom: 1.3,
		fixed: !0,
		players: ["NEYMAR JR", "MESSI", "MARCELO", "HENRIQUE", "AGUERO", "DEMICHELIS", "FERNANDINHO", "LAVEZZI", "ALVAREZ"],
		highlightClubs: ["Real Madrid CF", "FC Bayern Muenchen", "Juventus FC", "Manchester City FC", "FC Barcelona", "SSC Napoli", "Arsenal FC", "Paris Saint-Germain FC", "FC Internazionale"],
		filter: H(["Brazil", "Argentina"])
	});
	var E = r.scale.ordinal().domain(["England", "Spain", "Germany", "Italy", "Other Leagues"]).range(["#9ab7d6", "#e5afa4", "#c8e1a3", "#e5d8a3", "#ccc"]);
	m.push({
		id: "uefa",
		title: "The European Connection",
		text: "Three out of every four World Cup players play on a European professional team. Bayern Munich and Manchester United top the list, each with 14 players on World Cup teams. More than half of the European club players in the World Cup play in one of the four strongest primary leagues (in England, Spain, Germany and Italy). </p><p>" + R(E.domain().map(S), E.range()),
		caption: "European clubs with players on at least one national team",
		filter: j("UEFA", !1),
		clubColors: function(e) {
			var t = e.country;
			return E.domain().indexOf(t) < 0 && (t = "Other Leagues"), E(t)
		}
	}), m.push({
		id: "all-but-uefa",
		title: "The Rest of the World",
		text: "Meanwhile, leagues outside Europe account for only 24 percent of the World Cup players, and only a handful of those teams supply players for more than one World Cup team. M.L.S. teams account for only 3 percent of the World Cup players.<p>" + R(g.domain().map(w).slice(1), g.range().slice(1)),
		caption: "Non-European clubs with players on at least one national team",
		filter: j(["CONCACAF", "AFC", "CONMEBOL", "CAF"], !1),
		clubColors: y,
		highlightClubs: ["Toronto FC", "New York Red Bulls", "Tigres", "Houston Dynamo", "Cruz Azul FC", "CD Chivas USA", "Melbourne Victory FC", "Sanfrecce Hiroshima", "CA Monarcas Morelia", "Al Hilal"]
	}), m.push({
		id: "explore",
		title: "Find a Team",
		filter: I(),
		clubColors: y,
		text: "Why not look around for yourself?</p>" + e(".g-filter-template").html() + b,
		caption: ""
	});
	var x = Modernizr.touch && window.window.screen.availWidth < 686 ? "mobile" : Modernizr.touch || document.body.clientWidth < 975 ? "tablet" : "scroll",
		T = r.select("#g-slides"),
		N = T.selectAll(".slide").data(m).enter().append("div").attr("class", function(e) {
			return "slide " + e.id
		});
	N.append("div").attr("class", "anchor").attr("id", function(e) {
		return e.id
	}), N.append("h2").append("a").attr("href", function(e) {
		return "#" + e.id
	}).html(function(e) {
		return e.title
	}), x == "mobile" && (N.append("a").attr("class", "img-link").attr("href", function(e, t) {
		return NYTG_ASSETS + "images/slide-" + (t + 1) + ".png"
	}).append("img").attr("class", "static").attr("src", function(e, t) {
		return NYTG_ASSETS + "images/slide-" + (t + 1) + ".png"
	}), N.append("div").attr("class", "img-caption").text(function(e, t) {
		return e.caption + (t < 1 && window.screen.availWidth < 400 ? ". Click image to open larger version." : "")
	})), N.append("p").html(function(e) {
		return e.text
	}), x != "mobile" && (N.append("div").attr("class", "img-caption").text(function(e) {
		return e.caption
	}), N.append("img").attr("class", "static").attr("src", function(e, t) {
		return NYTG_ASSETS + "images/slide-" + (t + 1) + ".png"
	}), e("#g-slides .slide").each(function() {
		var t = e(this);
		e(".legend", t).appendTo(t)
	})), C(), M();
	var k = -2,
		L, A = !Modernizr.touch && (/Chrome/.test(navigator.appVersion) || navigator.mozContacts),
		O;
	o.init(d, A), window.store = function() {
		s[k] = {};
		var t = r.select("#g-graph svg"),
			n = +t.attr("width"),
			i = +t.attr("height");
		O.nodes.forEach(function(e) {
			s[k][e.key] = [+(e.x / n).toFixed(4), +(e.y / i).toFixed(4)]
		}), e.ajax({
			method: "put",
			url: "/precomputed.json",
			data: JSON.stringify(s)
		})
	}, x == "scroll" && (P("first"), window.onscroll = P)
}), define("script", function() {});