using Labora.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Labora.Models.UserInformation;

namespace Labora.Data.DataEntities
{
    public class DataUserInformation
    {
        readonly LaboraEntities _conection = new LaboraEntities();
        public List<SearchInformationUser> SearchInformationUser(string UserKey)
        {
            try
            {
                return _conection.Database.SqlQuery<SearchInformationUser>("SP_SearchInformationUser @UserKey",
                    new SqlParameter("@UserKey", UserKey)).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
