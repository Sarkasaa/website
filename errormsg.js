const errormsgs = [
    "Where are we?",
    "How did you end up here?",
    "Oh, that's not supposed to happen.",
    "Huston, we have a problem."
]

let errormsg = $("#errormsg");
errormsg.html(errormsgs[Math.floor(Math.random() * errormsgs.length)]);