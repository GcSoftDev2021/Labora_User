function Login() {
    let Email = $("#Email").val();
    let Password = $("#Password").val();
    if (Email == "" || Email == null || Email == undefined) {
        document.getElementById('Email').focus();
        Swal.fire('Mensaje del Sistema', 'Por favor ingrese el Correo Electronico', 'warning');
    } else if (Password == "" || Password == null || Password == undefined) {
        document.getElementById('Password').focus();
        Swal.fire('Mensaje del Sistema', 'Por favor ingrese la Contraseña', 'warning');
    } else {
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(Email)) {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '/Account/UserLogin',
                data: {
                    Email: Email,
                    Password: Password
                },
                success: function (Result) {
                    value = Result.split('__');
                    if (value[0] == 'OK') {          
                        Cookies.set('UserToken', value[1]);
                        location.href = "/UserDashboard/Home";                        
                    } else {
                        Swal.fire('Mensaje del Sistema', value[1], 'info');
                    }
                }
            });
        } else {
            document.getElementById('Email').focus();
            Swal.fire('Mensaje del Sistema', 'Por favor ingrese un Correo Electronico valido', 'error');
        }

    }
}