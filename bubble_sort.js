const bubbleSort = arr => {
  //проходим по всему массиву
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-1-i; j++) {
      //если следующий элемент больше текущего, меняем их местами
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr; //возвращаем отсортированный массив
}
let arr = [2,4,12,3,1,8,7];
bubbleSort(arr);
