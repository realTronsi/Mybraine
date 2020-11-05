const fs = require("fs")
const lex = require("./interpreter/Lexer/lexer")

fs.readFile("main.myb", "utf-8", (err, data)=>{
  if(err)throw err
  lex(data)
})