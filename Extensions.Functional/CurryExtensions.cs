using System;
using System.Collections.Generic;
using System.Text;

namespace Extensions.Functional
{
    public static class CurryExtensions
    {
        public static Func<a, Func<b, c>> Curry<a, b, c>(this Func<a, b, c> f) => v1 => v2 => f(v1, v2);
        public static Func<a, Func<b, Func<c, d>>> Curry<a, b, c, d>(this Func<a, b, c, d> f) => v1 => v2 => v3 => f(v1, v2, v3);
        public static Func<a, Func<b, Func<c, Func<d, e>>>> Curry<a, b, c, d, e>(this Func<a, b, c, d, e> f) => v1 => v2 => v3 => v4 => f(v1, v2, v3, v4);
        public static Func<a, Func<b, Func<c, Func<d, Func<e, f>>>>> Curry<a, b, c, d, e, f>(this Func<a, b, c, d, e, f> fun) => v1 => v2 => v3 => v4 => v5 => fun(v1, v2, v3, v4, v5);
        public static Func<a, Func<b, Func<c, Func<d, Func<e, Func<f, g>>>>>> Curry<a, b, c, d, e, f, g>(this Func<a, b, c, d, e, f, g> fun) => v1 => v2 => v3 => v4 => v5 => v6 => fun(v1, v2, v3, v4, v5, v6);
        public static Func<a, Func<b, Func<c, Func<d, Func<e, Func<f, Func<g, h>>>>>>> Curry<a, b, c, d, e, f, g, h>(this Func<a, b, c, d, e, f, g, h> fun) => v1 => v2 => v3 => v4 => v5 => v6 => v7 => fun(v1, v2, v3, v4, v5, v6, v7);
        public static Func<a, Action<b>> Curry<a, b>(this Action<a, b> f) => v1 => v2 => f(v1, v2);
        public static Func<a, Func<b, Action<c>>> Curry<a, b, c>(this Action<a, b, c> f) => v1 => v2 => v3 => f(v1, v2, v3);
        public static Func<a, Func<b, Func<c, Action<d>>>> Curry<a, b, c, d>(this Action<a, b, c, d> f) => v1 => v2 => v3 => v4 => f(v1, v2, v3, v4);
        public static Func<a, Func<b, Func<c, Func<d, Action<e>>>>> Curry<a, b, c, d, e>(this Action<a, b, c, d, e> fun) => v1 => v2 => v3 => v4 => v5 => fun(v1, v2, v3, v4, v5);
        public static Func<a, Func<b, Func<c, Func<d, Func<e, Action<f>>>>>> Curry<a, b, c, d, e, f>(this Action<a, b, c, d, e, f> fun) => v1 => v2 => v3 => v4 => v5 => v6 => fun(v1, v2, v3, v4, v5, v6);
        public static Func<a, Func<b, Func<c, Func<d, Func<e, Func<f, Action<g>>>>>>> Curry<a, b, c, d, e, f, g>(this Action<a, b, c, d, e, f, g> fun) => v1 => v2 => v3 => v4 => v5 => v6 => v7 => fun(v1, v2, v3, v4, v5, v6, v7);

        public static Func<a, b, c> DeCurry<a, b, c>(this Func<a, Func<b, c>> f) => (v1, v2) => f(v1)(v2);
        public static Func<a, b, c, d> DeCurry<a, b, c, d>(this Func<a, Func<b, Func<c, d>>> f) => (v1, v2, v3) => f(v1)(v2)(v3);
        public static Func<a, b, c, d, e> DeCurry<a, b, c, d, e>(this Func<a, Func<b, Func<c, Func<d, e>>>> f) => (v1, v2, v3, v4) => f(v1)(v2)(v3)(v4);
        public static Func<a, b, c, d, e, f> DeCurry<a, b, c, d, e, f>(this Func<a, Func<b, Func<c, Func<d, Func<e, f>>>>> fun) => (v1, v2, v3, v4, v5) => fun(v1)(v2)(v3)(v4)(v5);
        public static Func<a, b, c, d, e, f, g> DeCurry<a, b, c, d, e, f, g>(this Func<a, Func<b, Func<c, Func<d, Func<e, Func<f, g>>>>>> fun) => (v1, v2, v3, v4, v5, v6) => fun(v1)(v2)(v3)(v4)(v5)(v6);
        public static Func<a, b, c, d, e, f, g, h> DeCurry<a, b, c, d, e, f, g, h>(this Func<a, Func<b, Func<c, Func<d, Func<e, Func<f, Func<g, h>>>>>>> fun) => (v1, v2, v3, v4, v5, v6, v7) => fun(v1)(v2)(v3)(v4)(v5)(v6)(v7);
    }
}
