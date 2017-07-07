/**
 * Created by Minglu on 2017/7/7.
 */
myModule.directive('hello', function () {
    return {
        /*
         A:attribute
         E:element
         C:class
         M:注释
         */
        restrict: 'AEMC',
        template: '<div>Hi Everyone!</div>',
        replace: true
    }
});