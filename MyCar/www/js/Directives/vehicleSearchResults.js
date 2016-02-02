/**
 * Created by kruminsa on 6/11/2014.
 */
starter.directive('vehicleSearchResults',function(){

    return {
        restrict:'EA',
        scope:{
            searchResults:'='
        },
        template:' <div class="vehicle-results-container col-md-6 fp-panel">' +
            '<i class="fa fa-chevron-up scroll-up" pulse></i>' +
            '<div class="swiper-container search-results">' +
            '<div class="swiper-wrapper">' +
            '<div class="swiper-slide vehicle-container col-md-12" end-repeat ng-repeat="vehicle in searchResults">' +
                '<div class="col-md-5 vehicle-image" >' +
                    '<img class="car-image-search opacity-point-eight" width="100" src="../img/vehicles/{{ vehicle.image }}">' +
                    '</div>' +
                    '<div class="col-md-7 vehicle-info">' +
                        '<h4>{{ vehicle.Name }}</h4>' +
                        '<p>{{ vehicle.description }}</p>' +
                        '<h3 class="vehicle-price">{{ vehicle.price }}</h3>' +
                    '</div>' +
                    '<i class="fa fa-caret-right" pulse></i>' +
                '</div>' +
            '</div>' +
            '</div>' +
            '<i class="fa fa-chevron-down scroll-down" pulse></i>' +
            '</div>',
        link:function(scope,element,attrs){

        }

    }

})


starter.directive('endRepeat', ['$timeout', function ($timeout) {

    var swiper;

    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    swiper = new Swiper('.search-results', {
                        speed: 750,
                        mode: 'vertical',
                        slidesPerView: 4,
                        loop:false,
                        useCSS3Transforms:true
                    })

                });


                element.parent().find('.fa-chevron-up').on('click',function(){
                    swiper.swipePrev();
                })

                element.parent().find('.fa-chevron-down').on('click',function(){
                    swiper.swipeNext();
                })
            }
        }
    }
}]);