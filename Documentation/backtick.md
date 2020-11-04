# `

Toggles between normal mode and stack mode. If you don't know how to use the stack, go [here](#Documentation/using_the_stack.md) first. In stack mode many characters become operators, which can interact between the current cell and first value in the stack:

```
+^ Push 1 to the stack
` Go into stack mode
+ Adds current cell and first stack together
```
##### `=> [2]`

When we use characters such as `+`, `-`, `*`, and `/` in stack mode, they act as operators. They will do the operation between the value of the current cell and the first element in the stack.

The current cell is always first in the operation:
```
curr + stack
curr - stack
curr * stack
curr / stack
```

If the stack is empty, it will be replaced with either 0 or 1 (replaces with 1 in scenarios such as division)

More operators for the stack can be found [here](#Documentation/stack_operators.md)