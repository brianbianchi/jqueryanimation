$(document).ready(function() {

    // on load
    $("#projects").hide();
    $("#home").show();
    $("#home .section").each(function(i, e) {
        $(this).hide().delay(i*500).fadeIn(800);
    });
    $(".topborder").animate({'width':'+=400px'}, 2000);
    $(".leftborder").animate({'height':'+=500px'}, 2000);
    $(".topline1").animate({'width':'+=300px'}, 2000);
    $(".topline2").animate({'width':'+=200px'}, 2000);

    // project button press
    $("#prjbtn").click(function() {
        $($("#home .section").get().reverse()).each(function(i, e) { 
            $(this).delay(i*300).fadeOut(800);
        });
        $(".topborder").animate({'width':'-=400px'}, 1200);
        $(".leftborder").animate({'height':'-=500px'}, 1200);
        $(".topline1").animate({'width':'-=300px'}, 1200);
        $(".topline2").animate({'width':'-=200px'}, 1200);

        $(".topline1").delay(0).queue(function (next) {
            $("#home").hide();
            $("#projects").show();
            $("#projects .section").each(function(i, e) {
                $(this).hide().delay(i*300).fadeIn(800);
            });
            $(".topborder").animate({'width':'+=400px'}, 1200);
            $(".leftborder").animate({'height':'+=500px'}, 1200);
            $(".topline1").animate({'width':'+=300px'}, 1200);
            $(".topline2").animate({'width':'+=200px'}, 1200);
            next();
        });
    });

    // home button press
    $("#homebtn").click(function() {
        $($("#projects .section").get().reverse()).each(function(i, e) { 
            $(this).delay(i*300).fadeOut(800);
        });
        $(".topborder").animate({'width':'-=400px'}, 1200);
        $(".leftborder").animate({'height':'-=500px'}, 1200);
        $(".topline1").animate({'width':'-=300px'}, 1200);
        $(".topline2").animate({'width':'-=200px'}, 1200);

        $(".topline1").delay(0).queue(function (next) {
            $("#home").show();
            $("#projects").hide();
            $("#home .section").each(function(i, e) {
                $(this).hide().delay(i*300).fadeIn(800);
            });
            $(".topborder").animate({'width':'+=400px'}, 1200);
            $(".leftborder").animate({'height':'+=500px'}, 1200);
            $(".topline1").animate({'width':'+=300px'}, 1200);
            $(".topline2").animate({'width':'+=200px'}, 1200);
            next();
        });
    });

});