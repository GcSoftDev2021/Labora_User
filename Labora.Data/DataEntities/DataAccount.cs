using Labora.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Labora.Data.DataEntities
{
    public class DataAccount
    {
        readonly LaboraEntities _conection = new LaboraEntities();
        public string UserRegister(string Email, string Password)
        {
            string Result = String.Empty;
            try
            {
                var varEmail = new SqlParameter("@Email", SqlDbType.VarChar) { Value = Email };
                var varPassword = new SqlParameter("@Password", SqlDbType.VarChar) { Value = Password };
                var varResult = new SqlParameter("@Result", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 255 };

                _conection.Database.ExecuteSqlCommand("SP_Register @Email, @Password, @Result Output", varEmail, varPassword, varResult);
                Result = Convert.ToString(varResult.Value);
            }
            catch (Exception ex)
            {
                Result = "Error__" + ex.Message;
            }
            return Result;
        }

    }
}
