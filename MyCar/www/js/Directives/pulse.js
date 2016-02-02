/**
 * Created by kruminsa on 5/11/2014.
 */
starter.directive('pulse',function(){

    return{
        restrict:'A',
        link:function(scope,element,attrs){

            element.on('click',function(){
                TweenMax.to(element, 0.1, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:1, ease:Power1.easeInOut});
            })


        }
    }

})