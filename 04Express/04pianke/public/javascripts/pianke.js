/**
 * Created by dllo on 17/8/3.
 */

$(function () {
//         大图片鼠标移入
    $("#bigimg").on("mouseover", function () {
        $("#bigimg").children().eq(0).css("transform", "scale(1.2)");
        $("#bigimg").children().eq(1).css("display", "block");
        $("#bigimg").children().eq(2).css("display", "block");
    });
    //         大图片鼠标移除
    $("#bigimg").on("mouseout", function () {
        $("#bigimg").children().css("transform", "scale(1)");
        $("#bigimg").children().eq(1).css("display", "none");
        $("#bigimg").children().eq(2).css("display", "none");
    });
    $(".img_five").on("mouseover", function () {
        $(this).children().eq(0).css("transform", "scale(1.2)");
        $(this).children().eq(1).css("display", "block");
        $(this).children().eq(2).css("display", "block");
    });
    $(".img_five").on("mouseout", function () {
        $(this).children().eq(0).css("transform", "scale(1)");
        $(this).children().eq(1).css("display", "none");
        $(this).children().eq(2).css("display", "none");
    });

//        底下鼠标移入移出
//        先移入
    $(".img_three").on("mouseover", function () {
        $(this).children().css("transform", "scale(1.2)")
    })
//        移出
    $(".img_three").on("mouseout", function () {
        $(this).children().css("transform", "scale(1)")
    });
//        移入显示二维码
    $("#foot_right").children().eq(2).on("mouseover", function () {
        $("#ewm").css("display", "block");

    });
    //        移出隐藏二维码
    $("#foot_right").children().eq(2).on("mouseout", function () {
        $("#ewm").css("display", "none");
    });


//        滚轮事件
    var initTop = 0;
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= 125) {
            if (scrollTop > initTop) {
                $("#nav").css("height", "0px")
            } else {
                $("#nav").css("height", "100px")
            }
            initTop = scrollTop;
        }


        if (scrollTop >= 800) {
            $("#up").css("display","block");
            initTop = scrollTop;
        }
        else{
            $("#up").css("display","none");
            initTop = scrollTop;
        }
    });
//       锚点回顶部
    $("#up").click(function () {
        $("html,body").animate({scrollTop:0}, 1100);
    })

});

