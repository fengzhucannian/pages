galleryTopHeight();
$(window).resize(function(){
    galleryTopHeight()
});

var galleryTop = new Swiper('.gallery-top-box .gallery-top', {
    centeredSlides: true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.gallery-top-box .swiper-button-next',
        prevEl: '.gallery-top-box .swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        dragSize:150,
    }
});

$(".slideshow").click(function(){
    if($(this).hasClass("pauseed")){
        $(this).removeClass("pauseed");
        galleryTop.autoplay.start()
    }else{
        $(this).addClass("pauseed");
        galleryTop.autoplay.stop()

    }
});

galleryTop.scrollbar.$el.css({
    "bottom":"0px",
    "background":"none",
    "height":"5px"
});
galleryTop.scrollbar.$dragEl.css({
    'background':'rgba(171,171,171,171.6)'
});
galleryTop.scrollbar.updateSize();

var galleryThumbs = new Swiper('.gallery-thumbs-box .gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    navigation: {
        nextEl: '.gallery-thumbs-box .swiper-button-next',
        prevEl: '.gallery-thumbs-box .swiper-button-prev',
    }
});

galleryTop.controller.control = galleryThumbs;

var objThumbs = $(".gallery-thumbs .swiper-wrapper .swiper-slide");
var objTop = $(".gallery-top .swiper-wrapper .swiper-slide");
objThumbs.click(function(e){
    var currentId = $(this).attr("data-id");
    for(var i = 0 ; i< objTop.length; i++){
        if($(objTop[i]).attr("data-id") === currentId){
            $(objTop[i-1]).addClass("swiper-slide-prev");
            $(objTop[i-1]).siblings().removeClass("swiper-slide-prev");
            $(objTop[i]).addClass("swiper-slide-active");
            $(objTop[i]).siblings().removeClass("swiper-slide-active");
            $(objTop[i+1]).addClass("swiper-slide-next")
            $(objTop[i+1]).siblings().removeClass("swiper-slide-next");
            e.preventDefault();
            galleryTop.slideTo(i,1000, false);
        }
    }
});

function galleryTopHeight(){
    var wh = $(window).height();
    var headernav_height = $(".headernav").height();
    var footernav_height = $(".footernav").height();
    var galleryThumbs_height = $(".gallery-thumbs").height();
    var galleryTop_height = wh - galleryThumbs_height - headernav_height - footernav_height - 22;
    $(".gallery-top").css("height",galleryTop_height);
    var galleryThumbs_width = $(window).width() - 60;
    $(".gallery-thumbs-box .swiper-container").css("width",galleryThumbs_width);
    var galleryTop_width = $(window).width();
    $(".gallery-top-box .swiper-container").css("width",galleryTop_width);
}