using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnit.Selenium
{
    public static class Helper
    {
        public static IWebDriver Driver => SetupFixture.Driver;
        public static string BaseURL => "https://localhost:44333";
    }
}
