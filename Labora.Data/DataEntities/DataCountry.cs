using Labora.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Labora.Models.Country;

namespace Labora.Data.DataEntities
{
    public class DataCountry
    {
        readonly LaboraEntities _conection = new LaboraEntities();
        public List<ListCountry> ListCountry()
        {
            try
            {
                return _conection.Database.SqlQuery<ListCountry>("SP_ListCountry").ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
