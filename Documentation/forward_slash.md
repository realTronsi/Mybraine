# /

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