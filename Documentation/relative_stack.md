# Relative Stack

You can use `~` to toggle between normal and relative stack. With relative stack everything you do related to the stack such as pushing and releasing will be relative to the current cell value.

```
+>++>+++
>~^ push the 0th cell to the stack since current cell is 0
_
```
##### `=> 1 2 3 [1]`

This applies to `^`, `_`, and `?` as well

```
++~_ releases 2nd value from stack
```

#

Inside relative mode, you can also shift the stack.

```
+^+^+^
```
we add three values to the stack which makes it look like this:
`3, 2, 1`

Now we can go into relative stack and **shift** the entire stack over using `<` and/or `>`

```
+^+^+^~<~
```
Now the stack will look like this:
`2, 1, 3`

As you can see the stack was shifted to the left, and vice versa for `>`.

More on stack shifting [here](#Documentation/stack_shifting.md)

[go back](#Documentation/env.md)