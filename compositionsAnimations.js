/**
 * Created by William on 18/05/2016.
 */
$(function() {

    $(".compositionItemTitle").click(function () {
        var whatClicked = $(this).parent().attr('id');
        /*alert(whatClicked);*/
        $("body").css({ /*This css update updates some scroll issues due to collapsible expandable boxes*/
            "overflow-y": "scroll",
            "overflow-x": "hidden"
        });
        expandCollapseSelection(whatClicked);
    });

});

function expandCollapseSelection(data){
    /*alert("inside Expand Collapse");*/
    //check to see if expanded/collapsed
    var whatHeight = $("#"+data).css("height");
    /*alert(whatHeight);*/

    //ensure other two divs are collapsed
    if(data=="LOLvideos"){
        /*alert("ASvideos" + " Avideos");*/
        $('#ASvideos').scrollTop(0);
        $('#Avideos').scrollTop(0);
        $("#ASvideos").css({
                "height": "70px",
                "color" : "black",
            "font-size" : "30px",
            "overflow-y" : "hidden"
            }
        )
        $("#Avideos").css({
                "height": "70px",
                "color" : "black",
            "font-size" : "30px",
            "overflow-y" : "hidden"
            }
        )
    }
    else if(data=="ASvideos"){
        /*alert("LOLVideos" + " AVideos");*/
        /*Autoscroll to top when div closed*/
        $('#LOLvideos').scrollTop(0);
        $('#Avideos').scrollTop(0);

        /*Update Css rules to close potentially open video sections*/
        $("#LOLvideos").css({
                "height": "70px",
                "color" : "black",
            "font-size" : "30px",
            "overflow-y" : "hidden"
            }
        )
        $("#Avideos").css({
                "height": "70px",
                "color" : "black",
            "font-size" : "30px",
            "overflow-y" : "hidden"
            }
        )
    }
    else if(data=="Avideos"){
        /*alert("LOLVideos" + " ASVideos");*/
        $('#LOLvideos').scrollTop(0);
        $('#ASvideos').scrollTop(0);
        $("#LOLvideos").css({
                "height": "70px",
                "color" : "black",
                "font-size" : "30px",
            "overflow-y" : "hidden"
            }
        )
        $("#ASvideos").css({
                "height": "70px",
                "color" : "black",
                "font-size" : "30px",
            "overflow-y" : "hidden"
            }
        )
    }


    /*~~~~~~~~~ modify selected div~~~~~~~~*/
    /*makes selected box expand to show contents - LOL, AS, A currently*/
    if(whatHeight=="70px"){
        $("#"+data).css({
            "height": "250px",
            "color" : "black",
            "font-size" : "20px",
            "overflow-y" : "scroll"
        }

    );}

    /*makes selected box collapse to hide contents - LOL, AS, A currently*/
    else{
        $("#"+data).scrollTop(0);
        $("#"+data).css({
                "height": "70px",
                "color" : "black",
                "font-size" : "30px",
                "overflow-y" : "hidden"
            }
        );}
    }
