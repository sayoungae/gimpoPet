

$(document).ready(function(){
    $('.slide_visual').slick({
        draggable:true,
        arrows:false,
        dots:true,
        appendDots: $('#main_dots'),
        infinite: false,
        
    });
    
    var menuListSlide = $('#menu_list .menu_list_slide');
    menuListSlide.slick({
        arrows:false,
        infinite :false,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots:true,
                }
            },
        ]
    })

    var helpers = {
        addZeros: function (n) {
            return (n < 10) ? '0' + n : '' + n;
        }
    };
    function subSlide1() {

        $('.sub_slide1').slick({
            draggable:true,
            infinite: true,
            arrows:true,
            dots:false,
            appendArrows: $('#arrows'),
            prevArrow: $('.prevArrow'),
            nextArrow: $('.nextArrow'),
            autoplay: true,
            autoplaySpeed: 4000,
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var $progressBar = $('.progress');
            var $progressBarLabel = $( '.slider__label' );

            // progressBar
            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;    
            $progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc );
            $progressBarLabel.text( calc + '% completed' );
        }).on('afterChange', function(event, slick, currentSlide){
            var $current = $('.currentPage');
            var i = (currentSlide ? currentSlide : 0) + 1;
            $current.text(helpers.addZeros(i));
        });

        // slide Page Count
        var sliderItemsNum = $('.sub_slide1').find('.slick-slide').not('.slick-cloned').length;
        var $totalPage = $('.totalPage');
        $totalPage.text(helpers.addZeros(sliderItemsNum));
        
        $('.subBanStop').click(function(){
            if(!$(this).hasClass('pause')){
                $(this).addClass('pause');
                $('.sub_slide1').slick('slickPause');
            }else{
                $(this).removeClass('pause');
                $('.sub_slide1').slick('slickPlay');
            }
        });
        
    
    }
    subSlide1();

    
    
})
