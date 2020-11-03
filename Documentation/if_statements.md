# If Statements

You can use [loop breaks](https://repl.it/@realTronsi/BrainF#Documentation/break_from_loops.md) to simulate if statements

This checks if the current cell block is 3, and if so, it prints out the value of the current cell

```
+++ sets the first cell to 3
---[\>>\]|/.|
```

It works by subtracting three from the current cell. If it isn't 0, then the while loop will run and it will skip past the `/.`.

Equivalent C code:
```c
if(*p==3){
  code
}
code
```

We can also do if else using the same logic:

```
+++
---[\>>\]+|\>>\|+++|
```

This is the same as the previous, except after the if statement runs, we will jump 2 flags so we don't run the else.

Equivalent C code:
```c
if(*p==3){
  code
} else {
  code
}
```

Finally, we can use the same logic for **else if** statements too:

```
+++
---[\>>\]\>\
|+\>>>>\
|-[\>>\]\>\
|+++\>>\
|+++++
|
```

This will skip to the 2nd flag if it is not equal to three, and do a same exact check again to see if it is 4. If it isn't four, then the **else** will run.
If it is equal to 3, it will add 1 to the cell, if it is equal to 4, it will add 3 to the cell, otherwise it will add 5.

Equivalent C code:

```c
if(*p==3){
  code
} else if(*p==4){
  code
} else {
  code
}
```

#### Keep in mind these if statements edit the cell directly, you can use [this](https://repl.it/@realTronsi/BrainF#Documentation/duplicate_cells.md) trusty code to copy a cell twice, which you can store in a [function](https://repl.it/@realTronsi/BrainF#Documentation/functions.md) for easy use

[go back](https://repl.it/@realTronsi/BrainF#Documentation/_README.md)