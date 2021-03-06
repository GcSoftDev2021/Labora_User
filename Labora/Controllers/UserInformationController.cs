using Labora.Data.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class UserInformationController : Controller
    {
        private readonly DataUserInformation _dataUserInformation = new DataUserInformation();
        // GET: UserInformation
        public ActionResult PersonalInformation()
        {
            return View();
        }

        public ActionResult PersonalInformation_Edit()
        {
            return View();
        }

        public ActionResult FamilyInformation() 
        {
            return View(); 
        }

        public ActionResult FamilyInformation_Edit()
        {
            return View();
        }

        public ActionResult WorkExperience()
        {
            return View();
        }

        public ActionResult WorkExperience_Edit()
        {
            return View();
        }

        public JsonResult SearchInformationUser(string UserKey)
        {
            var Result = _dataUserInformation.SearchInformationUser(UserKey);
            return Json(Result);
        }
    }
}