$(function(){
    var mainSlider = $('.main-slider')
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
});
