// let elem = document.querySelector('.example')
// console.log (elem.offsetTop)
// console.log (elem.offsetLeft)
// console.log (elem.clientTop)
// console.log (elem.clientLeft)
// console.log (elem.offsetWidth)
// console.log (elem.clientWidth)
// console.log (elem.offsetHeight)
// console.log (elem.clientHeight)
// console.log (elem.scrollTop)
// console.log (elem.)


// 1 зд
// document.getElementById('elem').classList.add('www');
// document.getElevar elem = document.getElementById('elem');
// if (elem.classList.contains('www')) 
// {
//     elem.classList.remove('www');
// }
// else {
//     elem.classList.add('www');
// }
// var hasClass = document.getElementById('elem').classList.contains('www');
// console.log(hasClass);
// var classCount = document.getElementById('elem').classList.length;
// console.log(classCount);
// var elem = document.getElementById('elem');
// for (var i = 0; i < elem.classList.length; i++) {
//     alert(elem.classList[i]);
// }

// 2 зд
// var elem = document.getElementById('elem');

// 3 зд
// document.getElementById('elem').addEventListener('click', function() {
//     console.log(this.tagName);
// });
// document.getElementById('elem').addEventListener('click', function() {
//     console.log(this.tagName.toLowerCase());
// });
// var elems = document.getElementsByClassName('www');
// for (var i = 0; i < elems.length; i++) {
//     elems[i].textContent += elems[i].tagName.toLowerCase();
// }
// 4 зд
// var ol = document.querySelector('ol');
// var li = document.createElement('li');
// li.textContent = 'пункт';
// ol.appendChild(li);

// var ul = document.querySelector('ul');
// var array = ['элемент1', 'элемент2', 'элемент3'];

// for (var i = 0; i < array.length; i++) {
//     var li = document.createElement('li');
//     li.textContent = array[i];
//     ul.appendChild(li);
// }
// 5 зд
// var elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');

// var elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterend', '<span>!!!</span>');

// var elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');

// var elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');
// 6 зд
// document.querySelector('button').addEventListener('click', function() {
//     var parent = document.getElementById('parent');
//     var child = document.getElementById('child');
//     parent.removeChild(child);
// });

// document.querySelector('button').addEventListener('click', function() {
//     var ol = document.querySelector('ol');
//     ol.removeChild(ol.lastElementChild);
// });

// document.getElementById('element').addEventListener('click', function() {
//     this.remove();
// });

// document.querySelector('ol').addEventListener('click', function(e) {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// });

// document.querySelector('button').addEventListener('click', function() {
//     var input = document.querySelector('input');
//     var clone = input.cloneNode(true); 
//     input.parentNode.appendChild(clone);
// });

// потомки
// var elem = document.getElementById('elem');
// var firstChild = elem.firstElementChild;
// firstChild.style.color = 'red';

// var elem = document.getElementById('elem');
// var lastChild = elem.lastElementChild;
// lastChild.style.color = 'red';

// var elem = document.getElementById('elem');
// var children = elem.children;
// for (var i = 0; i < children.length; i++) {
//     children[i].textContent += '!';
// }

// соседи
// var elem = document.getElementById('elem');
// var previousSibling = elem.previousElementSibling;
// if (previousSibling) {
//     previousSibling.textContent += '!';
// }

// var elem = document.getElementById('elem');
// var nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//     nextSibling.textContent += '!';
// }

// var elem = document.getElementById('elem');
// var nextNextSibling = elem.nextElementSibling.nextElementSibling;
// if (nextNextSibling) {
//     nextNextSibling.textContent += '!';
// }

// родители
// var elem = document.getElementById('elem');
// var parent = elem.parentElement;
// parent.style.color = 'red';

// var elem = document.getElementById('elem');
// var grandparent = elem.parentElement.parentElement;
// if (grandparent) {
//     grandparent.style.color = 'red';
// }

// На величину границы
// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var borderTopWidth = elem.style.borderTopWidth;
//     console.log(borderTopWidth);
// });

// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var borderLeftWidth = elem.style.borderLeftWidth;
//     console.log(borderLeftWidth);
// });

// На полный размер элемента
// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var width = elem.offsetWidth;
//     console.log(width);
// });

// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var height = elem.offsetHeight;
//     console.log(height);
// });

// На размер элемента без границ, но с padding
// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var width = elem.clientWidth;
//     console.log(width);
// });

// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var height = elem.clientHeight;
//     console.log(height);
// });

// Работа с getComputedStyle
// var elem = document.getElementById('elem');
// var style = window.getComputedStyle(elem);

// var width = parseFloat(style.width);
// var height = parseFloat(style.height);

// console.log('Ширина: ' + width + 'px');
// console.log('Высота: ' + height + 'px');

// Прокрутка элемента
// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     console.log(elem.scrollTop);
// });

// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     console.log(elem.scrollLeft);
// });

// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     elem.scrollTop = 100;
// });

// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     elem.scrollTop += 100;
// });

// Прокрутка элемента
// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     console.log(elem.scrollHeight);
// });

// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     console.log(elem.scrollWidth);
// });

// document.querySelector('button').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight - 100;
// });

// Прокрутка страницы
// document.querySelector('button').addEventListener('click', function() {
//     console.log(window.pageYOffset);
// });

// document.querySelector('button').addEventListener('click', function() {
//     console.log(window.pageXOffset);
// });
// Прокрутка страницы
// document.querySelector('button').addEventListener('click', function() {
//     window.scrollTo(300, 500);
// });

// document.querySelector('button').addEventListener('click', function() {
//     window.scrollBy(0, 300);
// });

// Практика
// document.querySelector('button').addEventListener('click', function() {
//     window.scrollTo(0, document.documentElement.scrollHeight);
// });

// document.querySelector('button').addEventListener('click', function() {
//     window.scrollBy(0, 400);
// });

// document.querySelector('button').addEventListener('click', function() {
//     if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
//         window.scrollTo(0, 100);
//     }
// });

// document.getElementById('elem').addEventListener('click', function() {
//     this.style.width = (this.offsetWidth * 2) + 'px';
//     this.style.height = (this.offsetHeight * 2) + 'px';
// });