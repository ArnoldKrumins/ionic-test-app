/**
 * Created by kruminsa on 31/10/2014.
 */
starter.directive('nlcOptionPrice',function(){

    var swiper;

    return{
        restrict: 'EA',
        scope:true,
        template: '<div class="swiper-container price">' +
            '<div ng-click="prev()"><i class="fa fa-chevron-left" pulse></i></div>' +
            '<i ng-click="next()" class="fa fa-chevron-right" pulse></i>' +
            '<div class="swiper-wrapper opacity-point-eight">' +
            '<div class="swiper-slide">' +
            '<div><i class="fa fa-university"></i></div>' +
            '<h3>$10,0000 - $20,000</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
            '<div><i class="fa fa-university"></i></div>' +
            '<h3>$20,0000 - $25,000</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
            '<div><i class="fa fa-university"></i></div>' +
            '<h3>$25,0000 - $30,000</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
            '<div><i class="fa fa-university"></i></div>' +
            '<h3>$30,0000 - $35,000</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
            '<div><i class="fa fa-university"></i></div>' +
            '<h3>$40,0000 - $45,000</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
            '<div><i class="fa fa-university"></i></div>' +
            '<h3>$45,0000 - $50,000</h3>' +
            '</div>' +

            '</div>' +
            '</div>',
        link: function(scope, element, attrs){

                swiper = new Swiper('.price', {
                speed: 750,
                mode: 'horizontal',
                slidesPerView: 1,
                loop: true
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

