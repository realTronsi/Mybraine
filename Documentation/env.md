# Environment Variables

These are not the same as `.env`, but instead are variables that affects how the interpreter works.

#

## / - Forward Slash

Toggles the output between ascii characters and numbers for **both input and output**.


For input, this makes the first cell 65, which is the ascii code for **A**.
```
+++++[>+++++++++++++<-]>.
```
If we add a `/`, instead of printing **a**, it will print **65**.

```
+++++[>+++++++++++++<-]>/.
```

However, **/** is a toggle, so if you want to output in ascii again, you will need to use it again to toggle it back

```
+++++[>+++++++++++++<-]>/./.
```
```
65A
```

For output, during number mode, the user inputs will be pushed to the current cell as a number

```
/,
```
(If for example 100 was entered)
##### `=> [100]`

> If an invalid number was entered, such as `asdf`, it will default to 0

#

## ` - Backtick

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


[go back](#Documentation/_README.md)