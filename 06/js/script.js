$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
        $(".nav_back").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
        $(".nav_back").stop().slideUp();
    }
);

// $(".gnb").mouseover();
// $(".gnb").mouseout();

$(".open").click(
    function(){
        $("#popup").show();
    }
);
$(".close").click(
    function(){
        $("#popup").hide();
    }
)