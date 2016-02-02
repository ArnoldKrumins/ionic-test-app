/**
 * Created by arnold.krumins on 26/11/2014.
 */
starter.directive('photoGrid',function(){

    return{
         restrict:'EA',
         replace:true,
         scope:{ gridWidth:'@',gridHeight:'@',gridRows:'@',gridColumns:'@', photo:'=' },
         template:'<div id="container">' +
                    '<div class="box" stagger ng-repeat="n in range() track by $index" ng-style="position($index)">{{$index}}</div>' +
                   '</div>',
         controller: function($scope,$element, $attrs){

             $scope.position =function(index){

                 var top = Math.floor(index / $scope.gridColumns) * $scope.gridHeight + 'px';
                 var left = (index * $scope.gridWidth) % ($scope.gridColumns * $scope.gridWidth) + 'px';

                 return {
                     "position":"absolute",
                     "border":"1px solid rgba(211, 213, 210, 0)",
                     "width": $scope.gridWidth-1 + 'px',
                     "height": $scope.gridHeight-1 + 'px',
                     "top":top,
                     "left":left,
                     "background": "url(" + $scope.photo  + ")" + '-' + left + ' -' + top
                 }
             };

             $scope.range = function() {
                 return new Array($scope.gridRows * $scope.gridColumns);
             };

         },
         link: function(scope,element,attrs){

             TweenLite.set(element, {height:scope.gridRows * scope.gridHeight + 1, width: scope.gridColumns * scope.gridWidth + 1});
             TweenLite.set(".box", {width:scope.gridWidth, height:scope.gridHeight, lineHeight:scope.gridHeight + "px"});


         }

    }


})