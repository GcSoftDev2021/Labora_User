using Labora.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Labora.Models.City;

namespace Labora.Data
{
    public class DataCity
    {
        readonly LaboraEntities _conection = new LaboraEntities();
        public List<ListCity> ListCity()
        {
            try
            {
                return _conection.Database.SqlQuery<ListCity>("SP_ListCity").ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
