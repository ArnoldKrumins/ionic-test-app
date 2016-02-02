/**
 * Created by kruminsa on 31/10/2014.
 */
starter.directive('nlcOptionEmissions',function(){

    return{
     restrict:'EA',
     template:'<div class="swiper-container emissions">' +
         '<i class="fa fa-chevron-left" pulse></i>' +
         '<i class="fa fa-chevron-right" pulse></i>' +
         '<div class="swiper-wrapper opacity-point-eight">' +
            '<div class="swiper-slide">' +
              '<div><i class="fa fa-leaf"></i></div>' +
              '<h3>Not Important</h3>' +
             '</div>' +

            '<div class="swiper-slide">' +
                '<div><i class="fa fa-leaf"></i><i class="fa fa-leaf"></i><i class="fa fa-leaf"></i></div>' +
                '<h3>Moderate Co2 Emissions</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
                '<div><i class="fa fa-leaf"></i><i class="fa fa-leaf"></i><i class="fa fa-leaf"></i><i class="fa fa-leaf"></i><i class="fa fa-leaf"></i></div>' +
                '<h3>Low Co2 Emssions</h3>' +
            '</div>' +

         '</div>' +
         '</div>',
     link:  function(scope,element, attrs) {

         var swiper = new Swiper('.emissions', {
             speed: 750,
             mode: 'horizontal',
             slidesPerView: 1,
             loop:true
         });

         element.find('.fa-chevron-right').on('click',function(){
             swiper.swipeNext();

         })

         element.find('.fa-chevron-left').on('click',function(){
             swiper.swipePrev();

         })

     }
    }
})

