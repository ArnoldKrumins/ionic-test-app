/**
 * Created by kruminsa on 31/10/2014.
 */
starter.directive('nlcOptionBodyTypes',function(){

    var swiper;

    return{
     restrict:'EA',
     scope:true,
     template:'<div class="swiper-container bodytype">' +
         '<i ng-click="prev()" class="fa fa-chevron-left" pulse></i>' +
         '<i ng-click="next()" class="fa fa-chevron-right" pulse></i>' +
            '<div class="swiper-wrapper opacity-point-eight">' +

                '<div class="swiper-slide">' +
                    '<div class="content-image convertible unselected"></div>' +
                    '<h3>Convertible</h3>' +
                '</div>' +

                '<div class="swiper-slide">' +
                    '<div class="content-image coupe unselected"></div>' +
                    '<h3>Coupe</h3>' +
                '</div>' +

                '<div class="swiper-slide">' +
                    '<div class="content-image hatch unselected"></div>' +
                        '<h3>Hatch</h3>' +
                '</div>' +

                '<div class="swiper-slide">' +
                    '<div class="content-image peoplemover unselected"></div>' +
                        '<h3>People Mover</h3>' +
                '</div>' +

                '<div class="swiper-slide">' +
                '<div class="content-image sedan unselected"></div>' +
                    '<h3>Sedan</h3>' +
                '</div>' +

                '<div class="swiper-slide">' +
                    '<div class="content-image suv unselected"></div>' +
                    '<h3>SUV</h3>' +
                '</div>' +

                '<div class="swiper-slide">' +
                    '<div class="content-image ute unselected"></div>' +
                        '<h3>Ute</h3>' +
                '</div>' +

                '<div class="swiper-slide">' +
                    '<div class="content-image wagon unselected"></div>' +
                        '<h3>Wagon</h3>' +
                '</div>' +

            '</div>' +
         '</div>',

     link:  function(scope,element, attrs) {

             swiper = new Swiper('.bodytype', {
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



