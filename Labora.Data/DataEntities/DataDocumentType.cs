using Labora.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Labora.Models.DocumentType;

namespace Labora.Data.DataEntities
{
    public class DataDocumentType
    {
        readonly LaboraEntities _conection = new LaboraEntities();
        public List<ListDocumentType> ListDocumentType()
        {
            try
            {
                return _conection.Database.SqlQuery<ListDocumentType>("SP_ListDocumentType").ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
