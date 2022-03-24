function SearchCookie() {
    let UserToken = Cookies.get('UserToken');
    if (IdUser == '' || UserToken == undefined || UserToken == null) {
        Swal.fire({
            title: 'Mensaje del Sistema',
            text: "Su Sesión ya expiro, por favor vuelva a Ingresar",
            icon: 'info',
        }).then((result) => {
            window.location.href = '/Account/Login';
        })
    }
}

function Loguot() {
    Cookies.remove('UserToken');
    window.location.href = '/Home/Home';
}