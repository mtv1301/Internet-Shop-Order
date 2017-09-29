$(document).ready(function () {
    $(".comment-reference").click(function () {
        console.log('textarea display: show');
        $(".comment-reference").slideToggle("slow", function () {
            $(".comment-reference").hide();
            $("#commentInput").show();
        });
    });
});