Тестовое задание на позицию Junior Frontend Developer

Для отправки ответов на данное тестовое задание необходимо создать репозиторий на GitHub.com. Каждое задание из теоретической и практической частей необходимо разместить в отдельной директории данного репозитория (название директории -- theory/practice-номер_задания).


Часть 1 (Теория)

В качестве ответа принимается md/txt файл с текстом

  const arr = [10, 12, 15, 21];

  for (var i = 0; i < arr.length; i++) {
    setTimeout (function() {
    console. log(arr[i] > 13 ? Good: ${arr[i]} : 'Bad: ${arr[i]} )
    }, 3000)
  }

Написать что выводит данный код. Предложите 2 варианта модификации кода, чтобы ответ был следующим: Bad: 10, Bad: 12, Good: 15, Good: 21 


Часть 2 (Практика)

В качестве ответа принимаются html/js/css файлы. (Как плюс -- выложить ответы на GitHub Pages и приложить ссылки в readme.md)

Сверстать модальное окно, без использования сторонних библиотек. Внутри модального окна реализовать форму. Форма не должна быть доступна к отправке, если поля не заполнены, либо форма не валидна. Реализовать мобильную адаптацию. Реализовать возможность открыть/закрыть модальное окно на странице. Как плюс использование БЭМ-методологии. Дизайн формы в figma https://www.figma.com/file/oH1XMoId33T2lGH0ZenGHx/Форма-для-тестового-задания
Реализовать JavaScript функцию, которая делает запрос к https://jsonplaceholder.typicode.com/posts и выводит на странице полученные данные в виде таблицы без использования сторонних библиотек. 
Реализовать таблицу на основе полученных данных с https://jsonplaceholder.typicode.com/posts без использования сторонних библиотек. Добавить возможность сортировки по столбцам (при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию). Над таблицей вывести поисковую строку. При вводе данных (не менее 3-х символов) в поисковую строку производить фильтрацию таблицы (строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются).
