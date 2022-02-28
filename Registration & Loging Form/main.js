



$(document).ready(function(){
    $(".reg-button").on("click",function(){
        $(".registration-form").slideDown(10);
        $(".login-form").slideUp(10);
    });
    
    $(".login-button").on("click",function(){
        $(".registration-form").slideUp(10);
        $(".login-form").slideDown(10);
    });
    
});