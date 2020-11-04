const readline = require('readline-sync')

let p = 0
let prev = null
let out_ascii = true
let await_goto = null
let goto_rel = true
let dnr = false
let stk_mode = false
const flags = []
let stack = []
const STK = []
for (let i = 0; i < 30000; i++) {
  STK.push(0)
}

let funcAddresses = []
let returnAddress = 0

function parse(TOKENS) {
  handleFlags(TOKENS)
  for (let t = 0; t < TOKENS.length; t++) {
    if (dnr == false) {
      if (TOKENS[t].type == "opr") {
        handleOpr(t, TOKENS)
      } else if (TOKENS[t].type == "mv-p") {
        handleMvP(t, TOKENS)
      } else if (TOKENS[t].type == "io") {
        handleIo(t, TOKENS)
      } else if (TOKENS[t].type == "whl") {
        t = handleWhl(t, TOKENS)
      } else if (TOKENS[t].type == "func") {
        t = handleFunc(t, TOKENS)
      } else if (TOKENS[t].type == "env") {
        handleEnv(t, TOKENS)
      } else if (TOKENS[t].type == "goto") {
        t = handleGoto(t, TOKENS)
      } else if (TOKENS[t].type == "stk") {
        handleStk(t, TOKENS)
      } else if (TOKENS[t].type == "ptr") {
        handlePtr(t, TOKENS)
      }
    } else {
      if (TOKENS[t].type == "func")
        t = handleFunc(t, TOKENS)
      if (t == "brk") break;
    }
    prev = TOKENS[t]
  }
  printSTK()
}

function handlePtr(t, TOKENS) {
  if (TOKENS[t].val == "?") {
    if (stk_mode) {
      if (prev.val == "!") {
        STK[p] = (stack[stack.length - 1] || 0)
      } else {
        STK[p] = (stack[0] || 0)
      }
    } else {
      STK[p] = p
    }
  }
  if (TOKENS[t].val == "&") {
    if (stk_mode) {
      stack = []
    } else {
      STK.fill(0, 0, 29999)
    }
  }
}

function handleStk(t, TOKENS) {
  if (TOKENS[t].val == "^") {
    if (prev.val == "!") {
      stack.push(STK[p])
    } else {
      stack.unshift(STK[p])
    }
  }
  if (TOKENS[t].val == "_") {
    if (prev.val == "!") {
      STK[p] = (stack.pop() || 0)
    } else {
      STK[p] = (stack.shift() || 0)
    }
  }
}

function handleFlags(TOKENS) {
  for (let t in TOKENS) {
    if (TOKENS[t].val == "|") {
      flags.push(t)
    }
  }
}

function handleAbsGoto(t, TOKENS) {
  goto_rel = true
  let index = await_goto - 1
  returnAddress = 0
  if (index >= flags.length || index < 0) throw new Error(`Flag out of bounds (${t})`)
  await_goto = null
  return flags[index]
}

function handleRelGoto(t, TOKENS) {
  if (await_goto == 0) {
    return t
  }
  for (let i = 0; i < flags.length; i++) {
    if (flags[i] > t) {
      if (await_goto > 0) {
        let index = i + await_goto - 1
        if (index >= flags.length) throw new Error(`Flag out of bounds (${t})`)
        returnAddress = 0
        await_goto = null
        return flags[index]
      }
      if (await_goto < 0) {
        let index = await_goto - i
        if (index < 0) throw new Error(`Flag out of bounds (${t})`)
        returnAddress = 0
        await_goto = null
        return flags[index]
      }
      break;
    }
  }
  if (await_goto > 0) throw new Error(`Flag out of bounds (${t})`)
  let index = flags.length + await_goto
  if (index < 0) throw new Error(`Flag out of bounds (${t})`)
  returnAddress = 0
  await_goto = null
  return flags[index]
}

function handleGoto(t, TOKENS) {
  try {
    if (TOKENS[t].val == "\\") {
      if (await_goto != null) {
        if (goto_rel == true) {
          return handleRelGoto(t, TOKENS)
        } else {
          return handleAbsGoto(t, TOKENS)
        }
      } else {
        await_goto = 0
        return t
      }
    }
  } catch (err) {
    console.error(err)
  }
}


function handleEnv(t, TOKENS) {
  if (TOKENS[t].val == "/") {
    if (stk_mode) {
      if (prev.val == "!" && stack[0]) {
        stack[0] = Math.floor(STK[p] / (stack[0] || 1))
      } else {
        STK[p] = Math.floor(STK[p] / (stack[0] || 1))
      }
    } else {
      out_ascii = !out_ascii
    }
  }
  if (TOKENS[t].val == "`") {
    stk_mode = !stk_mode
  }
}


