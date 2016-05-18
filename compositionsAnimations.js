/**
 * Created by William on 18/05/2016.
 */
$(function() {
    $(".compositionItem").click(function () {
        var whatClicked = ($(this).attr('id'));
        /*alert(whatClicked);*/
        $("body").css({
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
    if(whatHeight=="70px"){
        $("#"+data).css({
            "height": "250px",
            "color" : "red",
            "font-size" : "20px",
            "overflow-y" : "scroll"
        }

    );}

    else{
        $("#"+data).css({
                "height": "70px",
                "color" : "black",
                "font-size" : "30px",
                "overflow-y" : "hidden"
            }
        );}
    }
