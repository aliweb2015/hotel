$(document).ready(function(){

$('#Amenu').hide();
$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $('#Amenu').fadeIn("slow");
        $('#Bmenu').fadeOut("fast");

    }

});

$(window).scroll(function(){
    if($(window).scrollTop()<100){
        $('#Amenu').fadeOut("slow");
        $('#Bmenu').fadeIn("slow");

    }

});


function goToByScroll(id){
    $('html,body').animate({scrollTop: $(id).offset().top},'slow');
}
$(document).ready(function(){
    $('.navbar a').click(function(){
        goToByScroll($(this).attr('href'));
        return false;
    });
});

    $('.scroll-top').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $('.scroll-top').fadeIn("slow");


        }else{
            $('.scroll-top').fadeOut("slow");
        }

    });

    $('.scroll-top').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    })

$(".navbar a").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
    $('body').scrollspy({ target: '#Amenu' })

});
$(document).ready(function() {
    $('.thumbnail').click(function(){
        $('.modal-body').empty();
        var title = $(this).parent('a').attr("title");
        $('.modal-title').html(title);
        $($(this).parents('div').html()).appendTo('.modal-body');
        $('#gallery-hotel').modal({show:true});
    });
});