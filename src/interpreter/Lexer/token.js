const whl_queue = []

class Token {
  constructor(value, index){
    this.val = value
    this.type = matchType(value)
    this.index = index
    if(value == "[")
      whl_queue.push(this)
    if(value == "]"){
      try {
        let matches = whl_queue.filter(e=>e.val=="[")
        if(matches.length==0)throw new Error("Unresolved bracket ']'")
        const match = matches.pop()
        match.pairAddress(index)
        this.pairAddress(match.index)
        whl_queue.splice(whl_queue.indexOf(whl_queue.find(e=>e==match)) ,1)
      } catch (err){
        console.error(err)
      }
    }
  }
  pairAddress(index){
    this.pa = index;
  }
}

function matchType(val){
  const KEY = {
    ">": "mv-p",
    "<": "mv-p",
    "*": "mv-p",
    "+": "opr",
    "-": "opr",
    "[": "whl",
    "]": "whl",
    ".": "io",
    ",": "io",
    "{": "func",
    "}": "func",
    ":": "func",
    "$": "func",
    "/": "env",
    "`": "env",
    "\\": "goto",
    "|": "flag",
    "^": "stk",
    "_": "stk"
  }
  return KEY[val]
}

module.exports = { Token, whl_queue }