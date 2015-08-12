var Controllers;
(function (Controllers) {
    var Dashboard;
    (function (Dashboard) {
        var PiecesController = (function () {
            function PiecesController($scope) {
                $scope.shouldShowDelete = false;
                $scope.shouldShowReorder = false;
                $scope.listCanSwipe = true;
                $scope.data = {
                    showDelete: false
                };
                $scope.edit = function (piece) {
                    alert('Edit Item: ' + piece.title);
                };
                $scope.share = function (piece) {
                    alert('Share Item: ' + piece.title);
                };
                $scope.moveItem = function (item, fromIndex, toIndex) {
                    $scope.pieces.splice(fromIndex, 1);
                    $scope.pieces.splice(toIndex, 0, item);
                };
                $scope.onItemDelete = function (item) {
                    $scope.pieces.splice($scope.items.indexOf(item), 1);
                };
                $scope.pieces = [
                    { title: 'Mozart Piano Sonata 23', description: 'Trying to practice' },
                    { title: 'Beethoven Violin Sonata 23', description: 'Trying to practice' }
                ];
            }
            PiecesController.prototype.create = function (user) {
            };
            return PiecesController;
        })();
        Dashboard.PiecesController = PiecesController;
    })(Dashboard = Controllers.Dashboard || (Controllers.Dashboard = {}));
})(Controllers = exports.Controllers || (exports.Controllers = {}));
