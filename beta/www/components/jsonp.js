/**
 * Created by macquest on 1/10/15.
 */
(function (e, t) {
    var n = function (t, n, r, i) {
        t = t || "";
        n = n || {};
        r = r || "";
        i = i || function () {
        };
        var s = function (e) {
            var t = [];
            for (var n in e) {
                if (e.hasOwnProperty(n)) {
                    t.push(n)
                }
            }
            return t
        };
        if (typeof n == "object") {
            var o = "";
            var u = s(n);
            for (var a = 0; a < u.length; a++) {
                o += encodeURIComponent(u[a]) + "=" + encodeURIComponent(n[u[a]]);
                if (a != u.length - 1) {
                    o += "&"
                }
            }
            t += "?" + o
        } else if (typeof n == "function") {
            r = n;
            i = r
        }
        if (typeof r == "function") {
            i = r;
            r = "callback"
        }
        if (!Date.now) {
            Date.now = function () {
                return (new Date).getTime()
            }
        }
        var f = Date.now();
        var l = "jsonp" + Math.round(f + Math.random() * 1000001);
        e[l] = function (t) {
            i(t);
            delete e[l]
        };
        if (t.indexOf("?") === -1) {
            t = t + "?"
        } else {
            t = t + "&"
        }
        var c = document.createElement("script");
        c.setAttribute("src", t + r + "=" + l);
        document.getElementsByTagName("head")[0].appendChild(c)
    };
    e.JSONP = n
})(window)