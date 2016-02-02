/**
 * Created by kruminsa on 31/10/2014.
 */
starter.directive('nlcOptionAncap',function(){

    return{
     restrict:'EA',
     template:'<div class="swiper-container ancap">' +
         '<i class="fa fa-chevron-left" pulse></i>' +
         '<i class="fa fa-chevron-right" pulse></i>' +
         '<div class="swiper-wrapper opacity-point-eight">' +
            '<div class="swiper-slide">' +
              '<div><i class="fa fa-star"></i></div>' +
              '<h3>Not Important</h3>' +
             '</div>' +
            '<div class="swiper-slide">' +
                '<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>' +
                '<h3>Moderate Ancap Rating</h3>' +
            '</div>' +

            '<div class="swiper-slide">' +
                '<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>' +
                '<h3>High Ancap Rating</h3>' +
            '</div>' +

         '</div>' +
         '</div>',
     link:  function(scope,element, attrs) {

         var swiper = new Swiper('.ancap', {
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

