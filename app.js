$(document).ready(function(){
    
    $('.headBurger').on('click',function(){
        $(this).toggleClass('isActive');       
        $('.headMenu').toggleClass('isActive')
    });
    
    $('*[data-animate]').addClass('hide').each(function(){
        $(this).viewportChecker({
            classToAdd: 'show animated ' + $(this).data('animate'),
            classToRemove: 'hide',
            offset: '30%'
        });
    });
    
    $(".headLogoSpan").click(function() {
        $('html, body').animate({
            scrollTop: $(".mors").offset().top
        }, 1200);
    });
    
    var article = $('.showA');
    var vheight = $('divArticle').outerHeight();
    
    
        article.on('click', function(){
            $('article.showB').toggle('.hide');  
        });  
    
    
    var articleB = $('article.showB');
    
    articleB.each(function(){
        $(this).on('click', function(){
            
            $(this).siblings().toggleClass('hide');
        });  
    })
    
  
   
    
});