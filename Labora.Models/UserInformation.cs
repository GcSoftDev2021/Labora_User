using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Labora.Models
{
    public class UserInformation
    {
        public class SearchInformationUser
        {
            public string UserImage { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string DocumentType { get; set; }
            public string IdentificationNumber { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string PhoneAdditional { get; set; }
            public string BirthDate { get; set; }
            public string BirthCity { get; set; }
            public string Nationality { get; set; }
            public string CivilStatus { get; set; }
            public string ResidenceAdress { get; set; }
            public string City { get; set; }

        }
    }
}
