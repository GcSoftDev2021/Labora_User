function Register() {
    let Email = $("#Email").val();
    let Password = $("#Password").val();
    let ConfirmPassword = $("#ConfirmPassword").val();
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    PasswordRegex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/i;

    if (Email == "" || Email == null || Email == undefined) {
        document.getElementById('Email').focus();
        Swal.fire('Mensaje del Sistema', 'Por favor ingrese el Correo Electronico', 'warning');
    } else {
        if (Password == "" || Password == null || Password == undefined) {
            document.getElementById('Password').focus();
            Swal.fire('Mensaje del Sistema', 'Por favor ingrese la Contraseña', 'warning');
        } else {
            if (emailRegex.test(Email)) {
                if (PasswordRegex.test(Password)) {
                    if (ConfirmPassword == "" || ConfirmPassword == null || ConfirmPassword == undefined) {
                        document.getElementById('ConfirmPassword').focus();
                        Swal.fire('Mensaje del Sistema', 'Por favor confirme la Contraseña', 'warning');
                    } else {
                        if (Password != ConfirmPassword) {
                            document.getElementById('ConfirmPassword').focus();
                            Swal.fire('Mensaje del Sistema', 'Las contraseñas no son iguales', 'warning');
                        } else {
                            $.ajax({
                                type: 'POST',
                                dataType: 'json',
                                url: '/Account/UserRegister',
                                data: {
                                    Email: Email,
                                    Password: Password
                                },
                                success: function (Result) {
                                    value = Result.split('__');
                                    if (value[0] == 'OK') {
                                        Swal.fire({
                                            title: 'Mensaje del Sistema',
                                            text: value[1],
                                            icon: 'success',
                                        }).then((result) => {
                                            location.reload();
                                        })
                                    } else {
                                        Swal.fire('Mensaje del Sistema', value[1], 'info');
                                    }
                                }
                            });
                        }
                    }
                } else {
                    document.getElementById('Password').focus();
                    Swal.fire('Mensaje del Sistema', 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.', 'error'); 
                }
            } else {
                document.getElementById('Email').focus();
                Swal.fire('Mensaje del Sistema', 'Por favor ingrese un Correo Electronico valido', 'error'); 
            }
        }
    }



    //if (Email == "" || Email == null || Email == undefined) {        
    //    document.getElementById('Email').focus();   
    //    Swal.fire('Mensaje del Sistema', 'Por favor ingrese el Correo Electronico', 'warning');
    //} else if (Password == "" || Password == null || Password == undefined) {
    //    document.getElementById('Password').focus();
    //    Swal.fire('Mensaje del Sistema', 'Por favor ingrese la Contraseña', 'warning');
    //} else if (ConfirmPassword == "" || ConfirmPassword == null || ConfirmPassword == undefined) {
    //    document.getElementById('ConfirmPassword').focus();
    //    Swal.fire('Mensaje del Sistema', 'Por favor confirme la Contraseña', 'warning');
    //} else if (Password != ConfirmPassword) {
    //    document.getElementById('ConfirmPassword').focus();
    //    Swal.fire('Mensaje del Sistema', 'Las contraseñas no son iguales', 'warning');
    //} else {
    //    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //    if (emailRegex.test(Email)) {
    //        PasswordRegex = /^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/i;
    //        if (PasswordRegex.test(Password)) {
    //            $.ajax({
    //                type: 'POST',
    //                dataType: 'json',
    //                url: '/Account/UserRegister',
    //                data: {
    //                    Email: Email,
    //                    Password: Password
    //                },
    //                success: function (Result) {
    //                    value = Result.split('__');
    //                    if (value[0] == 'OK') {
    //                        Swal.fire({
    //                            title: 'Mensaje del Sistema',
    //                            text: value[1],
    //                            icon: 'success',
    //                        }).then((result) => {
    //                            location.reload();
    //                        })
    //                    } else {
    //                        Swal.fire('Mensaje del Sistema', value[1], 'info');
    //                    }
    //                }
    //            });
    //        } else {
    //            document.getElementById('Password').focus();
    //            Swal.fire('Mensaje del Sistema', 'La contraseña debe tener mínimo un dígito (0-9), mínimo una minúscula (a-z),mínimo una mayúscula (A-Z) y mínimo un caracter no alfanumérico (/*.+,-$).', 'error'); 
    //        }            
    //    } else {
    //        document.getElementById('Email').focus();
    //        Swal.fire('Mensaje del Sistema', 'Por favor ingrese un Correo Electronico valido', 'error');          
    //    }
        
    //}
}