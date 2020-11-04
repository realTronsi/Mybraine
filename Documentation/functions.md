# Functions

### Functions are defined using brackets `{}`, and you can call them using `:`

```
{+}
```

That is a function which adds one to the current memory cell. **Functions run once upon declaration** meaning the code above will return the following output:

##### `=> [1]`

You can prevent the default action by adding a `$` to the beginning of the function:

```
{$+}
```
##### `=> [0]`

To call it, simply use `:`

```
{$+}++:
```
##### `=> [3]`

If you defined multiple functions, the previous one will be overwritten:

```
{$+}{$-}:
```
##### `=> [-1]`

[go back](#Documentation/_README.md)