function ListDocumentType() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/DocumentType/ListDocumentType',
        data: {},
        success: function (result) {
            var counter = 0;
            if (result.length === 0) {
                $("#SelectDocumentType").append('<option value="">No hay Datos</option>');
            } else {
                $("#SelectDocumentType").empty().append('<option value="-1">Seleccione Documento</option>');
                $.each(result, function () {
                    $("#SelectDocumentType").append('<option value="' + result[counter].Id + '">' + result[counter].Name + '</option>');
                    counter++;
                });
            }
        },
    });
}