using Labora.Data.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class AccountController : Controller
    {
        readonly DataAccount _dataAccount = new DataAccount();
        // GET: Account
        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }

        public ActionResult RecoverPassword()
        {
            return View();
        }

        public JsonResult UserRegister(string Email, string Password)
        {
            string Result = _dataAccount.UserRegister(Email, Password);
            return Json(Result);
        }
    }
}