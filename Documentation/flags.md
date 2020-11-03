# Flags

Flags are the equivalent of **goto** in C. You can indicate a flag using `|`.

You can jump to any flag by using `<` and `>`inside two backslashes `\\`:

```
\>\++|++
```
#### `=> [2]`

We are defining a flag, and we use one `>` inside the two backslashes to indicate we want to move to the first flag on the right

You can also go backwards

```
--|+[\<\]
```
#### `=> [0]`

You can use `*` instead of `<` and `>` to jump to a flag based on the current cell value

```
++\*\|\$\|/.\$\|
```

We set the current cell value to 2, then we use `*` to jump to the second flag

If we had jumped to any other flag, the program would have ended and **2** would not have been printed out in the console

[go back](https://repl.it/@realTronsi/BrainF#Documentation/_README.md)