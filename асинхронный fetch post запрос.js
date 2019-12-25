const requestURL = 'https://jsonplaceholder.typicode.com/users'; //адрес кудаотправляем запрос

function sendRequest(method, URL, body = null) { //создадим функцию для отправки и обработки XMLHttpRequest запросов
  const headers = { //создадим объект headers
    'Content-Type': 'application/json' //укажем headers
  }
  return fetch(URL, { //создадим fetch запрос
    method: method, //укажем метод запроса
    body: JSON.stringify(body), //укажем формат данных
    headers: headers //укажем header
  }).then(response => {
    if(response.ok) { //если код ответа сервера 200-299
      return response.json(); //вернём данные в формате json
    }
    return response.json().then(err => { //если есть ошибки
      const e = new Error('Что-то пошло не так'); //создадим новый объект ошибки
      throw e; //выведем ошибку
    })
  })
}
const body = { //создадим объект body
  name: 'Roman',
  age: 30
}
sendRequest('POST', requestURL, body) //отправим POST запрос с указанными параметрами
  .then(data => console.log(data)) //выведем полученные данные
  .catch(err => console.log(err)); //если ест ошибки, выведем их в консоль
