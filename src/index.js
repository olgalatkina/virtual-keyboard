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

const eventCodes = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const keyCods = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
  [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
  [17, 91, 18, 32, 18, 37, 40, 39, 17],
];

const engKeyboard = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['Caps&nbsp;lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift'],
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

  keyCods.forEach((row, i) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard__row';

    row.forEach((key, index) => {
      const keyboardKey = document.createElement('button');
      keyboardKey.className = 'keyboard__key';
      keyboardKey.dataset.keyCode = key;
      keyboardKey.id = eventCodes[i][index];
      if (key === 13 || key === 17 || key === 91 || key === 18) {
        keyboardKey.className = 'keyboard__key keyboard__key_wide';
      }
      if (key === 16) {
        keyboardKey.className = 'keyboard__key keyboard__key_shift';
      }
      if (key === 32) {
        keyboardKey.className = 'keyboard__key keyboard__key_space';
      }
      keyboardKey.innerHTML = engKeyboard[i][index];
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

const capsLockHandler = () => {
  const buttons = document.querySelectorAll('button[id^="Key"]');
  let isCapsLock = false;

  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      if (!isCapsLock) {
        buttons.forEach((btn) => {
          const temp = btn;
          temp.innerHTML = btn.innerHTML.toUpperCase();
          isCapsLock = true;
        });
      } else {
        buttons.forEach((btn) => {
          const temp = btn;
          temp.innerHTML = btn.innerHTML.toLowerCase();
          isCapsLock = false;
        });
      }
    }
  });
};

const shiftHandler = () => {
  const firstRowEng = ['~', '!', '#', '$', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
  const firstLine = document.querySelectorAll('.keyboard__row:first-child > .keyboard__key');
  const buttons = document.querySelectorAll('button[id^="Key"]');

  const bracketLeft = document.querySelector('#BracketLeft');
  const bracketRight = document.querySelector('#BracketRight');
  const backslash = document.querySelector('#Backslash');
  const semicolon = document.querySelector('#Semicolon');
  const quote = document.querySelector('#Quote');
  const comma = document.querySelector('#Comma');
  const period = document.querySelector('#Period');
  const slash = document.querySelector('#Slash');

  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 16) {
      buttons.forEach((btn) => {
        const temp = btn;
        temp.innerHTML = btn.innerHTML.toUpperCase();
      });
      firstLine.forEach((button, i) => {
        const temp = button;
        temp.textContent = firstRowEng[i];
      });
      bracketLeft.textContent = '{';
      bracketRight.textContent = '}';
      backslash.textContent = '|';
      semicolon.textContent = ':';
      quote.textContent = '"';
      comma.textContent = '<';
      period.textContent = '>';
      slash.textContent = '?';
    }
  });

  document.addEventListener('keyup', () => {
    buttons.forEach((btn) => {
      const temp = btn;
      temp.innerHTML = btn.innerHTML.toLowerCase();
    });
    firstLine.forEach((button, i) => {
      const temp = button;
      temp.textContent = engKeyboard[0][i];
    });
    bracketLeft.textContent = '[';
    bracketRight.textContent = ']';
    backslash.textContent = '\\';
    semicolon.textContent = ';';
    quote.textContent = '\'';
    comma.textContent = ',';
    period.textContent = '.';
    slash.textContent = '/';
  });
};

const setFocusOnTextarea = () => {
  const textarea = document.querySelector('.textarea');
  textarea.focus();
};

const addKeyPressHandler = () => {
  document.addEventListener('keydown', (event) => {
    setFocusOnTextarea();
    document.querySelectorAll('.keyboard__key').forEach((key) => {
      key.classList.remove('active');
      if (+key.dataset.keyCode === event.keyCode && key.id === event.code) {
        // console.log(event);
        if (+key.dataset.keyCode === 18) {
          event.preventDefault();
          setFocusOnTextarea();
        }
        key.classList.add('active');
      }
    });
  });

  document.addEventListener('keyup', () => {
    document.querySelectorAll('.keyboard__key').forEach((key) => {
      key.classList.remove('active');
    });
  });
};

window.onload = () => {
  addStyleLink('./src/css/style.css');
  addStyleLink('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  createKeyboard();
  capsLockHandler();
  shiftHandler();
  setFocusOnTextarea();
  addKeyPressHandler();
};
