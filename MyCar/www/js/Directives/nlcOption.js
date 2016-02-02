/**
 * Created by kruminsa on 31/10/2014.
 */
starter.directive('nlcOption',function($compile){

    var priceTemplate ='<div class="swiper-container {{ templateName }}">' +
                            '<i class="fa fa-chevron-left"></i>' +
                            '<i class="fa fa-chevron-right"></i>' +
                            '<div class="swiper-wrapper">' +
                                '<div class="swiper-slide fp-metallic" ng-repeat="item in templateContent" end-repeat value="{{ templateName }}">' +
                                    '<i class="fa fa-usd"></i>' +
                                    '<h3>{{ item.content }}</h3>' +
                                '</div>' +
                            '</div>' +
                        '</div>';


    var passengerTemplate ='';

    var bodytypeTemplate ='<div class="swiper-container {{ templateName }}">' +
                            '<i class="fa fa-chevron-left"></i>' +
                            '<i class="fa fa-chevron-right"></i>' +
                                '<div class="swiper-wrapper">' +
                                    '<div class="swiper-slide fp-metallic" ng-repeat="item in templateContent" end-repeat value="{{ templateName }}">' +
                                        '<div class="content-image {{ item.class }} unselected col-md-8 col-md-offset-4 col-xs-8 col-xs-offset-4"></div>' +
                                        '<h3>{{ item.content }}</h3>' +
                                    '</div>' +
                                '</div>' +
                           '</div>';


    var getTemplate = function(contentType) {
        var template = '';

        switch(contentType) {
            case 'price':
                template = priceTemplate;
                break;
            case 'passengers':
                template = passengerTemplate;
                break;
            case 'bodytype':
                template = bodytypeTemplate;
                break;
        }
        return template;
    }

    return{
     restrict:'EA',
     scope:{
        templateContent:'=',
        templateName:'@'
     },
     link:  function(scope,element, attrs) {

         element.html(getTemplate(scope.templateName)).show();
         $compile(element.contents())(scope);
     }
    }
})



nlc.directive('endRepeat', ['$timeout', function ($timeout) {

    var swiper;

    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                       swiper = new Swiper('.' + attr.value, {
                        speed: 750,
                        mode: 'horizontal',
                        slidesPerView: 1,
                        loop:true
                    })

                });


                element.parent().parent().find('.fa-chevron-right').on('click',function(){
                    swiper.swipePrev();
                })

                element.parent().parent().find('.fa-chevron-left').on('click',function(){
                    swiper.swipeNext();
                })
            }
        }
    }
}]);