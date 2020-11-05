# Pointer Jumping

You can jump pointers to quickly go to a specific pointer location and jump back using the stack.

```
+++++ set 5 to first cell
>>> go to third position
?^ add pointer position to stack
[-]*^ go to first cell and push its value to the stack
!_* return to third position
_
```
##### `=> 3 0 0 [5]`

This script goes to the third position, jumps to the first position and takes the value of the first cell and jumps back. This can work for any interval of positions, and is very useful.

### `As of v1.6, use` [`this`](#Documentation/relative_stack.md)
### `for pointer jumping for pushing to the stack`

[go back](#Documentation/_README.md)