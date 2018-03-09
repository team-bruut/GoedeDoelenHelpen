using System;

namespace Extensions.Functional
{
    public static class ComposeExtensions
    {
        public static Func<a, c> Compose<a, b, c>(this Func<a, b> f, Func<b, c> g) => v => g(f(v));
        public static Func<b> Compose<a, b>(this Func<a> f, Func<a, b> g) => () => g(f());
        public static Action<a> Compose<a, b>(this Func<a, b> f, Action<b> g) => v => g(f(v));
        public static Action Compose<a>(this Func<a> f, Action<a> g) => () => g(f());
    }
}
