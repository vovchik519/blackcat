$(document).ready(function() {
    $('.header__call-mini').click(function(event){
        $('.header__call').toggleClass('active');
    });

    $('.header__burger').click(function(event){
        $('.header__burger, .header__burger-wrap').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu__link').click(function(event){
        $('.header__burger, .header__burger-wrap').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.mail-btn').click(function(event){
        $('.mail-wrapper, .mail-container').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.payment__price-button').click(function(event){
        $('.mail-wrapper, .mail-container').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.mail-exit').click(function(event){
        $('.mail-wrapper, .mail-container').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.mail-btn-next').click(function(event){
        $('.mail-wrapper-next, .mail-container-next').toggleClass('active');
    });

    $('.mail-exit-next').click(function(event){
        $('.mail-wrapper-next, .mail-container-next').toggleClass('active');
        $('.mail-wrapper, .mail-container').toggleClass('active');
        $('body').toggleClass('lock');
    });


    $('.payment__head').on('click', function(e){
        var headIndex = $(e.target).data('index');

        if($(e.target).hasClass('payment-gr') && !$(e.target).hasClass('active')){
            $('.payment__head .payment-gr').each(function(){
                $(this).removeClass('active');
            });

        $('.payment__apartment p').each(function(index){
            if($(this).hasClass('active')){
                $(this).closest('.payment__apartment').find('div').each(function(){
                    $(this).addClass('visible');
                });
                $(this).closest('.payment__apartment').find(`[data-index="${headIndex}"]`).removeClass('visible');
            }
        });
        }

        $(e.target).addClass('active');
    });

    $('.payment__apartment').on('click', function(e){
        if($(e.target).hasClass('payment__column-one') && !$(e.target).hasClass('active')){
            $('.payment__apartment p').each(function(){
                $(this).removeClass('active');
            });
        }
        $(e.target).toggleClass('active');

        var headIndex = $('.payment__head').find('.payment-gr.active').data('index');

        $('.payment__head .payment-gr').each(function(index){
            if($(this).hasClass('active')){
                $(this).closest('.payment__wrap').find('.payment__apartment div').each(function(){
                    $(this).addClass('visible');
                });
                $(this).closest('.payment__wrap').find('.payment__column-one.active').closest('.payment__apartment').find(`[data-index="${headIndex}"]`).removeClass('visible');
                
            }
        });
    });


$('.review-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
  });
});
$(document).ready(function(){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting) {
          $(entry.target).addClass('active');
        } else {
          $(entry.target).removeClass('active');
        }
      });
    }, {threshold: 0.1});
    $('.btn-anim').each(function(){
      observer.observe(this);
    });
  });