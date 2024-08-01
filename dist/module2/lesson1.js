"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/@xapi+xapi@2.2.7/node_modules/@xapi/xapi/dist/XAPI.umd.js
  var require_XAPI_umd = __commonJS({
    "node_modules/.pnpm/@xapi+xapi@2.2.7/node_modules/@xapi/xapi/dist/XAPI.umd.js"(exports, module) {
      init_live_reload();
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).XAPI = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2) {
          return function() {
            return e2.apply(t2, arguments);
          };
        }
        const { toString: t } = Object.prototype, { getPrototypeOf: r } = Object, n = (o = /* @__PURE__ */ Object.create(null), (e2) => {
          const r2 = t.call(e2);
          return o[r2] || (o[r2] = r2.slice(8, -1).toLowerCase());
        });
        var o;
        const s = (e2) => (e2 = e2.toLowerCase(), (t2) => n(t2) === e2), i = (e2) => (t2) => typeof t2 === e2, { isArray: a } = Array, c = i("undefined");
        const u = s("ArrayBuffer");
        const l = i("string"), d = i("function"), f = i("number"), p = (e2) => null !== e2 && "object" == typeof e2, h = (e2) => {
          if ("object" !== n(e2))
            return false;
          const t2 = r(e2);
          return !(null !== t2 && t2 !== Object.prototype && null !== Object.getPrototypeOf(t2) || Symbol.toStringTag in e2 || Symbol.iterator in e2);
        }, m = s("Date"), g = s("File"), y = s("Blob"), E = s("FileList"), b = s("URLSearchParams");
        function T(e2, t2, { allOwnKeys: r2 = false } = {}) {
          if (null == e2)
            return;
          let n2, o2;
          if ("object" != typeof e2 && (e2 = [e2]), a(e2))
            for (n2 = 0, o2 = e2.length; n2 < o2; n2++)
              t2.call(null, e2[n2], n2, e2);
          else {
            const o3 = r2 ? Object.getOwnPropertyNames(e2) : Object.keys(e2), s2 = o3.length;
            let i2;
            for (n2 = 0; n2 < s2; n2++)
              i2 = o3[n2], t2.call(null, e2[i2], i2, e2);
          }
        }
        function S(e2, t2) {
          t2 = t2.toLowerCase();
          const r2 = Object.keys(e2);
          let n2, o2 = r2.length;
          for (; o2-- > 0; )
            if (n2 = r2[o2], t2 === n2.toLowerCase())
              return n2;
          return null;
        }
        const O = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, v = (e2) => !c(e2) && e2 !== O;
        const R = (A = "undefined" != typeof Uint8Array && r(Uint8Array), (e2) => A && e2 instanceof A);
        var A;
        const w = s("HTMLFormElement"), P = (({ hasOwnProperty: e2 }) => (t2, r2) => e2.call(t2, r2))(Object.prototype), C = s("RegExp"), I = (e2, t2) => {
          const r2 = Object.getOwnPropertyDescriptors(e2), n2 = {};
          T(r2, (r3, o2) => {
            let s2;
            false !== (s2 = t2(r3, o2, e2)) && (n2[o2] = s2 || r3);
          }), Object.defineProperties(e2, n2);
        }, N = "abcdefghijklmnopqrstuvwxyz", q = "0123456789", x = { DIGIT: q, ALPHA: N, ALPHA_DIGIT: N + N.toUpperCase() + q };
        const j = s("AsyncFunction");
        var U = { isArray: a, isArrayBuffer: u, isBuffer: function(e2) {
          return null !== e2 && !c(e2) && null !== e2.constructor && !c(e2.constructor) && d(e2.constructor.isBuffer) && e2.constructor.isBuffer(e2);
        }, isFormData: (e2) => {
          let t2;
          return e2 && ("function" == typeof FormData && e2 instanceof FormData || d(e2.append) && ("formdata" === (t2 = n(e2)) || "object" === t2 && d(e2.toString) && "[object FormData]" === e2.toString()));
        }, isArrayBufferView: function(e2) {
          let t2;
          return t2 = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e2) : e2 && e2.buffer && u(e2.buffer), t2;
        }, isString: l, isNumber: f, isBoolean: (e2) => true === e2 || false === e2, isObject: p, isPlainObject: h, isUndefined: c, isDate: m, isFile: g, isBlob: y, isRegExp: C, isFunction: d, isStream: (e2) => p(e2) && d(e2.pipe), isURLSearchParams: b, isTypedArray: R, isFileList: E, forEach: T, merge: function e2() {
          const { caseless: t2 } = v(this) && this || {}, r2 = {}, n2 = (n3, o2) => {
            const s2 = t2 && S(r2, o2) || o2;
            h(r2[s2]) && h(n3) ? r2[s2] = e2(r2[s2], n3) : h(n3) ? r2[s2] = e2({}, n3) : a(n3) ? r2[s2] = n3.slice() : r2[s2] = n3;
          };
          for (let e3 = 0, t3 = arguments.length; e3 < t3; e3++)
            arguments[e3] && T(arguments[e3], n2);
          return r2;
        }, extend: (t2, r2, n2, { allOwnKeys: o2 } = {}) => (T(r2, (r3, o3) => {
          n2 && d(r3) ? t2[o3] = e(r3, n2) : t2[o3] = r3;
        }, { allOwnKeys: o2 }), t2), trim: (e2) => e2.trim ? e2.trim() : e2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e2) => (65279 === e2.charCodeAt(0) && (e2 = e2.slice(1)), e2), inherits: (e2, t2, r2, n2) => {
          e2.prototype = Object.create(t2.prototype, n2), e2.prototype.constructor = e2, Object.defineProperty(e2, "super", { value: t2.prototype }), r2 && Object.assign(e2.prototype, r2);
        }, toFlatObject: (e2, t2, n2, o2) => {
          let s2, i2, a2;
          const c2 = {};
          if (t2 = t2 || {}, null == e2)
            return t2;
          do {
            for (s2 = Object.getOwnPropertyNames(e2), i2 = s2.length; i2-- > 0; )
              a2 = s2[i2], o2 && !o2(a2, e2, t2) || c2[a2] || (t2[a2] = e2[a2], c2[a2] = true);
            e2 = false !== n2 && r(e2);
          } while (e2 && (!n2 || n2(e2, t2)) && e2 !== Object.prototype);
          return t2;
        }, kindOf: n, kindOfTest: s, endsWith: (e2, t2, r2) => {
          e2 = String(e2), (void 0 === r2 || r2 > e2.length) && (r2 = e2.length), r2 -= t2.length;
          const n2 = e2.indexOf(t2, r2);
          return -1 !== n2 && n2 === r2;
        }, toArray: (e2) => {
          if (!e2)
            return null;
          if (a(e2))
            return e2;
          let t2 = e2.length;
          if (!f(t2))
            return null;
          const r2 = new Array(t2);
          for (; t2-- > 0; )
            r2[t2] = e2[t2];
          return r2;
        }, forEachEntry: (e2, t2) => {
          const r2 = (e2 && e2[Symbol.iterator]).call(e2);
          let n2;
          for (; (n2 = r2.next()) && !n2.done; ) {
            const r3 = n2.value;
            t2.call(e2, r3[0], r3[1]);
          }
        }, matchAll: (e2, t2) => {
          let r2;
          const n2 = [];
          for (; null !== (r2 = e2.exec(t2)); )
            n2.push(r2);
          return n2;
        }, isHTMLForm: w, hasOwnProperty: P, hasOwnProp: P, reduceDescriptors: I, freezeMethods: (e2) => {
          I(e2, (t2, r2) => {
            if (d(e2) && -1 !== ["arguments", "caller", "callee"].indexOf(r2))
              return false;
            const n2 = e2[r2];
            d(n2) && (t2.enumerable = false, "writable" in t2 ? t2.writable = false : t2.set || (t2.set = () => {
              throw Error("Can not rewrite read-only method '" + r2 + "'");
            }));
          });
        }, toObjectSet: (e2, t2) => {
          const r2 = {}, n2 = (e3) => {
            e3.forEach((e4) => {
              r2[e4] = true;
            });
          };
          return a(e2) ? n2(e2) : n2(String(e2).split(t2)), r2;
        }, toCamelCase: (e2) => e2.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e3, t2, r2) {
          return t2.toUpperCase() + r2;
        }), noop: () => {
        }, toFiniteNumber: (e2, t2) => (e2 = +e2, Number.isFinite(e2) ? e2 : t2), findKey: S, global: O, isContextDefined: v, ALPHABET: x, generateString: (e2 = 16, t2 = x.ALPHA_DIGIT) => {
          let r2 = "";
          const { length: n2 } = t2;
          for (; e2--; )
            r2 += t2[Math.random() * n2 | 0];
          return r2;
        }, isSpecCompliantForm: function(e2) {
          return !!(e2 && d(e2.append) && "FormData" === e2[Symbol.toStringTag] && e2[Symbol.iterator]);
        }, toJSONObject: (e2) => {
          const t2 = new Array(10), r2 = (e3, n2) => {
            if (p(e3)) {
              if (t2.indexOf(e3) >= 0)
                return;
              if (!("toJSON" in e3)) {
                t2[n2] = e3;
                const o2 = a(e3) ? [] : {};
                return T(e3, (e4, t3) => {
                  const s2 = r2(e4, n2 + 1);
                  !c(s2) && (o2[t3] = s2);
                }), t2[n2] = void 0, o2;
              }
            }
            return e3;
          };
          return r2(e2, 0);
        }, isAsyncFn: j, isThenable: (e2) => e2 && (p(e2) || d(e2)) && d(e2.then) && d(e2.catch) };
        function _(e2, t2, r2, n2, o2) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e2, this.name = "AxiosError", t2 && (this.code = t2), r2 && (this.config = r2), n2 && (this.request = n2), o2 && (this.response = o2);
        }
        U.inherits(_, Error, { toJSON: function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: U.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
        } });
        const B = _.prototype, L = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e2) => {
          L[e2] = { value: e2 };
        }), Object.defineProperties(_, L), Object.defineProperty(B, "isAxiosError", { value: true }), _.from = (e2, t2, r2, n2, o2, s2) => {
          const i2 = Object.create(B);
          return U.toFlatObject(e2, i2, function(e3) {
            return e3 !== Error.prototype;
          }, (e3) => "isAxiosError" !== e3), _.call(i2, e2.message, t2, r2, n2, o2), i2.cause = e2, i2.name = e2.name, s2 && Object.assign(i2, s2), i2;
        };
        function D(e2) {
          return U.isPlainObject(e2) || U.isArray(e2);
        }
        function F(e2) {
          return U.endsWith(e2, "[]") ? e2.slice(0, -2) : e2;
        }
        function k(e2, t2, r2) {
          return e2 ? e2.concat(t2).map(function(e3, t3) {
            return e3 = F(e3), !r2 && t3 ? "[" + e3 + "]" : e3;
          }).join(r2 ? "." : "") : t2;
        }
        const M = U.toFlatObject(U, {}, null, function(e2) {
          return /^is[A-Z]/.test(e2);
        });
        function H(e2, t2, r2) {
          if (!U.isObject(e2))
            throw new TypeError("target must be an object");
          t2 = t2 || new FormData();
          const n2 = (r2 = U.toFlatObject(r2, { metaTokens: true, dots: false, indexes: false }, false, function(e3, t3) {
            return !U.isUndefined(t3[e3]);
          })).metaTokens, o2 = r2.visitor || u2, s2 = r2.dots, i2 = r2.indexes, a2 = (r2.Blob || "undefined" != typeof Blob && Blob) && U.isSpecCompliantForm(t2);
          if (!U.isFunction(o2))
            throw new TypeError("visitor must be a function");
          function c2(e3) {
            if (null === e3)
              return "";
            if (U.isDate(e3))
              return e3.toISOString();
            if (!a2 && U.isBlob(e3))
              throw new _("Blob is not supported. Use a Buffer instead.");
            return U.isArrayBuffer(e3) || U.isTypedArray(e3) ? a2 && "function" == typeof Blob ? new Blob([e3]) : Buffer.from(e3) : e3;
          }
          function u2(e3, r3, o3) {
            let a3 = e3;
            if (e3 && !o3 && "object" == typeof e3) {
              if (U.endsWith(r3, "{}"))
                r3 = n2 ? r3 : r3.slice(0, -2), e3 = JSON.stringify(e3);
              else if (U.isArray(e3) && function(e4) {
                return U.isArray(e4) && !e4.some(D);
              }(e3) || (U.isFileList(e3) || U.endsWith(r3, "[]")) && (a3 = U.toArray(e3)))
                return r3 = F(r3), a3.forEach(function(e4, n3) {
                  !U.isUndefined(e4) && null !== e4 && t2.append(true === i2 ? k([r3], n3, s2) : null === i2 ? r3 : r3 + "[]", c2(e4));
                }), false;
            }
            return !!D(e3) || (t2.append(k(o3, r3, s2), c2(e3)), false);
          }
          const l2 = [], d2 = Object.assign(M, { defaultVisitor: u2, convertValue: c2, isVisitable: D });
          if (!U.isObject(e2))
            throw new TypeError("data must be an object");
          return function e3(r3, n3) {
            if (!U.isUndefined(r3)) {
              if (-1 !== l2.indexOf(r3))
                throw Error("Circular reference detected in " + n3.join("."));
              l2.push(r3), U.forEach(r3, function(r4, s3) {
                true === (!(U.isUndefined(r4) || null === r4) && o2.call(t2, r4, U.isString(s3) ? s3.trim() : s3, n3, d2)) && e3(r4, n3 ? n3.concat(s3) : [s3]);
              }), l2.pop();
            }
          }(e2), t2;
        }
        function $(e2) {
          const t2 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(e2).replace(/[!'()~]|%20|%00/g, function(e3) {
            return t2[e3];
          });
        }
        function z(e2, t2) {
          this._pairs = [], e2 && H(e2, this, t2);
        }
        const V = z.prototype;
        function J(e2) {
          return encodeURIComponent(e2).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        function G(e2, t2, r2) {
          if (!t2)
            return e2;
          const n2 = r2 && r2.encode || J, o2 = r2 && r2.serialize;
          let s2;
          if (s2 = o2 ? o2(t2, r2) : U.isURLSearchParams(t2) ? t2.toString() : new z(t2, r2).toString(n2), s2) {
            const t3 = e2.indexOf("#");
            -1 !== t3 && (e2 = e2.slice(0, t3)), e2 += (-1 === e2.indexOf("?") ? "?" : "&") + s2;
          }
          return e2;
        }
        V.append = function(e2, t2) {
          this._pairs.push([e2, t2]);
        }, V.toString = function(e2) {
          const t2 = e2 ? function(t3) {
            return e2.call(this, t3, $);
          } : $;
          return this._pairs.map(function(e3) {
            return t2(e3[0]) + "=" + t2(e3[1]);
          }, "").join("&");
        };
        class W {
          constructor() {
            this.handlers = [];
          }
          use(e2, t2, r2) {
            return this.handlers.push({ fulfilled: e2, rejected: t2, synchronous: !!r2 && r2.synchronous, runWhen: r2 ? r2.runWhen : null }), this.handlers.length - 1;
          }
          eject(e2) {
            this.handlers[e2] && (this.handlers[e2] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e2) {
            U.forEach(this.handlers, function(t2) {
              null !== t2 && e2(t2);
            });
          }
        }
        var K = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, X = { isBrowser: true, classes: { URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : z, FormData: "undefined" != typeof FormData ? FormData : null, Blob: "undefined" != typeof Blob ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] };
        const Y = "undefined" != typeof window && "undefined" != typeof document, Q = (Z = "undefined" != typeof navigator && navigator.product, Y && ["ReactNative", "NativeScript", "NS"].indexOf(Z) < 0);
        var Z;
        const ee = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
        var te = { ...Object.freeze({ __proto__: null, hasBrowserEnv: Y, hasStandardBrowserEnv: Q, hasStandardBrowserWebWorkerEnv: ee }), ...X };
        function re(e2) {
          function t2(e3, r2, n2, o2) {
            let s2 = e3[o2++];
            if ("__proto__" === s2)
              return true;
            const i2 = Number.isFinite(+s2), a2 = o2 >= e3.length;
            if (s2 = !s2 && U.isArray(n2) ? n2.length : s2, a2)
              return U.hasOwnProp(n2, s2) ? n2[s2] = [n2[s2], r2] : n2[s2] = r2, !i2;
            n2[s2] && U.isObject(n2[s2]) || (n2[s2] = []);
            return t2(e3, r2, n2[s2], o2) && U.isArray(n2[s2]) && (n2[s2] = function(e4) {
              const t3 = {}, r3 = Object.keys(e4);
              let n3;
              const o3 = r3.length;
              let s3;
              for (n3 = 0; n3 < o3; n3++)
                s3 = r3[n3], t3[s3] = e4[s3];
              return t3;
            }(n2[s2])), !i2;
          }
          if (U.isFormData(e2) && U.isFunction(e2.entries)) {
            const r2 = {};
            return U.forEachEntry(e2, (e3, n2) => {
              t2(function(e4) {
                return U.matchAll(/\w+|\[(\w*)]/g, e4).map((e5) => "[]" === e5[0] ? "" : e5[1] || e5[0]);
              }(e3), n2, r2, 0);
            }), r2;
          }
          return null;
        }
        const ne = { transitional: K, adapter: ["xhr", "http"], transformRequest: [function(e2, t2) {
          const r2 = t2.getContentType() || "", n2 = r2.indexOf("application/json") > -1, o2 = U.isObject(e2);
          o2 && U.isHTMLForm(e2) && (e2 = new FormData(e2));
          if (U.isFormData(e2))
            return n2 ? JSON.stringify(re(e2)) : e2;
          if (U.isArrayBuffer(e2) || U.isBuffer(e2) || U.isStream(e2) || U.isFile(e2) || U.isBlob(e2))
            return e2;
          if (U.isArrayBufferView(e2))
            return e2.buffer;
          if (U.isURLSearchParams(e2))
            return t2.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), e2.toString();
          let s2;
          if (o2) {
            if (r2.indexOf("application/x-www-form-urlencoded") > -1)
              return function(e3, t3) {
                return H(e3, new te.classes.URLSearchParams(), Object.assign({ visitor: function(e4, t4, r3, n3) {
                  return te.isNode && U.isBuffer(e4) ? (this.append(t4, e4.toString("base64")), false) : n3.defaultVisitor.apply(this, arguments);
                } }, t3));
              }(e2, this.formSerializer).toString();
            if ((s2 = U.isFileList(e2)) || r2.indexOf("multipart/form-data") > -1) {
              const t3 = this.env && this.env.FormData;
              return H(s2 ? { "files[]": e2 } : e2, t3 && new t3(), this.formSerializer);
            }
          }
          return o2 || n2 ? (t2.setContentType("application/json", false), function(e3, t3, r3) {
            if (U.isString(e3))
              try {
                return (t3 || JSON.parse)(e3), U.trim(e3);
              } catch (e4) {
                if ("SyntaxError" !== e4.name)
                  throw e4;
              }
            return (r3 || JSON.stringify)(e3);
          }(e2)) : e2;
        }], transformResponse: [function(e2) {
          const t2 = this.transitional || ne.transitional, r2 = t2 && t2.forcedJSONParsing, n2 = "json" === this.responseType;
          if (e2 && U.isString(e2) && (r2 && !this.responseType || n2)) {
            const r3 = !(t2 && t2.silentJSONParsing) && n2;
            try {
              return JSON.parse(e2);
            } catch (e3) {
              if (r3) {
                if ("SyntaxError" === e3.name)
                  throw _.from(e3, _.ERR_BAD_RESPONSE, this, null, this.response);
                throw e3;
              }
            }
          }
          return e2;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: te.classes.FormData, Blob: te.classes.Blob }, validateStatus: function(e2) {
          return e2 >= 200 && e2 < 300;
        }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
        U.forEach(["delete", "get", "head", "post", "put", "patch"], (e2) => {
          ne.headers[e2] = {};
        });
        var oe = ne;
        const se = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        const ie = Symbol("internals");
        function ae(e2) {
          return e2 && String(e2).trim().toLowerCase();
        }
        function ce(e2) {
          return false === e2 || null == e2 ? e2 : U.isArray(e2) ? e2.map(ce) : String(e2);
        }
        function ue(e2, t2, r2, n2, o2) {
          return U.isFunction(n2) ? n2.call(this, t2, r2) : (o2 && (t2 = r2), U.isString(t2) ? U.isString(n2) ? -1 !== t2.indexOf(n2) : U.isRegExp(n2) ? n2.test(t2) : void 0 : void 0);
        }
        class le {
          constructor(e2) {
            e2 && this.set(e2);
          }
          set(e2, t2, r2) {
            const n2 = this;
            function o2(e3, t3, r3) {
              const o3 = ae(t3);
              if (!o3)
                throw new Error("header name must be a non-empty string");
              const s3 = U.findKey(n2, o3);
              (!s3 || void 0 === n2[s3] || true === r3 || void 0 === r3 && false !== n2[s3]) && (n2[s3 || t3] = ce(e3));
            }
            const s2 = (e3, t3) => U.forEach(e3, (e4, r3) => o2(e4, r3, t3));
            return U.isPlainObject(e2) || e2 instanceof this.constructor ? s2(e2, t2) : U.isString(e2) && (e2 = e2.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e2.trim()) ? s2(((e3) => {
              const t3 = {};
              let r3, n3, o3;
              return e3 && e3.split("\n").forEach(function(e4) {
                o3 = e4.indexOf(":"), r3 = e4.substring(0, o3).trim().toLowerCase(), n3 = e4.substring(o3 + 1).trim(), !r3 || t3[r3] && se[r3] || ("set-cookie" === r3 ? t3[r3] ? t3[r3].push(n3) : t3[r3] = [n3] : t3[r3] = t3[r3] ? t3[r3] + ", " + n3 : n3);
              }), t3;
            })(e2), t2) : null != e2 && o2(t2, e2, r2), this;
          }
          get(e2, t2) {
            if (e2 = ae(e2)) {
              const r2 = U.findKey(this, e2);
              if (r2) {
                const e3 = this[r2];
                if (!t2)
                  return e3;
                if (true === t2)
                  return function(e4) {
                    const t3 = /* @__PURE__ */ Object.create(null), r3 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let n2;
                    for (; n2 = r3.exec(e4); )
                      t3[n2[1]] = n2[2];
                    return t3;
                  }(e3);
                if (U.isFunction(t2))
                  return t2.call(this, e3, r2);
                if (U.isRegExp(t2))
                  return t2.exec(e3);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e2, t2) {
            if (e2 = ae(e2)) {
              const r2 = U.findKey(this, e2);
              return !(!r2 || void 0 === this[r2] || t2 && !ue(0, this[r2], r2, t2));
            }
            return false;
          }
          delete(e2, t2) {
            const r2 = this;
            let n2 = false;
            function o2(e3) {
              if (e3 = ae(e3)) {
                const o3 = U.findKey(r2, e3);
                !o3 || t2 && !ue(0, r2[o3], o3, t2) || (delete r2[o3], n2 = true);
              }
            }
            return U.isArray(e2) ? e2.forEach(o2) : o2(e2), n2;
          }
          clear(e2) {
            const t2 = Object.keys(this);
            let r2 = t2.length, n2 = false;
            for (; r2--; ) {
              const o2 = t2[r2];
              e2 && !ue(0, this[o2], o2, e2, true) || (delete this[o2], n2 = true);
            }
            return n2;
          }
          normalize(e2) {
            const t2 = this, r2 = {};
            return U.forEach(this, (n2, o2) => {
              const s2 = U.findKey(r2, o2);
              if (s2)
                return t2[s2] = ce(n2), void delete t2[o2];
              const i2 = e2 ? function(e3) {
                return e3.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e4, t3, r3) => t3.toUpperCase() + r3);
              }(o2) : String(o2).trim();
              i2 !== o2 && delete t2[o2], t2[i2] = ce(n2), r2[i2] = true;
            }), this;
          }
          concat(...e2) {
            return this.constructor.concat(this, ...e2);
          }
          toJSON(e2) {
            const t2 = /* @__PURE__ */ Object.create(null);
            return U.forEach(this, (r2, n2) => {
              null != r2 && false !== r2 && (t2[n2] = e2 && U.isArray(r2) ? r2.join(", ") : r2);
            }), t2;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([e2, t2]) => e2 + ": " + t2).join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(e2) {
            return e2 instanceof this ? e2 : new this(e2);
          }
          static concat(e2, ...t2) {
            const r2 = new this(e2);
            return t2.forEach((e3) => r2.set(e3)), r2;
          }
          static accessor(e2) {
            const t2 = (this[ie] = this[ie] = { accessors: {} }).accessors, r2 = this.prototype;
            function n2(e3) {
              const n3 = ae(e3);
              t2[n3] || (!function(e4, t3) {
                const r3 = U.toCamelCase(" " + t3);
                ["get", "set", "has"].forEach((n4) => {
                  Object.defineProperty(e4, n4 + r3, { value: function(e5, r4, o2) {
                    return this[n4].call(this, t3, e5, r4, o2);
                  }, configurable: true });
                });
              }(r2, e3), t2[n3] = true);
            }
            return U.isArray(e2) ? e2.forEach(n2) : n2(e2), this;
          }
        }
        le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), U.reduceDescriptors(le.prototype, ({ value: e2 }, t2) => {
          let r2 = t2[0].toUpperCase() + t2.slice(1);
          return { get: () => e2, set(e3) {
            this[r2] = e3;
          } };
        }), U.freezeMethods(le);
        var de = le;
        function fe(e2, t2) {
          const r2 = this || oe, n2 = t2 || r2, o2 = de.from(n2.headers);
          let s2 = n2.data;
          return U.forEach(e2, function(e3) {
            s2 = e3.call(r2, s2, o2.normalize(), t2 ? t2.status : void 0);
          }), o2.normalize(), s2;
        }
        function pe(e2) {
          return !(!e2 || !e2.__CANCEL__);
        }
        function he(e2, t2, r2) {
          _.call(this, null == e2 ? "canceled" : e2, _.ERR_CANCELED, t2, r2), this.name = "CanceledError";
        }
        U.inherits(he, _, { __CANCEL__: true });
        var me = te.hasStandardBrowserEnv ? { write(e2, t2, r2, n2, o2, s2) {
          const i2 = [e2 + "=" + encodeURIComponent(t2)];
          U.isNumber(r2) && i2.push("expires=" + new Date(r2).toGMTString()), U.isString(n2) && i2.push("path=" + n2), U.isString(o2) && i2.push("domain=" + o2), true === s2 && i2.push("secure"), document.cookie = i2.join("; ");
        }, read(e2) {
          const t2 = document.cookie.match(new RegExp("(^|;\\s*)(" + e2 + ")=([^;]*)"));
          return t2 ? decodeURIComponent(t2[3]) : null;
        }, remove(e2) {
          this.write(e2, "", Date.now() - 864e5);
        } } : { write() {
        }, read: () => null, remove() {
        } };
        function ge(e2, t2) {
          return e2 && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t2) ? function(e3, t3) {
            return t3 ? e3.replace(/\/?\/$/, "") + "/" + t3.replace(/^\/+/, "") : e3;
          }(e2, t2) : t2;
        }
        var ye = te.hasStandardBrowserEnv ? function() {
          const e2 = /(msie|trident)/i.test(navigator.userAgent), t2 = document.createElement("a");
          let r2;
          function n2(r3) {
            let n3 = r3;
            return e2 && (t2.setAttribute("href", n3), n3 = t2.href), t2.setAttribute("href", n3), { href: t2.href, protocol: t2.protocol ? t2.protocol.replace(/:$/, "") : "", host: t2.host, search: t2.search ? t2.search.replace(/^\?/, "") : "", hash: t2.hash ? t2.hash.replace(/^#/, "") : "", hostname: t2.hostname, port: t2.port, pathname: "/" === t2.pathname.charAt(0) ? t2.pathname : "/" + t2.pathname };
          }
          return r2 = n2(window.location.href), function(e3) {
            const t3 = U.isString(e3) ? n2(e3) : e3;
            return t3.protocol === r2.protocol && t3.host === r2.host;
          };
        }() : function() {
          return true;
        };
        function Ee(e2, t2) {
          let r2 = 0;
          const n2 = function(e3, t3) {
            e3 = e3 || 10;
            const r3 = new Array(e3), n3 = new Array(e3);
            let o2, s2 = 0, i2 = 0;
            return t3 = void 0 !== t3 ? t3 : 1e3, function(a2) {
              const c2 = Date.now(), u2 = n3[i2];
              o2 || (o2 = c2), r3[s2] = a2, n3[s2] = c2;
              let l2 = i2, d2 = 0;
              for (; l2 !== s2; )
                d2 += r3[l2++], l2 %= e3;
              if (s2 = (s2 + 1) % e3, s2 === i2 && (i2 = (i2 + 1) % e3), c2 - o2 < t3)
                return;
              const f2 = u2 && c2 - u2;
              return f2 ? Math.round(1e3 * d2 / f2) : void 0;
            };
          }(50, 250);
          return (o2) => {
            const s2 = o2.loaded, i2 = o2.lengthComputable ? o2.total : void 0, a2 = s2 - r2, c2 = n2(a2);
            r2 = s2;
            const u2 = { loaded: s2, total: i2, progress: i2 ? s2 / i2 : void 0, bytes: a2, rate: c2 || void 0, estimated: c2 && i2 && s2 <= i2 ? (i2 - s2) / c2 : void 0, event: o2 };
            u2[t2 ? "download" : "upload"] = true, e2(u2);
          };
        }
        const be = { http: null, xhr: "undefined" != typeof XMLHttpRequest && function(e2) {
          return new Promise(function(t2, r2) {
            let n2 = e2.data;
            const o2 = de.from(e2.headers).normalize();
            let s2, i2, { responseType: a2, withXSRFToken: c2 } = e2;
            function u2() {
              e2.cancelToken && e2.cancelToken.unsubscribe(s2), e2.signal && e2.signal.removeEventListener("abort", s2);
            }
            if (U.isFormData(n2)) {
              if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
                o2.setContentType(false);
              else if (false !== (i2 = o2.getContentType())) {
                const [e3, ...t3] = i2 ? i2.split(";").map((e4) => e4.trim()).filter(Boolean) : [];
                o2.setContentType([e3 || "multipart/form-data", ...t3].join("; "));
              }
            }
            let l2 = new XMLHttpRequest();
            if (e2.auth) {
              const t3 = e2.auth.username || "", r3 = e2.auth.password ? unescape(encodeURIComponent(e2.auth.password)) : "";
              o2.set("Authorization", "Basic " + btoa(t3 + ":" + r3));
            }
            const d2 = ge(e2.baseURL, e2.url);
            function f2() {
              if (!l2)
                return;
              const n3 = de.from("getAllResponseHeaders" in l2 && l2.getAllResponseHeaders());
              !function(e3, t3, r3) {
                const n4 = r3.config.validateStatus;
                r3.status && n4 && !n4(r3.status) ? t3(new _("Request failed with status code " + r3.status, [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][Math.floor(r3.status / 100) - 4], r3.config, r3.request, r3)) : e3(r3);
              }(function(e3) {
                t2(e3), u2();
              }, function(e3) {
                r2(e3), u2();
              }, { data: a2 && "text" !== a2 && "json" !== a2 ? l2.response : l2.responseText, status: l2.status, statusText: l2.statusText, headers: n3, config: e2, request: l2 }), l2 = null;
            }
            if (l2.open(e2.method.toUpperCase(), G(d2, e2.params, e2.paramsSerializer), true), l2.timeout = e2.timeout, "onloadend" in l2 ? l2.onloadend = f2 : l2.onreadystatechange = function() {
              l2 && 4 === l2.readyState && (0 !== l2.status || l2.responseURL && 0 === l2.responseURL.indexOf("file:")) && setTimeout(f2);
            }, l2.onabort = function() {
              l2 && (r2(new _("Request aborted", _.ECONNABORTED, e2, l2)), l2 = null);
            }, l2.onerror = function() {
              r2(new _("Network Error", _.ERR_NETWORK, e2, l2)), l2 = null;
            }, l2.ontimeout = function() {
              let t3 = e2.timeout ? "timeout of " + e2.timeout + "ms exceeded" : "timeout exceeded";
              const n3 = e2.transitional || K;
              e2.timeoutErrorMessage && (t3 = e2.timeoutErrorMessage), r2(new _(t3, n3.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED, e2, l2)), l2 = null;
            }, te.hasStandardBrowserEnv && (c2 && U.isFunction(c2) && (c2 = c2(e2)), c2 || false !== c2 && ye(d2))) {
              const t3 = e2.xsrfHeaderName && e2.xsrfCookieName && me.read(e2.xsrfCookieName);
              t3 && o2.set(e2.xsrfHeaderName, t3);
            }
            void 0 === n2 && o2.setContentType(null), "setRequestHeader" in l2 && U.forEach(o2.toJSON(), function(e3, t3) {
              l2.setRequestHeader(t3, e3);
            }), U.isUndefined(e2.withCredentials) || (l2.withCredentials = !!e2.withCredentials), a2 && "json" !== a2 && (l2.responseType = e2.responseType), "function" == typeof e2.onDownloadProgress && l2.addEventListener("progress", Ee(e2.onDownloadProgress, true)), "function" == typeof e2.onUploadProgress && l2.upload && l2.upload.addEventListener("progress", Ee(e2.onUploadProgress)), (e2.cancelToken || e2.signal) && (s2 = (t3) => {
              l2 && (r2(!t3 || t3.type ? new he(null, e2, l2) : t3), l2.abort(), l2 = null);
            }, e2.cancelToken && e2.cancelToken.subscribe(s2), e2.signal && (e2.signal.aborted ? s2() : e2.signal.addEventListener("abort", s2)));
            const p2 = function(e3) {
              const t3 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e3);
              return t3 && t3[1] || "";
            }(d2);
            p2 && -1 === te.protocols.indexOf(p2) ? r2(new _("Unsupported protocol " + p2 + ":", _.ERR_BAD_REQUEST, e2)) : l2.send(n2 || null);
          });
        } };
        U.forEach(be, (e2, t2) => {
          if (e2) {
            try {
              Object.defineProperty(e2, "name", { value: t2 });
            } catch (e3) {
            }
            Object.defineProperty(e2, "adapterName", { value: t2 });
          }
        });
        const Te = (e2) => `- ${e2}`, Se = (e2) => U.isFunction(e2) || null === e2 || false === e2;
        var Oe = (e2) => {
          e2 = U.isArray(e2) ? e2 : [e2];
          const { length: t2 } = e2;
          let r2, n2;
          const o2 = {};
          for (let s2 = 0; s2 < t2; s2++) {
            let t3;
            if (r2 = e2[s2], n2 = r2, !Se(r2) && (n2 = be[(t3 = String(r2)).toLowerCase()], void 0 === n2))
              throw new _(`Unknown adapter '${t3}'`);
            if (n2)
              break;
            o2[t3 || "#" + s2] = n2;
          }
          if (!n2) {
            const e3 = Object.entries(o2).map(([e4, t3]) => `adapter ${e4} ` + (false === t3 ? "is not supported by the environment" : "is not available in the build"));
            throw new _("There is no suitable adapter to dispatch the request " + (t2 ? e3.length > 1 ? "since :\n" + e3.map(Te).join("\n") : " " + Te(e3[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
          }
          return n2;
        };
        function ve(e2) {
          if (e2.cancelToken && e2.cancelToken.throwIfRequested(), e2.signal && e2.signal.aborted)
            throw new he(null, e2);
        }
        function Re(e2) {
          ve(e2), e2.headers = de.from(e2.headers), e2.data = fe.call(e2, e2.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e2.method) && e2.headers.setContentType("application/x-www-form-urlencoded", false);
          return Oe(e2.adapter || oe.adapter)(e2).then(function(t2) {
            return ve(e2), t2.data = fe.call(e2, e2.transformResponse, t2), t2.headers = de.from(t2.headers), t2;
          }, function(t2) {
            return pe(t2) || (ve(e2), t2 && t2.response && (t2.response.data = fe.call(e2, e2.transformResponse, t2.response), t2.response.headers = de.from(t2.response.headers))), Promise.reject(t2);
          });
        }
        const Ae = (e2) => e2 instanceof de ? { ...e2 } : e2;
        function we(e2, t2) {
          t2 = t2 || {};
          const r2 = {};
          function n2(e3, t3, r3) {
            return U.isPlainObject(e3) && U.isPlainObject(t3) ? U.merge.call({ caseless: r3 }, e3, t3) : U.isPlainObject(t3) ? U.merge({}, t3) : U.isArray(t3) ? t3.slice() : t3;
          }
          function o2(e3, t3, r3) {
            return U.isUndefined(t3) ? U.isUndefined(e3) ? void 0 : n2(void 0, e3, r3) : n2(e3, t3, r3);
          }
          function s2(e3, t3) {
            if (!U.isUndefined(t3))
              return n2(void 0, t3);
          }
          function i2(e3, t3) {
            return U.isUndefined(t3) ? U.isUndefined(e3) ? void 0 : n2(void 0, e3) : n2(void 0, t3);
          }
          function a2(r3, o3, s3) {
            return s3 in t2 ? n2(r3, o3) : s3 in e2 ? n2(void 0, r3) : void 0;
          }
          const c2 = { url: s2, method: s2, data: s2, baseURL: i2, transformRequest: i2, transformResponse: i2, paramsSerializer: i2, timeout: i2, timeoutMessage: i2, withCredentials: i2, withXSRFToken: i2, adapter: i2, responseType: i2, xsrfCookieName: i2, xsrfHeaderName: i2, onUploadProgress: i2, onDownloadProgress: i2, decompress: i2, maxContentLength: i2, maxBodyLength: i2, beforeRedirect: i2, transport: i2, httpAgent: i2, httpsAgent: i2, cancelToken: i2, socketPath: i2, responseEncoding: i2, validateStatus: a2, headers: (e3, t3) => o2(Ae(e3), Ae(t3), true) };
          return U.forEach(Object.keys(Object.assign({}, e2, t2)), function(n3) {
            const s3 = c2[n3] || o2, i3 = s3(e2[n3], t2[n3], n3);
            U.isUndefined(i3) && s3 !== a2 || (r2[n3] = i3);
          }), r2;
        }
        const Pe = "1.6.8", Ce = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e2, t2) => {
          Ce[e2] = function(r2) {
            return typeof r2 === e2 || "a" + (t2 < 1 ? "n " : " ") + e2;
          };
        });
        const Ie = {};
        Ce.transitional = function(e2, t2, r2) {
          function n2(e3, t3) {
            return "[Axios v1.6.8] Transitional option '" + e3 + "'" + t3 + (r2 ? ". " + r2 : "");
          }
          return (r3, o2, s2) => {
            if (false === e2)
              throw new _(n2(o2, " has been removed" + (t2 ? " in " + t2 : "")), _.ERR_DEPRECATED);
            return t2 && !Ie[o2] && (Ie[o2] = true, console.warn(n2(o2, " has been deprecated since v" + t2 + " and will be removed in the near future"))), !e2 || e2(r3, o2, s2);
          };
        };
        var Ne = { assertOptions: function(e2, t2, r2) {
          if ("object" != typeof e2)
            throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
          const n2 = Object.keys(e2);
          let o2 = n2.length;
          for (; o2-- > 0; ) {
            const s2 = n2[o2], i2 = t2[s2];
            if (i2) {
              const t3 = e2[s2], r3 = void 0 === t3 || i2(t3, s2, e2);
              if (true !== r3)
                throw new _("option " + s2 + " must be " + r3, _.ERR_BAD_OPTION_VALUE);
            } else if (true !== r2)
              throw new _("Unknown option " + s2, _.ERR_BAD_OPTION);
          }
        }, validators: Ce };
        const qe = Ne.validators;
        class xe {
          constructor(e2) {
            this.defaults = e2, this.interceptors = { request: new W(), response: new W() };
          }
          async request(e2, t2) {
            try {
              return await this._request(e2, t2);
            } catch (e3) {
              if (e3 instanceof Error) {
                let t3;
                Error.captureStackTrace ? Error.captureStackTrace(t3 = {}) : t3 = new Error();
                const r2 = t3.stack ? t3.stack.replace(/^.+\n/, "") : "";
                e3.stack ? r2 && !String(e3.stack).endsWith(r2.replace(/^.+\n.+\n/, "")) && (e3.stack += "\n" + r2) : e3.stack = r2;
              }
              throw e3;
            }
          }
          _request(e2, t2) {
            "string" == typeof e2 ? (t2 = t2 || {}).url = e2 : t2 = e2 || {}, t2 = we(this.defaults, t2);
            const { transitional: r2, paramsSerializer: n2, headers: o2 } = t2;
            void 0 !== r2 && Ne.assertOptions(r2, { silentJSONParsing: qe.transitional(qe.boolean), forcedJSONParsing: qe.transitional(qe.boolean), clarifyTimeoutError: qe.transitional(qe.boolean) }, false), null != n2 && (U.isFunction(n2) ? t2.paramsSerializer = { serialize: n2 } : Ne.assertOptions(n2, { encode: qe.function, serialize: qe.function }, true)), t2.method = (t2.method || this.defaults.method || "get").toLowerCase();
            let s2 = o2 && U.merge(o2.common, o2[t2.method]);
            o2 && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e3) => {
              delete o2[e3];
            }), t2.headers = de.concat(s2, o2);
            const i2 = [];
            let a2 = true;
            this.interceptors.request.forEach(function(e3) {
              "function" == typeof e3.runWhen && false === e3.runWhen(t2) || (a2 = a2 && e3.synchronous, i2.unshift(e3.fulfilled, e3.rejected));
            });
            const c2 = [];
            let u2;
            this.interceptors.response.forEach(function(e3) {
              c2.push(e3.fulfilled, e3.rejected);
            });
            let l2, d2 = 0;
            if (!a2) {
              const e3 = [Re.bind(this), void 0];
              for (e3.unshift.apply(e3, i2), e3.push.apply(e3, c2), l2 = e3.length, u2 = Promise.resolve(t2); d2 < l2; )
                u2 = u2.then(e3[d2++], e3[d2++]);
              return u2;
            }
            l2 = i2.length;
            let f2 = t2;
            for (d2 = 0; d2 < l2; ) {
              const e3 = i2[d2++], t3 = i2[d2++];
              try {
                f2 = e3(f2);
              } catch (e4) {
                t3.call(this, e4);
                break;
              }
            }
            try {
              u2 = Re.call(this, f2);
            } catch (e3) {
              return Promise.reject(e3);
            }
            for (d2 = 0, l2 = c2.length; d2 < l2; )
              u2 = u2.then(c2[d2++], c2[d2++]);
            return u2;
          }
          getUri(e2) {
            return G(ge((e2 = we(this.defaults, e2)).baseURL, e2.url), e2.params, e2.paramsSerializer);
          }
        }
        U.forEach(["delete", "get", "head", "options"], function(e2) {
          xe.prototype[e2] = function(t2, r2) {
            return this.request(we(r2 || {}, { method: e2, url: t2, data: (r2 || {}).data }));
          };
        }), U.forEach(["post", "put", "patch"], function(e2) {
          function t2(t3) {
            return function(r2, n2, o2) {
              return this.request(we(o2 || {}, { method: e2, headers: t3 ? { "Content-Type": "multipart/form-data" } : {}, url: r2, data: n2 }));
            };
          }
          xe.prototype[e2] = t2(), xe.prototype[e2 + "Form"] = t2(true);
        });
        var je = xe;
        class Ue {
          constructor(e2) {
            if ("function" != typeof e2)
              throw new TypeError("executor must be a function.");
            let t2;
            this.promise = new Promise(function(e3) {
              t2 = e3;
            });
            const r2 = this;
            this.promise.then((e3) => {
              if (!r2._listeners)
                return;
              let t3 = r2._listeners.length;
              for (; t3-- > 0; )
                r2._listeners[t3](e3);
              r2._listeners = null;
            }), this.promise.then = (e3) => {
              let t3;
              const n2 = new Promise((e4) => {
                r2.subscribe(e4), t3 = e4;
              }).then(e3);
              return n2.cancel = function() {
                r2.unsubscribe(t3);
              }, n2;
            }, e2(function(e3, n2, o2) {
              r2.reason || (r2.reason = new he(e3, n2, o2), t2(r2.reason));
            });
          }
          throwIfRequested() {
            if (this.reason)
              throw this.reason;
          }
          subscribe(e2) {
            this.reason ? e2(this.reason) : this._listeners ? this._listeners.push(e2) : this._listeners = [e2];
          }
          unsubscribe(e2) {
            if (!this._listeners)
              return;
            const t2 = this._listeners.indexOf(e2);
            -1 !== t2 && this._listeners.splice(t2, 1);
          }
          static source() {
            let e2;
            return { token: new Ue(function(t2) {
              e2 = t2;
            }), cancel: e2 };
          }
        }
        var _e = Ue;
        const Be = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
        Object.entries(Be).forEach(([e2, t2]) => {
          Be[t2] = e2;
        });
        var Le = Be;
        const De = function t2(r2) {
          const n2 = new je(r2), o2 = e(je.prototype.request, n2);
          return U.extend(o2, je.prototype, n2, { allOwnKeys: true }), U.extend(o2, n2, null, { allOwnKeys: true }), o2.create = function(e2) {
            return t2(we(r2, e2));
          }, o2;
        }(oe);
        De.Axios = je, De.CanceledError = he, De.CancelToken = _e, De.isCancel = pe, De.VERSION = Pe, De.toFormData = H, De.AxiosError = _, De.Cancel = De.CanceledError, De.all = function(e2) {
          return Promise.all(e2);
        }, De.spread = function(e2) {
          return function(t2) {
            return e2.apply(null, t2);
          };
        }, De.isAxiosError = function(e2) {
          return U.isObject(e2) && true === e2.isAxiosError;
        }, De.mergeConfig = we, De.AxiosHeaders = de, De.formToJSON = (e2) => re(U.isHTMLForm(e2) ? new FormData(e2) : e2), De.getAdapter = Oe, De.HttpStatusCode = Le, De.default = De;
        let Fe = function(e2) {
          return e2.SIGNATURE = "http://adlnet.gov/expapi/attachments/signature", e2.CERTIFICATE_OF_COMPLETION = "http://id.tincanapi.com/attachment/certificate-of-completion", e2.CONTRACT = "http://id.tincanapi.com/attachment/contract", e2.SUPPORTING_MEDIA = "http://id.tincanapi.com/attachment/supporting_media", e2;
        }({}), ke = function(e2) {
          return e2.ABOUT = "about", e2.AGENTS = "agents", e2.ACTIVITIES = "activities", e2.ACTIVITY_PROFILE = "activities/profile", e2.STATE = "activities/state", e2.AGENT_PROFILE = "agents/profile", e2.STATEMENT = "statements", e2;
        }({});
        class Me {
          static INITIALIZED = { id: "http://adlnet.gov/expapi/verbs/initialized", display: { "en-US": "initialized" } };
          static TERMINATED = { id: "http://adlnet.gov/expapi/verbs/terminated", display: { "en-US": "terminated" } };
          static SUSPENDED = { id: "http://adlnet.gov/expapi/verbs/suspended", display: { "en-US": "suspended" } };
          static RESUMED = { id: "http://adlnet.gov/expapi/verbs/resumed", display: { "en-US": "resumed" } };
          static PASSED = { id: "http://adlnet.gov/expapi/verbs/passed", display: { "en-US": "passed" } };
          static FAILED = { id: "http://adlnet.gov/expapi/verbs/failed", display: { "en-US": "failed" } };
          static SCORED = { id: "http://adlnet.gov/expapi/verbs/scored", display: { "en-US": "scored" } };
          static COMPLETED = { id: "http://adlnet.gov/expapi/verbs/completed", display: { "en-US": "completed" } };
          static RESPONDED = { id: "http://adlnet.gov/expapi/verbs/responded", display: { "en-US": "responded" } };
          static COMMENTED = { id: "http://adlnet.gov/expapi/verbs/commented", display: { "en-US": "commented" } };
          static VOIDED = { id: "http://adlnet.gov/expapi/verbs/voided", display: { "en-US": "voided" } };
          static PROGRESSED = { id: "http://adlnet.gov/expapi/verbs/progressed", display: { "en-US": "progressed" } };
          static ANSWERED = { id: "http://adlnet.gov/expapi/verbs/answered", display: { "en-US": "answered" } };
        }
        const He = "\r\n";
        function $e(e2, t2) {
          const r2 = [], n2 = (Math.random() + " ").substring(2, 10) + (Math.random() + " ").substring(2, 10), o2 = { "Content-Type": `multipart/mixed; boundary=${n2}` };
          r2.push(function(e3, t3) {
            return [`--${t3}`, "Content-Type: application/json", 'Content-Disposition: form-data; name="statement"', "", JSON.stringify(e3)].join(He) + He;
          }(e2, n2));
          const s2 = Array.isArray(e2) ? e2.reduce((e3, t3) => e3.concat(t3.attachments), []) : e2.attachments;
          return t2.forEach((e3, t3) => {
            const o3 = s2[t3];
            r2.push(function(e4, t4) {
              return [`--${t4}`, `Content-Type: ${e4.contentType}`, "Content-Transfer-Encoding: binary", `X-Experience-API-Hash: ${e4.sha2}`].join(He) + He + He;
            }(o3, n2)), r2.push(e3);
          }), r2.push(`${He}--${n2}--${He}`), { header: o2, blob: new Blob(r2) };
        }
        function ze(e2) {
          const t2 = {};
          if (-1 === e2.indexOf("?"))
            return t2;
          let r2 = e2.substring(e2.indexOf("?"));
          if (r2 = r2.split("#").shift(), !r2)
            return t2;
          return new URLSearchParams(r2).forEach((e3, r3) => {
            try {
              t2[r3] = JSON.parse(e3);
            } catch {
              t2[r3] = e3;
            }
            var n2;
            "actor" === r3 && (t2.actor = (n2 = t2.actor, ["name", "mbox", "account"].forEach((e4) => {
              Array.isArray(n2[e4]) && (n2[e4] = "account" === e4 ? { ...!!n2.account[0].accountServiceHomePage && { homePage: n2.account[0].accountServiceHomePage }, ...!!n2.account[0].accountName && { name: n2.account[0].accountName } } : n2[e4][0]);
            }), n2));
          }), t2;
        }
        const Ve = 6e4, Je = 36e5, Ge = 864e5;
        function We(e2, t2) {
          const r2 = t2.getTime() - e2.getTime();
          if (r2 <= 0)
            return "PT0S";
          const n2 = Math.floor(r2 / Ge), o2 = r2 % Ge, s2 = Math.floor(o2 / Je), i2 = o2 % Je, a2 = Math.floor(i2 / Ve), c2 = i2 % Ve / 1e3;
          return `P${n2 ? n2 + "D" : ""}T${s2 ? s2 + "H" : ""}${a2 ? a2 + "M" : ""}${c2 ? c2 + "S" : ""}`;
        }
        function Ke() {
          if ("undefined" == typeof location)
            return Promise.reject(new Error("Environment does not support location.search"));
          const e2 = ze(location.search);
          if (!e2.xAPILaunchService)
            return Promise.reject(new Error("xAPILaunchService parameter not found in URL."));
          const t2 = new URL(e2.xAPILaunchService);
          return t2.pathname += `launch/${e2.xAPILaunchKey}`, De.request({ method: "POST", url: t2.toString() }).then((e3) => e3.data);
        }
        function Xe() {
          if ("undefined" == typeof location)
            throw new Error("Environment does not support location.search");
          return ze(location.search);
        }
        function Ye(e2, t2) {
          const r2 = `${e2}:${t2}`;
          if ("undefined" != typeof window && window.btoa)
            return `Basic ${btoa(r2)}`;
          if ("undefined" != typeof Buffer)
            return `Basic ${Buffer.from(r2, "binary").toString("base64")}`;
          throw new Error("Environment does not support base64 conversion.");
        }
        class Qe {
          static default = Qe;
          static AttachmentUsages = Fe;
          static Verbs = Me;
          static calculateISO8601Duration = We;
          static getSearchQueryParamsAsObject = ze;
          static getXAPILaunchData = Ke;
          static getTinCanLaunchData = Xe;
          static toBasicAuth = Ye;
          constructor(e2) {
            const t2 = e2.version || "1.0.3";
            var r2;
            this.endpoint = (r2 = e2.endpoint).endsWith("/") ? r2 : `${r2}/`, this.headers = { "X-Experience-API-Version": t2, "Content-Type": "application/json", Authorization: e2.auth ? e2.auth : Ye("", "") };
          }
          getAxios() {
            return De;
          }
          requestResource(e2) {
            var t2;
            const r2 = Object.assign({}, e2.queryParams);
            null !== (t2 = e2.requestOptions) && void 0 !== t2 && t2.useCacheBuster && (r2.cachebuster = (/* @__PURE__ */ new Date()).getTime().toString());
            const n2 = this.generateURL(e2.resource, r2);
            return this.requestURL(n2, e2.requestConfig);
          }
          requestURL(e2, t2) {
            return De.request({ method: (null == t2 ? void 0 : t2.method) || "GET", url: e2, headers: { ...this.headers, ...null == t2 ? void 0 : t2.headers }, data: null == t2 ? void 0 : t2.data }).then((e3) => {
              const t3 = e3.headers["content-type"];
              return e3.data && t3 && -1 !== t3.indexOf("multipart/mixed") && (e3.data = function(e4) {
                const t4 = e4.trim().split(He)[0].trim(), r2 = e4.split(t4).map((e5) => e5.trim()).filter((e5) => "" !== e5 && "--" !== e5), n2 = [];
                for (let e5 = 0; e5 < r2.length; e5++) {
                  const t5 = {}, o2 = r2[e5].split(He);
                  for (let e6 = 0; e6 < o2.length - 2; e6++) {
                    const r3 = o2[e6].split(":");
                    t5[r3[0]] = r3[1];
                  }
                  let s2 = o2[o2.length - 1];
                  t5["Content-Type"].indexOf("application/json") > -1 && (s2 = JSON.parse(s2)), n2.push(s2);
                }
                return n2;
              }(e3.data)), e3;
            });
          }
          generateURL(e2, t2) {
            const r2 = Object.keys(t2).map((e3) => {
              let r3 = "agent" === e3 ? JSON.stringify(t2[e3]) : t2[e3];
              return r3 = encodeURIComponent(r3), `${e3}=${r3}`;
            }).join("&");
            return `${this.endpoint}${e2}${r2 ? "?" + r2 : ""}`;
          }
        }
        return Qe.prototype.getAbout = function(e2) {
          return this.requestResource({ resource: ke.ABOUT, requestOptions: { useCacheBuster: null == e2 ? void 0 : e2.useCacheBuster } });
        }, Qe.prototype.getActivity = function(e2) {
          return this.requestResource({ resource: ke.ACTIVITIES, queryParams: { activityId: e2.activityId }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.getAgent = function(e2) {
          return this.requestResource({ resource: ke.AGENTS, queryParams: { agent: e2.agent }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.createActivityProfile = function(e2) {
          const t2 = {};
          return e2.etag && (t2[e2.matchHeader] = e2.etag), this.requestResource({ resource: ke.ACTIVITY_PROFILE, queryParams: { activityId: e2.activityId, profileId: e2.profileId }, requestConfig: { method: "POST", data: e2.profile, headers: t2 } });
        }, Qe.prototype.setActivityProfile = function(e2) {
          const t2 = {};
          return t2[e2.matchHeader] = e2.etag, e2.contentType && (t2["Content-Type"] = e2.contentType), this.requestResource({ resource: ke.ACTIVITY_PROFILE, queryParams: { activityId: e2.activityId, profileId: e2.profileId }, requestConfig: { method: "PUT", data: e2.profile, headers: t2 } });
        }, Qe.prototype.getActivityProfiles = function(e2) {
          return this.requestResource({ resource: ke.ACTIVITY_PROFILE, queryParams: { activityId: e2.activityId, ...!!e2.since && { since: e2.since } }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.getActivityProfile = function(e2) {
          return this.requestResource({ resource: ke.ACTIVITY_PROFILE, queryParams: { activityId: e2.activityId, profileId: e2.profileId }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.deleteActivityProfile = function(e2) {
          const t2 = {};
          return e2.etag && (t2["If-Match"] = e2.etag), this.requestResource({ resource: ke.ACTIVITY_PROFILE, queryParams: { activityId: e2.activityId, profileId: e2.profileId }, requestConfig: { method: "DELETE", headers: t2 } });
        }, Qe.prototype.createAgentProfile = function(e2) {
          const t2 = {};
          return e2.etag && (t2[e2.matchHeader] = e2.etag), this.requestResource({ resource: ke.AGENT_PROFILE, queryParams: { agent: e2.agent, profileId: e2.profileId }, requestConfig: { method: "POST", data: e2.profile, headers: t2 } });
        }, Qe.prototype.setAgentProfile = function(e2) {
          const t2 = {};
          return t2[e2.matchHeader] = e2.etag, e2.contentType && (t2["Content-Type"] = e2.contentType), this.requestResource({ resource: ke.AGENT_PROFILE, queryParams: { agent: e2.agent, profileId: e2.profileId }, requestConfig: { method: "PUT", data: e2.profile, headers: t2 } });
        }, Qe.prototype.getAgentProfiles = function(e2) {
          return this.requestResource({ resource: ke.AGENT_PROFILE, queryParams: { agent: e2.agent, ...!!e2.since && { since: e2.since } }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.getAgentProfile = function(e2) {
          return this.requestResource({ resource: ke.AGENT_PROFILE, queryParams: { agent: e2.agent, profileId: e2.profileId }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.deleteAgentProfile = function(e2) {
          const t2 = {};
          return e2.etag && (t2["If-Match"] = e2.etag), this.requestResource({ resource: ke.AGENT_PROFILE, queryParams: { agent: e2.agent, profileId: e2.profileId }, requestConfig: { method: "DELETE", headers: t2 } });
        }, Qe.prototype.createState = function(e2) {
          const t2 = {};
          return e2.etag && e2.matchHeader && (t2[e2.matchHeader] = e2.etag), this.requestResource({ resource: ke.STATE, queryParams: { agent: e2.agent, activityId: e2.activityId, stateId: e2.stateId, ...!!e2.registration && { registration: e2.registration } }, requestConfig: { method: "POST", data: e2.state, headers: t2 } });
        }, Qe.prototype.setState = function(e2) {
          const t2 = {};
          return e2.etag && e2.matchHeader && (t2[e2.matchHeader] = e2.etag), e2.contentType && (t2["Content-Type"] = e2.contentType), this.requestResource({ resource: ke.STATE, queryParams: { agent: e2.agent, activityId: e2.activityId, stateId: e2.stateId, ...!!e2.registration && { registration: e2.registration } }, requestConfig: { method: "PUT", data: e2.state, headers: t2 } });
        }, Qe.prototype.getStates = function(e2) {
          return this.requestResource({ resource: ke.STATE, queryParams: { agent: e2.agent, activityId: e2.activityId, ...!!e2.registration && { registration: e2.registration }, ...!!e2.since && { since: e2.since } }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.getState = function(e2) {
          return this.requestResource({ resource: ke.STATE, queryParams: { agent: e2.agent, activityId: e2.activityId, stateId: e2.stateId, ...!!e2.registration && { registration: e2.registration } }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.deleteState = function(e2) {
          const t2 = {};
          return e2.etag && (t2["If-Match"] = e2.etag), this.requestResource({ resource: ke.STATE, queryParams: { agent: e2.agent, activityId: e2.activityId, stateId: e2.stateId, ...!!e2.registration && { registration: e2.registration } }, requestConfig: { method: "DELETE", headers: t2 } });
        }, Qe.prototype.deleteStates = function(e2) {
          const t2 = {};
          return e2.etag && (t2["If-Match"] = e2.etag), this.requestResource({ resource: ke.STATE, queryParams: { agent: e2.agent, activityId: e2.activityId, ...!!e2.registration && { registration: e2.registration } }, requestConfig: { method: "DELETE", headers: t2 } });
        }, Qe.prototype.getStatement = function(e2) {
          return this.requestResource({ resource: ke.STATEMENT, queryParams: { statementId: e2.statementId, ...!!e2.attachments && { attachments: e2.attachments }, ...!!e2.format && { format: e2.format } }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.getVoidedStatement = function(e2) {
          return this.requestResource({ resource: ke.STATEMENT, queryParams: { voidedStatementId: e2.voidedStatementId, ...!!e2.attachments && { attachments: e2.attachments }, ...!!e2.format && { format: e2.format } }, requestOptions: { useCacheBuster: e2.useCacheBuster } });
        }, Qe.prototype.getStatements = function(e2) {
          return this.requestResource({ resource: ke.STATEMENT, queryParams: { ...!(null == e2 || !e2.activity) && { activity: e2.activity }, ...!(null == e2 || !e2.agent) && { agent: e2.agent }, ...!(null == e2 || !e2.ascending) && { ascending: e2.ascending }, ...!(null == e2 || !e2.attachments) && { attachments: e2.attachments }, ...!(null == e2 || !e2.format) && { format: e2.format }, ...!(null == e2 || !e2.limit) && { limit: e2.limit }, ...!(null == e2 || !e2.registration) && { registration: e2.registration }, ...!(null == e2 || !e2.related_activities) && { related_activities: e2.related_activities }, ...!(null == e2 || !e2.related_agents) && { related_agents: e2.related_agents }, ...!(null == e2 || !e2.since) && { since: e2.since }, ...!(null == e2 || !e2.until) && { until: e2.until }, ...!(null == e2 || !e2.verb) && { verb: e2.verb } }, requestOptions: { useCacheBuster: null == e2 ? void 0 : e2.useCacheBuster } });
        }, Qe.prototype.getMoreStatements = function(e2) {
          const t2 = new URL(this.endpoint), r2 = `${t2.protocol}//${t2.host}${e2.more}`;
          return this.requestURL(r2);
        }, Qe.prototype.sendStatement = function(e2) {
          var t2;
          if (null === (t2 = e2.attachments) || void 0 === t2 ? void 0 : t2.length) {
            const t3 = $e(e2.statement, e2.attachments);
            return this.requestResource({ resource: ke.STATEMENT, requestConfig: { method: "POST", headers: t3.header, data: t3.blob } });
          }
          return this.requestResource({ resource: ke.STATEMENT, requestConfig: { method: "POST", data: e2.statement } });
        }, Qe.prototype.sendStatements = function(e2) {
          var t2;
          if (null === (t2 = e2.attachments) || void 0 === t2 ? void 0 : t2.length) {
            const t3 = $e(e2.statements, e2.attachments);
            return this.requestResource({ resource: ke.STATEMENT, requestConfig: { method: "POST", headers: t3.header, data: t3.blob } });
          }
          return this.requestResource({ resource: ke.STATEMENT, requestConfig: { method: "POST", data: e2.statements } });
        }, Qe.prototype.voidStatement = function(e2) {
          const t2 = { actor: e2.actor, verb: Me.VOIDED, object: { objectType: "StatementRef", id: e2.statementId } };
          return this.sendStatement({ statement: t2 });
        }, Qe.prototype.voidStatements = function(e2) {
          const t2 = e2.statementIds.map((t3) => ({ actor: e2.actor, verb: Me.VOIDED, object: { objectType: "StatementRef", id: t3 } }));
          return this.sendStatements({ statements: t2 });
        }, Qe;
      });
    }
  });

  // src/module2/lesson1.ts
  init_live_reload();

  // src/utils/xapiUtiils.ts
  init_live_reload();
  var import_xapi = __toESM(require_XAPI_umd(), 1);

  // src/utils/attributes.ts
  init_live_reload();

  // src/utils/getModuleLessonKey.ts
  init_live_reload();
  var getModuleLessonKey = () => {
    const url = new URL(window.location.href);
    const pathname = url.pathname.substring(1);
    return pathname;
  };

  // src/utils/initialState.ts
  init_live_reload();
  var initialState = {
    content: {
      "module-1-lesson-1": {
        completed: false,
        started: false
      },
      "module-1-lesson-2": {
        completed: false,
        started: false
      },
      "module-2-lesson-1": {
        completed: false,
        started: false
      }
    }
  };

  // src/utils/xapiUtiils.ts
  var xapi;
  var agent;
  var activityId = "https://example.com/activities/test-activity4";
  var stateId = `${activityId}/states/myStateId4`;
  var initializeXAPI = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get("appId");
    const secretKey = urlParams.get("key");
    if (!appId || !secretKey) {
      console.error("Missing appId or secretKey query param");
      alert("Missing appId or secretKey query param");
      return;
    }
    const endpoint = `https://cloud.scorm.com/tc/${appId}`;
    const username = appId;
    const password = secretKey;
    const auth = import_xapi.default.toBasicAuth(username, password);
    xapi = new import_xapi.default({
      endpoint,
      auth
    });
    const about = await xapi.getAbout();
    console.log("xapi initialized");
    console.log({ about });
    await initializeState();
  };
  var initializeState = async () => {
    console.log("initializeState");
    agent = {
      objectType: "Agent",
      name: "<name>",
      mbox: "mailto:testagent2@test.com"
    };
    try {
      const retrievedState = await xapi.getState({
        agent,
        activityId,
        stateId
      });
      if (retrievedState.data) {
        console.log("state already exists");
        console.log({ retrievedState });
        return;
      }
    } catch (error) {
      console.log("Error retrieving state:", error);
      const err = error;
      if (err.response && err.response.status === 404) {
        console.log("State not found, proceeding to create a new state");
      } else {
        console.error("Error retrieving state:", error);
        return;
      }
    }
    try {
      const createdState = await xapi.createState({
        agent,
        activityId,
        stateId,
        state: { ...initialState }
      });
      console.log("state initialized");
      console.log({ createdState });
    } catch (error) {
      console.error("Error creating state:", error);
    }
  };
  var sendStatement = async (statement) => {
    try {
      const response = await xapi.sendStatement({ statement });
      console.log("Statement sent successfully:", response);
    } catch (error) {
      console.error("Error sending statement:", error);
    }
  };
  var startLesson = async () => {
    console.log("startLesson");
    const lessonKey = getModuleLessonKey();
    const retrievedState = await xapi.getState({
      agent,
      activityId,
      stateId
    });
    console.log({ retrievedState });
    const started = retrievedState.data.content[lessonKey]?.started;
    console.log({ started });
    if (started) {
      console.log("Lesson already started");
      return;
    }
    retrievedState.data.content[lessonKey].started = true;
    try {
      await xapi.setState({
        agent,
        activityId,
        stateId,
        state: { ...retrievedState.data }
      });
      console.log("State updated successfully");
    } catch (error) {
      console.error("Error updating state:", error);
      return;
    }
    const statement = {
      actor: agent,
      verb: {
        id: "http://adlnet.gov/expapi/verbs/launched",
        display: {
          "en-US": "launched"
        }
      },
      object: {
        id: `http://example.com/activities/${lessonKey}`,
        definition: {
          name: {
            "en-US": lessonKey
          }
        }
      },
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    await sendStatement(statement);
    const newState = await xapi.getState({
      agent,
      activityId,
      stateId
    });
    console.log({ newState });
  };

  // src/module2/lesson1.ts
  document.addEventListener("DOMContentLoaded", init);
  async function init() {
    initializeXAPI();
    await startLesson();
  }
})();
//# sourceMappingURL=lesson1.js.map
