using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Protractor;
using System;

namespace NUnit.Selenium
{
    [SetUpFixture]
    public class SetupFixture
    {
        public static IWebDriver Driver { get; private set; }

        [OneTimeSetUp]
        public void OneTimeSetUp()
        {
            // TODO: Add code here that is run before
            //  all tests in the assembly are run    
            Driver = new NgWebDriver(new ChromeDriver());
        }

        [OneTimeTearDown]
        public void OneTimeTearDown()
        {
            // TODO: Add code here that is run after
            //  all tests in the assembly have been run
            Driver.Close();
        }
    }
}