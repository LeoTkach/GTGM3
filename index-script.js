
// Функція для розфарбування тексту та для виведення тексту з різним розміром шрифту 
function displayText(text, fontSize) {
  var div = document.getElementById('textForm');
  var p = document.createElement('p');
  p.style.fontSize = fontSize + 'px';

  // Отримуємо список кольорів
  var colors = ['#BFAC8F', '#97a328', '#8FBC8F', '#CD5C5C', '#4169E1'];

  // Додаємо кожну букву з заданим кольором
  for (var i = 0; i < text.length; i++) {
    var span = document.createElement('span');
    span.textContent = text[i];
    span.style.color = colors[i % colors.length]; // Вибір кольору по модулю від індексу
    p.appendChild(span);
  }

  div.appendChild(p);
}



document.getElementById('textForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var userText = document.getElementById('userText').value;
  var fontSize = document.getElementById('fontSize').value;
  displayText(userText, fontSize);
});






// Створюємо зображення і додаємо його до тіла документа
var img = document.createElement('img');
img.src = 'Sun.jpg'; 
img.style.position = 'absolute';
img.width = img.naturalWidth / 20;
img.height = img.naturalHeight / 20;
document.body.appendChild(img);

// Функція для переміщення зображення
function moveImage() {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  img.style.left = x + 'px';
  img.style.top = y + 'px';
}

setInterval(moveImage, 1000);


// Функція для оновлення часу
function updateClock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  var timeString = hours + ':' + minutes + ':' + seconds;
  var clockElement = document.getElementById('text-clock');
  clockElement.textContent = timeString;
  clockElement.style.color = '#BFAC8F';
}

setInterval(updateClock, 1000);

updateClock();


// Знаходження на сторінці всіч <p> і замінення їх розміра на 15px
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAttribute('style', 'font-size: 15px;');
}


// Створення зникаючого об'єкта
function fadeOut(element) {
  var opacity = 1;

  var fade = setInterval(function() {
    if (opacity <= 0) {
      clearInterval(fade);
      element.style.display = 'none';
    }
    element.style.opacity = opacity;
    opacity -= 0.05;
  }, 250);
}

setTimeout(function() {
  fadeOut(document.getElementById('fade-container'));
}, 4000);




// Зміна кольору квадрату
const colorList = document.getElementById('color-list');
const colorBox = document.getElementById('color-box');
function changeColor(color) {
  var colorBox = document.getElementById('color-box');
  colorBox.style.backgroundColor = color;
}


// виведення поточних координат курсору мишки і код натиснутоъ клавіші на клавіатурі
document.addEventListener('DOMContentLoaded', function() {
  var infoDiv = document.getElementById('info');
  var mouseCoordinatesSpan = document.getElementById('mouse-coordinates');
  var keyCodeSpan = document.getElementById('key-code');

  // Відстеження руху миші
  document.addEventListener('mousemove', function(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    mouseCoordinatesSpan.textContent = '(' + mouseX + ', ' + mouseY + ')';
  });

  // Відстеження натискання клавіші
  document.addEventListener('keydown', function(event) {
    keyCodeSpan.textContent = event.key;
  });
});




/// Функції для роботи з cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

// Зміна розміру тексту та збереження у cookie
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
let fontSize = parseInt(getCookie('fontSize')) ;
let headerSizes = {
    h1: 36,
    h2: 36,
    h3: 36
};

function applyFontSize() {
    // Зміна розміру для всіх елементів
    const elements = document.querySelectorAll('body, body *');
    elements.forEach(element => {
        element.style.fontSize = fontSize + 'px';
    });

    // Зміна розміру для заголовків
    document.querySelectorAll('h1').forEach(h1 => h1.style.fontSize = headerSizes.h1 + 'px');
    document.querySelectorAll('h2').forEach(h2 => h2.style.fontSize = headerSizes.h2 + 'px');
    document.querySelectorAll('h3').forEach(h3 => h3.style.fontSize = headerSizes.h3 + 'px');
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

applyFontSize();

increaseBtn.addEventListener('click', () => {
    fontSize += 2;
    headerSizes.h1 += 4; // Збільшити розмір заголовків більше, ніж основний текст
    headerSizes.h2 += 3;
    headerSizes.h3 += 2;
    applyFontSize();
    setCookie('fontSize', fontSize, 7);
    setCookie('headerSizes', JSON.stringify(headerSizes), 7);
});

decreaseBtn.addEventListener('click', () => {
    fontSize -= 2;
    headerSizes.h1 -= 4; // Зменшити розмір заголовків більше, ніж основний текст
    headerSizes.h2 -= 3;
    headerSizes.h3 -= 2;
    applyFontSize();
    setCookie('fontSize', fontSize, 7);
    setCookie('headerSizes', JSON.stringify(headerSizes), 7);
});

// Відновлення розмірів з cookie
const savedHeaderSizes = getCookie('headerSizes');
if (savedHeaderSizes) {
    headerSizes = JSON.parse(savedHeaderSizes);
}
applyFontSize();



// Отримання інформації про реферера
const referrerElement = document.getElementById('referrer');
const referrer = document.referrer || 'прямого переходу';
referrerElement.textContent = referrer;

// Отримання інформації про версію браузера
const browserVersionElement = document.getElementById('browser-version');
const userAgent = navigator.userAgent;
const browserVersion = userAgent.match(/(?:Version|Edge|Firefox|Chrome|Safari|Opera|MSIE)\/*[\d.]+/)[0];
browserVersionElement.textContent = browserVersion;





document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо елемент таймера
  const timerElement = document.getElementById('timer');

  // Початкова кількість секунд
  let seconds = 20;

  // Функція зворотного відліку
  function countdown() {
    if (seconds > 0) {
      timerElement.textContent = seconds;
      seconds--;
    } else {
      clearInterval(timerInterval); // Зупиняємо відлік, якщо час вийшов
      // Показуємо нове зображення
      showNewImage();
    }
  }

  // Запускаємо зворотній відлік кожну секунду
  const timerInterval = setInterval(countdown, 1000);

  // Функція для показу нового зображення
  function showNewImage() {
    const imageContainer = document.getElementById('image-container');
    const newImage = document.createElement('img');
    newImage.src = 'Sun.jpg'; // Замість цього URL вкажіть потрібний вам
    newImage.alt = 'Sun';
    newImage.classList.add('image');
    imageContainer.appendChild(newImage);
  }
});


