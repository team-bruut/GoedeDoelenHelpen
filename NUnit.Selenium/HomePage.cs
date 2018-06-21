using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    }
}
