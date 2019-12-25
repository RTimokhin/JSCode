const requestURL = 'https://jsonplaceholder.typicode.com/users'; //адрес кудаотправляем запрос

function sendRequest(method, URL, body = null) { //создадим функцию для отправки и обработки XMLHttpRequest запросов
  return new Promise( (resolve, reject) => { //создадим новый объект promise
    const xhr = new XMLHttpRequest(); //создадим новый объект XMLHttpRequest
    xhr.open(method, URL); //сконфигурируем запрос
    xhr.responseType = 'json'; //преобразует получ данные в JSON
    xhr.setRequestHeader('Content-Type', 'application/json'); //явно укажем, что отправляем данные в формате JSON
    xhr.onload = () => { //добавим обработчик выполнения запроса
      if(xhr.response >= 400) { //если статус ответа сервера 400 или больше
        reject(xhr.response); //выведем сообщение с ошибкой
      } else {
        resolve(xhr.response); //в случае успешного выполнения запроса, выведем полученные данные
      }
    }
    xhr.onerror = () => { //обработаем ошибки, если лни есть
      reject(xhr.response); //в случае ошибки, выведем их в консоль
    }
    xhr.send(JSON.stringify(body)); //отсылаем запрос
  })
}
const body = {
  name: 'Roman',
  age: 30
}
sendRequest('POST', requestURL, body)
  .then(data => console.log(data)) //выведем полученные данные
  .catch(err => console.log(err)); //если ест ошибки, выведем их в консоль
