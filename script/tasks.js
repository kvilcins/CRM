'use strict';

{
  const rain = Math.round(Math.random());

  if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
  } else {
    console.log('Дождя нет!');
  }
}

{
  const mathExam = +prompt('Введите количество баллов по математике', '');
  const langExam = +prompt('Введите количество баллов по русскому языку', '');
  const informaticsExam = +prompt('Введите количество баллов по информатике', '');

  if (mathExam + langExam + informaticsExam >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
  } else {
    console.log('Вы не прошли на бюджет :(');
  }
}

{
  const cash = +prompt('Сколько денег вы хотите снять?', '');

  if (cash % 100 === 0) {
    console.log('Возьмите деньги.')
  } else {
    console.log('Минимальный номинал - 100р. Введите сумму, кратную 100.')
  }
}
