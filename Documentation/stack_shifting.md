# Stack Shifting

You can shift the stack using `<` and `>` inside [relative mode](#Documentation/relative_stack.md).

We can use `/_.` to show the contents of the stack

```
+^+^+^ pushes 1 and 2 and 3 to the stack
/_._._.
```
Output:
```
321
```

Now lets shift it to the left by one:

```
+^+^+^
~ go into relative mode
< shift it to the left
~ exit relative mode
/_._._.
```
Output:
```
213
```

You can see that all values were shifted to the left, and the 3 was brought to the end. This applies to right shifting with `>` as well, just in the opposite direction.