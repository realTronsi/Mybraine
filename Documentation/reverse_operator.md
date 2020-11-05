# Reverse Operator

## In the Stack

You may put `!` in front of a stack operator so that the result is set to the stack rather than the current cell.

```
++^`+`
```
The current cell will become 4, and the stack will stay as 2.

```
++^`!+`
```

Now by adding `!`, the current cell will stay as 2 and the stack will become 4

This applies to all arithmetic operators for the stack as well as [comparative operators](#Documentation/comparative_operators.md).

Further explore the stack [here](#Documentation/using_the_stack.md) or see more stack operators [here](#Documentation/stack_operators.md)

## Outside the Stack

You may put `!` in front of some commands to reverse them.

`!^` will push to the end of the stack instead of the beginning
`!_` will remove from the end of the stack instead of the beginning

[go back](#Documentation/_README.md)