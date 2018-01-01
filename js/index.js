$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'fade',
        fade: {
            crossFade: true,
        },
        autoplay: 3000,
        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    });
    // 下拉框效果
    //子导航展开收缩
    $(".sewvtop").click(function() {
        $(this).find("em").removeClass("lbaxztop2").addClass("lbaxztop").parents(".sewv").siblings().children(".sewvtop").find("em").removeClass("lbaxztop").addClass(".lbaxztop2");
        $(this).next(".sewvbm").toggle().parents(".sewv").siblings().find(".sewvbm").hide();
    });

    /*鼠标离开下拉框关闭*/
    $(".sewv").mouseleave(function() {
        $(".sewvbm").hide();
        $(this).children(".sewvtop").find("em").addClass("lbaxztop2");
    });


    //赋值
    $(".sewvbm>li").click(function() {
        var selva = $(this).text();
        $(this).parents(".sewvbm").siblings(".sewvtop").find("span").text(selva);
        $(this).parent("ul").hide();
        $(this).parents(".sewv").children(".sewvtop").find("em").addClass("lbaxztop2");
    });
})