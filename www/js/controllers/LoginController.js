var Controllers;
(function (Controllers) {
    var LoginController = (function () {
        function LoginController($location, ngFB) {
            this.ngFB = ngFB;
            this.location = $location;
        }
        LoginController.prototype.authenticate = function (loginData) {
            window.localStorage.setItem('user', JSON.stringify(loginData));
            this.location.path('/dashboard/dash');
        };
        LoginController.prototype.authenticateWithFacebook = function () {
            this.ngFB
                .login({ scope: 'email' })
                .then(function (response) {
                if (response.status === 'connected') {
                    console.log(response);
                    console.log('Facebook login succeeded');
                }
                else {
                    alert('Facebook login failed');
                }
            });
        };
        return LoginController;
    })();
    Controllers.LoginController = LoginController;
})(Controllers = exports.Controllers || (exports.Controllers = {}));
