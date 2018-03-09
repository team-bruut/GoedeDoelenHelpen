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
        public static Func<a, Func<b, Func<c, Func<d, Func<e,f>>>>> Curry<a, b, c, d, e, f>(this Func<a, b, c, d, e,f> fun) => v1 => v2 => v3 => v4 => v5 => fun(v1, v2, v3, v4, v5);
    }
}
