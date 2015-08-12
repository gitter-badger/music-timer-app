var Controllers;
(function (Controllers) {
    var UsersController = (function () {
        function UsersController($state, $location) {
            this.state = $state;
            this.location = $location;
        }
        UsersController.prototype.create = function (user) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.location.path('/dashboard/dash');
        };
        return UsersController;
    })();
    Controllers.UsersController = UsersController;
})(Controllers = exports.Controllers || (exports.Controllers = {}));
