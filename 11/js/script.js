$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().fadeIn();
    },
    function(){
        $(this).children(".sub").stop().fadeOut();
    },
)