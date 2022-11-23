const cowsay = require("cowsay")
const quote = require('inspirational-quotes');

const text = Quote.getQuote().text
console.log(
    cowsay.say({
        text: text,
        e : "oo",
        T:"U"
    })
)
//     cowsay.say({
//         text:"I'm a mooooo",
//         e: "xx",
//         T: "U"
//     })
// );