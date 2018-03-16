using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Extensions.Configuration;
using System;

namespace GoedeDoelenHelpen.Test
{
    [TestClass]
    public class StartupTest
    {
        //private Startup startup;
        private IConfiguration config;

        [TestInitialize]
        public void StartupTestInitialize()
        {
            config = new ConfigurationBuilder().Build();   
        }

        [TestMethod]
        public void StartupBuilds()
        {
            bool build = false;
            try
            {
                Startup startup = new Startup(config);
                build = true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            Assert.IsTrue(build == true);
        }
    }
}
