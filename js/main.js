$(function(){
    var $d = $( document )
        , mainSlider = $('.main-slider')
        , workExamplesSlider = $('.work-examples-slider');
    mainSlider.slick({
        dots: true,
//        infinite: true,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        autoplay : true,
        autoplaySpeed : 5000,
        customPaging: function(slider, i) {
            return '<b>' + (i + 1) + '</b>';
        }
    });
    workExamplesSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 3
    })
    if( $.fn.modal !== undefined ) {
        $('#success-modal').modal({
            show : false
        })
    }
    $d.scroller();
});
