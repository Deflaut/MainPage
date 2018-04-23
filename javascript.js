
$(".menuIcon").on("click",function(){
    $(this).toggleClass("active"),
    $("nav").toggleClass("mobileH")}),

$("nav a").on("click",function(){$(this).hasClass("mobileH")||($("nav").addClass("mobileH"),$(".menuIcon").toggleClass("active"))}),
    
    $(".s1").on("click",function(){$("body, html").animate({scrollTop:$(".about").offset().top-50},300)}),
    $(".s2").on("click",function(){$("body, html").animate({scrollTop:$(".product").offset().top-50},500)}),
    $(".s3").on("click",function(){$("body, html").animate({scrollTop:$(".contact").offset().top},500)}), 
    $(document).on("scroll",function(){
    $(document).scrollTop()-100>$(".arg2").offset().top-$(window).innerHeight()&&(console.log("już2"),$(".arg2").addClass("active")),$(document).scrollTop()-100>$(".arg3").offset().top-$(window).innerHeight()&&(console.log("już3"),$(".arg3").addClass("active")),$(document).scrollTop()-100>$(".arg4").offset().top-$(window).innerHeight()&&(console.log("już4"),$(".arg4").addClass("active")),$(document).scrollTop()+100>$(".one").offset().top-$(window).innerHeight()&&(console.log("jużOne"),$(".one").addClass("vis")),$(document).scrollTop()+100>$(".two").offset().top-$(window).innerHeight()&&
    (console.log("jużOne"),$(".two").addClass("vis")),$(document).scrollTop()<150&&($(".arg").removeClass("active"),$(".opinion").removeClass("vis"))});

