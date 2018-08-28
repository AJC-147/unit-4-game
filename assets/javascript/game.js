var targetNumber = Math.floor(Math.random() * 120) + 19;

$("#number-to-reach").text("Your target score is: " + targetNumber);

var counter = 0;

var wins = 0;
var losses = 0;

var gemGeneration = function () {

    var numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];


    var imageRuby = $("<img>");
    imageRuby.addClass("gems");
    imageRuby.attr("src", "./assets/images/ruby.png");
    imageRuby.attr("data-gemvalue", numberOptions[0]);
    $("#gems").append(imageRuby);


    var imagePurple = $("<img>");
    imagePurple.addClass("gems");
    imagePurple.attr("src", "./assets/images/purple.png");
    imagePurple.attr("data-gemvalue", numberOptions[1]);
    $("#gems").append(imagePurple);


    var imageEmerald = $("<img>");
    imageEmerald.addClass("gems");
    imageEmerald.attr("src", "./assets/images/emerald.png");
    imageEmerald.attr("data-gemvalue", numberOptions[2]);
    $("#gems").append(imageEmerald);


    var imageSapphire = $("<img>");
    imageSapphire.addClass("gems");
    imageSapphire.attr("src", "./assets/images/sapphire.png");
    imageSapphire.attr("data-gemvalue", numberOptions[3]);
    $("#gems").append(imageSapphire);
}


var reset = function () {
    counter = 0;
    $("#gems").empty();
    gemGeneration();

    var resetTarget = function () {
        $("#number-to-reach").empty();
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-reach").text("Your target score is: " + targetNumber);
    }


    $(".gems").on("click", function () {

        var gemValue = ($(this).attr("data-gemvalue"));
        gemValue = parseInt(gemValue);

        counter += gemValue;

        $("#playerscore").text("Your total score is: " + counter);

        if (counter === targetNumber) {
            $("#outcome").text("You win!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
            resetTarget();
        } else if (counter >= targetNumber) {
            $("#outcome").text("You lose!");
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
            resetTarget();
        }

    });
}

reset();