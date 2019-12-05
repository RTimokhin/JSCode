//исходный пример
const f = (age, sex) => {
  if (age >= 18) {
    if (sex === 'male') {
      return 'yes';
    } else if (sex === 'female') {
      return 'no';
    }
  }
  return null;
}

//избавимся от вложенности if, тем самым понизив уровень вложенности функции
//это достигается благодаря выражению guard expression, в данном примере это проверка на соответсвие возрасту
const f = (age, sex) => {
  if (age < 18) {
    return null;
  }
  if (sex === 'male') {
    return 'yes';
  } else if (sex === 'female') {
    return 'no';
  }
}
