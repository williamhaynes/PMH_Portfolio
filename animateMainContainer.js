/**
 * Created by William on 13/05/2016.
 */

$(function() {
    $(".hLink").click(function () {
        moveBox();
        var hyperlinkDirector = ($(this).attr('id'));
        /*alert(hyperlinkDirector);*/
        setTimeout(navigateToPage, 1500, hyperlinkDirector);

    });
});

function moveBox(){
    /*alert("Inside Move Box");*/
    //Move whole div up
    setTimeout(moveWholeMainContainerUp, 500);
    setTimeout(hideClientRole, 1100);
    //About Portfolio Contact Move Up
}

function moveWholeMainContainerUp(){
    //Move whole div up
    $("#mainContainer").animate({top: '150px'});
}

function hideClientRole(){

    //Composer & Musician Disappear
    $("#clientRole").hide();
    $("nav").animate({'padding-top' : '-10px'});

}


function navigateToPage(data){
    /*alert("Inside Navigate To Page");*/
    if(data == "about"){window.location = "about.html";}
    else if(data == "portfolio"){window.location = "portfolio.html";}
    else if(data == "contact"){window.location = "contact.html";}
}