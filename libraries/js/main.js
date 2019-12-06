(function() {
    let dest = 'https://rel.ink/api/links/';

    //generando link


    if (window.localStorage.getItem('urlsa')) {

        urls = JSON.parse(window.localStorage.getItem('urlsa'));
        console.log(urls);

        urls.map(function(value) {
            $('.result').addClass('actived');
            $('.result').append('<div class="item"> <div class="url">'+value.url+'</div> <div class="actions"> <div class="short-link">short.link/'+value.shorted_url+'</div> <div class="primary-button copy">copy</div> </div> </div>');
        });


    }
    $('.search .generate-link').click(function(){
        var url = $('.search #input-link').val();
        var form =  'url='+url;
        $.ajax({
            type: "POST",
            url: dest,
            data: form,
            success: function(data) {

                $('.search span.error').hide();
                $('.search .search-box').removeClass('error');

                $('.result').addClass('actived');


                $('.result').append('<div class="item"> <div class="url">'+url+'</div> <div class="actions"> <div class="short-link">short.link/'+data.hashid+'</div> <div class="primary-button copy">copy</div> </div> </div>');


                urls = [];
                if (window.localStorage.getItem('urlsa')) {
                    urls = JSON.parse(window.localStorage.getItem('urlsa'));
                }

                urls.push({
                    'url': url,
                    'shorted_url':data.hashid
                });
                window.localStorage.setItem('urlsa',JSON.stringify(urls));

                //copiando shorted link
                $('.result .copy').click(function(){
                    $(this).addClass('copied');
                    $(this).text('Copied !');
                    copy_text($(this).siblings('.short-link'));
                });
            },
            error: function() {
                $('.search span.error').show();
                $('.search .search-box').addClass('error');
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