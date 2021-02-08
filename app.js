

$(".submit").on("click", function(){
    var number = Math.floor(Math.random() * 11) + 1;      //number between 1-10
    var userNumber = $("#number").val();

    console.log(number);
    
    $(".randomNumber").html("Random Number: " + number)

    if (number == userNumber) {
        $(".answer").html("CONGRATULATIONS! You guessed correctly")
    } else{
        $(".answer").html("Better Luck Next Time!")
    }

    if (userNumber > 10){
        alert("Number entered too high!")
        return;
    }

})


