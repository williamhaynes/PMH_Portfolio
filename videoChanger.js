/**
 * Created by William on 30/05/2016.
 */



$(function() {
/*
    $("li").click(function() {
        alert("POTATO");
        /*var whatClicked2 = $(this).attr('id');
        alert(whatClicked2);
        /*player.loadVideoById(whatClicked2, 0, "default");

    });*/

    $("#compositionItemContainer").on("click", "li", function() {
        var whatClicked2 = $(this).attr('id');
        /*alert(whatClicked2);*/
        player.loadVideoById(whatClicked2, 0, "default");
    });


});