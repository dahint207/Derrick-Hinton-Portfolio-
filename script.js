$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else
        $('.navbar').addClass("sticky");
    });
   // toggle menu/navbar script 
   $('.menu-btn').click(function(){
        $('.navbar').removeclass("sticky");
            $('.navbar .menu').toggleClass("active ");
            $('.navbar .menu i').toggleClass("active ");
   });
});