/**
 * Created by Minglu on 2017/7/7.
 */
myModule.directive('hi',function(){
    return{
        restrict:'AE',
        transclude:true,
        template:'<div>Hello World!<div ng-transclude></div></div>'
    }
});