const arr = ['a@d', 'xaddv', 'ddcv', 'd', 55555]; //исходный массив
const str = 'dd'; //искомый элемент

const search = (str, sub) => { //функция поиска подстроки
  str = "" + str; //преобразуем первый аргумент в строку
  sub = "" + sub; //преобразуем второй аргумент в строку

  //если длина подстроки больше длины исходной строки
  if (sub.length > str.length) {
    return false; //возвращаем false
  }

  //определим количество необходимых проверок
  let check = str.length - sub.length + 1;

  //запустим цикл проверок
  for (let i = 0; i < check; i++) {
    let match = 0; //счётчик совпадений
    //перебираем каждый символ исходной строки, сравнивая его с символвами подстроки
    for (let j = 0; j < sub.length; j++) {
      if (str[i+j] !== sub[j]){ //если символ не совпадает
        break; //прерываем выполнение цикла
      } else {
        match++; //иначе увеличиваем счетчик совпадений на 1
      }
    }
    if (match === sub.length) { //если кол-во совпадений равно длине искомой строки
      return true; //возвращаем true
    }
  }
  return false; //иначе возвращаем false
}

const indexList = []; //создадим пустой массив
//вызываем для каждого элемента массива функцию search
for (let i = 0; i < arr.length; i++) {
  if (search(arr[i], str)) { //если элемент массива совпадает с искомой строкой
    indexList.push(i); //добавим его номер в массив
  }
}
  console.log(indexList); //вернём массив из номеров элементов,
  //в которых пристутствует искомая строка

search(arr, str); //вызовем функцию
