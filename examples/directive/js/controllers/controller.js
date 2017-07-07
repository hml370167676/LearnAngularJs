/**
 * Created by Minglu on 2017/7/7.
 */
myModule.controller('UserInfoController', ['$scope', function ($scope) {
    $scope.userInfo = {
        email: '370167676@qq.com',
        password: '370167676',
        autoLogin: true
    };
    $scope.getFormData = function () {
        console.log($scope.userInfo);
    };
    $scope.setFormData = function () {
        $scope.userInfo = {
            email: 'hml370167676@gmail.com',
            password: 'hml370167676',
            autoLogin: false
        };
    };
    $scope.resetForm = function () {
        $scope.userInfo = {
            email: '370167676@qq.com',
            password: '370167676',
            autoLogin: true
        };
    };

}]);