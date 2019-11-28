(function() {
    let dest = 'https://rel.ink/api/links/';

    //generando link


    $('.search .generate-link').click(function(){
        var url = $('.search #input-link').val();
        var form =  'url='+url;
        $.ajax({
            type: "POST",
            url: dest,
            data: form,
            success: function(data) {

                $('.result').addClass('actived');


                $('.result').append('<div class="item"> <div class="url">'+url+'</div> <div class="actions"> <div class="short-link">short.link/'+data.hashid+'</div> <div class="primary-button copy">copy</div> </div> </div>');

                //copiando shorted link
                $('.result .copy').click(function(){
                    $(this).addClass('copied');
                    $(this).text('Copied !');
                    copy_text($(this).siblings('.short-link'));
                });
            },
            error: function() {
            alert('no se pudo obtener la URL');
        }
        });
    });


    function copy_text(copyText) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(copyText).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

})(jQuery);