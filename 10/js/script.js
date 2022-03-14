$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    }
);


// 실전용, 누르면 열리고 다시 누르면 닫힘
// $(".gnb li").click(
//     function(){
//         $(".sub").stop().slideUp();
//         $(this).children(".sub").stop().slideToggle();
//     }
// ); 