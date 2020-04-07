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

const capsLockHandler = () => {
  const buttons = document.querySelectorAll('button[id^="Key"]');

  document.addEventListener('keyup', (event) => {
    // event.preventDefault();
    if (event.code === 'CapsLock') {
      if (!context.isCapsLock) {
        context.isCapsLock = true;
        buttons.forEach((btn) => {
          const temp = btn;
          temp.innerText = btn.innerText.toUpperCase();
        });
      } else {
        context.isCapsLock = false;
        buttons.forEach((btn) => {
          const temp = btn;
          temp.innerText = btn.innerText.toLowerCase();
        });
      }
    }
  });
};

const shiftHandler = (isPressed) => {
  const currLang = localStorage.getItem('lang');
  const symbolsBase = {
    en: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ru: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  };
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

  if (isPressed) {
    buttons.forEach((btn) => {
      const temp = btn;
      temp.innerHTML = btn.innerHTML.toUpperCase();
    });
    firstLine.forEach((button, i) => {
      const temp = button;
      temp.textContent = symbolsBase[currLang][i];
    });
    bracketLeft.textContent = '{';
    bracketRight.textContent = '}';
    backslash.textContent = '|';
    semicolon.textContent = ':';
    quote.textContent = '"';
    comma.textContent = '<';
    period.textContent = '>';
    slash.textContent = '?';
  } else if (!isPressed) {
    buttons.forEach((btn) => {
      const temp = btn;
      temp.innerHTML = btn.innerHTML.toLowerCase();
    });
    firstLine.forEach((button, i) => {
      const temp = button;
      temp.textContent = languageBase[currLang][0][i];
    });
    bracketLeft.textContent = '[';
    bracketRight.textContent = ']';
    backslash.textContent = '\\';
    semicolon.textContent = ';';
    quote.textContent = '\'';
    comma.textContent = ',';
    period.textContent = '.';
    slash.textContent = '/';
  }
};

const clickOnShift = () => {
  const firstRowEng = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
  const firstRowRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];
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

  document.addEventListener('mousedown', (event) => {
    const clickedKey = event.target;
    if (+clickedKey.dataset.keyCode === 16) {
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

  document.addEventListener('mouseup', () => {
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

const printToTextarea = (clickedKey) => {
  const textarea = document.querySelector('.textarea');
  textarea.value += clickedKey.textContent;
};

const setLanguage = (langCode) => {
  if (langCode) {
    localStorage.setItem('lang', langCode);
    createKeyboard(langCode);
  } else {
    const langCode = localStorage.getItem('lang'); // en
    const newLang = ['en', 'ru'].join('').replace(langCode, '');
    localStorage.setItem('lang', newLang);
    createKeyboard(newLang);
  }
};

const pressedKeys = {};

const addKeyPressHandler = () => {
  document.addEventListener('keydown', (event) => {
    setFocusOnTextarea();
    const buttonContainer = document.querySelector(`#${event.code}`);
    if (buttonContainer) {
      buttonContainer.classList.add('active');
      pressedKeys[event.code] = buttonContainer;
      if (event.code.match(/Shift/i)) shiftHandler(true);
      if (event.code.match(/Alt/i) && event.ctrlKey) setLanguage();
      if (!event.code.match(/Alt|Shift|Enter|Backspace|Tab|Delete|Caps|Control|Arrow|Win|Space/)) {
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
  const buttons = document.querySelectorAll('button[id^="Key"]');
  const specialKeys = [8, 9, 13, 16, 17, 18, 20, 32, 37, 38, 39, 40, 46, 91];

  document.querySelector('.container').addEventListener('click', (evt) => {
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
        if (!context.isCapsLock) {
          context.isCapsLock = true;
          buttons.forEach((btn) => {
            const temp = btn;
            temp.innerHTML = btn.innerHTML.toUpperCase();
          });
        } else {
          context.isCapsLock = false;
          buttons.forEach((btn) => {
            const temp = btn;
            temp.innerHTML = btn.innerHTML.toLowerCase();
          });
        }
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
        clickOnShift();
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
};

// const setLanguage = (langCode) => {
//   if (langCode) {
//     localStorage.setItem('lang', langCode);
//     createKeyboard(langCode);
//   } else {
//     const langCode = localStorage.getItem('lang'); // en
//     const newLang = ['en', 'ru'].join('').replace(langCode, '');
//     localStorage.setItem('lang', newLang);
//     createKeyboard(newLang);
//   }
// };

window.onload = () => {
  addStyleLink('./src/css/style.css');
  addStyleLink('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  setLanguage('en');
  capsLockHandler();

  setFocusOnTextarea();
  addKeyPressHandler();
  addActive();
  addClickHandler();
};
