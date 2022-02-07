


const videoImg = document.querySelector('.video__img');//изображение
//кнопки
const solovey = document.getElementById("solovey");
const drozd = document.getElementById("drozd");
const javoronok = document.getElementById("javoronok");
const slavka = document.getElementById("slavka");
const zarynka = document.getElementById("zarynka");
const menu = document.querySelector(".menu");//обертка кнопок
const menuAudio = document.querySelectorAll('.menu__audio');// все audio в меню
const menuItem = document.querySelectorAll('.menu__item');
const play = document.querySelector('.play__btn');//кнопка play-pause

//слушаем есть ли клик по кнопке с ID. и выполняем ф-ю смены изображения
solovey.addEventListener("click", () => {
  videoImg.src = "img/solovey.jpg"; 
  return videoImg;
});
drozd.addEventListener("click", () => {
  videoImg.src = "img/drozd.jpg";
  return videoImg;
});
javoronok.addEventListener("click", () => {
  videoImg.src = "img/javoronok.jpg";
  return videoImg;
});
slavka.addEventListener("click", () => {
  videoImg.src = "img/slavka.jpg";
  return videoImg;
});
zarynka.addEventListener("click", () => {
  videoImg.src = "img/zarynka.jpg";
  return videoImg;
});

/* --------------play------------ */
//смена иконки
play.addEventListener("click", changeIconPlay);
function changeIconPlay() {
    play.classList.toggle('pause');
};


//проигрывания и остановки звука

const audio = document.getElementById('audio');
const audioSolovey = document.getElementById('audioSolovey');
const pauseBtn = document.querySelector('.play__btn.pause');

let playlist = ['forest.mp3', 'solovey.mp3', 'drozd.mp3', 'zarynka.mp3', 'javoronok.mp3'];
let treck = 0; // Переменная с индексом трека

// Событие перед загрузкой страницы
window.onload = function() {
  treck = 0; // Присваиваем переменной ноль
}
play.addEventListener("click", switchTreck);
//функции для переключения песен
function switchTreck () {
  // Включаем песню
  if (audio.paused === true || audio.paused === true && treck === 0){
    // Меняем значение атрибута src
    audio.src = './audio/' + playlist[0];
    // Назначаем время песни ноль
    audio.currentTime = 0;
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;//проигрывание с самого начала
  }
}
