const greetings = [
    "Henlo :D",
    "'Sup?",
    "It's Wednesday my dudes",
    "I have a boyfriend",
    "The world is quiet here",
    "What's the price of a mile?"
]

let greeting = $("#greeting");
greeting.html(greetings[Math.floor(Math.random() * greetings.length)]);