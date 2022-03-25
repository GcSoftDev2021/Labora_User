using Labora.Data.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class DocumentTypeController : Controller
    {
        private readonly DataDocumentType _dataDocumentType = new DataDocumentType();

        public JsonResult ListDocumentType()
        {
            var Result = _dataDocumentType.ListDocumentType();
            return Json(Result);
        }
    }
}