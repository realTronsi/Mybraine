# Flags with Functions

This code shows some advanced manipulation with flags using functions

```
|\>>\|++|{$-\>>}:\|++|-:\|++|-/.
```
#### `=> [-4]`

Everywhere you see `++` is skipped, and it is proven since otherwise the result would be much greater than -4


We are using the function to goto flags, notice how we aren't closing the backslashes, this is intentional, since otherwise flag jumping is relative, meaning it will jump to the 2nd flag on the right of the **function** rather than where it was called.

This is why we have `:\`, which calls the function then closes the backslashes, and jumping 2 flags to the right.

[go back](https://repl.it/@realTronsi/BrainF#Documentation/_README.md)
