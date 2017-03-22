$(document).ready(function(){
    
    $('.headBurger').on('click',function(){
        $(this).toggleClass('isActive');       
        $('.headMenu').toggleClass('isActive')
    });
    
    
});