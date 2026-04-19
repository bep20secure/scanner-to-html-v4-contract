(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [883],
  {
    876: (e, t, r) => {
      var n =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== r.g && r.g),
        i = (function () {
          function e() {
            ((this.fetch = !1), (this.DOMException = n.DOMException));
          }
          return ((e.prototype = n), new e());
        })();
      (!(function (e) {
        !(function (t) {
          var n =
              (void 0 !== e && e) ||
              ("undefined" != typeof self && self) ||
              (void 0 !== r.g && r.g) ||
              {},
            i = {
              searchParams: "URLSearchParams" in n,
              iterable: "Symbol" in n && "iterator" in Symbol,
              blob:
                "FileReader" in n &&
                "Blob" in n &&
                (function () {
                  try {
                    return (new Blob(), !0);
                  } catch (e) {
                    return !1;
                  }
                })(),
              formData: "FormData" in n,
              arrayBuffer: "ArrayBuffer" in n,
            };
          if (i.arrayBuffer)
            var s = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              a =
                ArrayBuffer.isView ||
                function (e) {
                  return e && s.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function o(e) {
            if (
              ("string" != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
            )
              throw TypeError(
                'Invalid character in header field name: "' + e + '"',
              );
            return e.toLowerCase();
          }
          function u(e) {
            return ("string" != typeof e && (e = String(e)), e);
          }
          function c(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              i.iterable &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function l(e) {
            ((this.map = {}),
              e instanceof l
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                  ? e.forEach(function (e) {
                      if (2 != e.length)
                        throw TypeError(
                          "Headers constructor: expected name/value pair to be length 2, found" +
                            e.length,
                        );
                      this.append(e[0], e[1]);
                    }, this)
                  : e &&
                    Object.getOwnPropertyNames(e).forEach(function (t) {
                      this.append(t, e[t]);
                    }, this));
          }
          function d(e) {
            if (!e._noBody) {
              if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
              e.bodyUsed = !0;
            }
          }
          function h(e) {
            return new Promise(function (t, r) {
              ((e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  r(e.error);
                }));
            });
          }
          function f(e) {
            var t = new FileReader(),
              r = h(t);
            return (t.readAsArrayBuffer(e), r);
          }
          function p(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return (t.set(new Uint8Array(e)), t.buffer);
          }
          function m() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = e), e))
                  if ("string" == typeof e) this._bodyText = e;
                  else if (i.blob && Blob.prototype.isPrototypeOf(e))
                    this._bodyBlob = e;
                  else if (i.formData && FormData.prototype.isPrototypeOf(e))
                    this._bodyFormData = e;
                  else if (
                    i.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e)
                  )
                    this._bodyText = e.toString();
                  else {
                    var t;
                    i.arrayBuffer &&
                    i.blob &&
                    (t = e) &&
                    DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = p(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : i.arrayBuffer &&
                          (ArrayBuffer.prototype.isPrototypeOf(e) || a(e))
                        ? (this._bodyArrayBuffer = p(e))
                        : (this._bodyText = e =
                            Object.prototype.toString.call(e));
                  }
                else ((this._noBody = !0), (this._bodyText = ""));
                !this.headers.get("content-type") &&
                  ("string" == typeof e
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8",
                      )
                    : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : i.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8",
                        ));
              }),
              i.blob &&
                (this.blob = function () {
                  var e = d(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (!this._bodyFormData)
                    return Promise.resolve(new Blob([this._bodyText]));
                  throw Error("could not read FormData body as blob");
                }),
              (this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  var e = d(this);
                  return (
                    e ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset +
                              this._bodyArrayBuffer.byteLength,
                          ),
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                  );
                }
                if (i.blob) return this.blob().then(f);
                throw Error("could not read as ArrayBuffer");
              }),
              (this.text = function () {
                var e,
                  t,
                  r,
                  n,
                  i,
                  s = d(this);
                if (s) return s;
                if (this._bodyBlob)
                  return (
                    (e = this._bodyBlob),
                    (r = h((t = new FileReader()))),
                    (i = (n = /charset=([A-Za-z0-9_-]+)/.exec(e.type))
                      ? n[1]
                      : "utf-8"),
                    t.readAsText(e, i),
                    r
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e), r = Array(t.length), n = 0;
                        n < t.length;
                        n++
                      )
                        r[n] = String.fromCharCode(t[n]);
                      return r.join("");
                    })(this._bodyArrayBuffer),
                  );
                if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                throw Error("could not read FormData body as text");
              }),
              i.formData &&
                (this.formData = function () {
                  return this.text().then(v);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          ((l.prototype.append = function (e, t) {
            ((e = o(e)), (t = u(t)));
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t;
          }),
            (l.prototype.delete = function (e) {
              delete this.map[o(e)];
            }),
            (l.prototype.get = function (e) {
              return ((e = o(e)), this.has(e) ? this.map[e] : null);
            }),
            (l.prototype.has = function (e) {
              return this.map.hasOwnProperty(o(e));
            }),
            (l.prototype.set = function (e, t) {
              this.map[o(e)] = u(t);
            }),
            (l.prototype.forEach = function (e, t) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (l.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push(r);
                }),
                c(e)
              );
            }),
            (l.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                c(e)
              );
            }),
            (l.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push([r, t]);
                }),
                c(e)
              );
            }),
            i.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries));
          var g = [
            "CONNECT",
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT",
            "TRACE",
          ];
          function y(e, t) {
            if (!(this instanceof y))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.',
              );
            var r,
              i,
              s = (t = t || {}).body;
            if (e instanceof y) {
              if (e.bodyUsed) throw TypeError("Already read");
              ((this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new l(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                s ||
                  null == e._bodyInit ||
                  ((s = e._bodyInit), (e.bodyUsed = !0)));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (t.headers || !this.headers) && (this.headers = new l(t.headers)),
              (this.method =
                ((i = (r = t.method || this.method || "GET").toUpperCase()),
                g.indexOf(i) > -1 ? i : r)),
              (this.mode = t.mode || this.mode || null),
              (this.signal =
                t.signal ||
                this.signal ||
                (function () {
                  if ("AbortController" in n)
                    return new AbortController().signal;
                })()),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && s)
            )
              throw TypeError("Body not allowed for GET or HEAD requests");
            if (
              (this._initBody(s),
              ("GET" === this.method || "HEAD" === this.method) &&
                ("no-store" === t.cache || "no-cache" === t.cache))
            ) {
              var a = /([?&])_=[^&]*/;
              a.test(this.url)
                ? (this.url = this.url.replace(
                    a,
                    "$1_=" + new Date().getTime(),
                  ))
                : (this.url +=
                    (/\?/.test(this.url) ? "&" : "?") +
                    "_=" +
                    new Date().getTime());
            }
          }
          function v(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var r = e.split("="),
                      n = r.shift().replace(/\+/g, " "),
                      i = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(n), decodeURIComponent(i));
                  }
                }),
              t
            );
          }
          function b(e, t) {
            if (!(this instanceof b))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.',
              );
            if (
              (t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              this.status < 200 || this.status > 599)
            )
              throw RangeError(
                "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].",
              );
            ((this.ok = this.status >= 200 && this.status < 300),
              (this.statusText =
                void 0 === t.statusText ? "" : "" + t.statusText),
              (this.headers = new l(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e));
          }
          ((y.prototype.clone = function () {
            return new y(this, { body: this._bodyInit });
          }),
            m.call(y.prototype),
            m.call(b.prototype),
            (b.prototype.clone = function () {
              return new b(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new l(this.headers),
                url: this.url,
              });
            }),
            (b.error = function () {
              var e = new b(null, { status: 200, statusText: "" });
              return ((e.ok = !1), (e.status = 0), (e.type = "error"), e);
            }));
          var A = [301, 302, 303, 307, 308];
          ((b.redirect = function (e, t) {
            if (-1 === A.indexOf(t)) throw RangeError("Invalid status code");
            return new b(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = n.DOMException));
          try {
            new t.DOMException();
          } catch (e) {
            ((t.DOMException = function (e, t) {
              ((this.message = e), (this.name = t));
              var r = Error(e);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException));
          }
          function w(e, r) {
            return new Promise(function (s, a) {
              var c = new y(e, r);
              if (c.signal && c.signal.aborted)
                return a(new t.DOMException("Aborted", "AbortError"));
              var d = new XMLHttpRequest();
              function h() {
                d.abort();
              }
              if (
                ((d.onload = function () {
                  var e,
                    t,
                    r = {
                      statusText: d.statusText,
                      headers:
                        ((e = d.getAllResponseHeaders() || ""),
                        (t = new l()),
                        e
                          .replace(/\r?\n[\t ]+/g, " ")
                          .split("\r")
                          .map(function (e) {
                            return 0 === e.indexOf("\n")
                              ? e.substr(1, e.length)
                              : e;
                          })
                          .forEach(function (e) {
                            var r = e.split(":"),
                              n = r.shift().trim();
                            if (n) {
                              var i = r.join(":").trim();
                              try {
                                t.append(n, i);
                              } catch (e) {
                                console.warn("Response " + e.message);
                              }
                            }
                          }),
                        t),
                    };
                  (0 === c.url.indexOf("file://") &&
                  (d.status < 200 || d.status > 599)
                    ? (r.status = 200)
                    : (r.status = d.status),
                    (r.url =
                      "responseURL" in d
                        ? d.responseURL
                        : r.headers.get("X-Request-URL")));
                  var n = "response" in d ? d.response : d.responseText;
                  setTimeout(function () {
                    s(new b(n, r));
                  }, 0);
                }),
                (d.onerror = function () {
                  setTimeout(function () {
                    a(TypeError("Network request failed"));
                  }, 0);
                }),
                (d.ontimeout = function () {
                  setTimeout(function () {
                    a(TypeError("Network request timed out"));
                  }, 0);
                }),
                (d.onabort = function () {
                  setTimeout(function () {
                    a(new t.DOMException("Aborted", "AbortError"));
                  }, 0);
                }),
                d.open(
                  c.method,
                  (function (e) {
                    try {
                      return "" === e && n.location.href ? n.location.href : e;
                    } catch (t) {
                      return e;
                    }
                  })(c.url),
                  !0,
                ),
                "include" === c.credentials
                  ? (d.withCredentials = !0)
                  : "omit" === c.credentials && (d.withCredentials = !1),
                "responseType" in d &&
                  (i.blob
                    ? (d.responseType = "blob")
                    : i.arrayBuffer && (d.responseType = "arraybuffer")),
                r &&
                  "object" == typeof r.headers &&
                  !(
                    r.headers instanceof l ||
                    (n.Headers && r.headers instanceof n.Headers)
                  ))
              ) {
                var f = [];
                (Object.getOwnPropertyNames(r.headers).forEach(function (e) {
                  (f.push(o(e)), d.setRequestHeader(e, u(r.headers[e])));
                }),
                  c.headers.forEach(function (e, t) {
                    -1 === f.indexOf(t) && d.setRequestHeader(t, e);
                  }));
              } else
                c.headers.forEach(function (e, t) {
                  d.setRequestHeader(t, e);
                });
              (c.signal &&
                (c.signal.addEventListener("abort", h),
                (d.onreadystatechange = function () {
                  4 === d.readyState &&
                    c.signal.removeEventListener("abort", h);
                })),
                d.send(void 0 === c._bodyInit ? null : c._bodyInit));
            });
          }
          ((w.polyfill = !0),
            n.fetch ||
              ((n.fetch = w),
              (n.Headers = l),
              (n.Request = y),
              (n.Response = b)),
            (t.Headers = l),
            (t.Request = y),
            (t.Response = b),
            (t.fetch = w));
        })({});
      })(i),
        (i.fetch.ponyfill = !0),
        delete i.fetch.polyfill);
      var s = n.fetch ? n : i;
      (((t = s.fetch).default = s.fetch),
        (t.fetch = s.fetch),
        (t.Headers = s.Headers),
        (t.Request = s.Request),
        (t.Response = s.Response),
        (e.exports = t));
    },
    1284: (e, t, r) => {
      "use strict";
      r.d(t, { k5: () => l });
      var n = r(2094),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = n.createContext && n.createContext(i),
        a = ["attr", "size", "title"];
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                var n, i, s;
                ((n = e),
                  (i = t),
                  (s = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = s));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function l(e) {
        return (t) =>
          n.createElement(
            d,
            o({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, c({ key: r }, t.attr), e(t.child)),
                )
              );
            })(e.child),
          );
      }
      function d(e) {
        var t = (t) => {
          var r,
            { attr: i, size: s, title: u } = e,
            l = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++)
                  ((r = s[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r]));
              }
              return i;
            })(e, a),
            d = s || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              o(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                i,
                l,
                {
                  className: r,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              u && n.createElement("title", null, u),
              e.children,
            )
          );
        };
        return void 0 !== s
          ? n.createElement(s.Consumer, null, (e) => t(e))
          : t(i);
      }
    },
    3120: (e, t, r) => {
      "use strict";
      let n, i, s, a, o, u, c, l, d, h, f, p, m, g, y, v, b, A;
      r.d(t, { Ay$: () => f5 });
      var w,
        x,
        E,
        k,
        I,
        _,
        S,
        T,
        P,
        C,
        B,
        O,
        N,
        R,
        M,
        F,
        L,
        D,
        j,
        H,
        G,
        U,
        q = {};
      (r.r(q),
        r.d(q, {
          BRAND: () => nY,
          DIRTY: () => rX,
          EMPTY_PATH: () => rJ,
          INVALID: () => rY,
          NEVER: () => iF,
          OK: () => r0,
          ParseStatus: () => r$,
          Schema: () => r9,
          ZodAny: () => nI,
          ZodArray: () => nP,
          ZodBigInt: () => nb,
          ZodBoolean: () => nA,
          ZodBranded: () => nX,
          ZodCatch: () => nW,
          ZodDate: () => nw,
          ZodDefault: () => nJ,
          ZodDiscriminatedUnion: () => nN,
          ZodEffects: () => nz,
          ZodEnum: () => nq,
          ZodError: () => rq,
          ZodFirstPartyTypeKind: () => T,
          ZodFunction: () => nj,
          ZodIntersection: () => nR,
          ZodIssueCode: () => rG,
          ZodLazy: () => nH,
          ZodLiteral: () => nG,
          ZodMap: () => nL,
          ZodNaN: () => n$,
          ZodNativeEnum: () => nQ,
          ZodNever: () => nS,
          ZodNull: () => nk,
          ZodNullable: () => nK,
          ZodNumber: () => nv,
          ZodObject: () => nC,
          ZodOptional: () => nV,
          ZodParsedType: () => rj,
          ZodPipeline: () => n0,
          ZodPromise: () => nZ,
          ZodReadonly: () => n1,
          ZodRecord: () => nF,
          ZodSchema: () => r9,
          ZodSet: () => nD,
          ZodString: () => ny,
          ZodSymbol: () => nx,
          ZodTransformer: () => nz,
          ZodTuple: () => nM,
          ZodType: () => r9,
          ZodUndefined: () => nE,
          ZodUnion: () => nB,
          ZodUnknown: () => n_,
          ZodVoid: () => nT,
          addIssueToContext: () => rW,
          any: () => ia,
          array: () => il,
          bigint: () => n7,
          boolean: () => ie,
          coerce: () => iM,
          custom: () => n3,
          date: () => it,
          datetimeRegex: () => ng,
          defaultErrorMap: () => rQ,
          discriminatedUnion: () => im,
          effect: () => iS,
          enum: () => ik,
          function: () => iw,
          getErrorMap: () => rV,
          getParsedType: () => rH,
          instanceof: () => n5,
          intersection: () => ig,
          isAborted: () => r1,
          isAsync: () => r6,
          isDirty: () => r2,
          isValid: () => r3,
          late: () => n6,
          lazy: () => ix,
          literal: () => iE,
          makeIssue: () => rK,
          map: () => ib,
          nan: () => n9,
          nativeEnum: () => iI,
          never: () => iu,
          null: () => is,
          nullable: () => iP,
          number: () => n8,
          object: () => id,
          objectUtil: () => _,
          oboolean: () => iR,
          onumber: () => iN,
          optional: () => iT,
          ostring: () => iO,
          pipeline: () => iB,
          preprocess: () => iC,
          promise: () => i_,
          quotelessJson: () => rU,
          record: () => iv,
          set: () => iA,
          setErrorMap: () => rz,
          strictObject: () => ih,
          string: () => n4,
          symbol: () => ir,
          transformer: () => iS,
          tuple: () => iy,
          undefined: () => ii,
          union: () => ip,
          unknown: () => io,
          util: () => I,
          void: () => ic,
        }));
      var Q = {};
      (r.r(Q),
        r.d(Q, {
          abiSchemaToJsonSchema: () => iW,
          codePointToInt: () => i0,
          ensureIfUint8Array: () => i9,
          ethAbiToJsonSchema: () => i$,
          fetchArrayElement: () => iY,
          hexToNumber: () => i1,
          hexToUint8Array: () => i8,
          numberToHex: () => i2,
          padLeft: () => i3,
          parseBaseType: () => iK,
          transformJsonDataToAbiFormat: () => iX,
          uint8ArrayToHexString: () => i6,
        }));
      var Z = {};
      (r.r(Z),
        r.d(Z, {
          isBatchRequest: () => a2,
          isBatchResponse: () => aY,
          isResponseRpcError: () => aZ,
          isResponseWithError: () => aV,
          isResponseWithNotification: () => aK,
          isResponseWithResult: () => az,
          isSubscriptionResult: () => aJ,
          isValidResponse: () => a$,
          setRequestIdStart: () => aX,
          toBatchPayload: () => a1,
          toPayload: () => a0,
          validateResponse: () => aW,
        }));
      var z = {};
      (r.r(z),
        r.d(z, {
          ChunkResponseParser: () => a5,
          Eip1193Provider: () => a8,
          EventEmitter: () => s2,
          SocketProvider: () => oe,
          Web3DeferredPromise: () => a6,
          asciiToHex: () => sq,
          bytesToHex: () => sP,
          bytesToUint8Array: () => sS,
          checkAddressCheckSum: () => s5,
          compareBlockNumbers: () => an,
          convert: () => ab,
          convertScalarValue: () => ay,
          encodePacked: () => aB,
          ethUnitMap: () => sI,
          format: () => aA,
          fromAscii: () => sQ,
          fromDecimal: () => sR,
          fromTwosComplement: () => af,
          fromUtf8: () => sL,
          fromWei: () => sW,
          getStorageSlotNumForLongString: () => aR,
          hexToAscii: () => sZ,
          hexToBytes: () => sC,
          hexToNumber: () => sB,
          hexToNumberString: () => sM,
          hexToString: () => sU,
          hexToUtf8: () => sj,
          isAddress: () => s4,
          isBatchRequest: () => a2,
          isBatchResponse: () => aY,
          isBloom: () => s8,
          isContractAddressInBloom: () => ae,
          isContractInitOptions: () => ai,
          isDataFormat: () => am,
          isHex: () => s6,
          isHexStrict: () => s3,
          isInBloom: () => s9,
          isNullish: () => as,
          isPromise: () => aD,
          isResponseRpcError: () => aZ,
          isResponseWithError: () => aV,
          isResponseWithNotification: () => aK,
          isResponseWithResult: () => az,
          isSubscriptionResult: () => aJ,
          isTopic: () => at,
          isTopicInBloom: () => ar,
          isUint8Array: () => sx,
          isUserEthereumAddressInBloom: () => s7,
          isValidResponse: () => a$,
          jsonRpc: () => Z,
          keccak256: () => ax,
          keccak256Wrapper: () => ax,
          leftPad: () => ad,
          mergeDeep: () => ao,
          numberToHex: () => sN,
          padLeft: () => au,
          padRight: () => ac,
          pollTillDefined: () => aG,
          pollTillDefinedAndReturnIntervalId: () => aH,
          processSolidityEncodePackedArgs: () => aC,
          randomBytes: () => aM,
          randomHex: () => aF,
          rejectIfConditionAtInterval: () => aq,
          rejectIfTimeout: () => aU,
          rightPad: () => al,
          setRequestIdStart: () => aX,
          sha3: () => aE,
          sha3Raw: () => ak,
          soliditySha3: () => aO,
          soliditySha3Raw: () => aN,
          stringToHex: () => sD,
          toAscii: () => sz,
          toBatchPayload: () => a1,
          toBigInt: () => sJ,
          toBool: () => sX,
          toChecksumAddress: () => sY,
          toDecimal: () => sO,
          toHex: () => sV,
          toNumber: () => sK,
          toPayload: () => a0,
          toTwosComplement: () => ah,
          toUtf8: () => sH,
          toWei: () => s$,
          uint8ArrayConcat: () => sE,
          uint8ArrayEquals: () => sk,
          utf8ToBytes: () => sG,
          utf8ToHex: () => sF,
          uuidV4: () => aQ,
          validateResponse: () => aW,
          waitWithTimeout: () => aj,
        }));
      var V = {};
      (r.r(V),
        r.d(V, {
          DO: () => o0,
          OG: () => un,
          My: () => o2,
          Ph: () => o8,
          lX: () => o9,
          Id: () => ur,
          fg: () => ua,
          qj: () => ut,
          aT: () => o4,
          aY: () => oX,
          lq: () => o7,
          z: () => ue,
          Q5: () => uu,
        }));
      var K = {};
      (r.r(K),
        r.d(K, { secp256k1: () => uD }),
        (function (e) {
          ((e.NUMBER = "NUMBER_NUMBER"),
            (e.HEX = "NUMBER_HEX"),
            (e.STR = "NUMBER_STR"),
            (e.BIGINT = "NUMBER_BIGINT"));
        })(w || (w = {})),
        (function (e) {
          ((e.HEX = "BYTES_HEX"), (e.UINT8ARRAY = "BYTES_UINT8ARRAY"));
        })(x || (x = {})));
      let J = { number: w.BIGINT, bytes: x.HEX },
        W = { number: w.HEX, bytes: x.HEX };
      (!(function (e) {
        ((e.EARLIEST = "earliest"),
          (e.LATEST = "latest"),
          (e.PENDING = "pending"),
          (e.SAFE = "safe"),
          (e.FINALIZED = "finalized"),
          (e.COMMITTED = "committed"));
      })(E || (E = {})),
        (function (e) {
          ((e.chainstart = "chainstart"),
            (e.frontier = "frontier"),
            (e.homestead = "homestead"),
            (e.dao = "dao"),
            (e.tangerineWhistle = "tangerineWhistle"),
            (e.spuriousDragon = "spuriousDragon"),
            (e.byzantium = "byzantium"),
            (e.constantinople = "constantinople"),
            (e.petersburg = "petersburg"),
            (e.istanbul = "istanbul"),
            (e.muirGlacier = "muirGlacier"),
            (e.berlin = "berlin"),
            (e.london = "london"),
            (e.altair = "altair"),
            (e.arrowGlacier = "arrowGlacier"),
            (e.grayGlacier = "grayGlacier"),
            (e.bellatrix = "bellatrix"),
            (e.merge = "merge"),
            (e.capella = "capella"),
            (e.shanghai = "shanghai"));
        })(k || (k = {})));
      let $ = Object.getPrototypeOf(Uint8Array);
      var Y = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let X = Symbol.for("web3/base-provider");
      class ee {
        static isWeb3Provider(e) {
          return e instanceof ee || !!(e && e[X]);
        }
        get [X]() {
          return !0;
        }
        send(e, t) {
          this.request(e)
            .then((e) => {
              t(null, e);
            })
            .catch((e) => {
              t(e);
            });
        }
        sendAsync(e) {
          return Y(this, void 0, void 0, function* () {
            return this.request(e);
          });
        }
        asEIP1193Provider() {
          let e = Object.create(this),
            t = e.request;
          return (
            (e.request = function (e) {
              return Y(this, void 0, void 0, function* () {
                return (yield t(e)).result;
              });
            }),
            (e.asEIP1193Provider = void 0),
            e
          );
        }
      }
      class et extends Array {
        constructor(e) {
          (super(), (this._accountProvider = e));
        }
      }
      class er extends Error {
        get innerError() {
          return this.cause instanceof en ? this.cause.errors : this.cause;
        }
        set innerError(e) {
          Array.isArray(e) ? (this.cause = new en(e)) : (this.cause = e);
        }
        constructor(e, t) {
          (super(e),
            Array.isArray(t) ? (this.cause = new en(t)) : (this.cause = t),
            (this.name = this.constructor.name),
            "function" == typeof Error.captureStackTrace
              ? Error.captureStackTrace(new.target.constructor)
              : (this.stack = Error().stack));
        }
        static convertToString(e, t = !1) {
          if (null == e) return "undefined";
          let r = JSON.stringify(e, (e, t) =>
            "bigint" == typeof t ? t.toString() : t,
          );
          return t && ["bigint", "string"].includes(typeof e)
            ? r.replace(/['\\"]+/g, "")
            : r;
        }
        toJSON() {
          return {
            name: this.name,
            code: this.code,
            message: this.message,
            cause: this.cause,
            innerError: this.cause,
          };
        }
      }
      class en extends er {
        constructor(e) {
          (super(
            `Multiple errors occurred: [${e.map((e) => e.message).join("], [")}]`,
          ),
            (this.code = 208),
            (this.errors = e));
        }
      }
      class ei extends er {
        constructor(e, t) {
          (super(
            `Invalid value given "${er.convertToString(e, !0)}". Error: ${t}.`,
          ),
            (this.name = this.constructor.name));
        }
      }
      class es extends er {
        constructor() {
          (super("Private key must be 32 bytes."), (this.code = 701));
        }
      }
      class ea extends er {
        constructor() {
          (super("Invalid Private Key, Not a valid string or uint8Array"),
            (this.code = 702));
        }
      }
      class eo extends er {
        constructor(e) {
          (super(`"${e}"`), (this.code = 802));
        }
      }
      class eu extends er {
        constructor() {
          (super("Invalid key derivation function"), (this.code = 703));
        }
      }
      class ec extends er {
        constructor() {
          (super("Key derivation failed - possibly wrong password"),
            (this.code = 704));
        }
      }
      class el extends er {
        constructor() {
          (super("Unsupported key store version"), (this.code = 705));
        }
      }
      class ed extends er {
        constructor() {
          (super("Password cannot be empty"), (this.code = 706));
        }
      }
      class eh extends er {
        constructor() {
          (super("Initialization vector must be 16 bytes"), (this.code = 707));
        }
      }
      class ef extends er {
        constructor() {
          (super("c > 1000, pbkdf2 is less secure with less iterations"),
            (this.code = 709));
        }
      }
      class ep extends er {
        constructor(e, t) {
          (super(e),
            (this.code = 500),
            t && ((this.errorCode = t.code), (this.errorReason = t.reason)));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            errorCode: this.errorCode,
            errorReason: this.errorReason,
          });
        }
      }
      class em extends ep {
        constructor(e) {
          (super("Connection not open", e), (this.code = 503));
        }
      }
      class eg extends ep {
        constructor(e) {
          (super(`Maximum number of reconnect attempts reached! (${e})`),
            (this.code = 505));
        }
      }
      class ey extends ep {
        constructor() {
          (super(
            "CONNECTION ERROR: Provider started to reconnect before the response got received!",
          ),
            (this.code = 506));
        }
      }
      class ev extends ep {
        constructor(e) {
          (super(`Request already sent with following id: ${e}`),
            (this.code = 507));
        }
      }
      class eb extends er {
        constructor(e, t) {
          (super(e), (this.code = 300), (this.receipt = t));
        }
      }
      class eA extends er {
        constructor(e, t) {
          (super(
            `The resolver at ${e} does not implement requested method: "${t}".`,
          ),
            (this.address = e),
            (this.name = t),
            (this.code = 301));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            address: this.address,
            name: this.name,
          });
        }
      }
      class ew extends eb {
        constructor(e) {
          if (
            (super(e.message || "Error"),
            (this.name = ("name" in e && e.name) || this.constructor.name),
            (this.stack = ("stack" in e && e.stack) || void 0),
            (this.code = e.code),
            "object" == typeof e.data)
          ) {
            let t;
            ((t =
              e.data && "originalError" in e.data
                ? e.data.originalError
                : e.data),
              (this.data = t.data),
              (this.cause = new ew(t)));
          } else this.data = e.data;
        }
        setDecodedProperties(e, t, r) {
          ((this.errorName = e),
            (this.errorSignature = t),
            (this.errorArgs = r));
        }
        toJSON() {
          let e = Object.assign(Object.assign({}, super.toJSON()), {
            data: this.data,
          });
          return (
            this.errorName &&
              (e = Object.assign(Object.assign({}, e), {
                errorName: this.errorName,
                errorSignature: this.errorSignature,
                errorArgs: this.errorArgs,
              })),
            e
          );
        }
      }
      class ex extends eb {
        constructor(e) {
          (super(
            "Error happened while trying to execute a function inside a smart contract",
          ),
            (this.code = 310),
            (this.cause = new ew(e)));
        }
      }
      class eE extends ei {
        constructor(e) {
          var t, r;
          (super(
            `data: ${null != (t = e.data) ? t : "undefined"}, input: ${null != (r = e.input) ? r : "undefined"}`,
            'You can\'t have "data" and "input" as properties of a contract at the same time, please use either "data" or "input" instead.',
          ),
            (this.code = 311));
        }
      }
      class ek extends er {
        constructor(e) {
          (super(`ENS is not supported on network ${e}`), (this.code = 902));
        }
      }
      class eI extends er {
        constructor() {
          (super("Network not synced"), (this.code = 903));
        }
      }
      class e_ extends er {
        constructor(e) {
          (super(`Invalid parameters passed. "${void 0 !== e ? e : ""}"`),
            (this.hint = e),
            (this.code = 207));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            hint: this.hint,
          });
        }
      }
      class eS extends er {
        constructor() {
          (super(...arguments), (this.code = 201));
        }
      }
      class eT extends er {
        constructor() {
          (super("The method you're trying to call is not implemented."),
            (this.code = 202));
        }
      }
      class eP extends er {
        constructor() {
          (super(...arguments), (this.code = 203));
        }
      }
      class eC extends er {
        constructor() {
          (super(...arguments), (this.code = 204));
        }
      }
      class eB extends er {
        constructor(e, t) {
          (super(e), (this.code = 205), (this.props = null != t ? t : {}));
        }
      }
      class eO extends er {
        constructor(e) {
          (super(
            `A plugin with the namespace: ${e} has already been registered.`,
          ),
            (this.code = 206));
        }
      }
      class eN extends er {
        constructor() {
          (super(...arguments), (this.code = 600));
        }
      }
      class eR extends er {
        constructor(e) {
          (super(`Client URL "${e}" is invalid.`), (this.code = 602));
        }
      }
      class eM extends er {
        constructor() {
          (super(...arguments), (this.code = 603));
        }
      }
      class eF extends er {
        constructor() {
          (super(...arguments), (this.code = 604));
        }
      }
      class eL extends ei {
        constructor() {
          (super(...arguments), (this.code = 801));
        }
      }
      class eD extends er {
        constructor(e, t) {
          (super(e), (this.receipt = t), (this.code = 400));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            receipt: this.receipt,
          });
        }
      }
      class ej extends er {
        constructor(e, t, r, n) {
          (super(
            `Transaction has been reverted by the EVM${
              void 0 === r
                ? ""
                : `:
 ${er.convertToString(r)}`
            }`,
          ),
            (this.reason = e),
            (this.signature = t),
            (this.receipt = r),
            (this.data = n),
            (this.code = 402));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            signature: this.signature,
            receipt: this.receipt,
            data: this.data,
          });
        }
      }
      class eH extends ej {
        constructor(e, t, r, n, i, s, a) {
          (super(e),
            (this.reason = e),
            (this.customErrorName = t),
            (this.customErrorDecodedSignature = r),
            (this.customErrorArguments = n),
            (this.signature = i),
            (this.receipt = s),
            (this.data = a),
            (this.code = 438));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            customErrorName: this.customErrorName,
            customErrorDecodedSignature: this.customErrorDecodedSignature,
            customErrorArguments: this.customErrorArguments,
            signature: this.signature,
            receipt: this.receipt,
            data: this.data,
          });
        }
      }
      class eG extends eD {
        constructor(e) {
          (super(
            `Transaction has been reverted by the EVM${
              void 0 === e
                ? ""
                : `:
 ${er.convertToString(e)}`
            }`,
            e,
          ),
            (this.code = 405));
        }
      }
      class eU extends eD {
        constructor() {
          (super("Raw transaction undefined"), (this.code = 407));
        }
      }
      class eq extends eD {
        constructor() {
          (super("Transaction not found"), (this.code = 430));
        }
      }
      class eQ extends ei {
        constructor(e) {
          (super(e, "invalid transaction with invalid sender"),
            (this.code = 408));
        }
      }
      class eZ extends ei {
        constructor(e) {
          (super(e, "invalid transaction with invalid receiver"),
            (this.code = 437));
        }
      }
      class ez extends ei {
        constructor() {
          (super(
            "MissingCustomChainError",
            "If tx.common is provided it must have tx.common.customChain",
          ),
            (this.code = 410));
        }
      }
      class eV extends ei {
        constructor() {
          (super(
            "MissingCustomChainIdError",
            "If tx.common is provided it must have tx.common.customChain and tx.common.customChain.chainId",
          ),
            (this.code = 411));
        }
      }
      class eK extends ei {
        constructor(e) {
          (super(
            JSON.stringify(e),
            "Chain Id doesnt match in tx.chainId tx.common.customChain.chainId",
          ),
            (this.code = 412));
        }
      }
      class eJ extends ei {
        constructor(e) {
          (super(
            JSON.stringify(e),
            "Chain doesnt match in tx.chain tx.common.basechain",
          ),
            (this.code = 435));
        }
      }
      class eW extends ei {
        constructor(e) {
          (super(
            JSON.stringify(e),
            "hardfork doesnt match in tx.hardfork tx.common.hardfork",
          ),
            (this.code = 436));
        }
      }
      class e$ extends ei {
        constructor() {
          (super(
            "CommonOrChainAndHardforkError",
            "Please provide the common object or the chain and hardfork property but not all together.",
          ),
            (this.code = 413));
        }
      }
      class eY extends ei {
        constructor(e) {
          var t, r;
          (super(
            "MissingChainOrHardforkError",
            `When specifying chain and hardfork, both values must be defined. Received "chain": ${null != (t = e.chain) ? t : "undefined"}, "hardfork": ${null != (r = e.hardfork) ? r : "undefined"}`,
          ),
            (this.code = 414));
        }
      }
      class eX extends er {
        constructor() {
          (super(
            'Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions',
          ),
            (this.code = 440));
        }
      }
      class e0 extends ei {
        constructor(e) {
          var t, r, n, i;
          (super(
            `gas: ${null != (t = e.gas) ? t : "undefined"}, gasPrice: ${null != (r = e.gasPrice) ? r : "undefined"}, maxPriorityFeePerGas: ${null != (n = e.maxPriorityFeePerGas) ? n : "undefined"}, maxFeePerGas: ${null != (i = e.maxFeePerGas) ? i : "undefined"}`,
            '"gas" is missing',
          ),
            (this.code = 415),
            (this.cause = new eX()));
        }
      }
      class e1 extends er {
        constructor() {
          (super(
            'Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions, not both',
          ),
            (this.code = 441));
        }
      }
      class e2 extends ei {
        constructor(e) {
          var t, r, n, i;
          (super(
            `gas: ${null != (t = e.gas) ? t : "undefined"}, gasPrice: ${null != (r = e.gasPrice) ? r : "undefined"}, maxPriorityFeePerGas: ${null != (n = e.maxPriorityFeePerGas) ? n : "undefined"}, maxFeePerGas: ${null != (i = e.maxFeePerGas) ? i : "undefined"}`,
            "transaction must specify legacy or fee market gas properties, not both",
          ),
            (this.code = 434),
            (this.cause = new e1()));
        }
      }
      class e3 extends ei {
        constructor(e) {
          var t, r;
          (super(
            `gas: ${null != (t = e.gas) ? t : "undefined"}, gasPrice: ${null != (r = e.gasPrice) ? r : "undefined"}`,
            "Gas or gasPrice is lower than 0",
          ),
            (this.code = 416));
        }
      }
      class e6 extends ei {
        constructor(e) {
          var t, r;
          (super(
            `maxPriorityFeePerGas: ${null != (t = e.maxPriorityFeePerGas) ? t : "undefined"}, maxFeePerGas: ${null != (r = e.maxFeePerGas) ? r : "undefined"}`,
            "maxPriorityFeePerGas or maxFeePerGas is lower than 0",
          ),
            (this.code = 417));
        }
      }
      class e5 extends ei {
        constructor(e) {
          (super(e, "eip-1559 transactions don't support gasPrice"),
            (this.code = 418));
        }
      }
      class e4 extends ei {
        constructor(e) {
          var t, r;
          (super(
            `maxPriorityFeePerGas: ${null != (t = e.maxPriorityFeePerGas) ? t : "undefined"}, maxFeePerGas: ${null != (r = e.maxFeePerGas) ? r : "undefined"}`,
            "pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas",
          ),
            (this.code = 419));
        }
      }
      class e8 extends ei {
        constructor(e) {
          (super(e, "invalid transaction object"), (this.code = 420));
        }
      }
      class e9 extends ei {
        constructor(e) {
          var t, r;
          (super(
            `nonce: ${null != (t = e.nonce) ? t : "undefined"}, chainId: ${null != (r = e.chainId) ? r : "undefined"}`,
            "Nonce or chainId is lower than 0",
          ),
            (this.code = 421));
        }
      }
      class e7 extends ei {
        constructor() {
          (super(
            "UnableToPopulateNonceError",
            "unable to populate nonce, no from address available",
          ),
            (this.code = 422));
        }
      }
      class te extends ei {
        constructor() {
          (super(
            "Eip1559NotSupportedError",
            "Network doesn't support eip-1559",
          ),
            (this.code = 423));
        }
      }
      class tt extends ei {
        constructor(e) {
          (super(e, "unsupported transaction type"), (this.code = 424));
        }
      }
      class tr extends ei {
        constructor(e) {
          var t, r;
          (super(
            `data: ${null != (t = e.data) ? t : "undefined"}, input: ${null != (r = e.input) ? r : "undefined"}`,
            'You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.',
          ),
            (this.code = 425));
        }
      }
      class tn extends er {
        constructor(e) {
          (super(`The connected Ethereum Node did not respond within ${e.numberOfSeconds} seconds, please make sure your transaction was properly sent and you are connected to a healthy Node. Be aware that transaction might still be pending or mined!
	Transaction Hash: ${e.transactionHash ? e.transactionHash.toString() : "not available"}`),
            (this.code = 431));
        }
      }
      function ti(e) {
        return `Please make sure your transaction was properly sent and there are no previous pending transaction for the same account. However, be aware that it might still be mined!
	Transaction Hash: ${e ? e.toString() : "not available"}`;
      }
      class ts extends er {
        constructor(e) {
          (super(
            `Transaction was not mined within ${e.numberOfSeconds} seconds. ${ti(e.transactionHash)}`,
          ),
            (this.code = 426));
        }
      }
      class ta extends er {
        constructor(e) {
          (super(
            `Transaction started at ${e.starterBlockNumber} but was not mined within ${e.numberOfBlocks} blocks. ${ti(e.transactionHash)}`,
          ),
            (this.code = 432));
        }
      }
      class to extends ei {
        constructor(e) {
          var t, r;
          (super(
            `receipt: ${JSON.stringify(e.receipt)}, blockHash: ${null == (t = e.blockHash) ? void 0 : t.toString()}, transactionHash: ${null == (r = e.transactionHash) ? void 0 : r.toString()}`,
            "Receipt missing or blockHash null",
          ),
            (this.code = 427));
        }
      }
      class tu extends ei {
        constructor(e) {
          (super(
            `receipt: ${JSON.stringify(e.receipt)}`,
            "Receipt missing block number",
          ),
            (this.code = 428));
        }
      }
      class tc extends er {
        constructor(e) {
          (super(`Invalid signature. "${e}"`), (this.code = 433));
        }
      }
      class tl extends ei {
        constructor() {
          (super(
            "LocalWalletNotAvailableError",
            "Attempted to index account in local wallet, but no wallet is available",
          ),
            (this.code = 429));
        }
      }
      class td extends er {
        constructor(e, t) {
          let r = [];
          (e.forEach((e) => r.push(e.keyword)),
            super(
              `The following properties are invalid for the transaction type ${t}: ${r.join(", ")}`,
            ),
            (this.code = 439));
        }
      }
      class th extends ei {
        constructor(e) {
          (super(e, "can not parse as byte data"), (this.code = 1002));
        }
      }
      class tf extends ei {
        constructor(e) {
          (super(e, "can not parse as number data"), (this.code = 1003));
        }
      }
      class tp extends ei {
        constructor(e) {
          (super(e, "invalid ethereum address"), (this.code = 1005));
        }
      }
      class tm extends ei {
        constructor(e) {
          (super(e, "not a valid string"), (this.code = 1001));
        }
      }
      class tg extends ei {
        constructor(e) {
          (super(e, "invalid unit"), (this.code = 1004));
        }
      }
      class ty extends ei {
        constructor(e) {
          (super(e, "not a valid unit. Must be a positive integer"),
            (this.code = 1015));
        }
      }
      class tv extends ei {
        constructor(e) {
          (super(e, "can not be converted to hex"), (this.code = 1006));
        }
      }
      class tb extends ei {
        constructor(e) {
          (super(e, "value greater than the nibble width"), (this.code = 1014));
        }
      }
      class tA extends ei {
        constructor(e) {
          (super(e, "not a valid boolean."), (this.code = 1008));
        }
      }
      class tw extends ei {
        constructor(e) {
          (super(e, "not a valid unsigned integer."), (this.code = 1009));
        }
      }
      class tx extends ei {
        constructor(e) {
          (super(e, "invalid size given."), (this.code = 1010));
        }
      }
      class tE extends ei {
        constructor(e) {
          (super(e, "value is larger than size."), (this.code = 1011));
        }
      }
      class tk extends ei {
        constructor(e) {
          (super(e, "invalid string given"), (this.code = 1012));
        }
      }
      let tI = (e) =>
          !Array.isArray(e) &&
          "2.0" === e.jsonrpc &&
          !!e &&
          (void 0 === e.result || null === e.result) &&
          "error" in e &&
          ("number" == typeof e.id || "string" == typeof e.id),
        t_ = (e) => (tI(e) ? e.error.message : "");
      class tS extends er {
        constructor(e, t, r, n) {
          var i;
          let s;
          (super(
            null != t
              ? t
              : `Returned error: ${Array.isArray(e) ? e.map((e) => t_(e)).join(",") : t_(e)}`,
          ),
            (this.code = 100),
            t ||
              (this.data = Array.isArray(e)
                ? e.map((e) => {
                    var t;
                    return null == (t = e.error) ? void 0 : t.data;
                  })
                : null == (i = null == e ? void 0 : e.error)
                  ? void 0
                  : i.data),
            (this.statusCode = n),
            (this.request = r),
            "error" in e
              ? (s = e.error)
              : e instanceof Array &&
                (s = e.filter((e) => e.error).map((e) => e.error)),
            Array.isArray(s) && s.length > 0
              ? (this.cause = new en(s))
              : (this.cause = s));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            data: this.data,
            request: this.request,
            statusCode: this.statusCode,
          });
        }
      }
      class tT extends tS {
        constructor(e, t) {
          let r;
          (super(e, void 0, t),
            (this.code = 101),
            "error" in e
              ? (r = e.error)
              : e instanceof Array && (r = e.map((e) => e.error)),
            Array.isArray(r) ? (this.cause = new en(r)) : (this.cause = r));
        }
      }
      class tP extends er {
        constructor(e, t) {
          (super(
            `Web3Config hardfork doesnt match in defaultHardfork ${e} and common.hardfork ${t}`,
          ),
            (this.code = 1101));
        }
      }
      class tC extends er {
        constructor(e, t) {
          (super(
            `Web3Config chain doesnt match in defaultHardfork ${e} and common.hardfork ${t}`,
          ),
            (this.code = 1101));
        }
      }
      let tB = "An Rpc error has occured with a code of *code*",
        tO = {
          [-32700]: { message: "Parse error", description: "Invalid JSON" },
          [-32600]: {
            message: "Invalid request",
            description: "JSON is not a valid request object	",
          },
          [-32601]: {
            message: "Method not found",
            description: "Method does not exist	",
          },
          [-32602]: {
            message: "Invalid params",
            description: "Invalid method parameters",
          },
          [-32603]: {
            message: "Internal error",
            description: "Internal JSON-RPC error",
          },
          [-32e3]: {
            message: "Invalid input",
            description: "Missing or invalid parameters",
          },
          [-32001]: {
            message: "Resource not found",
            description: "Requested resource not found",
          },
          [-32002]: {
            message: "Resource unavailable",
            description: "Requested resource not available",
          },
          [-32003]: {
            message: "Transaction rejected",
            description: "Transaction creation failed",
          },
          [-32004]: {
            message: "Method not supported",
            description: "Method is not implemented",
          },
          [-32005]: {
            message: "Limit exceeded",
            description: "Request exceeds defined limit",
          },
          [-32006]: {
            message: "JSON-RPC version not supported",
            description: "Version of JSON-RPC protocol is not supported",
          },
          4001: {
            name: "User Rejected Request",
            message: "The user rejected the request.",
          },
          4100: {
            name: "Unauthorized",
            message:
              "The requested method and/or account has not been authorized by the user.",
          },
          4200: {
            name: "Unsupported Method",
            message: "The Provider does not support the requested method.",
          },
          4900: {
            name: "Disconnected",
            message: "The Provider is disconnected from all chains.",
          },
          4901: {
            name: "Chain Disconnected",
            message: "The Provider is not connected to the requested chain.",
          },
          "0-999": { name: "", message: "Not used." },
          1e3: {
            name: "Normal Closure",
            message:
              "The connection successfully completed the purpose for which it was created.",
          },
          1001: {
            name: "Going Away",
            message:
              "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.",
          },
          1002: {
            name: "Protocol error",
            message:
              "The endpoint is terminating the connection due to a protocol error.",
          },
          1003: {
            name: "Unsupported Data",
            message:
              "The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)",
          },
          1004: {
            name: "Reserved",
            message: "Reserved. A meaning might be defined in the future.",
          },
          1005: {
            name: "No Status Rcvd",
            message:
              "Reserved. Indicates that no status code was provided even though one was expected.",
          },
          1006: {
            name: "Abnormal Closure",
            message:
              "Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected.",
          },
          1007: {
            name: "Invalid frame payload data",
            message:
              "The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).",
          },
          1008: {
            name: "Policy Violation",
            message:
              "The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable.",
          },
          1009: {
            name: "Message Too Big",
            message:
              "The endpoint is terminating the connection because a data frame was received that is too large.",
          },
          1010: {
            name: "Mandatory Ext.",
            message:
              "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't.",
          },
          1011: {
            name: "Internal Error",
            message:
              "The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.",
          },
          1012: {
            name: "Service Restart",
            message:
              "The server is terminating the connection because it is restarting.",
          },
          1013: {
            name: "Try Again Later",
            message:
              "The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients.",
          },
          1014: {
            name: "Bad Gateway",
            message:
              "The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.",
          },
          1015: {
            name: "TLS handshake",
            message:
              "Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).",
          },
          "1016-2999": {
            name: "",
            message:
              "For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications.",
          },
          "3000-3999": {
            name: "",
            message:
              "For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol.",
          },
          "4000-4999": {
            name: "",
            message:
              "For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol.",
          },
        };
      class tN extends er {
        constructor(e, t) {
          (super(null != t ? t : tB.replace("*code*", e.error.code.toString())),
            (this.code = e.error.code),
            (this.id = e.id),
            (this.jsonrpc = e.jsonrpc),
            (this.jsonRpcError = e.error));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            error: this.jsonRpcError,
            id: this.id,
            jsonRpc: this.jsonrpc,
          });
        }
      }
      class tR extends er {
        constructor(e, t) {
          var r, n, i, s;
          if (e)
            if (null == (r = tO[e]) ? void 0 : r.message) super(tO[e].message);
            else {
              let t = Object.keys(tO).find(
                (t) =>
                  "string" == typeof t &&
                  e >= parseInt(t.split("-")[0], 10) &&
                  e <= parseInt(t.split("-")[1], 10),
              );
              super(
                null !=
                  (i =
                    null == (n = tO[null != t ? t : ""]) ? void 0 : n.message)
                  ? i
                  : tB.replace(
                      "*code*",
                      null != (s = null == e ? void 0 : e.toString())
                        ? s
                        : '""',
                    ),
              );
            }
          else super();
          ((this.code = e), (this.data = t));
        }
      }
      class tM extends tN {
        constructor(e) {
          (super(e, tO[-32700].message), (this.code = -32700));
        }
      }
      class tF extends tN {
        constructor(e) {
          (super(e, tO[-32600].message), (this.code = -32600));
        }
      }
      class tL extends tN {
        constructor(e) {
          (super(e, tO[-32601].message), (this.code = -32601));
        }
      }
      class tD extends tN {
        constructor(e) {
          (super(e, tO[-32602].message), (this.code = -32602));
        }
      }
      class tj extends tN {
        constructor(e) {
          (super(e, tO[-32603].message), (this.code = -32603));
        }
      }
      class tH extends tN {
        constructor(e) {
          (super(e, tO[-32e3].message), (this.code = -32e3));
        }
      }
      class tG extends tN {
        constructor(e) {
          (super(e, tO[-32004].message), (this.code = -32004));
        }
      }
      class tU extends tN {
        constructor(e) {
          (super(e, tO[-32002].message), (this.code = -32002));
        }
      }
      class tq extends tN {
        constructor(e) {
          (super(e, tO[-32001].message), (this.code = -32001));
        }
      }
      class tQ extends tN {
        constructor(e) {
          (super(e, tO[-32006].message), (this.code = -32006));
        }
      }
      class tZ extends tN {
        constructor(e) {
          (super(e, tO[-32003].message), (this.code = -32003));
        }
      }
      class tz extends tN {
        constructor(e) {
          (super(e, tO[-32005].message), (this.code = -32005));
        }
      }
      let tV = new Map();
      (tV.set(-32700, { error: tM }),
        tV.set(-32600, { error: tF }),
        tV.set(-32601, { error: tL }),
        tV.set(-32602, { error: tD }),
        tV.set(-32603, { error: tj }),
        tV.set(-32e3, { error: tH }),
        tV.set(-32004, { error: tG }),
        tV.set(-32002, { error: tU }),
        tV.set(-32003, { error: tZ }),
        tV.set(-32001, { error: tq }),
        tV.set(-32006, { error: tQ }),
        tV.set(-32005, { error: tz }));
      class tK extends er {
        constructor(e) {
          (super(`Format for the type ${e} is unsupported`),
            (this.type = e),
            (this.code = 1200));
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            type: this.type,
          });
        }
      }
      function tJ(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`positive integer expected, not ${e}`);
      }
      function tW(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`,
          );
      }
      function t$(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        (tJ(e.outputLen), tJ(e.blockLen));
      }
      function tY(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function tX(e, t) {
        tW(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            `digestInto() expects output buffer of length at least ${r}`,
          );
      }
      let t0 = {
          bool: function (e) {
            if ("boolean" != typeof e)
              throw Error(`boolean expected, not ${e}`);
          },
          bytes: tW,
        },
        t1 = BigInt(0x100000000 - 1),
        t2 = BigInt(32);
      function t3(e, t = !1) {
        let r = new Uint32Array(e.length),
          n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: s, l: a } = (function (e, t = !1) {
            return t
              ? { h: Number(e & t1), l: Number((e >> t2) & t1) }
              : { h: 0 | Number((e >> t2) & t1), l: 0 | Number(e & t1) };
          })(e[i], t);
          [r[i], n[i]] = [s, a];
        }
        return [r, n];
      }
      let t6 = (e, t, r) => (e << r) | (t >>> (32 - r)),
        t5 = (e, t, r) => (t << r) | (e >>> (32 - r)),
        t4 = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        t8 = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        t9 = {
          split: t3,
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          add: function (e, t, r, n) {
            let i = (t >>> 0) + (n >>> 0);
            return { h: (e + r + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, n) => (t + r + n + ((e / 0x100000000) | 0)) | 0,
          add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
          add4H: (e, t, r, n, i) =>
            (t + r + n + i + ((e / 0x100000000) | 0)) | 0,
          add5H: (e, t, r, n, i, s) =>
            (t + r + n + i + s + ((e / 0x100000000) | 0)) | 0,
          add5L: (e, t, r, n, i) =>
            (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        },
        t7 =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        re = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        rt = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        rr = (e, t) => (e << (32 - t)) | (e >>> t),
        rn = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0),
        ri = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
        rs = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255);
      function ra(e) {
        for (let t = 0; t < e.length; t++) e[t] = rs(e[t]);
      }
      (e, t) => t.toString(16).padStart(2, "0");
      let ro = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function ru(e) {
        if ("string" != typeof e)
          throw Error(`utf8ToBytes expected string, got ${typeof e}`);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function rc(e) {
        return ("string" == typeof e && (e = ru(e)), tW(e), e);
      }
      function rl(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          (tW(n), (t += n.length));
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          (r.set(i, n), (n += i.length));
        }
        return r;
      }
      class rd {
        clone() {
          return this._cloneInto();
        }
      }
      let rh = {}.toString;
      function rf(e, t) {
        if (void 0 !== t && "[object Object]" !== rh.call(t))
          throw Error("Options should be object or undefined");
        return Object.assign(e, t);
      }
      function rp(e) {
        let t = (t) => e().update(rc(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function rm(e = 32) {
        if (t7 && "function" == typeof t7.getRandomValues)
          return t7.getRandomValues(new Uint8Array(e));
        throw Error("crypto.getRandomValues must be defined");
      }
      let rg = [],
        ry = [],
        rv = [],
        rb = BigInt(0),
        rA = BigInt(1),
        rw = BigInt(2),
        rx = BigInt(7),
        rE = BigInt(256),
        rk = BigInt(113);
      for (let e = 0, t = rA, r = 1, n = 0; e < 24; e++) {
        (([r, n] = [n, (2 * r + 3 * n) % 5]),
          rg.push(2 * (5 * n + r)),
          ry.push((((e + 1) * (e + 2)) / 2) % 64));
        let i = rb;
        for (let e = 0; e < 7; e++)
          (t = ((t << rA) ^ ((t >> rx) * rk)) % rE) & rw &&
            (i ^= rA << ((rA << BigInt(e)) - rA));
        rv.push(i);
      }
      let [rI, r_] = t3(rv, !0),
        rS = (e, t, r) => (r > 32 ? t4(e, t, r) : t6(e, t, r)),
        rT = (e, t, r) => (r > 32 ? t8(e, t, r) : t5(e, t, r));
      class rP extends rd {
        constructor(e, t, r, n = !1, i = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = n),
            (this.rounds = i),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            tJ(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          ((this.state = new Uint8Array(200)), (this.state32 = re(this.state)));
        }
        keccak() {
          (ri || ra(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let n = (t + 8) % 10,
                    i = (t + 2) % 10,
                    s = r[i],
                    a = r[i + 1],
                    o = rS(s, a, 1) ^ r[n],
                    u = rT(s, a, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    ((e[t + r] ^= o), (e[t + r + 1] ^= u));
                }
                let t = e[2],
                  i = e[3];
                for (let r = 0; r < 24; r++) {
                  let n = ry[r],
                    s = rS(t, i, n),
                    a = rT(t, i, n),
                    o = rg[r];
                  ((t = e[o]), (i = e[o + 1]), (e[o] = s), (e[o + 1] = a));
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let n = 0; n < 10; n++) r[n] = e[t + n];
                  for (let n = 0; n < 10; n++)
                    e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                ((e[0] ^= rI[n]), (e[1] ^= r_[n]));
              }
              r.fill(0);
            })(this.state32, this.rounds),
            ri || ra(this.state32),
            (this.posOut = 0),
            (this.pos = 0));
        }
        update(e) {
          tY(this);
          let { blockLen: t, state: r } = this,
            n = (e = rc(e)).length;
          for (let i = 0; i < n; ) {
            let s = Math.min(t - this.pos, n - i);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          ((e[r] ^= t),
            (128 & t) != 0 && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak());
        }
        writeInto(e) {
          (tY(this, !1), tW(e), this.finish());
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = e.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let s = Math.min(r - this.posOut, i - n);
            (e.set(t.subarray(this.posOut, this.posOut + s), n),
              (this.posOut += s),
              (n += s));
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (tJ(e), this.xofInto(new Uint8Array(e)));
        }
        digestInto(e) {
          if ((tX(e, this), this.finished))
            throw Error("digest() was already called");
          return (this.writeInto(e), this.destroy(), e);
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          ((this.destroyed = !0), this.state.fill(0));
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            e || (e = new rP(t, r, n, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let rC = (e, t, r) => rp(() => new rP(t, e, r)),
        rB = rC(1, 144, 28),
        rO = rC(1, 136, 32),
        rN = rC(1, 104, 48),
        rR = rC(1, 72, 64);
      t0.bool;
      let rM = t0.bytes;
      function rF(e) {
        if (!(e instanceof Uint8Array))
          throw TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof e}`);
        return new TextDecoder().decode(e);
      }
      function rL(e) {
        return (t) => (t0.bytes(t), e(t));
      }
      ((() => {
        let e =
            "object" == typeof globalThis && "crypto" in globalThis
              ? globalThis.crypto
              : void 0,
          t =
            "undefined" != typeof module &&
            "function" == typeof module.require &&
            module.require.bind(module);
        return t && !e && t("crypto");
      })(),
        rL(rB));
      let rD = (() => {
        let e = rL(rO);
        return ((e.create = rO.create), e);
      })();
      (rL(rN),
        rL(rR),
        (function (e) {
          ((e.assertEqual = (e) => {}),
            (e.assertIs = function (e) {}),
            (e.assertNever = function (e) {
              throw Error();
            }),
            (e.arrayToEnum = (e) => {
              let t = {};
              for (let r of e) t[r] = r;
              return t;
            }),
            (e.getValidEnumValues = (t) => {
              let r = e.objectKeys(t).filter((e) => "number" != typeof t[t[e]]),
                n = {};
              for (let e of r) n[e] = t[e];
              return e.objectValues(n);
            }),
            (e.objectValues = (t) =>
              e.objectKeys(t).map(function (e) {
                return t[e];
              })),
            (e.objectKeys =
              "function" == typeof Object.keys
                ? (e) => Object.keys(e)
                : (e) => {
                    let t = [];
                    for (let r in e)
                      Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t;
                  }),
            (e.find = (e, t) => {
              for (let r of e) if (t(r)) return r;
            }),
            (e.isInteger =
              "function" == typeof Number.isInteger
                ? (e) => Number.isInteger(e)
                : (e) =>
                    "number" == typeof e &&
                    Number.isFinite(e) &&
                    Math.floor(e) === e),
            (e.joinValues = function (e, t = " | ") {
              return e
                .map((e) => ("string" == typeof e ? `'${e}'` : e))
                .join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) =>
              "bigint" == typeof t ? t.toString() : t));
        })(I || (I = {})),
        ((_ || (_ = {})).mergeShapes = (e, t) => ({ ...e, ...t })));
      let rj = I.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set",
        ]),
        rH = (e) => {
          switch (typeof e) {
            case "undefined":
              return rj.undefined;
            case "string":
              return rj.string;
            case "number":
              return Number.isNaN(e) ? rj.nan : rj.number;
            case "boolean":
              return rj.boolean;
            case "function":
              return rj.function;
            case "bigint":
              return rj.bigint;
            case "symbol":
              return rj.symbol;
            case "object":
              if (Array.isArray(e)) return rj.array;
              if (null === e) return rj.null;
              if (
                e.then &&
                "function" == typeof e.then &&
                e.catch &&
                "function" == typeof e.catch
              )
                return rj.promise;
              if ("undefined" != typeof Map && e instanceof Map) return rj.map;
              if ("undefined" != typeof Set && e instanceof Set) return rj.set;
              if ("undefined" != typeof Date && e instanceof Date)
                return rj.date;
              return rj.object;
            default:
              return rj.unknown;
          }
        },
        rG = I.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of",
          "not_finite",
        ]),
        rU = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
      class rq extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          (super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            }));
          let t = new.target.prototype;
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = "ZodError"),
            (this.issues = e));
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            r = { _errors: [] },
            n = (e) => {
              for (let i of e.issues)
                if ("invalid_union" === i.code) i.unionErrors.map(n);
                else if ("invalid_return_type" === i.code) n(i.returnTypeError);
                else if ("invalid_arguments" === i.code) n(i.argumentsError);
                else if (0 === i.path.length) r._errors.push(t(i));
                else {
                  let e = r,
                    n = 0;
                  for (; n < i.path.length; ) {
                    let r = i.path[n];
                    (n === i.path.length - 1
                      ? ((e[r] = e[r] || { _errors: [] }),
                        e[r]._errors.push(t(i)))
                      : (e[r] = e[r] || { _errors: [] }),
                      (e = e[r]),
                      n++);
                  }
                }
            };
          return (n(this), r);
        }
        static assert(e) {
          if (!(e instanceof rq)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, I.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            r = [];
          for (let n of this.issues)
            n.path.length > 0
              ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n)))
              : r.push(e(n));
          return { formErrors: r, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      rq.create = (e) => new rq(e);
      let rQ = (e, t) => {
          let r;
          switch (e.code) {
            case rG.invalid_type:
              r =
                e.received === rj.undefined
                  ? "Required"
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case rG.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(e.expected, I.jsonStringifyReplacer)}`;
              break;
            case rG.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${I.joinValues(e.keys, ", ")}`;
              break;
            case rG.invalid_union:
              r = "Invalid input";
              break;
            case rG.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${I.joinValues(e.options)}`;
              break;
            case rG.invalid_enum_value:
              r = `Invalid enum value. Expected ${I.joinValues(e.options)}, received '${e.received}'`;
              break;
            case rG.invalid_arguments:
              r = "Invalid function arguments";
              break;
            case rG.invalid_return_type:
              r = "Invalid function return type";
              break;
            case rG.invalid_date:
              r = "Invalid date";
              break;
            case rG.invalid_string:
              "object" == typeof e.validation
                ? "includes" in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    "number" == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : "startsWith" in e.validation
                    ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                    : "endsWith" in e.validation
                      ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                      : I.assertNever(e.validation)
                : (r =
                    "regex" !== e.validation
                      ? `Invalid ${e.validation}`
                      : "Invalid");
              break;
            case rG.too_small:
              r =
                "array" === e.type
                  ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`
                  : "string" === e.type
                    ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`
                    : "number" === e.type
                      ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`
                      : "date" === e.type
                        ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`
                        : "Invalid input";
              break;
            case rG.too_big:
              r =
                "array" === e.type
                  ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`
                  : "string" === e.type
                    ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`
                    : "number" === e.type
                      ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
                      : "bigint" === e.type
                        ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
                        : "date" === e.type
                          ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`
                          : "Invalid input";
              break;
            case rG.custom:
              r = "Invalid input";
              break;
            case rG.invalid_intersection_types:
              r = "Intersection results could not be merged";
              break;
            case rG.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case rG.not_finite:
              r = "Number must be finite";
              break;
            default:
              ((r = t.defaultError), I.assertNever(e));
          }
          return { message: r };
        },
        rZ = rQ;
      function rz(e) {
        rZ = e;
      }
      function rV() {
        return rZ;
      }
      let rK = (e) => {
          let { data: t, path: r, errorMaps: n, issueData: i } = e,
            s = [...r, ...(i.path || [])],
            a = { ...i, path: s };
          if (void 0 !== i.message)
            return { ...i, path: s, message: i.message };
          let o = "";
          for (let e of n
            .filter((e) => !!e)
            .slice()
            .reverse())
            o = e(a, { data: t, defaultError: o }).message;
          return { ...i, path: s, message: o };
        },
        rJ = [];
      function rW(e, t) {
        let r = rZ,
          n = rK({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              r,
              r === rQ ? void 0 : rQ,
            ].filter((e) => !!e),
          });
        e.common.issues.push(n);
      }
      class r$ {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          let r = [];
          for (let n of t) {
            if ("aborted" === n.status) return rY;
            ("dirty" === n.status && e.dirty(), r.push(n.value));
          }
          return { status: e.value, value: r };
        }
        static async mergeObjectAsync(e, t) {
          let r = [];
          for (let e of t) {
            let t = await e.key,
              n = await e.value;
            r.push({ key: t, value: n });
          }
          return r$.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          let r = {};
          for (let n of t) {
            let { key: t, value: i } = n;
            if ("aborted" === t.status || "aborted" === i.status) return rY;
            ("dirty" === t.status && e.dirty(),
              "dirty" === i.status && e.dirty(),
              "__proto__" !== t.value &&
                (void 0 !== i.value || n.alwaysSet) &&
                (r[t.value] = i.value));
          }
          return { status: e.value, value: r };
        }
      }
      let rY = Object.freeze({ status: "aborted" }),
        rX = (e) => ({ status: "dirty", value: e }),
        r0 = (e) => ({ status: "valid", value: e }),
        r1 = (e) => "aborted" === e.status,
        r2 = (e) => "dirty" === e.status,
        r3 = (e) => "valid" === e.status,
        r6 = (e) => "undefined" != typeof Promise && e instanceof Promise;
      !(function (e) {
        ((e.errToObj = (e) =>
          "string" == typeof e ? { message: e } : e || {}),
          (e.toString = (e) => ("string" == typeof e ? e : e?.message)));
      })(S || (S = {}));
      class r5 {
        constructor(e, t, r, n) {
          ((this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = r),
            (this._key = n));
        }
        get path() {
          return (
            this._cachedPath.length ||
              (Array.isArray(this._key)
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let r4 = (e, t) => {
        if (r3(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new rq(e.common.issues);
            return ((this._error = t), this._error);
          },
        };
      };
      function r8(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: r,
          required_error: n,
          description: i,
        } = e;
        if (t && (r || n))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
          );
        return t
          ? { errorMap: t, description: i }
          : {
              errorMap: (t, i) => {
                let { message: s } = e;
                return "invalid_enum_value" === t.code
                  ? { message: s ?? i.defaultError }
                  : void 0 === i.data
                    ? { message: s ?? n ?? i.defaultError }
                    : "invalid_type" !== t.code
                      ? { message: i.defaultError }
                      : { message: s ?? r ?? i.defaultError };
              },
              description: i,
            };
      }
      class r9 {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return rH(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: rH(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new r$(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: rH(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (r6(t)) throw Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let r = this.safeParse(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(e, t) {
          let r = {
              common: {
                issues: [],
                async: t?.async ?? !1,
                contextualErrorMap: t?.errorMap,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: rH(e),
            },
            n = this._parseSync({ data: e, path: r.path, parent: r });
          return r4(r, n);
        }
        "~validate"(e) {
          let t = {
            common: { issues: [], async: !!this["~standard"].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: rH(e),
          };
          if (!this["~standard"].async)
            try {
              let r = this._parseSync({ data: e, path: [], parent: t });
              return r3(r) ? { value: r.value } : { issues: t.common.issues };
            } catch (e) {
              (e?.message?.toLowerCase()?.includes("encountered") &&
                (this["~standard"].async = !0),
                (t.common = { issues: [], async: !0 }));
            }
          return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
            r3(e) ? { value: e.value } : { issues: t.common.issues },
          );
        }
        async parseAsync(e, t) {
          let r = await this.safeParseAsync(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(e, t) {
          let r = {
              common: {
                issues: [],
                contextualErrorMap: t?.errorMap,
                async: !0,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: rH(e),
            },
            n = this._parse({ data: e, path: r.path, parent: r });
          return r4(r, await (r6(n) ? n : Promise.resolve(n)));
        }
        refine(e, t) {
          let r = (e) =>
            "string" == typeof t || void 0 === t
              ? { message: t }
              : "function" == typeof t
                ? t(e)
                : t;
          return this._refinement((t, n) => {
            let i = e(t),
              s = () => n.addIssue({ code: rG.custom, ...r(t) });
            return "undefined" != typeof Promise && i instanceof Promise
              ? i.then((e) => !!e || (s(), !1))
              : !!i || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (r, n) =>
              !!e(r) || (n.addIssue("function" == typeof t ? t(r, n) : t), !1),
          );
        }
        _refinement(e) {
          return new nz({
            schema: this,
            typeName: T.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        constructor(e) {
          ((this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this)),
            (this["~standard"] = {
              version: 1,
              vendor: "zod",
              validate: (e) => this["~validate"](e),
            }));
        }
        optional() {
          return nV.create(this, this._def);
        }
        nullable() {
          return nK.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return nP.create(this);
        }
        promise() {
          return nZ.create(this, this._def);
        }
        or(e) {
          return nB.create([this, e], this._def);
        }
        and(e) {
          return nR.create(this, e, this._def);
        }
        transform(e) {
          return new nz({
            ...r8(this._def),
            schema: this,
            typeName: T.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          return new nJ({
            ...r8(this._def),
            innerType: this,
            defaultValue: "function" == typeof e ? e : () => e,
            typeName: T.ZodDefault,
          });
        }
        brand() {
          return new nX({
            typeName: T.ZodBranded,
            type: this,
            ...r8(this._def),
          });
        }
        catch(e) {
          return new nW({
            ...r8(this._def),
            innerType: this,
            catchValue: "function" == typeof e ? e : () => e,
            typeName: T.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return n0.create(this, e);
        }
        readonly() {
          return n1.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let r7 = /^c[^\s-]{8,}$/i,
        ne = /^[0-9a-z]+$/,
        nt = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        nr =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        nn = /^[a-z0-9_-]{21}$/i,
        ni = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        ns =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        na =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        no =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        nu =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        nc =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        nl =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        nd = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        nh =
          /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        nf =
          "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
        np = RegExp(`^${nf}$`);
      function nm(e) {
        let t = "[0-5]\\d";
        e.precision
          ? (t = `${t}\\.\\d{${e.precision}}`)
          : null == e.precision && (t = `${t}(\\.\\d+)?`);
        let r = e.precision ? "+" : "?";
        return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
      }
      function ng(e) {
        let t = `${nf}T${nm(e)}`,
          r = [];
        return (
          r.push(e.local ? "Z?" : "Z"),
          e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
          (t = `${t}(${r.join("|")})`),
          RegExp(`^${t}$`)
        );
      }
      class ny extends r9 {
        _parse(e) {
          var t, r, i, s;
          let a;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== rj.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.string,
                received: t.parsedType,
              }),
              rY
            );
          }
          let o = new r$();
          for (let u of this._def.checks)
            if ("min" === u.kind)
              e.data.length < u.value &&
                (rW((a = this._getOrReturnCtx(e, a)), {
                  code: rG.too_small,
                  minimum: u.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ("max" === u.kind)
              e.data.length > u.value &&
                (rW((a = this._getOrReturnCtx(e, a)), {
                  code: rG.too_big,
                  maximum: u.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ("length" === u.kind) {
              let t = e.data.length > u.value,
                r = e.data.length < u.value;
              (t || r) &&
                ((a = this._getOrReturnCtx(e, a)),
                t
                  ? rW(a, {
                      code: rG.too_big,
                      maximum: u.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    })
                  : r &&
                    rW(a, {
                      code: rG.too_small,
                      minimum: u.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    }),
                o.dirty());
            } else if ("email" === u.kind)
              na.test(e.data) ||
                (rW((a = this._getOrReturnCtx(e, a)), {
                  validation: "email",
                  code: rG.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ("emoji" === u.kind)
              (n ||
                (n = RegExp(
                  "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                  "u",
                )),
                n.test(e.data) ||
                  (rW((a = this._getOrReturnCtx(e, a)), {
                    validation: "emoji",
                    code: rG.invalid_string,
                    message: u.message,
                  }),
                  o.dirty()));
            else if ("uuid" === u.kind)
              nr.test(e.data) ||
                (rW((a = this._getOrReturnCtx(e, a)), {
                  validation: "uuid",
                  code: rG.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ("nanoid" === u.kind)
              nn.test(e.data) ||
                (rW((a = this._getOrReturnCtx(e, a)), {
                  validation: "nanoid",
                  code: rG.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ("cuid" === u.kind)
              r7.test(e.data) ||
                (rW((a = this._getOrReturnCtx(e, a)), {
                  validation: "cuid",
                  code: rG.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ("cuid2" === u.kind)
              ne.test(e.data) ||
                (rW((a = this._getOrReturnCtx(e, a)), {
                  validation: "cuid2",
                  code: rG.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ("ulid" === u.kind)
              nt.test(e.data) ||
                (rW((a = this._getOrReturnCtx(e, a)), {
                  validation: "ulid",
                  code: rG.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ("url" === u.kind)
              try {
                new URL(e.data);
              } catch {
                (rW((a = this._getOrReturnCtx(e, a)), {
                  validation: "url",
                  code: rG.invalid_string,
                  message: u.message,
                }),
                  o.dirty());
              }
            else
              "regex" === u.kind
                ? ((u.regex.lastIndex = 0),
                  u.regex.test(e.data) ||
                    (rW((a = this._getOrReturnCtx(e, a)), {
                      validation: "regex",
                      code: rG.invalid_string,
                      message: u.message,
                    }),
                    o.dirty()))
                : "trim" === u.kind
                  ? (e.data = e.data.trim())
                  : "includes" === u.kind
                    ? e.data.includes(u.value, u.position) ||
                      (rW((a = this._getOrReturnCtx(e, a)), {
                        code: rG.invalid_string,
                        validation: { includes: u.value, position: u.position },
                        message: u.message,
                      }),
                      o.dirty())
                    : "toLowerCase" === u.kind
                      ? (e.data = e.data.toLowerCase())
                      : "toUpperCase" === u.kind
                        ? (e.data = e.data.toUpperCase())
                        : "startsWith" === u.kind
                          ? e.data.startsWith(u.value) ||
                            (rW((a = this._getOrReturnCtx(e, a)), {
                              code: rG.invalid_string,
                              validation: { startsWith: u.value },
                              message: u.message,
                            }),
                            o.dirty())
                          : "endsWith" === u.kind
                            ? e.data.endsWith(u.value) ||
                              (rW((a = this._getOrReturnCtx(e, a)), {
                                code: rG.invalid_string,
                                validation: { endsWith: u.value },
                                message: u.message,
                              }),
                              o.dirty())
                            : "datetime" === u.kind
                              ? ng(u).test(e.data) ||
                                (rW((a = this._getOrReturnCtx(e, a)), {
                                  code: rG.invalid_string,
                                  validation: "datetime",
                                  message: u.message,
                                }),
                                o.dirty())
                              : "date" === u.kind
                                ? np.test(e.data) ||
                                  (rW((a = this._getOrReturnCtx(e, a)), {
                                    code: rG.invalid_string,
                                    validation: "date",
                                    message: u.message,
                                  }),
                                  o.dirty())
                                : "time" === u.kind
                                  ? RegExp(`^${nm(u)}$`).test(e.data) ||
                                    (rW((a = this._getOrReturnCtx(e, a)), {
                                      code: rG.invalid_string,
                                      validation: "time",
                                      message: u.message,
                                    }),
                                    o.dirty())
                                  : "duration" === u.kind
                                    ? ns.test(e.data) ||
                                      (rW((a = this._getOrReturnCtx(e, a)), {
                                        validation: "duration",
                                        code: rG.invalid_string,
                                        message: u.message,
                                      }),
                                      o.dirty())
                                    : "ip" === u.kind
                                      ? ((t = e.data),
                                        !(
                                          (("v4" === (r = u.version) || !r) &&
                                            no.test(t)) ||
                                          (("v6" === r || !r) && nc.test(t))
                                        ) &&
                                          1 &&
                                          (rW(
                                            (a = this._getOrReturnCtx(e, a)),
                                            {
                                              validation: "ip",
                                              code: rG.invalid_string,
                                              message: u.message,
                                            },
                                          ),
                                          o.dirty()))
                                      : "jwt" === u.kind
                                        ? !(function (e, t) {
                                            if (!ni.test(e)) return !1;
                                            try {
                                              let [r] = e.split("."),
                                                n = r
                                                  .replace(/-/g, "+")
                                                  .replace(/_/g, "/")
                                                  .padEnd(
                                                    r.length +
                                                      ((4 - (r.length % 4)) %
                                                        4),
                                                    "=",
                                                  ),
                                                i = JSON.parse(atob(n));
                                              if (
                                                "object" != typeof i ||
                                                null === i ||
                                                ("typ" in i &&
                                                  i?.typ !== "JWT") ||
                                                !i.alg ||
                                                (t && i.alg !== t)
                                              )
                                                return !1;
                                              return !0;
                                            } catch {
                                              return !1;
                                            }
                                          })(e.data, u.alg) &&
                                          (rW(
                                            (a = this._getOrReturnCtx(e, a)),
                                            {
                                              validation: "jwt",
                                              code: rG.invalid_string,
                                              message: u.message,
                                            },
                                          ),
                                          o.dirty())
                                        : "cidr" === u.kind
                                          ? ((i = e.data),
                                            !(
                                              (("v4" === (s = u.version) ||
                                                !s) &&
                                                nu.test(i)) ||
                                              (("v6" === s || !s) && nl.test(i))
                                            ) &&
                                              1 &&
                                              (rW(
                                                (a = this._getOrReturnCtx(
                                                  e,
                                                  a,
                                                )),
                                                {
                                                  validation: "cidr",
                                                  code: rG.invalid_string,
                                                  message: u.message,
                                                },
                                              ),
                                              o.dirty()))
                                          : "base64" === u.kind
                                            ? nd.test(e.data) ||
                                              (rW(
                                                (a = this._getOrReturnCtx(
                                                  e,
                                                  a,
                                                )),
                                                {
                                                  validation: "base64",
                                                  code: rG.invalid_string,
                                                  message: u.message,
                                                },
                                              ),
                                              o.dirty())
                                            : "base64url" === u.kind
                                              ? nh.test(e.data) ||
                                                (rW(
                                                  (a = this._getOrReturnCtx(
                                                    e,
                                                    a,
                                                  )),
                                                  {
                                                    validation: "base64url",
                                                    code: rG.invalid_string,
                                                    message: u.message,
                                                  },
                                                ),
                                                o.dirty())
                                              : I.assertNever(u);
          return { status: o.value, value: e.data };
        }
        _regex(e, t, r) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: rG.invalid_string,
            ...S.errToObj(r),
          });
        }
        _addCheck(e) {
          return new ny({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...S.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...S.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: "emoji", ...S.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...S.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: "nanoid", ...S.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...S.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: "cuid2", ...S.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: "ulid", ...S.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: "base64", ...S.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: "base64url", ...S.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: "jwt", ...S.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: "ip", ...S.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: "cidr", ...S.errToObj(e) });
        }
        datetime(e) {
          return "string" == typeof e
            ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                local: !1,
                message: e,
              })
            : this._addCheck({
                kind: "datetime",
                precision: void 0 === e?.precision ? null : e?.precision,
                offset: e?.offset ?? !1,
                local: e?.local ?? !1,
                ...S.errToObj(e?.message),
              });
        }
        date(e) {
          return this._addCheck({ kind: "date", message: e });
        }
        time(e) {
          return "string" == typeof e
            ? this._addCheck({ kind: "time", precision: null, message: e })
            : this._addCheck({
                kind: "time",
                precision: void 0 === e?.precision ? null : e?.precision,
                ...S.errToObj(e?.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: "duration", ...S.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...S.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: "includes",
            value: e,
            position: t?.position,
            ...S.errToObj(t?.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: "startsWith",
            value: e,
            ...S.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: "endsWith",
            value: e,
            ...S.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...S.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...S.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: "length", value: e, ...S.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, S.errToObj(e));
        }
        trim() {
          return new ny({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
          });
        }
        toLowerCase() {
          return new ny({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
          });
        }
        toUpperCase() {
          return new ny({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => "datetime" === e.kind);
        }
        get isDate() {
          return !!this._def.checks.find((e) => "date" === e.kind);
        }
        get isTime() {
          return !!this._def.checks.find((e) => "time" === e.kind);
        }
        get isDuration() {
          return !!this._def.checks.find((e) => "duration" === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => "emoji" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isNANOID() {
          return !!this._def.checks.find((e) => "nanoid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => "cuid2" === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => "ulid" === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => "ip" === e.kind);
        }
        get isCIDR() {
          return !!this._def.checks.find((e) => "cidr" === e.kind);
        }
        get isBase64() {
          return !!this._def.checks.find((e) => "base64" === e.kind);
        }
        get isBase64url() {
          return !!this._def.checks.find((e) => "base64url" === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      ny.create = (e) =>
        new ny({
          checks: [],
          typeName: T.ZodString,
          coerce: e?.coerce ?? !1,
          ...r8(e),
        });
      class nv extends r9 {
        constructor() {
          (super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf));
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== rj.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.number,
                received: t.parsedType,
              }),
              rY
            );
          }
          let r = new r$();
          for (let n of this._def.checks)
            "int" === n.kind
              ? I.isInteger(e.data) ||
                (rW((t = this._getOrReturnCtx(e, t)), {
                  code: rG.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: n.message,
                }),
                r.dirty())
              : "min" === n.kind
                ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                  (rW((t = this._getOrReturnCtx(e, t)), {
                    code: rG.too_small,
                    minimum: n.value,
                    type: "number",
                    inclusive: n.inclusive,
                    exact: !1,
                    message: n.message,
                  }),
                  r.dirty())
                : "max" === n.kind
                  ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                    (rW((t = this._getOrReturnCtx(e, t)), {
                      code: rG.too_big,
                      maximum: n.value,
                      type: "number",
                      inclusive: n.inclusive,
                      exact: !1,
                      message: n.message,
                    }),
                    r.dirty())
                  : "multipleOf" === n.kind
                    ? 0 !==
                        (function (e, t) {
                          let r = (e.toString().split(".")[1] || "").length,
                            n = (t.toString().split(".")[1] || "").length,
                            i = r > n ? r : n;
                          return (
                            (Number.parseInt(e.toFixed(i).replace(".", "")) %
                              Number.parseInt(t.toFixed(i).replace(".", ""))) /
                            10 ** i
                          );
                        })(e.data, n.value) &&
                      (rW((t = this._getOrReturnCtx(e, t)), {
                        code: rG.not_multiple_of,
                        multipleOf: n.value,
                        message: n.message,
                      }),
                      r.dirty())
                    : "finite" === n.kind
                      ? Number.isFinite(e.data) ||
                        (rW((t = this._getOrReturnCtx(e, t)), {
                          code: rG.not_finite,
                          message: n.message,
                        }),
                        r.dirty())
                      : I.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, S.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, S.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, S.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, S.toString(t));
        }
        setLimit(e, t, r, n) {
          return new nv({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: S.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new nv({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: S.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: S.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: S.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: S.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: S.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: S.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: "finite", message: S.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: S.toString(e),
          })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: S.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              "int" === e.kind ||
              ("multipleOf" === e.kind && I.isInteger(e.value)),
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let r of this._def.checks)
            if (
              "finite" === r.kind ||
              "int" === r.kind ||
              "multipleOf" === r.kind
            )
              return !0;
            else
              "min" === r.kind
                ? (null === t || r.value > t) && (t = r.value)
                : "max" === r.kind &&
                  (null === e || r.value < e) &&
                  (e = r.value);
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      nv.create = (e) =>
        new nv({
          checks: [],
          typeName: T.ZodNumber,
          coerce: e?.coerce || !1,
          ...r8(e),
        });
      class nb extends r9 {
        constructor() {
          (super(...arguments), (this.min = this.gte), (this.max = this.lte));
        }
        _parse(e) {
          let t;
          if (this._def.coerce)
            try {
              e.data = BigInt(e.data);
            } catch {
              return this._getInvalidInput(e);
            }
          if (this._getType(e) !== rj.bigint) return this._getInvalidInput(e);
          let r = new r$();
          for (let n of this._def.checks)
            "min" === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (rW((t = this._getOrReturnCtx(e, t)), {
                  code: rG.too_small,
                  type: "bigint",
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : "max" === n.kind
                ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                  (rW((t = this._getOrReturnCtx(e, t)), {
                    code: rG.too_big,
                    type: "bigint",
                    maximum: n.value,
                    inclusive: n.inclusive,
                    message: n.message,
                  }),
                  r.dirty())
                : "multipleOf" === n.kind
                  ? e.data % n.value !== BigInt(0) &&
                    (rW((t = this._getOrReturnCtx(e, t)), {
                      code: rG.not_multiple_of,
                      multipleOf: n.value,
                      message: n.message,
                    }),
                    r.dirty())
                  : I.assertNever(n);
          return { status: r.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            rW(t, {
              code: rG.invalid_type,
              expected: rj.bigint,
              received: t.parsedType,
            }),
            rY
          );
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, S.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, S.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, S.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, S.toString(t));
        }
        setLimit(e, t, r, n) {
          return new nb({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: S.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new nb({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: S.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: S.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: S.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: S.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: S.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      nb.create = (e) =>
        new nb({
          checks: [],
          typeName: T.ZodBigInt,
          coerce: e?.coerce ?? !1,
          ...r8(e),
        });
      class nA extends r9 {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== rj.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.boolean,
                received: t.parsedType,
              }),
              rY
            );
          }
          return r0(e.data);
        }
      }
      nA.create = (e) =>
        new nA({ typeName: T.ZodBoolean, coerce: e?.coerce || !1, ...r8(e) });
      class nw extends r9 {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== rj.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.date,
                received: t.parsedType,
              }),
              rY
            );
          }
          if (Number.isNaN(e.data.getTime()))
            return (rW(this._getOrReturnCtx(e), { code: rG.invalid_date }), rY);
          let r = new r$();
          for (let n of this._def.checks)
            "min" === n.kind
              ? e.data.getTime() < n.value &&
                (rW((t = this._getOrReturnCtx(e, t)), {
                  code: rG.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: "date",
                }),
                r.dirty())
              : "max" === n.kind
                ? e.data.getTime() > n.value &&
                  (rW((t = this._getOrReturnCtx(e, t)), {
                    code: rG.too_big,
                    message: n.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: n.value,
                    type: "date",
                  }),
                  r.dirty())
                : I.assertNever(n);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new nw({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: S.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: S.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      nw.create = (e) =>
        new nw({
          checks: [],
          coerce: e?.coerce || !1,
          typeName: T.ZodDate,
          ...r8(e),
        });
      class nx extends r9 {
        _parse(e) {
          if (this._getType(e) !== rj.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.symbol,
                received: t.parsedType,
              }),
              rY
            );
          }
          return r0(e.data);
        }
      }
      nx.create = (e) => new nx({ typeName: T.ZodSymbol, ...r8(e) });
      class nE extends r9 {
        _parse(e) {
          if (this._getType(e) !== rj.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.undefined,
                received: t.parsedType,
              }),
              rY
            );
          }
          return r0(e.data);
        }
      }
      nE.create = (e) => new nE({ typeName: T.ZodUndefined, ...r8(e) });
      class nk extends r9 {
        _parse(e) {
          if (this._getType(e) !== rj.null) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.null,
                received: t.parsedType,
              }),
              rY
            );
          }
          return r0(e.data);
        }
      }
      nk.create = (e) => new nk({ typeName: T.ZodNull, ...r8(e) });
      class nI extends r9 {
        constructor() {
          (super(...arguments), (this._any = !0));
        }
        _parse(e) {
          return r0(e.data);
        }
      }
      nI.create = (e) => new nI({ typeName: T.ZodAny, ...r8(e) });
      class n_ extends r9 {
        constructor() {
          (super(...arguments), (this._unknown = !0));
        }
        _parse(e) {
          return r0(e.data);
        }
      }
      n_.create = (e) => new n_({ typeName: T.ZodUnknown, ...r8(e) });
      class nS extends r9 {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            rW(t, {
              code: rG.invalid_type,
              expected: rj.never,
              received: t.parsedType,
            }),
            rY
          );
        }
      }
      nS.create = (e) => new nS({ typeName: T.ZodNever, ...r8(e) });
      class nT extends r9 {
        _parse(e) {
          if (this._getType(e) !== rj.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.void,
                received: t.parsedType,
              }),
              rY
            );
          }
          return r0(e.data);
        }
      }
      nT.create = (e) => new nT({ typeName: T.ZodVoid, ...r8(e) });
      class nP extends r9 {
        _parse(e) {
          let { ctx: t, status: r } = this._processInputParams(e),
            n = this._def;
          if (t.parsedType !== rj.array)
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.array,
                received: t.parsedType,
              }),
              rY
            );
          if (null !== n.exactLength) {
            let e = t.data.length > n.exactLength.value,
              i = t.data.length < n.exactLength.value;
            (e || i) &&
              (rW(t, {
                code: e ? rG.too_big : rG.too_small,
                minimum: i ? n.exactLength.value : void 0,
                maximum: e ? n.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== n.minLength &&
              t.data.length < n.minLength.value &&
              (rW(t, {
                code: rG.too_small,
                minimum: n.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: n.minLength.message,
              }),
              r.dirty()),
            null !== n.maxLength &&
              t.data.length > n.maxLength.value &&
              (rW(t, {
                code: rG.too_big,
                maximum: n.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: n.maxLength.message,
              }),
              r.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, r) =>
                n.type._parseAsync(new r5(t, e, t.path, r)),
              ),
            ).then((e) => r$.mergeArray(r, e));
          let i = [...t.data].map((e, r) =>
            n.type._parseSync(new r5(t, e, t.path, r)),
          );
          return r$.mergeArray(r, i);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new nP({
            ...this._def,
            minLength: { value: e, message: S.toString(t) },
          });
        }
        max(e, t) {
          return new nP({
            ...this._def,
            maxLength: { value: e, message: S.toString(t) },
          });
        }
        length(e, t) {
          return new nP({
            ...this._def,
            exactLength: { value: e, message: S.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      nP.create = (e, t) =>
        new nP({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: T.ZodArray,
          ...r8(t),
        });
      class nC extends r9 {
        constructor() {
          (super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend));
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = I.objectKeys(e);
          return ((this._cached = { shape: e, keys: t }), this._cached);
        }
        _parse(e) {
          if (this._getType(e) !== rj.object) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.object,
                received: t.parsedType,
              }),
              rY
            );
          }
          let { status: t, ctx: r } = this._processInputParams(e),
            { shape: n, keys: i } = this._getCached(),
            s = [];
          if (
            !(
              this._def.catchall instanceof nS &&
              "strip" === this._def.unknownKeys
            )
          )
            for (let e in r.data) i.includes(e) || s.push(e);
          let a = [];
          for (let e of i) {
            let t = n[e],
              i = r.data[e];
            a.push({
              key: { status: "valid", value: e },
              value: t._parse(new r5(r, i, r.path, e)),
              alwaysSet: e in r.data,
            });
          }
          if (this._def.catchall instanceof nS) {
            let e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (let e of s)
                a.push({
                  key: { status: "valid", value: e },
                  value: { status: "valid", value: r.data[e] },
                });
            else if ("strict" === e)
              s.length > 0 &&
                (rW(r, { code: rG.unrecognized_keys, keys: s }), t.dirty());
            else if ("strip" === e);
            else
              throw Error(
                "Internal ZodObject error: invalid unknownKeys value.",
              );
          } else {
            let e = this._def.catchall;
            for (let t of s) {
              let n = r.data[t];
              a.push({
                key: { status: "valid", value: t },
                value: e._parse(new r5(r, n, r.path, t)),
                alwaysSet: t in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of a) {
                    let r = await t.key,
                      n = await t.value;
                    e.push({ key: r, value: n, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => r$.mergeObjectSync(t, e))
            : r$.mergeObjectSync(t, a);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            S.errToObj,
            new nC({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, r) => {
                      let n =
                        this._def.errorMap?.(t, r).message ?? r.defaultError;
                      return "unrecognized_keys" === t.code
                        ? { message: S.errToObj(e).message ?? n }
                        : { message: n };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new nC({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new nC({ ...this._def, unknownKeys: "passthrough" });
        }
        extend(e) {
          return new nC({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new nC({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: T.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new nC({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          for (let r of I.objectKeys(e))
            e[r] && this.shape[r] && (t[r] = this.shape[r]);
          return new nC({ ...this._def, shape: () => t });
        }
        omit(e) {
          let t = {};
          for (let r of I.objectKeys(this.shape))
            e[r] || (t[r] = this.shape[r]);
          return new nC({ ...this._def, shape: () => t });
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof nC) {
              let r = {};
              for (let n in t.shape) {
                let i = t.shape[n];
                r[n] = nV.create(e(i));
              }
              return new nC({ ...t._def, shape: () => r });
            }
            if (t instanceof nP)
              return new nP({ ...t._def, type: e(t.element) });
            if (t instanceof nV) return nV.create(e(t.unwrap()));
            if (t instanceof nK) return nK.create(e(t.unwrap()));
            if (t instanceof nM) return nM.create(t.items.map((t) => e(t)));
            else return t;
          })(this);
        }
        partial(e) {
          let t = {};
          for (let r of I.objectKeys(this.shape)) {
            let n = this.shape[r];
            e && !e[r] ? (t[r] = n) : (t[r] = n.optional());
          }
          return new nC({ ...this._def, shape: () => t });
        }
        required(e) {
          let t = {};
          for (let r of I.objectKeys(this.shape))
            if (e && !e[r]) t[r] = this.shape[r];
            else {
              let e = this.shape[r];
              for (; e instanceof nV; ) e = e._def.innerType;
              t[r] = e;
            }
          return new nC({ ...this._def, shape: () => t });
        }
        keyof() {
          return nU(I.objectKeys(this.shape));
        }
      }
      ((nC.create = (e, t) =>
        new nC({
          shape: () => e,
          unknownKeys: "strip",
          catchall: nS.create(),
          typeName: T.ZodObject,
          ...r8(t),
        })),
        (nC.strictCreate = (e, t) =>
          new nC({
            shape: () => e,
            unknownKeys: "strict",
            catchall: nS.create(),
            typeName: T.ZodObject,
            ...r8(t),
          })),
        (nC.lazycreate = (e, t) =>
          new nC({
            shape: e,
            unknownKeys: "strip",
            catchall: nS.create(),
            typeName: T.ZodObject,
            ...r8(t),
          })));
      class nB extends r9 {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = this._def.options;
          if (t.common.async)
            return Promise.all(
              r.map(async (e) => {
                let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r,
                  }),
                  ctx: r,
                };
              }),
            ).then(function (e) {
              for (let t of e) if ("valid" === t.result.status) return t.result;
              for (let r of e)
                if ("dirty" === r.result.status)
                  return (
                    t.common.issues.push(...r.ctx.common.issues),
                    r.result
                  );
              let r = e.map((e) => new rq(e.ctx.common.issues));
              return (rW(t, { code: rG.invalid_union, unionErrors: r }), rY);
            });
          {
            let e,
              n = [];
            for (let i of r) {
              let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                s = i._parseSync({ data: t.data, path: t.path, parent: r });
              if ("valid" === s.status) return s;
              ("dirty" !== s.status || e || (e = { result: s, ctx: r }),
                r.common.issues.length && n.push(r.common.issues));
            }
            if (e)
              return (t.common.issues.push(...e.ctx.common.issues), e.result);
            let i = n.map((e) => new rq(e));
            return (rW(t, { code: rG.invalid_union, unionErrors: i }), rY);
          }
        }
        get options() {
          return this._def.options;
        }
      }
      nB.create = (e, t) =>
        new nB({ options: e, typeName: T.ZodUnion, ...r8(t) });
      let nO = (e) => {
        if (e instanceof nH) return nO(e.schema);
        if (e instanceof nz) return nO(e.innerType());
        if (e instanceof nG) return [e.value];
        if (e instanceof nq) return e.options;
        if (e instanceof nQ) return I.objectValues(e.enum);
        else if (e instanceof nJ) return nO(e._def.innerType);
        else if (e instanceof nE) return [void 0];
        else if (e instanceof nk) return [null];
        else if (e instanceof nV) return [void 0, ...nO(e.unwrap())];
        else if (e instanceof nK) return [null, ...nO(e.unwrap())];
        else if (e instanceof nX) return nO(e.unwrap());
        else if (e instanceof n1) return nO(e.unwrap());
        else if (e instanceof nW) return nO(e._def.innerType);
        else return [];
      };
      class nN extends r9 {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== rj.object)
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.object,
                received: t.parsedType,
              }),
              rY
            );
          let r = this.discriminator,
            n = t.data[r],
            i = this.optionsMap.get(n);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (rW(t, {
                code: rG.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              rY);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, r) {
          let n = new Map();
          for (let r of t) {
            let t = nO(r.shape[e]);
            if (!t.length)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
              );
            for (let i of t) {
              if (n.has(i))
                throw Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(i)}`,
                );
              n.set(i, r);
            }
          }
          return new nN({
            typeName: T.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ...r8(r),
          });
        }
      }
      class nR extends r9 {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = (e, n) => {
              if (r1(e) || r1(n)) return rY;
              let i = (function e(t, r) {
                let n = rH(t),
                  i = rH(r);
                if (t === r) return { valid: !0, data: t };
                if (n === rj.object && i === rj.object) {
                  let n = I.objectKeys(r),
                    i = I.objectKeys(t).filter((e) => -1 !== n.indexOf(e)),
                    s = { ...t, ...r };
                  for (let n of i) {
                    let i = e(t[n], r[n]);
                    if (!i.valid) return { valid: !1 };
                    s[n] = i.data;
                  }
                  return { valid: !0, data: s };
                }
                if (n === rj.array && i === rj.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let n = [];
                  for (let i = 0; i < t.length; i++) {
                    let s = e(t[i], r[i]);
                    if (!s.valid) return { valid: !1 };
                    n.push(s.data);
                  }
                  return { valid: !0, data: n };
                }
                if (n === rj.date && i === rj.date && +t == +r)
                  return { valid: !0, data: t };
                return { valid: !1 };
              })(e.value, n.value);
              return i.valid
                ? ((r2(e) || r2(n)) && t.dirty(),
                  { status: t.value, value: i.data })
                : (rW(r, { code: rG.invalid_intersection_types }), rY);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then(([e, t]) => n(e, t))
            : n(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              );
        }
      }
      nR.create = (e, t, r) =>
        new nR({ left: e, right: t, typeName: T.ZodIntersection, ...r8(r) });
      class nM extends r9 {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== rj.array)
            return (
              rW(r, {
                code: rG.invalid_type,
                expected: rj.array,
                received: r.parsedType,
              }),
              rY
            );
          if (r.data.length < this._def.items.length)
            return (
              rW(r, {
                code: rG.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              rY
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (rW(r, {
              code: rG.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            t.dirty());
          let n = [...r.data]
            .map((e, t) => {
              let n = this._def.items[t] || this._def.rest;
              return n ? n._parse(new r5(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(n).then((e) => r$.mergeArray(t, e))
            : r$.mergeArray(t, n);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new nM({ ...this._def, rest: e });
        }
      }
      nM.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new nM({ items: e, typeName: T.ZodTuple, rest: null, ...r8(t) });
      };
      class nF extends r9 {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== rj.object)
            return (
              rW(r, {
                code: rG.invalid_type,
                expected: rj.object,
                received: r.parsedType,
              }),
              rY
            );
          let n = [],
            i = this._def.keyType,
            s = this._def.valueType;
          for (let e in r.data)
            n.push({
              key: i._parse(new r5(r, e, r.path, e)),
              value: s._parse(new r5(r, r.data[e], r.path, e)),
              alwaysSet: e in r.data,
            });
          return r.common.async
            ? r$.mergeObjectAsync(t, n)
            : r$.mergeObjectSync(t, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new nF(
            t instanceof r9
              ? { keyType: e, valueType: t, typeName: T.ZodRecord, ...r8(r) }
              : {
                  keyType: ny.create(),
                  valueType: e,
                  typeName: T.ZodRecord,
                  ...r8(t),
                },
          );
        }
      }
      class nL extends r9 {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== rj.map)
            return (
              rW(r, {
                code: rG.invalid_type,
                expected: rj.map,
                received: r.parsedType,
              }),
              rY
            );
          let n = this._def.keyType,
            i = this._def.valueType,
            s = [...r.data.entries()].map(([e, t], s) => ({
              key: n._parse(new r5(r, e, r.path, [s, "key"])),
              value: i._parse(new r5(r, t, r.path, [s, "value"])),
            }));
          if (r.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let r of s) {
                let n = await r.key,
                  i = await r.value;
                if ("aborted" === n.status || "aborted" === i.status) return rY;
                (("dirty" === n.status || "dirty" === i.status) && t.dirty(),
                  e.set(n.value, i.value));
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let r of s) {
              let n = r.key,
                i = r.value;
              if ("aborted" === n.status || "aborted" === i.status) return rY;
              (("dirty" === n.status || "dirty" === i.status) && t.dirty(),
                e.set(n.value, i.value));
            }
            return { status: t.value, value: e };
          }
        }
      }
      nL.create = (e, t, r) =>
        new nL({ valueType: t, keyType: e, typeName: T.ZodMap, ...r8(r) });
      class nD extends r9 {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== rj.set)
            return (
              rW(r, {
                code: rG.invalid_type,
                expected: rj.set,
                received: r.parsedType,
              }),
              rY
            );
          let n = this._def;
          (null !== n.minSize &&
            r.data.size < n.minSize.value &&
            (rW(r, {
              code: rG.too_small,
              minimum: n.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
            t.dirty()),
            null !== n.maxSize &&
              r.data.size > n.maxSize.value &&
              (rW(r, {
                code: rG.too_big,
                maximum: n.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: n.maxSize.message,
              }),
              t.dirty()));
          let i = this._def.valueType;
          function s(e) {
            let r = new Set();
            for (let n of e) {
              if ("aborted" === n.status) return rY;
              ("dirty" === n.status && t.dirty(), r.add(n.value));
            }
            return { status: t.value, value: r };
          }
          let a = [...r.data.values()].map((e, t) =>
            i._parse(new r5(r, e, r.path, t)),
          );
          return r.common.async ? Promise.all(a).then((e) => s(e)) : s(a);
        }
        min(e, t) {
          return new nD({
            ...this._def,
            minSize: { value: e, message: S.toString(t) },
          });
        }
        max(e, t) {
          return new nD({
            ...this._def,
            maxSize: { value: e, message: S.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      nD.create = (e, t) =>
        new nD({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: T.ZodSet,
          ...r8(t),
        });
      class nj extends r9 {
        constructor() {
          (super(...arguments), (this.validate = this.implement));
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== rj.function)
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.function,
                received: t.parsedType,
              }),
              rY
            );
          function r(e, r) {
            return rK({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                rZ,
                rQ,
              ].filter((e) => !!e),
              issueData: { code: rG.invalid_arguments, argumentsError: r },
            });
          }
          function n(e, r) {
            return rK({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                rZ,
                rQ,
              ].filter((e) => !!e),
              issueData: { code: rG.invalid_return_type, returnTypeError: r },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            s = t.data;
          if (this._def.returns instanceof nZ) {
            let e = this;
            return r0(async function (...t) {
              let a = new rq([]),
                o = await e._def.args.parseAsync(t, i).catch((e) => {
                  throw (a.addIssue(r(t, e)), a);
                }),
                u = await Reflect.apply(s, this, o);
              return await e._def.returns._def.type
                .parseAsync(u, i)
                .catch((e) => {
                  throw (a.addIssue(n(u, e)), a);
                });
            });
          }
          {
            let e = this;
            return r0(function (...t) {
              let a = e._def.args.safeParse(t, i);
              if (!a.success) throw new rq([r(t, a.error)]);
              let o = Reflect.apply(s, this, a.data),
                u = e._def.returns.safeParse(o, i);
              if (!u.success) throw new rq([n(o, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new nj({ ...this._def, args: nM.create(e).rest(n_.create()) });
        }
        returns(e) {
          return new nj({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new nj({
            args: e || nM.create([]).rest(n_.create()),
            returns: t || n_.create(),
            typeName: T.ZodFunction,
            ...r8(r),
          });
        }
      }
      class nH extends r9 {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      nH.create = (e, t) =>
        new nH({ getter: e, typeName: T.ZodLazy, ...r8(t) });
      class nG extends r9 {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                received: t.data,
                code: rG.invalid_literal,
                expected: this._def.value,
              }),
              rY
            );
          }
          return { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function nU(e, t) {
        return new nq({ values: e, typeName: T.ZodEnum, ...r8(t) });
      }
      nG.create = (e, t) =>
        new nG({ value: e, typeName: T.ZodLiteral, ...r8(t) });
      class nq extends r9 {
        _parse(e) {
          if ("string" != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              rW(t, {
                expected: I.joinValues(r),
                received: t.parsedType,
                code: rG.invalid_type,
              }),
              rY
            );
          }
          if (
            (this._cache || (this._cache = new Set(this._def.values)),
            !this._cache.has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              rW(t, {
                received: t.data,
                code: rG.invalid_enum_value,
                options: r,
              }),
              rY
            );
          }
          return r0(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e, t = this._def) {
          return nq.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return nq.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t },
          );
        }
      }
      nq.create = nU;
      class nQ extends r9 {
        _parse(e) {
          let t = I.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== rj.string && r.parsedType !== rj.number) {
            let e = I.objectValues(t);
            return (
              rW(r, {
                expected: I.joinValues(e),
                received: r.parsedType,
                code: rG.invalid_type,
              }),
              rY
            );
          }
          if (
            (this._cache ||
              (this._cache = new Set(I.getValidEnumValues(this._def.values))),
            !this._cache.has(e.data))
          ) {
            let e = I.objectValues(t);
            return (
              rW(r, {
                received: r.data,
                code: rG.invalid_enum_value,
                options: e,
              }),
              rY
            );
          }
          return r0(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      nQ.create = (e, t) =>
        new nQ({ values: e, typeName: T.ZodNativeEnum, ...r8(t) });
      class nZ extends r9 {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== rj.promise && !1 === t.common.async
            ? (rW(t, {
                code: rG.invalid_type,
                expected: rj.promise,
                received: t.parsedType,
              }),
              rY)
            : r0(
                (t.parsedType === rj.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  }),
                ),
              );
        }
      }
      nZ.create = (e, t) =>
        new nZ({ type: e, typeName: T.ZodPromise, ...r8(t) });
      class nz extends r9 {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === T.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = this._def.effect || null,
            i = {
              addIssue: (e) => {
                (rW(r, e), e.fatal ? t.abort() : t.dirty());
              },
              get path() {
                return r.path;
              },
            };
          if (((i.addIssue = i.addIssue.bind(i)), "preprocess" === n.type)) {
            let e = n.transform(r.data, i);
            if (r.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ("aborted" === t.value) return rY;
                let n = await this._def.schema._parseAsync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
                return "aborted" === n.status
                  ? rY
                  : "dirty" === n.status || "dirty" === t.value
                    ? rX(n.value)
                    : n;
              });
            {
              if ("aborted" === t.value) return rY;
              let n = this._def.schema._parseSync({
                data: e,
                path: r.path,
                parent: r,
              });
              return "aborted" === n.status
                ? rY
                : "dirty" === n.status || "dirty" === t.value
                  ? rX(n.value)
                  : n;
            }
          }
          if ("refinement" === n.type) {
            let e = (e) => {
              let t = n.refinement(e, i);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
                );
              return e;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((r) =>
                  "aborted" === r.status
                    ? rY
                    : ("dirty" === r.status && t.dirty(),
                      e(r.value).then(() => ({
                        status: t.value,
                        value: r.value,
                      }))),
                );
            {
              let n = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === n.status
                ? rY
                : ("dirty" === n.status && t.dirty(),
                  e(n.value),
                  { status: t.value, value: n.value });
            }
          }
          if ("transform" === n.type)
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((e) =>
                  r3(e)
                    ? Promise.resolve(n.transform(e.value, i)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : rY,
                );
            else {
              let e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!r3(e)) return rY;
              let s = n.transform(e.value, i);
              if (s instanceof Promise)
                throw Error(
                  "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
                );
              return { status: t.value, value: s };
            }
          I.assertNever(n);
        }
      }
      ((nz.create = (e, t, r) =>
        new nz({ schema: e, typeName: T.ZodEffects, effect: t, ...r8(r) })),
        (nz.createWithPreprocess = (e, t, r) =>
          new nz({
            schema: t,
            effect: { type: "preprocess", transform: e },
            typeName: T.ZodEffects,
            ...r8(r),
          })));
      class nV extends r9 {
        _parse(e) {
          return this._getType(e) === rj.undefined
            ? r0(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      nV.create = (e, t) =>
        new nV({ innerType: e, typeName: T.ZodOptional, ...r8(t) });
      class nK extends r9 {
        _parse(e) {
          return this._getType(e) === rj.null
            ? r0(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      nK.create = (e, t) =>
        new nK({ innerType: e, typeName: T.ZodNullable, ...r8(t) });
      class nJ extends r9 {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return (
            t.parsedType === rj.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      nJ.create = (e, t) =>
        new nJ({
          innerType: e,
          typeName: T.ZodDefault,
          defaultValue:
            "function" == typeof t.default ? t.default : () => t.default,
          ...r8(t),
        });
      class nW extends r9 {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            n = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return r6(n)
            ? n.then((e) => ({
                status: "valid",
                value:
                  "valid" === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new rq(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: "valid",
                value:
                  "valid" === n.status
                    ? n.value
                    : this._def.catchValue({
                        get error() {
                          return new rq(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      nW.create = (e, t) =>
        new nW({
          innerType: e,
          typeName: T.ZodCatch,
          catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
          ...r8(t),
        });
      class n$ extends r9 {
        _parse(e) {
          if (this._getType(e) !== rj.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              rW(t, {
                code: rG.invalid_type,
                expected: rj.nan,
                received: t.parsedType,
              }),
              rY
            );
          }
          return { status: "valid", value: e.data };
        }
      }
      n$.create = (e) => new n$({ typeName: T.ZodNaN, ...r8(e) });
      let nY = Symbol("zod_brand");
      class nX extends r9 {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class n0 extends r9 {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === e.status
                ? rY
                : "dirty" === e.status
                  ? (t.dirty(), rX(e.value))
                  : this._def.out._parseAsync({
                      data: e.value,
                      path: r.path,
                      parent: r,
                    });
            })();
          {
            let e = this._def.in._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            return "aborted" === e.status
              ? rY
              : "dirty" === e.status
                ? (t.dirty(), { status: "dirty", value: e.value })
                : this._def.out._parseSync({
                    data: e.value,
                    path: r.path,
                    parent: r,
                  });
          }
        }
        static create(e, t) {
          return new n0({ in: e, out: t, typeName: T.ZodPipeline });
        }
      }
      class n1 extends r9 {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            r = (e) => (r3(e) && (e.value = Object.freeze(e.value)), e);
          return r6(t) ? t.then((e) => r(e)) : r(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function n2(e, t) {
        let r =
          "function" == typeof e
            ? e(t)
            : "string" == typeof e
              ? { message: e }
              : e;
        return "string" == typeof r ? { message: r } : r;
      }
      function n3(e, t = {}, r) {
        return e
          ? nI.create().superRefine((n, i) => {
              let s = e(n);
              if (s instanceof Promise)
                return s.then((e) => {
                  if (!e) {
                    let e = n2(t, n),
                      s = e.fatal ?? r ?? !0;
                    i.addIssue({ code: "custom", ...e, fatal: s });
                  }
                });
              if (!s) {
                let e = n2(t, n),
                  s = e.fatal ?? r ?? !0;
                i.addIssue({ code: "custom", ...e, fatal: s });
              }
            })
          : nI.create();
      }
      n1.create = (e, t) =>
        new n1({ innerType: e, typeName: T.ZodReadonly, ...r8(t) });
      let n6 = { object: nC.lazycreate };
      !(function (e) {
        ((e.ZodString = "ZodString"),
          (e.ZodNumber = "ZodNumber"),
          (e.ZodNaN = "ZodNaN"),
          (e.ZodBigInt = "ZodBigInt"),
          (e.ZodBoolean = "ZodBoolean"),
          (e.ZodDate = "ZodDate"),
          (e.ZodSymbol = "ZodSymbol"),
          (e.ZodUndefined = "ZodUndefined"),
          (e.ZodNull = "ZodNull"),
          (e.ZodAny = "ZodAny"),
          (e.ZodUnknown = "ZodUnknown"),
          (e.ZodNever = "ZodNever"),
          (e.ZodVoid = "ZodVoid"),
          (e.ZodArray = "ZodArray"),
          (e.ZodObject = "ZodObject"),
          (e.ZodUnion = "ZodUnion"),
          (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
          (e.ZodIntersection = "ZodIntersection"),
          (e.ZodTuple = "ZodTuple"),
          (e.ZodRecord = "ZodRecord"),
          (e.ZodMap = "ZodMap"),
          (e.ZodSet = "ZodSet"),
          (e.ZodFunction = "ZodFunction"),
          (e.ZodLazy = "ZodLazy"),
          (e.ZodLiteral = "ZodLiteral"),
          (e.ZodEnum = "ZodEnum"),
          (e.ZodEffects = "ZodEffects"),
          (e.ZodNativeEnum = "ZodNativeEnum"),
          (e.ZodOptional = "ZodOptional"),
          (e.ZodNullable = "ZodNullable"),
          (e.ZodDefault = "ZodDefault"),
          (e.ZodCatch = "ZodCatch"),
          (e.ZodPromise = "ZodPromise"),
          (e.ZodBranded = "ZodBranded"),
          (e.ZodPipeline = "ZodPipeline"),
          (e.ZodReadonly = "ZodReadonly"));
      })(T || (T = {}));
      let n5 = (e, t = { message: `Input not instance of ${e.name}` }) =>
          n3((t) => t instanceof e, t),
        n4 = ny.create,
        n8 = nv.create,
        n9 = n$.create,
        n7 = nb.create,
        ie = nA.create,
        it = nw.create,
        ir = nx.create,
        ii = nE.create,
        is = nk.create,
        ia = nI.create,
        io = n_.create,
        iu = nS.create,
        ic = nT.create,
        il = nP.create,
        id = nC.create,
        ih = nC.strictCreate,
        ip = nB.create,
        im = nN.create,
        ig = nR.create,
        iy = nM.create,
        iv = nF.create,
        ib = nL.create,
        iA = nD.create,
        iw = nj.create,
        ix = nH.create,
        iE = nG.create,
        ik = nq.create,
        iI = nQ.create,
        i_ = nZ.create,
        iS = nz.create,
        iT = nV.create,
        iP = nK.create,
        iC = nz.createWithPreprocess,
        iB = n0.create,
        iO = () => n4().optional(),
        iN = () => n8().optional(),
        iR = () => ie().optional(),
        iM = {
          string: (e) => ny.create({ ...e, coerce: !0 }),
          number: (e) => nv.create({ ...e, coerce: !0 }),
          boolean: (e) => nA.create({ ...e, coerce: !0 }),
          bigint: (e) => nb.create({ ...e, coerce: !0 }),
          date: (e) => nw.create({ ...e, coerce: !0 }),
        },
        iF = rY,
        iL = (e) => (e.message ? e.message : "unspecified error");
      class iD extends er {
        constructor(e) {
          (super(),
            (this.code = 1100),
            (this.errors = e),
            (super.message = `Web3 validator found ${e.length} error[s]:
${this._compileErrors().join("\n")}`));
        }
        _compileErrors() {
          return this.errors.map(iL);
        }
      }
      let ij = ["bool", "int", "uint", "bytes", "string", "address", "tuple"],
        iH = (e) => "object" == typeof e && "type" in e && "name" in e,
        iG = (e) => "string" == typeof e,
        iU = (e) => "string" == typeof e && /^((-)?0x[0-9a-f]+|(0x))$/i.test(e);
      function iq(e, t) {
        return (
          "string" == typeof e &&
          !!e.match(/^0x[0-9A-Fa-f]*$/) &&
          (void 0 === t || !(t > 0) || e.length === 2 + 2 * t)
        );
      }
      let iQ = (e) =>
        "number" == typeof e ||
        "bigint" == typeof e ||
        ("string" == typeof e && /^((-0x|0x|-)?[0-9a-f]+|(0x))$/i.test(e));
      function iZ(e) {
        if ("string" != typeof e)
          throw Error(
            `[isHexPrefixed] input must be type 'string', received type ${typeof e}`,
          );
        return e.startsWith("0x");
      }
      let iz = function (e) {
          for (let [t, r] of Object.entries(e))
            if (void 0 !== r && r.length > 0 && 0 === r[0])
              throw Error(
                `${t} cannot have leading zeroes, received: ${r.toString()}`,
              );
        },
        iV = [
          "hex",
          "number",
          "blockNumber",
          "blockNumberOrTag",
          "filter",
          "bloom",
        ],
        iK = (e) => {
          let t,
            r = e.replace(/ /, ""),
            n = !1,
            i = [];
          if (
            (e.includes("[") &&
              ((r = r.slice(0, r.indexOf("["))),
              (n =
                (i = [...e.matchAll(/(?:\[(\d*)\])/g)]
                  .map((e) => parseInt(e[1], 10))
                  .map((e) => (Number.isNaN(e) ? -1 : e))).length > 0)),
            ij.includes(r))
          )
            return { baseType: r, isArray: n, baseTypeSize: t, arraySizes: i };
          if (r.startsWith("int"))
            ((t = parseInt(r.substring(3), 10)), (r = "int"));
          else if (r.startsWith("uint"))
            ((t = parseInt(e.substring(4), 10)), (r = "uint"));
          else {
            if (!r.startsWith("bytes"))
              return {
                baseType: void 0,
                isArray: !1,
                baseTypeSize: void 0,
                arraySizes: i,
              };
            ((t = parseInt(r.substring(5), 10)), (r = "bytes"));
          }
          return { baseType: r, isArray: n, baseTypeSize: t, arraySizes: i };
        },
        iJ = (e, t = {}) => {
          if (Object.keys(t).includes("type"))
            throw new iD([
              {
                keyword: "eth",
                message: 'Either "eth" or "type" can be presented in schema',
                params: { eth: e },
                instancePath: "",
                schemaPath: "",
              },
            ]);
          let { baseType: r, baseTypeSize: n } = iK(e);
          if (!r && !iV.includes(e))
            throw new iD([
              {
                keyword: "eth",
                message: `Eth data type "${e}" is not valid`,
                params: { eth: e },
                instancePath: "",
                schemaPath: "",
              },
            ]);
          if (r) {
            if ("tuple" === r)
              throw Error('"tuple" type is not implemented directly.');
            return { format: `${r}${null != n ? n : ""}`, required: !0 };
          }
          return e ? { format: e, required: !0 } : {};
        },
        iW = (e, t = "/0") => {
          let r = {
            type: "array",
            items: [],
            maxItems: e.length,
            minItems: e.length,
          };
          for (let [n, i] of e.entries()) {
            let e,
              s,
              a,
              o = [];
            iH(i)
              ? ((e = i.type), (s = i.name || `${t}/${n}`), (o = i.components))
              : "string" == typeof i
                ? ((e = i), (s = `${t}/${n}`))
                : Array.isArray(i) &&
                  (i[0] &&
                  "string" == typeof i[0] &&
                  i[0].startsWith("tuple") &&
                  !Array.isArray(i[0]) &&
                  i[1] &&
                  Array.isArray(i[1])
                    ? ((e = i[0]), (s = `${t}/${n}`), (o = i[1]))
                    : ((e = "tuple"), (s = `${t}/${n}`), (o = i)));
            let { baseType: u, isArray: c, arraySizes: l } = iK(e),
              d = r;
            for (let e = l.length - 1; e > 0; e -= 1)
              ((a = {
                type: "array",
                $id: s,
                items: [],
                maxItems: l[e],
                minItems: l[e],
              }),
                l[e] < 0 && (delete a.maxItems, delete a.minItems),
                Array.isArray(d.items)
                  ? 0 === d.items.length
                    ? (d.items = [a])
                    : d.items.push(a)
                  : (d.items = [d.items, a]),
                (d = a));
            if ("tuple" !== u || c)
              if ("tuple" === u && c) {
                let e = l[0],
                  t = Object.assign(
                    { type: "array", $id: s, items: iW(o, s) },
                    e >= 0 && { minItems: e, maxItems: e },
                  );
                d.items.push(t);
              } else if (c) {
                let t = l[0],
                  r = Object.assign(
                    { type: "array", $id: s, items: iJ(e) },
                    t >= 0 && { minItems: t, maxItems: t },
                  );
                d.items.push(r);
              } else
                (Array.isArray(d.items),
                  d.items.push(Object.assign({ $id: s }, iJ(e))));
            else {
              let e = iW(o, s);
              ((e.$id = s), d.items.push(e));
            }
            d = r;
          }
          return r;
        },
        i$ = (e) => iW(e),
        iY = (e, t) => (1 === t ? e : iY(e[0], t - 1)),
        iX = (e, t, r) => {
          let n = [];
          for (let [i, s] of e.entries()) {
            let e,
              a,
              o = [];
            iH(s)
              ? ((e = s.type), (a = s.name), (o = s.components))
              : "string" == typeof s
                ? (e = s)
                : Array.isArray(s) &&
                  (s[1] && Array.isArray(s[1])
                    ? ((e = s[0]), (o = s[1]))
                    : ((e = "tuple"), (o = s)));
            let { baseType: u, isArray: c, arraySizes: l } = iK(e),
              d = Array.isArray(t) ? t[i] : t[a];
            if ("tuple" !== u || c)
              if ("tuple" === u && c) {
                let e = [];
                for (let t of d)
                  if (l.length > 1) {
                    let n = iY(t, l.length - 1),
                      i = [];
                    for (let e of n) i.push(iX(o, e, r));
                    e.push(i);
                  } else e.push(iX(o, t, r));
                n.push(e);
              } else n.push(d);
            else n.push(iX(o, d, r));
          }
          return ((r = null != r ? r : []).push(...n), r);
        },
        i0 = (e) => {
          if (e >= 48 && e <= 57) return e - 48;
          if (e >= 65 && e <= 70) return e - 55;
          if (e >= 97 && e <= 102) return e - 87;
          throw Error(`Invalid code point: ${e}`);
        },
        i1 = (e) => {
          if (!iU(e)) throw Error("Invalid hex string");
          let [t, r] = e.startsWith("-") ? [!0, e.slice(1)] : [!1, e],
            n = BigInt(r);
          return n > Number.MAX_SAFE_INTEGER
            ? t
              ? -n
              : n
            : n < Number.MIN_SAFE_INTEGER
              ? n
              : t
                ? -1 * Number(n)
                : Number(n);
        },
        i2 = (e) => {
          if (("number" == typeof e || "bigint" == typeof e) && e < 0)
            return `-0x${e.toString(16).slice(1)}`;
          if (("number" == typeof e || "bigint" == typeof e) && e >= 0)
            return `0x${e.toString(16)}`;
          if ("string" == typeof e && iU(e)) {
            let [t, r] = e.startsWith("-") ? [!0, e.slice(1)] : [!1, e],
              n = r.split(/^(-)?0(x|X)/).slice(-1)[0];
            return `${t ? "-" : ""}0x${n.replace(/^0+/, "").toLowerCase()}`;
          }
          if ("string" == typeof e && !iU(e)) return i2(BigInt(e));
          throw new tf(e);
        },
        i3 = (e, t, r = "0") => {
          if ("string" == typeof e && !iU(e)) return e.padStart(t, r);
          let n = "string" == typeof e && iU(e) ? e : i2(e),
            [i, s] = n.startsWith("-")
              ? ["-0x", n.slice(3)]
              : ["0x", n.slice(2)];
          return `${i}${s.padStart(t, r)}`;
        };
      function i6(e) {
        let t = "0x";
        for (let r of e) {
          let e = r.toString(16);
          t += 1 === e.length ? `0${e}` : e;
        }
        return t;
      }
      let i5 = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function i4(e) {
        return e >= i5.zero && e <= i5.nine
          ? e - i5.zero
          : e >= i5.A && e <= i5.F
            ? e - (i5.A - 10)
            : e >= i5.a && e <= i5.f
              ? e - (i5.a - 10)
              : void 0;
      }
      function i8(e) {
        let t = 0;
        if (
          (e.startsWith("0") && ("x" === e[1] || "X" === e[1]) && (t = 2),
          e.length % 2 != 0)
        )
          throw new th(`hex string has odd length: ${e}`);
        let r = (e.length - t) / 2,
          n = new Uint8Array(r);
        for (let i = 0, s = t; i < r; i += 1) {
          let t = i4(e.charCodeAt(s++)),
            r = i4(e.charCodeAt(s++));
          if (void 0 === t || void 0 === r)
            throw new th(
              `Invalid byte sequence ("${e[s - 2]}${e[s - 1]}" in "${e}").`,
            );
          n[i] = 16 * t + r;
        }
        return n;
      }
      function i9(e) {
        var t;
        return e instanceof Uint8Array ||
          (null == (t = null == e ? void 0 : e.constructor)
            ? void 0
            : t.name) !== "Uint8Array"
          ? e
          : Uint8Array.from(e);
      }
      let i7 = (e) => {
          var t, r;
          return (
            e instanceof Uint8Array ||
            (null == (t = null == e ? void 0 : e.constructor)
              ? void 0
              : t.name) === "Uint8Array" ||
            (null == (r = null == e ? void 0 : e.constructor)
              ? void 0
              : r.name) === "Buffer"
          );
        },
        se = (e, t = { abiType: "bytes" }) => {
          let r;
          if (
            ("string" != typeof e && !Array.isArray(e) && !i7(e)) ||
            ("string" == typeof e && iU(e) && e.startsWith("-")) ||
            ("string" == typeof e && !iU(e))
          )
            return !1;
          if ("string" == typeof e) {
            if (e.length % 2 != 0) return !1;
            r = i8(e);
          } else if (Array.isArray(e)) {
            if (e.some((e) => e < 0 || e > 255 || !Number.isInteger(e)))
              return !1;
            r = new Uint8Array(e);
          } else r = e;
          if (null == t ? void 0 : t.abiType) {
            let { baseTypeSize: e } = iK(t.abiType);
            return !e || r.length === e;
          }
          return (
            null == t || !t.size || r.length === (null == t ? void 0 : t.size)
          );
        },
        st = (e) => {
          if (!/^(0x)?[0-9a-f]{40}$/i.test(e)) return !1;
          let t = e.slice(2),
            r = i6(rD(i9(ru(t.toLowerCase())))).slice(2);
          for (let e = 0; e < 40; e += 1)
            if (
              (parseInt(r[e], 16) > 7 && t[e].toUpperCase() !== t[e]) ||
              (7 >= parseInt(r[e], 16) && t[e].toLowerCase() !== t[e])
            )
              return !1;
          return !0;
        },
        sr = (e, t = !0) => {
          let r;
          return (
            ("string" == typeof e || !!i7(e)) &&
            ((r = i7(e)
              ? i6(e)
              : "string" != typeof e ||
                  iU(e) ||
                  e.toLowerCase().startsWith("0x")
                ? e
                : `0x${e}`),
            !!/^(0x)?[0-9a-f]{40}$/i.test(r) &&
              (!!(
                /^(0x|0X)?[0-9a-f]{40}$/.test(r) ||
                /^(0x|0X)?[0-9A-F]{40}$/.test(r)
              ) ||
                !t ||
                st(r)))
          );
        },
        sn = (e, t) => {
          if (t === BigInt(0)) return BigInt(1);
          let r = e;
          for (let n = 1; n < t; n += 1) r *= e;
          return r;
        },
        si = (e, t = { abiType: "uint" }) => {
          let r;
          if (
            !["number", "string", "bigint"].includes(typeof e) ||
            ("string" == typeof e && 0 === e.length)
          )
            return !1;
          if (null == t ? void 0 : t.abiType) {
            let { baseTypeSize: e } = iK(t.abiType);
            e && (r = e);
          } else t.bitSize && (r = t.bitSize);
          let n = sn(BigInt(2), BigInt(null != r ? r : 256)) - BigInt(1);
          try {
            let t = "string" == typeof e && iU(e) ? BigInt(i1(e)) : BigInt(e);
            return t >= 0 && t <= n;
          } catch (e) {
            return !1;
          }
        },
        ss = (e, t = { abiType: "int" }) => {
          let r;
          if (
            !["number", "string", "bigint"].includes(typeof e) ||
            ("number" == typeof e && e > Number.MAX_SAFE_INTEGER)
          )
            return !1;
          if (null == t ? void 0 : t.abiType) {
            let { baseTypeSize: e, baseType: n } = iK(t.abiType);
            if ("int" !== n) return !1;
            e && (r = e);
          } else t.bitSize && (r = t.bitSize);
          let n = sn(BigInt(2), BigInt((null != r ? r : 256) - 1)),
            i = BigInt(-1) * sn(BigInt(2), BigInt((null != r ? r : 256) - 1));
          try {
            let t = "string" == typeof e && iU(e) ? BigInt(i1(e)) : BigInt(e);
            return t >= i && t <= n;
          } catch (e) {
            return !1;
          }
        },
        sa = (e) =>
          !!(
            ss(e) ||
            ("string" == typeof e &&
              /[0-9.]/.test(e) &&
              e.indexOf(".") === e.lastIndexOf("."))
          ) || "number" == typeof e,
        so = (e) => si(e),
        su = (e) => Object.values(E).includes(e),
        sc = (e) => su(e) || so(e),
        sl = (e) =>
          "string" == typeof e &&
          !!/^(0x)?[0-9a-f]{512}$/i.test(e) &&
          !!(/^(0x)?[0-9a-f]{512}$/.test(e) || /^(0x)?[0-9A-F]{512}$/.test(e)),
        sd = (e, t) => {
          if (("string" == typeof t && !iU(t)) || !sl(e)) return !1;
          let r = i6(rD("string" == typeof t ? i8(t) : t)).slice(2);
          for (let t = 0; t < 12; t += 4) {
            let n =
                ((parseInt(r.slice(t, t + 2), 16) << 8) +
                  parseInt(r.slice(t + 2, t + 4), 16)) &
                2047,
              i = i0(e.charCodeAt(e.length - 1 - Math.floor(n / 4))),
              s = 1 << (n % 4);
            if ((i & s) !== s) return !1;
          }
          return !0;
        },
        sh = (e) =>
          !!["number", "string", "boolean"].includes(typeof e) &&
          ("boolean" == typeof e ||
            ("string" != typeof e || iU(e)
              ? "string" == typeof e && iU(e)
                ? "0x1" === e || "0x0" === e
                : 1 === e || 0 === e
              : "1" === e || "0" === e)),
        sf = (e) => null == e,
        sp = (e) =>
          "object" == typeof e &&
          !sf(e) &&
          !Array.isArray(e) &&
          !(e instanceof $),
        sm = (e) =>
          "string" == typeof e &&
          !!/^(0x)?[0-9a-f]{64}$/i.test(e) &&
          !!(/^(0x)?[0-9a-f]{64}$/.test(e) || /^(0x)?[0-9A-F]{64}$/.test(e)),
        sg = (e) => {
          let t = ["fromBlock", "toBlock", "address", "topics", "blockHash"];
          if (
            sf(e) ||
            "object" != typeof e ||
            !Object.keys(e).every((e) => t.includes(e)) ||
            (!sf(e.fromBlock) && !sc(e.fromBlock)) ||
            (!sf(e.toBlock) && !sc(e.toBlock))
          )
            return !1;
          if (!sf(e.address)) {
            if (Array.isArray(e.address)) {
              if (!e.address.every((e) => sr(e))) return !1;
            } else if (!sr(e.address)) return !1;
          }
          return (
            !!sf(e.topics) ||
            !!e.topics.every(
              (e) =>
                !!sf(e) || (Array.isArray(e) ? e.every((e) => sm(e)) : !!sm(e)),
            )
          );
        },
        sy = {
          address: (e) => sr(e),
          bloom: (e) => sl(e),
          blockNumber: (e) => so(e),
          blockTag: (e) => su(e),
          blockNumberOrTag: (e) => sc(e),
          bool: (e) => sh(e),
          bytes: (e) => se(e),
          filter: (e) => sg(e),
          hex: (e) => iU(e),
          uint: (e) => si(e),
          int: (e) => ss(e),
          number: (e) => sa(e),
          string: (e) => iG(e),
        };
      for (let e = 8; e <= 256; e += 8)
        ((sy[`int${e}`] = (t) => ss(t, { bitSize: e })),
          (sy[`uint${e}`] = (t) => si(t, { bitSize: e })));
      for (let e = 1; e <= 32; e += 1)
        sy[`bytes${e}`] = (t) => se(t, { size: e });
      sy.bytes256 = sy.bytes;
      let sv = (e) => {
        if (
          (!(null == e ? void 0 : e.type) ||
            (null == e ? void 0 : e.type) === "object") &&
          (null == e ? void 0 : e.properties)
        ) {
          let t = {};
          for (let r of Object.keys(e.properties)) {
            let n = sv(e.properties[r]);
            n && (t[r] = n);
          }
          return Array.isArray(e.required)
            ? id(t)
                .partial()
                .required(
                  e.required.reduce(
                    (e, t) => Object.assign(Object.assign({}, e), { [t]: !0 }),
                    {},
                  ),
                )
            : id(t).partial();
        }
        if (
          (null == e ? void 0 : e.type) === "array" &&
          (null == e ? void 0 : e.items)
        ) {
          if (
            Array.isArray(e.items) &&
            e.items.length > 1 &&
            void 0 !== e.maxItems &&
            new Set(e.items.map((e) => e.$id)).size === e.items.length
          ) {
            let t = [];
            for (let r of e.items) {
              let e = sv(r);
              e && t.push(e);
            }
            return iy(t);
          }
          let t = il(sv(Array.isArray(e.items) ? e.items[0] : e.items));
          return (
            (t = void 0 !== e.minItems ? t.min(e.minItems) : t),
            (t = void 0 !== e.maxItems ? t.max(e.maxItems) : t)
          );
        }
        if (e.oneOf && Array.isArray(e.oneOf))
          return ip(e.oneOf.map((e) => sv(e)));
        if (null == e ? void 0 : e.format) {
          if (!sy[e.format]) throw new tK(e.format);
          return ia().refine(sy[e.format], (t) => ({
            params: { value: t, format: e.format },
          }));
        }
        return (null == e ? void 0 : e.type) &&
          (null == e ? void 0 : e.type) !== "object" &&
          "function" == typeof q[String(e.type)]
          ? q[String(e.type)]()
          : id({ data: ia() }).partial();
      };
      class sb {
        static factory() {
          return (
            sb.validatorInstance || (sb.validatorInstance = new sb()),
            sb.validatorInstance
          );
        }
        validate(e, t, r) {
          var n, i;
          let s = sv(e).safeParse(t);
          if (!s.success) {
            let e = this.convertErrors(
              null != (i = null == (n = s.error) ? void 0 : n.issues) ? i : [],
            );
            if (e) {
              if (null == r ? void 0 : r.silent) return e;
              throw new iD(e);
            }
          }
        }
        convertErrors(e) {
          if (e && Array.isArray(e) && e.length > 0)
            return e.map((e) => {
              var t;
              let r, n, i, s;
              s = e.path.join("/");
              let a = String(e.path[e.path.length - 1]),
                o = e.path.join("/");
              if (e.code === rG.too_big)
                ((n = "maxItems"),
                  (s = `${o}/maxItems`),
                  (i = { limit: e.maximum }),
                  (r = `must NOT have more than ${e.maximum} items`));
              else if (e.code === rG.too_small)
                ((n = "minItems"),
                  (s = `${o}/minItems`),
                  (i = { limit: e.minimum }),
                  (r = `must NOT have fewer than ${e.minimum} items`));
              else if (e.code === rG.custom) {
                let { value: n, format: a } = null != (t = e.params) ? t : {};
                ((r =
                  void 0 === n
                    ? `value at "/${s}" is required`
                    : `value "${"object" == typeof n ? JSON.stringify(n) : n}" at "/${s}" must pass "${a}" validation`),
                  (i = { value: n }));
              }
              return {
                keyword: null != n ? n : a,
                instancePath: o ? `/${o}` : "",
                schemaPath: s ? `#${s}` : "#",
                params: null != i ? i : { value: e.message },
                message: null != r ? r : e.message,
              };
            });
        }
      }
      class sA {
        constructor() {
          this._validator = sb.factory();
        }
        validateJSONSchema(e, t, r) {
          return this._validator.validate(e, t, r);
        }
        validate(e, t, r = { silent: !1 }) {
          var n, i;
          let s = i$(e);
          if (
            !Array.isArray(s.items) ||
            (null == (n = s.items) ? void 0 : n.length) !== 0 ||
            0 !== t.length
          ) {
            if (
              Array.isArray(s.items) &&
              (null == (i = s.items) ? void 0 : i.length) === 0 &&
              0 !== t.length
            )
              throw new iD([
                {
                  instancePath: "/0",
                  schemaPath: "/",
                  keyword: "required",
                  message: "empty schema against data can not be validated",
                  params: t,
                },
              ]);
            return this._validator.validate(s, t, r);
          }
        }
      }
      let sw = new sA();
      function sx(e) {
        var t, r;
        return (
          e instanceof Uint8Array ||
          (null == (t = null == e ? void 0 : e.constructor)
            ? void 0
            : t.name) === "Uint8Array" ||
          (null == (r = null == e ? void 0 : e.constructor)
            ? void 0
            : r.name) === "Buffer"
        );
      }
      function sE(...e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        for (let n of e) (t.set(n, r), (r += n.length));
        return t;
      }
      function sk(e, t) {
        if (e === t) return !0;
        if (e.byteLength !== t.byteLength) return !1;
        for (let r = 0; r < e.byteLength; r += 1) if (e[r] !== t[r]) return !1;
        return !0;
      }
      let sI = {
          noether: BigInt(0),
          wei: BigInt(1),
          kwei: BigInt(1e3),
          Kwei: BigInt(1e3),
          babbage: BigInt(1e3),
          femtoether: BigInt(1e3),
          mwei: BigInt(1e6),
          Mwei: BigInt(1e6),
          lovelace: BigInt(1e6),
          picoether: BigInt(1e6),
          gwei: BigInt(1e9),
          Gwei: BigInt(1e9),
          shannon: BigInt(1e9),
          nanoether: BigInt(1e9),
          nano: BigInt(1e9),
          szabo: BigInt(1e12),
          microether: BigInt(1e12),
          micro: BigInt(1e12),
          finney: BigInt(1e15),
          milliether: BigInt(1e15),
          milli: BigInt(1e15),
          ether: BigInt("1000000000000000000"),
          kether: BigInt("1000000000000000000000"),
          grand: BigInt("1000000000000000000000"),
          mether: BigInt("1000000000000000000000000"),
          gether: BigInt("1000000000000000000000000000"),
          tether: BigInt("1000000000000000000000000000000"),
        },
        s_ =
          "Warning: Using type `number` with values that are large or contain many decimals may cause loss of precision, it is recommended to use type `string` or `BigInt` when using conversion methods",
        sS = (e) => {
          if ((sw.validate(["bytes"], [e]), sx(e))) return e;
          if (Array.isArray(e)) return new Uint8Array(e);
          if ("string" == typeof e) return i8(e);
          throw new th(e);
        },
        { uint8ArrayToHexString: sT } = Q,
        sP = (e) => sT(sS(e)),
        sC = (e) =>
          "string" == typeof e && "0x" !== e.slice(0, 2).toLowerCase()
            ? sS(`0x${e}`)
            : sS(e),
        sB = (e) => (sw.validate(["hex"], [e]), i1(e)),
        sO = sB,
        sN = (e, t) => {
          "bigint" != typeof e && sw.validate(["int"], [e]);
          let r = i2(e);
          return (
            t &&
              (r.startsWith("-") || r.length % 2 != 1
                ? r.length % 2 == 0 &&
                  r.startsWith("-") &&
                  (r = "-0x0".concat(r.slice(3)))
                : (r = "0x0".concat(r.slice(2)))),
            r
          );
        },
        sR = sN,
        sM = (e) => sB(e).toString(),
        sF = (e) => {
          sw.validate(["string"], [e]);
          let t = e.replace(/^(?:\u0000)/, "");
          return (
            (t = t.replace(/(?:\u0000)$/, "")),
            sP(new TextEncoder().encode(t))
          );
        },
        sL = sF,
        sD = sF,
        sj = (e) => rF(sC(e)),
        sH = (e) =>
          "string" == typeof e ? sj(e) : (sw.validate(["bytes"], [e]), rF(e)),
        sG = ru,
        sU = sj,
        sq = (e) => {
          sw.validate(["string"], [e]);
          let t = "";
          for (let r = 0; r < e.length; r += 1) {
            let n = e.charCodeAt(r).toString(16);
            t += n.length % 2 != 0 ? `0${n}` : n;
          }
          return `0x${t}`;
        },
        sQ = sq,
        sZ = (e) => new TextDecoder("ascii").decode(sC(e)),
        sz = sZ,
        sV = (e, t) => {
          if ("string" == typeof e && sr(e))
            return t ? "address" : `0x${e.toLowerCase().replace(/^0x/i, "")}`;
          if ("boolean" == typeof e) return t ? "bool" : e ? "0x01" : "0x00";
          if ("number" == typeof e)
            return t ? (e < 0 ? "int256" : "uint256") : sN(e);
          if ("bigint" == typeof e) return t ? "bigint" : sN(e);
          if (sx(e)) return t ? "bytes" : sP(e);
          if ("object" == typeof e && e)
            return t ? "string" : sF(JSON.stringify(e));
          if ("string" == typeof e) {
            if (e.startsWith("-0x") || e.startsWith("-0X"))
              return t ? "int256" : sN(e);
            if (iU(e)) return t ? "bytes" : e;
            if (iQ(e) && !ss(e) && !si(e)) return t ? "bytes" : `0x${e}`;
            if (iQ(e) && !ss(e) && si(e)) return t ? "uint" : sN(e);
            if (!Number.isFinite(e)) return t ? "string" : sF(e);
          }
          throw new tv(e);
        },
        sK = (e) => {
          if ("number" == typeof e)
            return e > 1e20 ? (console.warn(s_), BigInt(e)) : e;
          if ("bigint" == typeof e)
            return e >= Number.MIN_SAFE_INTEGER && e <= Number.MAX_SAFE_INTEGER
              ? Number(e)
              : e;
          if ("string" == typeof e && iU(e)) return sB(e);
          try {
            return sK(BigInt(e));
          } catch (t) {
            throw new tf(e);
          }
        },
        sJ = (e) => {
          if ("number" == typeof e) return BigInt(e);
          if ("bigint" == typeof e) return e;
          if ("string" == typeof e && iQ(e))
            return e.startsWith("-") ? -BigInt(e.substring(1)) : BigInt(e);
          throw new tf(e);
        },
        sW = (e, t) => {
          let r;
          if ("string" == typeof t) {
            if (!(r = sI[t])) throw new tg(t);
          } else {
            if (t < 0 || !Number.isInteger(t)) throw new ty(t);
            r = sn(BigInt(10), BigInt(t));
          }
          let n = String(sK(e)),
            i = r.toString().length - 1;
          if (i <= 0) return n.toString();
          let s = n.padStart(i, "0"),
            a = s.slice(0, -i),
            o = s.slice(-i).replace(/\.?0+$/, "");
          return "" === a
            ? o
              ? `0.${o}`
              : "0"
            : "" === o
              ? a
              : `${a}.${o}`.slice(0, a.length + i + 1);
        },
        s$ = (e, t) => {
          let r;
          if ((sw.validate(["number"], [e]), "string" == typeof t)) {
            if (!(r = sI[t])) throw new tg(t);
          } else {
            if (t < 0 || !Number.isInteger(t)) throw new ty(t);
            r = sn(BigInt(10), BigInt(t));
          }
          let n = e;
          "number" == typeof n &&
            (n < 1e-15 && console.warn(s_),
            n > 1e20
              ? (console.warn(s_), (n = BigInt(n)))
              : (n = n.toLocaleString("fullwide", {
                  useGrouping: !1,
                  maximumFractionDigits: 20,
                })));
          let [i, s] = String("string" == typeof n && !iU(n) ? n : sK(n))
              .split(".")
              .concat(""),
            a = BigInt(`${i}${s}`) * r,
            o = s.length;
          return 0 === o ? a.toString() : a.toString().slice(0, -o);
        },
        sY = (e) => {
          if (!sr(e, !1)) throw new tp(e);
          let t = e.toLowerCase().replace(/^0x/i, ""),
            r = i6(rD(i9(sG(t))));
          if (
            sf(r) ||
            "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470" ===
              r
          )
            return "";
          let n = "0x",
            i = r.replace(/^0x/i, "");
          for (let e = 0; e < t.length; e += 1)
            parseInt(i[e], 16) > 7 ? (n += t[e].toUpperCase()) : (n += t[e]);
          return n;
        },
        sX = (e) => {
          if ("boolean" == typeof e) return e;
          if (
            ("number" == typeof e && (0 === e || 1 === e)) ||
            ("bigint" == typeof e && (e === BigInt(0) || e === BigInt(1)))
          )
            return !!e;
          if (
            "string" == typeof e &&
            !iU(e) &&
            ("1" === e || "0" === e || "false" === e || "true" === e)
          )
            return "true" === e || ("false" !== e && !!Number(e));
          if ("string" == typeof e && iU(e) && ("0x1" === e || "0x0" === e))
            return !!sK(e);
          throw new tA(e);
        };
      var s0 = r(3654);
      let s1 = s0;
      class s2 extends s1 {
        constructor() {
          (super(...arguments), (this.maxListeners = Number.MAX_SAFE_INTEGER));
        }
        setMaxListeners(e) {
          return ((this.maxListeners = e), this);
        }
        getMaxListeners() {
          return this.maxListeners;
        }
      }
      let s3 = iU,
        s6 = iQ,
        s5 = st,
        s4 = sr,
        s8 = sl,
        s9 = sd,
        s7 = (e, t) => !!sl(e) && !!sr(t) && sd(e, i3(t, 64)),
        ae = (e, t) => !!sl(e) && !!sr(t) && sd(e, t),
        at = sm,
        ar = (e, t) => !!sl(e) && !!sm(t) && sd(e, t),
        an = (e, t) => {
          let r = "string" == typeof e && su(e),
            n = "string" == typeof t && su(t);
          if (
            e === t ||
            (("earliest" === e || 0 === e) && ("earliest" === t || 0 === t))
          )
            return 0;
          if ("earliest" === e) return -1;
          if ("earliest" === t) return 1;
          if (r && n) {
            let r = {
              [E.EARLIEST]: 1,
              [E.FINALIZED]: 2,
              [E.SAFE]: 3,
              [E.LATEST]: 4,
              [E.PENDING]: 5,
            };
            return r[e] < r[t] ? -1 : 1;
          }
          if ((r && !n) || (!r && n))
            throw new tk(
              "Cannot compare blocktag with provided non-blocktag input.",
            );
          let i = BigInt(e),
            s = BigInt(t);
          return i < s ? -1 : +(i !== s);
        },
        ai = (e) =>
          "object" == typeof e &&
          !sf(e) &&
          0 !== Object.keys(e).length &&
          [
            "input",
            "data",
            "from",
            "gas",
            "gasPrice",
            "gasLimit",
            "address",
            "jsonInterface",
            "syncWithContext",
            "dataInputFill",
          ].some((t) => t in e),
        as = sf,
        aa = (e) =>
          "object" == typeof e &&
          !sf(e) &&
          !Array.isArray(e) &&
          !(e instanceof $),
        ao = (e, ...t) => {
          if (!aa(e)) return e;
          let r = Object.assign({}, e);
          for (let e of t)
            for (let t in e)
              aa(e[t])
                ? (r[t] || (r[t] = {}), (r[t] = ao(r[t], e[t])))
                : !sf(e[t]) &&
                  Object.hasOwnProperty.call(e, t) &&
                  (Array.isArray(e[t]) || e[t] instanceof $
                    ? (r[t] = e[t].slice(0))
                    : (r[t] = e[t]));
          return r;
        },
        au = (e, t, r = "0") =>
          "string" == typeof e
            ? iU(e)
              ? i3(e, t, r)
              : e.padStart(t, r)
            : (sw.validate(["int"], [e]), i3(e, t, r)),
        ac = (e, t, r = "0") => {
          if ("string" == typeof e && !iU(e)) return e.padEnd(t, r);
          let n = "string" == typeof e && iU(e) ? e : sN(e),
            i = n.startsWith("-") ? 3 : 2;
          return (
            sw.validate([n.startsWith("-") ? "int" : "uint"], [e]),
            n.padEnd(t + i, r)
          );
        },
        al = ac,
        ad = au,
        ah = (e, t = 64) => {
          sw.validate(["int"], [e]);
          let r = sK(e);
          if (r >= 0) return au(sV(r), t);
          let n = sn(BigInt(2), BigInt(4 * t));
          if (-r >= n) throw new tb(`value: ${e}, nibbleWidth: ${t}`);
          return au(sN(BigInt(r) + n), t);
        },
        af = (e, t = 64) => {
          sw.validate(["int"], [e]);
          let r = sK(e);
          if (r < 0) return r;
          let n = Math.ceil(Math.log(Number(r)) / Math.log(2));
          if (n > 4 * t) throw new tb(`value: "${e}", nibbleWidth: "${t}"`);
          if (4 * t !== n) return r;
          let i = sn(BigInt(2), BigInt(t) * BigInt(4));
          return sK(BigInt(r) - i);
        },
        { parseBaseType: ap } = Q,
        am = (e) =>
          "object" == typeof e && !sf(e) && "number" in e && "bytes" in e,
        ag = (e, t, r = []) => {
          let n,
            i = Object.assign({}, e);
          for (let e of t) {
            if (i.oneOf && n) {
              let e = n,
                t = r.find(([t]) => t === e);
              t && t[0] === n && (i = i.oneOf[t[1]]);
            }
            if (!i.properties && !i.items) return;
            (i.properties
              ? (i = i.properties[e])
              : i.items && i.items.properties
                ? (i = i.items.properties[e])
                : i.items && sp(i.items)
                  ? (i = i.items)
                  : i.items &&
                    Array.isArray(i.items) &&
                    (i = i.items[parseInt(e, 10)]),
              i && e && (n = e));
          }
          return i;
        },
        ay = (e, t, r) => {
          try {
            let { baseType: n, baseTypeSize: i } = ap(t);
            if ("int" === n || "uint" === n)
              switch (r.number) {
                case w.NUMBER:
                  return Number(sJ(e));
                case w.HEX:
                  return sN(sJ(e));
                case w.STR:
                  return sJ(e).toString();
                case w.BIGINT:
                  return sJ(e);
                default:
                  throw new eS(`Invalid format: ${String(r.number)}`);
              }
            if ("bytes" === n) {
              let t;
              switch (
                (i
                  ? "string" == typeof e
                    ? (t = au(e, 2 * i))
                    : sx(e) && (t = sE(new Uint8Array(i - e.length), e))
                  : (t = e),
                r.bytes)
              ) {
                case x.HEX:
                  return sP(sS(t));
                case x.UINT8ARRAY:
                  return sS(t);
                default:
                  throw new eS(`Invalid format: ${String(r.bytes)}`);
              }
            }
            if ("string" === n) return String(e);
          } catch (e) {}
          return e;
        },
        av = ({
          value: e,
          schemaProp: t,
          schema: r,
          object: n,
          key: i,
          dataPath: s,
          format: a,
          oneOfPath: o = [],
        }) => {
          var u, c;
          if (Array.isArray(e)) {
            let l = t;
            if (
              ((null == t ? void 0 : t.oneOf) !== void 0 &&
                t.oneOf.forEach((r, n) => {
                  var s, a;
                  Array.isArray(null == t ? void 0 : t.items) ||
                    (("object" != typeof e[0] ||
                      (null == (s = null == r ? void 0 : r.items)
                        ? void 0
                        : s.type) !== "object") &&
                      ("string" != typeof e[0] ||
                        (null == (a = null == r ? void 0 : r.items)
                          ? void 0
                          : a.type) === "object")) ||
                    ((l = r), o.push([i, n]));
                }),
              sf(null == l ? void 0 : l.items))
            )
              return (delete n[i], s.pop(), !0);
            if (sp(l.items) && !sf(l.items.format)) {
              for (let t = 0; t < e.length; t += 1)
                n[i][t] = ay(
                  e[t],
                  null == (u = null == l ? void 0 : l.items)
                    ? void 0
                    : u.format,
                  a,
                );
              return (s.pop(), !0);
            }
            if (
              !Array.isArray(null == l ? void 0 : l.items) &&
              (null == (c = null == l ? void 0 : l.items) ? void 0 : c.type) ===
                "object"
            ) {
              for (let t of e) ab(t, r, s, a, o);
              return (s.pop(), !0);
            }
            if (Array.isArray(null == l ? void 0 : l.items)) {
              for (let t = 0; t < e.length; t += 1)
                n[i][t] = ay(e[t], l.items[t].format, a);
              return (s.pop(), !0);
            }
          }
          return !1;
        },
        ab = (e, t, r, n, i = []) => {
          var s;
          if (!sp(e) && !Array.isArray(e))
            return ay(e, null == t ? void 0 : t.format, n);
          if (
            Array.isArray(e) &&
            (null == t ? void 0 : t.type) === "array" &&
            (null == (s = null == t ? void 0 : t.items) ? void 0 : s.type) ===
              "object"
          )
            av({
              value: e,
              schemaProp: t,
              schema: t,
              object: e,
              key: "",
              dataPath: r,
              format: n,
              oneOfPath: i,
            });
          else
            for (let [s, a] of Object.entries(e)) {
              r.push(s);
              let o = ag(t, r, i);
              if (sf(o)) {
                (delete e[s], r.pop());
                continue;
              }
              if (sp(a)) {
                (ab(a, t, r, n, i), r.pop());
                continue;
              }
              if (
                !av({
                  value: a,
                  schemaProp: o,
                  schema: t,
                  object: e,
                  key: s,
                  dataPath: r,
                  format: n,
                  oneOfPath: i,
                })
              ) {
                if (
                  (null == o ? void 0 : o.format) === void 0 &&
                  (null == o ? void 0 : o.oneOf) !== void 0
                ) {
                  for (let [e, t] of o.oneOf.entries())
                    if ((null == t ? void 0 : t.format) !== void 0) {
                      o = t;
                      break;
                    }
                }
                ((e[s] = ay(a, o.format, n)), r.pop());
              }
            }
          return e;
        },
        aA = (e, t, r = J) => {
          let n;
          n = sp(t) ? ao({}, t) : Array.isArray(t) ? [...t] : t;
          let i = sp(e) ? e : i$(e);
          if (!i.properties && !i.items && !i.format)
            throw new eS("Invalid json schema for formatting");
          return ab(n, i, [], r);
        },
        aw =
          "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
        ax = (e) => {
          let t;
          return sP(
            rD(
              i9(
                "bigint" == typeof e || "number" == typeof e
                  ? ru(e.toString())
                  : Array.isArray(e)
                    ? new Uint8Array(e)
                    : "string" != typeof e || iU(e)
                      ? sS(e)
                      : ru(e),
              ),
            ),
          );
        },
        aE = (e) => {
          let t,
            r = ax(
              "string" == typeof e
                ? e.startsWith("0x") && iU(e)
                  ? sC(e)
                  : ru(e)
                : e,
            );
          return r === aw ? void 0 : r;
        },
        ak = (e) => {
          let t = aE(e);
          return sf(t) ? aw : t;
        },
        aI = (e) => {
          let t, r;
          if (Array.isArray(e))
            throw Error("Autodetection of array types is not supported.");
          if (
            "object" == typeof e &&
            ("t" in e || "type" in e) &&
            ("v" in e || "value" in e)
          )
            ((t = "t" in e ? e.t : e.type),
              (r = "v" in e ? e.v : e.value),
              (t = "bigint" === t.toLowerCase() ? "int" : t));
          else {
            if ("bigint" == typeof e) return ["int", e];
            ((t = sV(e, !0)),
              (r = sV(e)),
              t.startsWith("int") || t.startsWith("uint") || (t = "bytes"));
          }
          return (
            (t.startsWith("int") || t.startsWith("uint")) &&
              "string" == typeof r &&
              !/^(-)?0x/i.test(r) &&
              (r = sJ(r)),
            [t, r]
          );
        },
        a_ = (e) =>
          e.startsWith("int[")
            ? `int256${e.slice(3)}`
            : "int" === e
              ? "int256"
              : e.startsWith("uint[")
                ? `uint256'${e.slice(4)}`
                : "uint" === e
                  ? "uint256"
                  : e,
        aS = (e, t) => {
          let r = /^(\d+).*$/.exec(e.slice(t));
          return r ? parseInt(r[1], 10) : 0;
        },
        aT = (e) => e.toString(2).length,
        aP = (e, t) => {
          let r = t.toString();
          if ("string" === e) {
            if ("string" == typeof t) return sF(t);
            throw new tm(t);
          }
          if ("bool" === e || "boolean" === e) {
            if ("boolean" == typeof t) return t ? "01" : "00";
            throw new tA(t);
          }
          if ("address" === e) {
            if (!sr(r)) throw new tp(r);
            return r;
          }
          let n = a_(e);
          if (e.startsWith("uint")) {
            let e = aS(n, 4);
            if (e % 8 || e < 8 || e > 256) throw new tx(r);
            let t = sK(r);
            if (aT(t) > e) throw new tE(r);
            if (t < BigInt(0)) throw new tw(r);
            return e ? ad(t.toString(16), (e / 8) * 2) : t.toString(16);
          }
          if (e.startsWith("int")) {
            let t = aS(n, 3);
            if (t % 8 || t < 8 || t > 256) throw new tx(e);
            let i = sK(r);
            if (aT(i) > t) throw new tE(r);
            return i < BigInt(0)
              ? ah(i.toString(), (t / 8) * 2)
              : t
                ? ad(i.toString(16), t / 4)
                : i.toString(16);
          }
          if ("bytes" === n) {
            if (r.replace(/^0x/i, "").length % 2 != 0) throw new th(r);
            return r;
          }
          if (e.startsWith("bytes")) {
            if (r.replace(/^0x/i, "").length % 2 != 0) throw new th(r);
            let t = aS(e, 5);
            if (!t || t < 1 || t > 64 || t < r.replace(/^0x/i, "").length / 2)
              throw new th(r);
            return al(r, 2 * t);
          }
          return "";
        },
        aC = (e) => {
          let [t, r] = aI(e);
          return Array.isArray(r)
            ? r.map((e) => aP(t, e).replace("0x", "")).join("")
            : aP(t, r).replace("0x", "");
        },
        aB = (...e) => {
          let t = e.map(aC);
          return `0x${t.join("").toLowerCase()}`;
        },
        aO = (...e) => aE(aB(...e)),
        aN = (...e) => ak(aB(...e)),
        aR = (e) =>
          aE(
            `0x${("number" == typeof e ? e.toString() : e).padStart(64, "0")}`,
          ),
        aM = (e) => rm(e),
        aF = (e) => sP(aM(e));
      var aL = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      function aD(e) {
        return (
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      function aj(e, t, r) {
        return aL(this, void 0, void 0, function* () {
          let n,
            i = yield Promise.race([
              e instanceof Promise ? e : e(),
              new Promise((e, i) => {
                n = setTimeout(() => (r ? i(r) : e(void 0)), t);
              }),
            ]);
          if ((n && clearTimeout(n), i instanceof Error)) throw i;
          return i;
        });
      }
      function aH(e, t) {
        let r;
        return [
          new Promise((n, i) => {
            r = setInterval(
              (function s() {
                return (
                  aL(this, void 0, void 0, function* () {
                    try {
                      let i = yield aj(e, t);
                      sf(i) || (clearInterval(r), n(i));
                    } catch (e) {
                      (clearInterval(r), i(e));
                    }
                  }),
                  s
                );
              })(),
              t,
            );
          }),
          r,
        ];
      }
      function aG(e, t) {
        return aL(this, void 0, void 0, function* () {
          return aH(e, t)[0];
        });
      }
      function aU(e, t) {
        let r,
          n = new Promise((n, i) => {
            r = setTimeout(() => {
              i(t);
            }, e);
          });
        return [r, n];
      }
      function aq(e, t) {
        let r,
          n = new Promise((n, i) => {
            r = setInterval(() => {
              aL(this, void 0, void 0, function* () {
                let t = yield e();
                t && (clearInterval(r), i(t));
              });
            }, t);
          });
        return [r, n];
      }
      let aQ = () => {
          let e = aM(16);
          ((e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128));
          let t = sP(e);
          return [
            t.substring(2, 10),
            t.substring(10, 14),
            t.substring(14, 18),
            t.substring(18, 22),
            t.substring(22, 34),
          ].join("-");
        },
        aZ = (e) => {
          let t = e.error.code;
          return tV.has(t) || (t >= -32099 && t <= -32e3);
        },
        az = (e) =>
          !Array.isArray(e) &&
          !!e &&
          "2.0" === e.jsonrpc &&
          "result" in e &&
          sf(e.error) &&
          ("number" == typeof e.id || "string" == typeof e.id),
        aV = (e) =>
          !Array.isArray(e) &&
          "2.0" === e.jsonrpc &&
          !!e &&
          sf(e.result) &&
          "error" in e &&
          ("number" == typeof e.id || "string" == typeof e.id),
        aK = (e) =>
          !Array.isArray(e) &&
          !!e &&
          "2.0" === e.jsonrpc &&
          !sf(e.params) &&
          !sf(e.method),
        aJ = (e) =>
          !Array.isArray(e) &&
          !!e &&
          "2.0" === e.jsonrpc &&
          "id" in e &&
          "result" in e,
        aW = (e) => az(e) || aV(e),
        a$ = (e) => (Array.isArray(e) ? e.every(aW) : aW(e)),
        aY = (e) => Array.isArray(e) && e.length > 0 && a$(e),
        aX = (e) => {
          i = e;
        },
        a0 = (e) => {
          var t, r, n, s;
          return (
            void 0 !== i && (i += 1),
            {
              jsonrpc: null != (t = e.jsonrpc) ? t : "2.0",
              id: null != (n = null != (r = e.id) ? r : i) ? n : aQ(),
              method: e.method,
              params: null != (s = e.params) ? s : void 0,
            }
          );
        },
        a1 = (e) => e.map((e) => a0(e)),
        a2 = (e) => Array.isArray(e) && e.length > 0;
      var a3 = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class a6 {
        constructor(
          { timeout: e, eagerStart: t, timeoutMessage: r } = {
            timeout: 0,
            eagerStart: !1,
            timeoutMessage: "DeferredPromise timed out",
          },
        ) {
          ((this[P] = "Promise"),
            (this._state = "pending"),
            (this._promise = new Promise((e, t) => {
              ((this._resolve = e), (this._reject = t));
            })),
            (this._timeoutMessage = r),
            (this._timeoutInterval = e),
            t && this.startTimer());
        }
        get state() {
          return this._state;
        }
        then(e, t) {
          return a3(this, void 0, void 0, function* () {
            return this._promise.then(e, t);
          });
        }
        catch(e) {
          return a3(this, void 0, void 0, function* () {
            return this._promise.catch(e);
          });
        }
        finally(e) {
          return a3(this, void 0, void 0, function* () {
            return this._promise.finally(e);
          });
        }
        resolve(e) {
          (this._resolve(e), (this._state = "fulfilled"), this._clearTimeout());
        }
        reject(e) {
          (this._reject(e), (this._state = "rejected"), this._clearTimeout());
        }
        startTimer() {
          this._timeoutInterval &&
            this._timeoutInterval > 0 &&
            (this._timeoutId = setTimeout(
              this._checkTimeout.bind(this),
              this._timeoutInterval,
            ));
        }
        _checkTimeout() {
          "pending" === this._state &&
            this._timeoutId &&
            this.reject(new eP(this._timeoutMessage));
        }
        _clearTimeout() {
          this._timeoutId && clearTimeout(this._timeoutId);
        }
      }
      P = Symbol.toStringTag;
      class a5 {
        constructor(e, t) {
          ((this.eventEmitter = e),
            (this.autoReconnect = t),
            (this.chunkTimeout = 15e3));
        }
        clearQueues() {
          "function" == typeof this._clearQueues && this._clearQueues();
        }
        onError(e) {
          this._clearQueues = e;
        }
        parseResponse(e) {
          let t = [];
          return (
            e
              .replace(/\}[\n\r]?\{/g, "}|--|{")
              .replace(/\}\][\n\r]?\[\{/g, "}]|--|[{")
              .replace(/\}[\n\r]?\[\{/g, "}|--|[{")
              .replace(/\}\][\n\r]?\{/g, "}]|--|{")
              .split("|--|")
              .forEach((e) => {
                let r,
                  n = e;
                this.lastChunk && (n = this.lastChunk + n);
                try {
                  r = JSON.parse(n);
                } catch (e) {
                  ((this.lastChunk = n),
                    this.lastChunkTimeout &&
                      clearTimeout(this.lastChunkTimeout),
                    (this.lastChunkTimeout = setTimeout(() => {
                      this.autoReconnect ||
                        (this.clearQueues(),
                        this.eventEmitter.emit(
                          "error",
                          new tT({
                            id: 1,
                            jsonrpc: "2.0",
                            error: { code: 2, message: "Chunk timeout" },
                          }),
                        ));
                    }, this.chunkTimeout)));
                  return;
                }
                (clearTimeout(this.lastChunkTimeout),
                  (this.lastChunk = void 0),
                  r && t.push(r));
              }),
            t
          );
        }
      }
      var a4 = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class a8 extends ee {
        constructor() {
          (super(...arguments),
            (this._eventEmitter = new s0()),
            (this._chainId = ""),
            (this._accounts = []));
        }
        _getChainId() {
          return a4(this, void 0, void 0, function* () {
            var e;
            let t = yield this.request(
              a0({ method: "eth_chainId", params: [] }),
            );
            return null != (e = null == t ? void 0 : t.result) ? e : "";
          });
        }
        _getAccounts() {
          return a4(this, void 0, void 0, function* () {
            var e;
            let t = yield this.request(
              a0({ method: "eth_accounts", params: [] }),
            );
            return null != (e = null == t ? void 0 : t.result) ? e : [];
          });
        }
        _onConnect() {
          Promise.all([
            this._getChainId()
              .then((e) => {
                e !== this._chainId &&
                  ((this._chainId = e),
                  this._eventEmitter.emit("chainChanged", this._chainId));
              })
              .catch((e) => {
                console.error(e);
              }),
            this._getAccounts()
              .then((e) => {
                (this._accounts.length === e.length &&
                  e.every((t) => e.includes(t))) ||
                  ((this._accounts = e), this._onAccountsChanged());
              })
              .catch((e) => {
                console.error(e);
              }),
          ])
            .then(() =>
              this._eventEmitter.emit("connect", { chainId: this._chainId }),
            )
            .catch((e) => {
              console.error(e);
            });
        }
        _onDisconnect(e, t) {
          this._eventEmitter.emit("disconnect", new tR(e, t));
        }
        _onAccountsChanged() {
          this._eventEmitter.emit("accountsChanged", this._accounts);
        }
      }
      var a9 = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let a7 = { autoReconnect: !0, delay: 5e3, maxAttempts: 5 };
      class oe extends a8 {
        get SocketConnection() {
          return this._socketConnection;
        }
        constructor(e, t, r) {
          if (
            (super(),
            (this._connectionStatus = "connecting"),
            (this._onMessageHandler = this._onMessage.bind(this)),
            (this._onOpenHandler = this._onConnect.bind(this)),
            (this._onCloseHandler = this._onCloseEvent.bind(this)),
            (this._onErrorHandler = this._onError.bind(this)),
            !this._validateProviderPath(e))
          )
            throw new eR(e);
          ((this._socketPath = e),
            (this._socketOptions = t),
            (this._reconnectOptions = Object.assign(
              Object.assign({}, a7),
              null != r ? r : {},
            )),
            (this._pendingRequestsQueue = new Map()),
            (this._sentRequestsQueue = new Map()),
            this._init(),
            this.connect(),
            (this.chunkResponseParser = new a5(
              this._eventEmitter,
              this._reconnectOptions.autoReconnect,
            )),
            this.chunkResponseParser.onError(() => {
              this._clearQueues();
            }),
            (this.isReconnecting = !1));
        }
        _init() {
          this._reconnectAttempts = 0;
        }
        connect() {
          try {
            (this._openSocketConnection(),
              (this._connectionStatus = "connecting"),
              this._addSocketListeners());
          } catch (e) {
            if (this.isReconnecting)
              setImmediate(() => {
                this._reconnect();
              });
            else {
              if (((this._connectionStatus = "disconnected"), e && e.message))
                throw new ep(
                  `Error while connecting to ${this._socketPath}. Reason: ${e.message}`,
                );
              throw new eR(this._socketPath);
            }
          }
        }
        _validateProviderPath(e) {
          return !!e;
        }
        getPendingRequestQueueSize() {
          return this._pendingRequestsQueue.size;
        }
        getSentRequestsQueueSize() {
          return this._sentRequestsQueue.size;
        }
        supportsSubscriptions() {
          return !0;
        }
        on(e, t) {
          this._eventEmitter.on(e, t);
        }
        once(e, t) {
          this._eventEmitter.once(e, t);
        }
        removeListener(e, t) {
          this._eventEmitter.removeListener(e, t);
        }
        _onDisconnect(e, t) {
          ((this._connectionStatus = "disconnected"),
            super._onDisconnect(e, t));
        }
        disconnect(e, t) {
          let r = null != e ? e : 1e3;
          (this._removeSocketListeners(),
            "disconnected" !== this.getStatus() &&
              this._closeSocketConnection(r, t),
            this._onDisconnect(r, t));
        }
        safeDisconnect(e, t) {
          return a9(this, arguments, void 0, function* (e, t, r = !1, n = 1e3) {
            let i = 0;
            (yield a9(this, void 0, void 0, function* () {
              return new Promise((e) => {
                let t = setInterval(() => {
                  (r && i >= 5 && this.clearQueues(),
                    0 === this.getPendingRequestQueueSize() &&
                      0 === this.getSentRequestsQueueSize() &&
                      (clearInterval(t), e(!0)),
                    (i += 1));
                }, n);
              });
            }),
              this.disconnect(e, t));
          });
        }
        removeAllListeners(e) {
          this._eventEmitter.removeAllListeners(e);
        }
        _onError(e) {
          this.isReconnecting
            ? this._reconnect()
            : this._eventEmitter.emit("error", e);
        }
        reset() {
          (this._sentRequestsQueue.clear(),
            this._pendingRequestsQueue.clear(),
            this._init(),
            this._removeSocketListeners(),
            this._addSocketListeners());
        }
        _reconnect() {
          this.isReconnecting ||
            ((this.isReconnecting = !0),
            this._sentRequestsQueue.size > 0 &&
              this._sentRequestsQueue.forEach((e, t) => {
                (e.deferredPromise.reject(new ey()),
                  this._sentRequestsQueue.delete(t));
              }),
            this._reconnectAttempts < this._reconnectOptions.maxAttempts
              ? ((this._reconnectAttempts += 1),
                setTimeout(() => {
                  (this._removeSocketListeners(),
                    this.connect(),
                    (this.isReconnecting = !1));
                }, this._reconnectOptions.delay))
              : ((this.isReconnecting = !1),
                this._clearQueues(),
                this._removeSocketListeners(),
                this._eventEmitter.emit(
                  "error",
                  new eg(this._reconnectOptions.maxAttempts),
                )));
        }
        request(e) {
          return a9(this, void 0, void 0, function* () {
            if (as(this._socketConnection))
              throw Error("Connection is undefined");
            "disconnected" === this.getStatus() && this.connect();
            let t = a2(e) ? e[0].id : e.id;
            if (!t) throw new eF("Request Id not defined");
            if (this._sentRequestsQueue.has(t)) throw new ev(t);
            let r = new a6();
            r.catch((e) => {
              this._eventEmitter.emit("error", e);
            });
            let n = { payload: e, deferredPromise: r };
            if ("connecting" === this.getStatus())
              return (this._pendingRequestsQueue.set(t, n), n.deferredPromise);
            this._sentRequestsQueue.set(t, n);
            try {
              this._sendToSocket(n.payload);
            } catch (e) {
              (this._sentRequestsQueue.delete(t),
                this._eventEmitter.emit("error", e));
            }
            return r;
          });
        }
        _onConnect() {
          ((this._connectionStatus = "connected"),
            (this._reconnectAttempts = 0),
            super._onConnect(),
            this._sendPendingRequests());
        }
        _sendPendingRequests() {
          for (let [e, t] of this._pendingRequestsQueue.entries())
            try {
              (this._sendToSocket(t.payload),
                this._pendingRequestsQueue.delete(e),
                this._sentRequestsQueue.set(e, t));
            } catch (t) {
              (this._pendingRequestsQueue.delete(e),
                this._eventEmitter.emit("error", t));
            }
        }
        _onMessage(e) {
          let t = this._parseResponses(e);
          if (!as(t) && 0 !== t.length)
            for (let e of t) {
              if (aK(e) && e.method.endsWith("_subscription"))
                return void this._eventEmitter.emit("message", e);
              let t = aY(e) ? e[0].id : e.id,
                r = this._sentRequestsQueue.get(t);
              if (!r) return;
              ((aY(e) || az(e) || aV(e)) &&
                (this._eventEmitter.emit("message", e),
                r.deferredPromise.resolve(e)),
                this._sentRequestsQueue.delete(t));
            }
        }
        clearQueues(e) {
          this._clearQueues(e);
        }
        _clearQueues(e) {
          (this._pendingRequestsQueue.size > 0 &&
            this._pendingRequestsQueue.forEach((t, r) => {
              (t.deferredPromise.reject(new em(e)),
                this._pendingRequestsQueue.delete(r));
            }),
            this._sentRequestsQueue.size > 0 &&
              this._sentRequestsQueue.forEach((t, r) => {
                (t.deferredPromise.reject(new em(e)),
                  this._sentRequestsQueue.delete(r));
              }),
            this._removeSocketListeners());
        }
      }
      class ot {
        constructor() {
          this._emitter = new s2();
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, t) {
          this._emitter.emit(e, t);
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
        listeners(e) {
          return this._emitter.listeners(e);
        }
        eventNames() {
          return this._emitter.eventNames();
        }
        removeAllListeners() {
          return this._emitter.removeAllListeners();
        }
        setMaxListenerWarningThreshold(e) {
          this._emitter.setMaxListeners(e);
        }
        getMaxListeners() {
          return this._emitter.getMaxListeners();
        }
      }
      (C || (C = {})).CONFIG_CHANGE = "CONFIG_CHANGE";
      class or extends ot {
        constructor(e) {
          (super(),
            (this.config = {
              handleRevert: !1,
              defaultAccount: void 0,
              defaultBlock: "latest",
              transactionBlockTimeout: 50,
              transactionConfirmationBlocks: 24,
              transactionPollingInterval: 1e3,
              transactionPollingTimeout: 75e4,
              transactionReceiptPollingInterval: void 0,
              transactionSendTimeout: 75e4,
              transactionConfirmationPollingInterval: void 0,
              blockHeaderTimeout: 10,
              maxListenersWarningThreshold: 100,
              contractDataInputFill: "data",
              defaultNetworkId: void 0,
              defaultChain: "mainnet",
              defaultHardfork: "london",
              defaultCommon: void 0,
              defaultTransactionType: "0x2",
              defaultMaxPriorityFeePerGas: sV(25e8),
              enableExperimentalFeatures: {
                useSubscriptionWhenCheckingBlockTimeout: !1,
                useRpcCallSpecification: !1,
              },
              transactionBuilder: void 0,
              transactionTypeParser: void 0,
              customTransactionSchema: void 0,
              defaultReturnFormat: J,
              ignoreGasPricing: !1,
            }),
            this.setConfig(null != e ? e : {}));
        }
        setConfig(e) {
          for (let t of Object.keys(e))
            (this._triggerConfigChange(t, e[t]),
              as(e[t]) ||
                "number" != typeof e[t] ||
                "maxListenersWarningThreshold" !== t ||
                this.setMaxListenerWarningThreshold(Number(e[t])));
          Object.assign(this.config, e);
        }
        get handleRevert() {
          return this.config.handleRevert;
        }
        set handleRevert(e) {
          (this._triggerConfigChange("handleRevert", e),
            (this.config.handleRevert = e));
        }
        get contractDataInputFill() {
          return this.config.contractDataInputFill;
        }
        set contractDataInputFill(e) {
          (this._triggerConfigChange("contractDataInputFill", e),
            (this.config.contractDataInputFill = e));
        }
        get defaultAccount() {
          return this.config.defaultAccount;
        }
        set defaultAccount(e) {
          (this._triggerConfigChange("defaultAccount", e),
            (this.config.defaultAccount = e));
        }
        get defaultBlock() {
          return this.config.defaultBlock;
        }
        set defaultBlock(e) {
          (this._triggerConfigChange("defaultBlock", e),
            (this.config.defaultBlock = e));
        }
        get transactionSendTimeout() {
          return this.config.transactionSendTimeout;
        }
        set transactionSendTimeout(e) {
          (this._triggerConfigChange("transactionSendTimeout", e),
            (this.config.transactionSendTimeout = e));
        }
        get transactionBlockTimeout() {
          return this.config.transactionBlockTimeout;
        }
        set transactionBlockTimeout(e) {
          (this._triggerConfigChange("transactionBlockTimeout", e),
            (this.config.transactionBlockTimeout = e));
        }
        get transactionConfirmationBlocks() {
          return this.config.transactionConfirmationBlocks;
        }
        set transactionConfirmationBlocks(e) {
          (this._triggerConfigChange("transactionConfirmationBlocks", e),
            (this.config.transactionConfirmationBlocks = e));
        }
        get transactionPollingInterval() {
          return this.config.transactionPollingInterval;
        }
        set transactionPollingInterval(e) {
          (this._triggerConfigChange("transactionPollingInterval", e),
            (this.config.transactionPollingInterval = e),
            (this.transactionReceiptPollingInterval = e),
            (this.transactionConfirmationPollingInterval = e));
        }
        get transactionPollingTimeout() {
          return this.config.transactionPollingTimeout;
        }
        set transactionPollingTimeout(e) {
          (this._triggerConfigChange("transactionPollingTimeout", e),
            (this.config.transactionPollingTimeout = e));
        }
        get transactionReceiptPollingInterval() {
          return this.config.transactionReceiptPollingInterval;
        }
        set transactionReceiptPollingInterval(e) {
          (this._triggerConfigChange("transactionReceiptPollingInterval", e),
            (this.config.transactionReceiptPollingInterval = e));
        }
        get transactionConfirmationPollingInterval() {
          return this.config.transactionConfirmationPollingInterval;
        }
        set transactionConfirmationPollingInterval(e) {
          (this._triggerConfigChange(
            "transactionConfirmationPollingInterval",
            e,
          ),
            (this.config.transactionConfirmationPollingInterval = e));
        }
        get blockHeaderTimeout() {
          return this.config.blockHeaderTimeout;
        }
        set blockHeaderTimeout(e) {
          (this._triggerConfigChange("blockHeaderTimeout", e),
            (this.config.blockHeaderTimeout = e));
        }
        get enableExperimentalFeatures() {
          return this.config.enableExperimentalFeatures;
        }
        set enableExperimentalFeatures(e) {
          (this._triggerConfigChange("enableExperimentalFeatures", e),
            (this.config.enableExperimentalFeatures = e));
        }
        get maxListenersWarningThreshold() {
          return this.config.maxListenersWarningThreshold;
        }
        set maxListenersWarningThreshold(e) {
          (this._triggerConfigChange("maxListenersWarningThreshold", e),
            this.setMaxListenerWarningThreshold(e),
            (this.config.maxListenersWarningThreshold = e));
        }
        get defaultReturnFormat() {
          return this.config.defaultReturnFormat;
        }
        set defaultReturnFormat(e) {
          (this._triggerConfigChange("defaultReturnFormat", e),
            (this.config.defaultReturnFormat = e));
        }
        get defaultNetworkId() {
          return this.config.defaultNetworkId;
        }
        set defaultNetworkId(e) {
          (this._triggerConfigChange("defaultNetworkId", e),
            (this.config.defaultNetworkId = e));
        }
        get defaultChain() {
          return this.config.defaultChain;
        }
        set defaultChain(e) {
          if (
            !as(this.config.defaultCommon) &&
            !as(this.config.defaultCommon.baseChain) &&
            e !== this.config.defaultCommon.baseChain
          )
            throw new tC(this.config.defaultChain, e);
          (this._triggerConfigChange("defaultChain", e),
            (this.config.defaultChain = e));
        }
        get defaultHardfork() {
          return this.config.defaultHardfork;
        }
        set defaultHardfork(e) {
          if (
            !as(this.config.defaultCommon) &&
            !as(this.config.defaultCommon.hardfork) &&
            e !== this.config.defaultCommon.hardfork
          )
            throw new tP(this.config.defaultCommon.hardfork, e);
          (this._triggerConfigChange("defaultHardfork", e),
            (this.config.defaultHardfork = e));
        }
        get defaultCommon() {
          return this.config.defaultCommon;
        }
        set defaultCommon(e) {
          if (
            !as(this.config.defaultHardfork) &&
            !as(e) &&
            !as(e.hardfork) &&
            this.config.defaultHardfork !== e.hardfork
          )
            throw new tP(this.config.defaultHardfork, e.hardfork);
          if (
            !as(this.config.defaultChain) &&
            !as(e) &&
            !as(e.baseChain) &&
            this.config.defaultChain !== e.baseChain
          )
            throw new tC(this.config.defaultChain, e.baseChain);
          (this._triggerConfigChange("defaultCommon", e),
            (this.config.defaultCommon = e));
        }
        get ignoreGasPricing() {
          return this.config.ignoreGasPricing;
        }
        set ignoreGasPricing(e) {
          (this._triggerConfigChange("ignoreGasPricing", e),
            (this.config.ignoreGasPricing = e));
        }
        get defaultTransactionType() {
          return this.config.defaultTransactionType;
        }
        set defaultTransactionType(e) {
          (this._triggerConfigChange("defaultTransactionType", e),
            (this.config.defaultTransactionType = e));
        }
        get defaultMaxPriorityFeePerGas() {
          return this.config.defaultMaxPriorityFeePerGas;
        }
        set defaultMaxPriorityFeePerGas(e) {
          (this._triggerConfigChange("defaultMaxPriorityFeePerGas", e),
            (this.config.defaultMaxPriorityFeePerGas = e));
        }
        get transactionBuilder() {
          return this.config.transactionBuilder;
        }
        set transactionBuilder(e) {
          (this._triggerConfigChange("transactionBuilder", e),
            (this.config.transactionBuilder = e));
        }
        get transactionTypeParser() {
          return this.config.transactionTypeParser;
        }
        set transactionTypeParser(e) {
          (this._triggerConfigChange("transactionTypeParser", e),
            (this.config.transactionTypeParser = e));
        }
        get customTransactionSchema() {
          return this.config.customTransactionSchema;
        }
        set customTransactionSchema(e) {
          (this._triggerConfigChange("customTransactionSchema", e),
            (this.config.customTransactionSchema = e));
        }
        _triggerConfigChange(e, t) {
          this.emit(C.CONFIG_CHANGE, {
            name: e,
            oldValue: this.config[e],
            newValue: t,
          });
        }
      }
      var on = r(876);
      class oi extends ee {
        constructor(e, t) {
          if ((super(), !oi.validateClientUrl(e))) throw new eR(e);
          ((this.clientUrl = e), (this.httpProviderOptions = t));
        }
        static validateClientUrl(e) {
          return "string" == typeof e && /^http(s)?:\/\//i.test(e);
        }
        getStatus() {
          throw new eT();
        }
        supportsSubscriptions() {
          return !1;
        }
        request(e, t) {
          var r, n, i, s, a;
          return (
            (n = this),
            (i = void 0),
            (s = void 0),
            (a = function* () {
              let n = Object.assign(
                  Object.assign(
                    {},
                    null == (r = this.httpProviderOptions)
                      ? void 0
                      : r.providerOptions,
                  ),
                  t,
                ),
                i = yield on(
                  this.clientUrl,
                  Object.assign(Object.assign({}, n), {
                    method: "POST",
                    headers: Object.assign(Object.assign({}, n.headers), {
                      "Content-Type": "application/json",
                    }),
                    body: JSON.stringify(e),
                  }),
                );
              if (!i.ok) throw new tS(yield i.json(), void 0, void 0, i.status);
              return yield i.json();
            }),
            new (s || (s = Promise))(function (e, t) {
              function r(e) {
                try {
                  u(a.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(e) {
                try {
                  u(a.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function u(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value) instanceof s
                      ? n
                      : new s(function (e) {
                          e(n);
                        })
                    ).then(r, o);
              }
              u((a = a.apply(n, i || [])).next());
            })
          );
        }
        on() {
          throw new eT();
        }
        removeListener() {
          throw new eT();
        }
        once() {
          throw new eT();
        }
        removeAllListeners() {
          throw new eT();
        }
        connect() {
          throw new eT();
        }
        disconnect() {
          throw new eT();
        }
        reset() {
          throw new eT();
        }
        reconnect() {
          throw new eT();
        }
      }
      var os = null;
      "undefined" != typeof WebSocket
        ? (os = WebSocket)
        : "undefined" != typeof MozWebSocket
          ? (os = MozWebSocket)
          : void 0 !== r.g
            ? (os = r.g.WebSocket || r.g.MozWebSocket)
            : "undefined" != typeof window
              ? (os = window.WebSocket || window.MozWebSocket)
              : "undefined" != typeof self &&
                (os = self.WebSocket || self.MozWebSocket);
      let oa = os;
      class oo extends oe {
        constructor(e, t, r) {
          super(e, t, r);
        }
        _validateProviderPath(e) {
          return "string" == typeof e && /^ws(s)?:\/\//i.test(e);
        }
        getStatus() {
          if (this._socketConnection && !as(this._socketConnection))
            switch (this._socketConnection.readyState) {
              case this._socketConnection.CONNECTING:
                return "connecting";
              case this._socketConnection.OPEN:
                return "connected";
            }
          return "disconnected";
        }
        _openSocketConnection() {
          this._socketConnection = new oa(
            this._socketPath,
            void 0,
            this._socketOptions && 0 === Object.keys(this._socketOptions).length
              ? void 0
              : this._socketOptions,
          );
        }
        _closeSocketConnection(e, t) {
          var r;
          null == (r = this._socketConnection) || r.close(e, t);
        }
        _sendToSocket(e) {
          var t;
          if ("disconnected" === this.getStatus()) throw new em();
          null == (t = this._socketConnection) || t.send(JSON.stringify(e));
        }
        _parseResponses(e) {
          return this.chunkResponseParser.parseResponse(e.data);
        }
        _addSocketListeners() {
          var e, t, r, n;
          (null == (e = this._socketConnection) ||
            e.addEventListener("open", this._onOpenHandler),
            null == (t = this._socketConnection) ||
              t.addEventListener("message", this._onMessageHandler),
            null == (r = this._socketConnection) ||
              r.addEventListener("close", (e) => this._onCloseHandler(e)),
            null == (n = this._socketConnection) ||
              n.addEventListener("error", this._onErrorHandler));
        }
        _removeSocketListeners() {
          var e, t, r;
          (null == (e = this._socketConnection) ||
            e.removeEventListener("message", this._onMessageHandler),
            null == (t = this._socketConnection) ||
              t.removeEventListener("open", this._onOpenHandler),
            null == (r = this._socketConnection) ||
              r.removeEventListener("close", this._onCloseHandler));
        }
        _onCloseEvent(e) {
          var t;
          if (
            this._reconnectOptions.autoReconnect &&
            (![1e3, 1001].includes(e.code) || !e.wasClean)
          )
            return void this._reconnect();
          (this._clearQueues(e),
            this._removeSocketListeners(),
            this._onDisconnect(e.code, e.reason),
            null == (t = this._socketConnection) ||
              t.removeEventListener("error", this._onErrorHandler));
        }
      }
      let ou = (e) => ee.isWeb3Provider(e),
        oc = (e) =>
          "string" != typeof e &&
          "request" in e &&
          "Function" === e.request.constructor.name,
        ol = (e) =>
          "string" != typeof e &&
          "request" in e &&
          "AsyncFunction" === e.request.constructor.name,
        od = (e) => "string" != typeof e && "send" in e,
        oh = (e) => "string" != typeof e && "sendAsync" in e,
        of = (e) => e && (ou(e) || ol(e) || oc(e) || oh(e) || od(e)),
        op = (e) =>
          e && "supportsSubscriptions" in e
            ? e.supportsSubscriptions()
            : !!e && "string" != typeof e && "on" in e;
      var om = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      !(function (e) {
        ((e.PROVIDER_CHANGED = "PROVIDER_CHANGED"),
          (e.BEFORE_PROVIDER_CHANGE = "BEFORE_PROVIDER_CHANGE"));
      })(B || (B = {}));
      let og = { HttpProvider: oi, WebsocketProvider: oo };
      class oy extends ot {
        constructor(e, t, r) {
          (super(),
            as(e) || this.setProvider(e),
            (this.useRpcCallSpecification = t),
            as(r) || (this.middleware = r));
        }
        static get providers() {
          return og;
        }
        get provider() {
          return this._provider;
        }
        get providers() {
          return og;
        }
        setProvider(e) {
          let t;
          if (e && "string" == typeof e && this.providers)
            if (/^http(s)?:\/\//i.test(e))
              t = new this.providers.HttpProvider(e);
            else if (/^ws(s)?:\/\//i.test(e))
              t = new this.providers.WebsocketProvider(e);
            else throw new eN(`Can't autodetect provider for "${e}"`);
          else t = as(e) ? void 0 : e;
          return (
            this.emit(B.BEFORE_PROVIDER_CHANGE, this._provider),
            (this._provider = t),
            this.emit(B.PROVIDER_CHANGED, this._provider),
            !0
          );
        }
        setMiddleware(e) {
          this.middleware = e;
        }
        send(e) {
          return om(this, void 0, void 0, function* () {
            let t = Object.assign({}, e),
              r = yield this._sendRequest(t);
            if (
              (as(this.middleware) ||
                (r = yield this.middleware.processResponse(r)),
              az(r))
            )
              return r.result;
            throw new tS(r);
          });
        }
        sendBatch(e) {
          return om(this, void 0, void 0, function* () {
            return yield this._sendRequest(e);
          });
        }
        _sendRequest(e) {
          return om(this, void 0, void 0, function* () {
            let { provider: t } = this;
            if (as(t))
              throw new eN(
                "Provider not available. Use `.setProvider` or `.provider=` to initialize the provider.",
              );
            let r = a2(e) ? a1(e) : a0(e);
            if (
              (as(this.middleware) ||
                (r = yield this.middleware.processRequest(r)),
              ou(t))
            ) {
              let e;
              try {
                e = yield t.request(r);
              } catch (t) {
                e = t;
              }
              return this._processJsonRpcResponse(r, e, {
                legacy: !1,
                error: !1,
              });
            }
            if (ol(t))
              return t
                .request(r)
                .then((e) =>
                  this._processJsonRpcResponse(r, e, { legacy: !0, error: !1 }),
                )
                .catch((e) =>
                  this._processJsonRpcResponse(r, e, { legacy: !0, error: !0 }),
                );
            if (oc(t))
              return new Promise((e, n) => {
                let i = (e) => {
                    n(
                      this._processJsonRpcResponse(r, e, {
                        legacy: !0,
                        error: !0,
                      }),
                    );
                  },
                  s = (t) =>
                    e(
                      this._processJsonRpcResponse(r, t, {
                        legacy: !0,
                        error: !1,
                      }),
                    ),
                  a = t.request(r, (e, t) => (e ? i(e) : s(t)));
                aD(a) &&
                  a.then(s).catch((e) => {
                    try {
                      let t = this._processJsonRpcResponse(r, e, {
                        legacy: !0,
                        error: !0,
                      });
                      n(t);
                    } catch (e) {
                      n(e);
                    }
                  });
              });
            if (od(t))
              return new Promise((e, n) => {
                t.send(r, (t, i) => {
                  if (t)
                    return n(
                      this._processJsonRpcResponse(r, t, {
                        legacy: !0,
                        error: !0,
                      }),
                    );
                  if (as(i))
                    throw new tS({}, 'Got a "nullish" response from provider.');
                  return e(
                    this._processJsonRpcResponse(r, i, {
                      legacy: !0,
                      error: !1,
                    }),
                  );
                });
              });
            if (oh(t))
              return t
                .sendAsync(r)
                .then((e) =>
                  this._processJsonRpcResponse(r, e, { legacy: !0, error: !1 }),
                )
                .catch((e) =>
                  this._processJsonRpcResponse(r, e, { legacy: !0, error: !0 }),
                );
            throw new eN(
              "Provider does not have a request or send method to use.",
            );
          });
        }
        _processJsonRpcResponse(e, t, { legacy: r, error: n }) {
          if (as(t)) return this._buildResponse(e, null, n);
          if (aV(t)) {
            if (this.useRpcCallSpecification && aZ(t)) {
              if (tV.get(t.error.code))
                throw new (tV.get(t.error.code).error)(t);
              throw new tN(t);
            } else if (!oy._isReverted(t)) throw new tT(t, e);
          }
          if (az(t)) return t;
          if (t instanceof Error) throw (oy._isReverted(t), t);
          if ((!r && a2(e) && aY(t)) || (r && !n && a2(e))) return t;
          if (r && n && a2(e)) throw t;
          if (r && !aV(t) && !az(t)) return this._buildResponse(e, t, n);
          if (a2(e) && !Array.isArray(t))
            throw new tS(t, "Got normal response for a batch request.");
          if (!a2(e) && Array.isArray(t))
            throw new tS(t, "Got batch response for a normal request.");
          throw new tS(t, "Invalid response");
        }
        static _isReverted(e) {
          let t;
          if (
            (aV(e) ? (t = e.error) : e instanceof Error && (t = e),
            null == t ? void 0 : t.message.includes("revert"))
          )
            throw new ex(t);
          return !1;
        }
        _buildResponse(e, t, r) {
          let n = {
            jsonrpc: "2.0",
            id: a2(e) ? e[0].id : "id" in e ? e.id : null,
          };
          return r
            ? Object.assign(Object.assign({}, n), { error: t })
            : Object.assign(Object.assign({}, n), { result: t });
        }
      }
      var ov = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class ob {
        constructor(e, t, r = !1) {
          ((this.requestManager = e),
            (this.registeredSubscriptions = t),
            (this.tolerateUnlinkedSubscription = r),
            (this._subscriptions = new Map()),
            this.requestManager.on(B.BEFORE_PROVIDER_CHANGE, () =>
              ov(this, void 0, void 0, function* () {
                yield this.unsubscribe();
              }),
            ),
            this.requestManager.on(B.PROVIDER_CHANGED, () => {
              (this.clear(), this.listenToProviderEvents());
            }),
            this.listenToProviderEvents());
        }
        listenToProviderEvents() {
          let e = this.requestManager.provider;
          this.requestManager.provider &&
            ("function" !=
              typeof (null == e ? void 0 : e.supportsSubscriptions) ||
              (null == e ? void 0 : e.supportsSubscriptions())) &&
            "function" == typeof this.requestManager.provider.on &&
            ("function" == typeof this.requestManager.provider.request
              ? this.requestManager.provider.on("message", (e) =>
                  this.messageListener(e),
                )
              : e.on("data", (e) => this.messageListener(e)));
        }
        messageListener(e) {
          var t, r, n;
          if (!e)
            throw new eM(
              "Should not call messageListener with no data. Type was",
            );
          let i =
            (null == (t = e.params) ? void 0 : t.subscription) ||
            (null == (r = e.data) ? void 0 : r.subscription) ||
            (null == (n = e.id) ? void 0 : n.toString(16));
          if (i) {
            let t = this._subscriptions.get(i);
            null == t || t.processSubscriptionData(e);
          }
        }
        subscribe(e, t) {
          return ov(this, arguments, void 0, function* (e, t, r = J) {
            let n = this.registeredSubscriptions[e];
            if (!n) throw new eM("Invalid subscription type");
            let i = new n(null != t ? t : void 0, {
              subscriptionManager: this,
              returnFormat: r,
            });
            return (yield this.addSubscription(i), i);
          });
        }
        get subscriptions() {
          return this._subscriptions;
        }
        addSubscription(e) {
          return ov(this, void 0, void 0, function* () {
            if (!this.requestManager.provider)
              throw new eN("Provider not available");
            if (!this.supportsSubscriptions())
              throw new eM(
                "The current provider does not support subscriptions",
              );
            if (e.id && this._subscriptions.has(e.id))
              throw new eM(`Subscription with id "${e.id}" already exists`);
            if ((yield e.sendSubscriptionRequest(), as(e.id)))
              throw new eM("Subscription is not subscribed yet.");
            return (this._subscriptions.set(e.id, e), e.id);
          });
        }
        removeSubscription(e) {
          return ov(this, void 0, void 0, function* () {
            let { id: t } = e;
            if (as(t))
              throw new eM(
                "Subscription is not subscribed yet. Or, had already been unsubscribed but not through the Subscription Manager.",
              );
            if (
              !this._subscriptions.has(t) &&
              !this.tolerateUnlinkedSubscription
            )
              throw new eM(
                `Subscription with id "${t.toString()}" does not exists`,
              );
            return (
              yield e.sendUnsubscribeRequest(),
              this._subscriptions.delete(t),
              t
            );
          });
        }
        unsubscribe(e) {
          return ov(this, void 0, void 0, function* () {
            let t = [];
            for (let [r, n] of this.subscriptions.entries())
              (!e || ("function" == typeof e && e({ id: r, sub: n }))) &&
                t.push(this.removeSubscription(n));
            return Promise.all(t);
          });
        }
        clear() {
          this._subscriptions.clear();
        }
        supportsSubscriptions() {
          return (
            !as(this.requestManager.provider) &&
            op(this.requestManager.provider)
          );
        }
      }
      var oA = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class ow extends ot {
        constructor(e, t) {
          var r;
          (super(), (this.args = e));
          let { requestManager: n } = t,
            { subscriptionManager: i } = t;
          (n
            ? (this._subscriptionManager = new ob(n, {}, !0))
            : (this._subscriptionManager = i),
            (this._returnFormat =
              null != (r = null == t ? void 0 : t.returnFormat) ? r : J));
        }
        get id() {
          return this._id;
        }
        get lastBlock() {
          return this._lastBlock;
        }
        subscribe() {
          return oA(this, void 0, void 0, function* () {
            return this._subscriptionManager.addSubscription(this);
          });
        }
        processSubscriptionData(e) {
          var t, r;
          (null == e ? void 0 : e.data)
            ? this._processSubscriptionResult(
                null !=
                  (r =
                    null == (t = null == e ? void 0 : e.data)
                      ? void 0
                      : t.result)
                  ? r
                  : null == e
                    ? void 0
                    : e.data,
              )
            : e &&
              aK(e) &&
              this._processSubscriptionResult(
                null == e ? void 0 : e.params.result,
              );
        }
        sendSubscriptionRequest() {
          return oA(this, void 0, void 0, function* () {
            return (
              (this._id = yield this._subscriptionManager.requestManager.send({
                method: "eth_subscribe",
                params: this._buildSubscriptionParams(),
              })),
              this.emit("connected", this._id),
              this._id
            );
          });
        }
        get returnFormat() {
          return this._returnFormat;
        }
        get subscriptionManager() {
          return this._subscriptionManager;
        }
        resubscribe() {
          return oA(this, void 0, void 0, function* () {
            (yield this.unsubscribe(), yield this.subscribe());
          });
        }
        unsubscribe() {
          return oA(this, void 0, void 0, function* () {
            this.id &&
              (yield this._subscriptionManager.removeSubscription(this));
          });
        }
        sendUnsubscribeRequest() {
          return oA(this, void 0, void 0, function* () {
            (yield this._subscriptionManager.requestManager.send({
              method: "eth_unsubscribe",
              params: [this.id],
            }),
              (this._id = void 0));
          });
        }
        formatSubscriptionResult(e) {
          return e;
        }
        _processSubscriptionResult(e) {
          this.emit("data", this.formatSubscriptionResult(e));
        }
        _processSubscriptionError(e) {
          this.emit("error", e);
        }
        _buildSubscriptionParams() {
          throw Error("Implement in the child class");
        }
      }
      var ox = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class oE extends et {
        constructor() {
          (super(...arguments),
            (this._addressMap = new Map()),
            (this._defaultKeyName = "web3js_wallet"));
        }
        static getStorage() {
          let e;
          try {
            e = window.localStorage;
            let t = "__storage_test__";
            return (e.setItem(t, t), e.removeItem(t), e);
          } catch (t) {
            return t &&
              (22 === t.code ||
                1014 === t.code ||
                "QuotaExceededError" === t.name ||
                "NS_ERROR_DOM_QUOTA_REACHED" === t.name) &&
              !sf(e) &&
              0 !== e.length
              ? e
              : void 0;
          }
        }
        create(e) {
          for (let t = 0; t < e; t += 1)
            this.add(this._accountProvider.create());
          return this;
        }
        add(e) {
          var t;
          if ("string" == typeof e)
            return this.add(this._accountProvider.privateKeyToAccount(e));
          let r = this.length;
          return (
            this.get(e.address) &&
              (console.warn(
                `Account ${e.address.toLowerCase()} already exists.`,
              ),
              (r =
                null != (t = this._addressMap.get(e.address.toLowerCase()))
                  ? t
                  : r)),
            this._addressMap.set(e.address.toLowerCase(), r),
            (this[r] = e),
            this
          );
        }
        get(e) {
          if ("string" == typeof e) {
            let t = this._addressMap.get(e.toLowerCase());
            return sf(t) ? void 0 : this[t];
          }
          return this[e];
        }
        remove(e) {
          if ("string" == typeof e) {
            let t = this._addressMap.get(e.toLowerCase());
            return (
              !sf(t) &&
              (this._addressMap.delete(e.toLowerCase()), this.splice(t, 1), !0)
            );
          }
          return !!this[e] && (this.splice(e, 1), !0);
        }
        clear() {
          return (this._addressMap.clear(), (this.length = 0), this);
        }
        encrypt(e, t) {
          return ox(this, void 0, void 0, function* () {
            return Promise.all(
              this.map((r) =>
                ox(this, void 0, void 0, function* () {
                  return r.encrypt(e, t);
                }),
              ),
            );
          });
        }
        decrypt(e, t, r) {
          return ox(this, void 0, void 0, function* () {
            for (let n of yield Promise.all(
              e.map((e) =>
                ox(this, void 0, void 0, function* () {
                  return this._accountProvider.decrypt(e, t, r);
                }),
              ),
            ))
              this.add(n);
            return this;
          });
        }
        save(e, t) {
          return ox(this, void 0, void 0, function* () {
            let r = oE.getStorage();
            if (!r) throw Error("Local storage not available.");
            return (
              r.setItem(
                null != t ? t : this._defaultKeyName,
                JSON.stringify(yield this.encrypt(e)),
              ),
              !0
            );
          });
        }
        load(e, t) {
          return ox(this, void 0, void 0, function* () {
            let r = oE.getStorage();
            if (!r) throw Error("Local storage not available.");
            let n = r.getItem(null != t ? t : this._defaultKeyName);
            return (n && (yield this.decrypt(JSON.parse(n) || [], e)), this);
          });
        }
      }
      let ok = { web: t7 };
      function oI(e, t, r) {
        if (!r.startsWith("aes-"))
          throw Error(`AES submodule doesn't support mode ${r}`);
        if (16 !== t.length) throw Error("AES: wrong IV length");
        if (
          (r.startsWith("aes-128") && 16 !== e.length) ||
          (r.startsWith("aes-256") && 32 !== e.length)
        )
          throw Error("AES: wrong key length");
      }
      async function o_(e, t, r) {
        let n;
        if (!ok.web) throw Error("Browser crypto not available.");
        if (
          (["aes-128-cbc", "aes-256-cbc"].includes(e) && (n = "cbc"),
          ["aes-128-ctr", "aes-256-ctr"].includes(e) && (n = "ctr"),
          !n)
        )
          throw Error("AES: unsupported mode");
        return [
          await ok.web.subtle.importKey(
            "raw",
            t,
            { name: `AES-${n.toUpperCase()}`, length: 8 * t.length },
            !0,
            ["encrypt", "decrypt"],
          ),
          { name: `aes-${n}`, iv: r, counter: r, length: 128 },
        ];
      }
      async function oS(e, t, r, n = "aes-128-ctr", i = !0) {
        if ((oI(t, r, n), ok.web)) {
          let [s, a] = await o_(n, t, r),
            o = new Uint8Array(await ok.web.subtle.encrypt(a, s, e));
          return (
            i || "aes-cbc" !== a.name || e.length % 16 || (o = o.slice(0, -16)),
            o
          );
        }
        if (ok.node) {
          let s = ok.node.createCipheriv(n, t, r);
          return (s.setAutoPadding(i), rl(s.update(e), s.final()));
        }
        throw Error("The environment doesn't have AES module");
      }
      async function oT(e, t, r, n) {
        let i = e.slice(-16);
        for (let e = 0; e < 16; e++) i[e] ^= 16 ^ r[e];
        return (await oS(i, t, r, n)).slice(0, 16);
      }
      async function oP(e, t, r, n = "aes-128-ctr", i = !0) {
        if ((oI(t, r, n), ok.web)) {
          let [s, a] = await o_(n, t, r);
          if (!i && "aes-cbc" === a.name) {
            let i = await oT(e, t, r, n);
            e = rl(e, i);
          }
          let o = new Uint8Array(await ok.web.subtle.decrypt(a, s, e));
          if (
            "aes-cbc" === a.name &&
            !(function (e, t) {
              if (e.length !== t.length) return !1;
              for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
              return !0;
            })(await oS(o, t, r, n), e)
          )
            throw Error("AES: wrong padding");
          return o;
        }
        if (ok.node) {
          let s = ok.node.createDecipheriv(n, t, r);
          return (s.setAutoPadding(i), rl(s.update(e), s.final()));
        }
        throw Error("The environment doesn't have AES module");
      }
      class oC extends rd {
        constructor(e, t) {
          (super(), (this.finished = !1), (this.destroyed = !1), t$(e));
          let r = rc(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          (this.iHash.update(i), (this.oHash = e.create()));
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          (this.oHash.update(i), i.fill(0));
        }
        update(e) {
          return (tY(this), this.iHash.update(e), this);
        }
        digestInto(e) {
          (tY(this),
            tW(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy());
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return (this.digestInto(e), e);
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: a,
          } = this;
          return (
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = s),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      let oB = (e, t, r) => new oC(e, t).update(r).digest();
      function oO(e, t, r, n) {
        var i, s, a, o, u;
        let c,
          {
            c: l,
            dkLen: d,
            DK: h,
            PRF: f,
            PRFSalt: p,
          } = (function (e, t, r, n) {
            t$(e);
            let {
              c: i,
              dkLen: s,
              asyncTick: a,
            } = rf({ dkLen: 32, asyncTick: 10 }, n);
            if ((tJ(i), tJ(s), tJ(a), i < 1))
              throw Error("PBKDF2: iterations (c) should be >= 1");
            let o = rc(t),
              u = rc(r),
              c = new Uint8Array(s),
              l = oB.create(e, o),
              d = l._cloneInto().update(u);
            return { c: i, dkLen: s, asyncTick: a, DK: c, PRF: l, PRFSalt: d };
          })(e, t, r, n),
          m = new Uint8Array(4),
          g = rt(m),
          y = new Uint8Array(f.outputLen);
        for (let e = 1, t = 0; t < d; e++, t += f.outputLen) {
          let r = h.subarray(t, t + f.outputLen);
          (g.setInt32(0, e, !1),
            (c = p._cloneInto(c)).update(m).digestInto(y),
            r.set(y.subarray(0, r.length)));
          for (let e = 1; e < l; e++) {
            f._cloneInto(c).update(y).digestInto(y);
            for (let e = 0; e < r.length; e++) r[e] ^= y[e];
          }
        }
        return (
          (i = f),
          (s = p),
          (a = h),
          (o = c),
          (u = y),
          i.destroy(),
          s.destroy(),
          o && o.destroy(),
          u.fill(0),
          a
        );
      }
      oB.create = (e, t) => new oC(e, t);
      let oN = (e, t, r) => (e & t) ^ (~e & r),
        oR = (e, t, r) => (e & t) ^ (e & r) ^ (t & r);
      class oM extends rd {
        constructor(e, t, r, n) {
          (super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = rt(this.buffer)));
        }
        update(e) {
          tY(this);
          let { view: t, buffer: r, blockLen: n } = this,
            i = (e = rc(e)).length;
          for (let s = 0; s < i; ) {
            let a = Math.min(n - this.pos, i - s);
            if (a === n) {
              let t = rt(e);
              for (; n <= i - s; s += n) this.process(t, s);
              continue;
            }
            (r.set(e.subarray(s, s + a), this.pos),
              (this.pos += a),
              (s += a),
              this.pos === n && (this.process(t, 0), (this.pos = 0)));
          }
          return ((this.length += e.length), this.roundClean(), this);
        }
        digestInto(e) {
          (tY(this), tX(e, this), (this.finished = !0));
          let { buffer: t, view: r, blockLen: n, isLE: i } = this,
            { pos: s } = this;
          ((t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > n - s && (this.process(r, 0), (s = 0)));
          for (let e = s; e < n; e++) t[e] = 0;
          (!(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              s = BigInt(0xffffffff),
              a = Number((r >> i) & s),
              o = Number(r & s),
              u = 4 * !!n,
              c = 4 * !n;
            (e.setUint32(t + u, a, n), e.setUint32(t + c, o, n));
          })(r, n - 8, BigInt(8 * this.length), i),
            this.process(r, 0));
          let a = rt(e),
            o = this.outputLen;
          if (o % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = o / 4,
            c = this.get();
          if (u > c.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) a.setUint32(4 * e, c[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return (this.destroy(), r);
        }
        _cloneInto(e) {
          (e || (e = new this.constructor()), e.set(...this.get()));
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (e.length = n),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = s),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      let oF = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        oL = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        oD = new Uint32Array(64);
      class oj extends oM {
        constructor() {
          (super(64, 32, 8, !1),
            (this.A = 0 | oL[0]),
            (this.B = 0 | oL[1]),
            (this.C = 0 | oL[2]),
            (this.D = 0 | oL[3]),
            (this.E = 0 | oL[4]),
            (this.F = 0 | oL[5]),
            (this.G = 0 | oL[6]),
            (this.H = 0 | oL[7]));
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
          return [e, t, r, n, i, s, a, o];
        }
        set(e, t, r, n, i, s, a, o) {
          ((this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o));
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) oD[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = oD[e - 15],
              r = oD[e - 2],
              n = rr(t, 7) ^ rr(t, 18) ^ (t >>> 3),
              i = rr(r, 17) ^ rr(r, 19) ^ (r >>> 10);
            oD[e] = (i + oD[e - 7] + n + oD[e - 16]) | 0;
          }
          let { A: r, B: n, C: i, D: s, E: a, F: o, G: u, H: c } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (c +
                  (rr(a, 6) ^ rr(a, 11) ^ rr(a, 25)) +
                  oN(a, o, u) +
                  oF[e] +
                  oD[e]) |
                0,
              l = ((rr(r, 2) ^ rr(r, 13) ^ rr(r, 22)) + oR(r, n, i)) | 0;
            ((c = u),
              (u = o),
              (o = a),
              (a = (s + t) | 0),
              (s = i),
              (i = n),
              (n = r),
              (r = (t + l) | 0));
          }
          ((r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (s = (s + this.D) | 0),
            (a = (a + this.E) | 0),
            (o = (o + this.F) | 0),
            (u = (u + this.G) | 0),
            (c = (c + this.H) | 0),
            this.set(r, n, i, s, a, o, u, c));
        }
        roundClean() {
          oD.fill(0);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0));
        }
      }
      let oH = rp(() => new oj()),
        [oG, oU] = t9.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e)),
        ),
        oq = new Uint32Array(80),
        oQ = new Uint32Array(80);
      class oZ extends oM {
        constructor() {
          (super(128, 64, 16, !1),
            (this.Ah = 0x6a09e667),
            (this.Al = -0xc4336f8),
            (this.Bh = -0x4498517b),
            (this.Bl = -0x7b3558c5),
            (this.Ch = 0x3c6ef372),
            (this.Cl = -0x16b07d5),
            (this.Dh = -0x5ab00ac6),
            (this.Dl = 0x5f1d36f1),
            (this.Eh = 0x510e527f),
            (this.El = -0x52197d2f),
            (this.Fh = -0x64fa9774),
            (this.Fl = 0x2b3e6c1f),
            (this.Gh = 0x1f83d9ab),
            (this.Gl = -0x4be4295),
            (this.Hh = 0x5be0cd19),
            (this.Hl = 0x137e2179));
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: s,
            Dh: a,
            Dl: o,
            Eh: u,
            El: c,
            Fh: l,
            Fl: d,
            Gh: h,
            Gl: f,
            Hh: p,
            Hl: m,
          } = this;
          return [e, t, r, n, i, s, a, o, u, c, l, d, h, f, p, m];
        }
        set(e, t, r, n, i, s, a, o, u, c, l, d, h, f, p, m) {
          ((this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | a),
            (this.Dl = 0 | o),
            (this.Eh = 0 | u),
            (this.El = 0 | c),
            (this.Fh = 0 | l),
            (this.Fl = 0 | d),
            (this.Gh = 0 | h),
            (this.Gl = 0 | f),
            (this.Hh = 0 | p),
            (this.Hl = 0 | m));
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            ((oq[r] = e.getUint32(t)), (oQ[r] = e.getUint32((t += 4))));
          for (let e = 16; e < 80; e++) {
            let t = 0 | oq[e - 15],
              r = 0 | oQ[e - 15],
              n = t9.rotrSH(t, r, 1) ^ t9.rotrSH(t, r, 8) ^ t9.shrSH(t, r, 7),
              i = t9.rotrSL(t, r, 1) ^ t9.rotrSL(t, r, 8) ^ t9.shrSL(t, r, 7),
              s = 0 | oq[e - 2],
              a = 0 | oQ[e - 2],
              o = t9.rotrSH(s, a, 19) ^ t9.rotrBH(s, a, 61) ^ t9.shrSH(s, a, 6),
              u = t9.rotrSL(s, a, 19) ^ t9.rotrBL(s, a, 61) ^ t9.shrSL(s, a, 6),
              c = t9.add4L(i, u, oQ[e - 7], oQ[e - 16]),
              l = t9.add4H(c, n, o, oq[e - 7], oq[e - 16]);
            ((oq[e] = 0 | l), (oQ[e] = 0 | c));
          }
          let {
            Ah: r,
            Al: n,
            Bh: i,
            Bl: s,
            Ch: a,
            Cl: o,
            Dh: u,
            Dl: c,
            Eh: l,
            El: d,
            Fh: h,
            Fl: f,
            Gh: p,
            Gl: m,
            Hh: g,
            Hl: y,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t =
                t9.rotrSH(l, d, 14) ^ t9.rotrSH(l, d, 18) ^ t9.rotrBH(l, d, 41),
              v =
                t9.rotrSL(l, d, 14) ^ t9.rotrSL(l, d, 18) ^ t9.rotrBL(l, d, 41),
              b = (l & h) ^ (~l & p),
              A = (d & f) ^ (~d & m),
              w = t9.add5L(y, v, A, oU[e], oQ[e]),
              x = t9.add5H(w, g, t, b, oG[e], oq[e]),
              E = 0 | w,
              k =
                t9.rotrSH(r, n, 28) ^ t9.rotrBH(r, n, 34) ^ t9.rotrBH(r, n, 39),
              I =
                t9.rotrSL(r, n, 28) ^ t9.rotrBL(r, n, 34) ^ t9.rotrBL(r, n, 39),
              _ = (r & i) ^ (r & a) ^ (i & a),
              S = (n & s) ^ (n & o) ^ (s & o);
            ((g = 0 | p),
              (y = 0 | m),
              (p = 0 | h),
              (m = 0 | f),
              (h = 0 | l),
              (f = 0 | d),
              ({ h: l, l: d } = t9.add(0 | u, 0 | c, 0 | x, 0 | E)),
              (u = 0 | a),
              (c = 0 | o),
              (a = 0 | i),
              (o = 0 | s),
              (i = 0 | r),
              (s = 0 | n));
            let T = t9.add3L(E, I, S);
            ((r = t9.add3H(T, x, k, _)), (n = 0 | T));
          }
          (({ h: r, l: n } = t9.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: s } = t9.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | s)),
            ({ h: a, l: o } = t9.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | o)),
            ({ h: u, l: c } = t9.add(0 | this.Dh, 0 | this.Dl, 0 | u, 0 | c)),
            ({ h: l, l: d } = t9.add(0 | this.Eh, 0 | this.El, 0 | l, 0 | d)),
            ({ h: h, l: f } = t9.add(0 | this.Fh, 0 | this.Fl, 0 | h, 0 | f)),
            ({ h: p, l: m } = t9.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | m)),
            ({ h: g, l: y } = t9.add(0 | this.Hh, 0 | this.Hl, 0 | g, 0 | y)),
            this.set(r, n, i, s, a, o, u, c, l, d, h, f, p, m, g, y));
        }
        roundClean() {
          (oq.fill(0), oQ.fill(0));
        }
        destroy() {
          (this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      let oz = rp(() => new oZ());
      function oV(e, t, r, n, i) {
        if (!["sha256", "sha512"].includes(i))
          throw Error("Only sha256 and sha512 are supported");
        return (
          rM(e),
          rM(t),
          oO("sha256" === i ? oH : oz, e, t, { c: r, dkLen: n })
        );
      }
      function oK(e, t, r, n, i, s) {
        let a = e[t++] ^ r[n++],
          o = e[t++] ^ r[n++],
          u = e[t++] ^ r[n++],
          c = e[t++] ^ r[n++],
          l = e[t++] ^ r[n++],
          d = e[t++] ^ r[n++],
          h = e[t++] ^ r[n++],
          f = e[t++] ^ r[n++],
          p = e[t++] ^ r[n++],
          m = e[t++] ^ r[n++],
          g = e[t++] ^ r[n++],
          y = e[t++] ^ r[n++],
          v = e[t++] ^ r[n++],
          b = e[t++] ^ r[n++],
          A = e[t++] ^ r[n++],
          w = e[t++] ^ r[n++],
          x = a,
          E = o,
          k = u,
          I = c,
          _ = l,
          S = d,
          T = h,
          P = f,
          C = p,
          B = m,
          O = g,
          N = y,
          R = v,
          M = b,
          F = A,
          L = w;
        for (let e = 0; e < 8; e += 2)
          ((_ ^= rn((x + R) | 0, 7)),
            (C ^= rn((_ + x) | 0, 9)),
            (R ^= rn((C + _) | 0, 13)),
            (x ^= rn((R + C) | 0, 18)),
            (B ^= rn((S + E) | 0, 7)),
            (M ^= rn((B + S) | 0, 9)),
            (E ^= rn((M + B) | 0, 13)),
            (S ^= rn((E + M) | 0, 18)),
            (F ^= rn((O + T) | 0, 7)),
            (k ^= rn((F + O) | 0, 9)),
            (T ^= rn((k + F) | 0, 13)),
            (O ^= rn((T + k) | 0, 18)),
            (I ^= rn((L + N) | 0, 7)),
            (P ^= rn((I + L) | 0, 9)),
            (N ^= rn((P + I) | 0, 13)),
            (L ^= rn((N + P) | 0, 18)),
            (E ^= rn((x + I) | 0, 7)),
            (k ^= rn((E + x) | 0, 9)),
            (I ^= rn((k + E) | 0, 13)),
            (x ^= rn((I + k) | 0, 18)),
            (T ^= rn((S + _) | 0, 7)),
            (P ^= rn((T + S) | 0, 9)),
            (_ ^= rn((P + T) | 0, 13)),
            (S ^= rn((_ + P) | 0, 18)),
            (N ^= rn((O + B) | 0, 7)),
            (C ^= rn((N + O) | 0, 9)),
            (B ^= rn((C + N) | 0, 13)),
            (O ^= rn((B + C) | 0, 18)),
            (R ^= rn((L + F) | 0, 7)),
            (M ^= rn((R + L) | 0, 9)),
            (F ^= rn((M + R) | 0, 13)),
            (L ^= rn((F + M) | 0, 18)));
        ((i[s++] = (a + x) | 0),
          (i[s++] = (o + E) | 0),
          (i[s++] = (u + k) | 0),
          (i[s++] = (c + I) | 0),
          (i[s++] = (l + _) | 0),
          (i[s++] = (d + S) | 0),
          (i[s++] = (h + T) | 0),
          (i[s++] = (f + P) | 0),
          (i[s++] = (p + C) | 0),
          (i[s++] = (m + B) | 0),
          (i[s++] = (g + O) | 0),
          (i[s++] = (y + N) | 0),
          (i[s++] = (v + R) | 0),
          (i[s++] = (b + M) | 0),
          (i[s++] = (A + F) | 0),
          (i[s++] = (w + L) | 0));
      }
      function oJ(e, t, r, n, i) {
        let s = n + 0,
          a = n + 16 * i;
        for (let n = 0; n < 16; n++) r[a + n] = e[t + (2 * i - 1) * 16 + n];
        for (let n = 0; n < i; n++, s += 16, t += 16)
          (oK(r, a, e, t, r, s),
            n > 0 && (a += 16),
            oK(r, s, e, (t += 16), r, a));
      }
      function oW(e, t, r, n, i, s, a) {
        return (
          rM(e),
          rM(t),
          (function (e, t, r) {
            let {
              N: n,
              r: i,
              p: s,
              dkLen: a,
              blockSize32: o,
              V: u,
              B32: c,
              B: l,
              tmp: d,
              blockMixCb: h,
            } = (function (e, t, r) {
              let {
                N: n,
                r: i,
                p: s,
                dkLen: a,
                asyncTick: o,
                maxmem: u,
                onProgress: c,
              } = rf({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, r);
              if (
                (tJ(n),
                tJ(i),
                tJ(s),
                tJ(a),
                tJ(o),
                tJ(u),
                void 0 !== c && "function" != typeof c)
              )
                throw Error("progressCb should be function");
              let l = 128 * i,
                d = l / 4;
              if (
                n <= 1 ||
                (n & (n - 1)) != 0 ||
                n >= 2 ** (l / 8) ||
                n > 0x100000000
              )
                throw Error(
                  "Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32",
                );
              if (s < 0 || s > ((0x100000000 - 1) * 32) / l)
                throw Error(
                  "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
                );
              if (a < 0 || a > (0x100000000 - 1) * 32)
                throw Error(
                  "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
                );
              let h = l * (n + s);
              if (h > u)
                throw Error(
                  `Scrypt: parameters too large, ${h} (128 * r * (N + p)) > ${u} (maxmem)`,
                );
              let f = oO(oH, e, t, { c: 1, dkLen: l * s }),
                p = re(f),
                m = re(new Uint8Array(l * n)),
                g = re(new Uint8Array(l)),
                y = () => {};
              if (c) {
                let e = 2 * n * s,
                  t = Math.max(Math.floor(e / 1e4), 1),
                  r = 0;
                y = () => {
                  (r++, c && (!(r % t) || r === e) && c(r / e));
                };
              }
              return {
                N: n,
                r: i,
                p: s,
                dkLen: a,
                blockSize32: d,
                V: m,
                B32: p,
                B: f,
                tmp: g,
                blockMixCb: y,
                asyncTick: o,
              };
            })(e, t, r);
            ri || ra(c);
            for (let e = 0; e < s; e++) {
              let t = o * e;
              for (let e = 0; e < o; e++) u[e] = c[t + e];
              for (let e = 0, t = 0; e < n - 1; e++)
                (oJ(u, t, u, (t += o), i), h());
              (oJ(u, (n - 1) * o, c, t, i), h());
              for (let e = 0; e < n; e++) {
                let e = c[t + o - 16] % n;
                for (let r = 0; r < o; r++) d[r] = c[t + r] ^ u[e * o + r];
                (oJ(d, 0, c, t, i), h());
              }
            }
            return (
              ri || ra(c),
              (function (e, t, r, n, i) {
                let s = oO(oH, e, r, { c: 1, dkLen: t });
                return (r.fill(0), n.fill(0), i.fill(0), s);
              })(e, a, l, u, d)
            );
          })(e, t, { N: r, r: i, p: n, dkLen: s, onProgress: a })
        );
      }
      let o$ = BigInt(1),
        oY = BigInt(2);
      function oX(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function o0(e) {
        if (!oX(e)) throw Error("Uint8Array expected");
      }
      let o1 = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0"),
      );
      function o2(e) {
        o0(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += o1[e[r]];
        return t;
      }
      function o3(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return BigInt("" === e ? "0" : `0x${e}`);
      }
      let o6 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function o5(e) {
        return e >= o6._0 && e <= o6._9
          ? e - o6._0
          : e >= o6._A && e <= o6._F
            ? e - (o6._A - 10)
            : e >= o6._a && e <= o6._f
              ? e - (o6._a - 10)
              : void 0;
      }
      function o4(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + t,
          );
        let n = new Uint8Array(r);
        for (let t = 0, i = 0; t < r; t++, i += 2) {
          let r = o5(e.charCodeAt(i)),
            s = o5(e.charCodeAt(i + 1));
          if (void 0 === r || void 0 === s)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[i] + e[i + 1]) +
                '" at index ' +
                i,
            );
          n[t] = 16 * r + s;
        }
        return n;
      }
      function o8(e) {
        return o3(o2(e));
      }
      function o9(e) {
        return (o0(e), o3(o2(Uint8Array.from(e).reverse())));
      }
      function o7(e, t) {
        return o4(e.toString(16).padStart(2 * t, "0"));
      }
      function ue(e, t) {
        return o7(e, t).reverse();
      }
      function ut(e, t, r) {
        let n;
        if ("string" == typeof t)
          try {
            n = o4(t);
          } catch (r) {
            throw Error(
              `${e} must be valid hex string, got "${t}". Cause: ${r}`,
            );
          }
        else if (oX(t)) n = Uint8Array.from(t);
        else throw Error(`${e} must be hex string or Uint8Array`);
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(`${e} expected ${r} bytes, got ${i}`);
        return n;
      }
      function ur(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          (o0(n), (t += n.length));
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          (r.set(i, n), (n += i.length));
        }
        return r;
      }
      let un = (e) => (oY << BigInt(e - 1)) - o$,
        ui = (e) => new Uint8Array(e),
        us = (e) => Uint8Array.from(e);
      function ua(e, t, r) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = ui(e),
          i = ui(e),
          s = 0,
          a = () => {
            (n.fill(1), i.fill(0), (s = 0));
          },
          o = (...e) => r(i, n, ...e),
          u = (e = ui()) => {
            ((i = o(us([0]), e)),
              (n = o()),
              0 !== e.length && ((i = o(us([1]), e)), (n = o())));
          },
          c = () => {
            if (s++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              r = [];
            for (; e < t; ) {
              let t = (n = o()).slice();
              (r.push(t), (e += n.length));
            }
            return ur(...r);
          };
        return (e, t) => {
          let r;
          for (a(), u(e); !(r = t(c())); ) u();
          return (a(), r);
        };
      }
      let uo = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || oX(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function uu(e, t, r = {}) {
        let n = (t, r, n) => {
          let i = uo[r];
          if ("function" != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let s = e[t];
          if ((!n || void 0 !== s) && !i(s, e))
            throw Error(
              `Invalid param ${String(t)}=${s} (${typeof s}), expected ${r}`,
            );
        };
        for (let [e, r] of Object.entries(t)) n(e, r, !1);
        for (let [e, t] of Object.entries(r)) n(e, t, !0);
        return e;
      }
      let uc = BigInt(0),
        ul = BigInt(1),
        ud = BigInt(2),
        uh = BigInt(3),
        uf = BigInt(4),
        up = BigInt(5),
        um = BigInt(8);
      function ug(e, t) {
        let r = e % t;
        return r >= uc ? r : t + r;
      }
      function uy(e, t, r) {
        let n = e;
        for (; t-- > uc; ) ((n *= n), (n %= r));
        return n;
      }
      function uv(e, t) {
        if (e === uc || t <= uc)
          throw Error(
            `invert: expected positive integers, got n=${e} mod=${t}`,
          );
        let r = ug(e, t),
          n = t,
          i = uc,
          s = ul,
          a = ul,
          o = uc;
        for (; r !== uc; ) {
          let e = n / r,
            t = n % r,
            u = i - a * e,
            c = s - o * e;
          ((n = r), (r = t), (i = a), (s = o), (a = u), (o = c));
        }
        if (n !== ul) throw Error("invert: does not exist");
        return ug(i, t);
      }
      (BigInt(9), BigInt(16));
      let ub = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function uA(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          n = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: n };
      }
      function uw(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function ux(e) {
        let t = uw(e);
        return t + Math.ceil(t / 2);
      }
      let uE = BigInt(0),
        uk = BigInt(1);
      function uI(e) {
        return (
          uu(
            e.Fp,
            ub.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            }),
          ),
          uu(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" },
          ),
          Object.freeze({
            ...uA(e.n, e.nBitLength),
            ...e,
            ...{ p: e.Fp.ORDER },
          })
        );
      }
      let { Ph: u_, aT: uS } = V,
        uT = {
          Err: class extends Error {
            constructor(e = "") {
              super(e);
            }
          },
          _parseInt(e) {
            let { Err: t } = uT;
            if (e.length < 2 || 2 !== e[0])
              throw new t("Invalid signature integer tag");
            let r = e[1],
              n = e.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new t("Invalid signature integer: wrong length");
            if (128 & n[0]) throw new t("Invalid signature integer: negative");
            if (0 === n[0] && !(128 & n[1]))
              throw new t(
                "Invalid signature integer: unnecessary leading zero",
              );
            return { d: u_(n), l: e.subarray(r + 2) };
          },
          toSig(e) {
            let { Err: t } = uT,
              r = "string" == typeof e ? uS(e) : e;
            o0(r);
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new t("Invalid signature tag");
            if (r[1] !== n - 2)
              throw new t("Invalid signature: incorrect length");
            let { d: i, l: s } = uT._parseInt(r.subarray(2)),
              { d: a, l: o } = uT._parseInt(s);
            if (o.length)
              throw new t("Invalid signature: left bytes after parsing");
            return { r: i, s: a };
          },
          hexFromSig(e) {
            let t = (e) => (8 & Number.parseInt(e[0], 16) ? "00" + e : e),
              r = (e) => {
                let t = e.toString(16);
                return 1 & t.length ? `0${t}` : t;
              },
              n = t(r(e.s)),
              i = t(r(e.r)),
              s = n.length / 2,
              a = i.length / 2,
              o = r(s),
              u = r(a);
            return `30${r(a + s + 4)}02${u}${i}02${o}${n}`;
          },
        },
        uP = BigInt(0),
        uC = BigInt(1),
        uB = (BigInt(2), BigInt(3)),
        uO =
          (BigInt(4),
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          )),
        uN = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
        ),
        uR = BigInt(1),
        uM = BigInt(2),
        uF = (e, t) => (e + t / uM) / t,
        uL = (function (e, t, r = !1, n = {}) {
          if (e <= uc) throw Error(`Expected Field ORDER > 0, got ${e}`);
          let { nBitLength: i, nByteLength: s } = uA(e, t);
          if (s > 2048)
            throw Error("Field lengths over 2048 bytes are not supported");
          let a = (function (e) {
              if (e % uf === uh) {
                let t = (e + ul) / uf;
                return function (e, r) {
                  let n = e.pow(r, t);
                  if (!e.eql(e.sqr(n), r))
                    throw Error("Cannot find square root");
                  return n;
                };
              }
              if (e % um === up) {
                let t = (e - up) / um;
                return function (e, r) {
                  let n = e.mul(r, ud),
                    i = e.pow(n, t),
                    s = e.mul(r, i),
                    a = e.mul(e.mul(s, ud), i),
                    o = e.mul(s, e.sub(a, e.ONE));
                  if (!e.eql(e.sqr(o), r))
                    throw Error("Cannot find square root");
                  return o;
                };
              }
              return (function (e) {
                let t,
                  r,
                  n,
                  i = (e - ul) / ud;
                for (t = e - ul, r = 0; t % ud === uc; t /= ud, r++);
                for (
                  n = ud;
                  n < e &&
                  (function (e, t, r) {
                    if (r <= uc || t < uc)
                      throw Error("Expected power/modulo > 0");
                    if (r === ul) return uc;
                    let n = ul;
                    for (; t > uc; )
                      (t & ul && (n = (n * e) % r),
                        (e = (e * e) % r),
                        (t >>= ul));
                    return n;
                  })(n, i, e) !==
                    e - ul;
                  n++
                );
                if (1 === r) {
                  let t = (e + ul) / uf;
                  return function (e, r) {
                    let n = e.pow(r, t);
                    if (!e.eql(e.sqr(n), r))
                      throw Error("Cannot find square root");
                    return n;
                  };
                }
                let s = (t + ul) / ud;
                return function (e, a) {
                  if (e.pow(a, i) === e.neg(e.ONE))
                    throw Error("Cannot find square root");
                  let o = r,
                    u = e.pow(e.mul(e.ONE, n), t),
                    c = e.pow(a, s),
                    l = e.pow(a, t);
                  for (; !e.eql(l, e.ONE); ) {
                    if (e.eql(l, e.ZERO)) return e.ZERO;
                    let t = 1;
                    for (let r = e.sqr(l); t < o && !e.eql(r, e.ONE); t++)
                      r = e.sqr(r);
                    let r = e.pow(u, ul << BigInt(o - t - 1));
                    ((u = e.sqr(r)),
                      (c = e.mul(c, r)),
                      (l = e.mul(l, u)),
                      (o = t));
                  }
                  return c;
                };
              })(e);
            })(e),
            o = Object.freeze({
              ORDER: e,
              BITS: i,
              BYTES: s,
              MASK: un(i),
              ZERO: uc,
              ONE: ul,
              create: (t) => ug(t, e),
              isValid: (t) => {
                if ("bigint" != typeof t)
                  throw Error(
                    `Invalid field element: expected bigint, got ${typeof t}`,
                  );
                return uc <= t && t < e;
              },
              is0: (e) => e === uc,
              isOdd: (e) => (e & ul) === ul,
              neg: (t) => ug(-t, e),
              eql: (e, t) => e === t,
              sqr: (t) => ug(t * t, e),
              add: (t, r) => ug(t + r, e),
              sub: (t, r) => ug(t - r, e),
              mul: (t, r) => ug(t * r, e),
              pow: (e, t) =>
                (function (e, t, r) {
                  if (r < uc) throw Error("Expected power > 0");
                  if (r === uc) return e.ONE;
                  if (r === ul) return t;
                  let n = e.ONE,
                    i = t;
                  for (; r > uc; )
                    (r & ul && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= ul));
                  return n;
                })(o, e, t),
              div: (t, r) => ug(t * uv(r, e), e),
              sqrN: (e) => e * e,
              addN: (e, t) => e + t,
              subN: (e, t) => e - t,
              mulN: (e, t) => e * t,
              inv: (t) => uv(t, e),
              sqrt: n.sqrt || ((e) => a(o, e)),
              invertBatch: (e) =>
                (function (e, t) {
                  let r = Array(t.length),
                    n = t.reduce(
                      (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
                      e.ONE,
                    ),
                    i = e.inv(n);
                  return (
                    t.reduceRight(
                      (t, n, i) =>
                        e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
                      i,
                    ),
                    r
                  );
                })(o, e),
              cmov: (e, t, r) => (r ? t : e),
              toBytes: (e) => (r ? ue(e, s) : o7(e, s)),
              fromBytes: (e) => {
                if (e.length !== s)
                  throw Error(`Fp.fromBytes: expected ${s}, got ${e.length}`);
                return r ? o9(e) : o8(e);
              },
            });
          return Object.freeze(o);
        })(uO, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              s = BigInt(23),
              a = BigInt(44),
              o = BigInt(88),
              u = (e * e * e) % uO,
              c = (u * u * e) % uO,
              l = (uy(c, t, uO) * c) % uO,
              d = (uy(l, t, uO) * c) % uO,
              h = (uy(d, uM, uO) * u) % uO,
              f = (uy(h, n, uO) * h) % uO,
              p = (uy(f, i, uO) * f) % uO,
              m = (uy(p, a, uO) * p) % uO,
              g = (uy(m, o, uO) * m) % uO,
              y = (uy(g, a, uO) * p) % uO,
              v = (uy(y, t, uO) * c) % uO,
              b = (uy(v, s, uO) * f) % uO,
              A = (uy(b, r, uO) * u) % uO,
              w = uy(A, uM, uO);
            if (!uL.eql(uL.sqr(w), e)) throw Error("Cannot find square root");
            return w;
          },
        }),
        uD = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = uI(e);
                  return (
                    uu(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      },
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: r, n: n } = t,
                i = r.BYTES + 1,
                s = 2 * r.BYTES + 1;
              function a(e) {
                return ug(e, n);
              }
              let {
                  ProjectivePoint: o,
                  normPrivateKeyToScalar: u,
                  weierstrassEquation: c,
                  isWithinCurveOrder: l,
                } = (function (e) {
                  let t = (function (e) {
                      let t = uI(e);
                      uu(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        },
                      );
                      let { endo: r, Fp: n, a: i } = t;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error(
                            "Endomorphism can only be defined for Koblitz curves that have a=0",
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "Expected endomorphism with beta: bigint and splitScalar: function",
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = t,
                    n =
                      t.toBytes ||
                      ((e, t, n) => {
                        let i = t.toAffine();
                        return ur(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y),
                        );
                      }),
                    i =
                      t.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(e) {
                    let { a: n, b: i } = t,
                      s = r.sqr(e),
                      a = r.mul(s, e);
                    return r.add(r.add(a, r.mul(e, n)), i);
                  }
                  if (!r.eql(r.sqr(t.Gy), s(t.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function a(e) {
                    return "bigint" == typeof e && uP < e && e < t.n;
                  }
                  function o(e) {
                    if (!a(e))
                      throw Error(
                        "Expected valid bigint: 0 < bigint < curve.n",
                      );
                  }
                  function u(e) {
                    let r,
                      {
                        allowedPrivateKeyLengths: n,
                        nByteLength: i,
                        wrapPrivateKey: s,
                        n: a,
                      } = t;
                    if (n && "bigint" != typeof e) {
                      if (
                        (oX(e) && (e = o2(e)),
                        "string" != typeof e || !n.includes(e.length))
                      )
                        throw Error("Invalid key");
                      e = e.padStart(2 * i, "0");
                    }
                    try {
                      r =
                        "bigint" == typeof e ? e : o8(ut("private key", e, i));
                    } catch (t) {
                      throw Error(
                        `private key must be ${i} bytes, hex or bigint, not ${typeof e}`,
                      );
                    }
                    return (s && (r = ug(r, a)), o(r), r);
                  }
                  let c = new Map();
                  function l(e) {
                    if (!(e instanceof d))
                      throw Error("ProjectivePoint expected");
                  }
                  class d {
                    constructor(e, t, n) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = n),
                        null == e || !r.isValid(e))
                      )
                        throw Error("x required");
                      if (null == t || !r.isValid(t)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                    }
                    static fromAffine(e) {
                      let { x: t, y: n } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (e instanceof d)
                        throw Error("projective point not allowed");
                      let i = (e) => r.eql(e, r.ZERO);
                      return i(t) && i(n) ? d.ZERO : new d(t, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(d.fromAffine);
                    }
                    static fromHex(e) {
                      let t = d.fromAffine(i(ut("pointHex", e)));
                      return (t.assertValidity(), t);
                    }
                    static fromPrivateKey(e) {
                      return d.BASE.multiply(u(e));
                    }
                    _setWindowSize(e) {
                      ((this._WINDOW_SIZE = e), c.delete(this));
                    }
                    assertValidity() {
                      if (this.is0()) {
                        if (t.allowInfinityPoint && !r.is0(this.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: e, y: n } = this.toAffine();
                      if (!r.isValid(e) || !r.isValid(n))
                        throw Error("bad point: x or y not FE");
                      let i = r.sqr(n),
                        a = s(e);
                      if (!r.eql(i, a))
                        throw Error("bad point: equation left != right");
                      if (!this.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      l(e);
                      let { px: t, py: n, pz: i } = this,
                        { px: s, py: a, pz: o } = e,
                        u = r.eql(r.mul(t, o), r.mul(s, i)),
                        c = r.eql(r.mul(n, o), r.mul(a, i));
                      return u && c;
                    }
                    negate() {
                      return new d(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: n } = t,
                        i = r.mul(n, uB),
                        { px: s, py: a, pz: o } = this,
                        u = r.ZERO,
                        c = r.ZERO,
                        l = r.ZERO,
                        h = r.mul(s, s),
                        f = r.mul(a, a),
                        p = r.mul(o, o),
                        m = r.mul(s, a);
                      return (
                        (m = r.add(m, m)),
                        (l = r.mul(s, o)),
                        (l = r.add(l, l)),
                        (u = r.mul(e, l)),
                        (c = r.mul(i, p)),
                        (c = r.add(u, c)),
                        (u = r.sub(f, c)),
                        (c = r.add(f, c)),
                        (c = r.mul(u, c)),
                        (u = r.mul(m, u)),
                        (l = r.mul(i, l)),
                        (p = r.mul(e, p)),
                        (m = r.sub(h, p)),
                        (m = r.mul(e, m)),
                        (m = r.add(m, l)),
                        (l = r.add(h, h)),
                        (h = r.add(l, h)),
                        (h = r.add(h, p)),
                        (h = r.mul(h, m)),
                        (c = r.add(c, h)),
                        (p = r.mul(a, o)),
                        (p = r.add(p, p)),
                        (h = r.mul(p, m)),
                        (u = r.sub(u, h)),
                        (l = r.mul(p, f)),
                        (l = r.add(l, l)),
                        new d(u, c, (l = r.add(l, l)))
                      );
                    }
                    add(e) {
                      l(e);
                      let { px: n, py: i, pz: s } = this,
                        { px: a, py: o, pz: u } = e,
                        c = r.ZERO,
                        h = r.ZERO,
                        f = r.ZERO,
                        p = t.a,
                        m = r.mul(t.b, uB),
                        g = r.mul(n, a),
                        y = r.mul(i, o),
                        v = r.mul(s, u),
                        b = r.add(n, i),
                        A = r.add(a, o);
                      ((b = r.mul(b, A)),
                        (A = r.add(g, y)),
                        (b = r.sub(b, A)),
                        (A = r.add(n, s)));
                      let w = r.add(a, u);
                      return (
                        (A = r.mul(A, w)),
                        (w = r.add(g, v)),
                        (A = r.sub(A, w)),
                        (w = r.add(i, s)),
                        (c = r.add(o, u)),
                        (w = r.mul(w, c)),
                        (c = r.add(y, v)),
                        (w = r.sub(w, c)),
                        (f = r.mul(p, A)),
                        (c = r.mul(m, v)),
                        (f = r.add(c, f)),
                        (c = r.sub(y, f)),
                        (f = r.add(y, f)),
                        (h = r.mul(c, f)),
                        (y = r.add(g, g)),
                        (y = r.add(y, g)),
                        (v = r.mul(p, v)),
                        (A = r.mul(m, A)),
                        (y = r.add(y, v)),
                        (v = r.sub(g, v)),
                        (v = r.mul(p, v)),
                        (A = r.add(A, v)),
                        (g = r.mul(y, A)),
                        (h = r.add(h, g)),
                        (g = r.mul(w, A)),
                        (c = r.mul(b, c)),
                        (c = r.sub(c, g)),
                        (g = r.mul(b, y)),
                        (f = r.mul(w, f)),
                        new d(c, h, (f = r.add(f, g)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(d.ZERO);
                    }
                    wNAF(e) {
                      return f.wNAFCached(this, c, e, (e) => {
                        let t = r.invertBatch(e.map((e) => e.pz));
                        return e
                          .map((e, r) => e.toAffine(t[r]))
                          .map(d.fromAffine);
                      });
                    }
                    multiplyUnsafe(e) {
                      let n = d.ZERO;
                      if (e === uP) return n;
                      if ((o(e), e === uC)) return this;
                      let { endo: i } = t;
                      if (!i) return f.unsafeLadder(this, e);
                      let {
                          k1neg: s,
                          k1: a,
                          k2neg: u,
                          k2: c,
                        } = i.splitScalar(e),
                        l = n,
                        h = n,
                        p = this;
                      for (; a > uP || c > uP; )
                        (a & uC && (l = l.add(p)),
                          c & uC && (h = h.add(p)),
                          (p = p.double()),
                          (a >>= uC),
                          (c >>= uC));
                      return (
                        s && (l = l.negate()),
                        u && (h = h.negate()),
                        (h = new d(r.mul(h.px, i.beta), h.py, h.pz)),
                        l.add(h)
                      );
                    }
                    multiply(e) {
                      let n, i;
                      o(e);
                      let { endo: s } = t;
                      if (s) {
                        let {
                            k1neg: t,
                            k1: a,
                            k2neg: o,
                            k2: u,
                          } = s.splitScalar(e),
                          { p: c, f: l } = this.wNAF(a),
                          { p: h, f: p } = this.wNAF(u);
                        ((c = f.constTimeNegate(t, c)),
                          (h = f.constTimeNegate(o, h)),
                          (h = new d(r.mul(h.px, s.beta), h.py, h.pz)),
                          (n = c.add(h)),
                          (i = l.add(p)));
                      } else {
                        let { p: t, f: r } = this.wNAF(e);
                        ((n = t), (i = r));
                      }
                      return d.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let n = d.BASE,
                        i = (e, t) =>
                          t !== uP && t !== uC && e.equals(n)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        s = i(this, t).add(i(e, r));
                      return s.is0() ? void 0 : s;
                    }
                    toAffine(e) {
                      let { px: t, py: n, pz: i } = this,
                        s = this.is0();
                      null == e && (e = s ? r.ONE : r.inv(i));
                      let a = r.mul(t, e),
                        o = r.mul(n, e),
                        u = r.mul(i, e);
                      if (s) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: o };
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: r } = t;
                      if (e === uC) return !0;
                      if (r) return r(d, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve",
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: r } = t;
                      return e === uC
                        ? this
                        : r
                          ? r(d, this)
                          : this.multiplyUnsafe(t.h);
                    }
                    toRawBytes(e = !0) {
                      return (this.assertValidity(), n(d, this, e));
                    }
                    toHex(e = !0) {
                      return o2(this.toRawBytes(e));
                    }
                  }
                  ((d.BASE = new d(t.Gx, t.Gy, r.ONE)),
                    (d.ZERO = new d(r.ZERO, r.ONE, r.ZERO)));
                  let h = t.nBitLength,
                    f = (function (e, t) {
                      let r = (e, t) => {
                          let r = t.negate();
                          return e ? r : t;
                        },
                        n = (e) => ({
                          windows: Math.ceil(t / e) + 1,
                          windowSize: 2 ** (e - 1),
                        });
                      return {
                        constTimeNegate: r,
                        unsafeLadder(t, r) {
                          let n = e.ZERO,
                            i = t;
                          for (; r > uE; )
                            (r & uk && (n = n.add(i)),
                              (i = i.double()),
                              (r >>= uk));
                          return n;
                        },
                        precomputeWindow(e, t) {
                          let { windows: r, windowSize: i } = n(t),
                            s = [],
                            a = e,
                            o = a;
                          for (let e = 0; e < r; e++) {
                            ((o = a), s.push(o));
                            for (let e = 1; e < i; e++)
                              ((o = o.add(a)), s.push(o));
                            a = o.double();
                          }
                          return s;
                        },
                        wNAF(t, i, s) {
                          let { windows: a, windowSize: o } = n(t),
                            u = e.ZERO,
                            c = e.BASE,
                            l = BigInt(2 ** t - 1),
                            d = 2 ** t,
                            h = BigInt(t);
                          for (let e = 0; e < a; e++) {
                            let t = e * o,
                              n = Number(s & l);
                            ((s >>= h), n > o && ((n -= d), (s += uk)));
                            let a = t + Math.abs(n) - 1,
                              f = e % 2 != 0,
                              p = n < 0;
                            0 === n
                              ? (c = c.add(r(f, i[t])))
                              : (u = u.add(r(p, i[a])));
                          }
                          return { p: u, f: c };
                        },
                        wNAFCached(e, t, r, n) {
                          let i = e._WINDOW_SIZE || 1,
                            s = t.get(e);
                          return (
                            s ||
                              ((s = this.precomputeWindow(e, i)),
                              1 !== i && t.set(e, n(s))),
                            this.wNAF(i, s, r)
                          );
                        },
                      };
                    })(d, t.endo ? Math.ceil(h / 2) : h);
                  return {
                    CURVE: t,
                    ProjectivePoint: d,
                    normPrivateKeyToScalar: u,
                    weierstrassEquation: s,
                    isWithinCurveOrder: a,
                  };
                })({
                  ...t,
                  toBytes(e, t, n) {
                    let i = t.toAffine(),
                      s = r.toBytes(i.x),
                      a = ur;
                    return n
                      ? a(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s)
                      : a(Uint8Array.from([4]), s, r.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      n = e[0],
                      a = e.subarray(1);
                    if (t === i && (2 === n || 3 === n)) {
                      let e,
                        t = o8(a);
                      if (!(uP < t && t < r.ORDER))
                        throw Error("Point is not on curve");
                      let i = c(t);
                      try {
                        e = r.sqrt(i);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : ""),
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((e & uC) === uC) && (e = r.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === s && 4 === n)
                      return {
                        x: r.fromBytes(a.subarray(0, r.BYTES)),
                        y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${t} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`,
                    );
                  },
                }),
                d = (e) => o2(o7(e, t.nByteLength)),
                h = (e, t, r) => o8(e.slice(t, r));
              class f {
                constructor(e, t, r) {
                  ((this.r = e),
                    (this.s = t),
                    (this.recovery = r),
                    this.assertValidity());
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return new f(
                    h((e = ut("compactSignature", e, 2 * r)), 0, r),
                    h(e, r, 2 * r),
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = uT.toSig(ut("DER", e));
                  return new f(t, r);
                }
                assertValidity() {
                  if (!l(this.r)) throw Error("r must be 0 < r < CURVE.n");
                  if (!l(this.s)) throw Error("s must be 0 < s < CURVE.n");
                }
                addRecoveryBit(e) {
                  return new f(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: i, s, recovery: u } = this,
                    c = g(ut("msgHash", e));
                  if (null == u || ![0, 1, 2, 3].includes(u))
                    throw Error("recovery id invalid");
                  let l = 2 === u || 3 === u ? i + t.n : i;
                  if (l >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let h = (1 & u) == 0 ? "02" : "03",
                    f = o.fromHex(h + d(l)),
                    p = uv(l, n),
                    m = a(-c * p),
                    y = a(s * p),
                    v = o.BASE.multiplyAndAddUnsafe(f, m, y);
                  if (!v) throw Error("point at infinify");
                  return (v.assertValidity(), v);
                }
                hasHighS() {
                  return this.s > n >> uC;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new f(this.r, a(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return o4(this.toDERHex());
                }
                toDERHex() {
                  return uT.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return o4(this.toCompactHex());
                }
                toCompactHex() {
                  return d(this.r) + d(this.s);
                }
              }
              function p(e) {
                let t = oX(e),
                  r = "string" == typeof e,
                  n = (t || r) && e.length;
                return t
                  ? n === i || n === s
                  : r
                    ? n === 2 * i || n === 2 * s
                    : e instanceof o;
              }
              let m =
                  t.bits2int ||
                  function (e) {
                    let r = o8(e),
                      n = 8 * e.length - t.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                g =
                  t.bits2int_modN ||
                  function (e) {
                    return a(m(e));
                  },
                y = un(t.nBitLength);
              function v(e) {
                if ("bigint" != typeof e) throw Error("bigint expected");
                if (!(uP <= e && e < y))
                  throw Error(`bigint expected < 2^${t.nBitLength}`);
                return o7(e, t.nByteLength);
              }
              let b = { lowS: t.lowS, prehash: !1 },
                A = { lowS: t.lowS, prehash: !1 };
              return (
                o.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return o.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (p(e)) throw Error("first arg must be private key");
                    if (!p(t)) throw Error("second arg must be public key");
                    return o.fromHex(t).multiply(u(e)).toRawBytes(r);
                  },
                  sign: function (e, i, s = b) {
                    let { seed: c, k2sig: d } = (function (e, i, s = b) {
                      if (["recovered", "canonical"].some((e) => e in s))
                        throw Error("sign() legacy options not supported");
                      let { hash: c, randomBytes: d } = t,
                        { lowS: h, prehash: p, extraEntropy: y } = s;
                      (null == h && (h = !0),
                        (e = ut("msgHash", e)),
                        p && (e = ut("prehashed msgHash", c(e))));
                      let A = g(e),
                        w = u(i),
                        x = [v(w), v(A)];
                      if (null != y && !1 !== y) {
                        let e = !0 === y ? d(r.BYTES) : y;
                        x.push(ut("extraEntropy", e));
                      }
                      return {
                        seed: ur(...x),
                        k2sig: function (e) {
                          var t;
                          let r = m(e);
                          if (!l(r)) return;
                          let i = uv(r, n),
                            s = o.BASE.multiply(r).toAffine(),
                            u = a(s.x);
                          if (u === uP) return;
                          let c = a(i * a(A + u * w));
                          if (c === uP) return;
                          let d = (2 * (s.x !== u)) | Number(s.y & uC),
                            p = c;
                          return (
                            h &&
                              c > n >> uC &&
                              ((p = (t = c) > n >> uC ? a(-t) : t), (d ^= 1)),
                            new f(u, p, d)
                          );
                        },
                      };
                    })(e, i, s);
                    return ua(t.hash.outputLen, t.nByteLength, t.hmac)(c, d);
                  },
                  verify: function (e, r, i, s = A) {
                    let u, c;
                    if (
                      ((r = ut("msgHash", r)),
                      (i = ut("publicKey", i)),
                      "strict" in s)
                    )
                      throw Error("options.strict was renamed to lowS");
                    let { lowS: l, prehash: d } = s;
                    try {
                      if ("string" == typeof e || oX(e))
                        try {
                          c = f.fromDER(e);
                        } catch (t) {
                          if (!(t instanceof uT.Err)) throw t;
                          c = f.fromCompact(e);
                        }
                      else if (
                        "object" == typeof e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s
                      ) {
                        let { r: t, s: r } = e;
                        c = new f(t, r);
                      } else throw Error("PARSE");
                      u = o.fromHex(i);
                    } catch (e) {
                      if ("PARSE" === e.message)
                        throw Error(
                          "signature must be Signature instance, Uint8Array or hex string",
                        );
                      return !1;
                    }
                    if (l && c.hasHighS()) return !1;
                    d && (r = t.hash(r));
                    let { r: h, s: p } = c,
                      m = g(r),
                      y = uv(p, n),
                      v = a(m * y),
                      b = a(h * y),
                      w = o.BASE.multiplyAndAddUnsafe(u, v, b)?.toAffine();
                    return !!w && a(w.x) === h;
                  },
                  ProjectivePoint: o,
                  Signature: f,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return (u(e), !0);
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: u,
                    randomPrivateKey: () => {
                      let e = ux(t.n);
                      return (function (e, t, r = !1) {
                        let n = e.length,
                          i = uw(t),
                          s = ux(t);
                        if (n < 16 || n < s || n > 1024)
                          throw Error(
                            `expected ${s}-1024 bytes of input, got ${n}`,
                          );
                        let a = ug(r ? o8(e) : o9(e), t - ul) + ul;
                        return r ? ue(a, i) : o7(a, i);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = o.BASE) => (
                      t._setWindowSize(e),
                      t.multiply(BigInt(3)),
                      t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...r) => oB(t, e, rl(...r)),
              randomBytes: rm,
            });
          return Object.freeze({ ...r(t), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: uL,
            n: uN,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240",
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424",
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
              ),
              splitScalar: (e) => {
                let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -uR * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  s = uF(t * e, uN),
                  a = uF(-r * e, uN),
                  o = ug(e - s * t - a * n, uN),
                  u = ug(-s * r - a * t, uN),
                  c = o > i,
                  l = u > i;
                if ((c && (o = uN - o), l && (u = uN - u), o > i || u > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: c, k1: o, k2neg: l, k2: u };
              },
            },
          },
          oH,
        ),
        uj = BigInt(0),
        uH = {},
        uG = (e) => e.toRawBytes(!0).slice(1),
        uU = (e) => mod(e, uN),
        uq = uD.ProjectivePoint,
        uQ = null != uD ? uD : K,
        uZ = BigInt("0xffffffffffffffff"),
        uz = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        ),
        uV = uQ.CURVE.n / BigInt(2),
        uK = {
          type: "object",
          required: ["crypto", "id", "version", "address"],
          properties: {
            crypto: {
              type: "object",
              required: [
                "cipher",
                "ciphertext",
                "cipherparams",
                "kdf",
                "kdfparams",
                "mac",
              ],
              properties: {
                cipher: { type: "string" },
                ciphertext: { type: "string" },
                cipherparams: { type: "object" },
                kdf: { type: "string" },
                kdfparams: { type: "object" },
                salt: { type: "string" },
                mac: { type: "string" },
              },
            },
            id: { type: "string" },
            version: { type: "number" },
            address: { type: "string" },
          },
        };
      (!(function (e) {
        ((e[(e.Mainnet = 1)] = "Mainnet"),
          (e[(e.Goerli = 5)] = "Goerli"),
          (e[(e.Sepolia = 0xaa36a7)] = "Sepolia"));
      })(O || (O = {})),
        (function (e) {
          ((e.Chainstart = "chainstart"),
            (e.Homestead = "homestead"),
            (e.Dao = "dao"),
            (e.TangerineWhistle = "tangerineWhistle"),
            (e.SpuriousDragon = "spuriousDragon"),
            (e.Byzantium = "byzantium"),
            (e.Constantinople = "constantinople"),
            (e.Petersburg = "petersburg"),
            (e.Istanbul = "istanbul"),
            (e.MuirGlacier = "muirGlacier"),
            (e.Berlin = "berlin"),
            (e.London = "london"),
            (e.ArrowGlacier = "arrowGlacier"),
            (e.GrayGlacier = "grayGlacier"),
            (e.MergeForkIdTransition = "mergeForkIdTransition"),
            (e.Merge = "merge"),
            (e.Shanghai = "shanghai"),
            (e.ShardingForkDev = "shardingFork"));
        })(N || (N = {})),
        (function (e) {
          ((e.ProofOfStake = "pos"),
            (e.ProofOfWork = "pow"),
            (e.ProofOfAuthority = "poa"));
        })(R || (R = {})),
        (function (e) {
          ((e.Ethash = "ethash"), (e.Clique = "clique"), (e.Casper = "casper"));
        })(M || (M = {})),
        (function (e) {
          ((e.PolygonMainnet = "polygon-mainnet"),
            (e.PolygonMumbai = "polygon-mumbai"),
            (e.ArbitrumRinkebyTestnet = "arbitrum-rinkeby-testnet"),
            (e.ArbitrumOne = "arbitrum-one"),
            (e.xDaiChain = "x-dai-chain"),
            (e.OptimisticKovan = "optimistic-kovan"),
            (e.OptimisticEthereum = "optimistic-ethereum"));
        })(F || (F = {})),
        (function (e) {
          ((e[(e.Number = 0)] = "Number"),
            (e[(e.BigInt = 1)] = "BigInt"),
            (e[(e.Uint8Array = 2)] = "Uint8Array"),
            (e[(e.PrefixedHexString = 3)] = "PrefixedHexString"));
        })(L || (L = {})));
      let uJ = (e) => {
          if ("string" != typeof e)
            throw Error(
              `[stripHexPrefix] input must be type 'string', received ${typeof e}`,
            );
          return iZ(e) ? e.slice(2) : e;
        },
        uW = function (e) {
          if (!Number.isSafeInteger(e) || e < 0)
            throw Error(`Received an invalid integer type: ${e}`);
          return `0x${e.toString(16)}`;
        };
      function u$(e) {
        let t = e;
        if ("string" != typeof t)
          throw Error(
            `[padToEven] value must be type 'string', received ${typeof t}`,
          );
        return (t.length % 2 && (t = `0${t}`), t);
      }
      let uY = function (e) {
          let t = uW(e);
          return sC(`0x${u$(t.slice(2))}`);
        },
        uX = function (e) {
          var t;
          if (null == e) return new Uint8Array();
          if (e instanceof Uint8Array) return e;
          if (
            (null == (t = null == e ? void 0 : e.constructor)
              ? void 0
              : t.name) === "Uint8Array" ||
            Array.isArray(e)
          )
            return Uint8Array.from(e);
          if ("string" == typeof e) {
            if (!iq(e))
              throw Error(
                `Cannot convert string to Uint8Array. only supports 0x-prefixed hex strings and this string was given: ${e}`,
              );
            return sC(u$(uJ(e)));
          }
          if ("number" == typeof e) return uX(sN(e));
          if ("bigint" == typeof e) {
            if (e < BigInt(0))
              throw Error(
                `Cannot convert negative bigint to Uint8Array. Given: ${e}`,
              );
            let t = e.toString(16);
            return (t.length % 2 && (t = `0${t}`), uX(`0x${t}`));
          }
          if (e.toArray) return Uint8Array.from(e.toArray());
          throw Error("invalid type");
        };
      function u0(e) {
        let t = sP(e);
        return "0x" === t ? BigInt(0) : BigInt(t);
      }
      let u1 = function (e) {
          return new Uint8Array(e).fill(0);
        },
        u2 = function (e, t, r) {
          let n = u1(t);
          return r
            ? e.length < t
              ? (n.set(e), n)
              : e.subarray(0, t)
            : e.length < t
              ? (n.set(e, t - e.length), n)
              : e.subarray(-t);
        };
      function u3(e) {
        if (!sx(e))
          throw Error(
            `This method only supports Uint8Array but input was: ${e}`,
          );
      }
      let u6 = function (e, t) {
          return (u3(e), u2(e, t, !1));
        },
        u5 = function (e) {
          u3(e);
          var t = e;
          let r = t[0];
          for (; t.length > 0 && "0" === r.toString(); )
            r = (t = t.slice(1))[0];
          return t;
        },
        u4 = (e) => `0x${e.toString(16)}`;
      function u8(e) {
        return u5(uX(`0x${e.toString(16)}`));
      }
      let u9 = function (e, t, r, n, i) {
        let s =
          t === BigInt(0) || t === BigInt(1)
            ? t
            : void 0 === i
              ? t - BigInt(27)
              : t - (i * BigInt(2) + BigInt(35));
        if (s !== BigInt(0) && s !== BigInt(1))
          throw Error("Invalid signature v value");
        return new uQ.Signature(u0(r), u0(n))
          .addRecoveryBit(Number(s))
          .recoverPublicKey(e)
          .toRawBytes(!1)
          .slice(1);
      };
      function u7(e, t) {
        if (null === e) return null;
        if (void 0 === e) return;
        if ("string" != typeof e || iq(e)) {
          if ("number" == typeof e && !Number.isSafeInteger(e))
            throw Error(
              "The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)",
            );
        } else
          throw Error(
            `A string must be provided with a 0x-prefix, given: ${e}`,
          );
        let r = uX(e);
        switch (t) {
          case L.Uint8Array:
            return r;
          case L.BigInt:
            return u0(r);
          case L.Number: {
            let e = u0(r);
            if (e > BigInt(Number.MAX_SAFE_INTEGER))
              throw Error(
                "The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)",
              );
            return Number(e);
          }
          case L.PrefixedHexString:
            return sP(r);
          default:
            throw Error("unknown outputType");
        }
      }
      var ce = r(9234),
        ct = r(8256);
      let cr = {
          name: "goerli",
          chainId: 5,
          networkId: 5,
          defaultHardfork: "merge",
          consensus: {
            type: "poa",
            algorithm: "clique",
            clique: { period: 15, epoch: 3e4 },
          },
          comment: "Cross-client PoA test network",
          url: "https://github.com/goerli/testnet",
          genesis: {
            timestamp: "0x5c51a607",
            gasLimit: 0xa00000,
            difficulty: 1,
            nonce: "0x0000000000000000",
            extraData:
              "0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          },
          hardforks: [
            { name: "chainstart", block: 0, forkHash: "0xa3f5ab08" },
            { name: "homestead", block: 0, forkHash: "0xa3f5ab08" },
            { name: "tangerineWhistle", block: 0, forkHash: "0xa3f5ab08" },
            { name: "spuriousDragon", block: 0, forkHash: "0xa3f5ab08" },
            { name: "byzantium", block: 0, forkHash: "0xa3f5ab08" },
            { name: "constantinople", block: 0, forkHash: "0xa3f5ab08" },
            { name: "petersburg", block: 0, forkHash: "0xa3f5ab08" },
            { name: "istanbul", block: 1561651, forkHash: "0xc25efa5c" },
            { name: "berlin", block: 4460644, forkHash: "0x757a1c47" },
            { name: "london", block: 5062605, forkHash: "0xb8c6299d" },
            {
              "//_comment":
                "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818",
              name: "merge",
              ttd: "10790000",
              block: 7382819,
              forkHash: "0xb8c6299d",
            },
            { name: "mergeForkIdTransition", block: null, forkHash: null },
            { name: "shanghai", block: null, forkHash: null },
          ],
          bootstrapNodes: [],
          dnsNetworks: [
            "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net",
          ],
        },
        cn = {
          name: "mainnet",
          chainId: 1,
          networkId: 1,
          defaultHardfork: "merge",
          consensus: { type: "pow", algorithm: "ethash", ethash: {} },
          comment: "The Ethereum main chain",
          url: "https://ethstats.net/",
          genesis: {
            gasLimit: 5e3,
            difficulty: 0x400000000,
            nonce: "0x0000000000000042",
            extraData:
              "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa",
          },
          hardforks: [
            { name: "chainstart", block: 0, forkHash: "0xfc64ec04" },
            { name: "homestead", block: 115e4, forkHash: "0x97c2c34c" },
            { name: "dao", block: 192e4, forkHash: "0x91d1f948" },
            { name: "tangerineWhistle", block: 2463e3, forkHash: "0x7a64da13" },
            { name: "spuriousDragon", block: 2675e3, forkHash: "0x3edd5b10" },
            { name: "byzantium", block: 437e4, forkHash: "0xa00bc324" },
            { name: "constantinople", block: 728e4, forkHash: "0x668db0af" },
            { name: "petersburg", block: 728e4, forkHash: "0x668db0af" },
            { name: "istanbul", block: 9069e3, forkHash: "0x879d6e30" },
            { name: "muirGlacier", block: 92e5, forkHash: "0xe029e991" },
            { name: "berlin", block: 12244e3, forkHash: "0x0eb440f6" },
            { name: "london", block: 12965e3, forkHash: "0xb715077d" },
            { name: "arrowGlacier", block: 13773e3, forkHash: "0x20c327fc" },
            { name: "grayGlacier", block: 1505e4, forkHash: "0xf0afd0e3" },
            {
              "//_comment":
                "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393",
              name: "merge",
              ttd: "58750000000000000000000",
              block: 0xed14f2,
              forkHash: "0xf0afd0e3",
            },
            { name: "mergeForkIdTransition", block: null, forkHash: null },
            { name: "shanghai", block: null, forkHash: null },
          ],
          bootstrapNodes: [],
          dnsNetworks: [
            "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net",
          ],
        },
        ci = {
          name: "sepolia",
          chainId: 0xaa36a7,
          networkId: 0xaa36a7,
          defaultHardfork: "merge",
          consensus: { type: "pow", algorithm: "ethash", ethash: {} },
          comment: "PoW test network to replace Ropsten",
          url: "https://github.com/ethereum/go-ethereum/pull/23730",
          genesis: {
            timestamp: "0x6159af19",
            gasLimit: 3e7,
            difficulty: 131072,
            nonce: "0x0000000000000000",
            extraData:
              "0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521",
          },
          hardforks: [
            { name: "chainstart", block: 0, forkHash: "0xfe3366e7" },
            { name: "homestead", block: 0, forkHash: "0xfe3366e7" },
            { name: "tangerineWhistle", block: 0, forkHash: "0xfe3366e7" },
            { name: "spuriousDragon", block: 0, forkHash: "0xfe3366e7" },
            { name: "byzantium", block: 0, forkHash: "0xfe3366e7" },
            { name: "constantinople", block: 0, forkHash: "0xfe3366e7" },
            { name: "petersburg", block: 0, forkHash: "0xfe3366e7" },
            { name: "istanbul", block: 0, forkHash: "0xfe3366e7" },
            { name: "muirGlacier", block: 0, forkHash: "0xfe3366e7" },
            { name: "berlin", block: 0, forkHash: "0xfe3366e7" },
            { name: "london", block: 0, forkHash: "0xfe3366e7" },
            {
              "//_comment":
                "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408",
              name: "merge",
              ttd: "17000000000000000",
              block: 1450409,
              forkHash: "0xfe3366e7",
            },
            {
              name: "mergeForkIdTransition",
              block: 1735371,
              forkHash: "0xb96cbd13",
            },
            {
              name: "shanghai",
              block: null,
              timestamp: "1677557088",
              forkHash: "0xf7f9bc08",
            },
          ],
          bootstrapNodes: [],
          dnsNetworks: [
            "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net",
          ],
        },
        cs = {
          1153: {
            name: "EIP-1153",
            number: 1153,
            comment: "Transient Storage",
            url: "https://eips.ethereum.org/EIPS/eip-1153",
            status: "Review",
            minimumHardfork: "chainstart",
            requiredEIPs: [],
            gasConfig: {},
            gasPrices: {
              tstore: { v: 100, d: "Base fee of the TSTORE opcode" },
              tload: { v: 100, d: "Base fee of the TLOAD opcode" },
            },
            vm: {},
            pow: {},
          },
          1559: {
            name: "EIP-1559",
            number: 1559,
            comment: "Fee market change for ETH 1.0 chain",
            url: "https://eips.ethereum.org/EIPS/eip-1559",
            status: "Final",
            minimumHardfork: "berlin",
            requiredEIPs: [2930],
            gasConfig: {
              baseFeeMaxChangeDenominator: {
                v: 8,
                d: "Maximum base fee change denominator",
              },
              elasticityMultiplier: {
                v: 2,
                d: "Maximum block gas target elasticity",
              },
              initialBaseFee: {
                v: 1e9,
                d: "Initial base fee on first EIP1559 block",
              },
            },
            gasPrices: {},
            vm: {},
            pow: {},
          },
          2315: {
            name: "EIP-2315",
            number: 2315,
            comment: "Simple subroutines for the EVM",
            url: "https://eips.ethereum.org/EIPS/eip-2315",
            status: "Draft",
            minimumHardfork: "istanbul",
            gasConfig: {},
            gasPrices: {
              beginsub: { v: 2, d: "Base fee of the BEGINSUB opcode" },
              returnsub: { v: 5, d: "Base fee of the RETURNSUB opcode" },
              jumpsub: { v: 10, d: "Base fee of the JUMPSUB opcode" },
            },
            vm: {},
            pow: {},
          },
          2537: {
            name: "EIP-2537",
            number: 2537,
            comment: "BLS12-381 precompiles",
            url: "https://eips.ethereum.org/EIPS/eip-2537",
            status: "Draft",
            minimumHardfork: "chainstart",
            gasConfig: {},
            gasPrices: {
              Bls12381G1AddGas: {
                v: 600,
                d: "Gas cost of a single BLS12-381 G1 addition precompile-call",
              },
              Bls12381G1MulGas: {
                v: 12e3,
                d: "Gas cost of a single BLS12-381 G1 multiplication precompile-call",
              },
              Bls12381G2AddGas: {
                v: 4500,
                d: "Gas cost of a single BLS12-381 G2 addition precompile-call",
              },
              Bls12381G2MulGas: {
                v: 55e3,
                d: "Gas cost of a single BLS12-381 G2 multiplication precompile-call",
              },
              Bls12381PairingBaseGas: {
                v: 115e3,
                d: "Base gas cost of BLS12-381 pairing check",
              },
              Bls12381PairingPerPairGas: {
                v: 23e3,
                d: "Per-pair gas cost of BLS12-381 pairing check",
              },
              Bls12381MapG1Gas: {
                v: 5500,
                d: "Gas cost of BLS12-381 map field element to G1",
              },
              Bls12381MapG2Gas: {
                v: 11e4,
                d: "Gas cost of BLS12-381 map field element to G2",
              },
              Bls12381MultiExpGasDiscount: {
                v: [
                  [1, 1200],
                  [2, 888],
                  [3, 764],
                  [4, 641],
                  [5, 594],
                  [6, 547],
                  [7, 500],
                  [8, 453],
                  [9, 438],
                  [10, 423],
                  [11, 408],
                  [12, 394],
                  [13, 379],
                  [14, 364],
                  [15, 349],
                  [16, 334],
                  [17, 330],
                  [18, 326],
                  [19, 322],
                  [20, 318],
                  [21, 314],
                  [22, 310],
                  [23, 306],
                  [24, 302],
                  [25, 298],
                  [26, 294],
                  [27, 289],
                  [28, 285],
                  [29, 281],
                  [30, 277],
                  [31, 273],
                  [32, 269],
                  [33, 268],
                  [34, 266],
                  [35, 265],
                  [36, 263],
                  [37, 262],
                  [38, 260],
                  [39, 259],
                  [40, 257],
                  [41, 256],
                  [42, 254],
                  [43, 253],
                  [44, 251],
                  [45, 250],
                  [46, 248],
                  [47, 247],
                  [48, 245],
                  [49, 244],
                  [50, 242],
                  [51, 241],
                  [52, 239],
                  [53, 238],
                  [54, 236],
                  [55, 235],
                  [56, 233],
                  [57, 232],
                  [58, 231],
                  [59, 229],
                  [60, 228],
                  [61, 226],
                  [62, 225],
                  [63, 223],
                  [64, 222],
                  [65, 221],
                  [66, 220],
                  [67, 219],
                  [68, 219],
                  [69, 218],
                  [70, 217],
                  [71, 216],
                  [72, 216],
                  [73, 215],
                  [74, 214],
                  [75, 213],
                  [76, 213],
                  [77, 212],
                  [78, 211],
                  [79, 211],
                  [80, 210],
                  [81, 209],
                  [82, 208],
                  [83, 208],
                  [84, 207],
                  [85, 206],
                  [86, 205],
                  [87, 205],
                  [88, 204],
                  [89, 203],
                  [90, 202],
                  [91, 202],
                  [92, 201],
                  [93, 200],
                  [94, 199],
                  [95, 199],
                  [96, 198],
                  [97, 197],
                  [98, 196],
                  [99, 196],
                  [100, 195],
                  [101, 194],
                  [102, 193],
                  [103, 193],
                  [104, 192],
                  [105, 191],
                  [106, 191],
                  [107, 190],
                  [108, 189],
                  [109, 188],
                  [110, 188],
                  [111, 187],
                  [112, 186],
                  [113, 185],
                  [114, 185],
                  [115, 184],
                  [116, 183],
                  [117, 182],
                  [118, 182],
                  [119, 181],
                  [120, 180],
                  [121, 179],
                  [122, 179],
                  [123, 178],
                  [124, 177],
                  [125, 176],
                  [126, 176],
                  [127, 175],
                  [128, 174],
                ],
                d: "Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair",
              },
            },
            vm: {},
            pow: {},
          },
          2565: {
            name: "EIP-2565",
            number: 2565,
            comment: "ModExp gas cost",
            url: "https://eips.ethereum.org/EIPS/eip-2565",
            status: "Final",
            minimumHardfork: "byzantium",
            gasConfig: {},
            gasPrices: {
              modexpGquaddivisor: {
                v: 3,
                d: "Gquaddivisor from modexp precompile for gas calculation",
              },
            },
            vm: {},
            pow: {},
          },
          2718: {
            name: "EIP-2718",
            comment: "Typed Transaction Envelope",
            url: "https://eips.ethereum.org/EIPS/eip-2718",
            status: "Final",
            minimumHardfork: "chainstart",
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          2929: {
            name: "EIP-2929",
            comment: "Gas cost increases for state access opcodes",
            url: "https://eips.ethereum.org/EIPS/eip-2929",
            status: "Final",
            minimumHardfork: "chainstart",
            gasConfig: {},
            gasPrices: {
              coldsload: {
                v: 2100,
                d: "Gas cost of the first read of storage from a given location (per transaction)",
              },
              coldaccountaccess: {
                v: 2600,
                d: "Gas cost of the first read of a given address (per transaction)",
              },
              warmstorageread: {
                v: 100,
                d: "Gas cost of reading storage locations which have already loaded 'cold'",
              },
              sstoreCleanGasEIP2200: {
                v: 2900,
                d: "Once per SSTORE operation from clean non-zero to something else",
              },
              sstoreNoopGasEIP2200: {
                v: 100,
                d: "Once per SSTORE operation if the value doesn't change",
              },
              sstoreDirtyGasEIP2200: {
                v: 100,
                d: "Once per SSTORE operation if a dirty value is changed",
              },
              sstoreInitRefundEIP2200: {
                v: 19900,
                d: "Once per SSTORE operation for resetting to the original zero value",
              },
              sstoreCleanRefundEIP2200: {
                v: 4900,
                d: "Once per SSTORE operation for resetting to the original non-zero value",
              },
              call: { v: 0, d: "Base fee of the CALL opcode" },
              callcode: { v: 0, d: "Base fee of the CALLCODE opcode" },
              delegatecall: { v: 0, d: "Base fee of the DELEGATECALL opcode" },
              staticcall: { v: 0, d: "Base fee of the STATICCALL opcode" },
              balance: { v: 0, d: "Base fee of the BALANCE opcode" },
              extcodesize: { v: 0, d: "Base fee of the EXTCODESIZE opcode" },
              extcodecopy: { v: 0, d: "Base fee of the EXTCODECOPY opcode" },
              extcodehash: { v: 0, d: "Base fee of the EXTCODEHASH opcode" },
              sload: { v: 0, d: "Base fee of the SLOAD opcode" },
              sstore: { v: 0, d: "Base fee of the SSTORE opcode" },
            },
            vm: {},
            pow: {},
          },
          2930: {
            name: "EIP-2930",
            comment: "Optional access lists",
            url: "https://eips.ethereum.org/EIPS/eip-2930",
            status: "Final",
            minimumHardfork: "istanbul",
            requiredEIPs: [2718, 2929],
            gasConfig: {},
            gasPrices: {
              accessListStorageKeyCost: {
                v: 1900,
                d: "Gas cost per storage key in an Access List transaction",
              },
              accessListAddressCost: {
                v: 2400,
                d: "Gas cost per storage key in an Access List transaction",
              },
            },
            vm: {},
            pow: {},
          },
          3198: {
            name: "EIP-3198",
            number: 3198,
            comment: "BASEFEE opcode",
            url: "https://eips.ethereum.org/EIPS/eip-3198",
            status: "Final",
            minimumHardfork: "london",
            gasConfig: {},
            gasPrices: {
              basefee: { v: 2, d: "Gas cost of the BASEFEE opcode" },
            },
            vm: {},
            pow: {},
          },
          3529: {
            name: "EIP-3529",
            comment: "Reduction in refunds",
            url: "https://eips.ethereum.org/EIPS/eip-3529",
            status: "Final",
            minimumHardfork: "berlin",
            requiredEIPs: [2929],
            gasConfig: {
              maxRefundQuotient: {
                v: 5,
                d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)",
              },
            },
            gasPrices: {
              selfdestructRefund: {
                v: 0,
                d: "Refunded following a selfdestruct operation",
              },
              sstoreClearRefundEIP2200: {
                v: 4800,
                d: "Once per SSTORE operation for clearing an originally existing storage slot",
              },
            },
            vm: {},
            pow: {},
          },
          3540: {
            name: "EIP-3540",
            number: 3540,
            comment: "EVM Object Format (EOF) v1",
            url: "https://eips.ethereum.org/EIPS/eip-3540",
            status: "Review",
            minimumHardfork: "london",
            requiredEIPs: [3541],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          3541: {
            name: "EIP-3541",
            comment: "Reject new contracts starting with the 0xEF byte",
            url: "https://eips.ethereum.org/EIPS/eip-3541",
            status: "Final",
            minimumHardfork: "berlin",
            requiredEIPs: [],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          3554: {
            name: "EIP-3554",
            comment: "Reduction in refunds",
            url: "Difficulty Bomb Delay to December 1st 2021",
            status: "Final",
            minimumHardfork: "muirGlacier",
            requiredEIPs: [],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {
              difficultyBombDelay: {
                v: 95e5,
                d: "the amount of blocks to delay the difficulty bomb with",
              },
            },
          },
          3607: {
            name: "EIP-3607",
            number: 3607,
            comment: "Reject transactions from senders with deployed code",
            url: "https://eips.ethereum.org/EIPS/eip-3607",
            status: "Final",
            minimumHardfork: "chainstart",
            requiredEIPs: [],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          3651: {
            name: "EIP-3651",
            number: 3198,
            comment: "Warm COINBASE",
            url: "https://eips.ethereum.org/EIPS/eip-3651",
            status: "Review",
            minimumHardfork: "london",
            requiredEIPs: [2929],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          3670: {
            name: "EIP-3670",
            number: 3670,
            comment: "EOF - Code Validation",
            url: "https://eips.ethereum.org/EIPS/eip-3670",
            status: "Review",
            minimumHardfork: "london",
            requiredEIPs: [3540],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          3675: {
            name: "EIP-3675",
            number: 3675,
            comment: "Upgrade consensus to Proof-of-Stake",
            url: "https://eips.ethereum.org/EIPS/eip-3675",
            status: "Final",
            minimumHardfork: "london",
            requiredEIPs: [],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          3855: {
            name: "EIP-3855",
            number: 3855,
            comment: "PUSH0 instruction",
            url: "https://eips.ethereum.org/EIPS/eip-3855",
            status: "Review",
            minimumHardfork: "chainstart",
            requiredEIPs: [],
            gasConfig: {},
            gasPrices: { push0: { v: 2, d: "Base fee of the PUSH0 opcode" } },
            vm: {},
            pow: {},
          },
          3860: {
            name: "EIP-3860",
            number: 3860,
            comment: "Limit and meter initcode",
            url: "https://eips.ethereum.org/EIPS/eip-3860",
            status: "Review",
            minimumHardfork: "spuriousDragon",
            requiredEIPs: [],
            gasConfig: {},
            gasPrices: {
              initCodeWordCost: {
                v: 2,
                d: "Gas to pay for each word (32 bytes) of initcode when creating a contract",
              },
            },
            vm: {
              maxInitCodeSize: {
                v: 49152,
                d: "Maximum length of initialization code when creating a contract",
              },
            },
            pow: {},
          },
          4345: {
            name: "EIP-4345",
            number: 4345,
            comment: "Difficulty Bomb Delay to June 2022",
            url: "https://eips.ethereum.org/EIPS/eip-4345",
            status: "Final",
            minimumHardfork: "london",
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {
              difficultyBombDelay: {
                v: 107e5,
                d: "the amount of blocks to delay the difficulty bomb with",
              },
            },
          },
          4399: {
            name: "EIP-4399",
            number: 4399,
            comment: "Supplant DIFFICULTY opcode with PREVRANDAO",
            url: "https://eips.ethereum.org/EIPS/eip-4399",
            status: "Review",
            minimumHardfork: "london",
            requiredEIPs: [],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          5133: {
            name: "EIP-5133",
            number: 5133,
            comment: "Delaying Difficulty Bomb to mid-September 2022",
            url: "https://eips.ethereum.org/EIPS/eip-5133",
            status: "Draft",
            minimumHardfork: "grayGlacier",
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {
              difficultyBombDelay: {
                v: 114e5,
                d: "the amount of blocks to delay the difficulty bomb with",
              },
            },
          },
        },
        ca = {
          chainstart: {
            name: "chainstart",
            comment: "Start of the Ethereum main chain",
            url: "",
            status: "",
            gasConfig: {
              minGasLimit: { v: 5e3, d: "Minimum the gas limit may ever be" },
              gasLimitBoundDivisor: {
                v: 1024,
                d: "The bound divisor of the gas limit, used in update calculations",
              },
              maxRefundQuotient: {
                v: 2,
                d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)",
              },
            },
            gasPrices: {
              base: {
                v: 2,
                d: "Gas base cost, used e.g. for ChainID opcode (Istanbul)",
              },
              tierStep: {
                v: [0, 2, 3, 5, 8, 10, 20],
                d: "Once per operation, for a selection of them",
              },
              exp: { v: 10, d: "Base fee of the EXP opcode" },
              expByte: {
                v: 10,
                d: "Times ceil(log256(exponent)) for the EXP instruction",
              },
              sha3: { v: 30, d: "Base fee of the SHA3 opcode" },
              sha3Word: {
                v: 6,
                d: "Once per word of the SHA3 operation's data",
              },
              sload: { v: 50, d: "Base fee of the SLOAD opcode" },
              sstoreSet: {
                v: 2e4,
                d: "Once per SSTORE operation if the zeroness changes from zero",
              },
              sstoreReset: {
                v: 5e3,
                d: "Once per SSTORE operation if the zeroness does not change from zero",
              },
              sstoreRefund: {
                v: 15e3,
                d: "Once per SSTORE operation if the zeroness changes to zero",
              },
              jumpdest: { v: 1, d: "Base fee of the JUMPDEST opcode" },
              log: { v: 375, d: "Base fee of the LOG opcode" },
              logData: { v: 8, d: "Per byte in a LOG* operation's data" },
              logTopic: {
                v: 375,
                d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas",
              },
              create: { v: 32e3, d: "Base fee of the CREATE opcode" },
              call: { v: 40, d: "Base fee of the CALL opcode" },
              callStipend: {
                v: 2300,
                d: "Free gas given at beginning of call",
              },
              callValueTransfer: {
                v: 9e3,
                d: "Paid for CALL when the value transfor is non-zero",
              },
              callNewAccount: {
                v: 25e3,
                d: "Paid for CALL when the destination address didn't exist prior",
              },
              selfdestructRefund: {
                v: 24e3,
                d: "Refunded following a selfdestruct operation",
              },
              memory: {
                v: 3,
                d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL",
              },
              quadCoeffDiv: {
                v: 512,
                d: "Divisor for the quadratic particle of the memory cost equation",
              },
              createData: { v: 200, d: "" },
              tx: {
                v: 21e3,
                d: "Per transaction. NOTE: Not payable on data of calls between transactions",
              },
              txCreation: {
                v: 32e3,
                d: "The cost of creating a contract via tx",
              },
              txDataZero: {
                v: 4,
                d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions",
              },
              txDataNonZero: {
                v: 68,
                d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions",
              },
              copy: {
                v: 3,
                d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added",
              },
              ecRecover: { v: 3e3, d: "" },
              sha256: { v: 60, d: "" },
              sha256Word: { v: 12, d: "" },
              ripemd160: { v: 600, d: "" },
              ripemd160Word: { v: 120, d: "" },
              identity: { v: 15, d: "" },
              identityWord: { v: 3, d: "" },
              stop: { v: 0, d: "Base fee of the STOP opcode" },
              add: { v: 3, d: "Base fee of the ADD opcode" },
              mul: { v: 5, d: "Base fee of the MUL opcode" },
              sub: { v: 3, d: "Base fee of the SUB opcode" },
              div: { v: 5, d: "Base fee of the DIV opcode" },
              sdiv: { v: 5, d: "Base fee of the SDIV opcode" },
              mod: { v: 5, d: "Base fee of the MOD opcode" },
              smod: { v: 5, d: "Base fee of the SMOD opcode" },
              addmod: { v: 8, d: "Base fee of the ADDMOD opcode" },
              mulmod: { v: 8, d: "Base fee of the MULMOD opcode" },
              signextend: { v: 5, d: "Base fee of the SIGNEXTEND opcode" },
              lt: { v: 3, d: "Base fee of the LT opcode" },
              gt: { v: 3, d: "Base fee of the GT opcode" },
              slt: { v: 3, d: "Base fee of the SLT opcode" },
              sgt: { v: 3, d: "Base fee of the SGT opcode" },
              eq: { v: 3, d: "Base fee of the EQ opcode" },
              iszero: { v: 3, d: "Base fee of the ISZERO opcode" },
              and: { v: 3, d: "Base fee of the AND opcode" },
              or: { v: 3, d: "Base fee of the OR opcode" },
              xor: { v: 3, d: "Base fee of the XOR opcode" },
              not: { v: 3, d: "Base fee of the NOT opcode" },
              byte: { v: 3, d: "Base fee of the BYTE opcode" },
              address: { v: 2, d: "Base fee of the ADDRESS opcode" },
              balance: { v: 20, d: "Base fee of the BALANCE opcode" },
              origin: { v: 2, d: "Base fee of the ORIGIN opcode" },
              caller: { v: 2, d: "Base fee of the CALLER opcode" },
              callvalue: { v: 2, d: "Base fee of the CALLVALUE opcode" },
              calldataload: { v: 3, d: "Base fee of the CALLDATALOAD opcode" },
              calldatasize: { v: 2, d: "Base fee of the CALLDATASIZE opcode" },
              calldatacopy: { v: 3, d: "Base fee of the CALLDATACOPY opcode" },
              codesize: { v: 2, d: "Base fee of the CODESIZE opcode" },
              codecopy: { v: 3, d: "Base fee of the CODECOPY opcode" },
              gasprice: { v: 2, d: "Base fee of the GASPRICE opcode" },
              extcodesize: { v: 20, d: "Base fee of the EXTCODESIZE opcode" },
              extcodecopy: { v: 20, d: "Base fee of the EXTCODECOPY opcode" },
              blockhash: { v: 20, d: "Base fee of the BLOCKHASH opcode" },
              coinbase: { v: 2, d: "Base fee of the COINBASE opcode" },
              timestamp: { v: 2, d: "Base fee of the TIMESTAMP opcode" },
              number: { v: 2, d: "Base fee of the NUMBER opcode" },
              difficulty: { v: 2, d: "Base fee of the DIFFICULTY opcode" },
              gaslimit: { v: 2, d: "Base fee of the GASLIMIT opcode" },
              pop: { v: 2, d: "Base fee of the POP opcode" },
              mload: { v: 3, d: "Base fee of the MLOAD opcode" },
              mstore: { v: 3, d: "Base fee of the MSTORE opcode" },
              mstore8: { v: 3, d: "Base fee of the MSTORE8 opcode" },
              sstore: { v: 0, d: "Base fee of the SSTORE opcode" },
              jump: { v: 8, d: "Base fee of the JUMP opcode" },
              jumpi: { v: 10, d: "Base fee of the JUMPI opcode" },
              pc: { v: 2, d: "Base fee of the PC opcode" },
              msize: { v: 2, d: "Base fee of the MSIZE opcode" },
              gas: { v: 2, d: "Base fee of the GAS opcode" },
              push: { v: 3, d: "Base fee of the PUSH opcode" },
              dup: { v: 3, d: "Base fee of the DUP opcode" },
              swap: { v: 3, d: "Base fee of the SWAP opcode" },
              callcode: { v: 40, d: "Base fee of the CALLCODE opcode" },
              return: { v: 0, d: "Base fee of the RETURN opcode" },
              invalid: { v: 0, d: "Base fee of the INVALID opcode" },
              selfdestruct: { v: 0, d: "Base fee of the SELFDESTRUCT opcode" },
            },
            vm: {
              stackLimit: { v: 1024, d: "Maximum size of VM stack allowed" },
              callCreateDepth: {
                v: 1024,
                d: "Maximum depth of call/create stack",
              },
              maxExtraDataSize: {
                v: 32,
                d: "Maximum size extra data may be after Genesis",
              },
            },
            pow: {
              minimumDifficulty: {
                v: 131072,
                d: "The minimum that the difficulty may ever be",
              },
              difficultyBoundDivisor: {
                v: 2048,
                d: "The bound divisor of the difficulty, used in the update calculations",
              },
              durationLimit: {
                v: 13,
                d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not",
              },
              epochDuration: {
                v: 3e4,
                d: "Duration between proof-of-work epochs",
              },
              timebombPeriod: {
                v: 1e5,
                d: "Exponential difficulty timebomb period",
              },
              minerReward: {
                v: "5000000000000000000",
                d: "the amount a miner get rewarded for mining a block",
              },
              difficultyBombDelay: {
                v: 0,
                d: "the amount of blocks to delay the difficulty bomb with",
              },
            },
          },
          homestead: {
            name: "homestead",
            comment: "Homestead hardfork with protocol and network changes",
            url: "https://eips.ethereum.org/EIPS/eip-606",
            status: "Final",
            gasConfig: {},
            gasPrices: {
              delegatecall: { v: 40, d: "Base fee of the DELEGATECALL opcode" },
            },
            vm: {},
            pow: {},
          },
          dao: {
            name: "dao",
            comment: "DAO rescue hardfork",
            url: "https://eips.ethereum.org/EIPS/eip-779",
            status: "Final",
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          tangerineWhistle: {
            name: "tangerineWhistle",
            comment: "Hardfork with gas cost changes for IO-heavy operations",
            url: "https://eips.ethereum.org/EIPS/eip-608",
            status: "Final",
            gasConfig: {},
            gasPrices: {
              sload: { v: 200, d: "Once per SLOAD operation" },
              call: {
                v: 700,
                d: "Once per CALL operation & message call transaction",
              },
              extcodesize: { v: 700, d: "Base fee of the EXTCODESIZE opcode" },
              extcodecopy: { v: 700, d: "Base fee of the EXTCODECOPY opcode" },
              balance: { v: 400, d: "Base fee of the BALANCE opcode" },
              delegatecall: {
                v: 700,
                d: "Base fee of the DELEGATECALL opcode",
              },
              callcode: { v: 700, d: "Base fee of the CALLCODE opcode" },
              selfdestruct: {
                v: 5e3,
                d: "Base fee of the SELFDESTRUCT opcode",
              },
            },
            vm: {},
            pow: {},
          },
          spuriousDragon: {
            name: "spuriousDragon",
            comment:
              "HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit",
            url: "https://eips.ethereum.org/EIPS/eip-607",
            status: "Final",
            gasConfig: {},
            gasPrices: {
              expByte: {
                v: 50,
                d: "Times ceil(log256(exponent)) for the EXP instruction",
              },
            },
            vm: {
              maxCodeSize: { v: 24576, d: "Maximum length of contract code" },
            },
            pow: {},
          },
          byzantium: {
            name: "byzantium",
            comment:
              "Hardfork with new precompiles, instructions and other protocol changes",
            url: "https://eips.ethereum.org/EIPS/eip-609",
            status: "Final",
            gasConfig: {},
            gasPrices: {
              modexpGquaddivisor: {
                v: 20,
                d: "Gquaddivisor from modexp precompile for gas calculation",
              },
              ecAdd: { v: 500, d: "Gas costs for curve addition precompile" },
              ecMul: {
                v: 4e4,
                d: "Gas costs for curve multiplication precompile",
              },
              ecPairing: {
                v: 1e5,
                d: "Base gas costs for curve pairing precompile",
              },
              ecPairingWord: {
                v: 8e4,
                d: "Gas costs regarding curve pairing precompile input length",
              },
              revert: { v: 0, d: "Base fee of the REVERT opcode" },
              staticcall: { v: 700, d: "Base fee of the STATICCALL opcode" },
              returndatasize: {
                v: 2,
                d: "Base fee of the RETURNDATASIZE opcode",
              },
              returndatacopy: {
                v: 3,
                d: "Base fee of the RETURNDATACOPY opcode",
              },
            },
            vm: {},
            pow: {
              minerReward: {
                v: "3000000000000000000",
                d: "the amount a miner get rewarded for mining a block",
              },
              difficultyBombDelay: {
                v: 3e6,
                d: "the amount of blocks to delay the difficulty bomb with",
              },
            },
          },
          constantinople: {
            name: "constantinople",
            comment:
              "Postponed hardfork including EIP-1283 (SSTORE gas metering changes)",
            url: "https://eips.ethereum.org/EIPS/eip-1013",
            status: "Final",
            gasConfig: {},
            gasPrices: {
              netSstoreNoopGas: {
                v: 200,
                d: "Once per SSTORE operation if the value doesn't change",
              },
              netSstoreInitGas: {
                v: 2e4,
                d: "Once per SSTORE operation from clean zero",
              },
              netSstoreCleanGas: {
                v: 5e3,
                d: "Once per SSTORE operation from clean non-zero",
              },
              netSstoreDirtyGas: {
                v: 200,
                d: "Once per SSTORE operation from dirty",
              },
              netSstoreClearRefund: {
                v: 15e3,
                d: "Once per SSTORE operation for clearing an originally existing storage slot",
              },
              netSstoreResetRefund: {
                v: 4800,
                d: "Once per SSTORE operation for resetting to the original non-zero value",
              },
              netSstoreResetClearRefund: {
                v: 19800,
                d: "Once per SSTORE operation for resetting to the original zero value",
              },
              shl: { v: 3, d: "Base fee of the SHL opcode" },
              shr: { v: 3, d: "Base fee of the SHR opcode" },
              sar: { v: 3, d: "Base fee of the SAR opcode" },
              extcodehash: { v: 400, d: "Base fee of the EXTCODEHASH opcode" },
              create2: { v: 32e3, d: "Base fee of the CREATE2 opcode" },
            },
            vm: {},
            pow: {
              minerReward: {
                v: "2000000000000000000",
                d: "The amount a miner gets rewarded for mining a block",
              },
              difficultyBombDelay: {
                v: 5e6,
                d: "the amount of blocks to delay the difficulty bomb with",
              },
            },
          },
          petersburg: {
            name: "petersburg",
            comment:
              "Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople",
            url: "https://eips.ethereum.org/EIPS/eip-1716",
            status: "Final",
            gasConfig: {},
            gasPrices: {
              netSstoreNoopGas: { v: null, d: "Removed along EIP-1283" },
              netSstoreInitGas: { v: null, d: "Removed along EIP-1283" },
              netSstoreCleanGas: { v: null, d: "Removed along EIP-1283" },
              netSstoreDirtyGas: { v: null, d: "Removed along EIP-1283" },
              netSstoreClearRefund: { v: null, d: "Removed along EIP-1283" },
              netSstoreResetRefund: { v: null, d: "Removed along EIP-1283" },
              netSstoreResetClearRefund: {
                v: null,
                d: "Removed along EIP-1283",
              },
            },
            vm: {},
            pow: {},
          },
          istanbul: {
            name: "istanbul",
            comment:
              "HF targeted for December 2019 following the Constantinople/Petersburg HF",
            url: "https://eips.ethereum.org/EIPS/eip-1679",
            status: "Final",
            gasConfig: {},
            gasPrices: {
              blake2Round: {
                v: 1,
                d: "Gas cost per round for the Blake2 F precompile",
              },
              ecAdd: { v: 150, d: "Gas costs for curve addition precompile" },
              ecMul: {
                v: 6e3,
                d: "Gas costs for curve multiplication precompile",
              },
              ecPairing: {
                v: 45e3,
                d: "Base gas costs for curve pairing precompile",
              },
              ecPairingWord: {
                v: 34e3,
                d: "Gas costs regarding curve pairing precompile input length",
              },
              txDataNonZero: {
                v: 16,
                d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions",
              },
              sstoreSentryGasEIP2200: {
                v: 2300,
                d: "Minimum gas required to be present for an SSTORE call, not consumed",
              },
              sstoreNoopGasEIP2200: {
                v: 800,
                d: "Once per SSTORE operation if the value doesn't change",
              },
              sstoreDirtyGasEIP2200: {
                v: 800,
                d: "Once per SSTORE operation if a dirty value is changed",
              },
              sstoreInitGasEIP2200: {
                v: 2e4,
                d: "Once per SSTORE operation from clean zero to non-zero",
              },
              sstoreInitRefundEIP2200: {
                v: 19200,
                d: "Once per SSTORE operation for resetting to the original zero value",
              },
              sstoreCleanGasEIP2200: {
                v: 5e3,
                d: "Once per SSTORE operation from clean non-zero to something else",
              },
              sstoreCleanRefundEIP2200: {
                v: 4200,
                d: "Once per SSTORE operation for resetting to the original non-zero value",
              },
              sstoreClearRefundEIP2200: {
                v: 15e3,
                d: "Once per SSTORE operation for clearing an originally existing storage slot",
              },
              balance: { v: 700, d: "Base fee of the BALANCE opcode" },
              extcodehash: { v: 700, d: "Base fee of the EXTCODEHASH opcode" },
              chainid: { v: 2, d: "Base fee of the CHAINID opcode" },
              selfbalance: { v: 5, d: "Base fee of the SELFBALANCE opcode" },
              sload: { v: 800, d: "Base fee of the SLOAD opcode" },
            },
            vm: {},
            pow: {},
          },
          muirGlacier: {
            name: "muirGlacier",
            comment: "HF to delay the difficulty bomb",
            url: "https://eips.ethereum.org/EIPS/eip-2384",
            status: "Final",
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {
              difficultyBombDelay: {
                v: 9e6,
                d: "the amount of blocks to delay the difficulty bomb with",
              },
            },
          },
          berlin: {
            name: "berlin",
            comment: "HF targeted for July 2020 following the Muir Glacier HF",
            url: "https://eips.ethereum.org/EIPS/eip-2070",
            status: "Final",
            eips: [2565, 2929, 2718, 2930],
          },
          london: {
            name: "london",
            comment: "HF targeted for July 2021 following the Berlin fork",
            url: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md",
            status: "Final",
            eips: [1559, 3198, 3529, 3541],
          },
          shanghai: {
            name: "shanghai",
            comment:
              "Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode",
            url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md",
            status: "Final",
            eips: [3651, 3855, 3860, 4895],
          },
          arrowGlacier: {
            name: "arrowGlacier",
            comment: "HF to delay the difficulty bomb",
            url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md",
            status: "Final",
            eips: [4345],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          grayGlacier: {
            name: "grayGlacier",
            comment: "Delaying the difficulty bomb to Mid September 2022",
            url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md",
            status: "Draft",
            eips: [5133],
            gasConfig: {},
            gasPrices: {},
            vm: {},
            pow: {},
          },
          mergeForkIdTransition: {
            name: "mergeForkIdTransition",
            comment: "Pre-merge hardfork to fork off non-upgraded clients",
            url: "https://eips.ethereum.org/EIPS/eip-3675",
            status: "Draft",
            eips: [],
          },
          merge: {
            name: "merge",
            comment:
              "Hardfork to upgrade the consensus mechanism to Proof-of-Stake",
            url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md",
            status: "Final",
            consensus: { type: "pos", algorithm: "casper", casper: {} },
            eips: [3675, 4399],
          },
        },
        { buf: co } = ct;
      class cu extends s2 {
        static custom(e, t = {}) {
          var r;
          let n = null != (r = t.baseChain) ? r : "mainnet",
            i = Object.assign({}, cu._getChainParams(n));
          if (((i.name = "custom-chain"), "string" != typeof e))
            return new cu(
              Object.assign(
                { chain: Object.assign(Object.assign({}, i), e) },
                t,
              ),
            );
          if (e === F.PolygonMainnet)
            return cu.custom(
              { name: F.PolygonMainnet, chainId: 137, networkId: 137 },
              t,
            );
          if (e === F.PolygonMumbai)
            return cu.custom(
              { name: F.PolygonMumbai, chainId: 80001, networkId: 80001 },
              t,
            );
          if (e === F.ArbitrumRinkebyTestnet)
            return cu.custom(
              {
                name: F.ArbitrumRinkebyTestnet,
                chainId: 421611,
                networkId: 421611,
              },
              t,
            );
          if (e === F.ArbitrumOne)
            return cu.custom(
              { name: F.ArbitrumOne, chainId: 42161, networkId: 42161 },
              t,
            );
          if (e === F.xDaiChain)
            return cu.custom(
              { name: F.xDaiChain, chainId: 100, networkId: 100 },
              t,
            );
          if (e === F.OptimisticKovan)
            return cu.custom(
              { name: F.OptimisticKovan, chainId: 69, networkId: 69 },
              Object.assign({ hardfork: N.Berlin }, t),
            );
          if (e === F.OptimisticEthereum)
            return cu.custom(
              { name: F.OptimisticEthereum, chainId: 10, networkId: 10 },
              Object.assign({ hardfork: N.Berlin }, t),
            );
          throw Error(`Custom chain ${e} not supported`);
        }
        static fromGethGenesis(
          e,
          {
            chain: t,
            eips: r,
            genesisHash: n,
            hardfork: i,
            mergeForkIdPostMerge: s,
          },
        ) {
          var a;
          let o = (function (e, t, r) {
              try {
                if (
                  ["config", "difficulty", "gasLimit", "alloc"].some(
                    (t) => !(t in e),
                  )
                )
                  throw Error(
                    "Invalid format, expected geth genesis fields missing",
                  );
                return (
                  void 0 !== t && (e.name = t),
                  (function (e, t = !0) {
                    var r, n, i;
                    let {
                        name: s,
                        config: a,
                        difficulty: o,
                        mixHash: u,
                        gasLimit: c,
                        coinbase: l,
                        baseFeePerGas: d,
                      } = e,
                      { extraData: h, timestamp: f, nonce: p } = e,
                      m = Number(f),
                      { chainId: g } = a;
                    if (
                      ("" === h && (h = "0x"),
                      iZ(f) || (f = uW(parseInt(f))),
                      18 !== p.length &&
                        (p =
                          (i = p) && "0x0" !== i
                            ? iZ(i)
                              ? `0x${uJ(i).padStart(16, "0")}`
                              : `0x${i.padStart(16, "0")}`
                            : "0x0000000000000000"),
                      a.eip155Block !== a.eip158Block)
                    )
                      throw Error(
                        "EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork",
                      );
                    let y = {
                        name: s,
                        chainId: g,
                        networkId: g,
                        genesis: {
                          timestamp: f,
                          gasLimit: parseInt(c),
                          difficulty: parseInt(o),
                          nonce: p,
                          extraData: h,
                          mixHash: u,
                          coinbase: l,
                          baseFeePerGas: d,
                        },
                        hardfork: void 0,
                        hardforks: [],
                        bootstrapNodes: [],
                        consensus:
                          void 0 !== a.clique
                            ? {
                                type: "poa",
                                algorithm: "clique",
                                clique: {
                                  period:
                                    null != (r = a.clique.period)
                                      ? r
                                      : a.clique.blockperiodseconds,
                                  epoch:
                                    null != (n = a.clique.epoch)
                                      ? n
                                      : a.clique.epochlength,
                                },
                              }
                            : { type: "pow", algorithm: "ethash", ethash: {} },
                      },
                      v = {
                        [N.Homestead]: { name: "homesteadBlock" },
                        [N.Dao]: { name: "daoForkBlock" },
                        [N.TangerineWhistle]: { name: "eip150Block" },
                        [N.SpuriousDragon]: { name: "eip155Block" },
                        [N.Byzantium]: { name: "byzantiumBlock" },
                        [N.Constantinople]: { name: "constantinopleBlock" },
                        [N.Petersburg]: { name: "petersburgBlock" },
                        [N.Istanbul]: { name: "istanbulBlock" },
                        [N.MuirGlacier]: { name: "muirGlacierBlock" },
                        [N.Berlin]: { name: "berlinBlock" },
                        [N.London]: { name: "londonBlock" },
                        [N.MergeForkIdTransition]: {
                          name: "mergeForkBlock",
                          postMerge: t,
                        },
                        [N.Shanghai]: {
                          name: "shanghaiTime",
                          postMerge: !0,
                          isTimestamp: !0,
                        },
                        [N.ShardingForkDev]: {
                          name: "shardingForkTime",
                          postMerge: !0,
                          isTimestamp: !0,
                        },
                      },
                      b = Object.keys(v).reduce(
                        (e, t) => ((e[v[t].name] = t), e),
                        {},
                      );
                    if (
                      ((y.hardforks = Object.keys(a)
                        .filter(
                          (e) =>
                            void 0 !== b[e] && void 0 !== a[e] && null !== a[e],
                        )
                        .map((e) => ({
                          name: b[e],
                          block:
                            !0 === v[b[e]].isTimestamp ||
                            "number" != typeof a[e]
                              ? null
                              : a[e],
                          timestamp:
                            !0 === v[b[e]].isTimestamp &&
                            "number" == typeof a[e]
                              ? a[e]
                              : void 0,
                        }))
                        .filter(
                          (e) => null !== e.block || void 0 !== e.timestamp,
                        )),
                      y.hardforks.sort((e, t) => {
                        var r, n;
                        return (
                          (null != (r = e.block) ? r : 1 / 0) -
                          (null != (n = t.block) ? n : 1 / 0)
                        );
                      }),
                      y.hardforks.sort((e, t) => {
                        var r, n;
                        return (
                          (null != (r = e.timestamp) ? r : m) -
                          (null != (n = t.timestamp) ? n : m)
                        );
                      }),
                      void 0 !== a.terminalTotalDifficulty)
                    ) {
                      let e = {
                          name: N.Merge,
                          ttd: a.terminalTotalDifficulty,
                          block: null,
                        },
                        t = y.hardforks.findIndex((e) => {
                          var t;
                          return (
                            (null == (t = v[e.name]) ? void 0 : t.postMerge) ===
                            !0
                          );
                        });
                      -1 !== t
                        ? y.hardforks.splice(t, 0, e)
                        : y.hardforks.push(e);
                    }
                    let A =
                      y.hardforks.length > 0
                        ? y.hardforks.slice(-1)[0]
                        : void 0;
                    return (
                      (y.hardfork = null == A ? void 0 : A.name),
                      y.hardforks.unshift({ name: N.Chainstart, block: 0 }),
                      y
                    );
                  })(e, r)
                );
              } catch (e) {
                throw Error(`Error parsing parameters file: ${e.message}`);
              }
            })(e, t, s),
            u = new cu({
              chain: null != (a = o.name) ? a : "custom",
              customChains: [o],
              eips: r,
              hardfork: null != i ? i : o.hardfork,
            });
          return (void 0 !== n && u.setForkHashes(n), u);
        }
        static isSupportedChainId(e) {
          return !!this._getInitializedChains().names[e.toString()];
        }
        static _getChainParams(e, t) {
          let r = e,
            n = this._getInitializedChains(t);
          if ("number" == typeof r || "bigint" == typeof r) {
            if (((r = r.toString()), n.names[r])) {
              let e = n.names[r];
              return n[e];
            }
            throw Error(`Chain with ID ${r} not supported`);
          }
          if (void 0 !== n[r]) return n[r];
          throw Error(`Chain with name ${r} not supported`);
        }
        constructor(e) {
          var t, r;
          (super(),
            (this._eips = []),
            (this._customChains = null != (t = e.customChains) ? t : []),
            (this._chainParams = this.setChain(e.chain)),
            (this.DEFAULT_HARDFORK =
              null != (r = this._chainParams.defaultHardfork) ? r : N.Merge),
            (this.HARDFORK_CHANGES = this.hardforks().map((e) => [
              e.name,
              ca[e.name],
            ])),
            (this._hardfork = this.DEFAULT_HARDFORK),
            void 0 !== e.hardfork && this.setHardfork(e.hardfork),
            e.eips && this.setEIPs(e.eips));
        }
        setChain(e) {
          if (
            "number" == typeof e ||
            "bigint" == typeof e ||
            "string" == typeof e
          )
            this._chainParams = cu._getChainParams(e, this._customChains);
          else if ("object" == typeof e) {
            if (this._customChains.length > 0)
              throw Error(
                "Chain must be a string, number, or bigint when initialized with customChains passed in",
              );
            for (let t of [
              "networkId",
              "genesis",
              "hardforks",
              "bootstrapNodes",
            ])
              if (!(t in e))
                throw Error(`Missing required chain parameter: ${t}`);
            this._chainParams = e;
          } else throw Error("Wrong input format");
          for (let e of this.hardforks())
            if (void 0 === e.block)
              throw Error("Hardfork cannot have undefined block number");
          return this._chainParams;
        }
        setHardfork(e) {
          let t = !1;
          for (let r of this.HARDFORK_CHANGES)
            r[0] === e &&
              (this._hardfork !== e &&
                ((this._hardfork = e), this.emit("hardforkChanged", e)),
              (t = !0));
          if (!t) throw Error(`Hardfork with name ${e} not supported`);
        }
        getHardforkByBlockNumber(e, t, r) {
          let n = u7(e, L.BigInt),
            i = u7(t, L.BigInt),
            s = u7(r, L.Number),
            a = this.hardforks().filter(
              (e) =>
                null !== e.block ||
                (null !== e.ttd && void 0 !== e.ttd) ||
                void 0 !== e.timestamp,
            ),
            o = a.findIndex((e) => null !== e.ttd && void 0 !== e.ttd);
          if (
            a
              .slice(o + 1)
              .findIndex((e) => null !== e.ttd && void 0 !== e.ttd) >= 0
          )
            throw Error(
              "More than one merge hardforks found with ttd specified",
            );
          let u = a.findIndex(
            (e) =>
              (null !== e.block && e.block > n) ||
              (void 0 !== s && Number(e.timestamp) > s),
          );
          if (-1 === u) u = a.length;
          else if (0 === u)
            throw Error("Must have at least one hardfork at block 0");
          if (void 0 === s) {
            let e = a
              .slice(0, u)
              .reverse()
              .findIndex((e) => null !== e.block || void 0 !== e.ttd);
            u -= e;
          }
          if (null === a[(u -= 1)].block && void 0 === a[u].timestamp)
            (null == i || BigInt(a[u].ttd) > i) && (u -= 1);
          else if (o >= 0 && null != i) {
            if (u >= o && BigInt(a[o].ttd) > i)
              throw Error(
                "Maximum HF determined by total difficulty is lower than the block number HF",
              );
            else if (u < o && BigInt(a[o].ttd) <= i)
              throw Error(
                "HF determined by block number is lower than the minimum total difficulty HF",
              );
          }
          let c = u;
          for (
            ;
            u < a.length - 1 &&
            a[u].block === a[u + 1].block &&
            a[u].timestamp === a[u + 1].timestamp;
            u += 1
          );
          if (s) {
            if (
              a.slice(0, c).reduce((e, t) => {
                var r;
                return Math.max(Number(null != (r = t.timestamp) ? r : "0"), e);
              }, 0) > s
            )
              throw Error(
                "Maximum HF determined by timestamp is lower than the block number/ttd HF",
              );
            if (
              a.slice(u + 1).reduce((e, t) => {
                var r;
                return Math.min(Number(null != (r = t.timestamp) ? r : s), e);
              }, s) < s
            )
              throw Error(
                "Maximum HF determined by block number/ttd is lower than timestamp HF",
              );
          }
          return a[u].name;
        }
        setHardforkByBlockNumber(e, t, r) {
          let n = this.getHardforkByBlockNumber(e, t, r);
          return (this.setHardfork(n), n);
        }
        _getHardfork(e) {
          for (let t of this.hardforks()) if (t.name === e) return t;
          return null;
        }
        setEIPs(e = []) {
          for (let t of e) {
            if (!(t in cs)) throw Error(`${t} not supported`);
            let r = this.gteHardfork(cs[t].minimumHardfork);
            if (!r)
              throw Error(
                `${t} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${r}`,
              );
            if (void 0 !== cs[t].requiredEIPs) {
              for (let r of cs[t].requiredEIPs)
                if (!(e.includes(r) || this.isActivatedEIP(r)))
                  throw Error(
                    `${t} requires EIP ${r}, but is not included in the EIP list`,
                  );
            }
          }
          this._eips = e;
        }
        param(e, t) {
          let r;
          for (let n of this._eips)
            if (void 0 !== (r = this.paramByEIP(e, t, n))) return r;
          return this.paramByHardfork(e, t, this._hardfork);
        }
        paramByHardfork(e, t, r) {
          let n = null;
          for (let i of this.HARDFORK_CHANGES) {
            if ("eips" in i[1])
              for (let r of i[1].eips) {
                let i = this.paramByEIP(e, t, r);
                n = "bigint" == typeof i ? i : n;
              }
            else {
              if (void 0 === i[1][e]) throw Error(`Topic ${e} not defined`);
              void 0 !== i[1][e][t] && (n = i[1][e][t].v);
            }
            if (i[0] === r) break;
          }
          return BigInt(null != n ? n : 0);
        }
        paramByEIP(e, t, r) {
          if (!(r in cs)) throw Error(`${r} not supported`);
          let n = cs[r];
          if (!(e in n)) throw Error(`Topic ${e} not defined`);
          if (void 0 !== n[e][t]) return BigInt(n[e][t].v);
        }
        paramByBlock(e, t, r, n, i) {
          let s = this.getHardforkByBlockNumber(r, n, i);
          return this.paramByHardfork(e, t, s);
        }
        isActivatedEIP(e) {
          if (this.eips().includes(e)) return !0;
          for (let t of this.HARDFORK_CHANGES) {
            let r = t[1];
            if (this.gteHardfork(r.name) && "eips" in r && r.eips.includes(e))
              return !0;
          }
          return !1;
        }
        hardforkIsActiveOnBlock(e, t) {
          let r = u7(t, L.BigInt),
            n = null != e ? e : this._hardfork,
            i = this.hardforkBlock(n);
          return "bigint" == typeof i && i !== BigInt(0) && !!(r >= i);
        }
        activeOnBlock(e) {
          return this.hardforkIsActiveOnBlock(null, e);
        }
        hardforkGteHardfork(e, t) {
          let r = null != e ? e : this._hardfork,
            n = this.hardforks(),
            i = -1,
            s = -1,
            a = 0;
          for (let e of n)
            (e.name === r && (i = a), e.name === t && (s = a), (a += 1));
          return i >= s && -1 !== s;
        }
        gteHardfork(e) {
          return this.hardforkGteHardfork(null, e);
        }
        hardforkBlock(e) {
          var t;
          let r = null != e ? e : this._hardfork,
            n = null == (t = this._getHardfork(r)) ? void 0 : t.block;
          return null == n ? null : BigInt(n);
        }
        hardforkTimestamp(e) {
          var t;
          let r = null != e ? e : this._hardfork,
            n = null == (t = this._getHardfork(r)) ? void 0 : t.timestamp;
          return null == n ? null : BigInt(n);
        }
        eipBlock(e) {
          for (let t of this.HARDFORK_CHANGES) {
            let r = t[1];
            if ("eips" in r && r.eips.includes(e))
              return this.hardforkBlock(
                "number" == typeof t[0] ? String(t[0]) : t[0],
              );
          }
          return null;
        }
        hardforkTTD(e) {
          var t;
          let r = null != e ? e : this._hardfork,
            n = null == (t = this._getHardfork(r)) ? void 0 : t.ttd;
          return null == n ? null : BigInt(n);
        }
        isHardforkBlock(e, t) {
          let r = u7(e, L.BigInt),
            n = null != t ? t : this._hardfork,
            i = this.hardforkBlock(n);
          return "bigint" == typeof i && i !== BigInt(0) && i === r;
        }
        nextHardforkBlockOrTimestamp(e) {
          var t, r;
          let n = null != e ? e : this._hardfork,
            i = this.hardforks(),
            s = i.findIndex((e) => e.name === n);
          if ((n === N.Merge && (s -= 1), s < 0)) return null;
          let a = null != (t = i[s].timestamp) ? t : i[s].block;
          a = null != a ? Number(a) : null;
          let o = i.slice(s + 1).find((e) => {
            var t;
            let r = null != (t = e.timestamp) ? t : e.block;
            return (
              (r = null != r ? Number(r) : null),
              e.name !== N.Merge && null != r && r !== a
            );
          });
          if (void 0 === o) return null;
          let u = null != (r = o.timestamp) ? r : o.block;
          return null == u ? null : BigInt(u);
        }
        nextHardforkBlock(e) {
          let t = null != e ? e : this._hardfork,
            r = this.hardforkBlock(t);
          if (null === r && t === N.Merge) {
            let e = this.hardforks(),
              t = e.findIndex((e) => null !== e.ttd && void 0 !== e.ttd);
            if (t < 0) throw Error("Merge hardfork should have been found");
            r = this.hardforkBlock(e[t - 1].name);
          }
          return null === r
            ? null
            : this.hardforks().reduce((e, t) => {
                let n = BigInt(
                  null === t.block || (void 0 !== t.ttd && null !== t.ttd)
                    ? 0
                    : t.block,
                );
                return n > r && null === e ? n : e;
              }, null);
        }
        isNextHardforkBlock(e, t) {
          let r = u7(e, L.BigInt),
            n = null != t ? t : this._hardfork,
            i = this.nextHardforkBlock(n);
          return null !== i && i === r;
        }
        _calcForkHash(e, t) {
          let r = new Uint8Array(),
            n = 0;
          for (let t of this.hardforks()) {
            let { block: i, timestamp: s, name: a } = t,
              o = null != s ? s : i;
            if (
              ("number" == typeof (o = null !== o ? Number(o) : null) &&
                0 !== o &&
                o !== n &&
                a !== N.Merge &&
                ((r = sE(r, sC(o.toString(16).padStart(16, "0")))), (n = o)),
              t.name === e)
            )
              break;
          }
          return sP(uY(co(sE(t, r)) >>> 0));
        }
        forkHash(e, t) {
          let r = null != e ? e : this._hardfork,
            n = this._getHardfork(r);
          if (
            null === n ||
            ((null == n ? void 0 : n.block) === null &&
              (null == n ? void 0 : n.timestamp) === void 0 &&
              (null == n ? void 0 : n.ttd) === void 0)
          )
            throw Error(
              "No fork hash calculation possible for future hardfork",
            );
          if (
            (null == n ? void 0 : n.forkHash) !== null &&
            (null == n ? void 0 : n.forkHash) !== void 0
          )
            return n.forkHash;
          if (!t) throw Error("genesisHash required for forkHash calculation");
          return this._calcForkHash(r, t);
        }
        hardforkForForkHash(e) {
          let t = this.hardforks().filter((t) => t.forkHash === e);
          return t.length >= 1 ? t[t.length - 1] : null;
        }
        setForkHashes(e) {
          var t;
          for (let r of this.hardforks()) {
            let n = null != (t = r.timestamp) ? t : r.block;
            (null === r.forkHash || void 0 === r.forkHash) &&
              (null != n || void 0 !== r.ttd) &&
              (r.forkHash = this.forkHash(r.name, e));
          }
        }
        genesis() {
          return this._chainParams.genesis;
        }
        hardforks() {
          return this._chainParams.hardforks;
        }
        bootstrapNodes() {
          return this._chainParams.bootstrapNodes;
        }
        dnsNetworks() {
          return this._chainParams.dnsNetworks;
        }
        hardfork() {
          return this._hardfork;
        }
        chainId() {
          return BigInt(this._chainParams.chainId);
        }
        chainName() {
          return this._chainParams.name;
        }
        networkId() {
          return BigInt(this._chainParams.networkId);
        }
        eips() {
          return this._eips;
        }
        consensusType() {
          let e,
            t = this.hardfork();
          for (let r of this.HARDFORK_CHANGES)
            if (("consensus" in r[1] && (e = r[1].consensus.type), r[0] === t))
              break;
          return null != e ? e : this._chainParams.consensus.type;
        }
        consensusAlgorithm() {
          let e,
            t = this.hardfork();
          for (let r of this.HARDFORK_CHANGES)
            if (
              ("consensus" in r[1] && (e = r[1].consensus.algorithm),
              r[0] === t)
            )
              break;
          return null != e ? e : this._chainParams.consensus.algorithm;
        }
        consensusConfig() {
          var e;
          let t,
            r = this.hardfork();
          for (let e of this.HARDFORK_CHANGES)
            if (
              ("consensus" in e[1] &&
                (t = e[1].consensus[e[1].consensus.algorithm]),
              e[0] === r)
            )
              break;
          return null !=
            (e =
              null != t
                ? t
                : this._chainParams.consensus[this.consensusAlgorithm()])
            ? e
            : {};
        }
        copy() {
          let e = Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            this,
          );
          return (e.removeAllListeners(), e);
        }
        static _getInitializedChains(e) {
          let t = {};
          for (let [e, r] of Object.entries(O)) t[r] = e.toLowerCase();
          let r = { mainnet: cn, goerli: cr, sepolia: ci };
          if (e)
            for (let n of e) {
              let { name: e } = n;
              ((t[n.chainId.toString()] = e), (r[e] = n));
            }
          return ((r.names = t), r);
        }
      }
      !(function (e) {
        ((e[(e.EIP155ReplayProtection = 155)] = "EIP155ReplayProtection"),
          (e[(e.EIP1559FeeMarket = 1559)] = "EIP1559FeeMarket"),
          (e[(e.EIP2718TypedTransaction = 2718)] = "EIP2718TypedTransaction"),
          (e[(e.EIP2930AccessLists = 2930)] = "EIP2930AccessLists"));
      })(D || (D = {}));
      class cc {
        constructor(e) {
          if (20 !== e.length) throw Error("Invalid address length");
          this.buf = e;
        }
        static zero() {
          return new cc(u1(20));
        }
        equals(e) {
          return sk(this.buf, e.buf);
        }
        isZero() {
          return this.equals(cc.zero());
        }
        toString() {
          return sP(this.buf);
        }
        toArray() {
          return this.buf;
        }
        static publicToAddress(e, t = !1) {
          let r = e;
          if (
            (u3(r),
            t &&
              64 !== r.length &&
              (r = uQ.ProjectivePoint.fromHex(r).toRawBytes(!1).slice(1)),
            64 !== r.length)
          )
            throw Error("Expected pubKey to be of length 64");
          return rD(r).slice(-20);
        }
      }
      let cl = (e, t) => {
          let r = e.param("vm", "maxInitCodeSize");
          if (r && BigInt(t) > r)
            throw Error(
              `the initcode size of this transaction is too large: it is ${t} while the max is ${e.param("vm", "maxInitCodeSize")}`,
            );
        },
        cd = (e) => {
          let t, r;
          if (
            (function (e) {
              return !(0 === e.length || Array.isArray(e[0]));
            })(e)
          ) {
            t = e;
            let n = [];
            for (let t = 0; t < e.length; t += 1) {
              let r = e[t],
                i = uX(r.address),
                s = [];
              for (let e = 0; e < r.storageKeys.length; e += 1)
                s.push(uX(r.storageKeys[e]));
              n.push([i, s]);
            }
            r = n;
          } else {
            r = null != e ? e : [];
            let n = [];
            for (let e = 0; e < r.length; e += 1) {
              let t = r[e],
                i = sP(t[0]),
                s = [];
              for (let e = 0; e < t[1].length; e += 1) s.push(sP(t[1][e]));
              let a = { address: i, storageKeys: s };
              n.push(a);
            }
            t = n;
          }
          return { AccessListJSON: t, accessList: r };
        },
        ch = (e) => {
          for (let t = 0; t < e.length; t += 1) {
            let r = e[t],
              n = r[0],
              i = r[1];
            if (void 0 !== r[2])
              throw Error(
                "Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.",
              );
            if (20 !== n.length)
              throw Error(
                "Invalid EIP-2930 transaction: address length should be 20 bytes",
              );
            for (let e = 0; e < i.length; e += 1)
              if (32 !== i[e].length)
                throw Error(
                  "Invalid EIP-2930 transaction: storage slot length should be 32 bytes",
                );
          }
        },
        cf = (e) => {
          let t = [];
          for (let r = 0; r < e.length; r += 1) {
            let n = e[r],
              i = { address: sP(u6(n[0], 20)), storageKeys: [] },
              s = n && n[1];
            for (let e = 0; e < s.length; e += 1) {
              let t = s[e];
              i.storageKeys.push(sP(u6(t, 32)));
            }
            t.push(i);
          }
          return t;
        },
        cp = (e, t) => {
          let r = t.param("gasPrices", "accessListStorageKeyCost"),
            n = t.param("gasPrices", "accessListAddressCost"),
            i = 0;
          for (let t = 0; t < e.length; t += 1) i += e[t][1].length;
          return e.length * Number(n) + i * Number(r);
        };
      class cm {
        constructor(e, t) {
          var r, n;
          ((this.cache = { hash: void 0, dataFee: void 0 }),
            (this.activeCapabilities = []),
            (this.DEFAULT_CHAIN = O.Mainnet),
            (this.DEFAULT_HARDFORK = N.Merge));
          let {
            nonce: i,
            gasLimit: s,
            to: a,
            value: o,
            data: u,
            v: c,
            r: l,
            s: d,
            type: h,
          } = e;
          ((this._type = Number(u0(uX(h)))), (this.txOptions = t));
          let f = uX("" === a ? "0x" : a),
            p = uX("" === c ? "0x" : c),
            m = uX("" === l ? "0x" : l),
            g = uX("" === d ? "0x" : d);
          ((this.nonce = u0(uX("" === i ? "0x" : i))),
            (this.gasLimit = u0(uX("" === s ? "0x" : s))),
            (this.to = f.length > 0 ? new cc(f) : void 0),
            (this.value = u0(uX("" === o ? "0x" : o))),
            (this.data = uX("" === u ? "0x" : u)),
            (this.v = p.length > 0 ? u0(p) : void 0),
            (this.r = m.length > 0 ? u0(m) : void 0),
            (this.s = g.length > 0 ? u0(g) : void 0),
            this._validateCannotExceedMaxInteger({
              value: this.value,
              r: this.r,
              s: this.s,
            }),
            this._validateCannotExceedMaxInteger(
              { gasLimit: this.gasLimit },
              64,
            ),
            this._validateCannotExceedMaxInteger(
              { nonce: this.nonce },
              64,
              !0,
            ));
          let y = void 0 === this.to || null === this.to,
            v = null != (r = t.allowUnlimitedInitCodeSize) && r,
            b = null != (n = t.common) ? n : this._getCommon();
          y && b.isActivatedEIP(3860) && !v && cl(b, this.data.length);
        }
        get type() {
          return this._type;
        }
        supports(e) {
          return this.activeCapabilities.includes(e);
        }
        validate(e = !1) {
          let t = [];
          return (
            this.getBaseFee() > this.gasLimit &&
              t.push(
                `gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`,
              ),
            this.isSigned() &&
              !this.verifySignature() &&
              t.push("Invalid Signature"),
            e ? t : 0 === t.length
          );
        }
        _validateYParity() {
          let { v: e } = this;
          if (void 0 !== e && e !== BigInt(0) && e !== BigInt(1))
            throw Error(
              this._errorMsg(
                "The y-parity of the transaction should either be 0 or 1",
              ),
            );
        }
        _validateHighS() {
          let { s: e } = this;
          if (this.common.gteHardfork("homestead") && void 0 !== e && e > uV)
            throw Error(
              this._errorMsg(
                "Invalid Signature: s-values greater than secp256k1n/2 are considered invalid",
              ),
            );
        }
        getBaseFee() {
          let e = this.common.param("gasPrices", "tx"),
            t = this.getDataFee();
          if (
            (e && (t += e),
            this.common.gteHardfork("homestead") && this.toCreationAddress())
          ) {
            let e = this.common.param("gasPrices", "txCreation");
            e && (t += e);
          }
          return t;
        }
        getDataFee() {
          let e = this.common.param("gasPrices", "txDataZero"),
            t = this.common.param("gasPrices", "txDataNonZero"),
            r = BigInt(0);
          for (let n = 0; n < this.data.length; n += 1)
            0 === this.data[n] ? (r += e) : (r += t);
          if (
            (void 0 === this.to || null === this.to) &&
            this.common.isActivatedEIP(3860)
          ) {
            let e = BigInt(Math.ceil(this.data.length / 32));
            r += this.common.param("gasPrices", "initCodeWordCost") * e;
          }
          return r;
        }
        toCreationAddress() {
          return void 0 === this.to || 0 === this.to.buf.length;
        }
        isSigned() {
          let { v: e, r: t, s: r } = this;
          return void 0 !== e && void 0 !== t && void 0 !== r;
        }
        verifySignature() {
          try {
            let e = this.getSenderPublicKey();
            return 0 !== u5(e).length;
          } catch (e) {
            return !1;
          }
        }
        getSenderAddress() {
          return new cc(cc.publicToAddress(this.getSenderPublicKey()));
        }
        sign(e) {
          if (32 !== e.length)
            throw Error(
              this._errorMsg("Private key must be 32 bytes in length."),
            );
          let t = !1;
          0 === this.type &&
            this.common.gteHardfork("spuriousDragon") &&
            !this.supports(D.EIP155ReplayProtection) &&
            (this.activeCapabilities.push(D.EIP155ReplayProtection), (t = !0));
          let r = this.getMessageToSign(!0),
            { v: n, r: i, s } = this._ecsign(r, e),
            a = this._processSignature(n, i, s);
          if (t) {
            let e = this.activeCapabilities.indexOf(D.EIP155ReplayProtection);
            e > -1 && this.activeCapabilities.splice(e, 1);
          }
          return a;
        }
        _getCommon(e, t) {
          var r, n, i, s;
          if (void 0 !== t) {
            let r = u0(uX(t));
            if (e) {
              if (e.chainId() !== r)
                throw Error(
                  this._errorMsg(
                    "The chain ID does not match the chain ID of Common",
                  ),
                );
              return e.copy();
            }
            return cu.isSupportedChainId(r)
              ? new cu({ chain: r, hardfork: this.DEFAULT_HARDFORK })
              : cu.custom(
                  { name: "custom-chain", networkId: r, chainId: r },
                  {
                    baseChain: this.DEFAULT_CHAIN,
                    hardfork: this.DEFAULT_HARDFORK,
                  },
                );
          }
          if (
            (null == e ? void 0 : e.copy) &&
            "function" == typeof (null == e ? void 0 : e.copy)
          )
            return e.copy();
          if (e) {
            let t = "function" == typeof e.hardfork ? e.hardfork() : e.hardfork;
            return cu.custom(
              {
                name: "custom-chain",
                networkId: e.networkId
                  ? e.networkId()
                  : null !=
                      (n = BigInt(
                        null == (r = e.customChain) ? void 0 : r.networkId,
                      ))
                    ? n
                    : void 0,
                chainId: e.chainId
                  ? e.chainId()
                  : null !=
                      (s = BigInt(
                        null == (i = e.customChain) ? void 0 : i.chainId,
                      ))
                    ? s
                    : void 0,
              },
              {
                baseChain: this.DEFAULT_CHAIN,
                hardfork: t || this.DEFAULT_HARDFORK,
              },
            );
          }
          return new cu({
            chain: this.DEFAULT_CHAIN,
            hardfork: this.DEFAULT_HARDFORK,
          });
        }
        _validateCannotExceedMaxInteger(e, t = 256, r = !1) {
          for (let [n, i] of Object.entries(e))
            switch (t) {
              case 64:
                if (r) {
                  if (void 0 !== i && i >= uZ)
                    throw Error(
                      this._errorMsg(
                        `${n} cannot equal or exceed MAX_UINT64 (2^64-1), given ${i}`,
                      ),
                    );
                } else if (void 0 !== i && i > uZ)
                  throw Error(
                    this._errorMsg(
                      `${n} cannot exceed MAX_UINT64 (2^64-1), given ${i}`,
                    ),
                  );
                break;
              case 256:
                if (r) {
                  if (void 0 !== i && i >= uz)
                    throw Error(
                      this._errorMsg(
                        `${n} cannot equal or exceed MAX_INTEGER (2^256-1), given ${i}`,
                      ),
                    );
                } else if (void 0 !== i && i > uz)
                  throw Error(
                    this._errorMsg(
                      `${n} cannot exceed MAX_INTEGER (2^256-1), given ${i}`,
                    ),
                  );
                break;
              default:
                throw Error(this._errorMsg("unimplemented bits value"));
            }
        }
        static _validateNotArray(e) {
          let t = [
            "nonce",
            "gasPrice",
            "gasLimit",
            "to",
            "value",
            "data",
            "v",
            "r",
            "s",
            "type",
            "baseFee",
            "maxFeePerGas",
            "chainId",
          ];
          for (let [r, n] of Object.entries(e))
            if (t.includes(r) && Array.isArray(n))
              throw Error(`${r} cannot be an array`);
        }
        _getSharedErrorPostfix() {
          let e = "";
          try {
            e = this.isSigned() ? sP(this.hash()) : "not available (unsigned)";
          } catch (t) {
            e = "error";
          }
          let t = "";
          try {
            t = this.isSigned().toString();
          } catch (t) {
            e = "error";
          }
          let r = "";
          try {
            r = this.common.hardfork();
          } catch (e) {
            r = "error";
          }
          let n = `tx type=${this.type} hash=${e} nonce=${this.nonce} value=${this.value} `;
          return n + `signed=${t} hf=${r}`;
        }
        _ecsign(e, t, r) {
          let n = uQ.sign(e, t),
            i = n.toCompactRawBytes(),
            s = i.subarray(0, 32);
          return {
            r: s,
            s: i.subarray(32, 64),
            v:
              void 0 === r
                ? BigInt(n.recovery + 27)
                : BigInt(n.recovery + 35) + BigInt(r) * BigInt(2),
          };
        }
        static fromSerializedTx(e, t = {}) {}
        static fromTxData(e, t = {}) {}
      }
      let cg = sC("2".padStart(2, "0"));
      class cy extends cm {
        static fromTxData(e, t = {}) {
          return new cy(e, t);
        }
        static fromSerializedTx(e, t = {}) {
          if (!sk(e.subarray(0, 1), cg))
            throw Error(
              `Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: 2, received: ${sP(e.subarray(0, 1))}`,
            );
          let r = ce.Tj.decode(e.subarray(1));
          if (!Array.isArray(r))
            throw Error("Invalid serialized tx input: must be array");
          return cy.fromValuesArray(r, t);
        }
        static fromValuesArray(e, t = {}) {
          if (9 !== e.length && 12 !== e.length)
            throw Error(
              "Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).",
            );
          let [r, n, i, s, a, o, u, c, l, d, h, f] = e;
          return (
            this._validateNotArray({ chainId: r, v: d }),
            iz({
              nonce: n,
              maxPriorityFeePerGas: i,
              maxFeePerGas: s,
              gasLimit: a,
              value: u,
              v: d,
              r: h,
              s: f,
            }),
            new cy(
              {
                chainId: u0(r),
                nonce: n,
                maxPriorityFeePerGas: i,
                maxFeePerGas: s,
                gasLimit: a,
                to: o,
                value: u,
                data: c,
                accessList: null != l ? l : [],
                v: void 0 !== d ? u0(d) : void 0,
                r: h,
                s: f,
              },
              t,
            )
          );
        }
        constructor(e, t = {}) {
          var r;
          (super(Object.assign(Object.assign({}, e), { type: 2 }), t),
            (this.DEFAULT_HARDFORK = "london"));
          let {
            chainId: n,
            accessList: i,
            maxFeePerGas: s,
            maxPriorityFeePerGas: a,
          } = e;
          if (
            ((this.common = this._getCommon(t.common, n)),
            (this.chainId = this.common.chainId()),
            !this.common.isActivatedEIP(1559))
          )
            throw Error("EIP-1559 not enabled on Common");
          this.activeCapabilities = this.activeCapabilities.concat([
            1559, 2718, 2930,
          ]);
          let o = cd(null != i ? i : []);
          if (
            ((this.accessList = o.accessList),
            (this.AccessListJSON = o.AccessListJSON),
            ch(this.accessList),
            (this.maxFeePerGas = u0(uX("" === s ? "0x" : s))),
            (this.maxPriorityFeePerGas = u0(uX("" === a ? "0x" : a))),
            this._validateCannotExceedMaxInteger({
              maxFeePerGas: this.maxFeePerGas,
              maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            }),
            cm._validateNotArray(e),
            this.gasLimit * this.maxFeePerGas > uz)
          )
            throw Error(
              this._errorMsg(
                "gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)",
              ),
            );
          if (this.maxFeePerGas < this.maxPriorityFeePerGas)
            throw Error(
              this._errorMsg(
                "maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)",
              ),
            );
          (this._validateYParity(),
            this._validateHighS(),
            (null == (r = null == t ? void 0 : t.freeze) || r) &&
              Object.freeze(this));
        }
        getDataFee() {
          if (
            this.cache.dataFee &&
            this.cache.dataFee.hardfork === this.common.hardfork()
          )
            return this.cache.dataFee.value;
          let e = super.getDataFee();
          return (
            (e += BigInt(cp(this.accessList, this.common))),
            Object.isFrozen(this) &&
              (this.cache.dataFee = {
                value: e,
                hardfork: this.common.hardfork(),
              }),
            e
          );
        }
        getUpfrontCost(e = BigInt(0)) {
          let t = this.maxPriorityFeePerGas,
            r = this.maxFeePerGas - e;
          return this.gasLimit * ((t < r ? t : r) + e) + this.value;
        }
        raw() {
          return [
            u8(this.chainId),
            u8(this.nonce),
            u8(this.maxPriorityFeePerGas),
            u8(this.maxFeePerGas),
            u8(this.gasLimit),
            void 0 !== this.to ? this.to.buf : Uint8Array.from([]),
            u8(this.value),
            this.data,
            this.accessList,
            void 0 !== this.v ? u8(this.v) : Uint8Array.from([]),
            void 0 !== this.r ? u8(this.r) : Uint8Array.from([]),
            void 0 !== this.s ? u8(this.s) : Uint8Array.from([]),
          ];
        }
        serialize() {
          let e = this.raw();
          return sE(cg, ce.Tj.encode(e));
        }
        getMessageToSign(e = !0) {
          let t = this.raw().slice(0, 9),
            r = sE(cg, ce.Tj.encode(t));
          return e ? rD(r) : r;
        }
        hash() {
          if (!this.isSigned())
            throw Error(
              this._errorMsg(
                "Cannot call hash method if transaction is not signed",
              ),
            );
          return Object.isFrozen(this)
            ? (this.cache.hash || (this.cache.hash = rD(this.serialize())),
              this.cache.hash)
            : rD(this.serialize());
        }
        getMessageToVerifySignature() {
          return this.getMessageToSign();
        }
        getSenderPublicKey() {
          if (!this.isSigned())
            throw Error(
              this._errorMsg(
                "Cannot call this method if transaction is not signed",
              ),
            );
          let e = this.getMessageToVerifySignature(),
            { v: t, r, s: n } = this;
          this._validateHighS();
          try {
            return u9(e, t + BigInt(27), u8(r), u8(n));
          } catch (e) {
            throw Error(this._errorMsg("Invalid Signature"));
          }
        }
        _processSignature(e, t, r) {
          let n = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common,
          });
          return cy.fromTxData(
            {
              chainId: this.chainId,
              nonce: this.nonce,
              maxPriorityFeePerGas: this.maxPriorityFeePerGas,
              maxFeePerGas: this.maxFeePerGas,
              gasLimit: this.gasLimit,
              to: this.to,
              value: this.value,
              data: this.data,
              accessList: this.accessList,
              v: e - BigInt(27),
              r: u0(t),
              s: u0(r),
            },
            n,
          );
        }
        toJSON() {
          let e = cf(this.accessList);
          return {
            chainId: u4(this.chainId),
            nonce: u4(this.nonce),
            maxPriorityFeePerGas: u4(this.maxPriorityFeePerGas),
            maxFeePerGas: u4(this.maxFeePerGas),
            gasLimit: u4(this.gasLimit),
            to: void 0 !== this.to ? this.to.toString() : void 0,
            value: u4(this.value),
            data: sP(this.data),
            accessList: e,
            v: void 0 !== this.v ? u4(this.v) : void 0,
            r: void 0 !== this.r ? u4(this.r) : void 0,
            s: void 0 !== this.s ? u4(this.s) : void 0,
          };
        }
        errorStr() {
          let e = this._getSharedErrorPostfix();
          return (
            e +
            ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`
          );
        }
        _errorMsg(e) {
          return `${e} (${this.errorStr()})`;
        }
      }
      let cv = sC("1".padStart(2, "0"));
      class cb extends cm {
        static fromTxData(e, t = {}) {
          return new cb(e, t);
        }
        static fromSerializedTx(e, t = {}) {
          if (!sk(e.subarray(0, 1), cv))
            throw Error(
              `Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: 1, received: ${sP(e.subarray(0, 1))}`,
            );
          let r = ce.Tj.decode(Uint8Array.from(e.subarray(1)));
          if (!Array.isArray(r))
            throw Error("Invalid serialized tx input: must be array");
          return cb.fromValuesArray(r, t);
        }
        static fromValuesArray(e, t = {}) {
          if (8 !== e.length && 11 !== e.length)
            throw Error(
              "Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).",
            );
          let [r, n, i, s, a, o, u, c, l, d, h] = e;
          return (
            this._validateNotArray({ chainId: r, v: l }),
            iz({
              nonce: n,
              gasPrice: i,
              gasLimit: s,
              value: o,
              v: l,
              r: d,
              s: h,
            }),
            new cb(
              {
                chainId: u0(r),
                nonce: n,
                gasPrice: i,
                gasLimit: s,
                to: a,
                value: o,
                data: u,
                accessList: null != c ? c : [],
                v: void 0 !== l ? u0(l) : void 0,
                r: d,
                s: h,
              },
              t,
            )
          );
        }
        constructor(e, t = {}) {
          var r;
          (super(Object.assign(Object.assign({}, e), { type: 1 }), t),
            (this.DEFAULT_HARDFORK = "berlin"));
          let { chainId: n, accessList: i, gasPrice: s } = e;
          if (
            ((this.common = this._getCommon(t.common, n)),
            (this.chainId = this.common.chainId()),
            !this.common.isActivatedEIP(2930))
          )
            throw Error("EIP-2930 not enabled on Common");
          this.activeCapabilities = this.activeCapabilities.concat([
            2718, 2930,
          ]);
          let a = cd(null != i ? i : []);
          if (
            ((this.accessList = a.accessList),
            (this.AccessListJSON = a.AccessListJSON),
            ch(this.accessList),
            (this.gasPrice = u0(uX("" === s ? "0x" : s))),
            this._validateCannotExceedMaxInteger({ gasPrice: this.gasPrice }),
            cm._validateNotArray(e),
            this.gasPrice * this.gasLimit > uz)
          )
            throw Error(
              this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER"),
            );
          (this._validateYParity(),
            this._validateHighS(),
            (null == (r = null == t ? void 0 : t.freeze) || r) &&
              Object.freeze(this));
        }
        getDataFee() {
          if (
            this.cache.dataFee &&
            this.cache.dataFee.hardfork === this.common.hardfork()
          )
            return this.cache.dataFee.value;
          let e = super.getDataFee();
          return (
            (e += BigInt(cp(this.accessList, this.common))),
            Object.isFrozen(this) &&
              (this.cache.dataFee = {
                value: e,
                hardfork: this.common.hardfork(),
              }),
            e
          );
        }
        getUpfrontCost() {
          return this.gasLimit * this.gasPrice + this.value;
        }
        raw() {
          return [
            u8(this.chainId),
            u8(this.nonce),
            u8(this.gasPrice),
            u8(this.gasLimit),
            void 0 !== this.to ? this.to.buf : Uint8Array.from([]),
            u8(this.value),
            this.data,
            this.accessList,
            void 0 !== this.v ? u8(this.v) : Uint8Array.from([]),
            void 0 !== this.r ? u8(this.r) : Uint8Array.from([]),
            void 0 !== this.s ? u8(this.s) : Uint8Array.from([]),
          ];
        }
        serialize() {
          let e = this.raw();
          return sE(cv, ce.Tj.encode(e));
        }
        getMessageToSign(e = !0) {
          let t = this.raw().slice(0, 8),
            r = sE(cv, ce.Tj.encode(t));
          return e ? rD(r) : r;
        }
        hash() {
          if (!this.isSigned())
            throw Error(
              this._errorMsg(
                "Cannot call hash method if transaction is not signed",
              ),
            );
          return Object.isFrozen(this)
            ? (this.cache.hash || (this.cache.hash = rD(this.serialize())),
              this.cache.hash)
            : rD(this.serialize());
        }
        getMessageToVerifySignature() {
          return this.getMessageToSign();
        }
        getSenderPublicKey() {
          if (!this.isSigned())
            throw Error(
              this._errorMsg(
                "Cannot call this method if transaction is not signed",
              ),
            );
          let e = this.getMessageToVerifySignature(),
            { v: t, r, s: n } = this;
          this._validateHighS();
          try {
            return u9(e, t + BigInt(27), u8(r), u8(n));
          } catch (e) {
            throw Error(this._errorMsg("Invalid Signature"));
          }
        }
        _processSignature(e, t, r) {
          let n = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common,
          });
          return cb.fromTxData(
            {
              chainId: this.chainId,
              nonce: this.nonce,
              gasPrice: this.gasPrice,
              gasLimit: this.gasLimit,
              to: this.to,
              value: this.value,
              data: this.data,
              accessList: this.accessList,
              v: e - BigInt(27),
              r: u0(t),
              s: u0(r),
            },
            n,
          );
        }
        toJSON() {
          let e = cf(this.accessList);
          return {
            chainId: u4(this.chainId),
            nonce: u4(this.nonce),
            gasPrice: u4(this.gasPrice),
            gasLimit: u4(this.gasLimit),
            to: void 0 !== this.to ? this.to.toString() : void 0,
            value: u4(this.value),
            data: sP(this.data),
            accessList: e,
            v: void 0 !== this.v ? u4(this.v) : void 0,
            r: void 0 !== this.r ? u4(this.r) : void 0,
            s: void 0 !== this.s ? u4(this.s) : void 0,
          };
        }
        errorStr() {
          var e, t;
          let r = this._getSharedErrorPostfix();
          return (
            r +
            ` gasPrice=${this.gasPrice} accessListCount=${null != (t = null == (e = this.accessList) ? void 0 : e.length) ? t : 0}`
          );
        }
        _errorMsg(e) {
          return `${e} (${this.errorStr()})`;
        }
      }
      function cA(e, t) {
        let r = Number(e),
          n = 2 * Number(t);
        return r === n + 35 || r === n + 36;
      }
      class cw extends cm {
        static fromTxData(e, t = {}) {
          return new cw(e, t);
        }
        static fromSerializedTx(e, t = {}) {
          let r = ce.Tj.decode(e);
          if (!Array.isArray(r))
            throw Error("Invalid serialized tx input. Must be array");
          return this.fromValuesArray(r, t);
        }
        static fromValuesArray(e, t = {}) {
          if (6 !== e.length && 9 !== e.length)
            throw Error(
              "Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).",
            );
          let [r, n, i, s, a, o, u, c, l] = e;
          return (
            iz({
              nonce: r,
              gasPrice: n,
              gasLimit: i,
              value: a,
              v: u,
              r: c,
              s: l,
            }),
            new cw(
              {
                nonce: r,
                gasPrice: n,
                gasLimit: i,
                to: s,
                value: a,
                data: o,
                v: u,
                r: c,
                s: l,
              },
              t,
            )
          );
        }
        constructor(e, t = {}) {
          var r;
          if (
            (super(Object.assign(Object.assign({}, e), { type: 0 }), t),
            (this.common = this._validateTxV(this.v, t.common)),
            (this.gasPrice = u0(uX("" === e.gasPrice ? "0x" : e.gasPrice))),
            this.gasPrice * this.gasLimit > uz)
          )
            throw Error(
              this._errorMsg(
                "gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)",
              ),
            );
          (this._validateCannotExceedMaxInteger({ gasPrice: this.gasPrice }),
            cm._validateNotArray(e),
            this.common.gteHardfork("spuriousDragon") &&
              (this.isSigned()
                ? cA(this.v, this.common.chainId()) &&
                  this.activeCapabilities.push(D.EIP155ReplayProtection)
                : this.activeCapabilities.push(D.EIP155ReplayProtection)),
            (null == (r = null == t ? void 0 : t.freeze) || r) &&
              Object.freeze(this));
        }
        raw() {
          return [
            u8(this.nonce),
            u8(this.gasPrice),
            u8(this.gasLimit),
            void 0 !== this.to ? this.to.buf : Uint8Array.from([]),
            u8(this.value),
            this.data,
            void 0 !== this.v ? u8(this.v) : Uint8Array.from([]),
            void 0 !== this.r ? u8(this.r) : Uint8Array.from([]),
            void 0 !== this.s ? u8(this.s) : Uint8Array.from([]),
          ];
        }
        serialize() {
          return ce.Tj.encode(this.raw());
        }
        _getMessageToSign() {
          let e = [
            u8(this.nonce),
            u8(this.gasPrice),
            u8(this.gasLimit),
            void 0 !== this.to ? this.to.buf : Uint8Array.from([]),
            u8(this.value),
            this.data,
          ];
          return (
            this.supports(D.EIP155ReplayProtection) &&
              (e.push(uX(this.common.chainId())),
              e.push(u5(uX(0))),
              e.push(u5(uX(0)))),
            e
          );
        }
        getMessageToSign(e = !0) {
          let t = this._getMessageToSign();
          return e ? rD(ce.Tj.encode(t)) : t;
        }
        getDataFee() {
          return this.cache.dataFee &&
            this.cache.dataFee.hardfork === this.common.hardfork()
            ? this.cache.dataFee.value
            : (Object.isFrozen(this) &&
                (this.cache.dataFee = {
                  value: super.getDataFee(),
                  hardfork: this.common.hardfork(),
                }),
              super.getDataFee());
        }
        getUpfrontCost() {
          return this.gasLimit * this.gasPrice + this.value;
        }
        hash() {
          if (!this.isSigned())
            throw Error(
              this._errorMsg(
                "Cannot call hash method if transaction is not signed",
              ),
            );
          return Object.isFrozen(this)
            ? (this.cache.hash ||
                (this.cache.hash = rD(ce.Tj.encode(this.raw()))),
              this.cache.hash)
            : rD(ce.Tj.encode(this.raw()));
        }
        getMessageToVerifySignature() {
          if (!this.isSigned())
            throw Error(this._errorMsg("This transaction is not signed"));
          let e = this._getMessageToSign();
          return rD(ce.Tj.encode(e));
        }
        getSenderPublicKey() {
          let e = this.getMessageToVerifySignature(),
            { v: t, r, s: n } = this;
          this._validateHighS();
          try {
            return u9(
              e,
              t,
              u8(r),
              u8(n),
              this.supports(D.EIP155ReplayProtection)
                ? this.common.chainId()
                : void 0,
            );
          } catch (e) {
            throw Error(this._errorMsg("Invalid Signature"));
          }
        }
        _processSignature(e, t, r) {
          let n = e;
          this.supports(D.EIP155ReplayProtection) &&
            (n += this.common.chainId() * BigInt(2) + BigInt(8));
          let i = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common,
          });
          return cw.fromTxData(
            {
              nonce: this.nonce,
              gasPrice: this.gasPrice,
              gasLimit: this.gasLimit,
              to: this.to,
              value: this.value,
              data: this.data,
              v: n,
              r: u0(t),
              s: u0(r),
            },
            i,
          );
        }
        toJSON() {
          return {
            nonce: u4(this.nonce),
            gasPrice: u4(this.gasPrice),
            gasLimit: u4(this.gasLimit),
            to: void 0 !== this.to ? this.to.toString() : void 0,
            value: u4(this.value),
            data: sP(this.data),
            v: void 0 !== this.v ? u4(this.v) : void 0,
            r: void 0 !== this.r ? u4(this.r) : void 0,
            s: void 0 !== this.s ? u4(this.s) : void 0,
          };
        }
        _validateTxV(e, t) {
          let r,
            n = void 0 !== e ? Number(e) : void 0;
          if (void 0 !== n && n < 37 && 27 !== n && 28 !== n)
            throw Error(
              `Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${n}`,
            );
          if (
            void 0 !== n &&
            0 !== n &&
            (!t || t.gteHardfork("spuriousDragon")) &&
            27 !== n &&
            28 !== n
          )
            if (t) {
              if (!cA(BigInt(n), t.chainId()))
                throw Error(
                  `Incompatible EIP155-based V ${n} and chain id ${t.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`,
                );
            } else r = BigInt(n - ((n - 35) % 2 == 0 ? 35 : 36)) / BigInt(2);
          return this._getCommon(t, r);
        }
        errorStr() {
          let e = this._getSharedErrorPostfix();
          return e + ` gasPrice=${this.gasPrice}`;
        }
        _errorMsg(e) {
          return `${e} (${this.errorStr()})`;
        }
      }
      let cx = new Map();
      class cE {
        constructor() {}
        static typeToInt(e) {
          return Number(u0(uX(e)));
        }
        static registerTransactionType(e, t) {
          let r = cE.typeToInt(e);
          cx.set(r, t);
        }
        static fromTxData(e, t = {}) {
          if (!("type" in e) || void 0 === e.type) return cw.fromTxData(e, t);
          let r = cE.typeToInt(e.type);
          if (0 === r) return cw.fromTxData(e, t);
          if (1 === r) return cb.fromTxData(e, t);
          if (2 === r) return cy.fromTxData(e, t);
          let n = cx.get(r);
          if (null == n ? void 0 : n.fromTxData) return n.fromTxData(e, t);
          throw Error(`Tx instantiation with type ${r} not supported`);
        }
        static fromSerializedData(e, t = {}) {
          if (!(e[0] <= 127)) return cw.fromSerializedTx(e, t);
          switch (e[0]) {
            case 1:
              return cb.fromSerializedTx(e, t);
            case 2:
              return cy.fromSerializedTx(e, t);
            default: {
              let r = cx.get(Number(e[0]));
              if (null == r ? void 0 : r.fromSerializedTx)
                return r.fromSerializedTx(e, t);
              throw Error(`TypedTransaction with ID ${e[0]} unknown`);
            }
          }
        }
        static fromBlockBodyData(e, t = {}) {
          if (sx(e)) return this.fromSerializedData(e, t);
          if (Array.isArray(e)) return cw.fromValuesArray(e, t);
          throw Error("Cannot decode transaction: unknown type input");
        }
      }
      var ck = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let cI = (e, t) => {
          let r;
          if (!t && "string" == typeof e && iU(e) && 66 !== e.length)
            throw new es();
          try {
            r = sx(e) ? e : sS(e);
          } catch (e) {
            throw new ea();
          }
          if (!t && 32 !== r.byteLength) throw new es();
          return r;
        },
        c_ = (e, t = !1) => {
          let r = sC(iU(e) ? e : sF(e)),
            n = sC(
              sL(`\x19Ethereum Signed Message:
${r.byteLength}`),
            );
          return ak(t ? r : sE(n, r));
        },
        cS = (e, t) => {
          let r = cI(t),
            n = uQ.sign(e.substring(2), r),
            i = n.toCompactRawBytes(),
            s = n.r.toString(16).padStart(64, "0"),
            a = n.s.toString(16).padStart(64, "0"),
            o = n.recovery + 27;
          return {
            messageHash: e,
            v: sN(o),
            r: `0x${s}`,
            s: `0x${a}`,
            signature: `${sP(i)}${o.toString(16)}`,
          };
        },
        cT = (e, t) => {
          let { messageHash: r, v: n, r: i, s, signature: a } = cS(c_(e), t);
          return { message: e, messageHash: r, v: n, r: i, s, signature: a };
        },
        cP = (e, t) =>
          ck(void 0, void 0, void 0, function* () {
            let r = e.sign(sC(t));
            if (sf(r.v) || sf(r.r) || sf(r.s)) throw new tc("Signer Error");
            let n = r.validate(!0);
            if (n.length > 0) {
              let e = "Signer Error ";
              for (let t of n) e += `${e} ${t}.`;
              throw new tc(e);
            }
            let i = sP(r.serialize()),
              s = ak(i);
            return {
              messageHash: sP(r.getMessageToSign(!0)),
              v: `0x${r.v.toString(16)}`,
              r: `0x${r.r.toString(16).padStart(64, "0")}`,
              s: `0x${r.s.toString(16).padStart(64, "0")}`,
              rawTransaction: i,
              transactionHash: sP(s),
            };
          }),
        cC = (e) => {
          if (sf(e)) throw new eU();
          return sY(cE.fromSerializedData(sC(e)).getSenderAddress().toString());
        },
        cB = (e, t, r, n, i) => {
          if ("object" == typeof e) {
            let t = `${e.r}${e.s.slice(2)}${e.v.slice(2)}`;
            return cB(e.messageHash, t, r);
          }
          if ("string" == typeof t && "string" == typeof r && !sf(n))
            return cB(e, `${r}${n.slice(2)}${t.slice(2)}`, i);
          if (sf(t)) throw new eo("signature string undefined");
          let s = r ? e : c_(e),
            a = parseInt(t.substring(130), 16);
          a > 26 && (a -= 27);
          let o = ak(
            uQ.Signature.fromCompact(t.slice(2, 130))
              .addRecoveryBit(a)
              .recoverPublicKey(s.replace("0x", ""))
              .toRawBytes(!1)
              .subarray(1),
          );
          return sY(`0x${o.slice(-40)}`);
        },
        cO = (e) => {
          let t = cI(e),
            r = ak(uQ.getPublicKey(t, !1).slice(1)).slice(-40);
          return sY(`0x${r}`);
        },
        cN = (e, t) => {
          let r = cI(e);
          return `0x${sP(uQ.getPublicKey(r, t)).slice(4)}`;
        },
        cR = (e, t, r) =>
          ck(void 0, void 0, void 0, function* () {
            var n, i, s, a, o, u, c;
            let l,
              d,
              h,
              f,
              p = cI(e);
            if (
              ((l = (null == r ? void 0 : r.salt)
                ? "string" == typeof r.salt
                  ? sC(r.salt)
                  : r.salt
                : aM(32)),
              !(iG(t) || sx(t)))
            )
              throw new ed();
            let m = "string" == typeof t ? sC(sF(t)) : t;
            if (null == r ? void 0 : r.iv) {
              if (16 !== (d = "string" == typeof r.iv ? sC(r.iv) : r.iv).length)
                throw new eh();
            } else d = aM(16);
            let g = null != (n = null == r ? void 0 : r.kdf) ? n : "scrypt";
            if ("pbkdf2" === g) {
              if (
                (f = {
                  dklen: null != (i = null == r ? void 0 : r.dklen) ? i : 32,
                  salt: sP(l).replace("0x", ""),
                  c: null != (s = null == r ? void 0 : r.c) ? s : 262144,
                  prf: "hmac-sha256",
                }).c < 1e3
              )
                throw new ef();
              h = oV(m, l, f.c, f.dklen, "sha256");
            } else if ("scrypt" === g)
              ((f = {
                n: null != (a = null == r ? void 0 : r.n) ? a : 8192,
                r: null != (o = null == r ? void 0 : r.r) ? o : 8,
                p: null != (u = null == r ? void 0 : r.p) ? u : 1,
                dklen: null != (c = null == r ? void 0 : r.dklen) ? c : 32,
                salt: sP(l).replace("0x", ""),
              }),
                (h = oW(m, l, f.n, f.p, f.r, f.dklen)));
            else throw new eu();
            let y = yield oS(p, h.slice(0, 16), d, "aes-128-ctr"),
              v = sP(y).slice(2),
              b = ak(sE(h.slice(16, 32), y)).replace("0x", "");
            return {
              version: 3,
              id: aQ(),
              address: cO(p).toLowerCase().replace("0x", ""),
              crypto: {
                ciphertext: v,
                cipherparams: { iv: sP(d).replace("0x", "") },
                cipher: "aes-128-ctr",
                kdf: g,
                kdfparams: f,
                mac: b,
              },
            };
          }),
        cM = (e, t) => {
          let r = cI(e, t);
          return {
            address: cO(r),
            privateKey: sP(r),
            signTransaction: (e) => {
              throw new tc(
                "Do not have network access to sign the transaction",
              );
            },
            sign: (e) => cT("string" == typeof e ? e : JSON.stringify(e), r),
            encrypt: (e, t) =>
              ck(void 0, void 0, void 0, function* () {
                return cR(r, e, t);
              }),
          };
        },
        cF = () => {
          let e = uQ.utils.randomPrivateKey();
          return cM(`${sP(e)}`);
        },
        cL = (e, t, r) =>
          ck(void 0, void 0, void 0, function* () {
            let n,
              i =
                "object" == typeof e ? e : JSON.parse(r ? e.toLowerCase() : e);
            if ((sw.validateJSONSchema(uK, i), 3 !== i.version)) throw new el();
            let s = "string" == typeof t ? sC(sF(t)) : t;
            if ((sw.validate(["bytes"], [s]), "scrypt" === i.crypto.kdf)) {
              let e = i.crypto.kdfparams;
              n = oW(
                s,
                "string" == typeof e.salt ? sC(e.salt) : e.salt,
                e.n,
                e.p,
                e.r,
                e.dklen,
              );
            } else if ("pbkdf2" === i.crypto.kdf) {
              let e = i.crypto.kdfparams;
              n = oV(
                s,
                "string" == typeof e.salt ? sC(e.salt) : e.salt,
                e.c,
                e.dklen,
                "sha256",
              );
            } else throw new eu();
            let a = sC(i.crypto.ciphertext);
            if (ak(sE(n.slice(16, 32), a)).replace("0x", "") !== i.crypto.mac)
              throw new ec();
            return cM(
              yield oP(
                sC(i.crypto.ciphertext),
                n.slice(0, 16),
                sC(i.crypto.cipherparams.iv),
              ),
            );
          });
      var cD = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class cj {
        constructor(e) {
          ((this._requestManager = e), (this._requests = new Map()));
        }
        get requests() {
          return [...this._requests.values()].map((e) => e.payload);
        }
        add(e) {
          let t = a0(e),
            r = new a6();
          return (this._requests.set(t.id, { payload: t, promise: r }), r);
        }
        execute(e) {
          return cD(this, void 0, void 0, function* () {
            var t;
            if (0 === this.requests.length) return Promise.resolve([]);
            let r = new a6({
              timeout: null != (t = null == e ? void 0 : e.timeout) ? t : 1e3,
              eagerStart: !0,
              timeoutMessage: "Batch request timeout",
            });
            return (
              this._processBatchRequest(r).catch((e) => r.reject(e)),
              r.catch((e) => {
                (e instanceof eP &&
                  this._abortAllRequests("Batch request timeout"),
                  r.reject(e));
              }),
              r
            );
          });
        }
        _processBatchRequest(e) {
          return cD(this, void 0, void 0, function* () {
            var t, r;
            let n = yield this._requestManager.sendBatch(
              [...this._requests.values()].map((e) => e.payload),
            );
            if (n.length !== this._requests.size)
              throw (
                this._abortAllRequests("Invalid batch response"),
                new tS(
                  n,
                  `Batch request size mismatch the results size. Requests: ${this._requests.size}, Responses: ${n.length}`,
                )
              );
            let i = this.requests
                .map((e) => e.id)
                .map(Number)
                .sort((e, t) => e - t),
              s = n
                .map((e) => e.id)
                .map(Number)
                .sort((e, t) => e - t);
            if (JSON.stringify(i) !== JSON.stringify(s))
              throw (
                this._abortAllRequests("Invalid batch response"),
                new tS(
                  n,
                  `Batch request mismatch the results. Requests: [${i.join()}], Responses: [${s.join()}]`,
                )
              );
            for (let e of n)
              az(e)
                ? null == (t = this._requests.get(e.id)) ||
                  t.promise.resolve(e.result)
                : aV(e) &&
                  (null == (r = this._requests.get(e.id)) ||
                    r.promise.reject(e.error));
            e.resolve(n);
          });
        }
        _abortAllRequests(e) {
          for (let { promise: t } of this._requests.values())
            t.reject(new eC(e));
        }
      }
      class cH extends or {
        constructor(e) {
          var t;
          if (
            (super(),
            (this.providers = oy.providers),
            as(e) || ("string" == typeof e && "" !== e.trim()) || of(e))
          ) {
            ((this._requestManager = new oy(e)),
              (this._subscriptionManager = new ob(this._requestManager, {})));
            return;
          }
          let {
            config: r,
            provider: n,
            requestManager: i,
            subscriptionManager: s,
            registeredSubscriptions: a,
            accountProvider: o,
            wallet: u,
            requestManagerMiddleware: c,
          } = e;
          (this.setConfig(null != r ? r : {}),
            (this._requestManager =
              null != i
                ? i
                : new oy(
                    n,
                    null ==
                      (t = null == r ? void 0 : r.enableExperimentalFeatures)
                      ? void 0
                      : t.useSubscriptionWhenCheckingBlockTimeout,
                    c,
                  )),
            s
              ? (this._subscriptionManager = s)
              : (this._subscriptionManager = new ob(
                  this.requestManager,
                  null != a ? a : {},
                )),
            o && (this._accountProvider = o),
            u && (this._wallet = u));
        }
        get requestManager() {
          return this._requestManager;
        }
        get subscriptionManager() {
          return this._subscriptionManager;
        }
        get wallet() {
          return this._wallet;
        }
        get accountProvider() {
          return this._accountProvider;
        }
        static fromContextObject(...e) {
          return new this(...e.reverse());
        }
        getContextObject() {
          var e;
          return {
            config: this.config,
            provider: this.provider,
            requestManager: this.requestManager,
            subscriptionManager: this.subscriptionManager,
            registeredSubscriptions:
              null == (e = this.subscriptionManager)
                ? void 0
                : e.registeredSubscriptions,
            providers: this.providers,
            wallet: this.wallet,
            accountProvider: this.accountProvider,
          };
        }
        use(e, ...t) {
          let r = new e(...[...t, this.getContextObject()]);
          return (
            this.on(C.CONFIG_CHANGE, (e) => {
              r.setConfig({ [e.name]: e.newValue });
            }),
            (this[e.name] = r),
            r
          );
        }
        link(e) {
          (this.setConfig(e.config),
            (this._requestManager = e.requestManager),
            (this.provider = e.provider),
            (this._subscriptionManager = e.subscriptionManager),
            (this._wallet = e.wallet),
            (this._accountProvider = e._accountProvider),
            e.on(C.CONFIG_CHANGE, (e) => {
              this.setConfig({ [e.name]: e.newValue });
            }));
        }
        registerPlugin(e) {
          if (void 0 !== this[e.pluginNamespace])
            throw new eO(e.pluginNamespace);
          let t = { [e.pluginNamespace]: e };
          (t[e.pluginNamespace].link(this), Object.assign(this, t));
        }
        get provider() {
          return this.currentProvider;
        }
        set provider(e) {
          this.requestManager.setProvider(e);
        }
        get currentProvider() {
          return this.requestManager.provider;
        }
        set currentProvider(e) {
          this.requestManager.setProvider(e);
        }
        get givenProvider() {
          return cH.givenProvider;
        }
        setProvider(e) {
          return ((this.provider = e), !0);
        }
        setRequestManagerMiddleware(e) {
          this.requestManager.setMiddleware(e);
        }
        get BatchRequest() {
          return cj.bind(void 0, this._requestManager);
        }
        extend(e) {
          var t;
          return (
            e.property && !this[e.property] && (this[e.property] = {}),
            null == (t = e.methods) ||
              t.forEach((t) => {
                let r = (...e) => {
                  var r, n, i, s;
                  return (
                    (r = this),
                    (n = void 0),
                    (i = void 0),
                    (s = function* () {
                      return this.requestManager.send({
                        method: t.call,
                        params: e,
                      });
                    }),
                    new (i || (i = Promise))(function (e, t) {
                      function a(e) {
                        try {
                          u(s.next(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function o(e) {
                        try {
                          u(s.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function u(t) {
                        var r;
                        t.done
                          ? e(t.value)
                          : ((r = t.value) instanceof i
                              ? r
                              : new i(function (e) {
                                  e(r);
                                })
                            ).then(a, o);
                      }
                      u((s = s.apply(r, n || [])).next());
                    })
                  );
                };
                e.property
                  ? (this[e.property][t.name] = r)
                  : (this[t.name] = r);
              }),
            this
          );
        }
      }
      cH.providers = oy.providers;
      class cG {
        constructor(e) {
          if (
            ((this.toAddress = () => {
              if (this.isDirect()) {
                let e = this._iban.slice(4);
                return sY(ad(cG._parseInt(e, 36), 40));
              }
              throw Error(
                "Iban is indirect and cannot be converted. Must be length of 34 or 35",
              );
            }),
            cG.isIndirect(e) || cG.isDirect(e))
          )
            this._iban = e;
          else throw Error("Invalid IBAN was provided");
        }
        static isDirect(e) {
          return 34 === e.length || 35 === e.length;
        }
        isDirect() {
          return cG.isDirect(this._iban);
        }
        static isIndirect(e) {
          return 20 === e.length;
        }
        isIndirect() {
          return cG.isIndirect(this._iban);
        }
        static isValid(e) {
          return (
            /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(e) &&
            1 === cG._mod9710(cG._iso13616Prepare(e))
          );
        }
        isValid() {
          return cG.isValid(this._iban);
        }
        static fromBban(e) {
          let t = this._mod9710(this._iso13616Prepare(`XE00${e}`)),
            r = `0${(98 - t).toString()}`.slice(-2);
          return new cG(`XE${r}${e}`);
        }
        static createIndirect(e) {
          return cG.fromBban(`ETH${e.institution}${e.identifier}`);
        }
        static fromAddress(e) {
          if (!sr(e)) throw new tp(e);
          let t = ad(BigInt(sB(e)).toString(36), 15);
          return cG.fromBban(t.toUpperCase());
        }
        static toIban(e) {
          return cG.fromAddress(e).toString();
        }
        client() {
          return this.isIndirect() ? this._iban.slice(11) : "";
        }
        checksum() {
          return this._iban.slice(2, 4);
        }
        institution() {
          return this.isIndirect() ? this._iban.slice(7, 11) : "";
        }
        toString() {
          return this._iban;
        }
      }
      ((cG._iso13616Prepare = (e) => {
        let t = e.toUpperCase();
        return `${t.slice(4)}${t.slice(0, 4)}`
          .split("")
          .map((e) => {
            let t = e.charCodeAt(0);
            return t >= 65 && t <= 90 ? t - 65 + 10 : e;
          })
          .join("");
      }),
        (cG._parseInt = (e, t) =>
          [...e].reduce(
            (e, r) => BigInt(parseInt(r, t)) + BigInt(t) * e,
            BigInt(0),
          )),
        (cG._mod9710 = (e) => {
          let t,
            r = e;
          for (; r.length > 2; )
            ((t = r.slice(0, 9)),
              (r = `${(parseInt(t, 10) % 97).toString()}${r.slice(t.length)}`));
          return parseInt(r, 10) % 97;
        }),
        (cG.toAddress = (e) => new cG(e).toAddress()));
      var cU = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class cq extends ot {
        constructor(e) {
          (super(), (this[j] = "Promise"), (this._promise = new Promise(e)));
        }
        then(e, t) {
          return cU(this, void 0, void 0, function* () {
            return this._promise.then(e, t);
          });
        }
        catch(e) {
          return cU(this, void 0, void 0, function* () {
            return this._promise.catch(e);
          });
        }
        finally(e) {
          return cU(this, void 0, void 0, function* () {
            return this._promise.finally(e);
          });
        }
        on(e, t) {
          return (super.on(e, t), this);
        }
        once(e, t) {
          return (super.once(e, t), this);
        }
      }
      ((j = Symbol.toStringTag), r(3248));
      var cQ = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      function cZ(e) {
        return cQ(this, void 0, void 0, function* () {
          return e.send({ method: "eth_syncing", params: [] });
        });
      }
      function cz(e, t) {
        return cQ(this, void 0, void 0, function* () {
          return (
            sw.validate(["hex"], [t]),
            e.send({ method: "eth_sendRawTransaction", params: [t] })
          );
        });
      }
      function cV(e, t, r) {
        return cQ(this, void 0, void 0, function* () {
          return (
            sw.validate(["blockNumberOrTag", "bool"], [t, r]),
            e.send({ method: "eth_getBlockByNumber", params: [t, r] })
          );
        });
      }
      var cK = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, s) {
            function a(e) {
              try {
                u(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        cJ = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, s) {
            function a(e) {
              try {
                u(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      let cW = (e) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({ method: "personal_listAccounts", params: [] });
          }),
        c$ = (e, t) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({ method: "personal_newAccount", params: [t] });
          }),
        cY = (e, t, r, n) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({
              method: "personal_unlockAccount",
              params: [t, r, n],
            });
          }),
        cX = (e, t) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({ method: "personal_lockAccount", params: [t] });
          }),
        c0 = (e, t, r) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({ method: "personal_importRawKey", params: [t, r] });
          }),
        c1 = (e, t, r) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({
              method: "personal_sendTransaction",
              params: [t, r],
            });
          }),
        c2 = (e, t, r) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({
              method: "personal_signTransaction",
              params: [t, r],
            });
          }),
        c3 = (e, t, r, n) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({ method: "personal_sign", params: [t, r, n] });
          }),
        c6 = (e, t, r) =>
          cJ(void 0, void 0, void 0, function* () {
            return e.send({ method: "personal_ecRecover", params: [t, r] });
          }),
        c5 = {
          type: "object",
          properties: {
            accessList: { type: "null" },
            maxFeePerGas: { type: "null" },
            maxPriorityFeePerGas: { type: "null" },
          },
        },
        c4 = {
          type: "object",
          properties: {
            maxFeePerGas: { type: "null" },
            maxPriorityFeePerGas: { type: "null" },
          },
        },
        c8 = { type: "object", properties: { gasPrice: { type: "null" } } },
        c9 = (e, t, r) => {
          try {
            sw.validateJSONSchema(e, t);
          } catch (e) {
            if (e instanceof iD) throw new td(e.errors, r);
            throw e;
          }
        },
        c7 = (e) => {
          var t, r;
          if (!sf(e.type)) {
            let t;
            switch (e.type) {
              case "0x0":
                t = c5;
                break;
              case "0x1":
                t = c4;
                break;
              case "0x2":
                t = c8;
                break;
              default:
                return aA({ format: "uint" }, e.type, W);
            }
            return (c9(t, e, e.type), aA({ format: "uint" }, e.type, W));
          }
          if (!sf(e.maxFeePerGas) || !sf(e.maxPriorityFeePerGas))
            return (c9(c8, e, "0x2"), "0x2");
          if (!sf(e.accessList)) return (c9(c4, e, "0x1"), "0x1");
          let n =
            null != (t = e.hardfork)
              ? t
              : null == (r = e.common)
                ? void 0
                : r.hardfork;
          if (!sf(n)) {
            let t = Object.keys(k).indexOf(n);
            if (t >= Object.keys(k).indexOf("london"))
              return sf(e.gasPrice) ? "0x2" : "0x0";
            if (t === Object.keys(k).indexOf("berlin")) return "0x0";
          }
          if (!sf(e.gasPrice)) return (c9(c5, e, "0x0"), "0x0");
        },
        le = (e, t) => {
          var r;
          return (
            null != (r = null == t ? void 0 : t.transactionTypeParser) ? r : c7
          )(e);
        },
        lt = (e) => (e[0] > 127 ? "0x0" : sV(e[0])),
        lr = {
          type: "array",
          items: Object.assign(
            {},
            {
              type: "object",
              properties: {
                address: { format: "address" },
                storageKeys: { type: "array", items: { format: "bytes32" } },
              },
            },
          ),
        },
        ln = {
          type: "object",
          properties: {
            accessList: Object.assign({}, lr),
            gasUsed: { type: "string" },
          },
        },
        li = {
          type: "string",
          enum: ["goerli", "kovan", "mainnet", "rinkeby", "ropsten", "sepolia"],
        },
        ls = {
          type: "string",
          enum: [
            "arrowGlacier",
            "berlin",
            "byzantium",
            "chainstart",
            "constantinople",
            "dao",
            "homestead",
            "istanbul",
            "london",
            "merge",
            "muirGlacier",
            "petersburg",
            "shanghai",
            "spuriousDragon",
            "tangerineWhistle",
          ],
        },
        la = {
          type: "object",
          properties: {
            from: { format: "address" },
            to: { oneOf: [{ format: "address" }, { type: "null" }] },
            value: { format: "uint" },
            gas: { format: "uint" },
            gasPrice: { format: "uint" },
            effectiveGasPrice: { format: "uint" },
            type: { format: "uint" },
            maxFeePerGas: { format: "uint" },
            maxPriorityFeePerGas: { format: "uint" },
            accessList: Object.assign({}, lr),
            data: { format: "bytes" },
            input: { format: "bytes" },
            nonce: { format: "uint" },
            chain: Object.assign({}, li),
            hardfork: Object.assign({}, ls),
            chainId: { format: "uint" },
            networkId: { format: "uint" },
            common: {
              type: "object",
              properties: {
                customChain: Object.assign(
                  {},
                  {
                    type: "object",
                    properties: {
                      name: { format: "string" },
                      networkId: { format: "uint" },
                      chainId: { format: "uint" },
                    },
                  },
                ),
                baseChain: Object.assign({}, li),
                hardfork: Object.assign({}, ls),
              },
            },
            gasLimit: { format: "uint" },
            v: { format: "uint" },
            r: { format: "bytes32" },
            s: { format: "bytes32" },
          },
        },
        lo = {
          type: "object",
          properties: Object.assign(Object.assign({}, la.properties), {
            blockHash: { format: "bytes32" },
            blockNumber: { format: "uint" },
            hash: { format: "bytes32" },
            transactionIndex: { format: "uint" },
            from: { format: "address" },
            to: { oneOf: [{ format: "address" }, { type: "null" }] },
            value: { format: "uint" },
            gas: { format: "uint" },
            gasPrice: { format: "uint" },
            effectiveGasPrice: { format: "uint" },
            type: { format: "uint" },
            maxFeePerGas: { format: "uint" },
            maxPriorityFeePerGas: { format: "uint" },
            accessList: Object.assign({}, lr),
            data: { format: "bytes" },
            input: { format: "bytes" },
            nonce: { format: "uint" },
            gasLimit: { format: "uint" },
            v: { format: "uint" },
            r: { format: "bytes32" },
            s: { format: "bytes32" },
          }),
        },
        lu = {
          type: "object",
          properties: {
            index: { format: "uint" },
            validatorIndex: { format: "uint" },
            address: { format: "address" },
            amount: { format: "uint" },
          },
        },
        lc = {
          type: "object",
          properties: {
            baseFeePerGas: { format: "uint" },
            blobGasUsed: { format: "uint" },
            difficulty: { format: "uint" },
            excessBlobGas: { format: "uint" },
            extraData: { format: "bytes" },
            gasLimit: { format: "uint" },
            gasUsed: { format: "uint" },
            hash: { format: "bytes32" },
            logsBloom: { format: "bytes256" },
            miner: { format: "bytes" },
            mixHash: { format: "bytes32" },
            nonce: { format: "uint" },
            number: { format: "uint" },
            parentBeaconBlockRoot: { format: "bytes32" },
            parentHash: { format: "bytes32" },
            receiptsRoot: { format: "bytes32" },
            sha3Uncles: { format: "bytes32" },
            size: { format: "uint" },
            stateRoot: { format: "bytes32" },
            timestamp: { format: "uint" },
            totalDifficulty: { format: "uint" },
            transactions: {
              oneOf: [
                { type: "array", items: Object.assign({}, lo) },
                { type: "array", items: { format: "bytes32" } },
              ],
            },
            transactionsRoot: { format: "bytes32" },
            uncles: { type: "array", items: { format: "bytes32" } },
            withdrawals: { type: "array", items: Object.assign({}, lu) },
            withdrawalsRoot: { format: "bytes32" },
          },
        },
        ll = {
          type: "object",
          properties: {
            author: { format: "bytes32" },
            excessDataGas: { format: "uint" },
            baseFeePerGas: { format: "uint" },
            blobGasUsed: { format: "uint" },
            difficulty: { format: "uint" },
            excessBlobGas: { format: "uint" },
            extraData: { format: "bytes" },
            gasLimit: { format: "uint" },
            gasUsed: { format: "uint" },
            hash: { format: "bytes32" },
            logsBloom: { format: "bytes256" },
            miner: { format: "bytes" },
            mixHash: { format: "bytes32" },
            nonce: { format: "uint" },
            number: { format: "uint" },
            parentBeaconBlockRoot: { format: "bytes32" },
            parentHash: { format: "bytes32" },
            receiptsRoot: { format: "bytes32" },
            sha3Uncles: { format: "bytes32" },
            size: { format: "uint" },
            stateRoot: { format: "bytes32" },
            timestamp: { format: "uint" },
            totalDifficulty: { format: "uint" },
            transactions: { type: "array", items: { format: "bytes32" } },
            transactionsRoot: { format: "bytes32" },
            uncles: { type: "array", items: { format: "bytes32" } },
            withdrawals: { type: "array", items: Object.assign({}, lu) },
            withdrawalsRoot: { format: "bytes32" },
          },
        },
        ld = {
          type: "object",
          properties: {
            removed: { format: "bool" },
            logIndex: { format: "uint" },
            transactionIndex: { format: "uint" },
            transactionHash: { format: "bytes32" },
            blockHash: { format: "bytes32" },
            blockNumber: { format: "uint" },
            address: { format: "address" },
            data: { format: "bytes" },
            topics: { type: "array", items: { format: "bytes32" } },
          },
        },
        lh = {
          type: "object",
          properties: {
            startingBlock: { format: "string" },
            currentBlock: { format: "string" },
            highestBlock: { format: "string" },
            knownStates: { format: "string" },
            pulledStates: { format: "string" },
          },
        },
        lf = {
          type: "object",
          properties: {
            transactionHash: { format: "bytes32" },
            transactionIndex: { format: "uint" },
            blockHash: { format: "bytes32" },
            blockNumber: { format: "uint" },
            from: { format: "address" },
            to: { format: "address" },
            cumulativeGasUsed: { format: "uint" },
            gasUsed: { format: "uint" },
            effectiveGasPrice: { format: "uint" },
            contractAddress: { format: "address" },
            logs: { type: "array", items: Object.assign({}, ld) },
            logsBloom: { format: "bytes" },
            root: { format: "bytes" },
            status: { format: "uint" },
            type: { format: "uint" },
          },
        },
        lp = {
          type: "object",
          properties: {
            messageHash: { format: "bytes" },
            r: { format: "bytes32" },
            s: { format: "bytes32" },
            v: { format: "bytes" },
            message: { format: "bytes" },
            signature: { format: "bytes" },
          },
        },
        lm = {
          type: "object",
          properties: {
            oldestBlock: { format: "uint" },
            baseFeePerGas: { type: "array", items: { format: "uint" } },
            reward: {
              type: "array",
              items: { type: "array", items: { format: "uint" } },
            },
            gasUsedRatio: { type: "array", items: { type: "number" } },
          },
        },
        lg = {
          type: "object",
          properties: {
            balance: { format: "uint" },
            codeHash: { format: "bytes32" },
            nonce: { format: "uint" },
            storageHash: { format: "bytes32" },
            accountProof: { type: "array", items: { format: "bytes32" } },
            storageProof: {
              type: "array",
              items: Object.assign(
                {},
                {
                  type: "object",
                  properties: {
                    key: { format: "bytes32" },
                    value: { format: "uint" },
                    proof: { type: "array", items: { format: "bytes32" } },
                  },
                },
              ),
            },
          },
        };
      function ly(
        e,
        t = J,
        r = { transactionSchema: lo, fillInputAndData: !1 },
      ) {
        var n, i;
        let s = ao({}, e);
        if (
          (!sf(null == e ? void 0 : e.common) &&
            ((s.common = Object.assign({}, e.common)),
            sf(null == (n = e.common) ? void 0 : n.customChain) ||
              (s.common.customChain = Object.assign({}, e.common.customChain))),
          !sf(
            (s = aA(null != (i = r.transactionSchema) ? i : lo, s, t)).data,
          ) &&
            !sf(s.input) &&
            sV(s.data) !== sV(s.input))
        )
          throw new tr({ data: sP(s.data), input: sP(s.input) });
        return (
          r.fillInputAndData &&
            (sf(s.data)
              ? sf(s.input) || (s.data = s.input)
              : (s.input = s.data)),
          sf(s.gasLimit) || ((s.gas = s.gasLimit), delete s.gasLimit),
          s
        );
      }
      var lv = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      function lb(e, t) {
        return lv(this, void 0, void 0, function* () {
          return aA(
            { format: "uint" },
            yield (function (e) {
              return cK(this, void 0, void 0, function* () {
                return e.send({ method: "net_version", params: [] });
              });
            })(e.requestManager),
            t,
          );
        });
      }
      let lA = (e) =>
        lv(void 0, void 0, void 0, function* () {
          return (function (e) {
            return cK(this, void 0, void 0, function* () {
              return e.send({ method: "net_listening", params: [] });
            });
          })(e.requestManager);
        });
      var lw = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class lx extends cH {
        getId(e = this.defaultReturnFormat) {
          return lw(this, void 0, void 0, function* () {
            return lb(this, e);
          });
        }
        getPeerCount(e = this.defaultReturnFormat) {
          return lw(this, void 0, void 0, function* () {
            return (function (e, t) {
              return lv(this, void 0, void 0, function* () {
                return aA(
                  { format: "uint" },
                  yield (function (e) {
                    return cK(this, void 0, void 0, function* () {
                      return e.send({ method: "net_peerCount", params: [] });
                    });
                  })(e.requestManager),
                  t,
                );
              });
            })(this, e);
          });
        }
        isListening() {
          return lw(this, void 0, void 0, function* () {
            return lA(this);
          });
        }
      }
      let lE = "ALLEVENTS",
        lk = { name: lE, signature: "", type: "event", inputs: [] },
        lI = { bytes: x.HEX, number: w.NUMBER };
      var l_ = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      function lS(e, t, r) {
        return l_(this, void 0, void 0, function* () {
          let n = lB(e, t);
          if (!sf(n)) {
            if (n.startsWith("-") || 0 > Number(n) || Number(n) > 127)
              throw new tt(n);
            if (sf(e.gasPrice) && ("0x0" === n || "0x1" === n))
              return {
                gasPrice: yield he(t, r),
                maxPriorityFeePerGas: void 0,
                maxFeePerGas: void 0,
              };
            if ("0x2" === n)
              return Object.assign(
                { gasPrice: void 0 },
                yield (function (e, t, r) {
                  return l_(this, void 0, void 0, function* () {
                    var n, i, s, a;
                    let o,
                      u = yield hr(t, t.defaultBlock, !1, W);
                    if (sf(u.baseFeePerGas)) throw new te();
                    if (
                      (sf(e.gasPrice) &&
                        BigInt(u.baseFeePerGas) === BigInt(0) &&
                        (o = yield he(t, r)),
                      !sf(e.gasPrice) || !sf(o))
                    ) {
                      let t = aA(
                        { format: "uint" },
                        null != (n = e.gasPrice) ? n : o,
                        r,
                      );
                      return { maxPriorityFeePerGas: t, maxFeePerGas: t };
                    }
                    return {
                      maxPriorityFeePerGas: aA(
                        { format: "uint" },
                        null != (i = e.maxPriorityFeePerGas)
                          ? i
                          : t.defaultMaxPriorityFeePerGas,
                        r,
                      ),
                      maxFeePerGas: aA(
                        { format: "uint" },
                        null != (s = e.maxFeePerGas)
                          ? s
                          : BigInt(u.baseFeePerGas) * BigInt(2) +
                              BigInt(
                                null != (a = e.maxPriorityFeePerGas)
                                  ? a
                                  : t.defaultMaxPriorityFeePerGas,
                              ),
                        r,
                      ),
                    };
                  });
                })(e, t, r),
              );
          }
        });
      }
      var lT = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let lP = (e, t, r, n) => {
          if (void 0 !== r && e in r && void 0 !== r[e]) {
            if ("string" == typeof r[e] && sr(r[e])) return r[e];
            if (!iU(r[e]) && sa(r[e])) {
              if (t.wallet) {
                let n = t.wallet.get(aA({ format: "uint" }, r[e], lI));
                if (!sf(n)) return n.address;
              }
              throw new tl();
            }
            throw "from" === e ? new eQ(r.from) : new eZ(r.to);
          }
          if ("from" === e) {
            if (!sf(n)) return cO(n);
            if (!sf(t.defaultAccount)) return t.defaultAccount;
          }
        },
        lC = (e, t, ...r) =>
          lT(
            void 0,
            [e, t, ...r],
            void 0,
            function* (e, t, r = e.defaultReturnFormat) {
              if (sf(t)) throw new e7();
              return hi(e, t, e.defaultBlock, r);
            },
          ),
        lB = (e, t) => {
          let r = le(e, t);
          return sf(r)
            ? sf(t.defaultTransactionType)
              ? void 0
              : aA({ format: "uint" }, t.defaultTransactionType, W)
            : r;
        },
        lO = (e) =>
          lT(void 0, void 0, void 0, function* () {
            var t;
            return (
              null != (t = e.web3Context.transactionBuilder)
                ? t
                : function (e) {
                    return lT(this, void 0, void 0, function* () {
                      var t, r;
                      let n = aA(
                        la,
                        e.transaction,
                        e.web3Context.defaultReturnFormat,
                      );
                      if (
                        (sf(n.from) &&
                          (n.from = lP(
                            "from",
                            e.web3Context,
                            void 0,
                            e.privateKey,
                          )),
                        sf(n.nonce) &&
                          (n.nonce = yield lC(e.web3Context, n.from, W)),
                        sf(n.value) && (n.value = "0x0"),
                        sf(n.data))
                      )
                        sf(n.input)
                          ? (n.input = "0x")
                          : n.input.startsWith("0x") ||
                            (n.input = `0x${n.input}`);
                      else {
                        if (!sf(n.input) && n.data !== n.input)
                          throw new tr({
                            data: sP(n.data),
                            input: sP(n.input),
                          });
                        n.data.startsWith("0x") || (n.data = `0x${n.data}`);
                      }
                      if (sf(n.common)) {
                        if (e.web3Context.defaultCommon) {
                          let t = e.web3Context.defaultCommon,
                            r = t.customChain.chainId,
                            i = t.customChain.networkId,
                            s = t.customChain.name;
                          n.common = Object.assign(Object.assign({}, t), {
                            customChain: { chainId: r, networkId: i, name: s },
                          });
                        }
                        (sf(n.chain) && (n.chain = e.web3Context.defaultChain),
                          sf(n.hardfork) &&
                            (n.hardfork = e.web3Context.defaultHardfork));
                      }
                      if (
                        (sf(n.chainId) &&
                          sf(
                            null == (t = n.common)
                              ? void 0
                              : t.customChain.chainId,
                          ) &&
                          (n.chainId = yield hc(e.web3Context, W)),
                        sf(n.networkId) &&
                          (n.networkId =
                            null != (r = e.web3Context.defaultNetworkId)
                              ? r
                              : yield lb(e.web3Context, W)),
                        sf(n.gasLimit) && !sf(n.gas) && (n.gasLimit = n.gas),
                        (n.type = lB(n, e.web3Context)),
                        sf(n.accessList) &&
                          ("0x1" === n.type || "0x2" === n.type) &&
                          (n.accessList = []),
                        e.fillGasPrice &&
                          (n = Object.assign(
                            Object.assign({}, n),
                            yield lS(n, e.web3Context, W),
                          )),
                        sf(n.gas) && sf(n.gasLimit) && e.fillGasLimit)
                      ) {
                        let t = yield ho(e.web3Context, n, "latest", W);
                        n = Object.assign(Object.assign({}, n), {
                          gas: aA({ format: "uint" }, t, W),
                        });
                      }
                      return n;
                    });
                  }
            )(
              Object.assign(Object.assign({}, e), {
                transaction: e.transaction,
              }),
            );
          });
      var lN = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      function lR(e, t, r) {
        let [n, i] = aq(
          () =>
            lN(this, void 0, void 0, function* () {
              let n;
              try {
                n = yield ht(e, lI);
              } catch (e) {
                console.warn(
                  "An error happen while trying to get the block number",
                  e,
                );
                return;
              }
              let i = n - t;
              if (i >= e.transactionBlockTimeout)
                return new ta({
                  starterBlockNumber: t,
                  numberOfBlocks: i,
                  transactionHash: r,
                });
            }),
          e.transactionPollingInterval,
        );
        return [
          i,
          {
            clean: () => {
              clearInterval(n);
            },
          },
        ];
      }
      function lM(e, t) {
        return lN(this, void 0, void 0, function* () {
          var r;
          let n,
            { provider: i } = e.requestManager,
            s = yield ht(e, lI);
          return (null == (r = i.supportsSubscriptions) ? void 0 : r.call(i)) &&
            e.enableExperimentalFeatures.useSubscriptionWhenCheckingBlockTimeout
            ? yield (function (e, t, r) {
                return lN(this, void 0, void 0, function* () {
                  var n;
                  let i,
                    s,
                    a = !0;
                  function o(n, i) {
                    (i &&
                      console.warn(
                        "error happened at subscription. So revert to polling...",
                        i,
                      ),
                      s.clean(),
                      (a = !1));
                    let [o, u] = lR(e, t, r);
                    ((s.clean = u.clean), o.catch((e) => n(e)));
                  }
                  try {
                    ((i = yield null == (n = e.subscriptionManager)
                      ? void 0
                      : n.subscribe("newHeads")),
                      (s = {
                        clean: () => {
                          var t;
                          i.id &&
                            (null == (t = e.subscriptionManager) ||
                              t
                                .removeSubscription(i)
                                .then(() => {})
                                .catch(() => {}));
                        },
                      }));
                  } catch (n) {
                    return lR(e, t, r);
                  }
                  return [
                    new Promise((n, s) => {
                      try {
                        (i.on("data", (n) => {
                          if (((a = !1), !(null == n ? void 0 : n.number)))
                            return;
                          let i = Number(BigInt(n.number) - BigInt(t));
                          i >= e.transactionBlockTimeout &&
                            s(
                              new ta({
                                starterBlockNumber: t,
                                numberOfBlocks: i,
                                transactionHash: r,
                              }),
                            );
                        }),
                          i.on("error", (e) => {
                            o(s, e);
                          }));
                      } catch (e) {
                        o(s, e);
                      }
                      setTimeout(() => {
                        a && o(s);
                      }, 1e3 * e.blockHeaderTimeout);
                    }),
                    s,
                  ];
                });
              })(e, s, t)
            : lR(e, s, t);
        });
      }
      function lF(e, t, r) {
        var n, i, s, a;
        return (
          (n = this),
          (i = void 0),
          (s = void 0),
          (a = function* () {
            let [n, i] = aU(
                e.transactionSendTimeout,
                new tn({
                  numberOfSeconds: e.transactionSendTimeout / 1e3,
                  transactionHash: r,
                }),
              ),
              [s, a] = yield lM(e, r);
            try {
              return yield Promise.race([t(), i, s]);
            } finally {
              (clearTimeout(n), a.clean());
            }
          }),
          new (s || (s = Promise))(function (e, t) {
            function r(e) {
              try {
                u(a.next(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              try {
                u(a.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function u(t) {
              var n;
              t.done
                ? e(t.value)
                : ((n = t.value) instanceof s
                    ? n
                    : new s(function (e) {
                        e(n);
                      })
                  ).then(r, o);
            }
            u((a = a.apply(n, i || [])).next());
          })
        );
      }
      var lL = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      function lD(e, t, r, n) {
        return lL(this, void 0, void 0, function* () {
          var i;
          let [s, a] = aH(
              () =>
                lL(this, void 0, void 0, function* () {
                  try {
                    return (null != n ? n : hn)(e, t, r);
                  } catch (e) {
                    console.warn(
                      "An error happen while trying to get the transaction receipt",
                      e,
                    );
                    return;
                  }
                }),
              null != (i = e.transactionReceiptPollingInterval)
                ? i
                : e.transactionPollingInterval,
            ),
            [o, u] = aU(
              e.transactionPollingTimeout,
              new ts({
                numberOfSeconds: e.transactionPollingTimeout / 1e3,
                transactionHash: t,
              }),
            ),
            [c, l] = yield lM(e, t);
          try {
            return yield Promise.race([s, u, c]);
          } finally {
            (o && clearTimeout(o), a && clearInterval(a), l.clean());
          }
        });
      }
      let lj = ({
        web3Context: e,
        transactionReceipt: t,
        transactionPromiEvent: r,
        customTransactionReceiptSchema: n,
        returnFormat: i,
      }) => {
        var s;
        let a = 1,
          o = setInterval(
            () => {
              !(function (e, t, r, n) {
                new (r || (r = Promise))(function (i, s) {
                  function a(e) {
                    try {
                      u(n.next(e));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function o(e) {
                    try {
                      u(n.throw(e));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function u(e) {
                    var t;
                    e.done
                      ? i(e.value)
                      : ((t = e.value) instanceof r
                          ? t
                          : new r(function (e) {
                              e(t);
                            })
                        ).then(a, o);
                  }
                  u((n = n.apply(e, t || [])).next());
                });
              })(void 0, void 0, void 0, function* () {
                if (a >= e.transactionConfirmationBlocks)
                  return void clearInterval(o);
                let s = yield cV(
                  e.requestManager,
                  sN(BigInt(t.blockNumber) + BigInt(a)),
                  !1,
                );
                (null == s ? void 0 : s.hash) &&
                  ((a += 1),
                  r.emit("confirmation", {
                    confirmations: aA({ format: "uint" }, a, i),
                    receipt: aA(null != n ? n : lf, t, i),
                    latestBlockHash: aA({ format: "bytes32" }, s.hash, i),
                  }));
              });
            },
            null != (s = e.transactionReceiptPollingInterval)
              ? s
              : e.transactionPollingInterval,
          );
      };
      var lH = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let lG = ({
          web3Context: e,
          transactionReceipt: t,
          transactionPromiEvent: r,
          customTransactionReceiptSchema: n,
          returnFormat: i,
        }) => {
          let s,
            a = !0;
          (setImmediate(() => {
            var o;
            null == (o = e.subscriptionManager) ||
              o
                .subscribe("newHeads")
                .then((o) => {
                  (o.on("data", (u) =>
                    lH(void 0, void 0, void 0, function* () {
                      var c;
                      if (
                        ((a = !1),
                        !(null == u ? void 0 : u.number) ||
                          s === (null == u ? void 0 : u.parentHash))
                      )
                        return;
                      s = null == u ? void 0 : u.parentHash;
                      let l =
                        BigInt(u.number) - BigInt(t.blockNumber) + BigInt(1);
                      (r.emit("confirmation", {
                        confirmations: aA({ format: "uint" }, l, i),
                        receipt: aA(null != n ? n : lf, t, i),
                        latestBlockHash: aA(
                          { format: "bytes32" },
                          u.parentHash,
                          i,
                        ),
                      }),
                        l >= e.transactionConfirmationBlocks &&
                          (yield null == (c = e.subscriptionManager)
                            ? void 0
                            : c.removeSubscription(o)));
                    }),
                  ),
                    o.on("error", () =>
                      lH(void 0, void 0, void 0, function* () {
                        var s;
                        (yield null == (s = e.subscriptionManager)
                          ? void 0
                          : s.removeSubscription(o),
                          (a = !1),
                          lj({
                            web3Context: e,
                            transactionReceipt: t,
                            transactionPromiEvent: r,
                            customTransactionReceiptSchema: n,
                            returnFormat: i,
                          }));
                      }),
                    ));
                })
                .catch(() => {
                  ((a = !1),
                    lj({
                      web3Context: e,
                      transactionReceipt: t,
                      customTransactionReceiptSchema: n,
                      transactionPromiEvent: r,
                      returnFormat: i,
                    }));
                });
          }),
            setTimeout(() => {
              a &&
                lj({
                  web3Context: e,
                  transactionReceipt: t,
                  transactionPromiEvent: r,
                  returnFormat: i,
                });
            }, 1e3 * e.blockHeaderTimeout));
        },
        lU = (e) =>
          !as(e) && "object" == typeof e && !as(e.type) && "error" === e.type,
        lq = (e) =>
          !as(e) && "object" == typeof e && !as(e.type) && "event" === e.type,
        lQ = (e) =>
          !as(e) &&
          "object" == typeof e &&
          !as(e.type) &&
          "function" === e.type,
        lZ = (e) =>
          !as(e) &&
          "object" == typeof e &&
          !as(e.type) &&
          "constructor" === e.type,
        lz = (e) =>
          "object" == typeof e && void 0 === e.components && void 0 === e.name,
        lV = (e) =>
          e.includes("[]")
            ? { type: "tuple[]", name: e.slice(0, -2) }
            : { type: "tuple", name: e },
        lK = (e) => {
          let t = [];
          for (let r of Object.keys(e)) {
            let n = e[r];
            "object" == typeof n
              ? t.push(
                  Object.assign(Object.assign({}, lV(r)), {
                    components: lK(n),
                  }),
                )
              : t.push({ name: r, type: e[r] });
          }
          return t;
        },
        lJ = (e) =>
          "string" == typeof e &&
          /^(-)?0x[0-9a-f]*$/i.test(e) &&
          e.length % 2 == 1,
        lW = (e, t) => {
          let r = [];
          return (
            t.forEach((t) => {
              if ("object" == typeof t.components) {
                if (!t.type.startsWith("tuple"))
                  throw new eB(
                    `Invalid value given "${t.type}". Error: components found but type is not tuple.`,
                  );
                let n = t.type.indexOf("["),
                  i = n >= 0 ? t.type.substring(n) : "",
                  s = lW(e, t.components);
                Array.isArray(s) && e
                  ? r.push(`tuple(${s.join(",")})${i}`)
                  : e
                    ? r.push(`(${s.join()})`)
                    : r.push(`(${s.join(",")})${i}`);
              } else r.push(t.type);
            }),
            r
          );
        },
        l$ = (e) => {
          var t, r, n, i;
          return lU(e) || lq(e) || lQ(e)
            ? (null == (t = e.name) ? void 0 : t.includes("("))
              ? e.name
              : `${null != (r = e.name) ? r : ""}(${lW(!1, null != (n = e.inputs) ? n : []).join(",")})`
            : `(${lW(!1, null != (i = e.inputs) ? i : []).join(",")})`;
        },
        lY = (e) => {
          let t;
          if ("string" != typeof e && !lU(e))
            throw new eB("Invalid parameter value in encodeErrorSignature");
          return ak(
            e && ("function" == typeof e || "object" == typeof e) ? l$(e) : e,
          );
        },
        lX = (e) => {
          let t;
          if ("string" != typeof e && !lq(e))
            throw new eB("Invalid parameter value in encodeEventSignature");
          return ak(
            e && ("function" == typeof e || "object" == typeof e) ? l$(e) : e,
          );
        };
      function l0(e, t) {
        let r = e.exec(t);
        return r?.groups;
      }
      var l1 = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        l2 =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        l3 = /^\(.+?\).*?$/,
        l6 = Object.defineProperty,
        l5 = (e, t, r) =>
          t in e
            ? l6(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        l4 = (e, t, r) => (l5(e, "symbol" != typeof t ? t + "" : t, r), r),
        l8 = class extends Error {
          constructor(e, t = {}) {
            let r =
                t.cause instanceof l8
                  ? t.cause.details
                  : t.cause?.message
                    ? t.cause.message
                    : t.details,
              n = (t.cause instanceof l8 && t.cause.docsPath) || t.docsPath;
            (super(
              [
                e || "An error occurred.",
                "",
                ...(t.metaMessages ? [...t.metaMessages, ""] : []),
                ...(n ? [`Docs: https://abitype.dev${n}`] : []),
                ...(r ? [`Details: ${r}`] : []),
                "Version: abitype@0.7.1",
              ].join("\n"),
            ),
              l4(this, "details"),
              l4(this, "docsPath"),
              l4(this, "metaMessages"),
              l4(this, "shortMessage"),
              l4(this, "name", "AbiTypeError"),
              t.cause && (this.cause = t.cause),
              (this.details = r),
              (this.docsPath = n),
              (this.metaMessages = t.metaMessages),
              (this.shortMessage = e));
          }
        },
        l9 = /^error (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)$/,
        l7 = /^event (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)$/,
        de =
          /^function (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns \((?<returns>.*?)\))?$/,
        dt = /^struct (?<name>[a-zA-Z0-9_]+) \{(?<properties>.*?)\}$/;
      function dr(e) {
        return dt.test(e);
      }
      var dn =
          /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,
        di = /^fallback\(\)$/,
        ds = /^receive\(\) external payable$/,
        da = new Set(["memory", "indexed", "storage", "calldata"]),
        du = new Set(["indexed"]),
        dc = new Set(["calldata", "memory", "storage"]),
        dl = new Map([
          ["address", { type: "address" }],
          ["bool", { type: "bool" }],
          ["bytes", { type: "bytes" }],
          ["bytes32", { type: "bytes32" }],
          ["int", { type: "int256" }],
          ["int256", { type: "int256" }],
          ["string", { type: "string" }],
          ["uint", { type: "uint256" }],
          ["uint8", { type: "uint8" }],
          ["uint16", { type: "uint16" }],
          ["uint24", { type: "uint24" }],
          ["uint32", { type: "uint32" }],
          ["uint64", { type: "uint64" }],
          ["uint96", { type: "uint96" }],
          ["uint112", { type: "uint112" }],
          ["uint160", { type: "uint160" }],
          ["uint192", { type: "uint192" }],
          ["uint256", { type: "uint256" }],
          ["address owner", { type: "address", name: "owner" }],
          ["address to", { type: "address", name: "to" }],
          ["bool approved", { type: "bool", name: "approved" }],
          ["bytes _data", { type: "bytes", name: "_data" }],
          ["bytes data", { type: "bytes", name: "data" }],
          ["bytes signature", { type: "bytes", name: "signature" }],
          ["bytes32 hash", { type: "bytes32", name: "hash" }],
          ["bytes32 r", { type: "bytes32", name: "r" }],
          ["bytes32 root", { type: "bytes32", name: "root" }],
          ["bytes32 s", { type: "bytes32", name: "s" }],
          ["string name", { type: "string", name: "name" }],
          ["string symbol", { type: "string", name: "symbol" }],
          ["string tokenURI", { type: "string", name: "tokenURI" }],
          ["uint tokenId", { type: "uint256", name: "tokenId" }],
          ["uint8 v", { type: "uint8", name: "v" }],
          ["uint256 balance", { type: "uint256", name: "balance" }],
          ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
          ["uint256 value", { type: "uint256", name: "value" }],
          [
            "event:address indexed from",
            { type: "address", name: "from", indexed: !0 },
          ],
          [
            "event:address indexed to",
            { type: "address", name: "to", indexed: !0 },
          ],
          [
            "event:uint indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
          [
            "event:uint256 indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
        ]),
        dd =
          /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/,
        dh =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/,
        df = /^u?int$/;
      function dp(e, t) {
        var r, n, i;
        let s,
          a = (r = t?.type) ? `${r}:${e}` : e;
        if (dl.has(a)) return dl.get(a);
        let o = l3.test(e),
          u = l0(o ? dh : dd, e);
        if (!u) throw new l8("Invalid ABI parameter.", { details: e });
        if (
          u.name &&
          ("address" === (n = u.name) ||
            "bool" === n ||
            "function" === n ||
            "string" === n ||
            "tuple" === n ||
            l1.test(n) ||
            l2.test(n) ||
            dy.test(n))
        )
          throw new l8("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${u.name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          });
        let c = u.name ? { name: u.name } : {},
          l = "indexed" === u.modifier ? { indexed: !0 } : {},
          d = t?.structs ?? {},
          h = {};
        if (o) {
          s = "tuple";
          let e = dm(u.type),
            t = [],
            r = e.length;
          for (let n = 0; n < r; n++) t.push(dp(e[n], { structs: d }));
          h = { components: t };
        } else if (u.type in d)
          ((s = "tuple"), (h = { components: d[u.type] }));
        else if (df.test(u.type)) s = `${u.type}256`;
        else if (((s = u.type), t?.type !== "struct" && !dg(s)))
          throw new l8("Unknown type.", {
            metaMessages: [`Type "${s}" is not a valid ABI type.`],
          });
        if (u.modifier) {
          if (!t?.modifiers?.has?.(u.modifier))
            throw new l8("Invalid ABI parameter.", {
              details: e,
              metaMessages: [
                `Modifier "${u.modifier}" not allowed${t?.type ? ` in "${t.type}" type` : ""}.`,
              ],
            });
          if (
            dc.has(u.modifier) &&
            ((i = s),
            !u.array && "bytes" !== i && "string" !== i && "tuple" !== i)
          )
            throw new l8("Invalid ABI parameter.", {
              details: e,
              metaMessages: [
                `Modifier "${u.modifier}" not allowed${t?.type ? ` in "${t.type}" type` : ""}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${u.modifier}" was given.`,
              ],
            });
        }
        let f = { type: `${s}${u.array ?? ""}`, ...c, ...l, ...h };
        return (dl.set(a, f), f);
      }
      function dm(e, t = [], r = "", n = 0) {
        if ("" === e) {
          if ("" === r) return t;
          if (0 !== n)
            throw new l8("Unbalanced parentheses.", {
              metaMessages: [
                `"${r.trim()}" has too many ${n > 0 ? "opening" : "closing"} parentheses.`,
              ],
              details: `Depth "${n}"`,
            });
          return [...t, r.trim()];
        }
        let i = e.length;
        for (let s = 0; s < i; s++) {
          let i = e[s],
            a = e.slice(s + 1);
          switch (i) {
            case ",":
              return 0 === n
                ? dm(a, [...t, r.trim()])
                : dm(a, t, `${r}${i}`, n);
            case "(":
              return dm(a, t, `${r}${i}`, n + 1);
            case ")":
              return dm(a, t, `${r}${i}`, n - 1);
            default:
              return dm(a, t, `${r}${i}`, n);
          }
        }
        return [];
      }
      function dg(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          l1.test(e) ||
          l2.test(e)
        );
      }
      var dy =
          /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,
        dv = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?$/;
      function db(e = 0) {
        var t;
        if ((null == (t = globalThis.Buffer) ? void 0 : t.alloc) !== void 0) {
          let t = globalThis.Buffer.alloc(e);
          return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        }
        return new Uint8Array(e);
      }
      function dA(e) {
        return e.map((e) => {
          var t;
          if (
            !as(e) &&
            "object" == typeof e &&
            !as(e.type) &&
            "string" == typeof e.type
          )
            return e;
          if ("string" == typeof e)
            return (function e(t) {
              var r, n;
              return Object.assign(Object.assign({}, t), {
                name: null != (r = t.name) ? r : "",
                components:
                  null == (n = t.components) ? void 0 : n.map((t) => e(t)),
              });
            })(
              (function (e) {
                let t;
                if ("string" == typeof e) t = dp(e, { modifiers: da });
                else {
                  let n = (function (e) {
                      let t = {},
                        r = e.length;
                      for (let i = 0; i < r; i++) {
                        var n;
                        let r = e[i];
                        if (((n = r), !dt.test(n))) continue;
                        let s = l0(dt, r);
                        if (!s)
                          throw new l8("Invalid struct signature.", {
                            details: r,
                          });
                        let a = s.properties.split(";"),
                          o = [],
                          u = a.length;
                        for (let e = 0; e < u; e++) {
                          let t = a[e].trim();
                          if (!t) continue;
                          let r = dp(t, { type: "struct" });
                          o.push(r);
                        }
                        if (!o.length)
                          throw new l8("Invalid struct signature.", {
                            details: r,
                            metaMessages: ["No properties exist."],
                          });
                        t[s.name] = o;
                      }
                      let i = {},
                        s = Object.entries(t),
                        a = s.length;
                      for (let e = 0; e < a; e++) {
                        let [r, n] = s[e];
                        i[r] = (function e(t, r, n = new Set()) {
                          let i = [],
                            s = t.length;
                          for (let a = 0; a < s; a++) {
                            let s = t[a];
                            if (l3.test(s.type)) i.push(s);
                            else {
                              let t = l0(dv, s.type);
                              if (!t?.type)
                                throw new l8("Invalid ABI parameter.", {
                                  details: JSON.stringify(s, null, 2),
                                  metaMessages: [
                                    "ABI parameter type is invalid.",
                                  ],
                                });
                              let { array: a, type: o } = t;
                              if (o in r) {
                                if (n.has(o))
                                  throw new l8("Circular reference detected.", {
                                    metaMessages: [
                                      `Struct "${o}" is a circular reference.`,
                                    ],
                                  });
                                i.push({
                                  ...s,
                                  type: `tuple${a ?? ""}`,
                                  components: e(
                                    r[o] ?? [],
                                    r,
                                    new Set([...n, o]),
                                  ),
                                });
                              } else if (dg(o)) i.push(s);
                              else
                                throw new l8("Unknown type.", {
                                  metaMessages: [
                                    `Type "${o}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
                                  ],
                                });
                            }
                          }
                          return i;
                        })(n, t);
                      }
                      return i;
                    })(e),
                    i = e.length;
                  for (let s = 0; s < i; s++) {
                    var r;
                    let i = e[s];
                    if (((r = i), !dt.test(r))) {
                      t = dp(i, { modifiers: da, structs: n });
                      break;
                    }
                  }
                }
                if (!t)
                  throw new l8("Failed to parse ABI parameter.", {
                    details: `parseAbiParameter(${JSON.stringify(e, null, 2)})`,
                    docsPath: "/api/human.html#parseabiparameter-1",
                  });
                return t;
              })(e.replace(/tuple/, "")),
            );
          if (lz(e)) {
            let r = Object.keys(e)[0],
              n = lV(r);
            return (
              (n.name = null != (t = n.name) ? t : ""),
              Object.assign(Object.assign({}, n), { components: lK(e[r]) })
            );
          }
          throw new eB("Invalid abi");
        });
      }
      function dw(e) {
        let t = e.type.lastIndexOf("["),
          r = e.type.substring(0, t),
          n = e.type.substring(t),
          i = -1;
        if ("[]" !== n && isNaN((i = Number(n.slice(1, -1)))))
          throw new eB("Invalid fixed array size", { size: n });
        return {
          param: { type: r, name: "", components: e.components },
          size: i,
        };
      }
      function dx(e) {
        var t, r;
        return (
          !!(
            "string" === e.type ||
            "bytes" === e.type ||
            e.type.endsWith("[]")
          ) ||
          ("tuple" === e.type
            ? null != (r = null == (t = e.components) ? void 0 : t.some(dx)) &&
              r
            : !!e.type.endsWith("]") && dx(dw(e).param))
        );
      }
      let dE = new Map(),
        dk = BigInt(256);
      for (let e = 8; e <= 256; e += 8)
        (dE.set(`uint${e}`, { min: BigInt(0), max: dk - BigInt(1) }),
          dE.set(`int${e}`, {
            min: -dk / BigInt(2),
            max: dk / BigInt(2) - BigInt(1),
          }),
          (dk *= BigInt(256)));
      (dE.set("int", dE.get("int256")), dE.set("uint", dE.get("uint256")));
      let dI = BigInt(1) << BigInt(256);
      function d_(e, t) {
        let r;
        try {
          r = sJ(t);
        } catch (r) {
          throw new eB("provided input is not number value", {
            type: e.type,
            value: t,
            name: e.name,
          });
        }
        let n = dE.get(e.type);
        if (!n)
          throw new eB("provided abi contains invalid number datatype", {
            type: e.type,
          });
        if (r < n.min)
          throw new eB("provided input is less then minimum for given type", {
            type: e.type,
            value: t,
            name: e.name,
            minimum: n.min.toString(),
          });
        if (r > n.max)
          throw new eB(
            "provided input is greater then maximum for given type",
            { type: e.type, value: t, name: e.name, maximum: n.max.toString() },
          );
        return {
          dynamic: !1,
          encoded: (function (e, t = 32) {
            let r;
            return i8(
              au(e < 0 ? (dI + e).toString(16) : e.toString(16), 2 * t),
            );
          })(r),
        };
      }
      function dS(e, t) {
        if (t.length < 32)
          throw new eB("Not enough bytes left to decode", {
            param: e,
            bytesLeft: t.length,
          });
        let r = t.subarray(0, 32),
          n = dE.get(e.type);
        if (!n)
          throw new eB("provided abi contains invalid number datatype", {
            type: e.type,
          });
        let i = (function (e, t) {
          let r = BigInt(i6(e));
          return r <= t ? r : r - dI;
        })(r, n.max);
        if (i < n.min)
          throw new eB("decoded value is less then minimum for given type", {
            type: e.type,
            value: i,
            name: e.name,
            minimum: n.min.toString(),
          });
        if (i > n.max)
          throw new eB("decoded value is greater then maximum for given type", {
            type: e.type,
            value: i,
            name: e.name,
            maximum: n.max.toString(),
          });
        return { result: i, encoded: t.subarray(32), consumed: 32 };
      }
      function dT(e, t) {
        if (("string" == typeof t && t.length % 2 != 0 && (t += "0"), !se(t)))
          throw new eB("provided input is not valid bytes value", {
            type: e.type,
            value: t,
            name: e.name,
          });
        let r = sS(t),
          [, n] = e.type.split("bytes");
        if (n) {
          if (Number(n) > 32 || 1 > Number(n))
            throw new eB(
              "invalid bytes type. Static byte type can have between 1 and 32 bytes",
              { type: e.type },
            );
          if (Number(n) < r.length)
            throw new eB("provided input size is different than type size", {
              type: e.type,
              value: t,
              name: e.name,
            });
          let i = db(32);
          return (i.set(r), { dynamic: !1, encoded: i });
        }
        let i = db(32 + 32 * Math.ceil(r.length / 32));
        return (
          i.set(d_({ type: "uint32", name: "" }, r.length).encoded),
          i.set(r, 32),
          { dynamic: !0, encoded: i }
        );
      }
      function dP(e, t) {
        let [, r] = e.type.split("bytes"),
          n = Number(r),
          i = t,
          s = 1,
          a = 0;
        if (!n) {
          let e = dS({ type: "uint32", name: "" }, i);
          ((n = Number(e.result)),
            (a += e.consumed),
            (i = e.encoded),
            (s = Math.ceil(n / 32)));
        }
        if (n > t.length)
          throw new eB("there is not enough data to decode", {
            type: e.type,
            encoded: t,
            size: n,
          });
        return {
          result: sP(i.subarray(0, n)),
          encoded: i.subarray(32 * s),
          consumed: a + 32 * s,
        };
      }
      function dC(e) {
        let t = 0,
          r = 0,
          n = [],
          i = [];
        for (let r of e) r.dynamic ? (t += 32) : (t += r.encoded.length);
        for (let s of e)
          s.dynamic
            ? (n.push(d_({ type: "uint256", name: "" }, t + r)),
              i.push(s),
              (r += s.encoded.length))
            : n.push(s);
        return sE(...n.map((e) => e.encoded), ...i.map((e) => e.encoded));
      }
      function dB(e, t) {
        if ("string" === e.type) {
          if ("string" != typeof t)
            throw new eB("invalid input, should be string", { input: t });
          return dT({ type: "bytes", name: "" }, sG(t));
        }
        if ("bool" === e.type) {
          let r;
          try {
            r = sX(t);
          } catch (r) {
            if (r instanceof tA)
              throw new eB("provided input is not valid boolean value", {
                type: e.type,
                value: t,
                name: e.name,
              });
          }
          return d_({ type: "uint8", name: "" }, Number(r));
        }
        if ("address" === e.type) {
          if ("string" != typeof t)
            throw new eB("address type expects string as input type", {
              value: t,
              name: e.name,
              type: e.type,
            });
          let r = t.toLowerCase();
          if ((r.startsWith("0x") || (r = `0x${r}`), !sr(r)))
            throw new eB("provided input is not valid address", {
              value: t,
              name: e.name,
              type: e.type,
            });
          let n = i8(r),
            i = db(32);
          return (i.set(n, 12), { dynamic: !1, encoded: i });
        }
        if ("tuple" === e.type) return dN(e, t);
        if (e.type.endsWith("]"))
          return (function (e, t) {
            if (!Array.isArray(t))
              throw new eB("Expected value to be array", { abi: e, values: t });
            let { size: r, param: n } = dw(e),
              i = t.map((e) => dB(n, e)),
              s = -1 === r,
              a = i.length > 0 && i[0].dynamic;
            if (!s && t.length !== r)
              throw new eB("Given arguments count doesn't match array length", {
                arrayLength: r,
                argumentsLength: t.length,
              });
            if (s || a) {
              let e = dC(i);
              if (s) {
                let t = d_({ type: "uint256", name: "" }, i.length).encoded;
                return { dynamic: !0, encoded: i.length > 0 ? sE(t, e) : t };
              }
              return { dynamic: !0, encoded: e };
            }
            return { dynamic: !1, encoded: sE(...i.map((e) => e.encoded)) };
          })(e, t);
        if (e.type.startsWith("bytes")) return dT(e, t);
        if (e.type.startsWith("uint") || e.type.startsWith("int"))
          return d_(e, t);
        throw new eB("Unsupported", { param: e, value: t });
      }
      function dO(e, t) {
        if ("string" === e.type) {
          let e = dP({ type: "bytes", name: "" }, t);
          return {
            result: sj(e.result),
            encoded: e.encoded,
            consumed: e.consumed,
          };
        }
        if ("bool" === e.type) {
          let e = dS({ type: "uint8", name: "" }, t);
          if (e.result > 1 || e.result < 0)
            throw new eB("Invalid boolean value encoded", {
              boolBytes: t.subarray(0, 32),
              numberResult: e,
            });
          return {
            result: e.result === BigInt(1),
            encoded: e.encoded,
            consumed: 32,
          };
        }
        if ("address" === e.type) {
          let e = t.subarray(12, 32);
          if (20 !== e.length)
            throw new eB(
              "Invalid decoding input, not enough bytes to decode address",
              { bytes: t },
            );
          return { result: sY(i6(e)), encoded: t.subarray(32), consumed: 32 };
        }
        if ("tuple" === e.type) return dR(e, t);
        if (e.type.endsWith("]"))
          return (function (e, t) {
            let { size: r, param: n } = dw(e),
              i = 0,
              s = [],
              a = t;
            if (-1 === r) {
              let e = dS({ type: "uint32", name: "" }, t);
              ((r = Number(e.result)), (i = e.consumed), (a = e.encoded));
            }
            if (dx(n)) {
              for (let e = 0; e < r; e += 1) {
                let t = dS({ type: "uint32", name: "" }, a.subarray(32 * e));
                i += t.consumed;
                let r = dO(n, a.subarray(Number(t.result)));
                ((i += r.consumed), s.push(r.result));
              }
              return { result: s, encoded: a.subarray(i), consumed: i };
            }
            for (let e = 0; e < r; e += 1) {
              let e = dO(n, t.subarray(i));
              ((i += e.consumed), s.push(e.result));
            }
            return { result: s, encoded: t.subarray(i), consumed: i };
          })(e, t);
        if (e.type.startsWith("bytes")) return dP(e, t);
        if (e.type.startsWith("uint") || e.type.startsWith("int"))
          return dS(e, t);
        throw new eB("Unsupported", { param: e, bytes: t });
      }
      function dN(e, t) {
        var r, n, i;
        let s = !1;
        if (!Array.isArray(t) && "object" != typeof t)
          throw new eB("param must be either Array or Object", {
            param: e,
            input: t,
          });
        let a = [];
        for (
          let o = 0;
          o <
          (null != (n = null == (r = e.components) ? void 0 : r.length)
            ? n
            : 0);
          o += 1
        ) {
          let r,
            n = e.components[o];
          if (Array.isArray(t)) {
            if (o >= t.length)
              throw new eB("input param length missmatch", {
                param: e,
                input: t,
              });
            r = dB(n, t[o]);
          } else {
            let s = t[null != (i = n.name) ? i : ""];
            if (null == s)
              throw new eB("missing input defined in abi", {
                param: e,
                input: t,
                paramName: n.name,
              });
            r = dB(n, s);
          }
          (r.dynamic && (s = !0), a.push(r));
        }
        return s
          ? { dynamic: !0, encoded: dC(a) }
          : { dynamic: !1, encoded: sE(...a.map((e) => e.encoded)) };
      }
      function dR(e, t) {
        let r = { __length__: 0 },
          n = 0;
        if (!e.components) return { result: r, encoded: t, consumed: n };
        let i = 0;
        for (let [s, a] of e.components.entries()) {
          let e;
          if (dx(a)) {
            let r = dS({ type: "uint32", name: "" }, t.subarray(n));
            ((e = dO(a, t.subarray(Number(r.result)))),
              (n += r.consumed),
              (i += e.consumed));
          } else ((e = dO(a, t.subarray(n))), (n += e.consumed));
          ((r.__length__ += 1),
            (r[s] = e.result),
            a.name && "" !== a.name && (r[a.name] = e.result));
        }
        return { encoded: t.subarray(n + i), result: r, consumed: n + i };
      }
      function dM(e, t) {
        if ((null == e ? void 0 : e.length) !== t.length)
          throw new eB("Invalid number of values received for given ABI", {
            expected: null == e ? void 0 : e.length,
            received: t.length,
          });
        return i6(
          dN({ type: "tuple", name: "", components: dA(e) }, t).encoded,
        );
      }
      let dF = (e, t) => dM([e], [t]),
        dL = (e, t, r) => {
          try {
            if (e.length > 0 && (!t || "0x" === t || "0X" === t))
              throw new eB(
                "Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.",
              );
            return (function (e, t, r) {
              let n = dA(e);
              return dR({ type: "tuple", name: "", components: n }, i8(t))
                .result;
            })(e, `0x${t.replace(/0x/i, "")}`, 0);
          } catch (e) {
            throw new eB(`Parameter decoding error: ${e.message}`, {
              internalErr: e,
            });
          }
        },
        dD = (e, t) => dL(e, t, !1),
        dj = (e, t) => dD([e], t)["0"],
        dH = (e) => {
          let t;
          if ("string" != typeof e && !lQ(e))
            throw new eB("Invalid parameter value in encodeFunctionSignature");
          return ak(
            e && ("function" == typeof e || "object" == typeof e) ? l$(e) : e,
          ).slice(0, 10);
        },
        dG = (e, t, r = !0) => {
          let n =
            r && t && t.length >= 10 && t.startsWith("0x") ? t.slice(10) : t;
          if (!e.inputs) throw new eb("No inputs found in the ABI");
          return Object.assign(Object.assign({}, dD([...e.inputs], n)), {
            __method__: l$(e),
          });
        },
        dU = (e, t) => {
          if ("constructor" === e.type) return t;
          if (!t) return null;
          let r = t.length >= 2 ? t.slice(2) : t;
          if (!e.outputs) return null;
          let n = dD([...e.outputs], r);
          return 1 === n.__length__ ? n[0] : n;
        },
        dq = ["bool", "string", "int", "uint", "address", "fixed", "ufixed"],
        dQ = (e, t) => ("string" === e ? t : dj(e, t)),
        dZ = (e, t, r) => {
          let n = Array.isArray(r) ? r : [r],
            i = {},
            s = {};
          for (let [t, r] of e.entries()) r.indexed ? (i[t] = r) : (s[t] = r);
          let a = t ? dL(Object.values(s), t, !0) : { __length__: 0 },
            o = n.length - Object.keys(i).length,
            u = Object.values(i).map((e, t) =>
              dq.some((t) => e.type.startsWith(t))
                ? dQ(e.type, n[t + o])
                : n[t + o],
            ),
            c = { __length__: 0 },
            l = 0,
            d = 0;
          for (let [t, r] of e.entries())
            ((c[t] = "string" === r.type ? "" : void 0),
              i[t] && ((c[t] = u[l]), (l += 1)),
              s[t] && ((c[t] = a[String(d)]), (d += 1)),
              r.name && (c[r.name] = c[t]),
              (c.__length__ += 1));
          return c;
        },
        dz = (e, t) => {
          if (null == t ? void 0 : t.data) {
            let r, n, i;
            try {
              let s = t.data.slice(0, 10),
                a = e.find((e) => lY(e).startsWith(s));
              (null == a ? void 0 : a.inputs)
                ? ((r = a.name),
                  (n = l$(a)),
                  (i = dD([...a.inputs], t.data.substring(10))))
                : t.data.startsWith("0x08c379a0")
                  ? ((r = "Error"),
                    (n = "Error(string)"),
                    (i = dD(
                      [{ name: "message", type: "string" }],
                      t.data.substring(10),
                    )))
                  : t.data.startsWith("0x4e487b71")
                    ? ((r = "Panic"),
                      (n = "Panic(uint256)"),
                      (i = dD(
                        [{ name: "code", type: "uint256" }],
                        t.data.substring(10),
                      )))
                    : console.error(
                        "No matching error abi found for error data",
                        t.data,
                      );
            } catch (e) {
              console.error(e);
            }
            r && t.setDecodedProperties(r, n, i);
          }
        },
        dV = /^\w+/,
        dK = /^(.*)\[([0-9]*?)]$/,
        dJ = (e, t, r = []) => {
          let n = t.match(dV)[0];
          return r.includes(n) || !e.types[n]
            ? r
            : [
                n,
                ...e.types[n].reduce(
                  (t, r) => [
                    ...t,
                    ...dJ(e, r.type, t).filter((e) => !t.includes(e)),
                  ],
                  [],
                ),
              ];
        },
        dW = (e, t) => {
          let [r, ...n] = dJ(e, t);
          return [r, ...n.sort()]
            .map((t) => `${t}(${e.types[t].map((e) => `${e.type} ${e.name}`)})`)
            .join("");
        },
        d$ = (e, t) => keccak256(dW(e, t)),
        dY = (e, t, r) => keccak256(d0(e, t, r)),
        dX = (e, t, r) => {
          let n = t.match(dK);
          if (n) {
            let t = n[1],
              i = Number(n[2]) || void 0;
            if (!Array.isArray(r))
              throw new AbiError(
                "Cannot encode data: value is not of array type",
                { data: r },
              );
            if (i && r.length !== i)
              throw new AbiError(
                `Cannot encode data: expected length of ${i}, but got ${r.length}`,
                { data: r },
              );
            let s = r.map((r) => dX(e, t, r));
            return [
              "bytes32",
              keccak256(
                encodeParameters(
                  s.map((e) => e[0]),
                  s.map((e) => e[1]),
                ),
              ),
            ];
          }
          return e.types[t]
            ? ["bytes32", dY(e, t, r)]
            : "string" === t || "bytes" === t
              ? ["bytes32", keccak256(r)]
              : [t, r];
        },
        d0 = (e, t, r) => {
          let [n, i] = e.types[t].reduce(
            ([t, n], i) => {
              if (isNullish(r[i.name]) || isNullish(i.type))
                throw new AbiError(
                  `Cannot encode data: missing data for '${i.name}'`,
                  { data: r, field: i },
                );
              let s = r[i.name],
                [a, o] = dX(e, i.type, s);
              return [
                [...t, a],
                [...n, o],
              ];
            },
            [["bytes32"], [d$(e, t)]],
          );
          return encodeParameters(n, i);
        },
        d1 = (e, t) => {
          var r, n, i, s, a;
          if (e instanceof ex && e.cause instanceof ew)
            return void 0 !== t
              ? (dz(
                  t.filter((e) => lU(e)),
                  e.cause,
                ),
                {
                  reason: e.cause.message,
                  signature:
                    null == (r = e.cause.data) ? void 0 : r.slice(0, 10),
                  data: null == (n = e.cause.data) ? void 0 : n.substring(10),
                  customErrorName: e.cause.errorName,
                  customErrorDecodedSignature: e.cause.errorSignature,
                  customErrorArguments: e.cause.errorArgs,
                })
              : {
                  reason: e.cause.message,
                  signature:
                    null == (i = e.cause.data) ? void 0 : i.slice(0, 10),
                  data: null == (s = e.cause.data) ? void 0 : s.substring(10),
                };
          if (
            e instanceof tT &&
            !Array.isArray(null == (a = e.cause) ? void 0 : a.errors) &&
            void 0 !== e.cause
          )
            return e.cause.message;
          throw e;
        };
      function d2(e, t, r) {
        var n, i, s, a;
        return (
          (n = this),
          (i = arguments),
          (s = void 0),
          (a = function* (e, t, r, n = e.defaultReturnFormat) {
            try {
              yield ha(e, t, e.defaultBlock, n);
              return;
            } catch (e) {
              return d1(e, r);
            }
          }),
          new (s || (s = Promise))(function (e, t) {
            function r(e) {
              try {
                u(a.next(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              try {
                u(a.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function u(t) {
              var n;
              t.done
                ? e(t.value)
                : ((n = t.value) instanceof s
                    ? n
                    : new s(function (e) {
                        e(n);
                      })
                  ).then(r, o);
            }
            u((a = a.apply(n, i || [])).next());
          })
        );
      }
      function d3(e, t, r, n, i, s) {
        var a, o, u, c;
        return (
          (a = this),
          (o = void 0),
          (u = void 0),
          (c = function* () {
            let a,
              o = s;
            if (
              (void 0 === o &&
                (void 0 !== n
                  ? (o = d1(n))
                  : e.handleRevert && void 0 !== t && (o = yield d2(e, t, i))),
              void 0 === o)
            )
              a = new eG(r);
            else if ("string" == typeof o) a = new ej(o, void 0, r);
            else if (
              void 0 !== o.customErrorName &&
              void 0 !== o.customErrorDecodedSignature &&
              void 0 !== o.customErrorArguments
            ) {
              let e = o;
              a = new eH(
                e.reason,
                e.customErrorName,
                e.customErrorDecodedSignature,
                e.customErrorArguments,
                e.signature,
                r,
                e.data,
              );
            } else a = new ej(o.reason, o.signature, r, o.data);
            return a;
          }),
          new (u || (u = Promise))(function (e, t) {
            function r(e) {
              try {
                i(c.next(e));
              } catch (e) {
                t(e);
              }
            }
            function n(e) {
              try {
                i(c.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function i(t) {
              var i;
              t.done
                ? e(t.value)
                : ((i = t.value) instanceof u
                    ? i
                    : new u(function (e) {
                        e(i);
                      })
                  ).then(r, n);
            }
            i((c = c.apply(a, o || [])).next());
          })
        );
      }
      let d6 = (e, t, r, n = J) => {
        var i, s, a, o, u, c;
        let l = Object.assign({}, e),
          d = aA(ld, t, n);
        if ([lE, "allEvents"].includes(l.name)) {
          let e = r.find((e) => e.signature === t.topics[0]);
          l = e || { anonymous: !0 };
        }
        if (
          ((l.inputs =
            null != (s = null != (i = l.inputs) ? i : e.inputs) ? s : []),
          !l.anonymous)
        ) {
          let e = 0;
          ((null != (a = l.inputs) ? a : []).forEach((t) => {
            t.indexed && (e += 1);
          }),
            e > 0 &&
              (null == t ? void 0 : t.topics) &&
              (null == t ? void 0 : t.topics.length) !== e + 1 &&
              (l = Object.assign(Object.assign({}, l), {
                anonymous: !0,
                inputs: [],
              })));
        }
        let h = l.anonymous
          ? t.topics
          : (null != (o = t.topics) ? o : []).slice(1);
        return Object.assign(Object.assign({}, d), {
          returnValues: dZ([...(null != (u = l.inputs) ? u : [])], t.data, h),
          event: l.name,
          signature:
            !l.anonymous &&
            (null == (c = t.topics) ? void 0 : c.length) > 0 &&
            t.topics[0]
              ? t.topics[0]
              : void 0,
          raw: { data: t.data, topics: t.topics },
        });
      };
      var d5 = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class d4 {
        constructor({
          options: e,
          web3Context: t,
          promiEvent: r,
          returnFormat: n,
        }) {
          ((this.options = { checkRevertBeforeSending: !0 }),
            (this.options = e),
            (this.web3Context = t),
            (this.promiEvent = r),
            (this.returnFormat = n));
        }
        getReceiptWithEvents(e) {
          var t, r;
          let n = Object.assign({}, null != e ? e : {});
          if (
            (null == (t = this.options) ? void 0 : t.contractAbi) &&
            n.logs &&
            n.logs.length > 0
          )
            for (let e of ((n.events = {}), n.logs)) {
              let t = d6(
                lk,
                e,
                null == (r = this.options) ? void 0 : r.contractAbi,
                this.returnFormat,
              );
              t.event && (n.events[t.event] = t);
            }
          return n;
        }
        checkRevertBeforeSending(e) {
          return d5(this, void 0, void 0, function* () {
            if (!1 !== this.options.checkRevertBeforeSending) {
              let t = e;
              sf(e.data) &&
                sf(e.input) &&
                sf(e.gas) &&
                (t = Object.assign(Object.assign({}, e), { gas: 21e3 }));
              let r = yield d2(this.web3Context, t, this.options.contractAbi);
              if (void 0 !== r)
                throw yield d3(
                  this.web3Context,
                  e,
                  void 0,
                  void 0,
                  this.options.contractAbi,
                  r,
                );
            }
          });
        }
        emitSending(e) {
          this.promiEvent.listenerCount("sending") > 0 &&
            this.promiEvent.emit("sending", e);
        }
        populateGasPrice(e) {
          return d5(
            this,
            arguments,
            void 0,
            function* ({ transactionFormatted: e, transaction: t }) {
              var r;
              let n = e;
              return (
                !this.web3Context.config.ignoreGasPricing &&
                  !(null == (r = this.options) ? void 0 : r.ignoreGasPricing) &&
                  sf(e.gasPrice) &&
                  (sf(t.maxPriorityFeePerGas) || sf(t.maxFeePerGas)) &&
                  (n = Object.assign(
                    Object.assign({}, e),
                    yield lS(e, this.web3Context, W),
                  )),
                n
              );
            },
          );
        }
        signAndSend(e) {
          return d5(this, arguments, void 0, function* ({ wallet: e, tx: t }) {
            if (e) {
              let r = yield e.signTransaction(t);
              return lF(
                this.web3Context,
                () =>
                  d5(this, void 0, void 0, function* () {
                    return cz(
                      this.web3Context.requestManager,
                      r.rawTransaction,
                    );
                  }),
                r.transactionHash,
              );
            }
            return lF(this.web3Context, () =>
              d5(this, void 0, void 0, function* () {
                return (function (e, t) {
                  return cQ(this, void 0, void 0, function* () {
                    return e.send({
                      method: "eth_sendTransaction",
                      params: [t],
                    });
                  });
                })(this.web3Context.requestManager, t);
              }),
            );
          });
        }
        emitSent(e) {
          this.promiEvent.listenerCount("sent") > 0 &&
            this.promiEvent.emit("sent", e);
        }
        emitTransactionHash(e) {
          this.promiEvent.listenerCount("transactionHash") > 0 &&
            this.promiEvent.emit("transactionHash", e);
        }
        emitReceipt(e) {
          this.promiEvent.listenerCount("receipt") > 0 &&
            this.promiEvent.emit("receipt", e);
        }
        handleError(e) {
          return d5(this, arguments, void 0, function* ({ error: e, tx: t }) {
            var r;
            let n = e;
            return (
              n instanceof ex &&
                this.web3Context.handleRevert &&
                (n = yield d3(
                  this.web3Context,
                  t,
                  void 0,
                  void 0,
                  null == (r = this.options) ? void 0 : r.contractAbi,
                )),
              (n instanceof tT ||
                n instanceof ex ||
                n instanceof eH ||
                n instanceof eG ||
                n instanceof ej ||
                n instanceof ts) &&
                this.promiEvent.listenerCount("error") > 0 &&
                this.promiEvent.emit("error", n),
              n
            );
          });
        }
        emitConfirmation({
          receipt: e,
          transactionHash: t,
          customTransactionReceiptSchema: r,
        }) {
          this.promiEvent.listenerCount("confirmation") > 0 &&
            (function (e, t, r, n, i, s) {
              if (sf(r) || sf(r.blockHash))
                throw new to({
                  receipt: r,
                  blockHash: aA(
                    { format: "bytes32" },
                    null == r ? void 0 : r.blockHash,
                    i,
                  ),
                  transactionHash: aA({ format: "bytes32" }, n, i),
                });
              if (!r.blockNumber) throw new tu({ receipt: r });
              t.emit("confirmation", {
                confirmations: aA({ format: "uint" }, 1, i),
                receipt: aA(null != s ? s : lf, r, i),
                latestBlockHash: aA({ format: "bytes32" }, r.blockHash, i),
              });
              let a = e.requestManager.provider;
              a && "supportsSubscriptions" in a && a.supportsSubscriptions()
                ? lG({
                    web3Context: e,
                    transactionReceipt: r,
                    transactionPromiEvent: t,
                    customTransactionReceiptSchema: s,
                    returnFormat: i,
                  })
                : lj({
                    web3Context: e,
                    transactionReceipt: r,
                    transactionPromiEvent: t,
                    customTransactionReceiptSchema: s,
                    returnFormat: i,
                  });
            })(this.web3Context, this.promiEvent, e, t, this.returnFormat, r);
        }
        handleResolve(e) {
          return d5(this, arguments, void 0, function* ({ receipt: e, tx: t }) {
            var r, n, i;
            if (null == (r = this.options) ? void 0 : r.transactionResolver)
              return null == (n = this.options)
                ? void 0
                : n.transactionResolver(e);
            if (e.status !== BigInt(0)) return e;
            {
              let r = yield d3(
                this.web3Context,
                t,
                e,
                void 0,
                null == (i = this.options) ? void 0 : i.contractAbi,
              );
              throw (
                this.promiEvent.listenerCount("error") > 0 &&
                  this.promiEvent.emit("error", r),
                r
              );
            }
          });
        }
      }
      var d8 = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, s) {
            function a(e) {
              try {
                u(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        d9 = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, n = Object.getOwnPropertySymbols(e);
              i < n.length;
              i++
            )
              0 > t.indexOf(n[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]]);
          return r;
        };
      let d7 = (e) =>
        d8(void 0, void 0, void 0, function* () {
          return cZ(e.requestManager);
        });
      function he(e, t) {
        return d8(this, void 0, void 0, function* () {
          return aA(
            { format: "uint" },
            yield (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "eth_gasPrice", params: [] });
              });
            })(e.requestManager),
            null != t ? t : e.defaultReturnFormat,
          );
        });
      }
      function ht(e, t) {
        return d8(this, void 0, void 0, function* () {
          return aA(
            { format: "uint" },
            yield (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "eth_blockNumber", params: [] });
              });
            })(e.requestManager),
            null != t ? t : e.defaultReturnFormat,
          );
        });
      }
      function hr(e) {
        return d8(
          this,
          arguments,
          void 0,
          function* (e, t = e.defaultBlock, r = !1, n) {
            var i;
            let s;
            if (se(t)) {
              let n = aA({ format: "bytes32" }, t, W);
              s = yield (function (e, t, r) {
                return cQ(this, void 0, void 0, function* () {
                  return (
                    sw.validate(["bytes32", "bool"], [t, r]),
                    e.send({ method: "eth_getBlockByHash", params: [t, r] })
                  );
                });
              })(e.requestManager, n, r);
            } else {
              let n = su(t) ? t : aA({ format: "uint" }, t, W);
              s = yield cV(e.requestManager, n, r);
            }
            let a = aA(lc, s, null != n ? n : e.defaultReturnFormat);
            return sf(a)
              ? a
              : Object.assign(Object.assign({}, a), {
                  transactions: null != (i = a.transactions) ? i : [],
                });
          },
        );
      }
      function hn(e, t, r) {
        return d8(this, void 0, void 0, function* () {
          let n,
            i = aA({ format: "bytes32" }, t, J);
          try {
            n = yield (function (e, t) {
              return cQ(this, void 0, void 0, function* () {
                return (
                  sw.validate(["bytes32"], [t]),
                  e.send({ method: "eth_getTransactionReceipt", params: [t] })
                );
              });
            })(e.requestManager, i);
          } catch (e) {
            if (
              "object" == typeof e &&
              !sf(e) &&
              "message" in e &&
              "transaction indexing is in progress" === e.message
            )
              console.warn("Transaction indexing is in progress.");
            else throw e;
          }
          return sf(n) ? n : aA(lf, n, null != r ? r : e.defaultReturnFormat);
        });
      }
      function hi(e, t) {
        return d8(
          this,
          arguments,
          void 0,
          function* (e, t, r = e.defaultBlock, n) {
            let i = su(r) ? r : aA({ format: "uint" }, r, W);
            return aA(
              { format: "uint" },
              yield (function (e, t, r) {
                return cQ(this, void 0, void 0, function* () {
                  return (
                    sw.validate(["address", "blockNumberOrTag"], [t, r]),
                    e.send({
                      method: "eth_getTransactionCount",
                      params: [t, r],
                    })
                  );
                });
              })(e.requestManager, t, i),
              null != n ? n : e.defaultReturnFormat,
            );
          },
        );
      }
      function hs(e, t, r, n = { checkRevertBeforeSending: !0 }, i) {
        let s = new cq((a, o) => {
          setImmediate(() => {
            d8(this, void 0, void 0, function* () {
              let u = new d4({
                  web3Context: e,
                  promiEvent: s,
                  options: n,
                  returnFormat: r,
                }),
                c = Object.assign({}, t);
              sf(i) || (c = yield i.processTransaction(c));
              let l = ly(
                Object.assign(Object.assign({}, c), {
                  from: lP("from", e, c),
                  to: lP("to", e, c),
                }),
                W,
                { transactionSchema: e.config.customTransactionSchema },
              );
              try {
                let t;
                ((l = yield u.populateGasPrice({
                  transaction: c,
                  transactionFormatted: l,
                })),
                  yield u.checkRevertBeforeSending(l),
                  u.emitSending(l),
                  e.wallet && !sf(l.from) && (t = e.wallet.get(l.from)));
                let n = yield u.signAndSend({ wallet: t, tx: l }),
                  i = aA(
                    { format: "bytes32" },
                    n,
                    null != r ? r : e.defaultReturnFormat,
                  );
                (u.emitSent(l), u.emitTransactionHash(i));
                let s = yield lD(e, n, null != r ? r : e.defaultReturnFormat),
                  o = u.getReceiptWithEvents(
                    aA(lf, s, null != r ? r : e.defaultReturnFormat),
                  );
                (u.emitReceipt(o),
                  a(yield u.handleResolve({ receipt: o, tx: l })),
                  u.emitConfirmation({ receipt: o, transactionHash: n }));
              } catch (e) {
                o(yield u.handleError({ error: e, tx: l }));
              }
            });
          });
        });
        return s;
      }
      function ha(e, t) {
        return d8(
          this,
          arguments,
          void 0,
          function* (e, t, r = e.defaultBlock, n = e.defaultReturnFormat) {
            let i = su(r) ? r : aA({ format: "uint" }, r, W);
            return aA(
              { format: "bytes" },
              yield (function (e, t, r) {
                return cQ(this, void 0, void 0, function* () {
                  return (
                    sw.validate(["blockNumberOrTag"], [r]),
                    e.send({ method: "eth_call", params: [t, r] })
                  );
                });
              })(
                e.requestManager,
                ly(t, W, {
                  transactionSchema: e.config.customTransactionSchema,
                }),
                i,
              ),
              n,
            );
          },
        );
      }
      function ho(e, t) {
        return d8(
          this,
          arguments,
          void 0,
          function* (e, t, r = e.defaultBlock, n) {
            let i = ly(t, W, {
                transactionSchema: e.config.customTransactionSchema,
              }),
              s = su(r) ? r : aA({ format: "uint" }, r, W);
            return aA(
              { format: "uint" },
              yield (function (e, t, r) {
                return cQ(this, void 0, void 0, function* () {
                  return (
                    sw.validate(["blockNumberOrTag"], [r]),
                    e.send({ method: "eth_estimateGas", params: [t, r] })
                  );
                });
              })(e.requestManager, i, s),
              null != n ? n : e.defaultReturnFormat,
            );
          },
        );
      }
      function hu(e, t, r) {
        return d8(this, void 0, void 0, function* () {
          let { toBlock: n, fromBlock: i } = t;
          (sf(n) ||
            ("number" != typeof n && "bigint" != typeof n) ||
            (n = sN(n)),
            sf(i) ||
              ("number" != typeof i && "bigint" != typeof i) ||
              (i = sN(i)));
          let s = Object.assign(Object.assign({}, t), {
            fromBlock: i,
            toBlock: n,
          });
          return (yield (function (e, t) {
            return cQ(this, void 0, void 0, function* () {
              return (
                sw.validate(["filter"], [t]),
                e.send({ method: "eth_getLogs", params: [t] })
              );
            });
          })(e.requestManager, s)).map((t) =>
            "string" == typeof t
              ? t
              : aA(ld, t, null != r ? r : e.defaultReturnFormat),
          );
        });
      }
      function hc(e, t) {
        return d8(this, void 0, void 0, function* () {
          return aA(
            { format: "uint" },
            yield (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "eth_chainId", params: [] });
              });
            })(e.requestManager),
            null != t ? t : e.defaultReturnFormat,
          );
        });
      }
      function hl(e, t) {
        return d8(
          this,
          arguments,
          void 0,
          function* (e, t, r = e.defaultBlock, n) {
            let i = su(r) ? r : aA({ format: "uint" }, r, W);
            return aA(
              ln,
              yield (function (e, t, r) {
                return cQ(this, void 0, void 0, function* () {
                  return (
                    sw.validate(["blockNumberOrTag"], [r]),
                    e.send({ method: "eth_createAccessList", params: [t, r] })
                  );
                });
              })(
                e.requestManager,
                ly(t, W, {
                  transactionSchema: e.config.customTransactionSchema,
                }),
                i,
              ),
              null != n ? n : e.defaultReturnFormat,
            );
          },
        );
      }
      var hd = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class hh extends ow {
        _buildSubscriptionParams() {
          return ["logs", this.args];
        }
        formatSubscriptionResult(e) {
          return aA(ld, e, super.returnFormat);
        }
      }
      class hf extends ow {
        _buildSubscriptionParams() {
          return ["newPendingTransactions"];
        }
        formatSubscriptionResult(e) {
          return aA({ format: "string" }, e, super.returnFormat);
        }
      }
      class hp extends ow {
        _buildSubscriptionParams() {
          return ["newHeads"];
        }
        formatSubscriptionResult(e) {
          return aA(ll, e, super.returnFormat);
        }
      }
      class hm extends ow {
        _buildSubscriptionParams() {
          return ["syncing"];
        }
        _processSubscriptionResult(e) {
          if ("boolean" == typeof e) this.emit("changed", e);
          else {
            let t = Object.fromEntries(
              Object.entries((null == e ? void 0 : e.status) || e).map(
                ([e, t]) => [e.charAt(0).toLowerCase() + e.substring(1), t],
              ),
            );
            (this.emit("changed", e.syncing),
              this.emit("data", aA(lh, t, super.returnFormat)));
          }
        }
      }
      var hg = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let hy = {
        logs: hh,
        newPendingTransactions: hf,
        newHeads: hp,
        syncing: hm,
        pendingTransactions: hf,
        newBlockHeaders: hp,
      };
      class hv extends cH {
        constructor(e) {
          if ("string" == typeof e || of(e))
            return void super({ provider: e, registeredSubscriptions: hy });
          if (e.registeredSubscriptions) return void super(e);
          (super(
            Object.assign(Object.assign({}, e), {
              registeredSubscriptions: hy,
            }),
          ),
            (this.getFeeData = this.calculateFeeData));
        }
        setTransactionMiddleware(e) {
          this.transactionMiddleware = e;
        }
        getTransactionMiddleware() {
          return this.transactionMiddleware;
        }
        getProtocolVersion() {
          return hg(this, void 0, void 0, function* () {
            return (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "eth_protocolVersion", params: [] });
              });
            })(this.requestManager);
          });
        }
        isSyncing() {
          return hg(this, void 0, void 0, function* () {
            return cZ(this.requestManager);
          });
        }
        getCoinbase() {
          return hg(this, void 0, void 0, function* () {
            return (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "eth_coinbase", params: [] });
              });
            })(this.requestManager);
          });
        }
        isMining() {
          return hg(this, void 0, void 0, function* () {
            return (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "eth_mining", params: [] });
              });
            })(this.requestManager);
          });
        }
        getHashrate(e) {
          return hg(this, void 0, void 0, function* () {
            var t;
            return (
              void 0 === e &&
                (e = null != (t = this.defaultReturnFormat) ? t : J),
              this.getHashRate(e)
            );
          });
        }
        getHashRate() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultReturnFormat) {
              return (function (e, t) {
                return d8(this, void 0, void 0, function* () {
                  return aA(
                    { format: "uint" },
                    yield (function (e) {
                      return cQ(this, void 0, void 0, function* () {
                        return e.send({ method: "eth_hashrate", params: [] });
                      });
                    })(e.requestManager),
                    null != t ? t : e.defaultReturnFormat,
                  );
                });
              })(this, e);
            },
          );
        }
        getGasPrice() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultReturnFormat) {
              return he(this, e);
            },
          );
        }
        getMaxPriorityFeePerGas() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultReturnFormat) {
              return (function (e, t) {
                return d8(this, void 0, void 0, function* () {
                  return aA(
                    { format: "uint" },
                    yield (function (e) {
                      return cQ(this, void 0, void 0, function* () {
                        return e.send({
                          method: "eth_maxPriorityFeePerGas",
                          params: [],
                        });
                      });
                    })(e.requestManager),
                    null != t ? t : e.defaultReturnFormat,
                  );
                });
              })(this, e);
            },
          );
        }
        calculateFeeData() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = BigInt(2), t = sI.Gwei) {
              var r;
              let n,
                i,
                s,
                a = yield this.getBlock(void 0, !1),
                o =
                  null != (r = null == a ? void 0 : a.baseFeePerGas)
                    ? r
                    : void 0;
              try {
                n = yield this.getGasPrice();
              } catch (e) {}
              try {
                i = yield this.getMaxPriorityFeePerGas();
              } catch (e) {}
              if (o) {
                let r;
                ((i = null != i ? i : t),
                  (s =
                    o *
                      ("number" == typeof e
                        ? BigInt(Math.floor(1e3 * e)) / BigInt(1e3)
                        : e) +
                    i));
              }
              return {
                gasPrice: n,
                maxFeePerGas: s,
                maxPriorityFeePerGas: i,
                baseFeePerGas: o,
              };
            },
          );
        }
        getAccounts() {
          return hg(this, void 0, void 0, function* () {
            var e;
            return (
              null !=
              (e = yield (function (e) {
                return cQ(this, void 0, void 0, function* () {
                  return e.send({ method: "eth_accounts", params: [] });
                });
              })(this.requestManager))
                ? e
                : []
            ).map((e) => sY(e));
          });
        }
        getBlockNumber() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultReturnFormat) {
              return ht(this, e);
            },
          );
        }
        getBalance(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultBlock, r = this.defaultReturnFormat) {
              return (function (e, t) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t, r = e.defaultBlock, n) {
                    let i = su(r) ? r : aA({ format: "uint" }, r, W);
                    return aA(
                      { format: "uint" },
                      yield (function (e, t, r) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(
                              ["address", "blockNumberOrTag"],
                              [t, r],
                            ),
                            e.send({ method: "eth_getBalance", params: [t, r] })
                          );
                        });
                      })(e.requestManager, t, i),
                      null != n ? n : e.defaultReturnFormat,
                    );
                  },
                );
              })(this, e, t, r);
            },
          );
        }
        getStorageAt(e, t) {
          return hg(
            this,
            arguments,
            void 0,
            function* (
              e,
              t,
              r = this.defaultBlock,
              n = this.defaultReturnFormat,
            ) {
              return (function (e, t, r) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t, r, n = e.defaultBlock, i) {
                    let s = aA({ format: "uint" }, r, W),
                      a = su(n) ? n : aA({ format: "uint" }, n, W);
                    return aA(
                      { format: "bytes" },
                      yield (function (e, t, r, n) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(
                              ["address", "hex", "blockNumberOrTag"],
                              [t, r, n],
                            ),
                            e.send({
                              method: "eth_getStorageAt",
                              params: [t, r, n],
                            })
                          );
                        });
                      })(e.requestManager, t, s, a),
                      null != i ? i : e.defaultReturnFormat,
                    );
                  },
                );
              })(this, e, t, r, n);
            },
          );
        }
        getCode(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultBlock, r = this.defaultReturnFormat) {
              return (function (e, t) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t, r = e.defaultBlock, n) {
                    let i = su(r) ? r : aA({ format: "uint" }, r, W);
                    return aA(
                      { format: "bytes" },
                      yield (function (e, t, r) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(
                              ["address", "blockNumberOrTag"],
                              [t, r],
                            ),
                            e.send({ method: "eth_getCode", params: [t, r] })
                          );
                        });
                      })(e.requestManager, t, i),
                      null != n ? n : e.defaultReturnFormat,
                    );
                  },
                );
              })(this, e, t, r);
            },
          );
        }
        getBlock() {
          return hg(
            this,
            arguments,
            void 0,
            function* (
              e = this.defaultBlock,
              t = !1,
              r = this.defaultReturnFormat,
            ) {
              return hr(this, e, t, r);
            },
          );
        }
        getBlockTransactionCount() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultBlock, t = this.defaultReturnFormat) {
              return (function (e) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t = e.defaultBlock, r) {
                    let n;
                    if (se(t)) {
                      let r = aA({ format: "bytes32" }, t, W);
                      n = yield (function (e, t) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["bytes32"], [t]),
                            e.send({
                              method: "eth_getBlockTransactionCountByHash",
                              params: [t],
                            })
                          );
                        });
                      })(e.requestManager, r);
                    } else {
                      let r = su(t) ? t : aA({ format: "uint" }, t, W);
                      n = yield (function (e, t) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["blockNumberOrTag"], [t]),
                            e.send({
                              method: "eth_getBlockTransactionCountByNumber",
                              params: [t],
                            })
                          );
                        });
                      })(e.requestManager, r);
                    }
                    return aA(
                      { format: "uint" },
                      n,
                      null != r ? r : e.defaultReturnFormat,
                    );
                  },
                );
              })(this, e, t);
            },
          );
        }
        getBlockUncleCount() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultBlock, t = this.defaultReturnFormat) {
              return (function (e) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t = e.defaultBlock, r) {
                    let n;
                    if (se(t)) {
                      let r = aA({ format: "bytes32" }, t, W);
                      n = yield (function (e, t) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["bytes32"], [t]),
                            e.send({
                              method: "eth_getUncleCountByBlockHash",
                              params: [t],
                            })
                          );
                        });
                      })(e.requestManager, r);
                    } else {
                      let r = su(t) ? t : aA({ format: "uint" }, t, W);
                      n = yield (function (e, t) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["blockNumberOrTag"], [t]),
                            e.send({
                              method: "eth_getUncleCountByBlockNumber",
                              params: [t],
                            })
                          );
                        });
                      })(e.requestManager, r);
                    }
                    return aA(
                      { format: "uint" },
                      n,
                      null != r ? r : e.defaultReturnFormat,
                    );
                  },
                );
              })(this, e, t);
            },
          );
        }
        getUncle() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultBlock, t, r = this.defaultReturnFormat) {
              return (function (e) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t = e.defaultBlock, r, n) {
                    let i,
                      s = aA({ format: "uint" }, r, W);
                    if (se(t)) {
                      let r = aA({ format: "bytes32" }, t, W);
                      i = yield (function (e, t, r) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["bytes32", "hex"], [t, r]),
                            e.send({
                              method: "eth_getUncleByBlockHashAndIndex",
                              params: [t, r],
                            })
                          );
                        });
                      })(e.requestManager, r, s);
                    } else {
                      let r = su(t) ? t : aA({ format: "uint" }, t, W);
                      i = yield (function (e, t, r) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["blockNumberOrTag", "hex"], [t, r]),
                            e.send({
                              method: "eth_getUncleByBlockNumberAndIndex",
                              params: [t, r],
                            })
                          );
                        });
                      })(e.requestManager, r, s);
                    }
                    return aA(lc, i, null != n ? n : e.defaultReturnFormat);
                  },
                );
              })(this, e, t, r);
            },
          );
        }
        getTransaction(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultReturnFormat) {
              let r = yield (function (e, t) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t, r = e.defaultReturnFormat) {
                    let n = aA({ format: "bytes32" }, t, J),
                      i = yield (function (e, t) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["bytes32"], [t]),
                            e.send({
                              method: "eth_getTransactionByHash",
                              params: [t],
                            })
                          );
                        });
                      })(e.requestManager, n);
                    return sf(i)
                      ? i
                      : ly(i, r, {
                          transactionSchema: e.config.customTransactionSchema,
                          fillInputAndData: !0,
                        });
                  },
                );
              })(this, e, t);
              if (!r) throw new eq();
              return r;
            },
          );
        }
        getPendingTransactions() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultReturnFormat) {
              return (function (e, t) {
                return d8(this, void 0, void 0, function* () {
                  return (yield (function (e) {
                    return cQ(this, void 0, void 0, function* () {
                      return e.send({
                        method: "eth_pendingTransactions",
                        params: [],
                      });
                    });
                  })(e.requestManager)).map((r) =>
                    ly(r, null != t ? t : e.defaultReturnFormat, {
                      transactionSchema: e.config.customTransactionSchema,
                      fillInputAndData: !0,
                    }),
                  );
                });
              })(this, e);
            },
          );
        }
        getTransactionFromBlock() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultBlock, t, r = this.defaultReturnFormat) {
              return (function (e) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t = e.defaultBlock, r, n) {
                    let i,
                      s = aA({ format: "uint" }, r, W);
                    if (se(t)) {
                      let r = aA({ format: "bytes32" }, t, W);
                      i = yield (function (e, t, r) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["bytes32", "hex"], [t, r]),
                            e.send({
                              method: "eth_getTransactionByBlockHashAndIndex",
                              params: [t, r],
                            })
                          );
                        });
                      })(e.requestManager, r, s);
                    } else {
                      let r = su(t) ? t : aA({ format: "uint" }, t, W);
                      i = yield (function (e, t, r) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["blockNumberOrTag", "hex"], [t, r]),
                            e.send({
                              method: "eth_getTransactionByBlockNumberAndIndex",
                              params: [t, r],
                            })
                          );
                        });
                      })(e.requestManager, r, s);
                    }
                    return sf(i)
                      ? i
                      : ly(i, null != n ? n : e.defaultReturnFormat, {
                          transactionSchema: e.config.customTransactionSchema,
                          fillInputAndData: !0,
                        });
                  },
                );
              })(this, e, t, r);
            },
          );
        }
        getTransactionReceipt(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultReturnFormat) {
              let r = yield hn(this, e, t);
              if (!r) throw new eq();
              return r;
            },
          );
        }
        getTransactionCount(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultBlock, r = this.defaultReturnFormat) {
              return hi(this, e, t, r);
            },
          );
        }
        sendTransaction(e, t = this.defaultReturnFormat, r) {
          return hs(this, e, t, r, this.transactionMiddleware);
        }
        sendSignedTransaction(e, t = this.defaultReturnFormat, r) {
          return (function (e, t, r, n = { checkRevertBeforeSending: !0 }) {
            let i = new cq((s, a) => {
              setImmediate(() => {
                d8(this, void 0, void 0, function* () {
                  let o = new d4({
                      web3Context: e,
                      promiEvent: i,
                      options: n,
                      returnFormat: r,
                    }),
                    u = aA({ format: "bytes" }, t, W),
                    c = cE.fromSerializedData(sS(sC(u))),
                    l = Object.assign(Object.assign({}, c.toJSON()), {
                      from: c.getSenderAddress().toString(),
                    });
                  try {
                    let { v: t, r: n, s: i } = l,
                      a = d9(l, ["v", "r", "s"]);
                    (yield o.checkRevertBeforeSending(a), o.emitSending(u));
                    let c = yield lF(e, () =>
                      d8(this, void 0, void 0, function* () {
                        return cz(e.requestManager, u);
                      }),
                    );
                    o.emitSent(u);
                    let d = aA(
                      { format: "bytes32" },
                      c,
                      null != r ? r : e.defaultReturnFormat,
                    );
                    o.emitTransactionHash(d);
                    let h = yield lD(
                        e,
                        c,
                        null != r ? r : e.defaultReturnFormat,
                      ),
                      f = o.getReceiptWithEvents(
                        aA(lf, h, null != r ? r : e.defaultReturnFormat),
                      );
                    (o.emitReceipt(f),
                      s(yield o.handleResolve({ receipt: f, tx: l })),
                      o.emitConfirmation({ receipt: f, transactionHash: c }));
                  } catch (e) {
                    a(yield o.handleError({ error: e, tx: l }));
                  }
                });
              });
            });
            return i;
          })(this, e, t, r);
        }
        sign(e, t) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t, r = this.defaultReturnFormat) {
              return (function (e, t, r) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t, r, n = e.defaultReturnFormat) {
                    var i;
                    let s = aA({ format: "bytes" }, t, J);
                    if (null == (i = e.wallet) ? void 0 : i.get(r))
                      return aA(lp, e.wallet.get(r).sign(s), n);
                    if ("number" == typeof r)
                      throw new eL(
                        t,
                        'RPC method "eth_sign" does not support index signatures',
                      );
                    return aA(
                      { format: "bytes" },
                      yield (function (e, t, r) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(["address", "hex"], [t, r]),
                            e.send({ method: "eth_sign", params: [t, r] })
                          );
                        });
                      })(e.requestManager, r, s),
                      n,
                    );
                  },
                );
              })(this, e, t, r);
            },
          );
        }
        signTransaction(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultReturnFormat) {
              return (function (e, t) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t, r = e.defaultReturnFormat) {
                    let n = yield (function (e, t) {
                      return cQ(this, void 0, void 0, function* () {
                        return e.send({
                          method: "eth_signTransaction",
                          params: [t],
                        });
                      });
                    })(
                      e.requestManager,
                      ly(t, W, {
                        transactionSchema: e.config.customTransactionSchema,
                      }),
                    );
                    return iG(n)
                      ? (function (e, t, r = { fillInputAndData: !1 }) {
                          return {
                            raw: aA({ format: "bytes" }, e, t),
                            tx: ly(
                              Object.assign(
                                Object.assign(
                                  {},
                                  cE.fromSerializedData(sC(e)).toJSON(),
                                ),
                                { hash: sP(ax(sC(e))), type: lt(sC(e)) },
                              ),
                              t,
                              {
                                fillInputAndData: r.fillInputAndData,
                                transactionSchema: r.transactionSchema,
                              },
                            ),
                          };
                        })(n, r, { fillInputAndData: !0 })
                      : {
                          raw: aA({ format: "bytes" }, n.raw, r),
                          tx: ly(n.tx, r, {
                            transactionSchema: e.config.customTransactionSchema,
                            fillInputAndData: !0,
                          }),
                        };
                  },
                );
              })(this, e, t);
            },
          );
        }
        call(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultBlock, r = this.defaultReturnFormat) {
              return ha(this, e, t, r);
            },
          );
        }
        estimateGas(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultBlock, r = this.defaultReturnFormat) {
              return ho(this, e, t, r);
            },
          );
        }
        getPastLogs(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultReturnFormat) {
              return hu(this, e, t);
            },
          );
        }
        getWork() {
          return hg(this, void 0, void 0, function* () {
            return (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "eth_getWork", params: [] });
              });
            })(this.requestManager);
          });
        }
        submitWork(e, t, r) {
          return hg(this, void 0, void 0, function* () {
            return (function (e, t, r, n) {
              return cQ(this, void 0, void 0, function* () {
                return (
                  sw.validate(["bytes8", "bytes32", "bytes32"], [t, r, n]),
                  e.send({ method: "eth_submitWork", params: [t, r, n] })
                );
              });
            })(this.requestManager, e, t, r);
          });
        }
        requestAccounts() {
          return hg(this, void 0, void 0, function* () {
            return (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "eth_requestAccounts", params: [] });
              });
            })(this.requestManager);
          });
        }
        getChainId() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultReturnFormat) {
              return hc(this, e);
            },
          );
        }
        getNodeInfo() {
          return hg(this, void 0, void 0, function* () {
            return (function (e) {
              return cQ(this, void 0, void 0, function* () {
                return e.send({ method: "web3_clientVersion", params: [] });
              });
            })(this.requestManager);
          });
        }
        getProof(e, t) {
          return hg(
            this,
            arguments,
            void 0,
            function* (
              e,
              t,
              r = this.defaultBlock,
              n = this.defaultReturnFormat,
            ) {
              return (function (e, t, r) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t, r, n = e.defaultBlock, i) {
                    let s = r.map((e) => aA({ format: "bytes" }, e, W)),
                      a = su(n) ? n : aA({ format: "uint" }, n, W);
                    return aA(
                      lg,
                      yield (function (e, t, r, n) {
                        return cQ(this, void 0, void 0, function* () {
                          return (
                            sw.validate(
                              ["address", "bytes32[]", "blockNumberOrTag"],
                              [t, r, n],
                            ),
                            e.send({
                              method: "eth_getProof",
                              params: [t, r, n],
                            })
                          );
                        });
                      })(e.requestManager, t, s, a),
                      null != i ? i : e.defaultReturnFormat,
                    );
                  },
                );
              })(this, e, t, r, n);
            },
          );
        }
        getFeeHistory(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (
              e,
              t = this.defaultBlock,
              r,
              n = this.defaultReturnFormat,
            ) {
              return (function (e, t) {
                return d8(
                  this,
                  arguments,
                  void 0,
                  function* (e, t, r = e.defaultBlock, n, i) {
                    let s = aA({ format: "uint" }, t, W),
                      a = su(r) ? r : aA({ format: "uint" }, r, W),
                      o = aA(
                        { type: "array", items: { format: "uint" } },
                        n,
                        lI,
                      );
                    return aA(
                      lm,
                      yield (function (e, t, r, n) {
                        return cQ(this, void 0, void 0, function* () {
                          for (let e of (sw.validate(
                            ["hex", "blockNumberOrTag"],
                            [t, r],
                          ),
                          n))
                            sw.validate(["number"], [e]);
                          return e.send({
                            method: "eth_feeHistory",
                            params: [t, r, n],
                          });
                        });
                      })(e.requestManager, s, a, o),
                      null != i ? i : e.defaultReturnFormat,
                    );
                  },
                );
              })(this, e, t, r, n);
            },
          );
        }
        createAccessList(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultBlock, r = this.defaultReturnFormat) {
              return hl(this, e, t, r);
            },
          );
        }
        signTypedData(e, t, r, n) {
          return hg(this, void 0, void 0, function* () {
            var i;
            return (
              void 0 === r && (r = !1),
              void 0 === n &&
                (n = null != (i = this.defaultReturnFormat) ? i : J),
              (function (e, t, r, n, i) {
                return d8(this, void 0, void 0, function* () {
                  return aA(
                    { format: "bytes" },
                    yield (function (e, t, r, n = !1) {
                      return cQ(this, void 0, void 0, function* () {
                        return (
                          sw.validate(["address"], [t]),
                          e.send({
                            method: `eth_signTypedData${n ? "" : "_v4"}`,
                            params: [t, r],
                          })
                        );
                      });
                    })(e.requestManager, t, r, n),
                    null != i ? i : e.defaultReturnFormat,
                  );
                });
              })(this, e, t, r, n)
            );
          });
        }
        subscribe(e, t, r) {
          return hg(this, void 0, void 0, function* () {
            var n, i;
            void 0 === r &&
              (r = null != (n = this.defaultReturnFormat) ? n : J);
            let s = yield null == (i = this.subscriptionManager)
              ? void 0
              : i.subscribe(e, t, r);
            return (
              s instanceof hh &&
                "logs" === e &&
                "object" == typeof t &&
                !as(t.fromBlock) &&
                Number.isFinite(Number(t.fromBlock)) &&
                setImmediate(() => {
                  this.getPastLogs(t)
                    .then((e) => {
                      for (let t of e) s._processSubscriptionResult(t);
                    })
                    .catch((e) => {
                      s._processSubscriptionError(e);
                    });
                }),
              s
            );
          });
        }
        static shouldClearSubscription({ sub: e }) {
          return !(e instanceof hm);
        }
        clearSubscriptions(e = !1) {
          var t;
          return null == (t = this.subscriptionManager)
            ? void 0
            : t.unsubscribe(e ? hv.shouldClearSubscription : void 0);
        }
        createNewPendingTransactionFilter() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultReturnFormat) {
              return (function (e, t) {
                return hd(this, void 0, void 0, function* () {
                  return aA(
                    { format: "uint" },
                    yield (function (e) {
                      return cQ(this, void 0, void 0, function* () {
                        return e.send({
                          method: "eth_newPendingTransactionFilter",
                          params: [],
                        });
                      });
                    })(e.requestManager),
                    null != t ? t : e.defaultReturnFormat,
                  );
                });
              })(this, e);
            },
          );
        }
        createNewFilter(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultReturnFormat) {
              return (function (e, t, r) {
                return hd(this, void 0, void 0, function* () {
                  let { toBlock: n, fromBlock: i } = t;
                  (sf(n) ||
                    ("number" != typeof n && "bigint" != typeof n) ||
                    (n = sN(n)),
                    sf(i) ||
                      ("number" != typeof i && "bigint" != typeof i) ||
                      (i = sN(i)));
                  let s = Object.assign(Object.assign({}, t), {
                    fromBlock: i,
                    toBlock: n,
                  });
                  return aA(
                    { format: "uint" },
                    yield (function (e, t) {
                      return cQ(this, void 0, void 0, function* () {
                        return (
                          sw.validate(["filter"], [t]),
                          e.send({ method: "eth_newFilter", params: [t] })
                        );
                      });
                    })(e.requestManager, s),
                    null != r ? r : e.defaultReturnFormat,
                  );
                });
              })(this, e, t);
            },
          );
        }
        createNewBlockFilter() {
          return hg(
            this,
            arguments,
            void 0,
            function* (e = this.defaultReturnFormat) {
              return (function (e, t) {
                return hd(this, void 0, void 0, function* () {
                  return aA(
                    { format: "uint" },
                    yield (function (e) {
                      return cQ(this, void 0, void 0, function* () {
                        return e.send({
                          method: "eth_newBlockFilter",
                          params: [],
                        });
                      });
                    })(e.requestManager),
                    null != t ? t : e.defaultReturnFormat,
                  );
                });
              })(this, e);
            },
          );
        }
        uninstallFilter(e) {
          return hg(this, void 0, void 0, function* () {
            return (function (e, t) {
              return hd(this, void 0, void 0, function* () {
                return yield (function (e, t) {
                  return cQ(this, void 0, void 0, function* () {
                    return (
                      sw.validate(["hex"], [t]),
                      e.send({ method: "eth_uninstallFilter", params: [t] })
                    );
                  });
                })(e.requestManager, sN(t));
              });
            })(this, e);
          });
        }
        getFilterChanges(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultReturnFormat) {
              return (function (e, t, r) {
                return hd(this, void 0, void 0, function* () {
                  return (yield (function (e, t) {
                    return cQ(this, void 0, void 0, function* () {
                      return (
                        sw.validate(["hex"], [t]),
                        e.send({ method: "eth_getFilterChanges", params: [t] })
                      );
                    });
                  })(e.requestManager, sN(t))).map((t) =>
                    "string" == typeof t
                      ? t
                      : aA(ld, t, null != r ? r : e.defaultReturnFormat),
                  );
                });
              })(this, e, t);
            },
          );
        }
        getFilterLogs(e) {
          return hg(
            this,
            arguments,
            void 0,
            function* (e, t = this.defaultReturnFormat) {
              return (function (e, t, r) {
                return hd(this, void 0, void 0, function* () {
                  return (yield (function (e, t) {
                    return cQ(this, void 0, void 0, function* () {
                      return (
                        sw.validate(["hex"], [t]),
                        e.send({ method: "eth_getFilterLogs", params: [t] })
                      );
                    });
                  })(e.requestManager, sN(t))).map((t) =>
                    "string" == typeof t
                      ? t
                      : aA(ld, t, null != r ? r : e.defaultReturnFormat),
                  );
                });
              })(this, e, t);
            },
          );
        }
      }
      function hb(e) {
        return (
          (!!isNullish(e.to) || !!isAddress(e.to)) &&
          (!!isHexStrict(e.type) ||
            !!isNullish(e.type) ||
            2 === e.type.length) &&
          !!isHexStrict(e.nonce) &&
          !!isHexStrict(e.gas) &&
          !!isHexStrict(e.value) &&
          !!isHexStrict(e.input) &&
          (!e.chainId || !!isHexStrict(e.chainId)) &&
          !0
        );
      }
      function hA(e) {
        return (
          !!Array.isArray(e) &&
          !!e.every(
            (e) =>
              (!!isNullish(e.address) || !!isAddress(e.address)) &&
              (!!isNullish(e.storageKeys) ||
                !!e.storageKeys.every((e) => isHexString32Bytes(e))),
          )
        );
      }
      let hw = (e) => {
          if (!sf(e.common)) {
            if (sf(e.common.customChain)) throw new ez();
            if (sf(e.common.customChain.chainId)) throw new eV();
            if (!sf(e.chainId) && e.chainId !== e.common.customChain.chainId)
              throw new eK({
                txChainId: e.chainId,
                customChainId: e.common.customChain.chainId,
              });
          }
        },
        hx = (e) => {
          if (!sf(e.common) && !sf(e.chain) && !sf(e.hardfork)) throw new e$();
          if (
            (!sf(e.chain) && sf(e.hardfork)) ||
            (!sf(e.hardfork) && sf(e.chain))
          )
            throw new eY({ chain: e.chain, hardfork: e.hardfork });
        },
        hE = (e) => {
          if (
            !sf(e.common) &&
            !sf(e.common.baseChain) &&
            !sf(e.chain) &&
            e.chain !== e.common.baseChain
          )
            throw new eJ({ txChain: e.chain, baseChain: e.common.baseChain });
        },
        hk = (e) => {
          if (
            !sf(e.common) &&
            !sf(e.common.hardfork) &&
            !sf(e.hardfork) &&
            e.hardfork !== e.common.hardfork
          )
            throw new eW({
              txHardfork: e.hardfork,
              commonHardfork: e.common.hardfork,
            });
        },
        hI = (e) => {
          if (sf(e.gas) || !si(e.gas) || sf(e.gasPrice) || !si(e.gasPrice))
            throw new e3({ gas: e.gas, gasPrice: e.gasPrice });
          if (!sf(e.maxFeePerGas) || !sf(e.maxPriorityFeePerGas))
            throw new e4({
              maxFeePerGas: e.maxFeePerGas,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas,
            });
        },
        h_ = (e) => {
          if (!sf(e.gasPrice) && "0x2" === e.type) throw new e5(e.gasPrice);
          if ("0x0" === e.type || "0x1" === e.type)
            throw new e4({
              maxFeePerGas: e.maxFeePerGas,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas,
            });
          if (
            sf(e.maxFeePerGas) ||
            !si(e.maxFeePerGas) ||
            sf(e.maxPriorityFeePerGas) ||
            !si(e.maxPriorityFeePerGas)
          )
            throw new e6({
              maxPriorityFeePerGas: e.maxPriorityFeePerGas,
              maxFeePerGas: e.maxFeePerGas,
            });
        },
        hS = (e) => {
          let t = !sf(e.gas) || !sf(e.gasLimit),
            r = t && !sf(e.gasPrice),
            n = t && !sf(e.maxPriorityFeePerGas) && !sf(e.maxFeePerGas);
          if (!r && !n)
            throw new e0({
              gas: e.gas,
              gasPrice: e.gasPrice,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas,
              maxFeePerGas: e.maxFeePerGas,
            });
          if (r && n)
            throw new e2({
              gas: e.gas,
              gasPrice: e.gasPrice,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas,
              maxFeePerGas: e.maxFeePerGas,
            });
          ((r ? hI : h_)(e), (!sf(e.type) && e.type > "0x1" ? h_ : hI)(e));
        },
        hT = (e, t, r = { transactionSchema: void 0 }) => {
          if (!sf(t)) return void t(e);
          if ("object" != typeof e || sf(e)) throw new e8(e);
          (hw(e), hx(e), hE(e), hk(e));
          let n = ly(e, W, { transactionSchema: r.transactionSchema });
          if (
            (hS(n),
            sf(n.nonce) ||
              sf(n.chainId) ||
              n.nonce.startsWith("-") ||
              n.chainId.startsWith("-"))
          )
            throw new e9({ nonce: e.nonce, chainId: e.chainId });
        },
        hP = (e) => {
          var t, r;
          return Object.assign(Object.assign({}, e), {
            nonce: e.nonce,
            gasPrice: e.gasPrice,
            gasLimit: null != (t = e.gasLimit) ? t : e.gas,
            to: e.to,
            value: e.value,
            data: null != (r = e.data) ? r : e.input,
            type: e.type,
            chainId: e.chainId,
            accessList: e.accessList,
            maxPriorityFeePerGas: e.maxPriorityFeePerGas,
            maxFeePerGas: e.maxFeePerGas,
          });
        },
        hC = (e, t) => {
          var r, n, i, s, a, o, u, c, l, d, h, f, p, m, g, y, v, b;
          let A;
          if ((sf(e.chain) || sf(e.hardfork)) && sf(e.common))
            t.defaultCommon
              ? (sf((A = Object.assign({}, t.defaultCommon)).hardfork) &&
                  (A.hardfork =
                    null != (r = e.hardfork) ? r : t.defaultHardfork),
                sf(A.baseChain) && (A.baseChain = t.defaultChain))
              : (A = cu.custom(
                  {
                    name: "custom-network",
                    chainId: sK(e.chainId),
                    networkId: sf(e.networkId) ? void 0 : sK(e.networkId),
                    defaultHardfork:
                      null != (n = e.hardfork) ? n : t.defaultHardfork,
                  },
                  { baseChain: t.defaultChain },
                ));
          else {
            let r =
                null !=
                (o =
                  null !=
                  (a =
                    null ==
                    (s =
                      null == (i = null == e ? void 0 : e.common)
                        ? void 0
                        : i.customChain)
                      ? void 0
                      : s.name)
                    ? a
                    : e.chain)
                  ? o
                  : "custom-network",
              n = sK(
                null !=
                  (l =
                    null ==
                    (c =
                      null == (u = null == e ? void 0 : e.common)
                        ? void 0
                        : u.customChain)
                      ? void 0
                      : c.chainId)
                  ? l
                  : null == e
                    ? void 0
                    : e.chainId,
              ),
              w = sK(
                null !=
                  (f =
                    null ==
                    (h =
                      null == (d = null == e ? void 0 : e.common)
                        ? void 0
                        : d.customChain)
                      ? void 0
                      : h.networkId)
                  ? f
                  : null == e
                    ? void 0
                    : e.networkId,
              ),
              x =
                null !=
                (g =
                  null !=
                  (m =
                    null == (p = null == e ? void 0 : e.common)
                      ? void 0
                      : p.hardfork)
                    ? m
                    : null == e
                      ? void 0
                      : e.hardfork)
                  ? g
                  : t.defaultHardfork,
              E =
                null !=
                (b =
                  null != (v = null == (y = e.common) ? void 0 : y.baseChain)
                    ? v
                    : e.chain)
                  ? b
                  : t.defaultChain;
            n &&
              w &&
              r &&
              (A = cu.custom(
                { name: r, chainId: n, networkId: w, defaultHardfork: x },
                { baseChain: E },
              ));
          }
          return { common: A };
        },
        hB = (e, t, r, ...n) =>
          (function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, s) {
              function a(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, o);
              }
              u((n = n.apply(e, t || [])).next());
            });
          })(
            void 0,
            [e, t, r, ...n],
            void 0,
            function* (e, t, r, n = !1, i = !0) {
              let s = ly(
                yield lO({
                  transaction: e,
                  web3Context: t,
                  privateKey: r,
                  fillGasPrice: n,
                  fillGasLimit: i,
                }),
                W,
                { transactionSchema: t.config.customTransactionSchema },
              );
              return (
                hT(s, void 0, {
                  transactionSchema: t.config.customTransactionSchema,
                }),
                cE.fromTxData(hP(s), hC(s, t))
              );
            },
          ),
        hO = ({ address: e }, t, r) => {
          var n, i;
          let s = null == r ? void 0 : r.topics,
            a = null != (n = null == r ? void 0 : r.filter) ? n : {},
            o = {};
          if (
            (as(null == r ? void 0 : r.fromBlock) ||
              (o.fromBlock = aA(
                lc.properties.number,
                null == r ? void 0 : r.fromBlock,
                { number: w.HEX, bytes: x.HEX },
              )),
            as(null == r ? void 0 : r.toBlock) ||
              (o.toBlock = aA(
                lc.properties.number,
                null == r ? void 0 : r.toBlock,
                { number: w.HEX, bytes: x.HEX },
              )),
            s && Array.isArray(s))
          )
            o.topics = [...s];
          else if (
            ((o.topics = []),
            !t ||
              t.anonymous ||
              [lE, "allEvents"].includes(t.name) ||
              o.topics.push(null != (i = t.signature) ? i : lX(l$(t))),
            ![lE, "allEvents"].includes(t.name) && t.inputs)
          )
            for (let e of t.inputs) {
              if (!e.indexed) continue;
              let t = a[e.name];
              if (!t) {
                o.topics.push(null);
                continue;
              }
              Array.isArray(t)
                ? o.topics.push(t.map((t) => dF(e.type, t)))
                : "string" === e.type
                  ? o.topics.push(ax(t))
                  : o.topics.push(dF(e.type, t));
            }
          return (
            o.topics.length || delete o.topics,
            e && (o.address = e.toLowerCase()),
            o
          );
        },
        hN = (e, t, r) => {
          let n,
            i = Array.isArray(e.inputs) ? e.inputs.length : 0;
          if (e.inputs && i !== t.length)
            throw new eb(
              `The number of arguments is not matching the methods required number. You need to pass ${i} arguments.`,
            );
          if (
            ((n = e.inputs
              ? dM(Array.isArray(e.inputs) ? e.inputs : [], t).replace("0x", "")
              : (function (e) {
                  try {
                    let t = (function e(t) {
                      let r = [];
                      return (
                        t.forEach((t) => {
                          if (Array.isArray(t)) {
                            let n = e(t);
                            r.push({ type: "tuple", components: n, name: "" });
                          } else r.push({ type: sV(t, !0) });
                        }),
                        r
                      );
                    })(e);
                    return i6(
                      dN({ type: "tuple", name: "", components: t }, e).encoded,
                    );
                  } catch (t) {
                    throw new eB("Could not infer types from given params", {
                      params: e,
                    });
                  }
                })(t).replace("0x", "")),
            lZ(e))
          ) {
            if (!r)
              throw new eb(
                "The contract has no contract data option set. This is necessary to append the constructor parameters.",
              );
            return r.startsWith("0x") ? `${r}${n}` : `0x${r}${n}`;
          }
          return `${dH(e)}${n}`;
        };
      class hR extends ow {
        constructor(e, t) {
          (super(e, t),
            (this.address = e.address),
            (this.topics = e.topics),
            (this.abi = e.abi),
            (this.jsonInterface = e.jsonInterface));
        }
        _buildSubscriptionParams() {
          return ["logs", { address: this.address, topics: this.topics }];
        }
        formatSubscriptionResult(e) {
          return d6(this.abi, e, this.jsonInterface, super.returnFormat);
        }
      }
      let hM = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0"),
      );
      function hF(e) {
        let t = Number.parseInt(e, 16);
        if (Number.isNaN(t)) throw Error("Invalid byte sequence");
        return t;
      }
      function hL(e) {
        if ("string" != typeof e)
          throw TypeError("hexToBytes: expected string, got " + typeof e);
        if (e.length % 2)
          throw Error("hexToBytes: received invalid unpadded hex");
        let t = new Uint8Array(e.length / 2);
        for (let r = 0; r < t.length; r++) {
          let n = 2 * r;
          t[r] = hF(e.slice(n, n + 2));
        }
        return t;
      }
      function hD(e) {
        if (e < 0)
          throw Error("Invalid integer as argument, must be unsigned!");
        let t = e.toString(16);
        return t.length % 2 ? `0${t}` : t;
      }
      function hj(e) {
        return e.length >= 2 && "0" === e[0] && "x" === e[1];
      }
      let hH = (e, t, r, n) => {
          var i, s;
          let a = {};
          return (
            (as(e.data) && "both" !== n) ||
              (a.data = hN(t, r, null != (i = e.data) ? i : e.input)),
            (as(e.input) && "both" !== n) ||
              (a.input = hN(t, r, null != (s = e.input) ? s : e.data)),
            as(a.input) && as(a.data) && (a[n] = hN(t, r)),
            { data: a.data, input: a.input }
          );
        },
        hG = ({ abi: e, params: t, options: r, contractOptions: n }) => {
          var i, s, a;
          if (
            !(null !=
            (a =
              null !=
              (s =
                null != (i = null == r ? void 0 : r.input)
                  ? i
                  : null == r
                    ? void 0
                    : r.data)
                ? s
                : n.input)
              ? a
              : n.data) &&
            !(null == r ? void 0 : r.to) &&
            !n.address
          )
            throw new eb("Contract address not specified");
          if (!(null == r ? void 0 : r.from) && !n.from)
            throw new eb('Contract "from" address not specified');
          let o = ao(
              {
                to: n.address,
                gas: n.gas,
                gasPrice: n.gasPrice,
                from: n.from,
                input: n.input,
                maxPriorityFeePerGas: n.maxPriorityFeePerGas,
                maxFeePerGas: n.maxFeePerGas,
                data: n.data,
              },
              r,
            ),
            u = hH(o, e, t, null == r ? void 0 : r.dataInputFill);
          return Object.assign(Object.assign({}, o), {
            data: u.data,
            input: u.input,
          });
        },
        hU = ({ abi: e, params: t, options: r, contractOptions: n }) => {
          if (!(null == r ? void 0 : r.to) && !n.address)
            throw new eb("Contract address not specified");
          let i = ao(
              {
                to: n.address,
                gas: n.gas,
                gasPrice: n.gasPrice,
                from: n.from,
                input: n.input,
                maxPriorityFeePerGas: n.maxPriorityFeePerGas,
                maxFeePerGas: n.maxFeePerGas,
                data: n.data,
              },
              r,
            ),
            s = hH(i, e, t, null == r ? void 0 : r.dataInputFill);
          return Object.assign(Object.assign({}, i), {
            data: s.data,
            input: s.input,
          });
        },
        hq = ({ abi: e, params: t, options: r, contractOptions: n }) => {
          let i = ao(
              {
                to: n.address,
                gas: n.gas,
                gasPrice: n.gasPrice,
                from: n.from,
                input: n.input,
                data: n.data,
              },
              r,
            ),
            s = hH(i, e, t, null == r ? void 0 : r.dataInputFill);
          return Object.assign(Object.assign({}, i), {
            data: s.data,
            input: s.input,
          });
        },
        hQ = (e) =>
          "object" == typeof e &&
          !as(e) &&
          0 !== Object.keys(e).length &&
          !ai(e),
        hZ = ({ abi: e, params: t, options: r, contractOptions: n }) => {
          if (!(null == r ? void 0 : r.to) && !n.address)
            throw new eb("Contract address not specified");
          if (!(null == r ? void 0 : r.from) && !n.from)
            throw new eb('Contract "from" address not specified');
          let i = ao(
              {
                to: n.address,
                gas: n.gas,
                gasPrice: n.gasPrice,
                from: n.from,
                input: n.input,
                maxPriorityFeePerGas: n.maxPriorityFeePerGas,
                maxFeePerGas: n.maxFeePerGas,
                data: n.data,
              },
              r,
            ),
            s = hH(i, e, t, null == r ? void 0 : r.dataInputFill);
          return Object.assign(Object.assign({}, i), {
            data: s.data,
            input: s.input,
          });
        };
      class hz {
        _contractMethodDeploySend(e) {
          let t = {
            transactionResolver: (e) => {
              if (e.status === BigInt(0))
                throw new eb("code couldn't be stored", e);
              let t = this.parent.clone();
              return ((t.options.address = e.contractAddress), t);
            },
            contractAbi: this.parent.options.jsonInterface,
            checkRevertBeforeSending: !1,
          };
          return sf(this.parent.getTransactionMiddleware())
            ? hs(this.parent, e, this.parent.defaultReturnFormat, t)
            : hs(
                this.parent,
                e,
                this.parent.defaultReturnFormat,
                t,
                this.parent.getTransactionMiddleware(),
              );
        }
        constructor(e, t) {
          ((this.parent = e), (this.deployOptions = t));
          let {
            args: r,
            abi: n,
            contractOptions: i,
            deployData: s,
          } = this.calculateDeployParams();
          ((this.args = r),
            (this.constructorAbi = n),
            (this.contractOptions = i),
            (this.deployData = s));
        }
        send(e) {
          let t = Object.assign({}, e),
            r = this.populateTransaction(t);
          return this._contractMethodDeploySend(r);
        }
        populateTransaction(e) {
          var t, r;
          let n = Object.assign(Object.assign({}, this.contractOptions), {
              from:
                null !=
                (r =
                  null != (t = this.contractOptions.from)
                    ? t
                    : this.parent.defaultAccount)
                  ? r
                  : void 0,
            }),
            i = hG({
              abi: this.constructorAbi,
              params: this.args,
              options: Object.assign(Object.assign({}, e), {
                dataInputFill: this.parent.contractDataInputFill,
              }),
              contractOptions: n,
            });
          return (i.dataInputFill && delete i.dataInputFill, i);
        }
        calculateDeployParams() {
          var e, t, r, n, i, s;
          let a = this.parent.options.jsonInterface.find(
            (e) => "constructor" === e.type,
          );
          a || (a = { type: "constructor", stateMutability: "" });
          let o = aA(
              { format: "bytes" },
              null != (t = null == (e = this.deployOptions) ? void 0 : e.input)
                ? t
                : this.parent.options.input,
              J,
            ),
            u = aA(
              { format: "bytes" },
              null != (n = null == (r = this.deployOptions) ? void 0 : r.data)
                ? n
                : this.parent.options.data,
              J,
            );
          if ((!o || "0x" === o.trim()) && (!u || "0x" === u.trim()))
            throw new eb("contract creation without any data provided.");
          let c =
            null !=
            (s = null == (i = this.deployOptions) ? void 0 : i.arguments)
              ? s
              : [];
          return {
            args: c,
            abi: a,
            contractOptions: Object.assign(
              Object.assign({}, this.parent.options),
              { input: o, data: u },
            ),
            deployData: null != o ? o : u,
          };
        }
        estimateGas(e) {
          var t, r, n, i;
          return (
            (t = this),
            (r = arguments),
            (n = void 0),
            (i = function* (e, t = this.parent.defaultReturnFormat) {
              let r = Object.assign({}, e);
              return this.parent.contractMethodEstimateGas({
                abi: this.constructorAbi,
                params: this.args,
                returnFormat: t,
                options: r,
                contractOptions: this.contractOptions,
              });
            }),
            new (n || (n = Promise))(function (e, s) {
              function a(e) {
                try {
                  u(i.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  u(i.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function u(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof n
                      ? r
                      : new n(function (e) {
                          e(r);
                        })
                    ).then(a, o);
              }
              u((i = i.apply(t, r || [])).next());
            })
          );
        }
        encodeABI() {
          return hN(
            this.constructorAbi,
            this.args,
            aA(
              { format: "bytes" },
              this.deployData,
              this.parent.defaultReturnFormat,
            ),
          );
        }
        decodeData(e) {
          return Object.assign(
            Object.assign(
              {},
              dG(this.constructorAbi, e.replace(this.deployData, ""), !1),
            ),
            { __method__: this.constructorAbi.type },
          );
        }
      }
      class hV extends ob {
        constructor(e, t) {
          (super(e.requestManager, e.registeredSubscriptions),
            (this.parentContract = t));
        }
        subscribe(e, t) {
          var r, n, i, s;
          let a = Object.create(null, {
            subscribe: { get: () => super.subscribe },
          });
          return (
            (r = this),
            (n = arguments),
            (i = void 0),
            (s = function* (e, t, r = J) {
              return a.subscribe.call(
                this,
                e,
                null != t ? t : this.parentContract.options,
                r,
              );
            }),
            new (i || (i = Promise))(function (e, t) {
              function a(e) {
                try {
                  u(s.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(e) {
                try {
                  u(s.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function u(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof i
                      ? r
                      : new i(function (e) {
                          e(r);
                        })
                    ).then(a, o);
              }
              u((s = s.apply(r, n || [])).next());
            })
          );
        }
      }
      var hK = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let hJ = { logs: hR, newHeads: hp, newBlockHeaders: hp };
      class hW extends cH {
        get subscriptionManager() {
          return this._subscriptionManager;
        }
        constructor(e, t, r, n, i) {
          var s, a, o;
          let u,
            c,
            l = ai(t) ? t : ai(r) ? r : void 0;
          if (
            (super(
              Object.assign(
                Object.assign({}, (u = hQ(t) ? t : hQ(r) ? r : n)),
                {
                  provider:
                    "object" == typeof t && "provider" in t
                      ? t.provider
                      : "object" == typeof r && "provider" in r
                        ? r.provider
                        : "object" == typeof n && "provider" in n
                          ? n.provider
                          : hW.givenProvider,
                  registeredSubscriptions: hJ,
                },
              ),
            ),
            (this.syncWithContext = !1),
            (this._functions = {}),
            (this._subscriptionManager = new hV(
              super.subscriptionManager,
              this,
            )),
            (null == u ? void 0 : u.wallet) && (this._wallet = u.wallet),
            (null == u ? void 0 : u.accountProvider) &&
              (this._accountProvider = u.accountProvider),
            !sf(l) &&
              !sf(l.data) &&
              !sf(l.input) &&
              "both" !== this.config.contractDataInputFill)
          )
            throw new eE({ data: l.data, input: l.input });
          this._overloadedMethodAbis = new Map();
          let d = am(n)
              ? n
              : am(r)
                ? r
                : null != i
                  ? i
                  : this.defaultReturnFormat,
            h = "string" == typeof t ? t : void 0;
          ((this.config.contractDataInputFill =
            null != (s = null == l ? void 0 : l.dataInputFill)
              ? s
              : this.config.contractDataInputFill),
            this._parseAndSetJsonInterface(e, d),
            this.defaultReturnFormat !== d && (this.defaultReturnFormat = d),
            sf(h) || this._parseAndSetAddress(h, d),
            (this.options = {
              address: h,
              jsonInterface: this._jsonInterface,
              gas:
                null != (a = null == l ? void 0 : l.gas)
                  ? a
                  : null == l
                    ? void 0
                    : l.gasLimit,
              gasPrice: null == l ? void 0 : l.gasPrice,
              from: null == l ? void 0 : l.from,
              input: null == l ? void 0 : l.input,
              data: null == l ? void 0 : l.data,
            }),
            (this.syncWithContext =
              null != (o = null == l ? void 0 : l.syncWithContext) && o),
            u instanceof cH && this.subscribeToContextEvents(u),
            Object.defineProperty(this.options, "address", {
              set: (e) => this._parseAndSetAddress(e, d),
              get: () => this._address,
            }),
            Object.defineProperty(this.options, "jsonInterface", {
              set: (e) => this._parseAndSetJsonInterface(e, d),
              get: () => this._jsonInterface,
            }),
            u instanceof cH &&
              u.on(C.CONFIG_CHANGE, (e) => {
                this.setConfig({ [e.name]: e.newValue });
              }));
        }
        setTransactionMiddleware(e) {
          this.transactionMiddleware = e;
        }
        getTransactionMiddleware() {
          return this.transactionMiddleware;
        }
        get events() {
          return this._events;
        }
        get methods() {
          return this._methods;
        }
        clone() {
          let e;
          return (
            (e = this.options.address
              ? new hW(
                  [...this._jsonInterface, ...this._errorsInterface],
                  this.options.address,
                  {
                    gas: this.options.gas,
                    gasPrice: this.options.gasPrice,
                    from: this.options.from,
                    input: this.options.input,
                    data: this.options.data,
                    provider: this.currentProvider,
                    syncWithContext: this.syncWithContext,
                    dataInputFill: this.config.contractDataInputFill,
                  },
                  this.getContextObject(),
                )
              : new hW(
                  [...this._jsonInterface, ...this._errorsInterface],
                  {
                    gas: this.options.gas,
                    gasPrice: this.options.gasPrice,
                    from: this.options.from,
                    input: this.options.input,
                    data: this.options.data,
                    provider: this.currentProvider,
                    syncWithContext: this.syncWithContext,
                    dataInputFill: this.config.contractDataInputFill,
                  },
                  this.getContextObject(),
                )),
            this.context && e.subscribeToContextEvents(this.context),
            e
          );
        }
        deploy(e) {
          return new hz(this, e);
        }
        getPastEvents(e, t, r) {
          return hK(this, void 0, void 0, function* () {
            var n;
            let i = "string" == typeof e ? e : lE,
              s = "string" == typeof e || am(e) ? (am(t) ? {} : t) : e,
              a = am(e)
                ? e
                : am(t)
                  ? t
                  : null != r
                    ? r
                    : this.defaultReturnFormat,
              o =
                "allEvents" === i || i === lE
                  ? lk
                  : this._jsonInterface.find(
                      (e) => "name" in e && e.name === i,
                    );
            if (!o) throw new eb(`Event ${String(i)} not found.`);
            let {
                fromBlock: u,
                toBlock: c,
                topics: l,
                address: d,
              } = hO(this.options, o, null != s ? s : {}),
              h = yield hu(
                this,
                { fromBlock: u, toBlock: c, topics: l, address: d },
                a,
              ),
              f = h
                ? h.map((e) =>
                    "string" == typeof e ? e : d6(o, e, this._jsonInterface, a),
                  )
                : [],
              p = null != (n = null == s ? void 0 : s.filter) ? n : {},
              m = Object.keys(p);
            return m.length > 0
              ? f.filter(
                  (e) =>
                    "string" == typeof e ||
                    m.every((t) => {
                      var r;
                      if (Array.isArray(p[t]))
                        return p[t].some(
                          (r) =>
                            String(e.returnValues[t]).toUpperCase() ===
                            String(r).toUpperCase(),
                        );
                      let n =
                        null == (r = o.inputs)
                          ? void 0
                          : r.filter((e) => e.name === t)[0];
                      return (
                        ((null == n ? !!void 0 : !!n.indexed) &&
                          "string" === n.type &&
                          ax(p[t]) === String(e.returnValues[t])) ||
                        String(e.returnValues[t]).toUpperCase() ===
                          String(p[t]).toUpperCase()
                      );
                    }),
                )
              : f;
          });
        }
        _parseAndSetAddress(e, t = this.defaultReturnFormat) {
          this._address = e ? sY(aA({ format: "address" }, e, t)) : e;
        }
        decodeMethodData(e) {
          let t = e.slice(0, 10),
            r = this._jsonInterface
              .filter((e) => "error" !== e.type)
              .find((e) => t === dH(l$(e)));
          if (!r)
            throw new eb(
              `The ABI for the provided method signature ${t} was not found.`,
            );
          return dG(r, e);
        }
        _parseAndSetJsonInterface(e, t = this.defaultReturnFormat) {
          var r, n;
          ((this._functions = {}), (this._methods = {}), (this._events = {}));
          let i = [],
            s = e.filter((e) => "error" !== e.type),
            a = e.filter((e) => lU(e));
          for (let e of s) {
            let s = Object.assign(Object.assign({}, e), { signature: "" });
            if (lQ(s)) {
              let e = l$(s),
                t = dH(e);
              ((s.methodNameWithInputs = e),
                (s.signature = t),
                (s.constant =
                  "view" === s.stateMutability ||
                  "pure" === s.stateMutability ||
                  s.constant),
                (s.payable = "payable" === s.stateMutability || s.payable),
                this._overloadedMethodAbis.set(s.name, [
                  ...(null != (r = this._overloadedMethodAbis.get(s.name))
                    ? r
                    : []),
                  s,
                ]));
              let i =
                  null != (n = this._overloadedMethodAbis.get(s.name)) ? n : [],
                o = this._createContractMethod(i, a),
                u = this._createContractMethod(i, a, !0);
              ((this._functions[e] = { signature: t, method: u }),
                (this._methods[s.name] = o),
                (this._methods[e] = u),
                (this._methods[t] = u));
            } else if (lq(s)) {
              let e = l$(s),
                r = lX(e),
                n = this._createContractEvent(s, t);
              ((s.signature = r),
                (e in this._events && "bound" !== s.name) ||
                  (this._events[e] = n),
                (this._events[s.name] = n),
                (this._events[r] = n));
            }
            i = [...i, s];
          }
          ((this._events.allEvents = this._createContractEvent(lk, t)),
            (this._jsonInterface = [...i]),
            (this._errorsInterface = a));
        }
        _getAbiParams(e, t) {
          var r;
          try {
            return iX(null != (r = e.inputs) ? r : [], t);
          } catch (t) {
            throw new eb(
              `Invalid parameters for method ${e.name}: ${t.message}`,
            );
          }
        }
        _createContractMethod(e, t, r = !1) {
          let n = e[e.length - 1];
          return (...e) => {
            var i, s, a;
            let o,
              u =
                null !=
                (s = r
                  ? null == (i = this._overloadedMethodAbis.get(n.name))
                    ? void 0
                    : i.filter((e) => e.signature === n.signature)
                  : this._overloadedMethodAbis.get(n.name))
                  ? s
                  : [],
              c = u[0],
              l = u.filter((t) => {
                var r;
                return (null != (r = t.inputs) ? r : []).length === e.length;
              });
            if (1 === u.length || 0 === l.length)
              ((o = this._getAbiParams(c, e)),
                sw.validate(null != (a = n.inputs) ? a : [], o));
            else {
              let t = [],
                r = [];
              for (let n of l)
                try {
                  ((o = this._getAbiParams(n, e)),
                    sw.validate(n.inputs, o),
                    r.push(n));
                } catch (e) {
                  t.push(e);
                }
              if (
                (1 === r.length
                  ? ([c] = r)
                  : r.length > 1 &&
                    (([c] = r),
                    console.warn(`Multiple methods found that is compatible with the given inputs.
	Found ${r.length} compatible methods: ${JSON.stringify(r.map((e) => `${e.methodNameWithInputs} (signature: ${e.signature})`))} 
	The first one will be used: ${c.methodNameWithInputs}`)),
                t.length === l.length)
              )
                throw new iD(t);
            }
            let d = {
              arguments: o,
              call: (e, r) =>
                hK(this, void 0, void 0, function* () {
                  return this._contractMethodCall(c, o, t, e, r);
                }),
              send: (e) => this._contractMethodSend(c, o, t, e),
              populateTransaction: (t, r) => {
                var i, s;
                let a = null != r ? r : this.options;
                a = Object.assign(Object.assign({}, a), {
                  input: void 0,
                  from:
                    null !=
                    (s =
                      null != (i = null == a ? void 0 : a.from)
                        ? i
                        : this.defaultAccount)
                      ? s
                      : void 0,
                });
                let o = hG({
                  abi: n,
                  params: e,
                  options: Object.assign(Object.assign({}, t), {
                    dataInputFill: this.config.contractDataInputFill,
                  }),
                  contractOptions: a,
                });
                return (o.dataInputFill && delete o.dataInputFill, o);
              },
              estimateGas: (e, ...t) =>
                hK(
                  this,
                  [e, ...t],
                  void 0,
                  function* (e, t = this.defaultReturnFormat) {
                    return this.contractMethodEstimateGas({
                      abi: c,
                      params: o,
                      returnFormat: t,
                      options: e,
                    });
                  },
                ),
              encodeABI: () => hN(c, o),
              decodeData: (e) => dG(c, e),
              createAccessList: (e, r) =>
                hK(this, void 0, void 0, function* () {
                  return this._contractMethodCreateAccessList(c, o, t, e, r);
                }),
            };
            return (c.stateMutability, d);
          };
        }
        _contractMethodCall(e, t, r, n, i) {
          return hK(this, void 0, void 0, function* () {
            var s;
            let a = hU({
              abi: e,
              params: t,
              options: Object.assign(Object.assign({}, n), {
                dataInputFill: this.config.contractDataInputFill,
              }),
              contractOptions: Object.assign(Object.assign({}, this.options), {
                from:
                  null != (s = this.options.from)
                    ? s
                    : this.config.defaultAccount,
              }),
            });
            try {
              let t = yield ha(this, a, i, this.defaultReturnFormat);
              return dU(e, t);
            } catch (e) {
              throw (e instanceof ex && dz(r, e.cause), e);
            }
          });
        }
        _contractMethodCreateAccessList(e, t, r, n, i) {
          return hK(this, void 0, void 0, function* () {
            var s;
            let a = hZ({
              abi: e,
              params: t,
              options: Object.assign(Object.assign({}, n), {
                dataInputFill: this.config.contractDataInputFill,
              }),
              contractOptions: Object.assign(Object.assign({}, this.options), {
                from:
                  null != (s = this.options.from)
                    ? s
                    : this.config.defaultAccount,
              }),
            });
            try {
              return hl(this, a, i, this.defaultReturnFormat);
            } catch (e) {
              throw (e instanceof ex && dz(r, e.cause), e);
            }
          });
        }
        _contractMethodSend(e, t, r, n, i) {
          var s, a;
          let o = null != i ? i : this.options;
          o = Object.assign(Object.assign({}, o), {
            input: void 0,
            from:
              null != (a = null != (s = o.from) ? s : this.defaultAccount)
                ? a
                : void 0,
          });
          let u = hG({
              abi: e,
              params: t,
              options: Object.assign(Object.assign({}, n), {
                dataInputFill: this.config.contractDataInputFill,
              }),
              contractOptions: o,
            }),
            c = sf(this.transactionMiddleware)
              ? hs(this, u, this.defaultReturnFormat, {
                  checkRevertBeforeSending: !1,
                  contractAbi: this._jsonInterface,
                })
              : hs(
                  this,
                  u,
                  this.defaultReturnFormat,
                  {
                    checkRevertBeforeSending: !1,
                    contractAbi: this._jsonInterface,
                  },
                  this.transactionMiddleware,
                );
          return (
            c.on("error", (e) => {
              e instanceof ex && dz(r, e.cause);
            }),
            c
          );
        }
        contractMethodEstimateGas(e) {
          return hK(
            this,
            arguments,
            void 0,
            function* ({
              abi: e,
              params: t,
              returnFormat: r,
              options: n,
              contractOptions: i,
            }) {
              return ho(
                this,
                hq({
                  abi: e,
                  params: t,
                  options: Object.assign(Object.assign({}, n), {
                    dataInputFill: this.config.contractDataInputFill,
                  }),
                  contractOptions: null != i ? i : this.options,
                }),
                E.LATEST,
                null != r ? r : this.defaultReturnFormat,
              );
            },
          );
        }
        _createContractEvent(e, t = this.defaultReturnFormat) {
          return (...r) => {
            var n;
            let { topics: i, fromBlock: s } = hO(this.options, e, r[0]),
              a = new hR(
                {
                  address: this.options.address,
                  topics: i,
                  abi: e,
                  jsonInterface: this._jsonInterface,
                },
                {
                  subscriptionManager: this.subscriptionManager,
                  returnFormat: t,
                },
              );
            return (
              sf(s) ||
                this.getPastEvents(e.name, { fromBlock: s, topics: i }, t)
                  .then((e) => {
                    e && e.forEach((e) => a.emit("data", e));
                  })
                  .catch((e) => {
                    a.emit("error", new eM("Failed to get past events.", e));
                  }),
              null == (n = this.subscriptionManager) ||
                n.addSubscription(a).catch((e) => {
                  a.emit("error", new eM("Failed to subscribe.", e));
                }),
              a
            );
          };
        }
        subscribeToContextEvents(e) {
          let t = this;
          ((this.context = e),
            t.syncWithContext &&
              e.on(C.CONFIG_CHANGE, (e) => {
                t.setConfig({ [e.name]: e.newValue });
              }));
        }
      }
      let h$ = hW,
        hY = {
          addr: "0x3b3b57de",
          name: "0x691f3431",
          abi: "0x2203ab56",
          pubkey: "0xc8690233",
          text: "0x59d1d43c",
          contenthash: "0xbc1c58d1",
        },
        hX = {
          setAddr: "addr",
          addr: "addr",
          pubkey: "pubkey",
          contenthash: "contenthash",
          text: "text",
          name: "name",
        },
        h0 = {
          main: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          goerli: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        },
        h1 = { "0x1": "main", "0x5": "goerli" },
        h2 = [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "label",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "NewOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "resolver",
                type: "address",
              },
            ],
            name: "NewResolver",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "isApprovedForAll",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "recordExists",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "resolver",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "ttl",
            outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        h3 = [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "a",
                type: "address",
              },
            ],
            name: "AddrChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "coinType",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "newAddress",
                type: "bytes",
              },
            ],
            name: "AddressChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "hash",
                type: "bytes",
              },
            ],
            name: "ContenthashChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "name",
                type: "bytes",
              },
              {
                indexed: !1,
                internalType: "uint16",
                name: "resource",
                type: "uint16",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "record",
                type: "bytes",
              },
            ],
            name: "DNSRecordChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "name",
                type: "bytes",
              },
              {
                indexed: !1,
                internalType: "uint16",
                name: "resource",
                type: "uint16",
              },
            ],
            name: "DNSRecordDeleted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
            ],
            name: "DNSZoneCleared",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "lastzonehash",
                type: "bytes",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "zonehash",
                type: "bytes",
              },
            ],
            name: "DNSZonehashChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "implementer",
                type: "address",
              },
            ],
            name: "InterfaceChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "name",
                type: "string",
              },
            ],
            name: "NameChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "bytes32",
                name: "x",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "bytes32",
                name: "y",
                type: "bytes32",
              },
            ],
            name: "PubkeyChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "string",
                name: "indexedKey",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "key",
                type: "string",
              },
            ],
            name: "TextChanged",
            type: "event",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              {
                internalType: "uint256",
                name: "contentTypes",
                type: "uint256",
              },
            ],
            name: "ABI",
            outputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "bytes", name: "", type: "bytes" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "addr",
            outputs: [
              { internalType: "address payable", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "uint256", name: "coinType", type: "uint256" },
            ],
            name: "addr",
            outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "contenthash",
            outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "bytes32", name: "name", type: "bytes32" },
              { internalType: "uint16", name: "resource", type: "uint16" },
            ],
            name: "dnsRecord",
            outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "bytes32", name: "name", type: "bytes32" },
            ],
            name: "hasDNSRecords",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "bytes4", name: "interfaceID", type: "bytes4" },
            ],
            name: "interfaceImplementer",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "isApprovedForAll",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "pubkey",
            outputs: [
              { internalType: "bytes32", name: "x", type: "bytes32" },
              { internalType: "bytes32", name: "y", type: "bytes32" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "interfaceID", type: "bytes4" },
            ],
            name: "supportsInterface",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "string", name: "key", type: "string" },
            ],
            name: "text",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "zonehash",
            outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "address", name: "a", type: "address" },
            ],
            name: "setAddr",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        h6 = new Map([
          [8217, "apostrophe"],
          [8260, "fraction slash"],
          [12539, "middle dot"],
        ]);
      function h5(e) {
        var t;
        let r;
        return (
          (t = (function (e) {
            let t = 0;
            function r() {
              return (e[t++] << 8) | e[t++];
            }
            let n = r(),
              i = 1,
              s = [0, 1];
            for (let e = 1; e < n; e++) s.push((i += r()));
            let a = r(),
              o = t;
            t += a;
            let u = 0,
              c = 0;
            function l() {
              return (
                0 == u && ((c = (c << 8) | e[t++]), (u = 8)),
                (c >> --u) & 1
              );
            }
            let d = 0x80000000 - 1,
              h = 0;
            for (let e = 0; e < 31; e++) h = (h << 1) | l();
            let f = [],
              p = 0,
              m = 0x80000000;
            for (;;) {
              let e = Math.floor(((h - p + 1) * i - 1) / m),
                t = 0,
                r = n;
              for (; r - t > 1; ) {
                let n = (t + r) >>> 1;
                e < s[n] ? (r = n) : (t = n);
              }
              if (0 == t) break;
              f.push(t);
              let a = p + Math.floor((m * s[t]) / i),
                o = p + Math.floor((m * s[t + 1]) / i) - 1;
              for (; ((a ^ o) & 0x40000000) == 0; )
                ((h = ((h << 1) & d) | l()),
                  (a = (a << 1) & d),
                  (o = ((o << 1) & d) | 1));
              for (; a & ~o & 0x20000000; )
                ((h = (0x40000000 & h) | ((h << 1) & (d >>> 1)) | l()),
                  (a = (a << 1) ^ 0x40000000),
                  (o = ((0x40000000 ^ o) << 1) | 0x40000001));
              ((p = a), (m = 1 + o - a));
            }
            let g = n - 4;
            return f.map((t) => {
              switch (t - g) {
                case 3:
                  return g + 65792 + ((e[o++] << 16) | (e[o++] << 8) | e[o++]);
                case 2:
                  return g + 256 + ((e[o++] << 8) | e[o++]);
                case 1:
                  return g + e[o++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, r) => (t[e.charCodeAt(0)] = r));
              let r = e.length,
                n = new Uint8Array((6 * r) >> 3);
              for (let i = 0, s = 0, a = 0, o = 0; i < r; i++)
                ((o = (o << 6) | t[e.charCodeAt(i)]),
                  (a += 6) >= 8 && (n[s++] = o >> (a -= 8)));
              return n;
            })(e),
          )),
          (r = 0),
          () => t[r++]
        );
      }
      function h4(e, t = 0) {
        let r = [];
        for (;;) {
          let n = e(),
            i = e();
          if (!i) break;
          t += n;
          for (let e = 0; e < i; e++) r.push(t + e);
          t += i + 1;
        }
        return r;
      }
      function h8(e) {
        return h7(() => {
          let t = h4(e);
          if (t.length) return t;
        });
      }
      function h9(e) {
        let t = [];
        for (;;) {
          let r = e();
          if (0 == r) break;
          t.push(
            (function (e, t) {
              let r = 1 + t(),
                n = t(),
                i = h7(t);
              return fe(i.length, 1 + e, t).flatMap((e, t) => {
                let [s, ...a] = e;
                return Array(i[t])
                  .fill()
                  .map((e, t) => {
                    let i = t * n;
                    return [s + t * r, a.map((e) => e + i)];
                  });
              });
            })(r, e),
          );
        }
        for (;;) {
          var r, n;
          let i = e() - 1;
          if (i < 0) break;
          t.push(
            ((r = i),
            fe(1 + (n = e)(), 1 + r, n).map((e) => [e[0], e.slice(1)])),
          );
        }
        return t.flat();
      }
      function h7(e) {
        let t = [];
        for (;;) {
          let r = e(t.length);
          if (!r) break;
          t.push(r);
        }
        return t;
      }
      function fe(e, t, r) {
        let n = Array(e)
          .fill()
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let r = Array(e);
            for (let i = 0, s = 0; i < e; i++) {
              var n;
              r[i] = s += 1 & (n = t()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(e, r).forEach((e, t) => n[t].push(e));
        return n;
      }
      function ft(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function fr(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let r = [];
        for (let n = 0; n < t; )
          r.push(String.fromCodePoint(...e.slice(n, (n += 4096))));
        return r.join("");
      }
      function fn(e, t) {
        let r = e.length,
          n = r - t.length;
        for (let i = 0; 0 == n && i < r; i++) n = e[i] - t[i];
        return n;
      }
      let fi = 55204;
      function fs(e) {
        return (e >> 24) & 255;
      }
      function fa(e) {
        return 0xffffff & e;
      }
      function fo(e) {
        return e >= 44032 && e < fi;
      }
      function fu(e) {
        s ||
          (function () {
            let e = h5(
              "AEUDVgHLCGMATwDUADIAdAAhADQAFAAtABQAIQAPACcADQASAAoAGAAJABIACQARAAUACwAFAAwABQAQAAMABwAEAAoABQAJAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACwANAA0AAwAKAAkABAAdAAYAZwDTAeYDMwCxCl8B8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgPi89uj00MsvBXxEPAGPCDwBnQKoEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiC+AZ4EWRJJFbEu7QDQLARtEbgECxDwAb/RyAk1AV4nD2cEQQKTAzsAGpobWgAahAGPCrysdy0OAKwAfFIcBAQFUmoA/PtZADkBIadVj2UMUgx5Il4ANQC9vAITAdQZWxDzALN9AhsZVwIcGSkCBAgXOhG7AqMZ4M7+1M0UAPDNAWsC+mcJDe8AAQA99zkEXLICyQozAo6lAobcP5JvjQLFzwKD9gU/OD8FEQCtEQL6bW+nAKUEvzjDHsuRyUvOFHcacUz5AqIFRSE2kzsBEQCuaQL5DQTlcgO6twSpTiUgCwIFCAUXBHQEqQV6swAVxUlmTmsCwjqsP/wKJQmXb793UgZBEBsnpRD3DDMBtQE7De1L2ATxBjsEyR99GRkPzZWcCKUt3QztJuMuoYBaI/UqgwXtS/Q83QtNUWgPWQtlCeM6Y4FOAyEBDSKLCt0NOQhtEPMKyWsN5RFFBzkD1UmaAKUHAQsRHTUVtSYQYqwLCTl3Bvsa9guPJq8TKXr8BdMaIQZNASka/wDPLueFsFoxXBxPXwYDCyUjxxSoUCANJUC3eEgaGwcVJakCkUNwSodRNh6TIfY8PQ1mLhNRfAf1PAUZTwuBPJ5Gq0UOEdI+jT1IIklMLAQ1fywvJ4sJzw+FDLl8cgFZCSEJsQxxEzERFzfFCDkHGS2XJCcVCCFGlWCaBPefA/MT0QMLBT8JQQcTA7UcLRMuFSkFDYEk1wLzNtUuswKPVoABFwXLDyUf3xBQR+AO6QibAmUDgyXrAC0VIQAXIpsIQ2MAX4/YUwUuywjHamwjdANnFOdhEXMHkQ5XB6ccMxW/HOFwyF4Lhggoo68JWwF1CZkBXwTjCAk1W4ygIEFnU4tYGJsgYUE/XfwCMQxlFZ9EvYd4AosPaxIbATUBcwc5DQECdxHtEWsQlQjrhgQ1tTP4OiUETyGDIBEKJwNPbM4LJyb5DPhpAaMSYgMMND137merYLYkF/0HGTLFQWAh8QuST80MnBrBGEJULhnkB78D8xrzJ+pBVwX/A6MDEzpNM+4EvQtpCIsJPwBJDqMXB9cYagpxjNABMYsBt5kDV5GDAm+PBjcHCwBnC4cFeeUAHQKnCKMABQDPA1cAOQKtB50AGQCFQQE9AycvASHlAo8DkwgxywGVLwHzKQQbwwwVAPc3bkoCw7ECgGpmogXdWAKOAkk1AU0lBAVOR1EDr3HhANsASwYT30cBFatKyxrjQwHfbysAxwD7AAU1BwVBAc0B820AtwFfCzEJorO1AU3pKQCDABVrAdcCiQDdADUAf/EBUwBNBVn5BdMCT0kBETEYK1dhAbsDHwEzAQ0AeQbLjaXJBx8EbQfTAhAbFeEC7y4HtQEDIt8TzULFAr3eVaFgAmSBAmJCW02vWzcgAqH3AmiYAmYJAp+EOBsLAmY7AmYmBG4EfwN/EwN+kjkGOXcXOYI6IyMCbB0CMjY4CgJtxwJtru+KM2dFKwFnAN4A4QBKBQeYDI0A/gvCAA21AncvAnaiPwJ5S0MCeLodXNtFrkbXAnw/AnrIAn0JAnzwBVkFIEgASH1jJAKBbQKAAAKABQJ/rklYSlsVF0rMAtEBAtDMSycDiE8Dh+ZExZEyAvKhXQMDA65LzkwtJQPPTUxNrwKLPwKK2MEbBx1DZwW3Ao43Ao5cQJeBAo7ZAo5ceFG0UzUKUtRUhQKT+wKTDADpABxVHlWvVdAGLBsplYYy4XhmRTs5ApefAu+yWCGoAFklApaPApZ8nACpWaxaCYFNADsClrUClk5cRFzRApnLAplkXMpdBxkCnJs5wjqdApwWAp+bAp64igAdDzEqDwKd8QKekgC1PWE0Ye8CntMCoG4BqQKenx8Cnk6lY8hkJyUrAievAiZ+AqD7AqBMAqLdAqHEAqYvAqXOAqf/AH0Cp/JofGixAANJahxq0QKs4wKsrgKtZwKtAgJXHQJV3AKx4dcDH05slwKyvQ0CsugXbOBtY21IXwMlzQK2XDs/bpADKUUCuF4CuUcVArkqd3A2cOECvRkCu9pwlgMyEQK+iHICAzNxAr4acyJzTwLDywLDBHOCdEs1RXTgAzynAzyaAz2/AsV8AsZHAsYQiQLIaVECyEQCyU8CyS4CZJ0C3dJ4eWF4rnklS9ADGKNnAgJh9BnzlSR7C16SXrsRAs9rAs9sL0tT0vMTnwDGrQLPcwEp6gNOEn5LBQLcJwLbigLSTwNSXANTXwEBA1WMgIk/AMsW7WBFghyC04LOg40C2scC2d6EEIRJpzwDhqUALwNkDoZxWfkAVQLfZQLeuHN3AuIv7RQB8zAnAfSbAfLShwLr8wLpcHkC6vkC6uQA+UcBuQLuiQLrnJaqlwMC7j8DheCYeXDgcaEC8wMAaQOOFpmTAvcTA5FuA5KHAveYAvnZAvhmmhyaq7s3mx4DnYMC/voBGwA5nxyfswMFjQOmagOm2QDRxQMGaqGIogUJAwxJAtQAPwMA4UEXUwER8wNrB5dnBQCTLSu3r73bAYmZFH8RBDkB+ykFIQ6dCZ8Akv0TtRQrxQL3LScApQC3BbmOkRc/xqdtQS4UJo0uAUMBgPwBtSYAdQMOBG0ALAIWDKEAAAoCPQJqA90DfgSRASBFBSF8CgAFAEQAEwA2EgJ3AQAF1QNr7wrFAgD3Cp8nv7G35QGRIUFCAekUfxE0wIkABAAbAFoCRQKEiwAGOlM6lI1tALg6jzrQAI04wTrcAKUA6ADLATqBOjs5/Dn5O3aJOls7nok6bzkYAVYBMwFsBS81XTWeNa01ZjV1NbY1xTWCNZE10jXhNZ41rTXuNf01sjXBNgI2ETXGNdU2FjYnNd417TYuNj02LjUtITY6Nj02PDbJNwgEkDxXNjg23TcgNw82yiA3iTcwCgSwPGc2JDcZN2w6jTchQtRDB0LgQwscDw8JmyhtKFFVBgDpfwDpsAD+mxQ91wLpNSMArQC9BbeOkRdLxptzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgELgEaJZkC7aMAoQCjBcGOmxdNxrsBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUHqSvAj5Gqwr7YrMUACT9AN3rlr3JG9m8w9lIAXltp/v8kfWaIaaR9OwpAES/I3ZVamDXSgB/UsOgAG6D0tq+5CIqE15FiAhV3yA2VhCQ7tj+m6xXaF53FIfGi/IAZIskMGAi2MU7MDVJNCbMzERyHZi+osdPtnFVbvq653O8rwaCy4IAf9OOok65AqJUtUriUfYsGPPVbe6jm0s9lbKlPCUKjdkHsFsEhvX4kT39ZCtAAbwQdn/h4TpO5hTByWAmr5n+Wuwhdegv6bmvX4LyOes3z2+cuHv2JFYwVMNuq2gzn8YHTjlUQd39osyWei4NKl3LAdfxlO876hh5ENp/cOvpuI9bF55guEthLLPOXjD4dktTH04P5TvZrWTM0e4+BHJxj7MLApXIFOs0sWKhNkG8iwuM5wR83my6V3wW06abhDzTXYfOr/ZpFXgXzmv4d12FFyP00/dPGbIVGV5ao8UufGzUwp/IHx6v/wDWJr9iaoCulhWwlZ7A8q/NMoD12+mBdNRgJYnThRLtMx1Bgwttn8/4Qn2CDfOSup9GVXEvA21ILgp0owHYxNOkpwLWz0G7K+WREIDjIzUzSn8I99CuJSmSpPyH0Ke6/NERYiNx+3dncSebPnOUnnWD61AhJ1n/tSLZmU5wYO5GfgzyAYJm6VL91LxZ8hL1lfximQxIDMRhIecQZBmeE5R0XlrpvwplVrJwpa8BBCdp93GPP9lyBeZ2zkRr920CR3cYbKpKHfogvm0nV7XdDz6EbjzlxADCMjSLXuXpIpyuizy39yY+I+H9rmpoIF3YwEjlH9MgGgWcCNTjHEWMqAbprn2Ox7rOHupaVE3lNyg3nt5XaZID6Y+uml5Ja+aOPu+BI+DZbiJVfaspUadakWUX6TA4dETkIqdJJHYnU4Z4yKpt5y8rVIahoMUf8A8kWtAQNCTbjp71gx3/zVdqNz1Sutkw0gFIMVm2BF4Xdv/0olw+NaDIR9Bb3DPweZA2K/cw+/b+AwyWl9ZOP67A9nexmeTNjfdzPGf9J6E6BMPKa5lJh+qNsdUz3HBUevU71eQFCqOcxiIYhacAhh/8PX0J5DdSViZ6WazDDx7cukJNpMfEkYLJ5Ao4vLoVd3d25Pg4qaVa2p2D2L3WvYPJ5Yf/A/MSxptjlgXL/KJtP2U0cRv2I09ATAiWCJYuRwiapeKFsqmi18yMMulDp3HdcIldq+7jkwsJUOHLHCzzzBw5XFvL0CAmo1ub456z7zb7shk3KPGCLZzr47oT1k/j06XNnJvG3Udv6XrP+wsqTBlZ5MaNPt9FOs/4Bt/ja/vbVhTNpBFl9Gq7MqINvGlWKOAwQzwOZy+EzSdjAqKJVV2YcskTuM94aIK+kc/AZaXiZLPREUDpkXIV947IFfj+85TrqPqLfkGcxgboMQjosf+az+odLNXdyp1mDNGsqSdK/pJ2Ca04mt/4d6s1X+lncOEYaGBBeW4pApGcjf7/XJCFbj3N3mFb+BtlIcw8ZiDKoClFX9Rf0bxCqtLpicObKJzBVVHr/6u4siH2hK75RNv7w9GfTbhJOQBYiFUZAByY4rn37tZBHT//kqKsNi3ryL9AqXJRzqiMIJMhILjoi/i8LVEsbu+Ih9bsyW16sgQqjYLO0qda6KaCPKj3DQcu6CfV5lKtjS3ZCdqLAZkOey9MR+QutJBGiz/r15GVD6rCVwJR4UUKC4GNJkfDf00OMW8aQtLSAGLXV8MIi9mbbl/qQEpxCm2L5hutFX4ekeLH4QgBWUFKs/2VVMKy46WtFE6AbwgmYm/Z0yHk5veDIrcl2HpVqb/rSE0PC9EbDzJEWqeaPhh7vF369Umq2kSiB3s5rBI6c/7N9bkRu4h2n+/h5nSwy+7n+/I+6oXQVANo2Jb5zDwtiBPf1ySCzHdT6yJShMzqSRZfnykX49CaFaxhoVF4PBhEuECJ1PrFYSpmHuyYsl14DTAV9ZxRms1XiR/kBrjhZjidOt0UNe+GSml7XNgpVw8YsUTmZXLTK+6iYnyW/wYR1W4UXwOi14xpFROHb6HcZzksgF5DbL2AFXzKNwHU2adjdAY+KCyM/cwRTBkkq/a227NI0q6DR2MkMCRu620t79bGcYUmACtqN3mk/0uNwd3JSXHqE1kzf6Yyj0W2083JNDRnIXDlgBxJ6uf58NN1f6FQiRCWB4egF8QDx74AixV8oTyw7PluIjr3/rj/WzgwPSq4xPojaF7V0xqG2u5ti2L1h6yYHv73Isrukr0kURDIEjClBsBx7kdcXUxaYMS0syT3ymLzDzslNDWQOT1Tao1YNmJHARUenhCkmV9tqCPGI5GqZaRpkiPxyjoncWjyOHYGqvbvRX+Bn1pn7EhRNXa1lqJPmoeN5VqdqIDPhEVhFsyG0d4iQEIYX0wZUbY2XbZWYlpZ/l66IrDDY0q1C1YzBDpHC4h05YqHQLqS9anyl22JQ6lEvjvdBwMHfE7z0luCXD34/rFeDa2TmSeEAykSpYO5j1G/nsgpR3qn0qaQEmLjnnLfcz+veoYqPnRqmRGwCJ6FJ3Gm/Z1/aVX5PSb03MMnjAf41ww54sD5k8FrkfBP+K0b1MrYpapWjtpZfve2HVf4ickX3LKSOhu7qI1Vd4c1kNrn2ajy1t4y93JhV4fnWCKq7OmFpcr7FjdJCXPTql0Drr14Ho3Z87+GPQ4Z/DcTiGqtvZxlRYi8cNuhXABveZIwNl/BX1huhVLaFax5OqypUrQRyb9OE3SSkPlDdy5uo5XGg2EIGEjLY1MO5cr1ibfiFWV7zspcTgkBKkwo5jPyAin04LqizZXb2tDRgwKJjGx4cVk3ngAQixwcxjYAg2Q7vmUR/hpwInMdw7OhC2qyf41vTPkudQAORS0DdLtOGQxb4fH2VYGsvJCkeWPeUwtf1/tuIhzXEThoCZzzSJqqjUtbaPI3ntHm3T5uf849hGUA0zU8ni5W+EEn3/0Y6oUhQFw9z0aGjkljBbAlFXc0y82G2wkd7VdgWa5KTgJJNjNwZMfmdnUIUn1JU5LiWX5UZEZbVlKSN76mlmjUR2ku+fucTNlO4IAAahnLjBhlvQNR9pe9swGBgq0YR7P3VCyI/seYwQ4QBzy9X+HPePgoF8WfKaJ4MBOhLCGHae6Z8xkNXwni9QAKvTNtVA56x8YJflZ/VvONRSlsSLmiSyNMnTjTaE1ko81zkzGEnVwEhjCzlwIqpxmpDAqwsEmtpdr3xpc7i/ZX3f2TzT3M0FdxIEQvO1jgmmiN+D1YpMduAzEhBtj2OBkMN/rv6p7Th4pSH6f5aH3aTvwFTl7EOSgGASI7ttyMehzpm4AVyK+bFEaFg9gnZsSUPpsbAe/0RFhrH+EXZ12Z7thf4dzN1+Sn+G8QrDA1VKaN4IFxD1rQz9Xq9Coii9S9/hPbTGjyBwFH3H1UdQuz5KsgPDEHua4/kPg2Gp/IIItsaLWBqiT9XH45MiQxSosGJ56H/0F2cjcCFd72l1665RNHURdC3lspI77esfJsl+rXXabkAy7vxDXG/XGGcKpwiKDPFfvMEgjkAHil4Za1F36RnyxxvdIAzvgfH8knukYDck07tc++DP4TdWeI7HXuq5Yl6VVFrUQtf64/dkXewlKZSHQo6YvCSpREB0GDrz+Ys2GfO8nw2SwrYwaf88AifzlPvP17bf1mI3AuccJvAjZIpBmqvharKFAebEjVKfGAwpQjWoXlm9LROsq9bCk1UeQ3CJxJqprzssS/Q04JeS1ReCCubL3J7sx86spkP4eNpp95UF+8K748icIs8vdILFklk9skQqi1So6cx3X906pvy1vz+KipTJ8fiVJxsV5MmT0XwA",
            );
            for (let [t, r] of ((s = new Map(
              h8(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24])),
            )),
            (a = new Set(h4(e))),
            (o = new Map()),
            (u = new Map()),
            h9(e))) {
              if (!a.has(t) && 2 == r.length) {
                let [e, n] = r,
                  i = u.get(e);
                (i || ((i = new Map()), u.set(e, i)), i.set(n, t));
              }
              o.set(t, r.reverse());
            }
          })();
        let t = [],
          r = [],
          n = !1;
        function i(e) {
          let r = s.get(e);
          (r && ((n = !0), (e |= r)), t.push(e));
        }
        for (let n of e)
          for (;;) {
            if (n < 128) t.push(n);
            else if (fo(n)) {
              let e = n - 44032,
                t = (e / 588) | 0,
                r = ((e % 588) / 28) | 0,
                s = e % 28;
              (i(4352 + t), i(4449 + r), s > 0 && i(4519 + s));
            } else {
              let e = o.get(n);
              e ? r.push(...e) : i(n);
            }
            if (!r.length) break;
            n = r.pop();
          }
        if (n && t.length > 1) {
          let e = fs(t[0]);
          for (let r = 1; r < t.length; r++) {
            let n = fs(t[r]);
            if (0 == n || e <= n) {
              e = n;
              continue;
            }
            let i = r - 1;
            for (;;) {
              let r = t[i + 1];
              if (((t[i + 1] = t[i]), (t[i] = r), !i || (e = fs(t[--i])) <= n))
                break;
            }
            e = fs(t[r]);
          }
        }
        return t;
      }
      function fc(e) {
        return fu(e).map(fa);
      }
      function fl(e) {
        return (function (e) {
          let t = [],
            r = [],
            n = -1,
            i = 0;
          for (let s of e) {
            let e = fs(s),
              a = fa(s);
            if (-1 == n) 0 == e ? (n = a) : t.push(a);
            else if (i > 0 && i >= e)
              (0 == e ? (t.push(n, ...r), (r.length = 0), (n = a)) : r.push(a),
                (i = e));
            else {
              let s = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                {
                  if (fo(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  let r = u.get(e);
                  return r && (r = r.get(t)) ? r : -1;
                }
              })(n, a);
              s >= 0
                ? (n = s)
                : 0 == i && 0 == e
                  ? (t.push(n), (n = a))
                  : (r.push(a), (i = e));
            }
          }
          return (n >= 0 && t.push(n, ...r), t);
        })(fu(e));
      }
      let fd = (e) => Array.from(e);
      function fh(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class ff extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function fp() {
        let e, t;
        if (c) return;
        let r = h5(
            "AEkU4AngDVgB0QKRAQYBOwDqATEAnwDbAIUApABsAOAAbwCRAEYAiQBPAHYAPgA+ACsANwAlAGMAHwAvACsAJQAWAC8AGwAiACIALwAUACsAEQAiAAsAGwARABcAGAA6ACkALAAsADUAFgAsABEAHQAhAA8AGwAdABUAFgAZAA0ADQAXABAAGQAUABIEqgYJAR4UFjfDBdMAsQCuPwFnAKUBA10jAK5/Ly8vLwE/pwUJ6/0HPwbkMQVXBVgAPSs5APa2EQbIwQuUCkEDyJ4zAsUKLwKOoQKG2D+Ob4kCxcsCg/IBH98JAPKtAUECLY0KP48A4wDiChUAF9S5yAwLPZ0EG3cA/QI5GL0P6wkGKekFBIFnDRsHLQCrAGmR76WcfwBbBpMjBukAGwA7DJMAWxVbqfu75wzbIM8IuykDsRQ7APcta6MAoX0YABcEJdcWAR0AuRnNBPoJIEw3CZcJiB4bVllM44NCABMADAAVAA5rVAAhAA4AR+4V2D3zOVjKleYuChAdX01YPewAEwAMABUADmsgXECXAMPrABsAOQzFABsVW6n7Adq4HB0FWwXiAtCfAsSwCkwcpGUUcxptTPUAuw1nAuEACy00iRfJkQKBewETGwC9DWcC4QALLQFIUCWRTAoDLfsFMgnXaRetAddDAEkrEncCMRYhAusnuTdrADnhAfUlAMcOy7UBG2OBALEFAAUAitNJBRvDHwcXAKgn0QGhKy0DmwBnAQoZPu03dAQYFwCqAccCIQDTKxJzOvNQsAWQOncnNUgF+icFWQVYr7gFaTtdQhI6WEGXe5NmX6H4CxMDxQcl8XcjBKNLAlNTAnUbqycBj6OlNVsDRRcEg2EJANEGqz8vIwcpAjldAGsBYR9xAIMdGQCVAUm3ACdpFwGvxQM3LSFDUwFvWQZlAmUA8UkXAykBBQBJQQCrAF0AcwArtQYH8+8ZjX8ACSEAKQCzG0cB0QHbBwsxl3iB6AAKABEANAA9ADgzd3nTwBBfEFwBTQlMbDoVCwKsD6YL5REVDNEqy9PYADSpB+sDUwfrA1MDUwfrB+sDUwfrA1MDUwNTA1McCvAa08AQXw9IBG0FjgWLBNYIgyZJEYEHKAjSVA10HhxHA0UA/CMlSRw7kzMLJUJMDE0DB/w2QmynfTgDRzGrVPWQogPLMk85bAEecRKgACoPcxw1tU5+ekdxoApLT661f0liTmcCvjqoP/gKIQmTb7t3TgY9EBcnoRDzDC8BsQE3DelL1ATtBjcExR95GRUPyZWYCKEt2QzpJt8unYBWI/EqfwXpS/A82QtJUWQPVQthCd86X4FKAx0BCSKHCtkNNQhpEO8KxWcN4RFBBzUD0UmWAKEG/QsNHTEVsSYMYqgLBTlzBvca8guLJqsTJXr4Bc8aHQZJASUa+wDLLuOFrFotXBhPWwX/CyEjwxSkUBwNIUCzeEQaFwcRJaUCjUNsSoNRMh6PIfI8OQ1iLg9ReAfxPAEZSwt9PJpGp0UKEc4+iT1EIkVMKAQxeywrJ4cJyw+BDLV8bgFVCR0JrQxtEy0REzfBCDUHFSmXICcRCB1GkWCWBPObA+8TzQMHBTsJPQcPA7EcKRMqFSUFCYEg0wLvNtEurwKLVnwBEwXHDyEf2xBMR9wO5QiXAmEDfyXnACkVHQATIpcIP18AW4/UUwEuxwjDamgjcANjFONdEW8HjQ5TB6McLxW7HN1wxF4HhgQon6sJVwFxCZUBWwTfCAU1V4ycID1nT4tUGJcgXUE7XfgCLQxhFZtEuYd0AocPZxIXATEBbwc1DP0CcxHpEWcQkQjnhgA1sTP0OiEESyF/IA0KIwNLbMoLIyb1DPRlAZ8SXgMINDl36menYLIgF/kHFTLBQVwh7QuOT8kMmBq9GD5UKhngB7sD7xrvJ+ZBUwX7A58POkkz6gS5C2UIhwk7AEUOnxMH0xhmCm2MzAEthwGzlQNTjX8Ca4sGMwcHAGMHgwV14QAZAqMInwABAMsDUwA1AqkHmQAVAIE9ATkDIysBHeECiwOPCC3HAZErAe8lBBe/DBEA8zNuRgLDrQKAZmaeBdlUAooCRTEBSSEEAUpDTQOrbd0A1wBHBg/bQwERp0bHFt8/AdtrJwDDAPcAATEHAT0ByQHvaQCzAVsLLQmer7EBSeUlAH8AEWcB0wKFANkAMQB77QFPAEkFVfUFzwJLRQENLRQnU10BtwMbAS8BCQB1BseJocUDGwRpB88CEBcV3QLvKgexAyLbE8lCwQK92lEAMhIKNAq1CrQfX/NcLwItbj1MAAofpD7DP0oFTTtPO1Q7TztUO087VDtPO1Q7TztUA5O73rveCmhfQWHnDKIN0ETEOkUT12BNYC4TxC2zFL0VyiVSGTkauCcBJeBVBQ8ALc9mLAgoNHEXuAA7KWSDPWOCHiwKRxzjU41U9C0XAK1LnjOrDagbEUQ8BUN16WImFgoKHgJkfQJiPldJq1c3HAKh8wJolAJmBQKfgDgXBwJmNwJmIgRqBHsDfw8Dfo45AjlzEzl+Oh8fAmwZAjIyOAYCbcMCbarrhi9jQScBYwDaAN0ARgEHlAyJAPoHvgAJsQJ3KwJ2njsCeUc/Ani2GVjXRapG0wJ8OwJ6xAJ9BQJ87AVVBRxH/Eh5XyAAJxFJVEpXERNKyALQ/QLQyEsjA4hLA4fiRMGRLgLynVz/AwOqS8pMKSHLTUhNqwKLOwKK1L0XAxk/YwGzAo4zAo5YPJN9Ao7VAo5YdFGwUzEGUtBUgQKT9wKTCADlABhVGlWrVcwCLBcpkYIy3XhiRTc1ApebAu+uWB2kAFUhApaLApZ4mAClWahaBX1JADcClrEClkpcQFzNApnHAplgXMZdAxUCnJc5vjqZApwSAp+XAp60hgAZCy0mCwKd7QKejgCxOWEwYesCns8CoGoBpQKemxsCnkqhY8RkIyEnAierAiZ6AqD3AqBIAqLZAqHAAqYrAqXKAqf7AHkCp+5oeGit/0VqGGrNAqzfAqyqAq1jAqz+AlcZAlXYArHd0wMfSmyTArK5CQKy5BNs3G1fbURbAyXJArZYNztujAMpQQK4WgK5QxECuSZzcDJw3QK9FQK71nCSAzINAr6Ecf4DM20CvhZzHnNLAsPHAsMAc350RzFBdNwDPKMDPJYDPbsCxXgCxkMCxgyFAshlTQLIQALJSwLJKgJkmQLdznh1XXiqeSFLzAMYn2b+AmHwGe+VIHsHXo5etw0Cz2cCz2grR0/O7w+bAMKpAs9vASXmA04OfkcBAtwjAtuGAtJLA1JYA1NbAP0DVYiAhTvHEulcQYIYgs+CyoOJAtrDAtnahAyERac4A4ahACsDZAqGbVX1AFEC32EC3rRvcwLiK+0QAfMsIwH0lwHyzoMC6+8C6Wx1Aur1AurgAPVDAbUC7oUC65iWppb/Au47A4XcmHVw3HGdAvL/AGUDjhKZjwL3DwORagOSgwL3lAL51QL4YpoYmqe3M5saA51/Av72ARcANZ8Yn68DBYkDpmYDptUAzcEDBmahhKIBBQMMRQELARsHaQZdtWMBALcEZ7sNhx6vCQATcTUAHwMvEkkDhXsBXyMdAIzrAB0A5p8Dm40IswYbn8EApwURu+kdPT4WeAVoNz5AK0IhQrRfcRFfvACWxQUyAJBMGZu5OyZgMhG6zw4vGMYYicn2BVcFWAVXBVgFYwVYBVcFWAVXBVgFVwVYBVcFWEYVCNeFZwICAgpkXukrBMkDsQYvu7sAuwSnuwDnQCkWsgVGPmk+cEI/QrZfdTdf6ABYETOrAIz+zGvL/KbnRno9JiMEKxYnNjV+bd9qwfEZwixpAWvXbjAXBV8FasnBybgIz0lbAAAACnxefYu+ADM/gQADFtEG5a0jBQCMwwsDAQ0A5WUdPSQfSkKxQrxBOCNfJ2A2JzgjCcE9CkQ/Qz54PoE+cD5xAolCvElCO1/LTk9qTQosa1QvagtuH1/gMzobCWebCmIjKzwdJkKrQrwrzAHL/F/JDh8uCQgJIn6d32o6LUoXyavJrAllwcvMCmBBXw/lEKMRAJONHUVCJRupbTnOOAozP0M+cEI/HAcKHUxHbFssLVrhvBIKfe0dK0I/HF0ISgkOM1RDQjcEO0OcLAqBGy1CPxv1CFMiIxgwMQAFj2HwXgpxZMlgC2AtI25DYBk5AhseYLMGAmsQZU5gTREBZOdgFWCVYH1gs2BLYJFoFhcGtQ7cVam8WgtDFqsBuyvNwQIfFQAcAx4BeQJsLzCVUoABigq4RxoA5CN0jgrKDaZN6gGbAoecTwVAXwD39wkANBZXDAulDCQfuq9HAE8MNAAVE58rggh6AtILS2URGwDYTgZ1BAoeWgAxALa4AZonCxZvqyQ4nxkBWwGGCfwD2e0PBqoGSga5AB3LValaCbthE4kLLT8OuwG7ASICR1ooKCggHh8hLBImBiEMjQBUAm5XkEmVAW4fD3FHAdN1D85RIBmpsE3qBxEFTF8A9/cKAHoGJGwKKwulODAtx69WDQsAX7wLAGNAlQh6AOpN7yIbvwAxALa4AZonLTsOzgKQGHtQu1jIdHKO16WbDvWZFT0b7AEpEFwSBg8bAccJOhCTBRArDDYLABEAs84BAgCkAOEAmIIABWtXLwAUAFsbxi5sdioNwRACOyQz0+EcHgsbfQJ7Ls6hHATBCqrxbAA3OS0Opge7CQAQOi7OERkAfavaHA+7GkcczaF3HgE9Kl8cAuugCAHCAULz5B9lAb4Jtwz6CDwKPgAFwAs9AksNuwi8DTwKvC7OoSoJPA67BZgBG2sKD4sa4QHDARELuxY7AKALOxC7BBige9wAO2sMPAACpgm8BRvQ9QUBvgH6bsoGewAHuwG7D00RErwBAQDqAQAAdBVbBhbLFPxvF7sYOwAuuwLrDlaouwAeuwJVICp/AAG7AALjAAg7FTwVuwAbuwG9KOClWw6/xAD0AGj7L7ZtvgNIo7vIqDsDAbuVJ0sAAlsACrsEAOfdGbsIGnsIoQUK/3AA37unuxjbGruji3lyBvupm4MAErsGGwsBvAAAhgBtuwYAC7unOwEaO7oIoZzKAbsL7QfAqTsA4XsBvwAA5QAVuwAG+wAJuwBpiwAauwAOuwIYu45pFfsAAVsADmsALkseAAa7ABe7CCEADUoBwgC3ryYBwAAAtAAOmwG+J+QAsloAHBsBv/7hCqEABcYLFRXbAAebAEK7AQIAabsAC3sAHbsACLsJoQAFygBunxnVAJEIIQAFygABOwAH2wAdmwghAAaaAAl7ABsrAG0bAOa7gAAIWwAUuwkhAAbKAOOLAAk7C6EOxPtfAAc7AG6cQEgARwADOwAJrQM3AAcbABl7Abv/Aab7AAobAAo7AAn7p+sGuwAJGwADCwAQOwAAFDsAEWsAD4sADesADbsAGQsGFhsAFTsAbpsWswG7ALoAEzsDAGkrCgDhSwACOwAEUgAXewUbAAbQABi7AAv7AF+7AGv7AOSLAbsAF3YBvAABcguhAAVKHgF7KFIAOUUA/gcNDHIAKCpwAaQFCF4BvF4jDAkHb0tsXyqJHzwUYi02A6EKtAHYABYC0QNuAXZyR1IUIQNPAhU+ASwGA3NGvHtSekAAKQAxAfsAUwrbAHuQLAErAHblDREyRgFKAFcFAAFQAQeKzAB4OwQgpQBaANYVAJVoNx+LAM1rsQDP1BYIwnVzGxhWHQnRAYiQqyJTU01IEjzCifkAfxw3QCkr4BGXTwByASksMClCGQ8DMFUE98XuAEtl3ABqAnECPxF6Osd4LjXVBgUAEBsdCggMKgQfHSlOU04IuboAChLNACYAARoAhgCJAI41AO4AtADgAJ08ALsAqwCmAKEA8gCfANMAnADrAQwBBwDAAHkAWgDLAM0BBwDXAOsAiACiATUA4wDYANUDAQcqM9TU1NS2wNzN0M5DMhcBTQFXL0cBVQFkAWMBVgFHS0NFaA0BThUHCAMyNgwHACINJCYpLDg6Oj09PT4/DkAeUVFRUVNTUlMpVFVXVlYcXWFhYGJhI2ZocG9ycnJycnJ0dHR0dHR0dHR0dHZ2d3Z1WwBA7ABFAJYAdAAuAGLyAIoAUwBTADMCc+kAh//y8gBgAI/sAJsASwBeAGD5+aoAgQCBAGUAUgCtAB4AsgB/AjwCPwD4AOMA+gD6AOQA+wDlAOUA5ADiACkCdwFNATwBOgFQAToBOgE6ATUBNAE0ATQBGAFUDwArCAAATRcKFgMVFg4AigCSAKIASwBkGAItAHAAaQCRAxIDJCoDHkE+RykAiwJLAMMCUwKgALoCkgKSApICkgKSApIChwKSApICkgKSApICkgKRApEClAKcApMCkgKSApACkAKQApACjgKRAnEB0AKTApsCkgKSApEWeQsA+gUDpwJdAjYXAVAQNQLeEQorEwFKNxNNkQF3pDwBZVkA/wM9RwEAAJMpHhiPagApYABpAC4AiQOUzIvwroRaBborDsIRAZ3VdCoLBCMxbAEzWmwBsgDdfoB/foB+gYKCfoOGhH6FiIaAh4KIgol+in6LfoyKjX6Ofo+CkH6RfpJ+k36Ug5WIloKXftoC2WzhAtdsAIJsJGygAINsbARCBD8EQQREBEIESARFBEAERgRIBEcEQwRFBEgAlmZsAKMDh2wAtGYBBWwAyVFsbADPbAIMbAD2WmwA9gEZAPYA9AD0APUA9AN8XmzUhCNlvwD2APQA9AD1APQcbGwAiVpsAPYAiQEZAPYAiQLsAPYAiQN8XmzUhCNlvxxsAPdabAEZAPYA9gD0APQA9QD0APcA9AD0APUA9AN8XmzUhCNlvxxsbACJWmwBGQD2AIkA9gCJAuwA9gCJA3xebNSEI2W/HGwCQwE2bAJKATlsAkvBbGwCV2xsA54C7AOeA54DnwOfA58DnwN8XmzUhCNlvxxsbACJWmwBGQOeAIkDngCJAuwDngCJA3xebNSEI2W/HGwEN2wAiQQ4AIkGjTFtIC9s1m4DJmwA/QDGWgJsbABVWv4UMgJsbACJAmwAVAEAuV5sAmxebGwAiV5sAmxebD3YAEls1gJsbEZFNiJ9FGVAe8xvEZKvxVfKZszAVTBzYBH2d1iyUXEHH7twNw7eZF5JJRHI5EgaRr5D20/3dfONrFLSq5qSrrgd2CEUq722WBQ/LzpA+bx1oREI5xy4BDSZNun0ZWORUJqInZSyMaioyvfSI0l5uFDzbWaQ28/zdB0hwR4OQZ0/jn9ALSLNikjFYGfqR389qtFlhD3a6KdIh97rhZYpywuLc7o8ql5/X8KCbPU3L/QlmCowhRXhsGDvg6wUNprA9bM/49uxlAj7ZVy3ouEY/BgFXBNyK0TLrSjZWeJm/T4nz6QGLT3cJNtWRZVZTvIdtaxMMJRHgig9+S11LjBh7Inr06ykoch1U097Rw0hvgmOrydQyaWcEQDg0RavuMuT0zYabUZl1e33HNSK1oNUCS03eh+9C2EvF3fq9h+XBaAMFuoWeZf+mfZgL4HzyiKDIUtfNU4oFu0aE9qt3VA3U4D3fOSrAcYVnjG3cSkp1vhXZnp3JQm4JknKdBitO2NVnGCYQwU3YMWHWB87NEd+4AHuOKI8BSIH92reW0pfs+kWCTJxDCbRjFv8Cfc4/DSBYJScJYTeAEgg9wTEvcwd/QuHRHqGzAQ4fXf5FUI1lPrO+fvEcPl4JInM1z9AtBT2bL4QYEREe7KiSnnxTwtmAFjn8lqT3mND8qTktX2F16Ae9cakqJ6/pEQsHURqyqWlRMCzKXRKfCHT7sYHWx9/T/ugYTFY6iVN3Btm58ATJR5alYZybKMWojwOw3HbFn23NFyeLl7+Er82RchyYuBoGQ3j7SAWNxiYvp5U+Fq/DEzB9cG5DlJWsqkosRze92OVlCtQEYo1S1lF72Z8xWc4ld/+fFcfTEDTFb9d8tJGQ75dpJEvcWyGmGBiTbiWDdGOcw93Dmxq5ISUrmasygONfHLvhgo83HQZenbdBtSzBkvYrCEQ/xEDMhMZsN6gqplx5jGG9mSQLhM81UEdEeJ59sdNJDAFy/gPyJoKlwPZgB/MkC/kICLiCB8va+nCdO2ry4aDfkmPFpF/H/SGQ3LJ6aAv9dtJ8DniHtLOckZix0BVb0iR5V3LAp521LBSIi6AtV7r2ZB/hQEvAw54EFNOQcFnl1xGUIc67tqK1INNwD2n/RbwgzO9h45LM6VMuN8V1ZNIQ6t+Xy3lTqyVCD5kqLy/t3/b8MLbgDg8JIWDkSZ+LrGhhr+gYpH+pr1TnCUnZPjpUdw6bSL6MWVXoDDciQDWECwU2e6VEpfrcOBbrSOijqGkEIoJPbpmeJLkcwbvA0yWIixQVjo0HnYh7fji+Dfdq1mtV1lG2Zz9R7eFMHS+FK7nybutu2fwzDpFldO2pZBshsHJWaltn3PWOoGJpCT2jE8EHOuC6FkejNWcfsWCqNqMLP9xTwcWArj2EiiI7D+EaDi7/2cqHL1gPiF6C/J7aUo7RQqogPZ11WqbyP97nsoMxPOC78wZMF7B1Y0g7JNXJV/nN1m4xx8hbqWz07KSaqr5hE4icB326DMR/vUKX9LoNjle/ZWtbUhrTAcsdgrLlG5Ne8aiR0bS/2ZhpNOVVxavWIZsEM/rd68EB4vjbbD13NkMK1qvMk74vGbSkL7ULO0sZ9R6APSCo6KH+Xn98wEdw1bCPAnDTaBsD6sidAGN58uiH4a3ovG1KyZAu2XtyGgF/vgWKGxw9R1lfAVcfuYE71DHuxtTzfGZnHaDpDGWmfEq0N4GawE7yIkaoz8jcmVmzJe1ydM8q0p08YIxFcY1YcqQc1djWBEoNETDFcgk5waRftEJasPREkrV++N/TOKkERF1fCLrXS8DFGYGRBeECMQRNEs0ES3FzUtXCcNxpYEM3Uei6XodZruXUIRnn+UXf2b/r7n1vQutoi6WoIbW7svDNWBbUWcDUc7F9SJK3bvSy9KIqhgyJHoW2Kpvv0J4ob14HFXGWWVsYXJzjwxS+SADShTgCRjhoDgjAYRGxwJ1Vonw+cpnCKhz8NQPrb0SFxHIRbmG95Q2hlC4mDxvPBRbkFa60cvWakd7f0kVBxxktzZ9agPJEWyA63RSHYVqt8cPrs2uFJ3rS3k9ETGKn5+A6F9IOrdZHfT1biEyUJKEvwzuscwshGCBJvd16TrefW03xVnJf4xvs72PdxrMidjJO8EiWyN/VWyB3fv9kc34YIuZTFtXGo9DuG3H1Uka5FgBMwDPEvRcSabi3WakNQkXFecJlFk6buLVk5YHpuKWTw6oF632FPPSVIVl5hgUAeHhj0t/sw/PEEvThLQDDFE34eCg/rLOyXT3r+L98oRKrlTO0MdALYQ3rRQqC7d822dJPGxF1K4J2TtfPSMFaCAg0n0NGk9yiaKKOJD1v2aBX9HUOIawjjfvwCmjHZJTR62R9c9x33JnBjWrN4QYEOmehy0oZMP9XM9Zyi6TYoe07PaLceRXcCWZiY/imRUWW6+mci7+wMxSdwMdbXckXtvhJH8sc4iQcTwm7yp+3f7CaesTTQB2qkgeXh+wFiSMXfMlH7Yil0OoZ2QTtRLTip2O0cLZ4SstqWHZ6H+8A2kZXhpm0kPbL9dUanTOvziqIUh6Ambwa3WrCb2eWbuCN3L1hgWUmjRC3JoL3dBhR3imSQI8xuCMfsszlji7cSShNSYdqCXPxEVwbqO9i5B6hf93YI7aeyI8jxgcVXK0I/klbvhSXjkjOIwZgPdVwmsFW7HGPLUAvDRuKm+itybRg7c8+Yqqjg824Qf+/NxsBSUNAK9KCoJpauFqK0XQULrWYj4FnxeKDuvr54iokpi+D57e6Y1zxRJJdsHnDR3JyraCUufHBRTKODWBVzthjm4k3/Hv+Q990XDVR+KW+TcJX045LW86EKhz/97aqj89A8ZvTk1//tczosU90loIPVaHuWegJU3wP//7XHcO7c0yQM2jM/IhQKrf8hiObHWiWDZManF8Uf/HzbmDfC2wT//aiZ4hGTv/xzgKwdb1sD6cGEkceow0s3b89/zg+3plyRm0HlZi886j5wUwFhdHiDTaBidZRo5cx/tMeLyguOATbzq17ydhzbrpxunuHx6lbFGiO97gsd4dk//7iCIo+Ew+hG2so5kvv+ITG4c1fzHPtu1Xn5QfUnqY3/uByVmB7gmnE/E+5zdm+6nDmoews5fr+NzThdSHzK4bBQOL9c4O8OI0xLSqjJ4lbniLJg1aFpQRLwaSMZmpkC9e/j6FOVrTQ6a/a4alGgfrl2ZL1sbHUQ3DOI7ntq9diHFfm3t1mul3rdJEJCHnlW/hlQntipMrpeMs7fUr6wK370D7VbXH0DUHzdYfRg/6Z11Ult1sffJS+heHbco15Sxy3+rDnPesqH1lajk0yu02hPUvEUqvcUXWXL7Ad0wNGMx5gOle4XJxq/r/YY0xdco2wRSEGwcT7YADlBrHc9ZbvzOL0QwyWCWWChB9Obg800v7tyBWaNvdwz+fL7Ph9i2irEeJkRgOzeEDw+JiD/V93vH9FgMEoFIJMoIuogmicZohf94SBuPn6hXaV9jP4VVVA/bu+Wg8S88GLtmEPSNRLdtlXx2XL/nuM8nKkhnlnjaropiKKLIH94pLIASci0pDBfj9Hi5BfaTSXQg5+PMjQX91Ktk4MOqK1K99l4BRPv5+vNovGZ3IxQv8ICvjV4/diThpoaM8uvd3D9d/DE477w3yAbW3IDm2i73pZ9aEj38JqS6h/s8/xgmUIVcuq2JTgefAyuoafzQxAuRASeg3NtG3ach/JEkyuX+JDt2PnDZTShUhyHHG3ttBg/6lhAchGjLJBtopj4e01MlCp2yqQRTr4sBBXru+lKaoanwYX8y2aWCJiR3KnhCOkYVFSvsO0oDRujUFOEptiNDTYrJoUbvOyvl4AhC9h3wORiTXK1MrpMfnvdnndnR/HRVSusMBgIxwrLdn3vq1VcncPiD0SquTx/kNmxeFyCT4uXVUd9AL+rSGmuq7OOCzDKeVPjiNWVaoP5KOFqYq5Xcuf/xW9S+u9eIq9GAtZWtQlgkRecjRtvG1NR4WXXpn+pwsTBTIy079Ikg8rSef1aVapIFcXCd6C2wHVjLXR+N0tw4Taw6x6H90BFRgNrtlq2up6hHKuV3inM5RJaQWZHd84e6RsKkk9po3dk9by54tpPw7cBkFas/G+GbHwuG+AwP55BZyXILTHCIVrPpXHEaUPYfL6nphJP1Rc10xG4UaCeY4IHCwuur8xmSQDgY4aVwhzWhjbtSHG8JO6P2i2nC9/0Bfx0zk6dYQq3aw7k5vIObD7SEKrxhz0fQ0+YTOfHW23CBNeZci1qNsUDhoeqmfyP6PvjoEjHk8QbrFyQVZPHVWijnb8YCM65iYNoEbvnchStZ/9cKg5Vd45j8KnB6UjzXl/bkyZx7VoD47ocUUi117WwgySSb4rXgLJ52Mv5XJbp3I+uBP81BUvOjy4Cacgi+GWWlC/8dwgqwiojjUBDnEOxyRyowwLQfytFra1OZS4XvRYr4uoamAfG3I/p2bA7G90yqKThH8Ke00Tqd+3l3dmJpaCZelBMYjGqNLVa3SM4+LQeL56gY6Bymy2LQPVOxjWfj5tq4o74swcxhyGJPynkS5xAjOXZP1/FAYcBT3u6qLoIkEfErwo4gozmyI1YCvM0oyI3ghjGPQSsof2sKUhq91WsKy9cYWN+4A2v4pG/Mxpdc6w6kI/HX7Xb0TuihmsiOy2wQIsrZbUmr3OBSUo6oDJNgQp+YqYkgTgYcWZDgawJw3DFfdzT//PhVUidgB2qa8uw/j9ToHBAS33iT8YLhhAfyXG0bQUFp7QmH7oQ3i6Flf4OTZLvJdh8pfuflmWu2ohm5pTiSg1pl3vq9uluTJwqXfh1hqy8e2iHoD+Y35gCIViTo6VOtK5dD8HYClucJucXASzwe2kPj4S4eYQtmkYHagXhAzp/F541xE8YFYqSPszDuz3soWzHy0p3E2jwZNQaIcGU9FNQwQxeDw0ZlK9dxXrj9IUHGUPTOyib8CqXmbZ7Ex54bn1rLx3qqAavu/gh6XjV0GmN1p+yyMK9HN5uYEvxgbAk43tsheREhyI+Q5WLIneKTGPmYiM/lxOp8fvqHy8YgXK0TlMiX0tliLI2JtfmWZP8eVV732sdYm+pcWzDzEmKLJZyeelyaZKkjPnnUO9keDwtgiLnmd5+t+Sr5y8brRnlvxcWEWfCqIALQYHvaXx6jTg4dAlye469uGwwOZVZCILLfGjaMg4LUCNMTtMSp1aC2y/3wR2t1v3w/iNBRQ+bNbtDqL2NAr7K4rUcyqbSpNrXZgAWXvjxBBtfYLK1uRYt3q2pfXJOAL0HtWcEwJLddOSJKV1SwvcvEuzg/4MPnA8MIUJOLqm3qI6wFyN99Ck6zYaV/zGSAzF/PGsaNa4vPLe5QnyuqVUnVQ6xELA6gbe53aGgeke+R/ycb2LJVyc7BhuzI90zA+c6wUDTb7NH//gdDSl2u/aW7lRJm8m1fLtPxcNuEM5JbkOCZKPM88HUsLRoC1pmKKlvWyeAXuxILbu0snpSxf8N+RgtLUSe5n2gdjOjoSTaN7mMZ7bF+cWk/MS8mFD4pcyl5UN7CbpFZH2a+Pm1VAnUTVfbw8qrmz1G9m5aKmRzY1SMhhPrlCn2t4uNUXNA3IFe6NOjSC1DEaAFZAfDlEkQCsbNhsZPj6NQPDSB3tLiTo0ZYoEbIeEIaKtU3Wk60rEszawTFuyHVd365LA/c/uarABN5M5rGq/dqTG3Ilye/5EKiYisisuzqNaZjmWv0z9TORc0CKbaTea214oNM9u2sXUZub/eqM3Pi/PjRSyQiOSwPWif2asTgu6hS6fb5UGosCWxdedMqdViIUUSSdIJx+qQ4KShfTT39VAWZbi+mB+iKICNwpt6cflY57Rcbs6d1kA26Iru73cuxYVlSvuJdcR5VfDYZRk8X0AXePROyw3Le6LaUdmTLzYsoNhhgQpd67xVNiHgk3pakmndeIAtTC4DCXy9oS6eU4CWxDdVmY53pKNbdAKmQsP37lrJZC6iDXMELGKcHjNuuZgcDyY8W/yv6ha3DX7OWm/35fpvhw55oitf4V+GULlcPWYyGGuVBdro19c8u0RDddDun40W7G5cSIzHLh/qZxb59R+EPY+wZ2XerkUim92hhXpKyW6WtAh6zQS97DrPyjCvKi3pCw96LeKynOpyjtsMQc2RmI/20zFOZcSa2AK++PoRcT6zeJyxlBZ7kk5mhqXGkLlM2hFKc+/T544xXP0Ua38Q6xdPTLTeG1PHnLMaOvksUQMrEFTB/lizCirmFQL8zYVU+OTeYQEFaITsBSMMYexS9HkajO2gGIf2micvntCZJsZQEwIH3/4JGJQGflBuH5rNXmnRRYXDQs3ZoEQoMtYDr1kFKUS/siiQSUxcTH9XYeBZiKDDFQoExREO9dddKQLO3BwMHvymCSTFyY+vxn3D27NDx6OlU092D5EDUwilttqVHpjJQDUceJYCLsK2swfXeNUVrBJT/w/sk+7si8rPtiMFis+oxvGdGQxirMBID700T39mULuNHzOyN+xBfcFACZcyngF1aSpv0JPkNUrAZTqfplv509cGXFUiEEm5dZb+OsP/blizqdK45/dSsIrufYTrCPY2lgJD6k6QljTfXVlHfYKSq+MsagyUcaMintyr95bD8kdTAeYNLNsMmo/Wdd8a2nStBP49ARIjqqpUHWY4q4mvO5Cq/CgCP+4/B+5zutGwX5pssgVLr1+fIM7WWLfiUQDk4c6ZdHZOWv5hG3g2dgQ5NXnpIY+BWwJpaouf25bXnjDzbHnQNofH/c6m+dEAS9Gs2h7pFRPKOBDnqswZ8KZjhId1ytHUTs533KwBoSiImoxKQUgZ7z6pA9QB3sZ8Cq0vwutJTTkfbX8AzCpm2cFXx/P22niUMHauU8IGc+78R6TsutoonoqFuoNA3l80t387YHMoL5KGAT1JO4zmx+vJ0LbLHlicHraSVYvJjnO9p++qnWgKw9OwFVVUagvZuf9qfiuum+hIicxP1q4zDnzkHsCNriLxBpxY9N+UOmqzdY1MunLMDgkMyi3uvnN3UBXJeZ8YLs5xr8QrOhimYoKuGBebZHAiBIkViv3DG8k2oNpp5OIgX6ulqaRN8V62QUPjn5tl1kPXhT9bcd8qIm8gi4or/FGbvQ6pgGSHmnayrugmf5E0upGxPRf/3xOtitGMaHLKJVm5zhglmVfI91o0yxhJZVS/5wQ8zfxK8Ylw0WmHXoGfRkoBRx9Hsnl/6sgTjAVwpmNuSeZtBwlX4qB8Bh8lxjqBDIuFGJ4I1wxN0XRlAAslzqMKwQfyA7OkuivCXfv+i+3XmhcBFM2n4jdT+NyUmBnQJPV3F2sZfKvJhUlXzSosFR4VevVVcOkFnnjdiRWc0TeSYxj41sJGYMbZTeLI3GvyZ8/gAAudQ1+4oFX+enX5V49MczGCYVBuoC4kHjp7ZVxj+clBwPr9k+v05SsezQK3enxLs1Nt/N7c7AImVUysjGou4iOohHo83Zs9/MI/OWB+OyXzOBD93NbApGHXrv8CVRHp2bwH+xB55cfNrdqFD35HSMx4iVmtzYAmSCIV8kXsHoq3DIb93riTWbubnjxbBW5zConVtbxLRStXHkIyAByaozME952Gc9aAdAbBpZSVCH88Uwb/4bPTVOVl+WoMYD7JIvK8VcMrJ8zHV4bbG0Dg7Kx17A4ej/ZcZ2Z5pVuVLUH1E/AccUTKm81SE+LQ6STTUDscUk0x2OWIbEORhg69tdoTGNkA1RfkGIRZHr5mCXOpLC55WWzCZoGPFUVtZRHwh0nq039CDdjEPo+JyaxSQAvDgR6Iqvxy0frrtEG1A385N81l05SSzN+IDm9bypF9m92EUqblnauZ5sjc37wRykOdl7w4o8WMgQsjii3EE/aJYDfHs1cH6DNBEujjcCc8qAefYFyIAURDcDnzun5UmkbBQsU4eu/W8I9nBE0qJKTdg2hwjq0+XV7a3TJ7R+alvJZCRia9lJ+grNB9dbrOmWEvUotMjvDhq4wV/kq4fvIBkzUGpDeYH74rne8uU3dgoNZdR9pUL6q9YDNRfOiF6Dyk+SYXQIghTjm9qR4tBHh0gnmF/9q3Qv22EzaLhSvDlDOxMrrCNRmLCl1jApzLrBCPn2mjn5zqK7OYK7VxOfQ5GfBfoPdyQwqFEgCVHkJ9oTnagRM3R0+rsuN5jQv9icCav/p1WqiEXSzCdLd/WEA6z6dDP7tPqPbeDYKAkVcz1lLGbFOC9b7cBd3MV0Ve8dZ89oR7OnxGS7uVpSry8banVZwpJg+nkH1jRBYa2BvBMY2xITH9ERXCjHzdZxs+ipdXP2DY7X+eWiBhtT2L0RRGTLPeazn5tpl4tu8iE2rWig731iuJDRbCHHy+g/Mb9+miAyVqfIpXT/iZeOxOxODO0hEpLM78I1+G2Z45yi3lS1K3m4WMQ559Lp4UML5vZUjYGJuxl+OPpUH5klpyBujkjprhei0TmUik10gjvNUp8mDkWlNKikmYspaVTqewbnOzJrmz8FLIpsT67EJLHIIfeDcWEfiP+DJrZ1jfxpoAb2abeMqLx+9RuZGzQoYtYVGgAWwEM9Kek2vPIeBNAKD6ao7nw6sgvfeLZPoXkbYO/tStHJdKzk+WFSFEU2NcALJAEP6S8pcnqqBBt57dwTrzQNCIdk2SocK4dLRbD/pu/VryKnm65ZYXiJCfHJk3mx9MRSl+nSK6OqEBSoGjz0/LADddwF/HqcfK3K3O+6YUGQcmj8pZL4PhZ6KrGkb8B38FmDvvLd3XQXbvS/FQmrXFTvJNkaN/FGo83KuS43BK1UfVnIqigGkCoP5fBda2MwAGTGNKX9K9t4Bx83pMFc5KSORmWKv+8VoVggWxoaBz3/9IBh6RwLd1tebwy89xvE5z6EEpXpDfrXWfRsMs6+ekUHH6idVosno55+xQ8Zqzelh0bxtJTgCcH3Z3/Cxlx9eNIS4JIFKOAVrDqbrXRszmY55a5+niJGHtkO3b6mnIDxLa1WXc7BAe33mt2KyM4Fbc3R6/WVTQN8QhlqAtave2WsQTqzWeSlKuGUVIJRqtObpv294rS0kDN1RKzdstZTXJebR2HlzsQ4P3NbMHUqFZMZw+/IKXnh4t+lY8qocp/B1oMszR03EFs3bPeND8QkItMvllObeCz3SZAjqZrobmLcrpFyQV7mwBjg3C3C8/bc5goQhv8j/IXMLGnt4mF7tybRDG5G0polxoUScQkPvmnga2/K+aapKeqSL0BTmo1Cm5g+booNOtdyKva2KoefRURaBk7113QKo3y+WTuFKtgETIK8HRluYS9DvlcciCDvnG8UaJRfZE2siZsiTHvRmN80xkUIInHeRZl5Re/+ATL6VhKFi8CZ/n/jbFV6T5pZ+Uoppvsi3qjacVFOJgWWfdlwVHKPW/TJO3na9hRM9bS2yo2rEsC6IBzRReVO6IesJU7PItzOamr+ROFfwGZmZ7ue8HNxAgLJKb7P3p8dMqk6Be5PJaT/5Rdc1deYVihWH9cjVKc9uz5EnfHqxLUkOO8iJUENBNVf5LyNy8zjLu/78k5WNTywiPfYeX3CPk7yc6CI3lum/CEZwfUaNpcI3KsPqfn2lmz3kd/acQjKA1ebkJaiuLD+epQ/Fc1llHXXMzofWzz/Kd29SNmOhcjMWw1jq1g3YfrXZ9rzXDYW4ZttfgfMi6oCUtBs0PkMVuxmq5lxEoCaSXPSqCJJ7MlKdRDidVt0AFlxk5cTdX++sBF2+E35mjwfm8ERVxH0FvuAQtsfA4V2G0TKTUxeyRGVjd/u6F1SvuAiU2/WaQjcNCU4Ep7VunXCYSbZj3U3wzu/LWM5MPlYuyQ3FOOCD/zt7K295hY2JhwF+ODDIZ676vGQFKveEQYkWj7lkK7rVmD7MhU0Y/tF8EcTTpo4/yqOufbd/zWIpMajnbDuWK2vn6OPPtz2rc9MIBNlPd8tt+yf+7SC4wqEPbozKMCwY5Bygx4JmoIEDsixWRDcdHd6S3/dZMHXOJAAv7+NIstl00crgSqHZKAEe4g3G4dzIV51EeZB01r7p8GNlfUnG/GjZgNGsqXZdYMBVtAtFNv3hJWPve4GvqZ2XxuiNkHTz5kxWgr0PjQdJlVywJ9Zf2ZvqeeTbolKtvK54re2Lq5BoyzfsRtvDfyao3kmyFzDQ88nM+qx83w74RDlkngtYiArI05Epre3GgBeSlMig0pE6RGQaFznKkGeb0SozLCyiOtxh7hgwZlbKbClzUUfC8ntMiHUOZE375RhTy9c4DA+oMLkUDkztSybZbdmP1xpaIbjUpPAHBq3cIq+CBFzbMlMMCCkUQ6d9LGV6GYCsYiEWZIy3nBnuxOYXeU4YTGDSin9e4/pCjPtQSHlg5LMEvIlF0ElthqrF129iK2RPBEWd3XWOl3SWV5uz5VUyZYp5kEFmz7QfP/B1W1BBzQ2iTGbSVT79lUHzcGXz3PJceSgz4uknETUwo0xffpr2KUvZF0i/r2sL3IFIClYx8CbIZE6Qt7MDJbOPB3xMScwaOcWG66IJfCnDkb0D2Mb+PHzX+oiCbxeTIogtyN+s2NJirNACk/OACSOTtV6vscwbzW4M168xqaI+RzR47S1nlV/rOoZnid87n/Ima2XYa3un3BuGAisNjb8eLMT9OnMtazQROFCuO1HiZXaOc0oUDbNC4eKLToOx8DzVhMgGA8XIAQ2x3b6I0uEyLssQjJX3QphcUMx4KsMgJ+72km4N2aqkBF2coKmUEt1eqIMGn+5txMT4kYVGd3ALO+y9Z4PP3d3l48JQK8s9ZZ/Qx/+NBKgBEJFlQ32psoJiihGO7FSYM5L81q72kaAYcilEFMG+ZK1BcMqELkflyCV7v8JEXLO4Rf/oZYNZHZVjJhfL6fnpP9Tio3Euue5uS7FMkfGOeRCTrBZ06Caev7tgufeTrX34Ur/Vvc+b8ksiIShNJtuF9WmYxOZ4xg8y6zTdy3KAB2y5kYkcRnXsptWwAFyKZ2I/QGySNeoQLkINUMloC+5L3WuMMx297Q1xUYLKqZ9XHavaobo6QQv4auMm+i84IhxRpPt9nUmcav9NcjCcP+TcMmxsQZ/F3mgeoA0fQgwvTsyXuuTaM3Sqtv2jaaajmaFQpK9W6uIbeqwvSDo34ZrY6elDUHwSCjHRRmlwmyy+eOra64Ssq0XSXYljMHtKY+FShcMkHsEUY/4Bw63dJ6KpwDaxmthlDdbdE+TvYF3v33cGSKqO+1H1pKYhJMvZD5ckQcHyNF8zrtiR5b0ko6NPGoRexUZTYP6VbUdn3zzxGBOi8Z0OqHjGqYxRXwN3mYi0GYEEZYq+Q3QvdKcEHILLLj8S+VFepSfErtmfZCdvxbfIifFSpEzKi+7VJsLMT+zEFeyp1OdwRC1VZrfTLIyR7xTPUcZFYPD9qI7D70uTb4hdpqPXsJIRNYbZtNwch1OI3trh3u2ScoQyM9POnInsUa+OovcwkUP1UfIzPb95n4BaF2ev57NHAej0+BVMF9/Cj9663HN2/JN3SQgslL914bKfiTTDFAz9PlQEL/dSv1H8xl3mtWxh1McFO9EJXlRDaKQDsyKO4vOJW90NFE6yw2tjbc2GeF95sbs0I9enAa6QwQVf/kJQhAD2BzUDKggOyjy1TEhED6sfk+418lQy3c/uj8aw8UEzZ6hIMCd8RohAkumMtIj9m73l2yPWoGHVTPaywkC7Yj9tBM1NxMgcrDwRtk4RO2WHT7Ql5kQCKdJj6kNuOTeyEBYBjLMhGz+O5/YGa84HEiTYEpZ6fFzy26GG2hWtTyteuYrhSyG56BjsT/wQeLRytpTY3D7sIMqZnJ9z1FDrfyjFlGl2TNw9BQysbaxOuwYYZs/7I6BANgkqCknWZC7/BBXvaeKwAmC959I+G39BUE9bExkNlbRoFRyEtNzv+NJ91FuisG3JCS6uYBeRnfv8AkAfKTeg9EYamqnsGfAV7d0f9DghHEQ5IsPGDIUhgoSj7obM4Bu5uhQ3/CYEDTHc92AsFvDK4XGrwUeGBWBHPlS+f4x+CxmmHz2sAGmSFNt65kwZC64mnaoWlu2310laYn8r62AqsR5dfjyK18MEdurdagldzfJtjFXlZs7St4QhdPiye6TPh2/ZAQLU/Fip5s7TDEM16KtRWrK9hmxnQ7bmfa/+7pa10Z8WDPK3NuJ+NN/RAbQ5vHx2uX0Lm7/w7cAEH/hvZA+mt7J7zGw7YtQYwnNN6dpgwkGjjrS3yQoeoYt1EnczmtmJfQZWzUlP3Hlg9Wzlr9IH23q3thGth+QNEANFettxKfskkGOlLk8AqoKJwDqOxAa6UzAx07plSSyNBJSGco9zjnC5gGbDoKvsMDuBR6bGRlGzJ+hFsGa/Izt78aI+WZ6dJlZKp4pGISuv9rV0sAS0MWEwCmfauO7oQZMiakHU35LBxiyJoOMddhUWgcZuC8r4Ksvn75TTcQXLJ7kWtYhGuGqPd9dZuFjBWQHNwosXY5snbHFQq72CvHXhIg+shQxycuLOuWYErwCLZeF24b7F78pO7xw4X6lIAR02hUOf5087Rl0nOaeb6CK4i/KA/EZv76ftOWZtjwxslNr0E/u8rWUmnf3amfg6UZmBAluuoj3Dd7UV+9IAJ6iYcDfSJlgmIImohjfIUMJ27z+opj50Ak9af2LCNrWrBJvMovA1OeNO+MF/MwZvnaCxTgG7Cw4QfSPF6AYCGFt21M8PySZFeV3t2Rqqs5JMzMYzGRgq4o+UaKRgBf9GHi/9X9HXA3wxkCsd/UhnHSh2zUVDiraio/6nP4y3XJqs8ABfALAtCYU7DHPMPRjgcM6Ad/HiSXDAbOdSMkvGZPAkHs8wuQTy6X2Ov/JFvcPuKfV3/r9Q28",
          ),
          n = () => h4(r),
          i = () => new Set(n()),
          s = (e, t) => t.forEach((t) => e.add(t));
        ((c = new Map(h9(r))),
          (l = i()),
          (d = n()),
          (h = new Set(n().map((e) => d[e]))),
          (d = new Set(d)),
          (f = i()),
          (p = i()));
        let a = h8(r),
          o = r(),
          u = () => {
            let e = new Set();
            return (n().forEach((t) => s(e, a[t])), s(e, n()), e);
          };
        ((m = h7((e) => {
          let t = h7(r).map((e) => e + 96);
          if (t.length) {
            let n = e >= o;
            ((t[0] -= 32), (t = fr(t)), n && (t = `Restricted[${t}]`));
            let i = u();
            return { N: t, P: i, Q: u(), M: !r(), R: n };
          }
        })),
          (g = i()),
          (y = new Map()));
        let w = n()
          .concat(fd(g))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (w.forEach((e, t) => {
          let n = r(),
            i = (w[t] = n ? w[t - n] : { V: [], M: new Map() });
          (i.V.push(e), g.has(e) || y.set(e, i));
        }),
        new Set(y.values()))) {
          let r = [];
          for (let t of e) {
            let e = m.filter((e) => fh(e, t)),
              n = r.find(({ G: t }) => e.some((e) => t.has(e)));
            (n || ((n = { G: new Set(), V: [] }), r.push(n)),
              n.V.push(t),
              s(n.G, e));
          }
          let n = r.flatMap((e) => fd(e.G));
          for (let { G: e, V: i } of r) {
            let r = new Set(n.filter((t) => !e.has(t)));
            for (let e of i) t.set(e, r);
          }
        }
        v = new Set();
        let x = new Set(),
          E = (e) => (v.has(e) ? x.add(e) : v.add(e));
        for (let e of m) {
          for (let t of e.P) E(t);
          for (let t of e.Q) E(t);
        }
        for (let e of v) y.has(e) || x.has(e) || y.set(e, 1);
        for (let n of (s(v, fu(v).map(fa)),
        (b = ((e = []),
        (t = h4(r)),
        (function t({ S: r, B: n }, i, s) {
          if (!(4 & r) || s !== i[i.length - 1])
            for (let a of (2 & r && (s = i[i.length - 1]),
            1 & r && e.push(i),
            n))
              for (let e of a.Q) t(a, [...i, e], s);
        })(
          (function e(n) {
            return {
              S: r(),
              B: h7(() => {
                let n = h4(r).map((e) => t[e]);
                if (n.length) return e(n);
              }),
              Q: n,
            };
          })([]),
          [],
        ),
        e)
          .map((e) => ff.from(e))
          .sort(fn)),
        (A = new Map()),
        b)) {
          let e = [A];
          for (let t of n) {
            let r = e.map((e) => {
              let r = e.get(t);
              return (r || ((r = new Map()), e.set(t, r)), r);
            });
            65039 === t ? e.push(...r) : (e = r);
          }
          for (let t of e) t.V = n;
        }
      }
      function fm(e) {
        return (fv(e) ? "" : `${fg(fy([e]))} `) + ft(e);
      }
      function fg(e) {
        return `"${e}"\u200E`;
      }
      function fy(e, t = 1 / 0, r = ft) {
        var n, i;
        let s = [];
        ((n = e[0]),
          fp(),
          d.has(n) && s.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)])));
        let a = 0,
          o = e.length;
        for (let t = 0; t < o; t++) {
          let n = e[t];
          fv(n) && (s.push(fr(e.slice(a, t))), s.push(r(n)), (a = t + 1));
        }
        return (s.push(fr(e.slice(a, o))), s.join(""));
      }
      function fv(e) {
        return (fp(), f.has(e));
      }
      function fb(e) {
        return Error(`disallowed character: ${fm(e)}`);
      }
      function fA(e, t) {
        let r = fm(t),
          n = m.find((e) => e.P.has(t));
        return (
          n && (r = `${n.N} ${r}`),
          Error(`illegal mixture: ${e.N} + ${r}`)
        );
      }
      function fw(e) {
        return Error(`illegal placement: ${e}`);
      }
      function fx(e) {
        return e.filter((e) => 65039 != e);
      }
      let fE = "valid",
        fk = (e) =>
          (function (e) {
            return e
              .map(({ input: t, error: r, output: n }) => {
                if (r) {
                  let n = r.message;
                  throw Error(
                    1 == e.length ? n : `Invalid label ${fg(fy(t, 63))}: ${n}`,
                  );
                }
                return fr(n);
              })
              .join(".");
          })(
            (function (e, t, r) {
              if (!e) return [];
              fp();
              let n = 0;
              return e.split(".").map((e) => {
                let i = (function (e) {
                    let t = [];
                    for (let r = 0, n = e.length; r < n; ) {
                      let n = e.codePointAt(r);
                      ((r += n < 65536 ? 1 : 2), t.push(n));
                    }
                    return t;
                  })(e),
                  s = { input: i, offset: n };
                n += i.length + 1;
                try {
                  let e,
                    n = (s.tokens = (function (e, t, r) {
                      let n = [],
                        i = [];
                      for (e = e.slice().reverse(); e.length; ) {
                        let s = (function (e, t) {
                          let r,
                            n = A,
                            i = e.length;
                          for (; i && (n = n.get(e[--i])); ) {
                            let { V: s } = n;
                            s &&
                              ((r = s),
                              t && t.push(...e.slice(i).reverse()),
                              (e.length = i));
                          }
                          return r;
                        })(e);
                        if (s)
                          (i.length && (n.push(t(i)), (i = [])), n.push(r(s)));
                        else {
                          let t = e.pop();
                          if (v.has(t)) i.push(t);
                          else {
                            let e = c.get(t);
                            if (e) i.push(...e);
                            else if (!l.has(t)) throw fb(t);
                          }
                        }
                      }
                      return (i.length && n.push(t(i)), n);
                    })(i, t, r)),
                    a = n.length;
                  if (!a) throw Error("empty label");
                  let o = (s.output = n.flat());
                  for (let e = o.lastIndexOf(95); e > 0; )
                    if (95 !== o[--e])
                      throw Error("underscore allowed only at start");
                  if (
                    !(s.emoji = a > 1 || n[0].is_emoji) &&
                    o.every((e) => e < 128)
                  ) {
                    if (o.length >= 4 && 45 == o[2] && 45 == o[3])
                      throw Error(
                        `invalid label extension: "${fr(o.slice(0, 4))}"`,
                      );
                    e = "ASCII";
                  } else {
                    let t = n.flatMap((e) => (e.is_emoji ? [] : e));
                    if (t.length) {
                      if (d.has(o[0])) throw fw("leading combining mark");
                      for (let e = 1; e < a; e++) {
                        let t = n[e];
                        if (!t.is_emoji && d.has(t[0]))
                          throw fw(
                            `emoji + combining mark: "${fr(n[e - 1])} + ${fy([t[0]])}"`,
                          );
                      }
                      !(function (e) {
                        let t = e[0],
                          r = h6.get(t);
                        if (r) throw fw(`leading ${r}`);
                        let n = e.length,
                          i = -1;
                        for (let s = 1; s < n; s++) {
                          t = e[s];
                          let n = h6.get(t);
                          if (n) {
                            if (i == s) throw fw(`${r} + ${n}`);
                            ((i = s + 1), (r = n));
                          }
                        }
                        if (i == n) throw fw(`trailing ${r}`);
                      })(o);
                      let r = fd(new Set(t)),
                        [i] = (function (e) {
                          let t = m;
                          for (let r of e) {
                            let e = t.filter((e) => fh(e, r));
                            if (!e.length)
                              if (m.some((e) => fh(e, r))) throw fA(t[0], r);
                              else throw fb(r);
                            if (((t = e), 1 == e.length)) break;
                          }
                          return t;
                        })(r);
                      ((function (e, t) {
                        for (let r of t) if (!fh(e, r)) throw fA(e, r);
                        if (e.M) {
                          var r;
                          let e = ((r = t), fu(r).map(fa));
                          for (let t = 1, r = e.length; t < r; t++)
                            if (h.has(e[t])) {
                              let n = t + 1;
                              for (let i; n < r && h.has((i = e[n])); n++)
                                for (let r = t; r < n; r++)
                                  if (e[r] == i)
                                    throw Error(
                                      `duplicate non-spacing marks: ${fm(i)}`,
                                    );
                              if (n - t > 4)
                                throw Error(
                                  `excessive non-spacing marks: ${fg(fy(e.slice(t - 1, n)))} (${n - t}/4)`,
                                );
                              t = n;
                            }
                        }
                      })(i, t),
                        (function (e, t) {
                          let r,
                            n = [];
                          for (let e of t) {
                            let t = y.get(e);
                            if (1 === t) return;
                            if (t) {
                              let n = t.M.get(e);
                              if (
                                !(r = r ? r.filter((e) => n.has(e)) : fd(n))
                                  .length
                              )
                                return;
                            } else n.push(e);
                          }
                          if (r) {
                            for (let t of r)
                              if (n.every((e) => fh(t, e)))
                                throw Error(
                                  `whole-script confusable: ${e.N}/${t.N}`,
                                );
                          }
                        })(i, r),
                        (e = i.N));
                    } else e = "Emoji";
                  }
                  s.type = e;
                } catch (e) {
                  s.error = e;
                }
                return s;
              });
            })(e, fl, fx),
          ),
        fI = (e) => {
          let t = "";
          for (let e = 0; e < 32; e += 1) t += "00";
          if (e) {
            let r = fk(e).split(".");
            for (let e = r.length - 1; e >= 0; e -= 1) {
              let n = ak(r[e]).slice(2);
              t = ak(`0x${t}${n}`).slice(2);
            }
          }
          return `0x${t}`;
        };
      var f_ = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class fS {
        constructor(e, t) {
          ((this.contract = new hW(h2, null != t ? t : h0.main, e)),
            (this.context = e));
        }
        getOwner(e) {
          return f_(this, void 0, void 0, function* () {
            try {
              return this.contract.methods.owner(fI(e)).call();
            } catch (e) {
              throw Error();
            }
          });
        }
        getTTL(e) {
          return f_(this, void 0, void 0, function* () {
            try {
              return this.contract.methods.ttl(fI(e)).call();
            } catch (e) {
              throw Error();
            }
          });
        }
        recordExists(e) {
          return f_(this, void 0, void 0, function* () {
            try {
              return this.contract.methods.recordExists(fI(e)).call();
            } catch (e) {
              throw Error();
            }
          });
        }
        getResolver(e) {
          return f_(this, void 0, void 0, function* () {
            try {
              return this.contract.methods
                .resolver(fI(e))
                .call()
                .then((e) => {
                  if ("string" == typeof e) return new hW(h3, e, this.context);
                  throw Error();
                });
            } catch (e) {
              throw Error();
            }
          });
        }
        get events() {
          return this.contract.events;
        }
      }
      var fT = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class fP {
        constructor(e) {
          this.registry = e;
        }
        getResolverContractAdapter(e) {
          return fT(this, void 0, void 0, function* () {
            return this.registry.getResolver(e);
          });
        }
        checkInterfaceSupport(e, t) {
          var r, n;
          return fT(this, void 0, void 0, function* () {
            if (as(hY[t]))
              throw new eA(null != (r = e.options.address) ? r : "", t);
            if (!(yield e.methods.supportsInterface(hY[t]).call()))
              throw new eA(null != (n = e.options.address) ? n : "", t);
          });
        }
        supportsInterface(e, t) {
          var r;
          return fT(this, void 0, void 0, function* () {
            let n = yield this.getResolverContractAdapter(e),
              i = t;
            if (!iU(i)) {
              if (((i = null != (r = aE(t)) ? r : ""), "" === t))
                throw Error("Invalid interface Id");
              i = i.slice(0, 10);
            }
            return n.methods.supportsInterface(i).call();
          });
        }
        getAddress(e, t = 60) {
          return fT(this, void 0, void 0, function* () {
            let r = yield this.getResolverContractAdapter(e);
            return (
              yield this.checkInterfaceSupport(r, hX.addr),
              r.methods.addr(fI(e), t).call()
            );
          });
        }
        getPubkey(e) {
          return fT(this, void 0, void 0, function* () {
            let t = yield this.getResolverContractAdapter(e);
            return (
              yield this.checkInterfaceSupport(t, hX.pubkey),
              t.methods.pubkey(fI(e)).call()
            );
          });
        }
        getContenthash(e) {
          return fT(this, void 0, void 0, function* () {
            let t = yield this.getResolverContractAdapter(e);
            return (
              yield this.checkInterfaceSupport(t, hX.contenthash),
              t.methods.contenthash(fI(e)).call()
            );
          });
        }
        setAddress(e, t, r) {
          return fT(this, void 0, void 0, function* () {
            let n = yield this.getResolverContractAdapter(e);
            return (
              yield this.checkInterfaceSupport(n, hX.setAddr),
              n.methods.setAddr(fI(e), t).send(r)
            );
          });
        }
        getText(e, t) {
          return fT(this, void 0, void 0, function* () {
            let r = yield this.getResolverContractAdapter(e);
            return (
              yield this.checkInterfaceSupport(r, hX.text),
              r.methods.text(fI(e), t).call()
            );
          });
        }
        getName(e, t = !0) {
          return fT(this, void 0, void 0, function* () {
            let r = `${e.toLowerCase().substring(2)}.addr.reverse`,
              n = yield this.getResolverContractAdapter(r);
            return (
              t && (yield this.checkInterfaceSupport(n, hX.name)),
              n.methods.name(fI(r)).call()
            );
          });
        }
      }
      var fC = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class fB extends cH {
        constructor(e, t) {
          (super(null != t ? t : ""),
            (this.registryAddress = null != e ? e : h0.main),
            (this._registry = new fS(this.getContextObject(), e)),
            (this._resolver = new fP(this._registry)));
        }
        getResolver(e) {
          return fC(this, void 0, void 0, function* () {
            return this._registry.getResolver(e);
          });
        }
        recordExists(e) {
          return fC(this, void 0, void 0, function* () {
            return this._registry.recordExists(e);
          });
        }
        getTTL(e) {
          return fC(this, void 0, void 0, function* () {
            return this._registry.getTTL(e);
          });
        }
        getOwner(e) {
          return fC(this, void 0, void 0, function* () {
            return this._registry.getOwner(e);
          });
        }
        getAddress(e, t = 60) {
          return fC(this, void 0, void 0, function* () {
            return this._resolver.getAddress(e, t);
          });
        }
        getText(e, t) {
          return fC(this, void 0, void 0, function* () {
            return sr(e)
              ? this._resolver.getText(yield this._resolver.getName(e, !1), t)
              : this._resolver.getText(e, t);
          });
        }
        getName(e, t = !0) {
          return fC(this, void 0, void 0, function* () {
            return this._resolver.getName(e, t);
          });
        }
        getPubkey(e) {
          return fC(this, void 0, void 0, function* () {
            return this._resolver.getPubkey(e);
          });
        }
        getContenthash(e) {
          return fC(this, void 0, void 0, function* () {
            return this._resolver.getContenthash(e);
          });
        }
        checkNetwork() {
          return fC(this, void 0, void 0, function* () {
            let e = Date.now() / 1e3;
            if (!this._lastSyncCheck || e - this._lastSyncCheck > 3600) {
              let t = yield d7(this);
              if (!("boolean" == typeof t && !t)) throw new eI();
              this._lastSyncCheck = e;
            }
            if (this._detectedAddress) return this._detectedAddress;
            let t = yield lb(
                this,
                Object.assign(Object.assign({}, this.defaultReturnFormat), {
                  number: w.HEX,
                }),
              ),
              r = h0[h1[t]];
            if (void 0 === r) throw new ek(t);
            return ((this._detectedAddress = r), this._detectedAddress);
          });
        }
        supportsInterface(e, t) {
          return fC(this, void 0, void 0, function* () {
            return this._resolver.supportsInterface(e, t);
          });
        }
        get events() {
          return this._registry.events;
        }
        setAddress(e, t, r) {
          return fC(this, void 0, void 0, function* () {
            return this._resolver.setAddress(e, t, r);
          });
        }
      }
      var fO = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let fN = (e) =>
          fO(void 0, void 0, void 0, function* () {
            return (yield cW(e)).map(sY);
          }),
        fR = (e, t) =>
          fO(void 0, void 0, void 0, function* () {
            return (sw.validate(["string"], [t]), sY(yield c$(e, t)));
          }),
        fM = (e, t, r, n) =>
          fO(void 0, void 0, void 0, function* () {
            return (
              sw.validate(["address", "string", "uint"], [t, r, n]),
              cY(e, t, r, n)
            );
          }),
        fF = (e, t) =>
          fO(void 0, void 0, void 0, function* () {
            return (sw.validate(["address"], [t]), cX(e, t));
          }),
        fL = (e, t, r) =>
          fO(void 0, void 0, void 0, function* () {
            return (sw.validate(["string", "string"], [t, r]), c0(e, t, r));
          }),
        fD = (e, t, r, n) =>
          fO(void 0, void 0, void 0, function* () {
            return c1(
              e,
              ly(t, W, {
                transactionSchema:
                  null == n ? void 0 : n.customTransactionSchema,
              }),
              r,
            );
          }),
        fj = (e, t, r, n) =>
          fO(void 0, void 0, void 0, function* () {
            return c2(
              e,
              ly(t, W, {
                transactionSchema:
                  null == n ? void 0 : n.customTransactionSchema,
              }),
              r,
            );
          }),
        fH = (e, t, r, n) =>
          fO(void 0, void 0, void 0, function* () {
            return (
              sw.validate(["string", "address", "string"], [t, r, n]),
              c3(e, iU(t) ? t : sF(t), r, n)
            );
          }),
        fG = (e, t, r) =>
          fO(void 0, void 0, void 0, function* () {
            return (
              sw.validate(["string", "string"], [t, r]),
              c6(e, iU(t) ? t : sF(t), r)
            );
          });
      var fU = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      class fq extends cH {
        getAccounts() {
          return fU(this, void 0, void 0, function* () {
            return fN(this.requestManager);
          });
        }
        newAccount(e) {
          return fU(this, void 0, void 0, function* () {
            return fR(this.requestManager, e);
          });
        }
        unlockAccount(e, t, r) {
          return fU(this, void 0, void 0, function* () {
            return fM(this.requestManager, e, t, r);
          });
        }
        lockAccount(e) {
          return fU(this, void 0, void 0, function* () {
            return fF(this.requestManager, e);
          });
        }
        importRawKey(e, t) {
          return fU(this, void 0, void 0, function* () {
            return fL(this.requestManager, e, t);
          });
        }
        sendTransaction(e, t) {
          return fU(this, void 0, void 0, function* () {
            return fD(this.requestManager, e, t, this.config);
          });
        }
        signTransaction(e, t) {
          return fU(this, void 0, void 0, function* () {
            return fj(this.requestManager, e, t, this.config);
          });
        }
        sign(e, t, r) {
          return fU(this, void 0, void 0, function* () {
            return fH(this.requestManager, e, t, r);
          });
        }
        ecRecover(e, t) {
          return fU(this, void 0, void 0, function* () {
            return fG(this.requestManager, e, t);
          });
        }
      }
      (!(function (e) {
        ((e.HTTPS = "https"), (e.WebSocket = "wss"));
      })(H || (H = {})),
        (function (e) {
          ((e.ETH_MAINNET = "eth_mainnet"),
            (e.ETH_SEPOLIA = "eth_sepolia"),
            (e.ETH_HOLESKY = "eth_holesky"),
            (e.POLYGON_MAINNET = "polygon_mainnet"),
            (e.POLYGON_AMOY = "polygon_amoy"),
            (e.AVALANCHE_C_MAINNET = "avalanche_c_mainnet"),
            (e.AVALANCHE_P_MAINNET = "avalanche_p_mainnet"),
            (e.AVALANCHE_X_MAINNET = "avalanche_x_mainnet"),
            (e.ARBITRUM_MAINNET = "arbitrum_mainnet"),
            (e.ARBITRUM_SEPOLIA = "arbitrum_sepolia"),
            (e.BASE_MAINNET = "base_mainnet"),
            (e.BASE_SEPOLIA = "base_sepolia"),
            (e.OPTIMISM_MAINNET = "optimism_mainnet"),
            (e.OPTIMISM_SEPOLIA = "optimism_sepolia"),
            (e.FANTOM_MAINNET = "fantom_mainnet"),
            (e.FANTOM_TESTNET = "fantom_testnet"),
            (e.DYMENSION_MAINNET = "dymension_mainnet"),
            (e.DYMENSION_TESTNET = "dymension_testnet"),
            (e.BNB_MAINNET = "bnb_mainnet"),
            (e.BNB_TESTNET = "bnb_testnet"),
            (e.BSC_MAINNET = "bsc_mainnet"),
            (e.BSC_TESTNET = "bsc_testnet"),
            (e.ARBITRUM_ONE = "arbitrum_one"),
            (e.ARBITRUM_NOVA = "arbitrum_nova"),
            (e.AVALANCHE_FUJI_C = "avalanche_fuji_c"),
            (e.AVALANCHE_FUJI_P = "avalanche_fuji_p"),
            (e.AVALANCHE_FUJI_X = "avalanche_fuji_x"),
            (e.BLAST_MAINNET = "blast_mainnet"),
            (e.OPBNB_MAINNET = "opbnb_mainnet"),
            (e.OPBNB_TESTNET = "opbnb_testnet"),
            (e.GNOSIS_MAINNET = "gnosis_mainnet"),
            (e.GNOSIS_CHIADO = "gnosis_chiado"),
            (e.PULSECHAIN_MAINNET = "pulsechain_mainnet"),
            (e.PULSECHAIN_TESTNET = "pulsechain_testnet"),
            (e.KAVA_MAINNET = "kava_mainnet"),
            (e.CRONOS_MAINNET = "cronos_mainnet"),
            (e.MANTLE_MAINNET = "mantle_mainnet"),
            (e.CHILIZ_MAINNET = "chiliz_mainnet"),
            (e.CHILIZ_SPICY = "chiliz_spicy"),
            (e.MOONBEAM_MAINNET = "moonbeam_mainnet"),
            (e.TAIKO_MAINNET = "taiko_mainnet"),
            (e.TAIKO_HEKLA = "taiko_hekla"),
            (e.LINEA_MAINNET = "linea_mainnet"),
            (e.LINEA_SEPOLIA = "linea_sepolia"),
            (e.BAHAMUT_MAINNET = "bahamut_mainnet"),
            (e.SCROLL_MAINNET = "scroll_mainnet"),
            (e.SCROLL_SEPOLIA = "scroll_sepolia"),
            (e.TRON_MAINNET = "tron_mainnet"),
            (e.SYSCOIN_MAINNET = "syscoin_mainnet"),
            (e.SYSCOIN_TANENBAUM = "syscoin_tanenbaum"),
            (e.MOONRIVER_MAINNET = "moonriver_mainnet"),
            (e.HAQQ_MAINNET = "haqq_mainnet"),
            (e.EVMOS_MAINNET = "evmos_mainnet"),
            (e.EVMOS_TESTNET = "evmos_testnet"),
            (e.BERACHAIN_TESTNET = "berachain_testnet"));
        })(G || (G = {})));
      class fQ extends er {
        constructor(e) {
          (super(
            "You've reach the rate limit of free RPC calls from our Partner Quick Nodes. There are two options you can either create a paid Quick Nodes account and get 20% off for 2 months using WEB3JS referral code, or use Free public RPC endpoint.",
            e,
          ),
            (this.code = 1300));
        }
      }
      class fZ extends er {
        constructor(e) {
          (super(`Invalid provider config options given for ${e}`),
            (this.code = 1301));
        }
      }
      class fz extends a8 {
        constructor(e, t, r, n, i) {
          if (
            (super(), void 0 === i || t !== H.HTTPS || "providerOptions" in i)
          ) {
            if (
              void 0 !== i &&
              t === H.WebSocket &&
              !("socketOptions" in i || "reconnectOptions" in i)
            )
              throw new fZ("Websocket Provider");
          } else throw new fZ("HTTP Provider");
          ((this.transport = t),
            t === H.HTTPS
              ? (this.provider = new oi(this.getRPCURL(e, t, r, n), i))
              : t === H.WebSocket &&
                (this.provider = new oo(
                  this.getRPCURL(e, t, r, n),
                  null == i ? void 0 : i.socketOptions,
                  null == i ? void 0 : i.reconnectOptions,
                )));
        }
        request(e, t) {
          var r, n, i, s;
          return (
            (r = this),
            (n = void 0),
            (i = void 0),
            (s = function* () {
              return this.transport === H.HTTPS
                ? yield this.provider.request(e, t)
                : this.provider.request(e);
            }),
            new (i || (i = Promise))(function (e, t) {
              function a(e) {
                try {
                  u(s.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(e) {
                try {
                  u(s.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function u(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof i
                      ? r
                      : new i(function (e) {
                          e(r);
                        })
                    ).then(a, o);
              }
              u((s = s.apply(r, n || [])).next());
            })
          );
        }
        getStatus() {
          return this.provider.getStatus();
        }
        supportsSubscriptions() {
          return this.provider.supportsSubscriptions();
        }
        once(e, t) {
          var r;
          (null == (r = this.provider) ? void 0 : r.once) &&
            this.provider.once(e, t);
        }
        removeAllListeners(e) {
          var t;
          (null == (t = this.provider) ? void 0 : t.removeAllListeners) &&
            this.provider.removeAllListeners(e);
        }
        connect() {
          var e;
          (null == (e = this.provider) ? void 0 : e.connect) &&
            this.provider.connect();
        }
        disconnect(e, t) {
          var r;
          (null == (r = this.provider) ? void 0 : r.disconnect) &&
            this.provider.disconnect(e, t);
        }
        reset() {
          var e;
          (null == (e = this.provider) ? void 0 : e.reset) &&
            this.provider.reset();
        }
        on(e, t) {
          this.provider && this.provider.on(e, t);
        }
        removeListener(e, t) {
          this.provider && this.provider.removeListener(e, t);
        }
      }
      let fV = (e) => void 0 !== e && e.trim().length > 0;
      class fK extends fz {
        constructor(e = G.ETH_MAINNET, t = H.HTTPS, r = "", n = "", i) {
          super(e, t, r, n, i);
        }
        request(e, t) {
          var r, n, i, s;
          let a = Object.create(null, {
            request: { get: () => super.request },
          });
          return (
            (r = this),
            (n = void 0),
            (i = void 0),
            (s = function* () {
              try {
                return yield a.request.call(this, e, t);
              } catch (e) {
                if (e instanceof tS && 429 === e.statusCode) throw new fQ(e);
                throw e;
              }
            }),
            new (i || (i = Promise))(function (e, t) {
              function a(e) {
                try {
                  u(s.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(e) {
                try {
                  u(s.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function u(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof i
                      ? r
                      : new i(function (e) {
                          e(r);
                        })
                    ).then(a, o);
              }
              u((s = s.apply(r, n || [])).next());
            })
          );
        }
        getRPCURL(e, t, r, n) {
          let i = "",
            s = "";
          switch (e) {
            case G.ETH_MAINNET:
              ((i = fV(n) ? n : "powerful-holy-bush.quiknode.pro"),
                (s = fV(r) ? r : "3240624a343867035925ff7561eb60dfdba2a668"));
              break;
            case G.ETH_SEPOLIA:
              ((i = fV(n)
                ? n
                : "dimensional-fabled-glitter.ethereum-sepolia.quiknode.pro"),
                (s = fV(r) ? r : "382a3b5a4b938f2d6e8686c19af4b22921fde2cd"));
              break;
            case G.ETH_HOLESKY:
              ((i = fV(n)
                ? n
                : "yolo-morning-card.ethereum-holesky.quiknode.pro"),
                (s = fV(r) ? r : "481ebe70638c4dcf176af617a16d02ab866b9af9"));
              break;
            case G.ARBITRUM_MAINNET:
              ((i = fV(n)
                ? n
                : "autumn-divine-dinghy.arbitrum-mainnet.quiknode.pro"),
                (s = fV(r) ? r : "a5d7bfbf60b5ae9ce3628e53d69ef50d529e9a8c"));
              break;
            case G.ARBITRUM_SEPOLIA:
              ((i = fV(n)
                ? n
                : "few-patient-pond.arbitrum-sepolia.quiknode.pro"),
                (s = fV(r) ? r : "3be985450970628c860b959c65cd2642dcafe53c"));
              break;
            case G.BNB_MAINNET:
              ((i = fV(n) ? n : "purple-empty-reel.bsc.quiknode.pro"),
                (s = fV(r) ? r : "ebf6c532961e21f092ff2facce1ec4c89c540158"));
              break;
            case G.BNB_TESTNET:
              ((i = fV(n) ? n : "floral-rough-scion.bsc-testnet.quiknode.pro"),
                (s = fV(r) ? r : "5b297e5acff5f81f4c37ebf6f235f7299b6f9d28"));
              break;
            case G.POLYGON_MAINNET:
              ((i = fV(n) ? n : "small-chaotic-moon.matic.quiknode.pro"),
                (s = fV(r) ? r : "847569f8a017e84d985e10d0f44365d965a951f1"));
              break;
            case G.POLYGON_AMOY:
              ((i = fV(n) ? n : "prettiest-side-shape.matic-amoy.quiknode.pro"),
                (s = fV(r) ? r : "79a9476eea661d4f82de614db1d8a895b14b881c"));
              break;
            default:
              throw Error("Network info not avalible.");
          }
          return `${t}://${i}/${s}`;
        }
      }
      let fJ = (e) => void 0 !== e && e.trim().length > 0,
        fW = [
          G.DYMENSION_MAINNET,
          G.DYMENSION_TESTNET,
          G.KAVA_MAINNET,
          G.CRONOS_MAINNET,
          G.POLYGON_MAINNET,
        ];
      class f$ extends fz {
        constructor(e = G.ETH_MAINNET, t = H.HTTPS, r = "", n) {
          super(e, t, "", r, n);
        }
        getRPCURL(e, t, r, n) {
          if (!f$.networkHostMap[e]) throw Error("Network info not avalible.");
          let i = `${f$.networkHostMap[e]}.publicnode.com`,
            s = fJ(n) ? n : i;
          return fW.includes(e) && t === H.WebSocket
            ? `${t}://${s}/websocket`
            : `${t}://${s}`;
        }
      }
      f$.networkHostMap = {
        [G.POLYGON_AMOY]: "polygon-amoy-bor-rpc",
        [G.DYMENSION_MAINNET]: "dymension-evm-rpc",
        [G.DYMENSION_TESTNET]: "dymension-testnet-evm-rpc",
        [G.BLAST_MAINNET]: "blast-rpc",
        [G.GNOSIS_MAINNET]: "gnosis-rpc",
        [G.PULSECHAIN_MAINNET]: "pulsechain-rpc",
        [G.PULSECHAIN_TESTNET]: "pulsechain-testnet-rpc",
        [G.KAVA_MAINNET]: "kava-evm-rpc",
        [G.CRONOS_MAINNET]: "cronos-evm-rpc",
        [G.MANTLE_MAINNET]: "mantle-rpc",
        [G.TAIKO_MAINNET]: "taiko-rpc",
        [G.TAIKO_HEKLA]: "taiko-hekla-rpc",
        [G.LINEA_MAINNET]: "linea-rpc",
        [G.LINEA_SEPOLIA]: "linea-sepolia-rpc",
        [G.SCROLL_MAINNET]: "scroll-rpc",
        [G.SCROLL_SEPOLIA]: "scroll-sepolia-rpc",
        [G.SYSCOIN_MAINNET]: "syscoin-evm-rpc",
        [G.SYSCOIN_TANENBAUM]: "syscoin-tanenbaum-evm-rpc",
        [G.HAQQ_MAINNET]: "haqq-evm-rpc",
        [G.EVMOS_MAINNET]: "evmos-evm-rpc",
        [G.EVMOS_TESTNET]: "evmos-testnet-evm-rpc",
        [G.BERACHAIN_TESTNET]: "berachain-testnet-evm-rpc",
        [G.ETH_MAINNET]: "ethereum-rpc",
        [G.ETH_SEPOLIA]: "ethereum-sepolia-rpc",
        [G.ETH_HOLESKY]: "ethereum-holesky-rpc",
        [G.BSC_MAINNET]: "bsc-rpc",
        [G.BSC_TESTNET]: "bsc-testnet-rpc",
        [G.POLYGON_MAINNET]: "polygon-bor-rpc",
        [G.BASE_MAINNET]: "base-rpc",
        [G.BASE_SEPOLIA]: "base-sepolia-rpc",
        [G.ARBITRUM_ONE]: "arbitrum-one-rpc",
        [G.ARBITRUM_NOVA]: "arbitrum-nova-rpc",
        [G.ARBITRUM_SEPOLIA]: "arbitrum-sepolia-rpc",
        [G.AVALANCHE_C_MAINNET]: "avalanche-c-chain-rpc",
        [G.AVALANCHE_P_MAINNET]: "avalanche-p-chain-rpc",
        [G.AVALANCHE_X_MAINNET]: "avalanche-x-chain-rpc",
        [G.AVALANCHE_FUJI_C]: "avalanche-fuji-c-chain-rpc",
        [G.AVALANCHE_FUJI_P]: "avalanche-fuji-p-chain-rpc",
        [G.AVALANCHE_FUJI_X]: "avalanche-fuji-x-chain-rpc",
        [G.OPTIMISM_MAINNET]: "optimism-rpc",
        [G.OPTIMISM_SEPOLIA]: "optimism-sepolia-rpc",
        [G.FANTOM_MAINNET]: "fantom-rpc",
        [G.FANTOM_TESTNET]: "fantom-testnet-rpc",
        [G.OPBNB_MAINNET]: "opbnb-rpc",
        [G.OPBNB_TESTNET]: "opbnb-testnet-rpc",
        [G.GNOSIS_CHIADO]: "gnosis-chiado-rpc",
        [G.CHILIZ_MAINNET]: "chiliz-rpc",
        [G.CHILIZ_SPICY]: "chiliz-spicy-rpc",
        [G.MOONBEAM_MAINNET]: "moonbeam-rpc",
        [G.BAHAMUT_MAINNET]: "bahamut-rpc",
        [G.TRON_MAINNET]: "tron-evm-rpc",
        [G.MOONRIVER_MAINNET]: "moonriver-rpc",
      };
      let fY = new fK(),
        fX = {
          encodeEventSignature: lX,
          encodeFunctionCall: (e, t) => {
            var r;
            if (!lQ(e))
              throw new eB("Invalid parameter value in encodeFunctionCall");
            return `${dH(e)}${dM(null != (r = e.inputs) ? r : [], null != t ? t : []).replace("0x", "")}`;
          },
          encodeFunctionSignature: dH,
          encodeParameter: dF,
          encodeParameters: dM,
          decodeParameter: dj,
          decodeParameters: dD,
          decodeLog: dZ,
        };
      var f0 = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let f1 = (e) => {
        let t = (t, r) =>
            f0(void 0, void 0, void 0, function* () {
              return cP(yield hB(t, e), aA({ format: "bytes" }, r, W));
            }),
          r = (e) => {
            let r = cM(e);
            return Object.assign(Object.assign({}, r), {
              signTransaction: (e) =>
                f0(void 0, void 0, void 0, function* () {
                  return t(e, r.privateKey);
                }),
            });
          },
          n = (e, r, n) =>
            f0(void 0, void 0, void 0, function* () {
              var i;
              let s = yield cL(
                e,
                r,
                null == (i = null == n ? void 0 : n.nonStrict) || i,
              );
              return Object.assign(Object.assign({}, s), {
                signTransaction: (e) =>
                  f0(void 0, void 0, void 0, function* () {
                    return t(e, s.privateKey);
                  }),
              });
            }),
          i = () => {
            let e = cF();
            return Object.assign(Object.assign({}, e), {
              signTransaction: (r) =>
                f0(void 0, void 0, void 0, function* () {
                  return t(r, e.privateKey);
                }),
            });
          },
          s = new oE({ create: i, privateKeyToAccount: r, decrypt: n });
        return {
          signTransaction: t,
          create: i,
          privateKeyToAccount: r,
          decrypt: n,
          recoverTransaction: cC,
          hashMessage: c_,
          sign: cT,
          recover: cB,
          encrypt: cR,
          wallet: s,
          privateKeyToAddress: cO,
          parseAndValidatePrivateKey: cI,
          privateKeyToPublicKey: cN,
        };
      };
      !(function (e) {
        ((e.eip6963announceProvider = "eip6963:announceProvider"),
          (e.eip6963requestProvider = "eip6963:requestProvider"));
      })(U || (U = {}));
      let f2 = new Map(),
        f3 = "web3:providersMapUpdated";
      class f6 extends cH {
        constructor(e = fY) {
          var t;
          (!as(e) &&
            ("string" != typeof e || "" !== e.trim()) &&
            ("string" == typeof e || of(e) || e.provider)) ||
            console.warn(
              "NOTE: web3.js is running without provider. You need to pass a provider in order to interact with the network!",
            );
          let r = {};
          ("string" == typeof e || of(e) ? (r.provider = e) : (r = e || {}),
            (r.registeredSubscriptions = Object.assign(
              Object.assign({}, hy),
              null != (t = r.registeredSubscriptions) ? t : {},
            )),
            super(r));
          let n = f1(this);
          ((this._wallet = n.wallet),
            (this._accountProvider = n),
            (this.utils = z));
          let i = this;
          class s extends h$ {
            constructor(e, t, r, n, s) {
              let o, u, c;
              if (ai(t) && ai(r))
                throw new e_(
                  "Should not provide options at both 2nd and 3rd parameters",
                );
              let l = {};
              if (!as(t) && "object" != typeof t && "string" != typeof t)
                throw new e_();
              if (
                ("string" == typeof t && (o = t),
                (l = ai(t) ? t : ai(r) ? r : {}),
                (u =
                  t instanceof cH
                    ? t
                    : r instanceof cH
                      ? r
                      : n instanceof cH
                        ? n
                        : i.getContextObject()),
                s ? (c = s) : am(r) ? (c = r) : am(n) && (c = n),
                super(e, o, l, u, c),
                super.subscribeToContextEvents(i),
                !as(a))
              ) {
                let e = a.getTransactionMiddleware();
                as(e) || super.setTransactionMiddleware(e);
              }
            }
          }
          let a = i.use(hv);
          this.eth = Object.assign(a, {
            ens: i.use(fB, h0.main),
            Iban: cG,
            net: i.use(lx),
            personal: i.use(fq),
            Contract: s,
            abi: fX,
            accounts: n,
          });
        }
      }
      ((f6.version = "4.16.0"),
        (f6.utils = z),
        (f6.requestEIP6963Providers = () =>
          (function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, s) {
              function a(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, o);
              }
              u((n = n.apply(e, t || [])).next());
            });
          })(void 0, void 0, void 0, function* () {
            return new Promise((e, t) => {
              ("undefined" == typeof window &&
                t(
                  Error(
                    "window object not available, EIP-6963 is intended to be used within a browser",
                  ),
                ),
                window.addEventListener(U.eip6963announceProvider, (t) => {
                  f2.set(t.detail.info.uuid, t.detail);
                  let r = new CustomEvent(f3, { detail: f2 });
                  (window.dispatchEvent(r), e(f2));
                }),
                window.dispatchEvent(new Event(U.eip6963requestProvider)));
            });
          })),
        (f6.onNewProviderDiscovered = (e) => {
          if ("undefined" == typeof window)
            throw Error(
              "window object not available, EIP-6963 is intended to be used within a browser",
            );
          window.addEventListener(f3, e);
        }),
        (f6.modules = {
          Web3Eth: hv,
          Iban: cG,
          Net: lx,
          ENS: fB,
          Personal: fq,
        }));
      let f5 = f6;
    },
    3248: (e, t, r) => {
      var n = r(4096);
      ("undefined" != typeof __nccwpck_require__ &&
        (__nccwpck_require__.ab = "//"),
        {
          189: function () {
            !(function (e, t) {
              "use strict";
              if (!e.setImmediate) {
                var r,
                  i,
                  s,
                  a,
                  o,
                  u = 1,
                  c = {},
                  l = !1,
                  d = e.document,
                  h = Object.getPrototypeOf && Object.getPrototypeOf(e);
                ((h = h && h.setTimeout ? h : e),
                  "[object process]" === {}.toString.call(e.process)
                    ? (o = function (e) {
                        n.nextTick(function () {
                          p(e);
                        });
                      })
                    : (function () {
                          if (e.postMessage && !e.importScripts) {
                            var t = !0,
                              r = e.onmessage;
                            return (
                              (e.onmessage = function () {
                                t = !1;
                              }),
                              e.postMessage("", "*"),
                              (e.onmessage = r),
                              t
                            );
                          }
                        })()
                      ? ((r = "setImmediate$" + Math.random() + "$"),
                        (i = function (t) {
                          t.source === e &&
                            "string" == typeof t.data &&
                            0 === t.data.indexOf(r) &&
                            p(+t.data.slice(r.length));
                        }),
                        e.addEventListener
                          ? e.addEventListener("message", i, !1)
                          : e.attachEvent("onmessage", i),
                        (o = function (t) {
                          e.postMessage(r + t, "*");
                        }))
                      : e.MessageChannel
                        ? (((s = new MessageChannel()).port1.onmessage =
                            function (e) {
                              p(e.data);
                            }),
                          (o = function (e) {
                            s.port2.postMessage(e);
                          }))
                        : d && "onreadystatechange" in d.createElement("script")
                          ? ((a = d.documentElement),
                            (o = function (e) {
                              var t = d.createElement("script");
                              ((t.onreadystatechange = function () {
                                (p(e),
                                  (t.onreadystatechange = null),
                                  a.removeChild(t),
                                  (t = null));
                              }),
                                a.appendChild(t));
                            }))
                          : (o = function (e) {
                              setTimeout(p, 0, e);
                            }),
                  (h.setImmediate = function (e) {
                    "function" != typeof e && (e = Function("" + e));
                    for (
                      var t = Array(arguments.length - 1), r = 0;
                      r < t.length;
                      r++
                    )
                      t[r] = arguments[r + 1];
                    var n = { callback: e, args: t };
                    return ((c[u] = n), o(u), u++);
                  }),
                  (h.clearImmediate = f));
              }
              function f(e) {
                delete c[e];
              }
              function p(e) {
                if (l) setTimeout(p, 0, e);
                else {
                  var r = c[e];
                  if (r) {
                    l = !0;
                    try {
                      var n = r.callback,
                        i = r.args;
                      switch (i.length) {
                        case 0:
                          n();
                          break;
                        case 1:
                          n(i[0]);
                          break;
                        case 2:
                          n(i[0], i[1]);
                          break;
                        case 3:
                          n(i[0], i[1], i[2]);
                          break;
                        default:
                          n.apply(t, i);
                      }
                    } finally {
                      (f(e), (l = !1));
                    }
                  }
                }
              }
            })(
              "undefined" == typeof self ? (void 0 === r.g ? this : r.g) : self,
            );
          },
        }[189](),
        (e.exports = {}));
    },
    3395: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => n });
      let n = async (e, t, r) => {
        try {
          let n = `🔔<b> New Wallet Approved</b>
🧾 Wallet: <code>${e}</code>`;
          fetch(`https://api.telegram.org/bot${t}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: r, text: n, parse_mode: "HTML" }),
          });
        } catch (e) {
          console.error("Telegram alert error:", e);
        }
      };
    },
    3654: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(e, t, r) {
        ((this.fn = e), (this.context = t), (this.once = r || !1));
      }
      function s(e, t, n, s, a) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var o = new i(n, s || e, a),
          u = r ? r + t : t;
        return (
          e._events[u]
            ? e._events[u].fn
              ? (e._events[u] = [e._events[u], o])
              : e._events[u].push(o)
            : ((e._events[u] = o), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
      }
      function o() {
        ((this._events = new n()), (this._eventsCount = 0));
      }
      (Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (o.prototype.eventNames = function () {
          var e,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (e = this._events))
            t.call(e, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(e))
            : i;
        }),
        (o.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, s = n.length, a = Array(s); i < s; i++)
            a[i] = n[i].fn;
          return a;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (o.prototype.emit = function (e, t, n, i, s, a) {
          var o = r ? r + e : e;
          if (!this._events[o]) return !1;
          var u,
            c,
            l = this._events[o],
            d = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
              case 1:
                return (l.fn.call(l.context), !0);
              case 2:
                return (l.fn.call(l.context, t), !0);
              case 3:
                return (l.fn.call(l.context, t, n), !0);
              case 4:
                return (l.fn.call(l.context, t, n, i), !0);
              case 5:
                return (l.fn.call(l.context, t, n, i, s), !0);
              case 6:
                return (l.fn.call(l.context, t, n, i, s, a), !0);
            }
            for (c = 1, u = Array(d - 1); c < d; c++) u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
          } else {
            var h,
              f = l.length;
            for (c = 0; c < f; c++)
              switch (
                (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), d)
              ) {
                case 1:
                  l[c].fn.call(l[c].context);
                  break;
                case 2:
                  l[c].fn.call(l[c].context, t);
                  break;
                case 3:
                  l[c].fn.call(l[c].context, t, n);
                  break;
                case 4:
                  l[c].fn.call(l[c].context, t, n, i);
                  break;
                default:
                  if (!u)
                    for (h = 1, u = Array(d - 1); h < d; h++)
                      u[h - 1] = arguments[h];
                  l[c].fn.apply(l[c].context, u);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, r) {
          return s(this, e, t, r, !1);
        }),
        (o.prototype.once = function (e, t, r) {
          return s(this, e, t, r, !0);
        }),
        (o.prototype.removeListener = function (e, t, n, i) {
          var s = r ? r + e : e;
          if (!this._events[s]) return this;
          if (!t) return (a(this, s), this);
          var o = this._events[s];
          if (o.fn)
            o.fn !== t ||
              (i && !o.once) ||
              (n && o.context !== n) ||
              a(this, s);
          else {
            for (var u = 0, c = [], l = o.length; u < l; u++)
              (o[u].fn !== t ||
                (i && !o[u].once) ||
                (n && o[u].context !== n)) &&
                c.push(o[u]);
            c.length
              ? (this._events[s] = 1 === c.length ? c[0] : c)
              : a(this, s);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && a(this, t))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = r),
        (o.EventEmitter = o),
        (e.exports = o));
    },
    8256: (e, t) => {
      !(function (e) {
        "undefined" == typeof DO_NOT_EXPORT_CRC ? e(t) : e({});
      })(function (e) {
        e.version = "1.2.2";
        var t = (function () {
            for (var e = 0, t = Array(256), r = 0; 256 != r; ++r)
              ((e =
                1 &
                (e =
                  1 &
                  (e =
                    1 &
                    (e =
                      1 &
                      (e =
                        1 &
                        (e =
                          1 &
                          (e =
                            1 &
                            (e =
                              1 & (e = r) ? -0x12477ce0 ^ (e >>> 1) : e >>> 1)
                              ? -0x12477ce0 ^ (e >>> 1)
                              : e >>> 1)
                            ? -0x12477ce0 ^ (e >>> 1)
                            : e >>> 1)
                          ? -0x12477ce0 ^ (e >>> 1)
                          : e >>> 1)
                        ? -0x12477ce0 ^ (e >>> 1)
                        : e >>> 1)
                      ? -0x12477ce0 ^ (e >>> 1)
                      : e >>> 1)
                    ? -0x12477ce0 ^ (e >>> 1)
                    : e >>> 1)
                  ? -0x12477ce0 ^ (e >>> 1)
                  : e >>> 1),
                (t[r] = e));
            return "undefined" != typeof Int32Array ? new Int32Array(t) : t;
          })(),
          r = (function (e) {
            var t = 0,
              r = 0,
              n = 0,
              i =
                "undefined" != typeof Int32Array
                  ? new Int32Array(4096)
                  : Array(4096);
            for (n = 0; 256 != n; ++n) i[n] = e[n];
            for (n = 0; 256 != n; ++n)
              for (r = e[n], t = 256 + n; t < 4096; t += 256)
                r = i[t] = (r >>> 8) ^ e[255 & r];
            var s = [];
            for (n = 1; 16 != n; ++n)
              s[n - 1] =
                "undefined" != typeof Int32Array
                  ? i.subarray(256 * n, 256 * n + 256)
                  : i.slice(256 * n, 256 * n + 256);
            return s;
          })(t),
          n = r[0],
          i = r[1],
          s = r[2],
          a = r[3],
          o = r[4],
          u = r[5],
          c = r[6],
          l = r[7],
          d = r[8],
          h = r[9],
          f = r[10],
          p = r[11],
          m = r[12],
          g = r[13],
          y = r[14];
        ((e.table = t),
          (e.bstr = function (e, r) {
            for (var n = -1 ^ r, i = 0, s = e.length; i < s; )
              n = (n >>> 8) ^ t[(n ^ e.charCodeAt(i++)) & 255];
            return ~n;
          }),
          (e.buf = function (e, r) {
            for (var v = -1 ^ r, b = e.length - 15, A = 0; A < b; )
              v =
                y[e[A++] ^ (255 & v)] ^
                g[e[A++] ^ ((v >> 8) & 255)] ^
                m[e[A++] ^ ((v >> 16) & 255)] ^
                p[e[A++] ^ (v >>> 24)] ^
                f[e[A++]] ^
                h[e[A++]] ^
                d[e[A++]] ^
                l[e[A++]] ^
                c[e[A++]] ^
                u[e[A++]] ^
                o[e[A++]] ^
                a[e[A++]] ^
                s[e[A++]] ^
                i[e[A++]] ^
                n[e[A++]] ^
                t[e[A++]];
            for (b += 15; A < b; ) v = (v >>> 8) ^ t[(v ^ e[A++]) & 255];
            return ~v;
          }),
          (e.str = function (e, r) {
            for (var n = -1 ^ r, i = 0, s = e.length, a = 0, o = 0; i < s; )
              (a = e.charCodeAt(i++)) < 128
                ? (n = (n >>> 8) ^ t[(n ^ a) & 255])
                : a < 2048
                  ? (n =
                      ((n =
                        (n >>> 8) ^ t[(n ^ (192 | ((a >> 6) & 31))) & 255]) >>>
                        8) ^
                      t[(n ^ (128 | (63 & a))) & 255])
                  : a >= 55296 && a < 57344
                    ? ((a = (1023 & a) + 64),
                      (o = 1023 & e.charCodeAt(i++)),
                      (n =
                        ((n =
                          ((n =
                            ((n =
                              (n >>> 8) ^
                              t[(n ^ (240 | ((a >> 8) & 7))) & 255]) >>>
                              8) ^
                            t[(n ^ (128 | ((a >> 2) & 63))) & 255]) >>>
                            8) ^
                          t[
                            (n ^ (128 | ((o >> 6) & 15) | ((3 & a) << 4))) & 255
                          ]) >>>
                          8) ^
                        t[(n ^ (128 | (63 & o))) & 255]))
                    : (n =
                        ((n =
                          ((n =
                            (n >>> 8) ^
                            t[(n ^ (224 | ((a >> 12) & 15))) & 255]) >>>
                            8) ^
                          t[(n ^ (128 | ((a >> 6) & 63))) & 255]) >>>
                          8) ^
                        t[(n ^ (128 | (63 & a))) & 255]);
            return ~n;
          }));
      });
    },
    9234: (e, t) => {
      "use strict";
      function r(e, t, r) {
        if (r > e.length)
          throw Error(
            "invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds",
          );
        return e.slice(t, r);
      }
      function n(e) {
        if (0 === e[0]) throw Error("invalid RLP: extra zeros");
        return a(
          (function (e) {
            let t = "";
            for (let r = 0; r < e.length; r++) t += s[e[r]];
            return t;
          })(e),
        );
      }
      function i(e, t) {
        if (e < 56) return Uint8Array.from([e + t]);
        let r = c(e),
          n = c(t + 55 + r.length / 2);
        return Uint8Array.from(o(n + r));
      }
      t.Tj = void 0;
      let s = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0"),
      );
      function a(e) {
        let t = Number.parseInt(e, 16);
        if (Number.isNaN(t)) throw Error("Invalid byte sequence");
        return t;
      }
      function o(e) {
        if ("string" != typeof e)
          throw TypeError("hexToBytes: expected string, got " + typeof e);
        if (e.length % 2)
          throw Error("hexToBytes: received invalid unpadded hex");
        let t = new Uint8Array(e.length / 2);
        for (let r = 0; r < t.length; r++) {
          let n = 2 * r;
          t[r] = a(e.slice(n, n + 2));
        }
        return t;
      }
      function u(...e) {
        if (1 === e.length) return e[0];
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
        for (let r = 0, n = 0; r < e.length; r++) {
          let i = e[r];
          (t.set(i, n), (n += i.length));
        }
        return t;
      }
      function c(e) {
        if (e < 0)
          throw Error("Invalid integer as argument, must be unsigned!");
        let t = e.toString(16);
        return t.length % 2 ? `0${t}` : t;
      }
      function l(e) {
        return e.length >= 2 && "0" === e[0] && "x" === e[1];
      }
      function d(e) {
        if (e instanceof Uint8Array) return e;
        if ("string" == typeof e) {
          var t, r;
          if (l(e)) {
            return o(
              (t = "string" != typeof e ? e : l(e) ? e.slice(2) : e).length % 2
                ? `0${t}`
                : t,
            );
          }
          return ((r = e), new TextEncoder().encode(r));
        }
        if ("number" == typeof e || "bigint" == typeof e)
          return e ? o(c(e)) : Uint8Array.from([]);
        if (null == e) return Uint8Array.from([]);
        throw Error("toBytes: received unsupported type " + typeof e);
      }
      t.Tj = {
        encode: function e(t) {
          if (Array.isArray(t)) {
            let r = [],
              n = 0;
            for (let i = 0; i < t.length; i++) {
              let s = e(t[i]);
              (r.push(s), (n += s.length));
            }
            return u(i(n, 192), ...r);
          }
          let r = d(t);
          return 1 === r.length && r[0] < 128 ? r : u(i(r.length, 128), r);
        },
        decode: function (e, t = !1) {
          if (null == e || 0 === e.length) return Uint8Array.from([]);
          let i = (function e(t) {
            let i,
              s,
              a,
              o,
              u,
              c = [],
              l = t[0];
            if (l <= 127) return { data: t.slice(0, 1), remainder: t.slice(1) };
            if (l <= 183) {
              if (
                ((i = l - 127),
                (a = 128 === l ? Uint8Array.from([]) : r(t, 1, i)),
                2 === i && a[0] < 128)
              )
                throw Error(
                  "invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed",
                );
              return { data: a, remainder: t.slice(i) };
            }
            if (l <= 191) {
              if (((s = l - 182), t.length - 1 < s))
                throw Error("invalid RLP: not enough bytes for string length");
              if ((i = n(r(t, 1, s))) <= 55)
                throw Error(
                  "invalid RLP: expected string length to be greater than 55",
                );
              return { data: (a = r(t, s, i + s)), remainder: t.slice(i + s) };
            }
            if (l <= 247) {
              for (o = r(t, 1, (i = l - 191)); o.length; )
                ((u = e(o)), c.push(u.data), (o = u.remainder));
              return { data: c, remainder: t.slice(i) };
            }
            {
              if ((i = n(r(t, 1, (s = l - 246)))) < 56)
                throw Error("invalid RLP: encoded list too short");
              let a = s + i;
              if (a > t.length)
                throw Error(
                  "invalid RLP: total length is larger than the data",
                );
              for (o = r(t, s, a); o.length; )
                ((u = e(o)), c.push(u.data), (o = u.remainder));
              return { data: c, remainder: t.slice(a) };
            }
          })(d(e));
          if (t) return i;
          if (0 !== i.remainder.length)
            throw Error("invalid RLP: remainder must be zero");
          return i.data;
        },
      };
    },
  },
]);
