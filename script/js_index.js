$(document).ready(function(){
    $("#nav_switch").click(function(){
        if ($("#nav_toggle").is(":visible")) {
            $(".LOGO-TAP").css("display","flex");
            $("#nav_toggle").hide();
        } else {
            $(".LOGO-TAP").css("display","none");
            $("#nav_toggle").css("display","flex");
        }
    });
});