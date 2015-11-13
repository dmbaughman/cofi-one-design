(function(){

    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

    var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
        var html = $(this).parent().html();
        html = cleanSource(html);
        $("#source-modal pre").text(html);
        $("#source-modal").modal();
    });

    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();

    $(".bs-component").hover(function(){
        $(this).append($button);
        $button.show();
    }, function(){
        $button.hide();
    });

})();