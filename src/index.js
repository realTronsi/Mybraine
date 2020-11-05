const fs = require("fs")
const lex = require("./interpreter/Lexer/lexer")

fs.readFile("main.my", "utf-8", (err, data)=>{
  if(err)throw err
  lex(data)
})