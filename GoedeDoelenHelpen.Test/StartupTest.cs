using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Extensions.Configuration;

namespace GoedeDoelenHelpen.Test
{
    [TestClass]
    public class StartupTest
    {
        //private Startup startup;
        private IConfiguration config;

        public StartupTest()
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
            catch
            {

            }
            Assert.IsTrue(build == true);
        }

        //[TestMethod]
        //public void DummyTestGetTarget()
        //{
        //    Assert.IsTrue(dummy.getTarget() == 1);
        //}
        //
        //[TestMethod]
        //public void DummyTestsetTarget()
        //{
        //    dummy.setTarget(5);
        //    Assert.IsTrue(dummy.getTarget() == 5);
        //}
    }
}
