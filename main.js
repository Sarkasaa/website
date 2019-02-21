const taglines = [
    "a cool guy",
    "a gamer",
    "an electrician",
    "a lazy guy",
    "also known as Nico",
    "always tired"
]

const errormsgs = [
    "Where are we?",
    "How did you end up here?",
    "Oh, that's not supposed to happen.",
    "Huston, we have a problem.",
    "Exsqueeze me?"
]

const n = new Date().getDay();

// assign id for index.html doc
let tagline = $("#tagline");
let errormsg = $("#errormsg");
let greeting = $("#greeting");

// discord clipboard copy
let btn = document.getElementById("dbtn");
let clipboard = new ClipboardJS(dbtn);

// is Wednesday?
let greetings;
let day = {
    isWednesday: function () {
        return n == 3;
    }
}


// Taglines rand script
tagline.html("Sarkasaa is " + taglines[Math.floor(Math.random() * taglines.length)] + " and this is his website!<br>Look around and see what you can find about me.");

// Errormsg rand script
errormsg.html(errormsgs[Math.floor(Math.random() * errormsgs.length)]);

// Greetings table
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

// Greetings rand script
greeting.html(greetings[Math.floor(Math.random() * greetings.length)]);