/**
 * Created by William on 18/05/2016.
 */
$(function() {
    $(".hLink").click(function () {
        var whatClicked = ($(this).attr('id'));
        /*alert(whatClicked);*/
        toggleBetweenCompositionPerformance(whatClicked);
    });
});


function toggleBetweenCompositionPerformance(data){
    /*alert("Inside toggle");*/
    if(data == "compositions"){
    $(".compositionItem").show();}
        
    else if(data == "performances"){
        $(".compositionItem").hide();
    }

}