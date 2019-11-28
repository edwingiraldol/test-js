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

                $('.result').addClass('actived')


                $('.result').append('<div class="item"> <div class="url">http://jenkins-vpc.tigocloud.net/</div> <div class="actions"> <div class="short-link">short.link/sdcsdcsd</div> <div class="primary-button copy">copy</div> </div> </div>')

                $('.result .copy').click(function(){
                    $(this).addClass('copied');
                    $(this).text('Copied !');
                });
            },
            error: function() {
            alert('There was some error performing the AJAX call!');
        }
        });
    });



})(jQuery);