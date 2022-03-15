$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    }
);

$(".tab li:eq(0)").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab li:eq(1)").click(
    function(){
        $(".notice").hide();
        $(".gallery").show();
    }
);

/* 추가사항 - tab */
$(".tab li a").click(
    function(){
        $(".tab li a").removeClass("on"); /* 기존에 있던 on 초기화 */
        $(this).addClass("on"); /* 클릭한 것 on 부여 */
    }
)

/* #popup */
$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
)