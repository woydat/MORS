$(document).ready(function(){
    
    var headBurger = $('.headBurger')
    var headMenuLi = $('.headMenuLi');
    var headMenu = $('.headMenu');
    
    headBurger.on('click',function(){
        $(this).toggleClass('isActive');       
        $('.headMenu').toggleClass('isActive')
        })
        $('a[href^="#"]').click(function() {
            var target = this.hash,
                $target = $(target);
            
            $('html, body').animate({
                scrollTop: $target.offset().top-50
            }, 1200);
        headMenu.toggleClass('isActive')
       
        headBurger.toggleClass('isActive')
       
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
    
   
    
    var articleB = $('article.showB');
    
    
        articleB.on('click', function(){
            console.log(articleB);
    
            articleB.hide();
            $(this).show().toggleClass('article').toggleClass('articleZoom');
        
            var self = this;
            setTimeout(function(){
            if(!$(self).hasClass('articleZoom')){
               articleB.show(); 
            };
            },3000)
           
        }); 
    
    
    
    

    
  
   
    
});


