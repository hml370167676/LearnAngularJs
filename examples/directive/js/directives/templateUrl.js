/**
 * Created by Minglu on 2017/7/7.
 */
myModule.directive('helloUrl', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/hello.html', /*从很调用的地方开始找模板*/
        replace: true
    }
});