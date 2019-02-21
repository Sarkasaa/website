var d = new Date();
var n = d.getDay();

var day = {
    isWednesday: function () {
        if (n = 4) {
            return true;
        } else return false;
    }
}


if (day.isWednesday()) {
    let greetings = ["It's Wednesday my dudes!!!"]
} else {
    let greetings = [
        "Henlo :D",
        "'Sup?",
        //"It's Wednesday my dudes",
        "I have a boyfriend",
        "The world is quiet here",
        "What's the price of a mile?",
        "I'm a tree"
    ]
}


let greeting = $("#greeting");
greeting.html(greetings[Math.floor(Math.random() * greetings.length)]);