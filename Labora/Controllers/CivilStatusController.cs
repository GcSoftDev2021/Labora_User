using Labora.Data.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class CivilStatusController : Controller
    {
        private readonly DataCivilStatus _dataCivilStatus = new DataCivilStatus();

        public JsonResult ListCivilStatus()
        {
            var Result = _dataCivilStatus.ListCivilStatus();
            return Json(Result);
        }
    }
}