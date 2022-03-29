function SearchInformationUser() {

    let UserToken = Cookies.get('UserToken');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/UserInformation/SearchInformationUser',
        data: { UserKey: UserToken },
        success: function (Result) {
            $("#UserImage").empty().append('<img src="' + Result[0].UserImage + '" style="width:150px" />');
            $('#FirstName').text(Result[0].FirstName);
            $('#LastName').text(Result[0].LastName);
            $('#DocumentType').text(Result[0].DocumentType);
            $('#IdentificationNumber').text(Result[0].IdentificationNumber);
            $('#Email').text(Result[0].Email);
            $('#Phone').text(Result[0].Phone);
            $('#PhoneAdditional').text(Result[0].PhoneAdditional);
            $('#BirthDate').text(Result[0].BirthDate);
            $('#BirthCity').text(Result[0].BirthCity);
            $('#Nationality').text(Result[0].Nationality);
            $('#CivilStatus').text(Result[0].CivilStatus);
            $('#ResidenceAdress').text(Result[0].ResidenceAdress);
            $('#City').text(Result[0].City);
        },
    });
}