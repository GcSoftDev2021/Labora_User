function ListCivilStatus() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/CivilStatus/ListCivilStatus',
        data: {},
        success: function (result) {
            var counter = 0;
            if (result.length === 0) {
                $("#SelectCivilStatus").append('<option value="">No hay Datos</option>');
            } else {
                $("#SelectCivilStatus").empty().append('<option value="-1">Seleccione Estado Civil</option>');
                $.each(result, function () {
                    $("#SelectCivilStatus").append('<option value="' + result[counter].Id + '">' + result[counter].Name + '</option>');
                    counter++;
                });
            }
        },
    });
}