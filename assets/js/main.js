// loader-spinner
$(document).ready(function(){
    $('.loader').fadeOut(5000);
    $('.spinner').fadeOut(5000);
    $('body').css('overflow','unset');
});

// navbar-color
$(window).scroll(function(){
    let t = $(window).scrollTop();

    if(t>=150){
        $('.navbar').addClass('bg-white');
        $('.navbar').removeClass('bg-transparent');
        $('.navbar').css('transition','0.5s');
    }
    else{
        $('.navbar').addClass('bg-transparent');
        $('.navbar').removeClass('bg-white');
    }
});

//top-button
$('.btnTop').click(function(){
    $(window).scrollTop(0);
});
$(window).scroll(function(){
    let t = $(window).scrollTop();

    if(t>=300){
        $('.btnTop').css('display','block');
    }
    else{
        $('.btnTop').css('display','none');
    }
});

// nav-behavior-smooth
$('.nav-link').click(function(e){
    let attr = $(e.target).attr('href');
    // console.log(attr);
    let secOff = $(attr).offset().top;
    // console.log(secOff);
    $('html,body').animate({scrollTop: secOff},2000);
});

// color-box
let colors = ['red','yellow','blue','purple','teal'];
for(let i=0; i<colors.length; i++){
    $('.color-option li').eq(i).css('background',colors[i]);
}
$('.color-option li').click(function(){
    let currentBG = $(this).css("backgroundColor");
    $('.change-color').css('color',currentBG);
});
$('.color-box i').click(function(){
    let optionsWidth = $('.color-option').outerWidth();
    if($('.color-box').css('left')=='0px'){
        $('.color-box').animate({'left':-optionsWidth},3000);
    }
    else{
        $('.color-box').animate({'left':0},3000);
    }
});