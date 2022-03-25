using Labora.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class CityController : Controller
    {
        private readonly DataCity _dataCity = new DataCity();

        public JsonResult ListCity()
        {
            var Result = _dataCity.ListCity();
            return Json(Result);
        }
    }
}