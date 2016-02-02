/**
 * Created by kruminsa on 31/10/2014.
 */
starter.directive('nlcOptionPassengers',function(){

    var swiper;

    return{
     restrict:'EA',
     template:'<div class="swiper-container passengers">' +
         '<i ng-click="prev()" class="fa fa-chevron-left" pulse></i>' +
         '<i ng-click="next()" class="fa fa-chevron-right" pulse></i>' +
         '<div class="swiper-wrapper opacity-point-eight">' +

            '<div class="swiper-slide">' +
              '<div class="two"><i class="fa fa-user"></i><i class="fa fa-user"></i></div>' +
              '<h3>2 Passengers</h3>' +
             '</div>' +

             '<div class="swiper-slide">' +
                '<div class="three"><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i></div>' +
                '<h3>3 Passengers</h3>' +
             '</div>' +

            '<div class="swiper-slide">' +
                '<div class="four"><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i></div>' +
                '<h3>4 Passengers</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
                '<div class="five"><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i></div>' +
                '<h3>5 Passengers</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
                '<div class="six"><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i></div>' +
                '<h3>6+ Passengers</h3>' +
            '</div>' +

         '</div>' +
         '</div>',
     link:  function(scope,element, attrs) {

             swiper = new Swiper('.passengers', {
             speed: 750,
             mode: 'horizontal',
             slidesPerView: 1,
             loop:true
         });

     },
        controller: function ($scope, $element, $attrs) {

        $scope.next = function () {
            swiper.swipeNext();
        };

        $scope.prev = function () {
            swiper.swipePrev();
        };

    }

    }
})

