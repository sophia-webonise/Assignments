$(document).ready(function() {
    $(".plans").hide();
    $(".plans:first").show();
    $(".planDuration li a").click(function () {
        var tablink = $(this).attr('href');
        $(".plans").hide();        
        $(tablink).show();
        $(this).parents(".planDuration").find('li').removeClass("active").find('a');
        $(this).parents(".planDuration li").addClass("active").find('a');
        return false;
    });
});