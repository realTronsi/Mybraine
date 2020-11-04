# Using the Stack

The stack is a storage space where you can push values to. You can push a value to the stack by using `^`

```
++^
```

This will push the value of 2 to the stack. You can push as many to the stack as you would like. To release it from the stack, use `_`. Releasing from the stack will set the current cell to the value of the released value.

```
++^
[-] clears
_
```
##### `=> [2]`

Releasing from the stack goes in order from the most recently pushed to the oldest push:

```
+^ pushes 1 to the stack
+^ pushes 2 to the stack
+^ pushes 3 to the stack
[-] clears all
_> this is 3
_> this is 2
_> this is 1
```
##### `=> 3 2 [1]`

You can use `!` to push to the **end** of the stack or get the **last** value from the stack instead of the first:

```
!^ pushes current value to end of stack
!_ gets the last value from the stack
```

#

You can perform operations via the stack as well using the backtick, you can read on it [here](#Documentation/env.md)


[go back](#Documentation/_README.md)
