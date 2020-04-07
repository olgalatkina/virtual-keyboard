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
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['Caps&nbsp;lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
];

const ruKeyboard = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['Caps&nbsp;lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
];

const languageBase = {
  ru: ruKeyboard,
  en: engKeyboard,
};

const createKeyboard = (langCode) => {
  const oldSection = document.querySelector('section');
  if (!oldSection) {
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
        if (keyboardKey.id === 'ShiftLeft' || keyboardKey.id === 'ControlLeft') {
          keyboardKey.classList.add('left-alignment');
        }
        if (keyboardKey.id === 'ShiftRight' || keyboardKey.id === 'ControlRight') {
          keyboardKey.classList.add('right-alignment');
        }
        keyboardKey.innerHTML = languageBase[langCode][i][index];
        keyboardRow.append(keyboardKey);
      });

      keyboard.append(keyboardRow);
    });

    const text = document.createElement('p');
    text.className = 'keyboard__text';
    text.innerHTML = 'Ctrl + Alt - change language on Win keyboard';
    section.append(text);

    addElementToDom(section);
  } else {
    document.querySelector('.keyboard').remove();

    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    oldSection.insertBefore(keyboard, document.querySelector('.keyboard__text'));

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
        if (keyboardKey.id === 'ShiftLeft' || keyboardKey.id === 'ControlLeft') {
          keyboardKey.classList.add('left-alignment');
        }
        if (keyboardKey.id === 'ShiftRight' || keyboardKey.id === 'ControlRight') {
          keyboardKey.classList.add('right-alignment');
        }
        keyboardKey.innerHTML = languageBase[langCode][i][index];
        keyboardRow.append(keyboardKey);
      });

      keyboard.append(keyboardRow);
    });
  }
};

const context = {
  isCapsLock: false,
};

const capsLockHandler = (isPressed) => {
  const currLang = localStorage.getItem('lang');
  const buttons = document.querySelectorAll('button[id^="Key"]');

  const backquote = document.querySelector('#Backquote');
  const bracketLeft = document.querySelector('#BracketLeft');
  const bracketRight = document.querySelector('#BracketRight');
  const semicolon = document.querySelector('#Semicolon');
  const quote = document.querySelector('#Quote');
  const comma = document.querySelector('#Comma');
  const period = document.querySelector('#Period');

  if (!context.isCapsLock) {
    context.isCapsLock = isPressed;
    buttons.forEach((btn) => {
      const temp = btn;
      temp.innerText = btn.innerText.toUpperCase();
      if (currLang === 'ru') {
        backquote.textContent = 'Ё';
        bracketLeft.textContent = 'Х';
        bracketRight.textContent = 'Ъ';
        semicolon.textContent = 'Ж';
        quote.textContent = 'Э';
        comma.textContent = 'Б';
        period.textContent = 'Ю';
      }
    });
  } else {
    context.isCapsLock = !isPressed;
    buttons.forEach((btn) => {
      const temp = btn;
      temp.innerText = btn.innerText.toLowerCase();
      if (currLang === 'ru') {
        backquote.textContent = 'ё';
        bracketLeft.textContent = 'х';
        bracketRight.textContent = 'ъ';
        semicolon.textContent = 'ж';
        quote.textContent = 'э';
        comma.textContent = 'б';
        period.textContent = 'ю';
      }
    });
  }
};

const shiftHandler = (isPressed) => {
  const currLang = localStorage.getItem('lang');
  const symbolsBase = {
    en: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ru: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  };
  const firstLine = document.querySelectorAll('.keyboard__row:first-child > .keyboard__key');
  const buttons = document.querySelectorAll('button[id^="Key"]');

  const backquote = document.querySelector('#Backquote');
  const bracketLeft = document.querySelector('#BracketLeft');
  const bracketRight = document.querySelector('#BracketRight');
  const backslash = document.querySelector('#Backslash');
  const semicolon = document.querySelector('#Semicolon');
  const quote = document.querySelector('#Quote');
  const comma = document.querySelector('#Comma');
  const period = document.querySelector('#Period');
  const slash = document.querySelector('#Slash');

  if (isPressed) {
    buttons.forEach((btn) => {
      const temp = btn;
      temp.innerHTML = btn.innerHTML.toUpperCase();
    });
    firstLine.forEach((button, i) => {
      const temp = button;
      temp.textContent = symbolsBase[currLang][i];
    });
    backquote.textContent = currLang === 'en' ? '~' : 'Ё';
    bracketLeft.textContent = currLang === 'en' ? '{' : 'Х';
    bracketRight.textContent = currLang === 'en' ? '}' : 'Ъ';
    backslash.textContent = currLang === 'en' ? '|' : '/';
    semicolon.textContent = currLang === 'en' ? ':' : 'Ж';
    quote.textContent = currLang === 'en' ? '"' : 'Э';
    comma.textContent = currLang === 'en' ? '<' : 'Б';
    period.textContent = currLang === 'en' ? '>' : 'Ю';
    slash.textContent = currLang === 'en' ? '?' : ',';
  } else if (!isPressed) {
    buttons.forEach((btn) => {
      const temp = btn;
      temp.innerHTML = btn.innerHTML.toLowerCase();
    });
    firstLine.forEach((button, i) => {
      const temp = button;
      temp.textContent = languageBase[currLang][0][i];
    });
    backquote.textContent = currLang === 'en' ? '`' : 'ё';
    bracketLeft.textContent = currLang === 'en' ? '[' : 'х';
    bracketRight.textContent = currLang === 'en' ? ']' : 'ъ';
    backslash.textContent = '\\';
    semicolon.textContent = currLang === 'en' ? ';' : 'ж';
    quote.textContent = currLang === 'en' ? '\'' : 'э';
    comma.textContent = currLang === 'en' ? ',' : 'б';
    period.textContent = currLang === 'en' ? '.' : 'ю';
    slash.textContent = currLang === 'en' ? '/' : '.';
  }
};

