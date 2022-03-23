using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class UserInformationController : Controller
    {
        // GET: UserInformation
        public ActionResult PersonalInformation()
        {
            return View();
        }
    }
}