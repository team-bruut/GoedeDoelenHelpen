using NUnit.Framework;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium;

namespace NUnit.Selenium
{
    [TestFixture]
    public class HomePage
    {
        [Test]
        public void VisitHove()
        {
            Helper.Driver.Url = Helper.BaseURL; ;
            Helper.Driver.Navigate();
        }


        [TestCase("Meld je nu aan!", null, ExpectedResult = "https://localhost:44333/evenement/register")]
        [TestCase("inloggen", "e2e-inloggen-button", ExpectedResult = "https://localhost:44333/user/login")]
        [TestCase("Evenement", null, ExpectedResult = "https://localhost:44333/evenement/user/eventname")]
        public string NavigateTo(string linkText, string classSelector)
        {
            Helper.Driver.Url = Helper.BaseURL; ;
            Helper.Driver.Navigate();
            var wait = new WebDriverWait(Helper.Driver, TimeSpan.FromMilliseconds(5000));
            if (!string.IsNullOrWhiteSpace(classSelector))
            {
                wait.Until<IWebElement>(d => d.FindElement(By.ClassName(classSelector))).Click();
            }
            else
            {
                wait.Until<IWebElement>(d => d.FindElement(By.PartialLinkText(linkText))).Click();
            }

            return Helper.Driver.Url;
        }
    }
}
