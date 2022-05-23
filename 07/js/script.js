$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    },
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