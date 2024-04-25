```sh
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
  console. log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

Данный код выводит в консоль строку Bad: undefined четыре раза, так как на момоент вызова setTimeout i = 4.
arr[4] это undefined, что по условию ведет на false

Вариант 1:

```sh
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
  console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```


Вариант 2:

```sh
arr.forEach(number => {
  setTimeout(function() {
      console.log(number > 13 ? `Good: ${number}` : `Bad: ${number}`)
      }, 3000)
})
```