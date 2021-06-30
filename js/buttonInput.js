$(document).ready(function() //kiedy dokument będzie gotowy, załadowany funkcja może zostać załadowana
{
    $("#dlcButton").click(function()
    {
    $("#dlc").fadeIn(500); //wyświetla okno z elementem o id DLC
    $("#info, #picture").fadeOut(500); //ukrywa okno z elementem o id info
    }),
    $("#infoButton").click(function()
    {
        $("#dlc, #picture").fadeOut(500);
        $("#info").fadeIn(500);       
    }),
    $("#pictureButton").click(function()
    {
        $("#dlc, #info").fadeOut(500);
        $("#picture").fadeIn(500);
    });
});

$(document).ready(function()
{
    $("#scrollUp").click(function()
    {
        $(window).scrollTop(0,0);
    });
});

$(document).ready(function()
{
    $("#scrollUp").mouseover(function()
    {
        $("#scrollUp").animate({height: "5%"}, 200, 'linear');
    });
});

/* //deprecated (Element wasn't responsive as the rest of the website (replaced with bootstrap))
$(document).ready(function()
{
    $("#dropdownButton").click(function()
    {
        $("#dropdown").fadeToggle(200);
        $("#dropdown").animate ({top: "9%"})
    });
});
*/