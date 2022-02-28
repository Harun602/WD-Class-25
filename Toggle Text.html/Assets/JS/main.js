


// hide()  -- show()  -- toggle()
// slideUp()  --  slideDown()  --  slideToggle()
// fadeOut()  --  fadeIn()  -- fadeToggle()


$(document).ready(function(){
    
   
    
    $(".all-buttons .hide-text-button").on("click",function(){
        $(".test p").hide(1000);
    });
    
    $(".all-buttons .show-text-button").on("click",function(){
        $(".test p").show(1000);
    });
    
    $(".all-buttons .toggle-text-button").on("click",function(){
        $(".test p").toggle(1000);
    });
    
    
    
    
    
    
    
});