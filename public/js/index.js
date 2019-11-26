$(function() {
    // 分析：
    // 定义一个变量，存储下标，下标的默认值是0，
    // 右箭头click， 下标自增
    // 找到对应的li，让其显示（fadeIn），其他的兄弟元素隐藏（fadeOut）

    // 定义下标
    var index = 0;
    // 右边的箭头
    $(".arrow-right").click(function(){
        index++;

        // 临界点的判断
        if(index === $(".slider>ul>li").length){
            index = 0;
        }

        $(".slider>ul>li").eq(index).fadeIn().siblings().fadeOut();
    })

    // 左边的箭头
    $(".arrow-left").click(function(){

        index--;

        if(index < 0){
            // 回到最后一张
            index = $(".slider>ul>li").length - 1;
        }

        $(".slider>ul>li").eq(index).fadeIn().siblings().fadeOut();
    })

    // 添加定时器
    var timer = setInterval(function(){
        // 主动触发右箭头的点击事件
        $(".arrow-right").click();
    }, 3000)

    // 鼠标移入到slider，清定时器
    $(".slider").mouseenter(function(){
        clearInterval(timer);
    })

    // 鼠标移出，重新开启定时器
    $(".slider").mouseleave(function(){
        // 这里是重点难点，开启的定时器一定要赋值给timer，
        // 用于在mouseenter 清定时器
        // 同时注意，这个定时器的表示不要用var
        timer = setInterval(function(){
            // 主动触发右箭头的点击事件
            $(".arrow-right").click();
        }, 3000)
    })

    $(".article-content").hover(function(){
        $(".article-center").css({"display":"block"});
    },function(){
        $(".article-center").css({"display":"none"});
    });
})