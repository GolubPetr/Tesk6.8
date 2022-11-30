const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль.');
});

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
  alert('Выводит сообщение в этом окне');
});

const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
  alert('Отображает диалоговое окно с возможностью введения текста');
});


