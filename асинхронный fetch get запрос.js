const requestURL = 'https://jsonplaceholder.typicode.com/users'; //адрес куда отправляем запрос

function sendRequest(method, URL) { //создадим функцию для отправки и обработки fetch запросов
  return fetch(URL).then(response => { //создадим метод fetch
    return response.json(); //вернём полученные данные в формате JSON
  })
}
sendRequest('GET', requestURL) //отправим GET запрос с указанными параметрами
  .then(data => console.log(data)) //выведем полученные данные
  .catch(err => console.log(err)); //если ест ошибки, выведем их в консоль
