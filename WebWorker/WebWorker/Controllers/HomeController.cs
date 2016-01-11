using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace WebWorker.Controllers
{
    
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LongProcess(string input)
        {
            Thread.Sleep(5000); // Simulating long process

            return Json(input, JsonRequestBehavior.AllowGet);
        }
    }
}