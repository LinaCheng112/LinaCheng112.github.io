$(window).scroll(function () {
    var winw = $("#statusbar").width() - $(window).width(); // 計算圖片寬度超出的部分
    var winh = $(window).height();
    var doch = $(document).height();
    var current_pos = $(window).scrollTop();
    var scroll_factor = 1.0;
    var new_left = -(current_pos * winw * scroll_factor) / (doch - winh);

    $("#statusbar").css({
        transform: `translateX(${new_left}px)`
    });
});
