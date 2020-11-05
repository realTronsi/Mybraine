# All Characters Cheat Sheet

(If you are confused what out stack and in stack are, most charactes have different functionality inside [stack operations](#Documentation/stack_operators.md) and outside stack operations.)

| Character | Out Stack | In Stack |
|:-:|:-:|:-:|
|+|Increment current cell|Adds cell and stack [more here](#Documentation/stack_operators.md)|
|-|Decrement current cell|Subtracts cell and stack [more here](#Documentation/stack_operators.md)|
|>|Increment pointer position|Greater than operator [more here](#Documentation/comparative_operators.md)|
|<|Decrement pointer position|Less than operator [more here](#Documentation/comparative_operators.md)|
|[|Skips to matching pair if current cell is 0|NA|
|]|Skips to matching pair if cell is still not 0|NA|
|.|Prints current cell in ascii/number|NA|
|,|Asks for input|NA|
|*|Pointer jumps to value of current cell [more here](#Documentation/pointer_manipulation.md)|Multiplies cell and stack [more here](#Documentation/stack_operators.md)|
|/|Toggles between ascii and number mode [more here](#Documentation/env.md)|Divides cell and stack [more here](#Documentation/stack_operators.md)|
|{|Start of function [more here](#Documentation/functions.md)|NA|
|}|End of function [more here](#Documentation/functions.md)|NA|
|$|Stops function from executing upon declaration [more here](#Documentation/functions.md)|NA|
|\\|Goto indicator [more here](#Documentation/flags.md)|NA|
|\||Indicates a flag [more here](#Documentation/flags.md)|NA|
|^|Push current cell to stack [more here](#Documentation/using_the_stack.md)|NA|
|_|Release first element from stack [more here](#Documentation/using_the_stack.md)|NA|
|\`|Stack operation toggle [more here](#Documentation/env.md)|NA|
|?|Sets current cell to position of pointer [more here](#Documentation/pointer_manipulation.md)|Sets current cell to first element of stack without removing the element from stack [more here](#Documentation/stack_operators.md)|
|&|Clears all cells [more here](#Documentation/clear_cells.md)|Clears entire stack [more here](#Documentation/stack_operators.md)|
|!|Reverse operator, reverses many operations [more here](#Documentation/reverse_operator.md)|Reverses many operations [more here](#Documentation/reverse_operator.md)|
|~|Relative stack toggle [more here](#Documentation/relative_stack.md)|NA|
|=|Makes current cell 0|Equal to operator [more here](#Documentation/stack_operators.md)|

[go back](#Documentation/_README.md)