### Тестовая задача.

Необходимо реализовать отображение списка пользователей в двух режимах, список и
плитка, с возможностью переключения между ними.

### Посмотреть онлайн [тут](https://shigatsi.github.io/telecom-test/)

### Запуск проекта:

1. клонировать репозиторий,
2. в корневой папке проекта выполнить команду `npm install`
3. запустить `npm start`

### Вопрос.

Как избавиться от переменной that в этом примере? То есть не сохранять явно
контекст родителя в переменную.

```sh
    function parent() {
        var that = this;
        that.multiplier = 3;
        return [33, 77, 99, 81, 55].map(function(I) { return I * that.multiplier});
    }
```

### Ответ

воспользоваться bind

```sh
    function parent() {
        return [33, 77, 99, 81, 55].map((I) => {
            return  I * this.multiplier
        });
    }

    parent.bind({multiplier: 3})();
```
