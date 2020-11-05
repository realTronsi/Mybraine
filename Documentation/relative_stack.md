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

[go back](#Documentation/env.md)