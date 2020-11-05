# Fibonacci

Here is an example code for the fibonacci sequence in Mybraine

```
/,[\>\]\$\|>+<-[\>\]\$\|>>+<<-[\>\]\$\|[>^>!^`+`>_<<_<-]
>>.
```
It should be able to calculate up to the integer limit.

Here is a commented version:

```
/,              Ask for Input
[\>\]\$\        End if input is 0
|>+<-[\>\]\$\   Set up by adding 1 and 1
|>>+<<-[\>\]\$\ to the first and second cells
|[>^>           push first number to stack
!^              push second to END of stack
`+`             add first to second
>_              release first number in empty cell
<<_             release second number in first number's place
<-              decrement the input
] 
>>.             display the output
```

[go back](#Documentation/_README.md)