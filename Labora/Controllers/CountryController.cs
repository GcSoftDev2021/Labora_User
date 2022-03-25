using Labora.Data.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class CountryController : Controller
    {
        private readonly DataCountry _dataCountry = new DataCountry();
       
        public JsonResult ListCountry()
        {
            var Result = _dataCountry.ListCountry();
            return Json(Result);
        }
    }
}