const greetings = [
    "Henlo :D",
    "'Sup?",
    "It's Wednesday my dudes",
    "I have a boyfriend"
]

let greeting = $("#greeting");
greeting.html(greetings[Math.floor(Math.random() * greetings.length)]);