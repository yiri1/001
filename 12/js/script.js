$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().fadeIn();
    },
    function(){
        $(this).children(".sub").stop().fadeOut();
    }
);

$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);