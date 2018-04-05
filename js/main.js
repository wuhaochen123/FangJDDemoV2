$(function(){

    

  // ---------------------------------------------------------------搜索栏变色效果
    window.onscroll = function () {
        var height = document.documentElement.scrollTop;
        //  var height=document.body.scrollTop;       //*******ie的
        var search = document.getElementsByClassName("jd_header_box")[0]
        // console.log(search)
        var jsearch = $("jd_header_box")
        // console.log($("jd_header_box"))
        // console.log(document.getElementsByClassName("carouselBox"))
        // console.log(height)
        var bh = document.getElementsByClassName("carouselBox")[0].offsetHeight;

        if (height > (bh - 40)) {
            // console.log("huanse")
            // jsearch.css("background-color","yellow")
            // search.style.background="rgba(247, 23, 23, 0.7)"   //原生写法
            $(".jd_header .jd_header_box").css("background-color", "rgba(247, 23, 23, 0.7")
        } else {
            var searchopacity = height / bh * 0.7
            // search.style.background="rgba(247, 23, 23,"+searchopacity+")"  //原生写法
            $(".jd_header .jd_header_box").css("background-color", "rgba(247, 23, 23," + searchopacity + ")")
        }
        var bannerheight = $("carouselBox").height();

        // 获取轮播图的高度
    }

// -------------------------------------------------------------------倒计时
    // 获取倒计时的大盒子
    var daojishibigbox=document.getElementsByClassName('daojishi')
    var daojishinumber=daojishibigbox[0].getElementsByClassName('num')
    // console.log(daojishibigbox)
    // console.log(daojishinumber)
    var times= 7*60*60
    setInterval(function() {
        times--;
        // console.log(Math.floor((times/60)/60))
        // console.log(Math.floor((times/60)%60))
        // console.log(Math.floor(times%60))
        // console.log(times);

        var hours = Math.floor((times / 60) / 60);
        var mins = Math.floor((times / 60) % 60);
        var sec = Math.floor(times % 60);

        daojishinumber[0].innerHTML = hours>10?Math.floor(hours/10):0;
        daojishinumber[1].innerHTML = hours>10?hours%10:hours;

        daojishinumber[2].innerHTML = mins > 10 ? Math.floor(mins / 10) : 0;
        daojishinumber[3].innerHTML = mins > 10 ? mins % 10 : mins;

        daojishinumber[4].innerHTML = sec > 10 ? Math.floor(sec / 10) : 0;
        daojishinumber[5].innerHTML = sec > 10 ? sec % 10 : sec;

    },1000)

// -------------------------------------------------------轮播图bootstrap特效
$('.carousel').carousel({
    interval: 2000

})
//  -------------------------------------------------------- nav 的图片360旋转特效 
$('.jd_nav img').mouseenter(function () {
    // console.log('mouseenter');
    $(this).addClass('animated rotateIn')
}).mouseleave(function () {
    // console.log('mouseleave');
    $('img').removeClass();
});
//   ---------------------------------------------------------下边各个img的放大特效 

// var oldheight=$('.jd_product img').height();
// var oldwidth = $('.jd_product img').width();
$('.jd_product img')
    .mouseenter(function () {
        // console.log('.jd_product img');
        // console.log($(this).height());
        oldheight = $(this).height();
        oldwidth = $(this).width();
        var newheight = $(this).height()
        var newwidth = $(this).width()
        // $(this).height(newheight*(1.1))
        // $(this).width(newwidth * (1.1))
        $(this).stop().animate({
            height: newheight * (1.05),
            width: newwidth * (1.05)
        }, 100);
    })
    .mouseleave(function () {
        $(this).stop().animate({
            height: oldheight,
            width: oldwidth
        }, 100);

    });;

})
