using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnit.Selenium
{
    [TestFixture]
    public class Register
    {
        [Test]
        public void FirstStep()
        {
            Helper.Driver.Url = Helper.BaseURL + "/evenement/register" ;
            Helper.Driver.Navigate();
            var wait = new WebDriverWait(Helper.Driver, TimeSpan.FromMilliseconds(5000));
            wait.Until<IWebElement>(d => d.FindElement(By.ClassName("e2e-firstname-input"))).SendKeys("Koen");
            wait.Until<IWebElement>(d => d.FindElement(By.ClassName("e2e-lastname-input"))).SendKeys("de Vries");
            wait.Until<IWebElement>(d => d.FindElement(By.ClassName("e2e-email-input"))).SendKeys("Koen@koen.nl");

            wait.Until<IWebElement>(d => d.FindElement(By.ClassName("e2e-volgende-button"))).Click();

            Assert.True(wait.Until<bool>(d => d.FindElements(By.TagName("label")).Any(el => el.Text == "Welk goed doel ga je helpen, Koen?")));
        }
    }
}
