using Labora.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Labora.Models.CivilStatus;

namespace Labora.Data.DataEntities
{
    public class DataCivilStatus
    {
        readonly LaboraEntities _conection = new LaboraEntities();
        public List<ListCivilStatus> ListCivilStatus()
        {
            try
            {
                return _conection.Database.SqlQuery<ListCivilStatus>("SP_ListCivilStatus").ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
