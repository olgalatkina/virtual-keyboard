const addStyleLink = (cssLink) => {
  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssLink;
  head.append(link);
};

const addElementToDom = (element) => {
  const body = document.querySelector('body');
  body.append(element);
};

const keyboardRows = [
  [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace'],
  ['Tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 'Del'],
  ['Caps&nbsp;Lock', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 'Enter'],
  ['Shift', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, '&uarr;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
];

const createKeyboard = () => {
  const section = document.createElement('section');
  section.className = 'container';

  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  textarea.setAttribute('id', 'output');
  section.append(textarea);
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  section.append(keyboard);

  keyboardRows.forEach((row) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard__row';

    row.forEach((key) => {
      const keyboardKey = document.createElement('button');
      keyboardKey.className = 'keyboard__key';
      if (typeof key === 'number') {
        keyboardKey.innerHTML = String.fromCharCode(key);
      } else {
        if (key === 'Enter' || key === 'Ctrl' || key === 'Win' || key === 'Alt') {
          keyboardKey.className = 'keyboard__key keyboard__key_wide';
        }
        if (key === 'Shift') {
          keyboardKey.className = 'keyboard__key keyboard__key_shift';
        }
        if (key === 'Space') {
          keyboardKey.className = 'keyboard__key keyboard__key_space';
        }
        keyboardKey.innerHTML = key;
      }
      keyboardRow.append(keyboardKey);
    });

    keyboard.append(keyboardRow);
  });

  const text = document.createElement('p');
  text.className = 'keyboard__text';
  text.innerHTML = 'Win + Space - change language on Win keyboard';
  section.append(text);

  addElementToDom(section);
};

window.onload = () => {
  addStyleLink('./src/css/style.css');
  addStyleLink('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  createKeyboard();
};
