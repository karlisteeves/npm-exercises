const $ = require('jquery');

$(document).ready(function() {
    alert("Hello world!");
});

$(document).ready(function() {
    $(body).css("background", "lavender");
})

$("h3").html("If I Jump Out Of The 6th Floor, Will I Die or Just Get Hurt Real Bad?");

function sayHello(){
    return "Hello!"
}

console.log(sayHello());