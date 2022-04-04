$(document).ready(function () {

    // loop adds handlers to all togglers for answers in quiz
    for (let i = 1; i < 3; i++) {
        $("#toggler" + i).click(function () {
            $("#answer" + i).toggle();
        });
    }

    // check answer to free response
    $("#check-answer").click(function () {
        var answer = $("#answer").val();
        if(answer === "-3") {
            $("#correct-answer").show();
            $("#wrong-answer").hide();
        } else {
            $("#wrong-answer").show();
            $("#correct-answer").hide();
        }
    });
});