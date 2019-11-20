//зададим произвольный массив из строковых элементов
const arr = ['aba', 'abra', 'brta', 'a', 'aac', '1', 's@d'];
let flag; //флаг, определяющий направление сортировки

//реализуем алгоритм быстрой сортировки (quick sort)
const sort = (unsortedArray, flag) => {

  let comparison; //реализуем простой алгоритм сравнения двух переменных

  if(flag) { //если направление сортировки по возрастанию
    comparison = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0;
  } else { // если сортировка по убыванию
    comparison = (a, b) => (a > b) ? -1 : (a < b) ? 1 : 0;
  }

  //скопируем исходный массив в новый массив sortedArray, который будем сортировать
  const sortedArray = [...unsortedArray];

  const recursiveSort = (start, end) => {
    if ((end - start) < 1) { //если массив пуст
      return; //он не будет отсортирован
    }
    const pivotValue = sortedArray[end]; //зададим опорный элемент,
    //с которым будем сравнивать остальные элементы массива
    let splitIndex = start; //переменная для обозначения индекса,
    //ограничивающего массивы меньших и больших элементов

    //сравниваем элементы массива с опорным элементом
    for (let i = start; i < end; i++) {
      const sort = comparison(sortedArray[i], pivotValue);

      if (sort === -1) { //если значение, в зависимости от направления
        //сортировки, меньше или больше значения опорного элемента
        if (splitIndex !== i) {
          //также если элемент справа не тот, меняем их местами
          const temp = sortedArray[splitIndex];
          sortedArray[splitIndex] = sortedArray[i];
          sortedArray[i] = temp;
        }

        splitIndex++; //увеличиваем индекс элемента-разделителя на единицу
      }
    }

    //указываем новое положение опорного элемента
    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivotValue;

	//вызываем функцию сортировки для каждого полученного подмассива
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };

  //сортируем весь массив
  recursiveSort(0, unsortedArray.length - 1);
  return sortedArray;
};

//выводим в консоль результаты вызова функции
console.log(sort(arr, true));
console.log(sort(arr, false));
