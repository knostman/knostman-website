$(document).ready(function () {
    //Execute the API call.
    var fact = $.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");

    //Function that runs when the API runs successfully
    fact.done(function (response) {
        //Set the image
        console.log(response);

        //Picture
        // $("#astronomyPicture").show();
        $("#astronomyPicture").attr("src", response.url);

        //Title
        $("#astronomyPictureTitle").text(response.title);

        //Description
        $("#astronomyPictureDescription").text(response.explanation);

        //Copyright
        $("#astronomyPictureCopyright").text(response.copyright);

        //Date
        $("#astronomyPictureDate").text(response.date);


    });
});