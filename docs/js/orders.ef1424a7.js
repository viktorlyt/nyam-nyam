!(function () {
  var e = {
      7886: function (e, t, n) {
        "use strict";
        n(1249),
          n(7327),
          n(1539),
          n(2222),
          n(9600),
          n(6699),
          n(4747),
          n(7941),
          n(6992),
          n(8783),
          n(4129),
          n(3948);
        var r =
            /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,
          i =
            /\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,
          a = /[^-+\dA-Z]/g;
        function o(e, t, n, i) {
          if (
            (1 !== arguments.length ||
              "string" != typeof e ||
              /\d/.test(e) ||
              ((t = e), (e = void 0)),
            (e = e || 0 === e ? e : new Date()) instanceof Date ||
              (e = new Date(e)),
            isNaN(e))
          )
            throw TypeError("Invalid date");
          var a = (t = String(u[t] || t || u.default)).slice(0, 4);
          ("UTC:" !== a && "GMT:" !== a) ||
            ((t = t.slice(4)), (n = !0), "GMT:" === a && (i = !0));
          var o = function () {
              return n ? "getUTC" : "get";
            },
            h = function () {
              return e[o() + "Date"]();
            },
            y = function () {
              return e[o() + "Day"]();
            },
            v = function () {
              return e[o() + "Month"]();
            },
            g = function () {
              return e[o() + "FullYear"]();
            },
            p = function () {
              return e[o() + "Hours"]();
            },
            T = function () {
              return e[o() + "Minutes"]();
            },
            M = function () {
              return e[o() + "Seconds"]();
            },
            D = function () {
              return e[o() + "Milliseconds"]();
            },
            w = function () {
              return n ? 0 : e.getTimezoneOffset();
            },
            b = function () {
              return l(e);
            },
            _ = function () {
              return m(e);
            },
            k = {
              d: function () {
                return h();
              },
              dd: function () {
                return c(h());
              },
              ddd: function () {
                return s.dayNames[y()];
              },
              DDD: function () {
                return d({
                  y: g(),
                  m: v(),
                  d: h(),
                  _: o(),
                  dayName: s.dayNames[y()],
                  short: !0,
                });
              },
              dddd: function () {
                return s.dayNames[y() + 7];
              },
              DDDD: function () {
                return d({
                  y: g(),
                  m: v(),
                  d: h(),
                  _: o(),
                  dayName: s.dayNames[y() + 7],
                });
              },
              m: function () {
                return v() + 1;
              },
              mm: function () {
                return c(v() + 1);
              },
              mmm: function () {
                return s.monthNames[v()];
              },
              mmmm: function () {
                return s.monthNames[v() + 12];
              },
              yy: function () {
                return String(g()).slice(2);
              },
              yyyy: function () {
                return c(g(), 4);
              },
              h: function () {
                return p() % 12 || 12;
              },
              hh: function () {
                return c(p() % 12 || 12);
              },
              H: function () {
                return p();
              },
              HH: function () {
                return c(p());
              },
              M: function () {
                return T();
              },
              MM: function () {
                return c(T());
              },
              s: function () {
                return M();
              },
              ss: function () {
                return c(M());
              },
              l: function () {
                return c(D(), 3);
              },
              L: function () {
                return c(Math.floor(D() / 10));
              },
              t: function () {
                return p() < 12 ? s.timeNames[0] : s.timeNames[1];
              },
              tt: function () {
                return p() < 12 ? s.timeNames[2] : s.timeNames[3];
              },
              T: function () {
                return p() < 12 ? s.timeNames[4] : s.timeNames[5];
              },
              TT: function () {
                return p() < 12 ? s.timeNames[6] : s.timeNames[7];
              },
              Z: function () {
                return i ? "GMT" : n ? "UTC" : f(e);
              },
              o: function () {
                return (
                  (w() > 0 ? "-" : "+") +
                  c(
                    100 * Math.floor(Math.abs(w()) / 60) + (Math.abs(w()) % 60),
                    4
                  )
                );
              },
              p: function () {
                return (
                  (w() > 0 ? "-" : "+") +
                  c(Math.floor(Math.abs(w()) / 60), 2) +
                  ":" +
                  c(Math.floor(Math.abs(w()) % 60), 2)
                );
              },
              S: function () {
                return ["th", "st", "nd", "rd"][
                  h() % 10 > 3
                    ? 0
                    : (((h() % 100) - (h() % 10) != 10) * h()) % 10
                ];
              },
              W: function () {
                return b();
              },
              WW: function () {
                return c(b());
              },
              N: function () {
                return _();
              },
            };
          return t.replace(r, function (e) {
            return e in k ? k[e]() : e.slice(1, e.length - 1);
          });
        }
        var u = {
            default: "ddd mmm dd yyyy HH:MM:ss",
            shortDate: "m/d/yy",
            paddedShortDate: "mm/dd/yyyy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
            expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z",
          },
          s = {
            dayNames: [
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            monthNames: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
          },
          c = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2;
            return String(e).padStart(t, "0");
          },
          d = function (e) {
            var t = e.y,
              n = e.m,
              r = e.d,
              i = e._,
              a = e.dayName,
              o = e.short,
              u = void 0 !== o && o,
              s = new Date(),
              c = new Date();
            c.setDate(c[i + "Date"]() - 1);
            var d = new Date();
            return (
              d.setDate(d[i + "Date"]() + 1),
              s[i + "FullYear"]() === t &&
              s[i + "Month"]() === n &&
              s[i + "Date"]() === r
                ? u
                  ? "Tdy"
                  : "Today"
                : c[i + "FullYear"]() === t &&
                  c[i + "Month"]() === n &&
                  c[i + "Date"]() === r
                ? u
                  ? "Ysd"
                  : "Yesterday"
                : d[i + "FullYear"]() === t &&
                  d[i + "Month"]() === n &&
                  d[i + "Date"]() === r
                ? u
                  ? "Tmw"
                  : "Tomorrow"
                : a
            );
          },
          l = function (e) {
            var t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
            t.setDate(t.getDate() - ((t.getDay() + 6) % 7) + 3);
            var n = new Date(t.getFullYear(), 0, 4);
            n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
            var r = t.getTimezoneOffset() - n.getTimezoneOffset();
            t.setHours(t.getHours() - r);
            var i = (t - n) / 6048e5;
            return 1 + Math.floor(i);
          },
          m = function (e) {
            var t = e.getDay();
            return 0 === t && (t = 7), t;
          },
          f = function (e) {
            return (String(e).match(i) || [""])
              .pop()
              .replace(a, "")
              .replace(/GMT\+0000/g, "UTC");
          };
        function h(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function y(e, t, n) {
          !(function (e, t) {
            if (t.has(e))
              throw new TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          })(e, t),
            t.set(e, n);
        }
        function v(e, t) {
          return (function (e, t) {
            return t.get ? t.get.call(e) : t.value;
          })(e, p(e, t, "get"));
        }
        function g(e, t, n) {
          return (
            (function (e, t, n) {
              if (t.set) t.set.call(e, n);
              else {
                if (!t.writable)
                  throw new TypeError(
                    "attempted to set read only private field"
                  );
                t.value = n;
              }
            })(e, p(e, t, "set"), n),
            n
          );
        }
        function p(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to " + n + " private field on non-instance"
            );
          return t.get(e);
        }
        var T = new WeakMap(),
          M = new WeakMap(),
          D = new WeakMap(),
          w = (function () {
            function e(t, n, r) {
              if (
                ((function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                y(this, T, { writable: !0, value: [] }),
                y(this, M, { writable: !0, value: void 0 }),
                y(this, D, { writable: !0, value: void 0 }),
                !["Domino’s Pizza", "McDonald’s", "KFC"].includes(t))
              )
                throw new Error("Invalid restaurant");
              if ((g(this, D, t), !Array.isArray(r)))
                throw new Error("Orders must be an array!");
              r.forEach(function (e) {
                if (
                  e.id <= 0 ||
                  e.price <= 0 ||
                  e.title.length <= 5 ||
                  e.title.length >= 30 ||
                  e.count <= 0 ||
                  4 !== Object.keys(e).length
                )
                  throw new Error("Invalid orders!");
              }),
                g(this, T, r),
                g(this, M, n);
            }
            var t, n;
            return (
              (t = e),
              (n = [
                {
                  key: "isOrderFinished",
                  get: function () {
                    return (
                      (new Date().getTime() -
                        this.getCheckoutTime().getTime()) /
                        1e3 /
                        60 >=
                      60
                    );
                  },
                },
                {
                  key: "getRestaurant",
                  value: function () {
                    return v(this, D);
                  },
                },
                {
                  key: "getCheckout",
                  value: function () {
                    return v(this, M);
                  },
                },
                {
                  key: "setCheckout",
                  value: function () {
                    return g(this, M, new Date()), v(this, M);
                  },
                },
                {
                  key: "getCheckoutTime",
                  value: function () {
                    return Math.round(
                      60 -
                        (new Date().getTime() -
                          new Date(this.getCheckout()).getTime()) /
                          1e3 /
                          60
                    );
                  },
                },
                {
                  key: "getFormattedDate",
                  value: function () {
                    return "".concat(o(new Date(v(this, M)), "mmmm dS, yyyy"));
                  },
                },
                {
                  key: "getFormattedTime",
                  value: function () {
                    return "".concat(o(new Date(v(this, M)), "hh:MM TT"));
                  },
                },
                {
                  key: "getOrders",
                  value: function () {
                    return v(this, T);
                  },
                },
                {
                  key: "setOrders",
                  value: function (e) {
                    if (!Array.isArray(e))
                      throw new Error("Orders must be an array!");
                    e.forEach(function (e) {
                      if (
                        e.id <= 0 ||
                        e.price <= 0 ||
                        e.title.length <= 5 ||
                        e.title.length >= 30 ||
                        e.count <= 0 ||
                        4 !== Object.keys(e).length
                      )
                        throw new Error("Invalid orders!");
                    }),
                      g(this, T, e);
                  },
                },
                {
                  key: "getCheckoutTimePercent",
                  value: function () {
                    return (this.getCheckoutTime() / 60) * 100;
                  },
                },
              ]) && h(t.prototype, n),
              e
            );
          })(),
          b = document.querySelector(".navigation__item--choice"),
          _ = document.querySelector(".navigation__item--orders");
        b.classList.remove("selected"), _.classList.add("selected");
        var k = (JSON.parse(localStorage.getItem("orders")) || []).map(
            function (e) {
              return new w(e.restaurant, e.checkout, e.orders);
            }
          ),
          N = k.filter(function (e) {
            return e.getCheckoutTime() > 0;
          }),
          C = k.filter(function (e) {
            return e.getCheckoutTime() <= 0;
          }),
          H = document.getElementById("coming-up"),
          S = document.getElementById("previous");
        !(function (e) {
          H.innerHTML = "";
          var t = e
            .map(function (e) {
              return (function (e) {
                return '\n  <div class="coming-up__item coming-up-item">\n    <div class="coming-up-item__header">\n      <h4 class="h4">'
                  .concat(
                    e.getRestaurant(),
                    '</h4>\n      <div class="badge badge--orange">Delivery</div>\n    </div>\n\n    <div class="coming-up-info">\n      <img src="img/icons/clock.svg" alt="">\n      <div class="coming-up-info__content">\n        <div>Order will be completed in</div>\n        <div class="coming-up-info__title">'
                  )
                  .concat(
                    e.getCheckoutTime(),
                    ' min</div>\n      </div>\n    </div>\n\n    <div class="progress-bar">\n      <div class="progress-bar__line" style="width: '
                  )
                  .concat(
                    e.getCheckoutTimePercent(),
                    '%"></div>\n      <div class="progress-bar__overlay">\n        <div class="progress-bar__item progress-bar__item--first"></div>\n        <div class="progress-bar__item progress-bar__item--sec"></div>\n        <div class="progress-bar__item progress-bar__item--third"></div>\n      </div>\n    </div>\n  </div>'
                  );
              })(e);
            })
            .join("");
          H.innerHTML = t;
        })(N),
          (function (e) {
            S.innerHTML = "";
            var t = e
              .map(function (e) {
                return (function (e) {
                  return '\n  <div class="previous__item previous-item">\n    <div class="previous-item__header">\n      <h4 class="h4">'
                    .concat(
                      e.getRestaurant(),
                      '</h4>\n      <div class="badge badge--green">Completed</div>\n    </div>\n\n    <div class="previous-item-info">\n      <div class="previous-item-info__date">'
                    )
                    .concat(
                      e.getFormattedDate(),
                      '</div>\n      <div class="previous-item-info__time">'
                    )
                    .concat(
                      e.getFormattedTime(),
                      '</div>\n    </div>\n\n    <ul class="previous-item-dishes">\n      '
                    )
                    .concat(
                      e
                        .getOrders()
                        .map(function (e) {
                          return '<li class="previous-item-dishes__item">\n          <span class="previous-item-dishes__quantity">'
                            .concat(e.count, "</span>\n          ")
                            .concat(e.title, "\n        </li>");
                        })
                        .join(""),
                      "\n    </ul>\n  </div>"
                    );
                })(e);
              })
              .join("");
            S.innerHTML = t;
          })(C);
      },
      6699: function (e, t, n) {
        "use strict";
        var r = n(2109),
          i = n(1318).includes,
          a = n(1223);
        r(
          { target: "Array", proto: !0 },
          {
            includes: function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
          a("includes");
      },
      7941: function (e, t, n) {
        var r = n(2109),
          i = n(7908),
          a = n(1956);
        r(
          {
            target: "Object",
            stat: !0,
            forced: n(7293)(function () {
              a(1);
            }),
          },
          {
            keys: function (e) {
              return a(i(e));
            },
          }
        );
      },
    },
    t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.x = function () {}),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = { 486: 0 },
        t = [[7886, 243]],
        r = function () {},
        i = function (i, a) {
          for (
            var o, u, s = a[0], c = a[1], d = a[2], l = a[3], m = 0, f = [];
            m < s.length;
            m++
          )
            (u = s[m]), n.o(e, u) && e[u] && f.push(e[u][0]), (e[u] = 0);
          for (o in c) n.o(c, o) && (n.m[o] = c[o]);
          for (d && d(n), i && i(a); f.length; ) f.shift()();
          return l && t.push.apply(t, l), r();
        },
        a = (self.webpackChunkjs_personal_projects =
          self.webpackChunkjs_personal_projects || []);
      function o() {
        for (var r, i = 0; i < t.length; i++) {
          for (var a = t[i], o = !0, u = 1; u < a.length; u++) {
            var s = a[u];
            0 !== e[s] && (o = !1);
          }
          o && (t.splice(i--, 1), (r = n((n.s = a[0]))));
        }
        return 0 === t.length && (n.x(), (n.x = function () {})), r;
      }
      a.forEach(i.bind(null, 0)), (a.push = i.bind(null, a.push.bind(a)));
      var u = n.x;
      n.x = function () {
        return (n.x = u || function () {}), (r = o)();
      };
    })(),
    n.x();
})();
//# sourceMappingURL=orders.ef1424a7.js.map
