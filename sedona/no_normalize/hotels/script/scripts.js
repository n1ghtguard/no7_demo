window.onload = function(){





    $('.site-form .form-title').click(function(e) {
        e.preventDefault();
        console.log(1);
        $('.site-form form').slideToggle(200);
    });

    $(".count-adults").click(function(e){
        e.preventDefault();

       var input = $('input[name="adults-count"]');
       var i = $(input).val();

           if ( $(this).hasClass("count-button-plus")  ){i++}
           else{i--};

        if (i >= 0){
       $(input).val(i)}
       });


    $(".count-children").click(function(e){
        e.preventDefault();

        var input = $('input[name="children-count"]');
        var i = $(input).val();

        if ( $(this).hasClass("count-button-plus")  ){i++}
        else{i--}

        if (i >= 0){
        $(input).val(i)}

    });

    $('.site__menu-button--menu').click(function(){
        $('.top-menu li:not(.top-menu-item__logo)').slideToggle(200);
    })
    $('.site__menu-button--cross').click(function(){
        $('.top-menu li:not(.top-menu-item__logo)').slideUp(200);
    })

}