function handleFunc(t, TOKENS) {
  try {
    if (TOKENS[t].val == "{") {
      if (dnr == true) {
        throw new Error(`You cannot defined a function inside a function (${t})`)
      }
      funcAddresses = []
      funcAddresses.push(t)
      return t
    }
    if (TOKENS[t].val == "}") {
      try {
        if (funcAddresses.length == 0) throw new Error("Unresolved bracket '}'")
        if (funcAddresses.length != 2) funcAddresses.push(t)
        if (!returnAddress) {
          dnr = false
          return t
        }
        if (returnAddress) {
          ra = returnAddress
          returnAddress = 0
          return ra
        }
      } catch (err) {
        console.error(err)
      }
    }
    if (TOKENS[t].val == ":") {
      if (funcAddresses.length == 2) {
        returnAddress = t
        return funcAddresses[0]
      }
      return t
    }
    if (TOKENS[t].val == "$") {
      if (prev.val == "{") {
        TOKENS[t].type = ""
        dnr = true
        return t
      }
      if (await_goto != null) {
        return "brk"
      }
    }
    return t
  } catch (err) {
    console.error(err)
  }
}

function handleWhl(t, TOKENS) {
  if (TOKENS[t].val == "[") {
    if (STK[p] == 0) {
      return TOKENS[t].pa
    }
    return t
  }
  if (TOKENS[t].val == "]") {
    if (STK[p] != 0) {
      return TOKENS[t].pa
    }
    return t
  }
}

function handleIo(t, TOKENS) {
  if (TOKENS[t].val == ".") {
    if (out_ascii) {
      process.stdout.write(String.fromCharCode(STK[p]))
    } else {
      process.stdout.write(String(STK[p]))
    }
  }
  if (TOKENS[t].val == ",") {
    input = readline.question("")
    if (input) {
      if (out_ascii) {
        STK[p] = input[0].charCodeAt()
      } else {
        STK[p] = Number(input)
        if (STK[p] == NaN) STK[p] = 0
      }
    } else {
      if (out_ascii) {
        STK[p] = 10
      } else {
        STK[p] = 0
      }
    }
  }
}

function handleMvP(t, TOKENS) {
  try {
    if (TOKENS[t].val == ">") {
      if (await_goto == null) {
        p++
      } else {
        await_goto++
      }
    }
    if (TOKENS[t].val == "<") {
      if (await_goto == null) {
        p--
      } else {
        await_goto--
      }
    }
    if (TOKENS[t].val == "*") {
      if (await_goto == null) {
        if (stk_mode) {
          if (prev.val == "!" && stack[0]) {
            stack[0] = STK[p] * (stack[0] || 0)
          } else {
            STK[p] = STK[p] * (stack[0] || 0)
          }
        } else {
          p = STK[p]
        }
      } else {
        await_goto = STK[p]
        goto_rel = false
      }
    }
    if (p <= -1 || p > 29999) throw new Error(`Pointer out of scope (${t})`)
  } catch (err) {
    console.error(err)
  }
}

function handleOpr(t, TOKENS) {
  if (TOKENS[t].val == "+") {
    if (stk_mode) {
      if (prev.val == "!" && stack[0]) {
        stack[0] = STK[p] + (stack[0] || 0)
      } else {
        STK[p] = STK[p] + (stack[0] || 0)
      }
    } else {
      STK[p]++
    }
  }
  if (TOKENS[t].val == "-") {
    if (stk_mode) {
      if (prev.val == "!" && stack[0]) {
        stack[0] = STK[p] - (stack[0] || 0)
      } else {
        STK[p] = STK[p] - (stack[0] || 0)
      }
    } else {
    STK[p]--
    }
  }
}

function printSTK() {
  process.stdout.write(`\x1b[38;2;120;255;100m`);
  let output = "\n=> "
  if (p > 6) {
    console.log(`${output}... ${STK[p - 5]} ${STK[p - 4]} ${STK[p - 3]} ${STK[p - 2]} ${STK[p - 1]} [${STK[p]}]`)
  } else {
    for (let i = 0; i <= p - 1; i++) {
      output = output + String(STK[i]) + " "
    }
    let output2 = " "
    for (let i = p + 1; i <= 5; i++) {
      output2 = output2 + String(STK[i]) + " "
    }
    console.log(`${output}[${STK[p]}]${output2}`)
  }
}

module.exports = parse