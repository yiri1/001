/* header */
$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
    }
);

/* section */
$(".tab li:eq(0)").click( /* 공지사항 */
    function(){
        $(".tab li a").removeClass("on");
        $(".tab li:eq(0) a").addClass("on");
        $(".notice").show();
        $(".gallery").hide();
    }
);

$(".tab li:eq(1)").click( /* 갤러리 */
    function(){
        $(".tab li a").removeClass("on");
        $(".tab li:eq(1) a").addClass("on");
        $(".notice").hide();
        $(".gallery").show();
    }
);

/* popup */
$(".notice li:eq(0) a").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
)