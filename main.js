const taglines = [
    "a cool guy",
    "a gamer",
    "an electrician",
    "a lazy guy",
    "also known as Nico",
    "always tired"
]

let tagline = $("#tagline");
tagline.html("Sarkasaa is " + taglines[Math.floor(Math.random() * taglines.length)] + " and this is his website!<br>Look around and see what you can find about me.");

var btn = document.getElementById("dbtn");
var clipboard = new ClipboardJS(dbtn);