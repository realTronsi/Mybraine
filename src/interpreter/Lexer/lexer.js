const { Token, whl_queue } = require("./token")
const parse = require("../Parser/parser")

const KEY = [">", "<", "+", "-", "[", "]", ".", ",", "{", "}", ":", "*", "/", "$", "\\", "|", "^", "_", "`", "?", "&", "!"]
const TOKENS = []

let index = 0

function lex(data){
  for(let i of data){
    if(KEY.includes(i)){
      TOKENS.push(new Token(i, index))
      index++
    }
  }
  try {
    if(whl_queue.length > 0){
      throw new Error(`Unresolved bracket '${whl_queue[0].val}'`)
    }
  } catch (err){
    console.error(err)
  }
  parse(TOKENS)
}

module.exports = lex;