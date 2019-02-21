var d = new Date();
var n = d.getDay();
let greetings;
var day = {
    isWednesday: function () {
        return n == 3;
    }
}

if (day.isWednesday()) {
    greetings = ["It's Wednesday my dudes!!!"]
} else {
    greetings = [
        "Henlo :D",
        "'Sup?",
        //"It's Wednesday my dudes",
        "I have a boyfriend",
        "The world is quiet here",
        "What's the price of a mile?",
        "I'm a tree",
        "Your ass"
    ]
}


let greeting = $("#greeting");
greeting.html(greetings[Math.floor(Math.random() * greetings.length)]);