const setFocusOnTextarea = () => {
  const textarea = document.querySelector('.textarea');
  textarea.focus();
};

const printToTextarea = (clickedKey) => {
  const textarea = document.querySelector('.textarea');
  textarea.value += clickedKey.textContent;
};

const setLanguage = (langCode) => {
  if (langCode) {
    localStorage.setItem('lang', langCode);
    createKeyboard(langCode);
  } else {
    const oldLangCode = localStorage.getItem('lang'); // en
    const newLangCode = ['en', 'ru'].join('').replace(oldLangCode, '');
    localStorage.setItem('lang', newLangCode);
    createKeyboard(newLangCode);
  }
};

const pressedKeys = {};

const addKeyPressHandler = () => {
  const textarea = document.querySelector('.textarea');
  document.addEventListener('keydown', (event) => {
    setFocusOnTextarea();
    const buttonContainer = document.querySelector(`#${event.code}`);
    if (buttonContainer) {
      buttonContainer.classList.add('active');
      pressedKeys[event.code] = buttonContainer;
      if (event.code.match(/Alt/)) event.preventDefault();
      if (event.code.match(/Tab/)) textarea.value += '\t';
      if (event.code.match(/CapsLock/i)) capsLockHandler(true);
      if (event.code.match(/Shift/i)) shiftHandler(true);
      if (event.code.match(/Alt/i) && event.ctrlKey) {
        event.preventDefault();
        setLanguage();
        setFocusOnTextarea();
      }
      if (!event.code.match(/Alt|Shift|Enter|Backspace|Tab|Delete|Caps|Control|Arrow|MetaLeft|Space/)) {
        event.preventDefault();
        printToTextarea(buttonContainer);
      }
    }
  });

  document.addEventListener('keyup', (event) => {
    if (pressedKeys[event.code]) pressedKeys[event.code].classList.remove('active');
    if (event.code.match(/Shift/i)) shiftHandler(false);
  });
};

const addActive = () => {
  document.addEventListener('mousedown', (event) => {
    setFocusOnTextarea();
    if (event.target.classList.contains('keyboard__key')) {
      event.target.classList.add('active');
    }
  });

  document.addEventListener('mouseup', () => {
    document.querySelectorAll('.keyboard__key').forEach((key) => {
      key.classList.remove('active');
    });
  });
};

const addClickHandler = () => {
  const textarea = document.querySelector('.textarea');
  const specialKeys = [8, 9, 13, 16, 17, 18, 20, 32, 37, 38, 39, 40, 46, 91];

  document.querySelector('.container').addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('keyboard__key')) {
      const clickedKey = evt.target;
      if (!specialKeys.includes(+clickedKey.dataset.keyCode)) {
        printToTextarea(clickedKey);
        setFocusOnTextarea();
      }
      if (clickedKey.id === 'Backspace') {
        textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
        setFocusOnTextarea();
      }
      if (clickedKey.id === 'CapsLock') {
        capsLockHandler(true);
      }
      if (clickedKey.id === 'Space') {
        textarea.value += ' ';
        setFocusOnTextarea();
      }
      if (clickedKey.id === 'Del') {
        textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
        setFocusOnTextarea();
      }
      if (clickedKey.id === 'Enter') {
        textarea.value += '\n';
        setFocusOnTextarea();
      }
      if (clickedKey.id === 'Tab') {
        textarea.value += '\t';
        setFocusOnTextarea();
      }
      if (+clickedKey.dataset.keyCode === 16) {
        shiftHandler(true);
      }
      if (clickedKey.id === 'ArrowLeft') {
        textarea.setSelectionRange(textarea.selectionStart - 1, textarea.selectionEnd - 1);
        setFocusOnTextarea();
      }
      if (clickedKey.id === 'ArrowRight') {
        textarea.setSelectionRange(textarea.selectionStart + 1, textarea.selectionEnd + 1);
        setFocusOnTextarea();
      }
      if (clickedKey.id === 'ArrowUp') {
        // printToTextarea(clickedKey);
        textarea.setSelectionRange(textarea.selectionStart = 0, textarea.selectionEnd = 0);
        setFocusOnTextarea();
      }
      if (clickedKey.id === 'ArrowDown') {
        // printToTextarea(clickedKey);
        const start = textarea.value.length;
        const end = textarea.value.length;
        textarea.setSelectionRange(textarea.selectionStart = start, textarea.selectionEnd = end);
        setFocusOnTextarea();
      }
    }
  });

  document.querySelector('.container').addEventListener('mouseup', (evt) => {
    if (+evt.target.dataset.keyCode === 16) shiftHandler(false);
  });
};

window.onload = () => {
  addStyleLink('./src/css/style.css');
  addStyleLink('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  setLanguage('en');
  setFocusOnTextarea();
  addKeyPressHandler();
  addActive();
  addClickHandler();
};
