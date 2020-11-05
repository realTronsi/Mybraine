# Comparative Operators

## <, >, and =

Performs the comparison and sets the current cell to the result:

```
+^+`>
```
##### `=> [1]`

We are pushing 1 to the stack and setting the current cell to 2. We check if the current cell is > than the stack which is `2 > 1` which is true, so the current cell is set to `1`

`1` is for true and `0` is for false. You can use the reverse operator `!` to set the result on to the stack instead of the current cell.

```
+^`=
```
##### `=> [1]`

[go back](#Documentation/stack_operators.md)